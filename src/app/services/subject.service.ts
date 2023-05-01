import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  url="http://localhost:8080";
  constructor(private http:HttpClient) { }
  //load all the standards
  public subjects()
  {
    return this.http.get(`${this.url}` + "/subject/get");
   // return this.http.get(`${this.url}` + "/standard/get");
  }
  
  public addsubjects(subject:any)
  {
     return this.http.post(`${this.url}` + "/subject/add",subject)
  }

  //get the single section 
  public getsubjectById(subjectId:any){
    return this.http.get(`${this.url}` + "/subject/get/"+subjectId)
}
//call the update function of subjects
  public updatesubjects(subject:any,subjectId:any){
    return this.http.put(`${this.url}`+"/subject/update/"+subjectId,subject)
}

//call the delete function on subjects
public deleteSubjects(subjectId:any){
  return this.http.delete(`${this.url}`+"/subject/delete/"+subjectId)
}
}
