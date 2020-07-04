import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Userinterface } from '../uinterface/userinterface';
import { UserserviceService } from '../servy/userservice.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {

  name : string 
  password : string
  passmsg : string
  username : string
  userpswd : string

  uname : string
  upswd : string

  user : Userinterface[]
 
   constructor(public fb: FormBuilder, private userservice: UserserviceService) { }
 
   angForm = this.fb.group({
     name: ['', Validators.required ],
     password : ['', Validators.required]
   })
 
   onSubmit() {
     alert(JSON.stringify(this.angForm.value))

   }

   checklogin(){

     
    let username = this.angForm.value.name;
    let userpswd = this.angForm.value.password;

         this.userservice.alldata.subscribe(
           ud => this.user = ud
         )
         
         var userdata = this.user.filter(
          
          d => {return username == d.name  && userpswd == d.password }

         )
         
         alert(JSON.stringify(userdata))
         alert(this.user.length + 'hello')
         alert(userdata.length)

   }

 }
