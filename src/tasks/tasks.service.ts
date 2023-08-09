import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  // set to private and allow methods to access this array
  private tasks = [];

  // public by defualt
  getAllTasks() {
    return this.tasks;
  }
}
