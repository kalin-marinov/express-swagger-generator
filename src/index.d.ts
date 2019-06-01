import * as express from 'express';
// import { Spec } from 'swagger-schema-official';


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

    interface ISwaggerManager {
        getObject(): any;
        registerInExpress(app: express.Express, routes?: { url: string, docs: string }): void;
        validate(callback: (err: any, result?: any) => void): void;
    }

    function fromObject(swaggerObject: any): ISwaggerManager;

    function fromOptions(options: ISwaggerOptions): ISwaggerManager;
}

export = expressSwaggerGenerator;
