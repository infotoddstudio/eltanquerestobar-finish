import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
  build: {
    // Desactivar source maps en producción
    sourcemap: mode === 'development',
    // Minificación agresiva para producción
    minify: mode === 'production' ? 'terser' : false,
    // Configuración de Terser para mayor seguridad
    terserOptions: mode === 'production' ? {
      compress: {
        drop_console: true, // Eliminar console.log en producción
        drop_debugger: true, // Eliminar debugger
      },
      mangle: {
        // Ofuscar nombres de variables y funciones
        toplevel: true,
        properties: {
          regex: /^_/, // Ofuscar propiedades que empiezan con _
        }
      }
    } : undefined,
    // Optimización de chunks para evitar exposición
    rollupOptions: {
      output: {
        manualChunks: undefined, // Evitar chunks separados que puedan exponer código
        // Nombres ofuscados para archivos generados
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash][ext]'
      }
    },
    // Límites de tamaño para chunks
    chunkSizeWarningLimit: 1000,
    // Reporte detallado para auditoría
    reportCompressedSize: false, // No exponer tamaños comprimidos
  },
  // Configuración de dependencias para seguridad
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
}));
