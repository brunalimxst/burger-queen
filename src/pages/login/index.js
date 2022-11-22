import React from "react";
import Logo from "../../assets/logo-burger.svg";
import Input from "../../components/inputs";
import Button from "../../components/buttons";

function Login() {
  return (
    <>
      <section className="headerLogin">
        <h1>BURGER QUEEN</h1>
        <img src={Logo} alt="Logo da empresa" />
      </section>

      <section className="formLogin">
        <p>Email:</p>
        <Input className='inputLogin' placeholder="Digite seu email" />
        <p>Senha:</p>
        <Input className='inputLogin' placeholder="Digite sua senha" />
        <p className="forgotPassword">Esqueceu sua senha?</p>
        <Button className="buttonLogin">Entrar</Button>     
      </section>
    </>
  );
}

export default Login;
