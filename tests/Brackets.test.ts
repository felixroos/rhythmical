import { Brackets } from '../src/Brackets';

test('parseBrackets', () => {
  expect(Brackets.outerPair('D')).toEqual(false);
  expect(Brackets.outerPair('[D]')).toEqual([0, 2]);
  expect(Brackets.outerPair('[DE]')).toEqual([0, 3]);
  expect(Brackets.outerPair('C[D]')).toEqual([1, 3]);
  expect(Brackets.outerPair('C[DE]')).toEqual([1, 4]);
  expect(Brackets.outerPair('[D]]')).toEqual([0, 2]);
  expect(Brackets.outerPair('[[D]]')).toEqual([0, 4]);
  expect(Brackets.outerPair('[[A]B[C]]')).toEqual([0, 8]);
  expect(Brackets.outerPair('[A]B[C]')).toEqual([0, 2]);
})

test('outerPairs', () => {
  expect(Brackets.outerPairs('[A]B[C]')).toEqual([[0, 2], [4, 6]]);
  expect(Brackets.outerPairs('[A]BC[D]')).toEqual([[0, 2], [5, 7]]);
  expect(Brackets.outerPairs('[A[BC]D][]')).toEqual([[0, 7], [8, 9]]);
})

test('split', () => {
  expect(Brackets.split('A')).toEqual('A');
  expect(Brackets.split('A[B]C')).toEqual(['A', 'B', 'C']);
  expect(Brackets.split('A[B]C[D]E')).toEqual(['A', 'B', 'C', 'D', 'E']);
  expect(Brackets.split('A[B]C[D]E[F]')).toEqual(['A', 'B', 'C', 'D', 'E', 'F']);
  expect(Brackets.split('A[BC]C[DE]E[FG]')).toEqual(['A', 'BC', 'C', 'DE', 'E', 'FG']);
  expect(Brackets.split('A B [C D] E')).toEqual(['A B ', 'C D', ' E']);

  expect(Brackets.split('A B [C] E', s => s.split(' '))).toEqual(['A', 'B', 'C', 'E']);
  expect(Brackets.split('A B [C D] E', s => s.split(' '))).toEqual(['A', 'B', ['C', 'D'], 'E']);
});

test('toJson', () => {
  expect(Brackets.toJson('A')).toEqual('A');
  expect(Brackets.toJson('Abc')).toEqual('Abc');
  expect(Brackets.toJson('A B C')).toEqual(['A', 'B', 'C']);
  // expect(Brackets.toJson('A [B] C')).toEqual(['A', ['B'], 'C']);
  expect(Brackets.toJson('A [B] C')).toEqual(['A', 'B', 'C']);
  expect(Brackets.toJson('A [B C] D')).toEqual(['A', ['B', 'C'], 'D']);
  expect(Brackets.toJson('A [B [C D]] E')).toEqual(['A', ['B', ['C', 'D']], 'E']);

  //expect(Brackets.toJson('A [ B] C')).toEqual(['A', ['B'], 'C']);
  expect(Brackets.toJson('A [ B] C')).toEqual(['A', 'B', 'C']);
  //expect(Brackets.toJson('A [B ] C')).toEqual(['A', ['B'], 'C']);
  expect(Brackets.toJson('A [B ] C')).toEqual(['A', 'B', 'C']);
  // expect(Brackets.toJson('A [ B ] C')).toEqual(['A', ['B'], 'C']);
  expect(Brackets.toJson('A [ B ] C')).toEqual(['A', 'B', 'C']);
  // expect(Brackets.toJson('A [    B    ] C')).toEqual(['A', ['B'], 'C']);
  expect(Brackets.toJson('A [    B    ] C')).toEqual(['A', 'B', 'C']);
  expect(Brackets.toJson('Ab3 [C4 D4] E5')).toEqual(['Ab3', ['C4', 'D4'], 'E5']);

  expect(Brackets.toJson('[C3 E3]')).toEqual(['C3', 'E3']);
  expect(Brackets.toJson('[C D][E F]')).toEqual([['C', 'D'], ['E', 'F']]);
  expect(Brackets.toJson('[C D] [E F]')).toEqual([['C', 'D'], ['E', 'F']]);
  expect(Brackets.toJson('[C D]   [E F]')).toEqual([['C', 'D'], ['E', 'F']]);
  expect(Brackets.toJson('#a [#a #a]')).toEqual(['#a', ['#a', '#a']]);
  expect(Brackets.toJson('[B3*2 D4] [A3*2 [G3 A3]]')).toEqual([['B3*2', 'D4'], ['A3*2', ['G3', 'A3']]]);
  expect(Brackets.toJson('[B3*2 D4] [A3] [B3*2 D4] [A4*2 G4]')).toEqual([['B3*2', 'D4'], 'A3', ['B3*2', 'D4'], ['A4*2', 'G4']]);
  expect(Brackets.toJson('[D4*2 [C4 B3]] [A3] [B3*2 D4] [A3*2 [G3 A3]]')).toEqual([['D4*2', ['C4', 'B3']], 'A3', ['B3*2', 'D4'], ['A3*2', ['G3', 'A3']]]);

  expect(Brackets.toJson('[C4 G3 C4 G3] [F3 C3 F3 [C3 G3]]')).toEqual(
    [["C4", "G3", "C4", "G3"], ["F3", "C3", "F3", ["C3", "G3"]]]
  );
})

