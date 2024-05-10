import { randomUUID } from 'crypto';
import { CreateFriendDto } from 'src/friend/dtos/friends.dto';

export class Friend {
  private id: string;
  name: string;
  secondName: string;
  age: number;
  workplace: string;
  hobbies: string[];
  createAt: Date;
  updateAt: Date;

  constructor(body: CreateFriendDto, id?: string) {
    this.id = id ?? randomUUID();
    this.name = body.name;
    this.age = body.age;
    this.workplace = body.workplace;
    this.secondName = body.secondName;
    this.hobbies = body.hobbies;
    this.createAt = new Date();
    this.updateAt = new Date();
  }
}
