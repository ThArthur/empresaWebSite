import { useContext } from "react"; 
import { Container } from './style';
import { AuthContext } from "../../contexts/auth";

import Header from "../../components/Header";

export default function Dashboard() {
  const { signOut } = useContext(AuthContext);

  return (
      <Container>
        <Header/>
        ad as dashboardad a aasd ads asdasd ad a dasd 
      </Container>
      
  );
}