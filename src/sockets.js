module.exports = io => {
  io.on('connection', socket => {
    console.log('Nueva conexion: ',socket.id)

    const sendMessage = function (room, data) {
      io.clients((error, clients) => {
        if (error) throw error; 
        clients.forEach(client => {
          if (client != data.id){
            socket.broadcast.to(client).emit(room, data)
          }
        });
      });
    }

    io.clients((error, clients) => {
      if (error) throw error
      clients.forEach(client => {
        if (client != socket.id) {
          socket.broadcast.to(client).emit('newCursor', {id: socket.id})
        }
      })
    })

    socket.on('textChange', data => {
      sendMessage('textChange', data)
    });

    socket.on('cursorChange', data => {
      sendMessage('cursorChange', data)
    })

    socket.on('disconnect', () => {
      sendMessage('disconnect', {id: socket.id})
    })
  });

};
