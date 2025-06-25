import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
    exclude: ['dist', 'node_modules'],
    coverage: {
      reporter: ['text', 'html'],
      exclude: ['dist', 'node_modules'],
      provider: 'v8',
    },
  },
});
