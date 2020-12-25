import { Injectable } from '@angular/core';
import { Task } from '../models/taks';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item {
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public TaskList: Task[] = [];

  constructor(private afs: AngularFirestore) {}

  getTask() {
    return this.afs.collection('note').snapshotChanges();
  }

  addTask(data: { title: string }) {
    return this.afs.collection('note').add(data);
  }

  updateTask(task: any) {
    return this.afs.firestore.doc('/note/' + task.id).update({ title: task.data.title });
  }

  deleteTask(_id: any) {
    return this.afs.collection('note').doc(_id).delete();
  }
}