// modules

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

// components

import { AppComponent } from './app.component';



// environments

import { environment } from '../environments/environment';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ListTaskComponent } from './components/list-task/list-task.component';





@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    ListTaskComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule {}
