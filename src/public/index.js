function init() {
  Quill.register('modules/cursors', QuillCursors)

  // Socket IO
  let socket = io();
  let quill = new Quill('#machudocxs', {
    theme: 'snow',
    modules: {
      cursors: {
        transformOnTextChange: true,
      },
    }
  });

  const cursor = quill.getModule('cursors');
  cursor.createCursor(socket.id, 'User 1', 'blue');

  const textChangeHandler = function(quill) {
    return function(delta, oldContents, source) {
      if (source === 'user') {
        socket.emit('textChange', {
          id: socket.id,
          delta: delta
        })
      }
    }
  }

  const selectionChangeHandler = function(cursors) {
    return function(range, oldRange, source) {
      if (source === 'user') {
        socket.emit('cursorChange', {
          id: socket.id,
          range: range
        })
      }
    }
  }

  const getClients = function() {
    fetch('/get_clients')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        data.forEach((id) => {
          if (socket.id !== id) {
            cursor.createCursor(id, id, 'red')
          }
        })
      })
  }
  getClients()

  quill.on('text-change', textChangeHandler(quill))
  quill.on('selection-change', selectionChangeHandler(cursor))

  socket.on('newCursor', function(data) {
    cursor.createCursor(data.id, data.id, 'red')
  })

  socket.on('textChange', function(data) {
    quill.updateContents(data.delta)
  })

  socket.on('cursorChange', function(data) {
    cursor.moveCursor(data.id, data.range)
  })

  socket.on('disconnect', function(data) {
    cursor.removeCursor(data.id)
  })


  /*$('#machudocxs').summernote();

  let body = document.getElementById('body');

  // $('#machudocxs').on(['summernote.blur', 'summernote.keyup'], function (we, contents, $editable) {
  //   socket.emit('chat:message', {
  //     id: socket.id,
  //     summer: $('#machudocxs').summernote('code')
  //   });
  // })

  let sendData = () => {
    $('#machudocxs').summernote('saveRange');
    socket.emit('chat:message', {
      id: socket.id,
      summer: $('#machudocxs').summernote('code')
    });
  }

  body.addEventListener('click', sendData, false);
  body.addEventListener('blur', sendData, false);
  body.addEventListener('keyup', sendData, false);

  socket.on('chat:message', function (data) {
    $('#machudocxs').summernote('code', data.summer);
    $('#machudocxs').summernote('restoreRange');
    // $('#machudocxs').on('summernote.focus', () => {
    // });
  });*/
}

document.addEventListener('DOMContentLoaded', init);
