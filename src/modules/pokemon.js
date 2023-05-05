// Homepage

// Set the url for the API
const urlAPI = 'https://pokeapi.co/api/v2/pokemon/';
const urlInvolvementAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IWti9y6er0AcFVo2U2d3/likes/';

// Function to get the likes of each Pokemon
const getLikesData = async () => {
  const response = await fetch(urlInvolvementAPI, { method: 'GET' });
  const data = await response.json();
  return data;
};

// Render results ------------------------------------------------------------------------------

const renderPokemons = async (listOfPokemons) => {
  // Gets the likes of each Pokemon
  const likesData = await getLikesData();
  let likes = 0;
  let pokemonDetail = '';
  listOfPokemons.forEach((element, index) => {
    const item = likesData.find((item) => item.item_id === `pk-${index + 1}`);
    if (item) {
      likes = item.likes;
    } else {
      likes = 0;
    }

    pokemonDetail += `
    <div class="card" id="pk-${index + 1}">
        <img class="card-image" src="${element.url}" alt="${element.name}">
      <div class="card-header">
        <h3>${element.name}</h3>
      </div>
      <div class="card-body">
        <p></p>
      </div>
      <div class="card-button">
      <div clas="card-button-like">
        <button class="like" data-target="${index + 1}"><svg viewBox="0 0 17.503 15.625" height="20.625" width="20.503" xmlns="http://www.w3.org/2000/svg" class="icon">
          <path transform="translate(0 0)" d="M8.752,15.625h0L1.383,8.162a4.824,4.824,0,0,1,0-6.762,4.679,4.679,0,0,1,6.674,0l.694.7.694-.7a4.678,4.678,0,0,1,6.675,0,4.825,4.825,0,0,1,0,6.762L8.752,15.624ZM4.72,1.25A3.442,3.442,0,0,0,2.277,2.275a3.562,3.562,0,0,0,0,5l6.475,6.556,6.475-6.556a3.563,3.563,0,0,0,0-5A3.443,3.443,0,0,0,12.786,1.25h-.01a3.415,3.415,0,0,0-2.443,1.038L8.752,3.9,7.164,2.275A3.442,3.442,0,0,0,4.72,1.25Z" id="Fill"></path>
          </svg>
        </button>
        <p class="pk-${index + 1}">${likes}</p>
        </div>
        <button type="button" class="full-rounded" id="comment">Comments<div class="border full-rounded"></div></button>
      </div>
    </div>
    `;
  });

  // call the father element and insert the data
  const section = document.querySelector('section.cards');
  section.innerHTML = pokemonDetail;

  // This section contains the like buttons functionality
  const likeButtons = document.querySelectorAll('.like');

  likeButtons.forEach((button, index) => {
    button.addEventListener('click', async (event) => {
      const pokemonCard = event.target.closest('.card');
      const pokemonId = pokemonCard.getAttribute('id');
      const requestBody = JSON.stringify({ item_id: pokemonId });
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: requestBody,
        redirect: 'follow',
      };
      fetch(urlInvolvementAPI, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => error);
      const pElements = document.querySelector(`p.${pokemonId}`);
      const likesData = await getLikesData();
      console.log(pElements);
    });
  });
};



//   const pElements = document.querySelectorAll("p[data-item-id]");

// likesData.forEach((data) => {
//   const pElement = Array.from(pElements).find((p) => p.dataset.itemId === data.item_id);
//   if (pElement) {
//     pElement.textContent = `${data.likes} likes`;
//   }
// });

const getData = async (callback) => {
  try {
    // Get the pokemon data from the pokeapi endpoint
    const responsePokeAPI = await fetch(urlAPI, {
      method: 'GET',
    });
    const dataPokemon = await responsePokeAPI.json();

    // Get the pokemon's names and ids
    const getPokemonBaseData = dataPokemon.results;

    const promisesArray = getPokemonBaseData.map(async (i) => {
      const res = await fetch(i.url);
      const dataPokemon = await res.json();
      return dataPokemon;
    });

    // Create an normal array from the promises array
    const urlsInfoArray = await Promise.all(promisesArray);

    // Construct the new array
    const listOfPokemons = [];

    for (let i = 0; i < getPokemonBaseData.length; i += 1) {
      listOfPokemons[i] = {
        name: getPokemonBaseData[i].name,
        url: urlsInfoArray[i].sprites.front_default,
        type: urlsInfoArray[i].types[0].type,
        height: urlsInfoArray[i].height,
        weight: urlsInfoArray[i].weight,
      };
    }
    return callback(listOfPokemons);
  } catch (error) {
    return error;
  }
};

getData(renderPokemons);
