/*!
 * Bootstrap-select v1.10.0 (http://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2016 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */
(function(a,b){if(typeof define==="function"&&define.amd){define(["jquery"],function(c){return(b(c))
})
}else{if(typeof exports==="object"){module.exports=b(require("jquery"))
}else{b(jQuery)
}}}(this,function(a){(function(e){if(!String.prototype.includes){(function(){var n={}.toString;
var h=(function(){try{var s={};
var r=Object.defineProperty;
var o=r(s,s,s)&&r
}catch(p){}return o
}());
var m="".indexOf;
var l=function(u){if(this==null){throw new TypeError()
}var s=String(this);
if(u&&n.call(u)=="[object RegExp]"){throw new TypeError()
}var p=s.length;
var r=String(u);
var t=r.length;
var o=arguments.length>1?arguments[1]:undefined;
var w=o?Number(o):0;
if(w!=w){w=0
}var v=Math.min(Math.max(w,0),p);
if(t+v>p){return false
}return m.call(s,r,w)!=-1
};
if(h){h(String.prototype,"includes",{value:l,configurable:true,writable:true})
}else{String.prototype.includes=l
}}())
}if(!String.prototype.startsWith){(function(){var h=(function(){try{var r={};
var p=Object.defineProperty;
var n=p(r,r,r)&&p
}catch(o){}return n
}());
var m={}.toString;
var l=function(v){if(this==null){throw new TypeError()
}var s=String(this);
if(v&&m.call(v)=="[object RegExp]"){throw new TypeError()
}var n=s.length;
var w=String(v);
var p=w.length;
var r=arguments.length>1?arguments[1]:undefined;
var u=r?Number(r):0;
if(u!=u){u=0
}var o=Math.min(Math.max(u,0),n);
if(p+o>n){return false
}var t=-1;
while(++t<p){if(s.charCodeAt(o+t)!=w.charCodeAt(t)){return false
}}return true
};
if(h){h(String.prototype,"startsWith",{value:l,configurable:true,writable:true})
}else{String.prototype.startsWith=l
}}())
}if(!Object.keys){Object.keys=function(m,h,l){l=[];
for(h in m){l.hasOwnProperty.call(m,h)&&l.push(h)
}return l
}
}e.fn.triggerNative=function(h){var l=this[0],m;
if(l.dispatchEvent){if(typeof Event==="function"){m=new Event(h,{bubbles:true})
}else{m=document.createEvent("Event");
m.initEvent(h,true,false)
}l.dispatchEvent(m)
}else{if(l.fireEvent){m=document.createEventObject();
m.eventType=h;
l.fireEvent("on"+h,m)
}this.trigger(h)
}};
e.expr[":"].icontains=function(n,h,m){var o=e(n);
var l=(o.data("tokens")||o.text()).toUpperCase();
return l.includes(m[3].toUpperCase())
};
e.expr[":"].ibegins=function(n,h,m){var o=e(n);
var l=(o.data("tokens")||o.text()).toUpperCase();
return l.startsWith(m[3].toUpperCase())
};
e.expr[":"].aicontains=function(n,h,m){var o=e(n);
var l=(o.data("tokens")||o.data("normalizedText")||o.text()).toUpperCase();
return l.includes(m[3].toUpperCase())
};
e.expr[":"].aibegins=function(n,h,m){var o=e(n);
var l=(o.data("tokens")||o.data("normalizedText")||o.text()).toUpperCase();
return l.startsWith(m[3].toUpperCase())
};
function g(l){var h=[{re:/[\xC0-\xC6]/g,ch:"A"},{re:/[\xE0-\xE6]/g,ch:"a"},{re:/[\xC8-\xCB]/g,ch:"E"},{re:/[\xE8-\xEB]/g,ch:"e"},{re:/[\xCC-\xCF]/g,ch:"I"},{re:/[\xEC-\xEF]/g,ch:"i"},{re:/[\xD2-\xD6]/g,ch:"O"},{re:/[\xF2-\xF6]/g,ch:"o"},{re:/[\xD9-\xDC]/g,ch:"U"},{re:/[\xF9-\xFC]/g,ch:"u"},{re:/[\xC7-\xE7]/g,ch:"c"},{re:/[\xD1]/g,ch:"N"},{re:/[\xF1]/g,ch:"n"}];
e.each(h,function(){l=l.replace(this.re,this.ch)
});
return l
}function f(l){var n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};
var p="(?:"+Object.keys(n).join("|")+")",o=new RegExp(p),m=new RegExp(p,"g"),h=l==null?"":""+l;
return o.test(h)?h.replace(m,function(r){return n[r]
}):h
}var c=function(l,h,m){if(m){m.stopPropagation();
m.preventDefault()
}this.$element=e(l);
this.$newElement=null;
this.$button=null;
this.$menu=null;
this.$lis=null;
this.options=h;
if(this.options.title===null){this.options.title=this.$element.attr("title")
}this.val=c.prototype.val;
this.render=c.prototype.render;
this.refresh=c.prototype.refresh;
this.setStyle=c.prototype.setStyle;
this.selectAll=c.prototype.selectAll;
this.deselectAll=c.prototype.deselectAll;
this.destroy=c.prototype.destroy;
this.remove=c.prototype.remove;
this.show=c.prototype.show;
this.hide=c.prototype.hide;
this.init()
};
c.VERSION="1.10.0";
c.DEFAULTS={noneSelectedText:"Nothing selected",noneResultsText:"No results matched {0}",countSelectedText:function(l,h){return(l==1)?"{0} item selected":"{0} items selected"
},maxOptionsText:function(h,l){return[(h==1)?"Limit reached ({n} item max)":"Limit reached ({n} items max)",(l==1)?"Group limit reached ({n} item max)":"Group limit reached ({n} items max)"]
},selectAllText:"Select All",deselectAllText:"Deselect All",doneButton:false,doneButtonText:"Close",multipleSeparator:", ",styleBase:"btn",style:"btn-default",size:"auto",title:null,selectedTextFormat:"values",width:false,container:false,hideDisabled:false,showSubtext:false,showIcon:true,showContent:true,dropupAuto:true,header:false,liveSearch:false,liveSearchPlaceholder:null,liveSearchNormalize:false,liveSearchStyle:"contains",actionsBox:false,iconBase:"glyphicon",tickIcon:"glyphicon-ok",showTick:false,template:{caret:'<span class="caret"></span>'},maxOptions:false,mobile:false,selectOnTab:false,dropdownAlignRight:false};
c.prototype={constructor:c,init:function(){var h=this,l=this.$element.attr("id");
this.$element.addClass("bs-select-hidden");
this.liObj={};
this.multiple=this.$element.prop("multiple");
this.autofocus=this.$element.prop("autofocus");
this.$newElement=this.createView();
this.$element.after(this.$newElement).appendTo(this.$newElement);
this.$button=this.$newElement.children("button");
this.$menu=this.$newElement.children(".dropdown-menu");
this.$menuInner=this.$menu.children(".inner");
this.$searchbox=this.$menu.find("input");
this.$element.removeClass("bs-select-hidden");
if(this.options.dropdownAlignRight){this.$menu.addClass("dropdown-menu-right")
}if(typeof l!=="undefined"){this.$button.attr("data-id",l);
e('label[for="'+l+'"]').click(function(m){m.preventDefault();
h.$button.focus()
})
}this.checkDisabled();
this.clickListener();
if(this.options.liveSearch){this.liveSearchListener()
}this.render();
this.setStyle();
this.setWidth();
if(this.options.container){this.selectPosition()
}this.$menu.data("this",this);
this.$newElement.data("this",this);
if(this.options.mobile){this.mobile()
}this.$newElement.on({"hide.bs.dropdown":function(m){h.$element.trigger("hide.bs.select",m)
},"hidden.bs.dropdown":function(m){h.$element.trigger("hidden.bs.select",m)
},"show.bs.dropdown":function(m){h.$element.trigger("show.bs.select",m)
},"shown.bs.dropdown":function(m){h.$element.trigger("shown.bs.select",m)
}});
if(h.$element[0].hasAttribute("required")){this.$element.on("invalid",function(){h.$button.addClass("bs-invalid").focus();
h.$element.on({"focus.bs.select":function(){h.$button.focus();
h.$element.off("focus.bs.select")
},"shown.bs.select":function(){h.$element.val(h.$element.val()).off("shown.bs.select")
},"rendered.bs.select":function(){if(this.validity.valid){h.$button.removeClass("bs-invalid")
}h.$element.off("rendered.bs.select")
}})
})
}setTimeout(function(){h.$element.trigger("loaded.bs.select")
})
},createDropdown:function(){var p=(this.multiple||this.options.showTick)?" show-tick":"",l=this.$element.parent().hasClass("input-group")?" input-group-btn":"",s=this.autofocus?" autofocus":"";
var r=this.options.header?'<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>":"";
var o=this.options.liveSearch?'<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"'+(null===this.options.liveSearchPlaceholder?"":' placeholder="'+f(this.options.liveSearchPlaceholder)+'"')+"></div>":"";
var n=this.multiple&&this.options.actionsBox?'<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">'+this.options.selectAllText+'</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">'+this.options.deselectAllText+"</button></div></div>":"";
var h=this.multiple&&this.options.doneButton?'<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">'+this.options.doneButtonText+"</button></div></div>":"";
var m='<div class="btn-group bootstrap-select'+p+l+'"><button type="button" class="'+this.options.styleBase+' dropdown-toggle" data-toggle="dropdown"'+s+'><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">'+this.options.template.caret+'</span></button><div class="dropdown-menu open">'+r+o+n+'<ul class="dropdown-menu inner" role="menu"></ul>'+h+"</div></div>";
return e(m)
},createView:function(){var l=this.createDropdown(),h=this.createLi();
l.find("ul")[0].innerHTML=h;
return l
},reloadLi:function(){this.destroyLi();
var h=this.createLi();
this.$menuInner[0].innerHTML=h
},destroyLi:function(){this.$menu.find("li").remove()
},createLi:function(){var r=this,p=[],s=0,m=document.createElement("option"),l=-1;
var h=function(w,u,v,t){return"<li"+((typeof v!=="undefined"&""!==v)?' class="'+v+'"':"")+((typeof u!=="undefined"&null!==u)?' data-original-index="'+u+'"':"")+((typeof t!=="undefined"&null!==t)?'data-optgroup="'+t+'"':"")+">"+w+"</li>"
};
var o=function(w,t,v,u){return'<a tabindex="0"'+(typeof t!=="undefined"?' class="'+t+'"':"")+(typeof v!=="undefined"?' style="'+v+'"':"")+(r.options.liveSearchNormalize?' data-normalized-text="'+g(f(w))+'"':"")+(typeof u!=="undefined"||u!==null?' data-tokens="'+u+'"':"")+">"+w+'<span class="'+r.options.iconBase+" "+r.options.tickIcon+' check-mark"></span></a>'
};
if(this.options.title&&!this.multiple){l--;
if(!this.$element.find(".bs-title-option").length){var n=this.$element[0];
m.className="bs-title-option";
m.appendChild(document.createTextNode(this.options.title));
m.value="";
n.insertBefore(m,n.firstChild);
if(e(n.options[n.selectedIndex]).attr("selected")===undefined){m.selected=true
}}}this.$element.find("option").each(function(w){var z=e(this);
l++;
if(z.hasClass("bs-title-option")){return
}var u=this.className||"",y=this.style.cssText,G=z.data("content")?z.data("content"):z.html(),A=z.data("tokens")?z.data("tokens"):null,D=typeof z.data("subtext")!=="undefined"?'<small class="text-muted">'+z.data("subtext")+"</small>":"",B=typeof z.data("icon")!=="undefined"?'<span class="'+r.options.iconBase+" "+z.data("icon")+'"></span> ':"",F=this.parentNode.tagName==="OPTGROUP",E=this.disabled||(F&&this.parentNode.disabled);
if(B!==""&&E){B="<span>"+B+"</span>"
}if(r.options.hideDisabled&&E&&!F){l--;
return
}if(!z.data("content")){G=B+'<span class="text">'+G+D+"</span>"
}if(F&&z.data("divider")!==true){var v=" "+this.parentNode.className||"";
if(z.index()===0){s+=1;
var C=this.parentNode.label,H=typeof z.parent().data("subtext")!=="undefined"?'<small class="text-muted">'+z.parent().data("subtext")+"</small>":"",t=z.parent().data("icon")?'<span class="'+r.options.iconBase+" "+z.parent().data("icon")+'"></span> ':"";
C=t+'<span class="text">'+C+H+"</span>";
if(w!==0&&p.length>0){l++;
p.push(h("",null,"divider",s+"div"))
}l++;
p.push(h(C,null,"dropdown-header"+v,s))
}if(r.options.hideDisabled&&E){l--;
return
}p.push(h(o(G,"opt "+u+v,y,A),w,"",s))
}else{if(z.data("divider")===true){p.push(h("",w,"divider"))
}else{if(z.data("hidden")===true){p.push(h(o(G,u,y,A),w,"hidden is-hidden"))
}else{if(this.previousElementSibling&&this.previousElementSibling.tagName==="OPTGROUP"){l++;
p.push(h("",null,"divider",s+"div"))
}p.push(h(o(G,u,y,A),w))
}}}r.liObj[w]=l
});
if(!this.multiple&&this.$element.find("option:selected").length===0&&!this.options.title){this.$element.find("option").eq(0).prop("selected",true).attr("selected","selected")
}return p.join("")
},findLis:function(){if(this.$lis==null){this.$lis=this.$menu.find("li")
}return this.$lis
},render:function(n){var m=this,p;
if(n!==false){this.$element.find("option").each(function(t){var u=m.findLis().eq(m.liObj[t]);
m.setDisabled(t,this.disabled||this.parentNode.tagName==="OPTGROUP"&&this.parentNode.disabled,u);
m.setSelected(t,this.selected,u)
})
}this.tabIndex();
var s=this.$element.find("option").map(function(){if(this.selected){if(m.options.hideDisabled&&(this.disabled||this.parentNode.tagName==="OPTGROUP"&&this.parentNode.disabled)){return
}var v=e(this),u=v.data("icon")&&m.options.showIcon?'<i class="'+m.options.iconBase+" "+v.data("icon")+'"></i> ':"",t;
if(m.options.showSubtext&&v.data("subtext")&&!m.multiple){t=' <small class="text-muted">'+v.data("subtext")+"</small>"
}else{t=""
}if(typeof v.attr("title")!=="undefined"){return v.attr("title")
}else{if(v.data("content")&&m.options.showContent){return v.data("content")
}else{return u+v.html()+t
}}}}).toArray();
var o=!this.multiple?s[0]:s.join(this.options.multipleSeparator);
if(this.multiple&&this.options.selectedTextFormat.indexOf("count")>-1){var h=this.options.selectedTextFormat.split(">");
if((h.length>1&&s.length>h[1])||(h.length==1&&s.length>=2)){p=this.options.hideDisabled?", [disabled]":"";
var l=this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]'+p).length,r=(typeof this.options.countSelectedText==="function")?this.options.countSelectedText(s.length,l):this.options.countSelectedText;
o=r.replace("{0}",s.length.toString()).replace("{1}",l.toString())
}}if(this.options.title==undefined){this.options.title=this.$element.attr("title")
}if(this.options.selectedTextFormat=="static"){o=this.options.title
}if(!o){o=typeof this.options.title!=="undefined"?this.options.title:this.options.noneSelectedText
}this.$button.attr("title",e.trim(o.replace(/<[^>]*>?/g,"")));
this.$button.children(".filter-option").html(o);
this.$element.trigger("rendered.bs.select")
},setStyle:function(m,l){if(this.$element.attr("class")){this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,""))
}var h=m?m:this.options.style;
if(l=="add"){this.$button.addClass(h)
}else{if(l=="remove"){this.$button.removeClass(h)
}else{this.$button.removeClass(this.options.style);
this.$button.addClass(h)
}}},liHeight:function(r){if(!r&&(this.options.size===false||this.sizeInfo)){return
}var o=document.createElement("div"),h=document.createElement("div"),v=document.createElement("ul"),E=document.createElement("li"),D=document.createElement("li"),I=document.createElement("a"),C=document.createElement("span"),H=this.options.header&&this.$menu.find(".popover-title").length>0?this.$menu.find(".popover-title")[0].cloneNode(true):null,w=this.options.liveSearch?document.createElement("div"):null,y=this.options.actionsBox&&this.multiple&&this.$menu.find(".bs-actionsbox").length>0?this.$menu.find(".bs-actionsbox")[0].cloneNode(true):null,n=this.options.doneButton&&this.multiple&&this.$menu.find(".bs-donebutton").length>0?this.$menu.find(".bs-donebutton")[0].cloneNode(true):null;
C.className="text";
o.className=this.$menu[0].parentNode.className+" open";
h.className="dropdown-menu open";
v.className="dropdown-menu inner";
E.className="divider";
C.appendChild(document.createTextNode("Inner text"));
I.appendChild(C);
D.appendChild(I);
v.appendChild(D);
v.appendChild(E);
if(H){h.appendChild(H)
}if(w){var A=document.createElement("span");
w.className="bs-searchbox";
A.className="form-control";
w.appendChild(A);
h.appendChild(w)
}if(y){h.appendChild(y)
}h.appendChild(v);
if(n){h.appendChild(n)
}o.appendChild(h);
document.body.appendChild(o);
var m=I.offsetHeight,G=H?H.offsetHeight:0,z=w?w.offsetHeight:0,u=y?y.offsetHeight:0,p=n?n.offsetHeight:0,B=e(E).outerHeight(true),l=typeof getComputedStyle==="function"?getComputedStyle(h):false,s=l?null:e(h),F=parseInt(l?l.paddingTop:s.css("paddingTop"))+parseInt(l?l.paddingBottom:s.css("paddingBottom"))+parseInt(l?l.borderTopWidth:s.css("borderTopWidth"))+parseInt(l?l.borderBottomWidth:s.css("borderBottomWidth")),t=F+parseInt(l?l.marginTop:s.css("marginTop"))+parseInt(l?l.marginBottom:s.css("marginBottom"))+2;
document.body.removeChild(o);
this.sizeInfo={liHeight:m,headerHeight:G,searchHeight:z,actionsHeight:u,doneButtonHeight:p,dividerHeight:B,menuPadding:F,menuExtras:t}
},setSize:function(){this.findLis();
this.liHeight();
if(this.options.header){this.$menu.css("padding-top",0)
}if(this.options.size===false){return
}var t=this,p=this.$menu,m=this.$menuInner,A=e(window),G=this.$newElement[0].offsetHeight,n=this.sizeInfo.liHeight,E=this.sizeInfo.headerHeight,w=this.sizeInfo.searchHeight,s=this.sizeInfo.actionsHeight,o=this.sizeInfo.doneButtonHeight,v=this.sizeInfo.dividerHeight,D=this.sizeInfo.menuPadding,r=this.sizeInfo.menuExtras,B=this.options.hideDisabled?".disabled":"",C,y,H,F,u=function(){H=t.$newElement.offset().top-A.scrollTop();
F=A.height()-H-G
};
u();
if(this.options.size==="auto"){var l=function(){var L,K=function(O,N){return function(P){if(N){return(P.classList?P.classList.contains(O):e(P).hasClass(O))
}else{return !(P.classList?P.classList.contains(O):e(P).hasClass(O))
}}
},J=t.$menuInner[0].getElementsByTagName("li"),I=Array.prototype.filter?Array.prototype.filter.call(J,K("hidden",false)):t.$lis.not(".hidden"),M=Array.prototype.filter?Array.prototype.filter.call(I,K("dropdown-header",true)):I.filter(".dropdown-header");
u();
C=F-r;
if(t.options.container){if(!p.data("height")){p.data("height",p.height())
}y=p.data("height")
}else{y=p.height()
}if(t.options.dropupAuto){t.$newElement.toggleClass("dropup",H>F&&(C-r)<y)
}if(t.$newElement.hasClass("dropup")){C=H-r
}if((I.length+M.length)>3){L=n*3+r-2
}else{L=0
}p.css({"max-height":C+"px",overflow:"hidden","min-height":L+E+w+s+o+"px"});
m.css({"max-height":C-E-w-s-o-D+"px","overflow-y":"auto","min-height":Math.max(L-D,0)+"px"})
};
l();
this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize",l);
A.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize",l)
}else{if(this.options.size&&this.options.size!="auto"&&this.$lis.not(B).length>this.options.size){var z=this.$lis.not(".divider").not(B).children().slice(0,this.options.size).last().parent().index(),h=this.$lis.slice(0,z+1).filter(".divider").length;
C=n*this.options.size+h*v+D;
if(t.options.container){if(!p.data("height")){p.data("height",p.height())
}y=p.data("height")
}else{y=p.height()
}if(t.options.dropupAuto){this.$newElement.toggleClass("dropup",H>F&&(C-r)<y)
}p.css({"max-height":C+E+w+s+o+"px",overflow:"hidden","min-height":""});
m.css({"max-height":C-D+"px","overflow-y":"auto","min-height":""})
}}},setWidth:function(){if(this.options.width==="auto"){this.$menu.css("min-width","0");
var l=this.$menu.parent().clone().appendTo("body"),h=this.options.container?this.$newElement.clone().appendTo("body"):l,m=l.children(".dropdown-menu").outerWidth(),n=h.css("width","auto").children("button").outerWidth();
l.remove();
h.remove();
this.$newElement.css("width",Math.max(m,n)+"px")
}else{if(this.options.width==="fit"){this.$menu.css("min-width","");
this.$newElement.css("width","").addClass("fit-width")
}else{if(this.options.width){this.$menu.css("min-width","");
this.$newElement.css("width",this.options.width)
}else{this.$menu.css("min-width","");
this.$newElement.css("width","")
}}}if(this.$newElement.hasClass("fit-width")&&this.options.width!=="fit"){this.$newElement.removeClass("fit-width")
}},selectPosition:function(){this.$bsContainer=e('<div class="bs-container" />');
var l=this,n,m,h=function(o){l.$bsContainer.addClass(o.attr("class").replace(/form-control|fit-width/gi,"")).toggleClass("dropup",o.hasClass("dropup"));
n=o.offset();
m=o.hasClass("dropup")?0:o[0].offsetHeight;
l.$bsContainer.css({top:n.top+m,left:n.left,width:o[0].offsetWidth})
};
this.$button.on("click",function(){var o=e(this);
if(l.isDisabled()){return
}h(l.$newElement);
l.$bsContainer.appendTo(l.options.container).toggleClass("open",!o.hasClass("open")).append(l.$menu)
});
e(window).on("resize scroll",function(){h(l.$newElement)
});
this.$element.on("hide.bs.select",function(){l.$menu.data("height",l.$menu.height());
l.$bsContainer.detach()
})
},setSelected:function(h,m,l){if(!l){l=this.findLis().eq(this.liObj[h])
}l.toggleClass("selected",m)
},setDisabled:function(h,m,l){if(!l){l=this.findLis().eq(this.liObj[h])
}if(m){l.addClass("disabled").children("a").attr("href","#").attr("tabindex",-1)
}else{l.removeClass("disabled").children("a").removeAttr("href").attr("tabindex",0)
}},isDisabled:function(){return this.$element[0].disabled
},checkDisabled:function(){var h=this;
if(this.isDisabled()){this.$newElement.addClass("disabled");
this.$button.addClass("disabled").attr("tabindex",-1)
}else{if(this.$button.hasClass("disabled")){this.$newElement.removeClass("disabled");
this.$button.removeClass("disabled")
}if(this.$button.attr("tabindex")==-1&&!this.$element.data("tabindex")){this.$button.removeAttr("tabindex")
}}this.$button.click(function(){return !h.isDisabled()
})
},tabIndex:function(){if(this.$element.data("tabindex")!==this.$element.attr("tabindex")&&(this.$element.attr("tabindex")!==-98&&this.$element.attr("tabindex")!=="-98")){this.$element.data("tabindex",this.$element.attr("tabindex"));
this.$button.attr("tabindex",this.$element.data("tabindex"))
}this.$element.attr("tabindex",-98)
},clickListener:function(){var h=this,l=e(document);
this.$newElement.on("touchstart.dropdown",".dropdown-menu",function(m){m.stopPropagation()
});
l.data("spaceSelect",false);
this.$button.on("keyup",function(m){if(/(32)/.test(m.keyCode.toString(10))&&l.data("spaceSelect")){m.preventDefault();
l.data("spaceSelect",false)
}});
this.$button.on("click",function(){h.setSize()
});
this.$element.on("shown.bs.select",function(){if(!h.options.liveSearch&&!h.multiple){h.$menuInner.find(".selected a").focus()
}else{if(!h.multiple){var m=h.liObj[h.$element[0].selectedIndex];
if(typeof m!=="number"||h.options.size===false){return
}var n=h.$lis.eq(m)[0].offsetTop-h.$menuInner[0].offsetTop;
n=n-h.$menuInner[0].offsetHeight/2+h.sizeInfo.liHeight/2;
h.$menuInner[0].scrollTop=n
}}});
this.$menuInner.on("click","li a",function(D){var s=e(this),m=s.parent().data("originalIndex"),B=h.$element.val(),u=h.$element.prop("selectedIndex");
if(h.multiple){D.stopPropagation()
}D.preventDefault();
if(!h.isDisabled()&&!s.parent().hasClass("disabled")){var z=h.$element.find("option"),A=z.eq(m),o=A.prop("selected"),y=A.parent("optgroup"),F=h.options.maxOptions,v=y.data("maxOptions")||false;
if(!h.multiple){z.prop("selected",false);
A.prop("selected",true);
h.$menuInner.find(".selected").removeClass("selected");
h.setSelected(m,true)
}else{A.prop("selected",!o);
h.setSelected(m,!o);
s.blur();
if(F!==false||v!==false){var n=F<z.filter(":selected").length,r=v<y.find("option:selected").length;
if((F&&n)||(v&&r)){if(F&&F==1){z.prop("selected",false);
A.prop("selected",true);
h.$menuInner.find(".selected").removeClass("selected");
h.setSelected(m,true)
}else{if(v&&v==1){y.find("option:selected").prop("selected",false);
A.prop("selected",true);
var C=s.parent().data("optgroup");
h.$menuInner.find('[data-optgroup="'+C+'"]').removeClass("selected");
h.setSelected(m,true)
}else{var p=(typeof h.options.maxOptionsText==="function")?h.options.maxOptionsText(F,v):h.options.maxOptionsText,E=p[0].replace("{n}",F),t=p[1].replace("{n}",v),w=e('<div class="notify"></div>');
if(p[2]){E=E.replace("{var}",p[2][F>1?0:1]);
t=t.replace("{var}",p[2][v>1?0:1])
}A.prop("selected",false);
h.$menu.append(w);
if(F&&n){w.append(e("<div>"+E+"</div>"));
h.$element.trigger("maxReached.bs.select")
}if(v&&r){w.append(e("<div>"+t+"</div>"));
h.$element.trigger("maxReachedGrp.bs.select")
}setTimeout(function(){h.setSelected(m,false)
},10);
w.delay(750).fadeOut(300,function(){e(this).remove()
})
}}}}}if(!h.multiple){h.$button.focus()
}else{if(h.options.liveSearch){h.$searchbox.focus()
}}if((B!=h.$element.val()&&h.multiple)||(u!=h.$element.prop("selectedIndex")&&!h.multiple)){h.$element.trigger("changed.bs.select",[m,A.prop("selected"),o]).triggerNative("change")
}}});
this.$menu.on("click","li.disabled a, .popover-title, .popover-title :not(.close)",function(m){if(m.currentTarget==this){m.preventDefault();
m.stopPropagation();
if(h.options.liveSearch&&!e(m.target).hasClass("close")){h.$searchbox.focus()
}else{h.$button.focus()
}}});
this.$menuInner.on("click",".divider, .dropdown-header",function(m){m.preventDefault();
m.stopPropagation();
if(h.options.liveSearch){h.$searchbox.focus()
}else{h.$button.focus()
}});
this.$menu.on("click",".popover-title .close",function(){h.$button.click()
});
this.$searchbox.on("click",function(m){m.stopPropagation()
});
this.$menu.on("click",".actions-btn",function(m){if(h.options.liveSearch){h.$searchbox.focus()
}else{h.$button.focus()
}m.preventDefault();
m.stopPropagation();
if(e(this).hasClass("bs-select-all")){h.selectAll()
}else{h.deselectAll()
}});
this.$element.change(function(){h.render(false)
})
},liveSearchListener:function(){var l=this,h=e('<li class="no-results"></li>');
this.$button.on("click.dropdown.data-api touchstart.dropdown.data-api",function(){l.$menuInner.find(".active").removeClass("active");
if(!!l.$searchbox.val()){l.$searchbox.val("");
l.$lis.not(".is-hidden").removeClass("hidden");
if(!!h.parent().length){h.remove()
}}if(!l.multiple){l.$menuInner.find(".selected").addClass("active")
}setTimeout(function(){l.$searchbox.focus()
},10)
});
this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api",function(m){m.stopPropagation()
});
this.$searchbox.on("input propertychange",function(){if(l.$searchbox.val()){var m=l.$lis.not(".is-hidden").removeClass("hidden").children("a");
if(l.options.liveSearchNormalize){m=m.not(":a"+l._searchStyle()+'("'+g(l.$searchbox.val())+'")')
}else{m=m.not(":"+l._searchStyle()+'("'+l.$searchbox.val()+'")')
}m.parent().addClass("hidden");
l.$lis.filter(".dropdown-header").each(function(){var p=e(this),o=p.data("optgroup");
if(l.$lis.filter("[data-optgroup="+o+"]").not(p).not(".hidden").length===0){p.addClass("hidden");
l.$lis.filter("[data-optgroup="+o+"div]").addClass("hidden")
}});
var n=l.$lis.not(".hidden");
n.each(function(o){var p=e(this);
if(p.hasClass("divider")&&(p.index()===n.first().index()||p.index()===n.last().index()||n.eq(o+1).hasClass("divider"))){p.addClass("hidden")
}});
if(!l.$lis.not(".hidden, .no-results").length){if(!!h.parent().length){h.remove()
}h.html(l.options.noneResultsText.replace("{0}",'"'+f(l.$searchbox.val())+'"')).show();
l.$menuInner.append(h)
}else{if(!!h.parent().length){h.remove()
}}}else{l.$lis.not(".is-hidden").removeClass("hidden");
if(!!h.parent().length){h.remove()
}}l.$lis.filter(".active").removeClass("active");
if(l.$searchbox.val()){l.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus()
}e(this).focus()
})
},_searchStyle:function(){var h={begins:"ibegins",startsWith:"ibegins"};
return h[this.options.liveSearchStyle]||"icontains"
},val:function(h){if(typeof h!=="undefined"){this.$element.val(h);
this.render();
return this.$element
}else{return this.$element.val()
}},changeAll:function(l){if(typeof l==="undefined"){l=true
}this.findLis();
var h=this.$element.find("option"),r=this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").toggleClass("selected",l),m=r.length,p=[];
for(var n=0;
n<m;
n++){var o=r[n].getAttribute("data-original-index");
p[p.length]=h.eq(o)[0]
}e(p).prop("selected",l);
this.render(false);
this.$element.trigger("changed.bs.select").triggerNative("change")
},selectAll:function(){return this.changeAll(true)
},deselectAll:function(){return this.changeAll(false)
},toggle:function(h){h=h||window.event;
if(h){h.stopPropagation()
}this.$button.trigger("click")
},keydown:function(D){var m=e(this),w=m.is("input")?m.parent().parent():m.parent(),l,r=w.data("this"),n,z,p,u,y,h,s,B,A=":not(.disabled, .hidden, .dropdown-header, .divider)",v={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"};
if(r.options.liveSearch){w=m.parent().parent()
}if(r.options.container){w=r.$menu
}l=e("[role=menu] li",w);
B=r.$newElement.hasClass("open");
if(!B&&(D.keyCode>=48&&D.keyCode<=57||D.keyCode>=96&&D.keyCode<=105||D.keyCode>=65&&D.keyCode<=90)){if(!r.options.container){r.setSize();
r.$menu.parent().addClass("open");
B=true
}else{r.$button.trigger("click")
}r.$searchbox.focus()
}if(r.options.liveSearch){if(/(^9$|27)/.test(D.keyCode.toString(10))&&B&&r.$menu.find(".active").length===0){D.preventDefault();
r.$menu.parent().removeClass("open");
if(r.options.container){r.$newElement.removeClass("open")
}r.$button.focus()
}l=e("[role=menu] li"+A,w);
if(!m.val()&&!/(38|40)/.test(D.keyCode.toString(10))){if(l.filter(".active").length===0){l=r.$menuInner.find("li");
if(r.options.liveSearchNormalize){l=l.filter(":a"+r._searchStyle()+"("+g(v[D.keyCode])+")")
}else{l=l.filter(":"+r._searchStyle()+"("+v[D.keyCode]+")")
}}}}if(!l.length){return
}if(/(38|40)/.test(D.keyCode.toString(10))){n=l.index(l.find("a").filter(":focus").parent());
p=l.filter(A).first().index();
u=l.filter(A).last().index();
z=l.eq(n).nextAll(A).eq(0).index();
y=l.eq(n).prevAll(A).eq(0).index();
h=l.eq(z).prevAll(A).eq(0).index();
if(r.options.liveSearch){l.each(function(F){if(!e(this).hasClass("disabled")){e(this).data("index",F)
}});
n=l.index(l.filter(".active"));
p=l.first().data("index");
u=l.last().data("index");
z=l.eq(n).nextAll().eq(0).data("index");
y=l.eq(n).prevAll().eq(0).data("index");
h=l.eq(z).prevAll().eq(0).data("index")
}s=m.data("prevIndex");
if(D.keyCode==38){if(r.options.liveSearch){n--
}if(n!=h&&n>y){n=y
}if(n<p){n=p
}if(n==s){n=u
}}else{if(D.keyCode==40){if(r.options.liveSearch){n++
}if(n==-1){n=0
}if(n!=h&&n<z){n=z
}if(n>u){n=u
}if(n==s){n=p
}}}m.data("prevIndex",n);
if(!r.options.liveSearch){l.eq(n).children("a").focus()
}else{D.preventDefault();
if(!m.hasClass("dropdown-toggle")){l.removeClass("active").eq(n).addClass("active").children("a").focus();
m.focus()
}}}else{if(!m.is("input")){var t=[],o,E;
l.each(function(){if(!e(this).hasClass("disabled")){if(e.trim(e(this).children("a").text().toLowerCase()).substring(0,1)==v[D.keyCode]){t.push(e(this).index())
}}});
o=e(document).data("keycount");
o++;
e(document).data("keycount",o);
E=e.trim(e(":focus").text().toLowerCase()).substring(0,1);
if(E!=v[D.keyCode]){o=1;
e(document).data("keycount",o)
}else{if(o>=t.length){e(document).data("keycount",0);
if(o>t.length){o=1
}}}l.eq(t[o-1]).children("a").focus()
}}if((/(13|32)/.test(D.keyCode.toString(10))||(/(^9$)/.test(D.keyCode.toString(10))&&r.options.selectOnTab))&&B){if(!/(32)/.test(D.keyCode.toString(10))){D.preventDefault()
}if(!r.options.liveSearch){var C=e(":focus");
C.click();
C.focus();
D.preventDefault();
e(document).data("spaceSelect",true)
}else{if(!/(32)/.test(D.keyCode.toString(10))){r.$menuInner.find(".active a").click();
m.focus()
}}e(document).data("keycount",0)
}if((/(^9$|27)/.test(D.keyCode.toString(10))&&B&&(r.multiple||r.options.liveSearch))||(/(27)/.test(D.keyCode.toString(10))&&!B)){r.$menu.parent().removeClass("open");
if(r.options.container){r.$newElement.removeClass("open")
}r.$button.focus()
}},mobile:function(){this.$element.addClass("mobile-device")
},refresh:function(){this.$lis=null;
this.liObj={};
this.reloadLi();
this.render();
this.checkDisabled();
this.liHeight(true);
this.setStyle();
this.setWidth();
if(this.$lis){this.$searchbox.trigger("propertychange")
}this.$element.trigger("refreshed.bs.select")
},hide:function(){this.$newElement.hide()
},show:function(){this.$newElement.show()
},remove:function(){this.$newElement.remove();
this.$element.remove()
},destroy:function(){this.$newElement.before(this.$element).remove();
if(this.$bsContainer){this.$bsContainer.remove()
}else{this.$menu.remove()
}this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")
}};
function d(n,o){var l=arguments;
var r=n,h=o;
[].shift.apply(l);
var p;
var m=this.each(function(){var w=e(this);
if(w.is("select")){var v=w.data("selectpicker"),t=typeof r=="object"&&r;
if(!v){var s=e.extend({},c.DEFAULTS,e.fn.selectpicker.defaults||{},w.data(),t);
s.template=e.extend({},c.DEFAULTS.template,(e.fn.selectpicker.defaults?e.fn.selectpicker.defaults.template:{}),w.data().template,t.template);
w.data("selectpicker",(v=new c(this,s,h)))
}else{if(t){for(var u in t){if(t.hasOwnProperty(u)){v.options[u]=t[u]
}}}}if(typeof r=="string"){if(v[r] instanceof Function){p=v[r].apply(v,l)
}else{p=v.options[r]
}}}});
if(typeof p!=="undefined"){return p
}else{return m
}}var b=e.fn.selectpicker;
e.fn.selectpicker=d;
e.fn.selectpicker.Constructor=c;
e.fn.selectpicker.noConflict=function(){e.fn.selectpicker=b;
return this
};
e(document).data("keycount",0).on("keydown.bs.select",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input',c.prototype.keydown).on("focusin.modal",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input',function(h){h.stopPropagation()
});
e(window).on("load.bs.select.data-api",function(){e(".selectpicker").each(function(){var h=e(this);
d.call(h,h.data())
})
})
})(a)
}));
$(document).ready(function(){if(window.innerWidth==800){$(".navbar-collapse").css("margin-left","-15px");
$(".navbar-collapse").css("margin-right","-15px");
$("ul.navbar-nav li").css("width","100%");
$(document).on("click","#toggleHead",function(){$(".navbar-collapse").css("margin-left","-15px");
$(".navbar-collapse").css("margin-right","-15px");
$("ul.navbar-nav li").css("width","100%")
});
$(document).on("click",".login-dd #mNavClose",function(){$(".navbar-collapse.collapse").removeAttr("style")
})
}if(window.innerWidth>800){$("#navbar").addClass("deskNavbar")
}else{if(window.innerWidth<=800){$("#navbar").addClass("mobiNavbar");
$(document).on("click","#toggleHead",function(){$(".overlay").addClass("loginOverlay");
$("html,body").css("overflow","hidden")
});
$(document).on("touchstart click",".overlay.loginOverlay",function(){$(".mobi-head").hide();
$("#navbar").removeClass("in");
$(".login > ul").hide();
$(".login-dd #mNavClose").remove();
$(".mobi-head a").empty();
$(this).removeClass("loginOverlay");
$(this).hide();
$(".mobi-head").removeClass("login-dd");
$(".mobiNavbar ul li, .mobiNavbar ul li.login a").removeAttr("style");
$("html,body").removeAttr("style")
});
$(document).on("touchstart click",".overlay",function(){$(".sidebar-container .sidebar ul").hide();
$(".mobiNav ul.submenu").hide();
$(".sidebar").removeAttr("style");
$(".mobi-head").hide();
$(".mobi-head").removeClass("level2");
$(".mobi-head").removeClass("level3");
$(".mobi-head").empty();
$(".l_content").empty();
$("#reverse").remove();
$(this).hide();
$("#search-panel").animate({top:"-74px"},100);
$("html,body").removeAttr("style")
})
}}if(window.innerWidth==800){$(".nav-vm .navbar-nav > li").css("width","100%")
}else{$(".nav-vm .navbar-nav > li").css("width","auto")
}$(window).resize(function(){if(window.innerWidth>800){$(".mobi-head").hide();
$("#navbar").removeClass("in");
$("#search-panel").animate({top:"-74px"},100);
$(".overlay").hide(200);
$("#navbar").addClass("deskNavbar");
$("#navbar").removeClass("mobiNavbar");
$(".deskNavbar .navbar-nav li.login ul").hide();
$(".navbar-collapse.collapse").removeAttr("style")
}else{if(window.innerWidth<=800){$("#navbar").removeClass("deskNavbar");
$("#navbar").addClass("mobiNavbar");
$(".navbar-collapse.collapse").removeAttr("style")
}}if(window.innerWidth==800){$(".nav-vm .navbar-nav > li").css("width","100%")
}else{$(".nav-vm .navbar-nav > li").css("width","auto")
}});
$(document).on("click","#toggleHead",function(){$(".mobi-head").show();
$(".mobi-head").addClass("login-dd");
$(".overlay").show();
$(".mobi-head").append('<span aria-hidden="true" class="glyphicon glyphicon-remove" id="mNavClose"></span>');
$(".mobiNavbar ul li, .mobiNavbar ul li.login a").show();
$(".mobiNavbar ul li.login ul li").hide()
});
$(document).on("click","#mNavSeacrch",function(){$(".mobi-head").append('<span aria-hidden="true" class="glyphicon glyphicon-remove" id="mNavClose"></span>');
$("#search-panel").animate({top:"48px"},200);
$(".mobi-head").show();
$(".overlay").show()
});
$(document).on("click","#mNavClose",function(){$("#search-panel").animate({top:"-74px"},100)
});
$(document).on("click",".login-dd #mNavClose",function(){$(".mobi-head").hide();
$("#navbar").removeClass("in");
$(".overlay").hide();
$(".login > ul").hide();
$("#reverse").remove();
$(".mobi-head a").empty();
$(this).remove();
$(".mobi-head").removeClass("login-dd");
$(".mobiNavbar ul li, .mobiNavbar ul li.login a").removeAttr("style")
})
});
$(document).on("click",".mobiNavbar .login a",function(){$(this).parent("li").children("ul").show();
$(this).parent("li").siblings("li").hide();
$(".login > a").hide();
$(".login ul, .login ul li").show();
$(".mobi-head a").empty();
$(".mobi-head").append('<a id="reverse" class="reverse" href="javascript:void(0);"><i class="fa fa-chevron-left"></i> <font>Login</font></a>')
});
$(document).on("click",".login-dd #reverse",function(){$(this).remove();
$(".login > ul").hide();
$(".login > a").show();
$(".mobi-head a").empty();
$(".nav-vm.navbar li").show()
});
$(".nav-vm form input").on("keydown",function(a){if(a.which==13){$(this).parent("form").submit()
}});
$(document).on("click",".searchQuery",function(){$(this).parent("form").submit()
});
var amb="&",ques="?",hash="#",eq="=",q="q";
var cc="cc",client="client",stype="stype",site="site";
var product="product";
var fallback_client="VMware_Site_1",fallback_site="VMware_Site_1",fallback_cc="en",fallback_stype="main",fallback_url="/search.html#/";
var parameter_URL="",url="",globalsearch_parameter_MAP={},siteRootPath="",productfield="",form_action="";
var srtype_global="global";
$(document).on("click",".searchQuery",function(){siteRootPath=$("#globalsearch").attr("action");
var a=$("#ub-search").val();
global_search(srtype_global,a)
});
$(document).on("keypress","#globalsearch .geo",function(b){if(b.which==13){siteRootPath=$("#globalsearch").attr("action");
var a=$("#ub-search").val();
global_search(srtype_global,a);
return false
}});
function global_search(b,a){if(typeof b!="undefined"||b.length>0){globalsearch_parameter_MAP=create_globalsearch_Map();
search(a,b)
}}$(document).on("click","#search-panel button",function(){siteRootPath=$("#globalsearch").attr("action");
var a=$(".search-panel #search").val();
$("#mNavClose").click();
global_search(srtype_global,a);
return false
});
$(document).on("keypress",".search-panel #search",function(b){if(b.which==13){siteRootPath=$("#globalsearch").attr("action");
var a=$(".search-panel #search").val();
$("#mNavClose").click();
global_search(srtype_global,a);
return false
}});
$(document).on("click","#basic-addon1",function(){$("#supportsearch").attr("action",$("#globalsearch").attr("action"));
var a=$("#supportsearch").attr("action");
siteRootPath=a;
var c=$(this).data("srtype");
if($(this).data("productfield")!=""){productfield=$(this).data("productfield")
}if("global"==c){var b=$("#generic-search").val();
global_search(c,b)
}else{supp_sec_search(c)
}});
$(document).on("keypress","#generic-search",function(e){$("#supportsearch").attr("action",$("#globalsearch").attr("action"));
var b=$("#supportsearch").attr("action");
siteRootPath=b;
var d=$(this).data("srtype");
var a=(e.keyCode?e.keyCode:e.which);
if(a=="13"){if($(this).data("productfield")!=""){productfield=$(this).data("productfield")
}if("global"==d){var c=$("#generic-search").val();
global_search(d,c)
}else{supp_sec_search(d)
}return false
}});
function supp_sec_search(b){var a=$("#generic-search").val();
if(typeof b!="undefined"||b.length>0){globalsearch_parameter_MAP=create_supp_sec_search_parameter_MAP();
search(a,b)
}}function create_globalsearch_Map(){var a={};
$.each($("#globalsearch input"),function(b,d){if($(this).attr("type")=="hidden"){var e=$(this).attr("name");
if(e.indexOf("cq_csrf_token")>-1){return true
}var c=$(this).val();
a[e]=c
}});
return a
}function create_supp_sec_search_parameter_MAP(){var a={};
$.each($("#supportsearch input"),function(b,d){if($(this).attr("type")=="hidden"){var e=$(this).attr("name");
if(e.indexOf("cq_csrf_token")>-1){return true
}var c=$(this).val();
a[e]=c
}});
return a
}function get_Search_URL(b){var a="";
if(b.length>0){a+=b
}return a
}function create_search_urlparam(b,d){var e="";
var a=1;
for(var c in globalsearch_parameter_MAP){if(globalsearch_parameter_MAP.hasOwnProperty(c)){if(a==1){e+=c+eq+globalsearch_parameter_MAP[c];
a=0
}else{e+=amb+c+eq+globalsearch_parameter_MAP[c]
}}}e+=amb+q+eq+b;
return e
}function create_security_search_urlparam(a,b){var c="";
c=create_search_urlparam(a,b);
return c
}function create_support_search_urlparam(a,b){var c="";
c=create_search_urlparam(a,b);
c+=amb+product+eq+productfield;
return c
}function search(a,b){url=get_Search_URL(siteRootPath);
if(url==""){url=fallback_url;
if(b=="global"){globalsearch_parameter_MAP[client]=fallback_client;
globalsearch_parameter_MAP[site]=fallback_site;
globalsearch_parameter_MAP[cc]=fallback_cc;
globalsearch_parameter_MAP[stype]=fallback_stype
}else{if(b=="security"){globalsearch_parameter_MAP[cc]=fallback_cc
}else{globalsearch_parameter_MAP[cc]=fallback_cc
}}}parameter_URL=ques;
if("support"==b){parameter_URL+=create_support_search_urlparam(a,b)
}else{if("security"==b){parameter_URL+=create_security_search_urlparam(a,b)
}else{if("global"==b){parameter_URL+=create_search_urlparam(a,b)
}}}window.location=url+parameter_URL
}var mainCatVal="";
var mainCatClass="";
var linkClickVal="";
var ulHeight=0;
var data_target="";
var level1Html="";
var sideBarlogoHeight=0;
var sideBarTotalHeight=0;
var wHeight=0;
$(document).ready(function(){ulHeight=$(".sidebar > ul").outerHeight(true);
$(".verticleToggleMenu").hide();
toggleSidebar();
defineWidth();
$(document).on("click",".verticleToggleMenu",function(){$(".sidebar .verticlaToggle").css("height","100%");
$(".verticlaToggle").addClass("opened");
$(".sidebar ul.verticlaToggle.opened li").show();
$("#head-ico a").html($(this).html());
var a=$(this).attr("data-target");
$(".menu-cat").hide();
$(a).show();
$(this).addClass("cross");
$(".sidebar-overlay").show();
$(".sidebar-overlay").animate({left:"135px"},0);
defineWidth()
});
$(document).on("click",".verticleToggleMenu.cross",function(){$(this).removeClass("cross");
$(".sidebar-overlay li.info").show();
$(".sidebar-overlay li.head-ico").show();
$(".verticlaToggle").removeClass("opened");
$(".subCat-container").removeClass("vMenu");
$(".subCat-container.vMenu").parent(".col-md-3").removeClass("stretch-full");
$(".sidebar .verticlaToggle li").removeClass("active-li");
$(".sidebar .verticlaToggle li").children("a").removeClass("cross");
$(".verticleNav .levelV1").remove();
$(".verticleNav .subCat-container li.subCat").removeClass("clicked");
$(".verticleNav .subCat-container li.subCat").siblings("li").removeClass("show_subcat");
$(".subCat-container").removeClass("vMenuLevel2")
});
$(document).on("click",".verticleToggle.opened li",function(){$(".verticleToggle.opened li").removeClass("active-li");
$(this).addClass("active-li")
});
if($(window).innerWidth()<800){$(".sidebar > ul").removeClass("verticlaToggle");
$(".verticleToggleMenu").hide();
setHeight()
}$(".sidebar-overlay").addClass("deskNav");
$(document).on("click",".sidebar ul li a",function(){$("#head-ico a").html($(this).html());
var c="#menu-overlay-"+$(this).attr("id");
$(".menu-cat").hide();
$(c).show();
$(".sidebar-overlay").show();
$(".sidebar-overlay .submenu li").hide();
$(".submenu li.subCat").show();
$(".sidebar-overlay").animate({left:"135px"},0);
$(".sidebar ul li a").removeClass("cross");
$(".sidebar ul li").removeClass("active-li");
$(this).parent("li").addClass("active-li");
$(this).addClass("cross");
var b=$(this).parent("li").height();
var a=$(".sidebar ul li.active-li");
a=b;
if(window.innerWidth<=800){$(".menu-cat").scrollTop(0);
$(".sidebar-overlay").addClass("mobiNav");
$(".menu-cat").each(function(){if($(this).css("display")=="block"){var e=$(this).innerHeight();
var d=window.innerHeight;
if(e>d){$(this).css("max-height",(d-99));
$(this).css("overflow-y","scroll")
}}})
}});
$(document).on("click",".cross",function(){$(".menu-cat").scrollTop(0);
$(this).removeClass("cross");
$(this).parent("li").removeClass("active-li");
$(".sidebar-overlay").animate({left:"-100%"},0)
});
$(document).on("click","#hamBurger",function(){$(".sidebar ul.opened li").show();
$("html,body").css("overflow","hidden");
$(".sidebar-container .sidebar ul").show();
$(".overlay").show();
$(".l_content").empty();
$("#reverse").remove();
$(".mobi-head").show();
if($("#mNavClose").length==0){$(".mobi-head").append('<span aria-hidden="true" class="glyphicon glyphicon-remove" id="mNavClose"></span>')
}});
$(document).on("click","#mNavClose",function(){$(".sidebar-container .sidebar ul").hide();
$(".mobi-head").hide();
$(".mobi-head").removeClass("level2");
$(".mobi-head").removeClass("level3");
$(".overlay").hide();
$(".l_content").empty();
$("#reverse").remove();
$(this).remove();
$("html,body").removeAttr("style")
});
$(window).resize(function(){if(window.innerWidth>800){$(".sidebar-container .submenu").show();
$(".sidebar-container .sidebar ul").show();
$(".sidebar-container .sidebar").removeAttr("style");
$(".sidebar-container .sidebar ul").removeAttr("style");
$(".sidebar-container .sidebar").show();
$(".sidebar ul li").removeClass("active-li");
$(".mobi-head").empty();
$(".sidebar-overlay").addClass("deskNav");
$(".sidebar-overlay").removeClass("mobiNav");
$("html,body").removeAttr("style")
}else{if(window.innerWidth<=800){$(".sidebar-overlay").removeClass("deskNav");
$(".sidebar-container .sidebar-overlay").hide();
$(".sidebar ul li a").removeClass("cross");
$(".sidebar ul li").removeAttr("style");
$(document).on("click","#hamBurger",function(){$(".sidebar-container .sidebar").css({margin:"0",width:"100%",height:"100%"})
});
$(document).on("click","#mNavClose",function(){$(".sidebar ul li a").removeClass("cross");
$(".sidebar-container .sidebar").removeAttr("style");
$(".menu-cat").removeAttr("style");
$(".menu-cat").hide();
$(".sidebar-container .submenu").hide()
});
setHeight()
}else{if(window.innerWidth==800){$(".verticlaToggle").removeClass("opened");
$("#mNavClose").click()
}}}if($(window).innerWidth()<800){$(".sidebar > ul").removeClass("verticlaToggle");
$(".verticleToggleMenu").hide()
}defineWidth();
toggleSidebar()
});
$(window).on("orientationchange",function(){setTimeout(function(){setHeight()
},300)
})
});
$(document).on("click",".sidebar-overlay .submenu li.subCat",function(){$(".mobi-head").addClass("level3");
$(".mobi-head").removeClass("level2");
mainCatVal=$(".mobi-head .l_content span").html();
mainCatClass=$(".mobi-head .l_content i").attr("class");
if($(this).children("strong").children("a").length<1){linkClickVal=$($(this).children("strong")).html()
}else{linkClickVal=$($(this).children("strong").children("a")).html()
}$(".mobi-head .l_content").html('<span data-category="'+mainCatVal+'" class="l3">'+linkClickVal+"</span>")
});
$(document).on("click","#hamBurger",function(){$(".sidebar-container .sidebar").css({margin:"0",width:"100%",height:"100%"})
});
$(document).on("click",".level3 #mNavClose",function(){$(".subCat-container li").hide();
$(".subCat").show()
});
$(document).on("click","#mNavClose",function(){$(".sidebar-container .sidebar").removeAttr("style");
$(".sidebar-container .submenu").hide()
});
$(document).on("click",".level2 .l_content, .level2 #reverse",function(){$(this).hide();
$("#reverse,.submenu").hide();
$(".sidebar ul").show();
$(".sidebar-overlay.mobiNav").removeAttr("style")
});
$(document).on("click",".level3 .l_content, .level3 #reverse",function(){$(this).hide();
$("#reverse,.submenu li").hide();
$(".subCat").show();
$(".subCat").closest(".menu-cat").find("span").show();
$(".mobi-head").addClass("level2");
$(".mobi-head").removeClass("level3");
$(".level2 #reverse").show();
if(mainCatVal=="Partners Programs"){$(".l_content").show().html('<i style="margin-right:2px; width:auto;" class="'+mainCatClass+'"></i><i class="'+mainCatClass+'"></i><span>'+mainCatVal+"</span>")
}else{$(".l_content").show().html('<i class="'+mainCatClass+'"></i><span>'+mainCatVal+"</span>")
}});
$(document).on("click",".submenu li.subCat",function(){$(this).parent().children().show();
if(window.innerWidth<=800){$(this).closest(".menu-cat").find("span").hide()
}$(".submenu li.subCat").hide()
});
$(document).on("click",".submenu li a",function(a){if($(this).attr("href")==document.location.pathname+document.location.hash){$(".cross").click();
a.preventDefault()
}else{if($(this).attr("href").split("#")[0]==document.location.pathname){$(".cross").click();
var b="#"+$(this).attr("href").split("#")[1];
$(".secondary-nav ul li a").each(function(){if($(this).attr("href")==b){$(this).click()
}})
}}});
$(document).on("click",".sidebar ul li a",function(){if($(".submenu").is(":hidden")){$(".submenu").show()
}if($(".verticleToggleMenu").is(":visible")){$(".head-ico").hide();
$(".sidebar-overlay ul li.info").addClass("infoHidden");
$(".subCat-container").parent(".col-md-3").removeClass("stretch-full")
}else{$(".head-ico").show();
$(".sidebar-overlay ul li.info").removeClass("infoHidden")
}$(".mobi-head").addClass("level2");
$(".mobi-head").html('<a class="l_content">'+$(this).html()+'</a><span id="mNavClose" class="glyphicon glyphicon-remove" aria-hidden="true"></span>');
$(".level2").append('<a id="reverse" class="reverse" href="javascript:void(0);"><i class="fa fa-chevron-left"></i></a>');
$(this).parent().parent("ul").hide();
$(".sidebar-overlay").show()
});
function defineWidth(){var a=$(".sidebar-overlay").width()-165;
var b=a+"px";
$("ul.verticlaToggle").css({width:b})
}function toggleSidebar(){var a=false;
sideBarlogoHeight=$(".sidebar .logo-vm").outerHeight()+20;
sideBarTotalHeight=ulHeight+sideBarlogoHeight;
wHeight=$(window).height();
if($(".verticleToggleMenu").is(":visible")){$(".head-ico").hide();
$(".sidebar-overlay ul li.info").addClass("infoHidden")
}else{$(".head-ico").show();
$(".sidebar-overlay ul li.info").removeClass("infoHidden")
}if(wHeight<sideBarTotalHeight&&!$(".sidebar > ul").hasClass("verticlaToggle")&&$(window).innerWidth()>800){$(".sidebar > ul").addClass("verticlaToggle");
$(".sidebar > ul").hide();
$(".verticleToggleMenu").show();
$(".sidebar-overlay").addClass("verticleNav");
if(a==false){$(".verticlaToggle").removeClass("opened");
$(".cross").click();
$(".sidebar > ul").hide();
$(".sidebar ul li").hide();
$(".sidebar-container .sidebar").removeAttr("style");
$(".sidebar-container .submenu").hide();
a=true
}$(".sidebar ul.verticlaToggle li a").removeClass("cross")
}else{if($(window).height()>sideBarTotalHeight&&$(".sidebar > ul").hasClass("verticlaToggle")){$(".sidebar > ul").removeClass("verticlaToggle");
$(".verticleToggleMenu").hide();
$(".sidebar-overlay").removeClass("verticleNav");
$(".subCat-container").removeClass("vMenu");
$(".sidebar ul li a").removeClass("cross");
$(".sidebar .verticlaToggle li").removeClass("active-li");
$(".subCat-container").parent(".col-md-3").removeClass("stretch-full");
if(a==false){$(".verticlaToggle").removeClass("opened");
$(".cross").click();
$(".sidebar > ul").show();
$(".sidebar ul li").show();
$(".levelV1").hide();
$(".sidebar-container .sidebar").removeAttr("style");
$(".sidebar-container .submenu").hide();
a=true
}$(".sidebar .verticlaToggle li").removeClass("active-li");
$(".verticleNav .levelV1").remove();
$(".verticleNav .subCat-container li.subCat").removeClass("clicked");
$(".verticleNav .subCat-container li.subCat").siblings("li").removeClass("show_subcat");
$(".subCat-container").removeClass("vMenuLevel2")
}else{if($(window).height()>sideBarTotalHeight){$(".sidebar-overlay").removeClass("verticleNav")
}else{a=false
}}}return false
}var wHeight=$(window).height();
var sideBarlogoHeight=$(".sidebar .logo-vm").outerHeight()+20;
var sideBarTotalHeight=ulHeight+sideBarlogoHeight;
$(document).on("click",".sidebar ul.verticlaToggle.opened li a",function(){$(".sidebar .verticlaToggle.opened").css("height","0");
$(".sidebar ul.verticlaToggle li a").removeClass("cross");
data_target="#menu-overlay-"+$(this).attr("id");
$(".sidebar ul.verticlaToggle.opened li").hide();
$(".subCat-container").addClass("vMenu");
$(".subCat-container.vMenu").parent(".col-md-3").addClass("stretch-full");
var a=$(this).html();
$(".levelV1").remove();
$(".menu-cat").append('<div class="levelV1"><a href="javascript:void(0)"><i class="fa fa-chevron-left"></i>'+a+"</a></div>")
});
$(document).on("click",".verticleNav .levelV1 a",function(){$(".sidebar ul.verticlaToggle li a").removeClass("cross");
$(".subCat-container").removeClass("vMenu");
$(".verticleNav .menu-cat").hide();
$(".sidebar ul.verticlaToggle.opened li").show();
$(".sidebar .verticlaToggle").css("height","100%")
});
$(document).on("click",".verticleNav .subCat-container.vMenu li.subCat",function(){level1Html=$(".levelV1").html();
$(".sidebar ul.verticlaToggle li a").removeClass("cross");
$(".verticleNav .levelV1").addClass("levelV2");
var a=$(this).html();
$(".verticleNav .levelV1").html('<a href="javascript:void(0)"><i class="fa fa-chevron-left"></i>'+a+"</a>");
$(".verticleNav .subCat-container.vMenu li.subCat").addClass("clicked");
$(this).siblings("li").addClass("show_subcat");
$(".subCat-container").addClass("vMenuLevel2").removeClass("vMenuLevel1")
});
$(document).on("click",".levelV1.levelV2",function(){$(".subCat-container").removeClass("vMenuLevel2").addClass("vMenuLevel1").addClass("vMenu");
$(".levelV1").html(level1Html);
$(".sidebar ul.verticlaToggle li a").removeClass("cross");
$(this).removeClass("levelV2");
$(".verticlaToggle").children("li").hide();
$(".submenu .menu-cat .subCat").show();
$(".submenu .menu-cat .show_subcat").removeClass("show_subcat").hide();
$(data_target).show();
$(".verticleNav .subCat-container li.subCat").removeClass("clicked");
$(".verticleNav .subCat-container.vMenu li.subCat").siblings("li").removeClass("show_subcat");
$(".sidebar .verticlaToggle").css("height","0")
});
$(document).on("click",".submenu li a",function(a){if($(this).attr("href")==document.location.pathname+document.location.hash){$(".cross").click();
a.preventDefault()
}else{if($(this).attr("href").split("#")[0]==document.location.pathname+document.location.hash){$(".cross").click();
var b="#"+$(this).attr("href").split("#")[1];
$(".secondary-nav ul li a").each(function(){if($(this).attr("href")==b){$(this).click()
}})
}}});
function setHeight(){$(".sidebar").css({"max-height":"0"});
$(".sidebar-overlay").removeAttr("style");
windowHeight=$(window).innerHeight();
$(".sidebar").css({"max-height":windowHeight+"px"});
$(".sidebar-overlay").css({"max-height":windowHeight+"px"})
}$(document).ready(function(){$(document).on("scroll",function(){if($(document).scrollTop()>40&&window.innerWidth>800){$(".breadCrumb").addClass("scrolling")
}else{$(".breadCrumb").removeClass("scrolling")
}});
if(window.scrollY>40&&window.innerWidth>800){$(".breadCrumb").addClass("scrolling")
}else{$(".breadCrumb").removeClass("scrolling")
}$(".overlay-con > a").mouseover(function(){$(".overlay-con a").addClass("hover-opacity");
$(this).removeClass("hover-opacity")
});
$(".social-overlay").mouseout(function(){$(".overlay-con a").removeClass("hover-opacity")
});
$(".dd-con").mouseover(function(){$(".toggle-dropdown > a").addClass("active")
});
$(".dd-con").mouseout(function(){$(".toggle-dropdown > a").removeClass("active")
});
(function(f){f(window).load(function(){if(f("#content-1").length>0||f("#content-2").length>0){f("#content-1, #content-2").mCustomScrollbar({theme:"minimal",autoHideScrollbar:"false",alwaysShowScrollbar:2,scrollInertia:"1",mouseWheelPixels:150,callbacks:{onScroll:function(){var g=this.mcs.topPct;
if(g>96){f("#content-1, #content-2").mCustomScrollbar("update")
}}}})
}})
})(jQuery);
$(document).on("mousewheel DOMMouseScroll",".bc-dropdown .mCustomScrollbar",function(f){var h=f.originalEvent,g=h.wheelDelta||-h.detail;
this.scrollTop+=(g<0?1:-1)*30;
f.preventDefault()
});
function b(){var g="";
var f=($(".nav-vm").height())+($(".breadCrumb").height());
if($(window).scrollTop()==0){g=window.innerHeight-(f+70)
}else{if($(window).scrollTop()>0){g=window.innerHeight-(($(".breadCrumb").height())+70)
}}$(".bc-dropdown ul #content-1, .bc-dropdown ul #content-2").css("max-height",g)
}b();
var a=$(".breadCrumb ul div.dd-con").children("li").last();
$(".breadCrumb ul div.dd-con").children("li").last().remove();
$(".breadCrumb").children("ul").append(a);
if(!($(a).children("a").next("ul").length>0)){$(a).removeClass("bc-dropdown")
}var e=20;
$(".bc-dropdown").each(function(f){e=$(this).outerWidth()+e
});
var d="";
function c(){$(".breadCrumb ul li:last span").removeAttr("style");
if($(".breadCrumb .social-links")[0]){if(window.innerWidth<1120){d=$(".breadCrumb ul").outerWidth()-200
}else{d=$(".breadCrumb ul").width()-$(".breadCrumb ul div.toggle-dropdown").width()
}}else{$(".breadCrumb ul").css("width","90%");
if(window.innerWidth<1120){d=$(".breadCrumb ul").outerWidth()-200
}else{d=$(".breadCrumb ul").width()-$(".breadCrumb ul div.toggle-dropdown").width()
}}if($(".breadCrumb ul").width()<($(".breadCrumb ul div.toggle-dropdown").outerWidth()+$(".breadCrumb ul li:last").width())){$(".breadCrumb > ul").addClass("spanellipse")
}else{$(".breadCrumb > ul").removeClass("spanellipse")
}if($(".social-links").width()<30){$(".breadCrumb ul").addClass("no-social-bc")
}if(($(".breadCrumb ul").width()-$(".lastLi").width()>300)){$(".breadCrumb ul .toggle-dropdown").removeClass("showDrpBox");
d=($(".breadCrumb ul").width()-$(".breadCrumb ul div").width()-$(".social-links").width())+200;
$(".breadCrumb ul li:last span").width(d)
}if($(window).width()-$(".sidebar").width()<$(".breadCrumb > ul").width()+$(".breadCrumb ul li:last span").width()+200){$(".breadCrumb ul .toggle-dropdown").addClass("showDrpBox")
}else{$(".breadCrumb ul .toggle-dropdown").removeClass("showDrpBox")
}if($(".social-links").length&&!$(".showDrpBox").length){if($(window).width()-$(".sidebar").width()<$(".breadCrumb > ul").width()+$(".social-links").width()+170){$(".breadCrumb ul .toggle-dropdown").addClass("showDrpBox")
}else{$(".breadCrumb ul .toggle-dropdown").removeClass("showDrpBox")
}}}$(window).load(function(){$(".breadCrumb ul").css("visibility","visible");
c();
if(($(".breadCrumb ul").width()-$(".lastLi").width()>300)){$(".breadCrumb ul .toggle-dropdown").removeClass("showDrpBox");
d=($(".breadCrumb ul").width()-$(".breadCrumb ul div").width()-$(".social-links").width())+200;
$(".breadCrumb ul li:last span").width(d)
}if($(window).width()-$(".sidebar").width()<$(".breadCrumb > ul").width()+$(".breadCrumb ul li:last span").width()+200){$(".breadCrumb ul .toggle-dropdown").addClass("showDrpBox")
}else{$(".breadCrumb ul .toggle-dropdown").removeClass("showDrpBox")
}c();
if($(".toggle-dropdown > a").css("display")!="none"){$(".dd-con").addClass("toggleView")
}else{$(".dd-con").removeClass("toggleView")
}});
$(window).resize(function(){$(".breadCrumb ul").css("visibility","visible");
c()
});
$(".bc-dropdown").hover(function(){$(".mCSB_container").each(function(){if($(this).outerHeight()<parseInt($(this).parent().parent(".mCustomScrollbar").css("max-height"))){$(this).parent().parent().children(".mCSB_scrollTools").hide()
}})
});
$(window).resize(function(){b();
if($(".toggle-dropdown > a").css("display")!="none"){$(".dd-con").addClass("toggleView")
}else{$(".dd-con").removeClass("toggleView")
}});
$(document).on("scroll",function(){b()
});
if($(".dd-con li.bc-dropdown").length>2){$(".dd-con").addClass("multi-tier-brd")
}if($(".dd-con li.bc-dropdown").length==5){$(".dd-con").addClass("listFive")
}else{if($(".dd-con li.bc-dropdown").length==4){$(".dd-con").addClass("listFour")
}else{if($(".dd-con li.bc-dropdown").length==1){$(".dd-con").addClass("single-brd")
}else{if($(".dd-con li.bc-dropdown").length<1){$(".toggle-dropdown").hide()
}}}}});
var getAnchorName=[];
var getAnchortop=[];
var scrollPos=$(window).scrollTop();
var factor=0,_factor=0,__factor=0;
var navBarHeight=$(".navbar").outerHeight(true);
var breadCrumHeight=$(".breadCrumb").outerHeight(true);
var secondNavHeight=$(".secondary-nav").outerHeight(true);
var secondNavFixedHeight=$(".secondary-nav.fixed").outerHeight(true);
var getNavHeight=0;
function getNavDetail(){getAnchorName.length=0;
getAnchortop.length=0;
$(".navSelecter").each(function(){getAnchorName.push($(this).attr("id"));
getAnchortop.push(Math.ceil($(this).position().top))
})
}$(document).ready(function(){if($(".secondary-nav ul li").length<1){$(".secondary-nav").addClass("noLinks")
}SetHeaderHeight();
$(window).load(function(){b();
if(window.innerWidth<=800){calcHeight_snav()
}$(".secondary-nav ul li a").each(function(){if($(this).attr("href")==document.location.hash){$(this).click()
}})
});
$(window).on("scroll",function(){if(window.innerWidth<=800){collapseMenu()
}});
$(document).on("click",'.secondary-nav ul li a[href*="#"]:not([href="#"])',function(g){if($(this).parents(".mobilecongress").length){b();
var d=0;
if(window.innerWidth<800){if($(this).hasClass("active")&&!$(this).parent("ul").hasClass("open")){return false
}}if(window.innerWidth<641){d=getAnchortop[0]+30
}else{if(window.innerWidth<801){d=getAnchortop[0]
}else{if(window.innerWidth<1001){if($(this).parent().is(":last-child")){d=getAnchortop[0]-140
}else{if(!$(this).parent().is(":first-child")){d=getAnchortop[0]-100
}else{d=getAnchortop[0]
}}}else{if($(this).parent().is(":last-child")){d=getAnchortop[0]-70
}else{if(!$(this).parent().is(":first-child")){d=getAnchortop[0]-50
}else{d=getAnchortop[0]
}}}}}calcHeight_snav();
g.preventDefault();
var f=this.hash;
var c=$(f);
$("html, body").animate({scrollTop:c.offset().top-d},900,function(){onScroll()
});
$(".secondary-nav ul").removeClass("open")
}else{b();
var d=0;
if(window.innerWidth<800){if($(this).hasClass("active")&&!$(this).parent("ul").hasClass("open")){return false
}}if(window.innerWidth<641){d=getAnchortop[0]+30
}else{if(window.innerWidth<801){d=getAnchortop[0]
}else{if(window.innerWidth<1001){d=getAnchortop[0]
}else{d=getAnchortop[0]+50
}}}calcHeight_snav();
g.preventDefault();
var f=this.hash;
var c=$(f);
$("html, body").animate({scrollTop:c.offset().top-d},900,function(){onScroll()
});
$(".secondary-nav ul").removeClass("open")
}});
if(window.innerWidth<=800){collapseMenu()
}$(window).on("scroll",function(){b();
onScroll()
});
function a(c){}$(document).on("click",".secondary-nav ul li a",function(d){$(".content-container").css("padding-top",0);
if($(this).hasClass("active")){return false
}else{var c=$(this);
var f=c.attr("href");
if(c.position().top<=scrollPos){}else{c.removeClass("active")
}}});
$(document).on("click",".secondary-nav ul li a.active",function(c){$(".secondary-nav ul li").toggle();
$(".secondary-nav ul li a.active").parent("li").toggle();
$(".secondary-nav ul").addClass("open");
c.preventDefault()
});
function b(){if(window.innerWidth<1001&&window.innerWidth>800){if($(window).scrollTop()<40){$(".content-container").css("padding-top",0)
}if($(window).scrollTop()>40){$(".secondary-nav").addClass("fixed");
$(".content-container").css("padding-top",$(".secondary-nav").height()+20)
}else{$(".secondary-nav").removeClass("fixed");
$(".content-container").css("padding-top","0")
}}else{if($(window).scrollTop()>($(".secondary-nav").height()-$(".breadCrumb").height())&&$(window).scrollTop()>0){if($(".secondary-nav ul li").length>0){$(".secondary-nav").addClass("fixed")
}}else{$(".secondary-nav").removeClass("fixed")
}getNavDetail()
}}if($(window).scrollTop()>0){$(".breadCrumb").addClass("scrolling")
}$(window).resize(function(){headlinePos();
SetHeaderHeight();
b();
onScroll();
if($(window).scrollTop()>0){$(".breadCrumb").addClass("scrolling")
}if(window.innerWidth<=800){collapseMenu();
calcHeight_snav()
}else{getNavDetail();
if(navigator.userAgent.indexOf("MSIE")!==-1||navigator.appVersion.indexOf("Trident/")>0){$(".content-container").css("padding-top","0")
}else{if($(window).scrollTop()<40){$(".content-container").css("padding-top","initial")
}}}});
if(window.innerWidth<=640){headlinePos()
}$(window).scroll(function(){if($(window).scrollTop()==0){if($(".secondary-nav ul li").length>0){$("#truste-consent-track").css("height","auto");
if($(window).width()<800){$("#consent_blackbar").css("margin-top","45px")
}}}else{if($(window).scrollTop()>0){if($(".secondary-nav ul").length>0){$("#truste-consent-track").height(0);
$("#consent_blackbar").css("margin-top","0px")
}}}if(window.innerWidth<800){if($(".secondary-nav").hasClass("noLinks")){if($(window).scrollTop()==0){$(".content-container").css("padding-top","0")
}}if($(".secondary-nav ul li").length>0){$(".content-container").css("padding-top",$(".secondary-nav").height())
}}if(window.innerWidth<=640){if($(window).scrollTop()==0){if($(".secondary-nav").hasClass("noLinks")){$(".secondary-nav").removeClass("hideHeading")
}getNavDetail();
if($(".secondary-nav ul li").length>0){$(".secondary-nav").addClass("stayTop");
$(".secondary-nav").removeClass("hideHeading");
$(".content-container").css("padding-top",$(".secondary-nav").height())
}}else{if($(window).scrollTop()>0){getNavDetail();
if($(".secondary-nav ul").length>0){$(".secondary-nav").addClass("hideHeading");
$(".secondary-nav").removeClass("stayTop");
if($(".secondary-nav ul li").length>0){$(".content-container").css("padding-top",$(".secondary-nav").height())
}}}}}});
if(window.innerWidth<800){if($(".secondary-nav ul li").length>0){$(".content-container").css("padding-top",$(".secondary-nav").height())
}$(window).on("scroll",calcHeight_snav);
$(window).on("scroll",onScroll);
$(window).on("resize",onScroll)
}onScroll();
$(window).on("scroll",onScroll);
$(window).on("resize",onScroll);
$(window).on("load",onScroll)
});
function headlinePos(){if(window.innerWidth<=640){if($(window).scrollTop()==0){if($(".secondary-nav ul li").length>0){$(".secondary-nav").addClass("stayTop");
$(".secondary-nav").removeClass("hideHeading")
}}else{if($(window).scrollTop()>0){$(".secondary-nav").addClass("hideHeading");
$(".secondary-nav").removeClass("stayTop")
}}}else{if(window.innerWidth>640){$(".secondary-nav").removeClass("stayTop");
$(".secondary-nav").removeClass("hideHeading")
}}}function SetHeaderHeight(){if(window.innerWidth>800){if($(".secondary-nav .snav_left ul").length>0){$(".snav_right").height($(".secondary-nav .snav_left h2").outerHeight(true)+$(".secondary-nav .snav_left ul").outerHeight(true))
}else{if($(".secondary-nav .snav_right .cta a").length<2){$(".secondary-nav .snav_right").addClass("singleLinkRight")
}$(".snav_right").height($(".secondary-nav .snav_left h2").outerHeight(true)+$(".secondary-nav .snav_left ul").outerHeight(true))
}}else{if($(".secondary-nav .snav_right .cta a").length<1){$(".secondary-nav .snav_left").addClass("noCtaLink")
}else{if($(".secondary-nav .snav_right .cta a").length<2){$(".secondary-nav .snav_right").addClass("singleLinkCenter")
}}$(".snav_right").removeAttr("style");
if($(".secondary-nav .snav_left ul li").length<1){}}}function collapseMenu(){$(".secondary-nav ul li a").parent("li").hide();
$(".secondary-nav ul li a.active").parent("li").show()
}function calcHeight_snav(){var a=0;
if($(".secondary-nav").is(":visible")==true){a=$(".secondary-nav").height()
}}function onScroll(){getNavDetail();
var b=0;
if(window.innerWidth<801){b=$(window).scrollTop()+getAnchortop[0]+50
}else{if(window.innerWidth<1001){b=$(window).scrollTop()+getAnchortop[0]+$(".secondary-nav").outerHeight(true)+10
}else{b=$(window).scrollTop()+getAnchortop[0]+70
}}if(window.innerWidth>800){if($(window).scrollTop()<40){SetHeaderHeight();
$(".content-container").css("padding-top",0)
}}for(var a=0;
a<getAnchortop.length;
a++){if(b>getAnchortop[a]){$(".secondary-nav ul li a").removeClass("active");
$(".secondary-nav ul li a[href='#"+getAnchorName[a]+"']").addClass("active")
}}}$(window).resize(function(){if($(window).scrollTop()==0){if($(".secondary-nav ul li").length>0){$("#truste-consent-track").css("height","auto");
if($(window).width()<800){$("#consent_blackbar").css("margin-top","45px")
}else{$("#consent_blackbar").css("margin-top","0")
}}}else{if($(window).scrollTop()>0){if($(".secondary-nav ul").length>0){$("#truste-consent-track").height(0);
$("#consent_blackbar").css("margin-top","0px")
}}}});
$(window).load(function(){if($(window).scrollTop()==0){if($(".secondary-nav ul li").length>0){$("#truste-consent-track").css("height","auto");
if($(window).width()<800){$("#consent_blackbar").css("margin-top","45px")
}else{$("#consent_blackbar").css("margin-top","0")
}}}else{if($(window).scrollTop()>0){if($(".secondary-nav ul").length>0){$("#truste-consent-track").height(0);
$("#consent_blackbar").css("margin-top","0px")
}}}});
$(document).ready(function(){$(document).on("click touchstart tap",".inbeddedvideo .vjs-big-play-button",function(){$(".inbeddedvideo .l2_banner_content").hide()
});
if($(window).width()>350){if($(".inbeddedvideo").find(".autoplay").length>0){$(".inbeddedvideo .l2_banner_content").hide()
}}$(".worldwide-region-list-content .geo-link#ru").parent().addClass("ru-font");
$(".linklist-simple a").each(function(){$(this).attr("title",$(this).text())
});
$(".tech_inner_block h4").each(function(p,r){var s=$(this).text();
$(this).html(s)
});
$(".comparisonTable .tooltip_container [data-toggle='tooltip']").each(function(){if($(this).length>0){var p=$(this).attr("data-original-title");
$(this).attr("title",p);
$(this).tooltip()
}});
$('<div id="consent_blackbar"></div>').prependTo("body");
$('<div id="teconsent"></div>').insertAfter(".footer-container");
$('<div id="teconsent"></div>').insertAfter(".page-footer");
if($(".mobilecongress").length){$("#consent_blackbar").addClass("mobilecongress-theme")
}if($(".business-card").length){$("#consent_blackbar").addClass("businesscard-theme")
}if($(".holPar").length){$("#consent_blackbar").addClass("hol-theme")
}function h(s){var r=s+"=";
var u=decodeURIComponent(document.cookie);
var p=u.split(";");
for(var t=0;
t<p.length;
t++){var v=p[t];
while(v.charAt(0)==" "){v=v.substring(1)
}if(v.indexOf(r)==0){return v.substring(r.length,v.length)
}}return""
}var o=h("cs-product-solution");
var d="";
var e="";
var g="";
var n="";
var f="";
if(o!==""){if(o.indexOf(",")!==-1){d=o.split(",");
e=d[0];
g=d[1];
if(e.indexOf("product=")!==-1){n=e
}if(g.indexOf("solution=")!==-1){f=g
}}else{d=o
}}var b=$("meta[property=cs-product]").attr("content");
var a=$("meta[property=cs-solution]").attr("content");
var c;
if(typeof(b)=="undefined"&&typeof(a)!=="undefined"){if(n!==""){c=n+",solution="+a
}else{if(d!==""&&d.indexOf("product=")!==-1){c=d+",solution="+a
}else{c="solution="+a
}}}if(typeof(a)=="undefined"&&typeof(b)!=="undefined"){if(f!==""){c="product="+b+","+f
}else{if(d!==""&&d.indexOf("solution=")!==-1){c="solution="+a+","+d
}else{c="product="+b
}}}if(typeof(a)!=="undefined"&&typeof(b)!=="undefined"){c="product="+b+",solution="+a
}var m=new Date();
m.setDate(m.getDate()+30);
if(typeof(b)!=="undefined"||typeof(a)!=="undefined"){document.cookie="cs-product-solution="+c+";path=/;expires="+m
}$(".wrapper .content-container a[href*='#']:not([href='#'])").click(function(){var p=$(this).attr("href");
if(typeof p!==typeof undefined){var r=$(this).attr("href").split("#")[1];
if($(this).attr("href").split("#")[0]==""){var t="#"+r;
var s=$(".breadCrumb").innerHeight()+$(".secondary-nav").innerHeight();
if($(t).length){$("html, body").animate({scrollTop:$(t).offset().top-s},1000)
}}}});
var l=window.location.href.substring(window.location.href.lastIndexOf("search.html#/"));
if(l=="search.html#/"){if(window.location.href.indexOf("?q=")<=-1){history.pushState(null,null,"/search.html#")
}}$(".tooltip-holder [data-toggle='tooltip']").each(function(){if($(this).length>0){var p=$(this).attr("data-original-title");
$(this).attr("title",p);
$(this).tooltip()
}})
});
$(document).on("click","#tech_specs_collapse",function(){$(this).parent().parent().find(".col-md-12").find(".tech_collapse.collapse_view").toggleClass("visible");
resizeBlock_tech_specs()
});
$(document).on("click","#overview_collapse",function(){$("#overview .collapse_view").toggleClass("visible")
});
$(document).on("click","#collapse_features",function(){$(this).children("span").html("collapse features");
$(".hidden_features").show()
});
$(document).on("click","#collapse_features.expanded",function(){$(this).children("span").html("see all features");
$(".hidden_features").hide()
});
$(document).on("click",".price_display_dynamic",function(){var c=$(this).data("randomid");
var b=$(this).data("colltext");
var a=$(this).data("exptext");
$(this).addClass("expanded");
$(this).children("span").html(b);
$(this).children("i").removeClass("fa-arrow-circle-down");
$(this).children("i").addClass("fa-arrow-circle-up");
$(this).parent().parent().children(".hidden-pricing").show()
});
$(document).on("click",".price_display_dynamic.expanded",function(){var c=$(this).data("randomid");
var b=$(this).data("colltext");
var a=$(this).data("exptext");
$(this).removeClass("expanded");
$(this).children("span").html(a);
$(this).children("i").removeClass("fa-arrow-circle-up");
$(this).children("i").addClass("fa-arrow-circle-down");
$(this).parent().parent().children(".hidden-pricing").hide()
});
$(document).on("mouseenter",".module .share a",function(){$(this).next().show()
});
$(document).on("mouseleave",".module .share",function(){$(this).children(".share-tip").hide()
});
function resizeBlock_tech_specs(){$(".tech_center_box").removeAttr("style");
var a="";
$(".right-border").each(function(){var d=$(this).find(".tech_center_box").height();
var c=$(this).prev().find(".tech_center_box").height();
var b=$(this).next().find(".tech_center_box").height();
a=Math.max(d,c,b);
$(this).find(".tech_center_box").css("height",a+5);
$(this).prev().find(".tech_center_box").css("height",a+5);
$(this).next().find(".tech_center_box").css("height",a+5)
})
}resizeBlock_tech_specs();
$(document).ready(function(){resizeBlock_tech_specs()
});
$(window).resize(function(){moduleHeight();
resizeBlock_tech_specs();
setTimeout(moduleHeight,50);
if(window.innerWidth>992){combinationCard()
}if(window.innerWidth>801){if(!$(".secondary-nav").length>0){$(".content-container").removeAttr("style")
}}else{if(window.innerWidth<801){if(!$(".secondary-nav").length>0){$(".content-container").css("margin-top",$(".sidebar").outerHeight())
}}}});
function moduleHeight(){$(".module").removeAttr("style");
var b=new Array();
var a="";
$(".module").each(function(){b.push($(this).outerHeight())
});
a=Math.max.apply(Math,b);
$(".module").css("height",a+20);
$(".miniverticalcontentcontainer .section.target.parbase").css("height",a+35)
}moduleHeight();
$(document).ready(function(){moduleHeight();
if(window.innerWidth<801){if(!$(".secondary-nav").length>0){$(".content-container").css("margin-top",$(".sidebar").outerHeight())
}}$(".two_col_exp_col").addClass("collapsed");
$(document).on("click",".two_col_exp_col_aTag",function(){var d=$(this).parent().data("exp_txt");
var b=$(this).parent().data("col_txt");
if($(this).parent().hasClass("collapsed")){$(this).parent().find("i").removeClass("fa-arrow-circle-down");
$(this).parent().find("i").addClass("fa-arrow-circle-up");
$(this).parent().find("span").text(b)
}else{$(this).parent().find("i").removeClass("fa-arrow-circle-up");
$(this).parent().find("i").addClass("fa-arrow-circle-down");
$(this).parent().find("span").text(d)
}$(this).parent().toggleClass("collapsed");
var c=$(this).parent().hasClass("collapsed");
$(this).parent().prev().find(".row").find(".hidden_part").removeClass("collapse_view");
if(c){$(this).parent().prev().find(".row").find(".hidden_part").addClass("collapse_view")
}$(this).parent().prev().find(".row").find(".hidden_part").find(".section").each(function(e){$(this).parent().removeClass("hidden");
$(this).parent().addClass("visible");
if(c){$(this).parent().removeClass("visible");
$(this).parent().addClass("hidden")
}});
resizeFunc();
$(".thumb-details").each(function(){if(!($(this).hasClass("rollover"))){$(this).children(".col-md-1").removeAttr("style");
$(this).children(".col-md-10").removeAttr("style");
var e=$(this).height();
$(this).children(".col-md-1").css("height",e);
$(this).children(".col-md-10").css("height",e)
}})
});
var a=$("div.verticalContainer").data("minivercontainer");
if(a=="zero"){$("div[data-emptytext='Mini Vertical Content Card']").addClass("reset_hgt_to_zero")
}if($("#expand_collapse_collapse.collapse_content").hasClass("collapse_tables")){$(document).on("click",".span-heading-table.exp-col-container a",function(){var e=$(this).data("parent");
var c=e.split("#accordion");
var b=c[1];
var d=$(this).data("exptext");
$("#"+b+" .collapse_content span").html(d);
$("#"+b+" .collapse_content").removeClass("table_expanded");
$("#"+b+" .collapse_content").removeClass("expanded");
$("#"+b+" .collapse_content").addClass("collapse_tables");
$("#"+b+" .collapse_content i").attr("class","fa fa-arrow-circle-down")
})
}$(document).ready(function(){if($('[data-toggle="tooltip"]').length>0){$('[data-toggle="tooltip"]').tooltip()
}});
$("div>button.green").click(function(){var c=$(this).data("href");
var f=$(this).data("tgt");
var b=$(this).data("srcvalue");
if(b=="pageheader"||b=="stickysection"){if(!(c.endsWith(".html")||c.endsWith(".htm"))&&(c.startsWith("/content"))){if(c.startsWith("/content/dam")){c=c
}else{c=c+".html"
}}else{if((c.startsWith("http"))||(c.startsWith("https"))){c=c
}}if(f){window.location=c
}else{window.open(c)
}}else{var e=window.location.origin;
var d="";
if(f=="self"){d=e+c;
window.location.replace(d)
}else{d=c;
window.open(d,"_blank")
}}});
$(document).on("click",".price_display_dynamic",function(){var b=$(this).data("randomid");
$(".hidden_part"+b).toggleClass("collapse_view")
})
});
$(document).ready(function(){$("#footertext_year ul li:first-child").each(function(){var b=$(this).text();
var a=b.split(" ");
cpyyr=new Date();
x=cpyyr.getFullYear();
for(i=0;
i<a.length;
i++){if((!(a[i].indexOf("1")))||(!(a[i].indexOf("2")))||(!(a[i].indexOf("3")))){$(this).text(b.replace(a[i],x))
}}})
});
$(document).ready(function(){$(".exp_col_hide_show").addClass("collapsed_data");
var d=$(window).height();
var b=$(".content-container").height();
var c=$(".footer-container").height();
var a=d-c;
if(d<=600||d>=600){if($(window).width()<800||$(window).width()>800){$(".footer-container").css("position","relative")
}}});
$(document).on("click",".collapse_content_wid",function(){var b=$(this).data("randomincval");
var a=b-1000;
var c=$(this).data("collpseval");
$(this).addClass("expanded");
$(this).children("#exptext"+a).html(c);
$(this).children("i").removeClass("fa-arrow-circle-down");
$(this).children("i").addClass("fa-arrow-circle-up")
});
$(document).on("click",".collapse_content_wid.expanded",function(){var b=$(this).data("randomincval");
var a=b-1000;
var c=$(this).data("expval");
$(this).removeClass("expanded");
$(this).children("i").removeClass("fa-arrow-circle-up");
$(this).children("i").addClass("fa-arrow-circle-down");
$(this).children("#exptext"+a).html(c)
});
$(document).on("click","#overview_collapse_wid",function(){var b=$(this).data("randomincval");
var a=b-1000;
$("#"+a+" .collapse_view").toggleClass("visible")
});
$(document).on("click",".exp_col_hide_show",function(){var c=$(this).data("colltext");
var b=$(this).data("exptext");
var a=$(this).data("randomid");
$(this).removeClass("collapse_tables");
$(this).addClass("table_expanded");
$("#accordion"+a+" .panel-collapse.collapse").addClass("in");
$("#accordion"+a+' .panel-collapse:not(".in")').collapse("show");
$("#accordion"+a+" .panel-title.span-heading-table > a i").removeClass("fa-plus");
$("#accordion"+a+" .panel-title.span-heading-table > a i").addClass("fa-close");
if($(this).hasClass("collapsed_data")){$(this).children("span").html(c);
$(this).find("i").removeClass("fa fa-arrow-circle-down");
$(this).find("i").addClass("fa fa-arrow-circle-up");
$(".exp_col_hide_show").removeClass("collapsed_data")
}else{$(this).children("span").html(b);
$(this).find("i").removeClass("fa fa-arrow-circle-up");
$(this).find("i").addClass("fa fa-arrow-circle-down");
$(".exp_col_hide_show").addClass("collapsed_data")
}});
$(document).on("click",".table_expanded",function(){$(this).removeClass("table_expanded");
var d=$(this).data("colltext");
var b=$(this).data("exptext");
var a=$(this).data("randomid");
$("#accordion"+a+" .panel-title.span-heading-table > a i").removeClass("fa-close");
$("#accordion"+a+" .panel-title.span-heading-table > a i").addClass("fa-plus");
$(this).children("span").html(b);
$("#accordion"+a+" .panel-collapse.in").collapse("hide");
$(this).addClass("collapse_tables");
var c=$("#accordion"+a).offset().top-122;
$("html, body").animate({scrollTop:c},900)
});
$(document).on("click",".panel-title.span-heading-table > a",function(){if($(this).children("i").hasClass("fa-close")){$(this).children("i").removeClass("fa-close");
$(this).children("i").addClass("fa-plus")
}else{if($(this).children("i").hasClass("fa-plus")){var a=$(this).data("parent");
$(a+" .panel-title.span-heading-table > a i").removeClass("fa-close");
$(a+" .panel-title.span-heading-table > a i").addClass("fa-plus");
$(this).children("i").removeClass("fa-plus");
$(this).children("i").addClass("fa-close")
}}});
$(document).ready(function(){$(".faqAnsBox p a").append(' <i class="fa fa-angle-double-right inline"></i>');
$(".faqAnsBox ul li a").append(' <i class="fa fa-angle-double-right inline"></i>');
$(".faqAnsBox ol li a").append(' <i class="fa fa-angle-double-right inline"></i>');
$(".tech_inner_block a").append(' <i class="fa fa-angle-double-right inline"></i>')
});
$(document).on("click","#tech_specs_collapse",function(){var a=$(this).data("incrandomnumber");
var b=$(this).data("collapsetextts");
var c=a-1000;
$(this).addClass("expanded");
$(this).children("span").html(b);
$(this).children("i").removeClass("fa-arrow-circle-down");
$(this).children("i").addClass("fa-arrow-circle-up");
$("#tech_specs-containerDiv"+c+".tech_specs-container .collapse_view").toggleClass("visible")
});
$(document).on("click","#tech_specs_collapse.expanded",function(){var a=$(this).data("incrandomnumber");
var b=$(this).data("expandtextts");
var c=a-1000;
$(this).removeClass("expanded");
$(this).children("i").removeClass("fa-arrow-circle-up");
$(this).children("i").addClass("fa-arrow-circle-down");
$(this).children("span").html(b)
});
$(document).on("click","#overview_collapse_flc",function(){var b=$(this).data("collpseval");
var a=$(this).data("randomval");
$(this).addClass("expanded");
$(this).children("span").html(b);
$(this).children("i").removeClass("fa-arrow-circle-down");
$(this).children("i").addClass("fa-arrow-circle-up");
$("#features"+a+" .hidden_features").show()
});
$(document).on("click","#overview_collapse_flc.expanded",function(){var b=$(this).data("expval");
var a=$(this).data("randomval");
$(this).removeClass("expanded");
$(this).children("i").removeClass("fa-arrow-circle-up");
$(this).children("i").addClass("fa-arrow-circle-down");
$(this).children("span").html(b);
$("#features"+a+" .hidden_features").hide()
});
$(document).ready(function(){if(window.innerWidth<801){if(!$(".secondary-nav").length>0){$(".content-container").css("margin-top",$(".sidebar").outerHeight())
}}if($("div.supportList").length){$(".supportList .selectpicker").selectpicker("deselectAll")
}});
function combinationCard(){$(".module_container").each(function(){var a=$(this).outerHeight();
var d=$(this).children().children(".img-left").outerHeight();
var c=$(this).children(".content-wrapper").outerHeight();
var b=a-d;
if(c>d){$(this).children().children(".img-left").css("margin-top",b/2)
}})
}$(window).load(function(){$(".supportList select.selectpicker").children("option").each(function(c){var b=0;
var a=$(this).val();
b=c-1;
$(".supportList .bootstrap-select.btn-group .dropdown-menu li a").eq(b).attr("href",a)
});
$(document).on("click",".supportList .bootstrap-select.btn-group .dropdown-menu li",function(){var a=$(this).children("a").attr("href");
document.location=a
})
});
$(document).ready(function(){var a=$(".alt-background");
for(i=0;
i<a.length;
i++){backgroudUrl=$(a[i]).css("background-image");
imageUrl=backgroudUrl.replace('url("',"").replace('")',"");
var b=new Image();
b.src=imageUrl;
if(b.width==0){$(a[i]).find(".alt-text").attr("style","display : block !important;")
}else{$(a[i]).find(".alt-text").attr("style","display : none !important;")
}}});
$(document).ready(function(){$("body").hover(function(){$(".nav>li>a").blur()
},function(){})
});
$(document).on("click","#close_video",function(){$(".overlay-brightcove, .modal1").hide();
$(".getVideo object").remove();
$(".getVideo iframe").remove()
});
$(document).ready(function(){$(".customerBanner").parents(".section").children("*").css("transition","none")
});
$(document).on("click",".collapse_content",function(){if(!$(this).hasClass("expanded")&&!$(this).hasClass("table_expanded")){$(this).parents(".section").css({"float":"left",width:"100%"})
}else{if($(this).hasClass("expanded")){$(this).parents(".section").removeAttr("style")
}else{if($(this).hasClass("table_expanded")){$(this).parents(".section").removeAttr("style")
}}}});
$(document).on("click","#close_video",function(){$(".getVideo").parent().css("display","block")
});
$(document).on("click",".overlay-brightcove",function(){$(".getVideo").parent().css("display","block")
});
function tableInnerHeight(){$(".table-colspan").each(function(){$(this).find(".colspan-cells").removeAttr("style");
$(this).find(".colspan-cells p").removeAttr("style");
var d=new Array();
var c="";
$(this).find(".colspan-cells").each(function(){d.push($(this).outerHeight())
});
c=Math.max.apply(Math,d);
$(this).find(".colspan-cells").css("height",c);
var a=$(this).find(".colspan-cells:first p:first").outerHeight();
var b=$(this).find(".colspan-cells:first p:last").outerHeight();
$(this).find(".colspan-cells:last p:first").css("height",a);
$(this).find(".colspan-cells:last p:last").css("height",b)
})
}function ImageLargeView(c){$(".getVideo").parent().css("display","none");
var d=$(c).attr("largeimagename");
var a=$(c).attr("altText");
if(d!=undefined&&d!=""){$(".getImage").show();
var b='<img src="'+d+'" alt="'+a+'" />';
$(".getImage").html(b);
$(".imgnewtab").show();
$(".imgnewtab").attr("href",d);
setModal1MaxHeight();
$(".modal1, .overlay-brightcove").show()
}}function setModal1MaxHeight(){if($(".getImage img").length){var a=$(window).height();
var b=0;
if(a<450){b=a-100
}else{b=500
}$(".outer-container").css({"overflow-y":"auto",height:"auto","padding-bottom":"0px","max-height":b+"px"})
}}$(window).resize(function(){resizeBlock_tech_specs();
tableInnerHeight();
setTimeout(moduleHeight,50);
if(window.innerWidth>992){combinationCard()
}if(window.innerWidth>801){if(!$(".secondary-nav").length>0){$(".content-container").removeAttr("style")
}}else{if(window.innerWidth<801){if(!$(".secondary-nav").length>0){$(".content-container").css("margin-top",$(".sidebar").outerHeight())
}}}setModal1MaxHeight()
});
$(window).load(function(){if(window.innerWidth>992){combinationCard()
}$(".wrapper .content-container a").each(function(){if($(this).attr("href")==document.location.hash){$(this).click()
}});
if(window.location.hash){if(window.location.href.split("#")[1].indexOf("?")>-1){var d=window.location.href;
var b=d.split("#")[1];
var a;
if(b.indexOf("?")>-1){a=b.split("?")[0]
}else{a=d.split("#")[1]
}var e="#"+a;
var c=$(".breadCrumb").innerHeight()+$(".secondary-nav").innerHeight();
if($(e).length){$("html, body").animate({scrollTop:$(e).offset().top-c-90},1000)
}if($(e).length&&$(window).width()<=1000&&$(window).width()>800){$("html, body").animate({scrollTop:$(e).offset().top-c},1000)
}if($(e).length&&($(window).width()<=800)){$("html, body").animate({scrollTop:$(e).offset().top-c+50},1000)
}}}$(".wrapper .content-container a[href*='#']:not([href='#'])").click(function(){var f=$(this).attr("href");
if(typeof f!==typeof undefined){var g=$(this).attr("href").split("#")[1];
if($(this).attr("href").split("#")[0]==""){var l="#"+g;
var h=$(".breadCrumb").innerHeight()+$(".secondary-nav").innerHeight();
if($(l).length){$("html, body").animate({scrollTop:$(l).offset().top-h},1000)
}}}})
});
$(window).load(function(){if($(".table-responsive").length){$(".table-responsive td").each(function(){if($(this).data("th").indexOf("href")>-1){$(this).prepend($(this).data("th")).addClass("anchor-link-mobile")
}})
}if($(".comparisonTable").length){$(".comparisonTable .rTableCell span").each(function(){$(this).html($(this).text().replace("&lt","<").replace("&gt",">"))
})
}$(".pricingtabledisplay .tooltip_container [data-toggle='tooltip']").each(function(){if($(this).length>0){var a=$(this).attr("data-original-title");
$(this).attr("title",a);
$(this).tooltip()
}});
$(".pricingtabledynamic .tooltip_container [data-toggle='tooltip']").each(function(){if($(this).length>0){var a=$(this).attr("data-original-title");
$(this).attr("title",a);
$(this).tooltip()
}})
});
$(document).ready(function(){$(".detail-content").each(function(){if($(this).find("h3").length<1&&$(this).parent(".col-md-10").find(".cta_module").length<1){$(this).addClass("singlePara")
}else{if($(this).find("p").length<1&&$(this).parent(".col-md-10").find(".cta_module").length<1){$(this).addClass("singleHeading")
}else{if($(this).find("h3").length<1){$(this).addClass("onlyPara")
}else{if($(this).find("p").length<1){$(this).addClass("onlyHeading")
}else{if($(this).parent(".col-md-10").find(".cta_module").length<1&&$(this).parent(".col-md-10").parent(".social-block").find(".social-block").length<1){$(this).addClass("onlyContent")
}}}}}});
$(document).on("click","i.detail-toggle.fa-bars",function(){$(this).removeClass("fa-bars");
$(this).addClass("fa-times");
$(this).parent().parent(".thumb-details").addClass("rollover");
$(this).parent().parent(".thumb-details").children(".col-md-10").children(".detail-content").children(".clampingDetail").children("span").removeClass("asianLang");
setTimeout(function(){$(".rollover").children(".col-md-10").children(".detail-content").children(".clampingDetail").css("max-height","100%");
$(".rollover").children(".col-md-10").children(".detail-content").children("p:not(:first)").show()
},250)
});
$(document).on("click","i.detail-toggle.fa-times",function(){var e=$(this);
b(e);
$(this).removeClass("fa-times");
$(this).addClass("fa-bars");
$(this).removeAttr("style");
$(this).parent().parent(".thumb-details").removeClass("rollover");
if($(this).parent().parent(".thumb-details").parent(".thumb-container").hasClass("singleLineEllipse")){$(this).parent().parent(".thumb-details").children(".col-md-10").children(".detail-content").children(".clampingDetail").children("span").addClass("asianLang")
}$(this).parent().parent(".thumb-details").children(".col-md-10").children(".detail-content").children("p:not(:first)").hide()
});
function c(){$(this).children(".col-md-1").removeAttr("style");
$(this).children(".col-md-10").removeAttr("style");
$(".thumb-details").each(function(){if(!$(this).hasClass("rollover")){$(this).children(".col-md-1").removeAttr("style");
$(this).children(".col-md-10").removeAttr("style");
var e=$(this).height();
$(this).children(".col-md-1").css("height",e);
$(this).children(".col-md-10").css("height",e)
}})
}c();
function b(g){var f=2*(parseInt((g.parent().parent(".thumb-details").children(".col-md-10").children(".detail-content").children("h3").css("line-height"))))+"px";
var e=2*(parseInt((g.parent().parent(".thumb-details").children(".col-md-10").children(".detail-content").children("p").css("line-height"))))+"px";
g.parent().parent(".thumb-details").children(".col-md-10").children(".detail-content").children("h3.clampingDetail").css("max-height",f);
g.parent().parent(".thumb-details").children(".col-md-10").children(".detail-content").children("p.clampingDetail").css("max-height",e)
}function a(){$(".thumb-details").each(function(){if(!$(this).parent(".thumb-container").hasClass("singleLineEllipse")){if(!$(this).hasClass("rollover")){var f=2*(parseInt(($(this).children(".col-md-10").children(".detail-content").children("h3").css("line-height"))))+"px";
var e=2*(parseInt(($(this).children(".col-md-10").children(".detail-content").children("p").css("line-height"))))+"px";
$(this).children(".col-md-10").children(".detail-content").children("h3.clampingDetail").css("max-height",f);
$(this).children(".col-md-10").children(".detail-content").children("p.clampingDetail").css("max-height",e)
}}})
}window.getlineHeightAsian=function(){$(".thumb-details").each(function(){if($(this).parent(".thumb-container").hasClass("singleLineEllipse")){if(!$(this).hasClass("rollover")){$(this).children(".col-md-10").children(".detail-content").children("h3.clampingDetail").css("max-height",$(this).children(".col-md-10").children(".detail-content").children("h3").css("line-height"));
$(this).children(".col-md-10").children(".detail-content").children("p.clampingDetail").css("max-height",$(this).children(".col-md-10").children(".detail-content").children("p").css("line-height"))
}}});
$(".clampingDetail").each(function(){if($(this).parent(".detail-content").parent(".col-md-10").parent(".thumb-details").parent(".thumb-container").hasClass("singleLineEllipse")){$(this).find("span").removeAttr("style");
var h=$(this).parent(".detail-content").parent(".col-md-10").parent(".thumb-details").parent(".thumb-container").children(".thumb-img").width();
var e=$(this).parent(".detail-content").parent(".col-md-10").prev(".col-md-1").children("i").width()+$(this).parent(".detail-content").parent(".col-md-10").next(".col-md-1.cntClk").children("i").width()+80;
var g=h-e;
var f=$(this).parent(".detail-content").children("h3").children("span").eq(0).innerWidth();
var l=$(this).parent(".detail-content").children("p").children("span").eq(0).innerWidth();
if(g<f){$(this).parent(".detail-content").parents(".thumb-details").addClass("showHam")
}if(g<l){$(this).parent(".detail-content").parents(".thumb-details").addClass("showHam")
}if($(this).parent(".detail-content").find("p").length>1||$(this).parent(".detail-content").find("p").children("span").length>1||$(this).parent(".detail-content").find("h3").children("span").length>1){$(this).parent(".detail-content").parents(".thumb-details").addClass("showHam")
}$(this).find("span").css("width",g);
if($(this).children("span").eq(0).is(":empty")){$(this).children("span").eq(1).addClass("addEllipsis").show()
}}})
};
window.addEventListener("resize",a);
function d(){$(".thumb-details").each(function(){if($(this).hasClass("rollover")){$(this).children(".cntClk").children(".detail-toggle").css("display","inline-block")
}})
}d();
window.addEventListener("resize",d);
$(window).resize(function(){var f=window.navigator.userAgent;
var e=f.indexOf("MSIE ");
if(e>0||!!navigator.userAgent.match(/Trident.*rv\:11\./)){var g=$(".thumb-img > a img").first();
$(".thumb-img > a img").remove();
$(".thumb-img > a").append(g)
}setTimeout(function(){getlineHeightAsian()
},400);
setTimeout(function(){c()
},400)
})
});
$(window).load(function(){setTimeout(function(){getlineHeightAsian()
},400);
$(".thumb-details").each(function(){if($(this).parent(".thumb-container").hasClass("singleLineEllipse")){if(!$(this).hasClass("rollover")){$(this).children(".col-md-1").removeAttr("style");
$(this).children(".col-md-10").removeAttr("style");
var a=$(this).height();
$(this).children(".col-md-1").css("height",a);
$(this).children(".col-md-10").css("height",a)
}}})
});
$(document).ready(function(){var a="";
$(".faq_ans").hide();
$(document).on("click",".faq_block",function(){if(!$(this).hasClass("noFade")){if(!$(this).hasClass("openState")){$(".faq_block").removeClass("selected");
$(this).addClass("selected");
a=$(this).next("div.faqAnsBox").html();
if($(".appenddiv")!=null){$(".appenddiv").remove();
if(window.innerWidth<993){$(this).parent(".col-md-6").append("<div class='col-md-12 appenddiv'><div class='openState faq_ans'> "+a+"</div></div>")
}else{$(this).parent().parent(".row").append("<div class='col-md-12 appenddiv'><div class='openState faq_ans'> "+a+"</div></div>")
}}else{if(window.innerWidth<993){$(this).parent().next().append("<div class='col-md-12 appenddiv'><div class='openState faq_ans'> "+a+"</div></div>")
}else{$(this).parent().parent(".row").append("<div class='col-md-12 appenddiv'><div class='openState faq_ans'> "+a+"</div></div>")
}}}}});
$(document).on("click","#remove",function(){$(this).parent(".faq_ans").remove();
$(".faq_block").removeClass("selected")
});
$(window).on("resize",function(){$(".faq_block.selected").click()
})
});
$(document).ready(function(){$(".thumb-container .detail-content").each(function(){if(!$(this).hasClass("noclamp")){$(this).find("p").addClass("clampingDetail");
$(this).find("p:not(:first)").hide()
}else{$(this).find("p").addClass("noclampingDetail")
}})
});
if(!Function.prototype.bind){Function.prototype.bind=function(a){if(typeof this!=="function"){throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")
}var e=Array.prototype.slice.call(arguments,1),d=this,b=function(){},c=function(){return d.apply(this instanceof b&&a?this:a,e.concat(Array.prototype.slice.call(arguments)))
};
b.prototype=this.prototype;
c.prototype=new b();
return c
}
}(function(p,n){var h,a,s,m,l,t,v,u,o,g,c=n.createElement.bind(n),f=n.createTextNode.bind(n),b,e,r;
a=c("span");
(function(d){d.position="absolute";
d.whiteSpace="pre";
d.visibility="hidden"
})(a.style);
b=c("span");
e=c("span");
e.style.display="block";
e.style.overflow="hidden";
e.appendChild(f("\u2060"));
h=function(y,w,z){var d;
if(!y.ownerDocument||!y.ownerDocument===n){return
}l=v=0;
t=1;
g=false;
m=[];
s=(y.textContent||y.innerText).replace(/\n/g," ");
for(d=1;
d<w;
d++){r=e.cloneNode(true);
b.appendChild(r);
if(d===1){e.style.textIndent=0
}}e.style.textIndent="";
r=void 0;
while(y.firstChild){y.removeChild(y.firstChild)
}y.appendChild(b);
for(d=0;
d<w-1;
d++){m.push(b.childNodes[d].clientWidth)
}y.removeChild(b);
while(b.firstChild){b.removeChild(b.firstChild)
}y.appendChild(a);
s.replace(/ /g,function(A,B){if(t===w){return
}a.appendChild(f(s.substr(l,B-l)));
if(z-20<=a.clientWidth){if(g){o=s.substr(l,B+1-l);
l=B+1
}else{o=s.substr(l,v-l);
l=v
}u=c("span");
u.appendChild(f(o));
y.appendChild(u);
g=true;
t++
}else{g=false
}v=B+1;
a.removeChild(a.firstChild)
});
y.removeChild(a);
u=c("span");
if(t===w){(function(A){A.overflow="hidden";
A.width="100%"
})(u.style)
}u.appendChild(f(s.substr(l)));
y.appendChild(u)
};
p.clamp=h
})(window,window.document);
var clampingWidth="";
window.loadClamp=function(a){var b="";
$(".clampingDetail").each(function(){$(this).attr("data-id","randomId"+Math.floor((Math.random()*10000)+1));
b=$(this).attr("data-id");
if($(window).innerWidth()>1260){clampingWidth=$(this).innerWidth()-55
}else{clampingWidth=$(this).innerWidth()
}clamp($(".clampingDetail[data-id='"+b+"']")[0],3,clampingWidth);
if($("html").attr("lang")=="ja"||$("html").attr("lang")=="ja-JP"||$("html").attr("lang")=="zh_CN"||$("html").attr("lang")=="zh-CN"||$("html").attr("lang")=="ko"||$("html").attr("lang")=="ko-KR"){$(".thumb-container").each(function(){$(this).addClass("singleLineEllipse")
});
if(!$(this).parent().parent().parent(".thumb-details").hasClass("rollover")){$(this).parent().children("h3").eq(0).children("span").addClass("asianLang");
$(this).parent().children("p").eq(0).children("span").addClass("asianLang")
}$(".addEllipsis").each(function(){if($(this).html()==""){$(this).addClass("blankSpan")
}});
if($(this).children("span").length>1){$(this).parent(".detail-content").parents(".thumb-details").addClass("showHam");
$(this).children("span").eq(0).addClass("addEllipsis")
}}else{if($(this).children("span").length>2){$(this).parent(".detail-content").parents(".thumb-details").addClass("showHam");
$(this).children("span").eq(1).addClass("addEllipsis")
}else{if($(this).parent().find("p").length>1){if($(this).parent().children("p").eq(0).find("span").length>1){$(this).parent().children("p").eq(0).children("span").eq(1).addClass("addEllipsis")
}else{$(this).parent().children("p").eq(0).children("span").eq(0).addClass("addEllipsis")
}}else{$(this).parent(".detail-content").parents(".thumb-details").removeClass("addEllipsis")
}}}})
};
$(function(){window.showHamBurger=function(){$(".thumb-details .col-md-10 .clampingDetail").each(function(){if($(this).parent().find("h3").find("span").hasClass("addEllipsis")){$(this).parent(".detail-content").parents(".thumb-details").addClass("showHam")
}else{if($(this).parent().find("p").find("span").hasClass("addEllipsis")){$(this).parent(".detail-content").parents(".thumb-details").addClass("showHam")
}else{$(this).parent(".detail-content").parents(".thumb-details").removeClass("showHam")
}}})
};
$(".collapse_content").on("click",function(){$(".hidden_clamp").toggle();
resizeFunc();
$(".thumb-details").each(function(){if(!($(this).hasClass("rollover"))){$(this).children(".col-md-1").removeAttr("style");
$(this).children(".col-md-10").removeAttr("style");
var b=$(this).height();
$(this).children(".col-md-1").css("height",b);
$(this).children(".col-md-10").css("height",b)
}})
});
var a;
window.resizeFunc=function(){var b="";
b=$(this).attr("data-id");
loadClamp(b);
showHamBurger()
};
resizeFunc();
$(window).resize(function(){setTimeout(function(){resizeFunc()
},300)
})
});
function setStartUrl(){startURLst=window.location.search.substring(1);
document.getElementById("startURL").value=startURLst
}function validateLogin(){var a=$("#login");
if(a.length){a.on("submit",function(e){var h=$(".errMsg"),g=$("#username"),c=$("#password");
h.html("");
var l=$.trim(g.val()),f=$.trim(g.attr("placeholder")),d=$.trim(c.val()),b=$.trim(c.attr("placeholder"));
if(l==""||l==f||d==""||d==b){if(l==""||l==f){if($(".login_panel  form").attr("invalidusrmsg")!==""&&$(".login_panel  form").attr("invalidemailmsg")!==""){h.append('<p class="user">'+$(".login_panel  form").attr("invalidusrmsg")+"<br/>"+$(".login_panel  form").attr("invalidemailmsg")+"</p>")
}else{h.append('<p class="user">Invalid User Name.<br/>Please enter your company email</p>')
}}else{h.find(".user").remove()
}if(d==""||d==b){if(typeof($(".login_panel  form").attr("invalidpwdmsg"))!==""){h.append('<p class="pass">'+$(".login_panel  form").attr("invalidpwdmsg")+"</p>")
}else{h.append('<p class="pass">Please enter password</p>')
}}else{h.find(".pass").remove()
}return false
}else{self.setStartUrl();
return true
}})
}}var owl;
$(document).ready(function(){var b=$(this).find(".transitionValue").attr("transitionValue");
var a=$(this).find(".transitionOffOn").attr("transitionOffOn");
$(".owl-container > div:first-child").each(function(){var h=$(this).attr("class");
var m=h.split(" ");
var e=m[3];
var c="."+e;
var g=$(c);
if(g.length>0){$(c).owlCarousel({navigation:true,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],slideSpeed:300,paginationSpeed:400,lazyLoad:true,loop:true,autoplay:true,autoplayTimeout:1000,autoplaySpeed:1000,singleItem:true,afterInit:function(o){var n=".customerBanner "+c+" .owl-controls .owl-pagination .owl-page span";
$.each(this.owl.userItems,function(s){var t=$(this).find(".item-img").attr("img-src");
var u=$(this).find(".item-img").attr("tab-name-track");
var p=$(n);
var v=[];
var r=[];
$.each($(".imgSource"),function(w){v[w]=$(this).attr("img-src");
r[w]=$(this).attr("tab-name-track")
});
if(t===""){t=v[s]
}else{}if(u===""){u=r[s]
}else{}$(p[s]).append('<img src="'+t+'" alt="'+t+'" tab-name-track="'+u+'" />')
})
},afterUpdate:function(o){var n=".customerBanner "+c+" .owl-controls .owl-pagination .owl-page span";
$.each(this.owl.userItems,function(s){var t=$(this).find(".item-img").attr("img-src");
var u=$(this).find(".item-img").attr("tab-name-track");
var p=$(n);
var v=[];
var r=[];
$.each($(".imgSource"),function(w){v[w]=$(this).attr("img-src");
r[w]=$(this).attr("tab-name-track")
});
if(t===""){t=v[s]
}else{}if(u===""){u=r[s]
}else{}$(p[s]).append('<img src="'+t+'" alt="'+t+'" tab-name-track="'+u+'" />')
})
}})
}var f=g.data("owlCarousel");
var d;
var l=function(){d=setInterval(function(){f.next()
},b*1000)
};
if(a==="on"){l()
}$("#customerSlider .owl-page, .owl-next, .owl-prev").on("click",function(){clearInterval(d);
if(a==="on"){l()
}})
})
});
$(window).load(function(){sliderNote()
});
$(document).ready(function(){var a=$("#carousel");
if(a.length>0){a.carousel()
}$(function(){if($(".lazy").length>0){$(".lazy").lazyload({effect:"fadeIn",threshold:2})
}if(a.length>0){a.bind("slide.bs.carousel",function(b){if($(b.relatedTarget).find(".carousel_img").attr("data-original")!=null||$(b.relatedTarget).find(".carousel_img").attr("data-original")!=undefined){$(b.relatedTarget).find(".carousel_img").css("background-image","url("+$(b.relatedTarget).find(".carousel_img").attr("data-original")+")");
$(b.relatedTarget).find(".carousel_img").removeAttr("data-original")
}})
}});
setTimeout(function(){sliderNote()
},250);
setTimeout(function(){bottomBlocks()
},250);
setTimeout(function(){bottomBlocksNew()
},250);
setTimeout(function(){topCarBlocksHgt()
},400)
});
$(window).resize(function(){setTimeout(function(){topCarBlocksHgt()
},400);
setTimeout(function(){sliderNote()
},380);
setTimeout(function(){bottomBlocks();
bottomBlocksNew()
},600)
});
function sliderNote(){$(".owl-container #heroBanner .owl-controls").removeAttr("style");
var a=$(".note-overlay").outerHeight();
$(".owl-container #heroBanner .owl-controls").css("bottom",a)
}function topCarBlocksHgt(){$("#heroBanner .owl-page p").css("height","auto");
var a=new Array();
var b="";
$("#heroBanner .owl-page").each(function(){a.push($(this).children().children("p").outerHeight())
});
b=Math.max.apply(Math,a);
$("#heroBanner .owl-page p").css("height",b)
}function bottomBlocks(){$(".bottom-home .col-2").css("height","auto");
var b=new Array();
var a="";
$(".bottom-home .col-2").each(function(){b.push($(this).outerHeight())
});
a=Math.max.apply(Math,b);
$(".bottom-home .col-2").css("height",a)
}function bottomBlocksNew(){$(".twoBannerModule .twoBannerModule-Inner").css("height","auto");
var b=new Array();
var a="";
$(".twoBannerModule .twoBannerModule-Inner").each(function(){b.push($(this).outerHeight())
});
a=Math.max.apply(Math,b);
$(".twoBannerModule .twoBannerModule-Inner").css("height",a)
}var owl;
$(document).ready(function(){function b(){$.each(this.owl.userItems,function(n){var p=$(this).find(".item-img").attr("title");
var l=$(this).find(".item-img").attr("data-icon");
var o=$(".homeBanner .owl-controls .owl-pagination .owl-page span");
var h=[];
var m=[];
$.each($(".titleIcons"),function(r){h[r]=$(this).attr("data-icon");
m[r]=$(this).attr("title")
});
if(p==null&&l==null){p=m[n];
l=h[n]
}$(o[n]).append('<i class="'+l+'"></i><p>'+p+"</p>")
})
}function a(){var h=$("#heroBanner").data("owlCarousel");
if(h!=undefined){h.next()
}}var g=$(this).find(".herocarouseltransitionValue").attr("transitionValue");
var e=$(this).find(".herocarouseltransitionOffOn").attr("transitionOffOn");
if($("#heroBanner").length>0){$("#heroBanner").owlCarousel({navigation:true,rewindNav:true,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],slideSpeed:300,paginationSpeed:400,lazyLoad:true,loop:true,autoplay:true,autoplayTimeout:1000,autoplaySpeed:1000,singleItem:true,afterInit:b,startDragging:a,afterUpdate:b,afterAction:function(h){this.$owlItems.removeClass("active");
this.$owlItems.eq(this.currentItem).addClass("active");
if(this.$owlItems.eq(this.currentItem).find(".item").children(".l2_banner_content").hasClass("invert")){$(".homeBanner").addClass("invertColor")
}else{$(".homeBanner").removeClass("invertColor")
}}})
}var d=$("#heroBanner").data("owlCarousel");
var c;
if(d!=undefined){var f=function(){c=setInterval(function(){d.next()
},g*1000)
};
if(e==="transitionOn"){f()
}$("#heroBanner .owl-page, .owl-next, .owl-prev").on("click",function(){clearInterval(c);
if(e==="transitionOn"){f()
}});
if($("#heroBanner").find(".owl-item").length<=1){$("#heroBanner .owl-controls .owl-prev").hide();
$("#heroBanner .owl-controls .owl-next").hide()
}}});
if(typeof Object.create!=="function"){Object.create=function(b){function a(){}a.prototype=b;
return new a()
}
}(function(c,b,a){var d={init:function(e,f){var g=this;
g.$elem=c(f);
g.options=c.extend({},c.fn.owlCarousel.options,g.$elem.data(),e);
g.userOptions=e;
g.loadContent()
},loadContent:function(){var g=this,f;
function e(m){var h,l="";
if(typeof g.options.jsonSuccess==="function"){g.options.jsonSuccess.apply(this,[m])
}else{for(h in m.owl){if(m.owl.hasOwnProperty(h)){l+=m.owl[h].item
}}g.$elem.html(l)
}g.logIn()
}if(typeof g.options.beforeInit==="function"){g.options.beforeInit.apply(this,[g.$elem])
}if(typeof g.options.jsonPath==="string"){f=g.options.jsonPath;
c.getJSON(f,e)
}else{g.logIn()
}},logIn:function(){var e=this;
e.$elem.data("owl-originalStyles",e.$elem.attr("style"));
e.$elem.data("owl-originalClasses",e.$elem.attr("class"));
e.$elem.css({opacity:0});
e.orignalItems=e.options.items;
e.checkBrowser();
e.wrapperWidth=0;
e.checkVisible=null;
e.setVars()
},setVars:function(){var e=this;
if(e.$elem.children().length===0){return false
}e.baseClass();
e.eventTypes();
e.$userItems=e.$elem.children();
e.itemsAmount=e.$userItems.length;
e.wrapItems();
e.$owlItems=e.$elem.find(".owl-item");
e.$owlWrapper=e.$elem.find(".owl-wrapper");
e.playDirection="next";
e.prevItem=0;
e.prevArr=[0];
e.currentItem=0;
e.customEvents();
e.onStartup()
},onStartup:function(){var e=this;
e.updateItems();
e.calculateAll();
e.buildControls();
e.updateControls();
e.response();
e.moveEvents();
e.stopOnHover();
e.owlStatus();
if(e.options.transitionStyle!==false){e.transitionTypes(e.options.transitionStyle)
}if(e.options.autoPlay===true){e.options.autoPlay=5000
}e.play();
e.$elem.find(".owl-wrapper").css("display","block");
if(!e.$elem.is(":visible")){e.watchVisibility()
}else{e.$elem.css("opacity",1)
}e.onstartup=false;
e.eachMoveUpdate();
if(typeof e.options.afterInit==="function"){e.options.afterInit.apply(this,[e.$elem])
}},eachMoveUpdate:function(){var e=this;
if(e.options.lazyLoad===true){e.lazyLoad()
}if(e.options.autoHeight===true){e.autoHeight()
}e.onVisibleItems();
if(typeof e.options.afterAction==="function"){e.options.afterAction.apply(this,[e.$elem])
}},updateVars:function(){var e=this;
if(typeof e.options.beforeUpdate==="function"){e.options.beforeUpdate.apply(this,[e.$elem])
}e.watchVisibility();
e.updateItems();
e.calculateAll();
e.updatePosition();
e.updateControls();
e.eachMoveUpdate();
if(typeof e.options.afterUpdate==="function"){e.options.afterUpdate.apply(this,[e.$elem])
}},reload:function(){var e=this;
b.setTimeout(function(){e.updateVars()
},0)
},watchVisibility:function(){var e=this;
if(e.$elem.is(":visible")===false){e.$elem.css({opacity:0});
b.clearInterval(e.autoPlayInterval);
b.clearInterval(e.checkVisible)
}else{return false
}e.checkVisible=b.setInterval(function(){if(e.$elem.is(":visible")){e.reload();
e.$elem.animate({opacity:1},200);
b.clearInterval(e.checkVisible)
}},500)
},wrapItems:function(){var e=this;
e.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');
e.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');
e.wrapperOuter=e.$elem.find(".owl-wrapper-outer");
e.$elem.css("display","block")
},baseClass:function(){var g=this,e=g.$elem.hasClass(g.options.baseClass),f=g.$elem.hasClass(g.options.theme);
if(!e){g.$elem.addClass(g.options.baseClass)
}if(!f){g.$elem.addClass(g.options.theme)
}},updateItems:function(){var g=this,f,e;
if(g.options.responsive===false){return false
}if(g.options.singleItem===true){g.options.items=g.orignalItems=1;
g.options.itemsCustom=false;
g.options.itemsDesktop=false;
g.options.itemsDesktopSmall=false;
g.options.itemsTablet=false;
g.options.itemsTabletSmall=false;
g.options.itemsMobile=false;
return false
}f=c(g.options.responsiveBaseWidth).width();
if(f>(g.options.itemsDesktop[0]||g.orignalItems)){g.options.items=g.orignalItems
}if(g.options.itemsCustom!==false){g.options.itemsCustom.sort(function(l,h){return l[0]-h[0]
});
for(e=0;
e<g.options.itemsCustom.length;
e+=1){if(g.options.itemsCustom[e][0]<=f){g.options.items=g.options.itemsCustom[e][1]
}}}else{if(f<=g.options.itemsDesktop[0]&&g.options.itemsDesktop!==false){g.options.items=g.options.itemsDesktop[1]
}if(f<=g.options.itemsDesktopSmall[0]&&g.options.itemsDesktopSmall!==false){g.options.items=g.options.itemsDesktopSmall[1]
}if(f<=g.options.itemsTablet[0]&&g.options.itemsTablet!==false){g.options.items=g.options.itemsTablet[1]
}if(f<=g.options.itemsTabletSmall[0]&&g.options.itemsTabletSmall!==false){g.options.items=g.options.itemsTabletSmall[1]
}if(f<=g.options.itemsMobile[0]&&g.options.itemsMobile!==false){g.options.items=g.options.itemsMobile[1]
}}if(g.options.items>g.itemsAmount&&g.options.itemsScaleUp===true){g.options.items=g.itemsAmount
}},response:function(){var g=this,f,e;
if(g.options.responsive!==true){return false
}e=c(b).width();
g.resizer=function(){if(c(b).width()!==e){if(g.options.autoPlay!==false){b.clearInterval(g.autoPlayInterval)
}b.clearTimeout(f);
f=b.setTimeout(function(){e=c(b).width();
g.updateVars()
},g.options.responsiveRefreshRate)
}};
c(b).resize(g.resizer)
},updatePosition:function(){var e=this;
e.jumpTo(e.currentItem);
if(e.options.autoPlay!==false){e.checkAp()
}},appendItemsSizes:function(){var g=this,e=0,f=g.itemsAmount-g.options.items;
g.$owlItems.each(function(h){var l=c(this);
l.css({width:g.itemWidth}).data("owl-item",Number(h));
if(h%g.options.items===0||h===f){if(!(h>f)){e+=1
}}l.data("owl-roundPages",e)
})
},appendWrapperSizes:function(){var f=this,e=f.$owlItems.length*f.itemWidth;
f.$owlWrapper.css({width:e*2,left:0});
f.appendItemsSizes()
},calculateAll:function(){var e=this;
e.calculateWidth();
e.appendWrapperSizes();
e.loops();
e.max()
},calculateWidth:function(){var e=this;
e.itemWidth=Math.round(e.$elem.width()/e.options.items)
},max:function(){var e=this,f=((e.itemsAmount*e.itemWidth)-e.options.items*e.itemWidth)*-1;
if(e.options.items>e.itemsAmount){e.maximumItem=0;
f=0;
e.maximumPixels=0
}else{e.maximumItem=e.itemsAmount-e.options.items;
e.maximumPixels=f
}return f
},min:function(){return 0
},loops:function(){var m=this,l=0,g=0,f,h,e;
m.positionsInArray=[0];
m.pagesInArray=[];
for(f=0;
f<m.itemsAmount;
f+=1){g+=m.itemWidth;
m.positionsInArray.push(-g);
if(m.options.scrollPerPage===true){h=c(m.$owlItems[f]);
e=h.data("owl-roundPages");
if(e!==l){m.pagesInArray[l]=m.positionsInArray[f];
l=e
}}}},buildControls:function(){var e=this;
if(e.options.navigation===true||e.options.pagination===true){e.owlControls=c('<div class="owl-controls"/>').toggleClass("clickable",!e.browser.isTouch).appendTo(e.$elem)
}if(e.options.pagination===true){e.buildPagination()
}if(e.options.navigation===true){e.buildButtons()
}},buildButtons:function(){var f=this,e=c('<div class="owl-buttons"/>');
f.owlControls.append(e);
f.buttonPrev=c("<div/>",{"class":"owl-prev",html:f.options.navigationText[0]||""});
f.buttonNext=c("<div/>",{"class":"owl-next",html:f.options.navigationText[1]||""});
e.append(f.buttonPrev).append(f.buttonNext);
e.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(g){g.preventDefault()
});
e.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(g){g.preventDefault();
if(c(this).hasClass("owl-next")){f.next()
}else{f.prev()
}})
},buildPagination:function(){var e=this;
e.paginationWrapper=c('<div class="owl-pagination"/>');
e.owlControls.append(e.paginationWrapper);
e.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(f){f.preventDefault();
if(Number(c(this).data("owl-page"))!==e.currentItem){e.goTo(Number(c(this).data("owl-page")),true)
}})
},updatePagination:function(){var n=this,f,m,l,h,g,e;
if(n.options.pagination===false){return false
}n.paginationWrapper.html("");
f=0;
m=n.itemsAmount-n.itemsAmount%n.options.items;
for(h=0;
h<n.itemsAmount;
h+=1){if(h%n.options.items===0){f+=1;
if(m===h){l=n.itemsAmount-n.options.items
}g=c("<div/>",{"class":"owl-page"});
e=c("<span></span>",{text:n.options.paginationNumbers===true?f:"","class":n.options.paginationNumbers===true?"owl-numbers":""});
g.append(e);
g.data("owl-page",m===h?l:h);
g.data("owl-roundPages",f);
n.paginationWrapper.append(g)
}}n.checkPagination()
},checkPagination:function(){var e=this;
if(e.options.pagination===false){return false
}e.paginationWrapper.find(".owl-page").each(function(){if(c(this).data("owl-roundPages")===c(e.$owlItems[e.currentItem]).data("owl-roundPages")){e.paginationWrapper.find(".owl-page").removeClass("active");
c(this).addClass("active")
}})
},checkNavigation:function(){var e=this;
if(e.options.navigation===false){return false
}if(e.options.rewindNav===false){if(e.currentItem===0&&e.maximumItem===0){e.buttonPrev.addClass("disabled");
e.buttonNext.addClass("disabled")
}else{if(e.currentItem===0&&e.maximumItem!==0){e.buttonPrev.removeClass("disabled");
e.buttonNext.removeClass("disabled")
}else{if(e.currentItem===e.maximumItem){e.buttonPrev.removeClass("disabled");
e.buttonNext.removeClass("disabled")
}else{if(e.currentItem!==0&&e.currentItem!==e.maximumItem){e.buttonPrev.removeClass("disabled");
e.buttonNext.removeClass("disabled")
}}}}}},updateControls:function(){var e=this;
e.updatePagination();
e.checkNavigation();
if(e.owlControls){if(e.options.items>=e.itemsAmount){e.owlControls.hide()
}else{e.owlControls.show()
}}},destroyControls:function(){var e=this;
if(e.owlControls){e.owlControls.remove()
}},next:function(f){var e=this;
if(e.isTransition){return false
}e.currentItem+=e.options.scrollPerPage===true?e.options.items:1;
if(e.currentItem>e.maximumItem+(e.options.scrollPerPage===true?(e.options.items-1):0)){if(e.options.rewindNav===true){e.currentItem=0;
f="rewind"
}else{e.currentItem=e.maximumItem;
return false
}}e.goTo(e.currentItem,f)
},prev:function(f){var e=this;
if(e.isTransition){return false
}if(e.options.scrollPerPage===true&&e.currentItem>0&&e.currentItem<e.options.items){e.currentItem=0
}else{e.currentItem-=e.options.scrollPerPage===true?e.options.items:1
}if(e.currentItem<0){if(e.options.rewindNav===true){e.currentItem=e.maximumItem;
f="rewind"
}else{e.currentItem=0;
return false
}}e.goTo(e.currentItem,f)
},goTo:function(e,l,g){var h=this,f;
if(h.isTransition){return false
}if(typeof h.options.beforeMove==="function"){h.options.beforeMove.apply(this,[h.$elem])
}if(e>=h.maximumItem){e=h.maximumItem
}else{if(e<=0){e=0
}}h.currentItem=h.owl.currentItem=e;
if(h.options.transitionStyle!==false&&g!=="drag"&&h.options.items===1&&h.browser.support3d===true){h.swapSpeed(0);
if(h.browser.support3d===true){h.transition3d(h.positionsInArray[e])
}else{h.css2slide(h.positionsInArray[e],1)
}h.afterGo();
h.singleItemTransition();
return false
}f=h.positionsInArray[e];
if(h.browser.support3d===true){h.isCss3Finish=false;
if(l===true){h.swapSpeed("paginationSpeed");
b.setTimeout(function(){h.isCss3Finish=true
},h.options.paginationSpeed)
}else{if(l==="rewind"){h.swapSpeed(h.options.rewindSpeed);
b.setTimeout(function(){h.isCss3Finish=true
},h.options.rewindSpeed)
}else{h.swapSpeed("slideSpeed");
b.setTimeout(function(){h.isCss3Finish=true
},h.options.slideSpeed)
}}h.transition3d(f)
}else{if(l===true){h.css2slide(f,h.options.paginationSpeed)
}else{if(l==="rewind"){h.css2slide(f,h.options.rewindSpeed)
}else{h.css2slide(f,h.options.slideSpeed)
}}}h.afterGo()
},jumpTo:function(e){var f=this;
if(typeof f.options.beforeMove==="function"){f.options.beforeMove.apply(this,[f.$elem])
}if(e>=f.maximumItem||e===-1){e=f.maximumItem
}else{if(e<=0){e=0
}}f.swapSpeed(0);
if(f.browser.support3d===true){f.transition3d(f.positionsInArray[e])
}else{f.css2slide(f.positionsInArray[e],1)
}f.currentItem=f.owl.currentItem=e;
f.afterGo()
},afterGo:function(){var e=this;
e.prevArr.push(e.currentItem);
e.prevItem=e.owl.prevItem=e.prevArr[e.prevArr.length-2];
e.prevArr.shift(0);
if(e.prevItem!==e.currentItem){e.checkPagination();
e.checkNavigation();
e.eachMoveUpdate();
if(e.options.autoPlay!==false){e.checkAp()
}}if(typeof e.options.afterMove==="function"&&e.prevItem!==e.currentItem){e.options.afterMove.apply(this,[e.$elem])
}},stop:function(){var e=this;
e.apStatus="stop";
b.clearInterval(e.autoPlayInterval)
},checkAp:function(){var e=this;
if(e.apStatus!=="stop"){e.play()
}},play:function(){var e=this;
e.apStatus="play";
if(e.options.autoPlay===false){return false
}b.clearInterval(e.autoPlayInterval);
e.autoPlayInterval=b.setInterval(function(){e.next(true)
},e.options.autoPlay)
},swapSpeed:function(f){var e=this;
if(f==="slideSpeed"){e.$owlWrapper.css(e.addCssSpeed(e.options.slideSpeed))
}else{if(f==="paginationSpeed"){e.$owlWrapper.css(e.addCssSpeed(e.options.paginationSpeed))
}else{if(typeof f!=="string"){e.$owlWrapper.css(e.addCssSpeed(f))
}}}},addCssSpeed:function(e){return{"-webkit-transition":"all "+e+"ms ease","-moz-transition":"all "+e+"ms ease","-o-transition":"all "+e+"ms ease",transition:"all "+e+"ms ease"}
},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}
},doTranslate:function(e){return{"-webkit-transform":"translate3d("+e+"px, 0px, 0px)","-moz-transform":"translate3d("+e+"px, 0px, 0px)","-o-transform":"translate3d("+e+"px, 0px, 0px)","-ms-transform":"translate3d("+e+"px, 0px, 0px)",transform:"translate3d("+e+"px, 0px,0px)"}
},transition3d:function(f){var e=this;
e.$owlWrapper.css(e.doTranslate(f))
},css2move:function(f){var e=this;
e.$owlWrapper.css({left:f})
},css2slide:function(g,f){var e=this;
e.isCssFinish=false;
e.$owlWrapper.stop(true,true).animate({left:g},{duration:f||e.options.slideSpeed,complete:function(){e.isCssFinish=true
}})
},checkBrowser:function(){var m=this,g="translate3d(0px, 0px, 0px)",l=a.createElement("div"),h,f,n,e;
l.style.cssText="  -moz-transform:"+g+"; -ms-transform:"+g+"; -o-transform:"+g+"; -webkit-transform:"+g+"; transform:"+g;
h=/translate3d\(0px, 0px, 0px\)/g;
f=l.style.cssText.match(h);
n=(f!==null&&f.length===1);
e="ontouchstart" in b||b.navigator.msMaxTouchPoints;
m.browser={support3d:n,isTouch:e}
},moveEvents:function(){var e=this;
if(e.options.mouseDrag!==false||e.options.touchDrag!==false){e.gestures();
e.disabledEvents()
}},eventTypes:function(){var f=this,e=["s","e","x"];
f.ev_types={};
if(f.options.mouseDrag===true&&f.options.touchDrag===true){e=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]
}else{if(f.options.mouseDrag===false&&f.options.touchDrag===true){e=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]
}else{if(f.options.mouseDrag===true&&f.options.touchDrag===false){e=["mousedown.owl","mousemove.owl","mouseup.owl"]
}}}f.ev_types.start=e[0];
f.ev_types.move=e[1];
f.ev_types.end=e[2]
},disabledEvents:function(){var e=this;
e.$elem.on("dragstart.owl",function(f){f.preventDefault()
});
e.$elem.on("mousedown.disableTextSelect",function(f){return c(f.target).is("input, textarea, select, option")
})
},gestures:function(){var h=this,l={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};
h.isCssFinish=true;
function n(o){if(o.touches!==undefined){return{x:o.touches[0].pageX,y:o.touches[0].pageY}
}if(o.touches===undefined){if(o.pageX!==undefined){return{x:o.pageX,y:o.pageY}
}if(o.pageX===undefined){return{x:o.clientX,y:o.clientY}
}}}function m(o){if(o==="on"){c(a).on(h.ev_types.move,g);
c(a).on(h.ev_types.end,e)
}else{if(o==="off"){c(a).off(h.ev_types.move);
c(a).off(h.ev_types.end)
}}}function f(r){var p=r.originalEvent||r||b.event,o;
if(p.which===3){return false
}if(h.itemsAmount<=h.options.items){return
}if(h.isCssFinish===false&&!h.options.dragBeforeAnimFinish){return false
}if(h.isCss3Finish===false&&!h.options.dragBeforeAnimFinish){return false
}if(h.options.autoPlay!==false){b.clearInterval(h.autoPlayInterval)
}if(h.browser.isTouch!==true&&!h.$owlWrapper.hasClass("grabbing")){h.$owlWrapper.addClass("grabbing")
}h.newPosX=0;
h.newRelativeX=0;
c(this).css(h.removeTransition());
o=c(this).position();
l.relativePos=o.left;
l.offsetX=n(p).x-o.left;
l.offsetY=n(p).y-o.top;
m("on");
l.sliding=false;
l.targetElement=p.target||p.srcElement
}function g(s){var r=s.originalEvent||s||b.event,o,p;
h.newPosX=n(r).x-l.offsetX;
h.newPosY=n(r).y-l.offsetY;
h.newRelativeX=h.newPosX-l.relativePos;
if(typeof h.options.startDragging==="function"&&l.dragging!==true&&h.newRelativeX!==0){l.dragging=true;
h.options.startDragging.apply(h,[h.$elem])
}if((h.newRelativeX>8||h.newRelativeX<-8)&&(h.browser.isTouch===true)){if(r.preventDefault!==undefined){r.preventDefault()
}else{r.returnValue=false
}l.sliding=true
}if((h.newPosY>10||h.newPosY<-10)&&l.sliding===false){c(a).off("touchmove.owl")
}o=function(){return h.newRelativeX/5
};
p=function(){return h.maximumPixels+h.newRelativeX/5
};
h.newPosX=Math.max(Math.min(h.newPosX,o()),p());
if(h.browser.support3d===true){h.transition3d(h.newPosX)
}else{h.css2move(h.newPosX)
}}function e(t){var s=t.originalEvent||t||b.event,r,p,o;
s.target=s.target||s.srcElement;
l.dragging=false;
if(h.browser.isTouch!==true){h.$owlWrapper.removeClass("grabbing")
}if(h.newRelativeX<0){h.dragDirection=h.owl.dragDirection="left"
}else{h.dragDirection=h.owl.dragDirection="right"
}if(h.newRelativeX!==0){r=h.getNewPosition();
h.goTo(r,false,"drag");
if(l.targetElement===s.target&&h.browser.isTouch!==true){c(s.target).on("click.disable",function(u){u.stopImmediatePropagation();
u.stopPropagation();
u.preventDefault();
c(u.target).off("click.disable")
});
p=c._data(s.target,"events").click;
o=p.pop();
p.splice(0,0,o)
}}m("off")
}h.$elem.on(h.ev_types.start,".owl-wrapper",f)
},getNewPosition:function(){var f=this,e=f.closestItem();
if(e>f.maximumItem){f.currentItem=f.maximumItem;
e=f.maximumItem
}else{if(f.newPosX>=0){e=0;
f.currentItem=0
}}return e
},closestItem:function(){var g=this,h=g.options.scrollPerPage===true?g.pagesInArray:g.positionsInArray,e=g.newPosX,f=null;
c.each(h,function(m,l){if(e-(g.itemWidth/20)>h[m+1]&&e-(g.itemWidth/20)<l&&g.moveDirection()==="left"){f=l;
if(g.options.scrollPerPage===true){g.currentItem=c.inArray(f,g.positionsInArray)
}else{g.currentItem=m
}}else{if(e+(g.itemWidth/20)<l&&e+(g.itemWidth/20)>(h[m+1]||h[m]-g.itemWidth)&&g.moveDirection()==="right"){if(g.options.scrollPerPage===true){f=h[m+1]||h[h.length-1];
g.currentItem=c.inArray(f,g.positionsInArray)
}else{f=h[m+1];
g.currentItem=m+1
}}}});
return g.currentItem
},moveDirection:function(){var e=this,f;
if(e.newRelativeX<0){f="right";
e.playDirection="next"
}else{f="left";
e.playDirection="prev"
}return f
},customEvents:function(){var e=this;
e.$elem.on("owl.next",function(){e.next()
});
e.$elem.on("owl.prev",function(){e.prev()
});
e.$elem.on("owl.play",function(f,g){e.options.autoPlay=g;
e.play();
e.hoverStatus="play"
});
e.$elem.on("owl.stop",function(){e.stop();
e.hoverStatus="stop"
});
e.$elem.on("owl.goTo",function(g,f){e.goTo(f)
});
e.$elem.on("owl.jumpTo",function(g,f){e.jumpTo(f)
})
},stopOnHover:function(){var e=this;
if(e.options.stopOnHover===true&&e.browser.isTouch!==true&&e.options.autoPlay!==false){e.$elem.on("mouseover",function(){e.stop()
});
e.$elem.on("mouseout",function(){if(e.hoverStatus!=="stop"){e.play()
}})
}},lazyLoad:function(){var m=this,h,f,l,g,e;
if(m.options.lazyLoad===false){return false
}for(h=0;
h<m.itemsAmount;
h+=1){f=c(m.$owlItems[h]);
if(f.data("owl-loaded")==="loaded"){continue
}l=f.data("owl-item");
g=f.find(".lazyOwl");
if(typeof g.data("src")!=="string"){f.data("owl-loaded","loaded");
continue
}if(f.data("owl-loaded")===undefined){g.hide();
f.addClass("loading").data("owl-loaded","checked")
}if(m.options.lazyFollow===true){e=l>=m.currentItem
}else{e=true
}if(e&&l<m.currentItem+m.options.items&&g.length){m.lazyPreload(f,g)
}}},lazyPreload:function(e,f){var l=this,h=0,m;
if(f.prop("tagName")==="DIV"){f.css("background-image","url("+f.data("src")+")");
m=true
}else{f[0].src=f.data("src")
}function g(){e.data("owl-loaded","loaded").removeClass("loading");
f.removeAttr("data-src");
if(l.options.lazyEffect==="fade"){f.fadeIn(400)
}else{f.show()
}if(typeof l.options.afterLazyLoad==="function"){l.options.afterLazyLoad.apply(this,[l.$elem])
}}function n(){h+=1;
if(l.completeImg(f.get(0))||m===true){g()
}else{if(h<=100){b.setTimeout(n,100)
}else{g()
}}}n()
},autoHeight:function(){var h=this,l=c(h.$owlItems[h.currentItem]).find("img"),g;
function e(){var m=c(h.$owlItems[h.currentItem]).height();
h.wrapperOuter.css("height",m+"px");
if(!h.wrapperOuter.hasClass("autoHeight")){b.setTimeout(function(){h.wrapperOuter.addClass("autoHeight")
},0)
}}function f(){g+=1;
if(h.completeImg(l.get(0))){e()
}else{if(g<=100){b.setTimeout(f,100)
}else{h.wrapperOuter.css("height","")
}}}if(l.get(0)!==undefined){g=0;
f()
}else{e()
}},completeImg:function(e){var f;
if(!e.complete){return false
}f=typeof e.naturalWidth;
if(f!=="undefined"&&e.naturalWidth===0){return false
}return true
},onVisibleItems:function(){var f=this,e;
if(f.options.addClassActive===true){f.$owlItems.removeClass("active")
}f.visibleItems=[];
for(e=f.currentItem;
e<f.currentItem+f.options.items;
e+=1){f.visibleItems.push(e);
if(f.options.addClassActive===true){c(f.$owlItems[e]).addClass("active")
}}f.owl.visibleItems=f.visibleItems
},transitionTypes:function(e){var f=this;
f.outClass="owl-"+e+"-out";
f.inClass="owl-"+e+"-in"
},singleItemTransition:function(){var f=this,h=f.outClass,n=f.inClass,m=f.$owlItems.eq(f.currentItem),l=f.$owlItems.eq(f.prevItem),p=Math.abs(f.positionsInArray[f.currentItem])+f.positionsInArray[f.prevItem],o=Math.abs(f.positionsInArray[f.currentItem])+f.itemWidth/2,g="webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
f.isTransition=true;
f.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":o+"px","-moz-perspective-origin":o+"px","perspective-origin":o+"px"});
function e(r){return{position:"relative",left:r+"px"}
}l.css(e(p,10)).addClass(h).on(g,function(){f.endPrev=true;
l.off(g);
f.clearTransStyle(l,h)
});
m.addClass(n).on(g,function(){f.endCurrent=true;
m.off(g);
f.clearTransStyle(m,n)
})
},clearTransStyle:function(f,e){var g=this;
f.css({position:"",left:""}).removeClass(e);
if(g.endPrev&&g.endCurrent){g.$owlWrapper.removeClass("owl-origin");
g.endPrev=false;
g.endCurrent=false;
g.isTransition=false
}},owlStatus:function(){var e=this;
e.owl={userOptions:e.userOptions,baseElement:e.$elem,userItems:e.$userItems,owlItems:e.$owlItems,currentItem:e.currentItem,prevItem:e.prevItem,visibleItems:e.visibleItems,isTouch:e.browser.isTouch,browser:e.browser,dragDirection:e.dragDirection}
},clearEvents:function(){var e=this;
e.$elem.off(".owl owl mousedown.disableTextSelect");
c(a).off(".owl owl");
c(b).off("resize",e.resizer)
},unWrap:function(){var e=this;
if(e.$elem.children().length!==0){e.$owlWrapper.unwrap();
e.$userItems.unwrap().unwrap();
if(e.owlControls){e.owlControls.remove()
}}e.clearEvents();
e.$elem.attr("style",e.$elem.data("owl-originalStyles")||"").attr("class",e.$elem.data("owl-originalClasses"))
},destroy:function(){var e=this;
e.stop();
b.clearInterval(e.checkVisible);
e.unWrap();
e.$elem.removeData()
},reinit:function(g){var f=this,e=c.extend({},f.userOptions,g);
f.unWrap();
f.init(e,f.$elem)
},addItem:function(h,f){var g=this,e;
if(!h){return false
}if(g.$elem.children().length===0){g.$elem.append(h);
g.setVars();
return false
}g.unWrap();
if(f===undefined||f===-1){e=-1
}else{e=f
}if(e>=g.$userItems.length||e===-1){g.$userItems.eq(-1).after(h)
}else{g.$userItems.eq(e).before(h)
}g.setVars()
},removeItem:function(f){var g=this,e;
if(g.$elem.children().length===0){return false
}if(f===undefined||f===-1){e=-1
}else{e=f
}g.unWrap();
g.$userItems.eq(e).remove();
g.setVars()
}};
c.fn.owlCarousel=function(e){return this.each(function(){if(c(this).data("owl-init")===true){return false
}c(this).data("owl-init",true);
var f=Object.create(d);
f.init(e,this);
c.data(this,"owlCarousel",f)
})
};
c.fn.owlCarousel.options={items:5,itemsCustom:false,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:false,itemsMobile:[479,1],singleItem:false,itemsScaleUp:false,slideSpeed:200,paginationSpeed:800,rewindSpeed:1000,autoPlay:false,stopOnHover:false,navigation:false,navigationText:["prev","next"],rewindNav:true,scrollPerPage:false,pagination:true,paginationNumbers:false,responsive:true,responsiveRefreshRate:200,responsiveBaseWidth:b,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:false,lazyFollow:true,lazyEffect:"fade",autoHeight:false,jsonPath:false,jsonSuccess:false,dragBeforeAnimFinish:true,mouseDrag:true,touchDrag:true,addClassActive:false,transitionStyle:false,beforeUpdate:false,afterUpdate:false,beforeInit:false,afterInit:false,beforeMove:false,afterMove:false,afterAction:false,startDragging:false,afterLazyLoad:false}
}(jQuery,window,document));
(function(c,b,a,e){var d=c(b);
c.fn.lazyload=function(f){var h=this;
var l;
var g={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:true,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};
function m(){var n=0;
h.each(function(){var o=c(this);
if(g.skip_invisible&&!o.is(":visible")){return
}if(c.abovethetop(this,g)||c.leftofbegin(this,g)){}else{if(!c.belowthefold(this,g)&&!c.rightoffold(this,g)){o.trigger("appear");
n=0
}else{if(++n>g.failure_limit){return false
}}}})
}if(f){if(e!==f.failurelimit){f.failure_limit=f.failurelimit;
delete f.failurelimit
}if(e!==f.effectspeed){f.effect_speed=f.effectspeed;
delete f.effectspeed
}c.extend(g,f)
}l=(g.container===e||g.container===b)?d:c(g.container);
if(0===g.event.indexOf("scroll")){l.bind(g.event,function(){return m()
})
}this.each(function(){var n=this;
var o=c(n);
n.loaded=false;
if(o.attr("src")===e||o.attr("src")===false){if(o.is("img")){o.attr("src",g.placeholder)
}}o.one("appear",function(){if(!this.loaded){if(g.appear){var p=h.length;
g.appear.call(n,p,g)
}c("<img />").bind("load",function(){var s=o.attr("data-"+g.data_attribute);
o.hide();
if(o.is("img")){o.attr("src",s)
}else{o.css("background-image","url('"+s+"')")
}o[g.effect](g.effect_speed);
n.loaded=true;
var r=c.grep(h,function(u){return !u.loaded
});
h=c(r);
if(g.load){var t=h.length;
g.load.call(n,t,g)
}}).attr("src",o.attr("data-"+g.data_attribute))
}});
if(0!==g.event.indexOf("scroll")){o.bind(g.event,function(){if(!n.loaded){o.trigger("appear")
}})
}});
d.bind("resize",function(){m()
});
if((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)){d.bind("pageshow",function(n){if(n.originalEvent&&n.originalEvent.persisted){h.each(function(){c(this).trigger("appear")
})
}})
}c(a).ready(function(){m()
});
return this
};
c.belowthefold=function(g,h){var f;
if(h.container===e||h.container===b){f=(b.innerHeight?b.innerHeight:d.height())+d.scrollTop()
}else{f=c(h.container).offset().top+c(h.container).height()
}return f<=c(g).offset().top-h.threshold
};
c.rightoffold=function(g,h){var f;
if(h.container===e||h.container===b){f=d.width()+d.scrollLeft()
}else{f=c(h.container).offset().left+c(h.container).width()
}return f<=c(g).offset().left-h.threshold
};
c.abovethetop=function(g,h){var f;
if(h.container===e||h.container===b){f=d.scrollTop()
}else{f=c(h.container).offset().top
}return f>=c(g).offset().top+h.threshold+c(g).height()
};
c.leftofbegin=function(g,h){var f;
if(h.container===e||h.container===b){f=d.scrollLeft()
}else{f=c(h.container).offset().left
}return f>=c(g).offset().left+h.threshold+c(g).width()
};
c.inviewport=function(f,g){return !c.rightoffold(f,g)&&!c.leftofbegin(f,g)&&!c.belowthefold(f,g)&&!c.abovethetop(f,g)
};
c.extend(c.expr[":"],{"below-the-fold":function(f){return c.belowthefold(f,{threshold:0})
},"above-the-top":function(f){return !c.belowthefold(f,{threshold:0})
},"right-of-screen":function(f){return c.rightoffold(f,{threshold:0})
},"left-of-screen":function(f){return !c.rightoffold(f,{threshold:0})
},"in-viewport":function(f){return c.inviewport(f,{threshold:0})
},"above-the-fold":function(f){return !c.belowthefold(f,{threshold:0})
},"right-of-fold":function(f){return c.rightoffold(f,{threshold:0})
},"left-of-fold":function(f){return !c.rightoffold(f,{threshold:0})
}})
})(jQuery,window,document);
(function(a){a.fn.countdown=function(e,h){var g=a.extend({date:null,offset:null,day:"Day",days:"Days",hour:"Hour",hours:"Hours",minute:"Minute",minutes:"Minutes",second:"Second",seconds:"Seconds"},e);
if(!g.date){a.error("Date is not defined.")
}if(!Date.parse(g.date)){a.error("Incorrect date format, it should look like this, 12/24/2012 12:00:00.")
}var c=this;
var b=function(){var l=new Date();
var m=l.getTime()+(l.getTimezoneOffset()*60000);
var n=new Date(m+(3600000*g.offset));
return n
};
function f(){var z=new Date(g.date);
var o=b();
var n=z-o;
if(n<0){clearInterval(d);
if(h&&typeof h==="function"){h()
}return
}var t=1000,w=t*60,m=w*60,B=m*24;
var A=Math.floor(n/B),v=Math.floor((n%B)/m),p=Math.floor((n%m)/w),y=Math.floor((n%w)/t);
var r=(A===1)?g.day:g.days,u=(v===1)?g.hour:g.hours,l=(p===1)?g.minute:g.minutes,s=(y===1)?g.second:g.seconds;
A=(String(A).length>=2)?A:"0"+A;
v=(String(v).length>=2)?v:"0"+v;
p=(String(p).length>=2)?p:"0"+p;
y=(String(y).length>=2)?y:"0"+y;
c.find(".days").text(A);
c.find(".hours").text(v);
c.find(".minutes").text(p);
c.find(".seconds").text(y);
c.find(".days_text").text(r);
c.find(".hours_text").text(u);
c.find(".minutes_text").text(l);
c.find(".seconds_text").text(s)
}var d=setInterval(f,1000)
}
})(jQuery);
var tabSelected=tabOn=tabFloat=null;
var selectTab=function(a){if(tabOn!=null){tabOn.toggleClass("active")
}tabOn=$(this);
tabOn.toggleClass("active");
if(tabFloat!=null){tabFloat.hide()
}if(tabSelected!=null){tabSelected.hide()
}tabFloat=$(this.hash+"_float");
tabFloat.show();
tabSelected=$(this.hash);
tabSelected.show();
a.preventDefault()
};
$(document).ready(function(){$(".rTableCell span").each(function(){var a=$(this).text();
a=a.replace("&nbsp;"," ");
$(this).text(a)
});
$(".evaltabhead ul li a").each(function(){$(this).click(selectTab);
if($(this.parentNode).is(":first-child")){$(this).attr("class","first");
tabOn=$(this);
tabOn.toggleClass("active");
tabFloat=$(this.hash+"_float");
tabFloat.show();
tabSelected=$(this.hash);
tabSelected.show()
}if($(this.parentNode).is(":last-child")){$(this).attr("class","last")
}})
});
$(document).ready(function(){$("a[href='#topofpage']").click(function(){$("html,body").animate({scrollTop:0},1000)
});
$('.cm-migration-custom a[href*="#"]').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var b=$(this.hash);
b=b.length&&b||$("[name="+this.hash.slice(1)+"]");
if(b.length){var d=b.offset().top;
var c=0;
if($(window).scrollTop()<1){var c=135
}else{var c=75
}console.log(c);
if(window.innerWidth>800){d=d-c
}else{d=d-55
}$("html,body").animate({scrollTop:d},1000);
return false
}}});
if($(".cm-migration-custom .b-pd-main").find("div.b-3of10").length<1){$(".cm-migration-custom .b-pd-main .b-7of10").css("width","100%")
}var a=$(".cm-migration-custom .b-pd-main .b-3of10 .a-pd-main .b-row").html();
a=$.trim(a);
if(a=="&nbsp;"){$(".cm-migration-custom .b-pd-main .b-7of10").css("width","100%")
}});
window.VMW={init:function(){var a=this;
a.mobileBreak=1023;
if($(".carouselWrapper.home").length){a.mobileBreak=900
}if($(".alerts-contain").length){a.initAlerts();
$(".alerts-contain").accordion({collapsible:true,active:true,animate:false,header:"h4",heightStyle:"content"})
}},initAlerts:function(){var b=this,a=$(".l-alerts"),c=$(".close-btn"),d=$(".alerts-contain");
b.alertsVisible=true;
a.click(function(f){if(!b.alertsVisible){f.preventDefault();
d.show();
a.addClass("active");
b.alertsVisible=true
}else{f.preventDefault();
d.hide();
a.removeClass("active");
b.alertsVisible=false
}});
c.click(function(f){f.preventDefault();
d.hide();
a.removeClass("active");
if(b.alertsVisible===true){b.alertsVisible=false
}})
}};
window.vmf=function(){var c=function(d){return $("#"+d)
};
var b=function(d){document.write('<script src="',d,'" type="text/javascript"><\/script>')
};
var a=[];
return{loadJs:function(f,e,d){if(($.inArray(f,a)<0)){(e)?$.getScript(f,d):b(f)
}},loadCss:function(d){var e=document.createElement("link");
e.setAttribute("rel","stylesheet");
e.setAttribute("type","text/css");
e.setAttribute("href",d);
document.getElementsByTagName("head")[0].appendChild(e)
},dom:function(){return{onload:function(d){$(document).ready(d)
},unload:function(d){$(window).unload(d)
},id:function(d){return document.getElementById(d)
},getHtml:function(d){return c(d).html()
},setHtml:function(f,d,e){switch(e){case"before":c(f).prepend(d);
break;
case"after":c(f).append(d);
break;
default:c(f).html(d)
}},addHandler:function(f,e,d){(f instanceof jQuery?f:jQuery(f)).bind(e,d)
},removeHandler:function(f,e,d){(f instanceof jQuery?f:jQuery(f)).unbind(e,d)
},get:function(d){return $(d)
},serialize:function(d){return jQuery(d).serialize()
},trigger:function(e,d){(e instanceof jQuery?e:jQuery(e)).trigger(d)
}}
}(),cookie:function(){return{read:function(f){var e=f+"=";
var d=document.cookie.split(";");
for(var g=0;
g<d.length;
g++){var h=d[g];
while(h.charAt(0)==" "){h=h.substring(1,h.length)
}if(h.indexOf(e)==0){return h.substring(e.length,h.length)
}}return null
},write:function(d,h,g){var f="";
if(g){var e=new Date();
e.setTime(e.getTime()+(g*24*60*60*1000));
f="; expires="+e.toGMTString()
}else{f=""
}if(d=="pszGeoPref"){document.cookie=d+"="+h+f+";domain=.vmware.com; path=/"
}else{document.cookie=d+"="+h+f+"; path=/"
}},clear:function(d){vmf.cookie.write(d,"",-1)
}}
}(),json:function(){return{txtToObj:function(d){try{return $.evalJSON(d)
}catch(e){return null
}},objToTxt:function(d){return $.toJSON(d)
}}
}(),array:function(){return{contains:function(e,d){return($.inArray(e,d)>-1)
},txtToAry:function(d){return d.split(",")
},aryToTxt:function(d){return d.join(",")
},objToAry:function(d){return $.makeArray(d)
}}
}(),string:function(){return{setCharAt:function(e,d,g){if(d>=e.length){return e
}else{var f=e.substring(0,d);
f+=g;
f+=e.substring(d+1,e.length);
return f
}},trim:function(d){return $.trim(d)
}}
}(),ns:function(){return{use:function(d){var f=d.split(".");
var g=window;
for(var e in f){if(!g[f[e]]){g[f[e]]={};
g=g[f[e]]
}else{g=g[f[e]]
}}}}
}(),ajax:function(){return{connect:function(d){$.ajax(d)
},get:function(d,e,m,h,g,f){var l={type:"GET",url:d,data:e,success:m,error:h,complete:g};
if(f){l.timeout=f
}jQuery.ajax(l)
},post:function(g,l,h,f,e,d){var m={type:"POST",url:g,data:l,success:h,error:f,complete:e};
if(d){m.timeout=d
}jQuery.ajax(m)
}}
}(),form:function(){return{serialize:function(h,g){var f=vmf.dom.id(h)||document.forms[h];
if(!f){return null
}if(g){var e=[];
for(var d in g){e.push(f[g[d]])
}return jQuery(e).serialize()
}else{return jQuery(f).serialize()
}},getRadioBtn:function(f,e){var d=vmf.dom.id(f)||document.forms[f];
if(!d){return null
}return jQuery("input[@name='"+e+"']:checked").val()
},getCbk:function(f,d){var e=vmf.dom.id(f)||document.forms[f];
if(!e){return false
}return e[d].checked
},setCbk:function(g,e,f){f=f||true;
var d=vmf.dom.id(g)||document.forms[g];
if(d){d[e].checked=f
}}}
}(),url:function(){return{getParam:function(f){var g=window.location.toString();
var d=g.indexOf("?");
if(d<0){return null
}var l=g.substring(d+1,g.length).split("&");
for(var h in l){var e=l[h].split("=");
if(e[0]==f){return e[1]
}}return null
},hasAnchor:function(d){var e=window.location.toString();
var f=e.indexOf("#");
if(f<0){return false
}else{return(e.substring(f+1,e.length)==d)
}},redirect:function(d){if(!d.url){return
}switch(d.target){case"new":window.open(d.url);
break;
default:document.location=d.url
}}}
}()}
}();
$(document).ready(function(){vmf.hostname=window.location.protocol+"//www.vmware.com";
switch(window.location.hostname){case"www.vmware.com":case"downloads.vmware.com":vmf.hostname=window.location.protocol+"//www.vmware.com";
break;
default:vmf.hostname=window.location.protocol+"//"+window.location.hostname;
break
}jQuery.getScriptCache=function(url,callback){jQuery.ajax({type:"GET",url:url,success:callback,dataType:"script",cache:true})
};
jQuery.getScriptCache(vmf.hostname+"/content/dam/digitalmarketing/vmware/en/files/include/vmf/plugin/jquery.md5.js",function(script){if(jQuery.md5===undefined){eval(script)
}jQuery.getScriptCache(vmf.hostname+"/content/dam/digitalmarketing/vmware/en/files/include/vmf/plugin/jquery.cookie.1.0.js",function(script){if(jQuery.cookie===undefined){eval(script)
}jQuery.getScriptCache(vmf.hostname+"/content/dam/digitalmarketing/vmware/en/files/include/vmf/plugin/javascript-xpath.js",function(script){if(document.evaluate===undefined){eval(script)
}jQuery.getScriptCache(vmf.hostname+"/content/dam/digitalmarketing/vmware/en/files/include/vmf/module/core/js/log.js",function(script){if(vmf.log===undefined){eval(script)
}jQuery.getScriptCache(vmf.hostname+"/content/dam/digitalmarketing/vmware/en/files/include/vmf/module/sat/sat.js",function(script){if(vmf.sat===undefined){eval(script)
}vmf.sat.fetchAlerts()
})
})
})
})
})
});
/*! jQuery UI - v1.11.4 - 2016-06-15
* http://jqueryui.com
* Includes: core.js, widget.js, accordion.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{a(jQuery)
}}(function(d){
/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
;
d.ui=d.ui||{};
d.extend(d.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});
d.fn.extend({scrollParent:function(m){var l=this.css("position"),h=l==="absolute",n=m?/(auto|scroll|hidden)/:/(auto|scroll)/,o=this.parents().filter(function(){var p=d(this);
if(h&&p.css("position")==="static"){return false
}return n.test(p.css("overflow")+p.css("overflow-y")+p.css("overflow-x"))
}).eq(0);
return l==="fixed"||!o.length?d(this[0].ownerDocument||document):o
},uniqueId:(function(){var h=0;
return function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++h)
}})
}
})(),removeUniqueId:function(){return this.each(function(){if(/^ui-id-\d+$/.test(this.id)){d(this).removeAttr("id")
}})
}});
function f(m,h){var o,n,l,p=m.nodeName.toLowerCase();
if("area"===p){o=m.parentNode;
n=o.name;
if(!m.href||!n||o.nodeName.toLowerCase()!=="map"){return false
}l=d("img[usemap='#"+n+"']")[0];
return !!l&&e(l)
}return(/^(input|select|textarea|button|object)$/.test(p)?!m.disabled:"a"===p?m.href||h:h)&&e(m)
}function e(h){return d.expr.filters.visible(h)&&!d(h).parents().addBack().filter(function(){return d.css(this,"visibility")==="hidden"
}).length
}d.extend(d.expr[":"],{data:d.expr.createPseudo?d.expr.createPseudo(function(h){return function(l){return !!d.data(l,h)
}
}):function(m,l,h){return !!d.data(m,h[3])
},focusable:function(h){return f(h,!isNaN(d.attr(h,"tabindex")))
},tabbable:function(m){var h=d.attr(m,"tabindex"),l=isNaN(h);
return(l||h>=0)&&f(m,!l)
}});
if(!d("<a>").outerWidth(1).jquery){d.each(["Width","Height"],function(m,h){var l=h==="Width"?["Left","Right"]:["Top","Bottom"],n=h.toLowerCase(),p={innerWidth:d.fn.innerWidth,innerHeight:d.fn.innerHeight,outerWidth:d.fn.outerWidth,outerHeight:d.fn.outerHeight};
function o(t,s,r,u){d.each(l,function(){s-=parseFloat(d.css(t,"padding"+this))||0;
if(r){s-=parseFloat(d.css(t,"border"+this+"Width"))||0
}if(u){s-=parseFloat(d.css(t,"margin"+this))||0
}});
return s
}d.fn["inner"+h]=function(r){if(r===undefined){return p["inner"+h].call(this)
}return this.each(function(){d(this).css(n,o(this,r)+"px")
})
};
d.fn["outer"+h]=function(r,s){if(typeof r!=="number"){return p["outer"+h].call(this,r)
}return this.each(function(){d(this).css(n,o(this,r,true,s)+"px")
})
}
})
}if(!d.fn.addBack){d.fn.addBack=function(h){return this.add(h==null?this.prevObject:this.prevObject.filter(h))
}
}if(d("<a>").data("a-b","a").removeData("a-b").data("a-b")){d.fn.removeData=(function(h){return function(l){if(arguments.length){return h.call(this,d.camelCase(l))
}else{return h.call(this)
}}
})(d.fn.removeData)
}d.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
d.fn.extend({focus:(function(h){return function(l,m){return typeof l==="number"?this.each(function(){var n=this;
setTimeout(function(){d(n).focus();
if(m){m.call(n)
}},l)
}):h.apply(this,arguments)
}
})(d.fn.focus),disableSelection:(function(){var h="onselectstart" in document.createElement("div")?"selectstart":"mousedown";
return function(){return this.bind(h+".ui-disableSelection",function(l){l.preventDefault()
})
}
})(),enableSelection:function(){return this.unbind(".ui-disableSelection")
},zIndex:function(n){if(n!==undefined){return this.css("zIndex",n)
}if(this.length){var l=d(this[0]),h,m;
while(l.length&&l[0]!==document){h=l.css("position");
if(h==="absolute"||h==="relative"||h==="fixed"){m=parseInt(l.css("zIndex"),10);
if(!isNaN(m)&&m!==0){return m
}}l=l.parent()
}}return 0
}});
d.ui.plugin={add:function(l,m,o){var h,n=d.ui[l].prototype;
for(h in o){n.plugins[h]=n.plugins[h]||[];
n.plugins[h].push([m,o[h]])
}},call:function(h,n,m,l){var o,p=h.plugins[n];
if(!p){return
}if(!l&&(!h.element[0].parentNode||h.element[0].parentNode.nodeType===11)){return
}for(o=0;
o<p.length;
o++){if(h.options[p[o][0]]){p[o][1].apply(h.element,m)
}}}};
/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
;
var g=0,b=Array.prototype.slice;
d.cleanData=(function(h){return function(l){var n,o,m;
for(m=0;
(o=l[m])!=null;
m++){try{n=d._data(o,"events");
if(n&&n.remove){d(o).triggerHandler("remove")
}}catch(p){}}h(l)
}
})(d.cleanData);
d.widget=function(h,l,t){var p,r,n,s,m={},o=h.split(".")[0];
h=h.split(".")[1];
p=o+"-"+h;
if(!t){t=l;
l=d.Widget
}d.expr[":"][p.toLowerCase()]=function(u){return !!d.data(u,p)
};
d[o]=d[o]||{};
r=d[o][h];
n=d[o][h]=function(u,v){if(!this._createWidget){return new n(u,v)
}if(arguments.length){this._createWidget(u,v)
}};
d.extend(n,r,{version:t.version,_proto:d.extend({},t),_childConstructors:[]});
s=new l();
s.options=d.widget.extend({},s.options);
d.each(t,function(v,u){if(!d.isFunction(u)){m[v]=u;
return
}m[v]=(function(){var w=function(){return l.prototype[v].apply(this,arguments)
},y=function(z){return l.prototype[v].apply(this,z)
};
return function(){var B=this._super,z=this._superApply,A;
this._super=w;
this._superApply=y;
A=u.apply(this,arguments);
this._super=B;
this._superApply=z;
return A
}
})()
});
n.prototype=d.widget.extend(s,{widgetEventPrefix:r?(s.widgetEventPrefix||h):h},m,{constructor:n,namespace:o,widgetName:h,widgetFullName:p});
if(r){d.each(r._childConstructors,function(v,w){var u=w.prototype;
d.widget(u.namespace+"."+u.widgetName,n,w._proto)
});
delete r._childConstructors
}else{l._childConstructors.push(n)
}d.widget.bridge(h,n);
return n
};
d.widget.extend=function(p){var l=b.call(arguments,1),o=0,h=l.length,m,n;
for(;
o<h;
o++){for(m in l[o]){n=l[o][m];
if(l[o].hasOwnProperty(m)&&n!==undefined){if(d.isPlainObject(n)){p[m]=d.isPlainObject(p[m])?d.widget.extend({},p[m],n):d.widget.extend({},n)
}else{p[m]=n
}}}}return p
};
d.widget.bridge=function(l,h){var m=h.prototype.widgetFullName||l;
d.fn[l]=function(p){var n=typeof p==="string",o=b.call(arguments,1),r=this;
if(n){this.each(function(){var t,s=d.data(this,m);
if(p==="instance"){r=s;
return false
}if(!s){return d.error("cannot call methods on "+l+" prior to initialization; attempted to call method '"+p+"'")
}if(!d.isFunction(s[p])||p.charAt(0)==="_"){return d.error("no such method '"+p+"' for "+l+" widget instance")
}t=s[p].apply(s,o);
if(t!==s&&t!==undefined){r=t&&t.jquery?r.pushStack(t.get()):t;
return false
}})
}else{if(o.length){p=d.widget.extend.apply(null,[p].concat(o))
}this.each(function(){var s=d.data(this,m);
if(s){s.option(p||{});
if(s._init){s._init()
}}else{d.data(this,m,new h(p,this))
}})
}return r
}
};
d.Widget=function(){};
d.Widget._childConstructors=[];
d.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(h,l){l=d(l||this.defaultElement||this)[0];
this.element=d(l);
this.uuid=g++;
this.eventNamespace="."+this.widgetName+this.uuid;
this.bindings=d();
this.hoverable=d();
this.focusable=d();
if(l!==this){d.data(l,this.widgetFullName,this);
this._on(true,this.element,{remove:function(m){if(m.target===l){this.destroy()
}}});
this.document=d(l.style?l.ownerDocument:l.document||l);
this.window=d(this.document[0].defaultView||this.document[0].parentWindow)
}this.options=d.widget.extend({},this.options,this._getCreateOptions(),h);
this._create();
this._trigger("create",null,this._getCreateEventData());
this._init()
},_getCreateOptions:d.noop,_getCreateEventData:d.noop,_create:d.noop,_init:d.noop,destroy:function(){this._destroy();
this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(d.camelCase(this.widgetFullName));
this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled");
this.bindings.unbind(this.eventNamespace);
this.hoverable.removeClass("ui-state-hover");
this.focusable.removeClass("ui-state-focus")
},_destroy:d.noop,widget:function(){return this.element
},option:function(n,o){var h=n,p,m,l;
if(arguments.length===0){return d.widget.extend({},this.options)
}if(typeof n==="string"){h={};
p=n.split(".");
n=p.shift();
if(p.length){m=h[n]=d.widget.extend({},this.options[n]);
for(l=0;
l<p.length-1;
l++){m[p[l]]=m[p[l]]||{};
m=m[p[l]]
}n=p.pop();
if(arguments.length===1){return m[n]===undefined?null:m[n]
}m[n]=o
}else{if(arguments.length===1){return this.options[n]===undefined?null:this.options[n]
}h[n]=o
}}this._setOptions(h);
return this
},_setOptions:function(h){var l;
for(l in h){this._setOption(l,h[l])
}return this
},_setOption:function(h,l){this.options[h]=l;
if(h==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled",!!l);
if(l){this.hoverable.removeClass("ui-state-hover");
this.focusable.removeClass("ui-state-focus")
}}return this
},enable:function(){return this._setOptions({disabled:false})
},disable:function(){return this._setOptions({disabled:true})
},_on:function(n,m,l){var o,h=this;
if(typeof n!=="boolean"){l=m;
m=n;
n=false
}if(!l){l=m;
m=this.element;
o=this.widget()
}else{m=o=d(m);
this.bindings=this.bindings.add(m)
}d.each(l,function(v,u){function s(){if(!n&&(h.options.disabled===true||d(this).hasClass("ui-state-disabled"))){return
}return(typeof u==="string"?h[u]:u).apply(h,arguments)
}if(typeof u!=="string"){s.guid=u.guid=u.guid||s.guid||d.guid++
}var t=v.match(/^([\w:-]*)\s*(.*)$/),r=t[1]+h.eventNamespace,p=t[2];
if(p){o.delegate(p,r,s)
}else{m.bind(r,s)
}})
},_off:function(l,h){h=(h||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;
l.unbind(h).undelegate(h);
this.bindings=d(this.bindings.not(l).get());
this.focusable=d(this.focusable.not(l).get());
this.hoverable=d(this.hoverable.not(l).get())
},_delay:function(n,m){function l(){return(typeof n==="string"?h[n]:n).apply(h,arguments)
}var h=this;
return setTimeout(l,m||0)
},_hoverable:function(h){this.hoverable=this.hoverable.add(h);
this._on(h,{mouseenter:function(l){d(l.currentTarget).addClass("ui-state-hover")
},mouseleave:function(l){d(l.currentTarget).removeClass("ui-state-hover")
}})
},_focusable:function(h){this.focusable=this.focusable.add(h);
this._on(h,{focusin:function(l){d(l.currentTarget).addClass("ui-state-focus")
},focusout:function(l){d(l.currentTarget).removeClass("ui-state-focus")
}})
},_trigger:function(h,l,m){var p,o,n=this.options[h];
m=m||{};
l=d.Event(l);
l.type=(h===this.widgetEventPrefix?h:this.widgetEventPrefix+h).toLowerCase();
l.target=this.element[0];
o=l.originalEvent;
if(o){for(p in o){if(!(p in l)){l[p]=o[p]
}}}this.element.trigger(l,m);
return !(d.isFunction(n)&&n.apply(this.element[0],[l].concat(m))===false||l.isDefaultPrevented())
}};
d.each({show:"fadeIn",hide:"fadeOut"},function(l,h){d.Widget.prototype["_"+l]=function(o,n,r){if(typeof n==="string"){n={effect:n}
}var p,m=!n?l:n===true||typeof n==="number"?h:n.effect||h;
n=n||{};
if(typeof n==="number"){n={duration:n}
}p=!d.isEmptyObject(n);
n.complete=r;
if(n.delay){o.delay(n.delay)
}if(p&&d.effects&&d.effects.effect[m]){o[l](n)
}else{if(m!==l&&o[m]){o[m](n.duration,n.easing,r)
}else{o.queue(function(s){d(this)[l]();
if(r){r.call(o[0])
}s()
})
}}}
});
var c=d.widget;
/*!
 * jQuery UI Accordion 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/accordion/
 */
