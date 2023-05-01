import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  url="http://localhost:8080";
  constructor(private http:HttpClient) { }
  //load all the sections
  public getsections(){
    return this.http.get(`${this.url}` + "/section/get");
    
  }
  //
  public addsections(section:any)
  {
     return this.http.post(`${this.url}` + "/section/add",section)
  }

  //get the single section 
  public getsectionById(sectionId:any){
      return this.http.get(`${this.url}` + "/section/get/"+sectionId)
  }
  
  //method to update section
  public updateSection(section:any,sectionId:any){
    return this.http.put(`${this.url}`+"/section/update/"+sectionId,section)
}

  public getSectionByStandard(standardId:any){
    return this.http.get(`${this.url}` + "/section/getSection/"+standardId)
  }
  public deleteSection(sectionId:any){
    return this.http.delete(`${this.url}`+"/section/delete/"+sectionId)
 }
}
