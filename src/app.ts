import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
const app = express();
import './database';
app.use(express.json());

export { app };