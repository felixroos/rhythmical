# rhythmical REPL

This the [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) and Tutorial for [rhythmical](https://github.com/felixroos/rhythmical/), a text & JSON based music language for Javascript.

The top left box is the input and the bottom left is the rendered output (hover to see json), which is used by [Tone.js](https://tonejs.github.io/) for playback.

<!-- ## Patterns

<pre>
{
  "pattern": ["", 1, 1, "", 1, 1, "", 1, 1, "", 1, 1],
  "fill": [
    ["F3/A3/C3"],
    ["F3/A3/C3"],
    ["F3/A3/C3"],
    ["F3/A3/C3"],
    ["F3/Bb3/D3"],
    ["F3/Bb3/D3"],
    ["F3/Bb3/Db3"],
    ["F3/Bb3/Db3"]
  ]
}
</pre> -->

## Why rhythmical?

- Name and approach inspired by [tonal](https://github.com/tonaljs/tonal)
- Pun: rhythmi**cal**culation
- The insight that musical rhythm is nothing but number ratios / fractions
- There is nothing like it yet (at least in JS)

## Why should I care? Amaze me!

Ok, here are some Demos:

<button id="example-swimming">Super Mario World - Swimming Theme</button>  
<button id="example-cantaloupe">Herbie Hancock- Cantaloupe Island</button>  
<button id="example-starworld">Super Mario World - Star World Theme</button>
<button id="example-zeldasRescueBrackets">A Link To The Past - Princess Zeldas Rescue</button>
<button id="example-slengTeng">Sleng Teng Riddim</button>
<button id="example-realRock">Real Rock Riddim</button>

If you are not amazed, maybe you should not be doing music with Javascript and try a DAW or Notation software instead.

If you are at least mildly amazed, read on...

## Meta Design Goals

- Be **inclusive**: Musician / Human friendly
- Be **gentle**: Let the computer do the calculation
- Be **easy to learn**: The less API, the better.
- Be **relative**: let the only absolute number be the target length/tempo
- Be **semantic**: Everything is groupable
- Be **isomorphic**: Format should be morphable but keep all infos
- Be **non-redundant**: Use same concepts for all levels of time
- Be **quick**: Minimum keystrokes required
- Be **non-biased** by culture: rhythm is universal while pitch systems are not
- Be **extendable**: Provide hooks for functionality extension
- Be **standardized**: Provide methods for validation
- Be **open**: Allow modification

## TLDR; Show me API

_NOTE: This is a quick API overview, a Step by Step Tutorial can be found below_

A rhythmical "**Block**" can be one of three types:

- A **primitive** (neither Array nor Object)
- An **Array** of "Block"s
- A Block **Object** with the following basic properties:
  - **p**: polyphonic Block(s)
  - **m**: monophonic Block(s)
  - **time**: when does it start
    - p default: 0
    - m default: sum of all previous Blocks durations
  - **duration**: how long is it, relative to Block
    - p default: 1
    - m default: 1/sum of all Blocks durations

This is the basic API. This alone allows to encode any rhythmical information (and more).


