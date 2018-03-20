var express = require('express'),
    swagger = require('node-swagger-ui');

 
swagger(express()).configure({
    ip: undefined,
    port: process.env.PORT || 9002,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization,	If-Modified-Since, Cache-Control, Pragma, Global-Request-Id, x-global-request-id",
        "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
		"Access-Control-Allow-Credentials": "true"
    },
    models: [],
    apis: [
        '/docs/apis/**/*.js'
    ],
    swagger: {
        title: "Mock Swagger FrontEnd Atlas",
        description: "Mock Swagger FrontEnd Atlas",
        termsOfServiceUrl: "",
        contact: "",
        swaggerDoc: "api-docs",
        url: "/docs",
        version: "1.0.0"
    }
}).start();
