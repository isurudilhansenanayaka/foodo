
import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';
import {  MapSevice } from './map.service';

@NgModule({
  declarations: [
   MapComponent
  ],
  exports: [
    MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
        apiKey: ''
      })
  ],
  providers: [
    MapSevice
  ],
 
})
export class MapModule { }
