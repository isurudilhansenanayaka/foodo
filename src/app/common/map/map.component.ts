import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { MapSevice } from './map.service';

@Component({
  selector: 'bwm-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input()location: String;
  isPositionError: boolean=false;
  lat: number ;
  lng: number ;
  constructor(private mapService: MapSevice,
              private ref:ChangeDetectorRef)
  { }

  ngOnInit() {
  } 
  mapReadyHandler(){
    this.mapService.getGeoLocation(this.location).subscribe(
      (coodinates)=>{
        this.lat= coodinates.lat;
        this.lng= coodinates.lng;
      }, () =>{
        this.isPositionError= true;
      });
    
  }

}
