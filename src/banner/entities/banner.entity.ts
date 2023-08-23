import { ApiProperty } from '@nestjs/swagger';
import { AllcodeDto } from 'src/allcode/dto/allcode.dto';
import { Allcode } from 'src/allcode/entities/allcode.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Banner {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty()
  @Column({ type: 'text' })
  description: string;
  @ApiProperty()
  @Column()
  name: string;
  @ApiProperty()
  @Column()
  statusId: string;
  @ApiProperty({ type: AllcodeDto })
  @ManyToOne(() => Allcode, (status) => status.banners)
  @JoinColumn({ name: 'statusId', referencedColumnName: 'code' })
  status: Allcode;
  @ApiProperty()
  @Column()
  image: string;
  @ApiProperty()
  @Column()
  createdAt: Date;
  @ApiProperty()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
