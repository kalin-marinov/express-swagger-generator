import * as express from 'express';



declare namespace expressSwaggerGenerator {
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
        files: string[],
        typeDefinitions?: string
    }


    function startFromOptions(app: express.Express, options: ISwaggerOptions): void;

    function createSwaggerObject(options: ISwaggerOptions): void;

    function startFromSwaggerObject(app: express.Express, swaggerObject: any, routes?: { url: string, docs: string }): void;
}

export = expressSwaggerGenerator;