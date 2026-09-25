import { test, expect, vi } from 'vitest';
import { deepEqual, ownBucle, dominantWritingDirection } from '../toolkit/compareTools';

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

test("ownBucle test", () => {
    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
    
    const expectedResult = [
        ["a"],
        ["ab"],
        ["abc"],
        ["abcd"]
    ]

    const verification = (text) => text.length > 4;
    const update = (text) => {
        const chars = "abcd"
        return `${text}${chars[text.length]}`
    }
    const body = (text) => console.log(text)
    ownBucle("a", verification, update, body)
    expect(logSpy.mock.calls).toEqual(expectedResult)
})

test("dominantWrittingDirection is ltr", () => {
    const text = "Hola mi nombre es Mario Daniel Mori";
    expect(dominantWritingDirection(text)).toEqual("ltr")
})

test("dominantWrittingDirection is rtl", () => {
    const text = "مرحبا";
    expect(dominantWritingDirection(text)).toEqual("rtl")
})

test("dominantWrittingDirection is ttb", () => {
    const text = "ᠮᠣᠩᠭᠣᠯ";
    expect(dominantWritingDirection(text)).toEqual("ttb")
})