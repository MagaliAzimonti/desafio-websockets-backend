const express = require('express');
let app = express();
const PORT = 3001;
let path = require('path');
let { Server : HttpServer } = require('http');
let serverRoutes = require('./routes')
let socket = require('./utils/sockets')

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("./public"))


serverRoutes(app)

let http_server = new HttpServer(app);

let socket = new Socket(http_server);
socket.init();

http_server.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));