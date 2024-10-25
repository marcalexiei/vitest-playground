import { describe, expect, expectTypeOf, it } from 'vitest';
import { doSomething } from '../src/doSomething';

describe('isOnanist', () => {
  it('works with types assertion', () => {
    expectTypeOf(doSomething('')).toEqualTypeOf<boolean>();
  });

  it('throw ts error', () => {
    expect(doSomething()).toBe(false);
  });

  // it("throw runtime error", () => {
  //   expect(doSomething()).toBe(true);
  // });

  it('tests from documentation', () => {
    expectTypeOf<2>().toEqualTypeOf<2>();

    expectTypeOf({ a: 1 }).toEqualTypeOf<{ a: number }>();
    expectTypeOf({ a: 1 }).toEqualTypeOf<{ a: number }>();
    expectTypeOf({ a: 1 }).toEqualTypeOf({ a: 2 });
    expectTypeOf({ a: 1, b: 1 }).not.toEqualTypeOf<{ a: number }>();
  });
});
