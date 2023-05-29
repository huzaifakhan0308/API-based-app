/**
 * @jest-environment jsdom
 */
import calMeals from './calmeals.js';

describe('test Items counter', () => {
  //* *************************** Test 1-6 *************************************
  //                    Add and Remove functionality

  test('check counter, count exist meals', async () => {
    document.body.innerHTML = `
    <ul class="meals">
      <li class="meal-container"></li>
      <li class="meal-container"></li>
      <li class="meal-container"></li>
      <li class="meal-container"></li>
      </ul > `;
    expect(calMeals()).toBe(4);
  });

  test('check counter, after remove a meal', async () => {
    document.body.innerHTML = `
    <ul class="meals">
      <li class="meal-container"></li>
      <li class="meal-container"></li>
      <li class="meal-container"></li>
      <li class="meal-container"></li>
      </ul > `;
    document.querySelector('.meal-container').remove();

    expect(calMeals()).toBe(3);
  });

  test('check counter, after add a meal', async () => {
    document.body.innerHTML = `
    <ul class="meals">
      <li class="meal-container"></li>
      <li class="meal-container"></li>
      <li class="meal-container"></li>
      <li class="meal-container"></li>
      </ul > `;
    const meals = document.querySelector('.meals');
    meals.innerHTML += '<li class="meal-container"></li>';
    expect(calMeals()).toBe(5);
  });

  test('check counter, in case of no meals', async () => {
    document.body.innerHTML = `
    <ul class="meals">
      </ul > `;
    expect(calMeals()).toBe(0);
  });
});
