const { PORT } = require("./config/settings");
const express = require("express");
const cors = require('cors')
const app = express();
const cookieParser = require('cookie-parser'); // to be able to read cookies
const cron = require('node-cron');

const { PlayerModel } = require("./models/player.model");
var nodemailer = require('nodemailer');
var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "a6f1cefc878ca6",
        pass: "719fbb702d1c54"
    }
});


app.use(cookieParser());

const corsOptions = {
    credentials: true, // Allow credentials (cookies) to be sent to/from origin
    origin: 'http://localhost:5173', // Allow only this origin
    methods: 'GET, POST, PUT, PATCH, DELETE', // Allow these methods
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./config/mongoose.config");

const PlayerRouter = require("./routes/player.routes");
app.use("/api/player", PlayerRouter);

const UserRouter = require("./routes/user.routes");
app.use("/api/auth", UserRouter);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

const hora = '46 21 * * *';
cron.schedule(hora, () => {
    console.log('Ejecutando una tarea cada en:', hora);

    PlayerModel.find({})
        .then((players) => {
            console.log("Se encontraron ", players.length, " jugadores");
            players.forEach((player) => {
                player.games = player.games.map(() => "Undesided");
                player.save()
                    .then(() => {
                        console.log(`El jugador ${player.name} ha sido actualizado.`);


                        var mailOptions = {
                            from: 'tu-correo@ejemplo.com',
                            to: 'destinatario@ejemplo.com',
                            subject: 'Correo de prueba',
                            text: `El jugador ${player.name} ha sido actualizado.`,
                            html: `
                            <div style="
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                height: 100vh;
                                background-color: #f8f9fa;
                            ">
                                <div style="
                                    padding: 20px;
                                    border-radius: 5px;
                                    background-color: #fff;
                                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                                ">
                                    <h1 style="color: #6c757d;">Actualización del jugador</h1>
                                    <p>El jugador ${player.name} ha sido actualizado.</p>
                                </div>
                            </div>
                            `
                        };

                        transport.sendMail(mailOptions, function (error, info) {
                            if (error) {
                                console.log(error);
                            } else {
                                console.log('Correo enviado: ' + info.response);
                            }
                        });
                    })
                    .catch((err) => {
                        console.error("Algo salió mal al guardar", err);
                    });
            });
        })
        .catch((err) => {
            console.error("Algo salió mal al buscar", err);
        });

});