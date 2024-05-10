import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Friend {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  secondName: string;

  @Column()
  age: number;

  @Column()
  workplace: string;

  @Column('jsonb', { nullable: true })
  hobbies: string[];
}
