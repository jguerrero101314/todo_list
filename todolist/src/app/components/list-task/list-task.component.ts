import { Component, OnInit } from '@angular/core';
import { TaskService} from '../../services/task.service';
import { Task } from '../../models/taks';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {

  public notes:any[] = [];
 // EditartaskTitle:any={title:''};
  EditartaskTitle: string;
  constructor( private listServices: TaskService) { }

  ngOnInit() {
    this.listServices.getTask().subscribe((notesSnapshot) => {
     
      this.notes = [];
      notesSnapshot.forEach((noteData: any) => {
        this.notes.push({
          id: noteData.payload.doc.id,
          data: noteData.payload.doc.data()
        });
        console.log(this.notes);
      })
    });
    this.EditartaskTitle = '';
  }

  editTask(task:any){
    console.log('task',task.data.title);
    this.EditartaskTitle=task.data.title;

    if(this.EditartaskTitle.trim().length === 0)return;
    
    
    this.listServices.editTask(task)
      .then(resp => {
        console.log(resp);
      }).catch(err => {
        console.log(err);
      })
    

  }

   deleteTask(id:string) {
     console.log('id',id);
     this.listServices.deleteTask(id).then( () => {
       console.log('id: ' + id);
       console.log('eliminado: ');
     }).catch(err => {
       console.log(err);
     })
  }

}
