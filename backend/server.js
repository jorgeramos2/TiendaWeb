import express from 'express';
import data from './data';
import config from './config'
import dotenv from 'dotenv'
import mongoose, { mongo } from 'mongoose'
import userRoute from './routes/userRoute'
import bodyParser from 'body-parser';


dotenv.config();

const mongodbUrl = config.MONGODB_URL;
const PORT = process.env.PORT || 5000;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useCreateIndex: true

}).catch(error => console.log(error.reason));

const app=express();
app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.get("/api/products/:id",(req,res)=>{
    const productId = req.params.id;
    const product = data.products.find(x=>x._id === productId);
    if (product)
        res.send(product);
    else 
        res.status(404).send({msg: "Error! Producto no encontrado"});
});

app.get("/api/products",(req,res)=>{
    res.send(data.products);
});

app.listen(PORT,()=>{console.log("Alive and well")});
