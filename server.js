const express = require('express')
const app = express()

const crypto = require('crypto')
const algorithm = 'aes-256-ecb'
const password = '12345678901234567890123456789012'

var encrypt = crypto.createCipher(algorithm, password);

var decrypt = crypto.createDecipher(algorithm, password);
// const cors = require('cors')
// app.use(cors())
const https = require('https')
const fs = require('fs')

const httpsOptions = {
    key: fs.readFileSync('./security/cert.key'),
    cert: fs.readFileSync('./security/cert.pem')
}
const server = https.createServer(httpsOptions, app)

const io = require('socket.io')(server)
const { ExpressPeerServer } = require('peer');

const peerServer = ExpressPeerServer(server, {
  debug: true
});
const { v4: uuidV4 } = require('uuid')

const port = 30303

app.use('/peerjs', peerServer);

app.use('/encrypt', encrypt())
app.use('/decrypt', decrypt())

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.redirect(`/${uuidV4()}`)
})

app.get('/:room', (req, res) => {
  res.render('room', { roomId: req.params.room })
})

io.on('connection', socket => {
  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId)
    socket.to(roomId).broadcast.emit('user-connected', userId);
    // messages
    socket.on('message', (message) => {
      //send message to the same room
      io.to(roomId).emit('createMessage', message)
  }); 

    socket.on('disconnect', () => {
      socket.to(roomId).broadcast.emit('user-disconnected', userId)
    })
  })
})

server.listen(port, () => {
        console.log('server running at ' + port)
    })

// server.listen(process.env.PORT||8443)
