import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StandardService } from 'src/app/services/standard.service';

@Component({
  selector: 'app-view-standard',
  templateUrl: './view-standard.component.html',
  styleUrls: ['./view-standard.component.css']
})
export class ViewStandardComponent implements OnInit {
  searchText:any
  standards:any=[]
  page:number=1;
  count:number=0;
  tableSize :number =5;
  tableSizes :any=[5,10,15,20];

    constructor(private _standard:StandardService,private router:Router){}
    ngOnInit():void{

      this.getstandards();
      // this._standard.standards().subscribe((data:any)=>{
      //   this.standards=data;//we pass the incoming data to the standards object
      //   console.log(this.standards)
      // })
      // this._standard.standards().subscribe((data:any)=>{
      //   this.standards=data;
      //   console.log(this.standards)
      // },
      // (error)=>{
      //   console.log(error)
        
      // }
      //)
    }

    private getstandards(){
      this._standard.standards().subscribe((data:any)=>{
        this.standards=data;//we pass the incoming data to the standards object
        console.log(this.standards)
      })
      
    }

    onTableDataChange(event:any){
      this.page=event;
      this.getstandards();
    }

    OnTableSizeChange(event:any):void{
      this.tableSize=event.target.value;
      this.page=1
      this.getstandards()

    }


    update(standardId:any){

      this.router.navigate(['admin/updatestd/'+standardId])

    }

    dlt:any;
    // deleteStandard(standardId:any)
    // {
    //   this._standard.deleteStandard(standardId).subscribe((response:any)=>{
    //         this.standards= this.standards.filter((standard:any)=>standard.standardId!==response.standardId);
    //         alert('deleted successfully');
    //         //this._standard.standards();
    //       // this.getstandards();
    //       console.log("deleted successfully")
    //       //this.standards= this.standards.filter((standard:any)=>{return standard.standardId!=standardId});
    //       //this.getstandards();
            

    //   },(error:any)=>{
    //     console.log(error)
    //      // window.alert(error);
    //   })
    //    // alert(standardId);
    //    this.getstandards();
    // }

    deleteStandard(standardId:any){
    this._standard.deleteStandard(standardId).subscribe((data:any)=>{
      console.log(data)
    });
     this.getstandards();
    window.location.href="/admin/standard"
    }

}
