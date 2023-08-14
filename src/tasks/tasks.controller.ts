import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDTO } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
	// injected tasksservice inside our controller
	constructor(private tasksService: TasksService) {}

  // the url would look something like this 
  // http://localhost:3000/task
	// we want this method to be called when a Get request comes in
	@Get()
	getAllTasks(): Task[] {
		// references the private tasksService above
		return this.tasksService.getAllTasks();
	}

  // the url would look something like this 
  // http://localhost:3000/task/32432fds3423mfdka
  @Get('/:id') //the colon is a path parameter
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id)
  }

	// we are cherry picking the contents we want from the body
	@Post()
	createTask(@Body() createTaskDTO: CreateTaskDTO): Task {
		// console.log("Title: ", title);
		// console.log("Description: ", description)
		return this.tasksService.createTask(createTaskDTO);
	}

	// @Post()
	// createTask(@Body() body) { //take all of the request body
	//   console.log(body)
	// }
}
