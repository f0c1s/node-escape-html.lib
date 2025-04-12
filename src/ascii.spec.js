"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ascii_1 = require("./ascii");
const assert_1 = require("assert");
describe("ascii", () => {
    it('returns proper string for number < 256', () => {
        const expected = '&#x41;';
        const actual = (0, ascii_1.ascii)(65);
        expect(actual).toEqual(expected);
    });
    it('throws AssertionError for numbers >= 256', () => {
        expect(() => (0, ascii_1.ascii)(256)).toThrowError(assert_1.AssertionError);
    });
});
//# sourceMappingURL=ascii.spec.js.map