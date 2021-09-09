import "./App.css";
import { useEffect, useState } from "react";
import Characters from "./Components/Characters";

function App() {
  const [characters, setCharacterList] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((response) => setCharacterList(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Characters characters={characters} />
      </header>
    </div>
  );
}

export default App;
