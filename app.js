var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(80);

app.use(express.static('public'));

function randomNumber(max) {
    return Math.floor(Math.random() * (max + 1));
}

const nicks = ['owca', 'taboret', 'owca11'];
function randomHighscore() {
    const nick = nicks[randomNumber(nicks.length - 1)];
    const score = randomNumber(50);
    return {nick, score };
}
console.log(randomHighscore())
const highscores = [];
for (let i = 0; i < 10; i++) {
    highscores.push(randomHighscore());
}

io.on('connection', function (socket) {
    socket.emit('highscore-update', highscores);
    socket.on('new-score',function (data){
        console.log(data)
        highscores.reverse();
        highscores.push(data);
        highscores.reverse();
        io.emit('highscore-update', highscores)
    })
});