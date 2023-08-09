import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  // injected tasksservice inside our controller
  constructor(private tasksService: TasksService) {}

  // we want this method to be called when a Get request comes in
  @Get()
  getAllTasks() {
    return this.getAllTasks();
  }
}
