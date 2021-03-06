import ArrayIterable from '../iteration/iterable';
import mixin from '../utils/mixin';
import extend from '../utils/extend';
import buffer from '../utils/buffer';
import bufferTo from '../utils/buffer-to';

/**
* Initializes a new instance of the abstract Collection class.
*/
export default function Collection(value) {
    if (value !== null && value !== undefined) {
        value = buffer(value);
    }

    ArrayIterable.call(this, value);
}

extend(Collection, ArrayIterable);

mixin(Collection.prototype, {
    /**
    * Gets the number of elements contained in the Collection.
    * @returns {Number}
    */
    count: function () {
        return this.valueOf() ? this.valueOf().length : 0;
    },

    /**
    * Copies the Collection to an existing one-dimensional Array, starting at the specified array index.
    * @param {Array} array The one-dimensional Array that is the destination of the elements copied from Collection.
    * @param {Number} arrayIndex The zero-based index in array at which copying begins.
    */
    copyTo: function (array, arrayIndex) {
        bufferTo(this.valueOf(), array, arrayIndex);
    },

    /**
    * Creates an array of the elements from Collection.
    * @returns {Array}
    */
    toArray: function () {
        return (this.valueOf() || []).concat();
    },

    toString: function () {
        return '[Collection]';
    }
});

