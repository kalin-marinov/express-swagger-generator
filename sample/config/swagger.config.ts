import * as express from 'express';
import * as path from 'path';
import * as swaggerGenerator from 'express-swagger-generator';

export function configureSwagger(app: express.Express) {
  let options = {
    swaggerDefinition: {
      info: {
        description: 'WEB API Test',
        title: 'WEB API Test',
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
    files: ['../../routes/**/*.ts'], //Path to the API handle folder,
    typeDefinitions: path.join(__dirname, '../../@types/api/**/*.ts')
  };

  swaggerGenerator(app)(options);

}