import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-questions',
  templateUrl: './update-questions.component.html',
  styleUrls: ['./update-questions.component.css']
})
export class UpdateQuestionsComponent implements OnInit{
  
  selectedOption:any
  constructor(private _question:QuestionService,private _route:ActivatedRoute,private router:Router){}
 qId:any
 quesId:any
 ques:any
  questions:any={
    quiz:{
     quizId:this._route.snapshot.params['quizId'],
     quizName:''
    },
   quesMarks:'',
   quesName:'',
   answer:[{
     optionName:'',
     isCorrect:false

     },
     {
       optionName:'',
       isCorrect:false
     },
     {
       optionName:'',
       isCorrect:false
     },
     {
       optionName:'',
       isCorrect:false
     }
 ]
  }
  ngOnInit(): void {
    
    this.qId=this._route.snapshot.params['quizId'];
    this.quesId=this._route.snapshot.params['quesId'];
    console.log(this.quesId)
    //alert(this.sId)
    this._question.getquestionById(this.quesId).subscribe(
      (data:any)=>{
        this.questions=data;
        console.log(this.questions);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  
  selectChangeHandler (event:any) {
    //update the ui  
    //event.value;
     this.selectedOption = event.value;
    // console.log(this.selectedOption)
    if(this.selectedOption==1){
      this.questions.answer[0].isCorrect=true
      this.questions.answer[1].isCorrect=false
      this.questions.answer[2].isCorrect=false
      this.questions.answer[3].isCorrect=false
    }
    if(this.selectedOption==2){
      this.questions.answer[0].isCorrect=false
      this.questions.answer[1].isCorrect=true
      this.questions.answer[2].isCorrect=false
      this.questions.answer[3].isCorrect=false
    }
    if(this.selectedOption==3){
      this.questions.answer[0].isCorrect=false
      this.questions.answer[1].isCorrect=false
      this.questions.answer[2].isCorrect=true
      this.questions.answer[3].isCorrect=false
    }
    if(this.selectedOption==4){
      this.questions.answer[0].isCorrect=false
      this.questions.answer[1].isCorrect=false
      this.questions.answer[2].isCorrect=false
      this.questions.answer[3].isCorrect=true
    }
  }
  
  viewques(quizId:any){

    this.router.navigate(['admin/viewquestions/'+quizId])

  }
  public updateQuestion(){
    // alert("test")
    this._question.updatequestions(this.questions,this.quesId).subscribe((data)=>{
      Swal.fire(
        'updated successfully!',
        'done!',
        'success'
        
      )
    
    },
    (error)=>{
     window.alert('Error in updating quiz');
     console.log(error)
    }
    )
   }
   

}
