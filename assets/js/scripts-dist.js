function escapeHtml(e){devconsole.log("escapeHtml called");var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};return String(e).replace(/[&<>"'\/]/g,function(e){return o[e]})}function getTrimmedHtml(e){if(devconsole.log("getTrimmedHtml called"),e){var o=$(e).html();o=o.replace(/^\n+|\n+$/g,"");var t;o=o.split("\n");for(var s=0;s<o.length;s++){var a=o[s];if("<!--"!=$.trim(a).substring(0,4)){var n=a.search(/\S/);(t>n||void 0==t)&&n>=0&&(t=n)}}for(var s=0;s<o.length;s++){var a=o[s];if("<!--"!=$.trim(a).substring(0,4))o[s]=a.substring(t,a.length);else for(o[s]=$.trim(a),space=0;space<2;space++)o[s]=" "+o[s]}return o=o.join("\n")}devconsole.log("element must be defined before you use getTrimmedHtml")}function getCustomCode(e,o,t){if(devconsole.log("getCustomCode called"),e&&o&&t){var s="";if(s=$(e).next(".fw-custom-source").length?$(e).next(".fw-custom-source"):$(e).next(".fw-source").next(".fw-custom-source").length?$(e).next(".fw-source").next(".fw-custom-source"):null){var a="";return"all"==o?s.children(".fw-"+t+"-code").each(function(){a=a+getTrimmedHtml($(this))+"\n"}):"number"==typeof o&&(a=s.children(".fw-"+t+"-code")[o-1]),a}return null}devconsole.log("copyContainer & blockNumber & codeLanguage must be defined in getCustomCode")}function createDestroySourceBlock(e,o){devconsole.log("createDestroySourceBlock called");var t=$(e).hasClass("tooltipstered");if(t&&$(e).removeClass("tooltipstered"),$(e).hasClass("fw-code"));else{var s,a,n,l,i=$(e);if(1==$(e).children("iframe").length)s=getCustomCode(i,"all","html"),s||(s=$(e).find("iframe").contents().find("body").html()),a=getCustomCode(i,"all","css"),n=getCustomCode(i,"all","scss"),l=getCustomCode(i,"all","js");else if($(e).parent().hasClass("fw-copy")){var d=$(e).index()+1;i=$(e).closest(".fw-copy"),s=getCustomCode(i,d,"html"),s||(s=$(e)[0].outerHTML),a=getCustomCode(i,d,"css"),n=getCustomCode(i,d,"scss"),l=getCustomCode(i,d,"js")}else s=getCustomCode(i,"all","html"),s||(s=$(e)),a=getCustomCode(i,"all","css"),n=getCustomCode(i,"all","scss"),l=getCustomCode(i,"all","js");void 0==o?($(i).next().hasClass("fw-source")||$(i).after('<div class="fw-source"></div>'),s&&($(i).next(".fw-source").append('<div class="fw-source-html">html goes here</div>'),showSourceCode(s,$(i).next(".fw-source").children(".fw-source-html"))),a&&($(i).next(".fw-source").append('<div class="fw-source-css">css goes here</div>'),showSourceCode(a,$(i).next(".fw-source").children(".fw-source-css"))),n&&($(i).next(".fw-source").append('<div class="fw-source-scss">scss goes here</div>'),showSourceCode(n,$(i).next(".fw-source").children(".fw-source-scss"))),l&&($(i).next(".fw-source").append('<div class="fw-source-js">js goes here</div>'),showSourceCode(l,$(i).next(".fw-source").children(".fw-source-js"))),$(i).next(".fw-source").hide().fadeIn()):$(i).next().hasClass("fw-source")&&$(i).next(".fw-source").remove()}t&&$(e).addClass("tooltipstered")}function isHTML(e){var o=document.createElement("div");o.innerHTML=e;for(var t=o.childNodes,s=t.length;s--;)if(1==t[s].nodeType)return!0;return!1}function updateSidebarMenuHeight(){var e=$(".fw-sidebar .sidebar-header").outerHeight(),o=$(".fw-sidebar .sidebar-footer").outerHeight(),t=$(window).outerHeight(),s=t-e-o;$(".fw-sidebar .fw-sidebar-menu").height(s)}function updatePageHash(){currentHash=$("#navbar .nav.second li.active a").attr("href"),history.pushState?history.pushState(null,null,currentHash):location.hash=currentHash}var devCounter=0,devMode=!1,devconsole={};devconsole.log=function(e){devMode&&e&&(console.log(devCounter+": "+e),devCounter++)},devconsole.log("devConsole loaded"),devconsole.log("hideUncompleteSections loaded"),$(function(){$(".fw-group > section").each(function(e,o){$(o).is(".js-hidden")&&$(o).remove()})}),devconsole.log("clickoffPlugin loaded"),$.fn.clickOff=function(e,o){devconsole.log("clickoffPlugin called");var t=!1,s=this;s.click(function(){t=!0}),$(document).click(function(o){t||e(s,o),t=!1})},devconsole.log("detectIE loaded");var Ie8=8===document.documentMode,Ie9=9===document.documentMode,Ie10=10===document.documentMode,Ie11=11===document.documentMode;devconsole.log("escapeHtmlHelpers loaded"),devconsole.log("getInlineStyle loaded"),function(e){e.fn.inlineStyle=function(o){return devconsole.log("inlineStyle called"),this.prop("style")[e.camelCase(o)]}}(jQuery);var loadingSpinner=function(e,o){if(devconsole.log("loadSpinner called"),"show"==e){var t={lines:13,length:11,width:5,radius:17,corners:1,rotate:0,color:"#FFF",speed:1,trail:60,shadow:!1,hwaccel:!1,className:"spinner",zIndex:2e9,top:"auto",left:"auto"},s=document.createElement("div");document.body.appendChild(s);var a=new Spinner(t).spin(s),n=iosOverlay({text:"Loading",duration:9999999,spinner:a});return n}"hide"==e&&o&&o.hide()};devconsole.log("measureScrollbarWidth loaded");var measureScrollBarWidth=function(){devconsole.log("measureScrollbarWidth called");var e=$("<div />");$("body").append(e),e.width(50).height(50).css({overflow:"scroll",visibility:"hidden",position:"absolute"});var o=$("<div />").height(1);e.append(o);var t=o.width(),s=e.width();return e.remove(),s-t};devconsole.log("notyConfig loaded"),$.noty.defaults={layout:"topRight",theme:"relax",type:"success",text:"",dismissQueue:!0,template:'<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',animation:{open:{height:"toggle"},close:{height:"toggle"},easing:"swing",speed:500},timeout:2500,force:!1,modal:!1,maxVisible:5,killer:!1,closeWith:["click"],callback:{onShow:function(){},afterShow:function(){},onClose:function(){},afterClose:function(){},onCloseClick:function(){}},buttons:!1},devconsole.log("toggleClassHelper loaded"),$("[toggleClass]").click(function(){devconsole.log("toggleClass called");var e=$(this).attr("toggleClassSelector"),o=$(this).attr("toggleClass");$(e).toggleClass(o)}),devconsole.log("addTooltipCode loaded");var addTooltip=function(e,o,t){devconsole.log("addToooltip called"),$(e).each(function(e,s){$(s).hasClass("tooltipstered")||$(s).tooltipster({content:$('<span class="fw-code-button">code</span>'),interactive:!0,onlyOne:!0,delay:0,interactiveTolerance:750,position:o,hideOnClick:!0,offsetY:-20,animation:"grow",functionReady:function(e,o){o.on("click",function(){void 0!=t&&t()})}})})};devconsole.log("createDestroySourceBlock loaded"),devconsole.log("applyHighlightJs loaded");var highlightWithHeader=function(e){if(devconsole.log("highlightWithHeader called"),!Ie8){hljs.highlightBlock(e);var o=$(e).html().replace(/<br\s*\/?>/gm,"\n").replace(/<\s*\/?br>/gi,"\r\n");$(e).html(o)}var t=!0;$(e).hasClass("less")||$(e).hasClass("scss")?(title="SCSS",$(e).addClass("scss")):$(e).hasClass("css")?(title="CSS",$(e).addClass("css")):$(e).hasClass("twig")||$(e).hasClass("html")||$(e).hasClass("xml")||$(e).hasClass("cs")||$(e).hasClass("stylus")?(title="HTML",$(e).addClass("html")):$(e).hasClass("javascript")?(title="SCRIPT",$(e).addClass("javascript")):t=!1;var s=$(e).closest(".fw-code").attr("data-header");"undefined"!=typeof s&&s!==!1?(title=s,$(e).closest("pre").before('<p class="fw-code-title">'+title+"</p>")):t&&$(e).closest("pre").before('<p class="fw-code-title '+title.toLowerCase()+'">'+title+"</p>"),addCopyButton(e)},addCopyButton=function(e){devconsole.log("addCopyButton called");var o='<span class="fw-code-copy">                      <span class="fw-code-copy-mask" title="Copy to clipboard">                        <span class="fw-code-copy-button first">copy</span>                        <span class="fw-code-copy-button second">copy</span>                        <span class="fw-code-copy-button third">copy</span>                        <span class="fw-code-loading-mask">                          <span class="fw-code-copy-button fourth">copy</span>                        </span>                        <span class="fw-code-copy-button fifth"> done</span>                      </span>                    </span>',t=$(e).closest("pre");if($(t).before(o),$(t).prev(".fw-code-copy").children(".fw-code-copy-mask").tooltipster({theme:"tooltipster-light",delay:100,animation:"grow"}),makeSureWindowIsLoaded){var s=($(t).offset().top+$(t).outerHeight(),$(t).offset().top),a=$(window).outerHeight(),n=$(window).scrollTop();s>n+a-250&&($(t).addClass("fw-highlighted"),setTimeout(function(){$(t).removeClass("fw-highlighted")},1500)),s>n+a&&$("html, body").animate({scrollTop:s-a+150},500)}},makeSureWindowIsLoaded=!1;$(window).load(function(){setTimeout(function(){makeSureWindowIsLoaded=!0},3e3)}),Ie8||new Clipboard(".fw-code-copy-mask",{text:function(e){devconsole.log("Clipboard called");var o=$(e).closest(".fw-code-copy").next("pre").text();return o=o.replace(/\n/g,"\r\n"),$(e).hasClass("copying done")||($(".fw-code-copy-mask").tooltipster("hide"),$(e).addClass("copying"),setTimeout(function(){$(e).addClass("done")},700),setTimeout(function(){$(e).removeClass("copying done"),$(e).hide().stop().fadeIn()},4e3)),o}});var showSourceCode=function(e,o){devconsole.log("showSourceCode called");var t="";"string"==typeof e||e instanceof String||($(e).hasClass("css")&&(t="css"),$(e).hasClass("scss")&&(t="scss"),$(e).hasClass("js")&&(t="javascript"),$(e).hasClass("html")&&(t="html"),e=getTrimmedHtml(e),e=e.replace(/\<div class="ui-resizable.*div\>/,""),isHTML(e)&&(e=html_beautify(e,{indent_size:2}))),e=$.trim(e),e=e.replace(' class=""',""),"<"==e.charAt(0)&&">"==e.substr(e.length-1)&&(e=escapeHtml(e)),$(o).html('<pre><code class="'+t+'">'+e+"</pre></code>"),$(o).children("pre").children("code").each(function(e,o){highlightWithHeader(o)})};$(".fw-code").each(function(){showSourceCode($(this),$(this))}),devconsole.log("generateSidebar loaded"),$(function(){function e(){var e=localStorage.getItem("expand-menu"),o=$(".check-expand-menu [type=checkbox]");"true"==e?($(".fw-sidebar-menu").addClass("expanded"),$(o).prop("checked",!0)):($(".fw-sidebar-menu").removeClass("expanded"),$(o).prop("checked",!1))}function o(){var e=window,o="inner";return"innerWidth"in window||(o="client",e=document.documentElement||document.body),{width:e[o+"Width"],height:e[o+"Height"]}}function t(e){var t=o().width,s=!1;return 768>t&&"mobile"==e&&(s=!0),t>=768&&991>=t&&"tablet"==e&&(s=!0),t>=992&&1279>=t&&"desktop"==e&&(s=!0),t>=1280&&"desktop-xl"==e&&(s=!0),s}function s(){var e=localStorage.getItem("toggle-sidebar"),o=$(".check-toggle-sidebar [type=checkbox]");"true"==e?($(".fw-wrapper").addClass("sidebar-hidden"),$(o).prop("checked",!0)):($(".fw-wrapper").removeClass("sidebar-hidden"),$(o).prop("checked",!1))}var a=function(){devconsole.log("generateNavigation called");var e="";e+='<div id="navbar"><ul class="nav first">',$(".fw-group").each(function(o){var t=$(this),s=$(t).attr("data-name");if($(t).children("section").length>0){var a=s.replace(/[^a-z0-9\s]/gi,"").replace(/[_\s]/g,"-").toLowerCase();$(t).attr("id",a),e+='<li>\n<a href="#'+a+'">'+s+"</a>",e+='\n<ul class="nav second">',$(t).children("section").has("h3").each(function(o){var t=$(this),s=$.trim($(t).children("h3:first-child").text()),a=s.replace(/[^a-z0-9\s]/gi,"").replace(/[_\s]/g,"-").toLowerCase();$(this).attr("id",a),e+='\n	<li><a href="#'+a+'">'+s+"</a>",e+="</li>"}),e+="\n</ul>",e+="\n</li>\n"}}),e+="</ul></div>",$(".fw-sidebar .fw-sidebar-menu").append(e)};a(),$("body").scrollspy({target:".nav.first",offset:60}),$(".fw-sidebar").find("a").on("click",function(){setTimeout(function(){var e=$(window).scrollTop();console.log(e),$("html, body").animate({scrollTop:e+5},0)},50)}),"expand-menu"!=typeof Storage&&void 0==localStorage.getItem("expand-menu")&&localStorage.setItem("expand-menu",!1),e(),$(".check-expand-menu [type=checkbox]").on("change",function(){var o=$(this).is(":checked");o?localStorage.setItem("expand-menu","true"):localStorage.setItem("expand-menu","false"),e()}),t("mobile")&&localStorage.setItem("toggle-sidebar","true"),"toggle-sidebar"!=typeof Storage&&void 0==localStorage.getItem("toggle-sidebar")&&localStorage.setItem("toggle-sidebar",!1),$(window).on("resize",function(){t("mobile")?localStorage.setItem("toggle-sidebar","true"):localStorage.setItem("toggle-sidebar",!1),s()}),s(),$(".check-toggle-sidebar [type=checkbox]").on("change",function(){var e=$(this).is(":checked");e?localStorage.setItem("toggle-sidebar","true"):localStorage.setItem("toggle-sidebar","false"),s()});var n="",l=".fw-sidebar-menu";setInterval(function(){var e=$(".fw-sidebar ul.first > li.active"),o=$(e).find("a").first().text();if(n!=o){var t=$(l).scrollTop();$(l).scrollTop(0);var s=$(e).offset().top,a=$(l).offset().top,i=s-a;$(l).scrollTop(t),$(l).stop().animate({scrollTop:i},500,"easeOutSine")}n=o},3e3)}),$(window).on("resize",function(){updateSidebarMenuHeight()}),$(function(){updateSidebarMenuHeight()}),devconsole.log("parallaxSection loaded"),devconsole.log("renderCodeElements loaded");var hideAllSpoileredCodes=function(){devconsole.log("hideAllSpoileredCodes called"),$(".fw-spoileredCode + .fw-source").remove()},clickedOnScrollbar=function(e){return devconsole.log("clickedOnScrollbar called"),$(window).outerWidth()<=e?!0:void 0};$(document).mousedown(function(e){clickedOnScrollbar(e.clientX)||$(e.target).parents(".fw-source, .tooltipster-base, .fw-switch").length||$(e.target).hasClass("fw-copy")||$(e.target).hasClass("ui-resizable-handle")||hideAllSpoileredCodes()});var reRenderCodeElement=function(e){devconsole.log("reRenderCodeElement called"),$(e).hasClass("c-elements")?$(e).hasClass("c-visible")||($(e).hasClass("fw-spoileredCode")||$(e).addClass("fw-spoileredCode"),$(e).children().each(function(e,o){createDestroySourceBlock($(o),"destroy"),addTooltip(o,"top",function(){hideAllSpoileredCodes(),createDestroySourceBlock($(o))})})):1==$(e).children("iframe").length?$(e).hasClass("c-visible")?createDestroySourceBlock($(e)):($(e).hasClass("fw-spoileredCode")||$(e).addClass("fw-spoileredCode"),createDestroySourceBlock($(e),"destroy"),addTooltip(e,"top-right",function(){hideAllSpoileredCodes(),createDestroySourceBlock($(e))})):$(e).hasClass("fw-code")||($(e).hasClass("c-visible")?createDestroySourceBlock($(e)):($(e).hasClass("fw-spoileredCode")||$(e).addClass("fw-spoileredCode"),createDestroySourceBlock($(e),"destroy"),addTooltip(e,"top-right",function(){hideAllSpoileredCodes(),createDestroySourceBlock($(e))})))},reRenderAllCodeElements=function(){devconsole.log("reRenderAllCodeElements called"),$(".fw-copy").each(function(e,o){reRenderCodeElement(o)})};reRenderAllCodeElements(),devconsole.log("resizableElements loaded"),$.ui.plugin.add("resizable","iframeFix",{start:function(e,o){var t=$(this).data("resizable").options;$(t.iframeFix===!0?"iframe":t.iframeFix).each(function(){$('<div class="fw-resizable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css($(this).offset()).appendTo("body")})},stop:function(e,o){$("div.fw-resizable-iframeFix").each(function(){this.parentNode.removeChild(this)})}});var resizableStartWidth=1060,updateResizable=function(e){function o(){return 100>=d?c:void 0}devconsole.log("updateResizable called");var t=0,s=parseInt($(e).parent().css("padding-left")),a=parseInt($(e).parent().css("padding-left")),n=$(e).parent().outerWidth()-s-a;$(e).css("max-width",n),$(e).inlineStyle("width")||parseInt($(e).width())>1030&&$(e).css({width:resizableStartWidth});var l=$(e).children("iframe");if(l.length){var l=$(l)[0],i=100;l.offsetHeight&&(i=l.contentWindow.document.body.offsetHeight+t+"px",l.style.height=i);var d=$(l).innerWidth()+50,c=$(l).innerHeight();if($(e).css("height",c),100>=d)return;$(e).resizable({aspectRatio:d/c,minHeight:o(),maxWidth:n,handles:"e",resize:function(o,t){t.size.width+=t.size.width-t.originalSize.width,updateResizable(e)},stop:function(){updatePageBottomPadding(),updateResizable(e)}})}else $(e).resizable({maxWidth:n,handles:"e",resize:function(o,t){updateResizable(e),t.size.width+=t.size.width-t.originalSize.width},stop:function(){updatePageBottomPadding()}})},resizableIframesLoaded=!1;$(function(){var e=function(){devconsole.log("renderResizables called"),$(".fw-resizable").each(function(e,o){$(o).show(),updateResizable(o)})},o=setInterval(function(){var e=$(".fw-resizable > iframe").length,t=$(".fw-resizable > iframe.loaded").length;t==e&&(a(),resizableIframesLoaded=!0,clearInterval(o))},300);$(".fw-resizable > iframe").each(function(){$(this).hasClass("loaded")||this.contentWindow.location.reload(!0),$(this).load(function(){$(this).addClass("loaded")})});var t,s=function(){return devconsole.log("loadingSpinner called"),$(".fw-resizable > iframe").length>15?!0:!1},a=function(){devconsole.log("onResizableIframesLoaded called"),e(),$(window).bind("resize",function(o){this==o.target&&e()}),s()&&t.hide()};s()&&(t=loadingSpinner("show")),$(window).load(function(){e()})}),devconsole.log("stickyElements loaded"),$(function(){setTimeout(function(){$(".fw-sidebar > .fw-inner").trigger("sticky_kit:recalc")},1500)}),devconsole.log("switchCssScss loaded"),localStorage.documentLangMode||(devconsole.log("document is opened first time, setting document mode to lang-scss"),localStorage.setItem("documentLangMode","lang-scss"));var updateDocumentLangView=function(){devconsole.log("updateDocumentLangView called"),"lang-scss"==localStorage.documentLangMode?($("body").addClass("fw-viewScss"),$("body").removeClass("fw-viewCss"),$(".fw-switch > span").removeClass("active"),$(".fw-switch > span.lang-scss").addClass("active")):"lang-css"==localStorage.documentLangMode&&($("body").addClass("fw-viewCss"),$("body").removeClass("fw-viewScss"),$(".fw-switch > span").removeClass("active"),$(".fw-switch > span.lang-css").addClass("active"))};updateDocumentLangView();var setDocumentLangMode=function(e){devconsole.log("setDocumentLangMode called"),e&&localStorage.setItem("documentLangMode",e),updateDocumentLangView()};$(function(){$(".fw-switch > span").click(function(){$(this).hasClass("lang-scss")?setDocumentLangMode("lang-scss"):$(this).hasClass("lang-css")&&setDocumentLangMode("lang-css")})}),devconsole.log("updatePageBottom loaded");var updatePageBottomPadding=function(){devconsole.log("updatePageBottomPadding called");var e=$(window).innerHeight(),o=$(".fw-group:last-child").find("section:last-child").height();$(".fw-content > .fw-inner").css("padding-bottom",e-o)};$(function(){$(window).bind("resize",function(e){this==e.target&&updatePageBottomPadding()}),updatePageBottomPadding()}),devconsole.log("tabulations loaded");var refreshTabulators=function(e){devconsole.log("refreshTabulators called"),$(e).children(".active").length||$(e).children().first().addClass("active");var o=$(e).children(".active").index(),t=$(e).next(".fw-tabs"),s=$(t).children().eq(o);$(s).addClass("active").removeClass("hidden"),$(t).children().not(s).each(function(){$(this).addClass("hidden").removeClass("active")}),resizableIframesLoaded&&$(t).find(".fw-resizable").each(function(){updateResizable($(this))})};$(function(){$(".fw-tabulators").each(function(){refreshTabulators($(this))}),$(".fw-tabulators > *").click(function(){if(!$(this).hasClass("active")){var e=$(this).closest(".fw-tabulators");$(this).addClass("active"),$(e).children().not($(this)).removeClass("active"),refreshTabulators(e)}})}),devconsole.log("topbar loaded"),$(function(){function e(){var e=$(".fw-group section.active").find("h3").text();$(".dc-topbar .dc-section-info").html(e);var o=$("#navbar .nav.first > li.active").length;o>0&&!$("#introduction").is(".active")?$(".dc-topbar .dc-section-info").hasClass("isHidden")&&$(".dc-topbar .dc-section-info").removeClass("isHidden"):$(".dc-topbar .dc-section-info").hasClass("isHidden")||$(".dc-topbar .dc-section-info").addClass("isHidden")}setInterval(function(){e()},300)});var currentHash="";$(function(){setInterval(function(){updatePageHash()},3e3)});
