import * as lib from "./lib";

// DO NOT CHANGE TESTS
it("have correct user", () => expect(lib.user).toBe("Developer"));
it("have correct person name", () => expect(lib.person.name).toBe("Joe"));
it("have correct direction", () => expect(lib.direction).toBe("up"));
it("have correct verb", () => expect(lib.pastTenseVerb).toBe("ran"));
it("have correct location", () => expect(lib.location).toBe("arcade"));
it("have correct game", () => expect(lib.game.name).toBe("Space Invaders"));
it("should have tax", () => expect(lib.tax).toBe(0.1));
it("have correct game cost after tax", () => expect(lib.game.cost).toBe(0.35));
// DO NOT CHANGE TESTS
