import { Component,EventEmitter,Input, Output } from "@angular/core";

interface Tasks{
    id:string,
    userId:string,
    title:string,
    dueDate:string,
    summary:string
}


@Component({
    selector: "app-task",
    standalone: true,
    templateUrl:'./task.component.html',
    styleUrl: './task.component.css'

})

export class TaskComponent{
     @Input({required:true}) task!: Tasks;
     @Output() Complete = new EventEmitter();

     OnCompleteTasks(){
        this.Complete.emit(this.task.id);
     }
}

