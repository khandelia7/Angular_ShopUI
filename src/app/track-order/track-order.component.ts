import { Component, OnInit } from '@angular/core';
import { Track } from '../service/track.service';
import { SubProduct } from '../model/subproduct.model';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.css']
})
export class TrackOrderComponent implements OnInit {

  items;
  one_prod;

  constructor(public track: Track) {
    this.items = this.track.track_service_to_track();
    console.log(this.items);
    this.one_prod = this.track.gatewayToTrack();
    console.log(this.one_prod);
   }

  ngOnInit(): void {
  }

  tracking(){
    alert("On the way...!")
  }

}
