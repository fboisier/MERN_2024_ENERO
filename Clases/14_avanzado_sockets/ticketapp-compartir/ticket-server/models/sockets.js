const TicketList = require("./ticket-list");

class Sockets {

    constructor(io) {

        this.io = io;

        this.ticketList = new TicketList();

        this.socketEvents();

    }

    socketEvents() {

        this.io.on('connection', (socket) => {
            console.log("cliente conectado");
            console.log(socket.id);

            socket.emit('mensaje-bienvenida', {
                msg: 'Bienvenido al Server',
                fecha: new Date()
            });

            socket.on("mensaje-cliente", (data) => {

                console.log(data);

            });

            socket.on("mensaje-to-server", (data) => {

                this.io.emit("mensaje-from-server", data);

            });

            socket.on('solicitar-ticket',(data, callback) => {
                const nuevoTicket  = this.ticketList.crearTicket();
                callback(nuevoTicket);
            });

            socket.on('siguiente-ticket',(data, callback) => {
                const siguiente  = this.ticketList.asignarTicket(data.agente, data.escritorio);
                callback(siguiente);

                this.io.emit('ticket-asignado', this.ticketList.ultimos13);
            });




        });
    }

}

module.exports = Sockets;