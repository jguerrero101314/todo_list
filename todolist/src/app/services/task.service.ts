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

  private itemsCollection: AngularFirestoreCollection<Task>;

  public TaskList: Task[] = [];


  constructor(private afs: AngularFirestore) { }

  getTask(){
    return this.afs.collection('note').snapshotChanges();
  }
  // getOneTask(_id:number){
  //   return TaskList.find(task => task.id === _id)
  // }

  addTask(data: {title: string, id: number}){
    return this.afs.collection('note').add(data);

  }

   editTask(documentId: string, data: any) {
    return this.afs.collection('note').doc(documentId).set(data);
  }
  

  // editTask(_id:any, title:string){
  //   return  this.afs.collection("title").doc(_id).update(title);
  // }
  // deleteTask(_id:any){
  //   return   this.afs.collection("title").doc(_id).delete();
  // }
}
