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

    type IOptionParserFunction = (options: ISwaggerOptions) => void;

    function startFromOptions(app: express.Express): IOptionParserFunction;

    function createSwaggerObject(options: ISwaggerOptions): void;
}

export = expressSwaggerGenerator;