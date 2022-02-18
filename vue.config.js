module.exports = {
  publicPath: "./",
  outputDir: "docs/",

  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/sass/_mixin.scss";
        `,
      },
    },
  },
};
