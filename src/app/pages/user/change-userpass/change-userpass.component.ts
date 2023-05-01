import { Component, OnInit } from '@angular/core';
import { ChangePasswordService } from 'src/app/services/change-password.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-change-userpass',
  templateUrl: './change-userpass.component.html',
  styleUrls: ['./change-userpass.component.css']
})
export class ChangeUserpassComponent implements OnInit {
  
  password:any={
    username:'',
    oldpassword:'',
    newpassword:''
  }
  mystring:any
  userDetails:any
  hide=true
  hide1=true

  constructor(private _changepassword:ChangePasswordService){}
  ngOnInit():void{
    this.mystring=localStorage.getItem('user')
    //console.log(this.mystring)
   this.userDetails = JSON.parse(this.mystring);
   console.log(this.userDetails)
   
  }

  public changepassword(){
    this.password.username=this.userDetails.username
    Swal.fire({
      title: 'Are you sure ?',
      text: "You want to change the password!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._changepassword.changepass(this.password).subscribe(
          (data:any)=>{
          
             console.log(data)
        }
        
        )
        Swal.fire(
          'Password changed successfully!',
          'success'
        )
      }
    })
    // this._changepassword.changepass(this.password).subscribe(
    //   (data:any)=>{
      
    //      console.log(data)
    // }
    
    // )
  }

}


// }
