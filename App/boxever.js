var _boxeverq = _boxeverq || [];

window._boxever_settings = {"client_key":"xxxxxxxxxxxxxxxxxxxxxxx","target":"https://api.boxever.com/v1.2","cookie_domain":"","web_flow_target":"https://d35vb5cccm4xzp.cloudfront.net","javascriptLibraryVersion":"1.4.3","pointOfSale":"xxxxxxxxxxxxxx.com"};
	
// Import the Boxever library asynchronously 
(function() {
	 var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true;  
	 s.src = 'https://d1mj578wat5n4o.cloudfront.net/boxever-1.4.8.min.js';
	 var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();


/* custom functions */
function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }
	
	if (/iPad/i.test(userAgent)) {
        return "iPad";
    }
	
	if (/iPhone/i.test(userAgent)) {
        return "iPhone";
    }

    return "WEB";
}

window.onload = function(){
	
	_boxeverq.push(function() {
		var viewEvent = {
			"browser_id": Boxever.getID(),
			"channel": getMobileOperatingSystem(),
			"type": "VIEW",
			"language": "EN",
			"currency": "EUR",
			"page": "home",
			"pos": window._boxever_settings.pointOfSale,
			"ext":{
				"userDevice":getMobileOperatingSystem()
			}
		};
		
		//Add UTM params
		viewEvent = Boxever.addUTMParams(viewEvent);
		console.log(viewEvent);
		Boxever.eventCreate(viewEvent, function(data){console.log(data);}, 'json');
	});
};