// src/entity/Book.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column({ type: 'varchar' })
  title: string = '';

  @Column()
  description: string = '';

  @Column()
  discountRate: number = 0;

  @Column()
  coverImage: string = '';

  @Column()
  price: number = 0;
}
