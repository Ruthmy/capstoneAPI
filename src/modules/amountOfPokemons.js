// This part updates the total pokemon number in the nav.
const amountOfPokemons = (listOfPokemons) => {
  const sampElement = document.querySelector('samp');
  sampElement.textContent = listOfPokemons;
};

export default amountOfPokemons;