### Adjusting Note Durations

The nested notation has some limitations: Imagine you want a note that is three times longer than the next. How would you do it using nested notation?

<button id="example-pumuckel">Show Solution</button>

As you might have already guessed, you can of course change durations of notes the same way we change the duration of the whole piece.

- duration is always relative to all others
- duration defaults to 1 if not specified
- the calculated note duration is duration/total duration
- total duration is the sum of all durations in a group
- in the example, the total duration of the first measure is 4 (3+1)

#### Duration String Notation

To keep it stringy, you can use the following shorthand:

<button id="example-pumuckelShort">Show Example</button>

Now having just nested strings, we could further stringify it using bracket notation:

<button id="example-pumuckelBrackets">Show Example</button>

### Rests

Rests are just empty strings. Lets have a rest in Funky Town:

<button id="example-funkytown">Show Example</button>

<button id="example-funkytownBrackets">Show with Brackets</button>

<!-- TBD FIX -->
<!-- Here we have a max of two levels nesting. We can flatten that two one level nesting using the . operator:

<button id="example-funkytownBracketsFeet1">Show with two level "marked out feet"</button>

But, there is one more operator to mark out feet:

#### "|" sign

The pipe can be used as a feet marker that is parsed before the dot. So the hierarchy of parsing is:

- " | " top level
- " . " second
- " " third

<button id="example-funkytownBracketsFeet2">Show with pipe sign</button> -->

We are using rests also to make the notes shorter. Alternatively you can use "length":

### Length for articulation

Length is another way to control the note duration:

<button id="example-funkytownLengths">Show Example</button>

Compared to the nested notation, this feels clunky.. But there is, of course, a length string operator:

#### Length string operator

<button id="example-funkytownLengthsBrackets">Show with Length Shorthand</button>
<button id="example-funkytownLengthsFeet">Show with "marked out feet"</button>

#### Difference between duration and length

- duration will affect the subdivison, thus the length of all other elements of the same level
- length will NOT affect the subdivison, thus all other elements remain where they are

This has the following implications:

- decreasing the length leaves empty space where no rests are
- increasing the length will potentially create a overlap with following elements

### Velocity

You can control the velocity with the velocity param:

<button id="example-shepard">Play Shepard Scale Example</button>

When nesting blocks with velocities, the velocities are multiplied down:

<button id="example-nestedVelocity">Play Nested Velocity Example</button>

Of course this example only shows that it works... It would be much easier to notate this in one level. In the real world, this can be helpful to e.g. change the volume of a whole part while keeping the nested artuclations in correct relations to each other.

#### TBD: Velocity string operator