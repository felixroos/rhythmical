## Adding Rhythm: Nested Arrays

Now this is still really boring. This lib is called rhythmical so how about adding some rhythm? Let's start easy with the german song "Alle meine Entchen":

<button id="example-entchen">Show Example</button>
<button id="example-entchenShort">Show Short Example</button>

### Deeper String Nesting with Bracket Notation

Using spaces we can flatten our objects by one level to a string. What if we wanted to flat more levels? This is where bracket notation comes in. It works just like in JSON but without the " and , signs:

<button id="example-entchenBrackets">Show Bracket Example</button>

Under the hood, strings with brackets will be parsed to json first.

### Simplifying Brackets by "marking feet"

To spare the upper level of brackets, you can use " . " to seperate sections:

<button id="example-entchenFeet">Show Example</button>

<!-- Under the hood, the string will first be split by the slashes (> short example) and afterwards by the spaces (> example). -->

### How the calculation works

As you can see, the structure is like the major scale example but with an Array of Arrays.

- The notes are grouped together into **measures**, contaning 1-4 notes.
- Having set a duration of 10 seconds, and also having 10 measures, each measure is 1 second long.
- The note duration depends on the amount of notes in the measure:
  - a measure with 4 notes will have a note duration of 1/4s = 0.25s
  - a measure with 2 notes will have a note duration of 1/2s = 0.5s
  - a measure with 1 note will have a note duration of 1/1s = 1s
- Examine the bottom left editor to see the calculated output.
- Also pay attention to the **path**, which tells the elements tree position in the format **index/amount of elements in group**

This approach allows defining rhythms solely through data structure as opposed to time and duration values. That is

- Extremely short
- Extremely dynamic
- Extremely cool

The same idea is also utilized by [TidalCycles](https://tidalcycles.org/index.php/Tutorial) and the [Tone.js Sequence](https://tonejs.github.io/docs/13.8.25/Sequence)

### Why not just use Tone.js Sequence then?

If you just want monophonic nested rhythm notation your good to go, but the good thing about this lib is that it combines the nested notation with polyphony and powerful ways of parsing & manipulation.

### _What if I don't like nested Arrays_

If you don't like them you don't have to use them. You can just use polyphonic mode with time and duration instead.

<button id="example-entchenAbsolute">Show Example</button>

But if you prefer that notation, maybe you should not be using this lib at all.

## Deeper nested rhythms: Bolero

We need to go deeper. Let's play the famous bolero Rhythm

<button id="example-bolero">Show Example</button>
<button id="example-boleroBrackets">Show Example with Brackets</button>
<!-- <button id="example-boleroFeet">Show Example with 1lvl feet</button>
<button id="example-boleroFeet2">Show Example with 2lvl feet</button> -->
<!-- TBD FIX! -->
<!-- TBD Instruments! -->

Now we have Arrays that go up to four levels deep. The levels are

- measures (2)
- beats (3)
- 8th notes (2)
- (16th notes (3))

If you look at the paths of the rendered output, this is what you'll see as second numbers.

Even if you're not familiar with traditional music notation, it's worth comparing:

<img src="https://github.com/felixroos/rhythmical/raw/master/img/bolero.png" width="100%"/>

- The two measures are indicated by the vertical line in the middle
- The three beats are indicated by beamless gaps + as time signature in front
- The 8th notes are indicated by the upper beam
- The 8th notes are indicated by the lower beam
- The 3s above state, that there should be 3 16ths per 8th note

The point: western music notation is just a subset of _rhythmical_ notation!
