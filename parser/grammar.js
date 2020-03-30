// Generated automatically by nearley, version 2.19.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "main", "symbols": ["R"], "postprocess": w => w[0]},
    {"name": "R$ebnf$1", "symbols": []},
    {"name": "R$ebnf$1", "symbols": ["R$ebnf$1", {"literal":" "}], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "R", "symbols": ["R", "R$ebnf$1", {"literal":"["}, "R", {"literal":"]"}], "postprocess": ([outer,_,open, inner])=>outer.concat([inner])},
    {"name": "R$ebnf$2", "symbols": []},
    {"name": "R$ebnf$2", "symbols": ["R$ebnf$2", {"literal":" "}], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "R", "symbols": [{"literal":"["}, "R", {"literal":"]"}, "R$ebnf$2", "R"], "postprocess": ([inner,_,open, outer])=>[inner].concat(outer)},
    {"name": "R$ebnf$3", "symbols": []},
    {"name": "R$ebnf$3", "symbols": ["R$ebnf$3", {"literal":" "}], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "R$ebnf$4", "symbols": []},
    {"name": "R$ebnf$4", "symbols": ["R$ebnf$4", {"literal":" "}], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "R", "symbols": ["R", "R$ebnf$3", {"literal":"["}, "R", {"literal":"]"}, "R$ebnf$4", "R"], "postprocess": ([outer,_,open, inner,close,_2,outer2])=>outer.concat([inner]).concat(outer2)},
    {"name": "R", "symbols": [{"literal":"["}, "R", {"literal":"]"}], "postprocess": ([open,inner,close])=>[inner]},
    {"name": "R", "symbols": ["notes"], "postprocess": id},
    {"name": "notes", "symbols": ["note", {"literal":" "}, "notes"], "postprocess": ([note,_,notes])=>[note].concat(notes)},
    {"name": "notes", "symbols": ["note"], "postprocess": id},
    {"name": "note$ebnf$1", "symbols": [/[a-zA-Z0-9]/]},
    {"name": "note$ebnf$1", "symbols": ["note$ebnf$1", /[a-zA-Z0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "note", "symbols": ["note$ebnf$1"], "postprocess": w=> w[0].join('')},
    {"name": "brackets", "symbols": ["brackets", "_", "bracket"], "postprocess":  w=>{
          if(Array.isArray(w[0])) {
            return w[0].concat([w[2]]);
          }
          return [w[0],w[2]]
        }
          },
    {"name": "brackets", "symbols": ["bracket"], "postprocess": d => d[0]},
    {"name": "bracket", "symbols": ["words"], "postprocess": w => w[0]},
    {"name": "bracket", "symbols": [{"literal":"["}, "bracket", {"literal":"]"}], "postprocess": w => w[1]},
    {"name": "word$ebnf$1", "symbols": [/[a-zA-Z0-9]/]},
    {"name": "word$ebnf$1", "symbols": ["word$ebnf$1", /[a-zA-Z0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "word", "symbols": ["word$ebnf$1"], "postprocess": w=> w[0].join('')},
    {"name": "_$ebnf$1", "symbols": [{"literal":" "}]},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", {"literal":" "}], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": d=> null},
    {"name": "words", "symbols": ["words", "_", "word"], "postprocess":  w=>{
          if(Array.isArray(w[0])) {
            return w[0].concat([w[2]]);
          }
          return [w[0],w[2]]
        }
          },
    {"name": "words", "symbols": ["word"], "postprocess": d => d[0]}
]
  , ParserStart: "main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
