const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname)); // This tells Replit to find your index.html

io.on('connection', (socket) => {
    socket.on('message', (data) => {
        io.emit('chatMessage', { user: data.username, text: data.text });
    });
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, '0.0.0.0', () => {
    console.log('S7bat server running on port ' + PORT);
});
