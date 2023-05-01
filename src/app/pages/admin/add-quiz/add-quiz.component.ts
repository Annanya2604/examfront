import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService } from 'src/app/services/quiz.service';
import { StandardService } from 'src/app/services/standard.service';
import { SubjectService } from 'src/app/services/subject.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit{
  subjects:any=[]
  standards:any=[]
  subject:any={
    subjectId:'',
    subjectName:'',
    standard:{
      standardId:'',
    }
   }
   standard:any={
    standardId:'',
    standardName:'',
    description:''
   }
   quiz:any={
    quizName:'',
    startTime:'',
    endTime:'',
    quizMarks:'',
    noOfQues:'',
    description:'',
    isActive:true,
    createdDate:'',
    updatedDate:'',
    passingMarks:'',
    subject:null
   }
  ngOnInit(): void {
    this.getStandard()
    //this.onStandardChange()
     //this.getsubjects()
    
  }
  constructor(private _subject:SubjectService, private snack:MatSnackBar,private _quiz:QuizService,private _standard:StandardService){}
  getStandard(){
    this._standard.standards().subscribe((data:any)=>{
      this.standards=data;//we pass the incoming data to the standards object
      console.log(this.standards)
    },(error)=>{
      console.log(error)
    })
  }
  private getsubjects(){
    this._subject.subjects().subscribe((data:any)=>{
      this.subjects=data;//we pass the incoming data to the standards object
      console.log(this.subjects)
    },
    (error)=>{
      console.log(error)
    }
    )
    
  }
  onStandardChange(){
    // this.stdId=this._route.snapshot.params['standardId']
    
    // this.stdId=this._route.snapshot.params
    //console.log(this.user.standard)
   
    this._quiz.getSubjectByStandard(this.standard.standardId).subscribe(
      (data)=>{
        this.subjects=data;
        console.log(this.subjects)
      }
    )
  }

  addquiz(){
    // this.quiz.subject=this.subjects.subjectId
    console.log(this.quiz);
    Swal.fire({
      title: 'Do you want to save the changes?',
      //showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
     // denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
        this._quiz.addquiz(this.quiz).subscribe(
      
          (data:any)=>{
            
            // this.standard.standardName='';
            // this.standard.description='';
            
            console.log(data);
            // window.location.href="admin/viewquiz"
          },

         
          (error)=>{
            console.log(error);
          }
          
        )
        window.location.href="admin/viewquiz"
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    // this._quiz.addquiz(this.quiz).subscribe(
      
    //   (data:any)=>{
        
    //     // this.standard.standardName='';
    //     // this.standard.description='';
        
    //     console.log(data);
    //     window.alert("quiz added successfully");
    //   },
    //   (error)=>{
    //     console.log(error);
    //   }
    // )
  }

}
