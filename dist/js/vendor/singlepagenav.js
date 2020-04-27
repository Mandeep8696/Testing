/*
== Page scroll to id ==
Version: 1.6.3
Plugin URI: http://manos.malihu.gr/page-scroll-to-id/
Author: malihu
Author URI: http://manos.malihu.gr
License: MIT License (MIT)
*/

/*
Copyright 2013  malihu  (email: manos@malihu.gr)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

;(function($,window,document,undefined){

	/* plugin namespace, prefix, default selector(s) */

	var pluginNS="mPageScroll2id",
		pluginPfx="mPS2id",
		defaultSelector=".m_PageScroll2id,a[rel~='m_PageScroll2id'],.page-scroll-to-id,a[rel~='page-scroll-to-id'],._ps2id",

		/* default options */

		defaults={
			/* scroll animation speed in milliseconds: Integer */
			scrollSpeed:1000,
			/* auto-adjust animation speed (according to target element position and window scroll): Boolean */
			autoScrollSpeed:true,
			/* scroll animation easing when page is idle: String */
			scrollEasing:"easeInOutQuint",
			/* scroll animation easing while page is scrolling: String */
			scrollingEasing:"easeOutQuint",
			/* end of page "smooth scrolling" (auto-adjust the scroll-to position when bottom elements are too short): Boolean */
			pageEndSmoothScroll:true,
			/*
			page layout defines scrolling direction: String
			values: "vertical", "horizontal", "auto"
			*/
			layout:"vertical",
			/* extra space in pixels for the target element position: Integer */
			offset:70,
			/* highlight the main/default selectors or insert a different set: Boolean, String */
			highlightSelector:false,
			/* class of the clicked element: String */
			clickedClass:pluginPfx+"-clicked",
			/* class of the current target element: String */
			targetClass:pluginPfx+"-target",
			/* class of the highlighted element: String */
			highlightClass:pluginPfx+"-highlight",
			/* force a single highlighted element each time: Boolean */
			forceSingleHighlight:false,
			/* keep element highlighted until next (one element always stays highlighted): boolean */
			keepHighlightUntilNext:false,
			/* highlight elements according to their target and next target position (useful when targets have zero dimensions). Non "auto" layouts only: boolean */
			highlightByNextTarget:false,
			/* disable plugin below [x,y] screen size: boolean, integer, array ([x,y]) */
			disablePluginBelow:false,
			/* enable/disable click events for all selectors */
			clickEvents:true,
			/* append hash to URL/address bar */
			appendHash:false,
			/* user callback functions: fn */
			onStart:function(){},
			onComplete:function(){},
			/* enable/disable the default selector: Boolean */
			defaultSelector:false,
			/* highlight elements now and in the future */
			live:true,
			/* set specific live selector(s): String */
			liveSelector:false,
			/* set specific selector(s) that will be excluded from being handled by the plugin: String */
			excludeSelectors:false
		},

		/* vars, constants */

		selector,opt,_init,_trigger,_clicked,_target,_to,_axis,_offset,_dataOffset,_totalInstances=0,_liveTimer,_speed,

		/*
		---------------
		methods
		---------------
		*/

		methods={

			/* plugin initialization method */

			init:function(options){

				/* extend options, store each option in jquery data */

				var options=$.extend(true,{},defaults,options);

				$(document).data(pluginPfx,options);
				opt=$(document).data(pluginPfx);

				/* check/set jquery (deprecated) selector property if not defined */
				if(!this.selector){
					var selectorClass="__"+pluginPfx;
					this.each(function(){
						var el=$(this);
						if(!el.hasClass(selectorClass)){
							el.addClass(selectorClass);
						}
					});
					this.selector="."+selectorClass;
				}

				/* live selector */

				if(opt.liveSelector) this.selector+=","+opt.liveSelector;

				/* set selector */

				selector=(!selector) ? this.selector : selector+","+this.selector;

				if(opt.defaultSelector){
					if(typeof $(selector)!=="object" || $(selector).length===0){
						selector=defaultSelector;
					}
				}

				/* plugin events */

				if(opt.clickEvents){
					$(document)

						.undelegate("."+pluginPfx)

						.delegate(selector,"click."+pluginPfx,function(e){
							if(functions._isDisabled.call(null)){
								functions._removeClasses.call(null);
								return;
							}
							var $this=$(this),
								href=$this.attr("href"),
								hrefProp=$this.prop("href").baseVal || $this.prop("href");
							if(opt.excludeSelectors && $this.is(opt.excludeSelectors)){ //excluded selectors
								return;
							}
							if(href && href.indexOf("#/")!==-1){
								return;
							}
							functions._reset.call(null);
							_dataOffset=$this.data("ps2id-offset") || 0;
							if(functions._isValid.call(null,href,hrefProp) && functions._findTarget.call(null,href)){
								e.preventDefault();
								_trigger="selector";
								_clicked=$this;
								functions._setClasses.call(null,true);
								functions._scrollTo.call(null);
							}
						});
				}

				$(window)

					.unbind("."+pluginPfx)

					.bind("scroll."+pluginPfx+" resize."+pluginPfx,function(){
						if(functions._isDisabled.call(null)){
							functions._removeClasses.call(null);
							return;
						}
						var targets=$("._"+pluginPfx+"-t");
						targets.each(function(i){
							var t=$(this),id=t.attr("id"),
								h=functions._findHighlight.call(null,id);
							functions._setClasses.call(null,false,t,h);
							if(i==targets.length-1){functions._extendClasses.call(null);}
						});
					});

				/* plugin has initialized */

				_init=true;

				/* setup selectors, target elements, basic plugin classes etc. */

				functions._setup.call(null);

				/*
				monitor for elements matching the current highlight selector and call plugin setup when found (now and in the future)
				to manually enable/disable: $(document).data("mPS2id").live=boolean
				*/

				functions._live.call(null);
			},

			/* scrollTo method */

			scrollTo:function(id,options){
				if(functions._isDisabled.call(null)){
					functions._removeClasses.call(null);
					return;
				}
				if(id && typeof id!=="undefined"){
					functions._isInit.call(null);
					var defaults={
							layout:opt.layout,
							offset:opt.offset,
							clicked:false
						},
						options=$.extend(true,{},defaults,options);
					functions._reset.call(null);
					_axis=options.layout;
					_offset=options.offset;
					id=(id.indexOf("#")!==-1) ? id : "#"+id;
					if(functions._isValid.call(null,id) && functions._findTarget.call(null,id)){
						_trigger="scrollTo";
						_clicked=options.clicked;
						if(_clicked){
							functions._setClasses.call(null,true);
						}
						functions._scrollTo.call(null);
					}
				}
			},

			/* destroy method */

			destroy:function(){
				$(window).unbind("."+pluginPfx);
				$(document).undelegate("."+pluginPfx).removeData(pluginPfx);
				$("._"+pluginPfx+"-t").removeData(pluginPfx);
				functions._removeClasses.call(null,true);
			}
		},

		/*
		---------------
		functions
		---------------
		*/

		functions={

			/* checks if screen size ([x,y]) is below the value(s) set in disablePluginBelow option */

			_isDisabled:function(){
				var e=window,a="inner",
					val=opt.disablePluginBelow instanceof Array ? [opt.disablePluginBelow[0] || 0,opt.disablePluginBelow[1] || 0] : [opt.disablePluginBelow || 0,0];
				if(!("innerWidth" in window )){
					a="client";
					e=document.documentElement || document.body;
				}
				return e[a+"Width"]<=val[0] || e[a+"Height"]<=val[1];
			},

			/* checks if href attribute is valid */

			_isValid:function(href,hrefProp){
				if(!href){
					return;
				}
				hrefProp=(!hrefProp) ? href : hrefProp;
				var str=(hrefProp.indexOf("#/")!==-1) ? hrefProp.split("#/")[0] : hrefProp.split("#")[0],
					loc=window.location.toString().split("#")[0];
				return href!=="#" && href.indexOf("#")!==-1 && (str==="" || decodeURIComponent(str)===decodeURIComponent(loc));
			},

			/* setup selectors, target elements, basic plugin classes etc. */

			_setup:function(){
				var el=functions._highlightSelector(),i=1,tp=0;
				return $(el).each(function(){
					var $this=$(this),href=$this.attr("href"),hrefProp=$this.prop("href").baseVal || $this.prop("href");
					if(functions._isValid.call(null,href,hrefProp)){
						if(opt.excludeSelectors && $this.is(opt.excludeSelectors)){ //excluded selectors
							return;
						}
						var id=(href.indexOf("#/")!==-1) ? href.split("#/")[1] : href.split("#")[1],
							t=id.indexOf("%")!==-1 ? $(document.getElementById(id)) : $("#"+id); //fix % in selector bug
						if(t.length>0){
							if(opt.highlightByNextTarget){
								if(t!==tp){
									if(!tp){t.data(pluginPfx,{tn:"0"});}else{tp.data(pluginPfx,{tn:t});}
									tp=t;
								}
							}
							if(!t.hasClass("_"+pluginPfx+"-t")){
								t.addClass("_"+pluginPfx+"-t");
							}
							t.data(pluginPfx,{i:i});
							if(!$this.hasClass("_"+pluginPfx+"-h")){
								$this.addClass("_"+pluginPfx+"-h");
							}
							var h=functions._findHighlight.call(null,id);
							functions._setClasses.call(null,false,t,h);
							_totalInstances=i;
							i++
							if(i==$(el).length){functions._extendClasses.call(null);}
						}
					}
				});
			},

			/* returns the highlight selector */

			_highlightSelector:function(){
				return (opt.highlightSelector && opt.highlightSelector!=="") ? opt.highlightSelector : selector;
			},

			/* finds the target element */

			_findTarget:function(str){
				var val=(str.indexOf("#/")!==-1) ? str.split("#/")[1] : str.split("#")[1],
					el=val.indexOf("%")!==-1 ? $(document.getElementById(val)) : $("#"+val); //fix % in selector bug
				if(el.length<1 || el.css("position")==="fixed"){
					if(val==="top"){
						el=$("body");
					}else{
						return;
					}
				}
				_target=el;
				if(!_axis){
					_axis=opt.layout;
				}
				_offset=functions._setOffset.call(null);
				_to=[(el.offset().top-_offset[0]).toString(),(el.offset().left-_offset[1]).toString()];
				_to[0]=(_to[0]<0) ? 0 : _to[0];
				_to[1]=(_to[1]<0) ? 0 : _to[1];
				return _to;
			},

			/* sets the offset value (pixels, objects etc.) */

			_setOffset:function(){
				if(!_offset){
					_offset=(opt.offset) ? opt.offset : 0;
				}
				if(_dataOffset){
					_offset=_dataOffset;
				}
				var val,obj,y,x;
				switch(typeof _offset){
					case "object":
					case "string":
						val=[(_offset["y"]) ? _offset["y"] : _offset,(_offset["x"]) ? _offset["x"] : _offset];
						obj=[(val[0] instanceof jQuery) ? val[0] : $(val[0]),(val[1] instanceof jQuery) ? val[1] : $(val[1])];
						if(obj[0].length>0){ // js/jquery object
							y=obj[0].height();
							if(obj[0].css("position")==="fixed"){ // include position for fixed elements
								y+=obj[0][0].offsetTop;
							}
						}else if(!isNaN(parseFloat(val[0])) && isFinite(val[0])){ // numeric string
							y=parseInt(val[0]);
						}else{
							y=0; // non-existing value
						}
						if(obj[1].length>0){ // js/jquery object
							x=obj[1].width();
							if(obj[1].css("position")==="fixed"){ // include position for fixed elements
								x+=obj[1][0].offsetLeft;
							}
						}else if(!isNaN(parseFloat(val[1])) && isFinite(val[1])){ // numeric string
							x=parseInt(val[1]);
						}else{
							x=0; // non-existing value
						}
						break;
					case "function":
						val=_offset.call(null); // function (single value or array)
						if(val instanceof Array){
							y=val[0];
							x=val[1];
						}else{
							y=x=val;
						}
						break;
					default:
						y=x=parseInt(_offset); // number
				}
				return [y,x];
			},

			/* finds the element that should be highlighted */

			_findHighlight:function(id){
				var wLoc=window.location,loc=wLoc.toString().split("#")[0],locPath=wLoc.pathname;
				if(loc.indexOf("'")!==-1) loc=loc.replace("'","\\'");
				if(locPath.indexOf("'")!==-1) locPath=locPath.replace("'","\\'");
				loc=decodeURIComponent(loc);
				locPath=decodeURIComponent(locPath);
				return $("._"+pluginPfx+"-h[href='#"+id+"'],._"+pluginPfx+"-h[href='"+loc+"#"+id+"'],._"+pluginPfx+"-h[href='"+locPath+"#"+id+"'],._"+pluginPfx+"-h[href='#/"+id+"'],._"+pluginPfx+"-h[href='"+loc+"#/"+id+"'],._"+pluginPfx+"-h[href='"+locPath+"#/"+id+"']");
			},

			/* sets plugin classes */

			_setClasses:function(c,t,h){
				var cc=opt.clickedClass,tc=opt.targetClass,hc=opt.highlightClass;
				if(c && cc && cc!==""){
					$("."+cc).removeClass(cc);
					_clicked.addClass(cc);
				}else if(t && tc && tc!=="" && h && hc && hc!==""){
					if(functions._currentTarget.call(null,t)){
						t.addClass(tc);
						h.addClass(hc);
					}else{
						if(!opt.keepHighlightUntilNext || $("."+hc).length>1){
							t.removeClass(tc);
							h.removeClass(hc);
						}
					}
				}
			},

			/* extends plugin classes */

			_extendClasses:function(){
				var tc=opt.targetClass,hc=opt.highlightClass,
					$tc=$("."+tc),$hc=$("."+hc),ftc=tc+"-first",ltc=tc+"-last",fhc=hc+"-first",lhc=hc+"-last";
				$("._"+pluginPfx+"-t").removeClass(ftc+" "+ltc);
				$("._"+pluginPfx+"-h").removeClass(fhc+" "+lhc);
				if(!opt.forceSingleHighlight){
					$tc.slice(0,1).addClass(ftc).end().slice(-1).addClass(ltc);
					$hc.slice(0,1).addClass(fhc).end().slice(-1).addClass(lhc);
				}else{
					if(opt.keepHighlightUntilNext && $tc.length>1){
						$tc.slice(0,1).removeClass(tc); $hc.slice(0,1).removeClass(hc);
					}else{
						$tc.slice(1).removeClass(tc); $hc.slice(1).removeClass(hc);
					}
				}
			},

			/* removes plugin classes */

			_removeClasses:function(destroy){
				$("."+opt.clickedClass).removeClass(opt.clickedClass);
				$("."+opt.targetClass).removeClass(opt.targetClass+" "+opt.targetClass+"-first "+opt.targetClass+"-last");
				$("."+opt.highlightClass).removeClass(opt.highlightClass+" "+opt.highlightClass+"-first "+opt.highlightClass+"-last");
				if(destroy){
					$("._"+pluginPfx+"-t").removeClass("_"+pluginPfx+"-t");
					$("._"+pluginPfx+"-h").removeClass("_"+pluginPfx+"-h");
				}
			},

			/* checks if target element is in viewport */

			_currentTarget:function(t){
				var o=opt["target_"+t.data(pluginPfx).i],
					dataTarget=t.data("ps2id-target"),
					rect=dataTarget && $(dataTarget)[0] ? $(dataTarget)[0].getBoundingClientRect() : t[0].getBoundingClientRect();
				if(typeof o!=="undefined"){
					var y=t.offset().top,x=t.offset().left,
						from=(o.from) ? o.from+y : y,to=(o.to) ? o.to+y : y,
						fromX=(o.fromX) ? o.fromX+x : x,toX=(o.toX) ? o.toX+x : x;
					return(
						rect.top >= to && rect.top <= from &&
						rect.left >= toX && rect.left <= fromX
					);
				}else{
					var wh=$(window).height(),ww=$(window).width(),
						th=dataTarget ? $(dataTarget).height() : t.height(),tw=dataTarget ? $(dataTarget).width() : t.width(),
						base=1+(th/wh),
						top=base,bottom=(th<wh) ? base*(wh/th) : base,
						baseX=1+(tw/ww),
						left=baseX,right=(tw<ww) ? baseX*(ww/tw) : baseX,
						val=[rect.top <= wh/top,rect.bottom >= wh/bottom,rect.left <= ww/left,rect.right >= ww/right];
					if(opt.highlightByNextTarget){
						var tn=t.data(pluginPfx).tn;
						if(tn){
							var rectn=tn[0].getBoundingClientRect();
							if(opt.layout==="vertical"){
								val=[rect.top <= wh/2,rectn.top > wh/2,1,1];
							}else if(opt.layout==="horizontal"){
								val=[1,1,rect.left <= ww/2,rectn.left > ww/2];
							}
						}
					}
					return(val[0] && val[1] && val[2] && val[3]);
				}
			},

			/* scrolls the page */

			_scrollTo:function(){
				_speed=functions._scrollSpeed.call(null);
				_to=(opt.pageEndSmoothScroll) ? functions._pageEndSmoothScroll.call(null) : _to;
				var _scrollable=$("html,body"),
					speed=(opt.autoScrollSpeed) ? functions._autoScrollSpeed.call(null) : _speed,
					easing=(_scrollable.is(":animated")) ? opt.scrollingEasing : opt.scrollEasing,
					_t=$(window).scrollTop(),_l=$(window).scrollLeft();
				switch(_axis){
					case "horizontal":
						if(_l!=_to[1]){
							functions._callbacks.call(null,"onStart");
							_scrollable.stop().animate({scrollLeft:_to[1]},speed,easing).promise().then(function(){
								functions._callbacks.call(null,"onComplete");
							});
						}
						break;
					case "auto":
						if(_t!=_to[0] || _l!=_to[1]){
							functions._callbacks.call(null,"onStart");
							if(navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)){ // mobile fix
								var left;
								_scrollable.stop().animate({pageYOffset:_to[0],pageXOffset:_to[1]},{
									duration:speed,
									easing:easing,
									step:function(now,fx){
										if(fx.prop=='pageXOffset'){
											left=now;
										}else if(fx.prop=='pageYOffset'){
											window.scrollTo(left,now);
										}
									}
								}).promise().then(function(){
									functions._callbacks.call(null,"onComplete");
								});
							}else{
								_scrollable.stop().animate({scrollTop:_to[0],scrollLeft:_to[1]},speed,easing).promise().then(function(){
									functions._callbacks.call(null,"onComplete");
								});
							}
						}
						break;
					default:
						if(_t!=_to[0]){
							functions._callbacks.call(null,"onStart");
							_scrollable.stop().animate({scrollTop:_to[0]},speed,easing).promise().then(function(){
								functions._callbacks.call(null,"onComplete");
							});
						}
				}
			},

			/* sets end of page "smooth scrolling" position */

			_pageEndSmoothScroll:function(){
				var _dh=$(document).height(),_dw=$(document).width(),
					_wh=$(window).height(),_ww=$(window).width();
				return [((_dh-_to[0])<_wh) ? _dh-_wh : _to[0],((_dw-_to[1])<_ww) ? _dw-_ww : _to[1]];
			},

			/* sets animation speed (link-specific speed via ps2id-speed-VALUE class on link or link's parent) */

			_scrollSpeed:function(){
				var speed=opt.scrollSpeed;
				if(_clicked && _clicked.length){
					_clicked.add(_clicked.parent()).each(function(){
						var $this=$(this);
						if($this.attr("class")){
							var clickedClasses=$this.attr("class").split(" ");
							for(var index in clickedClasses){
								if(String(clickedClasses[index]).match(/^ps2id-speed-\d+$/)){
									speed=clickedClasses[index].split("ps2id-speed-")[1];
									break;
								}
							}
						}
					});
				}
				return parseInt(speed);
			},

			/* sets the auto-adjusted animation speed */

			_autoScrollSpeed:function(){
				var _t=$(window).scrollTop(),_l=$(window).scrollLeft(),
					_h=$(document).height(),_w=$(document).width(),
					val=[
						_speed+((_speed*(Math.floor((Math.abs(_to[0]-_t)/_h)*100)))/100),
						_speed+((_speed*(Math.floor((Math.abs(_to[1]-_l)/_w)*100)))/100)
					];
				return Math.max.apply(Math,val);
			},

			/* user callback functions */

			_callbacks:function(c){
				if(!opt){
					return;
				}
				this[pluginPfx]={
					trigger:_trigger,clicked:_clicked,target:_target,scrollTo:{y:_to[0],x:_to[1]}
				};
				switch(c){
					case "onStart":
						//append hash to URL/address bar
						if(opt.appendHash && window.history && window.history.pushState && _clicked && _clicked.length){
							var h="#"+_clicked.attr("href").split("#")[1];
							if(h!==window.location.hash) history.pushState("","",h);
						}
						opt.onStart.call(null,this[pluginPfx]);
						break;
					case "onComplete":
						opt.onComplete.call(null,this[pluginPfx]);
						break;
				}
			},

			/* resets/clears vars and constants */

			_reset:function(){
				_axis=_offset=_dataOffset=false;
			},

			/* checks if plugin has initialized */

			_isInit:function(){
				if(!_init){
					methods.init.apply(this);
				}
			},

			/* live fn */

			_live:function(){
				_liveTimer=setTimeout(function(){
					if(opt.live){
						if($(functions._highlightSelector()).length!==_totalInstances){
							functions._setup.call(null);
						}
					}else{
						if(_liveTimer){clearTimeout(_liveTimer);}
					}
					functions._live.call(null);
				},1000);
			},

			/* extends jquery with custom easings (as jquery ui) */

			_easing:function(){
				$.easing.easeInQuad=$.easing.easeInQuad || function(x){
					return x*x;
				};
				$.easing.easeOutQuad=$.easing.easeOutQuad || function(x){
					return 1-(1-x)*(1-x);
				};
				$.easing.easeInOutQuad=$.easing.easeInOutQuad || function(x){
					return x<0.5 ? 2*x*x : 1-Math.pow(-2*x+2,2)/2;
				};
				$.easing.easeInCubic=$.easing.easeInCubic || function(x){
					return x*x*x;
				};
				$.easing.easeOutCubic=$.easing.easeOutCubic || function(x){
					return 1-Math.pow(1-x,3);
				};
				$.easing.easeInOutCubic=$.easing.easeInOutCubic || function(x){
					return x<0.5 ? 4*x*x*x : 1-Math.pow(-2*x+2,3)/2;
				};
				$.easing.easeInQuart=$.easing.easeInQuart || function(x){
					return x*x*x*x;
				};
				$.easing.easeOutQuart=$.easing.easeOutQuart || function(x){
					return 1-Math.pow(1-x,4);
				};
				$.easing.easeInOutQuart=$.easing.easeInOutQuart || function(x){
					return x<0.5 ? 8*x*x*x*x : 1-Math.pow(-2*x+2,4)/2;
				};
				$.easing.easeInQuint=$.easing.easeInQuint || function(x){
					return x*x*x*x*x;
				};
				$.easing.easeOutQuint=$.easing.easeOutQuint || function(x){
					return 1-Math.pow(1-x,5);
				};
				$.easing.easeInOutQuint=$.easing.easeInOutQuint || function(x){
					return x<0.5 ? 16*x*x*x*x*x : 1-Math.pow(-2*x+2,5)/2;
				};
				$.easing.easeInExpo=$.easing.easeInExpo || function(x){
					return x===0 ? 0 : Math.pow(2,10*x-10);
				};
				$.easing.easeOutExpo=$.easing.easeOutExpo || function(x){
					return x===1 ? 1 : 1-Math.pow(2,-10*x);
				};
				$.easing.easeInOutExpo=$.easing.easeInOutExpo || function(x){
					return x===0 ? 0 : x===1 ? 1 : x<0.5 ? Math.pow(2,20*x-10)/2 : (2-Math.pow(2,-20*x+10))/2;
				};
				$.easing.easeInSine=$.easing.easeInSine || function(x){
					return 1-Math.cos(x*Math.PI/2);
				};
				$.easing.easeOutSine=$.easing.easeOutSine || function(x){
					return Math.sin(x*Math.PI/2);
				};
				$.easing.easeInOutSine=$.easing.easeInOutSine || function(x){
					return -(Math.cos(Math.PI*x)-1)/2;
				};
				$.easing.easeInCirc=$.easing.easeInCirc || function(x){
					return 1-Math.sqrt(1-Math.pow(x,2));
				};
				$.easing.easeOutCirc=$.easing.easeOutCirc || function(x){
					return Math.sqrt(1-Math.pow(x-1,2));
				};
				$.easing.easeInOutCirc=$.easing.easeInOutCirc || function(x){
					return x<0.5 ? (1-Math.sqrt(1-Math.pow(2*x,2)))/2 : (Math.sqrt(1-Math.pow(-2*x+2,2))+1)/2;
				};
				$.easing.easeInElastic=$.easing.easeInElastic || function(x){
					return x===0 ? 0 : x===1 ? 1 : -Math.pow(2,10*x-10)*Math.sin((x*10-10.75)*((2*Math.PI)/3));
				};
				$.easing.easeOutElastic=$.easing.easeOutElastic || function(x){
					return x===0 ? 0 : x===1 ? 1 : Math.pow(2,-10*x)*Math.sin((x*10-0.75)*((2*Math.PI)/3))+1;
				};
				$.easing.easeInOutElastic=$.easing.easeInOutElastic || function(x){
					return x===0 ? 0 : x===1 ? 1 : x<0.5 ? -(Math.pow(2,20*x-10)*Math.sin((20*x-11.125)*((2*Math.PI)/4.5)))/2 : Math.pow(2,-20*x+10)*Math.sin((20*x-11.125)*((2*Math.PI)/4.5))/2+1;
				};
				$.easing.easeInBack=$.easing.easeInBack || function(x){
					return (1.70158+1)*x*x*x-1.70158*x*x;
				};
				$.easing.easeOutBack=$.easing.easeOutBack || function(x){
					return 1+(1.70158+1)*Math.pow(x-1,3)+1.70158*Math.pow(x-1,2);
				};
				$.easing.easeInOutBack=$.easing.easeInOutBack || function(x){
					return x<0.5 ? (Math.pow(2*x,2)*(((1.70158*1.525)+1)*2*x-(1.70158*1.525)))/2 : (Math.pow(2*x-2,2)*(((1.70158*1.525)+1)*(x*2-2)+(1.70158*1.525))+2)/2;
				};
				$.easing.easeInBounce=$.easing.easeInBounce || function(x){
					return 1-__bounceOut(1-x);
				};
				$.easing.easeOutBounce=$.easing.easeOutBounce || __bounceOut;
				$.easing.easeInOutBounce=$.easing.easeInOutBounce || function(x){
					return x<0.5 ? (1-__bounceOut(1-2*x))/2 : (1+__bounceOut(2*x-1))/2;
				};
				function __bounceOut(x){
					var n1=7.5625,d1=2.75;
					if(x<1/d1){
						return n1*x*x;
					}else if(x<2/d1){
						return n1*(x-=(1.5/d1))*x+.75;
					}else if(x<2.5/d1){
						return n1*(x-=(2.25/d1))*x+.9375;
					}else{
						return n1*(x-=(2.625/d1))*x+.984375;
					}
				}
			}
		}

	/*
	---------------
	plugin setup
	---------------
	*/

	/* extend jquery with custom easings */

	functions._easing.call();

	/* plugin constructor functions */

	$.fn[pluginNS]=function(method){
		if(methods[method]){
			return methods[method].apply(this,Array.prototype.slice.call(arguments,1));
		}else if(typeof method==="object" || !method){
			return methods.init.apply(this,arguments);
		}else{
			$.error("Method "+method+" does not exist");
		}
	};
	$[pluginNS]=function(method){
		if(methods[method]){
			return methods[method].apply(this,Array.prototype.slice.call(arguments,1));
		}else if(typeof method==="object" || !method){
			return methods.init.apply(this,arguments);
		}else{
			$.error("Method "+method+" does not exist");
		}
	};

	/*
	allow setting plugin default options.
	example: $.plugin_name.defaults.option_name="option_value";
	*/

	$[pluginNS].defaults=defaults;

})(jQuery,window,document);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ2ZW5kb3Ivc2luZ2xlcGFnZW5hdi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuPT0gUGFnZSBzY3JvbGwgdG8gaWQgPT1cblZlcnNpb246IDEuNi4zXG5QbHVnaW4gVVJJOiBodHRwOi8vbWFub3MubWFsaWh1LmdyL3BhZ2Utc2Nyb2xsLXRvLWlkL1xuQXV0aG9yOiBtYWxpaHVcbkF1dGhvciBVUkk6IGh0dHA6Ly9tYW5vcy5tYWxpaHUuZ3JcbkxpY2Vuc2U6IE1JVCBMaWNlbnNlIChNSVQpXG4qL1xuXG4vKlxuQ29weXJpZ2h0IDIwMTMgIG1hbGlodSAgKGVtYWlsOiBtYW5vc0BtYWxpaHUuZ3IpXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS5cbiovXG5cbjsoZnVuY3Rpb24oJCx3aW5kb3csZG9jdW1lbnQsdW5kZWZpbmVkKXtcblxuXHQvKiBwbHVnaW4gbmFtZXNwYWNlLCBwcmVmaXgsIGRlZmF1bHQgc2VsZWN0b3IocykgKi9cblxuXHR2YXIgcGx1Z2luTlM9XCJtUGFnZVNjcm9sbDJpZFwiLFxuXHRcdHBsdWdpblBmeD1cIm1QUzJpZFwiLFxuXHRcdGRlZmF1bHRTZWxlY3Rvcj1cIi5tX1BhZ2VTY3JvbGwyaWQsYVtyZWx+PSdtX1BhZ2VTY3JvbGwyaWQnXSwucGFnZS1zY3JvbGwtdG8taWQsYVtyZWx+PSdwYWdlLXNjcm9sbC10by1pZCddLC5fcHMyaWRcIixcblxuXHRcdC8qIGRlZmF1bHQgb3B0aW9ucyAqL1xuXG5cdFx0ZGVmYXVsdHM9e1xuXHRcdFx0Lyogc2Nyb2xsIGFuaW1hdGlvbiBzcGVlZCBpbiBtaWxsaXNlY29uZHM6IEludGVnZXIgKi9cblx0XHRcdHNjcm9sbFNwZWVkOjEwMDAsXG5cdFx0XHQvKiBhdXRvLWFkanVzdCBhbmltYXRpb24gc3BlZWQgKGFjY29yZGluZyB0byB0YXJnZXQgZWxlbWVudCBwb3NpdGlvbiBhbmQgd2luZG93IHNjcm9sbCk6IEJvb2xlYW4gKi9cblx0XHRcdGF1dG9TY3JvbGxTcGVlZDp0cnVlLFxuXHRcdFx0Lyogc2Nyb2xsIGFuaW1hdGlvbiBlYXNpbmcgd2hlbiBwYWdlIGlzIGlkbGU6IFN0cmluZyAqL1xuXHRcdFx0c2Nyb2xsRWFzaW5nOlwiZWFzZUluT3V0UXVpbnRcIixcblx0XHRcdC8qIHNjcm9sbCBhbmltYXRpb24gZWFzaW5nIHdoaWxlIHBhZ2UgaXMgc2Nyb2xsaW5nOiBTdHJpbmcgKi9cblx0XHRcdHNjcm9sbGluZ0Vhc2luZzpcImVhc2VPdXRRdWludFwiLFxuXHRcdFx0LyogZW5kIG9mIHBhZ2UgXCJzbW9vdGggc2Nyb2xsaW5nXCIgKGF1dG8tYWRqdXN0IHRoZSBzY3JvbGwtdG8gcG9zaXRpb24gd2hlbiBib3R0b20gZWxlbWVudHMgYXJlIHRvbyBzaG9ydCk6IEJvb2xlYW4gKi9cblx0XHRcdHBhZ2VFbmRTbW9vdGhTY3JvbGw6dHJ1ZSxcblx0XHRcdC8qXG5cdFx0XHRwYWdlIGxheW91dCBkZWZpbmVzIHNjcm9sbGluZyBkaXJlY3Rpb246IFN0cmluZ1xuXHRcdFx0dmFsdWVzOiBcInZlcnRpY2FsXCIsIFwiaG9yaXpvbnRhbFwiLCBcImF1dG9cIlxuXHRcdFx0Ki9cblx0XHRcdGxheW91dDpcInZlcnRpY2FsXCIsXG5cdFx0XHQvKiBleHRyYSBzcGFjZSBpbiBwaXhlbHMgZm9yIHRoZSB0YXJnZXQgZWxlbWVudCBwb3NpdGlvbjogSW50ZWdlciAqL1xuXHRcdFx0b2Zmc2V0OjcwLFxuXHRcdFx0LyogaGlnaGxpZ2h0IHRoZSBtYWluL2RlZmF1bHQgc2VsZWN0b3JzIG9yIGluc2VydCBhIGRpZmZlcmVudCBzZXQ6IEJvb2xlYW4sIFN0cmluZyAqL1xuXHRcdFx0aGlnaGxpZ2h0U2VsZWN0b3I6ZmFsc2UsXG5cdFx0XHQvKiBjbGFzcyBvZiB0aGUgY2xpY2tlZCBlbGVtZW50OiBTdHJpbmcgKi9cblx0XHRcdGNsaWNrZWRDbGFzczpwbHVnaW5QZngrXCItY2xpY2tlZFwiLFxuXHRcdFx0LyogY2xhc3Mgb2YgdGhlIGN1cnJlbnQgdGFyZ2V0IGVsZW1lbnQ6IFN0cmluZyAqL1xuXHRcdFx0dGFyZ2V0Q2xhc3M6cGx1Z2luUGZ4K1wiLXRhcmdldFwiLFxuXHRcdFx0LyogY2xhc3Mgb2YgdGhlIGhpZ2hsaWdodGVkIGVsZW1lbnQ6IFN0cmluZyAqL1xuXHRcdFx0aGlnaGxpZ2h0Q2xhc3M6cGx1Z2luUGZ4K1wiLWhpZ2hsaWdodFwiLFxuXHRcdFx0LyogZm9yY2UgYSBzaW5nbGUgaGlnaGxpZ2h0ZWQgZWxlbWVudCBlYWNoIHRpbWU6IEJvb2xlYW4gKi9cblx0XHRcdGZvcmNlU2luZ2xlSGlnaGxpZ2h0OmZhbHNlLFxuXHRcdFx0Lyoga2VlcCBlbGVtZW50IGhpZ2hsaWdodGVkIHVudGlsIG5leHQgKG9uZSBlbGVtZW50IGFsd2F5cyBzdGF5cyBoaWdobGlnaHRlZCk6IGJvb2xlYW4gKi9cblx0XHRcdGtlZXBIaWdobGlnaHRVbnRpbE5leHQ6ZmFsc2UsXG5cdFx0XHQvKiBoaWdobGlnaHQgZWxlbWVudHMgYWNjb3JkaW5nIHRvIHRoZWlyIHRhcmdldCBhbmQgbmV4dCB0YXJnZXQgcG9zaXRpb24gKHVzZWZ1bCB3aGVuIHRhcmdldHMgaGF2ZSB6ZXJvIGRpbWVuc2lvbnMpLiBOb24gXCJhdXRvXCIgbGF5b3V0cyBvbmx5OiBib29sZWFuICovXG5cdFx0XHRoaWdobGlnaHRCeU5leHRUYXJnZXQ6ZmFsc2UsXG5cdFx0XHQvKiBkaXNhYmxlIHBsdWdpbiBiZWxvdyBbeCx5XSBzY3JlZW4gc2l6ZTogYm9vbGVhbiwgaW50ZWdlciwgYXJyYXkgKFt4LHldKSAqL1xuXHRcdFx0ZGlzYWJsZVBsdWdpbkJlbG93OmZhbHNlLFxuXHRcdFx0LyogZW5hYmxlL2Rpc2FibGUgY2xpY2sgZXZlbnRzIGZvciBhbGwgc2VsZWN0b3JzICovXG5cdFx0XHRjbGlja0V2ZW50czp0cnVlLFxuXHRcdFx0LyogYXBwZW5kIGhhc2ggdG8gVVJML2FkZHJlc3MgYmFyICovXG5cdFx0XHRhcHBlbmRIYXNoOmZhbHNlLFxuXHRcdFx0LyogdXNlciBjYWxsYmFjayBmdW5jdGlvbnM6IGZuICovXG5cdFx0XHRvblN0YXJ0OmZ1bmN0aW9uKCl7fSxcblx0XHRcdG9uQ29tcGxldGU6ZnVuY3Rpb24oKXt9LFxuXHRcdFx0LyogZW5hYmxlL2Rpc2FibGUgdGhlIGRlZmF1bHQgc2VsZWN0b3I6IEJvb2xlYW4gKi9cblx0XHRcdGRlZmF1bHRTZWxlY3RvcjpmYWxzZSxcblx0XHRcdC8qIGhpZ2hsaWdodCBlbGVtZW50cyBub3cgYW5kIGluIHRoZSBmdXR1cmUgKi9cblx0XHRcdGxpdmU6dHJ1ZSxcblx0XHRcdC8qIHNldCBzcGVjaWZpYyBsaXZlIHNlbGVjdG9yKHMpOiBTdHJpbmcgKi9cblx0XHRcdGxpdmVTZWxlY3RvcjpmYWxzZSxcblx0XHRcdC8qIHNldCBzcGVjaWZpYyBzZWxlY3RvcihzKSB0aGF0IHdpbGwgYmUgZXhjbHVkZWQgZnJvbSBiZWluZyBoYW5kbGVkIGJ5IHRoZSBwbHVnaW46IFN0cmluZyAqL1xuXHRcdFx0ZXhjbHVkZVNlbGVjdG9yczpmYWxzZVxuXHRcdH0sXG5cblx0XHQvKiB2YXJzLCBjb25zdGFudHMgKi9cblxuXHRcdHNlbGVjdG9yLG9wdCxfaW5pdCxfdHJpZ2dlcixfY2xpY2tlZCxfdGFyZ2V0LF90byxfYXhpcyxfb2Zmc2V0LF9kYXRhT2Zmc2V0LF90b3RhbEluc3RhbmNlcz0wLF9saXZlVGltZXIsX3NwZWVkLFxuXG5cdFx0Lypcblx0XHQtLS0tLS0tLS0tLS0tLS1cblx0XHRtZXRob2RzXG5cdFx0LS0tLS0tLS0tLS0tLS0tXG5cdFx0Ki9cblxuXHRcdG1ldGhvZHM9e1xuXG5cdFx0XHQvKiBwbHVnaW4gaW5pdGlhbGl6YXRpb24gbWV0aG9kICovXG5cblx0XHRcdGluaXQ6ZnVuY3Rpb24ob3B0aW9ucyl7XG5cblx0XHRcdFx0LyogZXh0ZW5kIG9wdGlvbnMsIHN0b3JlIGVhY2ggb3B0aW9uIGluIGpxdWVyeSBkYXRhICovXG5cblx0XHRcdFx0dmFyIG9wdGlvbnM9JC5leHRlbmQodHJ1ZSx7fSxkZWZhdWx0cyxvcHRpb25zKTtcblxuXHRcdFx0XHQkKGRvY3VtZW50KS5kYXRhKHBsdWdpblBmeCxvcHRpb25zKTtcblx0XHRcdFx0b3B0PSQoZG9jdW1lbnQpLmRhdGEocGx1Z2luUGZ4KTtcblxuXHRcdFx0XHQvKiBjaGVjay9zZXQganF1ZXJ5IChkZXByZWNhdGVkKSBzZWxlY3RvciBwcm9wZXJ0eSBpZiBub3QgZGVmaW5lZCAqL1xuXHRcdFx0XHRpZighdGhpcy5zZWxlY3Rvcil7XG5cdFx0XHRcdFx0dmFyIHNlbGVjdG9yQ2xhc3M9XCJfX1wiK3BsdWdpblBmeDtcblx0XHRcdFx0XHR0aGlzLmVhY2goZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdHZhciBlbD0kKHRoaXMpO1xuXHRcdFx0XHRcdFx0aWYoIWVsLmhhc0NsYXNzKHNlbGVjdG9yQ2xhc3MpKXtcblx0XHRcdFx0XHRcdFx0ZWwuYWRkQ2xhc3Moc2VsZWN0b3JDbGFzcyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dGhpcy5zZWxlY3Rvcj1cIi5cIitzZWxlY3RvckNsYXNzO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LyogbGl2ZSBzZWxlY3RvciAqL1xuXG5cdFx0XHRcdGlmKG9wdC5saXZlU2VsZWN0b3IpIHRoaXMuc2VsZWN0b3IrPVwiLFwiK29wdC5saXZlU2VsZWN0b3I7XG5cblx0XHRcdFx0Lyogc2V0IHNlbGVjdG9yICovXG5cblx0XHRcdFx0c2VsZWN0b3I9KCFzZWxlY3RvcikgPyB0aGlzLnNlbGVjdG9yIDogc2VsZWN0b3IrXCIsXCIrdGhpcy5zZWxlY3RvcjtcblxuXHRcdFx0XHRpZihvcHQuZGVmYXVsdFNlbGVjdG9yKXtcblx0XHRcdFx0XHRpZih0eXBlb2YgJChzZWxlY3RvcikhPT1cIm9iamVjdFwiIHx8ICQoc2VsZWN0b3IpLmxlbmd0aD09PTApe1xuXHRcdFx0XHRcdFx0c2VsZWN0b3I9ZGVmYXVsdFNlbGVjdG9yO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8qIHBsdWdpbiBldmVudHMgKi9cblxuXHRcdFx0XHRpZihvcHQuY2xpY2tFdmVudHMpe1xuXHRcdFx0XHRcdCQoZG9jdW1lbnQpXG5cblx0XHRcdFx0XHRcdC51bmRlbGVnYXRlKFwiLlwiK3BsdWdpblBmeClcblxuXHRcdFx0XHRcdFx0LmRlbGVnYXRlKHNlbGVjdG9yLFwiY2xpY2suXCIrcGx1Z2luUGZ4LGZ1bmN0aW9uKGUpe1xuXHRcdFx0XHRcdFx0XHRpZihmdW5jdGlvbnMuX2lzRGlzYWJsZWQuY2FsbChudWxsKSl7XG5cdFx0XHRcdFx0XHRcdFx0ZnVuY3Rpb25zLl9yZW1vdmVDbGFzc2VzLmNhbGwobnVsbCk7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHZhciAkdGhpcz0kKHRoaXMpLFxuXHRcdFx0XHRcdFx0XHRcdGhyZWY9JHRoaXMuYXR0cihcImhyZWZcIiksXG5cdFx0XHRcdFx0XHRcdFx0aHJlZlByb3A9JHRoaXMucHJvcChcImhyZWZcIikuYmFzZVZhbCB8fCAkdGhpcy5wcm9wKFwiaHJlZlwiKTtcblx0XHRcdFx0XHRcdFx0aWYob3B0LmV4Y2x1ZGVTZWxlY3RvcnMgJiYgJHRoaXMuaXMob3B0LmV4Y2x1ZGVTZWxlY3RvcnMpKXsgLy9leGNsdWRlZCBzZWxlY3RvcnNcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYoaHJlZiAmJiBocmVmLmluZGV4T2YoXCIjL1wiKSE9PS0xKXtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0ZnVuY3Rpb25zLl9yZXNldC5jYWxsKG51bGwpO1xuXHRcdFx0XHRcdFx0XHRfZGF0YU9mZnNldD0kdGhpcy5kYXRhKFwicHMyaWQtb2Zmc2V0XCIpIHx8IDA7XG5cdFx0XHRcdFx0XHRcdGlmKGZ1bmN0aW9ucy5faXNWYWxpZC5jYWxsKG51bGwsaHJlZixocmVmUHJvcCkgJiYgZnVuY3Rpb25zLl9maW5kVGFyZ2V0LmNhbGwobnVsbCxocmVmKSl7XG5cdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdF90cmlnZ2VyPVwic2VsZWN0b3JcIjtcblx0XHRcdFx0XHRcdFx0XHRfY2xpY2tlZD0kdGhpcztcblx0XHRcdFx0XHRcdFx0XHRmdW5jdGlvbnMuX3NldENsYXNzZXMuY2FsbChudWxsLHRydWUpO1xuXHRcdFx0XHRcdFx0XHRcdGZ1bmN0aW9ucy5fc2Nyb2xsVG8uY2FsbChudWxsKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQkKHdpbmRvdylcblxuXHRcdFx0XHRcdC51bmJpbmQoXCIuXCIrcGx1Z2luUGZ4KVxuXG5cdFx0XHRcdFx0LmJpbmQoXCJzY3JvbGwuXCIrcGx1Z2luUGZ4K1wiIHJlc2l6ZS5cIitwbHVnaW5QZngsZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdGlmKGZ1bmN0aW9ucy5faXNEaXNhYmxlZC5jYWxsKG51bGwpKXtcblx0XHRcdFx0XHRcdFx0ZnVuY3Rpb25zLl9yZW1vdmVDbGFzc2VzLmNhbGwobnVsbCk7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHZhciB0YXJnZXRzPSQoXCIuX1wiK3BsdWdpblBmeCtcIi10XCIpO1xuXHRcdFx0XHRcdFx0dGFyZ2V0cy5lYWNoKGZ1bmN0aW9uKGkpe1xuXHRcdFx0XHRcdFx0XHR2YXIgdD0kKHRoaXMpLGlkPXQuYXR0cihcImlkXCIpLFxuXHRcdFx0XHRcdFx0XHRcdGg9ZnVuY3Rpb25zLl9maW5kSGlnaGxpZ2h0LmNhbGwobnVsbCxpZCk7XG5cdFx0XHRcdFx0XHRcdGZ1bmN0aW9ucy5fc2V0Q2xhc3Nlcy5jYWxsKG51bGwsZmFsc2UsdCxoKTtcblx0XHRcdFx0XHRcdFx0aWYoaT09dGFyZ2V0cy5sZW5ndGgtMSl7ZnVuY3Rpb25zLl9leHRlbmRDbGFzc2VzLmNhbGwobnVsbCk7fVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0LyogcGx1Z2luIGhhcyBpbml0aWFsaXplZCAqL1xuXG5cdFx0XHRcdF9pbml0PXRydWU7XG5cblx0XHRcdFx0Lyogc2V0dXAgc2VsZWN0b3JzLCB0YXJnZXQgZWxlbWVudHMsIGJhc2ljIHBsdWdpbiBjbGFzc2VzIGV0Yy4gKi9cblxuXHRcdFx0XHRmdW5jdGlvbnMuX3NldHVwLmNhbGwobnVsbCk7XG5cblx0XHRcdFx0Lypcblx0XHRcdFx0bW9uaXRvciBmb3IgZWxlbWVudHMgbWF0Y2hpbmcgdGhlIGN1cnJlbnQgaGlnaGxpZ2h0IHNlbGVjdG9yIGFuZCBjYWxsIHBsdWdpbiBzZXR1cCB3aGVuIGZvdW5kIChub3cgYW5kIGluIHRoZSBmdXR1cmUpXG5cdFx0XHRcdHRvIG1hbnVhbGx5IGVuYWJsZS9kaXNhYmxlOiAkKGRvY3VtZW50KS5kYXRhKFwibVBTMmlkXCIpLmxpdmU9Ym9vbGVhblxuXHRcdFx0XHQqL1xuXG5cdFx0XHRcdGZ1bmN0aW9ucy5fbGl2ZS5jYWxsKG51bGwpO1xuXHRcdFx0fSxcblxuXHRcdFx0Lyogc2Nyb2xsVG8gbWV0aG9kICovXG5cblx0XHRcdHNjcm9sbFRvOmZ1bmN0aW9uKGlkLG9wdGlvbnMpe1xuXHRcdFx0XHRpZihmdW5jdGlvbnMuX2lzRGlzYWJsZWQuY2FsbChudWxsKSl7XG5cdFx0XHRcdFx0ZnVuY3Rpb25zLl9yZW1vdmVDbGFzc2VzLmNhbGwobnVsbCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKGlkICYmIHR5cGVvZiBpZCE9PVwidW5kZWZpbmVkXCIpe1xuXHRcdFx0XHRcdGZ1bmN0aW9ucy5faXNJbml0LmNhbGwobnVsbCk7XG5cdFx0XHRcdFx0dmFyIGRlZmF1bHRzPXtcblx0XHRcdFx0XHRcdFx0bGF5b3V0Om9wdC5sYXlvdXQsXG5cdFx0XHRcdFx0XHRcdG9mZnNldDpvcHQub2Zmc2V0LFxuXHRcdFx0XHRcdFx0XHRjbGlja2VkOmZhbHNlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0b3B0aW9ucz0kLmV4dGVuZCh0cnVlLHt9LGRlZmF1bHRzLG9wdGlvbnMpO1xuXHRcdFx0XHRcdGZ1bmN0aW9ucy5fcmVzZXQuY2FsbChudWxsKTtcblx0XHRcdFx0XHRfYXhpcz1vcHRpb25zLmxheW91dDtcblx0XHRcdFx0XHRfb2Zmc2V0PW9wdGlvbnMub2Zmc2V0O1xuXHRcdFx0XHRcdGlkPShpZC5pbmRleE9mKFwiI1wiKSE9PS0xKSA/IGlkIDogXCIjXCIraWQ7XG5cdFx0XHRcdFx0aWYoZnVuY3Rpb25zLl9pc1ZhbGlkLmNhbGwobnVsbCxpZCkgJiYgZnVuY3Rpb25zLl9maW5kVGFyZ2V0LmNhbGwobnVsbCxpZCkpe1xuXHRcdFx0XHRcdFx0X3RyaWdnZXI9XCJzY3JvbGxUb1wiO1xuXHRcdFx0XHRcdFx0X2NsaWNrZWQ9b3B0aW9ucy5jbGlja2VkO1xuXHRcdFx0XHRcdFx0aWYoX2NsaWNrZWQpe1xuXHRcdFx0XHRcdFx0XHRmdW5jdGlvbnMuX3NldENsYXNzZXMuY2FsbChudWxsLHRydWUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZnVuY3Rpb25zLl9zY3JvbGxUby5jYWxsKG51bGwpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0LyogZGVzdHJveSBtZXRob2QgKi9cblxuXHRcdFx0ZGVzdHJveTpmdW5jdGlvbigpe1xuXHRcdFx0XHQkKHdpbmRvdykudW5iaW5kKFwiLlwiK3BsdWdpblBmeCk7XG5cdFx0XHRcdCQoZG9jdW1lbnQpLnVuZGVsZWdhdGUoXCIuXCIrcGx1Z2luUGZ4KS5yZW1vdmVEYXRhKHBsdWdpblBmeCk7XG5cdFx0XHRcdCQoXCIuX1wiK3BsdWdpblBmeCtcIi10XCIpLnJlbW92ZURhdGEocGx1Z2luUGZ4KTtcblx0XHRcdFx0ZnVuY3Rpb25zLl9yZW1vdmVDbGFzc2VzLmNhbGwobnVsbCx0cnVlKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Lypcblx0XHQtLS0tLS0tLS0tLS0tLS1cblx0XHRmdW5jdGlvbnNcblx0XHQtLS0tLS0tLS0tLS0tLS1cblx0XHQqL1xuXG5cdFx0ZnVuY3Rpb25zPXtcblxuXHRcdFx0LyogY2hlY2tzIGlmIHNjcmVlbiBzaXplIChbeCx5XSkgaXMgYmVsb3cgdGhlIHZhbHVlKHMpIHNldCBpbiBkaXNhYmxlUGx1Z2luQmVsb3cgb3B0aW9uICovXG5cblx0XHRcdF9pc0Rpc2FibGVkOmZ1bmN0aW9uKCl7XG5cdFx0XHRcdHZhciBlPXdpbmRvdyxhPVwiaW5uZXJcIixcblx0XHRcdFx0XHR2YWw9b3B0LmRpc2FibGVQbHVnaW5CZWxvdyBpbnN0YW5jZW9mIEFycmF5ID8gW29wdC5kaXNhYmxlUGx1Z2luQmVsb3dbMF0gfHwgMCxvcHQuZGlzYWJsZVBsdWdpbkJlbG93WzFdIHx8IDBdIDogW29wdC5kaXNhYmxlUGx1Z2luQmVsb3cgfHwgMCwwXTtcblx0XHRcdFx0aWYoIShcImlubmVyV2lkdGhcIiBpbiB3aW5kb3cgKSl7XG5cdFx0XHRcdFx0YT1cImNsaWVudFwiO1xuXHRcdFx0XHRcdGU9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IGRvY3VtZW50LmJvZHk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGVbYStcIldpZHRoXCJdPD12YWxbMF0gfHwgZVthK1wiSGVpZ2h0XCJdPD12YWxbMV07XG5cdFx0XHR9LFxuXG5cdFx0XHQvKiBjaGVja3MgaWYgaHJlZiBhdHRyaWJ1dGUgaXMgdmFsaWQgKi9cblxuXHRcdFx0X2lzVmFsaWQ6ZnVuY3Rpb24oaHJlZixocmVmUHJvcCl7XG5cdFx0XHRcdGlmKCFocmVmKXtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0aHJlZlByb3A9KCFocmVmUHJvcCkgPyBocmVmIDogaHJlZlByb3A7XG5cdFx0XHRcdHZhciBzdHI9KGhyZWZQcm9wLmluZGV4T2YoXCIjL1wiKSE9PS0xKSA/IGhyZWZQcm9wLnNwbGl0KFwiIy9cIilbMF0gOiBocmVmUHJvcC5zcGxpdChcIiNcIilbMF0sXG5cdFx0XHRcdFx0bG9jPXdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpLnNwbGl0KFwiI1wiKVswXTtcblx0XHRcdFx0cmV0dXJuIGhyZWYhPT1cIiNcIiAmJiBocmVmLmluZGV4T2YoXCIjXCIpIT09LTEgJiYgKHN0cj09PVwiXCIgfHwgZGVjb2RlVVJJQ29tcG9uZW50KHN0cik9PT1kZWNvZGVVUklDb21wb25lbnQobG9jKSk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvKiBzZXR1cCBzZWxlY3RvcnMsIHRhcmdldCBlbGVtZW50cywgYmFzaWMgcGx1Z2luIGNsYXNzZXMgZXRjLiAqL1xuXG5cdFx0XHRfc2V0dXA6ZnVuY3Rpb24oKXtcblx0XHRcdFx0dmFyIGVsPWZ1bmN0aW9ucy5faGlnaGxpZ2h0U2VsZWN0b3IoKSxpPTEsdHA9MDtcblx0XHRcdFx0cmV0dXJuICQoZWwpLmVhY2goZnVuY3Rpb24oKXtcblx0XHRcdFx0XHR2YXIgJHRoaXM9JCh0aGlzKSxocmVmPSR0aGlzLmF0dHIoXCJocmVmXCIpLGhyZWZQcm9wPSR0aGlzLnByb3AoXCJocmVmXCIpLmJhc2VWYWwgfHwgJHRoaXMucHJvcChcImhyZWZcIik7XG5cdFx0XHRcdFx0aWYoZnVuY3Rpb25zLl9pc1ZhbGlkLmNhbGwobnVsbCxocmVmLGhyZWZQcm9wKSl7XG5cdFx0XHRcdFx0XHRpZihvcHQuZXhjbHVkZVNlbGVjdG9ycyAmJiAkdGhpcy5pcyhvcHQuZXhjbHVkZVNlbGVjdG9ycykpeyAvL2V4Y2x1ZGVkIHNlbGVjdG9yc1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR2YXIgaWQ9KGhyZWYuaW5kZXhPZihcIiMvXCIpIT09LTEpID8gaHJlZi5zcGxpdChcIiMvXCIpWzFdIDogaHJlZi5zcGxpdChcIiNcIilbMV0sXG5cdFx0XHRcdFx0XHRcdHQ9aWQuaW5kZXhPZihcIiVcIikhPT0tMSA/ICQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKSA6ICQoXCIjXCIraWQpOyAvL2ZpeCAlIGluIHNlbGVjdG9yIGJ1Z1xuXHRcdFx0XHRcdFx0aWYodC5sZW5ndGg+MCl7XG5cdFx0XHRcdFx0XHRcdGlmKG9wdC5oaWdobGlnaHRCeU5leHRUYXJnZXQpe1xuXHRcdFx0XHRcdFx0XHRcdGlmKHQhPT10cCl7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZighdHApe3QuZGF0YShwbHVnaW5QZngse3RuOlwiMFwifSk7fWVsc2V7dHAuZGF0YShwbHVnaW5QZngse3RuOnR9KTt9XG5cdFx0XHRcdFx0XHRcdFx0XHR0cD10O1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZighdC5oYXNDbGFzcyhcIl9cIitwbHVnaW5QZngrXCItdFwiKSl7XG5cdFx0XHRcdFx0XHRcdFx0dC5hZGRDbGFzcyhcIl9cIitwbHVnaW5QZngrXCItdFwiKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR0LmRhdGEocGx1Z2luUGZ4LHtpOml9KTtcblx0XHRcdFx0XHRcdFx0aWYoISR0aGlzLmhhc0NsYXNzKFwiX1wiK3BsdWdpblBmeCtcIi1oXCIpKXtcblx0XHRcdFx0XHRcdFx0XHQkdGhpcy5hZGRDbGFzcyhcIl9cIitwbHVnaW5QZngrXCItaFwiKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR2YXIgaD1mdW5jdGlvbnMuX2ZpbmRIaWdobGlnaHQuY2FsbChudWxsLGlkKTtcblx0XHRcdFx0XHRcdFx0ZnVuY3Rpb25zLl9zZXRDbGFzc2VzLmNhbGwobnVsbCxmYWxzZSx0LGgpO1xuXHRcdFx0XHRcdFx0XHRfdG90YWxJbnN0YW5jZXM9aTtcblx0XHRcdFx0XHRcdFx0aSsrXG5cdFx0XHRcdFx0XHRcdGlmKGk9PSQoZWwpLmxlbmd0aCl7ZnVuY3Rpb25zLl9leHRlbmRDbGFzc2VzLmNhbGwobnVsbCk7fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvKiByZXR1cm5zIHRoZSBoaWdobGlnaHQgc2VsZWN0b3IgKi9cblxuXHRcdFx0X2hpZ2hsaWdodFNlbGVjdG9yOmZ1bmN0aW9uKCl7XG5cdFx0XHRcdHJldHVybiAob3B0LmhpZ2hsaWdodFNlbGVjdG9yICYmIG9wdC5oaWdobGlnaHRTZWxlY3RvciE9PVwiXCIpID8gb3B0LmhpZ2hsaWdodFNlbGVjdG9yIDogc2VsZWN0b3I7XG5cdFx0XHR9LFxuXG5cdFx0XHQvKiBmaW5kcyB0aGUgdGFyZ2V0IGVsZW1lbnQgKi9cblxuXHRcdFx0X2ZpbmRUYXJnZXQ6ZnVuY3Rpb24oc3RyKXtcblx0XHRcdFx0dmFyIHZhbD0oc3RyLmluZGV4T2YoXCIjL1wiKSE9PS0xKSA/IHN0ci5zcGxpdChcIiMvXCIpWzFdIDogc3RyLnNwbGl0KFwiI1wiKVsxXSxcblx0XHRcdFx0XHRlbD12YWwuaW5kZXhPZihcIiVcIikhPT0tMSA/ICQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodmFsKSkgOiAkKFwiI1wiK3ZhbCk7IC8vZml4ICUgaW4gc2VsZWN0b3IgYnVnXG5cdFx0XHRcdGlmKGVsLmxlbmd0aDwxIHx8IGVsLmNzcyhcInBvc2l0aW9uXCIpPT09XCJmaXhlZFwiKXtcblx0XHRcdFx0XHRpZih2YWw9PT1cInRvcFwiKXtcblx0XHRcdFx0XHRcdGVsPSQoXCJib2R5XCIpO1xuXHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRfdGFyZ2V0PWVsO1xuXHRcdFx0XHRpZighX2F4aXMpe1xuXHRcdFx0XHRcdF9heGlzPW9wdC5sYXlvdXQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0X29mZnNldD1mdW5jdGlvbnMuX3NldE9mZnNldC5jYWxsKG51bGwpO1xuXHRcdFx0XHRfdG89WyhlbC5vZmZzZXQoKS50b3AtX29mZnNldFswXSkudG9TdHJpbmcoKSwoZWwub2Zmc2V0KCkubGVmdC1fb2Zmc2V0WzFdKS50b1N0cmluZygpXTtcblx0XHRcdFx0X3RvWzBdPShfdG9bMF08MCkgPyAwIDogX3RvWzBdO1xuXHRcdFx0XHRfdG9bMV09KF90b1sxXTwwKSA/IDAgOiBfdG9bMV07XG5cdFx0XHRcdHJldHVybiBfdG87XG5cdFx0XHR9LFxuXG5cdFx0XHQvKiBzZXRzIHRoZSBvZmZzZXQgdmFsdWUgKHBpeGVscywgb2JqZWN0cyBldGMuKSAqL1xuXG5cdFx0XHRfc2V0T2Zmc2V0OmZ1bmN0aW9uKCl7XG5cdFx0XHRcdGlmKCFfb2Zmc2V0KXtcblx0XHRcdFx0XHRfb2Zmc2V0PShvcHQub2Zmc2V0KSA/IG9wdC5vZmZzZXQgOiAwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKF9kYXRhT2Zmc2V0KXtcblx0XHRcdFx0XHRfb2Zmc2V0PV9kYXRhT2Zmc2V0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciB2YWwsb2JqLHkseDtcblx0XHRcdFx0c3dpdGNoKHR5cGVvZiBfb2Zmc2V0KXtcblx0XHRcdFx0XHRjYXNlIFwib2JqZWN0XCI6XG5cdFx0XHRcdFx0Y2FzZSBcInN0cmluZ1wiOlxuXHRcdFx0XHRcdFx0dmFsPVsoX29mZnNldFtcInlcIl0pID8gX29mZnNldFtcInlcIl0gOiBfb2Zmc2V0LChfb2Zmc2V0W1wieFwiXSkgPyBfb2Zmc2V0W1wieFwiXSA6IF9vZmZzZXRdO1xuXHRcdFx0XHRcdFx0b2JqPVsodmFsWzBdIGluc3RhbmNlb2YgalF1ZXJ5KSA/IHZhbFswXSA6ICQodmFsWzBdKSwodmFsWzFdIGluc3RhbmNlb2YgalF1ZXJ5KSA/IHZhbFsxXSA6ICQodmFsWzFdKV07XG5cdFx0XHRcdFx0XHRpZihvYmpbMF0ubGVuZ3RoPjApeyAvLyBqcy9qcXVlcnkgb2JqZWN0XG5cdFx0XHRcdFx0XHRcdHk9b2JqWzBdLmhlaWdodCgpO1xuXHRcdFx0XHRcdFx0XHRpZihvYmpbMF0uY3NzKFwicG9zaXRpb25cIik9PT1cImZpeGVkXCIpeyAvLyBpbmNsdWRlIHBvc2l0aW9uIGZvciBmaXhlZCBlbGVtZW50c1xuXHRcdFx0XHRcdFx0XHRcdHkrPW9ialswXVswXS5vZmZzZXRUb3A7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1lbHNlIGlmKCFpc05hTihwYXJzZUZsb2F0KHZhbFswXSkpICYmIGlzRmluaXRlKHZhbFswXSkpeyAvLyBudW1lcmljIHN0cmluZ1xuXHRcdFx0XHRcdFx0XHR5PXBhcnNlSW50KHZhbFswXSk7XG5cdFx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdFx0eT0wOyAvLyBub24tZXhpc3RpbmcgdmFsdWVcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmKG9ialsxXS5sZW5ndGg+MCl7IC8vIGpzL2pxdWVyeSBvYmplY3Rcblx0XHRcdFx0XHRcdFx0eD1vYmpbMV0ud2lkdGgoKTtcblx0XHRcdFx0XHRcdFx0aWYob2JqWzFdLmNzcyhcInBvc2l0aW9uXCIpPT09XCJmaXhlZFwiKXsgLy8gaW5jbHVkZSBwb3NpdGlvbiBmb3IgZml4ZWQgZWxlbWVudHNcblx0XHRcdFx0XHRcdFx0XHR4Kz1vYmpbMV1bMF0ub2Zmc2V0TGVmdDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fWVsc2UgaWYoIWlzTmFOKHBhcnNlRmxvYXQodmFsWzFdKSkgJiYgaXNGaW5pdGUodmFsWzFdKSl7IC8vIG51bWVyaWMgc3RyaW5nXG5cdFx0XHRcdFx0XHRcdHg9cGFyc2VJbnQodmFsWzFdKTtcblx0XHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0XHR4PTA7IC8vIG5vbi1leGlzdGluZyB2YWx1ZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBcImZ1bmN0aW9uXCI6XG5cdFx0XHRcdFx0XHR2YWw9X29mZnNldC5jYWxsKG51bGwpOyAvLyBmdW5jdGlvbiAoc2luZ2xlIHZhbHVlIG9yIGFycmF5KVxuXHRcdFx0XHRcdFx0aWYodmFsIGluc3RhbmNlb2YgQXJyYXkpe1xuXHRcdFx0XHRcdFx0XHR5PXZhbFswXTtcblx0XHRcdFx0XHRcdFx0eD12YWxbMV07XG5cdFx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdFx0eT14PXZhbDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHR5PXg9cGFyc2VJbnQoX29mZnNldCk7IC8vIG51bWJlclxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBbeSx4XTtcblx0XHRcdH0sXG5cblx0XHRcdC8qIGZpbmRzIHRoZSBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIGhpZ2hsaWdodGVkICovXG5cblx0XHRcdF9maW5kSGlnaGxpZ2h0OmZ1bmN0aW9uKGlkKXtcblx0XHRcdFx0dmFyIHdMb2M9d2luZG93LmxvY2F0aW9uLGxvYz13TG9jLnRvU3RyaW5nKCkuc3BsaXQoXCIjXCIpWzBdLGxvY1BhdGg9d0xvYy5wYXRobmFtZTtcblx0XHRcdFx0aWYobG9jLmluZGV4T2YoXCInXCIpIT09LTEpIGxvYz1sb2MucmVwbGFjZShcIidcIixcIlxcXFwnXCIpO1xuXHRcdFx0XHRpZihsb2NQYXRoLmluZGV4T2YoXCInXCIpIT09LTEpIGxvY1BhdGg9bG9jUGF0aC5yZXBsYWNlKFwiJ1wiLFwiXFxcXCdcIik7XG5cdFx0XHRcdGxvYz1kZWNvZGVVUklDb21wb25lbnQobG9jKTtcblx0XHRcdFx0bG9jUGF0aD1kZWNvZGVVUklDb21wb25lbnQobG9jUGF0aCk7XG5cdFx0XHRcdHJldHVybiAkKFwiLl9cIitwbHVnaW5QZngrXCItaFtocmVmPScjXCIraWQrXCInXSwuX1wiK3BsdWdpblBmeCtcIi1oW2hyZWY9J1wiK2xvYytcIiNcIitpZCtcIiddLC5fXCIrcGx1Z2luUGZ4K1wiLWhbaHJlZj0nXCIrbG9jUGF0aCtcIiNcIitpZCtcIiddLC5fXCIrcGx1Z2luUGZ4K1wiLWhbaHJlZj0nIy9cIitpZCtcIiddLC5fXCIrcGx1Z2luUGZ4K1wiLWhbaHJlZj0nXCIrbG9jK1wiIy9cIitpZCtcIiddLC5fXCIrcGx1Z2luUGZ4K1wiLWhbaHJlZj0nXCIrbG9jUGF0aCtcIiMvXCIraWQrXCInXVwiKTtcblx0XHRcdH0sXG5cblx0XHRcdC8qIHNldHMgcGx1Z2luIGNsYXNzZXMgKi9cblxuXHRcdFx0X3NldENsYXNzZXM6ZnVuY3Rpb24oYyx0LGgpe1xuXHRcdFx0XHR2YXIgY2M9b3B0LmNsaWNrZWRDbGFzcyx0Yz1vcHQudGFyZ2V0Q2xhc3MsaGM9b3B0LmhpZ2hsaWdodENsYXNzO1xuXHRcdFx0XHRpZihjICYmIGNjICYmIGNjIT09XCJcIil7XG5cdFx0XHRcdFx0JChcIi5cIitjYykucmVtb3ZlQ2xhc3MoY2MpO1xuXHRcdFx0XHRcdF9jbGlja2VkLmFkZENsYXNzKGNjKTtcblx0XHRcdFx0fWVsc2UgaWYodCAmJiB0YyAmJiB0YyE9PVwiXCIgJiYgaCAmJiBoYyAmJiBoYyE9PVwiXCIpe1xuXHRcdFx0XHRcdGlmKGZ1bmN0aW9ucy5fY3VycmVudFRhcmdldC5jYWxsKG51bGwsdCkpe1xuXHRcdFx0XHRcdFx0dC5hZGRDbGFzcyh0Yyk7XG5cdFx0XHRcdFx0XHRoLmFkZENsYXNzKGhjKTtcblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdGlmKCFvcHQua2VlcEhpZ2hsaWdodFVudGlsTmV4dCB8fCAkKFwiLlwiK2hjKS5sZW5ndGg+MSl7XG5cdFx0XHRcdFx0XHRcdHQucmVtb3ZlQ2xhc3ModGMpO1xuXHRcdFx0XHRcdFx0XHRoLnJlbW92ZUNsYXNzKGhjKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdC8qIGV4dGVuZHMgcGx1Z2luIGNsYXNzZXMgKi9cblxuXHRcdFx0X2V4dGVuZENsYXNzZXM6ZnVuY3Rpb24oKXtcblx0XHRcdFx0dmFyIHRjPW9wdC50YXJnZXRDbGFzcyxoYz1vcHQuaGlnaGxpZ2h0Q2xhc3MsXG5cdFx0XHRcdFx0JHRjPSQoXCIuXCIrdGMpLCRoYz0kKFwiLlwiK2hjKSxmdGM9dGMrXCItZmlyc3RcIixsdGM9dGMrXCItbGFzdFwiLGZoYz1oYytcIi1maXJzdFwiLGxoYz1oYytcIi1sYXN0XCI7XG5cdFx0XHRcdCQoXCIuX1wiK3BsdWdpblBmeCtcIi10XCIpLnJlbW92ZUNsYXNzKGZ0YytcIiBcIitsdGMpO1xuXHRcdFx0XHQkKFwiLl9cIitwbHVnaW5QZngrXCItaFwiKS5yZW1vdmVDbGFzcyhmaGMrXCIgXCIrbGhjKTtcblx0XHRcdFx0aWYoIW9wdC5mb3JjZVNpbmdsZUhpZ2hsaWdodCl7XG5cdFx0XHRcdFx0JHRjLnNsaWNlKDAsMSkuYWRkQ2xhc3MoZnRjKS5lbmQoKS5zbGljZSgtMSkuYWRkQ2xhc3MobHRjKTtcblx0XHRcdFx0XHQkaGMuc2xpY2UoMCwxKS5hZGRDbGFzcyhmaGMpLmVuZCgpLnNsaWNlKC0xKS5hZGRDbGFzcyhsaGMpO1xuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRpZihvcHQua2VlcEhpZ2hsaWdodFVudGlsTmV4dCAmJiAkdGMubGVuZ3RoPjEpe1xuXHRcdFx0XHRcdFx0JHRjLnNsaWNlKDAsMSkucmVtb3ZlQ2xhc3ModGMpOyAkaGMuc2xpY2UoMCwxKS5yZW1vdmVDbGFzcyhoYyk7XG5cdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHQkdGMuc2xpY2UoMSkucmVtb3ZlQ2xhc3ModGMpOyAkaGMuc2xpY2UoMSkucmVtb3ZlQ2xhc3MoaGMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0LyogcmVtb3ZlcyBwbHVnaW4gY2xhc3NlcyAqL1xuXG5cdFx0XHRfcmVtb3ZlQ2xhc3NlczpmdW5jdGlvbihkZXN0cm95KXtcblx0XHRcdFx0JChcIi5cIitvcHQuY2xpY2tlZENsYXNzKS5yZW1vdmVDbGFzcyhvcHQuY2xpY2tlZENsYXNzKTtcblx0XHRcdFx0JChcIi5cIitvcHQudGFyZ2V0Q2xhc3MpLnJlbW92ZUNsYXNzKG9wdC50YXJnZXRDbGFzcytcIiBcIitvcHQudGFyZ2V0Q2xhc3MrXCItZmlyc3QgXCIrb3B0LnRhcmdldENsYXNzK1wiLWxhc3RcIik7XG5cdFx0XHRcdCQoXCIuXCIrb3B0LmhpZ2hsaWdodENsYXNzKS5yZW1vdmVDbGFzcyhvcHQuaGlnaGxpZ2h0Q2xhc3MrXCIgXCIrb3B0LmhpZ2hsaWdodENsYXNzK1wiLWZpcnN0IFwiK29wdC5oaWdobGlnaHRDbGFzcytcIi1sYXN0XCIpO1xuXHRcdFx0XHRpZihkZXN0cm95KXtcblx0XHRcdFx0XHQkKFwiLl9cIitwbHVnaW5QZngrXCItdFwiKS5yZW1vdmVDbGFzcyhcIl9cIitwbHVnaW5QZngrXCItdFwiKTtcblx0XHRcdFx0XHQkKFwiLl9cIitwbHVnaW5QZngrXCItaFwiKS5yZW1vdmVDbGFzcyhcIl9cIitwbHVnaW5QZngrXCItaFwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0LyogY2hlY2tzIGlmIHRhcmdldCBlbGVtZW50IGlzIGluIHZpZXdwb3J0ICovXG5cblx0XHRcdF9jdXJyZW50VGFyZ2V0OmZ1bmN0aW9uKHQpe1xuXHRcdFx0XHR2YXIgbz1vcHRbXCJ0YXJnZXRfXCIrdC5kYXRhKHBsdWdpblBmeCkuaV0sXG5cdFx0XHRcdFx0ZGF0YVRhcmdldD10LmRhdGEoXCJwczJpZC10YXJnZXRcIiksXG5cdFx0XHRcdFx0cmVjdD1kYXRhVGFyZ2V0ICYmICQoZGF0YVRhcmdldClbMF0gPyAkKGRhdGFUYXJnZXQpWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogdFswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0aWYodHlwZW9mIG8hPT1cInVuZGVmaW5lZFwiKXtcblx0XHRcdFx0XHR2YXIgeT10Lm9mZnNldCgpLnRvcCx4PXQub2Zmc2V0KCkubGVmdCxcblx0XHRcdFx0XHRcdGZyb209KG8uZnJvbSkgPyBvLmZyb20reSA6IHksdG89KG8udG8pID8gby50byt5IDogeSxcblx0XHRcdFx0XHRcdGZyb21YPShvLmZyb21YKSA/IG8uZnJvbVgreCA6IHgsdG9YPShvLnRvWCkgPyBvLnRvWCt4IDogeDtcblx0XHRcdFx0XHRyZXR1cm4oXG5cdFx0XHRcdFx0XHRyZWN0LnRvcCA+PSB0byAmJiByZWN0LnRvcCA8PSBmcm9tICYmXG5cdFx0XHRcdFx0XHRyZWN0LmxlZnQgPj0gdG9YICYmIHJlY3QubGVmdCA8PSBmcm9tWFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdHZhciB3aD0kKHdpbmRvdykuaGVpZ2h0KCksd3c9JCh3aW5kb3cpLndpZHRoKCksXG5cdFx0XHRcdFx0XHR0aD1kYXRhVGFyZ2V0ID8gJChkYXRhVGFyZ2V0KS5oZWlnaHQoKSA6IHQuaGVpZ2h0KCksdHc9ZGF0YVRhcmdldCA/ICQoZGF0YVRhcmdldCkud2lkdGgoKSA6IHQud2lkdGgoKSxcblx0XHRcdFx0XHRcdGJhc2U9MSsodGgvd2gpLFxuXHRcdFx0XHRcdFx0dG9wPWJhc2UsYm90dG9tPSh0aDx3aCkgPyBiYXNlKih3aC90aCkgOiBiYXNlLFxuXHRcdFx0XHRcdFx0YmFzZVg9MSsodHcvd3cpLFxuXHRcdFx0XHRcdFx0bGVmdD1iYXNlWCxyaWdodD0odHc8d3cpID8gYmFzZVgqKHd3L3R3KSA6IGJhc2VYLFxuXHRcdFx0XHRcdFx0dmFsPVtyZWN0LnRvcCA8PSB3aC90b3AscmVjdC5ib3R0b20gPj0gd2gvYm90dG9tLHJlY3QubGVmdCA8PSB3dy9sZWZ0LHJlY3QucmlnaHQgPj0gd3cvcmlnaHRdO1xuXHRcdFx0XHRcdGlmKG9wdC5oaWdobGlnaHRCeU5leHRUYXJnZXQpe1xuXHRcdFx0XHRcdFx0dmFyIHRuPXQuZGF0YShwbHVnaW5QZngpLnRuO1xuXHRcdFx0XHRcdFx0aWYodG4pe1xuXHRcdFx0XHRcdFx0XHR2YXIgcmVjdG49dG5bMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdFx0XHRcdGlmKG9wdC5sYXlvdXQ9PT1cInZlcnRpY2FsXCIpe1xuXHRcdFx0XHRcdFx0XHRcdHZhbD1bcmVjdC50b3AgPD0gd2gvMixyZWN0bi50b3AgPiB3aC8yLDEsMV07XG5cdFx0XHRcdFx0XHRcdH1lbHNlIGlmKG9wdC5sYXlvdXQ9PT1cImhvcml6b250YWxcIil7XG5cdFx0XHRcdFx0XHRcdFx0dmFsPVsxLDEscmVjdC5sZWZ0IDw9IHd3LzIscmVjdG4ubGVmdCA+IHd3LzJdO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybih2YWxbMF0gJiYgdmFsWzFdICYmIHZhbFsyXSAmJiB2YWxbM10pO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHQvKiBzY3JvbGxzIHRoZSBwYWdlICovXG5cblx0XHRcdF9zY3JvbGxUbzpmdW5jdGlvbigpe1xuXHRcdFx0XHRfc3BlZWQ9ZnVuY3Rpb25zLl9zY3JvbGxTcGVlZC5jYWxsKG51bGwpO1xuXHRcdFx0XHRfdG89KG9wdC5wYWdlRW5kU21vb3RoU2Nyb2xsKSA/IGZ1bmN0aW9ucy5fcGFnZUVuZFNtb290aFNjcm9sbC5jYWxsKG51bGwpIDogX3RvO1xuXHRcdFx0XHR2YXIgX3Njcm9sbGFibGU9JChcImh0bWwsYm9keVwiKSxcblx0XHRcdFx0XHRzcGVlZD0ob3B0LmF1dG9TY3JvbGxTcGVlZCkgPyBmdW5jdGlvbnMuX2F1dG9TY3JvbGxTcGVlZC5jYWxsKG51bGwpIDogX3NwZWVkLFxuXHRcdFx0XHRcdGVhc2luZz0oX3Njcm9sbGFibGUuaXMoXCI6YW5pbWF0ZWRcIikpID8gb3B0LnNjcm9sbGluZ0Vhc2luZyA6IG9wdC5zY3JvbGxFYXNpbmcsXG5cdFx0XHRcdFx0X3Q9JCh3aW5kb3cpLnNjcm9sbFRvcCgpLF9sPSQod2luZG93KS5zY3JvbGxMZWZ0KCk7XG5cdFx0XHRcdHN3aXRjaChfYXhpcyl7XG5cdFx0XHRcdFx0Y2FzZSBcImhvcml6b250YWxcIjpcblx0XHRcdFx0XHRcdGlmKF9sIT1fdG9bMV0pe1xuXHRcdFx0XHRcdFx0XHRmdW5jdGlvbnMuX2NhbGxiYWNrcy5jYWxsKG51bGwsXCJvblN0YXJ0XCIpO1xuXHRcdFx0XHRcdFx0XHRfc2Nyb2xsYWJsZS5zdG9wKCkuYW5pbWF0ZSh7c2Nyb2xsTGVmdDpfdG9bMV19LHNwZWVkLGVhc2luZykucHJvbWlzZSgpLnRoZW4oZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdFx0XHRmdW5jdGlvbnMuX2NhbGxiYWNrcy5jYWxsKG51bGwsXCJvbkNvbXBsZXRlXCIpO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgXCJhdXRvXCI6XG5cdFx0XHRcdFx0XHRpZihfdCE9X3RvWzBdIHx8IF9sIT1fdG9bMV0pe1xuXHRcdFx0XHRcdFx0XHRmdW5jdGlvbnMuX2NhbGxiYWNrcy5jYWxsKG51bGwsXCJvblN0YXJ0XCIpO1xuXHRcdFx0XHRcdFx0XHRpZihuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oaVBvZHxpUGhvbmV8aVBhZHxBbmRyb2lkKS8pKXsgLy8gbW9iaWxlIGZpeFxuXHRcdFx0XHRcdFx0XHRcdHZhciBsZWZ0O1xuXHRcdFx0XHRcdFx0XHRcdF9zY3JvbGxhYmxlLnN0b3AoKS5hbmltYXRlKHtwYWdlWU9mZnNldDpfdG9bMF0scGFnZVhPZmZzZXQ6X3RvWzFdfSx7XG5cdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjpzcGVlZCxcblx0XHRcdFx0XHRcdFx0XHRcdGVhc2luZzplYXNpbmcsXG5cdFx0XHRcdFx0XHRcdFx0XHRzdGVwOmZ1bmN0aW9uKG5vdyxmeCl7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmKGZ4LnByb3A9PSdwYWdlWE9mZnNldCcpe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxlZnQ9bm93O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9ZWxzZSBpZihmeC5wcm9wPT0ncGFnZVlPZmZzZXQnKXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8obGVmdCxub3cpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSkucHJvbWlzZSgpLnRoZW4oZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdFx0XHRcdGZ1bmN0aW9ucy5fY2FsbGJhY2tzLmNhbGwobnVsbCxcIm9uQ29tcGxldGVcIik7XG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0XHRcdF9zY3JvbGxhYmxlLnN0b3AoKS5hbmltYXRlKHtzY3JvbGxUb3A6X3RvWzBdLHNjcm9sbExlZnQ6X3RvWzFdfSxzcGVlZCxlYXNpbmcpLnByb21pc2UoKS50aGVuKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHRcdFx0XHRmdW5jdGlvbnMuX2NhbGxiYWNrcy5jYWxsKG51bGwsXCJvbkNvbXBsZXRlXCIpO1xuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0aWYoX3QhPV90b1swXSl7XG5cdFx0XHRcdFx0XHRcdGZ1bmN0aW9ucy5fY2FsbGJhY2tzLmNhbGwobnVsbCxcIm9uU3RhcnRcIik7XG5cdFx0XHRcdFx0XHRcdF9zY3JvbGxhYmxlLnN0b3AoKS5hbmltYXRlKHtzY3JvbGxUb3A6X3RvWzBdfSxzcGVlZCxlYXNpbmcpLnByb21pc2UoKS50aGVuKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHRcdFx0ZnVuY3Rpb25zLl9jYWxsYmFja3MuY2FsbChudWxsLFwib25Db21wbGV0ZVwiKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdC8qIHNldHMgZW5kIG9mIHBhZ2UgXCJzbW9vdGggc2Nyb2xsaW5nXCIgcG9zaXRpb24gKi9cblxuXHRcdFx0X3BhZ2VFbmRTbW9vdGhTY3JvbGw6ZnVuY3Rpb24oKXtcblx0XHRcdFx0dmFyIF9kaD0kKGRvY3VtZW50KS5oZWlnaHQoKSxfZHc9JChkb2N1bWVudCkud2lkdGgoKSxcblx0XHRcdFx0XHRfd2g9JCh3aW5kb3cpLmhlaWdodCgpLF93dz0kKHdpbmRvdykud2lkdGgoKTtcblx0XHRcdFx0cmV0dXJuIFsoKF9kaC1fdG9bMF0pPF93aCkgPyBfZGgtX3doIDogX3RvWzBdLCgoX2R3LV90b1sxXSk8X3d3KSA/IF9kdy1fd3cgOiBfdG9bMV1dO1xuXHRcdFx0fSxcblxuXHRcdFx0Lyogc2V0cyBhbmltYXRpb24gc3BlZWQgKGxpbmstc3BlY2lmaWMgc3BlZWQgdmlhIHBzMmlkLXNwZWVkLVZBTFVFIGNsYXNzIG9uIGxpbmsgb3IgbGluaydzIHBhcmVudCkgKi9cblxuXHRcdFx0X3Njcm9sbFNwZWVkOmZ1bmN0aW9uKCl7XG5cdFx0XHRcdHZhciBzcGVlZD1vcHQuc2Nyb2xsU3BlZWQ7XG5cdFx0XHRcdGlmKF9jbGlja2VkICYmIF9jbGlja2VkLmxlbmd0aCl7XG5cdFx0XHRcdFx0X2NsaWNrZWQuYWRkKF9jbGlja2VkLnBhcmVudCgpKS5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHR2YXIgJHRoaXM9JCh0aGlzKTtcblx0XHRcdFx0XHRcdGlmKCR0aGlzLmF0dHIoXCJjbGFzc1wiKSl7XG5cdFx0XHRcdFx0XHRcdHZhciBjbGlja2VkQ2xhc3Nlcz0kdGhpcy5hdHRyKFwiY2xhc3NcIikuc3BsaXQoXCIgXCIpO1xuXHRcdFx0XHRcdFx0XHRmb3IodmFyIGluZGV4IGluIGNsaWNrZWRDbGFzc2VzKXtcblx0XHRcdFx0XHRcdFx0XHRpZihTdHJpbmcoY2xpY2tlZENsYXNzZXNbaW5kZXhdKS5tYXRjaCgvXnBzMmlkLXNwZWVkLVxcZCskLykpe1xuXHRcdFx0XHRcdFx0XHRcdFx0c3BlZWQ9Y2xpY2tlZENsYXNzZXNbaW5kZXhdLnNwbGl0KFwicHMyaWQtc3BlZWQtXCIpWzFdO1xuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHBhcnNlSW50KHNwZWVkKTtcblx0XHRcdH0sXG5cblx0XHRcdC8qIHNldHMgdGhlIGF1dG8tYWRqdXN0ZWQgYW5pbWF0aW9uIHNwZWVkICovXG5cblx0XHRcdF9hdXRvU2Nyb2xsU3BlZWQ6ZnVuY3Rpb24oKXtcblx0XHRcdFx0dmFyIF90PSQod2luZG93KS5zY3JvbGxUb3AoKSxfbD0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpLFxuXHRcdFx0XHRcdF9oPSQoZG9jdW1lbnQpLmhlaWdodCgpLF93PSQoZG9jdW1lbnQpLndpZHRoKCksXG5cdFx0XHRcdFx0dmFsPVtcblx0XHRcdFx0XHRcdF9zcGVlZCsoKF9zcGVlZCooTWF0aC5mbG9vcigoTWF0aC5hYnMoX3RvWzBdLV90KS9faCkqMTAwKSkpLzEwMCksXG5cdFx0XHRcdFx0XHRfc3BlZWQrKChfc3BlZWQqKE1hdGguZmxvb3IoKE1hdGguYWJzKF90b1sxXS1fbCkvX3cpKjEwMCkpKS8xMDApXG5cdFx0XHRcdFx0XTtcblx0XHRcdFx0cmV0dXJuIE1hdGgubWF4LmFwcGx5KE1hdGgsdmFsKTtcblx0XHRcdH0sXG5cblx0XHRcdC8qIHVzZXIgY2FsbGJhY2sgZnVuY3Rpb25zICovXG5cblx0XHRcdF9jYWxsYmFja3M6ZnVuY3Rpb24oYyl7XG5cdFx0XHRcdGlmKCFvcHQpe1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzW3BsdWdpblBmeF09e1xuXHRcdFx0XHRcdHRyaWdnZXI6X3RyaWdnZXIsY2xpY2tlZDpfY2xpY2tlZCx0YXJnZXQ6X3RhcmdldCxzY3JvbGxUbzp7eTpfdG9bMF0seDpfdG9bMV19XG5cdFx0XHRcdH07XG5cdFx0XHRcdHN3aXRjaChjKXtcblx0XHRcdFx0XHRjYXNlIFwib25TdGFydFwiOlxuXHRcdFx0XHRcdFx0Ly9hcHBlbmQgaGFzaCB0byBVUkwvYWRkcmVzcyBiYXJcblx0XHRcdFx0XHRcdGlmKG9wdC5hcHBlbmRIYXNoICYmIHdpbmRvdy5oaXN0b3J5ICYmIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSAmJiBfY2xpY2tlZCAmJiBfY2xpY2tlZC5sZW5ndGgpe1xuXHRcdFx0XHRcdFx0XHR2YXIgaD1cIiNcIitfY2xpY2tlZC5hdHRyKFwiaHJlZlwiKS5zcGxpdChcIiNcIilbMV07XG5cdFx0XHRcdFx0XHRcdGlmKGghPT13aW5kb3cubG9jYXRpb24uaGFzaCkgaGlzdG9yeS5wdXNoU3RhdGUoXCJcIixcIlwiLGgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0b3B0Lm9uU3RhcnQuY2FsbChudWxsLHRoaXNbcGx1Z2luUGZ4XSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIFwib25Db21wbGV0ZVwiOlxuXHRcdFx0XHRcdFx0b3B0Lm9uQ29tcGxldGUuY2FsbChudWxsLHRoaXNbcGx1Z2luUGZ4XSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0LyogcmVzZXRzL2NsZWFycyB2YXJzIGFuZCBjb25zdGFudHMgKi9cblxuXHRcdFx0X3Jlc2V0OmZ1bmN0aW9uKCl7XG5cdFx0XHRcdF9heGlzPV9vZmZzZXQ9X2RhdGFPZmZzZXQ9ZmFsc2U7XG5cdFx0XHR9LFxuXG5cdFx0XHQvKiBjaGVja3MgaWYgcGx1Z2luIGhhcyBpbml0aWFsaXplZCAqL1xuXG5cdFx0XHRfaXNJbml0OmZ1bmN0aW9uKCl7XG5cdFx0XHRcdGlmKCFfaW5pdCl7XG5cdFx0XHRcdFx0bWV0aG9kcy5pbml0LmFwcGx5KHRoaXMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHQvKiBsaXZlIGZuICovXG5cblx0XHRcdF9saXZlOmZ1bmN0aW9uKCl7XG5cdFx0XHRcdF9saXZlVGltZXI9c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0XHRcdGlmKG9wdC5saXZlKXtcblx0XHRcdFx0XHRcdGlmKCQoZnVuY3Rpb25zLl9oaWdobGlnaHRTZWxlY3RvcigpKS5sZW5ndGghPT1fdG90YWxJbnN0YW5jZXMpe1xuXHRcdFx0XHRcdFx0XHRmdW5jdGlvbnMuX3NldHVwLmNhbGwobnVsbCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRpZihfbGl2ZVRpbWVyKXtjbGVhclRpbWVvdXQoX2xpdmVUaW1lcik7fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRmdW5jdGlvbnMuX2xpdmUuY2FsbChudWxsKTtcblx0XHRcdFx0fSwxMDAwKTtcblx0XHRcdH0sXG5cblx0XHRcdC8qIGV4dGVuZHMganF1ZXJ5IHdpdGggY3VzdG9tIGVhc2luZ3MgKGFzIGpxdWVyeSB1aSkgKi9cblxuXHRcdFx0X2Vhc2luZzpmdW5jdGlvbigpe1xuXHRcdFx0XHQkLmVhc2luZy5lYXNlSW5RdWFkPSQuZWFzaW5nLmVhc2VJblF1YWQgfHwgZnVuY3Rpb24oeCl7XG5cdFx0XHRcdFx0cmV0dXJuIHgqeDtcblx0XHRcdFx0fTtcblx0XHRcdFx0JC5lYXNpbmcuZWFzZU91dFF1YWQ9JC5lYXNpbmcuZWFzZU91dFF1YWQgfHwgZnVuY3Rpb24oeCl7XG5cdFx0XHRcdFx0cmV0dXJuIDEtKDEteCkqKDEteCk7XG5cdFx0XHRcdH07XG5cdFx0XHRcdCQuZWFzaW5nLmVhc2VJbk91dFF1YWQ9JC5lYXNpbmcuZWFzZUluT3V0UXVhZCB8fCBmdW5jdGlvbih4KXtcblx0XHRcdFx0XHRyZXR1cm4geDwwLjUgPyAyKngqeCA6IDEtTWF0aC5wb3coLTIqeCsyLDIpLzI7XG5cdFx0XHRcdH07XG5cdFx0XHRcdCQuZWFzaW5nLmVhc2VJbkN1YmljPSQuZWFzaW5nLmVhc2VJbkN1YmljIHx8IGZ1bmN0aW9uKHgpe1xuXHRcdFx0XHRcdHJldHVybiB4KngqeDtcblx0XHRcdFx0fTtcblx0XHRcdFx0JC5lYXNpbmcuZWFzZU91dEN1YmljPSQuZWFzaW5nLmVhc2VPdXRDdWJpYyB8fCBmdW5jdGlvbih4KXtcblx0XHRcdFx0XHRyZXR1cm4gMS1NYXRoLnBvdygxLXgsMyk7XG5cdFx0XHRcdH07XG5cdFx0XHRcdCQuZWFzaW5nLmVhc2VJbk91dEN1YmljPSQuZWFzaW5nLmVhc2VJbk91dEN1YmljIHx8IGZ1bmN0aW9uKHgpe1xuXHRcdFx0XHRcdHJldHVybiB4PDAuNSA/IDQqeCp4KnggOiAxLU1hdGgucG93KC0yKngrMiwzKS8yO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHQkLmVhc2luZy5lYXNlSW5RdWFydD0kLmVhc2luZy5lYXNlSW5RdWFydCB8fCBmdW5jdGlvbih4KXtcblx0XHRcdFx0XHRyZXR1cm4geCp4KngqeDtcblx0XHRcdFx0fTtcblx0XHRcdFx0JC5lYXNpbmcuZWFzZU91dFF1YXJ0PSQuZWFzaW5nLmVhc2VPdXRRdWFydCB8fCBmdW5jdGlvbih4KXtcblx0XHRcdFx0XHRyZXR1cm4gMS1NYXRoLnBvdygxLXgsNCk7XG5cdFx0XHRcdH07XG5cdFx0XHRcdCQuZWFzaW5nLmVhc2VJbk91dFF1YXJ0PSQuZWFzaW5nLmVhc2VJbk91dFF1YXJ0IHx8IGZ1bmN0aW9uKHgpe1xuXHRcdFx0XHRcdHJldHVybiB4PDAuNSA/IDgqeCp4KngqeCA6IDEtTWF0aC5wb3coLTIqeCsyLDQpLzI7XG5cdFx0XHRcdH07XG5cdFx0XHRcdCQuZWFzaW5nLmVhc2VJblF1aW50PSQuZWFzaW5nLmVhc2VJblF1aW50IHx8IGZ1bmN0aW9uKHgpe1xuXHRcdFx0XHRcdHJldHVybiB4KngqeCp4Kng7XG5cdFx0XHRcdH07XG5cdFx0XHRcdCQuZWFzaW5nLmVhc2VPdXRRdWludD0kLmVhc2luZy5lYXNlT3V0UXVpbnQgfHwgZnVuY3Rpb24oeCl7XG5cdFx0XHRcdFx0cmV0dXJuIDEtTWF0aC5wb3coMS14LDUpO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHQkLmVhc2luZy5lYXNlSW5PdXRRdWludD0kLmVhc2luZy5lYXNlSW5PdXRRdWludCB8fCBmdW5jdGlvbih4KXtcblx0XHRcdFx0XHRyZXR1cm4geDwwLjUgPyAxNip4KngqeCp4KnggOiAxLU1hdGgucG93KC0yKngrMiw1KS8yO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHQkLmVhc2luZy5lYXNlSW5FeHBvPSQuZWFzaW5nLmVhc2VJbkV4cG8gfHwgZnVuY3Rpb24oeCl7XG5cdFx0XHRcdFx0cmV0dXJuIHg9PT0wID8gMCA6IE1hdGgucG93KDIsMTAqeC0xMCk7XG5cdFx0XHRcdH07XG5cdFx0XHRcdCQuZWFzaW5nLmVhc2VPdXRFeHBvPSQuZWFzaW5nLmVhc2VPdXRFeHBvIHx8IGZ1bmN0aW9uKHgpe1xuXHRcdFx0XHRcdHJldHVybiB4PT09MSA/IDEgOiAxLU1hdGgucG93KDIsLTEwKngpO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHQkLmVhc2luZy5lYXNlSW5PdXRFeHBvPSQuZWFzaW5nLmVhc2VJbk91dEV4cG8gfHwgZnVuY3Rpb24oeCl7XG5cdFx0XHRcdFx0cmV0dXJuIHg9PT0wID8gMCA6IHg9PT0xID8gMSA6IHg8MC41ID8gTWF0aC5wb3coMiwyMCp4LTEwKS8yIDogKDItTWF0aC5wb3coMiwtMjAqeCsxMCkpLzI7XG5cdFx0XHRcdH07XG5cdFx0XHRcdCQuZWFzaW5nLmVhc2VJblNpbmU9JC5lYXNpbmcuZWFzZUluU2luZSB8fCBmdW5jdGlvbih4KXtcblx0XHRcdFx0XHRyZXR1cm4gMS1NYXRoLmNvcyh4Kk1hdGguUEkvMik7XG5cdFx0XHRcdH07XG5cdFx0XHRcdCQuZWFzaW5nLmVhc2VPdXRTaW5lPSQuZWFzaW5nLmVhc2VPdXRTaW5lIHx8IGZ1bmN0aW9uKHgpe1xuXHRcdFx0XHRcdHJldHVybiBNYXRoLnNpbih4Kk1hdGguUEkvMik7XG5cdFx0XHRcdH07XG5cdFx0XHRcdCQuZWFzaW5nLmVhc2VJbk91dFNpbmU9JC5lYXNpbmcuZWFzZUluT3V0U2luZSB8fCBmdW5jdGlvbih4KXtcblx0XHRcdFx0XHRyZXR1cm4gLShNYXRoLmNvcyhNYXRoLlBJKngpLTEpLzI7XG5cdFx0XHRcdH07XG5cdFx0XHRcdCQuZWFzaW5nLmVhc2VJbkNpcmM9JC5lYXNpbmcuZWFzZUluQ2lyYyB8fCBmdW5jdGlvbih4KXtcblx0XHRcdFx0XHRyZXR1cm4gMS1NYXRoLnNxcnQoMS1NYXRoLnBvdyh4LDIpKTtcblx0XHRcdFx0fTtcblx0XHRcdFx0JC5lYXNpbmcuZWFzZU91dENpcmM9JC5lYXNpbmcuZWFzZU91dENpcmMgfHwgZnVuY3Rpb24oeCl7XG5cdFx0XHRcdFx0cmV0dXJuIE1hdGguc3FydCgxLU1hdGgucG93KHgtMSwyKSk7XG5cdFx0XHRcdH07XG5cdFx0XHRcdCQuZWFzaW5nLmVhc2VJbk91dENpcmM9JC5lYXNpbmcuZWFzZUluT3V0Q2lyYyB8fCBmdW5jdGlvbih4KXtcblx0XHRcdFx0XHRyZXR1cm4geDwwLjUgPyAoMS1NYXRoLnNxcnQoMS1NYXRoLnBvdygyKngsMikpKS8yIDogKE1hdGguc3FydCgxLU1hdGgucG93KC0yKngrMiwyKSkrMSkvMjtcblx0XHRcdFx0fTtcblx0XHRcdFx0JC5lYXNpbmcuZWFzZUluRWxhc3RpYz0kLmVhc2luZy5lYXNlSW5FbGFzdGljIHx8IGZ1bmN0aW9uKHgpe1xuXHRcdFx0XHRcdHJldHVybiB4PT09MCA/IDAgOiB4PT09MSA/IDEgOiAtTWF0aC5wb3coMiwxMCp4LTEwKSpNYXRoLnNpbigoeCoxMC0xMC43NSkqKCgyKk1hdGguUEkpLzMpKTtcblx0XHRcdFx0fTtcblx0XHRcdFx0JC5lYXNpbmcuZWFzZU91dEVsYXN0aWM9JC5lYXNpbmcuZWFzZU91dEVsYXN0aWMgfHwgZnVuY3Rpb24oeCl7XG5cdFx0XHRcdFx0cmV0dXJuIHg9PT0wID8gMCA6IHg9PT0xID8gMSA6IE1hdGgucG93KDIsLTEwKngpKk1hdGguc2luKCh4KjEwLTAuNzUpKigoMipNYXRoLlBJKS8zKSkrMTtcblx0XHRcdFx0fTtcblx0XHRcdFx0JC5lYXNpbmcuZWFzZUluT3V0RWxhc3RpYz0kLmVhc2luZy5lYXNlSW5PdXRFbGFzdGljIHx8IGZ1bmN0aW9uKHgpe1xuXHRcdFx0XHRcdHJldHVybiB4PT09MCA/IDAgOiB4PT09MSA/IDEgOiB4PDAuNSA/IC0oTWF0aC5wb3coMiwyMCp4LTEwKSpNYXRoLnNpbigoMjAqeC0xMS4xMjUpKigoMipNYXRoLlBJKS80LjUpKSkvMiA6IE1hdGgucG93KDIsLTIwKngrMTApKk1hdGguc2luKCgyMCp4LTExLjEyNSkqKCgyKk1hdGguUEkpLzQuNSkpLzIrMTtcblx0XHRcdFx0fTtcblx0XHRcdFx0JC5lYXNpbmcuZWFzZUluQmFjaz0kLmVhc2luZy5lYXNlSW5CYWNrIHx8IGZ1bmN0aW9uKHgpe1xuXHRcdFx0XHRcdHJldHVybiAoMS43MDE1OCsxKSp4KngqeC0xLjcwMTU4KngqeDtcblx0XHRcdFx0fTtcblx0XHRcdFx0JC5lYXNpbmcuZWFzZU91dEJhY2s9JC5lYXNpbmcuZWFzZU91dEJhY2sgfHwgZnVuY3Rpb24oeCl7XG5cdFx0XHRcdFx0cmV0dXJuIDErKDEuNzAxNTgrMSkqTWF0aC5wb3coeC0xLDMpKzEuNzAxNTgqTWF0aC5wb3coeC0xLDIpO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHQkLmVhc2luZy5lYXNlSW5PdXRCYWNrPSQuZWFzaW5nLmVhc2VJbk91dEJhY2sgfHwgZnVuY3Rpb24oeCl7XG5cdFx0XHRcdFx0cmV0dXJuIHg8MC41ID8gKE1hdGgucG93KDIqeCwyKSooKCgxLjcwMTU4KjEuNTI1KSsxKSoyKngtKDEuNzAxNTgqMS41MjUpKSkvMiA6IChNYXRoLnBvdygyKngtMiwyKSooKCgxLjcwMTU4KjEuNTI1KSsxKSooeCoyLTIpKygxLjcwMTU4KjEuNTI1KSkrMikvMjtcblx0XHRcdFx0fTtcblx0XHRcdFx0JC5lYXNpbmcuZWFzZUluQm91bmNlPSQuZWFzaW5nLmVhc2VJbkJvdW5jZSB8fCBmdW5jdGlvbih4KXtcblx0XHRcdFx0XHRyZXR1cm4gMS1fX2JvdW5jZU91dCgxLXgpO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHQkLmVhc2luZy5lYXNlT3V0Qm91bmNlPSQuZWFzaW5nLmVhc2VPdXRCb3VuY2UgfHwgX19ib3VuY2VPdXQ7XG5cdFx0XHRcdCQuZWFzaW5nLmVhc2VJbk91dEJvdW5jZT0kLmVhc2luZy5lYXNlSW5PdXRCb3VuY2UgfHwgZnVuY3Rpb24oeCl7XG5cdFx0XHRcdFx0cmV0dXJuIHg8MC41ID8gKDEtX19ib3VuY2VPdXQoMS0yKngpKS8yIDogKDErX19ib3VuY2VPdXQoMip4LTEpKS8yO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHRmdW5jdGlvbiBfX2JvdW5jZU91dCh4KXtcblx0XHRcdFx0XHR2YXIgbjE9Ny41NjI1LGQxPTIuNzU7XG5cdFx0XHRcdFx0aWYoeDwxL2QxKXtcblx0XHRcdFx0XHRcdHJldHVybiBuMSp4Kng7XG5cdFx0XHRcdFx0fWVsc2UgaWYoeDwyL2QxKXtcblx0XHRcdFx0XHRcdHJldHVybiBuMSooeC09KDEuNS9kMSkpKngrLjc1O1xuXHRcdFx0XHRcdH1lbHNlIGlmKHg8Mi41L2QxKXtcblx0XHRcdFx0XHRcdHJldHVybiBuMSooeC09KDIuMjUvZDEpKSp4Ky45Mzc1O1xuXHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0cmV0dXJuIG4xKih4LT0oMi42MjUvZDEpKSp4Ky45ODQzNzU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdC8qXG5cdC0tLS0tLS0tLS0tLS0tLVxuXHRwbHVnaW4gc2V0dXBcblx0LS0tLS0tLS0tLS0tLS0tXG5cdCovXG5cblx0LyogZXh0ZW5kIGpxdWVyeSB3aXRoIGN1c3RvbSBlYXNpbmdzICovXG5cblx0ZnVuY3Rpb25zLl9lYXNpbmcuY2FsbCgpO1xuXG5cdC8qIHBsdWdpbiBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgKi9cblxuXHQkLmZuW3BsdWdpbk5TXT1mdW5jdGlvbihtZXRob2Qpe1xuXHRcdGlmKG1ldGhvZHNbbWV0aG9kXSl7XG5cdFx0XHRyZXR1cm4gbWV0aG9kc1ttZXRob2RdLmFwcGx5KHRoaXMsQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpKTtcblx0XHR9ZWxzZSBpZih0eXBlb2YgbWV0aG9kPT09XCJvYmplY3RcIiB8fCAhbWV0aG9kKXtcblx0XHRcdHJldHVybiBtZXRob2RzLmluaXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO1xuXHRcdH1lbHNle1xuXHRcdFx0JC5lcnJvcihcIk1ldGhvZCBcIittZXRob2QrXCIgZG9lcyBub3QgZXhpc3RcIik7XG5cdFx0fVxuXHR9O1xuXHQkW3BsdWdpbk5TXT1mdW5jdGlvbihtZXRob2Qpe1xuXHRcdGlmKG1ldGhvZHNbbWV0aG9kXSl7XG5cdFx0XHRyZXR1cm4gbWV0aG9kc1ttZXRob2RdLmFwcGx5KHRoaXMsQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpKTtcblx0XHR9ZWxzZSBpZih0eXBlb2YgbWV0aG9kPT09XCJvYmplY3RcIiB8fCAhbWV0aG9kKXtcblx0XHRcdHJldHVybiBtZXRob2RzLmluaXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO1xuXHRcdH1lbHNle1xuXHRcdFx0JC5lcnJvcihcIk1ldGhvZCBcIittZXRob2QrXCIgZG9lcyBub3QgZXhpc3RcIik7XG5cdFx0fVxuXHR9O1xuXG5cdC8qXG5cdGFsbG93IHNldHRpbmcgcGx1Z2luIGRlZmF1bHQgb3B0aW9ucy5cblx0ZXhhbXBsZTogJC5wbHVnaW5fbmFtZS5kZWZhdWx0cy5vcHRpb25fbmFtZT1cIm9wdGlvbl92YWx1ZVwiO1xuXHQqL1xuXG5cdCRbcGx1Z2luTlNdLmRlZmF1bHRzPWRlZmF1bHRzO1xuXG59KShqUXVlcnksd2luZG93LGRvY3VtZW50KTtcbiJdLCJmaWxlIjoidmVuZG9yL3NpbmdsZXBhZ2VuYXYuanMifQ==
