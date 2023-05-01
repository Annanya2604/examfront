import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StandardService } from 'src/app/services/standard.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-standard',
  templateUrl: './add-standard.component.html',
  styleUrls: ['./add-standard.component.css']
})
export class AddStandardComponent implements OnInit {
        
  standard={
    //standardId:'',
    standardName:'',
    description:''
  }

  constructor(private _standardservice:StandardService,private _snack:MatSnackBar){}
  ngOnInit(): void {
    
  }
  
  formSubmit()
  {
    if(this.standard.standardName.trim()==''||this.standard.standardName==null)
    {
      this._snack.open("name required",'',{
        duration:3000
      });
      return;

    }
    this._standardservice.addStandard(this.standard).subscribe(
      (data:any)=>{
        
        this.standard.standardName='';
        this.standard.description='';
        // window.alert("standard added successfully");
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
            window.location.href="/admin/standard"
          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
          }
        })
        
      },
      (error)=>{
        console.log(error);
        Swal.fire(
          'Standard name already exists',
          'Please check again!',
          'error'
        )
      }
    )
  }
}
