
define(['jquery','LDJ/common','LDJ/soapClient'],function($, c, client) {
        return function(table,distinct,view,filter){
        	var self = this;

        	self.table = table;
			self.view = view;
			self.filter = filter;
			self.distinct = distinct;
		


			self.toXml = function(){
				var xml = xml = '<query distinct="{0}">\n<tables>\n\t<table>{1}</table>\n</tables>\n{2}\n{3}\n</query>'
				.format(self.distinct,self.table,self.view.toXml(),self.filter.toXml());

				return xml;	
			}

			self.send = function(){
				(new client()).getXmlQueryData(self);
			}


    }
});