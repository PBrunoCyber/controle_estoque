module.exports = {
  presets: ["module:@react-native/babel-preset", "nativewind/babel"],
  plugins: [
    "react-native-reanimated/plugin", // This must be at the bottom of the plugins array
  ],
};
