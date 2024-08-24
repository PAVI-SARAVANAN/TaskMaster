import { Component,  Input, Output } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { newtaskComponent } from "./new-task/new-task.component";
import { newTask } from "../dataModels";


@Component({
    selector: 'app-tasks',
    standalone: true,
    imports: [TaskComponent, newtaskComponent],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css'
})

export class TasksComponent{
  @Input({required:true}) name!:string;
  @Input({required:true}) userid!:string;


  IsAddingTask = false;
  dummyTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the  Advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
    {
        id: 't4',
        userId: 'u4',
        title: 'Learn Angular',
        summary:
          'Learn all the basic features of Angular',
        dueDate: '2024-06-15',
      },
  ]

  constructor(){
    const taskArray = localStorage.getItem('dummyTasks');  //Fetching the task from localstorage
    if(taskArray){
      this.dummyTasks = JSON.parse(taskArray);
    }
  }
  OnAddingTask(){
    this.IsAddingTask = true;
  }
  OnCancelTask(){
    this.IsAddingTask = false;
  }
  OnSubmitTask(task: newTask){         //Adding a new task to the user
    this.dummyTasks.unshift({
      id: 'x1', //using a random id here
      userId: this.userid,     
      title: task.title,
      summary:task.summary,
      dueDate: task.date
    }); 
    this.IsAddingTask = false; 
    this.SaveTask();
  }
  
  get SelectedUserTasks(){
       return this.dummyTasks.filter((task) => task.userId === this.userid )   //Getting the selected user task

  }
   OnCompleteTask(id:string){
    this.dummyTasks = this.dummyTasks.filter((task) => task.id !== id )    //Marking the task as Complete
    this.SaveTask();

   }

   SaveTask(){
    localStorage.setItem('dummyTasks', JSON.stringify(this.dummyTasks)); //saving the task to localstorage
   }

}