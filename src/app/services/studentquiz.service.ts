import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentquizService {
  url="http://localhost:8080";
  constructor(private http:HttpClient) { }

  public addstudentquiz(studentquiz:any){
    return this.http.post(`${this.url}` + "/studentquiz/add",studentquiz);
}

// public getstudentquiz()
//   {
//     return this.http.get(`${this.url}` + "/studentquiz/get");
//    // return this.http.get(`${this.url}` + "/standard/get");
//   }

  public getStudentquiz(id:number,quizId:number){
    return this.http.get('localhost:8080/studentquiz/get/'+id+'/'+quizId)
 }

 public download()
  {
    return this.http.get(`${this.url}` + "/studentquiz/download");
   // return this.http.get(`${this.url}` + "/standard/get");
  }

}
