const assert = require('assert')

function escape(input /* string */, {isSafe, ascii, nonascii} /* fn, fn, fn */) {
    assert.ok(input)
    assert.equal(typeof input, typeof 'string', 'param:input shoud be string')
    return input
        .split('')
        .map(c => {
            const code = c.charCodeAt(0)
            return isSafe(c) ? c : code < 256 ? ascii(code) : nonascii(code)
        })
        .join('')
}
escape.constraints = function (input /* string */) {
    const errors = []
    if (!input) {
        errors.push('param:input should not be falsy value')
    }
    if (typeof input !== typeof 'string') {
        errors.push('param:input should be string')
    }
    return errors
}

module.exports = {
    escape
}