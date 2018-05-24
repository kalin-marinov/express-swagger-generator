import * as express from 'express';
import swaggerGenerator = require('express-swagger-generator');

export function configureSwagger(app: express.Express){

    let options = {
        swaggerDefinition: {
          info: {
            description: 'WEB API Test',
            title: 'WHITELABEL API',
            version: '1.0.0',
          },
          host: "localhost:3000",
          basePath: '',
          produces: [
            "application/json",
            "application/xml"
          ],
          schemes: ['http', 'https']
        },
        basedir: __dirname, 
        files: ['../../routes/**/*.ts'] //Path to the API handle folder
      };
      
      swaggerGenerator(app)(options);

}