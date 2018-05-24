declare namespace expressSwaggerGenerator {}

declare module 'express-swagger-generator' {

    import * as express from 'express';

    interface ISwaggerOptions {
        swaggerDefinition: {
            info: {
                description: string,
                title: string,
                version: string,
            },
            host: string,
            basePath?: string,
            produces: string[],
            schemes: string[]
        },
        basedir: string,
        files: string[]
    }

    interface IOptionParserFunction {
        (options: ISwaggerOptions): void;
    }

    function generator(app: express.Express): IOptionParserFunction;

    
    export = generator;
}
