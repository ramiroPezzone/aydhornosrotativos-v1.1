const express = require("express"),
  app = express();
  let port = process.env.PORT;
  if (port == null || port == "") {
    port = 8000;
  }
    path = require("path"),
  controller = require("./controllers/productos");

app.listen(port, () =>
  console.log(`El servidor se encuentra en línea en el puerto ${port}`)
);

// SETEANDO SOLICITUDES POST
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", controller.productos);

// RECEPTOR DE LOS DATOS DEL FORMULARIO
app.use(require("./emailer/emailer"));

app.set("view engine", "ejs");

app.use(express.static("public"));
