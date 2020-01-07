/* import swimming from './swimming.json'; */
import swimming from './swimming.yml';
import cantaloupe from './cantaloupe-island.json';
import starworld from './star-world.json';
import entchen from './entchen-nested.json';
import entchenAbsolute from './entchen-absolute.json';
import entchenHarmonized from './entchen-harmonized.yml';
import timeOfTheFallingRain from './time-of-the-falling-rain.json';
import zeldasRescue from './zelda-rescue.json';
import zeldasRescueVerbose from './zelda-rescue-intro.json';
import zeldasRescueBrackets from './zeldas-rescue-brackets.yaml';
import vanillaDome from './vanilla-dome.json';
import dub1 from './dub1.json';
import slengTeng from './riddims/slengteng.json';
import realRock from './riddims/realrock.json';
import tidal from './tidal.json';

export const examples = {
  chords: {
    "instrument": "piano",
    "duration": 4,
    "chords": [
      "CM7",
      [
        "Dm7",
        "G7"
      ]
    ],
    "m": "C2 [D2 G2]"
  },
  chordsB: {
    "instrument": "piano",
    "duration": 4,
    "chords": [
      {
        "chords": ["CM7"],
        "duration": 2
      },
      "Dm7",
      "G7"
    ],
    "m": "C2*2 D2 G2"
  },
  bebopChords2: {
    "let": {
      "a1": "A2,G3,C4,E4,G4",
      "a2": "A2,G#3,C4,E4,G#4",
      "a3": "A2,G3,C4,E4,A4",
      "a4": "Ab2,F#3,C4,Eb4,B4"
    },
    "instrument": "piano",
    "duration": 4,
    "scale": "Db3 bebop major",
    "m": [
      ["#a2", "#a3", "#a4*2"]
    ]
  },
  bebopChords: {
    "let": {
      "c": "1,5,8,11"
    },
    "instrument": "piano",
    "duration": 16,
    "scale": "Db3 bebop major",
    "m": [
      {
        "assign": {
          "transpose": [0, 1, 2, 3, 4, 5, 6, 7]
        },
        "m": ["#c", "#c", "#c", "#c", "#c", "#c", "#c", "#c"]
      },
      {
        "assign": {
          "transpose": [8, 7, 6, 5, 4, 3, 2, 1]
        },
        "m": ["#c", "#c", "#c", "#c", "#c", "#c", "#c", "#c"]
      }
    ]
  },
  contraryBebop: {
    "let": {
      "up": "1 2 3 4 5 6 7 8",
      "down": "9 8 7 6 5 4 3 2"
    },
    "instrument": "piano",
    "duration": 9,
    "scale": "C3 bebop major",
    "m": [
      {
        "assign": {
          "transpose": [8, 0]
        },
        "p": ["#up", "#down"]
      },
      {
        "assign": {
          "transpose": [8, 0]
        },
        "p": ["#down", "#up"]
      }
    ]
  },
  mirror: {
    "m": "C3 D3 E3 F3 G3 A3 B3 C4",
    "mirror": "C3"
  },
  transpose: {
    "transpose": 12,
    "m": "C3 D3 E3"
  },
  scale: {
    "duration": 2,
    "scale": "C3 major",
    "m": "1 2 3 4 5 6 7 8"
  },
  transposeScale: {
    "duration": 2,
    "scale": "C3 major",
    "transpose": 1,
    "m": "1 2 3 4 5 6 7 8"
  },
  scaleFall: {
    "let": {
      "fall": "8 6 7 5 6 4 5 3 4 2 3 1 2 -1 1*2"
    },
    "duration": 8,
    "instrument": "piano",
    "scale": "C4 mixolydian",
    "assign": {
      "transpose": [
        0,
        -2,
        -4
      ]
    },
    "p": [
      "#fall",
      "#fall",
      "#fall"
    ]
  },
  chordMelody: {
    "duration": 4,
    "instrument": "piano",
    "let": {
      "v": "3,5"
    },
    "scale": "F3 dorian",
    "assign": {
      "transpose": [
        0,
        0,
        1,
        0,
        2,
        1,
        0
      ]
    },
    "m": "~ #v #v ~ #v*2 #v #v"
  },
  majorsteps: {
    "let": {
      "a": "3,5,8"
    },
    "duration": 12,
    "instrument": "piano",
    "scale": "C major",
    "assign": {
      "transpose": [0, 1, 2, 3, 4, 5, 6, 7]
    },
    "m": ["#a", "#a", "#a", "#a", "#a", "#a", "#a", "#a*3"]
  },
  stepchords: {
    "let": {
      "a": "1,3,5,7"
    },
    "duration": 12,
    "instrument": "piano",
    "scale": "C bebop major",
    "m": [
      {
        "m": "#a",
        "transpose": 0
      },
      {
        "m": "#a",
        "transpose": 1
      },
      {
        "m": "#a",
        "transpose": 2
      },
      {
        "m": "#a",
        "transpose": 3
      },
      {
        "m": "#a",
        "transpose": 4
      },
      {
        "m": "#a",
        "transpose": 5
      },
      {
        "m": "#a",
        "transpose": 6
      },
      {
        "m": "#a",
        "transpose": 7
      },
      {
        "m": "#a",
        "transpose": 8,
        "duration": 3
      }
    ]
  },
  stepchordsAssigned: {
    "let": {
      "a": "3,5,8"
    },
    "duration": 13.5,
    "instrument": "piano",
    "scale": "Eb3 major",
    "assign": {
      "transpose": [0, 1, 2, 3, 4, 5, 6, 7]
    },
    "m": ["#a", "#a", "#a", "#a", "#a", "#a", "#a", "#a*2"]
  },
  ragasteps: {
    "let": {
      "a": {
        "p": ["1", "3", "5"],
        "m": ["8"]
      }
    },
    "duration": 18,
    "instrument": "piano",
    "scale": "C3 purvi raga",
    "assign": {
      "transpose": [0, 1, 2, 3, 4, 5, 6, 7, 8]
    },
    "m": ["#a", "#a", "#a", "#a", "#a", "#a", "#a", "#a", "#a"]
  },
  bruderjakob: {
    "duration": 32,
    "let": {
      "a": "C3 D3 E3 C3",
      "b": "E3 F3 G3*2",
      "c": "G3 A3 . G3 F3 . E3 . C3",
      "d": "C3 G2 C3*2"
    },
    "m": [
      {
        "p": [
          "#a #a #b #b #c #c #d #d",
          "~*2 #a #a #b #b #c #c",
          /* "~*4 #a #a #b #b" *//* ,
          "~*6 #a #a" */
        ]
      },
      {
        "p": [
          "#a #a #b #b #c #c #d #d",
          "#d #d #a #a #b #b #c #c",
          /* "#c #c #d #d #a #a #b #b" */
          /* "#b #b #c #c #d #d #a #a" */
        ]
      },
      {
        "p": [
          "#d #d ~*6",
          /* "#c #c #d #d ~*4", */
          /* "#b #b #c #c #d #d ~*2" */
        ]
      }
    ]
  },
  tidal,
  realRock,
  zeldasRescueBrackets,
  /* vanillaDome, */
  zeldasRescue,
  slengTeng,
  zeldasRescueVerbose,
  timeOfTheFallingRain,
  swimming,
  cantaloupe,
  starworld,
  a: 'A4',
  fourth: ['Bb3', 'Eb4'],
  fourthShort: 'Bb3 Eb4',
  major1: ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'],
  major1short: 'C4 D4 E4 F4 G4 A4 B4 C5',
  major4: {
    duration: 4,
    m: ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5']
  },
  major4short: {
    duration: 4,
    m: 'C4 D4 E4 F4 G4 A4 B4 C5'
  },
  entchen,
  entchenAbsolute,
  entchenHarmonized,
  assign: {
    "duration": 4,
    "assign": {
      "duration": [
        1,
        2
      ]
    },
    "m": "C2 A2 D2 G2"
  },
  entchenShort: {
    "duration": 10,
    "m": [
      "C3 D3 E3 F3",
      "G3 G3",
      "A3 A3 A3 A3",
      "G3",
      "A3 A3 A3 A3",
      "G3",
      "F3 F3 F3 F3",
      "E3 E3",
      "D3 D3 D3 D3",
      "C3",
    ]
  },
  entchenSlashes: {
    "duration": 10,
    "m": "C3 D3 E3 F3/G3 G3/A3 A3 A3 A3/G3/A3 A3 A3 A3/G3/F3 F3 F3 F3/E3 E3/D3 D3 D3 D3/C3"
  },
  entchenBrackets: {
    "duration": 10,
    "m": "[C3 D3 E3 F3] [G3 G3] [A3 A3 A3 A3] G3 [A3 A3 A3 A3] G3 [F3 F3 F3 F3] [E3 E3] [D3 D3 D3 D3] C3"
  },
  entchenFeet: {
    "duration": 10,
    "m": "C3 D3 E3 F3 . G3 G3 . A3 A3 A3 A3 . G3 . A3 A3 A3 A3 . G3 . F3 F3 F3 F3 . E3 E3 . D3 D3 D3 D3 . C3"
  },
  bolero: {
    instrument: "tidal",
    duration: 6.75,
    m: [
      [
        ['ht', 'mt mt mt'],
        ['ht', 'mt mt mt'],
        ['ht', 'mt']
      ],

      [
        ['ht', 'mt mt mt'],
        ['ht', 'mt mt mt'],
        ['ht ht ht', 'mt mt mt']
      ]
    ]
  },
  boleroBrackets: {
    instrument: "tidal",
    duration: 6.75,
    m: '[[ht [mt mt mt]] [ht [mt mt mt]] [ht mt]] [[ht [mt mt mt]] [ht [mt mt mt]] [[ht ht ht] [mt mt mt]]]'
  },
  boleroFeet: {
    instrument: "tidal",
    duration: 6.75,
    m: '[ht [mt mt mt]] [ht [mt mt mt]] [ht mt] | [ht [mt mt mt]] [ht [mt mt mt]] [[ht ht ht] [mt mt mt]]'
  },
  boleroFeet2: {
    instrument: "tidal",
    duration: 6.75,
    m: 'ht [mt mt mt] . ht [mt mt mt] . ht mt | ht [mt mt mt] . ht [mt mt mt] . [ht ht ht] [mt mt mt]'
  },
  pumuckel: {
    instrument: "piano",
    duration: 8,
    m: [
      [{ m: 'A3', duration: 3 }, 'F#3'],
      [{ m: 'A3', duration: 3 }, 'F#3'],
      ['A3', 'G3', 'G3', 'E3'],
      ['B3', 'A3', 'A3', 'F#3'],
      [{ m: 'A3', duration: 3 }, 'F#3'],
      [{ m: 'A3', duration: 3 }, 'F#3'],
      ['A3', 'G3', 'G3', 'C#3'],
      [{ m: 'D3', duration: 3 }, 'F#3']
    ]
  },
  pumuckelShort: {
    instrument: "piano",
    duration: 8,
    m: [
      ['A3*3', 'F#3'],
      ['A3*3', 'F#3'],
      ['A3', 'G3', 'G3', 'E3'],
      ['B3', 'A3', 'A3', 'F#3'],
      ['A3*3', 'F#3'],
      ['A3*3', 'F#3'],
      ['A3', 'G3', 'G3', 'C#3'],
      ['D3*3', 'F#3']
    ]
  },
  pumuckelBrackets: {
    instrument: "piano",
    duration: 8,
    m: `[A3*3 F#3] [A3*3 F#3] [A3 G3 G3 E3] [B3 A3 A3 F#3] [A3*3 F#3] [A3*3 F#3] [A3 G3 G3 C#3] [D3*3 F#3]`
  },
  funkytown: {
    duration: 4,
    m: [
      [
        ['C5', ''],
        ['C5', ''],
        ['Bb4', ''],
        ['C5', '']
      ],
      ['', ['G4', ''], '', ['G4', '']],
      [
        ['C5', ''],
        ['F5', ''],
        ['E5', ''],
        ['C5', '']
      ],
      ''
    ]
  },
  funkytownShort: {
    duration: 4,
    m: [
      'C5 /C5 /Bb4 /C5 ', '/G4 |/G4 ', 'C5 /F5 /E5 /C5 ', ''
    ]
  },
  funkytownBrackets: {
    duration: 4,
    m: "[[C5 r] [C5 r] [Bb4 r] [C5 r]] [r [G4 r] r [G4 r]] [[C5 r] [F5 r] [E5 r] [C5 r]] r"
  },
  funkytownBracketsFeet1: {
    duration: 4,
    m: "[C5 r] [C5 r] [Bb4 r] [C5 r] . r [G4 r] r [G4 r] . [C5 r] [F5 r] [E5 r] [C5 r] . r"
  },
  funkytownBracketsFeet2: {
    duration: 4,
    m: "C5 r . C5 r . Bb4 r . C5 r | r . G4 r . r . G4 r | C5 r . F5 r . E5 r . C5 r | r"
  },
  funkytownLengths: {
    duration: 4,
    m: [
      [
        { m: 'C5', length: 0.5 },
        { m: 'C5', length: 0.5 },
        { m: 'Bb4', length: 0.5 },
        { m: 'C5', length: 0.5 }
      ],
      ['r',
        { m: 'G4', length: 0.5 },
        'r',
        { m: 'G4', length: 0.5 }],
      [
        { m: 'C5', length: 0.5 },
        { m: 'F5', length: 0.5 },
        { m: 'E5', length: 0.5 },
        { m: 'C5', length: 0.5 }
      ],
      'r'
    ]
  },
  funkytownLengthsBrackets: {
    duration: 4,
    m: "[C5_.5 C5_.5 Bb4_.5 C5_.5] [r G4_.5 r G4_.5] [C5_.5 F5_.5 E5_.5 C5_.5] r"
  },
  funkytownLengthsFeet: {
    "duration": 4,
    "m": "C5_.5 C5_.5 Bb4_.5 C5_.5 . r G4_.5 r G4_.5 . C5_.5 F5_.5 E5_.5 C5_.5 . r"
  },
  funkytownPoly: {
    duration: 4,
    p: [
      {
        m: [
          [
            ['C5', ''],
            ['C5', ''],
            ['Bb4', ''],
            ['C5', '']
          ],
          ['', ['G4', ''], '', ['G4', '']],
          [
            ['C5', ''],
            ['F5', ''],
            ['E5', ''],
            ['C5', '']
          ],
          ''
        ]
      },
      {
        m: [
          ['C2', 'C3', 'C2', 'C3'],
          ['C2', 'C3', 'C2', 'C3'],
          ['C2', 'C3', 'C2', 'C3'],
          ['C2', 'C3', 'C2', 'C3']
        ]
      }
    ]
  },
  funkytownPolyShort: {
    duration: 4,
    p: [
      "C5_.5 C5_.5 Bb4_.5 C5_.5 . r G4_.5 r G4_.5 . C5_.5 F5_.5 E5_.5 C5_.5 . r",
      'C2 C3 C2 C3 . C2 C3 C2 C3 . C2 C3 C2 C3 . C2 C3 C2 C3'
    ]
  },
  funkytownPolyB: {
    duration: 8,
    p: [
      {
        m: [
          [
            { p: ['D5', 'B4'] },
            { p: ['D5', 'B4'] },
            { p: ['D5', 'B4'] },
            { p: ['D5', 'B4'] }
          ],
          [
            { p: ['C5', 'A4'] },
            { p: ['C5', 'A4'] },
            { p: ['C5', 'A4'] },
            { p: ['C5', 'A4'] }
          ],
          [
            { p: ['B4', 'G4'] },
            { p: ['B4', 'G4'] },
            { p: ['B4', 'G4'] },
            { p: ['B4', 'G4'] }
          ],
          [
            { p: ['A4', 'F4'] },
            { p: ['A4', 'F4'] },
            { p: ['A4', 'F4'] },
            { p: ['G4', 'D4'] }
          ],
          [
            ['G4', ''],
            ['G4', ''],
            ['F4', ''],
            ['G4', '']
          ],
          ['', ['D4', ''], '', ['D4', '']],
          [
            ['G4', ''],
            ['C5', ''],
            ['B4', ''],
            ['G4', '']
          ],
          []
        ]
      },
      {
        m: [
          ['G2', 'G3', 'G2', 'G3'],
          ['G2', 'G3', 'G2', 'G3'],
          ['G2', 'G3', 'G2', 'G3'],
          ['G2', 'G3', 'G2', 'G3'],
          ['G2', 'G3', 'G2', 'G3'],
          ['G2', 'G3', 'G2', 'G3'],
          ['G2', 'G3', 'G2', 'G3'],
          ['G2', 'G3', 'G2', 'G3']
        ]
      }
    ]
  },
  funkytownPolyC: {
    duration: 8,
    p: [
      {
        m: [
          [
            'D5,B4',
            'D5,B4',
            'D5,B4',
            'D5,B4'
          ],
          [
            'C5,A4',
            'C5,A4',
            'C5,A4',
            'C5,A4'
          ],
          [
            'B4,G4',
            'B4,G4',
            'B4,G4',
            'B4,G4'
          ],
          [
            'A4,F4',
            'A4,F4',
            'A4,F4',
            'G4,D4'
          ],
          [
            ['G4', ''],
            ['G4', ''],
            ['F4', ''],
            ['G4', '']
          ],
          ['', ['D4', ''], '', ['D4', '']],
          [
            ['G4', ''],
            ['C5', ''],
            ['B4', ''],
            ['G4', '']
          ],
          []
        ]
      },
      {
        m: [
          ['G2', 'G3', 'G2', 'G3'],
          ['G2', 'G3', 'G2', 'G3'],
          ['G2', 'G3', 'G2', 'G3'],
          ['G2', 'G3', 'G2', 'G3'],
          ['G2', 'G3', 'G2', 'G3'],
          ['G2', 'G3', 'G2', 'G3'],
          ['G2', 'G3', 'G2', 'G3'],
          ['G2', 'G3', 'G2', 'G3']
        ]
      }
    ]
  },
  funkytownPolyCShort: {
    duration: 8,
    p: [
      'D5,B4 D5,B4 D5,B4 D5,B4 . C5,A4 C5,A4 C5,A4 C5,A4 . B4,G4 B4,G4 B4,G4 B4,G4 . A4,F4 A4,F4 A4,F4 G4,D4 . G4_.5 G4_.5 F4_.5 G4_.5 . r D4_.5 r D4_.5 . G4_.5 C5_.5 B4_.5 G4_.5 . r',
      'G2 G3 G2 G3 . G2 G3 G2 G3 . G2 G3 G2 G3 . G2 G3 G2 G3 . G2 G3 G2 G3 . G2 G3 G2 G3 . G2 G3 G2 G3 . G2 G3 G2 G3'
    ]
  },
  triplets: {
    duration: 4,
    p: [
      {
        voice: 'melody',
        m: [
          ['E4', 'C4', 'E4', 'C5'],
          ['A4', 'F4', 'G4']
        ]
      },
      {
        voice: 'bass',
        m: [
          ['C4', 'G3', 'C4', 'G3'],
          ['F3', 'C3', 'F3', ['C3', 'G3']]
        ]
      }
    ]
  },
  tripletsShort: {
    duration: 4,
    p: [
      "E4 C4 E4 C5 | A4 F4 G4",
      "[C4 G3 C4 G3] [F3 C3 F3 [C3 G3]]"
    ]
  },
  quartuplets: {
    duration: 4,
    p: [
      {
        voice: 'melody',
        m: [
          ['E4', 'C4', 'E4', 'C5'],
          ['A4', 'F4', 'G4']
        ]
      },
      {
        voice: 'bass',
        m: [
          ['C4', 'G3', 'C4'],
          ['F3', 'C3', ['F3', 'G3']]
        ]
      }
    ]
  },
  quartupletsShort: {
    "duration": 4,
    "p": [
      "E4 C4 E4 C5 | A4 F4 G4",
      "[C4 G3 C4] [F3 C3 [F3 G3]]"
    ]
  },
  timeChange: {
    duration: 3.5,
    p: [
      {
        voice: 'melody',
        m: [
          { duration: 4, m: ['E4', 'C4', 'E4', 'C5'] },
          { duration: 3, m: ['A4', 'F4', 'G4'] }
        ]
      },
      {
        voice: 'bass',
        m: [
          { duration: 4, m: ['C4', 'G3', 'C4', 'G3'] },
          {
            duration: 3,
            m: ['F3', 'C3', ['F3', 'G3']]
          }
        ]
      }
    ]
  },
  timeChangeB: {
    duration: 8.5,
    p: [
      {
        voice: 'melody',
        m: [
          {
            duration: 8,
            m: [
              ['E4', 'C4', 'E4', 'C5'],
              ['A4', 'F4', 'G4', 'D4']
            ]
          },
          {
            duration: 9,
            m: [
              ['E4', 'C4', 'E4'],
              ['A4', 'F4', 'D4'],
              ['B3', 'G4', 'F4']
            ]
          }
        ]
      },
      {
        voice: 'bass',
        m: [
          {
            duration: 8,
            m: [
              ['C4', 'G3', 'C4', ['G3', 'Gb3']],
              ['F3', 'C3', 'F3', ['G3', 'B3']]
            ]
          },
          {
            duration: 9,
            m: [
              ['C4', 'G3', ['C4', 'G3']],
              ['F3', 'C3', ['F3', 'G3']],
              ['G3', 'D3', ['G3', 'B3']]
            ]
          }
        ]
      }
    ]
  },
  timeChangeC: {
    duration: 8.5,
    p: [
      {
        voice: 'melody',
        m: [
          {
            duration: [4],
            m: [
              ['E4', 'C4', 'E4', 'C5'],
              ['A4', 'F4', 'G4', 'D4']
            ]
          },
          {
            duration: [3],
            m: [
              ['E4', 'C4', 'E4'],
              ['A4', 'F4', 'D4'],
              ['B3', 'G4', 'F4']
            ]
          }
        ]
      },
      {
        voice: 'bass',
        m: [
          {
            duration: [4],
            m: [
              ['C4', 'G3', 'C4', ['G3', 'Gb3']],
              ['F3', 'C3', 'F3', ['G3', 'B3']]
            ]
          },
          {
            duration: [3],
            m: [
              ['C4', 'G3', ['C4', 'G3']],
              ['F3', 'C3', ['F3', 'G3']],
              ['G3', 'D3', ['G3', 'B3']]
            ]
          }
        ]
      }
    ]
  },
  sevenfour: {
    duration: 3.5,
    p: [
      {
        voice: 'melody',
        m: ['E4', 'C4', 'E4', 'C5', 'A4', 'F4', 'G4']
      },
      {
        voice: 'bass',
        m: ['C4', 'G3', 'C4', 'G3', 'F3', 'C3', ['F3', 'G3']]
      }
    ]
  },
  jingleBells: {
    duration: 16,
    m: [
      [['E4', 'E4'], 'E4'],
      [['E4', 'E4'], 'E4'],
      ['E4', 'G4', 'C4', 'D4'],
      ['E4'],
      [
        ['F4', 'F4'],
        [
          {
            duration: 3,
            m: 'F4'
          },
          'F4'
        ]
      ],
      [
        ['F4', 'E4'],
        ['E4', ['E4', 'E4']]
      ],
      ['E4', 'D4', 'D4', 'E4'],
      ['D4', 'G4'],
      [['E4', 'E4'], 'E4'],
      [['E4', 'E4'], 'E4'],
      ['E4', 'G4', 'C4', 'D4'],
      ['E4'],
      [
        ['F4', 'F4'],
        [
          {
            duration: 3,
            m: 'F4'
          },
          'F4'
        ]
      ],
      [
        ['F4', 'E4'],
        ['E4', ['E4', 'E4']]
      ],
      ['G4', 'G4', 'F4', 'D4'],
      ['C4']
    ]
  },
  length: {
    duration: 8,
    p: [[
      [
        { m: 'C4', length: 8 },
        { m: 'E4', length: 6 },
        { m: 'G4', length: 4 },
        { m: 'B4', length: 2 }
      ],
      [],
      [
        { m: 'A3', length: 8 },
        { m: 'C4', length: 6 },
        { m: 'E4', length: 4 },
        { m: 'G4', length: 2 }
      ],
      [],
      [
        { m: 'D4', length: 8 },
        { m: 'F4', length: 6 },
        { m: 'A4', length: 4 },
        { m: 'C5', length: 2 }
      ],
      [],
      [
        { m: 'G3', length: 8 },
        { m: 'B3', length: 6 },
        { m: 'D4', length: 4 },
        { m: 'F4', length: 2 }
      ],
      []
    ],
    ['C3', 'A2', 'D3', 'G2']
    ]
  },
  lengthShort: {
    duration: 8,
    p: [
      "C4_8 E4_6 G4_4 B4_2 . r . A3_8 C4_6 E4_4 G4_2 . r . D4_8 F4_6 A4_4 C5_2 . r . G3_8 B3_6 D4_4 F4_2 . r",
      'C3 A2 D3 G2'
    ]
  },
  length2: {
    duration: 8,
    p: [
      {
        length: [8, 6, 4, 2], //TBD
        duration: [1, 1, 1, 5],
        m: [
          'C4',
          'E4',
          'G4',
          'B4',
          'A3',
          'C4',
          'E4',
          'G4',
          'D4',
          'F4',
          'A4',
          'C5',
          'G3',
          'B3',
          'D4',
          'F4'
        ]
      },
      {
        m: ['C3', 'A2', 'D3', 'G2']
      }
    ]
  },
  syncopation: {
    duration: 24,
    p: [
      {
        instrument: "harp",
        m: [
          ['', ['E4', 'F4', 'G4', { m: 'D4', length: 7 }]],
          [],
          ['', ['E4', 'F4', 'G4', { m: 'D4', length: 7 }]],
          [],
          ['', ['C4', { m: 'D4', duration: 2 }, 'E4']],
          ['B3', { m: 'B3', duration: 2 }, ''],
          ['', ['C4', 'D4', 'E4', { m: 'B3', length: 7 }]],
          [{ m: '', duration: 3 }, 'A3'],
          [
            { m: 'G#3', duration: 1.5 },
            { m: 'D#4', duration: 2.5 }
          ],
          [
            [{ m: 'Eb4', duration: 3 }, 'Eb4'],
            ['F4', 'Eb4', 'F4', { m: 'G4', length: 9 }]
          ],
          [],
          []
          /* [
              { m: 'E4', duration: 1.5 },
              { m: 'G4', duration: 2.5 }
            ],
            [
              ['G4', ['G4', 'G4']],
              ['A4', 'G4', 'A4', { m: 'B4', length: 9 }]
            ],
            [],
            [] */
        ]
      },
      {
        instrument: "piano",
        m: [
          { p: ['E3', 'G3'] },
          { p: ['F3', 'Bb3'] },
          { p: ['E3', 'G3'] },
          [{ p: ['D3', 'A3'] }, { p: ['F3', 'G#3'] }],
          { p: ['C3', 'G3'] },
          [{ p: ['E3', 'A3'] }, { p: ['D3', 'G#3'] }],
          { p: ['C3', 'G3'] },
          [{ p: ['E3', 'A3'] }, { p: ['D#3', 'A3'] }],
          { p: ['D#3', 'G#3'] },
          { p: ['Eb3', 'Ab3'] },
          { p: ['F3', 'C3'] },
          ['', { p: ['G#3', 'D3'] }]
          /* [],
            [],
            [],
            [] */
        ]
      },
      {
        instrument: "harp",
        m: [
          ['C2'],
          ['G2'],
          ['C2'],
          ['B2', 'E2'],
          ['A2'],
          ['F2', 'E2'],
          ['A2'],
          ['F#2', 'B2'],
          ['E2'],
          ['F2'],
          ['D2'],
          ['E2']
          /*['A2'],
            ['A2'],
            ['F#2'],
            ['B2'] */
        ]
      }
    ]
  },
  nestedVelocity: {
    duration: 2,
    m: [
      'C3',
      {
        duration: 7,
        velocity: 0.5,
        m: [
          'E3',
          {
            duration: 6,
            velocity: 0.5,
            m: [
              'G3',
              {
                duration: 5,
                velocity: 0.5,
                m: [
                  'B3',
                  {
                    duration: 4,
                    velocity: 0.5,
                    m: [
                      'D4',
                      {
                        duration: 3,
                        velocity: 0.5,
                        m: [
                          'F4',
                          {
                            duration: 2,
                            velocity: 0.5,
                            m: ['A4', { velocity: 0.5, m: 'C5' }]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  shepard: {
    duration: 9,
    m: [
      {
        p: [
          { m: 'C3', velocity: 0.916 },
          { m: 'C2', velocity: 0.083 }
        ]
      },
      {
        p: [
          { m: 'C#3', velocity: 0.833 },
          { m: 'C#2', velocity: 0.166 }
        ]
      },
      {
        p: [
          { m: 'D3', velocity: 0.75 },
          { m: 'D2', velocity: 0.25 }
        ]
      },
      {
        p: [
          { m: 'D#3', velocity: 0.666 },
          { m: 'D#2', velocity: 0.333 }
        ]
      },
      {
        p: [
          { m: 'E3', velocity: 0.616 },
          { m: 'E2', velocity: 0.416 }
        ]
      },
      {
        p: [
          { m: 'F3', velocity: 0.583 },
          { m: 'F2', velocity: 0.5 }
        ]
      },
      {
        p: [
          { m: 'F#3', velocity: 0.5 },
          { m: 'F#2', velocity: 0.583 }
        ]
      },
      {
        p: [
          { m: 'G3', velocity: 0.416 },
          { m: 'G2', velocity: 0.616 }
        ]
      },
      {
        p: [
          { m: 'G#3', velocity: 0.333 },
          { m: 'G#2', velocity: 0.666 }
        ]
      },
      {
        p: [
          { m: 'A3', velocity: 0.25 },
          { m: 'A2', velocity: 0.75 }
        ]
      },
      {
        p: [
          { m: 'A#3', velocity: 0.166 },
          { m: 'A#2', velocity: 0.833 }
        ]
      },
      {
        p: [
          { m: 'B3', velocity: 0.083 },
          { m: 'B2', velocity: 0.916 }
        ]
      }
    ]
  },
  parallel: {
    seconds: 3,
    p: [
      {
        duration: [1],
        m: ['C3', 'D3']
      },
      {
        duration: [1],
        m: ['E3', 'F3', 'G3']
      }
    ]
  },
  instruments: {
    "m": "A4",
    instrument: "synth"
  },
  dub1
};
