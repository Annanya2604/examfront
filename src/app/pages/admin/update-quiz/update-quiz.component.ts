import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { timestamp } from 'rxjs';
import { QuizService } from 'src/app/services/quiz.service';
import { StandardService } from 'src/app/services/standard.service';
import { SubjectService } from 'src/app/services/subject.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent {
  searchText:any
  quizzes:any=[]
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
   selectedStd:any;
   selectedSub:any;
   stdId:any;
   quizId:any;
   startdate:any
   getdate:any
   startmonth:any
   getmonth:any
   startyear:any
   getyear:any
   starthour:any
   startmin:any
   startsec:any 
   gethour:any
   getmin:any
   getsec:any
   startTime:any=''
   createdTime:any
   endTime:any

   startdate1:any
   getdate1:any
   startmonth1:any
   getmonth1:any
   startyear1:any
   getyear1:any
   starthour1:any
   startmin1:any
   startsec1:any 
   gethour1:any
   getmin1:any
   getsec1:any
   startTime1:any=''
   createdTime1:any
   endTime1:any
   constructor(private _standard:StandardService,private _subject:SubjectService,private _route:ActivatedRoute,private _quiz:QuizService){}
   ngOnInit(): void {
     this.getStandard()
     this.getquiz()
    
    
  }
  getStandard(){
    this._standard.standards().subscribe((data:any)=>{
      this.standards=data;//we pass the incoming data to the standards object
      
      console.log(this.standards)
    },(error)=>{
      console.log(error)
    })
  }
  onStandardChange(){
    // this.stdId=this._route.snapshot.params['standardId']
    
    // this.stdId=this._route.snapshot.params
    //console.log(this.user.standard)
    this._quiz.getSubjectByStandard(this.selectedStd).subscribe(
      (data)=>{
        this.subjects=data;
        console.log(this.subjects);

      }
    )

  }
  getquiz(){
    this.quizId=this._route.snapshot.params['quizId']
    console.log(this.quizId)
    //alert(this.subId)

    this._quiz.getquizById(this.quizId).subscribe((data:any)=>{
        this.startdate=new Date(data.createdDate)
        this.getdate=this.startdate.getDate();
       
        this.startmonth=new Date(data.createdDate)
        this.getmonth=this.startmonth.getMonth()+1
        this.startyear=new Date(data.createdDate)
        this.getyear=this.startyear.getFullYear()
        this.starthour=new Date(data.createdDate)
        this.gethour=this.starthour.getHours()
        console.log(this.gethour)
        this.startmin=new Date(data.createdDate)
        this.getmin=this.startmin.getMinutes()
        this.startsec=new Date(data.createdDate)
        this.getsec=this.startsec.getSeconds()
        this.createdTime=this.getyear+"-0"+this.getmonth+"-"+this.getdate+"T"+this.gethour+":"+this.getmin
        console.log(this.createdTime)


        this.startdate=new Date(data.startTime)
        this.getdate=this.startdate.getDate()
        this.startmonth=new Date(data.startTime)
        this.getmonth=this.startmonth.getMonth()+1
        this.startyear=new Date(data.startTime)
        this.getyear=this.startyear.getFullYear()
        this.starthour=new Date(data.startTime)
        this.gethour=this.starthour.getHours()
        this.startmin=new Date(data.startTime)
        this.getmin=this.startmin.getMinutes()
        this.startsec=new Date(data.startTime)
        this.getsec=this.startsec.getSeconds()
        //console.log(this.getdate+"-0"+this.getmonth+"-"+this.getyear+" "+this.gethour+":"+this.getmin)
         this.startTime=this.getyear+"-0"+this.getmonth+"-"+this.getdate+"T"+this.gethour+":"+this.getmin
        
         this.startdate1=new Date(data.endTime)
        this.getdate1=this.startdate1.getDate()
        this.startmonth1=new Date(data.endTime)
        this.getmonth1=this.startmonth1.getMonth()+1
        this.startyear=new Date(data.endTime)
        this.getyear=this.startyear.getFullYear()
       // console.log(this.getyear)
        this.starthour1=new Date(data.endTime)
        this.gethour1=this.starthour1.getHours()
        this.startmin1=new Date(data.endTime)
        this.getmin1=this.startmin1.getMinutes()
        this.startsec1=new Date(data.endTime)
        this.getsec1=this.startsec1.getSeconds()
        this.endTime=this.getyear+"-0"+this.getmonth1+"-"+this.getdate1+"T"+this.gethour1+":"+this.getmin1
        // console.log(this.startyear1)
        // console.log(this.endTime)
        this.quiz=data;
        console.log(this.quiz);

        
        // this.selectedStd=data.standard.standardId;
        // this.selectedSub=data.section.sectionId
       this.selectedStd=data.subject.standard.standardId
       this.selectedSub=data.subject.subjectId
       this.onStandardChange()
      //  console.log(this.selectedStd)
      // console.log("subject"+this.selectedSub)
        
        // console.log(data)
      },
      (error)=>{
        console.log(error)
      }
    )
    
  }
  //asynchronous method call 
  public updatequiz(){
    
    // this.quiz.standardId=this.selectedStd
    this.quiz.subject.subjectId=this.selectedSub
   
    this._quiz.updatequiz(this.quiz,this.quiz.quizId).subscribe((data)=>{
      Swal.fire(
        'updated successfully!',
        'update successful',
        'success'
      )
     console.log(data)
   },(error)=>{
     console.log(error)
   
    })
 }
}
