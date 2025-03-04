import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js';
import swaggerJSDoc from "swagger-jsdoc"; 
import swaggerUiExpress from "swagger-ui-express"; 
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = process.env.PORT||8080;
const connection = mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error de conexión a MongoDB:', err));

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'https://front-adoptame.vercel.app',
    credentials: true
}));


app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use('/api/mocks',mocksRouter);

const swaggerOptions = {

    definition: {
        openapi: "3.0.1",
        info: {
            title: "Documentación de la Web Adoptame",
            description: "App dedicada a encontrar familias para los perritos de la calle"
        }
    },
    apis: ["./src/docs/**/*.yaml"]
}

const specs = swaggerJSDoc(swaggerOptions); 

app.use("/api/docs", swaggerUiExpress.serve, swaggerUiExpress.setup(specs));

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))

