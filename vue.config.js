module.exports = {
  css: {
    loaderOptions: {
      sass: { 
        prependData: 
        `
          @import "@/assets/sass/_mixin.scss";
        `
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}