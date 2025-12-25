import path from "path";
import { fileURLToPath } from "url";

import { createMDX } from "fumadocs-mdx/next";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const config = {
  /* config options here */
  turbopack: {
    root: __dirname,
  },
  reactStrictMode: true,
};

const withMDX = createMDX({
  // customise the config file path
  // configPath: "source.config.ts"
});

export default withMDX(config);
