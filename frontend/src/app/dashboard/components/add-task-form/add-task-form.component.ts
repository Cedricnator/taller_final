import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TaskService } from '@dashboard/services/task.service';


@Component({
  selector: 'app-add-task-form',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './add-task-form.component.html',
  styleUrl: './add-task-form.component.css'
})
export class AddTaskFormComponent {
  private fb = inject(FormBuilder);
  private _taskService = inject(TaskService)


  public addTaskForm: FormGroup = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
  })

  public createTask(){
    if(this.addTaskForm.invalid) return;
    window.location.reload()
    return this._taskService.createTask(
      this.addTaskForm.value.title, this.addTaskForm.value.description, false
    ).subscribe();
  }
}
