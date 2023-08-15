import { Module } from '@nestjs/common';
// imported the tast controller for us from `nest g controller tasks --no-spec`
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
	controllers: [TasksController],
	providers: [TasksService],
})
export class TasksModule {}
