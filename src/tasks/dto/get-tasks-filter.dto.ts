import { TaskStatus } from '../task.model';

export class GetTasksFilterDto {
	status?: TaskStatus; // question mark makes the vallue optional
	search?: string;
}
