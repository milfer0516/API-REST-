const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuarioPath = "/api/usuarios";

    //Middlewares
    this.middlewares();

    //Metodo de las rutas
    this.routes();
  }

  middlewares() {
    //Cors
    this.app.use(cors());
    // Lectura y Parseo del formato
    this.app.use(express.json());
    //Carpeta estatica
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuarioPath, require("../routes/userRouter"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en el puerto", this.port);
    });
  }
}

module.exports = Server;
