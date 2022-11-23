import React from "react";
import Logo from "../../assets/logo-burger.svg";
import Input from "../../components/inputs";
import Button from "../../components/buttons";
import "./style.css";

function Login() {
  return (
    <>
      <section className="headerLogin">
        <h1 className="titleBQ">BURGER QUEEN</h1>
        <img src={Logo} alt="Logo da empresa" className="logoLogin"/>
      </section>

      <section className="formLogin">
        <h1 className="titleLogin">Login</h1>
        <p className="label">Email:</p>
        <Input className='inputLogin' placeholder="Digite seu email" />
        <p className="label">Senha:</p>
        <Input className='inputLogin' type='password' placeholder="Digite sua senha" />
        <p className="forgotPassword">Esqueceu sua senha?</p>
        <Button className="buttonLogin">Entrar</Button>     
      </section>
    </>
  );
}

export default Login;
