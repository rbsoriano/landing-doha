import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // ES2018 is widely supported on older phones (Chrome 63+, Safari 12+)
    target: "es2018",
    minify: "esbuild",
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
    // Inline small assets instead of creating separate HTTP requests
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          lucide: ["lucide-react"],
        },
      },
    },
  },
}));
