const {isSafe} = require('@f0c1s/safe-ascii');
const {escape: internalEscape} = require('@f0c1s/escape');

import {ascii} from "./ascii";
import {nonAscii} from "./nonAscii";

function escape(input: string) {
    const errors = internalEscape.constraints(input);
    const noError = errors.length === 0;
    return noError ? internalEscape(input, {isSafe, ascii, nonAscii}) : errors;
}

export {escape};