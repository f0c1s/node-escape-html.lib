import {ascii} from "../src";
import {AssertionError} from "assert";

describe("ascii", () => {
    it('returns proper string for number < 256', () => {
        const expected = '&#x41;';
        const actual = ascii(65);
        expect(actual).toEqual(expected);
    });
    it('throws AssertionError for numbers >= 256', () => {
        const message = `The expression evaluated to a falsy value:\n\n  assert_1.ok(code < 256)\n`;
        expect(() => ascii(256)).toThrowError(AssertionError, message);
    });
});
