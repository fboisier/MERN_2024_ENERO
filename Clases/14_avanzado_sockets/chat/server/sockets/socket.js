const { io } = require('../server');
const {Usuarios} = require('../classes/usuarios');
const {crearMensaje} = require('../utils/utilidades');

const usuarios = new Usuarios();

io.on('connection', (client) => {

    client.on('entrarChat', (data, callback)=>{

            if(!data.nombre || !data.sala){
                return callback({
                    error: true,
                    mensaje: 'el nombre es necesario'
                });
            }

            client.join(data.sala);
            
            let personas = usuarios.agregarPersona(client.id, data.nombre, data.sala);
            
            client.broadcast.to(data.sala).emit('listaPersona', usuarios.getPersonasPorSala(data.sala));


            let mensaje = crearMensaje('Administrador', `${data.nombre} se ha conectado.`);

            client.broadcast.to(data.sala).emit('crearMensaje',mensaje);

            callback(personas);
    });


    client.on('crearMensaje',(data, callback)=>{

        let persona = usuarios.getPersona(client.id);

        let mensaje = crearMensaje(persona.nombre, data.mensaje);
        client.broadcast.to(persona.sala).emit('crearMensaje',mensaje);

        callback(mensaje);
    });

    client.on('disconnect', ()=>{

        let personaBorrada = usuarios.borrarPersona(client.id)
        
        let mensaje = crearMensaje('Administrador', `${personaBorrada.nombre} se ha desconectado.`);

        client.broadcast.to(personaBorrada.sala).emit('crearMensaje',mensaje);
        client.broadcast.to(personaBorrada.sala).emit('listaPersona', usuarios.getPersonasPorSala(personaBorrada.sala));

    });

    client.on('mensajePrivado', (data) =>{

        let persona = usuarios.getPersona(client.id);

        let mensaje = crearMensaje(persona.nombre, data.mensaje);
        client.broadcast.to(data.para).emit('mensajePrivado',mensaje);

    })

});

