import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SongResultComponent } from './components/song-result/song-result.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'songResult', component: SongResultComponent},
    { path: 'favorites', component: FavoritesComponent},
    { path: '**', redirectTo: '' },

];
