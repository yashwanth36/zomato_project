import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MailService } from '../mail.service';
import { Restaurant } from '../restaurants';
import { forkJoin} from 'rxjs';
import { RestaurantsService } from '../restaurants.service';
import { LoginService } from '../login.service';
import { NgbModule }
from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  [x: string]: any;
  isActive: boolean = false;
  Active: boolean= false;
  allrestaurant: Restaurant[] =[];
  dishes: Dish[]=[];
  Rating : number = 0;
  loginEmail?: string;


  constructor(public restaurantsService: RestaurantsService, public loginService: LoginService , private mailservice: MailService, private http: HttpClient) { }
  
  
  transform(url: string) {
    return this['sanitizer'].bypassSecurityTrustResourceUrl(url);            
}

  ngOnInit(): void {
    const restaurantobservable=this.restaurantsService.fetchRestaurants();
    forkJoin({ restaurantobservable }).subscribe((restaurantobservable)=>{
      this.allrestaurant=restaurantobservable;
    })
    this['activatedroute'].params.subscribe((params: Params)=>
    this.loginEmail = params['email']
    )
  }
  getDish(id: string): boolean{
    const restaurant = this['dish'].filter((dish: Dish) => dish.id === id)?.[0];
    return restaurant ? (restaurant.rating? restaurant.rating : false) : false;

}
}
  