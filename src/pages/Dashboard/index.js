import { useContext } from "react"; 
import { Container, Content } from './style';
import { AuthContext } from "../../contexts/auth";

import Header from "../../components/Header";
import TittlePage from "../../components/TittlePage";

export default function Dashboard() {
  const { signOut } = useContext(AuthContext);

  return (
      <Container>
        <Header/>
        <Content>
          <TittlePage nomeTitulo="Dashboard"/>
        </Content>
      </Container>
      
  );
}