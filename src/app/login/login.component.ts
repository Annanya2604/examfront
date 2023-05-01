import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    //creating an object
    loginData={
      username:'',
      password:'',
    };

    constructor(private snack:MatSnackBar,private login:LoginService){
      
    }
     formSubmit(){
      console.log("login form submitted");
      if(this.loginData.username.trim()==''||this.loginData.username==null)
      {
           this.snack.open('Username is required!!','',{
            duration:3000,
           });
           return;
      }
      if(this.loginData.password.trim()==''||this.loginData.password==null)
      {
           this.snack.open('Password is required!!','',{
            duration:3000,
           });
           return;
      }
      this.login.generateToken(this.loginData).subscribe((response:any) =>{
        console.log("success");
        console.log(response);
        //if login is successful
        this.login.loginUser(response.token);
        this.login.getCurrentUser().subscribe(
          (user:any)=>{
            this.login.setUser(user);
            console.log(user)
            //redirect admin : admin dashboard
            if(this.login.getUserRole()=="Admin")
            {
                 //admin dashboard
                 window.location.href='/admin/home'

            }else if(this.login.getUserRole()=='User')
            {
                  //normal user dashboard
                  window.location.href='/user-dashboard';
            }else{
              this.login.logout();
              location.reload();
            }
          }
        )
        
      },
        (error:any)=>{
          console.log("Error");
          console.log(error);
          this.snack.open("Invalid details!! Try Again",'',{
              duration:3000,
          });
        
        }

     
      )
  
      //   (error:any)=>{
      //     console.log("Error");
      //     console.log(error);
      //   }

    //  }
    

    }
}
