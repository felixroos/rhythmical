# String Grammar

This is a brainstorm on the string syntax of the rhythmical language.

## Syntax

Let's list what should be possible, from simple to complex:
Assuming N is a note or some other terminal:

- _ = optional space -> " ":*
- __ = required space -> " ":+
- T = [a-zA-Z0-9]
  - C4
  - A
  - blobbb
- N = T | [N(__N):*] 
  - C4
  - [C4 A3]
  - [[C4]]
- N(__N):*
  - N
  - N N
  - N  N
  - N N N
  - N  N N
  - N  N  N ... etc
  - C4 []
- [N]
- [N N]
- [N][N]
- [N] [N]
- [N]  [N]
- N [N]
- [N] N
- [N] [N]
- [N [N]]
- [[N] [N]]