import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-song-result',
  standalone: true,
  imports: [MatCardModule, RouterLink, NavbarComponent],
  templateUrl: './song-result.component.html',
  styleUrl: './song-result.component.css'
})
export class SongResultComponent {
  // Need to inject the service!!!!!!!!!!!!!!
}
