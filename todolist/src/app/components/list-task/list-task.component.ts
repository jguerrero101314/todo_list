import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

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
  
  @Input() filterNotes: string = '';

  constructor(
    private listServices: TaskService,
    private modalService: NgbModal
  ) {}

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
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to retrieve this value!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
        this.listServices
          .deleteTask(id)
          .then(() => {})
          .catch((err) => {
            console.log(err);
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'I was not eliminated ah :)', 'error');
      }
    });
  }
  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        () => {
          this.closeResult = `Dismissed ${this.editTaskForm()}`;
        }
      );
  }
}
