import { Entity, Column, ObjectIdColumn, ObjectId } from 'typeorm';

enum Role {
  USER = 'USER',
  SELLER = 'SELLER',
  ADMIN = 'ADMIN',
}

@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  fullName: string;

  @Column()
  password: string;
  @Column()
  email: string;
  @Column({ type: 'enum', enum: Role })
  role: Role;
}
