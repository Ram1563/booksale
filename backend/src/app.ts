// src/app.ts
/*import 'reflect-metadata';
import { DataSource } from 'typeorm';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Book } from './entity/Book'; // Adjust the path to the Book entity


export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
    type: 'mysql', // Adjust the database type as needed
    host: 'localhost', // Replace with your database host
    port: 3306, // Replace with your database port
    username: 'yourusername', // Replace with your database username
    password: 'yourpassword', // Replace with your database password
    database: 'yourdatabase', // Replace with your database name
    entities: [Book], // Add other entities if needed
    synchronize: true, // Set to true to automatically create database schema
  });

   
  const app = express();

  app.use(cors());
  app.use(bodyParser.json());
   
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  return dataSource.initialize();

},
  },

]

*/

import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Book } from './entity/Book';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'; // Replace with your AppModule import
import setupSwagger from './swagger';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3001;
  await app.listen(PORT);
  console.log(`Server is running on port ${PORT}`);
}

bootstrap();

setupSwagger(app);