import isArray from './is-array';
import isString from './is-string';
import isArrayLike from './is-array-like';
import iterator from '../iteration/iterator-factory';
import Collection from '../collections/collection';
import ArrayIterable from '../iteration/iterable-array';

/**
* Buffers an Iterale object into an array.
* @param {Iterale} value An Iterale object.
* @returns {Array}
*/
export default function buffer(value) {
    if (value === null || value === undefined) {        // empty value
        return [];
    }

    else if (isArrayLike(value)) {                      // array-likes have fixed element count
        return arrayBuffer(value);
    }

    else if (value instanceof ArrayIterable) {          // ArrayIterable wrapper
        return arrayBuffer(value.valueOf());
    }

    else if (value instanceof Collection) {             // Collections have 'toArray' method
        return value.toArray();
    }

    // do it the hard way
    else {
        var it = iterator(value),
            count = 0,
            length = 16,
            arr = new Array(length),
            result;

        while (!(result = it.next()).done) {
            if (count >= length) {
                length *= 4;
                arr.length = length;
            }

            arr[count++] = result.value;
        }

        arr.length = count;
        return arr;
    }
}


function arrayBuffer(value) {
    if (isArray(value)) {                  	// fast buffer arrays
        return value.concat();            	// 'concat' is fastest way to duplicate an array
    }

    else if (isString(value)) {           	// fast buffer strings
        return value.split('');        	    // buffer string to char-array
    }

    // use the despised Array constructor as a function
    return value.length === 1 ? [value[0]] : Array.apply(null, value);
}
