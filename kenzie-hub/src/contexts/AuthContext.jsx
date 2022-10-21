import { createContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState();
  const backPage = useNavigate();
  const location = useLocation();

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("@KenzieHub:token");

      if (token) {
        setLoading(true);
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const { data } = await api.get(`profile`);

          setUser(data);
        } catch (error) {
          localStorage.clear();
          backPage("/");
        } finally {
          setLoading(false);
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  async function loginApi(data, setLoading) {
    try {
      setLoading(true);

      const response = await api.post("sessions", data);
      const { user: userResponse, token } = response.data;
      api.defaults.headers.authorization = `Bearer ${token}`;

      setUser(userResponse);

      localStorage.setItem("@KenzieHub:token", token);
      const toNavigate = location.state?.from?.pathname || "dashboard";
      backPage(toNavigate, { replace: true });
      localStorage.setItem("@KenzieHub:user", JSON.stringify(userResponse.id));
    } catch (error) {
      toast.error(
        "Você não tem permissão para acessar este tipo de recurso ✋"
      );
    } finally {
      setLoading(false);
    }
  }

  const userLogout = () => {
    setUser(null);
    localStorage.clear();
    backPage("/");
  };

  return (
    <AuthContext.Provider
      value={{ loginApi, registerApi, loading, user, userLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
