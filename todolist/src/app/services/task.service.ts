import { Injectable } from '@angular/core';
import { Task } from '../models/taks';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";



@Injectable({
  providedIn: 'root'
})
export class TaskService {


  public TaskList: Task[] = [];


  constructor(private afs: AngularFirestore) { }

  getTask(){
    return this.afs.collection('note').snapshotChanges();
  }

 
   addTask(data: {title: string}) {
    return this.afs.collection('note').add(data);
  }

   editTask(documentId: string, data: any) {
    return this.afs.collection('note').doc(documentId).set(data);
  }
  
  deleteTask(_id:any){
    console.log('service:',_id);
    return   this.afs.collection("note").doc(_id).delete();
  }
}
