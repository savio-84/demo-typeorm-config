import 'reflect-metadata';
import express from 'express';
const app = express();
import './database';
app.use(express.json());

export { app };