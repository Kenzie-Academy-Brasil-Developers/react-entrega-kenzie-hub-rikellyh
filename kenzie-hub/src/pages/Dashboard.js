import Header from "../components/Header/style";
import Container from "../styles/LoginStyle";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card/style";

const Dashboard = () => {
  const backLogin = useNavigate();
  return (
    <>
      <Header>
        <div>
          <h1>Kenzie Hub</h1>
          <button type="button" onClick={() => backLogin("/")}>
            Sair
          </button>
        </div>
      </Header>
      <Container>
        <section className="container__Users">
          <Card>
            <h1>Olá, fulano</h1>
            <span>aluno do M1</span>
          </Card>
        </section>
      </Container>
    </>
  );
};

export default Dashboard;
