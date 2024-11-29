import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-song-result',
  standalone: true,
  imports: [MatCardModule, RouterLink],
  templateUrl: './song-result.component.html',
  styleUrl: './song-result.component.css'
})
export class SongResultComponent {
  // Need to inject the service!!!!!!!!!!!!!!
}
