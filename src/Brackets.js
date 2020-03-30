"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
;
var Brackets = /** @class */ (function () {
    function Brackets() {
    }
    /** START OF ALTERNATIVE IMPLEMENTATION
     * The following methods are alternatives to using JSON.parse. They still do not work correctly with marked feet */
    Brackets.outerPair = function (string) {
        var openingBracket = string.indexOf('[');
        if (openingBracket === -1) {
            return false;
        }
        var i = openingBracket + 1;
        var chars = string.split('');
        var open = 1;
        while (open > 0) {
            if (chars[i] === '[') {
                ++open;
            }
            if (chars[i] === ']') {
                --open;
            }
            ++i;
        }
        return [openingBracket, i - 1];
    };
    Brackets.outerPairs = function (string) {
        var pairs = [];
        var i = 0;
        while (string) {
            var pair = Brackets.outerPair(string);
            if (pair) {
                pairs.push(pair.map(function (_i) { return _i + i; }));
                i += pair[1];
                string = string.slice(pair[1]);
            }
            else {
                string = '';
            }
        }
        return pairs;
    };
    Brackets.split = function (string, modify) {
        if (modify === void 0) { modify = function (s) { return [s]; }; }
        var pairs = Brackets.outerPairs(string);
        if (!pairs.length) {
            return string;
        }
        return pairs.reduce(function (state, pair, i) {
            var next = pairs[i + 1];
            /* const before = modify(string.slice(state.index, pair[0]));
            let inside = modify(string.slice(pair[0] + 1, pair[1]));
            const after = modify(string.slice(pair[1] + 1, next ? next[0] : string.length)); */
            var before = string.slice(state.index, pair[0]);
            var inside = string.slice(pair[0] + 1, pair[1]);
            var after = string.slice(pair[1] + 1, next ? next[0] : string.length);
            var parts = [before, inside, after].map(modify);
            return {
                index: state.index + next ? next[0] : 0,
                /* parts: [before, (inside.length === 1 ? inside : [inside]), after] */
                /* parts: [before, [inside], after] */
                parts: __spreadArrays(state.parts, parts[0], (parts[1].length === 1 ? parts[1] : [parts[1]]), parts[2])
            };
        }, { parts: [], index: 0 }).parts.filter(function (s) { return !!s; });
    };
    Brackets.resolve = function (string, modify) {
        if (modify === void 0) { modify = function (s) { return [s]; }; }
        if (typeof string === 'string') {
            string = Brackets.split(string, modify);
        }
        if (typeof string === 'string') {
            return string;
        }
        if (Array.isArray(string)) {
            return string.map(function (part) { return Brackets.resolve(part, modify); });
        }
    };
    /** END OF ALTERNATIVE IMPLEMENTATION */
    Brackets.simplify = function (strings) {
        if (typeof strings === 'string') {
            return strings;
        }
        strings = strings.filter(function (s) { return (typeof s === 'string' && !!s) || s.length; });
        if (strings.length === 1) {
            return strings[0];
        }
        return strings;
    };
    Brackets.divide = function (string, symbol) {
        var divided = string.split(symbol);
        return Brackets.simplify(divided);
    };
    Brackets.divideHierarchy = function (string, symbolHierarchy) {
        if (!symbolHierarchy.length) {
            return string;
        }
        var divided = Brackets.divide(string, symbolHierarchy[0]);
        symbolHierarchy = symbolHierarchy.slice(1);
        if (typeof divided === 'string') {
            return Brackets.divideHierarchy(divided, symbolHierarchy);
        }
        return divided.map(function (part) { return Brackets.divideHierarchy(part, symbolHierarchy); });
    };
    Brackets.rabbit = function (hole, fn) {
        hole = fn(hole);
        if (Array.isArray(hole)) {
            hole = hole.map(function (channel) { return Brackets.rabbit(channel, fn); });
        }
        return hole;
    };
    Brackets.simplifyDeep = function (nested) {
        if (typeof nested === 'string') {
            return Brackets.simplify(nested);
        }
        return Brackets.rabbit(nested, function (sub) {
            return Brackets.simplify(sub);
        });
    };
    Brackets.divideDeep = function (tree, divideHierarchy) {
        if (divideHierarchy === void 0) { divideHierarchy = [' | ', ' . ', ' ']; }
        var divided = Brackets.rabbit(tree, function (s) {
            if (typeof s === 'string') {
                return Brackets.divideHierarchy(s, divideHierarchy);
            }
            return s;
        });
        return Brackets.simplifyDeep(divided);
    };
    Brackets.toJson = function (string) {
        var symbols = '\\w\\d#\\*\\.\\|\\~\\-';
        var opening = '\\[';
        var closing = '\\]';
        var space = '\\s';
        var toParse = ('[' + string + ']')
            .replace(new RegExp("([" + symbols + "|" + space + "]+)", 'g'), '"$1"')
            .replace(new RegExp("" + closing + space + "*" + opening, 'g'), '],[')
            .replace(new RegExp("\"" + opening, 'g'), '",[')
            .replace(new RegExp(closing + "\"", 'g'), '],"')
            .split(' ').join('","');
        try {
            var parsed = Brackets.simplifyDeep(JSON.parse(toParse));
            if (parsed.length === 1) {
                return parsed[0];
            }
            return parsed;
        }
        catch (_a) {
            console.error("cannot parse " + toParse + " from \"" + string + "\"");
            return string;
        }
    };
    return Brackets;
}());
exports.Brackets = Brackets;
