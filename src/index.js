const assert = require('assert')
const pad = require('@f0c1s/pad')
const { isSafe } = require('@f0c1s/safe-ascii')
const { escape: _escape } = require('@f0c1s/escape')

const wellknown = {
    34: '&quot;',
    38: '&amp;',
    60: '&lt;',
    62: '&gt;',
    160: '&nbsp;',
    169: '&copy;',
    174: '&reg;'
}

function nonascii(code /* number */) {
    assert.ok(code >= 256)
    return '&#' + code + ';'
}

function ascii(code /* number */) {
    assert.ok(code < 256)
    if (wellknown[code]) {
        // use the wellknown ones. This is good form.
        return wellknown[code]
    }
    const hex = new Buffer(String.fromCharCode(code), 'ascii').toString('hex')
    return '&#x' + pad.left(hex, 2) + ';'
}

function escape(input) {
    const errors = _escape.constraints(input)
    const noerror = errors.length === 0
    return noerror ? _escape(input, { isSafe, ascii, nonascii }) : errors
}

module.exports = {
    ascii,
    escape,
    nonascii,
    wellknown
}