test('parse with feet', () => {
  /* expect(Brackets.parse('C D . E F')).toEqual([['C', 'D'], ['E', 'F']]);
  expect(Brackets.parse('[C D . E F] [G | A]')).toEqual([[['C', 'D'], ['E', 'F']], ['G', 'A']]); */
  /* expect(Brackets.parse('ht [mt mt mt] . ht [mt mt mt] . ht mt | ht [mt mt mt] . ht [mt mt mt] . [ht ht ht] [mt mt mt]'))
    .toEqual([
      [
        ["ht",
          [
            "mt",
            "mt",
            "mt",
          ]],
        [
          "ht",
          [
            "mt",
            "mt",
            "mt",
          ]],

        [
          "ht",
          "mt",
        ],
      ],
      [
        "ht",
        [
          "mt",
          "mt",
          "mt",
        ]
      ],
      [
        "ht",
        [
          "mt",
          "mt",
          "mt",
        ]],
      [
        [
          "ht",
          "ht",
          "ht",
        ],
        [
          "mt",
          "mt",
          "mt",
        ]
      ],
    ]); */
})

test('rabbit', () => {
  expect(
    Brackets.rabbit(
      ['A', 'B', ['C', 'D', ['E', 'F'], 'G', 'A'], 'B'],
      (s) => typeof s === 'string' ? s + '#' : s
    )
  ).toEqual(
    ['A#', 'B#', ['C#', 'D#', ['E#', 'F#'], 'G#', 'A#'], 'B#']
  );
});

test('simplify', () => {
  expect(Brackets.simplify('A')).toEqual('A');
  expect(Brackets.simplify(['A'])).toEqual('A');
  expect(Brackets.simplify(['A', ''])).toEqual('A');
  expect(Brackets.simplify(['A', 'B'])).toEqual(['A', 'B']);
  expect(Brackets.simplify(['A', 'B', ''])).toEqual(['A', 'B']);
  expect(Brackets.simplifyDeep(['A', ['B']])).toEqual(['A', 'B']);
  expect(Brackets.simplifyDeep(['A', ['B', 'C']])).toEqual(['A', ['B', 'C']]);
  expect(Brackets.simplifyDeep(['A', [['B', ['C']], 'D']])).toEqual(['A', [['B', 'C'], 'D']]);
  expect(Brackets.simplifyDeep(['A', 'B', ''])).toEqual(['A', 'B']);
})
test('divide', () => {
  expect(Brackets.divide('A', ' ')).toEqual('A');
  expect(Brackets.divide('A B', ' ')).toEqual(['A', 'B']);
  expect(Brackets.divide('A B ', ' ')).toEqual(['A', 'B']);
  expect(Brackets.divideHierarchy('A', [' '])).toEqual('A');
  expect(Brackets.divideHierarchy('A B', [' '])).toEqual(['A', 'B']);
  expect(Brackets.divideHierarchy('A . B C', [' . ', ' '])).toEqual(['A', ['B', 'C']]);
  expect(Brackets.divideHierarchy('A | B C . D', [' | ', ' . ', ' '])).toEqual(['A', [['B', 'C'], 'D']]);
  expect(Brackets.divideHierarchy('A B . C', [' | ', ' . ', ' '])).toEqual([['A', 'B'], 'C']);
  expect(Brackets.divideDeep('A B C')).toEqual(['A', 'B', 'C']);
  expect(Brackets.divideDeep([['A B . C'], ['D E']], [' | ', ' . ', ' '])).toEqual(
    [[['A', 'B'], 'C'], ['D', 'E']]
  );
});

test('resolve', () => {
  expect(Brackets.resolve(['A', 'B', ['C'], 'D'])).toEqual(['A', 'B', ['C'], 'D']);
  expect(Brackets.resolve(['A', 'B', ['C', 'D'], 'D'])).toEqual(['A', 'B', ['C', 'D'], 'D']);
  expect(Brackets.resolve('CDE')).toEqual('CDE');
  expect(Brackets.resolve('C[D]E')).toEqual(['C', 'D', 'E']);
  expect(Brackets.resolve('C[DE]')).toEqual(['C', 'DE']);
  expect(Brackets.resolve('C[DE]F')).toEqual(['C', 'DE', 'F'])
  expect(Brackets.resolve('C[D[E]]F')).toEqual(['C', ['D', 'E'], 'F'])
  expect(Brackets.resolve('C[DE]F[GA]')).toEqual(['C', 'DE', 'F', 'GA'])
  expect(Brackets.resolve('C[D[Eb]F]G[A[Bb]C]')).toEqual(['C', ['D', 'Eb', 'F'], 'G', ['A', 'Bb', 'C']]);
  expect(Brackets.resolve('C[DE]E')).toEqual(['C', 'DE', 'E']);
  expect(Brackets.resolve('C[D[EF]]G')).toEqual(['C', ['D', 'EF'], 'G']);
  expect(Brackets.resolve('C [D E] E [F G]', s => s.split(' '))).toEqual(['C', ['D', 'E'], 'E', ['F', 'G']]);

  /* expect(Brackets.resolve('C [D E [F G]]', s => s.split(' '))).toEqual(['C', ['D', 'E', ['F', 'G']]]); */
  /*
    expect(Brackets.resolve('C D E', s => s.split(' '))).toEqual(['C', 'D', 'E']);
    expect(Brackets.resolve('C [D] E', s => s.split(' '))).toEqual(['C', 'D', 'E']);
    expect(Brackets.resolve('C [D E] E', s => s.split(' '))).toEqual(['C', ['D', 'E'], 'E']); */

})
