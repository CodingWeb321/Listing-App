import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // This is the configuration for the proxy
    proxy: {
      // All requests to http://localhost:5173/api will be sent to the target
      "/api": {
        target: "http://localhost:3004", // The address where your json-server is running
        changeOrigin: true,
        // Rewrite the path: '/api/jobs' becomes '/jobs' before forwarding
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
