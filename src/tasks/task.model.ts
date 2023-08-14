export interface Task {
	id: string; // Auto generated
	title: string;
	description: string;
	status: TaskStatus;
}

// using enumertaions to have certain statuses
export enum TaskStatus {
	OPEN = 'OPEN',
	IN_PROGRESS = 'IN_PROGRESS',
	DONE = 'DONE'
}
