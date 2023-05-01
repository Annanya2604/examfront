import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {
  url="http://localhost:8080";
  constructor(private http:HttpClient) { }
  public forgotpassword( username:any)
  {
   var frm =new FormData();
   frm.append('username',username)
    return this.http.post(`${this.url}` + "/forgot-password",frm);
   // return this.http.get(`${this.url}` + "/standard/get");
  }
}
