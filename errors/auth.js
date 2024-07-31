"use strict";

const { StatusCodes } = require("http-status-codes");

const { BaseAPIError } = require("./base.js");

class AuthError extends BaseAPIError {
  constructor(message, status, statusCode) {
    super(message || "Authentication failed");
    this.status = status;
    this.statusCode = statusCode || StatusCodes.UNAUTHORIZED;
  }
}

module.exports = { AuthError };
