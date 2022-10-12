import { Button, Form, Input } from "../components/Form/style";
import Container from "../styles/LoginStyle";
import lottie from "lottie-web";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
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

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: document.getElementById("lottie"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../lottie/login-animation-code.json"),
    });

    return () => instance.destroy();
  }, []);

  return (
    <Container>
      <section className="container__Wrap">
        <section className="box__Lottie">
          <h1>O melhor jeito de organizar seus estudos em programação!! 🚀</h1>
          <div id="lottie"></div>
        </section>
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
                    <p>{errors.email?.message}</p>
                  </Input>
                  <Input>
                    <label htmlFor="password">Senha</label>
                    <input {...register("password")} type="password" />
                    <p>{errors.password?.message}</p>
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
      </section>
    </Container>
  );
};

export default Login;
