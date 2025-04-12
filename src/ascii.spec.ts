import {ascii} from "./ascii";
import {AssertionError} from "assert";

describe("ascii", () => {
    it('returns proper string for number < 256', () => {
        const expected = '&#x41;';
        const actual = ascii(65);
        expect(actual).toEqual(expected);
    });
    it('throws AssertionError for numbers >= 256', () => {
        expect(() => ascii(256)).toThrowError(AssertionError);
    });
});
