import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { shallow } from "zustand/shallow";
import useLoginStore from "../store/loginStore";

const Home = () => {
  const [publicaciones, setPublicaciones] = useState([]);
  const { login, setLogin } = useLoginStore(
    (store) => ({
      login: store.login,
      setLogin: store.setLogin,
    }),
    shallow
  );

  useEffect(() => {
    getPublicaciones();
  }, []);

  useEffect(() => {
    console.log(localStorage.getItem("auth"));
    if (localStorage.getItem("auth")) {
      setLogin(JSON.parse(localStorage.getItem("auth")));
      console.log(login);
    }
  }, [setLogin]);

  const getPublicaciones = async () => {
    const { data } = await axios.get("http://localhost:9000/publicaciones");
    setPublicaciones((prev) => {
      console.log(data);
      return data;
    });
  };

  return (
    <div className="mx-10">
      {login.roles === "contratista" && (
        <Link
          to={`/createResidencia/${login.id}`}
          className="mt-5 group relative flex w-32 justify-start rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Crear Residencia
        </Link>
      )}
      <div class="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {publicaciones?.map((data) => (
          <article class="flex max-w-xl flex-col items-start justify-between">
            <div class="flex items-center gap-x-4 text-xs">
              <time dateTime={data.fechaCreacion} class="text-gray-500">
                {data.fechaCreacion}
              </time>
              <Link
                to={`/residencia/${data.id_publicacion}`}
                class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              >
                {data.carrera}
              </Link>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <Link to={`/residencia/${data.id_publicacion}`}>
                  <span class="absolute inset-0" />
                  Vacante Disponible{" "}
                </Link>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                {data.informacion.slice(30)}...
              </p>
            </div>
            <div class="relative mt-8 flex items-center gap-x-4">
              <img
                src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                class="h-10 w-10 rounded-full bg-gray-50"
              />
              <div class="text-sm leading-6">
                <p class="font-semibold text-gray-900">
                  <Link to={`/residencia/${data.id_publicacion}`}>
                    <span class="absolute inset-0" />
                    {data.nombreEmpresa}
                  </Link>
                </p>
                <p class="text-gray-600">{data.direccionEmpresa}</p>
              </div>
            </div>
          </article>
        ))}
        {/* <!-- More posts... --> */}
      </div>
    </div>
  );
};

export default Home;
