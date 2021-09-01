import express from 'express';
import bodyParser from 'body-parser';
import Route from './Routes/Routes.js'
const app = express()

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/', Route);
export default app;