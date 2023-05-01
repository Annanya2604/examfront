import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StandardService } from 'src/app/services/standard.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-standard',
  templateUrl: './update-standard.component.html',
  styleUrls: ['./update-standard.component.css']
})
export class UpdateStandardComponent implements OnInit {
  constructor(private _route:ActivatedRoute,private _standard:StandardService){}
  sId=0;
  std:any;
  ngOnInit(): void {
    //console.log(this._route.snapshot.params);
    this.sId=this._route.snapshot.params['standardId'];
    //alert(this.sId)
    this._standard.getStandard(this.sId).subscribe(
      (data:any)=>{
        this.std=data;
        console.log(data);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  //update form submit
  public updateData(){
   // alert("test")
   this._standard.updateStandard(this.std,this.sId).subscribe((data)=>{
    Swal.fire(
      'Standard updated successfully!',
      'done!',
      'success'
    )
   },
   (error)=>{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      
    })
    console.log(error)
   }
   )
  }
}
