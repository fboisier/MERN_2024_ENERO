const { PORT } = require("./config/settings");
const express = require("express");
const cors = require('cors')
const app = express();

app.use(cors())
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

require("./config/mongoose.config");

const PersonRouter = require("./routes/person.routes");
app.use("/api/person", PersonRouter);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
