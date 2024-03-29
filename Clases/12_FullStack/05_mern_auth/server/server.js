const { PORT } = require("./config/settings");
const express = require("express");
const cors = require('cors')
const app = express();
const cookieParser = require('cookie-parser'); // to be able to read cookies

app.use(cookieParser());

const corsOptions = {
    credentials: true, // Allow credentials (cookies) to be sent to/from origin
    origin: 'http://localhost:5173', // Allow only this origin
    methods: 'GET, POST, PUT, PATCH, DELETE', // Allow these methods
};
app.use(cors(corsOptions));

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

require("./config/mongoose.config");

const PlayerRouter = require("./routes/player.routes");
app.use("/api/player", PlayerRouter);

const UserRouter = require("./routes/user.routes");
app.use("/api/auth", UserRouter);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
