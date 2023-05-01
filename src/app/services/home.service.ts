import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  url="http://localhost:8080";
  constructor(private http:HttpClient) { }

  public getpassstu()
  {
    return this.http.get(`${this.url}` + "/studentquiz/count2");
   
  }

  public getfailstu(){
    return this.http.get(`${this.url}`+"/studentquiz/countfail");
  }

  public getusercount(){
    return this.http.get(`${this.url}`+"/user/countuser");
  }
  public getquizcount(){
    return this.http.get(`${this.url}`+"/quiz/countquiz");
  }

  public getquizinactive(){
    return this.http.get(`${this.url}`+"/quiz/countinactive");
  }

  public getstandardcount(){
    return this.http.get(`${this.url}`+"/standard/countstandard");
  }
}
