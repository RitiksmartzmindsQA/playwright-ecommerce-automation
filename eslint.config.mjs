import js from '@eslint/js';
import globals from 'globals';

export default [
    {
        ignores: ['node_modules/**', 'playwright-report/**', 'test-results/**'],
    },

    js.configs.recommended,

    {
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },
];
