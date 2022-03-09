import express from 'express';
import { __dirname } from './utils.js';
const app = express();
const PORT = process.env.PORT||8080;
const server = app.listen(PORT,()=>console.log(`Listen on ${PORT}`))

app.use(express.static(__dirname+"/public"));

app.get('/info',(req,res)=>{
    res.send({message:`Puerto de escucha: ${PORT}`})
})