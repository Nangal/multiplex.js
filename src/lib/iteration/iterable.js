import iterator from './iterator-factory';
import iteratorSymbol from './iterator-symbol';
import mixin from '../utils/mixin';

/**
* Defines abstract Iterable class.
* @param {Iterable|Array|String|Function|Function*|Object} source An Iterable object.
*/
export default function Iterable(source) {
    if (source !== null && source !== undefined) {
        this._source = source;
    }
}

Iterable.prototype[iteratorSymbol] = function () {
    return iterator(this._source);
};

mixin(Iterable.prototype, {
    toString: function () {
        return '[Iterable]';
    },

    valueOf: function () {
        return this._source;
    }
});
