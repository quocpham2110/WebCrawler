const http = require('http');
const server = http.createServer((req, res) => {
    res.write('<h1> Hi, This is the first time that I create a server by NodeJS </h1><hr>');
    res.end();
});
server.listen(3000, 'localhost');