// Homepage

// Set the url for the API
const urlAPI = "https://pokeapi.co/api/v2/pokemon/";

// Render results ------------------------------------------------------------------------------

const renderPokemons = (listOfPokemons) => {
  let pokemonDetail = '';
  console.log(listOfPokemons);
  listOfPokemons.forEach((element) => {
    pokemonDetail += `
    <div class="card">
      
        <img class="card-image" src="${element.url}" alt="${element.name}">
      
      <div class="card-header">
        <h3>${element.name}</h3>
      </div>
      <div class="card-body">
        <p></p>
      </div>
      <div class="card-button">
        <button class="like"><svg viewBox="0 0 17.503 15.625" height="20.625" width="20.503" xmlns="http://www.w3.org/2000/svg" class="icon">
          <path transform="translate(0 0)" d="M8.752,15.625h0L1.383,8.162a4.824,4.824,0,0,1,0-6.762,4.679,4.679,0,0,1,6.674,0l.694.7.694-.7a4.678,4.678,0,0,1,6.675,0,4.825,4.825,0,0,1,0,6.762L8.752,15.624ZM4.72,1.25A3.442,3.442,0,0,0,2.277,2.275a3.562,3.562,0,0,0,0,5l6.475,6.556,6.475-6.556a3.563,3.563,0,0,0,0-5A3.443,3.443,0,0,0,12.786,1.25h-.01a3.415,3.415,0,0,0-2.443,1.038L8.752,3.9,7.164,2.275A3.442,3.442,0,0,0,4.72,1.25Z" id="Fill"></path>
          </svg>
        </button>
        <button type="button" class="full-rounded" id="comment">Comments<div class="border full-rounded"></div></button>
      </div>
    </div>
    `;
  });

  // call the father element and insert the data
  const section = document.querySelector('section.cards');
  section.innerHTML = pokemonDetail;

  /*
  const arrayOfPokemon = data.results;
  // console.log(arrayOfPokemon);
  let pokemonDetail = '';
  data.results
    .sort((a, b) => b.name - a.name)
    .forEach((element) => {
      pokemonDetail += `
      <div class="card">
        
          <img class="card-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.svg.png" alt="${element.name}">
        
        <div class="card-header">
          <h3>${element.name}</h3>
        </div>
        <div class="card-body">
          <p>${element.name}</p>
        </div>
        <div class="card-button">
          <button class="like"><svg viewBox="0 0 17.503 15.625" height="20.625" width="20.503" xmlns="http://www.w3.org/2000/svg" class="icon">
            <path transform="translate(0 0)" d="M8.752,15.625h0L1.383,8.162a4.824,4.824,0,0,1,0-6.762,4.679,4.679,0,0,1,6.674,0l.694.7.694-.7a4.678,4.678,0,0,1,6.675,0,4.825,4.825,0,0,1,0,6.762L8.752,15.624ZM4.72,1.25A3.442,3.442,0,0,0,2.277,2.275a3.562,3.562,0,0,0,0,5l6.475,6.556,6.475-6.556a3.563,3.563,0,0,0,0-5A3.443,3.443,0,0,0,12.786,1.25h-.01a3.415,3.415,0,0,0-2.443,1.038L8.752,3.9,7.164,2.275A3.442,3.442,0,0,0,4.72,1.25Z" id="Fill"></path>
            </svg>
          </button>
          <button type="button" class="full-rounded" id="comment">Comments<div class="border full-rounded"></div></button>
        </div>
      </div>
      `;
    });

  // call the father element and insert the data
  const section = document.querySelector('section.cards');
  section.innerHTML = pokemonDetail;
  */
};

const getData = async (callback) => {
  try {
    const response = await fetch(urlAPI, {
      method: 'GET',
    });
    const data = await response.json();

    // Names and ids
    const getPokemonBaseData = data.results;

    const promisesArray = getPokemonBaseData.map(async (i) => {
      const res = await fetch(i.url);
      const data = await res.json();
      return data.sprites.front_default;
    });

    const urlsImgArray = await Promise.all(promisesArray);

    // Construct the new array
    const listOfPokemons = [];

    for (let i = 0; i < getPokemonBaseData.length; i++) {
      listOfPokemons[i] = {
        name: getPokemonBaseData[i].name,
        url: urlsImgArray[i],
      };
    }
    return callback(listOfPokemons);
  } catch (error) {
    return error;
  }
};

getData(renderPokemons);
