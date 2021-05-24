"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.escape = void 0;
var isSafe = require('@f0c1s/safe-ascii').isSafe;
var internalEscape = require('@f0c1s/escape').escape;
var ascii_1 = require("./ascii");
var nonAscii_1 = require("./nonAscii");
function escape(input) {
    var errors = internalEscape.constraints(input);
    var noError = errors.length === 0;
    return noError ? internalEscape(input, { isSafe: isSafe, ascii: ascii_1.ascii, nonAscii: nonAscii_1.nonAscii }) : errors;
}
exports.escape = escape;
//# sourceMappingURL=escape.js.map