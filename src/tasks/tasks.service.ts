import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
// latest version of uuid, ranmed it like in python
import { v4 as uuid } from 'uuid';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
	// set to private and allow methods to access this array
	private tasks: Task[] = []; // type of task is a task array

	// public by defualt
	getAllTasks(): Task[] {
		return this.tasks;
	}

	getTaskById(id: string): Task {
		return this.tasks.find((task) => task.id === id); //without the curly braces it gets automatically returned
	}

	deleteTask(id: string): void {
		// loop over and find the id
		this.tasks = this.tasks.filter((task) => task.id !== id);
	}

	updateTaskStatus(id: string, status: TaskStatus): Task {
		const task = this.getTaskById(id);
		task.status = status;
		return task;
	}

	getTasksWithFilter(filterDto: GetTasksFilterDto): Task[] {
		const { status, search } = filterDto;
		let tasks = this.getAllTasks();

		// do something with status
		if (status) {
			tasks = tasks.filter((task) => task.status === status);
		}

		if (search) {
			tasks = tasks.filter((task) => {
				if (
					task.title.toLowerCase().includes(search) ||
					task.description.includes(search)
				) {
					return true;
				}
				return false;
			});
		}

		return tasks;
	}

	createTask(createTaskDTO: CreateTaskDTO): Task {
		// destructoring the DTO
		const { title, description } = createTaskDTO;
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
