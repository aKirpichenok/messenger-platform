import { MongoClient } from 'mongodb'

const client = new MongoClient(process?.env["MONGODB_URI"] || '');

// Функция для подключения к MongoDB
export async function connectToDatabase() {
  try {
    // Подключение к MongoDB
    await client.connect();
    console.log('Connected to MongoDB');

    // Возврат объекта базы данных
    return client.db();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}