import db from "../models";

const verificarUsuariosDuplicados = (req: any, res: any, next: any) => {
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
