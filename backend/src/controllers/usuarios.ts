import db from "../models";

const getUsuario = async (req: any, res: any) => {
  const { id } = req.params;
  console.log(id);
  const user = await db.Usuarios.findByPk(id).catch((_) =>
    res.status(404).send({ message: "Usuario no encontrado" })
  );

  res.send(user);
};

export default getUsuario;
