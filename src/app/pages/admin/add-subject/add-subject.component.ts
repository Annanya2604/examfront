import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StandardService } from 'src/app/services/standard.service';
import { SubjectService } from 'src/app/services/subject.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit{
 
  standards=[  //static array of objects
  {
    standardId:'',
    description:'',
    standardName:''
  }
  
 ]
 subjectData={
  
  subjectName:'',
  //standardName:''
  //standardId:'',
  //standards:''
  standard:{
    standardId:'',
    
  }
 }
 ngOnInit(): void {
  this.getStandards()
 
}
constructor(private _standards:StandardService,private _subject:SubjectService,private snack:MatSnackBar){}

public getStandards(){
  this._standards.standards().subscribe(
    (data:any)=>{
      //load standards
      //dynamically load 
      this.standards=data
      console.log(this.standards)
  
    },
    (error)=>{
      console.log(error)
    }
  
    )
}
addSubject(){
  console.log(this.subjectData)
  if(this.subjectData.subjectName.trim()==''||this.subjectData.subjectName==null)
  {
      this.snack.open("subject name required !!",'',{
        duration:3000,
      })
      return;
  }

  //call server
  this._subject.addsubjects(this.subjectData).subscribe(
    (data)=>{
      console.log("subject added successfully")
      //alert("subject added successfully")
      this.subjectData={
  
        subjectName:'',
        //standardName:''
        //standardId:'',
        //standards:''
        standard:{
          standardId:'',
          
        }
       }
       Swal.fire({
        title: 'Do you want to save the changes?',
        // showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        // denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
          window.location.href="/admin/subject"
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
    },
    (error)=>{
      Swal.fire(
        'Please enter another subjectname',
        'subject already exists in the selected standard!!',
        'error'
      )
      console.log("error")
    }
  )
}
}
