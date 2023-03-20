import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
process.env = {...process.env, ...loadEnv("default", process.cwd())};
export default defineConfig({
    plugins: [react(), viteCompression()],
    css: {
        devSourcemap: true,
    },
    server: {
        port: parseInt(process.env.VITE_PORT),
    },
    preview: {
        port: parseInt(process.env.VITE_PREVIEW_PORT),
    },
})
