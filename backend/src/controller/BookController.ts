// src/controller/BookController.ts

import { Controller, Get, Param, Post, Body, Put, Delete, HttpException, HttpStatus} from '@nestjs/common';
import { BookService } from '../service/BookService';
import { Book } from '../entity/Book';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async getAllBooks() {
    return this.bookService.getAllBooks();
  }

  @Get(':id')
  async getBookById(@Param('id') id: number) {
    return this.bookService.getBookById(id);
  }

  @Post()
  async createBook(@Body() bookData: Book) {
    return this.bookService.createBook(bookData);
  }

  @Put(':id')
  async updateBook(@Param('id') id: number, @Body() bookData: Partial<Book>) {
    return this.bookService.updateBook(id, bookData);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: number) {
    await this.bookService.deleteBook(id);
    return { message: 'Book deleted successfully' };
  }

  @Post(':id/buy')
  async buyBook(@Param('id') id: number) {
    try {
      await this.bookService.buyBook(id);
      return { message: 'Book purchased successfully' };
    } catch (error ) {
      throw new HttpException((error as Error).message, HttpStatus.BAD_REQUEST);
    }
  }
}

export default BookController; 



 