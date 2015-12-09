// fis.match('*', {
//   useHash: false
// });

// fis.match('*.less', {
//   // fis-parser-less 插件进行解析
//   parser: fis.plugin('less'),
//   // .less 文件后缀构建后被改成 .css 文件
//   rExt: '.css'
// })


// fis.match('::packager', {
//   postpackager: fis.plugin('loader', {
//     //allInOne: true
//   })
// });

// fis.match('*.{css,less}', {
//   packTo: '/static/aio.css'
// });


 

fis.match('*.less', {
  parser: fis.plugin('less'),
  rExt: '.css'
});
//源文件 不是编译后的文件
// fis.match('*.{less,css}', {
//   packTo: '/static/aio.css'
// });

fis.match('*.js', {
  packTo: '/static/aio.js'
});
