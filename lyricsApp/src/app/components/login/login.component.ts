import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth-service/auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  fb = inject(FormBuilder);
  
  loginInfoForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  auth: AuthService = inject(AuthService);

  // Method to process user login
  login() {
    const form = this.loginInfoForm;

    if(form.get('email')!.invalid){
      alert('Please enter email');
      return;
    }

    if(form.get('password')!.invalid){
      alert('Please enter password');
      return;
    }

    this.auth.login(form.value.email!, form.value.password!);
    form.value.email = '';
    form.value.password = '';
  }
}
