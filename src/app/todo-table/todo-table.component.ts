import { Component, OnInit } from '@angular/core';
import { SrvService } from '../srv.service';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css']
})
export class TodoTableComponent implements OnInit {

  tasks : any = [];

  constructor(private taskinfo:SrvService) { }

  ngOnInit(): void {
    this.tasks = this.taskinfo.getTasks();
  }
  }
