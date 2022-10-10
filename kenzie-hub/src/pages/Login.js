import { Button, Form, Input } from "../components/Form/style";
import Container from "../styles/LoginStyle";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../services/api";

const Login = () => {
  const navigate = useNavigate();

  const schema = yup.object({
    email: yup
      .string()
      .email("Deve ser um e-mail válido")
      .required("Email é obrigatório"),
    password: yup
      .string()
      .min(8, "No minimo 8 caracteres")
      .required("Senha é obrigatória"),
  });

  const loginApi = (data) => {
    console.log(data);
    api
      .post("sessions", data)
      .then((resp) => {
        const { token, user } = resp.data;
        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
        localStorage.setItem("@KenzieHub:user", JSON.stringify(user.id));

        navigate("/dashboard");
      })
      .catch((error) =>
        toast.error(
          "Você não tem permissão para acessar este tipo de recurso ✋"
        )
      );
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Container>
      <section className="section__Login">
        <div className="divForm">
          <h1>Kenzie Hub</h1>
          <Form onSubmit={handleSubmit(loginApi)}>
            <div className="flexForm">
              <h2>Login</h2>
              <div className="section__Inputs">
                <Input>
                  <label htmlFor="email">Email</label>
                  <input {...register("email")} type="email" />
                </Input>
                <Input>
                  <label htmlFor="password">Senha</label>
                  <input {...register("password")} type="password" />
                </Input>
                <Button type="submit">Entrar</Button>
              </div>

              <span>Ainda não possui uma conta?</span>
              <button
                className="registerBtn"
                type="button"
                onClick={() => navigate("/register")}
              >
                Cadastre-se
              </button>
            </div>
          </Form>
        </div>
      </section>
    </Container>
  );
};

export default Login;
