import { useState } from "react";
import { Link } from "react-router-dom";

import { Container, LoginForm, Button } from './style'

import imageSigIn from '../../assets/imageSigIn.png'

export default function SignUp() {
  
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    alert('Click');
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

          <label>Confirm Password</label>
          <input type="password" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)}/>

          <Button type="submit">
            <label>Create now</label>
          </Button>
          
          <div>
            <Link to="/">Already have an account</Link>
          </div>

        </LoginForm>
      </div>
    </Container>
  );
}