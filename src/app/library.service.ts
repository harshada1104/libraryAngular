import { Injectable, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryService  implements OnInit{

test:string="";
text:string="";
data1:string="java";
y:string="java"
url:string="http://openlibrary.org/subjects/" 
url3:string="http://openlibrary.org/search.json?title="
    constructor(private _http:HttpClient) { 
      console.log(this.data1)
    }
    
   getdata():Observable<any>{
      const url4 = `${this.url3}${this.data1}`;
      
      return this._http.get(url4) 
     
   }

   getSubData(){
      const url2 = `${this.url}${this.test}.json`;
   return this._http.get(url2)   
   }

   ngOnInit(): void {
     
   }


   

   
  
  
}
