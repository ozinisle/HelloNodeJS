// Illustrating the use of Ecma script directly with node JS
// note this is a mjs file instead of a js file


//import http from 'http';
import { createServer } from 'http';
//create server
//const server = http.createServer((req, res) => {
const server = createServer((req, res) => {
    res.end('Hello World\n');
});

//activate server
server.listen(4242, () => {
    console.log('server is running...')
});


// $ node 002.CreatingAServer.js
// server is running....