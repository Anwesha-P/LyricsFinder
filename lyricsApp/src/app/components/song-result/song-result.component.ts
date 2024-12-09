
import { Component, computed, Inject, inject, input, Signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { APIService, Song } from '../../service/api-service/api.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { LogoutComponent } from '../logout/logout.component';
import { SongCardComponent } from "../song-card/song-card.component";
import { CommonModule } from '@angular/common'; // Import this
import { ActivatedRoute } from '@angular/router';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-song-result',
  standalone: true,
  imports: [NavbarComponent, LogoutComponent, SongCardComponent, CommonModule, MatCardModule],
  templateUrl: './song-result.component.html',
  styleUrl: './song-result.component.css',
  providers:[
    // {provide: 'songName', useValue:'Blank Space'},
     APIService
  ]
})
export class SongResultComponent {
  // songName: string;

  service = inject(APIService);
  songName=input.required<string>();

  // curVal$: Signal<APIService | undefined >=computed(()=>{
  //   return this.service.fetchData("blank space");});
  private route = inject(ActivatedRoute)
  constructor(){
    this.route.queryParams.subscribe(params =>{
      this.service.fetchData("blank space");
      console.log(params);
      // this.service.fetchData(params);

    })
    // console.log("hello")
    // this
    // console.log(this.songName());
    // console.log(this.router.url)
    // console.log("hrllo")
  }

}
