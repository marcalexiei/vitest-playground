# Vitest typechecking playground

Finding a way to perform typecheck on vitest using [--typecheck flag](https://vitest.dev/guide/testing-types.html#run-typechecking):

## Setup information

| Path                            | Has type error is source file | Has type error inside test file |
|---------------------------------|-------------------------------|---------------------------------|
| src/doSomething                 | ❌                             | ✅                               |
| src/doSomethingWithTypeError.ts | ✅                             | ❌                               |

## Learned things

### How to get typechecking on both tests and source files

Set `module` and `moduleResolution` to `nodeNext`

Include:

```js
  test: {
    typecheck: {
      include: ['**/tests/**/*.spec.ts(x)?'],
    },
  },
```

in `vite.config.js``

- https://github.com/vitest-dev/vitest/issues/4767

### Can't run js and ts check at the same time

When running with typecheck vitest doesn't perform runtime check and vice versa.

To solve the issue I used 2 separate workspaces:

![workspace std](./docs/workspace-run-std.png)

The result is what you see in the next image:

![error std](./docs/type-runtime-errors-std.png)