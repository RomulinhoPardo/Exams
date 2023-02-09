<<<<<<< HEAD
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./routes/user");
const CustomerRoute = require("./routes/CustomerRoute");
const ProductRoute = require("./routes/ProductsRoutes");
const InvoiceRoute = require("./routes/InvoicesRoutes");
require("dotenv").config();

mongoose.set("strictQuery", true);
const app = express();
const PORT = process.env.PORT || 3064;

app.use(cors());
=======
const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors')
const userRoute = require("./routes/user");
const CustomerRoute = require("./routes/CustomerRoute");
require ('dotenv').config();

mongoose.set('strictQuery', true);
const app = express();
const PORT = process.env.PORT || 3004

app.use (cors())
>>>>>>> ea6fffcd092903280b465a37d3d574f777787dd5

//midlewares
app.use(express.json());
app.use("/api", userRoute);
<<<<<<< HEAD
app.use("/api", CustomerRoute);
app.use("/api", ProductRoute);
app.use("/api", InvoiceRoute);

//routes
app.get("/", (req, res) => {
  res.send("Welcome to  my API TEAM4");
  res.json({ ok: true });
});

mongoose
  .connect(process.env.URI_MONGODB)
  .then(() => console.log("Connect to MONGODB TECHSTORE is Successfully 👋"))
  .catch((error) => console.log("Connection fail MongoDB Atlas"));

app.listen(PORT, () => console.log("Server started on port", PORT));
=======
app.use("/api",CustomerRoute)

//routes
app.get("/", (req, res) => {
    res.send('Welcome to  my API TEAM4');
    res.json({ok:true})
});

 mongoose.connect(process.env.URI_MONGODB)
.then(()=> console.log('Connect to MONGODB TECHSTORE is Successfully 👋'))
.catch((error) => console.log('Connection fail MongoDB Atlas'));


app.listen(PORT, () => console.log('Server started on port', PORT ));
>>>>>>> ea6fffcd092903280b465a37d3d574f777787dd5
