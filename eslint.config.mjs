import importPlugin from 'eslint-plugin-import';
import unusedImport from 'eslint-plugin-unused-imports';
import typeEslintPlugin from '@typescript-eslint/eslint-plugin';
import typeScriptParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import jsDocPlugin from 'eslint-plugin-jsdoc';

export default [
  eslintConfigPrettier,
  {
    plugins: {
      import: importPlugin,
      jsdoc: jsDocPlugin,
      'unused-imports': unusedImport,
      '@typescript-eslint': typeEslintPlugin
    },
    files: ['**/*.ts'],
    languageOptions: {
      parser: typeScriptParser,
      parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        project: './tsconfig.json'
      }
    },
    ignores: ['.eslint.config.mjs', 'rollup.config.js', 'src/types/output/**'],
    rules: {
      curly: ['error', 'all'],
      'no-extra-label': 'error',
      'no-unused-labels': 'error',
      'new-parens': 'error',
      'no-new-wrappers': 'error',
      'no-debugger': 'error',
      'no-duplicate-case': 'error',
      'no-throw-literal': 'error',
      'no-return-await': 'error',
      'no-unsafe-finally': 'error',
      'no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true
        }
      ],
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-arrow-callback': [
        'error',
        {
          allowNamedFunctions: true
        }
      ],
      'prefer-const': [
        'error',
        {
          destructuring: 'all'
        }
      ],
      'no-array-constructor': 'error',
      'import/order': 'error',
      'import/no-default-export': 'error',
      'import/no-duplicates': 'error',
      'unused-imports/no-unused-imports-ts': 'error',
      'default-case': 'error',
      '@typescript-eslint/member-ordering': 'error',
      '@typescript-eslint/no-floating-promises': 'error'
    }
  }
];
