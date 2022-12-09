let {Server : SocketIO} = require('socket.io')

class Socket{
    static instancia;
    constructor(http){
        if(Socket.instancia){
            return Socket.instancia;
        }
        Socket.instancia = this;
        this.io = new SocketIO(http);
        this.mensajes = [];

    }

    init(){

    }
}

module.exports = Socket;