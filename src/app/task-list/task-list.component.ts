import { Component } from '@angular/core';
import {provideLocationMocks} from "@angular/common/testing";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  newTask: string = '';
  newName: string = '';
  tasks: {name: string; completed: boolean}[] = [];
  tasksCompleted: {name: string; completed: boolean}[] = [];
  date? = new Date();

  addTask(){
    if (this.newTask.trim()) {
      this.tasks.push({ name: this.newTask, completed: false });
      this.newTask = '';
    }
  }

  toggleTask(index: number) {
    //this.tasks[index].completed = !this.tasks[index].completed;
    this.tasks[index].completed = true;
    this.tasksCompleted.push(this.tasks[index]);
    this.deleteTask(index);
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  editTask(nombre: string){
    const task = this.tasks.find(t => t.name === nombre);
    if(task){
      const newName = prompt('Nuevo nombre:', task.name);
      if (typeof newName === "string") {
        task.name = newName;
      }
    }
  }
}
