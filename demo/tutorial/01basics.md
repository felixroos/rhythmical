# Tutorial

Lets learn the basics by looking at and hearing some Examples.

## About the Editor

- The top left area is the input format (human)
- The bottom left area contains the rendered output (svg)
- If you hover over the output, you see the output JSON
- The output is regenerated on every keystroke
- You can play and stop via the buttons
- When pressing play while something is already playing, it will wait till the end before playing the new input.
- In the Tutorial there are many Examples that can be loaded into the Editor. They will be played immediately
- Currently, you cannot save files, so save them for yourself somewhere...

## Monophony Basics

Lets start the tutorial by learning the basics of monophonic melodies.

### One Note: Concert Pitch

This Example just plays a single note for one second. It contains nothing than the primitive string 'A4'.

<button id="example-a">Show Example</button>

Let's look at the output (bottom left). It will always contain an object of the following structure:

- seconds: The absolute length in seconds
- p: contains all events in absolute form
- m: the note / or any content you put in
- path: see below
- time: the start time of the note attack
- duration: the duration of the note

### Two Notes: German Ambulance

This Example plays two notes like a german ambulance. It contains an Array of two primitives. This will play the notes in sequence.

<button id="example-fourth">Show Example</button>

The same can be achieved by seperating the notes with a space:

<button id="example-fourthShort">Show Example</button>

This will be converted to an Array under the hood.

### About the path

The path is an Array containing Arrays of three numbers: [time, block duration, event duration]:

- time: time of the event, relative to its Block
- block duration: the sum of all the blocks event durations
- duration: the duration of the event, relative to its Block
- In our Example, the first note starts at time 0, with a block duration of two and a duration of 1
- The second note starts at time 1, with the same block duration/duration.

**Why?** The path is used to calculate the absolute time & duration of an event. It is a good way to keep track of an elements position while keeping everything smoothly integer & precise. In the end, only one calculation is made to determine the absolute numbers. The path also contains the grouping information => no information loss.

### More Notes: Major Scale

Lets play a major scale

<button id="example-major1">Show Example</button>
<button id="example-major1short">Show Short Example</button>

That's really quick.. This is because the default time is 1 second. We can slow it down by wrapping it with an Object that has a duration:

<button id="example-major4">Show Example</button>
<button id="example-major4short">Show Short Example</button>

The value of the "m" contains our notes. "m" stands for monophonic.

### The Snake bites its tail

Maybe you ask yourself why the top level property in the output is called seconds, and not duration?

- This enables using the rendered output as input again. Try it by copy pasting from bottom to top!
- If we would use duration, we would scale our absolute time values again by that amount
- This may seem like a gimmick, but it shows the isomorphic nature of the format. Also, it is a nice [strange loop](https://en.wikipedia.org/wiki/Strange_loop)
