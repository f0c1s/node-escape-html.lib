const {left} = require('@f0c1s/pad');

import {ok} from "assert";
import {WELL_KNOWN_HTML_ESCAPES} from "./constants";

function ascii(code: number) {
    ok(code < 256);
    const coded: string = WELL_KNOWN_HTML_ESCAPES[code] || '';
    if (coded) {
        // use the WELL_KNOWN_HTML_ESCAPES ones. This is good form.
        return coded;
    }
    const hex = Buffer.from(String.fromCharCode(code), 'ascii').toString('hex');
    return '&#x' + left(hex, 2) + ';';
}

export {ascii};