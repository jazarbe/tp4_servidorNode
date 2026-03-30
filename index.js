import { app, port } from "./src/app.js";

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})