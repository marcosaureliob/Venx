import { useState } from "react";
import styles from "./Form.module.scss";
export default function Form() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [segmento, setSegmento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dados, setDados] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoDado = {
      email: email,
      empresa: empresa,
      segmento: segmento,
      telefone: telefone,
    };

    setDados([...dados, novoDado]);

    // Limpa os campos de entrada do formulário
    setEmail("");
    setEmpresa("");
    setSegmento("");
    setTelefone("");
  };

  return (
    <div>
      <section className={styles.firstSection}>
        <div className={styles.textContent}>
          <h2>Inovação e tecnologia que transformam A Saúde</h2>
          <h3>
            Nosso objetivo é oferecer Tecnologia da Informação <br /> para
            pequenas, médias e grandes empresas.
          </h3>
          <p>
            Desenvolvemos softwares online com dedicação e engajamento contínuo,
            inspirando parceiros e clientes a realizarem seus sonhos com
            sucesso. Dispomos de um time multidisciplinar, extremamente
            competente, focados em gerar resultados positivos garantindo assim a
            excelência em todas as nossas soluções.
          </p>
        </div>

        <div className={styles.formContainer}>
          <label className={styles.formLabel}>
            Preencha o formulário e fale com um de nossos consultores!
          </label>
          <form onSubmit={handleSubmit}>
            <label>Nome</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Empresa</label>
            <input
              type="text"
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
              required
            />
            <label>Segmento</label>
            <input
              type="text"
              value={segmento}
              onChange={(e) => setSegmento(e.target.value)}
              required
            />
            <label>Telefone</label>
            <input
              type="number"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
            />
            <button type="submit" className={styles.submitButton}>
              Solicitar Contato
            </button>
          </form>
        </div>
      </section>

      <section className={styles.secondSection}>
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Empresa</th>
              <th>Segmento</th>
              <th>Telefone</th>
            </tr>
          </thead>
          <tbody>
            {dados.map((dado, index) => (
              <tr key={index}>
                <td>{dado.email}</td>
                <td>{dado.empresa}</td>
                <td>{dado.segmento}</td>
                <td>{dado.telefone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
