import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { newTask } from "../../dataModels";



@Component({
    selector: "app-new-task",
    standalone: true,
    imports:[FormsModule],
    templateUrl: './new-task.component.html',
    styleUrl: './new-task.component.css'
})

export class newtaskComponent{
    enteredTitle = '';
    enteredSummary = '';
    enteredDate = '';
    @Output() Cancel = new EventEmitter<void>();
    @Output() add = new EventEmitter<newTask>();

    OnCancel(){
        this.Cancel.emit();
    }
    OnSubmit(){
        this.add.emit(
            {
                title : this.enteredTitle,
                summary : this.enteredSummary,
                date : this.enteredDate
            }
        );
      
    }

}