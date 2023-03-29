import dbConfig from "../config/db.config";
import usuariosModel from "./usuarion";
import rolesModel from "./roles";
import loginModel from "./login";
import publicacionesModel from "./publicaciones";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: "mysql",
  pool: { ...dbConfig.pool },
  define: {
    defaultScope: {
      attributes: {
        exclude: ["created_at", "updated_at"],
      },
    },
  },
});

const db = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  Usuarios: usuariosModel(sequelize),
  Roles: rolesModel(sequelize),
  Login: loginModel(sequelize),
  Publicaciones: publicacionesModel(sequelize),
};

export default db;
