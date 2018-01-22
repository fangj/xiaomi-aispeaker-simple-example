/**
 * Created by FangJian on 2018/1/18.
 */
var express = require('express');
var router = express.Router();
const _ = require('lodash');
const messageBuilder=require('./message_builder');


router.use('/', function(req, res, next) {
    const body=req.body;
    console.log(body);
    const query=_.get(body,"request.intent.query");
    const requestType=_.get(body,"request.intent.request_type"); //Start,Intent,End
    var message;
    if(requestType==="Start"){
        message=messageBuilder.buildResponseSimple("演出开始了",false);
    }else{
        message=messageBuilder.buildResponse(["这是一个例子","播放完成后退出"],true);
    }
    console.log(message);
    res.json(message);
 });


module.exports = router;
