 

fis.match('*.js', {
	 useHash: true,
  isMod: true
});

fis.match('/modules/seajs/sea.js', {
  isMod: false
});

fis.hook('cmd', {

  baseUrl: './modules/',

  paths: {
    "jquery": "jquery/jquery.js" 
  }
});



fis.match('::package', {
  postpackager: fis.plugin('loader', {})
});