import {
  Component,
  inject,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { APIService, Song } from '../../service/api-service/api.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { LogoutComponent } from '../logout/logout.component';
import { SongCardComponent } from '../song-card/song-card.component';
import { CommonModule } from '@angular/common'; // Import this
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song-result',
  standalone: true,
  imports: [
    NavbarComponent,
    LogoutComponent,
    SongCardComponent,
    CommonModule,
    MatCardModule,
  ],
  templateUrl: './song-result.component.html',
  styleUrl: './song-result.component.css',
})
export class SongResultComponent {
  // songName: string;
  songName: string = '';
  service = inject(APIService);
  private route = inject(ActivatedRoute);
  isLoading = true;


  constructor() {
    setTimeout(() => {
      this.isLoading = false;
      this.fetchSongName();
    }, 2000); // Simulate a 2-second loading time
    
  }

  fetchSongName() {
    this.route.paramMap.subscribe(params => {
      this.songName = params.get('songName') || '';
      this.isLoading = true;
      // Fetch the song data from the API
      this.service.fetchData(this.songName).then(() => {
        this.isLoading = false;
      }).catch(() => {
        this.isLoading = false;
      });
    });
  }
}