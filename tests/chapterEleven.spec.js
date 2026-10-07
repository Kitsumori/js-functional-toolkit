import { test, expect } from "vitest";
import { activityTable, Promise_all } from "../toolkit/chapterEleven.js";

test("activityTable", async () => {
    const expected = [0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    expect(await activityTable(2)).toEqual(expected);
})

test("Promise_all", async () => {
    const expected = [1,1,1]
    expect(await Promise_all([Promise.resolve(1),Promise.resolve(1),Promise.resolve(1)])).toEqual(expected)
})