import db from "../models";
import jwt from "jsonwebtoken";
import SECRET_KEY from "../config/auth.config";
import bcrypt from "bcryptjs";

const registrar = async (req: any, res: any) => {
  const user = await db.Usuarios.create({
    nombre: req.body.nombre,
    apellido_p: req.body.apellido_p,
    apellido_m: req.body.apellido_m,
    email: req.body.email,
    imagen_perfil: req.body.imagen_perfil,
    id_rol: req.body.id_rol,
  }).catch((err) => res.send({ message: err }));

  await db.Login.create({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    id_usuario: user.id_usuario,
  }).catch((err) => res.send({ message: err }));

  res.send({ message: "User was registered successfully!" });
};

const login = async (req: any, res: any) => {
  const login = await db.Login.findOne({
    where: { email: req.body.email },
  }).catch((_) => res.status(404).send({ message: "Usuario no encontrado" }));

  const passwordIsValid = bcrypt.compareSync(req.body.password, login.password);

  if (!passwordIsValid) {
    return res.status(401).send({
      accessToken: null,
      message: "Contraseña incorrecta!",
    });
  }

  const token = jwt.sign({ id: login.id_usuario }, SECRET_KEY.secret, {
    expiresIn: 86400, // 24 hours
  });

  const user = await db.Usuarios.findByPk(login.id_usuario).catch((_) =>
    res.send({ message: "Error" })
  );

  console.log(user);

  const rol = await db.Roles.findByPk(user.id_rol).catch((_) =>
    res.send({ message: "Error" })
  );

  res.status(200).send({
    id: user.id_usuario,
    email: user.email,
    roles: rol.rol,
    accessToken: token,
  });
};

export { registrar, login };
