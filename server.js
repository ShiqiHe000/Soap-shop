if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require('path');

const itemsRoute = require('./routes/items');

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to database.');
});

app.use(express.json());

app.use('/items', itemsRoute);

//serves statics assests if in production
if (process.env.NODE_ENV === "production") {
  // set a static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}



const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}.`);
});
