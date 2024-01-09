module.exports = {
  resolver: {
    sourceExts: ["jsx", "js", "tsx", "ts"], // Add any other extensions you're using
  },
  transformer: {
    assetPlugins: ["expo-asset/tools/hashAssetFiles"],
  },
  server: {
    // Remove the incorrect use of enhanceMiddleware
    // enhanceMiddleware: (middleware) => {
    //   middleware.use((req, res, next) => {
    //     res.setHeader('Access-Control-Allow-Origin', '*');
    //     next();
    //   });
    // },
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
