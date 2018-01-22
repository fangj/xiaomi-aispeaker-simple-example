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
    if(requestType==="Start"){
        const message=messageBuilder.buildResponseSimple("演出开始了",false);
        res.json(message);
    }else{
        const messages=messageBuilder.buildResponse(["这是一个例子","播放完成后退出"],true);
        res.json(message);
    }
 });


module.exports = router;
