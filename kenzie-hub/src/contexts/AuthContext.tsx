import { createContext, useEffect, useState, ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { iRegisterFormData } from "../pages/Register/Register";
import { toast } from "react-toastify";
import api from "../services/api";
import { iLoginFormData } from "../pages/Login/Login";
import { iList } from "./DashboardContext";

interface IUserProviderProps {
  children: ReactNode;
}
export interface iUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: iList;
}
interface IUserContextData {
  user: iUser | null;
  loginApi: (data: iLoginFormData) => void;
  userLogout: () => void;
  registerApi: (data: iRegisterFormData) => Promise<void>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<IUserContextData>(
  {} as IUserContextData
);

export const AuthProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(false);
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

  const registerApi = async (data: iRegisterFormData) => {
    try {
      await api.post("users", data);
      toast.success("Cadastro efetuado com sucesso! 🤩");
    } catch (error) {
      toast.error("Ops! Algo deu errado 👀", {
        toastId: 1,
      });
    } finally {
      setLoading(false);
    }
  };

  const loginApi = async (data: iLoginFormData) => {
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
  };

  const userLogout = (): void => {
    setUser(null);
    localStorage.clear();
    backPage("/");
  };

  return (
    <AuthContext.Provider
      value={{ loginApi, registerApi, loading, user, userLogout, setLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
