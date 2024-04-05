const Marcadores = require("./marcadores");

class Sockets {

    constructor(io) {

        this.io = io;

        this.marcadores = new Marcadores();

        this.socketEvents();

    }

    socketEvents() {

        this.io.on('connection', (socket) => {
            console.log("cliente conectado");
            console.log(socket.id);

            console.log("enviando marcadores activos...");
            socket.emit('marcadores-activos', this.marcadores.activos);

            socket.on('marcador-nuevo', (marcador)=>{
                console.log('marcador nuevo');
                this.marcadores.agregarMarcador(marcador);
                socket.broadcast.emit('marcador-nuevo', marcador);
            });

            socket.on('mueve-marcador', (marcador)=>{
                this.marcadores.actualizarMarcador(marcador);
                socket.broadcast.emit('mueve-marcador', marcador);
            });

        });
    }

}

module.exports = Sockets;