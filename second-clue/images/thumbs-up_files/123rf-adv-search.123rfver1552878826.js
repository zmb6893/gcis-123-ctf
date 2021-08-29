var SEMANTIC_SUPPORTED = SemanticFallback.support.isSupported;

// color element in jquery
function switchColor(colorElement){
	var colorNum = parseInt(colorElement.attr('data-color')) - 1;
	var colorClass = colorElement.attr('data-clrclass');

	if(colorNum < 0){
		colorNum = 0;
	}
	if(colorNum > 38){
		colorNum = "";
	}

	if ( jQuery('.colorpal .colorset, .colorpal-sidebar .colorset').filter("[data-color="+parseInt(colorElement.attr('data-color'))+"]").hasClass('selected') ) {
		jQuery('.colorpal .colorset, .colorpal-sidebar .colorset').filter("[data-color="+parseInt(colorElement.attr('data-color'))+"]").removeClass('selected');
  	} else {
		if ( jQuery('.colorpal .colorset.selected').size() < 3 || jQuery('.colorpal-sidebar .colorset.selected').size() < 3 ) {
			jQuery("input#colorid").val(colorNum);
			jQuery(".colorset."+colorClass).addClass('selected');
		}
	}
	var multiple_colors = [];
	jQuery('.colorpal .colorset.selected').each(function(){
		multiple_colors.push(jQuery(this).attr('data-color'));
	});

	//multicolor
	if ( jQuery('.colorpal .colorset.selected').size() == 3 || jQuery('.colorpal-sidebar .colorset.selected').size() == 3 ) {
		if(!jQuery('.colorpal, .colorpal-sidebar').hasClass('active')){
			jQuery('.colorpal, .colorpal-sidebar').addClass('active');
		}
	} else {
		jQuery('.colorpal, .colorpal-sidebar').removeClass('active');
	}

	// insert hidden param for search
	// jQuery("#colorvalue").val(colorClass);
	// jQuery("#colorvalueid").val(colorNum+1);
	jQuery("input#mc").val(multiple_colors.join(','));
	// insertHiddenParam('color', '8', colorNum, 1, 'colorid');

}

function showRefineBtnAdv(showWhich, valDiv, newDivVal){

	$('input'+showWhich).innerHTML = '<input type="hidden" name="'+valDiv+'" value="'+newDivVal+'" id="'+valDiv+"a"+showWhich+'">';
	//$('refine'+showWhich).innerHTML = '<div style="text-align:right;margin-top:5px;margin-bottom:-20px;cursor:pointer;"><a href="javascript:void(0);" onclick="document.getElementById(\'searchform2\').submit();" style="color:#599E2F;">'+refinelang+'</a></div>';
}

function insertHiddenParam(inputnm,num,valSel,checkbox,custom){
	if(checkbox==1){
		var chkboxNumval = (custom!=null)?$(custom).value:$(inputnm+"a"+num).value;

		if(($(inputnm+"n"+num)== null) == true){
			$("filterDivHidden").insert("<input type=\"hidden\" id=\""+inputnm+"n"+num+"\" name=\""+inputnm+"\" value=\""+chkboxNumval+"\"/>");
		}else $(inputnm+"n"+num).value = chkboxNumval;

	}else{
		if($(inputnm+num)== null){
			$("filterDivHidden").insert("<input type=\"hidden\" id=\""+inputnm+num+"\" name=\""+inputnm+"\" value=\""+valSel+"\"/>");
		}else $(inputnm+num).value = valSel;
	}
}
function remember_cookie(name, value) {
    // remember items per page
    var futdate = new Date();
    var expdate = futdate.getTime();
    expdate += 14 * 24 * 3600 * 1000 // expires in 14 days (milliseconds)
    futdate.setTime(expdate);

    //alert(getCookie(name) + ' - ' + value);
    setCookie(name, value, futdate, '/');
    //alert(getCookie(name) + ' - ' + value);
}

