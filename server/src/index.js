import { Server }  from "socket.io";

const io = new Server(3000)

io.on('connection', (socket) => {
        // out
        socket.emit('hello', 'world');

        //in
        socket.on('attack', (arg) => {
            console.log('you have attacked!')
        })
    }
)