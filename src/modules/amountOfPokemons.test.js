/**
 * @jest-environment jsdom
 */

import amountOfPokemons from './amountOfPokemons.js';

describe('amountOfPokemons', () => {
  test('returns the correct amount', () => {
    // Arrange
    document.body.innerHTML = '<li><a href="#">"home("<samp></samp>")"</a></li>';
    const listOfPokemons = [1, 2, 3];

    // Act
    amountOfPokemons(listOfPokemons.length);

    // Assert
    expect(document.querySelector('samp').textContent).toBe('3');
  });
});