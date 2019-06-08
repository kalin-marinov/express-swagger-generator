import * as express from 'express';
import { fromOptions, fromObject } from 'express-swagger-generator';
import  options from './swagger.json';
//import  swaggerObject from './swagger-def.json';

export function configureSwagger(app: express.Express) {

  fromOptions(options).registerInExpress(app, { url: "/api/docs", docs: "/api/docs/swagger.json" });         // build an object 
  //fromObject(swaggerObject).registerInExpress(app, { url: "/api/docs", docs: "/api/docs/swagger.json" });  // use a pre-built object
}