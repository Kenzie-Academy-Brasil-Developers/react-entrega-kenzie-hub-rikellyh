import Container from "../../styles/LoginStyle";
import { useContext } from "react";
import { Button, Form, Input } from "../../components/Form/style";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerValidation } from "../../validations/register";
import { AuthContext } from "../../contexts/AuthContext";

const Register = () => {
  const { registerApi } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidation),
  });

  return (
    <Container>
      <section className="section__Container">
        <div className="divForm headerForm">
          <h1>Kenzie Hub</h1>
          <Link to={"/"}>Voltar</Link>
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
                <p>{errors.name?.message}</p>
              </Input>

              <Input>
                <label htmlFor="email">Email</label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="kenzinho@gmail.com"
                />
                <p>{errors.email?.message}</p>
              </Input>

              <Input>
                <label htmlFor="password">Senha</label>
                <input
                  {...register("password")}
                  type="password"
                  placeholder="******"
                />
                <p>{errors.password?.message}</p>
              </Input>

              <Input>
                <label htmlFor="confirmPassword">Confirmar senha</label>
                <input
                  {...register("confirmPassword")}
                  type="password"
                  placeholder="******"
                />
                <p>{errors.confirmPassword?.message}</p>
              </Input>

              <Input>
                <label htmlFor="bio">Bio</label>
                <input
                  {...register("bio")}
                  type="text"
                  placeholder="Fale sobre você"
                />
                <p>{errors.bio?.message}</p>
              </Input>

              <Input>
                <label htmlFor="contact">Contato</label>
                <input
                  {...register("contact")}
                  type="tel"
                  placeholder="(12)0000-0000"
                />
                <p>{errors.contact?.message}</p>
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
