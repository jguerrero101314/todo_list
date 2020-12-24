import { Injectable } from '@angular/core';
import { Task } from '../models/taks';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument 
} from "@angular/fire/firestore";
import { Observable } from 'rxjs';

export interface Item { title: string; }

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  public TaskList: Task[] = [];

  items: Observable<Item[]>;
  private tacDoc: AngularFirestoreDocument<Task>;

  constructor(private afs: AngularFirestore) { }

  getTask(){
    return this.afs.collection('note').snapshotChanges();
  }

 
   addTask(data: {title: string}) {
    return this.afs.collection('note').add(data);
  }
 

  updateTask( task:any) {
     console.log('taskService',task);
     for( var x of task){
      let idtask = x.id;
      let titletask = x.data.title;
      console.log('taskServiceID', idtask +" y "+ 'taskServiceTitle',titletask);

      return  this.afs.collection("note").doc(idtask).update(titletask);
      // this.tacDoc = this.afs.doc<any>(`note/${idtask}`);
      // this.tacDoc.update(task);
     }
     

    // this.tacDoc = this.afs.doc<Task>(`task/${idtask}`);
    // this.tacDoc.update(task);
    // return   this.afs.collection("note").doc(idtask).update(task.data.title);

  }
  
  deleteTask(_id:any){
    console.log('service:',_id);
    return   this.afs.collection("note").doc(_id).delete();
  }
}
