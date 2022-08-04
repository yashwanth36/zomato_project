import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from "./AuthGuardService";
import { DishesService } from './dishes.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component: LoginComponent,},
  {path:'home/:email', 
  component: HomeComponent,
  canActivate?: AuthGuardService},
  {path:'dishes/:home', 
  component: HomeComponent,
  canActivate?: DishesService}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
