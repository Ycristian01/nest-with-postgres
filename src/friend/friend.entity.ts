import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Friend {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  secondName: string;

  @Column()
  age: number;

  @Column()
  workplace: string;

  @Column('jsonb', { nullable: true })
  hobbies: string[];
}
