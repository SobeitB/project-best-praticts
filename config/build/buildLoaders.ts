import webpack from "webpack";

export  function buildLoaders():webpack.RuleSetRule[] {

   const cssLoader = {
      test: /\.s[ac]ss$/i,
      use: [
         "style-loader",
         "css-loader",
         "sass-loader"
      ],
      exclude: /node_modules/,
   }

   const tsLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
   }

   return [
      tsLoader,
      cssLoader
   ]
}