const express = require("express");
const app = express();
const path = require("path");

const port = 3030; 
const rutaPublic = path.join(__dirname,"../", "public");// ../ me permite volver una carpeta atrás

app.listen(port, () => {console.log("Corriendo correctamente")});

app.use(express.static(rutaPublic));

app.get("/", (req, res) => {res.sendFile(path.join(__dirname, "views", "home.html"))});