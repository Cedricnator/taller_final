import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { map, tap } from 'rxjs/operators';

interface Task{
  id: number;
  title: string;
  description: string;
  done: boolean;
}

interface TaskState {
  task: Task[]
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private http = inject( HttpClient )
  private baseUrl = "http://localhost:8000/api"

  #taskState = signal<TaskState>({
    task: []
  })

  private _getTaskById(id: number){
    return "Obteniendo tarea por id..."
  }

  public getTask(id: number){
    return "Obteniendo tarea..."
  }

  public getTasks(){
    return this.http.get<any>(`${this.baseUrl}/task`)
      .pipe(
        map( resp => resp ),
        tap( console.log)
      )
  }

  public createTask(title: string, description: string, done: boolean){
    console.table({ title, description, done })
    return this.http.post<any>(`${this.baseUrl}/task/`, { title, description, done })
      .pipe(
        map( resp => resp ),
        tap( console.log)
      )
  }

  public deleteTask(id: number){
    return this.http.delete(`${this.baseUrl}/task/${id}`)
      .pipe(
        map( resp => resp ),
        tap( console.log )
      )
  }

  public updateTask(id: number, title: string, description: string, isDone: boolean){
    return "Actualizando tarea..."
  }

  public completeTheTask(id: number){
    return "Compleatando la tarea con el id: " + { id }
  }

}
