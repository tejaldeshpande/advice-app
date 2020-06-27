var path = require('path');

module.exports = {
  
  publicPath: '',

  chainWebpack: config => {

  //this path is specific to my project

  config.resolve.alias.set('sass', path.resolve('src/sass'));

  config.resolve.alias.set('#', path.resolve('public/'));

 },

 

 pluginOptions: {

  cordovaPath: 'src-cordova'

 }

};