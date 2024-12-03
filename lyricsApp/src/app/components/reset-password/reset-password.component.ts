import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth-service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
  fb = inject(FormBuilder);
  
  resetPasswordForm = this.fb.group({
    email: ['', Validators.required],
  });

  auth: AuthService = inject(AuthService);

  // Method to process user register
  resetPassword() {
    const form = this.resetPasswordForm;

    if(form.get('email')!.invalid){
      alert('Please enter email');
      return;
    }

    this.auth.resetPassword(form.value.email!);
    form.value.email = '';
  }
}
