const express = require('express');
const path = require('path');
const { fromOptions } = require('express-swagger-generator');

function configureSwagger(app) {

  let options = {
    swaggerDefinition: {
      info: {
        description: 'WEB API Test',
        title: 'SAMPLE SWAGGER API WITH PLAIN JS',
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
    files: ['../routes/**/*.js'],
    typeDefinitions: path.join(__dirname, '../@types/api/**/*.ts')
  };

  fromOptions(options).registerInExpress(app);
}

module.exports = configureSwagger;