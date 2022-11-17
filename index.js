const express = require('express');   // express module 저장
const app = express();

app.get('/', function(req, res){    //get 요청 (localhost:3000/)
    res.send('Hello World!');
    console.log('req:'+req);
    console.log('res:'+res);
});

const port = 3000;
app.listen(port, function(){    //3000번 포트에 node.js 서버 연결
    console.log('server on! http://localhost:'+port);
});