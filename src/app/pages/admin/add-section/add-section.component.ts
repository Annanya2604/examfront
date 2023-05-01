import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SectionService } from 'src/app/services/section.service';
import { StandardService } from 'src/app/services/standard.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.css']
})
export class AddSectionComponent implements OnInit {
 
 standards=[  //static array of objects
  {
    standardId:'',
    description:'',
    standardName:''
  }
  
 ]
 
  sectionData={
  
  sectionName:'',
  //standardName:''
  //standardId:'',
  //standards:''
  standard:{
    standardId:'',
    
  }
 }
 constructor(private _standards:StandardService, private snack:MatSnackBar,private _section:SectionService){} //injecting service like autowiring in spring boot
 ngOnInit(): void {
  this._standards.standards().subscribe(
  (data:any)=>{
    //load standards
    //dynamically load 
    this.standards=data
    console.log(this.standards)

  },
  (error)=>{
    console.log(error)
  }

  )
}

addSection(){
  console.log(this.sectionData)
  if(this.sectionData.sectionName.trim()==''||this.sectionData.sectionName==null)
  {
      this.snack.open("section name required !!",'',{
        duration:3000,
      })
      return;
  }

  //call server
  this._section.addsections(this.sectionData).subscribe(
    (data)=>{
      // console.log("section added successfully")
      this.sectionData={
  
        sectionName:'',
        //standardName:''
        //standardId:'',
        //standards:''
        standard:{
          standardId:'',
          
        }
       }
       Swal.fire({
        title: 'Do you want to save the changes?',
        // showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        // denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
          window.location.href="/admin/section"
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
    },
    (error)=>{
      Swal.fire(
        'Please enter a valid sectionName',
        'SectionName already exists in the selected standard',
        'error'
      )
      console.log("error")
    }
  )
}

}
