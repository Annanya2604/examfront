import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.css']
})
export class ViewQuizComponent implements OnInit {
  
  searchText:any
  quizzes:any=[]
  page:number=1;
  count:number=0;
  tableSize :number =5;
  tableSizes :any=[5,10,15,20];
  
  constructor(private _quiz:QuizService,private router:Router){}
  ngOnInit(): void {
    this.getQuiz()
  }
  // private getstandards(){
  //   this._standard.standards().subscribe((data:any)=>{
  //     this.standards=data;//we pass the incoming data to the standards object
  //     console.log(this.standards)
  //   })
    
  // }
  private getQuiz(){
    this._quiz.getquiz().subscribe((data:any)=>{
      this.quizzes=data;
      console.log(this.quizzes)
    })
  }
  onTableDataChange(event:any){
    this.page=event;
    this.getQuiz();
  }

  OnTableSizeChange(event:any):void{
    this.tableSize=event.target.value;
    this.page=1
    this.getQuiz();

  }

  
  update(quizId:any){

    this.router.navigate(['admin/updatequiz/'+quizId])

  }
  deleteQuiz(quizId:any){
    this._quiz.deletequiz(quizId).subscribe((data:any)=>{
      console.log(data)
    });
     this.getQuiz();
    window.location.href="/admin/viewquiz"
    }
    viewques(quizId:any){

      this.router.navigate(['admin/viewquestions/'+quizId])
  
    }
    
}
