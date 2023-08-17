import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../task.model';

export class GetTasksFilterDto {
	//  instead of doing status? we can use the decorator
	@IsOptional()
	@IsEnum(TaskStatus)
	status?: TaskStatus; // question mark makes the vallue optional
	
	@IsOptional()
	@IsString()
	search?: string;
}
