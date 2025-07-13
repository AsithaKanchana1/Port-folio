import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // base: "/Port-folio", // Replace with your actual repository name
  base: "/", // Replace with your actual repository name
});
