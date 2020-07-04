import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserloginComponent } from './userlogin/userlogin.component';


const routes: Routes = [
  {
    path:"register",component:LoginComponent 
  },
  {
    path :"login",component:UserloginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent,UserloginComponent]
