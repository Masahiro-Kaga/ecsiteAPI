const mongoose = require("mongoose");
const express = require("express");
const port = 4000;
const app = express();

mongoose.connect("mongodb+srv://masahirokaga:masaMongo@cluster0.mx6qv.mongodb.net/cap2practice?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true});

let db = mongoose.connection;
db.on("error",console.error.bind(console,"Connection Error"));
db.once("open",()=>console.log("Connected to MongoDB"));

app.use(express.json());

const userRoutes = require("./routes/userRoutes");
app.use('/users',userRoutes);

const productRoutes = require("./routes/productRoutes");
app.use('/products',productRoutes)


app.listen(port,()=>console.log(`Server Running on LocalHost:${port}`));
