exports.cssLoaders = function (options) {
   return {
     // ...
     scss: generateLoaders(['css', 'sass?data=@import "~src/styles/app";']), // Make custom SASS available to all components
     // ...
   }
 }