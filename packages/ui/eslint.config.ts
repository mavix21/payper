import { defineConfig } from "eslint/config";

import { baseConfig } from "@payper/eslint-config/base";
import { reactConfig } from "@payper/eslint-config/react";

export default defineConfig(
  {
    ignores: ["dist/**"],
  },
  baseConfig,
  reactConfig,
);
