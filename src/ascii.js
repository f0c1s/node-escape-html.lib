"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ascii = void 0;
var left = require('@f0c1s/pad').left;
var assert_1 = require("assert");
var constants_1 = require("./constants");
function ascii(code) {
    assert_1.ok(code < 256);
    var coded = constants_1.WELL_KNOWN_HTML_ESCAPES[code] || '';
    if (coded) {
        // use the WELL_KNOWN_HTML_ESCAPES ones. This is good form.
        return coded;
    }
    var hex = Buffer.from(String.fromCharCode(code), 'ascii').toString('hex');
    return '&#x' + left(hex, 2) + ';';
}
exports.ascii = ascii;
//# sourceMappingURL=ascii.js.map