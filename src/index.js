const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');
const store = require('./store');

// intializations
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// settings
app.set('port', process.env.PORT || 3000);

// sockets
require('./sockets')(io);

// static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/store', function(req, res) {
  res.send(store)
})

app.get('/quill_cursors.js', function(req, res) {
  res.sendFile(path.join(__dirname, '..', '/node_modules/quill-cursors/dist/quill-cursors.js'))
})

app.get('/get_clients', function(req, res) {
  let clients = io.clients((error, clients) => {
    if (error) throw error
    return clients
  })

  res.send(Object.keys(clients.connected))
})

// starting the server
server.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
