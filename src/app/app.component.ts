import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent} from './header/header.component';
import { UserComponent } from "./user/user.component";

import { userdata } from './userdata';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from "./tasks/task/task.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent, TaskComponent],
  templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-first-app';
  user = userdata;

  selectedUserId?:string;

  get SelectedUser(){
    return this.user.find((User) => User.id == this.selectedUserId);
  }

  onSelectUser(id:string){
      this.selectedUserId = id;
      
  }
  


  

}



