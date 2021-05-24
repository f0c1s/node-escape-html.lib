import {ok} from "assert";

function nonAscii(code: number) {
    ok(code >= 256);
    return '&#' + code + ';';
}

export {nonAscii};
