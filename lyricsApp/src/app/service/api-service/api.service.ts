import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  public data$ = signal<Song[]>([]);

  constructor() {
    this.fetchData();
  }
  async fetchData() {
    try {
      const response = await fetch(
        'https://api.genius.com/search?q=Baby',
        {
          headers: {
            Authorization: 'Bearer 8ux9MLSz6ZUzGxJz6uAOriCx4ENwH7nhllr5MjQFmGKulW9hC8c_emxhUvVQR3Wi'
          }
        }
      );
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error fetching data: ${response.status} - ${errorText}`);
      }
  
      const json = await response.json();
      console.log('Full API response:', json); // Log the full response for debugging
  
      // Map the response to the Song interface
      const songs = json.response.hits.map((hit: any) => ({
        id: hit.result.id,
        title: hit.result.title,
        image: hit.result.song_art_image_url,
        url: hit.result.url,
        artist_names: hit.result.primary_artist.name,
        release_date_for_display: hit.result.release_date || 'N/A' // Handle missing release date
      }));
  
      if (songs.length > 0) {
        this.data$.set(songs);
        console.log('Songs set in data$:', this.data$());
      } else {
        console.warn('No songs found.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}  

export interface Song {
  id: number;
  title: string;
  image: string;
  url: string;
  artist_names: string;
  release_date_for_display: string;
}
