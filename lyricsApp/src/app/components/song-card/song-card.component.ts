import { MatIconModule } from '@angular/material/icon';
import { Component, inject } from '@angular/core';
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
  isFavorite = false;
  
  song: MusicRec = {
    id: '1234567890',
    artist: 'Daniel Caesar',
    lyrics: 'This is the lyrics',
    releaseDate: '2024-01-01',
    songTitle: 'Best Part',
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
