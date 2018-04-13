'use strict';

import express from 'express';
import socketIO from 'socket.io';
import path from 'path';

const PORT = process.env.PORT || 8080;
const INDEX = path.join(__dirname, '../index.html');

// define routes and socket
const server = express();

var helmet = require('helmet');
server.use(helmet());
server.use(helmet.noCache());

//https://enable-cors.org/server_expressjs.html
server.use(function(req, res, next) {
    //deal with img-src access and other for dev builds.
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

server.get('/', function(req, res) { res.sendFile(INDEX); });
//server.use('/', express.static(path.join(__dirname, '.')));
server.use('/', express.static(path.join(__dirname, '../public')));
let requestHandler = server.listen(PORT, () => console.log(`Listening on ${ PORT }`));
const io = socketIO(requestHandler);