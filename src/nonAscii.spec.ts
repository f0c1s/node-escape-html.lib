import { nonAscii } from "./nonAscii";
import { AssertionError } from "assert";

describe("nonAscii", () => {
    it('returns proper string for number >= 256', () => {
        const expected = '&#' + 256 + ';';
        const actual = nonAscii(256);
        expect(actual).toEqual(expected);
    });
    it('throws AssertionError for numbers < 256', () => {
        expect(() => nonAscii(65)).toThrowError(AssertionError);
    });
});
