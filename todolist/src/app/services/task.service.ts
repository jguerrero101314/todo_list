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

   editTask(data: {_id:string, title: string}) {
    //  console.log('_id',data._id);
    //  console.log('title',data.title);
    return this.afs.collection('note').doc(data._id).set(data.title);
   
  }
  
  deleteTask(_id:any){
    console.log('service:',_id);
    return   this.afs.collection("note").doc(_id).delete();
  }
}
