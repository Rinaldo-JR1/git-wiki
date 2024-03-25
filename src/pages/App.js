import { useState } from "react";
import gitLogo from "../assets/github.png";
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";
import { Container } from "./styles";
import Button from "../components/Button";
import { api } from "../services/api";
function App() {
  const [repos, setRepos] = useState([]);
  const [curruentRepo, setCurruentRepo] = useState("");

  const handleSearchRepo = async () => {
    console.dir("teste");
    try {
      const { data } = await api.get(`repos/${curruentRepo}`);

      if (data.id) {
        if (!repos.find((repo) => repo.id === data.id)) {
          setRepos((prev) => [...prev, data]);
          setCurruentRepo("");
          return;
        }
        alert("Repositorio duplicado");
        return;
      }
      alert("Nenhum repositorio foi encontrado");
      return;
    } catch (error) {
      console.error(error);
      return;
    }
  };

  return (
    <Container>
      <img src={gitLogo} alt="gitlogo" width={72} height={72} />
      <Input value={curruentRepo} action={setCurruentRepo} />
      <Button action={handleSearchRepo} />
      {repos.length >= 1
        ? repos?.map((repo) => <ItemRepo key={repo.id} repo={repo} />)
        : null}
    </Container>
  );
}

export default App;
