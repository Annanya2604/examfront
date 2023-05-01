import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  url="http://localhost:8080";
  constructor(private http:HttpClient) { }
  public getquestions(quizId:any)
  {
    return this.http.get(`${this.url}` + "/questions/getQuestion/"+quizId);
   
  }

  public getquestionsOfQuizForTest(quizId:any)
  {
    return this.http.get(`${this.url}` + "/questions/getQuestion/"+quizId);
   
  }

  public addquestions(questions:any){
    return this.http.post(`${this.url}` + "/questions/add",questions);
}
//get the single standard
public getquestionById(quesId:any){
  return this.http.get(`${this.url}` + "/questions/get/"+quesId);
}
public updatequestions(question:any,quesId:any){
  return this.http.put(`${this.url}`+"/questions/update/"+quesId,question)
}
public deletequestions(quesId:any){
  return this.http.delete(`${this.url}`+"/questions/delete/"+quesId)
}
}
