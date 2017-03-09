var socket = io();

 socket.on('connect', function () {
    console.log('connected to server');

    socket.emit('createMessage', {
    	from: "Michael",
    	text: "Yup that works for me"
    });
 });

 socket.on('disconnect', function () {
 	console.log('Disconnected from server');
 });

 socket.on('newEmail', function (email) {
 	console.log('New email', email);
 });

