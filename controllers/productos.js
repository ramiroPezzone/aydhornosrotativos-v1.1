const listadoDeProductos = require("../productos/productos"),
  emailer = require("../emailer/emailer");

const controller = {
  productos: (req, res) => {
    res.render("index", {
      productos: listadoDeProductos,
    });
  }
};

module.exports = controller;