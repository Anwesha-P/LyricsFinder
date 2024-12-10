import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SongResultComponent } from './components/song-result/song-result.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { authGuard } from './guards/auth.guard';
import { CheckEmailComponent } from './components/check-email/check-email.component';

// Routes that don't require authentication
export const authRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'reset-password', component: ResetPasswordComponent },
    { path: 'verify-email', component: VerifyEmailComponent },
    { path: 'check-email', component: CheckEmailComponent },
];

// Routes that require authentication
export const protectedRoutes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [authGuard] },
    { path: 'songResult/:songName', component: SongResultComponent, canActivate: [authGuard] },
    { path: 'favorites', component: FavoritesComponent, canActivate: [authGuard] },
];

export const routes: Routes = [
    ...authRoutes,
    ...protectedRoutes,
    { path: '**', redirectTo: 'login' },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
];
