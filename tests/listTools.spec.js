import { arrayToList, listToArray, prepend, nth } from "../toolkit/listTools";
import { expect, test} from "vitest";

test("Array to list", () => {
    const expectedResult = {
        value: 1,
        rest: {
            value: 2,
            rest: {
                value: 3,
                rest: null
            }
        }
    };
    expect(arrayToList([1,2,3])).toEqual(expectedResult);
})

test("List to array", () => {
    const list = {
        value: 1,
        rest: {
            value: 2,
            rest: {
                value: 3,
                rest: null
            }
        }
    };
    expect(listToArray(list)).toEqual([1,2,3]);
})

test("Add element to list", () => {
    const element = {
        value:5,
        rest: null
    }
    const list = {
        value: 1,
        rest: {
            value: 2,
            rest: {
                value: 3,
                rest: null
            }
        }
    };
    const newList = {
        value:5,
        rest: {
            value: 1,
            rest: {
                value: 2,
                rest: {
                    value: 3,
                    rest: null
                }
            }
        }
    }
    expect(prepend(element, list)).toEqual(newList)
})

test("nth return the value of the given position", () => {
    const list = {
        value:5,
        rest: {
            value: 1,
            rest: {
                value: 2,
                rest: {
                    value: 3,
                    rest: null
                }
            }
        }
    }
    const position = 2;
    expect(nth(list, position)).toEqual(2)
})

test("The given position is not in the list", () => {
    const list = {
        value:5,
        rest: {
            value: 1,
            rest: {
                value: 2,
                rest: {
                    value: 3,
                    rest: null
                }
            }
        }
    }
    const position = 6;
    expect(nth(list, position)).toEqual(undefined)
})