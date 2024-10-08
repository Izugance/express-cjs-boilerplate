"use strict";

const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Sample documentation",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.js"],
};

const openapiSpecification = swaggerJsdoc(options);

module.exports = { openapiSpecification };
