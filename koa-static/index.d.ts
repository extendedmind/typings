// Type definitions for koa-static v3.x
// Project: https://github.com/koajs/static

/* =================== USAGE ===================

    import serve = require("koa-static");
    var Koa = require('koa');

    var app = new Koa();
    app.use(serve("."));

 =============================================== */


import * as Koa from "koa";

declare function serve(root: string, opts?: {

    /**
     * Default file name, defaults to 'index.html'
     */
    index?: boolean | string;

    /**
     * If true, serves after return next(),allowing any downstream middleware to respond first.
     */
    defer?: boolean;

    /**
     * Browser cache max-age in milliseconds. defaults to 0
     */
    maxage?: number;

    /**
     * Allow transfer of hidden files. defaults to false
     */
    hidden?: boolean;

    /**
     * Try to serve the gzipped version of a file automatically when gzip is supported by a client and if the requested file with .gz extension exists. defaults to true.
     */
    gzip?: boolean;
}): { (ctx: Koa.Context, next: () => Promise<any>): any };
declare namespace serve{}
export = serve;
