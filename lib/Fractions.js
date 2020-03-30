"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Fractions {
    static add(a, b, cancel = true) {
        const lcm = Fractions.lcm(a[1], b[1]);
        [a, b] = [a, b].map(f => Fractions.setDivisor(f, lcm));
        const sum = [a[0] + b[0], lcm];
        if (cancel) {
            return Fractions.cancel(sum);
        }
        return sum;
    }
    static cancel(a) {
        return Fractions.setDivisor(a, a[1] / Fractions.gcd(a[0], a[1]));
    }
    static setDivisor(a, divisor) {
        return [a[0] * divisor / a[1], divisor];
    }
    static lcm(x, y) {
        return (!x || !y) ? 0 : Math.abs((x * y) / Fractions.gcd(x, y));
    }
    static gcd(x, y) {
        x = Math.abs(x);
        y = Math.abs(y);
        while (y) {
            var t = y;
            y = x % y;
            x = t;
        }
        return x;
    }
}
exports.Fractions = Fractions;
