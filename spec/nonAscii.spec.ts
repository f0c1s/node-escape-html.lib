import {nonAscii} from "../src";
import {AssertionError} from "assert";

describe("nonAscii", () => {
    it('returns proper string for number >= 256', () => {
        const expected = '&#' + 256 + ';';
        const actual = nonAscii(256);
        expect(actual).toEqual(expected);
    });
    it('throws AssertionError for numbers < 256', () => {
        const message = `The expression evaluated to a falsy value:\n\n  assert_1.ok(code >= 256)\n`;
        expect(() => nonAscii(65)).toThrowError(AssertionError, message);
    });
});
