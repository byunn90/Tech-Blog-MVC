const express = require("express");
const app = express();
const path = require("path");
const expressHandlebars = require("express-handlebars");
const sequelize = require("sequelize");

const PORT = process.env.PORT || 3001;
// Middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const hbs = expressHandlebars.create({});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
// Sync sequelize models to the database, then turn on the server
// app.sync({ force: false }).then(() => {
//   app.listen(PORT, () => {});
// });

// Not ready yet
// app.use();
