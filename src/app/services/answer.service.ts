import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  url="http://localhost:8080";
  constructor(private http:HttpClient) { }
  
  public getanswer()
  {
    return this.http.get(`${this.url}` + "/answer/get");
   
  }

  public getAnswerByQuestion(quesId:any){
    return this.http.get(`${this.url}` + "/answer/getAnswer/"+quesId);
  }
}
