
define(['jquery','LDJ/common'],function($, c) {
        return function(){
        	var self = this;

        	// self.endpoint = 'luserver1010:48718';
        	self.endpoint = 'localhost:48718';

        	self.getXmlQueryData = function(query){
        		var action = 'GetXmlQueryData'
        		query = self._htmlEntities(query.toXml())
        		var body = '<query>{0}</query>'.format(query)
        		self._sendSoapRequest(action,body,function(){})
        	}

        	self._sendSoapRequest = function(action, body, callback){
				// get namespace
				var ns = 'http://lundalogik.se/Tangelo/'
				var actionBase = 'http://lundalogik.se/Tangelo/IDataService/'
				
				// build SOAP request
				var envelope = '<?xml version="1.0" encoding="utf-8"?><s:Envelope xmlns:s="schemas.xmlsoap.org/soap/envelope"><s:Body><{0} xmlns="{1}">{2}</{0}></s:Body></s:Envelope>'
				.format(action,ns,body);

				console.log(envelope);

				 $.ajax({
	                url: 'http://{0}/'.format(self.endpoint),
	                type: "POST",
	                dataType: "xml",
	                //contentType:"text/xml; charset=utf-8",
	                data: envelope,
	                beforeSend: function (xhr) {
	                    xhr.setRequestHeader('SOAPAction', actionBase+action);
	                },

	                success: function (data) {
	                    console.log("webmethod call success");
	                },
	                error: function (err) {
	                    console.log("webmethod call failed");
	                }

	            });
			}

			self._htmlEntities = function (s) {
				return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
			}
        	
        }
});