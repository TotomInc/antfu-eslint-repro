import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: {
    tsconfigPath: './tsconfig.json',

    parserOptions: {
      EXPERIMENTAL_useProjectService: true,
    },

    overrides: {
      // Should not trigger an ESLint error on `main.ts#L13`.
      'ts/no-unsafe-argument': 'off',
    },
  },
})
