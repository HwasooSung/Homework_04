var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// var unset = "unset";
// var obj = { "string": unset };
var obj = { "string": "unset" };

app.use(bodyParser.text());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// app.get('/a', getACallBack());

app.get('/a', function(req, res) {
    res.json(obj);
});

app.post('/b', function (req, res) {
    // var str = req.body;
    // console.log(req.body);
    // unset = str;
    // console.log("unset is " + unset); // 이건안됨 ㅇㅅㅇ 왜지    
    obj["string"] = req.body;
    console.log(obj);
    
    res.status(200).json(obj);
});

// var getACallBack = function(req, res) {
//     res.json(obj);
// };

app.listen(8888, function() {
    console.log("Waiting ... \n");
});