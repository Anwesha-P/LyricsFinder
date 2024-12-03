import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SongResultComponent } from './components/song-result/song-result.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'reset-password', component: ResetPasswordComponent },
    { path: 'verify-email', component: VerifyEmailComponent },
    { path: 'home', component: HomeComponent },
    { path: 'songResult', component: SongResultComponent},
    { path: 'favorites', component: FavoritesComponent},
    { path: '**', redirectTo: 'login' },
];
