import { Component, Input, output, input, Output, EventEmitter } from "@angular/core";

interface User {
    id:string;
    name:string;
    image:string;
}


@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
})


export class UserComponent{

    //@Input() avatar!:string;
    //@Input() name!: string;
    //id = input<string>();
    @Input({required:true}) users!: User;
    @Input({required:true}) Selected !: boolean;
    @Output() select = new EventEmitter();
    
    

    get ImagePath(){
        return "assets/users/" + this.users.image;
    }
    onSelectUser(){
        this.select.emit(this.users.id);
       
    }
   
}