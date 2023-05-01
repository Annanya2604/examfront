import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import { SubjectService } from 'src/app/services/subject.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {

  searchText:any
  subjects=[
    {
      subjectId:'',
      subjectName:'',
      standard:{
        standardId:''
        
      }
    }
  ];
  users:any=[]
  localStorage:any
  
  quizzes:any=[]
  ngOnInit(): void {
    // this.getsubjects()
    this.getusers()
    this.getQuiz()
  }
  constructor(private _quiz:QuizService,private _subject:SubjectService,private _user:UserService,private router:Router){}
  // private getQuiz(){
  //   this._quiz.getquiz().subscribe((data:any)=>{
  //     this.quizzes=data;
  //     console.log(this.quizzes)
  //   })
  // }
  // private getsubjects(){
  //   this._subject.subjects().subscribe((data:any)=>{
  //     this.subjects=data;//we pass the incoming data to the standards object
  //     console.log(this.subjects)
  //   })
    
  // }
  // private getQuiz(){
  //   //console.log(this.subjects)
  //   for(let i=0;i<this.subjects.length;i++){
  //   this._quiz.getquizBySubject(this.subjects[i].subjectId).subscribe((data:any)=>{
  //     this.quizzes=data;
  //     console.log(this.quizzes)
  //   })
  // }
    
  // }
  public getusers(){
    this._user.getusers().subscribe((data:any)=>{
      this.users=data;//we pass the incoming data to the standards object
      console.log(this.users)
    })
   }
  
   mystring:any 
  private getQuiz(){
    this.mystring=localStorage.getItem('user')
    console.log(this.mystring)
    const userDetails = JSON.parse(this.mystring);
    const userid=userDetails.id
    this._quiz.getquizByUser(userid).subscribe((data:any)=>{
      this.quizzes=data;
      console.log(this.quizzes)
    })
  }

  startquiz(quizId:any){

    this.router.navigate(['user-dashboard/instructions/'+quizId])

  }

}
