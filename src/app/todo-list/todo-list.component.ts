import { Component, OnInit } from '@angular/core';
import { SrvService } from '../srv.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tasks : any = [];

  constructor(private taskinfo:SrvService) { }

  ngOnInit(): void {
    this.tasks = this.taskinfo.getTasks();
  }

}
