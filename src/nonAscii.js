"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nonAscii = nonAscii;
const assert_1 = require("assert");
function nonAscii(code) {
    (0, assert_1.ok)(code >= 256);
    return '&#' + code + ';';
}
//# sourceMappingURL=nonAscii.js.map