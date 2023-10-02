import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import { connect } from 'mongoose';
import featuresRoutes from './routes/featuresRoutes';
import https from 'https';
import fs from 'fs';
import * as path from 'path';

dotenv.config();
const app = express();

app.use(cors({ credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(cookieParser());

connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database');

    const httpsOptions = {
        key: fs.readFileSync(path.join('C:/Windows/System32/localhost-key.pem')),
        cert: fs.readFileSync(path.join('C:/Windows/System32/localhost.pem')),
    };

    const httpsServer = https.createServer(httpsOptions, app);

    httpsServer.listen(process.env.PORT || 4000, () => {
      console.log(`Now listening to port, ${process.env.PORT || 4000} (HTTPS)`);
    });
  })
  .catch((err) => {
    console.log(`Error message: ${err.message}`);
    console.log(`Location: ${err.stack}`);
  });

// Route Middlewares
app.use(featuresRoutes);
