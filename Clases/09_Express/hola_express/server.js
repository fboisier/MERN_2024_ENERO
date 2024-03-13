const express = require("express");
const app = express();
const port = 8000;

const get_API = (req, res) => {
    res.json({ message: "Hello World" });
}

app.get("/api", get_API);

app.get("/pancho", (request, response)=>{

    response.json({
        nombre: "Francisco",
        apellido: "Boisier",
        edad: 39
    })

})

app.listen( port, () => console.log(`Listening on port: ${port}`) );