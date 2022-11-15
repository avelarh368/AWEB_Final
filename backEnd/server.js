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
import { logRequests, logEvents } from './middleware/logger';
import { errorHandler } from './middleware/errorHandler';

// Custom import
import corsOptions from './config/corsOptions';
import { ServerResponse } from 'http';

// Declaración de variables
const server = express();
const PORT = process.env.PORT || 8009;

// Middleware Setup
server.use(logRequests);
server.use(cors(corsOptions));
server.use(express.json());

// Router


server.use(errorHandler);

server.listen(PORT, () => console.log(`Server running on port ${PORT}.`));