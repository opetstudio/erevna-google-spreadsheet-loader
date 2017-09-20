const _logger    = require('tracer').console();
_logger.info("invoked");
var mongoose   = require('mongoose');
const util = require('../utils/util');
const async   = require('async');

var schema = {
    "status": {type:String, require:true, enum:['temp','active', 'inactive', 'admin'], default:'temp'}, //temp, active, inactive, admin
    "username": {type:String, match:/^[a-z0-9]+$/i,  minlength:3, maxlength:30, required:true,index: { unique: true }}, //primary key
    "fullname": {type:String, default:'-'},
//    "pin": {type:String},
    "email": {type:String,minlength:2, maxlength:40, match:/^([\w-\.]+@([\w-]+\.)+[\w-]{2,11})?$/, required:true, index: { unique: true }},
    "password": {type:String,required:true},
//    "registered_by": {type:String, required:true}, //username
//    "registered_on": {type:Number, required:true, default:new Date().getTime()},
    "role": {type:Number}, //1=admin, 2=content team, 3=partner
    "createdon": {type:Number, required:true, default:new Date().getTime()},
    "modifiedon": {type:Number, required:true, default:new Date().getTime()},
//    "sponsor": {type:String,required:true}, //username referral
//    "parent": {type:String,required:true}, //username parent
//    "position": {type:String,required:true, enum:['left','right','-']}, //left or right
//    "ktp": {type:Number},
//    "pob": {type:String},
//    "dob": {type:Number},
//    "mobile": {type:Number},
//    "address": {type:String},
//    "city": {type:String},
//    "province": {type:String},
//    "postcode": {type:Number},
//    "bank_br_city": {type:String},
//    "bank_acc_no": {type:String},
//    "bank_acc_name": {type:String},
//    "bank_name": {type:String},
//    "heir_name": {type:String},
//    "heir_relation": {type:String},
//    "unique_code": {type:Number,index: { unique: true }, default:new Date().getTime()}
};

module.exports.schema = schema;
var schemaObject =  new mongoose.Schema(schema);
//schemaObject.index({ parent: 1, position: 1 }, { unique: true });
var model = mongoose.model('users', schemaObject);
// module.exports = model;
var _model_user = model;
function init(){
    _logger.info('init invoked');
    var createdon = new Date().getTime();
    var username = "root";
    var username_admin = "admin1";
    var username_partner = "partner1";
    var username_content = "contentteam";

//    var userModel = new model({
//        "username" : "init"+createdon,
//        "email" : createdon+"@rayasem.com",
//        "password" : "1XhbDH1Mredf87ba9898f05e915c4e8b7b9f3a996c",
//        "createdon" : new Date().getTime(),
//        "modifiedon" : new Date().getTime(),
//    //    "registered_by" : "system",
//    //    "registered_on" : createdon,
//    //    "sponsor" : createdon,
//    //    "parent" : createdon,
//    //    "position" : "-",
//    //    "unique_code" : createdon,
//        "status" : "active"
//    });

   _model_user.update({username:username}, {
        "username" : username,
        "email" : username+"@rayasem.com",
        "password" : "x3XHhvlnDX144a98664c6cbc90e0adfd1e12bce765",
        "createdon" : new Date().getTime(),
        "modifiedon" : new Date().getTime(),
        "role" : 1,
        "fullname" : 'root',
        "status" : "active"
    }, { upsert: true }, function(e,o){
        if(!e) _logger.info('success insert root.');
        else _logger.info('failed insert root. e:',e);
    });

    _model_user.update({username:username_admin}, {
        "username" : username_admin,
        "email" : username_admin+"@rayasem.com",
        "password" : "x3XHhvlnDX144a98664c6cbc90e0adfd1e12bce765",
        "createdon" : new Date().getTime(),
        "modifiedon" : new Date().getTime(),
        "role" : 1,
        "fullname" : 'admin rayasem',
        "status" : "active"
    }, { upsert: true }, function(e,o){
        if(!e) _logger.info('success insert root.');
        else _logger.info('failed insert root. e:',e);
    });
    _model_user.update({username:username_content}, {
        "username" : username_content,
        "email" : username_content+"@rayasem.com",
        "password" : "x3XHhvlnDX144a98664c6cbc90e0adfd1e12bce765",
        "createdon" : new Date().getTime(),
        "modifiedon" : new Date().getTime(),
        "role" : 2,
        "fullname" : 'contentteam rayasem',
        "status" : "active"
    }, { upsert: true }, function(e,o){
        if(!e) _logger.info('success insert root.');
        else _logger.info('failed insert root. e:',e);
    });
    _model_user.update({username:username_partner}, {
        "username" : username_partner,
        "email" : username_partner+"@rayasem.com",
        "password" : "x3XHhvlnDX144a98664c6cbc90e0adfd1e12bce765",
        "createdon" : new Date().getTime(),
        "modifiedon" : new Date().getTime(),
        "role" : 3,
        "fullname" : 'partner rayasem',
        "status" : "active"
    }, { upsert: true }, function(e,o){
        if(!e) _logger.info('success insert root.');
        else _logger.info('failed insert root. e:',e);
    });

//    userModel.save().then(function(){
//        _logger.info('success insert root.');
//    },function(err){
//        _logger.info('failed insert root. e:',err);
//    });
}
module.exports.init = init;
