import { ItemContainer } from "./style";

const ItemRepo = ({ repo }) => {
  return (
    <ItemContainer>
      <h3>{repo?.name}</h3>
      <p>{repo?.full_name}</p>
      <a href={repo.html_url} target="_blank" rel="noreferrer" >
        Ver repositorio
      </a>
      <br />
      <a href="#" className="remove">
        Remover
      </a>
      <hr />
    </ItemContainer>
  );
};

export default ItemRepo;
