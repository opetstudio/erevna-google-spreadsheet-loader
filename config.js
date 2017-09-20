const _logger    = require('tracer').console();
_logger.info("config invoked. environment="+process.env.NODE_ENV);

if(process.env.NODE_ENV=='development'){
    exports.port = 3001;
    exports.prefixhost = 'dev';
    exports.database = {
      mongodb:{
          'host':'localhost',
          'port':'27017',
          'database':'erevna',
          'username':'',
          'password':'',
          'uri': 'mongodb://localhost:27017/erevna'
      }
    };
    exports.elasticsearch = {
        'host':'localhost:9200',
        'log':'info',
        'requestTimeout':120000
    };
    exports.api_rayasem_webapp = {
            'protocol':'https',
            'host':'localhost',
            'port':'3000',
            'token':'xxxxxxxxxx',
        };
}
if(process.env.NODE_ENV=='staging'){
    exports.port = 3001;
    exports.prefixhost = 'beta';
    exports.database = {
      mongodb:{
          'host':'localhost',
          'port':'27017',
          'database':'erevna',
          'username':'',
          'password':'',
          'uri': 'mongodb://localhost:27017/erevna'
      }
    };
    exports.elasticsearch = {
        'host':'45.77.34.141:9444',
        'log':'info',
        'requestTimeout':120000
    };
    exports.api_rayasem_webapp = {
        'protocol':'https',
        'host':'localhost',
        'port':'3000',
        'token':'xxxxxxxxxx',
    };
}
if(process.env.NODE_ENV=='production'){
    exports.port = 3001;
    exports.prefixhost = 'www';
    exports.database = {
      mongodb:{
          'host':'localhost',
          'port':'27017',
          'database':'erevna',
          'username':'',
          'password':'',
          'uri': 'mongodb://localhost:27017/erevna'
      }
    };
    exports.elasticsearch = {
        //'host':'45.76.187.104:9200',
        'host':'45.77.34.141:9444',
        'log':'info',
        'requestTimeout':120000
    };
    exports.api_rayasem_webapp = {
        'protocol':'https',
        'host':'localhost',
        'port':'3000',
        'token':'xxxxxxxxxx',
    };
}


if(process.env.NODE_ENV=='development-docker'){
    exports.port = 3001;
    exports.prefixhost = 'dev';
    exports.database = {
      mongodb:{
          'host':'localhost',
          'port':'27017',
          'database':'erevna',
          'username':'',
          'password':'',
          'uri': 'mongodb://mongo/erevna'
      }
    };
    exports.elasticsearch = {
        'host':'localhost:9200',
        'log':'info',
        'requestTimeout':120000
    };
    exports.api_rayasem_webapp = {
            'protocol':'https',
            'host':'localhost',
            'port':'3000',
            'token':'xxxxxxxxxx',
        };
}
if(process.env.NODE_ENV=='staging-docker'){
    exports.port = 3001;
    exports.prefixhost = 'beta';
    exports.database = {
      mongodb:{
          'host':'localhost',
          'port':'27017',
          'database':'erevna',
          'username':'',
          'password':'',
          'uri': 'mongodb://mongo/erevna'
      }
    };
    exports.elasticsearch = {
        'host':'45.77.34.141:9444',
        'log':'info',
        'requestTimeout':120000
    };
    exports.api_rayasem_webapp = {
        'protocol':'https',
        'host':'localhost',
        'port':'3000',
        'token':'xxxxxxxxxx',
    };
}
if(process.env.NODE_ENV=='production-docker'){
    exports.port = 3001;
    exports.prefixhost = 'www';
    exports.database = {
      mongodb:{
          'host':'localhost',
          'port':'27017',
          'database':'erevna',
          'username':'',
          'password':'',
          'uri': 'mongodb://mongo/erevna'
      }
    };
    exports.elasticsearch = {
        //'host':'45.76.187.104:9200',
        'host':'45.77.34.141:9444',
        'log':'info',
        'requestTimeout':120000
    };
    exports.api_rayasem_webapp = {
        'protocol':'https',
        'host':'localhost',
        'port':'3000',
        'token':'xxxxxxxxxx',
    };
}
