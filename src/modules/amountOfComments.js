function amountOfComments(totalComments, pokemonID) {
  const spanElement = document.querySelector(`.amount-${pokemonID}`);
  spanElement.textContent = totalComments;
}

export default amountOfComments;