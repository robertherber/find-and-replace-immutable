/* @flow */
import curry from "lodash/fp/curry";
import isFunction from "lodash/fp/isFunction";

type ReplacementPredicate<T> = T | (T => T);

const replaceAt = curry(
  (
    index: number,
    replacementPredicate: ReplacementPredicate<any>,
    array: Array<any>
  ): Array<any> => {
    const replacement = isFunction(replacementPredicate)
      ? replacementPredicate(array[index])
      : replacementPredicate;

    return array
      .slice(0, index)
      .concat([replacement])
      .concat(array.slice(index + 1));
  }
);

export default replaceAt;
