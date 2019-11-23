function init() {
  // Socket IO
  let socket = io();

  var quill = new Quill('#machdoxs');

  let body = document.getElementById('body');
  let machdoxs = document.getElementById('machdoxs');

  body.addEventListener('keyup', (e) => {
    socket.emit('chat:message', {
      message: machdoxs.value
    });
  });

  socket.on('chat:message', function (data) {
    machdoxs.value = data.message;
  });
}

document.addEventListener('DOMContentLoaded', init);
