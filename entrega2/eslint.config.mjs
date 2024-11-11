import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';

export default [
  // Configuración recomendada de ESLint
  js.configs.recommended,

  {
    languageOptions: {
      globals: {
        document: 'readonly', // Indica que `document` es una variable global y de solo lectura
        window: 'readonly', // Asegura que `window` sea reconocida como una variable global
        confirm: 'readonly', // Asegura que `confirm` sea reconocida como una variable global
        fetch: 'readonly', // Asegura que `fetch` sea reconocida como una variable global
        alert: 'readonly', // Asegura que `alert` sea reconocida como una variable global
      },
      parserOptions: {
        ecmaVersion: 2021, // Establece la versión de ECMAScript
        sourceType: 'module', // Permite el uso de import/export
      },
    },

    plugins: {
      prettier: prettier, // Aquí importamos y usamos el plugin de Prettier
    },

    rules: {
      // Configuraciones recomendadas por ESLint

      // 'no-unused-vars': advierte si hay variables que están declaradas pero no se usan en el código.
      // Esto ayuda a evitar código muerto y mejora la legibilidad del código.
      'no-unused-vars': 'warn',

      // 'no-undef': advierte si se hace referencia a una variable no definida previamente.
      // Es útil para evitar errores de referencia a variables no declaradas.
      'no-undef': 'warn',

      // 'semi': exige el uso de punto y coma al final de cada declaración.
      // Esto asegura que todas las líneas de código que necesitan punto y coma lo tengan,
      // evitando posibles errores cuando JavaScript hace inferencia de semicolons.
      semi: ['error', 'always'],

      // 'quotes': exige el uso de comillas simples para las cadenas de texto.
      // Utilizar comillas simples mejora la consistencia y puede ayudar a evitar conflictos con HTML.
      quotes: ['error', 'single'],

      // 'curly': exige el uso de llaves en todas las estructuras de control (if, for, while, etc.)
      // Esto mejora la legibilidad y reduce la posibilidad de errores al no usar llaves.
      curly: ['error', 'all'],

      // 'no-console': advierte si se usa `console.log` o cualquier otro método de `console`.
      // Esto es útil para evitar que se queden declaraciones `console.log` en producción.
      'no-console': ['warn'],

      // 'no-debugger': advierte si se usa la declaración `debugger`.
      // Esto ayuda a prevenir que se dejen puntos de interrupción de depuración en el código de producción.
      'no-debugger': 'warn',

      // 'indent': asegura que el código esté correctamente indentado con 2 espacios.
      // La indentación adecuada mejora la legibilidad y mantiene el código organizado.
      indent: ['error', 2], // Se usa 2 espacios como convención común para la indentación en JavaScript.

      // 'no-magic-numbers': advierte si se usan números "mágicos" en el código (números sin explicación clara).
      // Los números 0, 1 y 2 se ignoran en este caso porque son frecuentemente usados.
      'no-magic-numbers': ['warn', { ignore: [0, 1, 2] }],

      // 'prefer-const': fuerza el uso de `const` en lugar de `let` cuando la variable no se reasigna.
      // Esto ayuda a prevenir cambios accidentales y hace que el código sea más seguro.
      'prefer-const': 'error',

      // 'consistent-return': asegura que todas las funciones tengan un valor de retorno consistente.
      // Es decir, si una función retorna un valor en algunos casos, debe hacerlo en todos los casos.
      'consistent-return': 'error',

      // 'no-trailing-spaces': prohíbe los espacios en blanco al final de las líneas.
      // Los espacios al final de las líneas no tienen ningún propósito y pueden generar problemas al copiar y pegar.
      'no-trailing-spaces': 'error',

      // 'camelcase': obliga a usar la convención de nombres en notación camelCase para las variables y funciones.
      // La notación camelCase mejora la legibilidad y sigue la convención estándar en JavaScript.
      camelcase: 'error',

      // 'no-var': fuerza el uso de `let` o `const` en lugar de `var`.
      // `let` y `const` tienen un alcance más claro y seguro, lo que evita problemas con el alcance de las variables.
      'no-var': 'error',

      // Reglas de Prettier
      'prettier/prettier': [
        'error',
        {
          // 'semi': Exige el uso de punto y coma al final de las declaraciones, lo que es consistente con las reglas de ESLint.
          semi: true,

          // 'singleQuote': Exige el uso de comillas simples para las cadenas de texto (consistente con 'quotes' en ESLint).
          singleQuote: true,

          // 'trailingComma': Exige comas finales en objetos y arrays donde sea posible.
          // Esto facilita las modificaciones en el código, ya que no hay que añadir una coma cuando se agrega un nuevo elemento.
          trailingComma: 'es5', // Solo se añaden comas al final de los elementos en arrays u objetos en ECMAScript 5+.

          // 'arrowParens': Exige que las funciones de flecha siempre tengan paréntesis alrededor de los parámetros, incluso si solo hay uno.
          arrowParens: 'always',
        },
      ],
    },
  },
];
