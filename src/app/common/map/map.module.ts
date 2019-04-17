
import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import {  MapSevice } from './map.service';
import { CamelizePipe } from 'ngx-pipes';
@NgModule({
  declarations: [
   MapComponent
  ],
  exports: [
    MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyDW9tFSqG2mA0ym2NluRBVGZ6tPr8xbwRM'//AIzaSyB_NCM9DvQy1jhFSf5pQ9iPeapzNMPvZI8
      }),
      CommonModule
  ],
  providers: [
    MapSevice,
    CamelizePipe
  ],
 
})
export class MapModule { }
