import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Userinterface } from '../uinterface/userinterface';
import {  HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  user : Userinterface[];

  public mydata : BehaviorSubject<Userinterface[]> = new BehaviorSubject<Userinterface[]>([])
         alldata = this.mydata.asObservable()
         private _url : string = "http://localhost:8080/getAll"
         private url1 : string ="http://localhost:8080/getEmailPassword"
         private url2 : string ="http://localhost:8080/create"

  constructor(private http: HttpClient) { }

  getdata(userd:Userinterface){
    this.alldata.subscribe(
      ad=> this.user =ad
    )
     this.user.push(userd)
     this.mydata.next(this.user)

  }



   getAllPersons():Observable<Userinterface[]>{
    return this.http.get<Userinterface[]>(this._url);

   }

   getSpecPerson():Observable<Userinterface[]>{
    return this.http.get<Userinterface[]>(this.url1);

   }

   createUser( name:string,email:string,role:string,department:string,password:string):Observable<string>{
    const headers = new HttpHeaders().set('responseType', 'text');

    return this.http.get<string>(this.url2,{ headers,
      params: {name:name ,
               email:email,
               role:role,
               department:department,
               password:password
       }
       
      });

   }


}
