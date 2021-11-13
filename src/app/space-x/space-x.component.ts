import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-space-x',
  templateUrl: './space-x.component.html',
  styleUrls: ['./space-x.component.css']
})
export class SpaceXComponent {

  title = 'SpaceX';
  data:any =[]
  constructor(private http: HttpClient) {

  }

  getData(){
    const url ='https://api.spacexdata.com/v3/missions'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
  }
}
  

