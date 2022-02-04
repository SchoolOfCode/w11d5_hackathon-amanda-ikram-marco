import { useFetch } from "../../hooks/useFetch.js";


function PokemonViewer() {
  const { id, data, handleChange } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/`
  );
  console.log(data)
 
  return (
    <section>
      <h4>Pokemon</h4>
      <input type="number" onChange={handleChange} value={id} />
      {data && <p>{data.name} </p>}
       <p>Stat score: {data.stats ? data.stats[0].base_stat: ''}</p>
      <img src= {data.sprites ? data.sprites.front_default : ''}alt= ""></img>
     
    </section>
  );
}

export default PokemonViewer;
