const express = require('express');
const app = express();

const server = require('http').createServer(app);

const io = require('socket.io')(server);

io.on("connecton", (socket)=> {
    console.log("What is soket", socket);
    console.log("Soket is active to be connected");
    socket.on("chat", (payload)=> {
        console.log("what is payload", payload);
        io.emit()
    });
});

// app.listen(5000, ()=> {
//     console.log("server is listening........");
// })

server.listen(5000, ()=> {
    console.log("socket server is running .........");
});