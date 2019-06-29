import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { MapSevice } from './map.service';
import { ItemService } from 'src/app/item/shared/item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bwm-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  item:any;
  @Input()location: String;
  isPositionError: boolean=false;
  lat: number ;
  lng: number ;
  constructor(private mapService: MapSevice,private route: ActivatedRoute,
    private itemService: ItemService,
              private ref:ChangeDetectorRef)
  { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.itemService.getitem(params["itemId"]).subscribe(data=>{
        this.item=data;
        this.lat= data["uploadLatitude"],
        this.lng= data["uploadLongitude"];
      })
    }
  );
  } 

  // mapReadyHandler(){
  //   this.mapService.getGeoLocation(this.location).subscribe(
  //     (coodinates)=>{
  //       this.lat= this.item["uploadLatitude"],
  //       this.lng= this.item["uploadLatitude"];
  //     }, () =>{
  //       this.isPositionError= true;
  //     });
    
  // }

}
