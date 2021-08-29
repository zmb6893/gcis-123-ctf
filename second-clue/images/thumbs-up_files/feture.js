$(function() { 
	$("img.lazy").lazyload();
 
		 
	$(".menu-nav-btn").click(function(){
		$(".menu-nav-list").toggle();
		return false;  
	});
	 
	$(document).bind("click", function () {
  		if ($('.menu-nav-list').css("display") == "block") {
  			$('.menu-nav-list').hide();
  		}
  	});

	$(".pdt-down-chose").click(function(){
		$(".dialog-box").show();
	});
	$(".download-table tr").click(function(){
		$(this).addClass("download-active").siblings("tr").removeClass("download-active");
		$(this).find("input[type=radio]").attr("checked","checked");
	});
	$(".dialog-box-close,.dialog-box-gray").click(function(){
		$(this).parents(".dialog-box").hide();
	});

	$(".contact-btn").click(function(){
		$(".pdt-dialog-box").show();
	});
	$(".pdt-btn-close,.pdt-dialog-box-gray").click(function() {
		$(this).parents(".pdt-dialog-box").hide();
	})
});
function setCookie(name, value, time) {
	var strsec = getsec(time);
	var exp = new Date();
	exp.setTime(exp.getTime() + strsec * 1);
	document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/"
}
function getsec(str) {
	var str1 = str.substring(1, str.length) * 1;
	var str2 = str.substring(0, 1);
	if (str2 == "s") {
		return str1 * 1000
	} else if (str2 == "h") {
		return str1 * 60 * 60 * 1000
	} else if (str2 == "d") {
		return str1 * 24 * 60 * 60 * 1000
	}
}
function getCookies(name) {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if (arr = document.cookie.match(reg)) return unescape(arr[2]);
	else return null
}
 
 