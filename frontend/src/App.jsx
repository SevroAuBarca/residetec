import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { shallow } from "zustand/shallow";

import axios from "axios";
import useLoginStore from "./store/loginStore";

function App() {
  const [countries, setCountries] = useState([]);
  const { login, setLogin } = useLoginStore(
    (store) => ({
      login: store.login,
      setLogin: store.setLogin,
    }),
    shallow
  );

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await axios.get("http://localhost:9000/publicaciones");
    setLogin(data);
    console.log(login);
  }

  return <RouterProvider router={router} />;
}

export default App;
