import db from "../models/index";
const getPublicaciones = async (req: any, res: any) => {
  const publicaciones = await db.Publicaciones.findAll();

  res.send(publicaciones);
};

const getPublicacion = async (req: any, res: any) => {
  const { id } = req.params;

  const publicacion = await db.Publicaciones.findByPk(id);

  res.send(publicacion);
};

const postPublicacion = async (req: any, res: any) => {
  const { id } = req.params;

  await db.Publicaciones.create({
    nombreEmpresa: req.body.nombreEmpresa,
    direccionEmpresa: req.body.direccionEmpresa,
    telefono: req.body.telefono,
    informacion: req.body.informacionGeneral,
    carrera: req.body.carrera,
    id_usuario: id,
  }).catch((err) => res.send({ message: err }));

  res.send({
    ok: true,
    message: "La publicacion se ha creado con exito!",
  });
};

export { getPublicacion, getPublicaciones, postPublicacion };
