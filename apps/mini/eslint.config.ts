import { defineConfig } from "eslint/config";

import { baseConfig, restrictEnvAccess } from "@payper/eslint-config/base";
import { nextjsConfig } from "@payper/eslint-config/nextjs";
import { reactConfig } from "@payper/eslint-config/react";

export default defineConfig(
  {
    ignores: [".next/**"],
  },
  baseConfig,
  reactConfig,
  nextjsConfig,
  restrictEnvAccess,
);
