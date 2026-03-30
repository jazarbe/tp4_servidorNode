import { horaActual, fechaCompleta } from "./time.js";
import express from "express";

const app = express()
const port = 3000

app.get('/', function (req, res) {
  res.send('Bienvenido a nuestro primer servidor de express!')
})

app.get('/hora', function (req, res) {
  res.send(`La hora actual es: ${horaActual()}`)
})

app.get('/fecha-completa', function (req, res) {
  res.send(fechaCompleta())
})

app.use((req, res) => {
  res.redirect('https://http.cat/404');
});

export { app, port }