import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {
    

  name : string 
   password : string
   passmsg : string
  
    constructor(public fb: FormBuilder) { }
  
    angForm = this.fb.group({
      name: ['', Validators.required ],
      password : ['', Validators.required]
    })
  
    onSubmit() {
      alert(JSON.stringify(this.angForm.value))

    }

    checklogin(){

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

  }