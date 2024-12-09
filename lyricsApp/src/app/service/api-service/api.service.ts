import ClientOAuth2 from 'client-oauth2';
import { Injectable, signal, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  // private geniusAuth = new ClientOAuth2({
  //   clientId: 'k0I3OsS5tT7VOzi01gZVI5DUyNakVGX0VIJMhzt92N8vcMwgA2ri10bmYwoaUZX5',
  //   clientSecret: '7OoFdSI_-HHG8sIBiT8JEYT0Bidd3gZob-tAO-gd3LJrQf4VuLjOsf7U4bx42AbbEseEYxjTv6kMqQS1c5-wjWA',
  //   accessTokenUri: 'https://api.genius.com/oauth/token',
  //   authorizationUri: 'https://api.genius.com/oauth/authorize',
  //   redirectUri: 'https://your-app.com/callback',
  //   scopes: ['read', 'write'], // Adjust based on the API documentation
  // });

  public data$ = signal<Song[]>([]);

  constructor(

  //   @Inject('songName') private songName: string
  ) {
  //   if (!this.songName) {
  //     throw new Error('songName token is not provided!');
  //   }
    console.log('APIService initialized');
    // this.fetchData(this.songName); // Fetch data when service is initialized
  }

  // // Retrieve the access token
  // private async getAccessToken(): Promise<string | undefined> {
  //   try {
  //     const token = await this.geniusAuth.credentials.getToken();
  //     console.log('Access Token:', token.accessToken);
  //     return token.accessToken;
  //   } catch (error) {
  //     console.error('Error obtaining access token:', error);
  //     return undefined;
  //   }
  // }

  // Fetch data from the Genius API
  async fetchData(query: string) {
    console.log('Fetching data...');
    const token = "-EaniIChAev_5wk4jPd3GbNYF5Z1JEfi3tLfdiERDMJpX48jqTowiZYBM_7TXwZJ";
    // const token = this.getAccessToken();
    if (!token) {
      console.error('No access token available. Aborting API request.');
      return;
    }

    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error fetching data: ${response.status} - ${errorText}`);
      }

      const json = await response.json();
      console.log('Full API response:', json);

      // Process and map the API response
      const songs = json.response.hits.map((hit: any) => ({
        id: hit.result.id,
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

// Interface for Song
export interface Song {
  id: number;
  songTitle: string;
  image: string;
  lyrics: string;
  artist: string;
  releaseDate: string;
}
