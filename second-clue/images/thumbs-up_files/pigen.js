function gt(protocol, page, para)
{
	if (para)
	{
		para = "?" + para;
	}
	else
	{
		para = '';
	}

	window.location = protocol + "/" + page + para;
}


function gtx(protocol, page, para)
{
	if (para)
	{
		para = "?" + para;
	}
	else
	{
		para = '';
	}

	if(page == "stock-footage") window.location = protocol + "/" + page+"/";
	else
	window.location = protocol + "/" + page + ".php" + para;
}

if(window.location.hash)
{
	if(window.location.hash != '#_=_')
	{
		var srce = window.location.hash;
		srce = srce.substr(1);
		page_ref = document.referrer;

	 
	}
}

function setViewMode(token)
{
 
}

function jsHREF(protocol, page, para, shorten)
{
 
}

function switchPerPage(site_http,url,current,shortlong,topbtm,bypass)
{
	var itmPage = (topbtm==1)?$('selectPerPg').value:$('selectPerPg2').value;
	remember_perpage(itmPage);
	jsHREF(site_http,url,current,shortlong);
}


function show_search_popup()
{
	document.getElementById('search_popup').style.display = "";
}

function show_filetype_popup()
{
	if(document.getElementById('filetype_popup').style.display == "none")
	{
        document.getElementById('filetype_popup').style.opacity = "1";
        setTimeout(function(){
            document.getElementById('filetype_popup').style.visibility = "visible";
            document.getElementById('filetype_popup').style.display = "block";
        }, 0);
	}
	else
	{
        document.getElementById('filetype_popup').style.opacity = "0";
        setTimeout(function(){
            document.getElementById('filetype_popup').style.visibility = "hidden";
            document.getElementById('filetype_popup').style.display = "none";
        }, 250);
	}
}

function check(e)
{
	var tabopts = document.getElementById("search_popup");
	var tabopts2 = document.getElementById("filetype_popup");
	var tabopts3 = document.getElementById("prefSrchCont");
	var tabopts4 = document.getElementById("contributorInfo");
	var tabopts5 = document.getElementById("filetype_popup2");
	var tabopts6 = document.getElementById("userMenu");
	var tabopts7 = document.getElementById("dl_sub_sh");
	var tabopts8 = document.getElementById("dl_sub_dd");

	var target = (e && e.target) || (event && event.srcElement);

	if(checkParent(target))
	{
		if(tabopts!=null)
			tabopts.style.display='none';

		if(tabopts2!=null)
			tabopts2.style.display='none';

		if(tabopts3!=null)
			tabopts3.style.display='none';

		if(tabopts4!=null)
			tabopts4.style.display='none';

		if(tabopts5!=null)
			tabopts5.style.display='none';

		if(tabopts6!=null)
			tabopts6.style.display='none';

		if(tabopts7!=null)
			tabopts7.style.display='none';

		if(tabopts8!=null)
			tabopts8.style.display='none';
	}
	else
	{null;}

}
function checkParent(t)
{
	var elementParams = [
	"search_popup",
	"searchtext",
	"search_popup2",
	"searchtext2",
	"typedisplay",
	"dsp_child",
	"dsp_filetype",
	"prefSrchToggler",
	"prefSrchCont",
	"contributorInfo",
	"contributorNameInfo",
	"filetype_popup2",
	"dsp_filetype2",
	"typedisplay2",
	"dsp_user_menu",
	"dl_sub_sh",
	"shareLB",
	"downloadLB"
	];
	while(t.parentNode){
		for(var ep=0; ep < elementParams.length;ep++){
			if(t==document.getElementById(elementParams[ep])){
				return false;
			}
		}
		t=t.parentNode
	}
	return true
}

function hide_search_popup()
{
 }

function hide_filetype_popup()
{
 }
function exclusiveSelect(which)
{
 

}

//updated on 2011/03/09 to fill in imgtype box value
function fillValue(val)
{
	for(var i=0;i<filetypes.length;i++)
	{
		if(val == filetypes[i])
		{
			document.getElementById('dsp_child').innerHTML = typenames[i];
			break;
		}
		else;
	}

	document.getElementById("filetypechkbox").value = val;
	//document.searchform.imgtype.value = val;
	//document.searchform2.imgtype.value = val;
}

