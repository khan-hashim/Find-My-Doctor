const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const path = require("path");
const orderroute = require("./routes/orders");
const app = express();

//adds this middleware
app.use(express.json());
app.use("/api/orders", orderroute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
//connects database to mongoose.then(if connection succeful,server starts listening),catch(to diplay error if connection failed)
const dbURI = config.get("dbURI");
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => app.listen(5000, () => console.log("Server running on 5000")))
  .catch((err) => console.log(err));
