import mixin from '../utils/mixin';
import EmptyIterable from '../iteration/iterable-empty';
import range from './range';
import repeat from './repeat';
import aggregate from './aggregate';
import all from './all';
import any from './any';
import average from './average';
import concat from './concat';
import contains from './contains';
import count from './count';
import defaultIfEmpty from './default-if-empty';
import elementAt from './element-at';
import first from './first';
import firstOrDefault from './first-or-default';
import forEach from './for-each';
import last from './last';
import lastOrDefault from './last-or-default';
import minMax from './min-max';
import ofType from './of-type';
import reverse from './reverse';
import select from './select';
import selectMany from './select-many';
import sequenceEqual from './sequence-equal';
import single from './single';
import singleOrDefault from './single-or-default';
import skip from './skip';
import skipWhile from './skip-while';
import sum from './sum';
import take from './take';
import takeWhile from './take-while';
import toArray from './to-array';
import toList from './to-list';
import union from './union';
import where from './where';
import zip from './zip';

export default function linq(iterable) {
    mixin(iterable, {

        /**
        * Returns an empty Iterable.
        * @returns {Iterable}
        */
        empty: function () {
            return new EmptyIterable();
        },

        /**
        * Generates a sequence of integral numbers within a specified range.
        * @param {Number} start The value of the first integer in the sequence.
        * @param {Number} count The number of sequential integers to generate.
        * @returns {Iterable}
        */
        range: range,

        /**
        * Generates a sequence that contains one repeated value.
        * @param {Object} element The value to be repeated.
        * @param {Number} count The number of times to repeat the value in the generated sequence.
        * @returns {Iterable}
        */
        repeat: repeat
    });

    mixin(iterable.prototype, {

        /**
        * Applies an accumulator function over a sequence.
        * @param {Object} seed The initial accumulator value.
        * @param {Function} func An accumulator function to be invoked on each element. eg. function(accumulate, item)
        * @param {Function} resultSelector A function to transform the final accumulator value into the result value. eg. function(accumulate)
        * @returns {Object}
        */
        aggregate: function (seed, func, resultSelector) {
            return aggregate(this, func, resultSelector);
        },

        /**
        * Determines whether all elements of a sequence satisfy a condition.
        * Returns true if every element of the source sequence passes the test in the specified predicate, or if the sequence is empty; otherwise, false.
        * @param {Function} predicate A function to test each element for a condition. eg. function(item).
        * @returns {Boolean}
        */
        all: function (predicate) {
            return all(this, predicate);
        },

        /**
        * Determines whether a sequence contains any elements.
        * Returns true if any elements in the source sequence contains any elements or pass the test in the specified predicate; otherwise, false.
        * @param {Function=} predicate A function to test each element for a condition. eg. function(item).
        * @returns {Boolean}
        */
        any: function (predicate) {
            return any(this, predicate);
        },

        /**
        * Computes the average of a sequence of numeric values.
        * @param {Function=} selector A transform function to apply to each element. eg.function(item).
        * @returns {Number}
        */
        average: function (selector) {
            return average(this, selector);
        },

        /**
        * Concatenates two sequences.
        * @param {Iterable} second The sequence to concatenate to current sequence.
        * @returns {Iterable}
        */
        concat: function (second) {
            return concat(this, second);
        },

        /**
        * Determines whether a sequence contains a specified element by using an equality comparer.
        * @param {Object} value The value to locate in the sequence.
        * @param {EqualityComparer=} comparer An equality comparer to compare values.
        * @returns {Boolean}
        */
        contains: function (value, comparer) {
            return contains(this, value, comparer);
        },

        /**
        * Returns the number of elements in a sequence.
        * @param {Function=} predicate A function to test each element for a condition. eg. function(item)
        * @returns {Number}
        */
        count: function (predicate) {
            return count(this, predicate);
        },

        /**
        * Returns the elements of the specified sequence or the specified value in a collection if the sequence is empty.
        * @param {Object=} defaultValue The value to return if the sequence is empty.
        * @returns {Iterable}
        */
        defaultIfEmpty: function (defaultValue) {
            return defaultIfEmpty(this, defaultValue);
        },

        /**
        * Returns the element at a specified index in a sequence. Throws an error if the index is less than 0 or greater than or equal to the number of elements in source.
        * @param {Number} index The zero-based index of the element to retrieve.
        * @returns {Object}
        */
        elementAt: function (index) {
            return elementAt(this, index);
        },

        /**
        * Returns the first element in a sequence that satisfies a specified condition. this method throws an exception if there is no element in the sequence.
        * @param {Function=} predicate A function to test each source element for a condition. eg. function(item)
        * @returns {Object}
        */
        first: function (predicate) {
            return first(this, predicate);
        },

        /**
        * Returns the first element of the sequence that satisfies a condition or a default value if no such element is found.
        * @param {Function=} predicate A function to test each source element for a condition. eg. function(item)
        * @param {Object=} defaultValue The value to return if no element exists with specified condition.
        * @returns {Object}
        */
        firstOrDefault: function (predicate, defaultValue) {
            return firstOrDefault(this, predicate, defaultValue);
        },

        /**
        * Performs the specified action on each element of an Iterable.
        * @param {Function} action The action function to perform on each element of an Iterable. eg. function(item, index)
        */
        forEach: function (action) {
            return forEach(this, action);
        },

        /**
        * Returns the last element of a sequence that satisfies a specified condition.
        * @param {Function=} predicate A function to test each source element for a condition. eg. function(item)
        * @returns {Object}
        */
        last: function (predicate) {
            return last(this, predicate);
        },

        /**
        * Returns the last element of a sequence that satisfies a condition or a default value if no such element is found.
        * @param {Function=} predicate A function to test each source element for a condition. eg. function(item)
        * @param {Object=} defaultValue The value to return if no element exists with specified condition.
        * @returns {Object}
        */
        lastOrDefault: function (predicate, defaultValue) {
            return lastOrDefault(this, predicate, defaultValue);
        },

        /**
        * Invokes a transform function on each element of a sequence and returns the maximum value.
        * @param {Function=} selector A transform function to apply to each element. eg. function(item)
        * @returns {Object}
        */
        max: function (selector) {
            return minMax(this, true, selector);
        },

        /**
        * Invokes a transform function on each element of a sequence and returns the minimum value.
        * @param {Function=} selector A transform function to apply to each element. eg. function(item)
        * @returns {Object}
        */
        min: function (selector) {
            return minMax(this, false, selector);
        },

        /**
        * Filters the elements of an Iterable based on a specified type.
        * @param {Function} type The type to filter the elements of the sequence on.
        * @returns {Iterable}
        */
        ofType: function (type) {
            return ofType(this, type);
        },

        /**
        * Inverts the order of the elements in a sequence.
        * @returns {Iterable}
        */
        reverse: function () {
            return reverse(this);
        },

        /**
        * Projects each element of a sequence into a new form.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element. eg. function(item, index)
        * @returns {Iterable}
        */
        select: function (selector) {
            return select(this, selector);
        },

        /**
        * Projects each element of a sequence to an Iterable and flattens the resulting sequences into one sequence.
        * @param {Function} collectionSelector A transform function to apply to each source element; the second parameter of the function represents the index of the source element. eg. function(item, index)
        * @param {Function=} resultSelector A transform function to apply to each element of the intermediate sequence. eg. function(item, collection)
        * @returns {Iterable}
        */
        selectMany: function (collectionSelector, resultSelector) {
            return selectMany(this, collectionSelector, resultSelector);
        },

        /**
        * Determines whether two sequences are equal by comparing their elements by using an EqualityComparer.
        * @param {Iterable} second An Iterable to compare to the first sequence.
        * @param {EqualityComparer=} comparer The EqualityComparer to compare values.
        * @returns {Boolean}
        */
        sequenceEqual: function (second, comparer) {
            return sequenceEqual(this, second, comparer);
        },

        /**
        * Returns the only element of a sequence that satisfies a specified condition, and throws an exception if more than one such element exists.
        * @param {Function=} predicate A function to test each source element for a condition. eg. function(item)
        * @returns {Object}
        */
        single: function (predicate) {
            return single(this, predicate);
        },

        /**
        * Returns the only element of a sequence that satisfies a specified condition or a default value if no such element exists; this method throws an exception if more than one element satisfies the condition.
        * @param {Function=} predicate A function to test each source element for a condition. eg. function(item)
        * @param {Object=} defaultValue The value to return if no element exists with specified condition.
        * @returns {Object}
        */
        singleOrDefault: function (predicate, defaultValue) {
            return singleOrDefault(this, predicate, defaultValue);
        },

        /**
        * Bypasses a specified number of elements in a sequence and then returns the remaining elements.
        * @param {Number} count The number of elements to skip before returning the remaining elements.
        * @returns {Iterable}
        */
        skip: function (count) {
            return skip(this, count);
        },

        /**
        * Bypasses elements in a sequence as long as a specified condition is true and then returns the remaining elements. The element's index is used in the logic of the predicate function.
        * @param {Function=} predicate A function to test each source element for a condition; the second parameter of the function represents the index of the source element. eg. function(item, index)
        * @returns {Iterable}
        */
        skipWhile: function (predicate) {
            return skipWhile(this, predicate);
        },

        /**
        * Computes the sum of the sequence of values that are obtained by invoking a transform function on each element of the input sequence.
        * @param {Function=} selector A transform function to apply to each element. eg. function(item)
        * @returns {Number}
        */
        sum: function (selector) {
            return sum(this, selector);
        },

        /**
        * Returns a specified number of contiguous elements from the start of a sequence.
        * @param {Number} count The number of elements to return.
        * @returns {Iterable}
        */
        take: function (count) {
            return take(this, count);
        },

        /**
        * Returns elements from a sequence as long as a specified condition is true. The element's index is used in the logic of the predicate function.
        * @param {Function=} predicate A function to test each source element for a condition; the second parameter of the function represents the index of the source element. eg. Function(item, index)
        * @returns {Iterable}
        */
        takeWhile: function (predicate) {
            return takeWhile(this, predicate);
        },

        /**
        * Creates an array from an Iterable.
        * @returns {Array}
        */
        toArray: function () {
            return toArray(this);
        },

        /**
        * Creates a List from an Iterable.
        * @returns {List}
        */
        toList: function () {
            return toList(this);
        },

        /**
        * Produces the set union of two sequences by using a specified EqualityComparer.
        * @param {Iterable} second An Iterable whose distinct elements form the second set for the union.
        * @param {EqualityComparer=} comparer The EqualityComparer to compare values.
        * @returns {Iterable}
        */
        union: function (second, comparer) {
            return union(this, second, comparer);
        },

        /**
         * Filters a sequence of values based on a predicate. Each element's index is used in the logic of the predicate function.
         * @param {Function} predicate A function to test each source element for a condition; the second parameter of the function represents the index of the source element. eg. function(item, index)
         * @returns {Iterable}
         */
        where: function (predicate) {
            return where(this, predicate);
        },

        /**
        * Merges two sequences by using the specified predicate function.
        * @param {Iterable} second The second sequence to merge.
        * @param {Function} resultSelector A function that specifies how to merge the elements from the two sequences. eg. function(first, second)
        * @returns {Iterable}
        */
        zip: function (second, resultSelector) {
            return zip(this, second, resultSelector);
        }
    });
}
