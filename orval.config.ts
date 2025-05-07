import { defineConfig } from 'orval';

export default defineConfig({
  petstore: {
    input: 'https://0ead-210-223-56-118.ngrok-free.app/api-docs-json/',
    output: {
      baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
      target: './test/tmp.ts',
      schemas: './test/model/',
      client: 'react-query',
      httpClient: 'axios',
      override: {
        mutator: {
          path: './shared/lib/axios/customAxios.ts',
          name: 'customInstance',
        },
      },
    },
    hooks: {
      afterAllFilesWrite: 'prettier --write "./test/**/*.{ts,tsx}"',
    },
  },
})