import { MatIconModule } from '@angular/material/icon';
import { Component, inject, input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { DataService, MusicRec } from '../../service/data-service/data.service';

@Component({
  selector: 'app-song-card',
  standalone: true,
  imports: [MatCardModule, RouterModule, MatIconModule],
  templateUrl: './song-card.component.html',
  styleUrl: './song-card.component.css'
})
export class SongCardComponent {
  dataService = inject(DataService);
  sanitizer = inject(DomSanitizer);
  isFavorite = false;

  title = input<string>(''); // Song title
  artist = input<string>(''); // Artist name
  image = input<string>(''); // Song image
  releaseDate = input<string>(''); // Additional details or release date
  lyrics = input<string>('');
  get sanitizedImage(): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(this.image());
  }
  getLyricsUrl(): string {
    // Example URL with lyrics as a query parameter
    return this.lyrics();
  }
  song: MusicRec = {
    id: '1234567890',
    artist: 'Daniel Caesar',
    lyrics: 'This is the lyrics',
    releaseDate: '2024-01-01',
    songTitle: this.title(),
    image: 'as',
  }
  constructor(){

    console.log(this.sanitizedImage);
  }
  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    if (this.isFavorite) {
      this.dataService.storeSong(this.song);
    } else {
      this.dataService.removeSong(this.song);
    }
  }
}
