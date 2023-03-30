import db from "../models/index.js";
import jwt from "jsonwebtoken";
import SECRET_KEY from "../config/auth.config.js";
import bcrypt from "bcryptjs";

const registrar = async (req, res) => {
  console.log(req.body);
  const user = await db.Usuarios.create({
    nombre: req.body.nombre,
    apellido_p: req.body.apellido_p,
    apellido_m: req.body.apellido_m,
    email: req.body.email,
    imagen_perfil: req.body.imagen_perfil,
    id_rol: req.body.id_rol,
  });

  await db.Login.create({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    id_usuario: user.id_usuario,
  });

  res.send({ ok: true, message: "User was registered successfully!" });
};

const login = async (req, res) => {
  let login;
  try {
    login = await db.Login.findOne({
      where: { email: req.body.email },
    });

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      login.password
    );

    if (!passwordIsValid) {
      return res.send({
        accessToken: null,
        ok: false,
        message: "Contraseña incorrecta!",
      });
    }

    const token = jwt.sign({ id: login?.id_usuario }, SECRET_KEY.secret, {
      expiresIn: 86400, // 24 hours
    });

    const { id_usuario, email, id_rol } = await db.Usuarios.findByPk(
      login?.id_usuario
    );

    const rol = await db.Roles.findByPk(id_rol);

    res.status(200).send({
      id: id_usuario,
      email: email,
      roles: rol?.rol,
      accessToken: token,
    });
  } catch (e) {
    res.send({ ok: false, message: "Usuario No encontrado" });
  }
};

export { registrar, login };
