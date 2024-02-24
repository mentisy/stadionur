import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteBasicSslPlugin from "@vitejs/plugin-basic-ssl";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/stadionur",
    plugins: [viteBasicSslPlugin(), react()],
    server: {
        port: 3000,
    },
});
