import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-view-subject',
  templateUrl: './view-subject.component.html',
  styleUrls: ['./view-subject.component.css']
})
export class ViewSubjectComponent implements OnInit{
  searchText:any
  page:number=1;
  count:number=0;
  tableSize :number =5;
  tableSizes :any=[5,10,15,20];
  subjects:any=[]
  ngOnInit(): void {
    this.getsubjects()
  }
  constructor(private _subject:SubjectService,private router:Router){}
  private getsubjects(){
    this._subject.subjects().subscribe((data:any)=>{
      this.subjects=data;//we pass the incoming data to the standards object
      console.log(this.subjects)
    })
    
  }

  onTableDataChange(event:any){
    this.page=event;
    this.getsubjects();
  }

  OnTableSizeChange(event:any):void{
    this.tableSize=event.target.value;
    this.page=1
    this.getsubjects()

  }
  update(subjectId:any){

    this.router.navigate(['admin/updatesub/'+subjectId])

  }
  deleteSubject(subjectId:any){
    this._subject.deleteSubjects(subjectId).subscribe((data:any)=>{
      console.log(data)
    });
     this.getsubjects();
     window.location.href="/admin/subject"
    }
}
