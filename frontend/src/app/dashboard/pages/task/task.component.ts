import { Component, computed, inject, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { TaskService } from '@dashboard/services/task.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddTaskFormComponent } from '@dashboard/components/add-task-form/add-task-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

interface Tasks{
  id:          number;
  title:       string;
  description: string;
  done:        boolean
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CardComponent, 
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  private _taskService = inject(TaskService)

  public tasks = signal<Tasks[]>([])
  public taskes = computed( () => {
    return this.tasks()
  })

  constructor(){
    console.log("Task component loaded")
    this._taskService.getTasks().subscribe( 
      tasks => {
        this.tasks.set( tasks )
      }
    )
  }

  
  public showTask(id: number){
    return this._taskService.getTask(id);
  }

  public completeTask(id: number){
    return this._taskService.completeTheTask(id);
  }

  public deleteTask(id: number){
    this._taskService.deleteTask(id).subscribe()
    return window.location.reload();
  }

  public updateTask(id: number, title: string, description: string, isDone: boolean){
    return this._taskService.updateTask(id, title, description, isDone);
  }

  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(AddTaskFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
