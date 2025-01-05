import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            um lar para esses bichinhos.
          </p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para Home
          </Link>
        </section>

        <form>
          <input required placeholder="Nome do Herói" />

          <input required type="email" placeholder="E-mail" />

          <input required placeholder="WhatsApp" />

          <div className="input-group">
            <input required placeholder="Cidade" />
            <input required placeholder="UF" style={{ width: 80 }} />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
