require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

//-------------mongo connection ;
const MONGODB_URI = "mongodb://127.0.0.1:27017"; // database link
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to DataBase :D"));
//--------------------------------------
const PORT = 8082;
const app = express();

const { verifyAuth } = require("./middlewares/verifyAuth"); //middleware;

//importing routes
const currenciesRoutes = require("./routes/currencies.routes");
const userRoutes = require("./routes/users.routes");
const blogsRoutes = require("./routes/blogs.routes");

//applying middleware globally for every route;before every route this should be on top of every route, checck this first
app.use(express.json());
app.use(verifyAuth);

app.get("/", (req, res) => {
  res.send("currency DataBase");
});

app.use("/currencies", currenciesRoutes); // currencies routes :
app.use("/users", userRoutes); // users routes ;
app.use("/blogs", blogsRoutes);

app.listen(PORT, () => {
  console.log(`Express server started to listen on ${PORT}`);
});
