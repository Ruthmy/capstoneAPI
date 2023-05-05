// Homepage

// Set the url for the API
const urlAPI = 'https://pokeapi.co/api/v2/pokemon/';
const urlInvolvementAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IWti9y6er0AcFVo2U2d3/likes/'

// Render results ------------------------------------------------------------------------------

const renderPokemons = (listOfPokemons) => {
  let pokemonDetail = '';
  listOfPokemons.forEach((element, index) => {
    pokemonDetail += `
    <div class="card" id="${index + 1}">
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
    <div class="popup hidden">
      <h2>${element.name}</h2>
      <button class="close-popup">X</button>
      <div class="popup-body">
        <img src="${element.url}" alt="${element.name}">
        <div class="pokemon-info">
          <p><strong>Type:</strong> ${element.type}</p>
          <p><strong>Height:</strong> ${element.height}</p>
          <p><strong>Weight:</strong> ${element.weight}</p>
          <div class="comment-section">
          <h3>Comments</h3>
          <ul class="comments-list"></ul>
          <form class="comment-form">
              <div>
                  <label for="username">Name:</label>
                  <input type="text" id="username" required>
              </div>
            <div>
                <label for="comment">Comment:</label>
                <textarea id="comment" rows="4" required></textarea>
                <button type="submit">Add Comment</button>
            </div>
          </form>
        </div>
        </div>
      </div>
      </div>
    </div>
    `;
  });
  // call the father element and insert the data
  const section = document.querySelector('.cards');
  const divElement = document.createElement('div');
  divElement.classList.add('poke');
  divElement.innerHTML = pokemonDetail;
  section.appendChild(divElement);
};

// add event listener to each card to show the corresponding popup
// cardsContainer.addEventListener('click', function (event) {
//   if (event.target.classList.contains('card')) {

//     const cards = document.querySelectorAll('.popup');
//     cards.forEach((card) => {
//       card.classList.remove('hidden');
//     })
//     console.log('cards');
//     // try printing cards, it should print an array of cards
//     // cards.forEach((card) => {
//     //   const popup = card.nextElementSibling;
//     //   const closeBtn = popup.querySelector('.close-popup');
      
//     //   card.addEventListener('click', () => {
//     //     popup.classList.remove('hidden');
//     //   });

//     //   closeBtn.addEventListener('click', () => {
//     //     popup.classList.add('hidden');
//     //   });
//     // });
//   }
// });

const cardsContainer = document.querySelector('.cards');

cardsContainer.addEventListener('click', function(event) {
  const popup = event.target.nextElementSibling;
  if (event.target.classList.contains('card')) {
    popup.classList.toggle('hidden');
  }
  if (event.target.classList.contains('close-popup')) {
      popup.classList.toggle('hidden');
  }
});

// const commentBtns = document.querySelectorAll('.full-rounded');
// commentBtns.forEach((commentBtn) => {
//   commentBtn.addEventListener('click', (e) => {
//     console.log('working');
//   })
// })

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
      return data;
    });

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
};0

getData(renderPokemons);
