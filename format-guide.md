# Format Guide

This document is a brainstorm on format guidelines.

## What is a Format

- A format is a textual, logically structured representation of any content with finite complexity.
- A format represents at least a subset of the contents qualities by providing a syntax.
- A format is an abstract interface between human ideas and the digital realm.

## Usages of a Format

- writing / editing
  - human editing by hand
  - human editing by machine
- reading / parsing
  - human reading by eye
  - human parsing by machine
- rendering / converting
  - audio
  - visual
  - convert to other formats
- sharing / storing
  - sharing with humans
  - storing on machines

## Features of a Format

- general editabilty
  - minimal edits/keystrokes required for common write actions:
  - create new content
  - edit existing content (modify values, add, duplicate or remove parts)
  - delete existing content
- human editability
  - minimal typing/keystrokes required
  - minimal thinking required => leave the calculations to the machine
  - minimal knowledge required => small api surface area
  - minimal syntax clutter/boilerplate symbols
- human readability
  - self explanatory => less knowledge required to understand
  - minimal thinking required => no calculations needed
  - logical grouping/chunking, like the human brain does
  - minimal eye movement required => the less text, the better
- machine editability / parseability
  - full specification for deterministic results
  - full documenation for human
  - minimal implementation required => small api surface
  - minimal resources required => execution speed / performance
- rendering / converting
  - format can be broken down to a subset of the api area
  - => convert shorthand symbols/syntax sugar to normative form
  - => this subset is easily convertible to rendering needs
- sharing / storing
  - minimal file size / characters
  - should be version control friendly => minimal changes for common edits
- extensability & compatibility
  - api should be extensible while keeping compatibility
  - => extensions to the api should not break older format instances
  - => old instances of the format should still work
  - api should allow custom params / content that
  - seperate format specification from parsing/rendering implementation

## Musical Content

The following representations should be provided by a format for music pieces:

- represent notes/pitches (nano time control)
  - melodies (monophonic)
  - harmonies/chords/multiple voices (polyphonic)
  - velocity
  - articulation / loudness / pitch contour
- represent rhythms (micro time control)
  - note values (whole, half, quarters, eights, dotted, triplets etc)
  - rhythms can be arbitrarily complex, and the western staff is not ideal for some
  - e.g. indian or african polyrhythms
- represent forms / flow (macro time control)
  - measures
  - time signatures
  - sections (multiple measures as logical unit)
  - repeats / jumps (d.c/d.s./coda)
- represent music theory "abstraction ladder"
  - abstraction of pitches to scale/chord degrees
  - abstraction of chords/scales to chord/scale symbols
  - abstraction of chords to functional harmony
  - abstraction of functional harmony to voice leading
  - abstraction of voice leading to tension/release
  - abstraction of tension/release to overtone series
- represent different instruments
  - timbres: synthesized or sampled sounds
  - articulation types
  - limitations: range, agility, voice count
- represent meta commands / automation
  - lyrics
  - dynamics
  - commands / descriptions / hints
  - articulation
  - automation / timed parameter control

## Structural Features of Music

### Music tends to be organized in a fractal / self referential way

- really abstracted, its all superimposed timed layers
- single pitch
  - nano time repetition (frequency)
  - superimposed frequencies inside the natural overtone series
  - overtone choice/amplitudes = timbre
- chord = parallel pitches
  - superimposed frequencies inside mutliple overtone series
  - violation of overtone series creates tension
- harmonies = sequential chords
  - waves of tension & release
  - also called harmonic rhythm
- pulse / tempo
  - macro time repetion
  - lays foundation of time sense
- rhythm
  - sequences of impulses inside a grid above the pulse
  - displacement creates tension
- polyrhythm
  - superimposed rhythms
  - alternates between tension/release in relation to the grid
- different features of music are only seperated by human perception
  - when playing pulses extremely fast, they become pitches
  - when playing rhythms/polyrhythms extremely fast, they become chords

=> format could empower nesting / recursive processing

### Music tends to alternate between tension and release

- tension = complexity
- release = simplicity after complexity
- => tension/release happens on multiple scales of time at once

=> format could provide abstractions to control tension

## Existing formats

### MIDI

Contains

- pitches
- velocity
- time
- multiple voices
- seperate noteon / noteoff events
- arbitrary control events

Pros

- machine friendly
- compatible
- extensible
- easy rendering

Contra

- not human friendly
- bad editability (absolute time)
- no abstraction of pitches (plain numbers)
- no abstraction of rhythm (plain numbers)
- no abstraction of chords / harmonies (no groups)

### musicXML

### TidalCycles
