"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../src/constants");
describe('WELL_KNOWN_HTML_ESCAPES', function () {
    it('has the same values', function () {
        var expected = {
            34: '&quot;',
            38: '&amp;',
            60: '&lt;',
            62: '&gt;',
            160: '&nbsp;',
            169: '&copy;',
            174: '&reg;'
        };
        var actual = constants_1.WELL_KNOWN_HTML_ESCAPES;
        expect(Object.keys(actual)).toEqual(Object.keys(expected));
    });
});
//# sourceMappingURL=constants.spec.js.map