import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SectionService } from 'src/app/services/section.service';

@Component({
  selector: 'app-view-section',
  templateUrl: './view-section.component.html',
  styleUrls: ['./view-section.component.css']
})
export class ViewSectionComponent implements OnInit{
    searchText:any
    page:number=1;
    count:number=0;
    tableSize :number =5;
    tableSizes :any=[5,10,15,20];
//     standards=[  //static array of objects
//   {
//     standardId:'',
//     description:'',
//     standardName:''
//   }
  
//  ]
    sections=[
      {
        sectionId:'',// sectionId:1, 
         sectionName:'',            //sectionName:'A',
        standard:{
          standardName:''
          
        }
      }
    ];

    constructor(private _section:SectionService,private router:Router){}
    ngOnInit(): void {
      this.getsections()
    }

    private getsections(){
      this._section.getsections().subscribe((data:any)=>{
        this.sections=data;
        console.log(this.sections)
      },
      (error)=>{
        console.log(error);
        alert(error)
      }
      )
    }

    onTableDataChange(event:any){
      this.page=event;
      this.getsections();
    }

    OnTableSizeChange(event:any):void{
      this.tableSize=event.target.value;
      this.page=1
      this.getsections()

    }
    update(sectionId:any){

      this.router.navigate(['admin/updatesec/'+sectionId])

    }
    deleteSection(sectionId:any){
      this._section.deleteSection(sectionId).subscribe((data:any)=>{
        console.log(data)
      });
       
      window.location.href="/admin/section"
      }
}
