import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateFriendDto {
  @IsNotEmpty({ message: 'name no puede estar vacío' })
  name: string;

  @IsNotEmpty({ message: 'secondName no puede estar vacío' })
  secondName: string;

  @IsNotEmpty({ message: 'workplace no puede estar vacío' })
  workplace: string;

  @IsNotEmpty({ message: 'age no puede estar vacío' })
  @IsNumber()
  age: number;

  @IsOptional()
  hobbies?: string[];
}
