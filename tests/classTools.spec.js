import {expect, test} from "vitest";
import { Group, Vec } from "../toolkit/classes"

test("Class Vec", () => {
    const vector = new Vec(2, 2)

    expect(vector.plus(2,2)).toEqual((4, 4))
    expect(vector.minus(1,1)).toEqual((1, 1))
    expect(vector.length).toEqual(2.83)
})

test("Class Group", () => {
    const emptyGroup = new Group();

    expect(Object.getPrototypeOf(emptyGroup)).toEqual(Group.prototype)

    emptyGroup.add(1)
    emptyGroup.add(1)

    expect(emptyGroup.group).toEqual([1])
    expect(emptyGroup.has(1)).toBeTruthy()

    emptyGroup.delete(1)

    expect(emptyGroup.group).toEqual([])

    const filledGroup = Group.from("abcc")

    expect(filledGroup.group).toEqual(["a","b","c"])
})