module.exports = io => {
  io.on('connection', socket => {
    console.log('Nueva conexion: ',socket.id)

    socket.on('chat:message', data => {
      // console.log('CONSOLE: ', data)
      io.emit('chat:message', data);
    });
  });

};
