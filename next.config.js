const withPWA = require('next-pwa');

const EXPORT_TO_GH_PAGES = true;
const GH_PAGES_REPO_NAME = 'polyrhythm3'
const basePath = process.env.NODE_ENV === 'production' && EXPORT_TO_GH_PAGES ? `/${GH_PAGES_REPO_NAME}` : '';

module.exports = withPWA({
    pwa: {
        dest: 'public'
    },
    basePath,
    assetPrefix: `${basePath}/`,
});