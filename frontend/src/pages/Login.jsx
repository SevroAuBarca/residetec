import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useLoginStore from "../store/loginStore";
import { shallow } from "zustand/shallow";
import { useFormik } from "formik";
const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { setLogin } = useLoginStore(
    (store) => ({
      setLogin: store.setLogin,
    }),
    shallow
  );
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      const loginResult = await axios.post("http://localhost:9000/auth/login", {
        ...values,
      });
      if (!loginResult.data.ok) {
        setError(loginResult.data.message);
      }
      setLogin(loginResult.data);
      localStorage.setItem("auth", JSON.stringify(loginResult.data));
      navigate("home");
    },
  });

  useEffect(() => {
    console.log(localStorage.getItem("auth"));
    if (localStorage.getItem("auth")) {
      setLogin(JSON.parse(localStorage.getItem("auth")));
      navigate("home");
    }
  }, []);

  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-2xl text-center">Login</h1>

      <img
        className="h-52 w-auto"
        src="https://api.iconify.design/ic:round-account-circle.svg"
        alt="icon"
      />

      <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Password"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <span className="text-red-500 text-center">{error}</span>
        <button
          type="submit"
          className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Enviar
        </button>
        <Link className="text-blue-600 text-center" to="register">
          Aun no estas registrado? click Aqui
        </Link>
      </form>
    </div>
  );
};

export default Login;
