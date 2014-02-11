requirejs.config({
  
    baseUrl: 'js/lib',

    paths: {
        'app': '../app',
        'knockout':'knockout-3.0.0',
        'jquery': 'jquery-2.1.0.min'
    },

    urlArgs: "v=" +  (new Date()).getTime(),

});


require(['knockout', 'app/application', 'domReady'], function(ko, appl, domReady) {
    console.log("Startup");
    appl.init();
    
});