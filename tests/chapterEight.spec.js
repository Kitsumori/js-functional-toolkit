import { expect, test } from "vitest";
import { withBoxUnlocked, box } from "../toolkit/chapterEight";

test("desbloquea durante fn y vuelve a cerrar", () => {
    expect(box.locked).toBe(true)
    withBoxUnlocked(() => {
        expect(box.locked).toBe(false)
        box.content.push("gold")
    })
    expect(box.locked).toBe(true)
})

test("si ya estaba desbloqueada, permanece desbloqueada", () => {
    box.unlock()
    expect(withBoxUnlocked(() => "Works!!!")).toEqual("Works!!!")
    expect(box.locked).toBeFalsy()
    box.lock()
})

test("vuelve a cerrar aunque fn lance", () => {
    expect(() => {
        withBoxUnlocked(() => {
            throw new Error("Pirates on the horizon! Abort!")
        })
    }).toThrow("Pirates on the horizon! Abort!")
    expect(box.locked).toBe(true)
})



