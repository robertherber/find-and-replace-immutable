import findAndReplace from "../findAndReplace";

describe("findAndReplace", () => {
  it("Should replace first matching item", () => {
    const initialArray = [1, 2, 3, 3, 4, 5];

    const newArray = findAndReplace(e => e === 3, 33, initialArray);

    expect(newArray).toEqual([1, 2, 33, 3, 4, 5]);
  });

  it("Should not mutate array", () => {
    const initialArray = ["original"];

    const newArray = findAndReplace(
      e => e === "original",
      "new value",
      initialArray
    );

    expect(newArray).toEqual(["new value"]);
    expect(initialArray).toEqual(["original"]);
  });

  it("Should return original if not found", () => {
    const initialArray = ["original"];

    const newArray = findAndReplace(
      e => e === "another original",
      "new value",
      initialArray
    );

    expect(newArray).toEqual(initialArray);
  });

  it("Should use replacementPredicate function", () => {
    const initialArray = [1, 2, 3, 3, 4, 5];

    const newArray = findAndReplace(
      e => e === 3,
      oldValue => 33 * oldValue,
      initialArray
    );

    expect(newArray).toEqual([1, 2, 99, 3, 4, 5]);
  });
});
