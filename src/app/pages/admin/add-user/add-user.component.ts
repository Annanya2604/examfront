import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SectionService } from 'src/app/services/section.service';
import { StandardService } from 'src/app/services/standard.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{
   sections:any
  standards:any=[]
sectionData:any=[];
stdId:any;
 hide=true
 user:any={
  username:'',
  password:'',
  firstname:'',
  lastname:'',
  email:'',
  standard:null,
  section:null
 }

constructor(private _standard:StandardService,private _section:SectionService,private _route:ActivatedRoute,private _user:UserService){}
  ngOnInit(): void {
    this.getStandard()
    
    //this.onStandardChange()
    
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
    this._section.getSectionByStandard(this.user.standard.standardId).subscribe(
      (data)=>{
        this.sections=data;
        console.log(this.sections)
      }
    )
  }
  
  addusers(){console.log(this.user)
    Swal.fire({
      title: 'Do you want to save the changes?',
      //showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      //denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        // Swal.fire('Saved!', '', 'success')
        this._user.addusers(this.user).subscribe(
      
          (data:any)=>{
            
            // this.standard.standardName='';
            // this.standard.description='';
            
            console.log(data);
            
          },
          (error)=>{
            Swal.fire(
              'Please enter a valid username',
              'username already exists !!',
              'error'
            )
            console.log(error);
          }
        )
        window.location.href="/admin/users"
      } 
      else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    // this._user.addusers(this.user).subscribe(
      
    //   (data:any)=>{
        
    //     // this.standard.standardName='';
    //     // this.standard.description='';
        
    //     console.log(data);
    //     window.alert("user added successfully");
    //   },
    //   (error)=>{
    //     Swal.fire(
    //       'Please enter a valid username',
    //       'username already exists !!',
    //       'error'
    //     )
    //     console.log(error);
    //   }
    // )
  }
  
}
