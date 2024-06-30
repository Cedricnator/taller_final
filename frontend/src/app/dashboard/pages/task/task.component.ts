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
}
