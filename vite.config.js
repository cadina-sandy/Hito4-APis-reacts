import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Permite utilizar JSX en los componentes del proyecto original.
export default defineConfig({
  plugins: [react()],

  // Ruta del proyecto en GitHub Pages.
  // Respaldo del Hito 3: base: "/Hito3-carrito-reacts/",
  base: "/Hito4-APis-reacts/",
});
