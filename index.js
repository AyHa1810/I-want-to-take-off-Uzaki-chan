// index.js - main javascript file to load the game
// required dependencies
var express = require('express');
var socketio = require('socket.io');
var http = require('http');
const fs = require('fs').promises;

// initialize the web server
const app = express();
const server = http.Server(app);
const io = socketio(server); // attaches socket.io to the server

var dir = './src'; // directory for the server to load
//var host = 'localhost'; // server host, not used
var port = 8080; // server port

// serve static assets from dir
app.use(express.static(dir));
//app.use(express.static(path.join(__dirname, 'src')));

/** send or receive requests, commented out since its not needed
app.get('/', (req, res) => {
    res.send({ message: 'Hello lol' });
});

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/src/index.html`);
});
*/

// start the server at the given port
server.listen(port, () => console.log('server started'));
