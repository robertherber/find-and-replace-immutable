# find-and-replace-immutable

Exposes two simple but essential helper immutable methods:
* findAndReplace (findPredicateFunction, objectOrPredicateFunction, array)
* replaceAt (index, objectOrPredicateFunction, array)

Uses [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide) under the hood, which is great for it's immutability.

I always end up using this in my React projects - so I thought I'd share it! ;)
