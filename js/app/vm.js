define(['knockout','LDJ/view','LDJ/filter','LDJ/query'], function(ko,view,filter,query) {
    return function vm() {
        
        var self = this

        self.getData = function(){
        	
        	console.log("FetchData")

			var qView = new view()
			qView.add('idrace')
			qView.add('name','asc',1)
			qView.add('length')
			qView.add('startdate')
			qView.add('enddate')

			var qFilter = new filter()
			qFilter.add('field','startdate','>','string','2014-01-01')

			var qQuery = new query('company', 0, qView, qFilter)
			//console.log(qQuery.toXml())

			qQuery.send(self.successCallback,self.failureCallback)

		}

		self.successCallback = function(data){
			console.log('success');
			console.log(data);
		}
		self.failureCallback = function(){
			console.log('failure');
		}
    };
});