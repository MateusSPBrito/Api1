import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Element {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  weight: string;

  @Column({ length: 100 })
  symbol: string;
}