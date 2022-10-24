import SectionTechnology from "./style";
import ReactModal from "react-modal";
import { useContext } from "react";
import { BsTrash } from "react-icons/bs";
import { DashboardContext, iList } from "../../contexts/DashboardContext";
import { Button, Form, Input } from "../Form/style";
import { AddTechnology, Modal } from "./Modal/style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addTech } from "../../validations/modal";

export interface iListProps {
  list: iList[];
}

const BoxTechnology = ({ list }: iListProps) => {
  const { newTech, removeTech } = useContext(DashboardContext);

  const onRequestCloseF = (event: React.MouseEvent | React.KeyboardEvent) => {};
  const onAfterCloseF = () => {};

  const customStyles: ReactModal.Styles = {
    content: {
      position: "fixed",
      top: "0",
      background: "rgba(0, 0, 0, 0.5)",
      width: "100%",
      height: "100%",
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iList>({
    resolver: yupResolver(addTech),
  });

  return (
    <SectionTechnology>
      <div className="add__Technology">
        <h2>Tecnologias</h2>
        <button onClick={onAfterCloseF} type="button">
          +
        </button>
      </div>
      <ReactModal
        isOpen={true}
        onRequestClose={onRequestCloseF}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal__Form"
        style={customStyles}
        ariaHideApp={false}
      >
        <Modal>
          <AddTechnology>
            <h3>Cadastrar Tecnologia</h3>
            <button onClick={onRequestCloseF}>X</button>
          </AddTechnology>
          <Form onSubmit={handleSubmit(newTech)}>
            <div className="addTech-Form">
              <Input>
                <label htmlFor="title">Nome</label>
                <input type="text" {...register("title")} />
                <p>{errors.title?.message}</p>
              </Input>
              <Input>
                <label htmlFor="status">Selecionar status</label>
                <select {...register("status")} name="status">
                  <option>Iniciante</option>
                  <option>Intermediário</option>
                  <option>Avançado</option>
                </select>
              </Input>
              <Button type="submit">Cadastrar Tecnologia</Button>
            </div>
          </Form>
        </Modal>
      </ReactModal>
      <ul className="list__Technology">
        {list.length === 0 && (
          <li>
            <h2>
              <em>Sem tecnologias cadastradas...</em> Até agora 🧙‍♂️
            </h2>
          </li>
        )}
        {list.map((tech, index) => (
          <li key={index}>
            <p>{tech.title}</p>
            <div className="element__Trash">
              <span>{tech.status}</span>
              <div onClick={() => removeTech(tech.id)}>
                <BsTrash id="remove" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </SectionTechnology>
  );
};

export default BoxTechnology;
