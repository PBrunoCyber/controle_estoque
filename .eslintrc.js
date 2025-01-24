module.exports = {
  root: true,
  parser: "@typescript-eslint/parser", // Usa o parser do TypeScript
  parserOptions: {
    ecmaVersion: 2021, // Versão do ECMAScript moderna
    sourceType: "module", // Usa módulos ES6
    project: "./tsconfig.json", // Caminho para o tsconfig.json
  },
  extends: [
    "eslint:recommended", // Regras básicas recomendadas do ESLint
    "plugin:react-native/all", // Regras para React Native
    "plugin:@typescript-eslint/recommended", // Regras recomendadas do TypeScript
    "plugin:import",
    "plugin:prettier/recommended", // Integração com Prettier
  ],
  plugins: [
    "react",
    "react-native",
    "@typescript-eslint",
    "prettier",
    "import",
  ],
  rules: {
    // Estilo e boas práticas
    "prettier/prettier": "error", // Mostra erros do Prettier no ESLint
    "react/react-in-jsx-scope": "off", // Desnecessário com React 17+
    "react/prop-types": "off", // Não necessário com TypeScript
    "@typescript-eslint/no-unused-vars": "error", // Ignora variáveis com _ no início
    "@typescript-eslint/explicit-module-boundary-types": "off", // Não exige tipar funções públicas
    "sort-imports": [
      "error",
      {
        ignoreCase: false,
        ignoreDeclarationSort: true, // Deixe "true" para usar `import/order`
        ignoreMemberSort: false,
        allowSeparatedGroups: true,
      },
    ],
    "import/order": [
      "error",
      {
        groups: [
          ["builtin", "external"], // Ex: 'fs', 'react'
          "internal", // Imports internos
          ["parent", "sibling"], // Ex: '../utils', './Button'
          "index", // Ex: './'
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "react-native/no-unused-styles": "warn", // Evita estilos não utilizados
    "react-native/split-platform-components": "warn", // Enforce separação de componentes por plataforma
    "react-native/no-inline-styles": "warn", // Evita estilos inline
    "react-native/no-color-literals": "warn", // Evita cores literais (hardcoded)
  },
  settings: {
    react: {
      version: "detect", // Detecta automaticamente a versão do React
    },
    "import/resolver": {
      typescript: {}, // Suporte para resolver imports do TypeScript
    },
  },
};
