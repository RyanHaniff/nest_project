import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Controller('tasks')
export class TasksController {
	// injected tasksservice inside our controller
	constructor(private tasksService: TasksService) {}

	// the url would look something like this
	// http://localhost:3000/task
	// we want this method to be called when a Get request comes in
	@Get()
	getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
		// if we have any filters defined, call the tasksService.getTaskWithFilters
		// otherwise, just get all tasks
		if (Object.keys(filterDto).length) {
			return this.tasksService.getTasksWithFilter(filterDto);
		} else {
			// references the private tasksService above
			return this.tasksService.getAllTasks();
		}
	}

	// the url would look something like this
	// http://localhost:3000/task/32432fds3423mfdka
	@Get('/:id') //the colon is a path parameter
	getTaskById(@Param('id') id: string): Task {
		return this.tasksService.getTaskById(id);
	}

	@Delete('/:id')
	deleteTask(@Param('id') id: string): void {
		return this.tasksService.deleteTask(id);
	}

	@Patch('/:id/status')
	updateTaskStatus(
		@Param('id') id: string, //id is taken from the @Patch id
		@Body('status') status: TaskStatus, //status is taken from @Patch status
	): Task {
		return this.tasksService.updateTaskStatus(id, status);
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
