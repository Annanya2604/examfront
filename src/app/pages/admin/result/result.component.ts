import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StudentquizService } from 'src/app/services/studentquiz.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  constructor(private _studquiz:StudentquizService,private http:HttpClient){}
  ngOnInit(): void {
    
  }
  download(){
    this.http.get('http://localhost:8080/studentquiz/download', { responseType: 'blob' })
    .subscribe((blob: Blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'tutorials.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  }

}
