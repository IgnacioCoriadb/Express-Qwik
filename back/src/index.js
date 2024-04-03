const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const productsRoutes = require("./routes/products");
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', productsRoutes);


//mongodb conection
mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log("db connected"))
.catch((error)=>console.log(error));

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