//clear textbox
function clearText()
{
	document.getElementById("searchtext").value = "";
}

function popupGoogleBanner(){
	var docref = document.referrer;

	if(docref!='' && (docref.indexOf('imgres')>-1 || docref.indexOf('imglanding')>-1 || docref.indexOf('image.google')>-1 || docref.indexOf('bing.com')>-1 || docref.indexOf('images.search.yahoo')>-1))
	{
		$('ggBanner').innerHTML = "<a href='/freeimages.php' style='border:none;' target='_blank'><img src='//static-cdn.123rf.com/images/freeimages.jpg' style='border:none;'></a>";
	}
}

function runDomainChecker(){
 
}

function bhChecker(){
 
}

function appendTNCcontent(){
    if(jQuery('body .content-context #reverseid').length > 0 && jQuery('.tnc-container').length > 0 ) {
            jQuery('.tnc-container').prependTo( jQuery('body .content-context'));
        }
        jQuery('.tnc-container').addClass('showTNC');

    if (jQuery($is_details_page = "1")){
    		jQuery('.tnc-container').prependTo( jQuery('body'));
    	}
    	jQuery('.tnc-container').addClass('showTNC');


    // setTimeout(function(){
     //    if(typeof jQuery('#banner_container') !== 'undefined' && jQuery('.index-page') != null){
     //        var elementBanner = jQuery('#banner_container');
     //        jQuery('body').prepend(elementBanner);
     //    }
     //    if(jQuery('body .content-context #reverseid').length > 0 && jQuery('.CYP').length > 0){
     //        jQuery('.CYP').prependTo( jQuery('body .content-context'));
     //    }
     //    jQuery('.CYP').addClass('showCYP');
     //    if (jQuery($is_details_page = "1")){
    	// 	jQuery('.CYP').prependTo( jQuery('body'));
    	// }
    	// jQuery('.CYP').addClass('showCYP');
    // }, 1000);
}

/* begin browse by category */
jQuery( document ).ready(function() {
	var browse_cat_state = 0,
		mpos_t,
		mpos_x = 0,
		mpos_y = 0,
		prev_mpos_y = 0,
		prev_mpos_x = 0;

	function activateBrowseCatLink(id){
		clearTimeout(mpos_t);

		jQuery(".gallery-ul-cat").each(function() {
			jQuery(this).css('display','none');
		});

		jQuery(".arrow-handler").each(function() {
			jQuery(this).removeClass('yellow-arrow-right');
			jQuery(this).css('display','none');
		});

		jQuery(".popup-fallback").each(function() {
			jQuery(this).css('display','none');
		});

		jQuery(".browse-cat-link").each(function() {
			jQuery(this).css('font-weight','normal');
		});
		jQuery("#"+id).css('font-weight','bold');

		unique_id = "#gallery-ul-" + id;
		jQuery(unique_id).css('display','block');

		unique_id2 = "#arrow-ul-" + id;
		jQuery(unique_id2).addClass('yellow-arrow-right');
		jQuery(unique_id2).css('display','block');

		unique_id3 = "#fallback2-ul-" + id;
		jQuery(unique_id3).css('display','block');

		jQuery('.arrow-Nav').css('display','block');
	}

	jQuery('.browse-cat').hoverIntent(function () {
		jQuery('#nav-cover').css('display','block');
		jQuery('#yellow-arrow-up').css('display','block');

		jQuery(this).find(".fallback").stop().slideToggle(function(){
			jQuery(this).is(':hidden') ? jQuery('#nav-cover').css('display','none') : 'visible';
			jQuery(this).is(':hidden') ? jQuery('#yellow-arrow-up').css('display','none') : 'visible';

			if(browse_cat_state){
				browse_cat_state = 0;
				jQuery('.arrow-Nav').css('display','none');
			}else{
				browse_cat_state = 1;
			}
		});
	});

	jQuery("#browser-link").on("mouseenter", function() {
		clearTimeout(mpos_t);
		jQuery('.gallery-ul-cat').css('display','none');
		jQuery('.arrow-handler').css('display','none');
		jQuery('.fallback2').css('display','none');
		jQuery('.arrow-Nav').css('display','none');
	});

	jQuery(".browse-cat-link").on("mouseenter", function(e){
		var id = jQuery(this).attr('id');
		mpos_x = e.pageX;
		mpos_y = e.pageY;

		if(prev_mpos_x == 0 && prev_mpos_y == 0){
			prev_mpos_x = mpos_x;
			prev_mpos_y = mpos_y;
		}else if(mpos_x <= (prev_mpos_x + 5)){
			activateBrowseCatLink(id);
		}

		prev_mpos_x = mpos_x;
		prev_mpos_y = mpos_y;
	}).on("mouseout", function(e){
	});

	jQuery(".browse-cat-link").on("mousemove", function(e){
		var id = jQuery(this).attr('id');
		mpos_x = e.pageX;
		mpos_y = e.pageY;

		if(mpos_x < prev_mpos_x){
			activateBrowseCatLink(id);
			prev_mpos_x = mpos_x;
			prev_mpos_y = mpos_y;
		}else{
			clearTimeout(mpos_t);
			mpos_t = setTimeout(function(){ activateBrowseCatLink(id); }, 120);
		}
	});

	jQuery(".fallback2, .gallery-ul-cat").on("mouseenter", function(e){
		mpos_x = 0;
		mpos_y = 0;
		prev_mpos_x = 0;
		prev_mpos_y = 0;
		clearTimeout(mpos_t);
	});

});

