CREATE DATABASE residetec;

USE residetec;

CREATE TABLE logins (id_login int AUTO_INCREMENT PRIMARY KEY,email varchar(100), password varchar(100),id_usuario int, constraint fk_usuario FOREIGN KEY (id_usuario) REFERENCES usuarios (id_usuario));

CREATE TABLE usuarios (id_usuario int PRIMARY KEY AUTO_INCREMENT, nombre varchar(100), apellido_p varchar(100), apellido_m varchar(100), email varchar(100), imagen_perfil varchar(500), fechaCreacion date, fechaEdicion date, id_rol int, constraint fk_rol FOREIGN KEY (id_rol) REFERENCES roles (id_rol));

CREATE TABLE roles (id_rol int PRIMARY KEY AUTO_INCREMENT, rol varchar(100));
INSERT INTO roles (rol) VALUES ('estudiante'),('contratista');

CREATE TABLE publicaciones(id_publicacion int PRIMARY KEY AUTO_INCREMENT, nombreEmpresa varchar(100), direccionEmpresa varchar(500), telefono int, informacion text, fechaCreacion date, carrera varchar(100), id_usuario int, constraint fk_usuario_publicacion FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario));


/*
  tablas:
    login:
      -email
      -password
      -id_usuario
    usuarios:
      -id
      -nombre
      -apellido_p
      -apellido_m
      -email
      -imagen_perfil
      -fechaCreacion
      -fechaEdicion
      -id_rol
    roles:
      -id
      -name
    publicaciones:
      -id
      -nombreEmpresa
      -direccionEmpresa
      -telefono
      -informacionGeneral
      -fechaCreacion
      -carrera
      -id_usuario
*/