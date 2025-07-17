const urlPokemon = "https://pokeapi.co/api/v2/pokemon";

const listOfPokemon = document.querySelector("#listOfPokemon");

fetch(urlPokemon)
  .then((response) => response.json())
  .then((dataPokemon) => {
   // console.log(dataPokemon.results);
    const pokemons = dataPokemon.results
    
    pokemons.forEach(pokemon => {
      const li = document.createElement("li");
      li.textContent = pokemon.name;
      listOfPokemon.append(li);
    });
  });