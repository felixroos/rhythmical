const nearley = require('nearley');
const grammar = require('./grammar.js');

// Create a Parser object from our grammar.
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

// Parse something!
/* parser.feed('a b [c d e f] g h'); */
parser.feed('a b c [d e f] g h i [j k l]');

// parser.results is an array of possible parsings.
console.log(JSON.stringify(parser.results, null, 2)); // [[[[ "foo" ],"\n" ]]]
