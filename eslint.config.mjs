import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Config di Next.js + TypeScript
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Ignora cartelle e file generati
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "src/generated/**",
    ],
  },

  // Override regole
  {
    rules: {
      "@next/next/no-img-element": "off",
      "@typescript-eslint/no-this-alias": "off", // esempio: spegni errore su `const self = this`
      "@typescript-eslint/no-require-imports": "off", // se hai ancora dei require()
      "@typescript-eslint/no-unused-expressions": "warn",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
];

export default eslintConfig;
