const mongoose = require("mongoose");

function DbConnection() {
  const DB_URl = process.env.MONGO_URL;

  mongoose.connect(DB_URl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "Connection error:"));
  db.once("open", function () {
    console.log("Db connected....");
  });
}

module.exports = DbConnection;
