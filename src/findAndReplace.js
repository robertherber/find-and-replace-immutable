/* @flow */
import curry from "lodash/fp/curry";
import findIndex from "lodash/fp/findIndex";

import replaceAt from "./replaceAt";

type ReplacementPredicate<T> = T | (T => T);

const findAndReplace = curry(
  (
    findPredicate: any,
    replacementPredicate: ReplacementPredicate<any>,
    array: Array<any>
  ): Array<any> => {
    const index = findIndex(findPredicate, array);

    if (index === -1) {
      return array;
    }

    return replaceAt(index, replacementPredicate, array);
  }
);

export default findAndReplace;
