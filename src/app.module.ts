import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [
		TasksModule,
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: 'localhost',
			port: 5432,
			username: 'postgres',
			password: 'postgres',
			database: 'task-management',
			autoLoadEntities: true, // find the entities files and loads it for us
			synchronize: true, // always keep db in sync
		}),
	],
})
// this is a test
export class AppModule {}
