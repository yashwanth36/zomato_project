import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MailService } from './mail.service';
import { NewUsers, User } from './restaurants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user?: User;
  users?: NewUsers;
  loggingUser:User={} as User;
  constructor(private mailsService: MailService, public router:Router) {
    this.mailsService.getUsers().subscribe((users:NewUsers)=>{this.users=users})
   }
   public validate(): boolean {
    const users = this.users;
    if(users?.users){
      const index = users.users.findIndex(
        (user: User)=> user.email === this.loggingUser && user.password === this.loggingUser?.password
      );
      if(index != -1) {
        this.user = users.users[index];
        return true;
      }
      else{
          return false;
        }
    }
    return false;
  }

}
