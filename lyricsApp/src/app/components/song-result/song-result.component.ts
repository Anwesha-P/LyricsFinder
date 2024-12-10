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

  constructor() {
    this.fetchSongName();
  }

  fetchSongName() {
    // Fetch the song name from the route parameters
    // Source: https://medium.com/@tiboprea/accessing-url-parameters-in-angular-snapshot-vs-subscription-efc4e70f9053
    this.route.paramMap.subscribe(params => {
      this.songName = params.get('songName') || '';
      // console.log('songName', this.songName);

      // Fetch the song data from the API
      this.service.fetchData(this.songName);
    });
  }
}