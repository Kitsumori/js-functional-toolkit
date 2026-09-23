import { test, expect } from 'vitest';
import { deepEqual } from '../toolkit/compareTools';

test("Check equal type of string object different content", () => {
    const elementOne = "some string"
    const elementTwo = "another string"
    expect(deepEqual(elementOne, elementTwo)).toBeFalsy()
})

test("Check equal type of string object and content", () => {
    const elementOne = "string"
    const elementTwo = "string"
    expect(deepEqual(elementOne, elementTwo)).toBeTruthy()
})

test("Check equal type of number object different content", () => {
    const elementOne = 2
    const elementTwo = 3
    expect(deepEqual(elementOne, elementTwo)).toBeFalsy()
})

test("Check equal type of number object and content", () => {
    const elementOne = 1
    const elementTwo = 1
    expect(deepEqual(elementOne, elementTwo)).toBeTruthy()
})

test("Check equal type of array object different content", () => {
    const elementOne = [1,2,3]
    const elementTwo = [4,5,6]
    expect(deepEqual(elementOne, elementTwo)).toBeFalsy()
})

test("Check equal type of array object and content", () => {
    const elementOne = [1,2]
    const elementTwo = [1,2]
    expect(deepEqual(elementOne, elementTwo)).toBeTruthy()
})

test("Check equal type of object different content", () => {
    const elementOne = {name: "Mario"}
    const elementTwo = {lastName: "Mori"}
    expect(deepEqual(elementOne, elementTwo)).toBeFalsy()
})

test("Check equal type of object and content", () => {
    const elementOne = {name: "Mario", lastName: "Mori"}
    const elementTwo = {name: "Mario", lastName: "Mori"}
    expect(deepEqual(elementOne, elementTwo)).toBeTruthy()
})