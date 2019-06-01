import * as express from 'express';
import * as path from 'path';
import { fromOptions } from 'express-swagger-generator';

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
      schemes: ['http', 'https'],
      securityDefinitions: {
        Bearer: {
          type: 'apiKey',
          in: 'header',
          name: 'Authorization',
          description: "",
        }
      },
    },
    basedir: __dirname,
    files: ['../../routes/**/*.ts'], //Path to the API handle folder,
    typeDefinitions: path.join(__dirname, '../../@types/api/**/*.ts')
  };

  fromOptions(options).registerInExpress(app, { url: "/api/docs", docs: "/api/docs/swagger.json" });
}