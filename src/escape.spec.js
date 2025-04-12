"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const escape_1 = require("./escape");
describe('escape', () => {
    it('escapes html properly', () => {
        const message = "What am I escaping? - @f0c1s/escape-html";
        const expected = 'What am I escaping&#x3f; - &#x40;f0c1s&#x2f;escape-html';
        const actual = (0, escape_1.escape)(message);
        expect(actual).toEqual(expected);
    });
});
//# sourceMappingURL=escape.spec.js.map