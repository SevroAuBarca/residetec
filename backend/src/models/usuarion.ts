import Sequelize from "sequelize/types/sequelize";
import { DataTypes } from "sequelize";
import dayjs from "dayjs";
const usuariosModel = (sequelize: Sequelize) => {
  const Usuarios = sequelize.define(
    "usuarios",
    {
      id_usuario: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING(100),
      },
      apellido_p: {
        type: DataTypes.STRING(100),
      },
      apellido_m: {
        type: DataTypes.STRING(100),
      },
      email: {
        type: DataTypes.STRING(100),
      },
      imagen_perfil: {
        type: DataTypes.STRING(1000),
      },
      fechaCreacion: {
        type: DataTypes.DATEONLY,
        defaultValue: dayjs("YYYY-MM-DD"),
      },
      fechaEdicion: {
        type: DataTypes.DATEONLY,
        defaultValue: dayjs("YYYY-MM-DD"),
      },
      id_rol: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );
  return Usuarios;
};

export default usuariosModel;
