import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentqueansService {

  url="http://localhost:8080";
  constructor(private http:HttpClient) { }

  public addstudentqueans(studentqueans:any){
    return this.http.post(`${this.url}` + "/studentquestionanswer/add",studentqueans);
}
}
