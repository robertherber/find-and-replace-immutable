import replaceAt from "../replaceAt";

describe("replaceAt", () => {
  it("Should replace first matching item", () => {
    const initialArray = [1, 2, 3, 3, 4, 5];

    const newArray = replaceAt(2, 33, initialArray);

    expect(newArray).toEqual([1, 2, 33, 3, 4, 5]);
  });

  it("Should not mutate array", () => {
    const initialArray = ["original"];

    const newArray = replaceAt(0, "new value", initialArray);

    expect(newArray).toEqual(["new value"]);
    expect(initialArray).toEqual(["original"]);
  });

  it("Should use replacementPredicate function", () => {
    const initialArray = [1, 2, 3, 3, 4, 5];

    const newArray = replaceAt(
      2,
      oldValue => oldValue * oldValue,
      initialArray
    );

    expect(newArray).toEqual([1, 2, 9, 3, 4, 5]);
  });
});
