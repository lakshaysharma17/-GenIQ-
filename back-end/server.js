import express from "express";
import dotenv from 'dotenv';
import chalk from "chalk";
import cors from 'cors';
import {indexRoute} from "./api/v1/index.js";
import { Error404 } from "./utils/middlewares/404.js";
import { createConnection } from "./utils/db/connection.js";
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use('/api/v1', indexRoute);
app.use(Error404);

// app.get('/',(req,res)=>{
//     res.send('Hello World')
// })
;
const PORT = process.env.PORT || 5000;


const promise = createConnection();
promise.then(()=>{
    console.log('DB Connection Created ... ');
    const server = app.listen(PORT, (err)=>{
    if(err){
        console.log(chalk.redBright.italic('Server Crash '), err);
    }
    else{
        console.log(chalk.greenBright.bold('Server Up and Running '), server.address().port);
    }
})
}).catch(err=>{
    console.log(chalk.redBright.bold('DB Crash......... '), err);
})