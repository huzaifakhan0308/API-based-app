/**
 * @jest-environment jsdom
 */
import calcom from './calcomment.js';

describe('get comments from Mock Html', () => {
  //* *************************** Test 1-6 *************************************
  //                    Add and Remove functionality

  describe('test Items counter', () => {
    test('check counter, after add Comments', async () => {
      document.body.innerHTML = `
        <div class = "commentdivstyle" >
        <p>2023-02-09 Fitz: Hello </p>
        <p>2023-02-09 Kenny : nice soup </p>
        <p>2023-02-09 fitz: so so so nice</p>
        <p>2023-02-09 Erika: just good </p>
         </div> `;
      expect(calcom()).toBe(4);
    });

    test('check counter, comment has been removed', async () => {
      document.body.innerHTML = `
        <div class = "commentdivstyle">
        <p>2023-02-09 fitz: so so so nice</p>
        <p>2023-02-09 Erika: just good </p>
        <p>2023-02-09 Lowe: just tasty </p>
         </div> `;
      expect(calcom()).toBe(3);
    });

    test('check counter after removing all comments', async () => {
      document.body.innerHTML = `
        <div class="commentdivstyle">
         </div> `;
      expect(calcom()).toBe(0);
    });
  });
});