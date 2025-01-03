import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="be the hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            seus pets.
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para tela inicial
          </Link>
        </section>

        <form>
          <input type="text" placeholder="Nome do herói" required />
          <input type="email" placeholder="E-mail" required />
          <input type="text" placeholder="WhatsApp" required />

          <div className="input-group">
            <input type="text" placeholder="Cidade" required />
            <input type="text" placeholder="UF" required />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
