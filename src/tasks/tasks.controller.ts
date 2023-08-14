import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
	// injected tasksservice inside our controller
	constructor(private tasksService: TasksService) {}

	// we want this method to be called when a Get request comes in
	@Get()
	getAllTasks(): Task[] {
    // references the private tasksService above
		return this.tasksService.getAllTasks();
	}

  // we are cherry picking the contents we want from the body
	@Post()
	createTask(
		@Body('title') title: string,
		@Body('description') description: string,
	) {
		console.log("Title: ", title);
    console.log("Description: ", description)
    return this.tasksService.createTask(title, description);
	}

	// @Post()
	// createTask(@Body() body) { //take all of the request body
	//   console.log(body)
	// }
}
