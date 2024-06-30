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

  constructor() { }

  #taskState = signal<TaskState>({
    task: []
  })

}
