
// let express = require('express');
// let router = express.Router();

// router.get('/', function(req, res, next){
//     res.render('map');
// });


let express = require('express');
let router = express.Router();
let WebSocket = require('ws');
let wss = new WebSocket.Server({ port: 8080 });

router.get('/', function(req, res, next){
    wss.on('connection',  function connection(ws) {
        ws.on('message', function incoming(message) {
          console.log('received: %s', message); 
          a = message;
        });
       
        ws.send('something');
    });
    res.render('map');
});


module.exports = router;