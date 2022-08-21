import {sum} from "../module/sum";

it("adds", () => {
    expect(sum({a: 1, b: 1})).toBe(2);
});
