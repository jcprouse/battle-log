import { io }  from "socket.io-client";
import express from 'express'

const app = express()
const socket = io('ws://localhost:3000')

app.get('/', () => {
socket.on('hello', (arg) => {
        // in
        console.log(arg)
});

//out
socket.emit('attack')
})
app.listen(5000, () => {
        console.log('started')        
})


