import { Component, OnInit } from '@angular/core';
import { TaskService} from '../../services/task.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  myId = 0;
  newTask = {
    id: this.myId,
    title:''
  }

  constructor( private listService: TaskService) { }

  ngOnInit(): void {
  }
  addTasks(){
    // console.log("enviando tarea", this.newTask);
    // this.listService.addTask(this.newTask.title).then(resp=>{
    //   console.log(resp);

    // }).catch(error => {
    //     console.error(error);
    // })
    
  }

}
