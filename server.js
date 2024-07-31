"use strict";

// -----Native NodeJS packages.-----
const { createServer } = require("node:http");
// Use the following lines instead if you're using https:
// const { createServer } = require("node:https");
// const fs = require("fs");

// -----Third-party packages.-----
require("dotenv").config();
const express = require("express");
const asyncHandler = require("express-async-handler");
const bodyParser = require("body-parser");
const cors = require("cors"); // Not installed.
const helmet = require("helmet");
const session = require("express-session");
const cookieParser = require("cookie-parser");

// -----Project packages.-----

// -----App setup.-----
const app = express();

app.disable("x-powered-by");

// -----Pre-route middleware.-----
function initPreRouteMiddleware() {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use(helmet());
  app.use(cors());
  
  app.use(cookieParser())
  app.use(
    session({
      // NOTE: Edit this to match your env variable name.
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: { secure: true },
    })
  );
}

// -----Routes.-----
function initRoutes() {
  app.get(
    "/",
    asyncHandler(async (req, res) => {
      res.send("Welcome to my API!");
    })
  );
}

// -----Post-route middleware.-----
function initPostRouteMiddleware() {
  // Do me.
}

// -----Server setup.-----
const server = createServer(app);
// Use the following lines instead if you're using https:
// const httpsOptions = {
//   key: fs.readFileSync("path/to/private/key.pem"),
//   cert: fs.readFileSync("path/to/certificate.pem"),
// };
// const server = createServer(httpsOptions, app);

const PORT = process.env.PORT || 3000;

const serve = async () => {
  try {
    // NOTE: Add a database connection call here:
    // connect_to_DB();
    initPreRouteMiddleware();
    initRoutes();
    initPostRouteMiddleware();

    server.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    throw error; // NOTE: Do better here.
  }
};

serve();
