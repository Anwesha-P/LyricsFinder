import { Component, inject } from '@angular/core';
import { AuthService } from '../../service/auth-service/auth.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  auth = inject(AuthService);
  email = localStorage.getItem('email');
  userName = localStorage.getItem('userName');  

  logout() {
    this.auth.logout();
  }
}
