import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

enum Role {
  USER = 'USER',
  SELLER = 'SELLER',
  ADMIN = 'ADMIN',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  password: string;
  @Column({ unique: true })
  email: string;
  @Column({ type: 'enum', enum: Role })
  role: Role;
  @Column()
  createdAt: Date;
  @Column()
  updatedAt: Date;
}
