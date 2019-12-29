import { unify, toObject, toArray } from '../src/Music';

test('toObject', () => {
  expect(toObject('')).toEqual({ m: '' });
  expect(toObject('C')).toEqual({ m: 'C' });
  expect(toObject({ m: 'C' })).toEqual({ m: 'C' });
  expect(toObject(['C', 'D'])).toEqual({ m: ['C', 'D'] });
});
test('toArray', () => {
  expect(toArray('')).toEqual(['']);
  expect(toArray([])).toEqual([]);
  expect(toArray('C')).toEqual(['C']);
  expect(toArray({ m: 'C' })).toEqual([{ m: 'C' }]);
})
test('unify', () => {
  expect(unify('')).toEqual({ m: '' });
  expect(unify('C')).toEqual({ m: ['C'] });
  expect(unify({ m: 'C' })).toEqual({ m: ['C'] });
  expect(unify(['C', 'D'])).toEqual({ m: ['C', 'D'] });
  expect(unify({ p: ['C', 'D'] })).toEqual({ p: ['C', 'D'] });
});


/*
test('render', () => {
  expect(render('')).toEqual([]);
  expect(render('C')).toEqual([
    { value: 'C', path: [[0, 1]], time: 0, duration: 1 }
  ]);
  expect(render(['C', 'D'])).toEqual([
    { value: 'C', path: [[0, 2]], time: 0, duration: 1 },
    { value: 'D', path: [[1, 2]], time: 1, duration: 1 }
  ]);
  expect(render({ p: ['C', 'E', 'G'] })).toEqual([
    { value: 'C', path: [[0, 1]], time: 0, duration: 1 },
    { value: 'E', path: [[0, 1]], time: 0, duration: 1 },
    { value: 'G', path: [[0, 1]], time: 0, duration: 1 }
  ]);
  expect(render({ p: ['C', 'E', 'G'], d: 2 })).toEqual([
    { value: 'C', path: [[0, 1]], time: 0, duration: 2 },
    { value: 'E', path: [[0, 1]], time: 0, duration: 2 },
    { value: 'G', path: [[0, 1]], time: 0, duration: 2 }
  ]);
  expect(render({ m: ['c', 'e', 'g', 'c'], p: ['C', 'E', 'G'], d: 2 })).toEqual([
    { value: 'c', path: [[0, 4]], time: 0, duration: 0.5 },
    { value: 'e', path: [[1, 4]], time: 0.5, duration: 0.5 },
    { value: 'g', path: [[2, 4]], time: 1, duration: 0.5 },
    { value: 'c', path: [[3, 4]], time: 1.5, duration: 0.5 },
    { value: 'C', path: [[0, 1]], time: 0, duration: 2 },
    { value: 'E', path: [[0, 1]], time: 0, duration: 2 },
    { value: 'G', path: [[0, 1]], time: 0, duration: 2 }
  ]);
})

test.only('cantaloupe', () => {
  expect(render([{
    p: [
      { t: 0, m: 'A' },
      { t: 1, m: 'B' },
    ]
  }])).toEqual([

  ]);
  expect(render(
    {
      m: [
        [
          'r',
          {
            p: ['Ab', 'C', 'F']
          }
        ],
        {
          p: ['Bb', 'D', 'F']
        },
        {
          p: ['C', 'Eb', 'F']
        },
        [
          {
            p: ['Bb', 'D', 'F'],
          },
          {
            p: ['Ab', 'C', 'F']
          }
        ]
      ]
    }).map(({ time, value, duration }) => ([time, value, duration]))).toEqual([
      [0, "r", 0.5],
      [0.5, "Ab", 0.5],
      [0.5, "C", 0.5],
      [0.5, "F", 0.5],
      [1, "Bb", 1],
      [1, "D", 1],
      [1, "F", 1],
      [2, "C", 1],
      [2, "Eb", 1],
      [2, "F", 1],
      [3, "Bb", 0.5],
      [3, "D", 0.5],
      [3, "F", 0.5],
      [3.5, "Ab", 0.5],
      [3.5, "C", 0.5],
      [3.5, "F", 0.5]
    ]
    );
}); */