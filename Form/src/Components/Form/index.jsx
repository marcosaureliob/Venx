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
      nome: nome,
      email: email,
      empresa: empresa,
      segmento: segmento,
      telefone: telefone,
    };

    setDados([...dados, novoDado]);

    setNome("");
    setEmail("");
    setEmpresa("");
    setSegmento("");
    setTelefone("");
  };

  return (
    <div>
      <section className={styles.firstSection}>
        <div className={styles.textContent}>
          <div className={styles.logo}></div>
          <h2>Inovação e tecnologia que transformam A Saúde</h2>
          <p>
            Nosso objetivo é oferecer Tecnologia da Informação <br /> para
            pequenas, médias e grandes empresas.
          </p>
          <p>
            Desenvolvemos softwares online com dedicação e engajamento contínuo,
            inspirando parceiros e clientes a realizarem seus sonhos com
            sucesso. Dispomos de um time multidisciplinar, extremamente
            competente, focados em gerar resultados positivos garantindo assim a
            excelência em todas as nossas soluções.
          </p>
        </div>

        <div className={styles.formContainer}>
          <label>
            Preencha o formulário e fale com um de nossos consultores!
          </label>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Empresa"
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Segmento"
              value={segmento}
              onChange={(e) => setSegmento(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Telefone"
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
            <tr className={styles.firstTr}>
              <th>Nome</th>
              <th className={styles.thGreen}>Email</th>
              <th>Empresa</th>
              <th className={styles.thGreen}>Segmento</th>
              <th>Telefone</th>
            </tr>
            {dados.map((dado, index) => (
              <tr key={index}>
                <td>{dado.nome}</td>
                <td>{dado.email}</td>
                <td>{dado.empresa}</td>
                <td>{dado.segmento}</td>
                <td>{dado.telefone}</td>
              </tr>
            ))}
        </table>
      </section>
    </div>
  );
}
