import { useFormik } from "formik";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const CreateResidencia = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      nombreEmpresa: "",
      direccionEmpresa: "",
      telefono: "",
      informacionGeneral: "",
      carrera: "",
      id_usuario: id,
    },
    onSubmit: async (values) => {
      values.telefono = parseInt(values.telefono);
      values.id_usuario = parseInt(values.id_usuario);
      const resultPost = await axios.post(
        `http://localhost:9000/publicaciones/${id}`,
        values
      );
      navigate("/home");
      console.log(resultPost);
    },
  });
  console.log(id);
  return (
    <div className="flex flex-col items-center gap-3">
      <h1>Crear Residencia</h1>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-wrap w-1/3 gap-4"
      >
        <label htmlFor="">Nombre Empresa</label>
        <input
          type="text"
          name="nombreEmpresa"
          value={formik.values.nombreEmpresa}
          onChange={formik.handleChange}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <label htmlFor="">Direccion Empresa</label>
        <input
          type="text"
          name="direccionEmpresa"
          value={formik.values.direccionEmpresa}
          onChange={formik.handleChange}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <label htmlFor="">Telefono</label>

        <input
          type="text"
          name="telefono"
          value={formik.values.telefono}
          onChange={formik.handleChange}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <label htmlFor="">Informacion General</label>
        <textarea
          type="text"
          name="informacionGeneral"
          value={formik.values.informacionGeneral}
          onChange={formik.handleChange}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <label htmlFor="">Carrera</label>
        <input
          type="text"
          name="carrera"
          value={formik.values.carrera}
          onChange={formik.handleChange}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <button
          className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          type="submit"
        >
          Crear
        </button>
      </form>
    </div>
  );
};

export default CreateResidencia;