function advSearchReset(searchopts){
	var paramSrchLang = '';
	var paramSrchWord = '';
	var paramSrchTword = '';
	var paramSrchTlang = '';
	var srchImgT = '0';

	if($("srchLang2")!=null){
		var srchLang = $("srchLang2").value;
		paramSrchLang = "&srch_lang="+srchLang;
	}
	if($("searchtext")!=null){
		var srchWord = $("searchtext").value;
		paramSrchWord = "word="+encodeURIComponent(srchWord);
	}
	if($("transWord")!=null){
		var srchTword= $("transWord").value;
		paramSrchTword = "&t_word="+srchTword;
	}
	if($("t_lang")!= null){
		var srchTlang= $("t_lang").value;
	 	paramSrchTlang = "&t_lang="+srchTlang;
	}

	if($("imgtype1").checked){
		srchImgT = '1';
	}else if($("imgtype2").checked){
		srchImgT = '2';
	}else if($("imgtype6")!=null){
		if($("imgtype6").checked){
			srchImgT = '6';
		}
	}else{
		srchImgT = '0';
	}

	if(searchopts == 'search_evo') {
		paramSrchEVO = "&searchopts=search_evo";
		window.location = "/search.php?imgtype="+srchImgT+"&"+paramSrchWord+paramSrchTword+paramSrchTlang+paramSrchLang+paramSrchEVO;
	} else {
		window.location = "/search.php?imgtype="+srchImgT+"&"+paramSrchWord+paramSrchTword+paramSrchTlang+paramSrchLang;
	}
}

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}

function setUrlParameter(url, paramName, paramValue)
{
    var hash = location.hash;
    url = url.replace(hash, '');
    paramValue = String(paramValue);
    if (url.indexOf(paramName + "=") >= 0)
    {
        var prefix = url.substring(0, url.indexOf(paramName));
        var suffix = url.substring(url.indexOf(paramName));
        suffix = suffix.substring(suffix.indexOf("=") + 1);
        suffix = (suffix.indexOf("&") >= 0) ? suffix.substring(suffix.indexOf("&")) : "";
        if(paramValue || paramValue != '0') {
        	url = prefix + paramName + "=" + paramValue + suffix;
        } else {
        	prefix = prefix.substring(0, prefix.length - 1);
        	url = prefix + suffix;
        }
    }
    else
    {
    	if(paramValue != '' || paramValue != '0') {
		    if (url.indexOf("?") < 0)
		        url += "?" + paramName + "=" + paramValue;
		    else
		        url += "&" + paramName + "=" + paramValue;
		}
	}
    return url + hash;
}

function removeParam(key, sourceURL) {
    var rtn = sourceURL.split("?")[0],
        param,
        params_arr = [],
        queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";
    if (queryString !== "") {
        params_arr = queryString.split("&");
        for (var i = params_arr.length - 1; i >= 0; i -= 1) {
            param = params_arr[i].split("=")[0];
            if (param === key) {
                params_arr.splice(i, 1);
            }
        }
        rtn = rtn + "?" + params_arr.join("&");
    }
    return rtn;
}

function filter_search() {
    var values = {};
	jQuery.each(jQuery('#searchform_adv').serializeArray(), function(i, field) {
	    values[field.name] = field.value;
	});

    // values.searchopts = "";


    return false;
}

