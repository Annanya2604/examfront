import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url="http://localhost:8080";
  constructor(private http:HttpClient) { }

  public getusers(){
    return this.http.get(`${this.url}` + "/user/get")
  }

  public getuserexceptadmin(){
    return this.http.get(`${this.url}` + "/user/getuser")
  }

  //function to add new users 
  public addusers(user:any){
    return this.http.post(`${this.url}` + "/user/add",user);
}

 //get user by Id
 public getuserById(id:any){
  return this.http.get(`${this.url}` + "/user/get/"+id)
}

public updateusers(user:any,id:any){
  return this.http.put(`${this.url}`+"/user/update/"+id,user)
}
  
public deleteusers(id:any){
  return this.http.delete(`${this.url}`+"/user/delete/"+id)
}
  
}
