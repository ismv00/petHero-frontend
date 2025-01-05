import { Link } from 'react-router-dom';
import { FiPower, FiTrash } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import './styles.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The HERO" />
        <span>Bem vindo(a), Igor</span>

        <Link className="button" to="incidents/new">
          Cadastrar novo caso
        </Link>
        <button type="submit">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>
      <h1>Casos Cadastrados</h1>

      <ul>
        <li>
          <strong>Caso:</strong>
          <p>Thor perdido</p>

          <strong>Descrição</strong>
          <p>Patinha quebrada</p>

          <strong>Valor</strong>
          <p>20.00</p>

          <button type="button">
            <FiTrash size={20} color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
  );
}
