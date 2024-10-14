import { defineConfig } from "vite";
import path from "path";
export default () => {
  return defineConfig({
    server: {
      open: false,
    },
    resolve: {
      alias: {
        "next/link": path.resolve(__dirname, "./UnoptimizedLink.tsx"),
        "next/image": path.resolve(__dirname, "./UnoptimizedImage.tsx"),
      },
    },
  });
};
