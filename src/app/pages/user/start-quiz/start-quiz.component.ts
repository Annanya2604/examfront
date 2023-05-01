import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';
import { StudentqueansService } from 'src/app/services/studentqueans.service';
import { StudentquizService } from 'src/app/services/studentquiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css'],
})
export class StartQuizComponent implements OnInit {
  qid: any;
  questions: any = {};
  marksGot = 0;
  correctAnswers = 0;
  attempted = 0;
  mystring: any;
  userDetails: any;
  ans: any;
  que: any;
  a: any;
  marks: any;
  number: any = 0;
  number2: any = 0;
  timer:any
  quizStartDate :any
  quizStartTime:any
  quizEndDate:any
  quizEndTime:any
  isSubmit:any=false
  quiz:any=[]
  studquiz:any={}
  studentqueans: any = {
    user: null,
    quesMarks: [],
    ques: [],
    answer: [],
  };

  studentquiz: any = {
    attemptedques: '',
    correctAnswer: '',
    quiz: null,
    user: null,
    //marksObtained:null
    marksObtained: '',
    resultStatus: '',
  };

  // user:any={
  //   username:'',
  //   password:'',
  //   firstname:'',
  //   lastname:'',
  //   email:'',
  //   standard:null,
  //   section:null
  //  }
  constructor(
    private router: Router,
    private _route: ActivatedRoute,
    private _question: QuestionService,
    private _studentqueans: StudentqueansService,
    private _studquiz: StudentquizService,
    private _quiz:QuizService
    
  ) {}
  ngOnInit(): void {
    this.qid = this._route.snapshot.params['quizId'];
    this.loadQuestions();
    this.loadQuiz();
    this.mystring = localStorage.getItem('user');
    this.userDetails = JSON.parse(this.mystring);
    // this.getStudentQuiz()
    // this.quizStartDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    //   this.quizStartTime = this.datepipe.transform(new Date(), 'HH:mm:ss');
    // const userid=userDetails.id
    // console.log(userDetails);

    // let end = new Date(...).getTime();
    // let start = new Date().getTime();

    // timmer = end -start;

  }

  count(){
    let end=new Date(this.quiz.quizEndTime).getTime();
  }

  loadQuiz(){
    this._quiz.getquizById(this.qid).subscribe((data:any)=>{
       this.quiz=data
       console.log(this.quiz)
    })
  }
  loadQuestions() {
    this._question.getquestionsOfQuizForTest(this.qid).subscribe(
      (data: any) => {
        this.questions = data;
        this.timer=this.questions.length*2*60
        this.questions.forEach((q: any) => {
          q['givenAnswer'] = '';
        });
        console.log(this.questions);
        this.startTimer();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  mrk:any=''
  private getStudentQuiz(){
    
    this._studquiz.getStudentquiz(this.userDetails.id,this.qid).subscribe((data:any)=>{
      this.studquiz=data;
      this.mrk=data.marksObtained
      console.log(this.studquiz)
    })
  }

  back(quizId: any) {
    this.router.navigate(['user-dashboard/instructions/' + quizId]);
  }

  startTimer(){
    let t=window.setInterval(()=>{
      if(this.timer<=0){
        this.submitQuiz()
        clearInterval(t)
      }else{
        this.timer--
      }
    },1000)
  }

  getFormattedTime(){
    let mm=Math.floor(this.timer/60)
    let ss=this.timer-mm*60
    return `${mm} min: ${ss} sec `
  }

  submitQuiz() {
    Swal.fire({
      title: 'Do you want to submit the quiz?',
      // showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'submit',
      icon: 'info',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      this.isSubmit=true
      if (result.isConfirmed) {
        if (this.questions && this.questions.length > 0) {
          for (let i = 0; i < this.questions.length; i++) {
            this.studentqueans.ques.push(this.questions[i]);
            this.questions[i].answer.forEach((ans: any) => {
              // console.log(ans)  && ans.isCorrect==true
              if (this.questions[i].givenAnswer === ans.optionId) {
                this.studentqueans.answer.push(ans);
              }
            });
          }
        }
        if (this.questions && this.questions.length > 0) {
          for (let i = 0; i < this.questions.length; i++) {
            const ques = this.questions[i];
            console.log(ques.quesMarks);
            this.studentqueans.quesMarks.push(ques.quesMarks);
          }
        }

        if (this.questions && this.questions.length > 0) {
          for (let i = 0; i < this.questions.length; i++) {
            if (this.questions[i].givenAnswer != null) {
              this.number++;
              
            }
          }
        }
        if (this.questions && this.questions.length > 0) {
          for (let i = 0; i < this.questions.length; i++) {
            this.questions[i].answer.forEach((ans: any) => {
              // console.log(ans)  && ans.isCorrect==true
              if (
                this.questions[i].givenAnswer === ans.optionId &&
                ans.isCorrect === true
              ) {
                this.number2++;
                
              }
            });
          }
        }
        this.studentquiz.attemptedques = this.number;
        this.studentquiz.correctAnswer = this.number2;
        this.studentquiz.user = this.userDetails;
        this.studentquiz.quiz=this.questions[0].quiz

       
        this.studentqueans.user = this.userDetails;
        console.log(this.studentqueans)
        
        // this.studentquiz.quiz=this.questions.ques.quiz

        // console.log(this.studentqueans);
          console.log(this.studentquiz)
          // this.quizEndDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
          // this.quizEndTime = this.datepipe.transform(new Date(), 'HH:mm:ss');
        this._studentqueans.addstudentqueans(this.studentqueans).subscribe(
          (data: any) => {
            console.log(data);
            this._studquiz.addstudentquiz(this.studentquiz).subscribe(
              (data: any) => {
                console.log(data);
                this.studquiz=data
                console.log('quiz submitted successfully');
                this.getStudentQuiz();
              },
              (error) => {
                console.log(error);
              }
            );
             console.log('quiz submitted successfully');
          },
          (error) => {
            console.log(error);
          }
        );

        //calculate
        // console.log(this.questions)
        // this.questions.forEach((q:any)=>{
        //   q.answer.forEach((ans:any)=>{
        //     if(q.givenAnswer==ans.optionId){
        //       console.log("correct answer")
        //     }
        //     else{
        //      console.log("The answer is not correct")
        //     }
        //   })
        // })
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }
}
