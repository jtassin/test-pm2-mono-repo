const path = require('path');
const http = require('http');
const httpProxy = require('http-proxy');

const options = {};

const proxy = httpProxy.createProxyServer(options);

const server = http.createServer(function(req, res) {
    if(req.url.match(/backend-pim/)) {
        proxy.web(req, res, {
            target: { socketPath: path.resolve(__dirname, '..', '..', 'backend-pim', 'tmp', 'socket') }
          });
    } else if(req.url.match(/backend-shops/)) {
        proxy.web(req, res, {
            target: { socketPath: path.resolve(__dirname, '..', '..', 'backend-shops', 'tmp', 'socket') }
          });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<html><body><a href="/">home</a><br /><a href="/backend-pim/jhjhjh">backend-pim</a><br/><a href="/backend-shops/jhjhjh">backend-shops</a></body></html>');
  res.end();

            }

    // proxy.web(req, res, {
    //     target: { socketPath: path.resolve(__dirname, '..', '..', 'backend-pim', 'tmp', 'socket') }
    //   });
    
  });
  
  console.log("listening on port 5050")
  server.listen(5050);
  