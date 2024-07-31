"use strict";

require("dotenv").config();
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

import { AuthError } from "../errors/auth.js";

const verifyAuthHeader = (header, secret) => {
  if (!(header && header.startsWith("Bearer"))) {
    throw new AuthError("Invalid auth header");
  }
  const token = header.split(" ")[1];
  try {
    let payload = jwt.verify(token, secret);
    return { payload, token };
  } catch (err) {
    throw new AuthError("Invalid auth token");
  }
};

const userAuthMiddleware = asyncHandler(async (req, res, next) => {
  const authHeader = req.header("authorization");
  let { payload, token } = verifyAuthHeader(authHeader, process.env.JWT_SECRET);
  req.user = { id: payload.userId, username: payload.username, token };
  next();
});

module.exports = { userAuthMiddleware };
