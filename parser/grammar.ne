main -> R {% w => w[0] %}


R -> R " ":* "[" R "]" {% ([outer,_,open, inner])=>outer.concat([inner]) %}
R -> "[" R "]" " ":* R {% ([inner,_,open, outer])=>[inner].concat(outer) %}
R -> R " ":* "[" R "]" " ":* R {% ([outer,_,open, inner,close,_2,outer2])=>outer.concat([inner]).concat(outer2) %}
| "[" R "]" {% ([open,inner,close])=>[inner] %}
| notes {% id %}


notes -> note " " notes {% ([note,_,notes])=>[note].concat(notes) %}
| note {% id %}
note -> [a-zA-Z0-9]:+ {% w=> w[0].join('') %}


brackets -> brackets _ bracket {% w=>{
  if(Array.isArray(w[0])) {
    return w[0].concat([w[2]]);
  }
  return [w[0],w[2]]
}
  %}
| bracket {% d => d[0] %}

bracket -> words {% w => w[0] %}
| "[" bracket "]" {% w => w[1] %}


word -> [a-zA-Z0-9]:+ {% w=> w[0].join('') %}
_ -> " ":+ {% d=> null %}
# words -> _:? words _ word _:? {% w=>{
words -> words _ word {% w=>{
  if(Array.isArray(w[0])) {
    return w[0].concat([w[2]]);
  }
  return [w[0],w[2]]
}
  %}
| word {% d => d[0] %}