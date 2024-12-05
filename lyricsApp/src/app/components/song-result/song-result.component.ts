import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { APIService } from '../../service/api-service/api.service';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { LogoutComponent } from '../logout/logout.component';

@Component({
  selector: 'app-song-result',
  standalone: true,
  imports: [MatCardModule, RouterModule, NavbarComponent, LogoutComponent],
  templateUrl: './song-result.component.html',
  styleUrl: './song-result.component.css'
})
export class SongResultComponent {
  service = inject(APIService)
}
