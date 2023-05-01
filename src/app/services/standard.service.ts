import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StandardService {
  url="http://localhost:8080";
  constructor(private http:HttpClient) { }
  //load all the standards
  public standards()
  {
    return this.http.get(`${this.url}` + "/standard/get");
   // return this.http.get(`${this.url}` + "/standard/get");
  }

  //create a new function to add new Standard
  public addStandard(standard:any){
      return this.http.post(`${this.url}` + "/standard/add",standard);
  }

  //get the single standard
  public getStandard(standardId:any){
    return this.http.get(`${this.url}` + "/standard/get/"+standardId);
  }

  public updateStandard(standard:any,standardId:any){
      return this.http.put(`${this.url}`+"/standard/update/"+standardId,standard)
  }

  //a function for delete standard
  public deleteStandard(standardId:any){
     return this.http.delete(`${this.url}`+"/standard/delete/"+standardId)
  }
}
