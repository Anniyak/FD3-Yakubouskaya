import { newId } from './helpers.ts';

test('Проверка поиска нового id', () => {

  expect(newId([])).toBe(1);

  expect(newId([{ id: 1, id: 3 }])).toBe(4);

  expect(newId([{ id: 1, id: 1000 }])).toBe(1001);

});