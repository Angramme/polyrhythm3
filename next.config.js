const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const basePath = "";

module.exports = withPWA({
  dest: "public",
  runtimeCaching,
})({
  basePath,
  assetPrefix: `${basePath}/`,
  webpack: (cfg) => {
    const originalEntry = cfg.entry;
    cfg.entry = async () => {
      const entries = await originalEntry();
      if (entries["main.js"])
        entries["main.js"].unshift("./client/polyfills.js");
      return entries;
    };
    return cfg;
  },
});
