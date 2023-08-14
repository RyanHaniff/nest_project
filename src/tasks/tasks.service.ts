import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
// latest version of uuid, ranmed it like in python
import { v4 as uuid } from "uuid";

@Injectable()
export class TasksService {
	// set to private and allow methods to access this array
	private tasks: Task[] = []; // type of task is a task array

	// public by defualt
	getAllTasks(): Task[] {
		return this.tasks;
	}

	createTask(title: string, description: string): Task {
		const task: Task = {
      // using UUID to generate ID
			id: uuid(),
			title,
			description,
			status: TaskStatus.OPEN,
		};
    // push the task to the task array:
    this.tasks.push(task);

    // return the task, so the controller can return it in the http response
    return task;
	}
}
