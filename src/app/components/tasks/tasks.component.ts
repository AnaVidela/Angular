import { Component,OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[]= [];

  constructor (
    private taskService : TaskService)
    {}

  
  ngOnInit():void {
    this.taskService.getTasks().subscribe((tasks)=>(this.tasks= tasks)); 

  }
}
