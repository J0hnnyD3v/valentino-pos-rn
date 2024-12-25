const plugin = require("tailwindcss");

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            "@assets": "./assets",
            "@components": "./src/components",
            "@constants": "./src/constants",
            "@hooks": "./src/hooks",
            "@stores": "./src/stores",
          },
        },
      ],
    ],
  };
};
