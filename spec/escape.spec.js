"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../src");
describe('escape', function () {
    it('escapes html properly', function () {
        var message = "What am I escaping? - @f0c1s/escape-html";
        var expected = 'What am I escaping&#x3f; - &#x40;f0c1s&#x2f;escape-html';
        var actual = src_1.escape(message);
        expect(actual).toEqual(expected);
    });
});
//# sourceMappingURL=escape.spec.js.map