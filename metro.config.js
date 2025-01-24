const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = mergeConfig(getDefaultConfig(__dirname), {
  /* your config */
  server: {
    port: 8081,
  },
});

module.exports = withNativeWind(config, { input: "./global.css" });
