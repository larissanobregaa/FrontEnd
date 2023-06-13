import logo from './minha_foto.jpg';
import Menu from '../components/Menu/Menu';
import { Botao } from '../components/Cartao/style';
import { AppStyle } from "./style";

function Cadastro() {
    return (
    <AppStyle>
      <div className="Login">
        <Menu />
        <header className="Login-logo">
          <img src={logo} className="Login-logo" alt="logo" />
        </header>
        <body className='Login-area'>
          <h1>Cadastro de usuários</h1>
          <p>Nome do funcionário</p> 
          <input type='text'></input> 

          <p>Email</p> 
          <input type='e-mail'></input> 

          <p>Senha</p> 
          <input type='password'></input> 

          <p>Setor</p> 
          <input type='text'></input> 
          
          <p>Responsável RH</p> 
          <input type='text'></input> 

          <p>Data de cadastro</p> 
          <input type='date'></input> 
          <p></p>
        <Botao>Enviar</Botao>
        <Botao>Descartar</Botao>
                  
        </body>
        <footer className='footer'>
          <p>Desenvolvido por @Techmais. Todos os direitos reservados. </p>
        </footer>
      </div>
    </AppStyle>    
  );
}

export default Cadastro;
