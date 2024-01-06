import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  {
    test: {
      name: 'test',
    }
  },
  {
    test: {
      name: 'typecheck',
      typecheck: {
        enabled: true,
        tsconfig: './tsconfig.test.json',
        include: ['**/tests/**/*.spec.ts(x)?'],
      }
    }
  },
]);