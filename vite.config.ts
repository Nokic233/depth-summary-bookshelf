import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    // 本地开发使用 "/"，GitHub Pages 部署时使用仓库名
    base: process.env.GITHUB_ACTIONS ? '/depth-summary-bookshelf/' : '/',
    plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});
