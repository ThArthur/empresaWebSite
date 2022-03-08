import { useState } from "react";

import { Container, LoginForm, Button, ButtonRegister } from './style'

import imageSigIn from '../../assets/imageSigIn.png'

export default function SignIn() {
  
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
          <h5>Welcome Back</h5>
          <h1>Login to your account</h1>

          <label>Email</label>
          <input placeholder="exemplo@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>

          <label>Password</label>
          <input type="password" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)}/>

          <Button type="submit">
            <label>Login now</label>
          </Button>

          <ButtonRegister type="button">
            <label>Sign-in with google</label>
          </ButtonRegister>

        </LoginForm>
      </div>
    </Container>
  );
}
  
  