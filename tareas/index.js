const fs = require("fs")

module.exports = {
    leerjson : () => fs.readFileSync("./data/tareas.json","utf-8")
}