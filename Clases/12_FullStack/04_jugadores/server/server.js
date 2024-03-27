const { PORT } = require("./config/settings");
const express = require("express");
const cors = require('cors')
const app = express();

app.use(cors())
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

require("./config/mongoose.config");

const PlayerRouter = require("./routes/player.routes");
app.use("/api/player", PlayerRouter);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
