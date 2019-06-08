#!/usr/bin/env node
const { fromOptions } = require('../lib/swagger');
const { readFileSync, writeFileSync } = require('fs');

console.log(`Gennerating swagger from config file: ${process.argv[2]}. Output will be saved to: ${process.argv[3]}`);

var config = JSON.parse(readFileSync(process.argv[2]).toString());
var swaggerObject = fromOptions(config).getObject();

writeFileSync(process.argv[3], JSON.stringify(swaggerObject))
