import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../../contexts/auth'
import { Container, LoginForm, Button } from './style'

import imageSigIn from '../../assets/imageSigIn.png'

export default function SignUp() {
  
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp } = useContext(AuthContext);

  function handleSubmit(e){
    e.preventDefault();

    if(nome !== '' && email !== '' && password !== ''){
      signUp(email, password, nome);
    }
  }

  return (
    <Container>
      <img src={imageSigIn}/>
      <div>
        <LoginForm onSubmit={handleSubmit}>
          <h1>Create your account</h1>

          <label>Nome</label>
          <input placeholder="Arthur Rocha Soares" value={nome} onChange={(e) => setNome(e.target.value)}/>

          <label>Email</label>
          <input placeholder="exemplo@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>

          <label>Password</label>
          <input type="password" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)}/>

          <Button type="submit">
            <label>Criar agora</label>
          </Button>
          
          <div>
            <Link to="/">Já tenho uma conta</Link>
          </div>

        </LoginForm>
      </div>
    </Container>
  );
}