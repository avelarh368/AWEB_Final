/**
 * Archivo principal del backend, contiene la llamada a las demás funciones.
 * 
 * Descripción más a detalle va aquí
 */
require('dotenv').config();

// imports
import express from 'express';
import cors from 'cors';

// Custom import
import corsOptions from './config/corsOptions';

// Declaración de variables
const server = express.Router();

server.use(cors(corsOptions))

// Router
