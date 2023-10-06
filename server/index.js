const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const stockRouter = require('./routes/stock');
require('dotenv').config();



const app = express();
app.use(morgan("dev"))
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/',(req, res)=>{
    res.send("hello express")
})


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected Database!'))
  .catch((error)=>{
    console.log(`mongoDb Not connected ${error}`)
  })
  app.use('/', stockRouter);

app.listen(4000,()=>{
    console.log("server running")
})