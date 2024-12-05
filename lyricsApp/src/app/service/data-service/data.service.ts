import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, query, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../auth-service/auth.service';


export interface MusicRec {
  artist: string;
  lyrics: string;
  releaseDate: string;
  songTitle: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  auth: AuthService = inject(AuthService)
  firestore: Firestore = inject(Firestore)
  public items$: Observable<MusicRec[]> | undefined;

  constructor() {
    this.getUserFavorites();
  }
  // Adds a new user to the database
  addUser(email: string, firstName: string, lastName: string) {
    const userDocRef = doc(this.firestore, 'users', email);    
    setDoc(userDocRef, { 
      firstName: firstName,
      lastName: lastName,
    });
  }

  // Gets the user's favorites from the database
  getUserFavorites() {
    const userEmail = this.auth.currentUser?.email;
    if (userEmail) {
      const favoritesCollection = collection(this.firestore, `users/${userEmail}/favorites`);
      const q = query(favoritesCollection);
      this.items$ = collectionData(q, {idField: 'id'}) as Observable<MusicRec[]>;
    }
  }

  // Stores a song in the user's favorites
  storeSong(data: MusicRec) {
    const userEmail = this.auth.currentUser?.email;
    if (userEmail) {
      addDoc(collection(this.firestore, `users/${userEmail}/favorites`),
        {
          artist: data.artist,
          lyrics: data.lyrics,
          releaseDate: data.releaseDate,
          songTitle: data.songTitle,
        }
      );
    }
  }
  
  //The method currently takes in data instead of the song title.
  removeSong(data: MusicRec) {
    const userEmail = this.auth.currentUser?.email;
    if (userEmail) {
      deleteDoc(doc(this.firestore, `users/${userEmail}/favorites/${data.songTitle}`));
    }
  }
}
