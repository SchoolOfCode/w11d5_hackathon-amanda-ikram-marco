import logo from "./soc-logo.svg";
import "./App.css";
import PokemonViewer from "../PokemonViewer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="100px" />
        <p>Hackathon Friday</p>
        <PokemonViewer />
      </header>
    </div>
  );
}

export default App;
