import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit{
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
   selectedOption:any
   constructor(private _question:QuestionService,private _route:ActivatedRoute,private router:Router){}
  qId:any
  ngOnInit(): void {
  //  this.getquestions()
   this.qId=this._route.snapshot.params['quizId'];
  }
  
  // private getquestions(){
  //   this._question.getquestions(this.qId).subscribe((data:any)=>{
      
  //     this.questions=data;                               //we pass the incoming data to the standards object
  //     console.log(this.questions)
  //     // this.getAnswerByQues();
      
  //   })
    
  // }
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
 
  addquestion(){
    // this.quiz.subject=this.subjects.subjectId
    console.log(this.questions);
    this._question.addquestions(this.questions).subscribe(
      
      (data:any)=>{
        
        // this.standard.standardName='';
        // this.standard.description='';
        //this.questions.answer.optionName=this.selectedOption
        // console.log(data);
        // window.alert("question added successfully");
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
            window.location.href="/admin/viewquestions/"+this.qId
          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
          }
        })
        
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  viewques(quizId:any){

    this.router.navigate(['admin/viewquestions/'+quizId])

  }
  
}
