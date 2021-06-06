var http = require("http");
var url = require('url');
const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    var q = url.parse(req.url);
    var x=q.pathname;
    if(x=="/welcome"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('Hello World!');
        res.end('');
    }else if(x=="/contact"){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({
            phone: '18602100000',
            email: 'guestcaredominos@jublfood.com'
          }));
        res.end('');
    }else{
        res.writeHead(404, {'content-type': 'text/html'});
        res.end();
    }    
}
httpServer.listen(8081);
//module.exports = httpServer;