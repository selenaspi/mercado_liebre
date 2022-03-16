const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;
; 
const rutaPublic = path.join(__dirname,"../", "public");// ../ me permite volver una carpeta atrás

app.listen(PORT, () => {console.log("Corriendo correctamente")});

app.use(express.static(rutaPublic));

app.get("/", (req, res) => {res.sendFile(path.join(__dirname, "views", "home.html"))});