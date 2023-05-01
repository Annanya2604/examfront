import { Component, OnInit } from '@angular/core';
import { ForgotPasswordService } from 'src/app/services/forgot-password.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  username:any=""
  constructor(private _forgotpassword:ForgotPasswordService){}
  ngOnInit(): void {
    
  }
  
  public getuser(){
    // this._user.getusers().subscribe((data:any)=>{
    //   this.users=data;//we pass the incoming data to the standards object
    //   console.log(this.users)
    // })
    Swal.fire({
      title: 'Do you want to submit the information?',
      //showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Submit',
      
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Username submitted successfully please check your email inbox', '', 'success')
        this._forgotpassword.forgotpassword(this.username).subscribe((data:any)=>{
      
          console.log(this.username)
        })
        
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    
    // this._forgotpassword.forgotpassword(this.username).subscribe((data:any)=>{
      
    //   console.log(this.username)
    // })
   }

}

