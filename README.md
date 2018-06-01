## Express Swagger Generator (Typed)
This is a fork of [express-swagger-generator](https://github.com/pgroot/express-swagger-generator) 

With the difference it supports reading typescript definitions along with the JSDOC definitions.
The typescript parsing is based on [typescript-json-schema](https://github.com/YousefED/typescript-json-schema) 

Support of enums and arrays is also added in this library.

### Samples
The sample applications in javascript and typescript, show routing documentation that is being processed and handled to swagger.


#### Typescript code sample

```
import * as express from 'express';
import * as path from 'path';
import * as swaggerGenerator from 'express-swagger-generator';

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
  files: ['../../routes/**/*.ts'], //Path to the API routes folder,
  typeDefinitions: path.join(__dirname, '../../@types/api/**/*.ts') // Path to typescript files that should be included in the swagger definitions
};

swaggerGenerator(app)(options);
```

Open http://<app_host>:<app_port>/api-docs in your browser to view the documentation.

#### How to document the API

```
/**
 * This function comment is parsed by doctrine
 * @route GET /api
 * @group foo - Operations about user
 * @param {string} email.query.required - username or email
 * @param {string} password.query.required - user's password.
 * @returns {TypescriptInterfaceOrClass} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
exports.foo = function() {}
```

For JSDOC model definitions:

```
/**
 * @typedef Point
 * @property {integer} x.required
 * @property {integer} y.required
 * @property {string} color
 */
```

#### More
TODO: See why .d.ts cannot be parsed at the moment
TODO: See if dropdowns can be present for Enums using Swagger 3
