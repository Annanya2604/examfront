import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {
 url="http://localhost:8080" 
  constructor(private http:HttpClient) { }

  public changepass(changepass:any){
    return this.http.put(`${this.url}` + "/change-password",changepass);
}
}
