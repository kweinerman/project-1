const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");
const session = require("express-session");
const cookieParser = require("cookie-parser");
// const morgan = require("morgan");
// const bodyParse = require("body-parse");

const sequelize = require("./config/connection");
const bodyParser = require("body-parser");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3005;

const hbs = exphbs.create({ helpers });

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
// view engine setup

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
// app.use(morgan("dev"));
// app.use(bodyParser.urlencoded({ extendeed: true }));
// app.use(cookieParser());
app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// var hbsContent = {
//   userName: "",
//   loggedin: faslse,
//   title: "You are not logged in!",
//   body: "Drink More Kombucha",
// };

var sessionChecker = (req, res, next) => {
  if (req.session.user && req.cookies.user_sid) {
    res.redirect("/dashboard");
  } else {
    next();
  }
};

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening pn ${PORT}`));
});
