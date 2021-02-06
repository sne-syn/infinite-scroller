const pokemonAPIUrl = `https://pokeapi.co/api/v2/pokemon?limit=151%27`;

const fetchData = async () => {
  try {
    const response = await fetch(pokemonAPIUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Error');
  }
}

fetchData();
