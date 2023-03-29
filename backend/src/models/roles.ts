import Sequelize from "sequelize/types/sequelize";
import { DataTypes } from "sequelize";

const rolesModel = (sequelize: Sequelize) => {
  const Roles = sequelize.define(
    "roles",
    {
      id_rol: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      rol: {
        type: DataTypes.STRING(100),
      },
    },
    {
      timestamps: false,
    }
  );
  return Roles;
};

export default rolesModel;
