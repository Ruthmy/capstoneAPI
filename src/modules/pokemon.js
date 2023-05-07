// Homepage

// Set the url for the API
const urlAPI = 'https://pokeapi.co/api/v2/pokemon/';
const urlInvolvementAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IWti9y6er0AcFVo2U2d3/';

// Get the Comments from the API
const getComments = async (pokemonID) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  const response = await fetch(`${urlInvolvementAPI}comments/?item_id=${pokemonID}`, requestOptions);
  const data = await response.json();
  const comments = data[0];

  const amountOfComments = (totalComments) => {
    const spanElement = document.querySelector(`.amount-${pokemonID}`);
    spanElement.textContent = totalComments;
  };

  if (data.length === 0) {
    amountOfComments(1);
  } else if (data.length > 0) {
    const totalComments = data.length;
    amountOfComments(totalComments);
  } else {
    amountOfComments(0);
  }

  let commentsList;
  if (comments !== undefined) {
    commentsList = data.map((comment) => `
        <li>
          <p>${comment.comment}</p>
          <p><em>${comment.username} - ${comment.creation_date}</em></p>
        </li>
      `).join('');
  } else {
    commentsList = '<li>No comments yet</li>';
  }

  const commentsListElement = document.getElementById(`comments-list-${pokemonID}`);
  commentsListElement.innerHTML = commentsList;
};

// Create a new comment
const sendComment = async (pokemonID) => {
  const commentForm = document.getElementById(`comment-form-${pokemonID}`);
  const usernameInput = commentForm.querySelector(`#username-${pokemonID}`);
  const commentInput = commentForm.querySelector(`#comment-${pokemonID}`);
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: pokemonID,
      username: usernameInput.value,
      comment: commentInput.value,
    }),
  };

  await fetch(`${urlInvolvementAPI}comments?item_id=${pokemonID}`, requestOptions);
  // const data = await response.json();

  const requestOptionsGet = {
    method: 'GET',
    redirect: 'follow',
  };

  const response = await fetch(`${urlInvolvementAPI}comments/?item_id=${pokemonID}`, requestOptionsGet);
  const data = await response.json();
  const comments = data[0];

  let commentsList;
  if (comments !== undefined) {
    commentsList = data.map((comment) => `
        <li>
          <p>${comment.comment}</p>
          <p><em>${comment.username} - ${comment.creation_date}</em></p>
        </li>
      `).join('');
  } else {
    commentsList = '<li>No comments yet</li>';
  }

  const commentsListElement = document.getElementById(`comments-list-${pokemonID}`);
  commentsListElement.innerHTML = commentsList;
};

// Function to get the likes of each Pokemon
const getLikesData = async () => {
  const response = await fetch(`${urlInvolvementAPI}likes/`, { method: 'GET' });
  const data = await response.json();
  return data;
};

// Function to update the amount of likes for a specific pokemon
const updateLikeNumber = async (pokemonId) => {
  const likesData = await getLikesData();
  const item = likesData.find((item) => item.item_id === pokemonId);
  const likes = item ? item.likes : 0;
  return likes;
};

// This part updates the total pokemon number in the nav.
const amountOfPokemons = (listOfPokemons) => {
  const sampElement = document.querySelector('samp');
  sampElement.textContent = listOfPokemons;
};

// Render results ------------------------------------------------------------------------------

