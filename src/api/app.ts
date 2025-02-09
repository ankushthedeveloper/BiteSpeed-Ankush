import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { errorHandler } from '../modules/Middlewares/errorHandler';
import contactRoutes from "../modules/Routes/routes";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use('/api', contactRoutes);
app.use(errorHandler);

export default app;
