"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
describe('WELL_KNOWN_HTML_ESCAPES', () => {
    it('has the same values', () => {
        const expected = {
            34: '&quot;',
            38: '&amp;',
            60: '&lt;',
            62: '&gt;',
            160: '&nbsp;',
            169: '&copy;',
            174: '&reg;'
        };
        const actual = constants_1.WELL_KNOWN_HTML_ESCAPES;
        expect(Object.keys(actual)).toEqual(Object.keys(expected));
    });
});
//# sourceMappingURL=constants.spec.js.map