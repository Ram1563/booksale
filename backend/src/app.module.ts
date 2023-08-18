import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entity/Book';
import { BookController } from './controller/BookController';
import { BookService } from './service/BookService';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'mysql', // Use the correct driver type (e.g., mysql, postgres)
  host: 'localhost',
  port: 3306,
  username: 'yourusername',
  password: 'yourpassword',
  database: 'yourdatabase',
      entities: [Book], // Add other entities if needed
      synchronize: true, // Set to true to automatically create database schema
    }),
    TypeOrmModule.forFeature([Book]),
  ],
  controllers: [BookController],
  providers: [BookService],
})
export class AppModule {}
