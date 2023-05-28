import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Allcode {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  type: string;
  @Column()
  value: string;
  @Column()
  code: string;
  @Column()
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
