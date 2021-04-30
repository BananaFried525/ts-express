import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { IndexRouter } from './routers/indexRouter';
import connect  from "./database/database";

const app: Application = express();
let appPort = process.env.PORT || 8081;
let nodeEnv = process.env.NODE_ENV || "dev";
connect();

app.use(morgan(nodeEnv));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(IndexRouter);
app.listen(appPort);