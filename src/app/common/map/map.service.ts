import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
@Injectable()

export class MapSevice{
private  geoCoder;
    public geoCodeLocation(location: String): Observable<any>{
        this.geoCoder = new (<any>window).google.maps.GeoCoder();
        return new Observable((observer)=>{
            this.geoCoder.geocode({address: location}, (result, status) => {
				if (status === 'OK') {

					const geometry = result[0].geometry.location;
					const coordinates = {lat: geometry.lat(), lng: geometry.lng()};

					
					observer.next(coordinates);
				} else {
					observer.error('Location could not be geocoded');
				}
			});
        }
        )
    }
    
}
