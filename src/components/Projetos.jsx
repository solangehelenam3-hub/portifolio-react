import projetos from "../data/projetos";

function Projetos() {
  return (
    <section>
      <h2>Meus Projetos</h2>

      {projetos.map((proj) => (
        <div key={proj.id}>
          <h3>{proj.nome}</h3>
          <p>{proj.descricao}</p>
        </div>
      ))}

    </section>
  );
}

export default Projetos;