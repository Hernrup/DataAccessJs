
define(function() {
        return function(){
        	var self = this;

        	self.items = [];
			
			self.add = function(type1,val1,operator,type2,val2) {
				
				self.items.push({
					type1 : type1,
					val1 : val1,
					operator : operator,
					type2 : type2,
					val2 : val2,
				})

				return self; 
			}
			
			self.toXml = function(){
				var xml = "";

				$(self.items).each(function(index, value){
					xml = xml + '\t<condition operator="{4}">\n\t\t<exp type="{0}">{1}</exp>\n\t\t<exp type="{2}">{3}</exp>\n\t</condition>\n'
					.format(value.type1,value.val1,value.type2,value.val2,value.operator);
				})
				
				xml = '<conditions>\n{0}</conditions>'.format(xml);

				return xml;	
			}
        }
    }
);