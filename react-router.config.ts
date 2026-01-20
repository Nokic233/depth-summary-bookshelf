import type { Config } from '@react-router/dev/config';

export default {
    // Config options...
    // Server-side render by default, to enable SPA mode set this to `false`
    ssr: false,
    // GitHub Pages 部署需要设置 basename
    basename: process.env.GITHUB_ACTIONS ? '/depth-summary-bookshelf' : '/',
} satisfies Config;
