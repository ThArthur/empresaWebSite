import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { Container, LoginForm, Button } from './style'

import imageSigIn from '../../assets/imageSigIn.png'

export default function SignIn() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { singIn } = useContext(AuthContext);

  function handleSubmit(e){
    e.preventDefault();
    
    if(email !== '' && password !== ''){
      singIn(email, password);
    }
  }

  return (
    <Container>
      <img src={imageSigIn}/>
      <div>
        <LoginForm onSubmit={handleSubmit}>
          <h5>Welcome Back</h5>
          <h1>Login to your account</h1>

          <label>Email</label>
          <input placeholder="exemplo@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>

          <label>Password</label>
          <input type="password" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)}/>

          <Button type="submit">
            <label>Login now</label>
          </Button>

          <div>
            <Link to="/register">Criar uma conta</Link>
          </div>

        </LoginForm>
      </div>
    </Container>
  );
}
  
  