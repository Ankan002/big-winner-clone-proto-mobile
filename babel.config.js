module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            require.resolve("expo-router/babel"),
            [
                require.resolve("babel-plugin-module-resolver"),
                {
                    alias: {
                        constants: "./constants",
                        themes: "./themes",
                        components: "./components",
                        assets: "./assets",
                    },
                },
            ],
        ],
    };
};
