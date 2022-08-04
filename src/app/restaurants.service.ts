import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from './restaurants';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http: HttpClient) {  }
  public fetchRestaurants():Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>("https://zomato-78f22-default-rtdb.firebaseio.com/restaurants.json");
  }
  public updateRestaurants(restaurants: Restaurant[]):void{
    this.http.put("https://zomato-78f22-default-rtdb.firebaseio.com/restaurant.json",restaurants).subscribe();
    this.fetchRestaurants();
  
    }

}
