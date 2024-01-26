import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import path from "path";

const server = ()=>{
    const env = process.env.APP_ENV??'production'
    const port = env === "local" ? 3000 : 80
    const origin = env === "local" ? 'http://localhost:3000' : 'http://test.loc'
    const host = env === "local" ? 'localhost' : 'test.loc'
    const watch = env === "local" ? {usePolling: true} : {}
    return {
        https: false,
        host : true,
        hmr: { host },
        port,
        origin,
        watch
    }
}

export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: ['resources/js/app.jsx', 'resources/scss/app.scss'],
            refresh: [{
                paths: ['resources/js/**', 'resources/scss/**'],
                config: { delay: 30 }
            }],
        }),
        tsconfigPaths(),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./resources/js"),
        },
    },
    server: server(),
    build: {
        target: 'es2020'
    },
});
