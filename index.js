const express = require("express");
const app= express()
const PORT=4000;
const dotEnv = require('dotenv')
const mongoose = require("mongoose")
const vendorRoutes = require('./routes/vendorRoutes');
const bodyParser = require('body-parser')
const firmRoutes = require('./routes/firmRoutes');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');
const path = require('path')

dotEnv.config();

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("mongoose connected"))
.catch((error) => console.log("error"))

app.use(bodyParser.json());
app.use('/vendor',vendorRoutes);
app.use('/firm', firmRoutes)
app.use('/product', productRoutes);
app.use('/uploads', express.static('uploads'));

app.listen(PORT,() => {
    console.log(`server running on port ${PORT}`);
})
app.use('/home',(req,res) => {
    res.send(`server running on port ${PORT}`);
})