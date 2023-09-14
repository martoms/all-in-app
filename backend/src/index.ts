import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors'
import { connect } from 'mongoose';

dotenv.config();
const app = express();

app.use(cors({ credentials: true }));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(compression());
app.use(cookieParser());

connect(process.env.MONGO_URI)
.then(() => {
    console.log('connected to database');
    app.listen(process.env.PORT || 4000, () => {
        console.log(`Now listening to port, ${process.env.PORT || 4000}!`)
    });
})
.catch((err) => {
    console.log(`Error message: ${err.message}`);
    console.log(`Location: ${err.stack}`);
});