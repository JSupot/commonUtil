
(function(window) {
    var bus = {
        _callback: {},
        $on: function(event, callback) {
            this._callback[event] ? this._callback[event].push(callback) : this._callback[event] = [callback];
            // console.log(this._callback);
            return this;
        },

        $emit: function(event) {
            var argus = Array.prototype.slice.call(arguments, 1);

            if (!this._callback[event]) {
                console.log('without ', event);
                return true;
            }

            for(var i = 0, l = this._callback[event].length; i < l; i++) {
                this._callback[event][i].apply(this, argus);
            }

            return this;

        },

        $off: function(event) {
            if (this._callback[event]) {
                delete this._callback[event];
            } else {
                console.log('without ', event);
                return this;
            }

            return this;
        }
    };

    window.bus = bus;
})(window);