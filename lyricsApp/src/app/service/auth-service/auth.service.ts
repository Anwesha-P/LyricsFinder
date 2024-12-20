import { inject, Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  fireauth: AngularFireAuth = inject(AngularFireAuth);
  router: Router = inject(Router);

  public currentUser: firebase.default.User | undefined;

  // Tutorial Video1: https://youtu.be/eFtrzzP2wMc
  // Tutorial Video2: https://youtu.be/PVcPTREOcAo
  constructor() { }

  // Method to process user login when email and password is provided. Routes user to the home page on successful login.
  login(email: string, password: string){
    this.fireauth.signInWithEmailAndPassword(email, password).then( res => {
      localStorage.setItem('token', 'true');

      // The user must verify their email before they can access the home page. 
      if (res.user?.emailVerified === true) {
        this.currentUser = res.user;
        localStorage.setItem('userName', res.user.displayName!);
        localStorage.setItem('email', res.user.email!);
        this.router.navigate(['/home']);
      } else {
        this.router.navigate(['/verify-email']);
      }

    }, err => {
      alert("The provided credentials do not exist. Please check your credentials or register a new account.");
      this.router.navigate(['/login']);
    })
  }

  // Method to process user registeration
  register(email: string, password: string, firstName: string, lastName: string){
    this.fireauth.createUserWithEmailAndPassword(email, password).then( res => {
      // Update the user's display name after account creation
      res.user?.updateProfile({
        displayName: `${firstName} ${lastName}`
      }).then(() => {
        this.router.navigate(['/verify-email']);
        this.sendEmailForVerification(res.user);
      }).catch(err => {
        alert("Error updating display name: " + err.message);
      });
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }

  // Method to process user sign out
  logout(){
    this.fireauth.signOut().then( ()=> {
      localStorage.removeItem('token');
      localStorage.removeItem('userName');
      localStorage.removeItem('email');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
    })
  }

  // Method to process user password reset
  resetPassword(email: string){
    this.fireauth.sendPasswordResetEmail(email).then( ()=> {
      this.router.navigate(['/check-email'])  
    }, err => {
      alert(err.message);
    })
  }

  // Method to send email verification to the user (when registering for a new account)
  sendEmailForVerification(user: any){
    user.sendEmailVerification().then(() =>{
      this.router.navigate(['/verify-email']);
    }, (err: any) => {
      alert("Unable to send verification link to user email.")
    })
  }
}
