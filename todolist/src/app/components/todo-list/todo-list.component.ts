import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/taks';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {


  taskTitle: string;
  taskId: number;
  tasks:Task[] = [];

  constructor(private listService: TaskService) {


  }

  ngOnInit(): void {
    this.taskTitle = '';
  }
  addTasks(){
    if(this.taskTitle.trim().length === 0)return;
    
    this.listService.addTask({
        title: this.taskTitle
      })
        .then(resp => {
          console.log(resp);
        });
        this.tasks.push({
            id:this.taskId,
            title: this.taskTitle,

        })
        this.taskTitle ='';
        this.ngOnInit();
}
  
}
