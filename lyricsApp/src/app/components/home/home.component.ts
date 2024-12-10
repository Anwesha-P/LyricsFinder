import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { LogoutComponent } from '../logout/logout.component';
import { FormsModule } from '@angular/forms';  // <<<< import it here
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, LogoutComponent, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  songName = '';
  private router = inject(Router);
  constructor() {}

  search() {
    // console.log(this.songName)
    this.router.navigate(['/songResult', this.songName]);
  }
}
