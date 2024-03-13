
const express = require("express");
const app = express();
const port = 8000;


//EMULACION DE BASE DE DATOS
const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api/usuarios", (req, res) => {
    res.json(users);
});

app.get("/api/usuarios/:id", (req, res) => {
    console.log(req.params.id);
    res.json( users[req.params.id] );
});


app.post("/api/usuarios", (req, res) => {
    console.log(req.body);
    users.push(req.body)
    res.json( { status: "ok - Creado" } );
});

app.put("/api/usuarios/:id", (req, res) => {
    const id = req.params.id;
    users[id] = req.body;
    res.json( { status: "ok - Actualizado" } );
});

app.delete("/api/usuarios/:id", (req, res) => {
    const id = req.params.id;
    users.splice(id, 1);
    res.json( { status: "ok - eliminado" } );
});

app.listen( port, () => console.log(`Listening on port: ${port} (http://localhost:${port}/)`) );