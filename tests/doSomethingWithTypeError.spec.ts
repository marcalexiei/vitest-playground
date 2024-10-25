import { describe, expect, expectTypeOf, it } from 'vitest';
import { doSomethingWithTypeError } from '../src/doSomethingWithTypeError';

describe('isOnanist', () => {
  it('works with types assertion', () => {
    expectTypeOf(doSomethingWithTypeError('')).toEqualTypeOf<boolean>();
  });

  it('throw ts errors', () => {
    expect(doSomethingWithTypeError('')).toBe(false);
  });

  it('tests from documentation', () => {
    expectTypeOf({ a: 1 }).toEqualTypeOf<{ a: string }>();
    expectTypeOf({ a: 1 }).toEqualTypeOf<{ a: number }>();
    expectTypeOf({ a: 1 }).toEqualTypeOf({ a: 2 });
    expectTypeOf({ a: 1, b: 1 }).not.toEqualTypeOf<{ a: number }>();
  });
});
