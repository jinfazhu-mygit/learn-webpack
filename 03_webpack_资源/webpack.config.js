const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
    // assetModuleFilename: "img/[name]_[hash:6][ext]"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      // {
      //   test: /\.(jpg|png|gif|svg)$/,
      //   loader: 'file-loader',
      //   options: {
      //     // outputPath: 'img',
      //     name: "img/[name]_[hash:6].[ext]"
      //   },
      //   // 当在 webpack 5 中使用旧的 assets loader（如 file-loader/url-loader/raw-loader 等）和 asset 模块时，
      //   // 你可能想停止当前 asset 模块的处理，并再次启动处理，这可能会导致 asset 重复，
      //   // 你可以通过将 asset 模块的类型设置为 'javascript/auto' 来解决
      //   type: 'javascript/auto'
      // },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   loader: 'url-loader',
      //   options: {
      //     // outputPath: 'img',
      //     name: "img/[name]_[hash:6].[ext]",
      //     esModule: false, // 处理图片不显示 查看元素<img src="[object Module]"> 问题
      //     limit: 100 * 1024
      //   },
      //   type: 'javascript/auto'
      // },
      { // webpack5已经内置file-loader/url-loader
        test: /.(jpe?g|png|svg|gif)$/i,
        type: "asset",
        generator: {
          filename: "img/[name]_[hash:6][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024
          }
        }
      },
      {
        test: /\.(eot|ttf|woff2?)/,
        type: "asset/resource",
        generator: {
          filename: "font/[name]_[hash:6][ext]"
        }
      }
    ]
  },
  performance: { // 文件大小限制提示关闭
    hints: false
  }
}