const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const routes = require("./routes/routes");
const mongoose = require("mongoose");

// DEVELOPMENT
const URI =
  "mongodb+srv://Sean:m0ngoPass@cluster0.xuroh.mongodb.net/Articles?retryWrites=true&w=majority";

// PRODUCTION
// const URI =
//   "mongodb+srv://Sean:" +
//   process.env.MONGODB_PASS +
//   "@cluster0.xuroh.mongodb.net/<dbname>?retryWrites=true&w=majority";

const conn = mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => console.log("connected to the database"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/routes", routes);

app.get("/", (req, res) => {
  res.send("Main Page");
});

app.get("/*", (req, res) => {
  res.send("404 Page does not exist");
});

app.listen(
  process.env.PORT || 5000,
  console.log("Server is located at http://localhost:5000")
);
