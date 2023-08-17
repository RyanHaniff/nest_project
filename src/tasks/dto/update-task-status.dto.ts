import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task.model';

export class UpdateTaskStatusDto {
	// This will check to see if the tasksStatus 
    // is one of the defined enums
	@IsEnum(TaskStatus)
	status: TaskStatus;
}
