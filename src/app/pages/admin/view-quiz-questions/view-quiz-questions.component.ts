import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnswerService } from 'src/app/services/answer.service';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit{
  qId:any;//quizId
  quesId:any
  qName:any
  questions:any=[]
  answers:any=[]
  quizzes:any=[]
  
  constructor(private _route:ActivatedRoute,private _question:QuestionService,private _answer:AnswerService,private router:Router,private _quiz:QuizService){ }
  ngOnInit(): void {
    this.qId=this._route.snapshot.params['quizId'];
    
    //this.qName=this._route.snapshot.params['quizName']
    console.log(this.qId)
    
    this.getquestions();
    
    
    
    
    //console.log(this.qName)
  }
  // private getQuiz(){
  //   this._quiz.getquiz().subscribe((data:any)=>{
  //     this.quizzes=data;
  //     console.log(this.quizzes)
  //   })
  // }
  private getquestions(){
    this._question.getquestions(this.qId).subscribe((data:any)=>{
      
      this.questions=data;                               //we pass the incoming data to the standards object
      console.log(this.questions)
      // this.getAnswerByQues();
      
    })
    
  }
  addques(quizId:any){

    this.router.navigate(['admin/addquestions/'+quizId])

  }
  updateques(quizId:any,quesId:any){
    this.router.navigate(['admin/updatequestions/'+quizId+"/"+quesId])
  }
//   private getanswers(){
//     this._answer.getanswer().subscribe((data:any)=>{
//       this.answers=data;//we pass the incoming data to the standards object
//       console.log(this.answers)
//     })
    
//  }
  // private getAnswerByQues(){
  //   //console.log(this.questions.quesId);
  //   for(let i=0;i<this.questions.length;i++){
  //   this._answer.getAnswerByQuestion(this.questions[i].quesId).subscribe((data:any)=>{
  //     this.answers=data;
  //      console.log(this.answers)
  //   })
  // }
  
  //console.log(this.answers)
  //} 
  deleteQuestions(quesId:any){
    this._question.deletequestions(quesId).subscribe((data:any)=>{
      console.log(data)
      console.log("data deleted successfully")
      
       //this.ngOnInit();//refresh the page
    });
    window.location.href="/admin/viewquestions/"+quesId
    //  this.getquestions();
      
    }
  

}
