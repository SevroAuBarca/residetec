import { DataTypes } from "sequelize";

const loginModel = (sequelize) => {
  const Login = sequelize.define(
    "logins",
    {
      id_login: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING(100),
      },
      password: {
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
  return Login;
};

export default loginModel;
