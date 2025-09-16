import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // ✅ Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // ✅ Split vendor libraries into separate chunks
        manualChunks: {
          react: ["react", "react-dom"],
          icons: ["react-icons"],
        },
      },
    },
  },
});
