import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {
  subjects:any
  constructor( private _subject:SubjectService,private _snack:MatSnackBar){}
  
  
  
  ngOnInit(): void {
    this._subject.subjects().subscribe(
      (data:any)=>{
        this.subjects=data;
      },
      (error)=>{
        this._snack.open("Error in loading subjects",'',{
          duration:3000,
        })
      }
    )
  }

}
