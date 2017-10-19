  'use strict';

const express = require('express');
const request = require('request');
const erevna = require('erevna-services');
const job_loader = require('./jobLoader');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

require('./bootstrap');
const es = require('./es-connection');

// App
const app = express();
app.get('/', (req, res) => {
  res.send('erevna-google-spreadsheet-loader');
});
app.get('/about', (req, res) => {
  res.send('erevna-google-spreadsheet-loader');
});
app.get('/loading-datalocation-from-google-spreadsheet', (req, res) => {
  //lokasi tempat simpan data localstorage. default ./scratch
  var datalocation = req.query.datalocation;
  //islocalsave. apakah akan simpan di localstorage. y or n
  var islocalsave = req.query.islocalsave || 'n';
  //minrow
  var minrow = req.query.minrow || 1;
  //maxrow
  var maxrow = req.query.maxrow || 10;
  //sheetnumber
  var sheetnumber = req.query.sheetnumber || 0;
  //sheetnumber
  var storagekey = req.query.storagekey || 'localstorage-locationv2';

  //gdoc key
  var gdoc = req.query.gdoc || '1PyMqH5ts4g-I_19q8awi09yL00iFk404RdtRTXX-OEE';
  var country = req.query.country || 'id';

  var job_loader_callback = function(data){
    var dataJson = data.dataJson;
    var bodyBulk = [];
    var bodyBulkDictionaryLocation = [];
    for(var i in dataJson){
      // console.log(i);
      var dataForm = {};
      dataForm.id = i;
      dataForm.keyrow = i;
      dataForm.name = dataJson[i].name || '-';
      dataForm.level = dataJson[i].level || 0;
      dataForm.level1 = dataJson[i].level1 || '-';
      dataForm.level2 = dataJson[i].level2 || '-';
      dataForm.level3 = dataJson[i].level3 || '-';
      dataForm.level4 = dataJson[i].level4 || '-';
      dataForm.lat = dataJson[i].lat || 0.0;
      dataForm.lon = dataJson[i].long || 0.0;
      var actDescription = {
        index: { _index: 'locations_'+country, _type: 'homes', _id: dataForm.id }
      }
      bodyBulk.push({index: { _index: 'locations_'+country, _type: 'homes', _id: dataForm.id }});
      bodyBulk.push(dataForm);

      var dataFormDict = {};
      var nowUnixTime = new Date().getTime();
      dataFormDict.createdon = nowUnixTime;
      dataFormDict.modifiedon = nowUnixTime;
      dataFormDict.text = dataForm.name;


      var dictLocationName = dataForm.name;
      var dictLocationForeignKey = dataForm.id;
      if(dictLocationName) dictLocationName = dictLocationName.toLowerCase();
      if(dictLocationForeignKey) dictLocationForeignKey = dictLocationForeignKey.toLowerCase();

      dataFormDict.meaning = dictLocationName;
      dataFormDict.foreignkey = dictLocationForeignKey;

      bodyBulkDictionaryLocation.push({index: { _index: 'dictionary_location_'+country, _type: 'homes', _id: dictLocationName }});
      bodyBulkDictionaryLocation.push(dataFormDict);
      // request({
      //   method: 'POST',
      //   url:'http://45.77.34.141:4001/locations/indexing',
      //   form: dataForm
      // }, function(err,httpResponse,body){
      //   if(err) console.log(err);
      //   console.log('body=>', body);
      // });
      // request.post('http://45.77.34.141:4001/locations/indexing').form(dataForm);
      // request.post({url:'http://service.com/upload', form: {key:'value'}}, function(err,httpResponse,body){ /* ... */ })
    }
      es.bulk({
        body: bodyBulk
      }, function (err, resp) {
        console.log('success bulk index');
        if(resp){
          console.dir(resp.items);
          console.log('error=>',resp.errors);
        }
        console.log('err=>',err);
      });
      es.bulk({
        body: bodyBulkDictionaryLocation
      }, function (err, resp) {
        console.log('success bulk index dict');
        if(resp){
          console.dir(resp.items);
          console.log('dicterror=>',resp.errors);
        }
        console.log('dicterr=>',err);
      });
    //hit ke erevna-es-interface untuk simpan dataJson
    // console.log('dataJson==>', dataJson);
  }
  erevna.gdocsync.execute([
        `-islocalsave=${islocalsave}`,
        `-minrow=${minrow}`,
        `-maxrow=${maxrow}`,
        `-sheetnumber=${sheetnumber}`,
        `-gdoc=${gdoc}`,
        `-storagekey=${storagekey}`,
        `-datalocation=${datalocation}`,
  ], require('./service-account-creds.json'), job_loader.datalocationv2, job_loader_callback);
  res.json({status:true});
});

app.get('/loading-datapropertytype-from-google-spreadsheet', (req, res) => {
  //lokasi tempat simpan data localstorage. default ./scratch
  var datalocation = req.query.datalocation;
  //islocalsave. apakah akan simpan di localstorage. y or n
  var islocalsave = req.query.islocalsave || 'n';
  //minrow
  var minrow = req.query.minrow || 1;
  //maxrow
  var maxrow = req.query.maxrow || 10;
  //sheetnumber
  var sheetnumber = req.query.sheetnumber || 0;
  //sheetnumber
  var storagekey = req.query.storagekey || 'localstorage-property-types-synonym';

  //gdoc key
  var gdoc = req.query.gdoc || '1TRnVBn2b4S9ih6cygtnV0NLKoOcqRvcf88Lk4GTHoI4';
  var country = req.query.country || 'id';

  var job_loader_callback = function(data){
    var dataJson = data.dataJson;
    var bodyBulk = [];
    for(var i in dataJson){
      var dataForm = {};
      dataForm.id = i;
      dataForm.createdon = new Date().getTime();
      dataForm.modifiedon = new Date().getTime();
      dataForm.text = i || '-';
      dataForm.meaning = dataJson[i] || '-';
      bodyBulk.push({index: { _index: 'dictionary_propertycategory_'+country, _type: 'homes', _id: dataForm.id }});
      bodyBulk.push(dataForm);
    }
    es.bulk({
      body: bodyBulk
    }, function (err, resp) {
      console.log('success bulk index');
      if(resp){
        console.dir(resp.items);
        console.log('error=>',resp.errors);
      }
      console.log('err=>',err);
    });
  }

  erevna.gdocsync.execute([
        `-islocalsave=${islocalsave}`,
        `-minrow=${minrow}`,
        `-maxrow=${maxrow}`,
        `-sheetnumber=${sheetnumber}`,
        `-gdoc=${gdoc}`,
        `-storagekey=${storagekey}`,
        `-datalocation=${datalocation}`,
  ], require('./service-account-creds.json'), null, job_loader_callback);
  res.json({status:true});

});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
