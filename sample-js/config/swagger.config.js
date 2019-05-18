const express = require('express');
const path = require('path');
const { startFromOptions } = require('express-swagger-generator');

function configureSwagger(app) {

  let options = {
    swaggerDefinition: {
      info: {
        description: 'WEB API Test',
        title: 'WHITELABEL API',
        version: '1.0.0',
      },
      host: "localhost:3000",
      basePath: '..',
      produces: [
        "application/json",
        "application/xml"
      ],
      schemes: ['http', 'https']
    },
    basedir: __dirname,
    files: ['../routes/**/*.js'], //Path to the API handle folder,
    typeDefinitions: path.join(__dirname, '../@types/api/**/*.ts')
  };

  startFromOptions(app)(options);
}

module.exports = configureSwagger;