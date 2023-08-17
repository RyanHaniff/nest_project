import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TaskStatus } from "./task.model";

@Entity() // tells TypeORm that this class is an db entity
export class Task {
    @PrimaryGeneratedColumn('uuid') //auto generates the ID for our tasks and treat as primary column
    id: string;

    @Column()
    title: string;

    @Column()
    description:string;

    @Column()
    status: TaskStatus;
    
}
