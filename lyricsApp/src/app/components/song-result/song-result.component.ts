import {
  Component,
  computed,
  Inject,
  inject,
  input,
  Signal,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { APIService, Song } from '../../service/api-service/api.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { LogoutComponent } from '../logout/logout.component';
import { SongCardComponent } from '../song-card/song-card.component';
import { CommonModule } from '@angular/common'; // Import this
import { ActivatedRoute } from '@angular/router';
import { Router, RouterLink } from '@angular/router';

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
  providers: [
    // {provide: 'songName', useValue:'Blank Space'},
    APIService,
  ],
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
    this.route.paramMap.subscribe(params => {
      this.songName = params.get('songName') || '';
      console.log('songName', this.songName);
      this.service.fetchData(this.songName);
    });
  }
}