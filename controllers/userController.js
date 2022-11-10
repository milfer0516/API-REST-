const { response, request } = require("express");

const getUsuarios = (req = request, res = response) => {
  const { nombre = "", id } = req.query;
  res.json({
    msg: "Peticion GET - Controlador",
    nombre,
    id,
  });
};

const postUsuarios = (req, res = response) => {
  const { nombre, apellido, edad } = req.body;
  res.json({
    msg: "Peticion Post - Controlador",
    nombre,
    apellido,
    edad,
  });
};

const putUsuarios = (req = request, res = response) => {
  const { id } = req.params;
  res.json({
    msg: "Peticion Put - Controlador",
    id,
  });
};

const deleteUsuarios = (req, res = response) => {
  res.json({
    msg: "Peticion Delete - Controlador",
  });
};

module.exports = {
  getUsuarios,
  postUsuarios,
  putUsuarios,
  deleteUsuarios,
};
