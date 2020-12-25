import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss'],
})
export class ListTaskComponent implements OnInit {
  public notes: any[] = [];
  editartaskTitle: any = {};
  taskId: string = '';



  constructor(private listServices: TaskService) {}

  ngOnInit() {
    this.listServices.getTask().subscribe((notesSnapshot) => {
      this.notes = [];
      notesSnapshot.forEach((noteData: any) => {
        this.notes.push({
          id: noteData.payload.doc.id,
          data: noteData.payload.doc.data(),
        });
      });
    });
    this.editartaskTitle = '';
  }

  editTask(task: any) {
    this.taskId = task.id;
    this.editartaskTitle = task.data.title;
  }

  editTaskForm() {
    const taskEdit = this.notes.find((item) => item.id === this.taskId);
    taskEdit.data.title = this.editartaskTitle;
    this.listServices.updateTask(taskEdit);

   
  }

  deleteTask(id: string) {
    console.log('id', id);
    this.listServices
      .deleteTask(id)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  }
}
