# find-and-replace-immutable

Exposes two simple but essential helper immutable methods:
* replaceAt (index, objectOrMapFunction, array)
* findAndReplace (findPredicateFunction, objectOrMapFunction, array)

Uses [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide) under the hood, which is great for it's immutability.

I always end up using this in my React projects - so I thought I'd share it! ;)

## Examples

Using *replaceAt*:
~~~~
import { replaceAt } from 'find-and-replace-immutable';

const initialArray = ["original"];

const newArray = replaceAt(0, "new value", initialArray);

// expect(newArray).toEqual(["new value"]);
// expect(initialArray).toEqual(["original"]);
~~~~


Using *findAndReplace* with mapping function:
~~~~
import { findAndReplace } from 'find-and-replace-immutable';

const initialArray = [1, 2, 3, 3, 4, 5];

const newArray = findAndReplace(
  e => e === 3,
  oldValue => 33 * oldValue,
  initialArray
);

// expect(newArray).toEqual([1, 2, 99, 3, 4, 5]);
~~~~
