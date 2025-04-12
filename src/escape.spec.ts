import {escape} from "./escape";

describe('escape', () => {
    it('escapes html properly', () => {
        const message = "What am I escaping? - @f0c1s/escape-html";
        const expected = 'What am I escaping&#x3f; - &#x40;f0c1s&#x2f;escape-html';
        const actual = escape(message);
        expect(actual).toEqual(expected);
    });
});