import { Component, OnInit, Input } from '@angular/core';
import { MapSevice } from './map.service';

@Component({
  selector: 'bwm-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input()location: String;
  lat: number ;
  lng: number ;
  constructor(private mapService: MapSevice) { }

  ngOnInit() {
  }
  mapReadyHandler(){
    this.mapService.geoCodeLocation(this.location).subscribe(
      (coodinates)=>{
        this.lat= coodinates.lat;
        this.lng= coodinates.lng;
      });
    
  }

}
