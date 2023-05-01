import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  qid:any
  quiz:any={
    quizName:''
  }
  constructor(private _route:ActivatedRoute,private _quiz:QuizService,private router:Router){}
  ngOnInit(): void {
    this.qid=this._route.snapshot.params['quizId']
    console.log(this.qid)

   this._quiz.getquizById(this.qid).subscribe(
    (data)=>{
      //console.log(data)
      this.quiz=data // incoming data stored in quiz variable
    }
   )
  }

  back(){
    
      this.router.navigate(['user-dashboard/'])
  
    
  }
  start(quizId:any){
    Swal.fire({
      title: 'Do you want to start the quiz?',
      // showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'start',
      icon:'info'
      
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.router.navigate(['user-dashboard/start/'+quizId])
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    //this.router.navigate(['user-dashboard/start/'+quizId])

  }

}
