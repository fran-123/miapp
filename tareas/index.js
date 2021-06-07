const fs = require("fs")

module.exports = {
    leerjson : () => fs.readFileSync("./data/tareas.json","utf-8"),
    guardarTareas :(titulo,estado) => {
        let tareas = this.leerjson()
        let tarea = {
            titulo,
            estado
        }
        tareas.push(tarea)
    },
    mostrarMensaje : mensaje => console.log(mnesaje)
}