// src/service/BookService.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../entity/Book';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async getAllBooks(): Promise<Book[]> {
    return this.bookRepository.find();
  }
   
/*
async buyBook(id: number): Promise<boolean> {
  const book = await this.bookRepository.findOne({ where: { id } });
  if (!book) {
    throw new NotFoundException(`Book with ID ${id} not found`);
  }
  // Implement your logic for book purchase here
  return true;
}


 */


  async getBookById(id: number): Promise<Book> {
    const book = await this.bookRepository.findOne({ where: { id } });
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return book;
  }

  async createBook(bookData: Book): Promise<Book> {
    const newBook = this.bookRepository.create(bookData);
    return this.bookRepository.save(newBook);
  }

  async updateBook(id: number, bookData: Partial<Book>): Promise<Book> {
    await this.getBookById(id);
    await this.bookRepository.update(id, bookData);
    return this.getBookById(id);
  }

  async deleteBook(id: number): Promise<void> {
    const book = await this.getBookById(id);
    await this.bookRepository.remove(book);
  }

  async buyBook(id: number): Promise<boolean> {
    const book = await this.bookRepository.findOne({ where: { id } });
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    // Implement your logic for book purchase here
    return true;
  }
  
}
