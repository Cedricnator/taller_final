import { Component, inject } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { TaskService } from '@dashboard/services/task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  private _taskService = inject(TaskService)

  public tasks = this._taskService.getTasks();
  
  public showTask(id: number){
    return this._taskService.getTask(id);
  }

  public completeTask(id: number){
    return this._taskService.completeTheTask(id);
  }

  public deleteTask(id: number){
    return this._taskService.deleteTask(id);
  }

  public createTask(title: string, description: string, isDone: boolean){
    return this._taskService.createTask(title, description, isDone);
  }

  public updateTask(title: string, description: string, isDone: boolean){
    return this._taskService.updateTask(title, description, isDone);
  }
}
