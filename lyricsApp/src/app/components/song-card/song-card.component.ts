import { MatIconModule } from '@angular/material/icon';
import { Component, inject, input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { DataService, MusicRec } from '../../service/data-service/data.service';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-song-card',
  standalone: true,
  imports: [MatCardModule, RouterModule, MatIconModule, CommonModule],
  templateUrl: './song-card.component.html',
  styleUrl: './song-card.component.css'
})
export class SongCardComponent {
  dataService = inject(DataService);
  sanitizer = inject(DomSanitizer);
  isFavorite = false;

  // These inputs are from the song-result component
  id = input<string>('');
  title = input<string>(''); // Song title
  artist = input<string>(''); // Artist name
  image = input<string>(''); // Song image
  releaseDate = input<string>(''); // Additional details or release date
  lyrics = input<string>(''); // Song lyrics URL
  
  // Sanitize the image URL
  get sanitizedImage(): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(this.image());
  }

  // Get the lyrics URL
  getLyricsUrl(): string {
    // Example URL with lyrics as a query parameter
    return this.lyrics();
  }

  constructor() {
    // Check if song exists in database and set initial favorite state
    this.dataService.items$!.subscribe(songs => {
      const existingSong = songs.find(song => song.id === this.id());
      // If the song is in the database, set the favorite state to true
      this.isFavorite = !!existingSong;
    });
  }

  async toggleFavorite() {
    const songData: MusicRec = {
      id: this.id(),
      artist: this.artist(),
      lyrics: this.lyrics(),
      releaseDate: this.releaseDate(),
      songTitle: this.title(),
      image: this.image(),
      favorite: !this.isFavorite,
    };

    // Check if song exists in database and set initial favorite state
    //This part of the code was AI generated
    const songs = await firstValueFrom(this.dataService.items$!);
    const existingSong = songs.find(song => song.id === this.id());
    
    // User adds or removes a song from favorites
    if (!existingSong && !this.isFavorite) {
      this.dataService.storeSong(songData);
      this.isFavorite = true;
    } else if (existingSong && this.isFavorite) {
      this.dataService.removeSong(songData);
      this.isFavorite = false;
    }
  }
}
