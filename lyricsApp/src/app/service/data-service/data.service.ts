import { inject, Injectable } from '@angular/core';
import { collection, collectionData, deleteDoc, doc, Firestore, query, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface MusicRec {
  id: string;
  artist: string;
  lyrics: string;
  releaseDate: string;
  songTitle: string;
  image: string;
  favorite: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
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
    const userEmail = localStorage.getItem('email');
    if (userEmail) {
      console.log(userEmail);
      const favoritesCollection = collection(this.firestore, `users/${userEmail}/favorites`);
      const q = query(favoritesCollection);
      this.items$ = collectionData(q, {idField: 'id'}) as Observable<MusicRec[]>;
    }
  }

  // Stores a song in the user's favorites
  storeSong(data: MusicRec) {
    const userEmail = localStorage.getItem('email');
    const userDocRef = doc(this.firestore, `users/${userEmail}/favorites`, data.id);    
    if (userEmail) {
      setDoc(userDocRef,
        {
          id: data.id,
          artist: data.artist,
          lyrics: data.lyrics,
          releaseDate: data.releaseDate,
          songTitle: data.songTitle,
          image: data.image,
          favorite: true,
        }
      );
    }
  }
  
  //The method currently takes in data instead of the song title.
  removeSong(data: MusicRec) {
    const userEmail = localStorage.getItem('email');
    if (userEmail) {
      deleteDoc(doc(this.firestore, `users/${userEmail}/favorites/${data.id}`));
    }
  }
}
