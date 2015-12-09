fis.set('new date', Date.now());

// 配置配置文件，注意，清空所有的配置，只留下以下代码即可。
fis.match('**/*.{png,js,css}', {
  release: '/static/$0',
   query: '?=t' + fis.get('new date')

});

fis.match('**/*.js', {
  useHash: true


});

fis.match('**/*.css', {
  useHash: false
}); 
 

// 清除其他配置，只保留如下配置
fis.match('**/*.js', {
  // fis-optimizer-uglify-js 插件进行压缩，已内置
  optimizer: fis.plugin('uglify-js')
});

fis.match('**/*.css', {
  // fis-optimizer-clean-css 插件进行压缩，已内置
  optimizer: fis.plugin('clean-css')
  
});

fis.match('**/*.png', {
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  optimizer: fis.plugin('png-compressor')
});

// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
  spriter: fis.plugin('csssprites')
})

// 对 CSS 进行图片合并
fis.match('**/*.css', {
  // 给匹配到的文件分配属性 `useSprite`
  useSprite: true
});


fis.media('debug').match('*.{js,css,png}', {
  useHash: false,
  useSprite: false,
  optimizer: null
})

// fis.match('*', {
//   useHash: false
// }); 
// fis.media('prod').match('*.js', {
//   optimizer: fis.plugin('uglify-js')
// });

// fis.match('::packager', {
//   spriter: fis.plugin('csssprites')
// });

// fis.match('*', {
//   useHash: false
// });

// fis.match('*.js', {
//   optimizer: fis.plugin('uglify-js')
// });

// fis.match('*.css', {
//   useSprite: true,
//   optimizer: fis.plugin('clean-css')
// });

// fis.match('*.png', {
//   optimizer: fis.plugin('png-compressor')
// });