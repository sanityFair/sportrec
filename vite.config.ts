import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
 
  build: {
    outDir: path.join(__dirname, "dist"),
    rollupOptions: {
      input: {
        app: "src/app/app.tsx",
        html: "index.html",
      },
    },
  },
});
