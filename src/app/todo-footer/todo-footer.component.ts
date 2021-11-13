import { Component, OnInit } from '@angular/core';
import { SrvService } from '../srv.service';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  number :any;

  constructor(private taskNumber:SrvService) { }

  ngOnInit(): void {
    this.number = this.taskNumber.getNumber();
  }

}
