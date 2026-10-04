import { expect, test} from "vitest";
import roadGraph from "../toolkit/chapterNine.js";

test("roadGraph", () => {
    expect(roadGraph["Alice's House"]).toContain("Bob's House");
    expect(roadGraph["Alice's House"]).toContain("Cabin");
    expect(roadGraph["Alice's House"]).toContain("Post Office");
    expect(roadGraph["Bob's House"]).toContain("Town Hall");
    expect(roadGraph["Daria's House"]).toContain("Ernie's House");
    expect(roadGraph["Daria's House"]).toContain("Town Hall");
    expect(roadGraph["Ernie's House"]).toContain("Grete's House");
    expect(roadGraph["Grete's House"]).toContain("Farm");
    expect(roadGraph["Grete's House"]).toContain("Shop");
    expect(roadGraph).toBeDefined();
});