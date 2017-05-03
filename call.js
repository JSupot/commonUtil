Function.prototype.call1 = function(context) {
    console.log('this: ', this);
    console.log('context: ', context);
    var context = context || window;
    context.fn = this;
    var argus = [];
    for (var i = 1, l = arguments.length; i < l; i++) {
        // argus.push(arguments[i]);
        argus.push('arguments[' + i + ']');
    }
    // context.fn();
    var result = eval('context.fn(' + argus + ')');
    delete context.fn;
    return result;

};


Function.prototype.apply1 = function(context, arr) {
    var context = context || window;
    var result = [];
    var args = [];
    context.fn = this;

    if (!arr) {
        result = this.fn();
    }else {
        for (var i = 0, len = arr.length; i < len; i++) {
            args.push('arr[' + i + ']');
        }

        result = eval('context.fn(' + args + ')');
    }

    delete context.fn;
    return result;
};

Function.prototype.bind2 = function(context) {
    if (typeof this !== 'function') {
        throw new Error('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var self = this;

    var args = Array.prototype.slice.call(arguments, 1);

    return function() {
        var bindArgs = Array.prototype.slice.call(arguments);
        self.apply(context, args.concat(bindArgs));
    }

};



var foo = {
    value: 1
};

function bar(name, age) {
    console.log('name: ', name);
    console.log('age: ', age);
    console.log(this.value);
}

bar.call1(foo, 'supot', 20);
bar.apply1(foo, ['huchi', 20]);

var bindFoo = bar.bind2(foo, 'raycloud');
bindFoo(15);
