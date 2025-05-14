/*!
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function(f,b,g){var a=/\+/g;
function e(h){return h
}function c(h){return decodeURIComponent(h.replace(a," "))
}var d=f.cookie=function(p,o,u){if(o!==g){u=f.extend({},d.defaults,u);
if(o===null){u.expires=-1
}if(typeof u.expires==="number"){var q=u.expires,s=u.expires=new Date();
s.setDate(s.getDate()+q)
}o=d.json?JSON.stringify(o):String(o);
return(b.cookie=[encodeURIComponent(p),"=",d.raw?o:encodeURIComponent(o),u.expires?"; expires="+u.expires.toUTCString():"",u.path?"; path="+u.path:"",u.domain?"; domain="+u.domain:"",u.secure?"; secure":""].join(""))
}var h=d.raw?e:c;
var r=b.cookie.split("; ");
for(var n=0,k=r.length;
n<k;
n++){var m=r[n].split("=");
if(h(m.shift())===p){var j=h(m.join("="));
return d.json?JSON.parse(j):j
}}return null
};
d.defaults={};
f.removeCookie=function(i,h){if(f.cookie(i)!==null){f.cookie(i,null,h);
return true
}return false
}
})(jQuery,document);
$(document).ready(function(){if($('input[name="optin"]').val()=="YES"){$('input[name="optin"]').attr("checked","checked")
}var c;
(window.onpopstate=function(){var g,i=/\+/g,h=/([^&=]+)=?([^&]*)/g,k=function(l){return decodeURIComponent(l.replace(i," "))
},j=window.location.search.substring(1);
c={};
while(g=h.exec(j)){c[k(g[1])]=k(g[2])
}})();
$(".contact-me").on("click",function(){var g=$(this).attr("asset-id");
window.open(g,"","scrollbars=1,width = 700, height = 600")
});
var b=["src","pid","pvendorapp","kw","mt"];
var d=0;
for(d=0;
d<b.length;
d++){if(c[b[d]]!=""){$("#"+b[d]).attr("value",c[b[d]])
}}$("a.show-tooltips").mouseover(function(){var l=$(this).height();
var m=10;
var i=10;
var g=$(this).closest(".form-helptext").find(".toolTipContainer");
var j=g.width();
var h=g.height();
var r=$(document).width();
var s=$(document).height();
var p=$(this).position().top;
var o=$(this).attr("name");
var n=$(this);
var q=$(g);
g.find("p").text(o);
g.insertAfter($(this));
if(p+h>s){p=s-h-i-(2*l)
}var k=$(this).position().left+m;
if(k+j>r){k=r-j-(2*m)
}g.css({top:p,left:k});
g.show();
g.mouseover(function(){$("a.show-tooltips").removeClass("hover");
n.addClass("hover");
$(this).show()
});
g.mouseleave(function(){n.removeClass("hover");
$(this).hide()
})
});
$("a.show-tooltips").mouseout(function(){$(".toolTipContainer").hide();
$(this).removeClass("hover")
});
$(".form-control").focus(function(){$(this).next(".hidden-val").show("fast",function(){$(this).animate({opacity:1,height:35},200)
})
});
$(".form-control").focusout(function(){$(this).next(".hidden-val").show("fast",function(){$(this).animate({opacity:0,height:0},200)
})
});
$.each($("select[data-loadopts]"),function(g,j){var k=$(this).attr("id");
var h="";
if(typeof vmf.dfield.cache[k]!=="undefined"){$.each(vmf.dfield.cache[k],function(l,m){var i={};
if(l==0){m.value=""
}if(typeof m!="object"){i.label=m;
i.value=m
}else{i=m
}h+='<option value="'+i.value+'">'+i.label+"</option>"
})
}else{h='<option value=""></option>'
}$(this).html(h);
$(this).selectpicker("refresh")
});
if($(".cm-migration-custom").length===0){$("#department").on("change",function(){var h=$(this).val(),g="";
$("#job_role").selectpicker("refresh");
if(typeof ws.jr.info[h]!=="undefined"){$.each(ws.jr.info[h],function(j,k){k=k.role;
g+='<option value="'+k.value+'">'+k.label+"</option>"
});
$("#job_role").html(g);
$("#job_role").selectpicker("refresh")
}});
if($("form[data-vmwareformname]").attr("data-eloqualookup")!==undefined){$("#department").attr("id","C_Department1");
$("#job_role").attr("id","C_Job_Role1");
$("#C_Department1").on("change",function(){var h=$(this).val(),g="";
$("#C_Job_Role1").selectpicker("refresh");
if(typeof ws.jr.info[h]!=="undefined"){$.each(ws.jr.info[h],function(j,k){k=k.role;
g+='<option value="'+k.value+'">'+k.label+"</option>"
});
$("#C_Job_Role1").html(g);
$("#C_Job_Role1").selectpicker("refresh")
}})
}}$("#nostate").closest(".form-helptext").hide();
$("#country, #country_ariana,#C_Country").on("change",function(){var k,h="",g="";
var j=$(this).prop("id");
if(j=="country_ariana"){k=$(this).find("option:selected").text().toLowerCase();
h=$(this).closest("form").prop("id")
}else{k=$(this).val().toLowerCase()
}e($(this).val());
k=k.split(" ").join("_");
ws.cc.info={};
var i="/content/dam/digitalmarketing/vmware/en/files/include/module/dfield/data/"+k+".js";
$.getScript(i,function(){if(typeof ws.cc.info[k]!=="undefined"){var m=ws.cc.info[k];
if(m.hasOwnProperty("stateName")){var n=m.stateName;
var l=m.state;
if(j=="country_ariana"){if(n.length>0&&l.length>0){$.each(n,function(o,p){g+='<option value="'+l[o]+'">'+p+"</option>"
});
$("#"+h).find("#state").html(g);
a(h)
}}else{if(n.length>0){$.each(n,function(o,p){g+='<option value="'+p+'">'+p+"</option>"
});
$("#state").html(g);
$("#C_State_Prov").html(g);
a()
}}}else{if(j=="country_ariana"){f(h)
}else{f()
}}}else{if(j=="country_ariana"){f(h)
}else{f()
}}}).fail(function(){if(arguments[0].status==404){if(j=="country_ariana"){f(h)
}else{f()
}}})
});
function a(g){if(g!=""&&g!=null&&g!=undefined){var i=$("#"+g).find("#nostate");
$(i).closest(".form-helptext").hide().val("").addClass("ignore");
var h=$("#"+g).find("#state");
$(h).closest(".form-helptext").show().removeClass("ignore");
$(h).selectpicker("refresh")
}else{$("#nostate").closest(".form-helptext").hide().val("").addClass("ignore");
$("#state").closest(".form-helptext").show().removeClass("ignore");
$("#state").selectpicker("refresh");
$("#C_State_Prov").closest(".form-helptext").show().removeClass("ignore");
$("#C_State_Prov").selectpicker("refresh")
}}function f(g){if(g!=""&&g!=null&&g!=undefined){var h=$("#"+g).find("#state");
$(h).closest(".form-helptext").hide().addClass("ignore").selectpicker("refresh");
var i=$("#"+g).find("#nostate");
$(i).closest(".form-helptext").show().removeClass("ignore");
$(i).val("").trigger("keyup")
}else{$("#state").closest(".form-helptext").hide().addClass("ignore").selectpicker("refresh");
$("#C_State_Prov").closest(".form-helptext").hide().addClass("ignore").selectpicker("refresh");
$("#nostate").closest(".form-helptext").show().removeClass("ignore");
$("#nostate").val("").trigger("keyup")
}}$("#sup_contact_phone ,#supp_contact_how, #sup_contact_email").addClass("ignore").closest(".form-helptext").hide();
$("#supp_contact_back").on("change",function(){var g=$(this).val();
var h=$(this).find("option").eq(1).val();
if(g===h){$("#supp_contact_how").removeClass("ignore").closest(".form-helptext").show();
$("#supp_contact_how.selectpicker").selectpicker("val",[0]);
$("#supp_contact_how.selectpicker").selectpicker("refresh")
}else{$("#sup_contact_phone ,#supp_contact_how,#sup_contact_email").addClass("ignore").closest(".form-helptext").hide();
$("#supp_contact_how.selectpicker").selectpicker("val",[0]);
$("#sup_contact_phone").val("");
$("#supp_contact_how.selectpicker").selectpicker("refresh")
}});
$("#supp_contact_how").on("change",function(){var i=$(this).val();
var g=$(this).find("option").eq(1).val();
var h=$(this).find("option").eq(2).val();
if(i===g){$("#sup_contact_phone").removeClass("ignore").val("").closest(".form-helptext").show();
$("#sup_contact_email").addClass("ignore").closest(".form-helptext").hide()
}else{if(i===h){$("#sup_contact_phone").addClass("ignore").closest(".form-helptext").hide();
$("#sup_contact_email").removeClass("ignore").val("").closest(".form-helptext").show()
}else{$("#sup_contact_email,#sup_contact_phone").addClass("ignore").closest(".form-helptext").hide()
}}});
function e(i){$('input[name="EmailOpt"]').attr("checked",false);
$('input[name="optin"]').attr("checked",false);
var h=new Array("AU","Australia","AT","Austria","BD","Bangladesh","BE","Belgium","BT","Bhutan","BR","Brazil","BG","Bulgaria","CA","Canada","CK","Cook Islands","CR","Costa Rica","CY","Cyprus","CZ","Czech Republic","DK","Denmark","EE","Estonia","FJ","Fiji","FI","Finland","FR","France","PF","French Polynesia","DE","Germany","HU","Hungary","IE","Ireland","IT","Italy","LT","Lithuania","LU","Luxembourg","MT","Malta","MH","Marshall Islands","MU","Mauritius","NL","Netherlands","NC","New Caledonia","NZ","New Zealand","NO","Norway","PW","Palau","PG","Papua New Guinea","PE","Peru","PL","Poland","PT","Portugal","RO","Romania","RU","Russian Federation","ES","Spain","SE","Sweden","CH","Switzerland","TR","Turkey","GB","UK","United Kingdom");
var j=false;
for(var g=0;
g<h.length;
g++){if(h[g]==i){j=true;
break
}}if(j){$('input[name="EmailOpt"]').attr("checked",false);
$('input[name="optin"]').attr("checked",false)
}else{if(typeof $('input[name="EmailOpt"]').attr("checked")==typeof undefined){$('input[name="EmailOpt"]').attr("checked",false);
$('input[name="EmailOpt"]').click();
$('input[name="EmailOpt"]').attr("checked",true)
}else{$('input[name="EmailOpt"]').attr("checked",true)
}if(typeof $('input[name="optin"]').attr("checked")==typeof undefined){$('input[name="optin"]').attr("checked",false);
$('input[name="optin"]').click();
$('input[name="optin"]').attr("checked",true)
}else{$('input[name="optin"]').attr("checked",true)
}}return false
}});
$(document).ready(function(){var j=[];
var y=$("body").find("form[data-vmwareFormName]");
$(y).find("#cq_captcha").closest(".container-fluid").wrap("<div class='captcha section'></div>");
function I(){$(y).find(".bootstrap-select .filter-option").each(function(){j.push($(this).parent(".dropdown-toggle").attr("title"))
})
}if($(y).find(".bootstrap-select").length){I()
}if($(".cm-migration-custom").length===0){$(y).each(function(K,L){i(L)
})
}function D(L){var K=L+"=";
var N=document.cookie.indexOf(K);
var M="";
if(N!=-1){N=N+L.length+1;
c_end=document.cookie.indexOf(";",N-1);
if(c_end==-1){c_end=document.cookie.length
}M=unescape(document.cookie.substring(N,c_end));
if((N-1)==(c_end)){M=""
}}return M
}function i(O){var P=new Object();
var N=new Object();
var K="";
$(O).find("input[data-validate], select[data-validate],textarea[data-validate]").each(function(){var S=($(this).attr("data-validate")).split(" ");
var R={};
var Q=($(this).attr("data-error")!=""&&$(this).attr("data-error")!=undefined)?$(this).attr("data-error"):"";
var T={};
K=$(this).closest(".form-group").find(".error-msg p").html();
$.each(S,function(U,V){if(V=="required"){R[V]=true;
T[V]=K
}else{if(V=="email"){R[V]=true;
T[V]=Q
}else{if(V=="multiemail"){R[V]=true;
T[V]=Q
}else{if(V=="strictpassword"){R[V]=true;
T[V]=Q
}else{if(V=="phone"){R[V]=true;
T[V]=Q
}else{if(V=="alphabets"){R[V]=true;
T[V]=Q
}else{if(V=="numerals"){R[V]=true;
T[V]=Q
}else{if(V=="alphanumeric"){R[V]=true;
T[V]=Q
}else{if(V=="specialchars"){R[V]=true;
T[V]=Q
}else{if(V=="zipcode"){R[V]=true;
T[V]=Q
}else{if(V=="check"){R[V]=true;
T[V]=Q
}}}}}}}}}}}});
P[this.name]=R;
N[this.name]=T
});
$.validator.addMethod("email",function(R,Q){return this.optional(Q)||/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,64}$/i.test(R)
},"Please enter a correctly formatted email address.");
$.validator.addMethod("multiemail",function(R,Q){return this.optional(Q)||/^((\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)\s*[;]{0,1}\s*)+$/.test(R)
},"Please enter a correctly formatted email address.");
$.validator.addMethod("phone",function(R,Q){return this.optional(Q)||/^[0-9-+]{10,}$/.test(R)
},"Please enter a valid phone number.Minimum 10 digits needed.Include country code, city code, and area code when applicable.");
$.validator.addMethod("strictpassword",function(R,Q){return this.optional(Q)||/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/i.test(R)
},"Passwords are 8-16 characters with uppercase letters, lowercase letters and at least one number.");
$.validator.addMethod("alphabets",function(R,Q){return this.optional(Q)||/\S/.test(R)||/^(.*)([\w]?)(.*)$/.test(R)
},"Please enter only alphanumeric");
$.validator.addMethod("alphanumeric",function(R,Q){return this.optional(Q)||/\S/.test(R)||/^(.*)([\w]?)(.*)$/.test(R)
},"Please enter a valid alphanumeric");
$.validator.addMethod("specialchars",function(R,Q){return this.optional(Q)||/\S/.test(R)||/^(.*)([\w]?)(.*)$/.test(R)
},"Please enter a valid combination of alphanumeric and specialchars.");
$.validator.addMethod("numerals",function(R,Q){return this.optional(Q)||/^[0-9]{1,}$/.test(R)
},"Please enter only numerals");
$.validator.addMethod("zipcode",function(R,Q){return this.optional(Q)||/^[A-Z0-9- ]{4,9}$/.test(R)
},"Please enter a valid zip code. Minimum 4 to Maximum 9 digits/chars needed. Lowercase not allowed.");
$.validator.addMethod("check",function(R,Q){return $("input:checked").length>0
},"Please Select Atleast One CheckBox");
var L=false;
$(O).validate({ignore:"hidden, .ignore, #oneBrandChangePassword input#currentpassword,#oneBrandLogin input#password",onkeyup:function(R){this.element(R);
R.parentNode.getElementsByClassName("icon-warning")[0].style.display="none";
var T=R.parentNode;
var S=T.getElementsByClassName("icon-error")[0];
var Q=T.getElementsByClassName("icon-success")[0];
if(R.value.length>0){if(R.parentNode.getElementsByClassName("hidden-val")[0]){R.parentNode.getElementsByClassName("hidden-val")[0].style.display="none"
}if(Q&&S){if(this.element(R)){Q.style.display="block";
S.style.display="none"
}else{S.style.display="block";
Q.style.display="none"
}}}else{T.getElementsByClassName("error-msg")[0].style.display="none";
if(Q&&S){S.style.display="none";
Q.style.display="none"
}if(R.parentNode.getElementsByClassName("hidden-val")[0]){R.parentNode.getElementsByClassName("hidden-val")[0].style.display="block"
}}},onfocusout:function(Q){if($(Q).val().trim()===""){$(Q).val("")
}if($(Q).val().length===0){$(Q).closest(".form-group").find("div.error-msg").hide()
}},highlight:function(S,Q,R){$(S).closest(".form-group").find("div.error-msg").show();
if($(S).attr("type")=="checkbox"){if($(S).closest(".form-group").find('input[type="checkbox"]:checked').length>0){$(S).closest(".form-group").find("div.error-msg").removeClass("warning-msg")
}else{if(L){$(S).closest(".form-group").find("div.error-msg").removeClass("warning-msg").hide();
L=false
}else{$(S).closest(".form-group").find("div.error-msg").addClass("warning-msg")
}}}else{if($(S).val().length==0){$(S).closest(".form-group").find("div.error-msg").addClass("warning-msg")
}else{$(S).closest(".form-group").find("div.error-msg").removeClass("warning-msg")
}}},unhighlight:function(S,Q,R){L=true;
$(S).closest(".form-group").find("div.error-msg").removeClass("warning-msg").hide()
},invalidHandler:function(S,R){for(var Q=0;
Q<R.errorList.length;
Q++){if(R.numberOfInvalids()&&R.errorList[Q].element.value==""){if(R.errorList[Q].element.hasAttribute("data-prepopulate")){$(R.errorList[Q].element).closest(".form-group").show()
}if(R.errorList[Q].element.parentNode.getElementsByClassName("icon-warning")[0]){R.errorList[Q].element.parentNode.getElementsByClassName("icon-error")[0].style.display="none";
R.errorList[Q].element.parentNode.getElementsByClassName("icon-success")[0].style.display="none";
R.errorList[Q].element.parentNode.getElementsByClassName("icon-warning")[0].style.display="block";
if(R.errorList[Q].element.parentNode.getElementsByClassName("hidden-val")[0]){R.errorList[Q].element.parentNode.getElementsByClassName("hidden-val")[0].style.display="block"
}}}}},errorPlacement:function(Q,R){$(R).closest(".form-group").find(".error-msg p").html(Q)
},rules:P,messages:N,submitHandler:function(R){if(D("s_campaign")){if($("#cid").length>0){$("#cid").attr("value",D("s_campaign"))
}else{if($("#campaign_id").length>0){$("#campaign_id").attr("value",D("s_campaign"))
}}}if(D("int_cid")){$("#secondarycid").attr("value",D("int_cid"))
}else{$("#secondarycid").attr("value","")
}if(D("ext_src_id")){$("#src").attr("value",D("ext_src_id"))
}else{$("#src").attr("value","")
}if(D("int_src_id")){$("#secondarysrc").attr("value",D("int_src_id"))
}else{$("#secondarysrc").attr("value","")
}if(!D("s_campaign")&&D("int_cid")){if($("#cid").length>0){$("#cid").attr("value","")
}else{if($("#campaign_id").length>0){$("#campaign_id").attr("value","")
}}}if($(R).find("input[name='reEnterPassword']").length>0&&($(R).find("input[name='reEnterPassword']").val()!==$(R).find("input[name='password']").val())){$(R).find("input[name='reEnterPassword']").closest(".form-group").find(".icon-error").show();
$(R).find("input[name='reEnterPassword']").closest(".form-group").find(".icon-success").hide();
$(R).find("input[name='reEnterPassword']").closest(".form-group").find(".icon-warning").hide();
var W=$(R).find("input[name='pwd-mismatch-msg']").attr("value");
$(R).find("input[name='reEnterPassword']").closest(".form-group").find(".error-msg").append('<p><label  class="error" >'+W+"</label></p>");
$(R).find("input[name='reEnterPassword']").closest(".form-group").find(".error-msg").css("display","block");
$(R).find("input[name='reEnterPassword']").closest(".form-group").find(".error-msg p:eq(0)").hide();
$(R).find("input[name='reEnterPassword']").closest(".form-group").find(".error-msg label.error").css("display","block");
return false
}else{if($(O).find("#cq_captcha").length>0){var Z=$("#cq_captcha").val();
var X=$("#validateinvalidmsg").val();
var Q=$("#nocaptchamsg").val();
if(Z!==""&&Z!==undefined){$.ajax({url:"/bin/vmware/verifyAEMcaptcha",type:"POST",data:{captcha_response:Z,captchakeyToJava:captchakeyToJava}}).always(function(){}).done(function(ah){if(ah=="true"){captchaVal=true;
$(".form_captcha_error_msg").hide();
if(($(O).attr("id")==="oneBrandRegister")||($(O).attr("id")==="oneBrandAddNewUser")){OB_RegisterValidation(R,Z)
}else{var ae=window.location.pathname;
var ag=ae.replace(/\//g,"-");
if($.cookie("formPath")!=null&&$.cookie("formPath").includes(ag)=="false"){$.cookie("formPath",$.cookie("formPath")+","+ag,{expires:10,path:"/"})
}else{if($.cookie("formPath")==null){$.cookie("formPath",ag,{expires:10,path:"/"})
}}if($("#cid").length>0){var ah=[];
ah.push($(O).find("#cid").val());
var af=$(O).find('input[data-validate*="email"]').val().toLowerCase();
ah.push(af);
sc_sendForm($(O).attr("id"),ah)
}else{if($("#campaign_id").length>0){var ah=[];
ah.push($(O).find("#campaign_id").val());
var af=$(O).find('input[data-validate*="email"]').val().toLowerCase();
ah.push(af);
sc_sendForm($(O).attr("id"),ah)
}}if($(".disabledSubmitText").length>0){if($("#TheForm").length>0){$(R).find("input[type='submit']").parent().append("<img id='loadingImage' src='/files/high-touch-eval/images/icons/loading.gif' class='loadingImg'></img>");
var ai=$(O).serialize();
var ad=$(O).attr("action")+"?";
$.ajax({type:"POST",url:ad+ai,crossDomain:true,success:function(ak){$("#loadingImage").remove();
var aj=$(".disabledSubmitText").val();
$(R).find("input[type='submit']").attr("disabled","disabled");
$(R).find("input[type='submit']").val(aj)
},error:function(aj,al,ak){$("#loadingImage").remove()
}})
}}else{setTimeout(function(){R.submit()
},2000)
}}}else{$(".form_captcha_error_msg").show().empty().append(X);
captchaVal=false
}}).fail(function(ad){captchaVal=false
})
}else{$(".form_captcha_error_msg").show().empty().append(Q);
var U=window.location.pathname;
var ac=U.replace(/\//g,"-");
if($.cookie("formPath")!=null&&$.cookie("formPath").includes(ac)=="false"){$.cookie("formPath",$.cookie("formPath")+","+ac,{expires:10,path:"/"})
}else{if($.cookie("formPath")==null){$.cookie("formPath",ac,{expires:10,path:"/"})
}}if($("#cid").length>0){var V=[];
V.push($(O).find("#cid").val());
var S=$(O).find('input[data-validate*="email"]').val().toLowerCase();
V.push(S);
sc_sendForm($(O).attr("id"),V)
}else{if($("#campaign_id").length>0){var V=[];
V.push($(O).find("#campaign_id").val());
var S=$(O).find('input[data-validate*="email"]').val().toLowerCase();
V.push(S);
sc_sendForm($(O).attr("id"),V)
}}}}else{if($(O).find("#captchaDiv").length>0){var aa=$("#g-recaptcha-response").val();
if(captchaVal==true){if(aa!==""||aa!==undefined){$.ajax({url:"/bin/vmware/verifyRecaptcha",type:"POST",data:{recaptcha_response:aa}}).always(function(){}).done(function(ah){if(ah=="true"){$("#captchaError").hide();
$("#captchaErrorTwo").hide();
captchaVal=true;
if(($(O).attr("id")==="oneBrandRegister")||($(O).attr("id")==="oneBrandAddNewUser")){OB_RegisterValidation(R,Z)
}else{var ae=window.location.pathname;
var ag=ae.replace(/\//g,"-");
if($.cookie("formPath")!=null&&$.cookie("formPath").includes(ag)=="false"){$.cookie("formPath",$.cookie("formPath")+","+ag,{expires:10,path:"/"})
}else{if($.cookie("formPath")==null){$.cookie("formPath",ag,{expires:10,path:"/"})
}}if($("#cid").length>0){var ah=[];
ah.push($(O).find("#cid").val());
var af=$(O).find('input[data-validate*="email"]').val().toLowerCase();
ah.push(af);
sc_sendForm($(O).attr("id"),ah)
}else{if($("#campaign_id").length>0){var ah=[];
ah.push($(O).find("#campaign_id").val());
var af=$(O).find('input[data-validate*="email"]').val().toLowerCase();
ah.push(af);
sc_sendForm($(O).attr("id"),ah)
}}if($(".disabledSubmitText").length>0){if($("#TheForm").length>0){$(R).find("input[type='submit']").parent().append("<img id='loadingImage' src='/files/high-touch-eval/images/icons/loading.gif' class='loadingImg'></img>");
var ai=$(O).serialize();
var ad=$(O).attr("action")+"?";
$.ajax({type:"POST",url:ad+ai,crossDomain:true,success:function(ak){$("#loadingImage").remove();
var aj=$(".disabledSubmitText").val();
$(R).find("input[type='submit']").attr("disabled","disabled");
$(R).find("input[type='submit']").val(aj)
},error:function(aj,al,ak){$("#loadingImage").remove()
}})
}}else{if($(".surveydetails form[data-vmwareformname]").length>0){M()
}else{setTimeout(function(){R.submit()
},2000)
}}}}else{$("#captchaErrorTwo").show();
$("#captchaError").hide();
captchaVal=false;
grecaptcha.reset()
}}).fail(function(ad){captchaVal=false
})
}else{var U=window.location.pathname;
var ac=U.replace(/\//g,"-");
if($.cookie("formPath")!=null&&$.cookie("formPath").includes(ac)=="false"){$.cookie("formPath",$.cookie("formPath")+","+ac,{expires:10,path:"/"})
}else{if($.cookie("formPath")==null){$.cookie("formPath",ac,{expires:10,path:"/"})
}}if($("#cid").length>0){var V=[];
V.push($(O).find("#cid").val());
var S=$(O).find('input[data-validate*="email"]').val().toLowerCase();
V.push(S);
sc_sendForm($(O).attr("id"),V)
}else{if($("#campaign_id").length>0){var V=[];
V.push($(O).find("#campaign_id").val());
var S=$(O).find('input[data-validate*="email"]').val().toLowerCase();
V.push(S);
sc_sendForm($(O).attr("id"),V)
}}setTimeout(function(){R.submit()
},2000)
}}else{$(O).find("#captchaError").show();
$(O).find("#captchaErrorTwo").hide()
}}else{if($(O).attr("id")==="LoginForm"){J(R)
}else{if($(O).attr("id")==="RegisterForm"){k(R)
}else{if($(O).attr("id")==="UpdateForm"){n(R)
}else{if($(O).attr("id")==="oneBrandLogintest"){OB_LoginValidation(R)
}else{if(($(O).attr("id")==="oneBrandRegister")||($(O).attr("id")==="oneBrandAddNewUser")){OB_RegisterValidation(R,aa)
}else{if($(O).attr("id")==="oneBrandChangePassword"){OB_changePassword(R)
}else{if($(O).attr("id")==="oneBrandResetPassword"){OB_resetPassword(R)
}else{if($(O).attr("id")==="oneBrandForgotPassword"){OB_forgotPassword(R)
}else{if($(O).attr("id")==="oneBrandSendEmail"){OB_sendEmail(R)
}else{if($(O).attr("id")==="TrustcenterLoginForm"){var Y=$(R).find("input[name='email']").val();
restrictDomains(Y,function(ad){if(ad!=""){setTimeout(function(){B();
e(ad)
},100)
}else{$(G).hide();
J(R)
}})
}else{var U=window.location.pathname;
var ac=U.replace(/\//g,"-");
if($.cookie("formPath")!=null&&$.cookie("formPath").includes(ac)=="false"){$.cookie("formPath",$.cookie("formPath")+","+ac,{expires:10,path:"/"})
}else{if($.cookie("formPath")==null){$.cookie("formPath",ac,{expires:10,path:"/"})
}}if($("#cid").length>0){var V=[];
V.push($(O).find("#cid").val());
var S=$(O).find('input[data-validate*="email"]').val().toLowerCase();
V.push(S);
sc_sendForm($(O).attr("id"),V)
}if($("#campaign_id").length>0){var V=[];
V.push($(O).find("#campaign_id").val());
var S=$(O).find('input[data-validate*="email"]').val().toLowerCase();
V.push(S);
sc_sendForm($(O).attr("id"),V)
}if($(".disabledSubmitText").length>0){if($("#TheForm").length>0){$(R).find("input[type='submit']").parent().append("<img id='loadingImage' src='/files/high-touch-eval/images/icons/loading.gif' class='loadingImg'></img>");
var T=$(O).serialize();
var ab=$(O).attr("action")+"?";
$.ajax({type:"POST",url:ab+T,crossDomain:true,success:function(ae){$("#loadingImage").remove();
var ad=$(".disabledSubmitText").val();
$(R).find("input[type='submit']").attr("disabled","disabled");
$(R).find("input[type='submit']").val(ad)
},error:function(ad,af,ae){$("#loadingImage").remove()
}})
}}else{if($(".surveydetails form[data-vmwareformname]").length>0){M()
}else{setTimeout(function(){R.submit()
},2000)
}}}}}}}}}}}}}}}}});
function M(){var S=".surveydetails form[data-vmwareformname]";
var R=$(S).serialize();
var Q=$(S).attr("action")+"?";
$.ajax({type:"POST",url:Q+R,crossDomain:true,success:function(T){},error:function(T,V,U){}})
}$(".ui-autocomplete-input").on("change",function(){if($(this).val()!==""){setTimeout(function(){$(O).find("input[data-populate]").each(function(){if($(this).val()!==""){$(this).closest(".form-group").find(".icon-success").show();
$(this).closest(".form-group").find(".icon-error").hide();
$(this).closest(".form-group").find(".icon-warning").hide();
$(this).closest(".form-group").find(".error-msg").hide()
}else{$(this).closest(".form-group").find(".icon-warning").hide();
$(this).closest(".form-group").find(".icon-success").hide();
$(this).closest(".form-group").find(".icon-error").hide();
$(this).closest(".form-group").find(".error-msg").hide()
}})
},500)
}else{}});
$(".selectpicker").on("change",function(){$(this).closest(".form-group").find(".icon-warning").hide();
$(this).closest(".form-group").find(".icon-success").hide();
$(this).closest(".form-group").find(".icon-error").hide();
$(this).closest(".form-group").find(".error-msg").hide()
});
$('input[type="text"],input[type="password"]').on("input",function(){$(this).valid();
if($(this).valid()){$(this).closest(".form-group").find(".icon-warning").hide();
$(this).closest(".form-group").find(".icon-success").show();
$(this).closest(".form-group").find(".icon-error").hide();
$(this).closest(".form-group").find(".error-msg").hide()
}});
$(O).find("input[type='reset']").click(function(){$(".error-msg, .warning-msg, .icon-success, .icon-error, .icon-warning, .hidden-val,.validation-msg").hide();
$("#oneBrandRegister .form-control").css({border:"1px solid #ccc"});
$("#oneBrandResetPassword .form-control").css({border:"1px solid #ccc"});
$("#oneBrandForgotPassword .form-control").css({border:"1px solid #ccc"});
$("#oneBrandChangePassword .form-control").css({border:"1px solid #ccc"});
$("#oneBrandLogin .form-control").css({border:"1px solid #ccc"});
$("#oneBrandAddNewUser .form-control").css({border:"1px solid #ccc"});
$(O).find(".bootstrap-select .filter-option").text("");
$(O).find(".bootstrap-select .filter-option").each(function(Q){$(this).text(j[Q])
});
$(O).find("#captchaError").hide();
$(O).find("#captchaErrorTwo").hide();
$(".recaptcha-checkbox").removeClass("recaptcha-checkbox-checked").addClass("recaptcha-checkbox-clearOutline");
$(".recaptcha-checkbox").attr("aria-checked","false")
})
}var G=".backend-error-validation";
var e=function(K){$(G).html("");
$(G).html(K).show()
};
$("#loginform .form-container p a:first").on("click",function(K){K.preventDefault();
$(".backend-error-validation, #confirmMessage:first-child").html("");
$(".backend-error-validation, #confirmMessage").hide();
$("#loginform").hide();
p();
$("#registerform").show();
C();
autoComplete();
if(!h){if(typeof addPTracking!="undefined"){addPTracking(f+"_trial_registration")
}h=true
}});
$("#closeBtnP").on("click",function(){$("#close_modal_login").trigger("click")
});
function p(){var K=document.forms.RegisterForm.elements;
$(K).each(function(L,M){if(!$(M).is("[data-prepopulate]")){if($(M).is("input")){if(!($(M).is("input:checkbox")||$(M).is("input:submit"))){$(M).val("");
$(M).trigger("keyup")
}}}})
}var o=function(){this.doGet=function(K,M,L){$.ajax({url:K,type:"GET",success:M,dataType:"json",error:L})
};
this.doPost=function(L,K,N,M){$.ajax({url:L,type:"POST",dataType:"json",data:K,success:N,error:M})
}
};
function B(){$("#registerform,#updateform,.backend-error-validation,#confirmMessage").hide();
$(".modal-login,.overlay-brightcove,#loginform").show();
$('#loginform input[type="text"],#loginform input[type="password"]').val("");
$('#loginform input[type="text"],#loginform input[type="password"]').trigger("keyup")
}var g=function(){if(!K){var K=new o()
}else{}this.fetchLoginForm=function(N,M){var L="/hightoucheval/downloadFreeTrial"+urlParamStr+b();
$(".overlay-brightcove").append("<div id='loadingImageOverlay'><div><img src='/files/high-touch-eval/images/icons/loading.gif' class='loadingImg'></img></div></div>").show();
K.doGet(L,N,M)
};
this.loginUser=function(L,O,N){var M="/hightoucheval/loginUser"+urlParamStr+b();
K.doPost(M,L,O,N)
};
this.updateUser=function(L,O,N){var M="/hightoucheval/updateUser"+urlParamStr+b();
K.doPost(M,L,O,N)
};
this.updateAdditionalInfo=function(L,O,N){var M="/hightoucheval/updateAdditionalInfo"+urlParamStr+b();
K.doPost(M,L,O,N)
}
};
var F=function(){if(!K){var K=new o()
}else{}this.fetchRegisterForm=function(N,M){var L="/hightoucheval/getRegistrationForm"+w.regLocale+b();
K.doGet(L,N,M)
};
this.registerUser=function(L,O,N){var M="/hightoucheval/registerUser?p="+w.p+w.locale+b();
K.doPost(M,L,O,N)
};
this.createCustomer=function(L,O,N){var M="/hightoucheval/createCustomer?p="+w.p+w.locale+w.cid+w.pid+w.pvendorapp+b();
K.doPost(M,L,O,N)
}
};
var d=function(){this.downloadBinary=function(O,L){var N=location.href;
location.href=O;
if(utag_data.page_name){var M=utag_data;
var K=utag_data.page_name;
M.page_name=utag_data.page_name+" : Download_trial file";
M.downloadfilename=L;
M.event_name="downloadtrial";
utag.view(M);
utag_data.page_name=K;
utag_data.event_name=null
}if($(".noload").length){}else{setTimeout(function(){location.href=N
},7000)
}}
};
var s=function(){var M=new g();
var L=new d();
this.showLogin=function(){M.fetchLoginForm(_loginSuccessCB,_loginErrorCB)
};
this.getLoginForm=function(T){var S=new g();
var R={email:$(T).find("input[name='email']").val(),password:$(T).find("input[name='password']").val()};
S.loginUser(R,_loginUserSuccessCB,_loginUserErrorCB)
};
this.getUpdateForm=function(S){C();
$(G).html("");
var R={firstName:$(S).find("input[name='firstName']").val(),lastName:$(S).find("input[name='lastName']").val(),email:$(S).find("input[name='emailAddress']").val(),address1:$(S).find("input[name='address1']").val(),address2:$(S).find("input[name='address2']").val(),city:$(S).find("input[name='city']").val(),zipcode:$(S).find("input[name='PostCode']").val(),state:$(S).find("select[name='state']").val()||$(S).find("select[name='nostate']").val(),country:$(S).find("select[name='country_ariana']").val(),termsOfUse:"",company:$(S).find("input[name='company_name']").val(),workPhone:$(S).find("input[name='phone']").val(),customerNumber:$(S).find("input[name='customerNumber']").val()};
$(S).find("input[type='submit']").attr("disabled","disabled");
M.updateUser(R,_userUpdateSuccessCB,_userUpdateErrorCB)
};
_loginSuccessCB=function(R){$("form").find("input[type='submit']").removeAttr("disabled");
$("#loadingImage,#loadingImageOverlay").remove();
try{if(!R.nextAction){B();
e("System error Please try again.")
}else{if(R.nextAction=="SHOW_ERROR_MESSAGE"){if(R.status==="USER_VALIDATION_FAILURE"){r(R)
}else{if(!R.userMessage){}else{B();
e(R.userMessage)
}}}else{if(R.nextAction=="DOWNLOAD_BINARY"){$("#close_modal_login").trigger("click");
if(R.silentRegister==true){sc_sendForm("silentRegistration",$("input[name='campaign']").val())
}L.downloadBinary(R.downloadUrl,R.downloadFileName)
}else{if(R.nextAction=="PAGE_LOAD"){location.reload()
}else{if(R.nextAction=="REDIRECT"){location.href=R.redirectUrl
}else{if(!R.htmlContentValue){B();
e("System error Please try again.")
}else{if(R.nextAction=="AUTHENTICATION_REQUIRED"){B();
if(typeof addPTracking!="undefined"){if(!$(".downLoadFreeTrial").hasClass("noload")){addPTracking(f+"_trial_login")
}}}else{if(R.nextAction=="PROFILE_COMPLETION_REQUIRED"){$("#loginform,#registerform").hide();
$(".modal-login,#updateform").show();
if(typeof $("vmw-fb")!=="undefined"&&$("vmw-fb").vmwFB){buildModal.show("userManagePopup",{onShow:N})
}else{$(".overlay-brightcove").show()
}}else{if(R.nextAction=="QUESTIONARE_REQUIRED"){}}}}}}}}}C()
}catch(S){console.log(S)
}};
_loginErrorCB=function(R,T,S){$("form").find("input[type='submit']").removeAttr("disabled");
$("#loadingImage").remove()
};
_loginUserSuccessCB=function(R){$("form").find("input[type='submit']").removeAttr("disabled");
$("#loadingImage,#loadingImageOverlay").remove();
try{$(G).hide();
if($("#TrustcenterLoginForm").length){if(R.status=="AUTHENTICATION_SUCCESSFUL"||R.status=="SUCCESS"||R.nextAction=="PAGE_LOAD"||R.nextAction=="REDIRECT"||(R.status=="USER_VALIDATION_FAILURE"&&R.nextAction=="SHOW_ERROR_MESSAGE")){trustCenterSuccess();
return false
}}if(!R.nextAction){e("System error Please try again.")
}else{if(R.nextAction=="SHOW_ERROR_MESSAGE"){if(R.status==="USER_VALIDATION_FAILURE"){r(R)
}else{if(!R.userMessage){}else{$("#close_modal_login").trigger("click");
setTimeout(function(){B();
e(R.userMessage)
},100)
}}}else{if(R.nextAction=="PAGE_LOAD"){location.reload()
}else{if(R.nextAction=="REDIRECT"){location.href=R.redirectUrl
}else{if(R.nextAction=="DOWNLOAD_BINARY"){$("#close_modal_login").trigger("click");
if(R.silentRegister==true){sc_sendForm("silentRegistration",$("input[name='campaign']").val())
}L.downloadBinary(R.downloadUrl,R.downloadFileName)
}else{if(R.nextAction=="AUTHENTICATION_REQUIRED"){B();
$(G).html(R.userMessage).show()
}else{if(R.nextAction=="PROFILE_COMPLETION_REQUIRED"){$("#completePFormJson").val(R.htmlContentValue);
N(R.htmlContentValue)
}else{if(R.nextAction=="QUESTIONARE_REQUIRED"){$("#quesContent").html(R.htmlContentValue);
completeQuestionare("afterLogin")
}}}}}}}}C()
}catch(S){B();
$(G).html("System error").show()
}};
_loginUserErrorCB=function(R,T,S){B();
$(G).html("System error").show();
$("form").find("input[type='submit']").removeAttr("disabled");
$("#loadingImage").remove()
};
function P(W,V,T){var U=W.toLowerCase().split(" ").join("_"),R="";
var S="/content/dam/digitalmarketing/vmware/en/files/include/module/dfield/data/"+U+".js";
O(V);
$.getScript(S,function(){if(typeof ws.cc.info[U]!=="undefined"){var Y=ws.cc.info[U];
if(Y.hasOwnProperty("stateName")){var Z=Y.stateName;
var X=Y.state;
if(Z.length>0){$.each(Z,function(aa,ab){R+='<option value="'+X[aa]+'">'+ab+"</option>"
});
$("#UpdateForm select#state").html(R);
K(T)
}}else{Q(T)
}}else{Q(T)
}}).fail(function(){if(arguments[0].status==404){Q(T)
}})
}function K(R){$("#UpdateForm #nostate").closest(".form-helptext").hide().val("").addClass("ignore");
$("#UpdateForm #state").closest(".form-helptext").show().removeClass("ignore");
$("#UpdateForm #state").val(R);
$("#UpdateForm #state").selectpicker("refresh")
}function Q(R){$("#UpdateForm #state").closest(".form-helptext").hide().addClass("ignore").selectpicker("refresh");
$("#UpdateForm #nostate").closest(".form-helptext").show().removeClass("ignore");
$("#UpdateForm #nostate").val("").trigger("keyup");
$("#UpdateForm #nostate").val(R)
}function O(T){var S=new Array("AU","AT","BD","BE","BT","BR","BG","CA","CK","CR","CY","CZ","DK","EE","FJ","FI","FR","PF","DE","HU","IE","IT","LT","LU","MT","MH","MU","NL","NC","NZ","NO","PW","PG","PE","PL","PT","RO","RU","ES","SE","CH","TR","GB");
var U=false;
for(var R=0;
R<S.length;
R++){if(S[R]==T){U=true;
break
}}if(U){$('#UpdateForm input[name="EmailOpt"]').attr("checked",false)
}else{$('#UpdateForm input[name="EmailOpt"]').attr("checked",true)
}return false
}function N(R){if(R!=undefined&&R!=null&&R!=""){var S=JSON.parse(R);
var T=document.forms.UpdateForm.elements;
$('form[name="UpdateForm"] #nostate').closest(".form-helptext").hide();
$(T).each(function(V,W){var X=$(W).prop("id");
$(W).val(S[X]);
if(X=="country_ariana"){$(W).val(S.country);
$(W).selectpicker("refresh");
var U=$(W).find("option:selected").text();
P(U,S.country,S.state)
}})
}$("#updateform").show();
q=true;
$("#loginform,#registerform").hide()
}_userUpdateSuccessCB=function(R){$("form").find("input[type='submit']").removeAttr("disabled");
$("#loadingImage").remove();
try{if(!R.nextAction){B();
e("System error Please try again.")
}else{if(R.nextAction=="SHOW_ERROR_MESSAGE"){if(!R.userMessage){}else{B();
e(R.userMessage)
}}else{if(R.nextAction=="PAGE_LOAD"){location.reload()
}else{if(R.nextAction=="REDIRECT"){location.href=R.redirectUrl
}else{if(R.nextAction=="DOWNLOAD_BINARY"){$("#close_modal_login").trigger("click");
L.downloadBinary(R.downloadUrl,R.downloadFileName)
}else{if(R.status=="PROFILE_COMPLETION_FAILED"&&R.nextAction=="PROFILE_COMPLETION_REQUIRED"){B();
$(G).html(R.userMessage).show()
}else{if(R.nextAction=="QUESTIONARE_REQUIRED"){}}}}}}}}catch(S){B();
$(G).html("System error").show()
}};
_userUpdateErrorCB=function(R,T,S){$("form").find("input[type='submit']").removeAttr("disabled");
$("#loadingImage").remove();
B();
$(G).html("System error").show()
};
_userUpdateAddInfoSuccessCB=function(R){$("form").find("input[type='submit']").removeAttr("disabled");
$("#loadingImage").remove();
try{if(!R.nextAction){e("System error Please try again.")
}else{if(R.nextAction=="SHOW_ERROR_MESSAGE"){if(!R.userMessage){}else{e(R.userMessage)
}}else{if(R.nextAction=="PAGE_LOAD"){location.reload()
}else{if(R.nextAction=="REDIRECT"){location.href=R.redirectUrl
}else{if(R.nextAction=="DOWNLOAD_BINARY"){$("#close_modal_login").trigger("click");
L.downloadBinary(R.downloadUrl,R.downloadFileName)
}}}}}}catch(S){;
$(G).html("System error").show()
}};
_userUpdateAddInfoErrorCB=function(){$("form").find("input[type='submit']").removeAttr("disabled");
$("#loadingImage").remove();
$(G).html("System error").show()
}
};
var l=function(){var N=new F();
var K=new d();
var M=".backend-error-validation";
var O="#backend-errorRegisC";
this.showRegister=function(){N.fetchRegisterForm(_registerSuccessCB,_registerErrorCB)
};
this.getRegisterForm=function(R){var Q="No";
if($(".EmailOpt").is(":checked")){Q="Yes"
}var P={firstName:$(R).find("input[name='firstName']").val(),lastName:$(R).find("input[name='lastName']").val(),email:$(R).find("input[name='emailAddress']").val(),password:$(R).find("input[name='password']").val(),address1:$(R).find("input[name='address1']").val(),city:$(R).find("input[name='city']").val(),zipcode:$(R).find("input[name='PostCode']").val(),state:$(R).find("select[name='state']").val()||$(R).find("input[name='nostate']").val(),country:$(R).find("select[name='country']").val(),termsOfUse:"",company:$(R).find("input[name='company_name']").val(),workPhone:$(R).find("input[name='phone']").val(),src:encodeURI(location),optIn:Q};
N.createCustomer(P,_createCustomerSuccessCB,_createCustomerErrorCB)
};
_registerSuccessCB=function(P){$("form").find("input[type='submit']").removeAttr("disabled");
$("#loadingImage").remove();
try{if(!P.nextAction){e("System error Please try again.")
}else{if(P.nextAction=="SHOW_ERROR_MESSAGE"){if(!P.userMessage){}else{e(P.userMessage)
}}else{if(P.nextAction=="REDIRECT"){location.href=P.redirectUrl
}else{if(P.nextAction=="PAGE_LOAD"){location.reload()
}else{if(P.nextAction=="REGISTRATION_REQUIRED"&&!P.htmlContentValue){$(G).html(P.userMessage).show()
}else{$("#registerFormJson").val(P.htmlContentValue);
$("#registerFD").addClass("vmw-fb");
$(".vmw-fb").vmwFB();
$("#completeRegistration h4").clone().insertAfter("#tabs-regis .backend-error");
$("#tabs-regis h4").removeAttr("style").addClass("fb-ele-h1");
var R=$("#registerFD");
$("#hightouch_eval_registration_form #companyField input").val(comName);
$("#hightouch_eval_registration_form .city input").val(cityName);
$("#hightouch_eval_registration_form .zipcode input").val(zipCd);
$("#hightouch_eval_registration_form .phone input").val(phnDB);
$("#hightouch_eval_registration_form .address1 input").val(stAdd);
$('#hightouch_eval_registration_form #country select[name="country"]').data("value",contName);
$('#hightouch_eval_registration_form .state select[name="state"]').data("value",stateName);
C();
autoComplete();
$("#registerFD").live("vmwfb-loaded",function(W,V,U,S,T){getCountryDropDown("create")
})
}}}}}C()
}catch(Q){$(G).html(Q.message).show()
}};
_registerErrorCB=function(P,R,Q){$("form").find("input[type='submit']").removeAttr("disabled");
$("#loadingImage").remove()
};
_registerUserSuccess=function(P){$("form").find("input[type='submit']").removeAttr("disabled");
$("#loadingImage").remove();
try{if(!P.nextAction){e("System error Please try again.")
}else{if(P.nextAction=="SHOW_ERROR_MESSAGE"){if(!P.userMessage){}else{e(P.userMessage)
}}else{if(P.nextAction=="DOWNLOAD_BINARY"){if(typeof addPTracking!="undefined"){addPTracking(f+"_trial_registration2")
}$("#close_modal_login").trigger("click");
K.downloadBinary(P.downloadUrl,P.downloadFileName)
}else{if(P.nextAction=="REDIRECT"){location.href=P.redirectUrl
}else{if(P.nextAction=="PAGE_LOAD"){location.reload()
}else{if(P.nextAction=="AUTHENTICATION_REQUIRED"){$("#LoginForm input[name='email']").val($("#RegisterForm input[name='email']").val());
$(".formLoginButton").trigger("click");
$(".backend-error-validation").css({display:"block"})
}else{if(P.nextAction=="PROFILE_CREATION_REQUIRED"){if(typeof addPTracking!="undefined"){addPTracking(f+"_trial_registration2")
}$("#registerCFormJson").val(P.htmlContentValue);
L();
autoComplete()
}else{if(P.nextAction=="REGISTRATION_REQUIRED"){$(G).html(P.userMessage).show()
}else{if(P.nextAction=="REGISTRATION_FAILED"){$(G).html(P.userMessage).show()
}}}}}}}}}C()
}catch(Q){$(G).html("System error").show()
}};
_registerUserError=function(P,R,Q){$("form").find("input[type='submit']").removeAttr("disabled");
$("#loadingImage").remove();
$(G).html("System error").show()
};
function L(){}_createCustomerSuccessCB=function(P){$("form").find("input[type='submit']").removeAttr("disabled");
$("#loadingImage").remove();
try{if(P.status=="REGISTRATION_SUCCESSFUL"&&P.nextAction=="REGISTER_SUCCESS_CONFIRM"){var S=[];
S.push($("input[name='campaign']").val());
var Q=$("form#RegisterForm").find('input[data-validate*="email"]').val().toLowerCase();
S.push(Q);
sc_sendForm("RegisterForm",S);
if(!P.htmlContentKey){$(".modal-login #registerform").hide();
$("#confirmMessage :first-child").html(P.userMessage);
$("#confirmMessage").show();
C()
}else{if(P.htmlContentKey=="LOGIN_FORM"){if(typeof addPTracking!="undefined"){addPTracking(f+"registration_thankyou")
}$("#registerform").show();
$(G).html(P.userMessage).show()
}}if(typeof addPTracking!="undefined"){addPTracking(f+"registration_thankyou")
}}else{if(P.nextAction=="REGISTRATION_REQUIRED"&&P.status=="CREATE_USER_FAILED"){$(G).html(P.userMessage).show()
}else{if(P.nextAction=="REDIRECT"){location.href=P.redirectUrl
}else{if(P.status=="PROFILE_CREATION_FAILED"&&P.nextAction=="PROFILE_CREATION_REQUIRED"){$(G).html(P.userMessage).show()
}else{if(P.nextAction=="AUTHENTICATION_REQUIRED"){$(G).html(P.userMessage).show();
$("#LoginForm input[name='email']").val($("#RegisterForm input[name='emailAddress']").val());
$("#loginform").show();
$("#registerform").hide()
}}}}}}catch(R){$(G).html("System error").show()
}};
_createCustomerErrorCB=function(P,R,Q){$("form").find("input[type='submit']").removeAttr("disabled");
$("#loadingImage").remove();
$(G).html("System error").show()
}
};
var c=new s();
function J(K){$(K).find("input[type='submit']").parent().append("<img id='loadingImage' src='/files/high-touch-eval/images/icons/loading.gif' class='loadingImg'></img>");
$(K).find("input[type='submit']").attr("disabled","disabled");
c.getLoginForm(K)
}function n(K){$(K).find("input[type='submit']").parent().append("<img id='loadingImage' src='/files/high-touch-eval/images/icons/loading.gif' class='loadingImg'></img>");
$(K).find("input[type='submit']").attr("disabled","disabled");
c.getUpdateForm(K)
}var m=new l();
function k(K){$(K).find("input[type='submit']").parent().append("<img id='loadingImage' src='/files/high-touch-eval/images/icons/loading.gif' class='loadingImg'></img>");
$(K).find("input[type='submit']").attr("disabled","disabled");
m.getRegisterForm(K)
}var a=null;
var c=new s();
var m=new l();
var A;
var t="";
var w={};
var x="/c/portal/logout";
var v=false;
var f="";
var h=false;
var q=false;
var H="";
function u(){var M=location.search.substring(1).split("&");
if(M){var O=M.length;
for(var N=0;
N<O;
N++){var Q=M[N].split("=");
var L=0;
if(Q){w[Q[L]]=Q[L+1];
t=Q[L+1]
}}if(w.hasOwnProperty("activation")&&w.activation=="true"){w.activation="&activation=true"
}else{w.activation=""
}if(w.hasOwnProperty("cid")){w.cid="&cid="+w.cid
}else{w.cid=""
}if(w.hasOwnProperty("sid")){w.sid="&sid="+w.sid
}else{w.sid=""
}if(w.hasOwnProperty("pvendorapp")){w.pvendorapp="&pvendorapp="+w.pvendorapp
}else{w.pvendorapp=""
}if(w.hasOwnProperty("pid")){w.partnerName=w.pid;
w.pid="&pid="+w.pid
}else{w.pid=""
}if(w.hasOwnProperty("src")){w.src="&src="+w.src
}else{w.src=""
}if(w.hasOwnProperty("vendorapp")){w.vendorapp="&vendorapp="+w.vendorapp
}else{w.vendorapp=""
}}if($("input[name='locale']").length){var K=$("input[name='locale']").val();
if(K===undefined||K===null||K===""){w.regLocale="?locale=us-en";
w.locale="&locale=us-en"
}else{w.regLocale="?locale="+K;
w.locale="&locale="+K
}}else{w.locale="&locale=us-en";
w.regLocale="?locale=us-en"
}if($("input[name='p']").length){var P=$("input[name='p']").val();
if(P===undefined||P===null||P===""){}else{w.p=P
}}else{}urlParamStr=window.location.search;
if(urlParamStr==""||urlParamStr==null){if($("#TrustcenterLoginForm").length){urlParamStr="?p=voa"+w.locale
}else{urlParamStr="?p="+w.p+w.locale
}}else{urlParamStr=urlParamStr+"&p="+w.p+w.locale
}}var r=function(K){$(".modal-login").show();
$("#loginform").hide();
if($("input[name='registered']").length){var L=$("input[name='registered']").val();
if(L){$("#confirmMessage :first-child").html(K.userMessage);
$("#confirmMessage").show()
}else{$("#loginform").hide();
setTimeout(function(){$("#confirmMessage :first-child").html(K.userMessage);
$("#confirmMessage").show();
v="true"
},100)
}}else{$("#loginform").hide();
e(K.userMessage);
v="true"
}C()
};
$(document).on("click",".downLoadFreeTrial",function(K){K.preventDefault();
if($(this).hasClass("white-btn")){f="bt"
}else{f="tp"
}$("#loginform,#registerform,#updateform,#confirmMessage,.backend-error-validation").hide();
if(q){$(".modal-login,.overlay-brightcove,#updateform").show()
}else{c.showLogin()
}h=false
});
$(document).on("click","#close_modal_login, .overlay-brightcove",function(K){K.preventDefault();
$(G).removeClass("tradeBeamUser");
$(".overlay-brightcove, .modal-login").hide();
if(v==="true"){v="false";
location.reload()
}});
$(".modal-login").on("click",function(K){if(K.target!=this){return
}$(G).removeClass("tradeBeamUser");
$(this).hide();
$(".overlay-brightcove").hide();
if(v==="true"){v="false";
location.reload()
}});
var x="/c/portal/logout";
$("a#user-signout").on("click",function(K){K.preventDefault();
$.ajax({type:"POST",dataType:"jsonp",crossDomain:true,url:location.protocol+"//"+z(x),success:function(L){location.reload(true)
},error:function(L,N,M){location.reload(true)
}})
});
var z=function(P){var O=location.hostname,K="www",N="my";
var M=O.replace(K,N);
var L=M+P;
return L
};
var b=function(){var K=new Date();
var L="&ts="+K.getTime();
return L
};
function C(){if($(".modalLoginTop").length>0){$(".modal-login").removeClass("modalLoginTop")
}if($(".modal-login").css("display")==="block"){var M=$(window).height()-10;
var L=$(".modal-content :visible").outerHeight();
if(M<L+100){var K=$(".modal-content").outerHeight()+5;
$(".modal-content, .containing-block").height(M-120);
$(".modal-content").css("overflow-y","auto");
$(".modal-content").css("overflow-x","hidden")
}else{$(".modal-content, .containing-block").height("auto")
}$(".modal-login").addClass("modalLoginTop");
$(".vertical-alignment-helper").addClass("vertical-alignment-helper-modal");
$(".vertical-align-center").addClass("vertical-align-center-modal")
}}function E(){u();
if(w.partnerName!==undefined){if(w.partnerName.toLowerCase().indexOf("vmware")>-1){$(".page-logo").show()
}else{$(".page-logo").hide()
}}if((location.search.toLowerCase().indexOf("activation")>=0)&&($("a.noload").length==0)){if($(".downLoadFreeTrial").length>1){$(".downLoadFreeTrial").trigger("click")
}}}E();
$(window).resize(function(){C()
})
});
var comName,contName,stateName,cityName,zipCd,phnDB,stAdd;
$(document).ready(function(){$.ajax({url:"//api.demandbase.com/api/v2/ip.json?key=577dbe1a86de743479ae4142b265fbdc10e93c5f",dataType:"jsonp"}).done(function(a){comName=a.company_name?a.company_name:a.registry_company_name;
contName=a.country;
stateName=a.state;
cityName=a.city;
stAdd=a.street_address;
zipCd=a.zip;
phnDB=a.phone
}).fail(function(){console.log("error")
})
});
window.dbAsyncInit=function(){var a=Demandbase.Connectors.WebForm;
a.connect({emailID:"Email",companyID:"company_ariana",key:"577dbe1a86de743479ae4142b265fbdc10e93c5f"});
setTimeout(function(){if($.browser.msie&&($.browser.version=="9.0"||$.browser.version=="8.0")){$("#company_ariana").css({color:"#333"})
}},3000)
};
var autoCompleteInit=function(){var b=document.createElement("script");
b.type="text/javascript";
b.async=true;
b.id="db_form";
b.src=("https:"==document.location.protocol?"https://":"http://")+"scripts.demandbase.com/formWidget.js";
var a=document.getElementsByTagName("script")[0];
a.parentNode.insertBefore(b,a)
};
function db_hook_after_parse(b,a){if(a&&a=="ip"){$("#RegisterForm input[name='address1']").val(b.street_address);
$("#RegisterForm input[name='city']").val(b.city);
$("#RegisterForm input[name='PostCode']").val(b.zip);
$("#RegisterForm select[name='state']").val(b.state);
$("#RegisterForm select[name='country_ariana']").val(b.country);
$("#UpdateForm input[name='address1']").val(b.street_address);
$("#UpdateForm input[name='city']").val(b.city);
$("#UpdateForm input[name='zipcode']").val(b.zip);
$("#UpdateForm select[name='state']").val(b.state);
$("#UpdateForm select[name='country']").val(b.country)
}}var autoComplete=function(){if($("#company_ariana").length){$("#company_ariana").attr("id","company")
}};
function OB_LoginValidation(a){$.ajax({url:"/bin/vmware/onebrand/validatecustomer",method:"POST",data:{user:$(a).find("#username").val(),pwd:$(a).find("#password").val()},success:function(b){var c=$.parseJSON(b);
if(c.response.status==="success"){}else{OB_validationLoginError($(a),c)
}}})
}function OB_RegisterValidation(g,a){var h="";
if($(".special-acc")){h=$(".special-acc input[type=checkbox]:checked").map(function(){return $(this).attr("path")
}).get().toString()
}var d=$(g).find("#email").val();
var f=$(g).find('input[name="association"]:checked').val();
var c=$("#reg-failed-invalid-usr-msg").val();
var e=$("#reg-failed-vmware-user-msg").val();
if(d.indexOf("@vmware.com")==-1&&f=="P"){$(".validation-msg").remove();
$('<div class="validation-msg validation_error"></div>').insertBefore($(g).find(".submit-form:first"));
$(".wrapper-brand .icon-success").hide();
$("#oneBrandRegister .form-control").css({border:"1px solid #f5aca6"});
$("#oneBrandResetPassword .form-control").css({border:"1px solid #f5aca6"});
$("#oneBrandForgotPassword .form-control").css({border:"1px solid #f5aca6"});
$("#oneBrandChangePassword .form-control").css({border:"1px solid #f5aca6"});
$("#oneBrandAddNewUser .form-control").css({border:"1px solid #f5aca6"});
$(".validation-msg").html(c)
}else{if(g.id!="oneBrandAddNewUser"&&d.match(/@vmware.com$/)){$(".validation-msg").remove();
$('<div class="validation-msg validation_error"></div>').insertAfter($(g).find("#email"));
$(".wrapper-brand .icon-success").hide();
$("#oneBrandRegister .form-control").css({border:"1px solid #f5aca6"});
$("#oneBrandResetPassword .form-control").css({border:"1px solid #f5aca6"});
$("#oneBrandForgotPassword .form-control").css({border:"1px solid #f5aca6"});
$("#oneBrandChangePassword .form-control").css({border:"1px solid #f5aca6"});
$("#oneBrandAddNewUser .form-control").css({border:"1px solid #f5aca6"});
$(".validation-msg").html(e)
}else{var b="";
if(g.id!="oneBrandAddNewUser"){b=captchakeyToJava
}$.ajax({url:"/bin/vmware/onebrand/createcustomer",method:"POST",data:{user:$(g).find("#username").val(),pwd:$(g).find("#password").val(),fn:$(g).find("#fname").val(),ln:$(g).find("#lname").val(),email:$(g).find("#email").val(),access:$(g).find('input[name="association"]:checked').val(),comp:$(g).find("#company_name").val(),gcaptcha_response:a,dir:h,captchakeyToJava:b},success:function(i){var j=$.parseJSON(i);
if(j.response.status==="success"){OB_validationSuccess($(g),j)
}else{OB_validationError($(g),j)
}}})
}}}function OB_sendEmail(d){var f="";
if($(d).find("#emailAddressOB")!=null){f=$(d).find("#emailAddressOB").val()
}var g="all";
if($(d).find('input[name="emailType"]:checked')!=undefined){g=$(d).find('input[name="emailType"]:checked').val()
}var c=$(d).find("#message").val();
var a=/<[a-z][\s\S]*>/i;
var b;
if(a.test(c)){b=c.replace(/(<((?!br)[^>]+)>)/ig,"");
var e=b.split(/\n|\s\n/);
b=e.join("<br>\n")+"<br>"
}else{b=c;
var e=b.split(/\n|\s\n/);
b=e.join("<br>\n")+"<br>"
}$.ajax({url:"/bin/vmware/onebrand/sendemail",method:"POST",data:{status:g,subject:$(d).find("#subject").val(),message:b,emailList:f},success:function(h){var i=$.parseJSON(h);
if(i.response.status==="success"){OB_sendEmailSuccess($(d),i);
$(d).find('input[type="reset"]').removeAttr("disabled");
$(d).find('input[type="reset"]').click();
$(d).find('input[type="reset"]').attr("disabled","disabled");
$(d).find('input[type="reset"]').show()
}else{OB_validationError($(d),i)
}}})
}function OB_forgotPassword(a){var b=$(a).find("#email").val()||$(a).find("#username").val();
if(b.match(/@vmware.com$/)){$("#oneBrandForgotPassword .vmwareUserMessage").show();
$("#oneBrandForgotPassword .btn").prop("disabled",true)
}else{$("#oneBrandForgotPassword .vmwareUserMessage").hide();
$("#oneBrandForgotPassword .btn").prop("disabled",false);
$.ajax({url:"/bin/vmware/onebrand/forgotpassword",method:"POST",data:{email:b},success:function(c){var d=$.parseJSON(c);
if(d.response.status==="success"){OB_validationSuccess($(a),d)
}else{OB_validationError($(a),d)
}}})
}}function OB_changePassword(a){$.ajax({url:"/bin/vmware/onebrand/changepassword",method:"POST",data:{password:$(a).find("#currentpassword").val(),npassword:$(a).find("#password").val()},success:function(b){var c=$.parseJSON(b);
if(c.response.status==="success"){OB_validationSuccess($(a),c)
}else{OB_validationError($(a),c)
}}})
}function OB_resetPassword(d){var a,c;
if(window.location.href.indexOf("user")!==-1){a=location.search.substring(1).split("&");
for(var b=0;
b<a.length;
b++){c=a[b].split("=")
}}$.ajax({url:"/bin/vmware/onebrand/changepassword",method:"POST",data:{npassword:$(d).find("#password").val(),uuid:c[1]},success:function(e){var f=$.parseJSON(e);
if(f.response.status==="success"){OB_validationSuccess($(d),f)
}else{OB_validationError($(d),f)
}}})
}function OB_validationSuccess(b,c){$(".validation-msg").remove();
var a;
if(c.response){a=$("input[id=reg-success-msg]").attr("value")
}else{a=c.response.message
}$('<div class="validation-msg validation_success"></div>').insertBefore($(b).find(".submit-form:first"));
$("#oneBrandRegister .form-control").css({border:"1px solid #ccc"});
$("#oneBrandRegister .icon-success").show();
$("#oneBrandResetPassword .form-control").css({border:"1px solid #ccc"});
$("#oneBrandResetPassword .icon-success").show();
$("#oneBrandForgotPassword .form-control").css({border:"1px solid #ccc"});
$("#oneBrandForgotPassword .icon-success").show();
$("#oneBrandChangePassword .form-control").css({border:"1px solid #ccc"});
$("#oneBrandChangePassword .icon-success").show();
$("#oneBrandAddNewUser .form-control").css({border:"1px solid #ccc"});
$("#oneBrandAddNewUser .icon-success").show();
if(typeof a!="undefined"){$(".validation-msg").html(a)
}}function OB_sendEmailSuccess(a,b){$(".validation-msg").remove();
$("#oneBrandSendEmail .form-control").css({border:"1px solid #ccc"});
$("#oneBrandSendEmail .icon-success").show()
}function OB_validationError(b,c){var a;
if(c.response){if(c.response.status==="fullaccess"){a=$("input[id=reg-fullaccess-failed-msg]").attr("value")
}else{if(c.response.status==="deactivated"){a=$("input[id=reg-deactivated-failed-msg]").attr("value")
}else{if(c.response.status==="failed"){a=$("input[id=reg-failed-msg]").attr("value")
}else{if(c.response.status==="emailfailed"){a=$("input[id=email-failed-msg]").attr("value")
}else{if(c.response.status==="invalidemail"){a=$("input[id=invalid-email-msg]").attr("value")
}else{if(c.response.status==="invalidcaptcha"){a=$("#validateinvalidmsg").val()
}else{if(c.response.status==="invalidpassword"){a=$("#reEnterPassword").data("error")
}}}}}}}}else{a=$("input[id=reg-failed-generic-msg]").attr("value")
}$(".validation-msg").remove();
$('<div class="validation-msg validation_error"></div>').insertBefore($(b).find(".submit-form:first"));
$(".wrapper-brand .icon-success").hide();
$("#oneBrandRegister .form-control").css({border:"1px solid #f5aca6"});
$("#oneBrandResetPassword .form-control").css({border:"1px solid #f5aca6"});
$("#oneBrandForgotPassword .form-control").css({border:"1px solid #f5aca6"});
$("#oneBrandChangePassword .form-control").css({border:"1px solid #f5aca6"});
$("#oneBrandAddNewUser .form-control").css({border:"1px solid #f5aca6"});
if(typeof a!="undefined"){$(".validation-msg").html(a)
}}function OB_validationLoginError(b,c){var a;
if(c.response){a=c.response.message
}else{a=c.response.message
}$(".validation-msg").remove();
$('<div class="validation-msg validation_error"></div>').insertBefore($(b).find(".form-group:first"));
$(".wrapper-brand .icon-success").hide();
$("#oneBrandLogin .form-control").css({border:"1px solid #f5aca6"});
$(".validation-msg").html(a)
}$(document).ready(function(){$('#oneBrandForgotPassword input[name="username"]').keyup(function(){$("#oneBrandForgotPassword .vmwareUserMessage").hide();
$("#oneBrandForgotPassword .btn").prop("disabled",false)
});
$('#oneBrandRegister input[name="email"]').keyup(function(){$("#oneBrandRegister #vmwareUserMessage").hide();
$("#oneBrandRegister .btn").prop("disabled",false)
});
$("form#oneBrandForgotPassword input#username").blur(function(i){var h=$("form#oneBrandForgotPassword").find("#username").val();
if(h.indexOf("@vmware.com")>0){$("#oneBrandForgotPassword .vmwareUserMessage").show();
$("#oneBrandForgotPassword .btn").prop("disabled",true)
}else{$("#oneBrandForgotPassword .vmwareUserMessage").hide();
$("#oneBrandForgotPassword .btn").prop("disabled",false)
}});
$("form#oneBrandRegister input#email").blur(function(i){var h=$("form#oneBrandRegister").find("#email").val();
if(h.indexOf("@vmware.com")>0){$("#oneBrandRegister #vmwareUserMessage").show();
$("#oneBrandRegister .btn").prop("disabled",true)
}else{$("#oneBrandRegister #vmwareUserMessage").hide();
$("#oneBrandRegister .btn").prop("disabled",false)
}});
$("form#oneBrandLogin input#username").blur(function(k){var i=$("form#oneBrandLogin").find("#username").val();
if(i.indexOf("@vmware.com")>0){$body=$("body");
$("body").attr("id","loading");
document.getElementById("loading").style.display="block";
var j=window.location.protocol+"//"+window.location.hostname;
if(window.location.port.length>0){j=j+":"+window.location.port
}var h="/brand.html";
if(window.location.search!=""&&window.location.search!=" "){h=window.location.search.substr(1).split("ref=")[1].split("&")[0]
}window.open("https://mbei.vmware.com:8443/oauth-server/oauth/authorize?response_type=token&redirect_uri="+j+"/bin/vmware/onebrand/authenticatevidmcustomer?url="+h+"&client_id=OneBrand&idp=vidm","_self")
}});
$("form#oneBrandLogin,form#oneBrandChangePassword").submit(function(k){var i=$("form#oneBrandLogin").find("#username").val();
if(undefined!=i&&i.indexOf("@vmware.com")>0){$body=$("body");
$("body").attr("id","loading");
document.getElementById("loading").style.display="block";
var j=window.location.protocol+"//"+window.location.hostname;
if(window.location.port.length>0){j=j+":"+window.location.port
}var h="/brand.html";
if(window.location.search!=""&&window.location.search!=" "){h=window.location.search.substr(1).split("ref=")[1].split("&")[0]
}window.open("https://mbei.vmware.com:8443/oauth-server/oauth/authorize?response_type=token&redirect_uri="+j+"/bin/vmware/onebrand/authenticatevidmcustomer?url="+h+"&client_id=OneBrand&idp=vidm","_self")
}if($("#oneBrandChangePassword input[name='currentpassword']").val()==""){k.preventDefault();
$("#oneBrandChangePassword input[name='currentpassword']").closest(".form-group").find(".icon-warning").show();
$("#oneBrandChangePassword input[name='currentpassword']").closest(".form-group").find(".icon-success").hide();
$("#oneBrandChangePassword input[name='currentpassword']").closest(".form-group").find(".error-msg ").addClass("warning-msg");
$("#oneBrandChangePassword input[name='currentpassword']").closest(".form-group").find(".error-msg ").show();
return false
}else{$("#oneBrandChangePassword input[name='currentpassword']").closest(".form-group").find(".icon-warning").hide();
$("#oneBrandChangePassword input[name='currentpassword']").closest(".form-group").find(".icon-success").show();
$("#oneBrandChangePassword input[name='currentpassword']").closest(".form-group").find(".error-msg ").hide()
}if($("#oneBrandLogin input[name='password']").val()==""){k.preventDefault();
$("#oneBrandLogin input[name='password']").closest(".form-group").find(".icon-warning").show();
$("#oneBrandLogin input[name='password']").closest(".form-group").find(".icon-success").hide();
$("#oneBrandLogin input[name='password']").closest(".form-group").find(".error-msg ").addClass("warning-msg");
$("#oneBrandLogin input[name='password']").closest(".form-group").find(".error-msg ").show();
return false
}else{$("#oneBrandLogin input[name='password']").closest(".form-group").find(".icon-warning").hide();
$("#oneBrandLogin input[name='password']").closest(".form-group").find(".icon-success").show();
$("#oneBrandLogin input[name='password']").closest(".form-group").find(".error-msg ").hide()
}});
$("form#oneBrandLogin,form#oneBrandChangePassword").keyup(function(h){if($("#oneBrandChangePassword input[name='currentpassword']").val()==""){h.preventDefault();
$("#oneBrandChangePassword input[name='currentpassword']").closest(".form-group").find(".icon-success").hide()
}else{$("#oneBrandChangePassword input[name='currentpassword']").closest(".form-group").find(".icon-success").show()
}if($("#oneBrandLogin input[name='password']").val()==""){h.preventDefault();
$("#oneBrandLogin input[name='password']").closest(".form-group").find(".icon-success").hide()
}else{$("#oneBrandLogin input[name='password']").closest(".form-group").find(".icon-success").show()
}});
if(window.location.href.indexOf("/brand/portal.html")!=-1){var a=location.search.substring(1).split("?");
var g=a[0].split("ref=");
var f=$("#invalid").attr("value");
if(window.location.href.indexOf("failed")!=-1){$("#oneBrandLogin .validation-msg").remove();
$(".wrapper-brand .icon-success").hide();
$("#oneBrandLogin .form-control").css({border:"1px solid #f5aca6"});
$("#oneBrandLogin").prepend('<div class="validation-msg validation_error">'+f+"</div>")
}if(typeof(g[1])!="undefined"&&!((g[1].indexOf("www")!=-1)||(g[1].indexOf("http")!=-1))){if(g[1].indexOf("&")!=-1){var e=g[1].replace("&failed=true","");
e=e.replace("&","?");
$("#oneBrandLogin").attr("action",e)
}else{$("#oneBrandLogin").attr("action",g[1])
}}}if(window.location.href.indexOf("activateUser")!=-1&&window.location.href.indexOf("uuid")!=-1){var a=location.search.substring(1).split("&");
var d;
for(var c=0;
c<a.length;
c++){d=a[c].split("=")
}b(d[1])
}function b(h){$.ajax({url:"/bin/vmware/onebrand/activatecustomer",method:"POST",data:{uuid:h},success:function(i){$(".activation-message").html($.parseJSON(i).response.message)
}})
}});
var trustCenterSuccess=function(){$(".modal-login,#trustcenterloginform").hide();
$(".overlay-brightcove").append("<div id='loadingImageOverlay'><div><img src='/files/high-touch-eval/images/icons/loading.gif' class='loadingImg'></img></div></div>").show();
var a=$("#selectedPrivateDoc").val();
$("#selectedPrivateDoc").val("");
$.ajax({cache:false,type:"POST",url:"/bin/vmware/getUserInfo",success:function(b){if(b!=null){if(b.isUserLoggedIn==true){showUserDetails(b.firstName,b.lastName)
}$.ajax({cache:false,type:"POST",data:{requestJSON:a},dataType:"JSON",url:"/bin/vmware/signNDA",success:function(c){$("#loadingImageOverlay").remove();
$(".overlay-brightcove").hide();
if(c!=null){if(c.error!=null){$(".user-msg.error").html(c.error);
$(window).scrollTop(0)
}else{if(typeof(Storage)!=="undefined"){console.log("localStorage/sessionStorage available");
localStorage.setItem("agreementid",c.agreementid);
localStorage.setItem("signingurl",c.signingurl);
lightbox=new VMW.Lightbox("ndaform");
var d='<iframe frameborder="0" src="'+localStorage.signingurl+'" class="olay-iframe"></iframe><div class="innerCrlPopLeft"></div><div class="innerCrlPopRight"></div><div class="innerCrlPopBtm"></div>';
lightbox.setContent(d);
lightbox.show();
localStorage.removeItem("signingurl")
}else{console.log("Sorry! No Web Storage support..")
}}}},error:function(c){$("#loadingImageOverlay").remove();
$(".overlay-brightcove").hide();
location.href=location.protocol+"//"+location.hostname+location.pathname
}});
return false
}},error:function(b){console.log("Error in fetching user info")
}})
};
var restrictDomains=function(b,c){var a=window.parent.document.getElementById("locale").value;
$.ajax({cache:false,type:"GET",url:"/bin/vmware/getRestrictedDomains?email="+b+"&locale="+a,success:function(d){if(d!=null){if(d.isRestrictedDomain==true){c("This domain is restricted")
}else{if(d.isRestrictedDomain==false){c("")
}}}else{c("Error occured. Kindly try after some time")
}},error:function(d){c("Error occured. Kindly try after some time")
}})
};
var showUserDetails=function(d,a){var c="";
var e=document.getElementById("welcomeText").value;
var b=document.getElementById("signoutText").value;
if(d!==undefined){c='<div id="signin" class="b-row"><div class="user-status"><p class="user-msg error"></p><div class="user-detail float-r"><div class="user-name">'+e+" "+d+" "+a.charAt(0)+'</div><a href="javascript:void(0);" id="trustcenter-user-signout" class="user-link">'+b+"</a></div></div></div>"
}else{c='<div id="signin" class="b-row"><div class="user-status"><p class="user-msg error"></p><div class="user-detail float-r"><div class="user-name">'+e+' User</div><a href="javascript:void(0);" id="trustcenter-user-signout" class="user-link">'+b+"</a></div></div></div>"
}$(".content-container").prepend(c)
};
$.ajax({url:"/content/dam/digitalmarketing/vmware/gated-asset.json",success:function(b,a){$.each(b.URLObj,function(c,f){if(f.thankyou+".html"==window.location.pathname){var e=f.formpage;
var d=e.replace(/\//g,"-");
if($.cookie("formPath")!=null){if($.cookie("formPath").includes(d+".html")==true){return true
}else{window.location.href=f.formpage+".html"
}}else{window.location.href=f.formpage+".html"
}}})
}});
if(typeof digitalData!=="undefined"){digitalData.page.attributes.formPrefilled=false
}$(document).ready(function(){if($("[data-prepopulate]").length>0&&$(["show_hide_toggle"]).length>0){if(typeof digitalData!=="undefined"){digitalData.page.attributes.formPrefilled=true
}if($("#RegisterForm").length==0){$("[data-prepopulate]").closest(".form-helptext").hide();
$("[show_hide_toggle]").on("click",function(){if($(this).attr("show_hide_toggle")==="false"){$(this).attr("show_hide_toggle","true");
$("[data-prepopulate]").closest(".form-helptext").show()
}else{$(this).attr("show_hide_toggle","false");
$("[data-prepopulate]").closest(".form-helptext").hide()
}})
}function b(j,i,g){var h=j.toLowerCase().split(" ").join("_"),e="";
var f="/content/dam/digitalmarketing/vmware/en/files/include/module/dfield/data/"+h+".js";
c(i);
$.getScript(f,function(){if(typeof ws.cc.info[h]!=="undefined"){var l=ws.cc.info[h];
if(l.hasOwnProperty("stateName")){var m=l.stateName;
var k=l.state;
if(m.length>0){$.each(m,function(n,o){e+='<option value="'+k[n]+'">'+o+"</option>"
});
$("#RegisterForm select#state").html(e);
a(g)
}}else{d(g)
}}else{d(g)
}}).fail(function(){if(arguments[0].status==404){d(g)
}})
}function a(e){$("#RegisterForm #nostate").closest(".form-helptext").hide().val("").addClass("ignore");
$("#RegisterForm #state").closest(".form-helptext").show().removeClass("ignore");
$("#RegisterForm #state").val(e);
$("#RegisterForm #state").selectpicker("refresh")
}function d(e){$("#RegisterForm #state").closest(".form-helptext").hide().addClass("ignore").selectpicker("refresh");
$("#RegisterForm #nostate").closest(".form-helptext").show().removeClass("ignore");
$("#RegisterForm #nostate").val("").trigger("keyup");
$("#RegisterForm #nostate").val(e)
}function c(g){var f=new Array("AU","AT","BD","BE","BT","BR","BG","CA","CK","CR","CY","CZ","DK","EE","FJ","FI","FR","PF","DE","HU","IE","IT","LT","LU","MT","MH","MU","NL","NC","NZ","NO","PW","PG","PE","PL","PT","RO","RU","ES","SE","CH","TR","GB");
var h=false;
for(var e=0;
e<f.length;
e++){if(f[e]==g){h=true;
break
}}if(h){$('input[name="EmailOpt"]').attr("checked",false)
}else{$('input[name="EmailOpt"]').attr("checked",true)
}return false
}$.ajax({url:"//api.demandbase.com/api/v2/ip.json?key=577dbe1a86de743479ae4142b265fbdc10e93c5f",dataType:"jsonp"}).done(function(f){var e=f.state;
$.each(f,function(g,h){if($("form[data-vmwareformname]").attr("data-eloqualookup")!==undefined){$('input[name="company_name"]').attr("id","C_Company");
$('input[name="address1"]').attr("id","C_Address1");
$('input[name="city"]').attr("id","C_City");
$('input[name="state"]').attr("id","C_State_Prov");
$('input[name="PostCode"]').attr("id","C_Zip_Postal");
$("form[data-vmwareformname]").find("[data-prepopulate]").each(function(){if((h!==null&&h.length>0)){if($(this).attr("id")==="C_Company"){$(this).val(f.company_name);
if(($(this).val()!==null&&$(this).val().length>0)){$(this).closest(".form-helptext").find(".icon-success").show()
}}if($(this).attr("id")==="C_Address1"){$(this).val(f.street_address);
if(($(this).val()!==null&&$(this).val().length>0)){$(this).closest(".form-helptext").find(".icon-success").show()
}}if($(this).attr("id")==="C_City"){$(this).val(f.city);
if(($(this).val()!==null&&$(this).val().length>0)){$(this).closest(".form-helptext").find(".icon-success").show()
}}if($(this).attr("id")==="C_State_Prov"){$(this).val(f.state);
if(($(this).val()!==null&&$(this).val().length>0)){$(this).closest(".form-helptext").find(".icon-success").show()
}}if($(this).attr("id")==="C_Zip_Postal"){$(this).val(f.zip);
if(($(this).val()!==null&&$(this).val().length>0)){$(this).closest(".form-helptext").find(".icon-success").show()
}}if($(this).attr("id")==="C_Industry1"){$(this).val(f.industry);
if(($(this).val()!==null&&$(this).val().length>0)){$(this).closest(".form-helptext").find(".icon-success").show()
}}if($(this).attr("id")==="C_BusPhone"){$(this).val(f.phone);
if(($(this).val()!==null&&$(this).val().length>0)){$(this).closest(".form-helptext").find(".icon-success").show()
}}if($(this).attr("name")==="C_Country"){$(this).attr("id","C_Country");
$(this).val(f.country_name);
if(($(this).val()!==null&&$(this).val().length>0)){$(this).closest(".form-helptext").find(".icon-success").show()
}if(($(this).prop("tagName"))==="SELECT"){$(this).find("option").removeAttr("selected");
var i=$(this);
$(this).find("option").each(function(){if($(this).val()==f.country_name){$(this).prop("selected",true)
}});
$(".selectpicker").selectpicker("refresh")
}}}})
}else{$("form[data-vmwareformname]").find("[data-prepopulate]").each(function(){if((h!==null&&h.length>0)){if($(this).attr("id")==="C_Company"){$(this).val(f.company_name);
if(($(this).val()!==null&&$(this).val().length>0)){$(this).closest(".form-helptext").find(".icon-success").show()
}}if($(this).attr("id")==="C_Address1"){$(this).val(f.street_address);
if(($(this).val()!==null&&$(this).val().length>0)){$(this).closest(".form-helptext").find(".icon-success").show()
}}if($(this).attr("id")==="C_City"){$(this).val(f.city);
if(($(this).val()!==null&&$(this).val().length>0)){$(this).closest(".form-helptext").find(".icon-success").show()
}}if($(this).attr("id")==="C_State_Prov"){$(this).val(f.state);
if(($(this).val()!==null&&$(this).val().length>0)){$(this).closest(".form-helptext").find(".icon-success").show()
}}if($(this).attr("id")==="C_Zip_Postal"){$(this).val(f.zip);
if(($(this).val()!==null&&$(this).val().length>0)){$(this).closest(".form-helptext").find(".icon-success").show()
}}if($(this).attr("id")==="C_Industry1"){$(this).val(f.industry);
if(($(this).val()!==null&&$(this).val().length>0)){$(this).closest(".form-helptext").find(".icon-success").show()
}}if($(this).attr("id")==="C_BusPhone"){$(this).val(f.phone);
if(($(this).val()!==null&&$(this).val().length>0)){$(this).closest(".form-helptext").find(".icon-success").show()
}}if($(this).attr("name")==="C_Country"){$(this).attr("id","C_Country");
$(this).val(f.country_name);
if(($(this).val()!==null&&$(this).val().length>0)){$(this).closest(".form-helptext").find(".icon-success").show()
}if(($(this).prop("tagName"))==="SELECT"){$(this).find("option").removeAttr("selected");
var i=$(this);
$(this).find("option").each(function(){if($(this).val()==f.country_name){$(this).prop("selected",true)
}});
$(".selectpicker").selectpicker("refresh")
}}}if(g===$(this).attr("name")&&(h!==null&&h.length>0)){$(this).val(h);
if($(this).val()!==null&&$(this).val().length>0){$(this).closest(".form-helptext").find(".icon-success").show()
}if(($(this).prop("tagName"))==="SELECT"){$(this).find("option").removeAttr("selected");
var i=$(this);
$(this).find("option").each(function(){if($(this).val()==h){$(this).prop("selected",true);
if(i.prop("id")=="country_ariana"){var j=i.find("option:selected").text();
b(j,h,e)
}}});
$(".selectpicker").selectpicker("refresh")
}}})
}})
}).fail(function(){})
}});
var EloquaSiteID="279193683";
var EloquaScript="//mediarolls.com/AsyncTrack/elqNow/elqCfg.min.js";
var LookupIdVisitor="1076b06046334067aa3cdd4e2d3b1828";
var LookupIdPrimary="1076b06046334067aa3cdd4e2d3b1828";
var VisitorUniqueField="V_Email_Address";
var PrimaryUniqueField="C_EmailAddress";
var EloquaFormID="DLPrepopForm";
(function(){var B=EloquaSiteID,p=new Date(20020101),o=new Date,z=o.getMilliseconds(),w=p.getTimezoneOffset(),A="https://secure.p04.eloqua.com/visitor/v200/svrGP";
function x(i,m,j){var l=i.length,n=m.length;
if(l==0||n==0){return i
}var e=i.indexOf(m);
if(!e&&m!=i.substring(0,n)){return i
}if(e==-1){return i
}var k=i.substring(0,e)+j;
if(e+n<l){k+=x(i.substring(e+n,l),m,j)
}return k
}function t(a,b){if(typeof A!=="undefined"&&typeof B!=="undefined"){var c=document.createElement("script");
c.type="text/javascript";
c.src=A+"?pps=50&siteid="+B+"&DLKey="+a+"&DLLookup="+b+"&ms="+z;
document.getElementsByTagName("head")[0].appendChild(c);
c.onload=function(){loadDataCallBackFn()
}
}}function v(){if(typeof A!=="undefined"&&typeof B!=="undefined"){var a=document.createElement("script");
a.type="text/javascript";
a.src=A+"?pps=70&siteid="+B+"&ref="+escape(document.referrer)+"&ms="+z;
document.getElementsByTagName("head")[0].appendChild(a)
}}function s(b,a,h){if(typeof A!==undefined&&typeof B!==undefined&&typeof b!==undefined){if(typeof h===undefined||h===undefined||h===""){if(document.referrer){h=escape(document.referrer)
}else{h="elqNone"
}}var c=document.createElement("script");
c.type="text/javascript";
c.src=A+"?pps=10&siteid="+B+"&elq="+a+"&ref="+b+"&ref2="+h+"&ms="+z;
document.getElementsByTagName("head")[0].appendChild(c)
}}function u(a,c){if(typeof A!=="undefined"&&typeof B!=="undefined"){if(typeof c==="undefined"||c==="undefined"||c===""){if(document.referrer){c=escape(document.referrer)
}else{c="elqNone"
}}var b=document.createElement("img");
if(typeof a!=="undefined"&&a!=="undefined"&&a!==""){b.src=A+"?pps=3&siteid="+B+"&ref="+a+"&ref2="+c+"&tzo="+w+"&ms="+z
}else{b.src=A+"?pps=3&siteid="+B+"&ref2="+c+"&tzo="+w+"&ms="+z
}b.height=1;
b.width=1;
b.border=0
}}function y(a){if(typeof A!=="undefined"&&typeof B!=="undefined"&&a!=="undefined"){var b=document.createElement("script");
b.type="text/javascript";
b.src=A+"?pps="+a+"&siteid="+B+"&ref="+x(x(location.href,"&","%26"),"#","%23")+"&ms="+z;
document.getElementsByTagName("head")[0].appendChild(b)
}}var q=function(){this.push=function(){for(var a=0;
a<arguments.length;
a++){try{if(typeof arguments[a]==="function"){arguments[a]()
}else{switch(arguments[a][0]){case"elqSetSiteId":B=arguments[a][1];
break;
case"elqTrackPageView":u.apply(this,arguments[a].slice(1));
break;
case"elqDataLookup":t.apply(this,arguments[a].slice(1));
break;
case"elqRedirect":s.apply(this,arguments[a].slice(1));
break;
case"elqGetCustomerGUID":v.apply(this);
break;
case"elqOptStatus":y(40);
break;
case"elqOptIn":y(41);
break;
case"elqOptOut":y(42);
break;
case"elqGlobalOptIn":y(43);
break;
case"elqGlobalOptOut":y(44)
}}}catch(d){}}}
},r=window._elqQCustom;
window._elqQCustom=new q;
window._elqQCustom.push.apply(window._elqQCustom,r)
})();
function loadDataCallBackFn(){if($("form[data-vmwareformname]").attr("data-eloqualookup")!==undefined){LoadFields(EloquaFormID)
}}function LoadFields(b){var a,d,g,f;
a=document.getElementById(b);
d=a.getElementsByTagName("input");
g=a.getElementsByTagName("select");
for(f=0;
f<d.length;
f++){var h=d[f].id;
var i=GetElqContentPersonalizationValue(h);
var c=i.toLowerCase();
if(i!==""){if(d[f].id==h){if(d[f].type=="checkbox"){if(c=="on"){d[f].checked=true
}else{if(c=="true"){d[f].checked=true
}else{if(c=="y"){d[f].checked=true
}else{if(c=="yes"){d[f].checked=true
}else{if(c=="checked"){d[f].checked=true
}else{if(c=="1"){d[f].checked=true
}}}}}}}else{if(d[f].type=="radio"){d[f].value=i
}else{if(d[f].type=="select"){d[f].value=i
}else{if(d[f].type=="text"){d[f].value=i
}else{}}}}}}else{}}for(f=0;
f<g.length;
f++){var h=g[f].id;
var i=GetElqContentPersonalizationValue(h);
var c=i.toLowerCase();
if(i!==""){if(g[f].id==h){var e=g[f];
if(($(e).prop("tagName"))==="SELECT"){$(e).find("option").removeAttr("selected");
$(e).find("option").each(function(){if($(this).val().toLowerCase()==i.toLowerCase()){$(this).prop("selected",true)
}else{}});
$(".selectpicker").selectpicker("refresh")
}}}else{}}}var FirstLookup=true;
function SetElqContent(){if(FirstLookup){FirstLookup=false
}else{}}$(document).ready(function(){_elqQCustom.push(["elqDataLookup",escape(LookupIdVisitor),""]);
$("#C_EmailAddress").blur(function(){_elqQCustom.push(["elqDataLookup",escape("1076b06046334067aa3cdd4e2d3b1828"),"<C_EmailAddress>"+$("#C_EmailAddress").val()+"</C_EmailAddress>"])
})
});
$(document).ready(function(){if($("form[data-formtouchtype]").length){$.each($(".form-helptext"),function(){var b=window.location.href;
var c=a("touch");
function a(g){var d=window.location.href.slice(window.location.href.indexOf("?")+1).split("&");
for(var e=0;
e<d.length;
e++){var f=d[e].split("=");
if(f[0]==g){return f[1];
console.log(f[1])
}}}if(c=="1"){$("div[touchtype='']").show();
if($(this).attr("touchtype")=="touch2"||$(this).attr("touchtype")=="touch3"){$(this).remove();
$("div[touchtype='touch1']").show();
$("div[touchtype='none']").show()
}}else{if(c=="2"){$("div[touchtype='']").show();
if($(this).attr("touchtype")=="touch3"){$(this).remove();
$("div[touchtype='touch1']").show();
$("div[touchtype='touch2']").show();
$("div[touchtype='none']").show()
}}else{if(c=="3"){$(this).show()
}else{$(this).show()
}}}})
}});