"use strict";

const { StatusCodes } = require("http-status-codes");

function endpoint404Handler(req, res, next) {
  return res.status(StatusCodes.NOT_FOUND).json({
    message:
      "Requested endpoint does not exist. Check that you're using the " +
      "required method and that you've not mispelled the URL",
  });
}

module.exports = { endpoint404Handler };
