import db from "../models/index.js";

const verificarUsuariosDuplicados = (req, res, next) => {
  // Username
  db.Usuarios.findOne({
    where: {
      email: req.body?.email,
    },
  }).then((user) => {
    if (user) {
      res.status(400).send({
        message: "Error! El Correo ya esta en uso!",
      });
      return;
    }
  });
  next();
};

export default verificarUsuariosDuplicados;
