/**
 * Archivo principal del backend, contiene la llamada a las demás funciones.
 * 
 * Descripción más a detalle va aquí
 */
require('dotenv').config();

// imports
import express from 'express';
import cors from 'cors';
import path from 'path';

// Custom import
import corsOptions from './config/corsOptions';

// Declaración de variables
const server = express.Router();
const PORT = process.env.PORT || 8009;

server.use(cors(corsOptions))

// Router
