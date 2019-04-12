import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { CamelizePipe } from 'ngx-pipes';
@Injectable()

export class MapSevice{
private  geoCoder;
private locationCache: any = {};

    constructor(private camelizePipe: CamelizePipe) {}
    private cacheLocation(location: String, coordinates: any) {
        const camelizelocation=this.camelizePipe.transform(location);
		this.locationCache[camelizelocation] = coordinates;
	}

    public geoCodeLocation(location: String): Observable<any>{
        this.geoCoder = new (<any>window).google.maps.GeoCoder();
        return new Observable((observer)=>{
            this.geoCoder.geocode({address: location}, (result, status) => {
				if (status === 'OK') {

					const geometry = result[0].geometry.location;
					const coordinates = {lat: geometry.lat(), lng: geometry.lng()};

					this.cacheLocation(location,coordinates);
					observer.next(coordinates);
				} else {
					observer.error('Location could not be geocoded');
				}
			});
        }
        )
    }
    
}
