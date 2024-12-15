import ClientOAuth2 from 'client-oauth2';
import { Injectable, signal, Inject } from '@angular/core';
import { environment } from '../../environment'; 

// Interface for Song
export interface Song {
  id: string;
  songTitle: string;
  image: string;
  lyrics: string;
  artist: string;
  releaseDate: string;
}

@Injectable({
  providedIn: 'root',
})

export class APIService {

  public data$ = signal<Song[]>([]);

  getToken() {
    return environment.token;  // Access token from environment
  }
  // Fetch data from the Genius API
  // Genius API: https://genius.com/developers 
  async fetchData(query: string) {
    console.log('Fetching data...');
    const token = this.getToken();
    // const token = this.getAccessToken();
    if (!token) {
      console.error('No access token available. Aborting API request.');
      return;
    }
    const apiUrl = `https://api.genius.com/search?q=${encodeURIComponent(query)}&access_token=${token}`;

    // Fetch the data from the API
    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error fetching data: ${response.status} - ${errorText}`);
      }

      const json = await response.json();
      // console.log('Full API response:', json);

      // Process and map the API response
      const songs = json.response.hits.map((hit: any) => ({
        id: hit.result.id.toString(),
        songTitle: hit.result.title,
        image: hit.result.song_art_image_url,
        lyrics: hit.result.url,
        artist: hit.result.primary_artist.name,
        releaseDate: hit.result.release_date_for_display || 'N/A',
      }));

      this.data$.set(songs); // Update the signal with fetched data
      console.log('Songs set in data$:', this.data$());
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}

