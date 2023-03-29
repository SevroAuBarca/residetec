import express from "express";
import cors from "cors";
import db from "./models";
import verificarUsuariosDuplicados from "./middleware/verificarUsuariosRegistrados";
import { login, registrar } from "./controllers/auth";
import getUsuario from "./controllers/usuarios";
import {
  getPublicacion,
  getPublicaciones,
  postPublicacion,
} from "./controllers/publicaciones";

const port = 9000;
const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req: Request, res: any) => {
  //split letters of a string
  const roles = await db.Roles.findAll({
    attributes: ["id_rol", "rol"],
  });
  console.log(roles);
  res.json(roles);
});

app.get("/usuarios/:id", getUsuario);
app.get("/publicaciones", getPublicaciones);
app.get("/publicaciones/:id", getPublicacion);
app.post("/publicaciones/:id", postPublicacion);
app.post("/auth/registrar", verificarUsuariosDuplicados, registrar);
app.post("/auth/login", login);

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
