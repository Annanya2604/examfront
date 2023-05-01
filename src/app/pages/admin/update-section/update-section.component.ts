import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SectionService } from 'src/app/services/section.service';
import { StandardService } from 'src/app/services/standard.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-section',
  templateUrl: './update-section.component.html',
  styleUrls: ['./update-section.component.css']
})
export class UpdateSectionComponent implements OnInit {
  constructor(private _route:ActivatedRoute,private _section:SectionService,private _standard:StandardService){}
//   standards=[  //static array of objects
//   {
//     standardId:'',
//     description:'',
//     standardName:''
//   }
  
//  ]
standards:any;
 sectionData={
  
  sectionName:'',
  //standardName:''
  //standardId:'',
  //standards:''
  standards:{
    standardId:'',
    
  }
 }
  secId=0
  section:any;
  sectionId:any
  ngOnInit(): void {
    this.getsections();
    this.getStandard();
   
    
    
  }

  getStandard(){
    this._standard.standards().subscribe((data:any)=>{
      this.standards=data;//we pass the incoming data to the standards object
      console.log(this.standards)
    },(error)=>{
      console.log(error)
    })
  }

  
  getsections(){
    this.secId=this._route.snapshot.params['sectionId']
    //alert(this.secId)
    this._section.getsectionById(this.secId).subscribe(
      (data:any)=>{
        this.section=data;
        //this.selectedDep=data.standard.standardId;
        console.log(this.section.standard.standardId)
        console.log(data)
      },
      (error)=>{
        console.log(error)
      }
    )
    
  }

  //update method
  public update(){
    // alert("test")
    this._section.updateSection(this.section,this.secId).subscribe((data)=>{
      Swal.fire(
        'updated successfully!',
        'done!',
        'success'
        
      )
     
      
      console.log(data)
    },(error)=>{
      console.log(error)
    })  
    
  }
  
}
