const { PORT } = require("./config/settings");
const express = require("express");
const app = express();

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

require("./config/mongoose.config");

const UserRouter = require("./routes/user.routes");
app.use("/api/users", UserRouter);

const PetRouter = require("./routes/pets.routes");
app.use("/api/pets", PetRouter);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
