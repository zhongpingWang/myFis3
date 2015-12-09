seajs.config({
    base: '/',  
    alias: { 
      
         'jquery': 'modules/jquery/jquery.js'
    },
    map: [
         [/^(.*\.(?:css|js|htm))(\?.*)?$/i, '$1?2015102202']
    ]
});

