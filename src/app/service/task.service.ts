import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';

const httpOptions ={
  headers: new HttpHeaders ({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = "http://localhost:5000/tasks"

  constructor(
    private http:HttpClient
  ) { }
  
  getTasks() : Observable<Task []>{
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task:Task): Observable<Task>{
    // para eliminar task de db.json
    //no funciona
    const url= `s{this.apiUrl}/s{task.id}` ;
    return this.http.delete<Task>(url)
  }

  updateTaskReminder (task:Task): Observable<Task> {
    // para cambiar el estado de true/false en db.json
    //no funciona
    const url =	`s{this.apiUrl}/s{task.id}`
    return this.http.put<Task>(url, task, httpOptions)
  }

}
