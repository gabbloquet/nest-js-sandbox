import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Beer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  label: string;

  @Column('text')
  description: string;

  @Column('text')
  image: string;

  @Column('double')
  price: number;

  @Column('int')
  stock: number;
}