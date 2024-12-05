import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth-service/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  fb = inject(FormBuilder);
  
  loginInfoForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  auth: AuthService = inject(AuthService);

  // Method to process user register
  register() {
    const form = this.loginInfoForm;

    if(form.get('email')!.invalid){
      alert('Please enter email');
      return;
    }

    if(form.get('password')!.invalid){
      alert('Please enter password');
      return;
    }

    this.auth.register(form.value.email!, form.value.password!);
    form.value.email = '';
    form.value.password = '';
  }
}
