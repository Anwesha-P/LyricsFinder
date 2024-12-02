import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface FirestoreRec {
  artist: string;
  lyrics: string;
  releaseDate: string;
  songTitle: string;
}

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  firestore: Firestore = inject(Firestore)
  public items$: Observable<FirestoreRec[]> | undefined;

  constructor() {
    this.getData();
  }

  //NEED TO CHANGE THE COLLECTION NAME!!!
  getData() {
    const aCollection = collection(this.firestore, 'users/userID/favorites');
    const q = query(aCollection);

    //Subscribe to real-time updates
    this.items$ = collectionData(q, {idField: 'id'}) as Observable<FirestoreRec[]>;
  }

  //NEED TO CHANGE THE COLLECTION NAME!!!
  storeSong(data: FirestoreRec) {
    addDoc(collection(this.firestore, 'users/userID/favorites'),
    {
      artist: data.artist,
      lyrics: data.lyrics,
      releaseDate: data.releaseDate,
      songTitle: data.songTitle,
    }
  )
  }
  
  //----------------------------------------------------------------------------------------------
  //NEED TO IMPLEMENT THE DELETESONG METHOD!!!
  removeSong(data: FirestoreRec) {

  }

}
