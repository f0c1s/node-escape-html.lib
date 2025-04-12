"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nonAscii_1 = require("./nonAscii");
const assert_1 = require("assert");
describe("nonAscii", () => {
    it('returns proper string for number >= 256', () => {
        const expected = '&#' + 256 + ';';
        const actual = (0, nonAscii_1.nonAscii)(256);
        expect(actual).toEqual(expected);
    });
    it('throws AssertionError for numbers < 256', () => {
        expect(() => (0, nonAscii_1.nonAscii)(65)).toThrowError(assert_1.AssertionError);
    });
});
//# sourceMappingURL=nonAscii.spec.js.map