"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ascii = ascii;
const { left } = require('@f0c1s/pad');
const assert_1 = require("assert");
const constants_1 = require("./constants");
function ascii(code) {
    (0, assert_1.ok)(code < 256);
    const coded = constants_1.WELL_KNOWN_HTML_ESCAPES[code] || '';
    if (coded) {
        // use the WELL_KNOWN_HTML_ESCAPES ones. This is good form.
        return coded;
    }
    const hex = Buffer.from(String.fromCharCode(code), 'ascii').toString('hex');
    return '&#x' + left(hex, 2) + ';';
}
//# sourceMappingURL=ascii.js.map