function init() {
  // Socket IO
  let socket = io();

  $('#machudocxs').summernote();

  let body = document.getElementById('body');

  // $('#machudocxs').on(['summernote.blur', 'summernote.keyup'], function (we, contents, $editable) {
  //   socket.emit('chat:message', {
  //     id: socket.id,
  //     summer: $('#machudocxs').summernote('code')
  //   });
  // })

  let sendData = () => {
    socket.emit('chat:message', {
      id: socket.id,
      summer: $('#machudocxs').summernote('code')
    });
  }

  body.addEventListener('click', sendData, false);
  body.addEventListener('blur', sendData, false);
  body.addEventListener('keyup', sendData, false);

  socket.on('chat:message', function (data) {

    $('#machudocxs').summernote('saveRange');
    $('#machudocxs').summernote('code', data.summer);
    $('#machudocxs').summernote('restoreRange');
    // $('#machudocxs').summernote('focus');
  });
}

document.addEventListener('DOMContentLoaded', init);
