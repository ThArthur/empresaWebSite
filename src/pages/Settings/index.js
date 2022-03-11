import { Container, Content} from './style';

import Header from "../../components/Header";
import TittlePage from "../../components/TittlePage";

export default function Settings() {

  return (
      <Container>
        <Header/>
        <Content>
          <TittlePage nomeTitulo="Settings"/>
          Settings
        </Content>
      </Container>
      
  );
}