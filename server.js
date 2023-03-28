// dependcies
const express = require("express");
const app = express();
const path = require("path");
const expressHandlebars = require("express-handlebars");
const sequelize = require("./config/connection");
const session = require("express-session");
const routes = require("./controllers");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
// const helpers = require("./utils/helpers");

const PORT = process.env.PORT || 3001;

// Middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const hbs = expressHandlebars.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
// app.set("views", path.join(__dirname, "views"));
console.log(app.get("views"));

const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
    rolling: true,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
app.use(routes);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
