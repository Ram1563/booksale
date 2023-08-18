// src/database.ts

import { createConnection } from 'typeorm';

createConnection({
  type: 'postgres',
  host: 'your-database-host',
  port: 5432,
  username: 'your-database-username',
  password: 'your-database-password',
  database: 'your-database-name',
  entities: [__dirname + '/entity/*.js'],
  synchronize: true,
  logging: true,
}).then(connection => {
  console.log('Connected to database');
}).catch(error => {
  console.log('Database connection error', error);
});
