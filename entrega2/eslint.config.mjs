import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';

export default [
  js.configs.recommended,

  {
    // Definimos las variables globales
    languageOptions: {
      globals: {
        document: 'readonly',
        window: 'readonly',
        confirm: 'readonly',
        fetch: 'readonly',
        alert: 'readonly',

        // Agregamos las variables globales necesarias para Jest (entorno de pruebas unitarias)
        jest: 'readonly',
        describe: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        global: 'readonly',
        require: 'readonly',
        console: 'readonly',
        module: 'readonly',
      },
      // Configuración del parser para usar la versión de ECMAScript y habilitar el uso de `import`/`export`
      parserOptions: {
        ecmaVersion: 2022, // Establecemos que estamos usando ECMAScript 2022
        sourceType: 'module', // Habilitamos el uso de módulos ECMAScript (import/export)
      },
    },

    // Definimos los plugins que vamos a utilizar, en este caso el plugin de Prettier para la integración de reglas de formateo
    plugins: {
      prettier: prettier,
    },

    // Definimos las reglas de ESLint
    rules: {
      'no-unused-vars': 'warn', // Advertencia si hay variables definidas pero no usadas
      'no-undef': 'warn', // Advertencia si se hace referencia a una variable no definida
      semi: ['error', 'always'], // Exige el uso de punto y coma al final de las declaraciones
      quotes: ['error', 'single'], // Exige el uso de comillas simples para las cadenas
      curly: ['error', 'all'], // Exige el uso de llaves en todas las estructuras de control (if, for, while, etc.)
      indent: ['error', 2], // Exige una indentación de 2 espacios para el código
      'no-magic-numbers': ['warn', { ignore: [0, 1, 2] }], // Advertencia si se usan números mágicos, con excepción de 0, 1 y 2
      'prefer-const': 'error', // Exige el uso de `const` en lugar de `let` cuando la variable no se reasigna
      'consistent-return': 'error', // Exige que las funciones siempre tengan un valor de retorno consistente
      'no-trailing-spaces': 'error', // Prohíbe los espacios al final de las líneas
      camelcase: 'error', // Exige el uso de notación camelCase para las variables y funciones
      'no-var': 'error', // Prohíbe el uso de `var`, preferimos `let` o `const`

      // Reglas de Prettier: estas reglas se aplican al código formateado automáticamente
      'prettier/prettier': [
        'error',
        {
          semi: true, // Exige el uso de punto y coma al final de las declaraciones
          singleQuote: true, // Exige el uso de comillas simples en lugar de comillas dobles
          trailingComma: 'es5', // Exige comas finales en objetos y arrays
          arrowParens: 'always', // Exige paréntesis alrededor de los parámetros en funciones flecha, incluso si hay solo uno
        },
      ],
    },
  },
];
