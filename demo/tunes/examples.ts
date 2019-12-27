import swimming from './swimming.json';
import cantaloupe from './cantaloupe-island.json';
import starworld from './star-world.json';
import entchen from './entchen-nested.json';
import entchenAbsolute from './entchen-absolute.json';
import timeOfTheFallingRain from './time-of-the-falling-rain.json';
import zeldasRescue from './zelda-rescue.json';

export const examples = {
  zeldasRescue,
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
  entchenShortest: {
    "duration": 10,
    "m": "C3 D3 E3 F3/G3 G3/A3 A3 A3 A3/G3/A3 A3 A3 A3/G3/F3 F3 F3 F3/E3 E3/D3 D3 D3 D3/C3"
  },
  bolero: {
    duration: 9,
    m: [
      [
        ['C4', 'G3 G3 G3'],
        ['C4', 'G3 G3 G3'],
        ['C4', 'G3']
      ],

      [
        ['C4', 'G3 G3 G3'],
        ['C4', 'G3 G3 G3'],
        ['C4 C4 C4', 'G3 G3 G3']
      ]
    ]
  },
  pumuckel: {
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
  funkytownLengths: {
    duration: 4,
    m: 'C5_.5 C5_.5 Bb4_.5 C5_.5| G4_.5/ G4_.5|C5_.5 F5_.5 E5_.5 C5_.5|'
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
      {
        voice: 'melody',
        m: ['E4 C4 E4 C5', 'A4 F4 G4']
      },
      {
        voice: 'bass',
        m: ['C4 G3 C4 G3', 'F3/C3/F3/C3 G3']
      }
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
      {
        "voice": "melody",
        "m": ["E4 C4 E4 C5", "A4 F4 G4"]
      },
      {
        "voice": "bass",
        "m": ["C4 G3 C4", "F3/C3/F3 G3"]
      }
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
      [
        "C4_8 E4_6 G4_4 B4_2",
        "",
        "A3_8 C4_6 E4_4 G4_2",
        "",
        "D4_8 F4_6 A4_4 C5_2",
        "",
        "G3_8 B3_6 D4_4 F4_2",
        ""
      ],
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
  }
};
