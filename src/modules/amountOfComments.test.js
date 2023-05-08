/**
 * @jest-environment jsdom
 */

import amountOfComments from './amountOfComments.js';

describe('amountOfComments', () => {
  test('should update the span element with the correct number of comments', () => {
    const pokemonID = 'pk-1';
    const totalComments = '3';
    document.body.innerHTML = '<span class="amount-pk-1"></span>';
    amountOfComments(totalComments, pokemonID);
    const spanElement = document.querySelector('.amount-pk-1');
    expect(spanElement.textContent).toBe('3');
  });
});
