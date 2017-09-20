'use strict';

const express = require('express');
const erevna = require('erevna-services');
const job_loader = require('./jobLoader');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

require('./bootstrap');

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});
app.get('/datalocationv2', (req, res) => {
  var datalocation = req.query.datalocation;
  erevna.gdocsync.execute([
        "-minrow=1",
        "-maxrow=5",
        "-sheetnumber=0",
        "-gdoc=1PyMqH5ts4g-I_19q8awi09yL00iFk404RdtRTXX-OEE",
        "-storagekey=localstorage-locationv2",
        `-datalocation=${datalocation}`,
  ], require('./service-account-creds.json'), job_loader.datalocationv2);
  res.send('Hello worldsss\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
