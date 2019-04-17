$(()=>{
    var socket = io.connect('http://localhost:3000',{'forceNew':true});

    socket.on('chat-message', (msg)=>{
        $("#messages").append(`<li> ${msg}</li>`);

    });

    $('form').submit((e)=>{
        e.preventDefault();
        socket.emit('chat-message', $("#m").val());
        $("#m").val('');
        return false;
    });


});