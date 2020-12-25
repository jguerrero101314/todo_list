import { Injectable } from '@angular/core';

import {
  AngularFirestore
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class TaskService {


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