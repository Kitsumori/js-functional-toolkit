import { expect, test } from "vitest";
import { range, sum, reverseArray, reverseArrayInPlace, flatteringArray, everyBucle, everySome } from "../toolkit/arrayTools";

test("range with step 1", () => {
    expect(range(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test("range with step 2", () => {
    expect(range(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
});

test("range with step -1", () => {
    expect(range(5, 2, -1)).toEqual([5, 4, 3, 2]);
});

test("sum of array", () => {
    expect(sum([1, 2, 3, 49])).toEqual(55);
})

test("reverseArray", () => {
    expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
})

test("reverseArrayInPlace", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    reverseArrayInPlace(array)
    expect(array).toBe(array)
    expect(array).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
})

test("flattering array of arrays", () => {
    const array = [
        [1,2,3],
        [1,2,3],
        [8,9,7]
    ]
    const expectedResult = [1,2,3,1,2,3,8,9,7]
    expect(flatteringArray(array)).toEqual(expectedResult)
})

test("everyBucle is true", () => {
    const array = [1,2,3,4,5]
    const test = (arr) => arr < 6
    expect(everyBucle(array, test)).toBeTruthy()
})

test("everyBucle is false", () => {
    const array = [1,2,3,4,5]
    const test = (arr) => arr <= 1
    expect(everyBucle(array, test)).toBeFalsy()
})

test("everySome is true", () => {
    const array = [1,2,3,4,5]
    const test = (arr) => arr > 6
    expect(everySome(array, test)).toBeTruthy()
})

test("everySome is false", () => {
    const array = [1,2,3,4,5]
    const test = (arr) => arr >= 1
    expect(everySome(array, test)).toBeFalsy()
})