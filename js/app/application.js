define(['knockout','app/vm'], function(ko,viewModel) {
    return {

        init : function(){
        	
        	console.log("Init");
        	var vm = new viewModel();
        	vm.getData();
    		ko.applyBindings(vm);
		}
    };
});