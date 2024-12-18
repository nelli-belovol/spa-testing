import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/react-food",
  plugins: [react()],
  server: {
    open: true,
    port: 3000,
  },
});
