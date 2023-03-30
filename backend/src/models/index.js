import dbConfig from "../config/db.config.js";
import usuariosModel from "./usuarion.js";
import rolesModel from "./roles.js";
import loginModel from "./login.js";
import publicacionesModel from "./publicaciones.js";
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
