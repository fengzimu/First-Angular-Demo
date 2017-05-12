/*
* @Author: YADONG
* @Date:   2017-05-12 22:02:55
* @Last Modified by:   YADONG
* @Last Modified time: 2017-05-12 22:52:49
*/

'use strict';
var express = require('express');
var app = express();
/* >>>Editor start<<<*/ 
/*app.get('/',function(req, res){
	res.send("Hello, this is express");
});*/
//Define where index.html placed
app.use(express.static(__dirname +"/public"));
/* >>>Editor end<<<*/ 
app.listen(8888);
console.log("Server running on port 8888");