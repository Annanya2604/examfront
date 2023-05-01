import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StandardService } from 'src/app/services/standard.service';
import { SubjectService } from 'src/app/services/subject.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-subject',
  templateUrl: './update-subject.component.html',
  styleUrls: ['./update-subject.component.css']
})
export class UpdateSubjectComponent implements OnInit {
  standards:any;
//   subjectData={
  
//   subjectName:'',
//   //standardName:''
//   //standardId:'',
//   //standards:''
//   standards:{
//     standardId:'',
    
//   }
//  }
  subId=0
  subject:any;
  subjectId:any
  constructor(private _route:ActivatedRoute,private _subject:SubjectService,private _standard:StandardService){}
  ngOnInit(): void {
    this.getsubject()
    this.getStandard()
  }

  getStandard(){
    this._standard.standards().subscribe((data:any)=>{
      this.standards=data;//we pass the incoming data to the standards object
      console.log(this.standards)
    },(error)=>{
      console.log(error)
    })
  }

  getsubject(){
    this.subId=this._route.snapshot.params['subjectId']
    //alert(this.subId)
    this._subject.getsubjectById(this.subId).subscribe(
      (data:any)=>{
        this.subject=data;
        //this.selectedDep=data.standard.standardId;
        console.log(this.subject)
        //console.log(data)
      },
      (error)=>{
        console.log(error)
      }
    )
    
  }

  //update form submit
  public updatesubject(){
     this._subject.updatesubjects(this.subject,this.subject.subjectId).subscribe((data)=>{
      Swal.fire(
        'updated successfully!',
        'done!',
        'success'
      )
      console.log(data)
      
    },(error)=>{
      console.log(error)
    
     })
     
  }
  

}
