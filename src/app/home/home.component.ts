import { Component, OnInit } from '@angular/core';
import { StudentquizService } from '../services/studentquiz.service';
import { HttpClient } from '@angular/common/http';
import { HomeService } from '../services/home.service';
import { QuizService } from '../services/quiz.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  pass:any=''
  fail:any=''
  usercount:any=''
  quizcount:any=''
  quiz:any=''
  user:any=''
  stuquiz:any=[]
  inactivequiz:any=''
  standardcount:any=''
  constructor(private _studquiz:StudentquizService,private http:HttpClient,private _home:HomeService,private _quiz:QuizService,private _user:UserService){}
  ngOnInit(): void {
    this.getpass()
    this.getfail()
    this.getusercount()
    this.getquizcount()
    this.getquiz()
    this.getinactivequiz()
    this.getstandardcount()
    
  }
  

  public getpass(){
    this._home.getpassstu().subscribe((data:any)=>{
      this.pass=data;
      // console.log(this.pass)
    })
  }

  public getfail(){
    this._home.getfailstu().subscribe((data:any)=>{
      this.fail=data;
      // console.log(data)
    })
  }

  public getusercount(){
    this._home.getusercount().subscribe((data:any)=>{
      this.usercount=data;
      // console.log(data)
    })
  }

  public getquizcount(){
    this._home.getquizcount().subscribe((data:any)=>{
      this.quizcount=data;
      // console.log(data)
    })
  }

  public getquiz(){
    this._quiz.getquiz().subscribe((data:any)=>{
      this.quiz=data;
      // console.log(this.quiz)
      this.getusers()
    
      
    })
  }

  public getusers(){
    this._user.getusers().subscribe((data:any)=>{
      this.user=data
      console.log(data)
      //  this.getstuquiz();
    })
  }

  public getstandardcount(){
    this._home.getstandardcount().subscribe((data:any)=>{
      this.standardcount=data
      console.log(this.standardcount)
      //  this.getstuquiz();
    })
  }
  public getinactivequiz(){
    this._home.getquizinactive().subscribe((data:any)=>{
      this.inactivequiz=data
      console.log(this.inactivequiz)
      //  this.getstuquiz();
    })
  }

  
  // public getstuquiz(){
  //   console.log(this.user[0].id)
  //   console.log(this.quiz[0].quizId)
  //   this._studquiz.getStudentquiz(this.user[0].id,this.quiz[0].quizId).subscribe((data:any)=>{
  //       this.stuquiz=data
  //       // console.log(data)
  //   })
  // }
  // private getstandards(){
  //   this._standard.standards().subscribe((data:any)=>{
  //     this.standards=data;//we pass the incoming data to the standards object
  //     console.log(this.standards)
  //   })
    
  }
  


