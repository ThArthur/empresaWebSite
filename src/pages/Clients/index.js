import { Container, Content} from './style';

import Header from "../../components/Header";
import TittlePage from "../../components/TittlePage";

export default function Clients() {

  return (
      <Container>
        <Header/>
        <Content>
          <TittlePage nomeTitulo="Clientes"/>
          Clients
        </Content>
      </Container>
      
  );
}