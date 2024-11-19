///////imports and initializations
const express = require ("express")
const server = express();
const port = 3000
const mongoose = require("mongoose")
const cors = require("cors");
const Product = require("./models/product");
require("dotenv").config();
const {DB_URI} = process.env;

////////Middleware
server.use(json());
server.use(cors());
server.use(express.urlencoded({ extended: true}))




/////////DB connect and server start
mongoose.connect(DB_URI).then((res) =>{
    server.listen(port,() => {
        console.log(`DB connected...\nserver is listening on ${port}`);
    });
}).catch((error) => {
console.log(error.message);
})