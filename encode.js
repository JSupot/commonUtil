var escape = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
    // add more
};
var unescape = invert(escape);

function isObject(obj) {
    if (obj && (typeof obj === 'object')) {
        return true;
    }
    return false;
}


function invert(source) {
    var result = {};

    if (isObject(source)) {
        var keys = Object.keys(source);

        for (var i = 0, len = keys.length; i < len; i++) {
            result[source[keys[i]]] = keys[i];
        }
    }
    return result;
}

function createEscaper(map) {
    var repalceFn = function(match) {
        return map[match];
    }

    var regexpStr = Object.keys(map).join('|');
    var replaceRegexp = new RegExp(regexpStr, 'g');

    return function(string) {
        var string = string == null ? '' : '' + string;
        return string.replace(replaceRegexp, repalceFn);
    };
}

var encode = createEscaper(escape);
var decode = createEscaper(unescape);

var str = '<>ffff&胡持"`';
var encodeStr = encode(str);
var decodeStr = decode(encodeStr);

console.log('encodeStr: ', encodeStr);
console.log('decodeStr: ', decodeStr);


