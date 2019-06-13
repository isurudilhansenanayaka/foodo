import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { item} from './item.module';

@Injectable()
export class ItemService{
    private items: item[] =
    [{
        id: "1",
        donor: "Raheema Resturent",
        title: "Noodless",
        city: "Colombo",
        street: "Times Sqaure",
        category: "food",
        image: "http://via.placeholder.com/350x250",
        quantity: 3,
        description: "Very nice apartment",
        dailyRate: 34,
        shared: false,
        expiredAt: "24/12/2017",
        expiredTime: "22:50"
      },
      {
        id: "2",
        donor: "Adee Resturent",
        title: "Noodless",
        city: "San Francisco",
        street: "Main street",
        category: "condo",
        image: "http://via.placeholder.com/50x250",
        quantity: 2,
        description: "Very nice apartment",
        dailyRate: 12,
        shared: true,
        expiredAt: "24/12/2017",
        expiredTime: "22:50"
      },
      {
        id: "3",
        donor: "Mala Resturent",
        title: "Noodless",
        city: "Bratislava",
        street: "Hlavna",
        category: "condo",
        image: "http://via.placeholder.com/350x250",
        quantity: 2,
        description: "Very nice apartment",
        dailyRate: 334,
        shared: true,
        expiredAt: "24/12/2017",
        expiredTime: "22:50"
      },
      {
        id: "4",
        donor: "apex Resturent",
        title: "Noodless",
        city: "Bratislava",
        street: "Hlavna",
        category: "condo",
        image: "http://via.placeholder.com/350x250",
        quantity: 2,
        description: "Very nice apartment",
        dailyRate: 334,
        shared: true,
        expiredAt: "24/12/2017",
        expiredTime: "22:50"
      },
      {
        id: "5",
        donor: "Amal Resturent",
        title: "Noodless",
        city: "San Francisco",
        street: "Main street",
        category: "condo",
        image: "http://via.placeholder.com/50x250",
        quantity: 2,
        description: "Very nice apartment",
        dailyRate: 12,
        shared: true,
        expiredAt: "24/12/2017",
        expiredTime: "22:50"
      },
      {
        id: "6",
        donor: "Raheema Resturent",
        title: "Noodless",
        city: "Delihi",
        street: "Hlavna",
        category: "condo",
        image: "http://via.placeholder.com/350x250",
        quantity: 2,
        description: "Very nice apartment",
        dailyRate: 334,
        shared: true,
        expiredAt: "24/12/2017",
        expiredTime: "22:50"
      },
      {
        id: "7",
        donor: "Raheema Resturent",
        title: "Noodless",
        city: "Bratislava",
        street: "Hlavna",
        category: "condo",
        image: "http://via.placeholder.com/350x250",
        quantity: 2,
        description: "Very nice apartment",
        dailyRate: 334,
        shared: true,
        expiredAt: "24/12/2017",
        expiredTime: "22:50"
      },
      {
        id: "8",
        donor: "Raheema Resturent",
        title: "Noodless",
        city: "Berlin",
        street: "Haupt strasse",
        category: "house",
        image: "http://via.placeholder.com/350x250",
        quantity: 9,
        description: "Very nice apartment",
        dailyRate: 334,
        shared: true,
        expiredAt: "24/12/2017",
        expiredTime: "22:50"
      }];
      public getItemById(itemId: String): Observable<item>{
        return new Observable<item>((observer)=>{
            setTimeout(()=>{
              const foundItem=this.items.find((item) => {
                return item.id==itemId;
              });
              observer.next(foundItem);
            }, 500);
        });
      }

      public getItems(): Observable<item[]>{
          return new Observable<item[]>((observer)=>{
              setTimeout(()=>{
                observer.next(this.items)
                 }, 1000);
            
          });
            
      }
      
}