(function($){$.fn.hoverIntent=function(handlerIn,handlerOut,selector){var cfg={interval:100,sensitivity:6,timeout:350};if(typeof handlerIn==="object"){cfg=$.extend(cfg,handlerIn)}else{if($.isFunction(handlerOut)){cfg=$.extend(cfg,{over:handlerIn,out:handlerOut,selector:selector})}else{cfg=$.extend(cfg,{over:handlerIn,out:handlerIn,selector:handlerOut})}}var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if(Math.sqrt((pX-cX)*(pX-cX)+(pY-cY)*(pY-cY))<cfg.sensitivity){$(ob).off("mousemove.hoverIntent",track);ob.hoverIntent_s=true;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=false;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=$.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type==="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).on("mousemove.hoverIntent",track);if(!ob.hoverIntent_s){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).off("mousemove.hoverIntent",track);if(ob.hoverIntent_s){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.on({"mouseenter.hoverIntent":handleHover,"mouseleave.hoverIntent":handleHover},cfg.selector)}})(jQuery);
/* exit browse by category */

// user menu action popup
function show_user_menu(){
	var docUserMnu= document.getElementById("userMenu").style.display;
	if(docUserMnu=='none'){
		if(typeof is_loggedIn !== 'undefined' && is_loggedIn == true){
			jQuery( document ).ready(function() {
				jQuery.ajax({
					url: '/calculate_balance.php',
					type: 'post',
					contentType: "application/x-www-form-urlencoded;charset=ISO-8859-1",
					data: {noDisplay:1},
					success: function( data, textStatus, jQxhr ){
						var jsonReturnCount = jQuery.parseJSON(data);
						if(jsonReturnCount.psub != null ){
							jQuery(".newHiddenRulesForDP").css("display","block");
							jQuery('#downloadPackCount').html(jsonReturnCount.psub);
						}

						jQuery('#subsCount').html(jsonReturnCount.subs);
						jQuery('#creditsCount').html(jsonReturnCount.credits);
					},
				});
				jQuery.ajax({
					url: '/servertimenow.php',
					type: 'get',
					contentType: "application/x-www-form-urlencoded;charset=ISO-8859-1",
					data: {noDisplay:1},
					success: function( data, textStatus, jQxhr ){
						var jsonReturnTime = jQuery.parseJSON(data);
						jQuery('#serverTime').html(jsonReturnTime.serverTime);
					},
				});
				jQuery.ajax({
					url: '/myaccount/invoices_request.php',
					type: 'post',
					contentType: "application/x-www-form-urlencoded;charset=ISO-8859-1",
					data: {uid:is_UID,invoicetype:'proforma',invoice_request:'true'},
					success: function( data, textStatus, jQxhr ){
						var jsonReturn = jQuery.parseJSON(data);
						if(jsonReturn.status!=false)
						{
							var jsonReturnResult = jsonReturn.result.reverse();
							jQuery("#proforma").show();
							jQuery('#linkProformaPath').attr('onclick',"window.location.href='"+jsonReturnResult[0].encrypturl+"'");
						}
					},

				});
			});
		}
		jQuery("#userMenu").show();
	}else{
		jQuery("#userMenu").hide();
	}
}
function updateServerTime(){
	var xmlhttp;
	if (window.XMLHttpRequest){
		xmlhttp=new XMLHttpRequest();
	}else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			//var servertimeblock = "<div style='border-bottom:1px solid #e5e5e5;padding:5px 0'><div><?=LANG_CURRENT_SERVER_TIME?></div>"+xmlhttp.responseText+"<div></div></div>";
			var jsonReturnTime = jQuery.parseJSON(xmlhttp.responseText);
			document.getElementById('serverTime').innerHTML = jsonReturnTime.serverTime;
		}
	}
	xmlhttp.open("GET","/servertimenow.php?noDisplay=1",true);
	xmlhttp.send();
}

if(typeof is_ipadheader !== 'undefined' && is_ipadheader == true){
	function removeBanner(){
		document.getElementById("banner_container").style.display = "none";
		var futdate = new Date();
		var expdate = futdate.getTime();
		expdate += 86400000*30;
		futdate.setTime(expdate);
		setCookie('ipadbanner', "1", futdate, '/', "<?=COOKIES_DOMAIN;?>");
		if(document.getElementById('hdr3Nav')){
			document.getElementById('hdr3Nav').style.top = "71px";
		}
		if(document.getElementById('adv_advsearch_box')){
			document.getElementById('adv_advsearch_box').style.top = "160px";
		}
	}
}
jQuery(document).ready(function(e){
	// dismiss language selection popup
	jQuery(window).on('click', function(e){

		if(e.target != document.getElementById('lang_option_list') && !(document.getElementById('open_flag_popup') != null && jQuery.contains(document.getElementById('open_flag_popup'), e.target))){
			if(document.getElementById('lang_option_list').style.visibility != 'hidden'){
                document.getElementById('lang_option_list').style.opacity = '0';
				document.getElementById('lang_option_list').style.visibility = 'hidden';
			}
		} else {
			//event.stopPropagation();
		}
	});
	function getPhoneString(){
	 var url = "/123rf-phone-ajax.php";
		    new Ajax.Request(url, {
		        method: 'get',
		        contentType: 'text/html',
		        onComplete: function (transport) {
		            var phoneS = transport.responseText;
		            $("phoneString").innerHTML = phoneS;
		            $("phoneString2").innerHTML = phoneS;
		            var futdate = new Date();
				    var expdate = futdate.getTime();
				    expdate += 86400000;
				    futdate.setTime(expdate);
				    var currentDomain = document.location.hostname;
				    var cDomain = '.123rf.com';
				    if(currentDomain =='www.123rf.co.kr'){
				    	cDomain = '.123rf.co.kr';
				    }else if(currentDomain =='www.123rf.kr'){
				    	cDomain = '.123rf.kr';
				    }else if(currentDomain =='www.123rf.net'){
				    	cDomain = '.123rf.net';
				    }

				    setCookie('phoneStr', phoneS, futdate, '/', cDomain);

		        }
		    });
	}
	if(typeof should_getPhoneString !== 'undefined' && should_getPhoneString == true){
		if(getCookie('phoneStr')==null){
			getPhoneString();
		}else{
			jQuery("#phoneString").html(getCookie('phoneStr'));
			jQuery("#phoneString2").html(getCookie('phoneStr'));
		}
	}

	// advanced search related from footer global
	if(typeof advSrchCookie !== 'undefined'){
		if(advSrchCookie!=''){
			if(advSrchCookie=='block'){
				$('adv_advsearch_box').style.display='block';
				$('adv_content_padding').style.marginLeft='235px';
				if(parseFloat(navigator.appVersion.split("MSIE")[1])==7){
					var ppage = getCookie('perpage');
					if(ppage=='20'){
						if(typeof cont_adv_search_extra !== 'undefined' && cont_adv_search_extra == true){
							$('container-adv-srch').style.height='1000px';
						} else{
							$('container-adv-srch').style.height='700px';
						}
					}else
						$('container-adv-srch').style.height='100px';

				}else{
					if(typeof includeAdvSearch_audio !== 'undefined' && includeAdvSearch_audio == true){
						if(typeof total_result_audiolimit !== 'undefined' && total_result_audiolimit == true){
							$('container-adv-srch').style.height='1500';
						} else {
							$('container-adv-srch').style.height='';
						}
					} else {
						$('container-adv-srch').style.height='1600px';
					}
				}
				$('expand-adv-search').style.display='none';
			}else if(advSrchCookie=='none'){
				$('adv_advsearch_box').hide();
				$('adv_content_padding').style.marginLeft='60px';
				$('container-adv-srch').style.height='';
				$('expand-adv-search').style.display='block';
			}else if(advSrchCookie==null){
				$('expand-adv-search').style.display='none';
			}
			if(parseFloat(navigator.appVersion.split("MSIE")[1])==7){

			}else{
				if($('adv_advsearch_box').style.display=='block'){
					$('adv_content_padding').style.marginLeft='235px';
				}
				$('adv_content_padding').style.marginTop='-14px';
			}
		}
	}
});


// reverse search form related
jQuery( document ).ready(function() {
	jQuery( "#cam_sim" ).click(function(e) {
		jQuery('#err_msg').empty();
		jQuery( "#qbp" ).show();

		e.stopPropagation();
	});
	jQuery( "#qbx" ).click(function() {
		jQuery( "#qbp" ).hide();

	});
	jQuery( "#qbp" ).click(function(e) {
		e.stopPropagation();
	});

	jQuery("#reverseid").click(function(){
		jQuery( "#qbp" ).hide();

	});


	jQuery( "#remove_upload" ).click(function(e) {
		jQuery( "#typedisplay" ).show();
		jQuery( "#dsp_filetype" ).show();
		if(!document.getElementById('imgtype7').checked){
			jQuery( "#cam_sim" ).show();
		}
		if(jQuery("#hidden_evo_search").length > 0) {
			jQuery("#hidden_evo_search").remove();
			jQuery('#searchtext').focus();

			jQuery( ".adv-filter-toggle" ).each(function(i, obj) {
			    var click = jQuery(obj).attr('onclick');
			    click = click.replace("search_evo", "");
			    jQuery(obj).attr('onclick', click);
			});

			jQuery("#searchform input[name='searchopts']").val('');
		}

		if(jQuery("#portfolio_puid").length > 0) {
			jQuery("#portfolio_puid").remove();
			jQuery("#portfolio_mediatype").remove();
			jQuery("#portfolio_tab").remove();
		}

		jQuery( "#remove_upload" ).hide();
		jQuery( "#collection_filter" ).show();
		jQuery( "#collection_more_filter" ).show();

		// jQuery( "#adv_filter_col" ).show();

		jQuery( "#searchtext" ).val("");
		jQuery( "#fid_hidd" ).html("");
		jQuery("#searchform").attr("action", site_https + "/search.php");
		jQuery("#searchtext").attr("placeholder", "");
	});

	jQuery( "#link_upload" ).click(function() {
		jQuery( "#paste_url" ).hide();
		jQuery("#form-drag").hide();
		jQuery( "#upload_url" ).show();
		jQuery( "#link_upload" ).addClass( "qbtbha" );
		jQuery( "#link_url" ).removeClass( "qbtbha" );
		jQuery( "#link_url" ).addClass( "qbtbha_empty" );
		jQuery( "#id_url" ).val( "2" );

	});

	jQuery( "#link_url" ).click(function() {
		jQuery( "#paste_url" ).show();
		jQuery("#form-drag").hide();
		jQuery( "#upload_url" ).hide();
		jQuery( "#link_url" ).addClass( "qbtbha" );
		jQuery( "#link_upload" ).removeClass( "qbtbha" );
		jQuery( "#id_url" ).val( "1" );
	});

	//jQuery('#btn_submit').prop('disabled',true);
	//jQuery('#btn_submit2').prop('disabled',true);

	jQuery('form[id=url_form]').submit(function() {
		if(jQuery('#txt_image_url').val() != "")
		{
			return true;
		}
		else
		{
			return false;
		}

	});

	jQuery('form[id=file_form]').submit(function() {
		if(jQuery('#file_upload').val() != "")
		{
			return true;
		}
		else
		{
			return false;
		}

	});

	// imgtype filter
	jQuery('.filter-imgtype').on('click', function(e){
		var imgtype = parseInt(jQuery(this).attr('data-imgtype'));
		if(imgtype == 0){
			setCookie('imgtype', '');
		} else if(imgtype < 3) {
			setCookie('imgtype', imgtype);
		}
	});

	// mobile hamburger click event
	jQuery('button#buttonMobileHamburger').click(function() {
  		jQuery(this).toggleClass('expanded');
  		if(jQuery(this).hasClass('expanded')){
            if(typeof is_UID !== 'undefined'){
                jQuery.ajax({
    				url: '/calculate_balance.php',
    				type: 'post',
    				contentType: "application/x-www-form-urlencoded;charset=ISO-8859-1",
    				data: {noDisplay : 1},
    				success: function( data, textStatus, jQxhr ){
    					var balance = JSON.parse(data);
    					jQuery("#subsMobileMenu").html("\&nbsp\;"+balance.subs);
						if (balance.psub!=null){
							jQuery("#psubMobileMenu").html("\&nbsp\;"+balance.psub);
							jQuery(".newHiddenRulesForDP").css("display","inline-block");
						}

    					jQuery("#creditsMobileMenu").html("\&nbsp\;"+balance.credits);
    				}
    			});
    			jQuery.ajax({
    				url: '/myaccount/invoices_request.php',
    				type: 'post',
    				contentType: "application/x-www-form-urlencoded;charset=ISO-8859-1",
    				data: {uid:is_UID,invoicetype:'proforma',invoice_request:'true'},
    				success: function( data, textStatus, jQxhr ){
    					var jsonReturn = jQuery.parseJSON(data);
    					if(jsonReturn.status!=false)
    					{
    						var jsonReturnResult = jsonReturn.result.reverse();
    						jQuery("#linkProformaPathMobile").show();
    						jQuery('#linkProformaPathMobile').attr('onclick',"window.location.href='"+jsonReturnResult[0].encrypturl+"'");
    					}
    				},

    			});
            }

  		}
  	// 	jQuery("#mobileHeaderMenu").slideToggle();
	});
    try{
        jQuery('#mobileHeaderMenu').slideAndSwipe();
    }catch(err){}


    jQuery('#search_open').click(function(){
        var arrowWraper = jQuery('.arrow_search_wrapper');
        jQuery('.new-header-search').addClass('on');
        jQuery('.desktop-srchbar-pos').addClass('on');
        setTimeout(function(){
            jQuery('.new-header-search').addClass('active');
            jQuery('.desktop-srchbar-pos').addClass('active');
        }, 0);

        arrowWraper.addClass('in');
        setTimeout(function(){
            arrowWraper.addClass('open');
            arrowWraper.removeClass('in');
        }, 800);
   
    });

    jQuery(document).click(function(e){

        if(!(typeof jQuery('#search_open').get(0) !== 'undefined' && jQuery.contains(jQuery('#search_open').get(0), e.target ) && !jQuery(e.target).hasClass('arrow_search_wrapper'))){
            if(!(typeof jQuery('.new-header-search').get(0) !== 'undefined' && jQuery.contains(jQuery('.new-header-search').get(0), e.target ) ||
                (typeof jQuery('.desktop-srchbar-pos').get(0) !== 'undefined' && jQuery.contains(jQuery('.desktop-srchbar-pos').get(0), e.target )))
                || jQuery(e.target).hasClass('arrow_search_wrapper')){

                var arrowWraper = jQuery('.arrow_search_wrapper');
                jQuery('.desktop-srchbar-pos').removeClass('active');
                jQuery('.new-header-search').removeClass('active');
                setTimeout(function(){
                    jQuery('.new-header-search').removeClass('on');
                    jQuery('.desktop-srchbar-pos').removeClass('on');
                }, 800);
                arrowWraper.addClass('close');
                arrowWraper.removeClass('open');
                setTimeout(function(){
                    arrowWraper.removeClass('close');
                }, 700);
            }
        }
    });


    appendTNCcontent();

    jQuery('.header-nav-left.sidebar-text').click(function(){
        jQuery('.lang-sidebar-wrapper').toggleClass('open');
    });
});

runDomainChecker();bhChecker();

document.onclick=check;
