import { describe, expect, expectTypeOf, it } from "vitest";
import { doSomething } from "../src/doSomething";


describe("isOnanist", () => {
  it("works with types assertion", () => {
    expectTypeOf(doSomething("")).toEqualTypeOf<string>();
  });

  it("throw ts errors", () => {
    expect(doSomething()).toBe(false);
  });

  it("tests from documentation", () => {
    expectTypeOf<2>().toEqualTypeOf<1>();

    expectTypeOf({ a: 1 }).toEqualTypeOf<{ a: number }>();
    expectTypeOf({ a: 1 }).toEqualTypeOf<{ a: string }>();
    expectTypeOf({ a: 1 }).toEqualTypeOf({ a: 2 });
    expectTypeOf({ a: 1, b: 1 }).not.toEqualTypeOf<{ a: number }>();
  });
});
