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
  openModal: () => void;
  closeModal: () => void;
  modalIsOpen: boolean;
}

export const DashboardContext = createContext<IDashboardContext>(
  {} as IDashboardContext
);

export const DashboardProvider = ({ children }: iDefaultContextProps) => {
  const [list, setList] = useState([] as iList[]);
  const [modalIsOpen, setIsOpen] = useState(false);

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
    console.log(data);

    try {
      const response = await api.post("users/techs", data);

      console.log(response);

      toast.success("GG! Tecnologia adicionada com sucesso! ✨");

      setList([...list, response.data]);
    } catch (error) {
      console.log(error);
      toast.error("Parece que não deu certo 😯");
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

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <DashboardContext.Provider
      value={{
        newTech,
        deletTech,
        removeTech,
        list,
        openModal,
        closeModal,
        modalIsOpen,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
