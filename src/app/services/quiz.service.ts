import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  url="http://localhost:8080";
  constructor(private http:HttpClient) { }
  public getquiz()
  {
    return this.http.get(`${this.url}` + "/quiz/get");
   
  }
  public addquiz(quiz:any){
    return this.http.post(`${this.url}` + "/quiz/add",quiz);
}
public getSubjectByStandard(standardId:any){
  return this.http.get(`${this.url}` + "/subject/getSubject/"+standardId);
}

public updatequiz(quiz:any,quizId:any){
  return this.http.put(`${this.url}`+"/quiz/update/"+quizId,quiz)
}
public getquizById(quizId:any){
  return this.http.get(`${this.url}` + "/quiz/get/"+quizId)
}
public deletequiz(quizId:any){
  return this.http.delete(`${this.url}`+"/quiz/delete/"+quizId)
}
public getquizByUser(id:any){
  return this.http.get(`${this.url}` + "/quiz/getQuiz/"+id)
}
}
