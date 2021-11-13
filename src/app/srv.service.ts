import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SrvService {
  num = 3;

  public task = [
   {
     "name" : "Exercise",
     "id" : 1,
     "details" : "Deadline : NA"
   },
   
   {
     "name" : "Submit assignments",
     "id" : 2,
     "details" : "Deadline : 2 Nov 2021"
   },
   {
     "name" : "Eat",
     "id" : 3,
     "details" : "Deadline : NA"
   }
 ];

  getTasks(){
    return this.task; 
  }

  getNumber(){
    return this.num;
  }

  constructor() { }
}
