import Header from "../../components/Header/style";
import Container from "../../styles/LoginStyle";
import { Link } from "react-router-dom";
import Card from "../../components/Card/style";
import BoxTechnology from "../../components/SectionTechnology";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Dashboard = () => {
  const { user, userLogout } = useContext(AuthContext);

  return (
    <>
      <Header>
        <nav>
          <h1>Kenzie Hub</h1>
          <Link to={"/"} onClick={() => userLogout()}>
            Sair
          </Link>
        </nav>
      </Header>
      <Container>
        <section className="container__Users">
          <Card>
            <h1>Olá, {user.name}</h1>
            <span>{user.course_module}</span>
          </Card>
          <BoxTechnology />
        </section>
      </Container>
    </>
  );
};

export default Dashboard;
