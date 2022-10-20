import SectionTechnology from "./style";
import ReactModal from "react-modal";
import { useContext, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { AuthContext } from "../../contexts/AuthContext";
import { Button, Form, Input } from "../Form/style";
import { AddTechnology, Modal } from "./Modal/style";

const BoxTechnology = () => {
  const { user } = useContext(AuthContext);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      position: "fixed",
      top: "0",
      background: "rgba(0, 0, 0, 0.5)",
      width: "100%",
      height: "100%",
    },
  };

  return (
    <SectionTechnology>
      <div className="add__Technology">
        <h2>Tecnologias</h2>
        <button onClick={openModal} type="button">
          +
        </button>
      </div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal__Form"
        style={customStyles}
        ariaHideApp={false}
      >
        <Modal>
          <AddTechnology>
            <h3>Cadastrar Tecnologia</h3>
            <button onClick={closeModal}>X</button>
          </AddTechnology>
          <Form>
            <div className="addTech-Form">
              <Input>
                <label htmlFor="title">Nome</label>
                <input type="text" />
              </Input>
              <Input>
                <label htmlFor="status">Selecionar status</label>
                <select>
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
        {user.techs.length === 0 && (
          <li>
            <h2>
              <em>Sem tecnologias cadastradas...</em> Até agora 🧙‍♂️
            </h2>
          </li>
        )}
        {user.techs.map((tech, index) => (
          <li key={index}>
            <p>{tech.title}</p>
            <div className="element__Trash">
              <span>{tech.status}</span>
              <BsTrash id="remove" />
            </div>
          </li>
        ))}
      </ul>
    </SectionTechnology>
  );
};

export default BoxTechnology;
