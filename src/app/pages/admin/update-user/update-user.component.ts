import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SectionService } from 'src/app/services/section.service';
import { StandardService } from 'src/app/services/standard.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  sections:any
  standards:any=[]
sectionData:any=[];
stdId:any;
userId:any;
  user:any={
    username:'',
    password:'',
    firstname:'',
    lastname:'',
    email:'',
    standard:null,
    section:null
   }

   selectedStd:any;
   selectedSec:any;
   constructor(private _standard:StandardService,private _section:SectionService,private _route:ActivatedRoute,private _user:UserService){}
   ngOnInit(): void {
    this.getStandard()
    this.getuser()
    
    
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
    console.log(this.user.standard)
    this._section.getSectionByStandard(this.selectedStd).subscribe(
      (data)=>{
        this.sections=data;
        console.log(this.sections);

      }
    )

  }
  getuser(){
    this.userId=this._route.snapshot.params['id']
    console.log(this.userId)
    //alert(this.subId)
    this._user.getuserById(this.userId).subscribe(
      (data:any)=>{
        this.user=data;
        console.log(this.user);
        this.selectedStd=data.standard.standardId;
        this.selectedSec=data.section.sectionId

        this.onStandardChange()
        //console.log(data)
      },
      (error)=>{
        console.log(error)
      }
    )
    
  }

  //asynchronous method call 
  public updateuser(){
    
    this.user.standard.standardId=this.selectedStd
    this.user.section.sectionId=this.selectedSec
    
    this._user.updateusers(this.user,this.user.id).subscribe((data)=>{
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
