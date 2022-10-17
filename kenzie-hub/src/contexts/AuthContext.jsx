import { createContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const backPage = useNavigate();
  const location = useLocation();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@KenzieHub:token");

      console.log(token);

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const { data } = await api.get(`profile`);

          setUser(data);
        } catch (error) {
          console.error(error);
        }
      }

      setLoading(false);
    }

    loadUser();
  }, []);

  const registerApi = ({
    name,
    email,
    password,
    bio,
    contact,
    course_module,
  }) => {
    const data = {
      name,
      email,
      password,
      bio,
      contact,
      course_module,
    };
    try {
      const response = api.post("users", data);
      registerSucess(response);
    } catch (error) {
      toast.error("Ops! Algo deu errado 👀");
    }
  };

  const registerSucess = () => {
    toast.success("Conta criada com sucesso!");
    setTimeout(() => backPage("/"), 4500);
  };

  async function loginApi(data) {
    try {
      const response = await api.post("sessions", data);
      const { user: userResponse, token } = response.data;
      api.defaults.headers.authorization = `Bearer ${token}`;

      setUser(userResponse);

      localStorage.setItem("@KenzieHub:token", token);
      localStorage.setItem("@KenzieHub:user", JSON.stringify(user.id));

      const toNavigate = location.state?.from?.pathname || "dashboard";
      backPage(toNavigate, { replace: true });
    } catch (error) {
      toast.error(
        "Você não tem permissão para acessar este tipo de recurso ✋"
      );
    }
  }

  return (
    <AuthContext.Provider value={{ loginApi, registerApi, loading, user }}>
      {children}
    </AuthContext.Provider>
  );
};
