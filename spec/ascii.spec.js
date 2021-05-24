"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../src");
var assert_1 = require("assert");
describe("ascii", function () {
    it('returns proper string for number < 256', function () {
        var expected = '&#x41;';
        var actual = src_1.ascii(65);
        expect(actual).toEqual(expected);
    });
    it('throws AssertionError for numbers >= 256', function () {
        var message = "The expression evaluated to a falsy value:\n\n  assert_1.ok(code < 256)\n";
        expect(function () { return src_1.ascii(256); }).toThrowError(assert_1.AssertionError, message);
    });
});
//# sourceMappingURL=ascii.spec.js.map