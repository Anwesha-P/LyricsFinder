import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  public data$ = signal<Song[]>([])
  constructor() {this.fetchData()}
  async fetchData(){
    try{
      const response = await fetch('https://fakestoreapi.com/products')
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      this.data$.set(json)
      console.log(this.data$())

    } catch (error) {
      console.error('error');
    }
  }
}
export interface Song {
  id:number;
  title: string;
  image: string;
  url: string;
  artist_names: string;
  release_date_for_display: string;

}
