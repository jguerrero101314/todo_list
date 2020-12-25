import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {


  taskTitle: string;
  public notes: any[] = [];

 
    filterNotes = '';
  // @Input () filterNotes: string;

  constructor(private listService: TaskService) {}

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
 
        this.taskTitle ='';
        this.ngOnInit();
 }  
}
