/**
 * @jest-environment jsdom
 */
import reserver from './calReservers.js';

describe('test Items counter', () => {
  test('check counter,after add reservations', async () => {
    document.body.innerHTML = `
      <div class="reservations-div">
        <li class="meal-container"></li>
        <li class="meal-container"></li>
        <li class="meal-container"></li>
        <li class="meal-container"></li>
       </div> `;
    expect(reserver()).toBe(4);
  });

  test('check counter, after remove one reservations', async () => {
    document.body.innerHTML = `
      <div class="reservations-div">
        <li class="meal-container"></li>
        <li class="meal-container"></li>
        <li class="meal-container"></li>
       </div> `;
    expect(reserver()).toBe(3);
  });

  test('check counter, after removing all reservations', async () => {
    document.body.innerHTML = `
      <div class="reservations-div">
       </div> `;
    expect(reserver()).toBe(0);
  });
});