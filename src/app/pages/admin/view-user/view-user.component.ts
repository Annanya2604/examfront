import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  
  searchText:any
  page:number=1;
  count:number=0;
  tableSize :number =5;
  tableSizes :any=[5,10,15,20];
  users:any=[]
  
  
  constructor(private _user:UserService,private router:Router){}
  ngOnInit(): void {

    this.getusers()
  
   }

   public getusers(){
    // this._user.getusers().subscribe((data:any)=>{
    //   this.users=data;//we pass the incoming data to the standards object
    //   console.log(this.users)
    // })
    this._user.getuserexceptadmin().subscribe((data:any)=>{
      this.users=data
      console.log(this.users)
    })
   }

   onTableDataChange(event:any){
    this.page=event;
    this.getusers();
  }

  OnTableSizeChange(event:any):void{
    this.tableSize=event.target.value;
    this.page=1
    this.getusers();

  }
   update(id:any){

    this.router.navigate(['admin/updateuser/'+id])

  }
  deleteuser(id:any){
    this._user.deleteusers(id).subscribe((data:any)=>{
      console.log(data)
    });
     this.getusers();
    // window.location.href="/admin/users"
    }

}
