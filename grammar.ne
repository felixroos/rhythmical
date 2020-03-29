@{%
// not null
const nn = (a) => a.filter(e => e !== null);
// bubble up arrays with only 1 element
const simple = (a) => a.length > 1 ? a : a[0];
// turns (first) (__ extra):* into [first, ...extra]
// e.g. "a b c" into ["a","b","c"]
function multiple(first, extra) {
	return [first]
		.concat(extra.map(a => a[1]))
		.map(e => simple(e))
}
%}

main -> N {%  (d) => d[0] %}
N ->   T {% (d) => d[0] %}
	 | "[" _ (N) (__ N):* (_ F _ (N) (__ N):*):* _ "]"
	 {%  (d) => {
	const left = multiple(d[2], d[3]);
	if(!d[4] || !d[4].length) {
		return left;
	}
	return [
		left,
		...d[4].map((m)=> multiple(m[3], m[4]))
	].map(a=> simple(a));
} %}
F -> "." | "|" {% d => null %}
T -> [a-z]:+ {%  (d) => {return d[0].join(''); } %}
_ -> [\s]:*     {%  d => {return null; } %}
__ -> [\s]:+     {%  d => {return null; } %}