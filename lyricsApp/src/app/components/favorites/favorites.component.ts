import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { LogoutComponent } from '../logout/logout.component';
import { CommonModule } from '@angular/common';
import { SongCardComponent } from "../song-card/song-card.component";

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [RouterModule, NavbarComponent, LogoutComponent, CommonModule, SongCardComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {

}
