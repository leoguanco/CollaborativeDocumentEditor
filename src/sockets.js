module.exports = io => {
  io.on('connection', socket => {
    console.log('Nueva conexion: ',socket.id)
    socket.on('chat:message', data => {
      io.clients((error, clients) => {
        if (error) throw error; 
        clients.forEach(client => {
          if (client != data.id){
            socket.broadcast.to(client).emit('chat:message', data)
            // io.emit('chat:message', data)
          }
        });
      });
    });
  });

};
