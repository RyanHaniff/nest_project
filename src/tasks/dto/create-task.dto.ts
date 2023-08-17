import { IsNotEmpty } from "class-validator";

export class CreateTaskDTO {

    @IsNotEmpty() // used for validation to make sure the string are
    // not empty
	title: string;

    @IsNotEmpty()
	description: string;
    // if we add a new input here, we wont have to change any other code
    // we can change the desctructoring located in tasks.service.ts
}

