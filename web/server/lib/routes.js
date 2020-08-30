
/*
import path from 'path';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';
*/
const path = require('path');
const fs = require('fs');
const React = require('react');
const ReactDOMServer = ('react-dom/server');
const App = require('../src/App');

module.exports = ({app}) => {
    app.get('/', function(req, res) {

        return res.send("it's a server");

        const app = ReactDOMServer.renderToString(<App />);

        const indexFile = path.resolve('./build/index.html');
        fs.readFile(indexFile, 'utf8', (err, data) => {
            if (err) {
                console.error('Something went wrong:', err);
                return res.status(500).send('Oops, better luck next time!');
            }

            return res.send(
                data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
            );
        });
    });

    app.get('/api/anonymous-add', function(req, res) {
        res.send("DATA!!");
        return;
        db.collection('test').find({}, function(err, result) {
            if (err) {
              res.send(err);
            } else {
              res.send(result);
            }
          });
    });
};