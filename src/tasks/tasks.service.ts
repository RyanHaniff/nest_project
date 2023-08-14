import { Injectable } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TasksService {
	// set to private and allow methods to access this array
	private tasks: Task[] = []; // type of task is a task array
	// public by defualt
	getAllTasks(): Task[] {
		return this.tasks;
	}

	createTask() {}
}
