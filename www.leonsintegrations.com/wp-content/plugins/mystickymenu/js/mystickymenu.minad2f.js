!function(e){"use strict";jQuery(document).ready(function(e){if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&!option.device_mobile)return!1;if(!option.device_desktop)return!1;if(e(option.mystickyClass)[0]){var t,i=document.querySelector(option.mystickyClass),o=parseInt(option.disableWidth),s=parseInt(option.disableLargeWidth),n=option.mystickyTransition,d=parseInt(option.activationHeight),a=option.adminBar,r=option.mysticky_disable_down;C();for(var c=i.parentNode,l=document.createElement("div"),m=0,p=0;p<c.childNodes.length;p++)if(c.childNodes[p]==i){m=p;break}l.id="mysticky-wrap",l.appendChild(i),c.insertBefore(l,c.childNodes[m]);var y,f,u=i.parentNode,h=document.createElement("div");if(h.id="mysticky-nav",u.replaceChild(h,i),h.appendChild(i),"0"==d)var w=!0;E(),B();var v,x=0;S(),H();var k=d;I(),N();var g="scrollY"in window,L=0;document.addEventListener("scroll",function(a){var c=e(".mysticky-welcomebar-fixed").css("top"),m=e(".mysticky-welcomebar-fixed").data("position"),p=e(".mysticky-welcomebar-fixed").outerHeight(),u=e(".mysticky-welcomebar-fixed").length,w=e("body").hasClass("mysticky-welcomebar-apper");if(u&&parseInt(c)>=0&&"top"==m&&w){var b=p;x=0}else b="";if(t>=o&&(0==s||t<=s)){var C=g?window.scrollY:document.documentElement.scrollTop;if(0==document.documentElement.scrollTop&&h.classList.remove("wrapfixed"),0<=C){if(C>=L)C>=d&&i.classList.add("myfixed"),C>=d&&h.classList.add("wrapfixed"),C>=d&&(l.style.height=y+"px"),C>=d&&(i.style.width=v+"px"),"slide"==n&&("false"==r&&(h.style.top=C>=d+f-x?x+b+"px":"-"+f+"px"),y>f&&"false"==r&&(C<d+f&&(h.style.top="-"+y+"px"),C>=d+f&&(h.style.top=x+b+"px"))),h.classList.add("down"),h.classList.remove("up"),"on"==r&&(h.style.top="-"+(y+x)+"px",jQuery("#mysticky-nav "+option.mystickyClass+".elementor-sticky").hide());else{var E=g?window.scrollY:document.documentElement.scrollTop;!(E>k)&&(l.style.height=""),!(E>k)&&(i.style.width=""),"slide"==n?(!(E>k)&&i.classList.remove("myfixed"),!(E>k)&&h.classList.remove("wrapfixed"),"false"==r&&E<k+f+200-x&&(h.style.top="-"+f+"px")):(!(E>k)&&i.classList.remove("myfixed"),!(E>k)&&h.classList.remove("wrapfixed")),h.classList.remove("down"),h.classList.add("up"),"on"==r&&(h.style.top=x+b+"px",jQuery("#mysticky-nav "+option.mystickyClass).css("width",v+"px"),jQuery("#mysticky-nav "+option.mystickyClass+".elementor-sticky").show())}L=C}else h.classList.remove("up")}});var b=e(window).width();window.addEventListener("resize",j),window.addEventListener("orientationchange",j)}else console.log("myStickymenu: Entered Sticky Class does not exist, change it in Dashboard / Settings / myStickymenu / Sticky Class. ");function C(e){e=window;var i="inner";"innerWidth"in window||(i="client",e=document.documentElement||document.body),t=e[i+"Width"]}function E(){y=i.offsetHeight,parseInt(e(i).css("marginBottom"))>0&&(l.style.marginBottom=e(i).css("marginBottom")),"0"==y&&e(i).children().filter(":visible").each(function(){y=e(this).outerHeight(!0)})}function B(){i.classList.add("myfixed"),"0"==(f=e(".myfixed").outerHeight())&&e(".myfixed").children().filter(":visible").each(function(){f=e(this).outerHeight(!0)}),i.classList.remove("myfixed")}function S(){x="true"==a&&t>600&&e("#wpadminbar")[0]?e("#wpadminbar").height():0,h.style.top="slide"==n?"-"+f+"px":x+"px"}function H(){var t=e(i)[0].getBoundingClientRect();v=t.width}function I(){1==w&&("slide"==n&&(d=e(i).offset().top+y-x,k=e(i).offset().top+y-x,"on"==r&&(k=e(i).offset().top-x)),"fade"==n&&("false"==r&&(d=e(i).offset().top-x,k=e(i).offset().top-x),"on"==r&&(d=e(i).offset().top-x+y,k=e(i).offset().top-x)))}function N(){1==w&&y>f&&("slide"==n?(k=d,"on"==r&&(k=d-f)):(d=y,k=y))}function j(){e(window).width()!=b&&(h.classList.remove("up"),h.classList.remove("down"),e(".wrapfixed")[0]||(E(),i.style.removeProperty("width"),H()),C(),S(),B(),I(),N())}})}();