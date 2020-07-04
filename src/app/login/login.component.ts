import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, EmailValidator } from '@angular/forms';
import { Userinterface } from '../uinterface/userinterface';
import { UserserviceService } from '../servy/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit  {


   users = []
   passmsg : string
 
      userCreate:string

  roles = [
    { viewValue: 'Student'},
    { viewValue: 'Professor'},
    {viewValue: 'Admin'}
  ];
   
    departments = [
    { viewValue: 'ECE'},
    { viewValue: 'EEE'},
    { viewValue: 'CSE'}
  ]; 
  
    constructor(public fb: FormBuilder, private userservice: UserserviceService, private router : Router) { }
  
    angForm = this.fb.group({
      name: ['', Validators.required ],
      email :  ['', Validators.required ],
      userrole: [''],
      userdept: [''],
      password : ['', Validators.required],
      confPass : ['', Validators.required]

    })
  
    onSubmit() {
      
      
      let name = this.angForm.value.name
    let   password = this.angForm.value.password
     let   email = this.angForm.value.email
     let   role = this.angForm.value.userrole
     let   department =  this.angForm.value.userdept
       

      

    //  this.userservice.getdata(userinfo)
    
   this.userservice.createUser(name,email,role,department,password).subscribe(

    ue => {
      alert(ue)
    }
   )


  
     this.router.navigate(["login"])
     

    }

    checkPassSame(){

      let pass = this.angForm.value.password;
      let passConf = this.angForm.value.confPass;

      if(pass == passConf) {
        this.passmsg = "";
        return false;
      }else {
        this.passmsg = "Password did not match.";
        return true;
      }

    }

     ngOnInit(){

    this.userservice.getAllPersons().subscribe(

       usd => this.users = usd
     )

     }

  }