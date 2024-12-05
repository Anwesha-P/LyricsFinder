import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth-service/auth.service';
import { DataService } from '../../service/data-service/data.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  fb = inject(FormBuilder);
  
  registerInfoForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  auth: AuthService = inject(AuthService);
  data: DataService = inject(DataService);

  // Method to process user register
  register() {
    const form = this.registerInfoForm;

    if(form.get('firstName')!.invalid){
      alert('Please enter first name');
      return;
    }

    if(form.get('lastName')!.invalid){
      alert('Please enter last name');
      return;
    }

    if(form.get('email')!.invalid){
      alert('Please enter email');
      return;
    }

    if(form.get('password')!.invalid){
      alert('Please enter password');
      return;
    }

    // Register user
    this.auth.register(form.value.email!, form.value.password!, form.value.firstName!, form.value.lastName!);
    
    // Add user to database
    this.data.addUser(form.value.email!, form.value.firstName!, form.value.lastName!);

    form.value.email = '';
    form.value.password = '';
    form.value.firstName = '';
    form.value.lastName = '';

  }
}
