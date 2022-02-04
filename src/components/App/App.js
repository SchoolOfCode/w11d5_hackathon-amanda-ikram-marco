import logo from "./soc-logo.svg";
import css from "./App.module.css"
import PokemonViewer from "../PokemonViewer";
import { FightButton } from "../Button";

function App() {
  return (
    <div className={css.App}>
      <header className={css.AppHeader}>
        <img src={logo} className={css.AppLogo} alt="logo" width="100px" />
        <p>Hackathon Friday</p>
        <div className={css.PokeDiv}>
        <PokemonViewer />
        <FightButton />
        <PokemonViewer />
        </div>
        
      </header>
    </div>
  );
}

export default App;
