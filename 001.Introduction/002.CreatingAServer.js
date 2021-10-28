const http = require('http');

//create server
const server = http.createServer((req, res) => {
    res.end('Hello World\n');
});

//activate server
server.listen(4242, () => {
    console.log('server is running...')
});


// $ node 002.CreatingAServer.js
// server is running...