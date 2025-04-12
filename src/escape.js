"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.escape = escape;
const { isSafe } = require('@f0c1s/safe-ascii');
const { escape: internalEscape } = require('@f0c1s/escape');
const ascii_1 = require("./ascii");
const nonAscii_1 = require("./nonAscii");
function escape(input) {
    const errors = internalEscape.constraints(input);
    const noError = errors.length === 0;
    return noError ? internalEscape(input, { isSafe, ascii: ascii_1.ascii, nonAscii: nonAscii_1.nonAscii }) : errors;
}
//# sourceMappingURL=escape.js.map