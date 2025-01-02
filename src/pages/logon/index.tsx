import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import heroes from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';

import './styles.css';

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logo} alt="Pet Hero" />
        <form>
          <h1>Faça seu logon</h1>
          <input type="email" placeholder="Seu e-mail" />
          <input type="password" placeholder="Sua senha" />

          <button type="submit" className="button">
            Entrar
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroes} alt="" />
    </div>
  );
}
