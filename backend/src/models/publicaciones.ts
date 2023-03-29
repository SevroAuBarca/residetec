import Sequelize from "sequelize/types/sequelize";
import { DataTypes } from "sequelize";
import dayjs from "dayjs";
const publicacionesModel = (sequelize: Sequelize) => {
  const Publicaciones = sequelize.define(
    "publicaciones",
    {
      id_publicacion: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombreEmpresa: {
        type: DataTypes.STRING(100),
      },
      direccionEmpresa: {
        type: DataTypes.STRING(500),
      },
      telefono: {
        type: DataTypes.BIGINT,
      },
      informacion: {
        type: DataTypes.STRING(500),
      },
      fechaCreacion: {
        type: DataTypes.DATEONLY,
        defaultValue: dayjs("YYYY-MM-DD"),
      },
      carrera: {
        type: DataTypes.STRING(100),
      },
      id_usuario: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );
  return Publicaciones;
};

export default publicacionesModel;
