import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../services/api";

export const DashboardContext = createContext({});

export const DashboardProvider = ({ children }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [list, setList] = useState([]);

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

  const newTech = async (data) => {
    try {
      const response = await api.post("users/techs", data);

      toast.success("GG! Tecnologia adicionada com sucesso! ✨");

      setList([...list, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  async function deletTech(id) {
    try {
      await api.delete(`users/techs/${id}`);
      toast.success("Tecnologia removida, ok? ✌");
    } catch (error) {
      console.log(error);
    }
  }

  async function removeTech(id) {
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
        setList,
        closeModal,
        openModal,
        modalIsOpen,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
