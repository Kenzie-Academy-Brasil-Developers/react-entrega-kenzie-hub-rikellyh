import api from "../services/api";
import Container from "../styles/LoginStyle";
import { Button, Form, Input } from "../components/Form/style";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Register = () => {
  const backPage = useNavigate();

  const schema = yup.object({
    name: yup.string().required("Nome é obrigatório"),
    email: yup
      .string()
      .email("Deve ser um e-mail válido")
      .required("Email é obrigatório"),
    password: yup
      .string()
      .min(8, "No minimo 8 caracteres")
      .required("Senha é obrigatória"),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "Confirmação de senha deve ser igual a senha"
      ),
    bio: yup
      .string()
      .max(150, "A descrição precisa ter menos de 150 caracteres")
      .required("Bio é obrigatória"),
    contact: yup.string().required("Contato é obrigatório"),
    course_module: yup.string(),
  });

  const registerSucess = () => {
    toast.success("Conta criada com sucesso!");
    setTimeout(() => backPage("/"), 4500);
  };

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
    api
      .post("users", data)
      .then((response) => registerSucess())
      .catch((error) => toast.error("Ops! Algo deu errado 👀"));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Container>
      <section className="section__Container">
        <div className="divForm headerForm">
          <h1>Kenzie Hub</h1>
          <button type="button" onClick={() => backPage("/")}>
            Voltar
          </button>
        </div>
        <Form onSubmit={handleSubmit(registerApi)}>
          <div className="flexForm__Register">
            <h2>Crie sua conta</h2>
            <span>Rápido e grátis, vamos nessa!</span>
            <div className="section__Inputs">
              <Input>
                <label htmlFor="name">Nome</label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Tsunode"
                />
              </Input>

              <Input>
                <label htmlFor="email">Email</label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="kenzinho@gmail.com"
                />
              </Input>

              <Input>
                <label htmlFor="password">Senha</label>
                <input
                  {...register("password")}
                  type="password"
                  placeholder="******"
                />
              </Input>

              <Input>
                <label htmlFor="confirmPassword">Confirmar senha</label>
                <input
                  {...register("confirmPassword")}
                  type="password"
                  placeholder="******"
                />
              </Input>

              <Input>
                <label htmlFor="bio">Bio</label>
                <input
                  {...register("bio")}
                  type="text"
                  placeholder="Fale sobre você"
                />
              </Input>

              <Input>
                <label htmlFor="contact">Contato</label>
                <input
                  {...register("contact")}
                  type="tel"
                  placeholder="(12)0000-0000"
                />
              </Input>

              <Input>
                <label htmlFor="course_module">Selecionar módulo</label>
                <select
                  {...register("course_module")}
                  name="course_module"
                  required
                >
                  <option value="" disabled selected>
                    Módulo atual
                  </option>
                  <option value="Primeiro Módulo">Primeiro Módulo</option>
                  <option value="Segundo Módulo">Segundo Módulo</option>
                  <option value="Terceiro Módulo">Terceiro Módulo</option>
                  <option value="Quarto Módulo">Quarto Módulo</option>
                  <option value="Quinto Módulo">Quinto Módulo</option>
                  <option value="Sexto Módulo">Sexto Módulo</option>
                </select>
              </Input>

              <Button type="submit">Cadastrar</Button>
            </div>
          </div>
        </Form>
      </section>
    </Container>
  );
};

export default Register;
