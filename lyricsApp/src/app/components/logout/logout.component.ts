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
  email = this.auth.currentUser?.email;
  userName = this.auth.currentUser?.displayName;
  
  logout() {
    this.auth.logout();
  }
}