;
var a=d.widget("ui.accordion",{version:"1.11.4",options:{active:0,animate:{},collapsible:false,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var h=this.options;
this.prevShow=this.prevHide=d();
this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist");
if(!h.collapsible&&(h.active===false||h.active==null)){h.active=0
}this._processPanels();
if(h.active<0){h.active+=this.headers.length
}this._refresh()
},_getCreateEventData:function(){return{header:this.active,panel:!this.active.length?d():this.active.next()}
},_createIcons:function(){var h=this.options.icons;
if(h){d("<span>").addClass("ui-accordion-header-icon ui-icon "+h.header).prependTo(this.headers);
this.active.children(".ui-accordion-header-icon").removeClass(h.header).addClass(h.activeHeader);
this.headers.addClass("ui-accordion-icons")
}},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
},_destroy:function(){var h;
this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId();
this._destroyIcons();
h=this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId();
if(this.options.heightStyle!=="content"){h.css("height","")
}},_setOption:function(h,l){if(h==="active"){this._activate(l);
return
}if(h==="event"){if(this.options.event){this._off(this.headers,this.options.event)
}this._setupEvents(l)
}this._super(h,l);
if(h==="collapsible"&&!l&&this.options.active===false){this._activate(0)
}if(h==="icons"){this._destroyIcons();
if(l){this._createIcons()
}}if(h==="disabled"){this.element.toggleClass("ui-state-disabled",!!l).attr("aria-disabled",l);
this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!l)
}},_keydown:function(n){if(n.altKey||n.ctrlKey){return
}var o=d.ui.keyCode,m=this.headers.length,h=this.headers.index(n.target),l=false;
switch(n.keyCode){case o.RIGHT:case o.DOWN:l=this.headers[(h+1)%m];
break;
case o.LEFT:case o.UP:l=this.headers[(h-1+m)%m];
break;
case o.SPACE:case o.ENTER:this._eventHandler(n);
break;
case o.HOME:l=this.headers[0];
break;
case o.END:l=this.headers[m-1];
break
}if(l){d(n.target).attr("tabIndex",-1);
d(l).attr("tabIndex",0);
l.focus();
n.preventDefault()
}},_panelKeyDown:function(h){if(h.keyCode===d.ui.keyCode.UP&&h.ctrlKey){d(h.currentTarget).prev().focus()
}},refresh:function(){var h=this.options;
this._processPanels();
if((h.active===false&&h.collapsible===true)||!this.headers.length){h.active=false;
this.active=d()
}else{if(h.active===false){this._activate(0)
}else{if(this.active.length&&!d.contains(this.element[0],this.active[0])){if(this.headers.length===this.headers.find(".ui-state-disabled").length){h.active=false;
this.active=d()
}else{this._activate(Math.max(0,h.active-1))
}}else{h.active=this.headers.index(this.active)
}}}this._destroyIcons();
this._refresh()
},_processPanels:function(){var l=this.headers,h=this.panels;
this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all");
this.panels=this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide();
if(h){this._off(l.not(this.headers));
this._off(h.not(this.panels))
}},_refresh:function(){var n,l=this.options,h=l.heightStyle,m=this.element.parent();
this.active=this._findActive(l.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");
this.active.next().addClass("ui-accordion-content-active").show();
this.headers.attr("role","tab").each(function(){var s=d(this),r=s.uniqueId().attr("id"),o=s.next(),p=o.uniqueId().attr("id");
s.attr("aria-controls",p);
o.attr("aria-labelledby",r)
}).next().attr("role","tabpanel");
this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide();
if(!this.active.length){this.headers.eq(0).attr("tabIndex",0)
}else{this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"})
}this._createIcons();
this._setupEvents(l.event);
if(h==="fill"){n=m.height();
this.element.siblings(":visible").each(function(){var p=d(this),o=p.css("position");
if(o==="absolute"||o==="fixed"){return
}n-=p.outerHeight(true)
});
this.headers.each(function(){n-=d(this).outerHeight(true)
});
this.headers.next().each(function(){d(this).height(Math.max(0,n-d(this).innerHeight()+d(this).height()))
}).css("overflow","auto")
}else{if(h==="auto"){n=0;
this.headers.next().each(function(){n=Math.max(n,d(this).css("height","").height())
}).height(n)
}}},_activate:function(h){var l=this._findActive(h)[0];
if(l===this.active[0]){return
}l=l||this.active[0];
this._eventHandler({target:l,currentTarget:l,preventDefault:d.noop})
},_findActive:function(h){return typeof h==="number"?this.headers.eq(h):d()
},_setupEvents:function(l){var h={keydown:"_keydown"};
if(l){d.each(l.split(" "),function(n,m){h[m]="_eventHandler"
})
}this._off(this.headers.add(this.headers.next()));
this._on(this.headers,h);
this._on(this.headers.next(),{keydown:"_panelKeyDown"});
this._hoverable(this.headers);
this._focusable(this.headers)
},_eventHandler:function(h){var t=this.options,n=this.active,o=d(h.currentTarget),r=o[0]===n[0],l=r&&t.collapsible,m=l?d():o.next(),p=n.next(),s={oldHeader:n,oldPanel:p,newHeader:l?d():o,newPanel:m};
h.preventDefault();
if((r&&!t.collapsible)||(this._trigger("beforeActivate",h,s)===false)){return
}t.active=l?false:this.headers.index(o);
this.active=r?d():o;
this._toggle(s);
n.removeClass("ui-accordion-header-active ui-state-active");
if(t.icons){n.children(".ui-accordion-header-icon").removeClass(t.icons.activeHeader).addClass(t.icons.header)
}if(!r){o.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top");
if(t.icons){o.children(".ui-accordion-header-icon").removeClass(t.icons.header).addClass(t.icons.activeHeader)
}o.next().addClass("ui-accordion-content-active")
}},_toggle:function(m){var h=m.newPanel,l=this.prevShow.length?this.prevShow:m.oldPanel;
this.prevShow.add(this.prevHide).stop(true,true);
this.prevShow=h;
this.prevHide=l;
if(this.options.animate){this._animate(h,l,m)
}else{l.hide();
h.show();
this._toggleComplete(m)
}l.attr({"aria-hidden":"true"});
l.prev().attr({"aria-selected":"false","aria-expanded":"false"});
if(h.length&&l.length){l.prev().attr({tabIndex:-1,"aria-expanded":"false"})
}else{if(h.length){this.headers.filter(function(){return parseInt(d(this).attr("tabIndex"),10)===0
}).attr("tabIndex",-1)
}}h.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})
},_animate:function(h,u,p){var t,s,o,r=this,v=0,n=h.css("box-sizing"),w=h.length&&(!u.length||(h.index()<u.index())),m=this.options.animate||{},y=w&&m.down||m,l=function(){r._toggleComplete(p)
};
if(typeof y==="number"){o=y
}if(typeof y==="string"){s=y
}s=s||y.easing||m.easing;
o=o||y.duration||m.duration;
if(!u.length){return h.animate(this.showProps,o,s,l)
}if(!h.length){return u.animate(this.hideProps,o,s,l)
}t=h.show().outerHeight();
u.animate(this.hideProps,{duration:o,easing:s,step:function(z,A){A.now=Math.round(z)
}});
h.hide().animate(this.showProps,{duration:o,easing:s,complete:l,step:function(z,A){A.now=Math.round(z);
if(A.prop!=="height"){if(n==="content-box"){v+=A.now
}}else{if(r.options.heightStyle!=="content"){A.now=Math.round(t-u.outerHeight()-v);
v=0
}}}})
},_toggleComplete:function(l){var h=l.oldPanel;
h.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");
if(h.length){h.parent()[0].className=h.parent()[0].className
}this._trigger("activate",null,l)
}})
}));
$(document).ready(function(){chatOverlay()
});
$(window).resize(function(){chatOverlay()
});
function chatOverlay(){$(".fa-wechat").on({mouseenter:function(){$(document.body).find(".chatOverlay").remove();
var a=$(".fa-wechat").offset();
var b="<div class='chatOverlay'><img src='/content/dam/digitalmarketing/vmware/zh-cn/files/images/we_chat_bar_code.png' alt='WeChatBarCode'></div>";
$(document.body).append(b);
$(".chatOverlay").css({left:a.left-25,top:a.top-200})
},mouseleave:function(){$(document.body).find(".chatOverlay").remove()
},click:function(c){if(window.innerWidth<480){c.preventDefault()
}if($(document.body).find(".chatOverlay").length){$(document.body).find(".chatOverlay").remove()
}else{var a=$(".fa-wechat").offset();
var b="<div class='chatOverlay'><img src='/content/dam/digitalmarketing/vmware/zh-cn/files/images/we_chat_bar_code.png' alt='WeChatBarCode'></div>";
$(document.body).append(b);
$(".chatOverlay").css({left:a.left-25,top:(a.top-200)})
}}})
}$(document).ready(function(){var h;
var g;
$(".contactuswithgooglemaps a[title]").each(function(){h=$(this).attr("title");
g=$(this).attr("href");
if(!isNaN(h)&&(/^[0-9]{13}$/.test(h))&&g=="#"){if($(this).find("span.fa-video-camera").length!=0){$(this).find("span.fa-video-camera").attr("class","");
$(this).attr("asset-id",h);
$(this).removeAttr("title");
$(this).attr("class","bcvideo");
$(".contactuswithgooglemaps a[asset-type]").attr("class","");
$(".bcvideo").attr("href","javascript:void(0);");
$(".bcvideo").attr("data-element-type","video");
$(".bcvideo").attr("onclick","")
}else{$(this).attr("asset-id",h);
$(this).removeAttr("title");
$(this).attr("class","bcvideo");
$(".contactuswithgooglemaps a[asset-type]").attr("class","");
$(".bcvideo").attr("href","javascript:void(0);");
$(".bcvideo").attr("data-element-type","video");
$(".bcvideo").attr("onclick","")
}}});
$(".paragraphText a[title]").each(function(){h=$(this).attr("title");
g=$(this).attr("href");
if(!isNaN(h)&&(/^[0-9]{13}$/.test(h))&&g=="#"){if($(this).find("span.fa-video-camera").length!=0){$(this).find("span.fa-video-camera").attr("class","");
$(this).attr("asset-id",h);
$(this).removeAttr("title");
$(this).attr("class","bcvideo");
$(".paragraphText a[asset-type]").attr("class","");
$(".bcvideo").attr("href","javascript:void(0);");
$(".bcvideo").attr("data-element-type","video");
$(".bcvideo").attr("onclick","")
}else{$(this).attr("asset-id",h);
$(this).removeAttr("title");
$(this).attr("class","bcvideo");
$(".paragraphText a[asset-type]").attr("class","");
$(".bcvideo").attr("href","javascript:void(0);");
$(".bcvideo").attr("data-element-type","video");
$(".bcvideo").attr("onclick","")
}}});
$(".combinationContentCard a[title]").each(function(){h=$(this).attr("title");
g=$(this).attr("href");
if(!isNaN(h)&&(/^[0-9]{13}$/.test(h))&&g=="#"){if($(this).find("span.fa-video-camera").length!=0){$(this).find("span.fa-video-camera").attr("class","");
$(this).attr("asset-id",h);
$(this).removeAttr("title");
$(this).attr("class","bcvideo");
$(".combinationContentCard a[asset-type]").attr("class","");
$(".bcvideo").attr("href","javascript:void(0);");
$(".bcvideo").attr("data-element-type","video");
$(".bcvideo").attr("onclick","")
}else{$(this).attr("asset-id",h);
$(this).removeAttr("title");
$(this).attr("class","bcvideo");
$(".combinationContentCard a[asset-type]").attr("class","");
$(".bcvideo").attr("href","javascript:void(0);");
$(".bcvideo").attr("data-element-type","video");
$(".bcvideo").attr("onclick","")
}}});
var a=document.getElementsByClassName("bcvideo");
for(var d=0,e=a.length;
d<e;
d++){var l=document.getElementsByClassName("bcvideo")[d].getAttribute("asset-id");
var c="return showVideo('";
var f=c.concat(l);
var b="')";
var m=f.concat(b);
document.getElementsByClassName("bcvideo")[d].setAttribute("onclick",m)
}});
if(typeof jQuery==="undefined"||typeof Modernizr==="undefined"){throw new Error("Missing jQuery, Modernizr")
}$(document).ready(function(){$(".module .share .share-tip").each(function(){var s=$(this).prev(".module .share a").width();
$(this).css("right",s/2-20)
});
var h=window.location.hash;
if(h!=""&&!(h.indexOf("=")>-1)&&$(window.location.hash).length>0){$("html, body").animate({scrollTop:parseInt($(window.location.hash).offset().top-(2*($(".breadCrumb").height()+$(".vm-border").height())))},2000)
}var d=$("[data-share-properties]").attr("data-linkedin-app-key")||"",n=$("[data-share-properties]").attr("data-facebook-app-id")||"",b=$("[data-share-properties]").attr("data-facebook-app-version")||"";
twitterVia=$("[data-share-properties]").attr("data-twitter-via")||"";
if(n!=""&&b!=""){a()
}r();
if(d!=""){e()
}g();
function a(){$.getScript("//connect.facebook.net/en_US/sdk.js",function s(){FB.init({appId:n,xfbml:true,version:b})
})
}function r(){$.getScript("//platform.twitter.com/widgets.js",function s(){})
}function e(){if(!d){}$.getScript("//platform.linkedin.com/in.js?async=true",function s(t){IN.init({api_key:d,authorize:true})
})
}function g(){$.getScript("//apis.google.com/js/platform.js?async=true",function s(t){})
}$(".social-block a, .social-links-con a, .shareResults a, .pw-social-share a").on("click",function(u){u.preventDefault();
var s=$(u.currentTarget);
var t=m(s);
switch(t.network){case"facebook":if(n!=""&&b!=""){f(t)
}break;
case"linkedin":if(d!=""){l(t)
}break;
case"twitter":o(t);
break;
case"google":c(t);
break
}});
function m(w){var v;
var D=w.attr("data-redirect")||"";
var C=w.attr("data-brightcove")||"";
var z=w.attr("data-url")||window.location.protocol+"//"+window.location.host+window.location.pathname;
if(D=="redirect"){if(z.indexOf("/content/vmware")>=0){v=window.location.protocol+"//"+window.location.host+z+".html"
}else{if(z.indexOf("/content/dam")>=0){v=window.location.protocol+"//"+window.location.host+z
}else{v=z
}}}else{if(C=="brightcove"){v="https://secure.brightcove.com/services/viewer/federated_f9?&flashID=myExperience4128503486001&identifierClassName=BrightcoveExperienceID_366&bgcolor=%23FFFFFF&playerID=2600621699001&playerKey=AQ~~%2CAAABZT3vhQE~%2CBjUqi80WkWYLtEmfOYvmkxI9TWW1tSjN&isVid=true&isUI=true&autoStart=true&includeAPI=true&dynamicStreaming=true&%40videoPlayer="+z+"&secureConnections=true&secureHTMLConnections=true&debuggerID=&startTime=1477575948410"
}else{if(z.indexOf("/content/vmware")>=0){v=z
}else{v=window.location.protocol+"//"+window.location.host+window.location.pathname+"#"+z
}}}var A=w.attr("data-share")||"";
var F=w.attr("data-title")||"";
var t=w.attr("data-summary")||"";
var u=document.createElement("div");
u.innerHTML=t;
var E=u.innerText;
var B=window.location.origin+w.attr("data-image")||"";
var H=twitterVia||w.attr("data-via");
var G=w.attr("data-related")||"";
var s=w.attr("data-linkedin-source")||"";
var y={context:w,network:A,url:v,title:F,summary:E,image:B,via:H,related:encodeURIComponent(G),source:s};
return y
}function p(s){var u=$("body");
var t=$(document.createElement("a"));
var w=(window.innerWidth/2)-(550/2);
var v=(window.innerHeight/2)-(400/2);
var y="toolbar=no, location=no, menubar=no, width=550, height=400, top="+v+",left="+w;
if(Modernizr.touch){t.attr("id","tmp-share");
t.attr("href",s);
t.attr("target","_blank");
t.attr("style","display:none;");
t.text("temp link for share");
u.append(t);
document.location=$("#tmp-share").attr("href")
}else{window.open(s,"_blank",y)
}}function f(s){FB.ui({method:"feed",name:s.title,mobile_iframe:true,link:s.url,caption:"vmware",picture:s.image,description:s.summary},function(t){if(t&&!t.error_code){window.location.href=""
}else{}})
}function l(t){var s="//www.linkedin.com/shareArticle?";
s+="title="+t.title;
s+="&summary="+t.summary;
s+="&source="+t.source;
s+="&imagecontent ="+t.image;
s+="&url="+t.url;
p(s)
}function o(t){var s="https://twitter.com/intent/tweet";
s+="?hashtags=";
s+="&original_referer="+encodeURIComponent(document.location.href);
s+="&related="+t.related;
s+="&source=tweetbutton";
s+="&text="+t.title;
s+="&via="+t.via;
s+="&url="+encodeURIComponent(t.url);
p(s)
}function c(t){var s="//plus.google.com/share?";
s+="url="+t.url;
p(s)
}});
$(document).ready(function(){$('a[data-element-type="video"]').mouseover(function(){$(".imgnewtab").hide();
$(".getImage").hide();
$(".outer-container").attr("style","")
});
$(".paragraphText table").closest(".container-fluid").css("padding","0");
$(".paragraphText table").attr("class","table-responsive tableComp tableCustom");
$(".paragraphText table").attr("id","tableComp");
$(".paragraphText table").wrap("<div class='section-custom full-width'></div>");
$(".paragraphText table div.table-img").each(function(){var c=$(this).css("background-image").replace(/^url\(['"]?/,"").replace(/['"]?\)$/,"");
$(this).find("a").attr("largeimagename",c);
$(this).find("a").attr("onclick","return ImageLargeView(this);");
$(this).find("a").attr("href","javascript:void(0);")
});
$(".paragraphText table div.tableIcon").each(function(){var c=$(this).css("background-image").replace(/^url\(['"]?/,"").replace(/['"]?\)$/,"");
$(this).find("a").attr("largeimagename",c);
$(this).find("a").attr("onclick","return ImageLargeView(this);");
$(this).find("a").attr("href","javascript:void(0);")
});
$(".paragraphText table div.tooltip_container a").each(function(){var c=$(this).attr("title");
$(this).attr("data-original-title",c);
$(this).attr("data-toggle","tooltip");
$(this).attr("data-placement","bottom");
$(this).attr("href","javascript:void(0);");
$(this).tooltip()
});
$('[data-toggle="tooltip"]').tooltip();
var b=[];
var a=false;
$(".paragraphText table tr").each(function(){if($(this).children().prop("tagName")==="TH"){a=true;
$(this).addClass("headerRow");
$(".paragraphText table tr:even").attr("style","background-color:#e3e3e3!important");
$(".paragraphText table tr:even a.table-icon").attr("style","float:none; display:block;background:#e3e3e3");
$(".paragraphText table tr:odd").attr("style","background-color:#fff!important");
$(".paragraphText table tr:odd a.table-icon").attr("style","float:none; display:block;background:#fff");
for(var d=0;
d<$(this).find("th").length;
d++){b.push($(this).find("th")[d].innerHTML)
}}else{for(var c=0;
c<$(this).find("td").length;
c++){if(a){$(this).find("td")[c].setAttribute("data-th",b[c])
}else{$(this).find("td")[c].removeAttribute("data-th")
}}}});
if($(window).width()<800){$(".tableCustom tr td").each(function(){if($(this).data("th")=="undefined"){$(this).removeAttr("data-th")
}})
}});
$(window).resize(function(){if($(window).width()<800){$(".tableCustom tr td").each(function(){if($(this).data("th")=="undefined"){$(this).removeAttr("data-th")
}})
}});
$(window).resize(function(){setInterval(function(){heroCarousel2()
},1000)
});
$(function(){var a=$("#carousel");
if(a.length>0){a.carousel()
}if($(".lazy").length>0){$(".lazy").lazyload({effect:"fadeIn",threshold:2})
}if(a.length>0){a.bind("slide.bs.carousel",function(b){if($(b.relatedTarget).find(".carousel_img").attr("data-original")!=null||$(b.relatedTarget).find(".carousel_img").attr("data-original")!=undefined){$(b.relatedTarget).find(".carousel_img").css("background-image","url("+$(b.relatedTarget).find(".carousel_img").attr("data-original")+")");
$(b.relatedTarget).find(".carousel_img").removeAttr("data-original")
}})
}owlHeroCarousel2();
heroCarousel2()
});
var owl;
function owlHeroCarousel2(){var a=$(".heroCarousel2");
$(a).each(function(){var g=$(this);
var m=g.find(".herocarouseltransitionValue").attr("transitionValue");
var h=g.find(".herocarouseltransitionOffOn").attr("transitionOffOn");
var d=m*1000;
function f(){g.find(".owl-carousel").data("owlCarousel").next()
}var c;
var b=function(){c=setInterval(function(){g.find(".owl-carousel").data("owlCarousel").next()
},d)
};
var e;
if(h==="transitionOn"){b()
}else{setInterval(c)
}g.find(".owl-carousel .owl-page, .owl-next, .owl-prev").on("click",function(){alert("clear");
clearInterval(c);
if(h==="transitionOn"){b()
}});
if(g.find(".owl-item").length<=1){g.find(".owl-controls .owl-prev").hide();
g.find(".owl-controls .owl-next").hide()
}function l(){$.each(this.owl.userItems,function(r){var t=$(this).find(".item-img").attr("title");
var o=$(this).find(".item-img").attr("data-icon");
var s=$(".homeBanner .owl-controls .owl-pagination .owl-page span");
var n=[];
var p=[];
$.each($(".titleIcons"),function(u){n[u]=$(this).attr("data-icon");
p[u]=$(this).attr("title")
});
if(t==null&&o==null){t=p[r];
o=n[r]
}})
}if(g.find(".heroBannerCarousel").length>0){g.find(".heroBannerCarousel").owlCarousel({navigation:true,rewindNav:true,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],startPosition:0,slideSpeed:e,paginationSpeed:e,lazyLoad:true,loop:true,autoplay:true,autoplayTimeout:1000,autoplaySpeed:1000,singleItem:true,afterInit:l,startDragging:f,afterUpdate:l,afterAction:function(n){this.$owlItems.removeClass("active");
this.$owlItems.eq(this.currentItem).addClass("active");
if(this.$owlItems.eq(this.currentItem).find(".l2_banner_content h2.herowhite").length>0||this.$owlItems.eq(this.currentItem).find(".l2_banner_content p.herowhite").length>0){this.$owlItems.eq(this.currentItem).closest(".herobanner .homeBanner").addClass("invertColor")
}else{this.$owlItems.eq(this.currentItem).closest(".herobanner .homeBanner").removeClass("invertColor")
}}})
}})
}function heroCarousel2(){var a=$(".heroCarousel2");
$(a).each(function(){var g=$(this);
var d=g.find(".homeBanner .owl-controls .owl-pagination .owl-page span");
var e=g.find(".homeBanner");
var f=g.find(".homeBanner .owl-controls .owl-pagination .owl-page");
var h=g.find(".homeBanner .owl-controls");
if(e.length>=1&&e.parent().hasClass("heroCarousel2")==true){d.remove();
var b=f.length;
if(b>=1&&f.parents().hasClass("heroCarousel2")==true){var l=h.innerWidth();
h.css({"margin-left":"-"+l/2+"px"});
var c=parseInt(h.innerWidth()-((b-1)*4));
l=parseInt(c/b);
if(b>1){f.css({width:l+"px","margin-right":"4px"});
g.find(".homeBanner .owl-controls .owl-pagination .owl-page:last").css({"margin-right":"0px"})
}else{f.css({width:"100%"})
}}}})
}$(document).ready(function(){if(!$(".homepage .heroCarousel").length){$(".homepage .content-container > div").css("padding-top","50px")
}$("#heroCarousel2 .owl-controls").attr("id","heroBanner");
if(window.innerWidth>801){if($(".homepage .heroCarousel2").length){$(".homepage .nav-vm:before").css("bottom","-3px")
}}});
$(window).load(function(){if($(".c2c-popup").length){$(".c2c-draggable").draggable({handle:"header",containment:"window",drag:function(b,e){e.position.left=Math.max(136,e.position.left);
e.position.top=Math.max(0,e.position.top)
}});
if(($("#bottom-bar").length)){var a=$("#bottom-bar").height()+15+"px";
$(".c2c-content").css({right:"0px",bottom:a})
}else{if($("#_evidon_banner").length){var a=$("#_evidon_banner").height()+15+"px";
$(".c2c-content").css({right:"0px",bottom:a});
$(document).on("click","#_evidon-accept-button",function(){if($(window).width()>800){$(".c2c-content").css({right:"0px",bottom:"52px"})
}else{$(".c2c-content").css({bottom:"45px"})
}});
$(window).resize(function(){var b=$("#_evidon_banner").height()+15+"px";
$(".c2c-content").css({right:"0px",bottom:b})
})
}else{if($("#_evh-button").length){var a=$("#_evh-link").height()+15+"px";
$(".c2c-content").css({right:"0px",bottom:a})
}else{if($("#teconsent").is(":visible")&&($("#bottom-bar").length<1)){if($(window).width()>800){var a=$("#teconsent").height()+15+"px";
$(".c2c-content").css({right:"0px",bottom:a})
}else{$(".c2c-content").css({right:"0px",bottom:"45px"})
}}else{$(".c2c-content").css({right:"20px",bottom:"20px"});
$(document).on("click","#truste-consent-button",function(){if($(window).width()>800){$(".c2c-content").css({right:"0px",bottom:"60px"})
}else{$(".c2c-content").css({bottom:"45px"})
}})
}}}}}});
$("body").on("click",".c2c-close",function(){console.log("ending");
$("#idIframe").attr("src","https://www.vmware.com/content/dam/digitalmarketing/vmware/global-icons/loading.gif")
});
$(document).ready(function(){$(".lightGrey-bg").parents(".wrapper").siblings(".footer-container").css("margin-top","0");
$(".detailpage-image").parents(".module_container").closest(".section-custom").css("margin-bottom","0");
if(!$(".white-background-card-container").parents(".lightGrey-bg").length){$(".white-background-card-container").css("padding-left","0");
$(".white-background-card-container .white-background-card").css("padding-left","0")
}var f="";
if($(".new-candidate-accordion-list .quarter").length){f=$(".new-candidate-accordion-list .quarter");
for(t=0;
t<f.length;
t++){$(f[t]).attr("id","accordion"+t)
}}var m="";
$(".new-candidate-accordion .quarter .row.title").click(function(){if($(this).closest(".quarter").attr("id")==$(m).attr("id")){if($(this).closest(".quarter").hasClass("open")){$(this).closest(".quarter").removeClass("open")
}else{$(this).closest(".quarter").addClass("open");
m=$(this).closest(".quarter")
}}else{$(m).removeClass("open");
$(this).closest(".quarter").addClass("open");
m=$(this).closest(".quarter")
}});
$(document).on("change",".new-candidate-dropdown",function(){var z=$(this).data("target");
var y=$("option:selected",this).data("show");
$(z).children().addClass("hide");
$(y).removeClass("hide")
});
$(".new-candidate-dropdown").trigger("change");
var a=$("select.selectpicker").find(":selected").attr("value");
var r=$(".new-candidate-accordion-list .quarter");
$.fn.myfunction=function(){for(var y=0;
y<r.length;
y++){var A=$("select.selectpicker").find(":selected").attr("value");
var z=$(r[y]).attr("value");
if(z.indexOf(A)>-1){$(r[y]).removeClass("hide")
}else{$(r[y]).addClass("hide")
}}};
if($(".select-wrapper").length){$(".white-background-card h2").css({"font-size":"20px","text-transform":"none"});
$.fn.myfunction()
}else{for(var t=0;
t<r.length;
t++){$(r[t]).removeClass("hide")
}$(".white-background-card h2").css({"font-size":"35px","text-transform":"none"})
}var d=$(".white-background-card .select-wrapper .btn-group").width();
var c=$(".white-background-card .dropdown-menu.open ul li.selected span").width();
if(d<=c){$(".white-background-card .select-wrapper").css({display:"block","padding-left":"0px"});
$(".white-background-card button").css("width",c+30)
}else{$(".white-background-card .select-wrapper").css({display:"inline-block","padding-left":"4px"});
$(".white-background-card button").css("width",c+30)
}$(document).on("change","select.selectpicker",function(){var A=$("select.selectpicker").find(":selected").attr("value");
var y=$(".white-background-card .select-wrapper .btn.dropdown-toggle").width();
var z=$(".dropdown-menu.open ul li.selected span").width();
if(y<=z){$(".white-background-card .select-wrapper").css({display:"block","padding-left":"0px"});
$(".white-background-card button").css("width",z+30)
}else{$(".white-background-card .select-wrapper").css({display:"inline-block","padding-left":"4px"});
$(".white-background-card button").css("width",z+30)
}$.fn.myfunction()
});
$.fn.cardTileHeight=function(){var y=[];
if($(".technology-tracks-container.flex-item").length){var B=$(".technology-tracks-container.flex-item");
for(var A=0;
A<B.length;
A++){y.push($(B[A]).height())
}var D=Math.max.apply(Math,y);
for(var z=0;
z<B.length;
z++){var C=D-$(B[z]).height();
$(B[z]).css("padding-top",C)
}}};
$.fn.cardTileHeight();
var l="";
var p="";
var u=window.innerWidth;
$.fn.cardTileColumnCount=function(){p="";
u=window.innerWidth;
if(u>991){p=3
}else{if((800<=u)&&(u<=991)){p=2
}else{if(u<800){p=1
}}}};
$.fn.cardTileColumnCount();
$(window).on("resize",function(){if($(".show-details").length){$(".show-details").remove()
}$.fn.cardTileHeight();
$.fn.cardTileColumnCount()
});
var v="";
var b=[];
var w=[];
var n=false;
var h=false;
var o="";
var s=$(".technology-tracks-container").closest(".col-md-4");
var e=$(".technology-tracks-tab-container");
$(document).on("click",".technology-tracks-container",function(A){var B=$(this).css("background");
offset=$(this).find(".card-tile").offset();
l=B.split("none");
var D="4px solid "+l[0];
$(".tracks-inner-container").find(".nav-tabs li.active a").css({"border-top":D,"border-left":"1px solid #ddd","border-right":"1px solid #ddd"});
h=false;
for(t=0;
t<s.length;
t++){if($(this).find("a").attr("href")===("#"+$(e[t]).attr("id"))){n=true;
var z=offset.left+($(this).width()/2)-($(".tile-pointer .fa").width())-100;
if((t%3===0)&&(p==3)){var y=l[0]
}else{if((p==2)||(p==1)){y=l[0]
}else{y="#fff"
}}$(e[t]).find(".tile-pointer .fa").attr("style","color:"+y+"!important;left:"+z+"px;");
v=$(e[t]).html()
}else{n=false
}if(n){$(e[t]).remove();
if(p==3){b=[];
w=[];
for(j=0;
j<s.length;
j=j+p){b.push(j);
w.push(j+p-1)
}for(k=0;
k<b.length;
k++){if(w[k]<=s.length&&b[k]<=t&&t<=w[k]){h=w[k]
}else{if(w[k]>t){h=t
}else{h=false
}}if(h){if($(".show-details").length){$(".show-details").remove()
}$(v).insertAfter(s[h]).wrap('<div class="show-details col-xs-12"></div>');
if($(".show-details ul.inner-card-tile").length){if(($(".show-details .inner-tab-container").height())>($(".show-details ul.inner-card-tile").height())){var C=$(".show-details .inner-tab-container").height();
$(".show-details ul.inner-card-tile").css("height",C)
}else{$(".show-details ul.inner-card-tile").css("height",auto)
}}return false
}}}else{if(p==2){if(t%2===0&&((t+1)<s.length)){if($(".show-details").length){$(".show-details").remove()
}$(v).insertAfter(s[t+1]).wrap('<div class="show-details col-xs-12"></div>');
return false
}else{if($(".show-details").length){$(".show-details").remove()
}$(v).insertAfter(s[t]).wrap('<div class="show-details col-xs-12"></div>');
return false
}}else{if(p==1){if($(".show-details").length){$(".show-details").remove()
}$(v).insertAfter(s[t]).wrap('<div class="show-details col-xs-12"></div>');
return false
}}}}}});
$(document).on("click",".nav-tabs li a",function(){$(".nav-tabs li a").css("border","");
if($(this).parent("li").hasClass("active")){var y="4px solid "+l[0];
$(this).css({"border-top":y,"border-left":"1px solid #ddd","border-right":"1px solid #ddd"})
}else{$(this).css("border-top","")
}});
var g="#"+$(".technology-tracks-container .tab-pane.active").attr("id");
$(document).on("click",".tracks-inner-container  .close-tab",function(){$(this).closest(".tracks-inner-container").css("display","none")
})
});