import { Injectable, signal } from '@angular/core';

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
    return "Obteniendo todas las tareas..."
  }

  public createTask(title: string, description: string, isDone: boolean){
    console.table({ title, description, isDone })
    return "Creando tarea..."
  }

  public deleteTask(id: number){
    return "Eliminando tarea..."
  }

  public updateTask(title: string, description: string, isDone: boolean){
    return "Actualizando tarea..."
  }

  public completeTheTask(id: number){
    return "Compleatando la tarea con el id: " + { id }
  }

}
