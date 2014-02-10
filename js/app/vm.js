define(['knockout'], function(ko) {
    return function vm() {
        
        var self = this;

        self.getMyData = function(){
        	alert("Yeah");
        	console.log("Im a view model click!");
			// var view = new view();
			// view.add('idcompany','asc',1) //sortorder, sortindex
			// view.add('responsible.name') //sortorder, sortindex

			// var filter = new filter();
			// filter.add('field','city','=','string','lund') //type,val,operator,type,val

			// var query = new Query('company',view,filter);

			// query.send(successCallback,failureCallback);

		}
    };
});