"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nonAscii = void 0;
var assert_1 = require("assert");
function nonAscii(code) {
    assert_1.ok(code >= 256);
    return '&#' + code + ';';
}
exports.nonAscii = nonAscii;
//# sourceMappingURL=nonAscii.js.map