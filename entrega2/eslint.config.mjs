// Importamos el módulo `@eslint/js` que contiene las configuraciones recomendadas de ESLint
import js from "@eslint/js";
// Importamos el plugin de Prettier para integrarlo con ESLint
import prettier from "eslint-plugin-prettier";

export default [
  js.configs.recommended, // Usamos la configuración recomendada por ESLint

  {
    // Definimos las opciones para el lenguaje y el entorno global de las pruebas
    languageOptions: {
      globals: {
        document: "readonly", // Declaramos `document` como global, pero solo de lectura, para evitar errores en pruebas de manipulación del DOM
        window: "readonly", // Declaramos `window` como global, solo de lectura, utilizado en el entorno de navegadores
        confirm: "readonly", // Declaramos `confirm` como global, solo de lectura, usado en confirmaciones de diálogo
        fetch: "readonly", // Declaramos `fetch` como global, solo de lectura, utilizado para realizar peticiones HTTP
        alert: "readonly", // Declaramos `alert` como global, solo de lectura, utilizado para mostrar alertas en el navegador

        // Agregamos las variables globales necesarias para Jest (entorno de pruebas unitarias)
        jest: "readonly", // `jest` como global para las funciones proporcionadas por Jest
        describe: "readonly", // `describe` como global utilizado para definir bloques de pruebas en Jest
        test: "readonly", // `test` como global utilizado para definir pruebas individuales en Jest
        expect: "readonly", // `expect` como global para las afirmaciones en Jest
        beforeEach: "readonly", // `beforeEach` como global utilizado para preparar el entorno de cada prueba
        afterEach: "readonly", // `afterEach` como global utilizado para limpiar después de cada prueba
        beforeAll: "readonly", // `beforeAll` como global para configurar el entorno antes de todas las pruebas
        afterAll: "readonly", // `afterAll` como global para limpiar después de todas las pruebas
        global: "readonly", // `global` como global utilizado en el contexto de Node.js
        require: "readonly", // `require` como global utilizado para importar módulos en Node.js

        module: "readonly", // Añadimos 'module' para evitar el warning de Node.js (puede aparecer en algunos entornos de trabajo)
      },
      // Configuración del parser para usar la versión de ECMAScript y habilitar el uso de `import`/`export`
      parserOptions: {
        ecmaVersion: 2021, // Establecemos que estamos usando ECMAScript 2021
        sourceType: "module", // Habilitamos el uso de módulos ECMAScript (import/export)
      },
    },

    // Definimos los plugins que vamos a utilizar, en este caso el plugin de Prettier para la integración de reglas de formateo
    plugins: {
      prettier: prettier, // Importamos y habilitamos el plugin de Prettier
    },

    // Definimos las reglas de ESLint
    rules: {
      // Configuraciones recomendadas para el análisis de calidad de código

      "no-unused-vars": "warn", // Advertencia si hay variables definidas pero no usadas
      "no-undef": "warn", // Advertencia si se hace referencia a una variable no definida
      semi: ["error", "always"], // Exige el uso de punto y coma al final de las declaraciones
      quotes: ["error", "single"], // Exige el uso de comillas simples para las cadenas

      curly: ["error", "all"], // Exige el uso de llaves en todas las estructuras de control (if, for, while, etc.)
      "no-console": ["warn"], // Advertencia si se usa `console.log` (evitar en producción)
      "no-debugger": "warn", // Advertencia si se usa `debugger` (evitar en producción)
      indent: ["error", 2], // Exige una indentación de 2 espacios para el código
      "no-magic-numbers": ["warn", { ignore: [0, 1, 2] }], // Advertencia si se usan números mágicos, con excepción de 0, 1 y 2
      "prefer-const": "error", // Exige el uso de `const` en lugar de `let` cuando la variable no se reasigna
      "consistent-return": "error", // Exige que las funciones siempre tengan un valor de retorno consistente
      "no-trailing-spaces": "error", // Prohíbe los espacios al final de las líneas
      camelcase: "error", // Exige el uso de notación camelCase para las variables y funciones
      "no-var": "error", // Prohíbe el uso de `var`, preferimos `let` o `const`

      // Reglas de Prettier: estas reglas se aplican al código formateado automáticamente
      "prettier/prettier": [
        "error",
        {
          semi: true, // Exige el uso de punto y coma al final de las declaraciones (coincide con la regla ESLint `semi`)
          singleQuote: true, // Exige el uso de comillas simples en lugar de comillas dobles
          trailingComma: "es5", // Exige comas finales en objetos y arrays (solo en ES5+)
          arrowParens: "always", // Exige paréntesis alrededor de los parámetros en funciones flecha, incluso si hay solo uno
        },
      ],
    },
  },
];
