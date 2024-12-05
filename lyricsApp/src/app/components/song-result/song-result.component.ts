import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { LogoutComponent } from '../logout/logout.component';


@Component({
  selector: 'app-song-result',
  standalone: true,
  imports: [NavbarComponent, LogoutComponent],
  templateUrl: './song-result.component.html',
  styleUrl: './song-result.component.css'
})
export class SongResultComponent {
  // Need to inject the service!!!!!!!!!!!!!!
}
