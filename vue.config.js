module.exports = {
  devServer: {
    // port: 8080,
    open: true
  },
  css: {
    loaderOptions: {
      scss: {
        // 1: data: `@import "./src/styles/main.scss";`
        // 2: prependData: `@import "./src/styles/main.scss";`
        // 3: additionalData: `@import "./src/styles/main.scss";`
        //三种那种可以选哪种
        prependData: `@import "@/assets/scss/_varlable.scss";`
      }
    }
  },
  // 基本路径,相对路径
  publicPath: "./",
  // 输出文件目录
  outputDir: process.env.outputDir
};
