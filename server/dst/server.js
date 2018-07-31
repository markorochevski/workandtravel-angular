"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
// import * as express from 'express';
const express = require("express");
const app = express();
const bodyParser = __importStar(require("body-parser"));
// import * as mongoose from 'mongoose';
const mongoose = require('mongoose');
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
mongoose.connect('mongodb://marko:Arsenal21@ds111370.mlab.com:11370/workandtravel', { useNewUrlParser: true })
    .catch((err) => {
    console.log('Something happened while connecting to MongoDB');
    console.log(err);
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    if ('OPTIONS' === req.method) {
        res.sendStatus(200);
    }
    else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
});
const exts = /\.js$/;
const routedir = path.join(__dirname, 'routes');
const routePrefix = '/';
fs.readdirSync(routedir).forEach(function (f) {
    // console.log('f: ', f);
    if (exts.test(f)) {
        const routePath = path.join(routedir, f);
        const routeModule = require(routePath);
        const usepath = routePrefix + f.replace(exts, '');
        console.log('usepath: ', usepath);
        if (!routeModule.route) {
            console.error(`Route module ${f} does not export itself properly`);
            throw new Error(`Unable to set up route ${f}. Check the route module for unexported route variables`);
        }
        app.use(usepath, routeModule.route);
    }
});
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
module.exports = app;
//# sourceMappingURL=server.js.map