// event listeners
jQuery(document).on("ready", function(){

	function resetMoreDropdowns(){
		if (SEMANTIC_SUPPORTED) {
			jQuery(".ui.dropdown.more-filter").each(function(){
				var selectedVal = jQuery(this).dropdown('get value');
				jQuery(this).dropdown('set selected', selectedVal);
			});
			jQuery(".ui.dropdown.sidebar-more-filter").each(function(){
				var selectedVal = jQuery(this).dropdown('get value');
				jQuery(this).dropdown('set selected', selectedVal);
			});
		}
	}

	// display loading icon || note: element in jquery
	function displayLoadingFilter(element){
		var icon = element.find('i.spinner.loading.icon');
		icon.removeClass('hidden');
	}

	// reset more filter form
	function resetMoreFilter(){
		// reset color
		// jQuery(".initial.colorset").each(function(){
		// 	jQuery(this).trigger('click');
		// });
		jQuery(".more-form").form('reset');
		jQuery(".ui.form.sidebar-more-form").form('reset');
		resetMoreDropdowns();
	}

	// dropdown
	if (SEMANTIC_SUPPORTED) { // special handler for opera mini
		jQuery(".ui.dropdown.more-filter").dropdown({
			placeholder: false
		});
		jQuery(".ui.dropdown.sidebar-more-filter").dropdown({
			placeholder: false,
			onChange: function(value){
				var dataName = jQuery(this).attr('data-name');
				jQuery("select[name="+dataName+"]").closest('.ui.dropdown.more-filter').dropdown('set selected', value);
			}
		});
	}
	// checkbox
	jQuery(".ui.checkbox").checkbox();
	jQuery(".ui.checkbox.sidebar-more-filter").checkbox({
		onChecked: function(){
			var dataName = jQuery(this).attr('data-name');
			jQuery('input[type=checkbox][name='+dataName+']').closest('.ui.checkbox.more-filter').checkbox('check');
		},
		onUnchecked: function(){
			var dataName = jQuery(this).attr('data-name');
			jQuery('input[type=checkbox][name='+dataName+']').closest('.ui.checkbox.more-filter').checkbox('uncheck');
		}
	});

	jQuery(".more-form").form();

	function initDispprefPopup(){
		jQuery(".pop-disppref").popup({
			on: 'click',
			position: 'bottom right',
			lastResort: 'bottom right',
			exclusive: true,
			inline: true,
			popup: jQuery('.ui.popup.popup-disppref'),
			hoverable: false,
			closable: true,
			observeChanges: false,
			distanceAway: -5
		});
	}

	function initAdvSearchPopups(){
		jQuery(".pop-sortfilter").each(function(){
			jQuery(this).popup({
				on: 'click',
				exclusive: true,
				inline: true,
				popup: jQuery(this).siblings('.ui.popup'),
				position: 'bottom left',
				closable: true,
				lastResort: 'bottom left',
				distanceAway: -5,
				observeChanges: false,
				onHidden: function(){
					resetMoreFilter();
				}
			});
		});
	}
	// firstInit
	initDispprefPopup();
	initAdvSearchPopups();

	jQuery(".pop-sortfilter").on('click', function(){
		jQuery(this).popup('show');
	});

	jQuery(".order-option").on('click', function(e){
		// e.preventDefault();
		displayLoadingFilter(jQuery(this));
		var orderOpt = jQuery(this).attr('data-order');
		orderOpt = parseInt(orderOpt);
		switchOrderTab(orderOpt);
	});

	// img type filter > extension to general_v36.js
	jQuery(".filter-imgtype.loading-click").on('click', function(e){
		displayLoadingFilter(jQuery(this));
		var imgtype = parseInt(jQuery(this).attr('data-imgtype'));

		var params = window.urlRequest;

		switch(imgtype) {
			case 1 : urlimgtype = stockimglang;
				params['imgtype'] = imgtype;
				break;
			case 2 :
				urlimgtype = stockvectlang;
				delete params['bokeh']; //disable bokeh for vector
				delete params['imgtype'];
				break;
			default : urlimgtype = stockimglang;
				delete params['imgtype'];
				break;
		}

		word = window.location.pathname.split('/')[2]
		word = word.replace('.html', '');
		params['word'] = word.replace(" ", "_");

		var url = site_https + "/" + urlimgtype + "/" + params['word'] + ".html";

		delete params['word'];
		delete params['sti'];
		delete params['start'];

		var sti = getUrlParameter('sti');
		if(sti != '') {
			params['sti'] = sti;
		}

		var paramStr = jQuery.param(params);

		url = url + "?" + paramStr;

		window.location.href = url;
	});

	// orientation filter
	jQuery(".filter-orientation").on('click', function(e){
		displayLoadingFilter(jQuery(this));
		var cko = jQuery(this).attr('data-cko');

		var params = window.urlRequest;
		params['cko'] = cko;

		switch(params['imgtype']) {
			case 1 : urlimgtype = stockimglang;
				break;
			case 2 : urlimgtype = stockvectlang
				break;
			default : urlimgtype = stockimglang
				break;
		}

		word = window.location.pathname.split('/')[2]
		word = word.replace('.html', '');
		params['word'] = word.replace(" ", "_");
		var url = site_https + "/" + urlimgtype + "/" + params['word'] + ".html";

		delete params['word'];
		delete params['sti'];
		delete params['start'];

		var sti = getUrlParameter('sti');
		if(sti != '') {
			params['sti'] = sti;
		}

		var paramStr = jQuery.param(params);

		url = url + "?" + paramStr;

		window.location.href = url;
	});

	// style filter
	jQuery("input[data-onchange=submit]").on('change', function(e){
		jQuery(this).closest('.ui.popup').find('.ui.checkbox').addClass('disabled');
		jQuery('#searchform_adv').submit();
	});

	// safesearch filter
	jQuery("input[name=safe_search]").on('change', function(e){

		var is_checked = jQuery(this).is(":checked");
		if (is_checked) {
			remember_cookie('safesrch', '1');
		} else {
			remember_cookie('safesrch', '0');
		}

		jQuery('#searchform_adv').submit();
		jQuery(this).prop('disabled', true);
	});
	// safesearch filter mobile
	jQuery("input[data-name='safe_search']").on('change', function(e){

		var is_checked = jQuery(this).is(":checked");
		if (is_checked) {
			remember_cookie('safesrch', '1');
		} else {
			remember_cookie('safesrch', '0');
		}
		jQuery("input[name=safe_search]").prop('checked', is_checked);
		jQuery('#searchform_adv').submit();
		jQuery(this).prop('disabled', true);
	});

	// resolution filter
	jQuery(".filter-resolution").on('click', function(e){
		displayLoadingFilter(jQuery(this));
		var res = jQuery(this).attr('data-resolution');

		if(res == 0){
			setCookie('srchsize', '');
			showRefineBtnAdv('12', 'srchsize', '');
		} else {
			setCookie('srchsize', res);
			showRefineBtnAdv('12', 'srchsize', res);
		}
		document.getElementById('searchform_adv').submit();
	});

	// fps filter
	jQuery(".filter-fps").on('click', function(e){
		displayLoadingFilter(jQuery(this));
		var fps = jQuery(this).attr('data-fps');

		if(fps == 0){
			setCookie('searchfps', '');
			showRefineBtnAdv('13', 'searchfps', '');
		} else {
			setCookie('searchfps', fps);
			showRefineBtnAdv('13', 'searchfps', fps);
		}
		document.getElementById('searchform_adv').submit();
	});

	// reset search filter  (Removed oct18)
	// jQuery(".adv-reset").on('click', function(e){
	// 	var imgtype = jQuery( "input[name='imgtype']" ).val();
	// 	var searchopts = jQuery( "input[name='searchopts']" ).val();

	// 	if(imgtype != 6) {
	// 		var url = window.location.href
	// 		url = url.split('?')[0];

	// 		if(searchopts == 'search_evo') {
	// 			url = setUrlParameter(url, "searchopts", searchopts);
	// 		}

	// 		var ch = getUrlParameter('ch');
	// 		if ( ch ){
	// 			url = setUrlParameter(url, "ch", ch);
	// 		}

	// 		var sti = getUrlParameter('sti');
	// 		if(sti != '') {
	// 			url = setUrlParameter(url, "sti", sti);
	// 		}

	// 		window.location.href = url;
	// 	} else {
	// 		 advSearchReset(advSearchValues.searchopts);
	// 	}
	// });

	jQuery('#searchform_adv').on('submit', function (e) {
		e.preventDefault();
		e.stopPropagation();

		var formdata = jQuery("#searchform_adv").serializeArray();
		var exclude = jQuery('form#searchform_adv').find("input[name=exclude]").val();
		if (jQuery(window).width() <= 991) {
			var exclude = jQuery('.ui.form.sidebar-more-form .row .field').find("input[name=exclude]").val();
		}
		var cutout = jQuery("input[name='isolated']").is(":checked") ? 1 : 0;
		var safe_search = jQuery("input[name='safe_search']").is(":checked") ? "on" : "off";
		var bokeh = jQuery("input[name='bokeh']").is(":checked") ? 1 : 0;
		var vivid = jQuery("input[name='vivid']").is(":checked") ? 1 : 0;
		var pattern = jQuery("input[name='pattern']").is(":checked") ? 1 : 0;
		var params = window.urlRequest;

		switch(params['imgtype']) {
			case 1 : urlimgtype = stockimglang;
				break;
			case 2 : urlimgtype = stockvectlang
				break;
			default : urlimgtype = stockimglang
				break;
		}

 		word = window.location.pathname.split('/')[2]
		word = word.replace('.html', '');
		params['word'] = word.replace(/ /g, "_");
		var url = site_https + "/" + urlimgtype + "/" + params['word'] + ".html";

		for (var k in formdata) {
		    if (formdata.hasOwnProperty(k)) {
		    	params[formdata[k]['name']] = formdata[k]['value'];
		    }
		}

		// var exclude_arr = ['num_ppl', 'imgtype', 'cko', 'isolated', 'safe_search', 'color'];
		var exclude_arr = ['cko', 'color' ];

		params['exclude'] 	= exclude;
		params['isolated'] 	= cutout;
		params['safe_search'] 	= safe_search;
		params['bokeh'] 	= bokeh;
		params['vivid'] 	= vivid;
		params['pattern']	= pattern

		for (var key in params) {
     		if(params[key] == "" || (key !="num_ppl" && params[key] == "0") || (key == "safe_search" && params[key].toString() == "on") ) {
     			if(exclude_arr.indexOf(key) == -1) {
     				delete params[key];
     			}
     		}
		}

		delete params['word'];
		delete params['sti'];
		delete params['start'];

		var sti = getUrlParameter('sti');
		if(sti != '') {
			params['sti'] = sti;
		}

		var paramStr = jQuery.param(params);

		url = url + "?" + paramStr;

		window.location.href = url;

		return false;
	});

	// MOBILE
	jQuery(".ui.sidebar.sidebar-filters").sidebar({
		silent: true,
		scrollLock: true,
		closable: false,
		transition: 'overlay',
		mobileTransition: 'overlay',
		onChange: function(){
			jQuery('html').toggleClass('x-locked');
			jQuery('.pushable').toggleClass('locked');
			jQuery('.pusher').toggleClass('locked');
		},
		onHide: function(){
			jQuery(".ui.sidebar.sidebar-filters").hide();
			resetMoreFilter();
			jQuery('.ui.accordion').accordion('close',0);
			jQuery('.ui.accordion > .title').find('i.icon').removeClass();
			jQuery('.ui.accordion > .title').find('i').addClass('dropdown icon');
		},
		onHidden: function(){
		}
	});
	jQuery('.ui.sidebar.sidebar-filters ~ .pusher').on('click', function(e){
		if(jQuery(".ui.sidebar.sidebar-filters").hasClass('visible')) {
			jQuery(".ui.sidebar.sidebar-filters").sidebar('hide');
		}
	});
	jQuery(".toggle-filters").on('click', function(e){
		jQuery(".ui.sidebar.sidebar-filters").sidebar('show');
		initDispprefPopup();
		initAdvSearchPopups();
		jQuery(".ui.form.sidebar-more-form").form();
		jQuery('.ui.accordion').accordion();
	});
	// fix for dropdown icon not supported in mobile browsers
	jQuery('.ui.accordion > .title').on('click', function(e){
		if(jQuery(this).hasClass('active')){
			jQuery(this).find('i.caret.down.icon').removeClass('caret down');
			jQuery(this).find('i.icon').addClass('dropdown');
		} else {
			jQuery(this).addClass('active');
			jQuery(this).find('i.dropdown.icon').removeClass('dropdown');
			jQuery(this).find('i.icon').addClass('caret down');
		}
	});
	// style filter from sidebar
	jQuery(".ui.sidebar input[type=checkbox].filter-style").on('change', function(e){
		// disable the checkboxes
		jQuery(this).closest('.content').find('.ui.checkbox').addClass('disabled');
		var name = jQuery(this).data('name');
		var $actualInput = jQuery("input[name="+name+"]");
		if(jQuery(this).is(':checked')){
			$actualInput.prop('checked', true);
		} else {
			$actualInput.prop('checked', false);
		}
		jQuery('#searchform_adv').submit();
	});
	jQuery('.sidebar-filters .sidebar-more-form select').on('change', function(e){
		var dataName = jQuery(this).data('name');
		var value = jQuery(this).val();
		jQuery("#searchform_adv select[name="+dataName+"]").val(value);
	});
	// fix for tap events twice on default android browser
	jQuery('.sidebar-filters .ui.dropdown').on('click', function(e){
		e.stopImmediatePropagation();
	});
	// jQuery('.ui.sidebar.sidebar-filters').find("input[name=exclude]").on('change', function(e){
	// 	var value = jQuery(this).val();
	// 	console.log('asd');
	// 	// jQuery('form#searchform_adv').find("input[name=exclude]").val(value);
	// });
	jQuery(".close-sidebar-filters").on('click', function(e){
		jQuery(".ui.sidebar.sidebar-filters").sidebar('hide');
	});
	jQuery(".sidebar-reset-more").on('click', function(e){
		resetMoreFilter();
	});
	jQuery(".sidebar-submit-more").on('click', function(e){
		jQuery('#searchform_adv').submit();
	});
	// color pallete selection
	jQuery(".colorset").on('click', function(e){
		e.stopPropagation();
		switchColor(jQuery(this));
	});

	// listener for chip in search bar e.g. evo
	jQuery("#search_chip").click(function(e) {
		jQuery( "#typedisplay" ).show();
		jQuery( "#dsp_filetype" ).show();
		if(!document.getElementById('imgtype7').checked){
			jQuery( "#cam_sim" ).show();
		}
		if(jQuery("#hidden_evo_search").length > 0) {
			jQuery("#hidden_evo_search").remove();
			jQuery("form#searchform_adv").find("input[type=hidden][name=searchopts]").remove();
			// set searchopts name
			var collectionName = jQuery("form#searchform_adv").find(".collection-filter select[data-name=searchopts]").attr('data-name');
			jQuery("form#searchform_adv").find(".collection-filter select[data-name=searchopts]").attr('name', collectionName);

			jQuery('#searchtext').focus();

			jQuery( ".adv-filter-toggle" ).each(function(i, obj) {
			    var click = jQuery(obj).attr('onclick');
			    click = click.replace("search_evo", "");
			    jQuery(obj).attr('onclick', click);
			});

			jQuery("#searchform input[name='searchopts']").val('');
			jQuery( ".imgtype-filter" ).show();

			if (!SEMANTIC_SUPPORTED) { // special handler for opera/uc
				jQuery("form#searchform_adv").find(".collection-filter select[name=searchopts]").val('');
				jQuery("form#searchform_adv").find(".collection-filter select[name=searchopts]").find('option[value=search_evo]').remove();
			} else {
				jQuery("form#searchform_adv").find(".collection-filter .ui.dropdown.more-filter").dropdown('set selected', '');
				jQuery("form#searchform_adv").find(".collection-filter .ui.dropdown.more-filter").find('.item[data-value=search_evo]').remove();
				jQuery("form#searchform_adv").find(".collection-filter select[name=searchopts]").find('option[value=search_evo]').remove();
				jQuery("form#searchform_adv").find(".collection-filter .ui.dropdown.more-filter").dropdown('save defaults');
			}
			jQuery( ".collection-filter" ).show();
		}

		jQuery( "#search_chip" ).remove();

		jQuery( "#searchtext" ).val("");
		jQuery( "#fid_hidd" ).html("");
		jQuery("#searchform").attr("action", site_https + "/search.php");
		jQuery("#searchtext").attr("placeholder", "");
	});

});