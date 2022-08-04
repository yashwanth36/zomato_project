import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishesService {
  constructor(private http: HttpClient) {  }
  public fetchDishes():Observable<Dishes[]> {
      return this.http.get<Dish[]>("https://zomato-78f22-default-rtdb.firebaseio.com/restaurants/dishes.json");
    }
    public updateRestaurants(dishes: dish[]):void{
      this.http.put("https://zomato-78f22-default-rtdb.firebaseio.com/restaurant/dishes.json",dishes).subscribe();
      this.fetchDishes();
    
      }
  
  }
