const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
app.use(cors());

const apiRoutes = require("./src/modules/routes/routes");

const url = "mongodb+srv://karapetiyanc:Q234165T@cluster0.i3yni.mongodb.net/karapetyanc?retryWrites=true&w=majority";
mongoose.connect(url); 

app.use(express.json());
app.use("/", apiRoutes);

const startApp = async () => {
  try {
    await mongoose.connect(url); 
    app.listen(8000, () => {
      console.log('Example app listening on port 8000!');
    });
  } catch (e) {
    res.status(500).json(e)
  };
};

startApp() 