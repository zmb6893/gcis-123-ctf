(function($){
    window.SemanticFallback = $(window.jQuery);
})(function($){

	var fallbackObject = new Object();

	// browser fallback determination for semantic in mobile browsers
	function getAndroidVersion(ua) {
	    ua = (ua || navigator.userAgent).toLowerCase(); 
	    var match = ua.match(/android\s([0-9\.]*)/);
	    return match ? match[1] : false;
	};
	// for below andro 4.4
	function isMobileCompatible(ua){
		ua = (ua || navigator.userAgent).toLowerCase();
		var isStock = ua.match(/version\/([0-9\.]*)/);
		var isChrome = ua.match(/chrome\/([0-9\.]*)/);
		var isFirefox = ua.match(/firefox\/([0-9\.]*)/);

		return !isStock || isChrome || isFirefox;
	};

	var support = {
		isSupported : !(navigator.userAgent.indexOf('OPR') != -1 		||
						navigator.userAgent.indexOf('UCBrowser') != -1 	||
						(parseFloat(getAndroidVersion()) < 4.4 && !isMobileCompatible()))
	}
 
    fallbackObject.support = support;
 	return fallbackObject;
});