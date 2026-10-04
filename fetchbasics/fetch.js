
// URLs
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";

// DOM elements
const output = document.querySelector("#output");
const outputList = document.querySelector("#outputList");

// results stored here once the fetch finishes
let results = null;


// Fetch ONE Pokémon (Ditto)

async function getPokemon(url) {
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    doStuff(data);
  }
}

// Display ONE Pokémon
function doStuff(data) {
  results = data;
  console.log("first: ", results);

  let html = `
    <h2>${data.name}</h2>
    <p>Height: ${data.height}</p>
    <p>Weight: ${data.weight}</p>
    <img src="${data.sprites.front_default}" alt="${data.name}">
  `;

  output.innerHTML = html;
}


// Fetch LIST of Pokémon

async function getPokemonList(url) {
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    doStuffList(data);
  }
}

//sort Pokémon by name

function sortPokemon(list) {
  list.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
}


// Display LIST of Pokémon
function doStuffList(data) {
  console.log(data);

  let pokeList = data.results;

  //sort alphabetically
  sortPokemon(pokeList);

//Loop through the sorted list 
  pokeList.forEach(pokemon => {
    let line = `<li>${pokemon.name}</li>`;
    outputList.innerHTML += line;
  });
}


// Run both functions

getPokemon(url);
getPokemonList(urlList);

console.log("second: ", results);
