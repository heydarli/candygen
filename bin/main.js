#!/usr/bin/env node

var app = require('../app'),
    pjson = require('../package.json'),
    port = 8000,
    staticMode = false;

console.log('=== candygen ' + pjson.version + ' ===');

process.argv.slice(2).forEach(function (val, index, array) {
    if (val.lastIndexOf('port=', 0) === 0) {
        port = parseInt(val.substr(5));
    }

    if (val === 'static') {
        staticMode = true;
    }
});

if (staticMode) {
    app.staticServe(process.cwd(), port);
} else {
    app.start(process.cwd(), port);
}