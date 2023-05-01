import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizattemptService {
  url="http://localhost:8080"
  constructor(private http:HttpClient) { }

  public getAttemptQuiz(id:any,quizId:any){
    return this.http.get(`${this.url}` + "/studentquiz/attempt/"+id+"/"+quizId);
  }
}
