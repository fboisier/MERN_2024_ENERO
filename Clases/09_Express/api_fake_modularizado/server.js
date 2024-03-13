const { PORT } = require("./config/settings");
const express = require("express");
const app = express();

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

require("./routes/user.routes")(app);
require("./routes/company.routes")(app);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
