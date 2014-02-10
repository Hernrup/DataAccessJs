requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        'app': '../app',
        'knockout':'knockout-3.0.0'
    },
});

// // Start the main app logic.
// requirejs(['knockout-3.0.0.js','app/example'],function(ko,example) {
    
// });

require(['knockout', 'app/vm', 'domReady!'], function(ko, vm) {
    //console.log("Startup");
    console.log(vm);
    ko.applyBindings(new vm());
});