"use strict";

const { StatusCodes } = require("http-status-codes");

const { BaseAPIError } = require("./base.js");

class UnprocessableEntityError extends BaseAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNPROCESSABLE_ENTITY;
  }

  static fromErrorArray(errorArray) {
    let errorFields = errorArray.map((errorItem) => {
      return errorItem.path;
    });

    let message =
      "Validation failed for these fields: " + errorFields.join(", ");
    return new UnprocessableEntityError(message);
  }
}

module.exports = { UnprocessableEntityError };
