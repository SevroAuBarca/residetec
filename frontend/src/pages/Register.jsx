import { Field, useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido_p: "",
      apellido_m: "",
      email: "",
      imagen_perfil: "XD",
      id_rol: null,
      password: "",
    },
    onSubmit: async (values) => {
      values.id_rol = parseInt(values.id_rol);
      const resultSignup = await axios.post(
        "http://localhost:9000/auth/registrar",
        values
      );
      if (resultSignup.data.ok) {
        navigate("/");
      }
    },
  });

  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-2xl text-center">Register</h1>

      <img
        className="h-52 w-auto"
        src="https://api.iconify.design/ic:round-account-circle.svg"
        alt="icon"
      />
      <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          name="nombre"
          onChange={formik.handleChange}
          value={formik.values.nombre}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <input
          type="text"
          placeholder="Apellido Paterno"
          name="apellido_p"
          onChange={formik.handleChange}
          value={formik.values.apellido_p}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <input
          type="text"
          placeholder="Apellido Materno"
          name="apellido_m"
          onChange={formik.handleChange}
          value={formik.values.apellido_m}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />

        <div
          role="group"
          aria-labelledby="my-radio-group"
          className="flex gap-2"
        >
          <label>
            <input
              type="radio"
              name="id_rol"
              onChange={formik.handleChange}
              value={1}
              className="mr-2"
            />
            Estudiante
          </label>
          <label>
            <input
              type="radio"
              name="id_rol"
              onChange={formik.handleChange}
              value={2}
              className="mr-2"
            />
            Contratista
          </label>
        </div>
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <button
          type="submit"
          className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Registrarse
        </button>
        <Link className="text-blue-600 text-center" to="/">
          Ya estas registrado? click Aqui
        </Link>
      </form>
    </div>
  );
};

export default Register;
