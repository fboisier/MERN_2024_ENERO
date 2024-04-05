const express = require("express");
const app = express();
const cors = require('cors')

const corsOptions = {
    credentials: true, // Allow credentials (cookies) to be sent to/from origin
    origin: 'http://localhost:5173', // Allow only this origin
    methods: 'GET, POST, PUT, PATCH, DELETE', // Allow these methods
};
app.use(cors(corsOptions));





const server = app.listen(8000, () =>
    console.log(`Listening on port: 8000`)
);

const io = require("socket.io")(server);

io.on("connection", (socket) => {
    console.log("SERVER: a user connected: ", socket.id);

    socket.on("disconnect", () => {
        console.log("SERVER: user disconnected");
    });

    socket.on("event_from_client", (data) => {
        console.log("SERVER:", data);

        socket.broadcast.emit("send_data_to_all_other_clients", data);
    })

})