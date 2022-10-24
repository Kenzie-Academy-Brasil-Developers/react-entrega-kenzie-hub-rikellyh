import { Button, Form, Input } from "../../components/Form/style";
import Container from "../../styles/LoginStyle";
import lottie from "lottie-web";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidation } from "../../validations/login";
import { AuthContext } from "../../contexts/AuthContext";

export interface iLoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const { loginApi, loading } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormData>({
    resolver: yupResolver(loginValidation),
  });

  const submit: SubmitHandler<iLoginFormData> = (data) => {
    loginApi(data);
  };

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: document.getElementById("lottie") as HTMLElement,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../lottie/login-animation-code.json"),
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
            <Form onSubmit={handleSubmit(submit)}>
              <div className="flexForm">
                <h2>Login</h2>
                <div className="section__Inputs">
                  <Input>
                    <label htmlFor="email">Email</label>
                    <input {...register("email")} />
                    <p>{errors.email?.message}</p>
                  </Input>
                  <Input>
                    <label htmlFor="password">Senha</label>
                    <input {...register("password")} type="password" />
                    <p>{errors.password?.message}</p>
                  </Input>
                  <Button type="submit" disabled={loading}>
                    {loading ? "Entrando..." : "Entrar"}
                  </Button>
                </div>

                <span>Ainda não possui uma conta?</span>
                <Link to={"/register"} className="registerLink">
                  Cadastre-se
                </Link>
              </div>
            </Form>
          </div>
        </section>
      </section>
    </Container>
  );
};

export default Login;
