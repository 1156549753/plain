const { override, fixBabelImports, addLessLoader, addWebpackAlias, addDecoratorsLegacy } = require('customize-cra');
const path = require('path');
const { config } = require('process');
module.exports = override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
   addLessLoader({
      javascriptEnabled: true,
      modifyVars: { '@primary-color': '#1DA57A' },
    }),
    setWebpackPublicPath(),
   addWebpackAlias({
     ['@']: path.join(__dirname,'./src')
    }),
    addDecoratorsLegacy(), 
);