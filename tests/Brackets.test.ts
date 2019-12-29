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

test.only('parse', () => {
  expect(Brackets.parse('A')).toEqual('A');
  expect(Brackets.parse('Abc')).toEqual('Abc');
  expect(Brackets.parse('A B C')).toEqual(['A', 'B', 'C']);
  expect(Brackets.parse('A [B] C')).toEqual(['A', ['B'], 'C']);
  expect(Brackets.parse('A [B C] D')).toEqual(['A', ['B', 'C'], 'D']);
  expect(Brackets.parse('A [B [C D]] E')).toEqual(['A', ['B', ['C', 'D']], 'E']);

  expect(Brackets.parse('A [ B] C')).toEqual(['A', ['B'], 'C']);
  expect(Brackets.parse('A [B ] C')).toEqual(['A', ['B'], 'C']);
  expect(Brackets.parse('A [ B ] C')).toEqual(['A', ['B'], 'C']);
  expect(Brackets.parse('A [    B    ] C')).toEqual(['A', ['B'], 'C']);
  expect(Brackets.parse('Ab3 [C4 D4] E5')).toEqual(['Ab3', ['C4', 'D4'], 'E5']);

  expect(Brackets.parse('[C3 E3]')).toEqual(['C3', 'E3']);
  expect(Brackets.parse('[C D][E F]')).toEqual([['C', 'D'], ['E', 'F']]);
  expect(Brackets.parse('[C D] [E F]')).toEqual([['C', 'D'], ['E', 'F']]);
  expect(Brackets.parse('[C D]   [E F]')).toEqual([['C', 'D'], ['E', 'F']]);
  // [B3*2 D4] [A3*2 [G3 A3]] [B3*2 D4] [A3] [B3*2 D4] [A4*2 G4] [D4*2 [C4 B3]] [A3] [B3*2 D4] [A3*2 [G3 A3]] [B3*2 D4] [A3] [B3*2 D4] [A4*2 G4] D5*2 [D5*2 [C5 B4]] [[C5 B4] G4*2]
  expect(Brackets.parse('[B3*2 D4] [A3*2 [G3 A3]]')).toEqual([['B3*2', 'D4'], ['A3*2', ['G3', 'A3']]]);
  expect(Brackets.parse('[B3*2 D4] [A3] [B3*2 D4] [A4*2 G4]')).toEqual([['B3*2', 'D4'], ['A3'], ['B3*2', 'D4'], ['A4*2', 'G4']]);
  expect(Brackets.parse('[D4*2 [C4 B3]] [A3] [B3*2 D4] [A3*2 [G3 A3]]')).toEqual([['D4*2', ['C4', 'B3']], ['A3'], ['B3*2', 'D4'], ['A3*2', ['G3', 'A3']]]);
  expect(Brackets.parse('[B3*2 D4] [A3] [B3*2 D4] [A4*2 G4]')).toEqual([['D4*2', ['C4', 'B3']], ['A3'], ['B3*2', 'D4'], ['A3*2', ['G3', 'A3']]]);
  expect(Brackets.parse('D5*2 [D5*2 [C5 B4]] [[C5 B4] G4*2]')).toEqual(['D5*2', ['D5*2', ['C5', 'B4']], ['C5', 'B4', 'G4*2']]);
  expect(Brackets.parse('[C5*2 [B4 A4]] [[B4 A4] E4*2] [D5*2 [C5 B4]] [[C5 B4] G4 C5] [G5_1.66] [~ ~ B3]')).toEqual(['D5*2', ['D5*2', ['C5', 'B4']], ['C5', 'B4', 'G4*2']]);

  // TBD fix: ht [mt mt mt] . ht [mt mt mt] . ht mt | ht [mt mt mt] . ht [mt mt mt] . [ht ht ht] [mt mt mt]

})

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
