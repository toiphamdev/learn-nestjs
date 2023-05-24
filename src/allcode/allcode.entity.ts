import { Entity, Column, ObjectIdColumn, ObjectId } from 'typeorm';

@Entity()
export class Allcode {
  @ObjectIdColumn()
  id: ObjectId;
  @Column()
  type: string;
  @Column()
  value: string;
  @Column()
  code: string;
  @Column()
  createdAt: Date;
  @Column()
  updatedAt: Date;
}