const renderPokemons = async (listOfPokemons) => {
  // Get pokemon likes
  const likesData = await getLikesData();
  let likes = 0;
  let pokemonDetail = '';
  listOfPokemons.forEach((element, index) => {
    const item = likesData.find((item) => item.item_id === `pk-${index + 1}`);
    likes = item ? item.likes : 0;

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
          <button class="like"><svg viewBox="0 0 17.503 15.625" height="20.625" width="20.503" xmlns="http://www.w3.org/2000/svg" class="icon">
          <path transform="translate(0 0)" d="M8.752,15.625h0L1.383,8.162a4.824,4.824,0,0,1,0-6.762,4.679,4.679,0,0,1,6.674,0l.694.7.694-.7a4.678,4.678,0,0,1,6.675,0,4.825,4.825,0,0,1,0,6.762L8.752,15.624ZM4.72,1.25A3.442,3.442,0,0,0,2.277,2.275a3.562,3.562,0,0,0,0,5l6.475,6.556,6.475-6.556a3.563,3.563,0,0,0,0-5A3.443,3.443,0,0,0,12.786,1.25h-.01a3.415,3.415,0,0,0-2.443,1.038L8.752,3.9,7.164,2.275A3.442,3.442,0,0,0,4.72,1.25Z" id="Fill"></path>
          </svg>
          </button>
          <p class="pk-${index + 1}">${likes}</p>
        </div>
        <button type="button" class="full-rounded comment-btn" id="comment">Comments<div class="border full-rounded"></div></button>
      </div>
    </div>
    

    <!-- Pop up window -->

    
    <div class="popup hidden" id="${index + 1}" data-target-modal="pk-${index + 1}">
      <div class="popup-header">
        <h2>${element.name}</h2>
        <button class="close-popup">X</button>
      </div>
      <div class="popup-body">
        <img src="${element.url}" alt="${element.name}">
        <div class="pokemon-info">
          <p><strong>Type:</strong> ${element.type.name}</p>
          <p><strong>Height:</strong> ${element.height}</p>
          <p><strong>Weight:</strong> ${element.weight}</p>
        </div>
        <div class="comment-section">
          <h3>Comments (<span class="amount-pk-${index + 1}"></span>)</h3>
          <ul class="comments-list" data-target-modal="pk-${index + 1}"  id="comments-list-pk-${index + 1}">
          
          <!-- COMMENTS HERE -->
          
          </ul>
        </div>
        <div class="form-section">
          <form class="comment-form" id="comment-form-pk-${index + 1}">
            <div class="comme">
              <div>
                <label for="username">Name:</label>
                <input type="text" id="username-pk-${index + 1}" name="username" required>
              </div>
              <div>
                <label for="comments">Comment:</label>
                <textarea id="comment-pk-${index + 1}" rows="4" name="comment" required></textarea>
              </div>
            </div>
          </form>
            <button type="button" class="form-button" id="pk-${index + 1}">Add Comments</button>
        </div>
      </div>
    </div>
    `;
  });
  // call the father element and insert the data
  const section = document.querySelector('section.cards');
  section.innerHTML = pokemonDetail;

  // This section contains the like buttons functionality
  const likeButtons = document.querySelectorAll('.like');

  likeButtons.forEach((button) => {
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
      fetch(`${urlInvolvementAPI}likes/`, requestOptions)
        .then((response) => response.text())
        .catch((error) => error);

      // This part updates the number of likes displayed on the screen.
      const pElement = document.querySelector(`.${pokemonId}`);
      const newAmountOfLikes = await updateLikeNumber(pokemonId);
      pElement.textContent = newAmountOfLikes + 1;
    });
  });

  // This section contains the comment buttons functionality
  const cardsContainer = document.querySelectorAll('.comment-btn');

  cardsContainer.forEach((item) => item.addEventListener('click', (event) => {
    const popup = event.target.parentNode.parentNode.nextElementSibling;
    getComments(`pk-${popup.id}`);
    if (event.target.classList.contains('comment-btn')) {
      popup.classList.toggle('hidden');
    }
    const closeBtn = popup.querySelector('.close-popup');
    closeBtn.addEventListener('click', () => {
      popup.classList.add('hidden');
    });
  }));

  const addCommentButtons = document.querySelectorAll('.form-button');

  addCommentButtons.forEach((button) => {
    button.addEventListener('click', () => {
      sendComment(button.id);
      // getComments(button.id);
    });
  });
};

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
    amountOfPokemons(listOfPokemons.length);
    return callback(listOfPokemons);
  } catch (error) {
    return error;
  }
};

getData(renderPokemons);