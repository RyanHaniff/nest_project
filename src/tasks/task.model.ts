export interface Task {
	id: string;
	title: string;
	description: string;
	status: TaskStatus;
}

// using enumertaions to have certain statuses
enum TaskStatus {
	OPEN = 'OPEN',
	IN_PROGRESS = 'IN_PROGRESS',
	DONE = 'DONE'
}
