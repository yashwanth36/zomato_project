import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User, NewUsers } from './restaurants';


@Injectable({
  providedIn: 'root'
})
export class MailService {
  users!: BehaviorSubject<User[]>;
  users$!: Observable<User[]>;

  constructor(public httpClient:HttpClient) {
    this.users=new BehaviorSubject<User[]>([]);
    this.users$=this.users.asObservable ();

   }
public getUsers():Observable<NewUsers>{
  return this.httpClient.get<NewUsers>("https://zomato-78f22-default-rtdb.firebaseio.com/users.json");
}
}
