
const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const UserRoutes = require("./routes/user.routes");
UserRoutes(app);

app.listen( port, () => console.log(`Listening on port: ${port} (http://localhost:${port}/)`) );