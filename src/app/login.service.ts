import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url="http://localhost:8080";
  constructor(private http:HttpClient) { }
  
  //current userdetails which is logged in 
  public getCurrentUser(){
    return this.http.get(`${this.url}` + "/current-user")
  }
  //generate token

  public generateToken(loginData:any){
      return this.http.post(`${this.url}` + "/generate-token", loginData);
  }
  //login user:set token in localstorage
  public loginUser(token:any)
  {
      localStorage.setItem('token',token);
      return true;
  }
  //isLogin: user is logged in or not
  public isLoggedIn(){

    let tokenStr=localStorage.getItem('token')
    if(tokenStr==undefined||tokenStr==''||tokenStr==null){
      return false;
    }
    else{
      return true;
    }
  }
  //logout functions-remove token from local storage
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user')
    return true;

  }

  //get token from 
  public getToken(){
    return localStorage.getItem('token');
  }

  //set userdetail 
  public setUser(user:any){
      localStorage.setItem("user",JSON.stringify(user));
  }

  //getuser
  public getUser(){
    let userStr=localStorage.getItem("user");
    if(userStr!=null){
      return JSON.parse(userStr);
    }
    else{
      this.logout();
      return null;
    }
  }

  //get user role
  public getUserRole()
  {
    let user=this.getUser()
    return user.authorities[0].authority;
  }

}
