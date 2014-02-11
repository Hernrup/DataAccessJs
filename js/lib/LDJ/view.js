
define(['jquery','LDJ/common'],function($) {
        return function(){
        	var self = this;

        	self.items = [];
			
			self.add = function(name, sortOrder, sortIndex) {
				
				self.items.push({
					name : name,
					sortOrder : sortOrder,
					sortIndex : sortIndex
				})

				return self; 
			}
			
			self.toXml = function(){
				var xml = "";
				$(self.items).each(function(index, value){

					xml = xml + '\t<field{1}{2}>{0}</field>\n'
					.format(
						value.name,
						value.sortOrder ? ' sortorder="{0}"'.format(value.sortOrder) : '',
						value.sortIndex ? ' sortindex="{0}"'.format(value.sortIndex) : ''
					);
				})
				
				xml = '<fields>\n{0}</fields>'.format(xml);

				return xml;	
			}
        }
    }
);