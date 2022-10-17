import Header from "../../components/Header/style";
import Container from "../../styles/LoginStyle";
import { Link } from "react-router-dom";
import Card from "../../components/Card/style";

const Dashboard = () => {
  console.log("dashboard");

  return (
    <>
      <Header>
        <div>
          <h1>Kenzie Hub</h1>
          <Link to={"/"}>Sair</Link>
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
