import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../services/api";

export interface iDefaultContextProps {
  children: React.ReactNode;
}

export interface iList {
  id: string;
  title: string;
  status: string;
}

interface IDashboardContext {
  newTech: (data: iList) => void;
  deletTech: (id: string) => void;
  removeTech: (id: string) => void;
  list: iList[];
}

export const DashboardContext = createContext<IDashboardContext>(
  {} as IDashboardContext
);

export const DashboardProvider = ({ children }: iDefaultContextProps) => {
  const [list, setList] = useState([] as iList[]);

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("@KenzieHub:token");
        api.defaults.headers.authorization = `Bearer ${token}`;

        const user = await api.get("profile");

        setList(user.data.techs);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const newTech = async (data: iList) => {
    try {
      const newData = [
        ...list,
        {
          id: data.id,
          title: data.title,
          status: data.status,
        },
      ];

      await api.post("users/techs", {
        list: newData,
      });

      toast.success("GG! Tecnologia adicionada com sucesso! ✨");

      setList(newData);
    } catch (error) {
      console.log(error);
    }
  };

  async function deletTech(id: string) {
    try {
      await api.delete(`users/techs/${id}`);
      toast.success("Tecnologia removida, ok? ✌");
    } catch (error) {
      console.log(error);
    }
  }

  async function removeTech(id: string) {
    await deletTech(id);
    const update = list.filter((tech) => tech.id !== id);
    setList(update);
  }

  return (
    <DashboardContext.Provider
      value={{
        newTech,
        deletTech,
        removeTech,
        list,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
