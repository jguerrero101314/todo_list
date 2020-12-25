import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss'],
})
export class ListTaskComponent implements OnInit {
  public notes: any[] = [];
  editartaskTitle: any = {};
  taskId: string = '';

  closeResult = '';
  // filterNotes = '';

  @Input () filterNotes: string = "";

  constructor(private listServices: TaskService, private modalService: NgbModal) {}

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
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.editTaskForm()}`;
    });
  }
}
