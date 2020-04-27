Function && Function.prototype && Function.prototype.bind && (/(MSIE ([6789]|10|11))|Trident/.test( navigator.userAgent ) || (window.__twttr && window.__twttr.widgets && window.__twttr.widgets.loaded && window.twttr.widgets.load && window.twttr.widgets.load(), window.__twttr && window.__twttr.widgets && window.__twttr.widgets.init || function( t ) {
	function e( e ) {
		for ( var n, i, o = e[ 0 ], s = e[ 1 ], a = 0, c = []; a < o.length; a ++ ) {
			i = o[ a ], r[ i ] && c.push( r[ i ][ 0 ] ), r[ i ] = 0;
		}
		for ( n in s ) {
			Object.prototype.hasOwnProperty.call( s, n ) && (t[ n ] = s[ n ]);
		}
		for ( u && u( e ); c.length; ) {
			c.shift()()
		}
	}

	var n = {}, r = { 1: 0 };

	function i( e ) {
		if ( n[ e ] ) {
			return n[ e ].exports;
		}
		var r = n[ e ] = {
			i: e,
			l: !1,
			exports: {}
		};
		return t[ e ].call( r.exports, r, r.exports, i ), r.l = !0, r.exports
	}

	i.e = function( t ) {
		var e = [], n = r[ t ];
		if ( 0 !== n ) {
			if ( n ) {
				e.push( n[ 2 ] );
			} else {
				var o = new Promise( function( e, i ) {
					n = r[ t ] = [e, i]
				} );
				e.push( n[ 2 ] = o );
				var s, a = document.getElementsByTagName( "head" )[ 0 ], u = document.createElement( "script" );
				u.charset = "utf-8", u.timeout = 120, i.nc && u.setAttribute( "nonce", i.nc ), u.src = function( t ) {
					return i.p + "js/" + ({
						                      0: "moment~timeline~tweet",
						                      2: "dm_button",
						                      3: "button",
						                      4: "moment",
						                      5: "periscope_on_air",
						                      6: "timeline",
						                      7: "horizon_tweet",
						                      8: "tweet"
					                      }[ t ] || t) + "." + {
						       0: "99ce5e0e4617985354c5c426d7e1b9f4",
						       2: "aafdbac8c0ca30b0345ffadfb46abaae",
						       3: "93a0c25c2d2f3081c705c98c2d9dec0e",
						       4: "70d46e46bb6e5d32428d274e29d33a7a",
						       5: "a924982376e532afeee4636c794ea5da",
						       6: "d228dcf3573461f298b082c9a5c0a42c",
						       7: "77381373f964eee9b43728b3d43d642f",
						       8: "9aa9eda3c163ec539c16aef0d822d807"
					       }[ t ] + ".js"
				}( t ), s = function( e ) {
					u.onerror = u.onload = null, clearTimeout( c );
					var n = r[ t ];
					if ( 0 !== n ) {
						if ( n ) {
							var i = e && ("load" === e.type ? "missing" : e.type), o = e && e.target && e.target.src,
								s = new Error( "Loading chunk " + t + " failed.\n(" + i + ": " + o + ")" );
							s.type = i, s.request = o, n[ 1 ]( s )
						}
						r[ t ] = void 0
					}
				};
				var c = setTimeout( function() {
					s( {
						type: "timeout",
						target: u
					} )
				}, 12e4 );
				u.onerror = u.onload = s, a.appendChild( u )
			}
		}
		return Promise.all( e )
	}, i.m = t, i.c = n, i.d = function( t, e, n ) {
		i.o( t, e ) || Object.defineProperty( t, e, {
			enumerable: !0,
			get: n
		} )
	}, i.r = function( t ) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty( t, Symbol.toStringTag, { value: "Module" } ), Object.defineProperty( t, "__esModule", { value: !0 } )
	}, i.t = function( t, e ) {
		if ( 1 & e && (t = i( t )), 8 & e ) {
			return t;
		}
		if ( 4 & e && "object" == typeof t && t && t.__esModule ) {
			return t;
		}
		var n = Object.create( null );
		if ( i.r( n ), Object.defineProperty( n, "default", {
			enumerable: !0,
			value: t
		} ), 2 & e && "string" != typeof t ) {
			for ( var r in t ) {
				i.d( n, r, function( e ) {
					return t[ e ]
				}.bind( null, r ) );
			}
		}
		return n
	}, i.n = function( t ) {
		var e = t && t.__esModule ? function() {
			return t.default
		} : function() {
			return t
		};
		return i.d( e, "a", e ), e
	}, i.o = function( t, e ) {
		return Object.prototype.hasOwnProperty.call( t, e )
	}, i.p = "https://platform.twitter.com/", i.oe = function( t ) {
		throw console.error( t ), t
	};
	var o = window.__twttrll = window.__twttrll || [], s = o.push.bind( o );
	o.push = e, o = o.slice();
	for ( var a = 0; a < o.length; a ++ ) {
		e( o[ a ] );
	}
	var u = s;
	i( i.s = 96 )
}( [
	function( t, e, n ) {
		var r = n( 1 );

		function i( t, e ) {
			var n;
			for ( n in t ) {
				t.hasOwnProperty && !t.hasOwnProperty( n ) || e( n, t[ n ] );
			}
			return t
		}

		function o( t ) {
			return {}.toString.call( t ).match( /\s([a-zA-Z]+)/ )[ 1 ].toLowerCase()
		}

		function s( t ) {
			return t === Object( t )
		}

		function a( t ) {
			var e;
			if ( !s( t ) ) {
				return !1;
			}
			if ( Object.keys ) {
				return !Object.keys( t ).length;
			}
			for ( e in t ) {
				if ( t.hasOwnProperty( e ) ) {
					return !1;
				}
			}
			return !0
		}

		function u( t ) {
			return t ? Array.prototype.slice.call( t ) : []
		}

		t.exports = {
			aug: function( t ) {
				return u( arguments ).slice( 1 ).forEach( function( e ) {
					i( e, function( e, n ) {
						t[ e ] = n
					} )
				} ), t
			},
			async: function( t, e ) {
				r.setTimeout( function() {
					t.call( e || null )
				}, 0 )
			},
			compact: function t( e ) {
				return i( e, function( n, r ) {
					s( r ) && (t( r ), a( r ) && delete e[ n ]), void 0 !== r && null !== r && "" !== r || delete e[ n ]
				} ), e
			},
			contains: function( t, e ) {
				return !(!t || !t.indexOf) && t.indexOf( e ) > - 1
			},
			forIn: i,
			isObject: s,
			isEmptyObject: a,
			toType: o,
			isType: function( t, e ) {
				return t == o( e )
			},
			toRealArray: u
		}
	}, function( t, e ) {
		t.exports = window
	}, function( t, e, n ) {
		var r = n( 6 );
		t.exports = function() {
			var t = this;
			this.promise = new r( function( e, n ) {
				t.resolve = e, t.reject = n
			} )
		}
	}, function( t, e, n ) {
		var r = n( 11 ),
			i = /(?:^|(?:https?:)?\/\/(?:www\.)?twitter\.com(?::\d+)?(?:\/intent\/(?:follow|user)\/?\?screen_name=|(?:\/#!)?\/))@?([\w]+)(?:\?|&|$)/i,
			o = /(?:^|(?:https?:)?\/\/(?:www\.)?twitter\.com(?::\d+)?\/(?:#!\/)?[\w_]+\/status(?:es)?\/)(\d+)/i,
			s = /^http(s?):\/\/(\w+\.)*twitter\.com([:/]|$)/i, a = /^http(s?):\/\/(ton|pbs)\.twimg\.com/,
			u = /^#?([^.,<>!\s/#\-()'"]+)$/, c = /twitter\.com(?::\d{2,4})?\/intent\/(\w+)/,
			d = /^https?:\/\/(?:www\.)?twitter\.com\/\w+\/timelines\/(\d+)/i,
			f = /^https?:\/\/(?:www\.)?twitter\.com\/i\/moments\/(\d+)/i,
			l = /^https?:\/\/(?:www\.)?twitter\.com\/(\w+)\/(?:likes|favorites)/i,
			h = /^https?:\/\/(?:www\.)?twitter\.com\/(\w+)\/lists\/([\w-%]+)/i,
			p = /^https?:\/\/(?:www\.)?twitter\.com\/i\/live\/(\d+)/i,
			m = /^https?:\/\/syndication\.twitter\.com\/settings/i,
			v = /^https?:\/\/(localhost|platform)\.twitter\.com(?::\d+)?\/widgets\/widget_iframe\.(.+)/i,
			g = /^https?:\/\/(?:www\.)?twitter\.com\/search\?q=(\w+)/i;

		function w( t ) {
			return "string" == typeof t && i.test( t ) && RegExp.$1.length <= 20
		}

		function y( t ) {
			if ( w( t ) ) {
				return RegExp.$1
			}
		}

		function b( t, e ) {
			var n = r.decodeURL( t );
			if ( e = e || !1, n.screen_name = y( t ), n.screen_name ) {
				return r.url( "https://twitter.com/intent/" + (e ? "follow" : "user"), n )
			}
		}

		function _( t ) {
			return "string" == typeof t && u.test( t )
		}

		function E( t ) {
			return "string" == typeof t && o.test( t )
		}

		t.exports = {
			isHashTag: _,
			hashTag: function( t, e ) {
				if ( e = void 0 === e || e, _( t ) ) {
					return (e ? "#" : "") + RegExp.$1
				}
			},
			isScreenName: w,
			screenName: y,
			isStatus: E,
			status: function( t ) {
				return E( t ) && RegExp.$1
			},
			intentForProfileURL: b,
			intentForFollowURL: function( t ) {
				return b( t, !0 )
			},
			isTwitterURL: function( t ) {
				return s.test( t )
			},
			isTwimgURL: function( t ) {
				return a.test( t )
			},
			isIntentURL: function( t ) {
				return c.test( t )
			},
			isSettingsURL: function( t ) {
				return m.test( t )
			},
			isWidgetIframeURL: function( t ) {
				return v.test( t )
			},
			isSearchUrl: function( t ) {
				return g.test( t )
			},
			regexen: { profile: i },
			momentId: function( t ) {
				return f.test( t ) && RegExp.$1
			},
			collectionId: function( t ) {
				return d.test( t ) && RegExp.$1
			},
			intentType: function( t ) {
				return c.test( t ) && RegExp.$1
			},
			likesScreenName: function( t ) {
				return l.test( t ) && RegExp.$1
			},
			listScreenNameAndSlug: function( t ) {
				var e, n, r;
				if ( h.test( t ) ) {
					e = RegExp.$1, n = RegExp.$2;
					try {
						r = decodeURIComponent( n )
					} catch ( t ) {
					}
					return {
						ownerScreenName: e,
						slug: r || n
					}
				}
				return !1
			},
			eventId: function( t ) {
				return p.test( t ) && RegExp.$1
			}
		}
	}, function( t, e ) {
		t.exports = document
	}, function( t, e, n ) {
		var r = n( 0 ), i = [!0, 1, "1", "on", "ON", "true", "TRUE", "yes", "YES"],
			o = [!1, 0, "0", "off", "OFF", "false", "FALSE", "no", "NO"];

		function s( t ) {
			return void 0 !== t && null !== t && "" !== t
		}

		function a( t ) {
			return c( t ) && t % 1 == 0
		}

		function u( t ) {
			return c( t ) && !a( t )
		}

		function c( t ) {
			return s( t ) && !isNaN( t )
		}

		function d( t ) {
			return r.contains( o, t )
		}

		function f( t ) {
			return r.contains( i, t )
		}

		t.exports = {
			hasValue: s,
			isInt: a,
			isFloat: u,
			isNumber: c,
			isString: function( t ) {
				return "string" === r.toType( t )
			},
			isArray: function( t ) {
				return s( t ) && "array" == r.toType( t )
			},
			isTruthValue: f,
			isFalseValue: d,
			asInt: function( t ) {
				if ( a( t ) ) {
					return parseInt( t, 10 )
				}
			},
			asFloat: function( t ) {
				if ( u( t ) ) {
					return t
				}
			},
			asNumber: function( t ) {
				if ( c( t ) ) {
					return t
				}
			},
			asBoolean: function( t ) {
				return !(!s( t ) || !f( t ) && (d( t ) || !t))
			}
		}
	}, function( t, e, n ) {
		var r = n( 1 ), i = n( 22 ), o = n( 48 );
		i.hasPromiseSupport() || (r.Promise = o), t.exports = r.Promise
	}, function( t, e, n ) {
		var r = n( 0 );
		t.exports = function( t, e ) {
			var n = Array.prototype.slice.call( arguments, 2 );
			return function() {
				var i = r.toRealArray( arguments );
				return t.apply( e, n.concat( i ) )
			}
		}
	}, function( t, e ) {
		t.exports = location
	}, function( t, e, n ) {
		var r = n( 50 );
		t.exports = new r( "__twttr" )
	}, function( t, e, n ) {
		var r = n( 0 ), i = /\b([\w-_]+)\b/g;

		function o( t ) {
			return new RegExp( "\\b" + t + "\\b", "g" )
		}

		function s( t, e ) {
			t.classList ? t.classList.add( e ) : o( e ).test( t.className ) || (t.className += " " + e)
		}

		function a( t, e ) {
			t.classList ? t.classList.remove( e ) : t.className = t.className.replace( o( e ), " " )
		}

		function u( t, e ) {
			return t.classList ? t.classList.contains( e ) : r.contains( c( t ), e )
		}

		function c( t ) {
			return r.toRealArray( t.classList ? t.classList : t.className.match( i ) )
		}

		t.exports = {
			add: s,
			remove: a,
			replace: function( t, e, n ) {
				if ( t.classList && u( t, e ) ) {
					return a( t, e ), void s( t, n );
				}
				t.className = t.className.replace( o( e ), n )
			},
			toggle: function( t, e, n ) {
				return void 0 === n && t.classList && t.classList.toggle ? t.classList.toggle( e, n ) : (n ? s( t, e ) : a( t, e ), n)
			},
			present: u,
			list: c
		}
	}, function( t, e, n ) {
		var r = n( 5 ), i = n( 0 );

		function o( t ) {
			return encodeURIComponent( t ).replace( /\+/g, "%2B" ).replace( /'/g, "%27" )
		}

		function s( t ) {
			return decodeURIComponent( t )
		}

		function a( t ) {
			var e = [];
			return i.forIn( t, function( t, n ) {
				var s = o( t );
				i.isType( "array", n ) || (n = [n]), n.forEach( function( t ) {
					r.hasValue( t ) && e.push( s + "=" + o( t ) )
				} )
			} ), e.sort().join( "&" )
		}

		function u( t ) {
			var e = {};
			return t ? (t.split( "&" ).forEach( function( t ) {
				var n = t.split( "=" ), r = s( n[ 0 ] ), o = s( n[ 1 ] );
				if ( 2 == n.length ) {
					if ( !i.isType( "array", e[ r ] ) ) {
						return r in e ? (e[ r ] = [e[ r ]], void e[ r ].push( o )) : void (e[ r ] = o);
					}
					e[ r ].push( o )
				}
			} ), e) : {}
		}

		t.exports = {
			url: function( t, e ) {
				return a( e ).length > 0 ? i.contains( t, "?" ) ? t + "&" + a( e ) : t + "?" + a( e ) : t
			},
			decodeURL: function( t ) {
				var e = t && t.split( "?" );
				return 2 == e.length ? u( e[ 1 ] ) : {}
			},
			decode: u,
			encode: a,
			encodePart: o,
			decodePart: s
		}
	}, function( t, e, n ) {
		var r = n( 8 ), i = n( 1 ), o = n( 0 ), s = {}, a = o.contains( r.href, "tw_debug=true" );

		function u() {
		}

		function c() {
		}

		function d() {
			return i.performance && + i.performance.now() || + new Date
		}

		function f( t, e ) {
			if ( i.console && i.console[ t ] ) {
				switch ( e.length ) {
					case 1:
						i.console[ t ]( e[ 0 ] );
						break;
					case 2:
						i.console[ t ]( e[ 0 ], e[ 1 ] );
						break;
					case 3:
						i.console[ t ]( e[ 0 ], e[ 1 ], e[ 2 ] );
						break;
					case 4:
						i.console[ t ]( e[ 0 ], e[ 1 ], e[ 2 ], e[ 3 ] );
						break;
					case 5:
						i.console[ t ]( e[ 0 ], e[ 1 ], e[ 2 ], e[ 3 ], e[ 4 ] );
						break;
					default:
						0 !== e.length && i.console.warn && i.console.warn( "too many params passed to logger." + t )
				}
			}
		}

		t.exports = {
			devError: u,
			devInfo: c,
			devObject: function( t, e ) {
			},
			publicError: function() {
				f( "error", o.toRealArray( arguments ) )
			},
			publicLog: function() {
				f( "info", o.toRealArray( arguments ) )
			},
			time: function( t ) {
				a && (s[ t ] = d())
			},
			timeEnd: function( t ) {
				a && s[ t ] && (d(), s[ t ])
			}
		}
	}, function( t, e, n ) {
		var r = n( 20 ), i = n( 5 ), o = n( 11 ), s = n( 0 ), a = n( 121 );
		t.exports = function( t ) {
			var e = t.href && t.href.split( "?" )[ 1 ], n = e ? o.decode( e ) : {}, u = {
				lang: a( t ),
				width: t.getAttribute( "data-width" ) || t.getAttribute( "width" ),
				height: t.getAttribute( "data-height" ) || t.getAttribute( "height" ),
				related: t.getAttribute( "data-related" ),
				partner: t.getAttribute( "data-partner" )
			};
			return i.asBoolean( t.getAttribute( "data-dnt" ) ) && r.setOn(), s.forIn( u, function( t, e ) {
				var r = n[ t ];
				n[ t ] = i.hasValue( r ) ? r : e
			} ), s.compact( n )
		}
	}, function( t, e, n ) {
		var r = n( 82 ), i = n( 24 );
		t.exports = function() {
			var t = "data-twitter-extracted-" + i.generate();
			return function( e, n ) {
				return r( e, n ).filter( function( e ) {
					return !e.hasAttribute( t )
				} ).map( function( e ) {
					return e.setAttribute( t, "true" ), e
				} )
			}
		}
	}, function( t, e ) {
		function n( t, e, n, r, i, o, s ) {
			this.factory = t, this.Sandbox = e, this.srcEl = o, this.targetEl = i, this.parameters = r, this.className = n, this.options = s
		}

		n.prototype.destroy = function() {
			this.srcEl = this.targetEl = null
		}, t.exports = n
	}, function( t, e ) {
		t.exports = {
			DM_BUTTON: "twitter-dm-button",
			FOLLOW_BUTTON: "twitter-follow-button",
			HASHTAG_BUTTON: "twitter-hashtag-button",
			MENTION_BUTTON: "twitter-mention-button",
			MOMENT: "twitter-moment",
			PERISCOPE: "periscope-on-air",
			SHARE_BUTTON: "twitter-share-button",
			TIMELINE: "twitter-timeline",
			TWEET: "twitter-tweet"
		}
	}, function( t, e, n ) {
		var r = n( 6 ), i = n( 20 ), o = n( 52 ), s = n( 31 ), a = n( 5 ), u = n( 0 );
		t.exports = function( t, e, n ) {
			var c;
			return t = t || [], e = e || {}, c = "ƒ(" + t.join( ", " ) + ", target, [options]);", function() {
				var d, f, l, h, p = Array.prototype.slice.apply( arguments, [0, t.length] ),
					m = Array.prototype.slice.apply( arguments, [t.length] );
				return m.forEach( function( t ) {
					t && (t.nodeType !== Node.ELEMENT_NODE ? u.isType( "function", t ) ? d = t : u.isType( "object", t ) && (f = t) : l = t)
				} ), p.length !== t.length || 0 === m.length ? (d && u.async( function() {
					d( !1 )
				} ), r.reject( new Error( "Not enough parameters. Expected: " + c ) )) : l ? (f = u.aug( {}, f || {}, e ), t.forEach( function( t ) {
					f[ t ] = p.shift()
				} ), a.asBoolean( f.dnt ) && i.setOn(), h = s.getExperiments().then( function( t ) {
					return o.addWidget( n( f, l, void 0, t ) )
				} ), d && h.then( d, function() {
					d( !1 )
				} ), h) : (d && u.async( function() {
					d( !1 )
				} ), r.reject( new Error( "No target element specified. Expected: " + c ) ))
			}
		}
	}, function( t, e, n ) {
		var r = n( 104 ), i = n( 2 ), o = n( 0 );

		function s( t, e ) {
			return function() {
				try {
					e.resolve( t.call( this ) )
				} catch ( t ) {
					e.reject( t )
				}
			}
		}

		t.exports = {
			sync: function( t, e ) {
				t.call( e )
			},
			read: function( t, e ) {
				var n = new i;
				return r.read( s( t, n ), e ), n.promise
			},
			write: function( t, e ) {
				var n = new i;
				return r.write( s( t, n ), e ), n.promise
			},
			defer: function( t, e, n ) {
				var a = new i;
				return o.isType( "function", t ) && (n = e, e = t, t = 1), r.defer( t, s( e, a ), n ), a.promise
			}
		}
	}, function( t, e, n ) {
		var r = n( 9 ), i = [
			"https://syndication.twitter.com",
			"https://cdn.syndication.twimg.com",
			"https://localhost.twitter.com:8444"
		], o = ["https://syndication.twitter.com", "https://localhost.twitter.com:8445"], s = [
			"https://platform.twitter.com/embed/index.html",
			"https://localhost.twitter.com",
			/https:\/\/ton\.smf1\.twitter\.com\/syndication-internal\/embed-iframe\/[0-9A-Za-z_-]+\/app\/index\.html/
		], a = function( t, e ) {
			return t.some( function( t ) {
				return t instanceof RegExp ? t.test( e ) : t === e
			} )
		}, u = function() {
			var t = r.get( "backendHost" );
			return t && a( i, t ) ? t : "https://cdn.syndication.twimg.com"
		}, c = function() {
			var t = r.get( "settingsSvcHost" );
			return t && a( o, t ) ? t : "https://syndication.twitter.com"
		}, d = function() {
			var t = r.get( "embedIframeURL" );
			return t && a( s, t ) ? t : "https://platform.twitter.com/embed/index.html"
		};

		function f( t, e ) {
			var n = [t];
			return e.forEach( function( t ) {
				n.push( function( t ) {
					var e = (t || "").toString(), n = "/" === e.slice( 0, 1 ) ? 1 : 0, r = function( t ) {
						return "/" === t.slice( - 1 )
					}( e ) ? - 1 : void 0;
					return e.slice( n, r )
				}( t ) )
			} ), n.join( "/" )
		}

		t.exports = {
			cookieConsent: function( t ) {
				var e = t || [];
				return e.unshift( "cookie/consent" ), f( c(), e )
			},
			embedIframe: function() {
				return d()
			},
			eventVideo: function( t ) {
				var e = t || [];
				return e.unshift( "video/event" ), f( u(), e )
			},
			grid: function( t ) {
				var e = t || [];
				return e.unshift( "grid/collection" ), f( u(), e )
			},
			moment: function( t ) {
				var e = t || [];
				return e.unshift( "moments" ), f( u(), e )
			},
			settings: function( t ) {
				var e = t || [];
				return e.unshift( "settings" ), f( c(), e )
			},
			timeline: function( t ) {
				var e = t || [];
				return e.unshift( "timeline" ), f( u(), e )
			},
			tweetBatch: function( t ) {
				var e = t || [];
				return e.unshift( "tweets.json" ), f( u(), e )
			},
			video: function( t ) {
				var e = t || [];
				return e.unshift( "widgets/video" ), f( u(), e )
			}
		}
	}, function( t, e, n ) {
		var r = n( 4 ), i = n( 8 ), o = n( 39 ), s = n( 80 ), a = n( 5 ), u = n( 35 ), c = !1,
			d = /https?:\/\/([^/]+).*/i;
		t.exports = {
			setOn: function() {
				c = !0
			},
			enabled: function( t, e ) {
				return !!(c || a.asBoolean( u.val( "dnt" ) ) || s.isUrlSensitive( e || i.host ) || o.isFramed() && s.isUrlSensitive( o.rootDocumentLocation() ) || (t = d.test( t || r.referrer ) && RegExp.$1) && s.isUrlSensitive( t ))
			}
		}
	}, function( t, e, n ) {
		var r = n( 47 ), i = n( 4 ), o = n( 20 ), s = n( 34 ), a = n( 72 ), u = n( 33 ), c = n( 9 ), d = n( 3 ),
			f = n( 0 ), l = 1, h = r.version,
			p = c.get( "clientEventEndpoint" ) || "https://syndication.twitter.com/i/jot";

		function m( t ) {
			return f.aug( { client: "tfw" }, t || {} )
		}

		function v( t, e, n ) {
			return e = e || {}, f.aug( {}, e, {
				_category_: t,
				triggered_on: e.triggered_on || + new Date,
				dnt: o.enabled( n )
			} )
		}

		t.exports = {
			extractTermsFromDOM: function t( e, n ) {
				var r;
				return n = n || {}, e && e.nodeType === Node.ELEMENT_NODE ? ((r = e.getAttribute( "data-scribe" )) && r.split( " " ).forEach( function( t ) {
					var e = t.trim().split( ":" ), r = e[ 0 ], i = e[ 1 ];
					r && i && !n[ r ] && (n[ r ] = i)
				} ), t( e.parentNode, n )) : n
			},
			clickEventElement: function( t ) {
				var e = s.closest( "[data-expanded-url]", t ), n = e && e.getAttribute( "data-expanded-url" );
				return n && d.isTwitterURL( n ) ? "twitter_url" : "url"
			},
			flattenClientEventPayload: function( t, e ) {
				return f.aug( {}, e, { event_namespace: t } )
			},
			formatGenericEventData: v,
			formatClientEventData: function( t, e, n ) {
				var r = t && t.widget_origin || i.referrer;
				return (t = v( "tfw_client_event", t, r )).client_version = h, t.format_version = void 0 !== n ? n : 1, e || (t.widget_origin = r), t
			},
			formatClientEventNamespace: m,
			formatHorizonTweetData: function( t ) {
				var e = {
					item_ids: [],
					item_details: {}
				};
				return e.item_ids.push( t ), e.item_details[ t ] = { item_type: a.TWEET }, e
			},
			formatTweetAssociation: function( t, e ) {
				var n = {};
				return (e = e || {}).association_namespace = m( t ), n[ l ] = e, n
			},
			noticeSeen: function( t ) {
				return "notice" === t.element && "seen" === t.action
			},
			splitLogEntry: function( t ) {
				var e, n, r, i, o;
				return t.item_ids && t.item_ids.length > 1 ? (e = Math.floor( t.item_ids.length / 2 ), n = t.item_ids.slice( 0, e ), r = {}, i = t.item_ids.slice( e ), o = {}, n.forEach( function( e ) {
					r[ e ] = t.item_details[ e ]
				} ), i.forEach( function( e ) {
					o[ e ] = t.item_details[ e ]
				} ), [
					f.aug( {}, t, {
						item_ids: n,
						item_details: r
					} ),
					f.aug( {}, t, {
						item_ids: i,
						item_details: o
					} )
				]) : [t]
			},
			stringify: function( t ) {
				var e, n = Array.prototype.toJSON;
				return delete Array.prototype.toJSON, e = u.stringify( t ), n && (Array.prototype.toJSON = n), e
			},
			AUDIENCE_ENDPOINT: "https://syndication.twitter.com/i/jot/syndication",
			CLIENT_EVENT_ENDPOINT: p,
			RUFOUS_REDIRECT: "https://platform.twitter.com/jot.html"
		}
	}, function( t, e, n ) {
		var r = n( 4 ), i = n( 12 ), o = n( 97 ), s = n( 1 ), a = n( 0 ), u = o.userAgent;

		function c( t ) {
			return /(Trident|MSIE|Edge[/ ]?\d)/.test( t = t || u )
		}

		t.exports = {
			retina: function( t ) {
				return (t = t || s).devicePixelRatio ? t.devicePixelRatio >= 1.5 : !!t.matchMedia && t.matchMedia( "only screen and (min-resolution: 144dpi)" ).matches
			},
			anyIE: c,
			ie9: function( t ) {
				return /MSIE 9/.test( t = t || u )
			},
			ie10: function( t ) {
				return /MSIE 10/.test( t = t || u )
			},
			ios: function( t ) {
				return /(iPad|iPhone|iPod)/.test( t = t || u )
			},
			android: function( t ) {
				return /^Mozilla\/5\.0 \(Linux; (U; )?Android/.test( t = t || u )
			},
			canPostMessage: function( t, e ) {
				return t = t || s, e = e || u, t.postMessage && !(c( e ) && t.opener)
			},
			touch: function( t, e, n ) {
				return t = t || s, e = e || o, n = n || u, "ontouchstart" in t || /Opera Mini/.test( n ) || e.msMaxTouchPoints > 0
			},
			cssTransitions: function() {
				var t = r.body.style;
				return void 0 !== t.transition || void 0 !== t.webkitTransition || void 0 !== t.mozTransition || void 0 !== t.oTransition || void 0 !== t.msTransition
			},
			hasPromiseSupport: function() {
				return !!(s.Promise && s.Promise.resolve && s.Promise.reject && s.Promise.all && s.Promise.race && (new s.Promise( function( e ) {
					t = e
				} ), a.isType( "function", t )));
				var t
			},
			hasIntersectionObserverSupport: function() {
				return !!s.IntersectionObserver
			},
			hasPerformanceInformation: function() {
				return s.performance && s.performance.getEntriesByType
			},
			hasLocalStorageSupport: function() {
				try {
					return s.localStorage.setItem( "local_storage_support_test", "true" ), void 0 !== s.localStorage
				} catch ( t ) {
					return i.devError( "window.localStorage is not supported:", t ), !1
				}
			}
		}
	}, function( t, e, n ) {
		var r = n( 6 ), i = n( 2 );

		function o( t, e ) {
			return t.then( e, e )
		}

		function s( t ) {
			return t instanceof r
		}

		t.exports = {
			always: o,
			allResolved: function( t ) {
				var e;
				return void 0 === t ? r.reject( new Error( "undefined is not an object" ) ) : Array.isArray( t ) ? (e = t.length) ? new r( function( n, r ) {
					var i = 0, o = [];

					function a() {
						(i += 1) === e && (0 === o.length ? r() : n( o ))
					}

					function u( t ) {
						o.push( t ), a()
					}

					t.forEach( function( t ) {
						s( t ) ? t.then( u, a ) : u( t )
					} )
				} ) : r.resolve( [] ) : r.reject( new Error( "Type error" ) )
			},
			some: function( t ) {
				var e;
				return e = (t = t || []).length, t = t.filter( s ), e ? e !== t.length ? r.reject( "non-Promise passed to .some" ) : new r( function( e, n ) {
					var r = 0;

					function i() {
						(r += 1) === t.length && n()
					}

					t.forEach( function( t ) {
						t.then( e, i )
					} )
				} ) : r.reject( "no promises passed to .some" )
			},
			isPromise: s,
			allSettled: function( t ) {
				function e() {
				}

				return r.all( (t || []).map( function( t ) {
					return o( t, e )
				} ) )
			},
			timeout: function( t, e ) {
				var n = new i;
				return setTimeout( function() {
					n.reject( new Error( "Promise timed out" ) )
				}, e ), t.then( function( t ) {
					n.resolve( t )
				}, function( t ) {
					n.reject( t )
				} ), n.promise
			}
		}
	}, function( t, e ) {
		var n = "i", r = 0, i = 0;
		t.exports = {
			generate: function() {
				return n + String( + new Date ) + Math.floor( 1e5 * Math.random() ) + r ++
			},
			deterministic: function() {
				return n + String( i ++ )
			}
		}
	}, function( t, e, n ) {
		var r = n( 49 ), i = n( 51 ), o = n( 0 );
		t.exports = o.aug( r.get( "events" ) || {}, i.Emitter )
	}, function( t, e, n ) {
		var r = n( 27 ), i = n( 112 );
		t.exports = r.build( [i] )
	}, function( t, e, n ) {
		var r = n( 40 ), i = n( 109 ), o = n( 7 );
		(r = Object.create( r )).build = o( r.build, null, i ), t.exports = r
	}, function( t, e, n ) {
		var r = n( 40 ), i = n( 41 ), o = n( 7 );
		(r = Object.create( r )).build = o( r.build, null, i ), t.exports = r
	}, function( t, e, n ) {
		var r = n( 84 ), i = n( 76 ), o = n( 85 ), s = n( 8 ), a = n( 71 ), u = n( 75 ), c = n( 20 ), d = n( 5 ),
			f = n( 24 ), l = n( 0 );

		function h( t ) {
			if ( !t || !t.headers ) {
				throw new Error( "unexpected response schema" );
			}
			return {
				html: t.body,
				config: t.config,
				pollInterval: 1e3 * parseInt( t.headers.xPolling, 10 ) || null,
				maxCursorPosition: t.headers.maxPosition,
				minCursorPosition: t.headers.minPosition
			}
		}

		function p( t ) {
			if ( t && t.headers ) {
				throw new Error( t.headers.status );
			}
			throw t instanceof Error ? t : new Error( t )
		}

		t.exports = function( t ) {
			t.params( {
				instanceId: {
					required: !0,
					fallback: f.deterministic
				},
				lang: {
					required: !0,
					transform: a.matchLanguage,
					fallback: "en"
				},
				tweetLimit: { transform: d.asInt }
			} ), t.defineProperty( "endpoint", {
				get: function() {
					throw new Error( "endpoint not specified" )
				}
			} ), t.defineProperty( "pollEndpoint", {
				get: function() {
					return this.endpoint
				}
			} ), t.define( "cbId", function( t ) {
				var e = t ? "_new" : "_old";
				return "tl_" + this.params.instanceId + "_" + this.id + e
			} ), t.define( "queryParams", function() {
				return {
					lang: this.params.lang,
					tz: u.getTimezoneOffset(),
					t: r(),
					domain: s.host,
					tweet_limit: this.params.tweetLimit,
					dnt: c.enabled()
				}
			} ), t.define( "fetch", function() {
				return i.fetch( this.endpoint, this.queryParams(), o, this.cbId() ).then( h, p )
			} ), t.define( "poll", function( t, e ) {
				var n, r;
				return n = {
					since_id: (t = t || {}).sinceId,
					max_id: t.maxId,
					min_position: t.minPosition,
					max_position: t.maxPosition
				}, r = l.aug( this.queryParams(), n ), i.fetch( this.pollEndpoint, r, o, this.cbId( e ) ).then( h, p )
			} )
		}
	}, function( t, e, n ) {
		var r = n( 51 ).makeEmitter();
		t.exports = {
			emitter: r,
			START: "start",
			ALL_WIDGETS_RENDER_START: "all_widgets_render_start",
			ALL_WIDGETS_RENDER_END: "all_widgets_render_end",
			ALL_WIDGETS_AND_IMAGES_LOADED: "all_widgets_and_images_loaded"
		}
	}, function( t, e, n ) {
		var r = n( 115 ), i = n( 118 );

		function o( t ) {
			return r.settingsLoaded().then( function( e ) {
				return e[ t ]
			} )
		}

		function s() {
			return o( "experiments" )
		}

		t.exports = {
			shouldObtainCookieConsent: function() {
				return o( "shouldObtainCookieConsent" )
			},
			getExperiments: s,
			getExperiment: function( t ) {
				return s().then( function( e ) {
					if ( !e[ t ] ) {
						throw new Error( "Experiment not found" );
					}
					return e[ t ]
				} )
			},
			getActiveExperimentDataString: function() {
				return s().then( function( t ) {
					var e = Object.keys( t ).reduce( function( e, n ) {
						var r;
						return t[ n ].version && (r = n.split( "_" ).slice( - 1 )[ 0 ], e.push( r + ";" + t[ n ].bucket )), e
					}, [] );
					return i( e.join( "," ) )
				} )
			},
			getExperimentKeys: function() {
				return s().then( function( t ) {
					return Object.keys( t )
				} )
			},
			load: function() {
				r.load()
			}
		}
	}, function( t, e, n ) {
		var r = n( 4 ), i = n( 0 );
		t.exports = function( t, e, n ) {
			var o;
			if ( n = n || r, t = t || {}, e = e || {}, t.name ) {
				try {
					o = n.createElement( '<iframe name="' + t.name + '"></iframe>' )
				} catch ( e ) {
					(o = n.createElement( "iframe" )).name = t.name
				}
				delete t.name
			} else {
				o = n.createElement( "iframe" );
			}
			return t.id && (o.id = t.id, delete t.id), o.allowtransparency = "true", o.scrolling = "no", o.setAttribute( "frameBorder", 0 ), o.setAttribute( "allowTransparency", !0 ), i.forIn( t, function( t, e ) {
				o.setAttribute( t, e )
			} ), i.forIn( e, function( t, e ) {
				o.style[ t ] = e
			} ), o
		}
	}, function( t, e, n ) {
		var r = n( 1 ).JSON;
		t.exports = {
			stringify: r.stringify || r.encode,
			parse: r.parse || r.decode
		}
	}, function( t, e, n ) {
		var r = n( 0 ), i = n( 43 );
		t.exports = {
			closest: function t( e, n, o ) {
				var s;
				if ( n ) {
					return o = o || n && n.ownerDocument, s = r.isType( "function", e ) ? e : function( t ) {
						return function( e ) {
							return !!e.tagName && i( e, t )
						}
					}( e ), n === o ? s( n ) ? n : void 0 : s( n ) ? n : t( s, n.parentNode, o )
				}
			}
		}
	}, function( t, e, n ) {
		var r, i = n( 4 );

		function o( t ) {
			var e, n, o, s = 0;
			for ( r = {}, e = (t = t || i).getElementsByTagName( "meta" ); e[ s ]; s ++ ) {
				if ( n = e[ s ], /^twitter:/.test( n.getAttribute( "name" ) ) ) {
					o = n.getAttribute( "name" ).replace( /^twitter:/, "" );
				} else {
					if ( !/^twitter:/.test( n.getAttribute( "property" ) ) ) {
						continue;
					}
					o = n.getAttribute( "property" ).replace( /^twitter:/, "" )
				}
				r[ o ] = n.getAttribute( "content" ) || n.getAttribute( "value" )
			}
		}

		o(), t.exports = {
			init: o,
			val: function( t ) {
				return r[ t ]
			}
		}
	}, function( t, e, n ) {
		var r = n( 10 ), i = {}, o = - 1, s = {};

		function a( t ) {
			var e = t.getAttribute( "data-twitter-event-id" );
			return e || (t.setAttribute( "data-twitter-event-id", ++ o ), o)
		}

		function u( t, e, n ) {
			var r = 0, i = t && t.length || 0;
			for ( r = 0; r < i; r ++ ) {
				if ( t[ r ].call( e, n, e ), n.ceaseImmediately ) {
					return !1
				}
			}
		}

		function c( t, e, n ) {
			for (
				var i = n || t.target || t.srcElement, o = r.list( i ).map( function( t ) {
					return "." + t
				} ).concat( i.tagName ), s = 0, a = o.length; s < a; s ++
			) {
				if ( !1 === u( e[ o[ s ] ], i, t ) ) {
					return;
				}
			}
			t.cease || i !== this && c.call( this, t, e, i.parentElement || i.parentNode )
		}

		function d( t, e, n, r ) {
			function i( r ) {
				c.call( t, r, n[ e ] )
			}

			!function( t, e, n, r ) {
				t.id && (s[ t.id ] = s[ t.id ] || [], s[ t.id ].push( {
					el: t,
					listener: e,
					type: n,
					rootId: r
				} ))
			}( t, i, e, r ), t.addEventListener( e, i, !1 )
		}

		function f( t ) {
			t && t.preventDefault ? t.preventDefault() : t.returnValue = !1
		}

		function l( t ) {
			t && (t.cease = !0) && t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
		}

		t.exports = {
			stop: function( t ) {
				return l( t ), f( t ), !1
			},
			stopPropagation: l,
			stopImmediatePropagation: function( t ) {
				t && (t.ceaseImmediately = !0, l( t ), t.stopImmediatePropagation())
			},
			preventDefault: f,
			delegate: function( t, e, n, r ) {
				var o = a( t );
				i[ o ] = i[ o ] || {}, i[ o ][ e ] || (i[ o ][ e ] = {}, d( t, e, i[ o ], o )), i[ o ][ e ][ n ] = i[ o ][ e ][ n ] || [], i[ o ][ e ][ n ].push( r )
			},
			simulate: function( t, e, n ) {
				var r = a( e ), o = i[ r ] && i[ r ];
				c.call( e, { target: n }, o[ t ] )
			},
			removeDelegatesForWidget: function( t ) {
				var e = s[ t ];
				e && (e.forEach( function( t ) {
					t.el.removeEventListener( t.type, t.listener, !1 ), delete i[ t.rootId ]
				} ), delete s[ t ])
			}
		}
	}, function( t, e, n ) {
		var r = n( 78 ), i = n( 106 ), o = n( 81 ), s = n( 21 ), a = new (n( 114 ))( function( t ) {
			var e, n, a;
			if ( 0 !== t.length ) {
				if ( u( t ) ) {
					return c( t );
				}
				e = r( t, function( t ) {
					return s.noticeSeen( t.input.namespace )
				} ), n = e.true, a = e.false, n && n.length > 0 && (n = n.slice( 0, 1 ), o.canFlushOneItem( n[ 0 ] ) || (n[ 0 ].input.data.message = ""), c( n )), a && (u( a ) ? c : function( t ) {
					i.init(), t.forEach( function( t ) {
						var e = t.input.namespace, n = t.input.data, r = t.input.offsite, o = t.input.version;
						i.clientEvent( e, n, r, o )
					} ), i.flush().then( function() {
						t.forEach( function( t ) {
							t.taskDoneDeferred.resolve()
						} )
					}, function() {
						t.forEach( function( t ) {
							t.taskDoneDeferred.reject()
						} )
					} )
				})( a )
			}
		} );

		function u( t ) {
			return 1 === t.length && o.canFlushOneItem( t[ 0 ] )
		}

		function c( t ) {
			t.forEach( function( t ) {
				var e = t.input.namespace, n = t.input.data, r = t.input.offsite, i = t.input.version;
				o.clientEvent( e, n, r, i ), t.taskDoneDeferred.resolve()
			} )
		}

		t.exports = {
			scribe: function( t, e, n, r ) {
				return a.add( {
					namespace: t,
					data: e,
					offsite: n,
					version: r
				} )
			},
			pause: function() {
				a.pause()
			},
			resume: function() {
				a.resume()
			}
		}
	}, function( t, e, n ) {
		var r = n( 27 ), i = n( 127 );
		t.exports = r.build( [i] )
	}, function( t, e, n ) {
		var r = n( 8 ), i = n( 79 ), o = n( 0 ), s = i.getCanonicalURL() || r.href, a = s;
		t.exports = {
			isFramed: function() {
				return s !== a
			},
			rootDocumentLocation: function( t ) {
				return t && o.isType( "string", t ) && (s = t), s
			},
			currentDocumentLocation: function() {
				return a
			}
		}
	}, function( t, e, n ) {
		var r = n( 107 ), i = n( 108 ), o = n( 0 );
		t.exports = {
			couple: function() {
				return o.toRealArray( arguments )
			},
			build: function( t, e, n ) {
				var o = new t;
				return (e = i( r( e || [] ) )).forEach( function( t ) {
					t.call( null, o )
				} ), o.build( n )
			}
		}
	}, function( t, e, n ) {
		var r = n( 110 ), i = n( 0 ), o = n( 42 );

		function s() {
			this.Component = this.factory(), this._adviceArgs = [], this._lastArgs = []
		}

		i.aug( s.prototype, {
			factory: o,
			build: function( t ) {
				var e = this;
				return this.Component, i.aug( this.Component.prototype.boundParams, t ), this._adviceArgs.concat( this._lastArgs ).forEach( function( t ) {
					(function( t, e, n ) {
						var r = this[ e ];
						if ( !r ) {
							throw new Error( e + " does not exist" );
						}
						this[ e ] = t( r, n )
					}).apply( e.Component.prototype, t )
				} ), delete this._lastArgs, delete this._adviceArgs, this.Component
			},
			params: function( t ) {
				var e = this.Component.prototype.paramConfigs;
				t = t || {}, this.Component.prototype.paramConfigs = i.aug( {}, t, e )
			},
			define: function( t, e ) {
				if ( t in this.Component.prototype ) {
					throw new Error( t + " has previously been defined" );
				}
				this.override( t, e )
			},
			defineStatic: function( t, e ) {
				this.Component[ t ] = e
			},
			override: function( t, e ) {
				this.Component.prototype[ t ] = e
			},
			defineProperty: function( t, e ) {
				if ( t in this.Component.prototype ) {
					throw new Error( t + " has previously been defined" );
				}
				this.overrideProperty( t, e )
			},
			overrideProperty: function( t, e ) {
				var n = i.aug( { configurable: !0 }, e );
				Object.defineProperty( this.Component.prototype, t, n )
			},
			before: function( t, e ) {
				this._adviceArgs.push( [r.before, t, e] )
			},
			after: function( t, e ) {
				this._adviceArgs.push( [r.after, t, e] )
			},
			around: function( t, e ) {
				this._adviceArgs.push( [r.around, t, e] )
			},
			last: function( t, e ) {
				this._lastArgs.push( [r.after, t, e] )
			}
		} ), t.exports = s
	}, function( t, e, n ) {
		var r = n( 0 );

		function i() {
			return !0
		}

		function o( t ) {
			return t
		}

		t.exports = function() {
			function t( t ) {
				var e = this;
				t = t || {}, this.params = Object.keys( this.paramConfigs ).reduce( function( n, s ) {
					var a = [], u = e.boundParams, c = e.paramConfigs[ s ], d = c.validate || i, f = c.transform || o;
					if ( s in u && a.push( u[ s ] ), s in t && a.push( t[ s ] ), a = "fallback" in c ? a.concat( c.fallback ) : a, n[ s ] = function( t, e, n ) {
						var i = null;
						return t.some( function( t ) {
							if ( t = r.isType( "function", t ) ? t() : t, e( t ) ) {
								return i = n( t ), !0
							}
						} ), i
					}( a, d, f ), c.required && null == n[ s ] ) {
						throw new Error( s + " is a required parameter" );
					}
					return n
				}, {} ), this.initialize()
			}

			return r.aug( t.prototype, {
				paramConfigs: {},
				boundParams: {},
				initialize: function() {
				}
			} ), t
		}
	}, function( t, e, n ) {
		var r = n( 1 ).HTMLElement,
			i = r.prototype.matches || r.prototype.matchesSelector || r.prototype.webkitMatchesSelector || r.prototype.mozMatchesSelector || r.prototype.msMatchesSelector || r.prototype.oMatchesSelector;
		t.exports = function( t, e ) {
			if ( i ) {
				return i.call( t, e )
			}
		}
	}, function( t, e, n ) {
		var r, i = n( 10 ), o = n( 4 ), s = n( 1 ), a = n( 35 ), u = n( 53 ), c = n( 5 ), d = n( 24 ), f = "csptest";
		t.exports = {
			inlineStyle: function() {
				var t = f + d.generate(), e = o.createElement( "div" ), n = o.createElement( "style" ),
					l = "." + t + " { visibility: hidden; }";
				return !!o.body && (c.asBoolean( a.val( "widgets:csp" ) ) && (r = !1), void 0 !== r ? r : (e.style.display = "none", i.add( e, t ), n.type = "text/css", n.appendChild( o.createTextNode( l ) ), o.body.appendChild( n ), o.body.appendChild( e ), r = "hidden" === s.getComputedStyle( e ).visibility, u( e ), u( n ), r))
			}
		}
	}, function( t, e, n ) {
		var r = n( 1 );
		t.exports = function( t, e, n ) {
			var i, o = 0;
			return n = n || null, function s() {
				var a = n || this, u = arguments, c = + new Date;
				if ( r.clearTimeout( i ), c - o > e ) {
					return o = c, void t.apply( a, u );
				}
				i = r.setTimeout( function() {
					s.apply( a, u )
				}, e )
			}
		}
	}, function( t, e ) {
		t.exports = function( t ) {
			var e = t.getBoundingClientRect();
			return {
				width: e.width,
				height: e.height
			}
		}
	}, function( t ) {
		t.exports = { version: "5c0e8d3:1584649541982" }
	}, function( t, e, n ) {
		/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.5+7f2b526d
 */
		var r;
		r = function() {
			"use strict";

			function t( t ) {
				return "function" == typeof t
			}

			var e = Array.isArray ? Array.isArray : function( t ) {
					return "[object Array]" === Object.prototype.toString.call( t )
				}, n = 0, r = void 0, i = void 0, o = function( t, e ) {
					l[ n ] = t, l[ n + 1 ] = e, 2 === (n += 2) && (i ? i( h ) : w())
				}, s = "undefined" != typeof window ? window : void 0, a = s || {},
				u = a.MutationObserver || a.WebKitMutationObserver,
				c = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call( process ),
				d = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

			function f() {
				var t = setTimeout;
				return function() {
					return t( h, 1 )
				}
			}

			var l = new Array( 1e3 );

			function h() {
				for ( var t = 0; t < n; t += 2 ) {
					(0, l[ t ])( l[ t + 1 ] ), l[ t ] = void 0, l[ t + 1 ] = void 0;
				}
				n = 0
			}

			var p, m, v, g, w = void 0;

			function y( t, e ) {
				var n = this, r = new this.constructor( E );
				void 0 === r[ _ ] && k( r );
				var i = n._state;
				if ( i ) {
					var s = arguments[ i - 1 ];
					o( function() {
						return D( i, r, s, n._result )
					} )
				} else {
					j( n, r, t, e );
				}
				return r
			}

			function b( t ) {
				if ( t && "object" == typeof t && t.constructor === this ) {
					return t;
				}
				var e = new this( E );
				return C( e, t ), e
			}

			c ? w = function() {
				return process.nextTick( h )
			} : u ? (m = 0, v = new u( h ), g = document.createTextNode( "" ), v.observe( g, { characterData: !0 } ), w = function() {
				g.data = m = ++ m % 2
			}) : d ? ((p = new MessageChannel).port1.onmessage = h, w = function() {
				return p.port2.postMessage( 0 )
			}) : w = void 0 === s ? function() {
				try {
					var t = Function( "return this" )().require( "vertx" );
					return void 0 !== (r = t.runOnLoop || t.runOnContext) ? function() {
						r( h )
					} : f()
				} catch ( t ) {
					return f()
				}
			}() : f();
			var _ = Math.random().toString( 36 ).substring( 2 );

			function E() {
			}

			var x = void 0, T = 1, A = 2, S = { error: null };

			function R( t ) {
				try {
					return t.then
				} catch ( t ) {
					return S.error = t, S
				}
			}

			function N( e, n, r ) {
				n.constructor === e.constructor && r === y && n.constructor.resolve === b ? function( t, e ) {
					e._state === T ? L( t, e._result ) : e._state === A ? I( t, e._result ) : j( e, void 0, function( e ) {
						return C( t, e )
					}, function( e ) {
						return I( t, e )
					} )
				}( e, n ) : r === S ? (I( e, S.error ), S.error = null) : void 0 === r ? L( e, n ) : t( r ) ? function( t, e, n ) {
					o( function( t ) {
						var r = !1, i = function( t, e, n, r ) {
							try {
								t.call( e, n, r )
							} catch ( t ) {
								return t
							}
						}( n, e, function( n ) {
							r || (r = !0, e !== n ? C( t, n ) : L( t, n ))
						}, function( e ) {
							r || (r = !0, I( t, e ))
						}, t._label );
						!r && i && (r = !0, I( t, i ))
					}, t )
				}( e, n, r ) : L( e, n )
			}

			function C( t, e ) {
				var n, r;
				t === e ? I( t, new TypeError( "You cannot resolve a promise with itself" ) ) : (r = typeof (n = e), null === n || "object" !== r && "function" !== r ? L( t, e ) : N( t, e, R( e ) ))
			}

			function P( t ) {
				t._onerror && t._onerror( t._result ), O( t )
			}

			function L( t, e ) {
				t._state === x && (t._result = e, t._state = T, 0 !== t._subscribers.length && o( O, t ))
			}

			function I( t, e ) {
				t._state === x && (t._state = A, t._result = e, o( P, t ))
			}

			function j( t, e, n, r ) {
				var i = t._subscribers, s = i.length;
				t._onerror = null, i[ s ] = e, i[ s + T ] = n, i[ s + A ] = r, 0 === s && t._state && o( O, t )
			}

			function O( t ) {
				var e = t._subscribers, n = t._state;
				if ( 0 !== e.length ) {
					for ( var r = void 0, i = void 0, o = t._result, s = 0; s < e.length; s += 3 ) {
						r = e[ s ], i = e[ s + n ], r ? D( n, r, i, o ) : i( o );
					}
					t._subscribers.length = 0
				}
			}

			function D( e, n, r, i ) {
				var o = t( r ), s = void 0, a = void 0, u = void 0, c = void 0;
				if ( o ) {
					if ( (s = function( t, e ) {
						try {
							return t( e )
						} catch ( t ) {
							return S.error = t, S
						}
					}( r, i )) === S ? (c = !0, a = s.error, s.error = null) : u = !0, n === s ) {
						return void I( n, new TypeError( "A promises callback cannot return that same promise." ) )
					}
				} else {
					s = i, u = !0;
				}
				n._state !== x || (o && u ? C( n, s ) : c ? I( n, a ) : e === T ? L( n, s ) : e === A && I( n, s ))
			}

			var z = 0;

			function k( t ) {
				t[ _ ] = z ++, t._state = void 0, t._result = void 0, t._subscribers = []
			}

			var M = function() {
				function t( t, n ) {
					this._instanceConstructor = t, this.promise = new t( E ), this.promise[ _ ] || k( this.promise ), e( n ) ? (this.length = n.length, this._remaining = n.length, this._result = new Array( this.length ), 0 === this.length ? L( this.promise, this._result ) : (this.length = this.length || 0, this._enumerate( n ), 0 === this._remaining && L( this.promise, this._result ))) : I( this.promise, new Error( "Array Methods must be provided an Array" ) )
				}

				return t.prototype._enumerate = function( t ) {
					for ( var e = 0; this._state === x && e < t.length; e ++ ) {
						this._eachEntry( t[ e ], e )
					}
				}, t.prototype._eachEntry = function( t, e ) {
					var n = this._instanceConstructor, r = n.resolve;
					if ( r === b ) {
						var i = R( t );
						if ( i === y && t._state !== x ) {
							this._settledAt( t._state, e, t._result );
						} else if ( "function" != typeof i ) {
							this._remaining --, this._result[ e ] = t;
						} else if ( n === U ) {
							var o = new n( E );
							N( o, t, i ), this._willSettleAt( o, e )
						} else {
							this._willSettleAt( new n( function( e ) {
								return e( t )
							} ), e )
						}
					} else {
						this._willSettleAt( r( t ), e )
					}
				}, t.prototype._settledAt = function( t, e, n ) {
					var r = this.promise;
					r._state === x && (this._remaining --, t === A ? I( r, n ) : this._result[ e ] = n), 0 === this._remaining && L( r, this._result )
				}, t.prototype._willSettleAt = function( t, e ) {
					var n = this;
					j( t, void 0, function( t ) {
						return n._settledAt( T, e, t )
					}, function( t ) {
						return n._settledAt( A, e, t )
					} )
				}, t
			}(), U = function() {
				function e( t ) {
					this[ _ ] = z ++, this._result = this._state = void 0, this._subscribers = [], E !== t && ("function" != typeof t && function() {
						throw new TypeError( "You must pass a resolver function as the first argument to the promise constructor" )
					}(), this instanceof e ? function( t, e ) {
						try {
							e( function( e ) {
								C( t, e )
							}, function( e ) {
								I( t, e )
							} )
						} catch ( e ) {
							I( t, e )
						}
					}( this, t ) : function() {
						throw new TypeError( "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function." )
					}())
				}

				return e.prototype.catch = function( t ) {
					return this.then( null, t )
				}, e.prototype.finally = function( e ) {
					var n = this.constructor;
					return t( e ) ? this.then( function( t ) {
						return n.resolve( e() ).then( function() {
							return t
						} )
					}, function( t ) {
						return n.resolve( e() ).then( function() {
							throw t
						} )
					} ) : this.then( e, e )
				}, e
			}();
			return U.prototype.then = y, U.all = function( t ) {
				return new M( this, t ).promise
			}, U.race = function( t ) {
				var n = this;
				return e( t ) ? new n( function( e, r ) {
					for ( var i = t.length, o = 0; o < i; o ++ ) {
						n.resolve( t[ o ] ).then( e, r )
					}
				} ) : new n( function( t, e ) {
					return e( new TypeError( "You must pass an array to race." ) )
				} )
			}, U.resolve = b, U.reject = function( t ) {
				var e = new this( E );
				return I( e, t ), e
			}, U._setScheduler = function( t ) {
				i = t
			}, U._setAsap = function( t ) {
				o = t
			}, U._asap = o, U.polyfill = function() {
				var t = void 0;
				if ( "undefined" != typeof global ) {
					t = global;
				} else if ( "undefined" != typeof self ) {
					t = self;
				} else {
					try {
						t = Function( "return this" )()
					} catch ( t ) {
						throw new Error( "polyfill failed because global object is unavailable in this environment" )
					}
				}
				var e = t.Promise;
				if ( e ) {
					var n = null;
					try {
						n = Object.prototype.toString.call( e.resolve() )
					} catch ( t ) {
					}
					if ( "[object Promise]" === n && !e.cast ) {
						return
					}
				}
				t.Promise = U
			}, U.Promise = U, U
		}, t.exports = r()
	}, function( t, e, n ) {
		var r = n( 50 );
		t.exports = new r( "twttr" )
	}, function( t, e, n ) {
		var r = n( 1 ), i = n( 0 );

		function o( t ) {
			return i.isType( "string", t ) ? t.split( "." ) : i.isType( "array", t ) ? t : []
		}

		function s( t, e ) {
			(e = e || r)[ t ] = e[ t ] || {}, Object.defineProperty( this, "base", { value: e[ t ] } ), Object.defineProperty( this, "name", { value: t } )
		}

		i.aug( s.prototype, {
			get: function( t ) {
				return o( t ).reduce( function( t, e ) {
					if ( i.isObject( t ) ) {
						return t[ e ]
					}
				}, this.base )
			},
			set: function( t, e, n ) {
				var r = o( t ), s = function( t, e ) {
					var n = o( e ).slice( 0, - 1 );
					return n.reduce( function( t, e, r ) {
						if ( t[ e ] = t[ e ] || {}, !i.isObject( t[ e ] ) ) {
							throw new Error( n.slice( 0, r + 1 ).join( "." ) + " is already defined with a value." );
						}
						return t[ e ]
					}, t )
				}( this.base, t ), a = r.slice( - 1 );
				return n && a in s ? s[ a ] : s[ a ] = e
			},
			init: function( t, e ) {
				return this.set( t, e, !0 )
			},
			unset: function( t ) {
				var e = o( t ), n = this.get( e.slice( 0, - 1 ) );
				n && delete n[ e.slice( - 1 ) ]
			},
			aug: function( t ) {
				var e = this.get( t ), n = i.toRealArray( arguments ).slice( 1 );
				if ( e = void 0 !== e ? e : {}, n.unshift( e ), !n.every( i.isObject ) ) {
					throw new Error( "Cannot augment non-object." );
				}
				return this.set( t, i.aug.apply( null, n ) )
			},
			call: function( t ) {
				var e = this.get( t ), n = i.toRealArray( arguments ).slice( 1 );
				if ( !i.isType( "function", e ) ) {
					throw new Error( "Function " + t + "does not exist." );
				}
				return e.apply( null, n )
			},
			fullPath: function( t ) {
				var e = o( t );
				return e.unshift( this.name ), e.join( "." )
			}
		} ), t.exports = s
	}, function( t, e, n ) {
		var r = n( 0 ), i = n( 7 ), o = {
			bind: function( t, e ) {
				return this._handlers = this._handlers || {}, this._handlers[ t ] = this._handlers[ t ] || [], this._handlers[ t ].push( e )
			},
			unbind: function( t, e ) {
				var n;
				this._handlers && this._handlers[ t ] && (e ? (n = this._handlers[ t ].indexOf( e )) >= 0 && this._handlers[ t ].splice( n, 1 ) : this._handlers[ t ] = [])
			},
			trigger: function( t, e ) {
				var n = this._handlers && this._handlers[ t ];
				(e = e || {}).type = t, n && n.forEach( function( t ) {
					r.async( i( t, this, e ) )
				} )
			}
		};
		t.exports = {
			Emitter: o,
			makeEmitter: function() {
				return r.aug( function() {
				}, o )
			}
		}
	}, function( t, e, n ) {
		var r = n( 103 ), i = n( 77 ), o = n( 6 ), s = n( 23 ), a = n( 7 ), u = n( 0 ), c = new i( function( t ) {
			var e = function( t ) {
				return t.reduce( function( t, e ) {
					return t[ e._className ] = t[ e._className ] || [], t[ e._className ].push( e ), t
				}, {} )
			}( t.map( r.fromRawTask ) );
			u.forIn( e, function( t, e ) {
				s.allSettled( e.map( function( t ) {
					return t.initialize()
				} ) ).then( function() {
					e.forEach( function( t ) {
						o.all( [
							t.hydrate(),
							t.insertIntoDom()
						] ).then( a( t.render, t ) ).then( a( t.success, t ), a( t.fail, t ) )
					} )
				} )
			} )
		} );
		t.exports = {
			addWidget: function( t ) {
				return c.add( t )
			}
		}
	}, function( t, e, n ) {
		var r = n( 18 );
		t.exports = function( t ) {
			return r.write( function() {
				t && t.parentNode && t.parentNode.removeChild( t )
			} )
		}
	}, function( t, e, n ) {
		n( 12 ), t.exports = {
			log: function( t, e ) {
			}
		}
	}, function( t, e, n ) {
		var r = n( 1 );

		function i( t ) {
			return (t = t || r).getSelection && t.getSelection()
		}

		t.exports = {
			getSelection: i,
			getSelectedText: function( t ) {
				var e = i( t );
				return e ? e.toString() : ""
			}
		}
	}, function( t, e, n ) {
		var r = n( 4 ), i = n( 1 ), o = n( 2 ), s = 2e4;
		t.exports = function( t ) {
			var e = new o, n = r.createElement( "img" );
			return n.onload = n.onerror = function() {
				i.setTimeout( e.resolve, 50 )
			}, n.src = t, i.setTimeout( e.reject, s ), e.promise
		}
	}, function( t, e, n ) {
		var r = n( 113 );
		t.exports = function( t ) {
			t.define( "createElement", r ), t.define( "createFragment", r ), t.define( "htmlToElement", r ), t.define( "hasSelectedText", r ), t.define( "addRootClass", r ), t.define( "removeRootClass", r ), t.define( "hasRootClass", r ), t.define( "prependStyleSheet", r ), t.define( "appendStyleSheet", r ), t.define( "prependCss", r ), t.define( "appendCss", r ), t.define( "makeVisible", r ), t.define( "injectWidgetEl", r ), t.define( "matchHeightToContent", r ), t.define( "matchWidthToContent", r )
		}
	}, function( t, e ) {
		t.exports = function( t ) {
			var e, n = !1;
			return function() {
				return n ? e : (n = !0, e = t.apply( this, arguments ))
			}
		}
	}, function( t, e, n ) {
		var r = n( 15 ), i = n( 122 ), o = n( 60 ), s = n( 16 );
		t.exports = function( t, e, n ) {
			return new r( i, o, s.DM_BUTTON, t, e, n )
		}
	}, function( t, e, n ) {
		var r = n( 61 ), i = n( 26 );
		t.exports = r.isSupported() ? r : i
	}, function( t, e, n ) {
		var r = n( 27 ), i = n( 123 );
		t.exports = r.build( [i] )
	}, function( t, e, n ) {
		var r = n( 15 ), i = n( 126 ), o = n( 38 ), s = n( 16 );
		t.exports = function( t, e, n ) {
			return new r( i, o, s.FOLLOW_BUTTON, t, e, n )
		}
	}, function( t, e, n ) {
		var r = n( 15 ), i = n( 134 ), o = n( 26 ), s = n( 16 );
		t.exports = function( t, e, n ) {
			return new r( i, o, s.MOMENT, t, e, n )
		}
	}, function( t, e, n ) {
		var r = n( 15 ), i = n( 136 ), o = n( 26 ), s = n( 16 );
		t.exports = function( t, e, n ) {
			return new r( i, o, s.PERISCOPE, t, e, n )
		}
	}, function( t, e, n ) {
		var r = n( 83 ), i = n( 138 ), o = n( 142 ), s = n( 144 ), a = n( 146 ), u = n( 148 ), c = {
			collection: i,
			event: o,
			likes: s,
			list: a,
			profile: u,
			url: f
		}, d = [u, s, i, a, o];

		function f( t ) {
			return r( d, function( e ) {
				try {
					return new e( t )
				} catch ( t ) {
				}
			} )
		}

		t.exports = function( t ) {
			return t ? function( t ) {
				var e, n;
				return e = (t.sourceType + "").toLowerCase(), (n = c[ e ]) ? new n( t ) : null
			}( t ) || f( t ) : null
		}
	}, function( t, e, n ) {
		var r = n( 15 ), i = n( 150 ), o = n( 26 ), s = n( 16 );
		t.exports = function( t, e, n ) {
			return new r( i, o, s.TIMELINE, t, e, n )
		}
	}, function( t, e, n ) {
		var r = n( 4 ), i = n( 68 ), o = n( 152 ), s = n( 15 ), a = n( 38 ), u = n( 153 ), c = n( 60 ), d = n( 154 ),
			f = n( 16 );
		t.exports = function( t, e, n, l ) {
			var h, p = i.isHorizonTweetEnabled( l );
			return o( l, t.tweetId ), p ? (h = r.createElement( "div" ), new s( u, a, f.TWEET, t, e, n, { sandboxWrapperEl: h } )) : new s( d, c, f.TWEET, t, e, n )
		}
	}, function( t, e ) {
		var n = "tfw_horizon_tweet_embed_9555";
		t.exports = {
			isHorizonTweetEnabled: function( t ) {
				return !(!t || !t[ n ] || "hte" !== t[ n ].bucket)
			}
		}
	}, function( t, e, n ) {
		var r = n( 15 ), i = n( 156 ), o = n( 38 ), s = n( 16 );
		t.exports = function( t, e, n ) {
			var a = t && t.type || "share",
				u = "hashtag" == a ? s.HASHTAG_BUTTON : "mention" == a ? s.MENTION_BUTTON : s.SHARE_BUTTON;
			return new r( i, o, u, t, e, n )
		}
	}, function( t, e, n ) {
		var r = n( 37 ), i = n( 39 ), o = n( 0 ), s = n( 68 ), a = n( 31 );
		t.exports = function( t ) {
			var e = {
				widget_origin: i.rootDocumentLocation(),
				widget_frame: i.isFramed() ? i.currentDocumentLocation() : null,
				duration_ms: t.duration,
				item_ids: t.widgetIds || []
			}, n = o.aug( t.namespace, {
				page: "page",
				component: "performance"
			} );
			return a.getExperiments().then( function( t ) {
				var i = s.isHorizonTweetEnabled( t ) ? o.aug( e, { context: "horizon" } ) : e;
				r.scribe( n, i )
			} )
		}
	}, function( t, e, n ) {
		var r = n( 0 ), i = n( 139 ), o = ["ar", "fa", "he", "ur"];
		t.exports = {
			isRtlLang: function( t ) {
				return t = String( t ).toLowerCase(), r.contains( o, t )
			},
			matchLanguage: function( t ) {
				return t = (t = (t || "").toLowerCase()).replace( "_", "-" ), i( t ) ? t : (t = t.replace( /-.*/, "" ), i( t ) ? t : "en")
			}
		}
	}, function( t ) {
		t.exports = {
			TWEET: 0,
			RETWEET: 10,
			CUSTOM_TIMELINE: 17,
			LIVE_VIDEO_EVENT: 28,
			QUOTE_TWEET: 23
		}
	}, function( t ) {
		t.exports = {
			tweetButtonHtmlPath: "/widgets/tweet_button.d0f13be8321eb432fba28cfc1c3351b1.{{lang}}.html",
			followButtonHtmlPath: "/widgets/follow_button.d0f13be8321eb432fba28cfc1c3351b1.{{lang}}.html",
			hubHtmlPath: "/widgets/hub.html",
			widgetIframeHtmlPath: "/widgets/widget_iframe.d0f13be8321eb432fba28cfc1c3351b1.html",
			resourceBaseUrl: "https://platform.twitter.com"
		}
	}, function( t, e, n ) {
		var r = n( 3 ), i = n( 100 ), o = n( 25 ), s = n( 11 ), a = {
			favorite: ["favorite", "like"],
			follow: ["follow"],
			like: ["favorite", "like"],
			retweet: ["retweet"],
			tweet: ["tweet"]
		};

		function u( t ) {
			this.srcEl = [], this.element = t
		}

		u.open = function( t, e, n ) {
			var u = (r.intentType( t ) || "").toLowerCase();
			r.isTwitterURL( t ) && (function( t, e ) {
				i.open( t, {}, e )
			}( t, n ), e && o.trigger( "click", {
				target: e,
				region: "intent",
				type: "click",
				data: {}
			} ), e && a[ u ] && a[ u ].forEach( function( n ) {
				o.trigger( n, {
					target: e,
					region: "intent",
					type: n,
					data: function( t, e ) {
						var n = s.decodeURL( e );
						switch ( t ) {
							case"favorite":
							case"like":
								return { tweet_id: n.tweet_id };
							case"follow":
								return {
									screen_name: n.screen_name,
									user_id: n.user_id
								};
							case"retweet":
								return { source_tweet_id: n.tweet_id };
							default:
								return {}
						}
					}( u, t )
				} )
			} ))
		}, t.exports = u
	}, function( t, e ) {
		t.exports = {
			getTimezoneOffset: function() {
				var t = (new Date).toString().match( /(GMT[+-]?\d+)/ );
				return t && t[ 0 ] || "GMT"
			}
		}
	}, function( t, e, n ) {
		var r = n( 4 ), i = n( 9 ), o = n( 2 ), s = n( 0 ), a = n( 11 ), u = "cb", c = 0;
		t.exports = {
			fetch: function( t, e, n, d ) {
				var f, l, h;
				return d = function( t ) {
					if ( t ) {
						return t.replace( /[^\w$]/g, "_" )
					}
				}( d || u + c ++ ), f = i.fullPath( [
					"callbacks",
					d
				] ), l = r.createElement( "script" ), h = new o, e = s.aug( {}, e, {
					callback: f,
					suppress_response_codes: !0
				} ), i.set( ["callbacks", d], function( t ) {
					var e;
					t = (e = n( t || !1 )).resp, e.success ? h.resolve( t ) : h.reject( t ), l.onload = l.onreadystatechange = null, l.parentNode && l.parentNode.removeChild( l ), i.unset( [
						"callbacks",
						d
					] )
				} ), l.onerror = function() {
					h.reject( new Error( "failed to fetch " + l.src ) )
				}, l.src = a.url( t, e ), l.async = "async", r.body.appendChild( l ), h.promise
			}
		}
	}, function( t, e, n ) {
		var r = n( 2 ), i = n( 105 ), o = n( 7 );

		function s( t ) {
			this._inputsQueue = [], this._task = t, this._hasFlushBeenScheduled = !1
		}

		s.prototype.add = function( t ) {
			var e = new r;
			return this._inputsQueue.push( {
				input: t,
				taskDoneDeferred: e
			} ), this._hasFlushBeenScheduled || (this._hasFlushBeenScheduled = !0, i( o( this._flush, this ) )), e.promise
		}, s.prototype._flush = function() {
			try {
				this._task.call( null, this._inputsQueue )
			} catch ( t ) {
				this._inputsQueue.forEach( function( e ) {
					e.taskDoneDeferred.reject( t )
				} )
			}
			this._inputsQueue = [], this._hasFlushBeenScheduled = !1
		}, t.exports = s
	}, function( t, e ) {
		t.exports = function( t, e ) {
			return t.reduce( function( t, n ) {
				var r = e( n );
				return t[ r ] = t[ r ] || [], t[ r ].push( n ), t
			}, {} )
		}
	}, function( t, e, n ) {
		var r = n( 4 ), i = n( 8 ), o = n( 3 );

		function s( t, e ) {
			var n, r;
			return e = e || i, /^https?:\/\//.test( t ) ? t : /^\/\//.test( t ) ? e.protocol + t : (n = e.host + (e.port.length ? ":" + e.port : ""), 0 !== t.indexOf( "/" ) && ((r = e.pathname.split( "/" )).pop(), r.push( t ), t = "/" + r.join( "/" )), [
				e.protocol,
				"//",
				n,
				t
			].join( "" ))
		}

		t.exports = {
			absolutize: s,
			getCanonicalURL: function() {
				for ( var t, e = r.getElementsByTagName( "link" ), n = 0; e[ n ]; n ++ ) {
					if ( "canonical" == (t = e[ n ]).rel ) {
						return s( t.href )
					}
				}
			},
			getScreenNameFromPage: function() {
				for (
					var t, e, n, i = [
						r.getElementsByTagName( "a" ),
						r.getElementsByTagName( "link" )
					], s = 0, a = 0, u = /\bme\b/; t = i[ s ]; s ++
				) {
					for ( a = 0; e = t[ a ]; a ++ ) {
						if ( u.test( e.rel ) && (n = o.screenName( e.href )) ) {
							return n
						}
					}
				}
			}
		}
	}, function( t, e, n ) {
		var r = n( 8 ), i = /^[^#?]*\.(gov|mil)(:\d+)?([#?].*)?$/i, o = {};

		function s( t ) {
			return t in o ? o[ t ] : o[ t ] = i.test( t )
		}

		t.exports = {
			isUrlSensitive: s,
			isHostPageSensitive: function() {
				return s( r.host )
			}
		}
	}, function( t, e, n ) {
		var r = n( 20 ), i = n( 54 ), o = n( 11 ), s = n( 21 ), a = n( 0 ), u = n( 9 ).get( "scribeCallback" ),
			c = 2083, d = [], f = o.url( s.CLIENT_EVENT_ENDPOINT, {
				dnt: 0,
				l: ""
			} ), l = encodeURIComponent( f ).length;

		function h( t, e, n, r ) {
			var i = !a.isObject( t ), o = !!e && !a.isObject( e );
			i || o || (u && u( arguments ), p( s.formatClientEventNamespace( t ), s.formatClientEventData( e, n, r ), s.CLIENT_EVENT_ENDPOINT ))
		}

		function p( t, e, n ) {
			var r, u;
			n && a.isObject( t ) && a.isObject( e ) && (i.log( t, e ), r = s.flattenClientEventPayload( t, e ), u = { l: s.stringify( r ) }, s.noticeSeen( t ) && (u.notice_seen = !0), r.dnt && (u.dnt = 1), w( o.url( n, u ) ))
		}

		function m( t, e, n, r ) {
			var i = !a.isObject( t ), o = !!e && !a.isObject( e );
			if ( !i && !o ) {
				return v( s.flattenClientEventPayload( s.formatClientEventNamespace( t ), s.formatClientEventData( e, n, r ) ) )
			}
		}

		function v( t ) {
			return d.push( t ), d
		}

		function g( t ) {
			return encodeURIComponent( t ).length + 3
		}

		function w( t ) {
			return (new Image).src = t
		}

		t.exports = {
			canFlushOneItem: function( t ) {
				var e = g( s.stringify( t ) );
				return l + e < c
			},
			_enqueueRawObject: v,
			scribe: p,
			clientEvent: h,
			clientEvent2: function( t, e, n ) {
				return h( t, e, n, 2 )
			},
			enqueueClientEvent: m,
			flushClientEvents: function() {
				var t;
				return d.length > 1 && m( {
					page: "widgets_js",
					component: "scribe_pixel",
					action: "batch_log"
				}, {} ), t = d, d = [], t.reduce( function( e, n, r ) {
					var i = e.length, o = i && e[ i - 1 ];
					return r + 1 == t.length && n.event_namespace && "batch_log" == n.event_namespace.action && (n.message = [
						"entries:" + r,
						"requests:" + i
					].join( "/" )), function t( e ) {
						return Array.isArray( e ) || (e = [e]), e.reduce( function( e, n ) {
							var r, i = s.stringify( n ), o = g( i );
							return l + o < c ? e = e.concat( i ) : (r = s.splitLogEntry( n )).length > 1 && (e = e.concat( t( r ) )), e
						}, [] )
					}( n ).forEach( function( t ) {
						var n = g( t );
						(!o || o.urlLength + n > c) && (o = {
							urlLength: l,
							items: []
						}, e.push( o )), o.urlLength += n, o.items.push( t )
					} ), e
				}, [] ).map( function( t ) {
					var e = { l: t.items };
					return r.enabled() && (e.dnt = 1), w( o.url( s.CLIENT_EVENT_ENDPOINT, e ) )
				} )
			},
			interaction: function( t, e, n, r ) {
				var i = s.extractTermsFromDOM( t.target || t.srcElement );
				i.action = r || "click", h( i, e, n )
			}
		}
	}, function( t, e, n ) {
		var r = n( 0 ), i = n( 43 );
		t.exports = function( t, e ) {
			return i( t, e ) ? [t] : r.toRealArray( t.querySelectorAll( e ) )
		}
	}, function( t, e ) {
		t.exports = function( t, e, n ) {
			for ( var r, i = 0; i < t.length; i ++ ) {
				if ( r = e.call( n, t[ i ], i, t ) ) {
					return r
				}
			}
		}
	}, function( t, e ) {
		t.exports = function() {
			return Math.floor( + new Date / 9e5 )
		}
	}, function( t, e, n ) {
		var r = n( 12 );
		t.exports = function( t ) {
			var e, n;
			return e = t.headers && t.headers.status, !(n = t && !t.error && 200 === e) && t.headers && t.headers.message && r.publicError( t.headers.message ), {
				success: n,
				resp: t
			}
		}
	}, function( t, e, n ) {
		var r = n( 37 ), i = n( 21 );
		t.exports = function( t, e, n, o ) {
			r.scribe( i.formatClientEventNamespace( {
				client: "tfw",
				page: "ddg",
				section: t,
				action: "experiment"
			} ), {
				experiment_key: t,
				bucket: e,
				version: n,
				data: o
			}, !0 )
		}
	}, function( t, e, n ) {
		var r, i = n( 30 ), o = 0;

		function s() {
			r && r.length === o && (i.emitter.trigger( i.ALL_WIDGETS_AND_IMAGES_LOADED, r ), r = null)
		}

		i.emitter.bind( i.ALL_WIDGETS_RENDER_END, function( t ) {
			r = t.widgets, s()
		} ), t.exports = {
			reportImagesLoadForAWidget: function() {
				o ++, s()
			}
		}
	}, , , , , , , , , function( t, e, n ) {
		var r, i = n( 2 ), o = n( 4 ), s = n( 98 ), a = n( 49 ), u = n( 9 ), c = n( 99 ), d = n( 25 ), f = n( 102 ),
			l = n( 157 ), h = n( 165 ), p = n( 166 ), m = n( 30 ), v = n( 31 );
		n( 167 ), m.emitter.trigger( m.START ), u.set( "widgets.init", !0 ), a.set( "init", !0 ), p(), r = new i, s.exposeReadyPromise( r.promise, a.base, "_e" ), a.set( "widgets", l ), a.set( "widgets.load", f.load ), a.set( "events", d ), h( function() {
			v.load(), r.resolve( a.base ), c.attachTo( o ), f.loadPage()
		} )
	}, function( t, e ) {
		t.exports = navigator
	}, function( t, e, n ) {
		var r = n( 7 );
		t.exports = {
			exposeReadyPromise: function( t, e, n ) {
				e.ready = r( t.then, t ), n && Array.isArray( e[ n ] ) && (e[ n ].forEach( r( t.then, t ) ), delete e[ n ])
			}
		}
	}, function( t, e, n ) {
		var r = n( 8 ), i = n( 36 ), o = n( 34 ), s = n( 74 ), a = n( 3 );

		function u( t ) {
			var e, n, u;
			t.altKey || t.metaKey || t.shiftKey || (e = o.closest( function( t ) {
				return "A" === t.tagName || "AREA" === t.tagName
			}, t.target )) && a.isIntentURL( e.href ) && (n = (n = (n = [
				u = e.href,
				"original_referer=" + r.href
			].join( - 1 == u.indexOf( "?" ) ? "?" : "&" )).replace( /^http[:]/, "https:" )).replace( /^\/\//, "https://" ), s.open( n, e ), i.preventDefault( t ))
		}

		t.exports = {
			attachTo: function( t ) {
				t.addEventListener( "click", u, !1 )
			}
		}
	}, function( t, e, n ) {
		var r, i = n( 1 ), o = n( 101 ), s = n( 36 ), a = n( 34 ), u = n( 22 ), c = n( 3 ), d = n( 24 ), f = n( 0 ),
			l = "intent_", h = i.screen.width, p = i.screen.height;

		function m( t, e ) {
			function n( t ) {
				return Math.round( t / 2 )
			}

			return t > e ? {
				coordinate: 0,
				size: e
			} : {
				coordinate: n( e ) - n( t ),
				size: t
			}
		}

		function v( t, e, n ) {
			var i, o;
			e = r.parse( e ), n = n || {}, i = m( e.width, n.width || h ), e.left = i.coordinate, e.width = i.size, o = m( e.height, n.height || p ), e.top = o.coordinate, e.height = o.size, this.win = t, this.features = function( t ) {
				var e = [];
				return f.forIn( t, function( t, n ) {
					e.push( t + "=" + n )
				} ), e.join( "," )
			}( e )
		}

		r = (new o).defaults( {
			width: 550,
			height: 520,
			personalbar: "0",
			toolbar: "0",
			location: "1",
			scrollbars: "1",
			resizable: "1"
		} ), v.prototype.open = function( t, e ) {
			var n = e && "click" == e.type && a.closest( "a", e.target ),
				r = e && (e.altKey || e.metaKey || e.shiftKey), i = n && (u.ios() || u.android());
			if ( c.isTwitterURL( t ) ) {
				return r || i ? this : (this.name = l + d.generate(), this.popup = this.win.open( t, this.name, this.features ), e && s.preventDefault( e ), this)
			}
		}, v.open = function( t, e, n ) {
			return new v( i, e ).open( t, n )
		}, t.exports = v
	}, function( t, e, n ) {
		var r = n( 5 ), i = n( 0 );

		function o() {
			this.assertions = [], this._defaults = {}
		}

		o.prototype.assert = function( t, e ) {
			return this.assertions.push( {
				fn: t,
				msg: e || "assertion failed"
			} ), this
		}, o.prototype.defaults = function( t ) {
			return this._defaults = t || this._defaults, this
		}, o.prototype.require = function( t ) {
			var e = this;
			return (t = Array.isArray( t ) ? t : i.toRealArray( arguments )).forEach( function( t ) {
				e.assert( function( t ) {
					return function( e ) {
						return r.hasValue( e[ t ] )
					}
				}( t ), "required: " + t )
			} ), this
		}, o.prototype.parse = function( t ) {
			var e, n;
			if ( e = i.aug( {}, this._defaults, t || {} ), (n = this.assertions.reduce( function( t, n ) {
				return n.fn( e ) || t.push( n.msg ), t
			}, [] )).length > 0 ) {
				throw new Error( n.join( "\n" ) );
			}
			return e
		}, t.exports = o
	}, function( t, e, n ) {
		var r = n( 4 ), i = n( 6 ), o = n( 23 ), s = n( 52 ), a = n( 35 ), u = n( 9 ), c = n( 37 ), d = n( 25 ),
			f = n( 5 ), l = n( 0 ), h = n( 31 ), p = n( 119 ), m = n( 30 );

		function v() {
			var t = a.val( "widgets:autoload" ) || !0;
			return !f.isFalseValue( t ) && (f.isTruthValue( t ) ? r.body : r.querySelectorAll( t ))
		}

		function g( t, e ) {
			var n, i;
			return t = (t = t || r.body).length ? l.toRealArray( t ) : [t], c.pause(), i = function( t, e ) {
				return t.reduce( function( t, n ) {
					return t.concat( p.reduce( function( t, r ) {
						return t.concat( r( n, e ) )
					}, [] ) )
				}, [] )
			}( t, e ), m.emitter.trigger( m.ALL_WIDGETS_RENDER_START, { widgets: i } ), n = o.allResolved( i.map( function( t ) {
				return s.addWidget( t )
			} ) ).then( function( t ) {
				d.trigger( "loaded", { widgets: t } ), t && t.length && m.emitter.trigger( m.ALL_WIDGETS_RENDER_END, { widgets: t } )
			} ), o.always( n, function() {
				c.resume()
			} ), n
		}

		function w( t ) {
			return h.getExperiments().then( function( e ) {
				return g( t, e )
			} )
		}

		t.exports = {
			load: w,
			loadPage: function() {
				var t = v();
				return !1 === t ? i.resolve() : (u.set( "widgets.loaded", !0 ), w( t ))
			},
			_getPageLoadTarget: v
		}
	}, function( t, e, n ) {
		var r = n( 10 ), i = n( 18 ), o = n( 25 ), s = n( 53 ), a = n( 6 ), u = n( 23 );

		function c( t, e ) {
			this._widget = null, this._sandbox = null, this._hydrated = !1, this._insertedIntoDom = !1, this._Sandbox = t.Sandbox, this._factory = t.factory, this._widgetParams = t.parameters, this._resolve = e, this._className = t.className, this._renderedClassName = t.className + "-rendered", this._errorClassName = t.className + "-error", this._srcEl = t.srcEl, this._targetGlobal = function( t ) {
				return (t.srcEl || t.targetEl).ownerDocument.defaultView
			}( t ), this._sandboxWrapperEl = t.options ? t.options.sandboxWrapperEl : null, this._insertionStrategy = function( e ) {
				var n, r = t.srcEl, i = t.targetEl, o = t.options ? t.options.sandboxWrapperEl : null;
				o ? (o.appendChild( e ), n = o) : n = e, r ? i.insertBefore( n, r ) : i.appendChild( n )
			}
		}

		c.fromRawTask = function( t ) {
			return new c( t.input, t.taskDoneDeferred.resolve )
		}, c.prototype.initialize = function() {
			var t = this, e = new this._Sandbox( this._targetGlobal );
			return this._factory( this._widgetParams, e ).then( function( n ) {
				return t._widget = n, t._sandbox = e, n._sandboxWrapperEl = t._sandboxWrapperEl, n
			} )
		}, c.prototype.insertIntoDom = function() {
			var t = this;
			return this._widget ? this._sandbox.insert( this._widget.id, {
				class: [
					this._className,
					this._renderedClassName
				].join( " " )
			}, null, this._insertionStrategy ).then( function() {
				t._insertedIntoDom = !0
			} ) : a.reject( new Error( "cannot insert widget into DOM before it is initialized" ) )
		}, c.prototype.hydrate = function() {
			var t = this;
			return this._widget ? this._widget.hydrate().then( function() {
				t._hydrated = !0
			} ) : a.reject( new Error( "cannot hydrate widget before it is initialized" ) )
		}, c.prototype.render = function() {
			var t = this;

			function e( e ) {
				return s( t._sandbox.sandboxEl ).then( function() {
					return a.reject( e )
				} )
			}

			return this._hydrated ? this._insertedIntoDom ? t._widget.render( t._sandbox ).then( function() {
				return t._sandbox.onResize( function() {
					return t._widget.resize().then( function() {
						o.trigger( "resize", { target: t._sandbox.sandboxEl } )
					} )
				} ), t._widget.show()
			} ).then( function() {
				return s( t._srcEl ).then( function() {
					return t._sandbox.sandboxEl
				} )
			}, e ) : e( new Error( "cannot render widget before DOM insertion" ) ) : e( new Error( "cannot render widget before hydration" ) )
		}, c.prototype.fail = function() {
			var t = this;
			return this._srcEl ? u.always( i.write( function() {
				r.add( t._srcEl, t._errorClassName )
			} ), function() {
				o.trigger( "rendered", { target: t._srcEl } ), t._resolve( t._srcEl )
			} ) : (t._resolve(), a.resolve())
		}, c.prototype.success = function() {
			o.trigger( "rendered", { target: this._sandbox.sandboxEl } ), this._resolve( this._sandbox.sandboxEl )
		}, t.exports = c
	}, function( t, e, n ) {
		var r;
		!function() {
			"use strict";
			var i = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function( t ) {
				return window.setTimeout( t, 1e3 / 60 )
			};

			function o() {
				this.frames = [], this.lastId = 0, this.raf = i, this.batch = {
					hash: {},
					read: [],
					write: [],
					mode: null
				}
			}

			o.prototype.read = function( t, e ) {
				var n = this.add( "read", t, e ), r = n.id;
				return this.batch.read.push( n.id ), "reading" === this.batch.mode || this.batch.scheduled ? r : (this.scheduleBatch(), r)
			}, o.prototype.write = function( t, e ) {
				var n = this.add( "write", t, e ), r = this.batch.mode, i = n.id;
				return this.batch.write.push( n.id ), "writing" === r || "reading" === r || this.batch.scheduled ? i : (this.scheduleBatch(), i)
			}, o.prototype.defer = function( t, e, n ) {
				"function" == typeof t && (n = e, e = t, t = 1);
				var r = this, i = t - 1;
				return this.schedule( i, function() {
					r.run( {
						fn: e,
						ctx: n
					} )
				} )
			}, o.prototype.clear = function( t ) {
				if ( "function" == typeof t ) {
					return this.clearFrame( t );
				}
				t = Number( t );
				var e = this.batch.hash[ t ];
				if ( e ) {
					var n = this.batch[ e.type ], r = n.indexOf( t );
					delete this.batch.hash[ t ], ~ r && n.splice( r, 1 )
				}
			}, o.prototype.clearFrame = function( t ) {
				var e = this.frames.indexOf( t );
				~ e && this.frames.splice( e, 1 )
			}, o.prototype.scheduleBatch = function() {
				var t = this;
				this.schedule( 0, function() {
					t.batch.scheduled = !1, t.runBatch()
				} ), this.batch.scheduled = !0
			}, o.prototype.uniqueId = function() {
				return ++ this.lastId
			}, o.prototype.flush = function( t ) {
				for ( var e; e = t.shift(); ) {
					this.run( this.batch.hash[ e ] )
				}
			}, o.prototype.runBatch = function() {
				try {
					this.batch.mode = "reading", this.flush( this.batch.read ), this.batch.mode = "writing", this.flush( this.batch.write ), this.batch.mode = null
				} catch ( t ) {
					throw this.runBatch(), t
				}
			}, o.prototype.add = function( t, e, n ) {
				var r = this.uniqueId();
				return this.batch.hash[ r ] = {
					id: r,
					fn: e,
					ctx: n,
					type: t
				}
			}, o.prototype.run = function( t ) {
				var e = t.ctx || this, n = t.fn;
				if ( delete this.batch.hash[ t.id ], !this.onError ) {
					return n.call( e );
				}
				try {
					n.call( e )
				} catch ( t ) {
					this.onError( t )
				}
			}, o.prototype.loop = function() {
				var t, e = this, n = this.raf, r = !1;

				function i() {
					var t = e.frames.shift();
					e.frames.length ? n( i ) : e.looping = !1, t && t()
				}

				this.looping || (t = setTimeout( function() {
					r = !0, i()
				}, 500 ), n( function() {
					r || (clearTimeout( t ), i())
				} ), this.looping = !0)
			}, o.prototype.schedule = function( t, e ) {
				return this.frames[ t ] ? this.schedule( t + 1, e ) : (this.loop(), this.frames[ t ] = e)
			};
			var s = new o;
			void 0 !== t && t.exports ? t.exports = s : void 0 === (r = function() {
				return s
			}.call( e, n, e, t )) || (t.exports = r)
		}()
	}, function( t, e, n ) {
		var r = n( 48 ).Promise;
		t.exports = r._asap
	}, function( t, e, n ) {
		var r, i, o, s = n( 4 ), a = n( 1 ), u = n( 32 ), c = n( 20 ), d = n( 2 ), f = n( 6 ), l = n( 54 ), h = n( 21 ),
			p = n( 0 ), m = n( 26 ), v = n( 9 ).get( "scribeCallback" ), g = Math.floor( 1e3 * Math.random() ) + "_",
			w = "rufous-frame-" + g + "-", y = "rufous-form-" + g + "-", b = 0, _ = !1, E = new d;

		function x() {
			var t = o.createElement( "form" ), e = o.createElement( "input" ), n = o.createElement( "input" );
			return b ++, t.action = h.CLIENT_EVENT_ENDPOINT, t.method = "POST", t.target = w + b, t.id = y + b, e.type = "hidden", e.name = "dnt", e.value = c.enabled(), n.type = "hidden", n.name = "tfw_redirect", n.value = h.RUFOUS_REDIRECT, t.appendChild( e ), t.appendChild( n ), t
		}

		function T() {
			var t = w + b;
			return u( {
				id: t,
				name: t,
				width: 0,
				height: 0,
				border: 0
			}, { display: "none" }, o.doc )
		}

		t.exports = {
			clientEvent: function( t, e, n, i ) {
				(function( t, e ) {
					var n = !p.isObject( t ), r = !!e && !p.isObject( e ), i = n || r;
					return i
				})( t, e ) || (v && v( arguments ), E.promise.then( function() {
					!function( t, e ) {
						var n, i, s;
						p.isObject( t ) && p.isObject( e ) && (l.log( t, e ), s = h.flattenClientEventPayload( t, e ), (n = r.firstChild).value = + (+ n.value || s.dnt || 0), (i = o.createElement( "input" )).type = "hidden", i.name = "l", i.value = h.stringify( s ), r.appendChild( i ))
					}( h.formatClientEventNamespace( t ), h.formatClientEventData( e, n, i ) )
				} ))
			},
			flush: function() {
				return E.promise.then( function() {
					var t;
					return r.children.length <= 2 ? f.reject() : (t = f.all( [
						o.doc.body.appendChild( r ),
						o.doc.body.appendChild( i )
					] ).then( function( t ) {
						var e = t[ 0 ], n = t[ 1 ];
						return n.addEventListener( "load", function() {
							!function( t, e ) {
								return function() {
									var n = t.parentNode;
									n && (n.removeChild( t ), n.removeChild( e ))
								}
							}( e, n )()
						} ), e.submit(), t
					} ), r = x(), i = T(), t)
				} )
			},
			init: function() {
				return _ ? E.promise : ((o = new m( a )).insert( "rufous-sandbox", null, { display: "none" }, function( t ) {
					s.body.appendChild( t )
				} ).then( function() {
					o.setTitle( "Twitter analytics iframe" ), r = x(), i = T(), E.resolve( [r, i] )
				} ), _ = !0, E.promise)
			}
		}
	}, function( t, e, n ) {
		var r = n( 0 );
		t.exports = function t( e ) {
			var n = [];
			return e.forEach( function( e ) {
				var i = r.isType( "array", e ) ? t( e ) : [e];
				n = n.concat( i )
			} ), n
		}
	}, function( t, e ) {
		t.exports = function( t ) {
			return t.filter( function( e, n ) {
				return t.indexOf( e ) === n
			} )
		}
	}, function( t, e, n ) {
		var r = n( 41 ), i = n( 0 ), o = n( 111 );

		function s() {
			r.apply( this, arguments )
		}

		s.prototype = Object.create( r.prototype ), i.aug( s.prototype, { factory: o } ), t.exports = s
	}, function( t, e, n ) {
		var r = n( 23 ), i = n( 0 ), o = n( 7 );
		t.exports = {
			before: function( t, e ) {
				return function() {
					var n, i = this, o = arguments;
					return n = e.apply( this, arguments ), r.isPromise( n ) ? n.then( function() {
						return t.apply( i, o )
					} ) : t.apply( this, arguments )
				}
			},
			after: function( t, e ) {
				return function() {
					var n, i = this, o = arguments;

					function s( t, e ) {
						return r.isPromise( e ) ? e.then( function() {
							return t
						} ) : t
					}

					return n = t.apply( this, arguments ), r.isPromise( n ) ? n.then( function( t ) {
						return s( t, e.apply( i, o ) )
					} ) : s( n, e.apply( this, arguments ) )
				}
			},
			around: function( t, e ) {
				return function() {
					var n = i.toRealArray( arguments );
					return n.unshift( o( t, this ) ), e.apply( this, n )
				}
			}
		}
	}, function( t, e, n ) {
		var r = n( 10 ), i = n( 18 ), o = n( 42 ), s = n( 6 ), a = n( 0 );
		t.exports = function() {
			var t = o();

			function e( e ) {
				t.apply( this, arguments ), Object.defineProperty( this, "targetGlobal", { value: e } )
			}

			return e.prototype = Object.create( t.prototype ), a.aug( e.prototype, {
				id: null,
				initialized: !1,
				width: 0,
				height: 0,
				sandboxEl: null,
				insert: function() {
					return s.reject()
				},
				onResize: function() {
				},
				addClass: function( t ) {
					var e = this.sandboxEl;
					return t = Array.isArray( t ) ? t : [t], i.write( function() {
						t.forEach( function( t ) {
							r.add( e, t )
						} )
					} )
				},
				removeClass: function( t ) {
					var e = this.sandboxEl;
					return t = Array.isArray( t ) ? t : [t], i.write( function() {
						t.forEach( function( t ) {
							r.remove( e, t )
						} )
					} )
				},
				styleSelf: function( t ) {
					var e = this;
					return i.write( function() {
						a.forIn( t, function( t, n ) {
							e.sandboxEl.style[ t ] = n
						} )
					} )
				}
			} ), e
		}
	}, function( t, e, n ) {
		var r = n( 4 ), i = n( 10 ), o = n( 18 ), s = n( 55 ), a = n( 27 ), u = n( 56 ), c = n( 44 ), d = n( 45 ),
			f = n( 32 ), l = n( 12 ), h = n( 46 ), p = n( 2 ), m = n( 6 ), v = n( 0 ), g = n( 9 ), w = n( 24 ),
			y = n( 7 ), b = { allowfullscreen: "true" }, _ = {
				position: "absolute",
				visibility: "hidden",
				display: "block",
				width: "0px",
				height: "0px",
				padding: "0",
				border: "none"
			}, E = {
				position: "static",
				visibility: "visible"
			}, x = "SandboxRoot", T = ".SandboxRoot { display: none; }", A = 50;

		function S( t, e, n, r ) {
			return e = v.aug( { id: t }, b, e ), n = v.aug( {}, _, n ), f( e, n, r )
		}

		function R( t, e, n, i, s ) {
			var a = new p, u = w.generate(), c = S( t, e, n, s );
			return g.set( ["sandbox", u], function() {
				var t = c.contentWindow.document;
				o.write( function() {
					t.write( "<!DOCTYPE html><html><head></head><body></body></html>" )
				} ).then( function() {
					t.close(), a.resolve( c )
				} )
			} ), c.src = [
				"javascript:",
				'document.write("");',
				"try { window.parent.document; }",
				'catch (e) { document.domain="' + r.domain + '"; }',
				"window.parent." + g.fullPath( ["sandbox", u] ) + "();"
			].join( "" ), c.addEventListener( "error", a.reject, !1 ), o.write( function() {
				i.parentNode.replaceChild( c, i )
			} ), a.promise
		}

		t.exports = a.couple( n( 57 ), function( t ) {
			t.overrideProperty( "id", {
				get: function() {
					return this.sandboxEl && this.sandboxEl.id
				}
			} ), t.overrideProperty( "initialized", {
				get: function() {
					return !!this.win
				}
			} ), t.overrideProperty( "width", {
				get: function() {
					return this._width
				}
			} ), t.overrideProperty( "height", {
				get: function() {
					return this._height
				}
			} ), t.overrideProperty( "sandboxEl", {
				get: function() {
					return this.iframeEl
				}
			} ), t.defineProperty( "iframeEl", {
				get: function() {
					return this._iframe
				}
			} ), t.defineProperty( "rootEl", {
				get: function() {
					return this.doc && this.doc.documentElement
				}
			} ), t.defineProperty( "widgetEl", {
				get: function() {
					return this.doc && this.doc.body.firstElementChild
				}
			} ), t.defineProperty( "win", {
				get: function() {
					return this.iframeEl && this.iframeEl.contentWindow
				}
			} ), t.defineProperty( "doc", {
				get: function() {
					return this.win && this.win.document
				}
			} ), t.define( "_updateCachedDimensions", function() {
				var t = this;
				return o.read( function() {
					var e, n = h( t.sandboxEl );
					"visible" == t.sandboxEl.style.visibility ? t._width = n.width : (e = h( t.sandboxEl.parentElement ).width, t._width = Math.min( n.width, e )), t._height = n.height
				} )
			} ), t.define( "_setTargetToBlank", function() {
				var t = this.createElement( "base" );
				t.target = "_blank", this.doc.head.appendChild( t )
			} ), t.define( "_didResize", function() {
				var t = this, e = this._resizeHandlers.slice( 0 );
				return this._updateCachedDimensions().then( function() {
					e.forEach( function( e ) {
						e( t )
					} )
				} )
			} ), t.define( "setTitle", function( t ) {
				this.iframeEl.title = t
			} ), t.override( "createElement", function( t ) {
				return this.doc.createElement( t )
			} ), t.override( "createFragment", function() {
				return this.doc.createDocumentFragment()
			} ), t.override( "htmlToElement", function( t ) {
				var e;
				return (e = this.createElement( "div" )).innerHTML = t, e.firstElementChild
			} ), t.override( "hasSelectedText", function() {
				return !!s.getSelectedText( this.win )
			} ), t.override( "addRootClass", function( t ) {
				var e = this.rootEl;
				return t = Array.isArray( t ) ? t : [t], this.initialized ? o.write( function() {
					t.forEach( function( t ) {
						i.add( e, t )
					} )
				} ) : m.reject( new Error( "sandbox not initialized" ) )
			} ), t.override( "removeRootClass", function( t ) {
				var e = this.rootEl;
				return t = Array.isArray( t ) ? t : [t], this.initialized ? o.write( function() {
					t.forEach( function( t ) {
						i.remove( e, t )
					} )
				} ) : m.reject( new Error( "sandbox not initialized" ) )
			} ), t.override( "hasRootClass", function( t ) {
				return i.present( this.rootEl, t )
			} ), t.define( "addStyleSheet", function( t, e ) {
				var n, r = new p;
				return this.initialized ? ((n = this.createElement( "link" )).type = "text/css", n.rel = "stylesheet", n.href = t, n.addEventListener( "load", r.resolve, !1 ), n.addEventListener( "error", r.reject, !1 ), o.write( y( e, null, n ) ).then( function() {
					return u( t ).then( r.resolve, r.reject ), r.promise
				} )) : m.reject( new Error( "sandbox not initialized" ) )
			} ), t.override( "prependStyleSheet", function( t ) {
				var e = this.doc;
				return this.addStyleSheet( t, function( t ) {
					var n = e.head.firstElementChild;
					return n ? e.head.insertBefore( t, n ) : e.head.appendChild( t )
				} )
			} ), t.override( "appendStyleSheet", function( t ) {
				var e = this.doc;
				return this.addStyleSheet( t, function( t ) {
					return e.head.appendChild( t )
				} )
			} ), t.define( "addCss", function( t, e ) {
				var n;
				return c.inlineStyle() ? ((n = this.createElement( "style" )).type = "text/css", n.appendChild( this.doc.createTextNode( t ) ), o.write( y( e, null, n ) )) : (l.devError( "CSP enabled; cannot embed inline styles" ), m.resolve())
			} ), t.override( "prependCss", function( t ) {
				var e = this.doc;
				return this.addCss( t, function( t ) {
					var n = e.head.firstElementChild;
					return n ? e.head.insertBefore( t, n ) : e.head.appendChild( t )
				} )
			} ), t.override( "appendCss", function( t ) {
				var e = this.doc;
				return this.addCss( t, function( t ) {
					return e.head.appendChild( t )
				} )
			} ), t.override( "makeVisible", function() {
				var t = this;
				return this.styleSelf( E ).then( function() {
					t._updateCachedDimensions()
				} )
			} ), t.override( "injectWidgetEl", function( t ) {
				var e = this;
				return this.initialized ? this.widgetEl ? m.reject( new Error( "widget already injected" ) ) : o.write( function() {
					e.doc.body.appendChild( t )
				} ) : m.reject( new Error( "sandbox not initialized" ) )
			} ), t.override( "matchHeightToContent", function() {
				var t, e = this;
				return o.read( function() {
					t = e.widgetEl ? h( e.widgetEl ).height : 0
				} ), o.write( function() {
					e.sandboxEl.style.height = t + "px"
				} ).then( function() {
					return e._updateCachedDimensions()
				} )
			} ), t.override( "matchWidthToContent", function() {
				var t, e = this;
				return o.read( function() {
					t = e.widgetEl ? h( e.widgetEl ).width : 0
				} ), o.write( function() {
					e.sandboxEl.style.width = t + "px"
				} ).then( function() {
					return e._updateCachedDimensions()
				} )
			} ), t.after( "initialize", function() {
				this._iframe = null, this._width = this._height = 0, this._resizeHandlers = []
			} ), t.override( "insert", function( t, e, n, r ) {
				var i = this, s = new p, a = this.targetGlobal.document, u = S( t, e, n, a );
				return o.write( y( r, null, u ) ), u.addEventListener( "load", function() {
					(function( t ) {
						try {
							t.contentWindow.document
						} catch ( t ) {
							return m.reject( t )
						}
						return m.resolve( t )
					})( u ).then( null, y( R, null, t, e, n, u, a ) ).then( s.resolve, s.reject )
				}, !1 ), u.addEventListener( "error", s.reject, !1 ), s.promise.then( function( t ) {
					var e = d( i._didResize, A, i );
					return i._iframe = t, i.win.addEventListener( "resize", e, !1 ), m.all( [
						i._setTargetToBlank(),
						i.addRootClass( x ),
						i.prependCss( T )
					] )
				} )
			} ), t.override( "onResize", function( t ) {
				this._resizeHandlers.push( t )
			} ), t.after( "styleSelf", function() {
				return this._updateCachedDimensions()
			} )
		} )
	}, function( t, e ) {
		t.exports = function() {
			throw new Error( "unimplemented method" )
		}
	}, function( t, e, n ) {
		var r = n( 2 ), i = n( 7 ), o = 100, s = 3e3;

		function a( t, e ) {
			this._inputsQueue = [], this._task = t, this._isPaused = !1, this._flushDelay = e && e.flushDelay || o, this._pauseLength = e && e.pauseLength || s, this._flushTimeout = void 0
		}

		a.prototype.add = function( t ) {
			var e = new r;
			return this._inputsQueue.push( {
				input: t,
				taskDoneDeferred: e
			} ), this._scheduleFlush(), e.promise
		}, a.prototype._scheduleFlush = function() {
			this._isPaused || (clearTimeout( this._flushTimeout ), this._flushTimeout = setTimeout( i( this._flush, this ), this._flushDelay ))
		}, a.prototype._flush = function() {
			try {
				this._task.call( null, this._inputsQueue )
			} catch ( t ) {
				this._inputsQueue.forEach( function( e ) {
					e.taskDoneDeferred.reject( t )
				} )
			}
			this._inputsQueue = [], this._flushTimeout = void 0
		}, a.prototype.pause = function( t ) {
			clearTimeout( this._flushTimeout ), this._isPaused = !0, !t && this._pauseLength && setTimeout( i( this.resume, this ), this._pauseLength )
		}, a.prototype.resume = function() {
			this._isPaused = !1, this._scheduleFlush()
		}, t.exports = a
	}, function( t, e, n ) {
		var r, i = n( 73 ), o = n( 32 ), s = n( 2 ), a = n( 4 ), u = n( 19 ), c = n( 22 ), d = n( 33 ), f = n( 8 ),
			l = n( 12 ), h = n( 116 ), p = n( 58 ), m = n( 9 ), v = n( 11 ), g = n( 117 ), w = n( 3 ), y = n( 0 ),
			b = n( 1 ), _ = p( function() {
				return new s
			} );

		function E( t ) {
			var e = t || {
				should_obtain_cookie_consent: !0,
				experiments: {}
			};
			return new g( e.should_obtain_cookie_consent, e.experiments )
		}

		t.exports = {
			load: function() {
				var t, e, n, s;
				if ( c.ie9() || c.ie10() || "http:" !== f.protocol && "https:" !== f.protocol ) {
					return l.devError( "Using default settings due to unsupported browser or protocol." ), r = E(), void _().resolve();
				}
				t = { origin: f.origin }, u.settings().indexOf( "localhost" ) > - 1 && (t.localSettings = !0), e = v.url( i.resourceBaseUrl + i.widgetIframeHtmlPath, t ), n = function( t ) {
					var n, i, o, s;
					if ( i = w.isTwitterURL( t.origin ), o = e.substr( 0, t.origin.length ) === t.origin, s = w.isTwimgURL( t.origin ), o && i || s ) {
						try {
							(n = "string" == typeof t.data ? d.parse( t.data ) : t.data).namespace === h.settings && (r = E( n.settings ), _().resolve())
						} catch ( t ) {
							l.devError( t )
						}
					}
				}, b.addEventListener( "message", n ), s = o( {
					src: e,
					title: "Twitter settings iframe"
				}, { display: "none" } ), a.body.appendChild( s )
			},
			settingsLoaded: function() {
				var t, e, n;
				return t = new s, e = m.get( "experimentOverride" ), _().promise.then( function() {
					e && e.name && e.assignment && ((n = {})[ e.name ] = { bucket: e.assignment }, r.experiments = y.aug( r.experiments, n )), t.resolve( r )
				} ).catch( function( e ) {
					t.reject( e )
				} ), t.promise
			}
		}
	}, function( t, e ) {
		t.exports = { settings: "twttr.settings" }
	}, function( t, e ) {
		t.exports = function( t, e ) {
			this.shouldObtainCookieConsent = t, this.experiments = e || {}
		}
	}, function( t, e ) {
		t.exports = function( t ) {
			return t.split( "" ).map( function( t ) {
				return t.charCodeAt( 0 ).toString( 16 )
			} ).join( "" )
		}
	}, function( t, e, n ) {
		t.exports = [n( 120 ), n( 125 ), n( 133 ), n( 135 ), n( 137 ), n( 151 ), n( 155 )]
	}, function( t, e, n ) {
		var r = n( 11 ), i = n( 5 ), o = n( 0 ), s = n( 13 ), a = n( 14 )(), u = n( 59 ), c = "a.twitter-dm-button";
		t.exports = function( t ) {
			return a( t, c ).map( function( t ) {
				return u( function( t ) {
					var e = t.getAttribute( "data-show-screen-name" ), n = s( t ), a = t.getAttribute( "href" ),
						u = t.getAttribute( "data-screen-name" ), c = e ? i.asBoolean( e ) : null,
						d = t.getAttribute( "data-size" ), f = r.decodeURL( a ), l = f.recipient_id,
						h = t.getAttribute( "data-text" ) || f.text,
						p = t.getAttribute( "data-welcome-message-id" ) || f.welcomeMessageId;
					return o.aug( n, {
						screenName: u,
						showScreenName: c,
						size: d,
						text: h,
						userId: l,
						welcomeMessageId: p
					} )
				}( t ), t.parentNode, t )
			} )
		}
	}, function( t, e, n ) {
		var r = n( 0 );
		t.exports = function t( e ) {
			var n;
			if ( e ) {
				return n = e.lang || e.getAttribute( "data-lang" ), r.isType( "string", n ) ? n : t( e.parentElement )
			}
		}
	}, function( t, e, n ) {
		var r = n( 2 );
		t.exports = function( t, e ) {
			var i = new r;
			return n.e( 2 ).then( function( r ) {
				var o;
				try {
					o = n( 88 ), i.resolve( new o( t, e ) )
				} catch ( t ) {
					i.reject( t )
				}
			}.bind( null, n ) ).catch( function( t ) {
				i.reject( t )
			} ), i.promise
		}
	}, function( t, e, n ) {
		var r = n( 124 ), i = n( 1 ), o = n( 10 ), s = n( 36 ), a = n( 18 ), u = n( 55 ), c = n( 27 ), d = n( 56 ),
			f = n( 44 ), l = n( 46 ), h = n( 7 ), p = n( 45 ), m = n( 6 ), v = n( 0 ), g = 50, w = {
				position: "absolute",
				visibility: "hidden",
				display: "block",
				transform: "rotate(0deg)"
			}, y = {
				position: "static",
				visibility: "visible"
			}, b = "twitter-widget", _ = "open", E = "SandboxRoot",
			x = ".SandboxRoot { display: none; max-height: 10000px; }";
		t.exports = c.couple( n( 57 ), function( t ) {
			t.defineStatic( "isSupported", function() {
				return !!i.HTMLElement.prototype.attachShadow && f.inlineStyle()
			} ), t.overrideProperty( "id", {
				get: function() {
					return this.sandboxEl && this.sandboxEl.id
				}
			} ), t.overrideProperty( "initialized", {
				get: function() {
					return !!this._shadowHost
				}
			} ), t.overrideProperty( "width", {
				get: function() {
					return this._width
				}
			} ), t.overrideProperty( "height", {
				get: function() {
					return this._height
				}
			} ), t.overrideProperty( "sandboxEl", {
				get: function() {
					return this._shadowHost
				}
			} ), t.define( "_updateCachedDimensions", function() {
				var t = this;
				return a.read( function() {
					var e, n = l( t.sandboxEl );
					"visible" == t.sandboxEl.style.visibility ? t._width = n.width : (e = l( t.sandboxEl.parentElement ).width, t._width = Math.min( n.width, e )), t._height = n.height
				} )
			} ), t.define( "_didResize", function() {
				var t = this, e = this._resizeHandlers.slice( 0 );
				return this._updateCachedDimensions().then( function() {
					e.forEach( function( e ) {
						e( t )
					} )
				} )
			} ), t.override( "createElement", function( t ) {
				return this.targetGlobal.document.createElement( t )
			} ), t.override( "createFragment", function() {
				return this.targetGlobal.document.createDocumentFragment()
			} ), t.override( "htmlToElement", function( t ) {
				var e;
				return (e = this.createElement( "div" )).innerHTML = t, e.firstElementChild
			} ), t.override( "hasSelectedText", function() {
				return !!u.getSelectedText( this.targetGlobal )
			} ), t.override( "addRootClass", function( t ) {
				var e = this._shadowRootBody;
				return t = Array.isArray( t ) ? t : [t], this.initialized ? a.write( function() {
					t.forEach( function( t ) {
						o.add( e, t )
					} )
				} ) : m.reject( new Error( "sandbox not initialized" ) )
			} ), t.override( "removeRootClass", function( t ) {
				var e = this._shadowRootBody;
				return t = Array.isArray( t ) ? t : [t], this.initialized ? a.write( function() {
					t.forEach( function( t ) {
						o.remove( e, t )
					} )
				} ) : m.reject( new Error( "sandbox not initialized" ) )
			} ), t.override( "hasRootClass", function( t ) {
				return o.present( this._shadowRootBody, t )
			} ), t.override( "addStyleSheet", function( t, e ) {
				return this.addCss( '@import url("' + t + '");', e ).then( function() {
					return d( t )
				} )
			} ), t.override( "prependStyleSheet", function( t ) {
				var e = this._shadowRoot;
				return this.addStyleSheet( t, function( t ) {
					var n = e.firstElementChild;
					return n ? e.insertBefore( t, n ) : e.appendChild( t )
				} )
			} ), t.override( "appendStyleSheet", function( t ) {
				var e = this._shadowRoot;
				return this.addStyleSheet( t, function( t ) {
					return e.appendChild( t )
				} )
			} ), t.override( "addCss", function( t, e ) {
				var n;
				return this.initialized ? f.inlineStyle() ? ((n = this.createElement( "style" )).type = "text/css", n.appendChild( this.targetGlobal.document.createTextNode( t ) ), a.write( h( e, null, n ) )) : m.resolve() : m.reject( new Error( "sandbox not initialized" ) )
			} ), t.override( "prependCss", function( t ) {
				var e = this._shadowRoot;
				return this.addCss( t, function( t ) {
					var n = e.firstElementChild;
					return n ? e.insertBefore( t, n ) : e.appendChild( t )
				} )
			} ), t.override( "appendCss", function( t ) {
				var e = this._shadowRoot;
				return this.addCss( t, function( t ) {
					return e.appendChild( t )
				} )
			} ), t.override( "makeVisible", function() {
				return this.styleSelf( y )
			} ), t.override( "injectWidgetEl", function( t ) {
				var e = this;
				return this.initialized ? this._shadowRootBody.firstElementChild ? m.reject( new Error( "widget already injected" ) ) : a.write( function() {
					e._shadowRootBody.appendChild( t )
				} ).then( function() {
					return e._updateCachedDimensions()
				} ).then( function() {
					var t = p( e._didResize, g, e );
					new r( e._shadowRootBody, t )
				} ) : m.reject( new Error( "sandbox not initialized" ) )
			} ), t.override( "matchHeightToContent", function() {
				return m.resolve()
			} ), t.override( "matchWidthToContent", function() {
				return m.resolve()
			} ), t.override( "insert", function( t, e, n, r ) {
				var i = this.targetGlobal.document, o = this._shadowHost = i.createElement( b ),
					u = this._shadowRoot = o.attachShadow( { mode: _ } ),
					c = this._shadowRootBody = i.createElement( "div" );
				return v.forIn( e || {}, function( t, e ) {
					o.setAttribute( t, e )
				} ), o.id = t, u.appendChild( c ), s.delegate( c, "click", "A", function( t, e ) {
					e.hasAttribute( "target" ) || e.setAttribute( "target", "_blank" )
				} ), m.all( [
					this.styleSelf( w ),
					this.addRootClass( E ),
					this.prependCss( x ),
					a.write( r.bind( null, o ) )
				] )
			} ), t.override( "onResize", function( t ) {
				this._resizeHandlers.push( t )
			} ), t.after( "initialize", function() {
				this._shadowHost = this._shadowRoot = this._shadowRootBody = null, this._width = this._height = 0, this._resizeHandlers = []
			} ), t.after( "styleSelf", function() {
				return this._updateCachedDimensions()
			} )
		} )
	}, function( t, e ) {
		var n;
		(n = function( t, e ) {
			function r( t, e ) {
				if ( t.resizedAttached ) {
					if ( t.resizedAttached ) {
						return void t.resizedAttached.add( e )
					}
				} else {
					t.resizedAttached = new function() {
						var t, e;
						this.q = [], this.add = function( t ) {
							this.q.push( t )
						}, this.call = function() {
							for ( t = 0, e = this.q.length; t < e; t ++ ) {
								this.q[ t ].call()
							}
						}
					}, t.resizedAttached.add( e );
				}
				t.resizeSensor = document.createElement( "div" ), t.resizeSensor.className = "resize-sensor";
				var n = "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",
					r = "position: absolute; left: 0; top: 0; transition: 0s;";
				t.resizeSensor.style.cssText = n, t.resizeSensor.innerHTML = '<div class="resize-sensor-expand" style="' + n + '"><div style="' + r + '"></div></div><div class="resize-sensor-shrink" style="' + n + '"><div style="' + r + ' width: 200%; height: 200%"></div></div>', t.appendChild( t.resizeSensor ), {
					                                                                                                                                                                                                                                                                                                          fixed: 1,
					                                                                                                                                                                                                                                                                                                          absolute: 1
				                                                                                                                                                                                                                                                                                                          }[ function( t, e ) {
					return t.currentStyle ? t.currentStyle[ e ] : window.getComputedStyle ? window.getComputedStyle( t, null ).getPropertyValue( e ) : t.style[ e ]
				}( t, "position" ) ] || (t.style.position = "relative");
				var i, o, s = t.resizeSensor.childNodes[ 0 ], a = s.childNodes[ 0 ], u = t.resizeSensor.childNodes[ 1 ],
					c = (u.childNodes[ 0 ], function() {
						a.style.width = s.offsetWidth + 10 + "px", a.style.height = s.offsetHeight + 10 + "px", s.scrollLeft = s.scrollWidth, s.scrollTop = s.scrollHeight, u.scrollLeft = u.scrollWidth, u.scrollTop = u.scrollHeight, i = t.offsetWidth, o = t.offsetHeight
					});
				c();
				var d = function( t, e, n ) {
					t.attachEvent ? t.attachEvent( "on" + e, n ) : t.addEventListener( e, n )
				}, f = function() {
					t.offsetWidth == i && t.offsetHeight == o || t.resizedAttached && t.resizedAttached.call(), c()
				};
				d( s, "scroll", f ), d( u, "scroll", f )
			}

			var i = Object.prototype.toString.call( t ),
				o = "[object Array]" === i || "[object NodeList]" === i || "[object HTMLCollection]" === i || "undefined" != typeof jQuery && t instanceof jQuery || "undefined" != typeof Elements && t instanceof Elements;
			if ( o ) {
				for ( var s = 0, a = t.length; s < a; s ++ ) {
					r( t[ s ], e );
				}
			} else {
				r( t, e );
			}
			this.detach = function() {
				if ( o ) {
					for ( var e = 0, r = t.length; e < r; e ++ ) {
						n.detach( t[ e ] );
					}
				} else {
					n.detach( t )
				}
			}
		}).detach = function( t ) {
			t.resizeSensor && (t.removeChild( t.resizeSensor ), delete t.resizeSensor, delete t.resizedAttached)
		}, void 0 !== t && void 0 !== t.exports ? t.exports = n : window.ResizeSensor = n
	}, function( t, e, n ) {
		var r = n( 3 ), i = n( 0 ), o = n( 13 ), s = n( 14 )(), a = n( 62 ), u = n( 5 ), c = "a.twitter-follow-button";
		t.exports = function( t ) {
			return s( t, c ).map( function( t ) {
				return a( function( t ) {
					var e = o( t ), n = {
						screenName: r.screenName( t.href ),
						showScreenName: "false" !== t.getAttribute( "data-show-screen-name" ),
						showCount: "false" !== t.getAttribute( "data-show-count" ),
						size: t.getAttribute( "data-size" ),
						count: t.getAttribute( "data-count" ),
						preview: t.getAttribute( "data-preview" )
					};
					return i.forIn( n, function( t, n ) {
						var r = e[ t ];
						e[ t ] = u.hasValue( r ) ? r : n
					} ), e.screenName = e.screenName || e.screen_name, e
				}( t ), t.parentNode, t )
			} )
		}
	}, function( t, e, n ) {
		var r = n( 2 );
		t.exports = function( t, e ) {
			var i = new r;
			return n.e( 3 ).then( function( r ) {
				var o;
				try {
					o = n( 89 ), i.resolve( new o( t, e ) )
				} catch ( t ) {
					i.reject( t )
				}
			}.bind( null, n ) ).catch( function( t ) {
				i.reject( t )
			} ), i.promise
		}
	}, function( t, e, n ) {
		var r = n( 18 ), i = n( 128 ), o = n( 58 ), s = n( 32 ), a = n( 2 ), u = n( 6 ), c = n( 7 ), d = n( 0 ),
			f = { allowfullscreen: "true" }, l = {
				position: "absolute",
				visibility: "hidden",
				width: "0px",
				height: "0px"
			}, h = {
				position: "static",
				visibility: "visible"
			}, p = {};
		i( function( t, e, n ) {
			var r = p[ t ];
			if ( r ) {
				return e = e || 1, n = n || 1, r.styleSelf( {
					width: e + "px",
					height: n + "px"
				} ).then( function() {
					r.didResize()
				} )
			}
		}, function( t ) {
			var e = p[ t ];
			if ( e ) {
				return e._rendered.resolve()
			}
		}, function( t, e ) {
			var n = p[ t ];
			n && e && n.setIframeVersion( e )
		} ), t.exports = function( t ) {
			t.overrideProperty( "id", {
				get: function() {
					return this.sandboxEl && this.sandboxEl.id
				}
			} ), t.overrideProperty( "initialized", {
				get: function() {
					return !!this.iframeEl
				}
			} ), t.overrideProperty( "width", {
				get: function() {
					return this._width
				}
			} ), t.overrideProperty( "height", {
				get: function() {
					return this._height
				}
			} ), t.overrideProperty( "sandboxEl", {
				get: function() {
					return this.iframeEl
				}
			} ), t.defineProperty( "iframeEl", {
				get: function() {
					return this._iframe
				}
			} ), t.defineProperty( "iframeVersion", {
				get: function() {
					return this._iframeVersion
				}
			} ), t.define( "updateCachedDimensions", function() {
				var t = this;
				return this.initialized ? r.read( function() {
					t._width = t.sandboxEl.offsetWidth, t._height = t.sandboxEl.offsetHeight
				} ) : u.resolve()
			} ), t.define( "setTitle", function( t ) {
				this.iframeEl.title = t
			} ), t.define( "setWaitToSwapUntilRendered", function( t ) {
				this._waitToSwapUntilRendered = t
			} ), t.define( "setIframeVersion", function( t ) {
				this._iframeVersion = t
			} ), t.define( "isRendered", function() {
				return this._rendered.promise
			} ), t.define( "makeVisible", function() {
				return this.styleSelf( h )
			} ), t.define( "didResize", function() {
				var t = this, e = t._resizeHandlers.length > 0;
				return this.updateCachedDimensions().then( function() {
					e && t._resizeHandlers.forEach( function( e ) {
						e( t )
					} )
				} )
			} ), t.define( "loadDocument", function( t ) {
				var e = new a;
				return this.initialized ? this.iframeEl.src ? u.reject( new Error( "widget already loaded" ) ) : (this.iframeEl.addEventListener( "load", e.resolve, !1 ), this.iframeEl.addEventListener( "error", e.reject, !1 ), this.iframeEl.src = t, e.promise) : u.reject( new Error( "sandbox not initialized" ) )
			} ), t.after( "initialize", function() {
				var t = new a;
				this._iframe = null, this._iframeVersion = null, this._width = this._height = 0, this._resizeHandlers = [], this._rendered = t, this._waitToSwapUntilRendered = !1
			} ), t.override( "insert", function( t, e, n, i ) {
				var a = this;
				return e = d.aug( { id: t }, f, e ), n = d.aug( {}, l, n ), this._iframe = s( e, n ), p[ t ] = this, a._waitToSwapUntilRendered || this.onResize( o( function() {
					a.makeVisible()
				} ) ), r.write( c( i, null, this._iframe ) )
			} ), t.override( "onResize", function( t ) {
				this._resizeHandlers.push( t )
			} ), t.after( "styleSelf", function() {
				return this.updateCachedDimensions()
			} )
		}
	}, function( t, e, n ) {
		var r = n( 1 ), i = n( 129 ), o = n( 131 ), s = n( 25 ), a = n( 5 ), u = n( 132 );
		t.exports = function( t, e, n ) {
			function c( t, e ) {
				var n = u( this );
				s.trigger( t, {
					target: n,
					region: e,
					type: t,
					data: {}
				} )
			}

			function d( e ) {
				var n = u( this ), r = n && n.id, i = a.asInt( e.width ), o = a.asInt( e.height );
				r && void 0 !== i && void 0 !== o && t( r, i, o )
			}

			(new i).attachReceiver( new o.Receiver( r, "twttr.button" ) ).bind( "twttr.private.trigger", c ).bind( "twttr.private.resizeButton", d ), (new i).attachReceiver( new o.Receiver( r, "twttr.embed" ) ).bind( "twttr.private.initialized", function( t ) {
				var e = u( this ), r = e && e.id, i = t.iframe_version;
				r && i && n && n( r, i )
			} ).bind( "twttr.private.trigger", c ).bind( "twttr.private.rendered", function() {
				var t = u( this ), n = t && t.id;
				n && e && e( n )
			} ).bind( "twttr.private.resize", d )
		}
	}, function( t, e, n ) {
		var r = n( 33 ), i = n( 130 ), o = n( 0 ), s = n( 6 ), a = n( 23 ), u = "2.0";

		function c( t ) {
			this.registry = t || {}
		}

		function d( t ) {
			var e, n;
			return e = o.isType( "string", t ), n = o.isType( "number", t ), e || n || null === t
		}

		function f( t, e ) {
			return {
				jsonrpc: u,
				id: d( t ) ? t : null,
				error: e
			}
		}

		c.prototype._invoke = function( t, e ) {
			var n, r, i;
			n = this.registry[ t.method ], r = t.params || [], r = o.isType( "array", r ) ? r : [r];
			try {
				i = n.apply( e.source || null, r )
			} catch ( t ) {
				i = s.reject( t.message )
			}
			return a.isPromise( i ) ? i : s.resolve( i )
		}, c.prototype._processRequest = function( t, e ) {
			var n, r;
			return function( t ) {
				var e, n, r;
				return !!o.isObject( t ) && (e = t.jsonrpc === u, n = o.isType( "string", t.method ), r = !("id" in t) || d( t.id ), e && n && r)
			}( t ) ? (n = "params" in t && (r = t.params, !o.isObject( r ) || o.isType( "function", r )) ? s.resolve( f( t.id, i.INVALID_PARAMS ) ) : this.registry[ t.method ] ? this._invoke( t, { source: e } ).then( function( e ) {
				return n = t.id, {
					jsonrpc: u,
					id: n,
					result: e
				};
				var n
			}, function() {
				return f( t.id, i.INTERNAL_ERROR )
			} ) : s.resolve( f( t.id, i.METHOD_NOT_FOUND ) ), null != t.id ? n : s.resolve()) : s.resolve( f( t.id, i.INVALID_REQUEST ) )
		}, c.prototype.attachReceiver = function( t ) {
			return t.attachTo( this ), this
		}, c.prototype.bind = function( t, e ) {
			return this.registry[ t ] = e, this
		}, c.prototype.receive = function( t, e ) {
			var n, a, u, c = this;
			try {
				u = t, t = o.isType( "string", u ) ? r.parse( u ) : u
			} catch ( t ) {
				return s.resolve( f( null, i.PARSE_ERROR ) )
			}
			return e = e || null, a = ((n = o.isType( "array", t )) ? t : [t]).map( function( t ) {
				return c._processRequest( t, e )
			} ), n ? function( t ) {
				return s.all( t ).then( function( t ) {
					return (t = t.filter( function( t ) {
						return void 0 !== t
					} )).length ? t : void 0
				} )
			}( a ) : a[ 0 ]
		}, t.exports = c
	}, function( t ) {
		t.exports = {
			PARSE_ERROR: {
				code: - 32700,
				message: "Parse error"
			},
			INVALID_REQUEST: {
				code: - 32600,
				message: "Invalid Request"
			},
			INVALID_PARAMS: {
				code: - 32602,
				message: "Invalid params"
			},
			METHOD_NOT_FOUND: {
				code: - 32601,
				message: "Method not found"
			},
			INTERNAL_ERROR: {
				code: - 32603,
				message: "Internal error"
			}
		}
	}, function( t, e, n ) {
		var r = n( 8 ), i = n( 1 ), o = n( 33 ), s = n( 2 ), a = n( 22 ), u = n( 0 ), c = n( 3 ), d = n( 7 ),
			f = a.ie9();

		function l( t, e, n ) {
			var r;
			t && t.postMessage && (f ? r = (n || "") + o.stringify( e ) : n ? (r = {})[ n ] = e : r = e, t.postMessage( r, "*" ))
		}

		function h( t ) {
			return u.isType( "string", t ) ? t : "JSONRPC"
		}

		function p( t, e ) {
			return e ? u.isType( "string", t ) && 0 === t.indexOf( e ) ? t.substring( e.length ) : t && t[ e ] ? t[ e ] : void 0 : t
		}

		function m( t, e ) {
			var n = t.document;
			this.filter = h( e ), this.server = null, this.isTwitterFrame = c.isTwitterURL( n.location.href ), t.addEventListener( "message", d( this._onMessage, this ), !1 )
		}

		function v( t, e ) {
			this.pending = {}, this.target = t, this.isTwitterHost = c.isTwitterURL( r.href ), this.filter = h( e ), i.addEventListener( "message", d( this._onMessage, this ), !1 )
		}

		u.aug( m.prototype, {
			_onMessage: function( t ) {
				var e, n = this;
				this.server && (this.isTwitterFrame && !c.isTwitterURL( t.origin ) || (e = p( t.data, this.filter )) && this.server.receive( e, t.source ).then( function( e ) {
					e && l( t.source, e, n.filter )
				} ))
			},
			attachTo: function( t ) {
				this.server = t
			},
			detach: function() {
				this.server = null
			}
		} ), u.aug( v.prototype, {
			_processResponse: function( t ) {
				var e = this.pending[ t.id ];
				e && (e.resolve( t ), delete this.pending[ t.id ])
			},
			_onMessage: function( t ) {
				var e;
				if ( (!this.isTwitterHost || c.isTwitterURL( t.origin )) && (e = p( t.data, this.filter )) ) {
					if ( u.isType( "string", e ) ) {
						try {
							e = o.parse( e )
						} catch ( t ) {
							return
						}
					}
					(e = u.isType( "array", e ) ? e : [e]).forEach( d( this._processResponse, this ) )
				}
			},
			send: function( t ) {
				var e = new s;
				return t.id ? this.pending[ t.id ] = e : e.resolve(), l( this.target, t, this.filter ), e.promise
			}
		} ), t.exports = {
			Receiver: m,
			Dispatcher: v,
			_stringifyPayload: function( t ) {
				return arguments.length > 0 && (f = !!t), f
			}
		}
	}, function( t, e, n ) {
		var r = n( 4 );
		t.exports = function( t ) {
			for ( var e, n = r.getElementsByTagName( "iframe" ), i = 0; n[ i ]; i ++ ) {
				if ( (e = n[ i ]).contentWindow === t ) {
					return e
				}
			}
		}
	}, function( t, e, n ) {
		var r = n( 5 ), i = n( 0 ), o = n( 3 ), s = n( 13 ), a = n( 14 )(), u = n( 63 ), c = "a.twitter-moment";
		t.exports = function( t ) {
			return a( t, c ).map( function( t ) {
				return u( function( t ) {
					var e = s( t ), n = {
						momentId: o.momentId( t.href ),
						chrome: t.getAttribute( "data-chrome" ),
						limit: t.getAttribute( "data-limit" )
					};
					return i.forIn( n, function( t, n ) {
						var i = e[ t ];
						e[ t ] = r.hasValue( i ) ? i : n
					} ), e
				}( t ), t.parentNode, t )
			} )
		}
	}, function( t, e, n ) {
		var r = n( 2 );
		t.exports = function( t, e ) {
			var i = new r;
			return Promise.all( [n.e( 0 ), n.e( 4 )] ).then( function( r ) {
				var o;
				try {
					o = n( 90 ), i.resolve( new o( t, e ) )
				} catch ( t ) {
					i.reject( t )
				}
			}.bind( null, n ) ).catch( function( t ) {
				i.reject( t )
			} ), i.promise
		}
	}, function( t, e, n ) {
		var r = n( 0 ), i = n( 13 ), o = n( 14 )(), s = n( 64 ), a = "a.periscope-on-air",
			u = /^https?:\/\/(?:www\.)?(?:periscope|pscp)\.tv\/@?([a-zA-Z0-9_]+)\/?$/i;
		t.exports = function( t ) {
			return o( t, a ).map( function( t ) {
				return s( function( t ) {
					var e = i( t ), n = t.getAttribute( "href" ), o = t.getAttribute( "data-size" ),
						s = u.exec( n )[ 1 ];
					return r.aug( e, {
						username: s,
						size: o
					} )
				}( t ), t.parentNode, t )
			} )
		}
	}, function( t, e, n ) {
		var r = n( 2 );
		t.exports = function( t, e ) {
			var i = new r;
			return n.e( 5 ).then( function( r ) {
				var o;
				try {
					o = n( 91 ), i.resolve( new o( t, e ) )
				} catch ( t ) {
					i.reject( t )
				}
			}.bind( null, n ) ).catch( function( t ) {
				i.reject( t )
			} ), i.promise
		}
	}, function( t, e, n ) {
		var r = n( 5 ), i = n( 0 ), o = n( 65 ), s = n( 13 ), a = n( 14 )(), u = n( 66 ), c = n( 3 ), d = n( 12 ),
			f = "a.twitter-timeline,div.twitter-timeline,a.twitter-grid",
			l = "Embedded Search timelines have been deprecated. See https://twittercommunity.com/t/deprecating-widget-settings/102295.",
			h = "You may have been affected by an update to settings in embedded timelines. See https://twittercommunity.com/t/deprecating-widget-settings/102295.",
			p = "Embedded grids have been deprecated and will now render as timelines. Please update your embed code to use the twitter-timeline class. More info: https://twittercommunity.com/t/update-on-the-embedded-grid-display-type/119564.";
		t.exports = function( t ) {
			return a( t, f ).map( function( t ) {
				return u( function( t ) {
					var e = s( t ), n = t.getAttribute( "data-show-replies" ), a = {
						isPreconfigured: !!t.getAttribute( "data-widget-id" ),
						chrome: t.getAttribute( "data-chrome" ),
						tweetLimit: t.getAttribute( "data-tweet-limit" ) || t.getAttribute( "data-limit" ),
						ariaLive: t.getAttribute( "data-aria-polite" ),
						theme: t.getAttribute( "data-theme" ),
						borderColor: t.getAttribute( "data-border-color" ),
						showReplies: n ? r.asBoolean( n ) : null,
						profileScreenName: t.getAttribute( "data-screen-name" ),
						profileUserId: t.getAttribute( "data-user-id" ),
						favoritesScreenName: t.getAttribute( "data-favorites-screen-name" ),
						favoritesUserId: t.getAttribute( "data-favorites-user-id" ),
						likesScreenName: t.getAttribute( "data-likes-screen-name" ),
						likesUserId: t.getAttribute( "data-likes-user-id" ),
						listOwnerScreenName: t.getAttribute( "data-list-owner-screen-name" ),
						listOwnerUserId: t.getAttribute( "data-list-owner-id" ),
						listId: t.getAttribute( "data-list-id" ),
						listSlug: t.getAttribute( "data-list-slug" ),
						customTimelineId: t.getAttribute( "data-custom-timeline-id" ),
						staticContent: t.getAttribute( "data-static-content" ),
						url: t.href
					};
					return a.isPreconfigured && (c.isSearchUrl( a.url ) ? d.publicError( l, t ) : d.publicLog( h, t )), "twitter-grid" === t.className && d.publicLog( p, t ), (a = i.aug( a, e )).dataSource = o( a ), a.id = a.dataSource && a.dataSource.id, a
				}( t ), t.parentNode, t )
			} )
		}
	}, function( t, e, n ) {
		var r = n( 28 );
		t.exports = r.build( [n( 29 ), n( 141 )] )
	}, function( t, e, n ) {
		var r = n( 0 ), i = n( 140 );
		t.exports = function( t ) {
			return "en" === t || r.contains( i, t )
		}
	}, function( t, e ) {
		t.exports = [
			"hi",
			"zh-cn",
			"fr",
			"zh-tw",
			"msa",
			"fil",
			"fi",
			"sv",
			"pl",
			"ja",
			"ko",
			"de",
			"it",
			"pt",
			"es",
			"ru",
			"id",
			"tr",
			"da",
			"no",
			"nl",
			"hu",
			"fa",
			"ar",
			"ur",
			"he",
			"th",
			"cs",
			"uk",
			"vi",
			"ro",
			"bn",
			"el",
			"en-gb",
			"gu",
			"kn",
			"mr",
			"ta",
			"bg",
			"ca",
			"hr",
			"sr",
			"sk"
		]
	}, function( t, e, n ) {
		var r = n( 3 ), i = n( 0 ), o = n( 19 ), s = "collection:";

		function a( t, e ) {
			return r.collectionId( t ) || e
		}

		t.exports = function( t ) {
			t.params( {
				id: {},
				url: {}
			} ), t.overrideProperty( "id", {
				get: function() {
					var t = a( this.params.url, this.params.id );
					return s + t
				}
			} ), t.overrideProperty( "endpoint", {
				get: function() {
					return o.timeline( ["collection"] )
				}
			} ), t.around( "queryParams", function( t ) {
				return i.aug( t(), { collection_id: a( this.params.url, this.params.id ) } )
			} ), t.before( "initialize", function() {
				if ( !a( this.params.url, this.params.id ) ) {
					throw new Error( "one of url or id is required" )
				}
			} )
		}
	}, function( t, e, n ) {
		var r = n( 28 );
		t.exports = r.build( [n( 29 ), n( 143 )] )
	}, function( t, e, n ) {
		var r = n( 3 ), i = n( 0 ), o = n( 19 ), s = "event:";

		function a( t, e ) {
			return r.eventId( t ) || e
		}

		t.exports = function( t ) {
			t.params( {
				id: {},
				url: {}
			} ), t.overrideProperty( "id", {
				get: function() {
					var t = a( this.params.url, this.params.id );
					return s + t
				}
			} ), t.overrideProperty( "endpoint", {
				get: function() {
					return o.timeline( ["event"] )
				}
			} ), t.around( "queryParams", function( t ) {
				return i.aug( t(), { event_id: a( this.params.url, this.params.id ) } )
			} ), t.before( "initialize", function() {
				if ( !a( this.params.url, this.params.id ) ) {
					throw new Error( "one of url or id is required" )
				}
			} )
		}
	}, function( t, e, n ) {
		var r = n( 28 );
		t.exports = r.build( [n( 29 ), n( 145 )] )
	}, function( t, e, n ) {
		var r = n( 3 ), i = n( 0 ), o = n( 19 ), s = "likes:";

		function a( t ) {
			return r.likesScreenName( t.url ) || t.screenName
		}

		t.exports = function( t ) {
			t.params( {
				screenName: {},
				userId: {},
				url: {}
			} ), t.overrideProperty( "id", {
				get: function() {
					var t = a( this.params ) || this.params.userId;
					return s + t
				}
			} ), t.overrideProperty( "endpoint", {
				get: function() {
					return o.timeline( ["likes"] )
				}
			} ), t.define( "_getLikesQueryParam", function() {
				var t = a( this.params );
				return t ? { screen_name: t } : { user_id: this.params.userId }
			} ), t.around( "queryParams", function( t ) {
				return i.aug( t(), this._getLikesQueryParam() )
			} ), t.before( "initialize", function() {
				if ( !a( this.params ) && !this.params.userId ) {
					throw new Error( "screen name or user id is required" )
				}
			} )
		}
	}, function( t, e, n ) {
		var r = n( 28 );
		t.exports = r.build( [n( 29 ), n( 147 )] )
	}, function( t, e, n ) {
		var r = n( 3 ), i = n( 0 ), o = n( 19 ), s = "list:";

		function a( t ) {
			var e = r.listScreenNameAndSlug( t.url ) || t;
			return i.compact( {
				screen_name: e.ownerScreenName,
				user_id: e.ownerUserId,
				list_slug: e.slug
			} )
		}

		t.exports = function( t ) {
			t.params( {
				id: {},
				ownerScreenName: {},
				ownerUserId: {},
				slug: {},
				url: {}
			} ), t.overrideProperty( "id", {
				get: function() {
					var t, e, n;
					return this.params.id ? s + this.params.id : (e = (t = a( this.params )) && t.list_slug.replace( /-/g, "_" ), n = t && (t.screen_name || t.user_id), s + (n + ":") + e)
				}
			} ), t.overrideProperty( "endpoint", {
				get: function() {
					return o.timeline( ["list"] )
				}
			} ), t.define( "_getListQueryParam", function() {
				return this.params.id ? { list_id: this.params.id } : a( this.params )
			} ), t.around( "queryParams", function( t ) {
				return i.aug( t(), this._getListQueryParam() )
			} ), t.before( "initialize", function() {
				var t = a( this.params );
				if ( i.isEmptyObject( t ) && !this.params.id ) {
					throw new Error( "qualified slug or list id required" )
				}
			} )
		}
	}, function( t, e, n ) {
		var r = n( 28 );
		t.exports = r.build( [n( 29 ), n( 149 )] )
	}, function( t, e, n ) {
		var r = n( 3 ), i = n( 5 ), o = n( 0 ), s = n( 19 ), a = "profile:";

		function u( t, e ) {
			return r.screenName( t ) || e
		}

		t.exports = function( t ) {
			t.params( {
				showReplies: {
					fallback: !1,
					transform: i.asBoolean
				},
				screenName: {},
				userId: {},
				url: {}
			} ), t.overrideProperty( "id", {
				get: function() {
					var t = u( this.params.url, this.params.screenName );
					return a + (t || this.params.userId)
				}
			} ), t.overrideProperty( "endpoint", {
				get: function() {
					return s.timeline( ["profile"] )
				}
			} ), t.define( "_getProfileQueryParam", function() {
				var t = u( this.params.url, this.params.screenName ),
					e = t ? { screen_name: t } : { user_id: this.params.userId };
				return o.aug( e, { with_replies: this.params.showReplies ? "true" : "false" } )
			} ), t.around( "queryParams", function( t ) {
				return o.aug( t(), this._getProfileQueryParam() )
			} ), t.before( "initialize", function() {
				if ( !u( this.params.url, this.params.screenName ) && !this.params.userId ) {
					throw new Error( "screen name or user id is required" )
				}
			} )
		}
	}, function( t, e, n ) {
		var r = n( 2 );
		t.exports = function( t, e ) {
			var i = new r;
			return Promise.all( [n.e( 0 ), n.e( 6 )] ).then( function( r ) {
				var o;
				try {
					o = n( 92 ), i.resolve( new o( t, e ) )
				} catch ( t ) {
					i.reject( t )
				}
			}.bind( null, n ) ).catch( function( t ) {
				i.reject( t )
			} ), i.promise
		}
	}, function( t, e, n ) {
		var r = n( 10 ), i = n( 3 ), o = n( 0 ), s = n( 13 ), a = n( 14 )(), u = n( 67 ),
			c = "blockquote.twitter-tweet, blockquote.twitter-video", d = /\btw-align-(left|right|center)\b/;
		t.exports = function( t, e ) {
			return a( t, c ).map( function( t ) {
				return u( function( t ) {
					var e = s( t ), n = t.getElementsByTagName( "A" ), a = n && n[ n.length - 1 ],
						u = a && i.status( a.href ), c = t.getAttribute( "data-conversation" ),
						f = "none" == c || "hidden" == c || r.present( t, "tw-hide-thread" ),
						l = t.getAttribute( "data-cards" ),
						h = "none" == l || "hidden" == l || r.present( t, "tw-hide-media" ),
						p = t.getAttribute( "data-align" ) || t.getAttribute( "align" ),
						m = t.getAttribute( "data-theme" );
					return !p && d.test( t.className ) && (p = RegExp.$1), o.aug( e, {
						tweetId: u,
						hideThread: f,
						hideCard: h,
						align: p,
						theme: m,
						id: u
					} )
				}( t ), t.parentNode, t, e )
			} )
		}
	}, function( t, e, n ) {
		var r = n( 86 ), i = n( 21 ), o = "tfw_horizon_tweet_embed_9555";
		t.exports = function( t, e ) {
			var n;
			t && (n = t[ o ]) && n.bucket && r( o, n.bucket, n.version, i.formatHorizonTweetData( e ) )
		}
	}, function( t, e, n ) {
		var r = n( 2 );
		t.exports = function( t, e ) {
			var i = new r;
			return n.e( 7 ).then( function( r ) {
				var o;
				try {
					o = n( 93 ), i.resolve( new o( t, e ) )
				} catch ( t ) {
					i.reject( t )
				}
			}.bind( null, n ) ).catch( function( t ) {
				i.reject( t )
			} ), i.promise
		}
	}, function( t, e, n ) {
		var r = n( 2 );
		t.exports = function( t, e ) {
			var i = new r;
			return Promise.all( [n.e( 0 ), n.e( 8 )] ).then( function( r ) {
				var o;
				try {
					o = n( 94 ), i.resolve( new o( t, e ) )
				} catch ( t ) {
					i.reject( t )
				}
			}.bind( null, n ) ).catch( function( t ) {
				i.reject( t )
			} ), i.promise
		}
	}, function( t, e, n ) {
		var r = n( 10 ), i = n( 0 ), o = n( 13 ), s = n( 14 )(), a = n( 69 ), u = n( 5 ),
			c = "a.twitter-share-button, a.twitter-mention-button, a.twitter-hashtag-button",
			d = "twitter-hashtag-button", f = "twitter-mention-button";
		t.exports = function( t ) {
			return s( t, c ).map( function( t ) {
				return a( function( t ) {
					var e = o( t ), n = {
						screenName: t.getAttribute( "data-button-screen-name" ),
						text: t.getAttribute( "data-text" ),
						type: t.getAttribute( "data-type" ),
						size: t.getAttribute( "data-size" ),
						url: t.getAttribute( "data-url" ),
						hashtags: t.getAttribute( "data-hashtags" ),
						via: t.getAttribute( "data-via" ),
						buttonHashtag: t.getAttribute( "data-button-hashtag" )
					};
					return i.forIn( n, function( t, n ) {
						var r = e[ t ];
						e[ t ] = u.hasValue( r ) ? r : n
					} ), e.screenName = e.screenName || e.screen_name, e.buttonHashtag = e.buttonHashtag || e.button_hashtag || e.hashtag, r.present( t, d ) && (e.type = "hashtag"), r.present( t, f ) && (e.type = "mention"), e
				}( t ), t.parentNode, t )
			} )
		}
	}, function( t, e, n ) {
		var r = n( 2 );
		t.exports = function( t, e ) {
			var i = new r;
			return n.e( 3 ).then( function( r ) {
				var o;
				try {
					o = n( 95 ), i.resolve( new o( t, e ) )
				} catch ( t ) {
					i.reject( t )
				}
			}.bind( null, n ) ).catch( function( t ) {
				i.reject( t )
			} ), i.promise
		}
	}, function( t, e, n ) {
		var r = n( 0 );
		t.exports = r.aug( {}, n( 158 ), n( 159 ), n( 160 ), n( 161 ), n( 162 ), n( 163 ), n( 164 ) )
	}, function( t, e, n ) {
		var r = n( 59 ), i = n( 17 )( ["userId"], {}, r );
		t.exports = { createDMButton: i }
	}, function( t, e, n ) {
		var r = n( 62 ), i = n( 17 )( ["screenName"], {}, r );
		t.exports = { createFollowButton: i }
	}, function( t, e, n ) {
		var r = n( 63 ), i = n( 17 )( ["momentId"], {}, r );
		t.exports = { createMoment: i }
	}, function( t, e, n ) {
		var r = n( 64 ), i = n( 17 )( ["username"], {}, r );
		t.exports = { createPeriscopeOnAirButton: i }
	}, function( t, e, n ) {
		var r = n( 8 ), i = n( 12 ), o = n( 3 ), s = n( 0 ), a = n( 5 ), u = n( 65 ), c = n( 66 ),
			d = n( 17 )( [], {}, c ), f = n( 6 ),
			l = "Embedded grids have been deprecated. Please use twttr.widgets.createTimeline instead. More info: https://twittercommunity.com/t/update-on-the-embedded-grid-display-type/119564.",
			h = {
				createTimeline: p,
				createGridFromCollection: function( t ) {
					var e = s.toRealArray( arguments ).slice( 1 ), n = {
						sourceType: "collection",
						id: t
					};
					return e.unshift( n ), i.publicLog( l ), p.apply( this, e )
				}
			};

		function p( t ) {
			var e, n = s.toRealArray( arguments ).slice( 1 );
			return a.isString( t ) || a.isNumber( t ) ? f.reject( "Embedded timelines with widget settings have been deprecated. See https://twittercommunity.com/t/deprecating-widget-settings/102295." ) : s.isObject( t ) ? (t = t || {}, n.forEach( function( t ) {
				s.isType( "object", t ) && function( t ) {
					t.ariaLive = t.ariaPolite
				}( e = t )
			} ), e || (e = {}, n.push( e )), t.lang = e.lang, t.tweetLimit = e.tweetLimit, t.showReplies = e.showReplies, e.dataSource = u( t ), d.apply( this, n )) : f.reject( "data source must be an object." )
		}

		o.isTwitterURL( r.href ) && (h.createTimelinePreview = function( t, e, n ) {
			var r = {
				previewParams: t,
				useLegacyDefaults: !0,
				isPreviewTimeline: !0
			};
			return r.dataSource = u( r ), d( e, r, n )
		}), t.exports = h
	}, function( t, e, n ) {
		var r, i = n( 0 ), o = n( 67 ), s = n( 17 ), a = (r = s( ["tweetId"], {}, o ), function() {
			return i.toRealArray( arguments ).slice( 1 ).forEach( function( t ) {
				i.isType( "object", t ) && (t.hideCard = "none" == t.cards || "hidden" == t.cards, t.hideThread = "none" == t.conversation || "hidden" == t.conversation)
			} ), r.apply( this, arguments )
		});
		t.exports = {
			createTweet: a,
			createTweetEmbed: a,
			createVideo: a
		}
	}, function( t, e, n ) {
		var r = n( 0 ), i = n( 69 ), o = n( 17 ), s = o( ["url"], { type: "share" }, i ),
			a = o( ["buttonHashtag"], { type: "hashtag" }, i ), u = o( ["screenName"], { type: "mention" }, i );

		function c( t ) {
			return function() {
				return r.toRealArray( arguments ).slice( 1 ).forEach( function( t ) {
					r.isType( "object", t ) && (t.screenName = t.screenName || t.screen_name, t.buttonHashtag = t.buttonHashtag || t.button_hashtag || t.hashtag)
				} ), t.apply( this, arguments )
			}
		}

		t.exports = {
			createShareButton: c( s ),
			createHashtagButton: c( a ),
			createMentionButton: c( u )
		}
	}, function( t, e, n ) {
		var r, i, o, s = n( 4 ), a = n( 1 ), u = 0, c = [], d = s.createElement( "a" );

		function f() {
			var t, e;
			for ( u = 1, t = 0, e = c.length; t < e; t ++ ) {
				c[ t ]()
			}
		}

		/^loade|c/.test( s.readyState ) && (u = 1), s.addEventListener && s.addEventListener( "DOMContentLoaded", i = function() {
			s.removeEventListener( "DOMContentLoaded", i, !1 ), f()
		}, !1 ), d.doScroll && s.attachEvent( "onreadystatechange", r = function() {
			/^c/.test( s.readyState ) && (s.detachEvent( "onreadystatechange", r ), f())
		} ), o = d.doScroll ? function( t ) {
			a.self != a.top ? u ? t() : c.push( t ) : function() {
				try {
					d.doScroll( "left" )
				} catch ( e ) {
					return setTimeout( function() {
						o( t )
					}, 50 )
				}
				t()
			}()
		} : function( t ) {
			u ? t() : c.push( t )
		}, t.exports = o
	}, function( t, e, n ) {
		var r = n( 47 ), i = n( 9 );
		t.exports = function() {
			i.set( "buildVersion", r.version )
		}
	}, function( t, e, n ) {
		n( 168 ), n( 87 ), n( 171 )
	}, function( t, e, n ) {
		var r = n( 169 ), i = n( 30 ), o = n( 70 ), s = new r, a = function( t ) {
			t.widgets && 1 === t.widgets.length && (s.start(), i.emitter.unbind( i.ALL_WIDGETS_RENDER_START, a ))
		}, u = function( t ) {
			var e;
			t.widgets && 1 === t.widgets.length && (e = t.widgets[ 0 ], s.end(), e.dataset && e.dataset.tweetId && o( {
				duration: s.duration(),
				namespace: {
					element: "tweet",
					action: "render"
				},
				widgetIds: [e.dataset.tweetId]
			} )), i.emitter.unbind( i.ALL_WIDGETS_RENDER_END, u )
		};
		i.emitter.bind( i.ALL_WIDGETS_RENDER_START, a ), i.emitter.bind( i.ALL_WIDGETS_RENDER_END, u )
	}, function( t, e, n ) {
		var r = n( 170 );

		function i() {
		}

		i.prototype.start = function() {
			this._startTime = r()
		}, i.prototype.end = function() {
			this._duration = r() - this._startTime
		}, i.prototype.duration = function() {
			return this._duration
		}, t.exports = i
	}, function( t, e, n ) {
		var r = n( 1 );
		t.exports = function() {
			return r.performance && r.performance.now ? r.performance.now() : Date.now()
		}
	}, function( t, e, n ) {
		var r = n( 30 ), i = n( 70 ), o = n( 172 ), s = n( 3 ), a = n( 1 ), u = n( 0 ), c = n( 22 ), d = n( 61 );

		function f( t ) {
			return t.performance.getEntriesByType( "resource" ).filter( function( t ) {
				return s.isTwimgURL( t.name ) || s.isTwitterURL( t.name )
			} ).reduce( function( t, e ) {
				return t[ e.name ] = e.duration, t
			}, {} )
		}

		r.emitter.bind( r.ALL_WIDGETS_AND_IMAGES_LOADED, function( t ) {
			var e, n, r = [];
			c.hasPerformanceInformation() && (e = f( a ), d.isSupported() || (r = function( t ) {
				return t.reduce( function( t, e ) {
					return u.aug( t, f( e.contentDocument.defaultView ) )
				}, {} )
			}( t )), n = u.aug( {}, e, r ), Object.keys( o ).forEach( function( t ) {
				!function( t, e, n ) {
					var r = Object.keys( t ).reduce( function( e, r ) {
						return n( r ) ? e + t[ r ] : e
					}, 0 );
					i( {
						duration: r,
						namespace: {
							element: e,
							action: "resource"
						}
					} )
				}( n, t, o[ t ] )
			} ))
		} )
	}, function( t, e, n ) {
		var r = n( 3 ), i = {
			all: function() {
				return !0
			},
			image: function( t ) {
				return r.isTwimgURL( t )
			},
			settings: function( t ) {
				return r.isSettingsURL( t )
			},
			widget_iframe: function( t ) {
				return r.isWidgetIframeURL( t )
			}
		};
		t.exports = i
	}
] )));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ2ZW5kb3Ivd2lkZ2V0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJGdW5jdGlvbiAmJiBGdW5jdGlvbi5wcm90b3R5cGUgJiYgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgJiYgKC8oTVNJRSAoWzY3ODldfDEwfDExKSl8VHJpZGVudC8udGVzdCggbmF2aWdhdG9yLnVzZXJBZ2VudCApIHx8ICh3aW5kb3cuX190d3R0ciAmJiB3aW5kb3cuX190d3R0ci53aWRnZXRzICYmIHdpbmRvdy5fX3R3dHRyLndpZGdldHMubG9hZGVkICYmIHdpbmRvdy50d3R0ci53aWRnZXRzLmxvYWQgJiYgd2luZG93LnR3dHRyLndpZGdldHMubG9hZCgpLCB3aW5kb3cuX190d3R0ciAmJiB3aW5kb3cuX190d3R0ci53aWRnZXRzICYmIHdpbmRvdy5fX3R3dHRyLndpZGdldHMuaW5pdCB8fCBmdW5jdGlvbiggdCApIHtcblx0ZnVuY3Rpb24gZSggZSApIHtcblx0XHRmb3IgKCB2YXIgbiwgaSwgbyA9IGVbIDAgXSwgcyA9IGVbIDEgXSwgYSA9IDAsIGMgPSBbXTsgYSA8IG8ubGVuZ3RoOyBhICsrICkge1xuXHRcdFx0aSA9IG9bIGEgXSwgclsgaSBdICYmIGMucHVzaCggclsgaSBdWyAwIF0gKSwgclsgaSBdID0gMDtcblx0XHR9XG5cdFx0Zm9yICggbiBpbiBzICkge1xuXHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCBzLCBuICkgJiYgKHRbIG4gXSA9IHNbIG4gXSk7XG5cdFx0fVxuXHRcdGZvciAoIHUgJiYgdSggZSApOyBjLmxlbmd0aDsgKSB7XG5cdFx0XHRjLnNoaWZ0KCkoKVxuXHRcdH1cblx0fVxuXG5cdHZhciBuID0ge30sIHIgPSB7IDE6IDAgfTtcblxuXHRmdW5jdGlvbiBpKCBlICkge1xuXHRcdGlmICggblsgZSBdICkge1xuXHRcdFx0cmV0dXJuIG5bIGUgXS5leHBvcnRzO1xuXHRcdH1cblx0XHR2YXIgciA9IG5bIGUgXSA9IHtcblx0XHRcdGk6IGUsXG5cdFx0XHRsOiAhMSxcblx0XHRcdGV4cG9ydHM6IHt9XG5cdFx0fTtcblx0XHRyZXR1cm4gdFsgZSBdLmNhbGwoIHIuZXhwb3J0cywgciwgci5leHBvcnRzLCBpICksIHIubCA9ICEwLCByLmV4cG9ydHNcblx0fVxuXG5cdGkuZSA9IGZ1bmN0aW9uKCB0ICkge1xuXHRcdHZhciBlID0gW10sIG4gPSByWyB0IF07XG5cdFx0aWYgKCAwICE9PSBuICkge1xuXHRcdFx0aWYgKCBuICkge1xuXHRcdFx0XHRlLnB1c2goIG5bIDIgXSApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIG8gPSBuZXcgUHJvbWlzZSggZnVuY3Rpb24oIGUsIGkgKSB7XG5cdFx0XHRcdFx0biA9IHJbIHQgXSA9IFtlLCBpXVxuXHRcdFx0XHR9ICk7XG5cdFx0XHRcdGUucHVzaCggblsgMiBdID0gbyApO1xuXHRcdFx0XHR2YXIgcywgYSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCBcImhlYWRcIiApWyAwIF0sIHUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcInNjcmlwdFwiICk7XG5cdFx0XHRcdHUuY2hhcnNldCA9IFwidXRmLThcIiwgdS50aW1lb3V0ID0gMTIwLCBpLm5jICYmIHUuc2V0QXR0cmlidXRlKCBcIm5vbmNlXCIsIGkubmMgKSwgdS5zcmMgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRyZXR1cm4gaS5wICsgXCJqcy9cIiArICh7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgMDogXCJtb21lbnR+dGltZWxpbmV+dHdlZXRcIixcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAyOiBcImRtX2J1dHRvblwiLFxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgIDM6IFwiYnV0dG9uXCIsXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgNDogXCJtb21lbnRcIixcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICA1OiBcInBlcmlzY29wZV9vbl9haXJcIixcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICA2OiBcInRpbWVsaW5lXCIsXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgNzogXCJob3Jpem9uX3R3ZWV0XCIsXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgODogXCJ0d2VldFwiXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgIH1bIHQgXSB8fCB0KSArIFwiLlwiICsge1xuXHRcdFx0XHRcdFx0ICAgICAgIDA6IFwiOTljZTVlMGU0NjE3OTg1MzU0YzVjNDI2ZDdlMWI5ZjRcIixcblx0XHRcdFx0XHRcdCAgICAgICAyOiBcImFhZmRiYWM4YzBjYTMwYjAzNDVmZmFkZmI0NmFiYWFlXCIsXG5cdFx0XHRcdFx0XHQgICAgICAgMzogXCI5M2EwYzI1YzJkMmYzMDgxYzcwNWM5OGMyZDlkZWMwZVwiLFxuXHRcdFx0XHRcdFx0ICAgICAgIDQ6IFwiNzBkNDZlNDZiYjZlNWQzMjQyOGQyNzRlMjlkMzNhN2FcIixcblx0XHRcdFx0XHRcdCAgICAgICA1OiBcImE5MjQ5ODIzNzZlNTMyYWZlZWU0NjM2Yzc5NGVhNWRhXCIsXG5cdFx0XHRcdFx0XHQgICAgICAgNjogXCJkMjI4ZGNmMzU3MzQ2MWYyOThiMDgyYzlhNWMwYTQyY1wiLFxuXHRcdFx0XHRcdFx0ICAgICAgIDc6IFwiNzczODEzNzNmOTY0ZWVlOWI0MzcyOGIzZDQzZDY0MmZcIixcblx0XHRcdFx0XHRcdCAgICAgICA4OiBcIjlhYTllZGEzYzE2M2VjNTM5YzE2YWVmMGQ4MjJkODA3XCJcblx0XHRcdFx0XHQgICAgICAgfVsgdCBdICsgXCIuanNcIlxuXHRcdFx0XHR9KCB0ICksIHMgPSBmdW5jdGlvbiggZSApIHtcblx0XHRcdFx0XHR1Lm9uZXJyb3IgPSB1Lm9ubG9hZCA9IG51bGwsIGNsZWFyVGltZW91dCggYyApO1xuXHRcdFx0XHRcdHZhciBuID0gclsgdCBdO1xuXHRcdFx0XHRcdGlmICggMCAhPT0gbiApIHtcblx0XHRcdFx0XHRcdGlmICggbiApIHtcblx0XHRcdFx0XHRcdFx0dmFyIGkgPSBlICYmIChcImxvYWRcIiA9PT0gZS50eXBlID8gXCJtaXNzaW5nXCIgOiBlLnR5cGUpLCBvID0gZSAmJiBlLnRhcmdldCAmJiBlLnRhcmdldC5zcmMsXG5cdFx0XHRcdFx0XHRcdFx0cyA9IG5ldyBFcnJvciggXCJMb2FkaW5nIGNodW5rIFwiICsgdCArIFwiIGZhaWxlZC5cXG4oXCIgKyBpICsgXCI6IFwiICsgbyArIFwiKVwiICk7XG5cdFx0XHRcdFx0XHRcdHMudHlwZSA9IGksIHMucmVxdWVzdCA9IG8sIG5bIDEgXSggcyApXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyWyB0IF0gPSB2b2lkIDBcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHRcdHZhciBjID0gc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cygge1xuXHRcdFx0XHRcdFx0dHlwZTogXCJ0aW1lb3V0XCIsXG5cdFx0XHRcdFx0XHR0YXJnZXQ6IHVcblx0XHRcdFx0XHR9IClcblx0XHRcdFx0fSwgMTJlNCApO1xuXHRcdFx0XHR1Lm9uZXJyb3IgPSB1Lm9ubG9hZCA9IHMsIGEuYXBwZW5kQ2hpbGQoIHUgKVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIGUgKVxuXHR9LCBpLm0gPSB0LCBpLmMgPSBuLCBpLmQgPSBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHRpLm8oIHQsIGUgKSB8fCBPYmplY3QuZGVmaW5lUHJvcGVydHkoIHQsIGUsIHtcblx0XHRcdGVudW1lcmFibGU6ICEwLFxuXHRcdFx0Z2V0OiBuXG5cdFx0fSApXG5cdH0sIGkuciA9IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCAmJiBTeW1ib2wudG9TdHJpbmdUYWcgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KCB0LCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSApLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoIHQsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiAhMCB9IClcblx0fSwgaS50ID0gZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0aWYgKCAxICYgZSAmJiAodCA9IGkoIHQgKSksIDggJiBlICkge1xuXHRcdFx0cmV0dXJuIHQ7XG5cdFx0fVxuXHRcdGlmICggNCAmIGUgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgdCAmJiB0ICYmIHQuX19lc01vZHVsZSApIHtcblx0XHRcdHJldHVybiB0O1xuXHRcdH1cblx0XHR2YXIgbiA9IE9iamVjdC5jcmVhdGUoIG51bGwgKTtcblx0XHRpZiAoIGkuciggbiApLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoIG4sIFwiZGVmYXVsdFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiAhMCxcblx0XHRcdHZhbHVlOiB0XG5cdFx0fSApLCAyICYgZSAmJiBcInN0cmluZ1wiICE9IHR5cGVvZiB0ICkge1xuXHRcdFx0Zm9yICggdmFyIHIgaW4gdCApIHtcblx0XHRcdFx0aS5kKCBuLCByLCBmdW5jdGlvbiggZSApIHtcblx0XHRcdFx0XHRyZXR1cm4gdFsgZSBdXG5cdFx0XHRcdH0uYmluZCggbnVsbCwgciApICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBuXG5cdH0sIGkubiA9IGZ1bmN0aW9uKCB0ICkge1xuXHRcdHZhciBlID0gdCAmJiB0Ll9fZXNNb2R1bGUgPyBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiB0LmRlZmF1bHRcblx0XHR9IDogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gdFxuXHRcdH07XG5cdFx0cmV0dXJuIGkuZCggZSwgXCJhXCIsIGUgKSwgZVxuXHR9LCBpLm8gPSBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCB0LCBlIClcblx0fSwgaS5wID0gXCJodHRwczovL3BsYXRmb3JtLnR3aXR0ZXIuY29tL1wiLCBpLm9lID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0dGhyb3cgY29uc29sZS5lcnJvciggdCApLCB0XG5cdH07XG5cdHZhciBvID0gd2luZG93Ll9fdHd0dHJsbCA9IHdpbmRvdy5fX3R3dHRybGwgfHwgW10sIHMgPSBvLnB1c2guYmluZCggbyApO1xuXHRvLnB1c2ggPSBlLCBvID0gby5zbGljZSgpO1xuXHRmb3IgKCB2YXIgYSA9IDA7IGEgPCBvLmxlbmd0aDsgYSArKyApIHtcblx0XHRlKCBvWyBhIF0gKTtcblx0fVxuXHR2YXIgdSA9IHM7XG5cdGkoIGkucyA9IDk2IClcbn0oIFtcblx0ZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAxICk7XG5cblx0XHRmdW5jdGlvbiBpKCB0LCBlICkge1xuXHRcdFx0dmFyIG47XG5cdFx0XHRmb3IgKCBuIGluIHQgKSB7XG5cdFx0XHRcdHQuaGFzT3duUHJvcGVydHkgJiYgIXQuaGFzT3duUHJvcGVydHkoIG4gKSB8fCBlKCBuLCB0WyBuIF0gKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gbyggdCApIHtcblx0XHRcdHJldHVybiB7fS50b1N0cmluZy5jYWxsKCB0ICkubWF0Y2goIC9cXHMoW2EtekEtWl0rKS8gKVsgMSBdLnRvTG93ZXJDYXNlKClcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBzKCB0ICkge1xuXHRcdFx0cmV0dXJuIHQgPT09IE9iamVjdCggdCApXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gYSggdCApIHtcblx0XHRcdHZhciBlO1xuXHRcdFx0aWYgKCAhcyggdCApICkge1xuXHRcdFx0XHRyZXR1cm4gITE7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIE9iamVjdC5rZXlzICkge1xuXHRcdFx0XHRyZXR1cm4gIU9iamVjdC5rZXlzKCB0ICkubGVuZ3RoO1xuXHRcdFx0fVxuXHRcdFx0Zm9yICggZSBpbiB0ICkge1xuXHRcdFx0XHRpZiAoIHQuaGFzT3duUHJvcGVydHkoIGUgKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gITE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiAhMFxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHUoIHQgKSB7XG5cdFx0XHRyZXR1cm4gdCA/IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKCB0ICkgOiBbXVxuXHRcdH1cblxuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdGF1ZzogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiB1KCBhcmd1bWVudHMgKS5zbGljZSggMSApLmZvckVhY2goIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0XHRcdGkoIGUsIGZ1bmN0aW9uKCBlLCBuICkge1xuXHRcdFx0XHRcdFx0dFsgZSBdID0gblxuXHRcdFx0XHRcdH0gKVxuXHRcdFx0XHR9ICksIHRcblx0XHRcdH0sXG5cdFx0XHRhc3luYzogZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdHIuc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dC5jYWxsKCBlIHx8IG51bGwgKVxuXHRcdFx0XHR9LCAwIClcblx0XHRcdH0sXG5cdFx0XHRjb21wYWN0OiBmdW5jdGlvbiB0KCBlICkge1xuXHRcdFx0XHRyZXR1cm4gaSggZSwgZnVuY3Rpb24oIG4sIHIgKSB7XG5cdFx0XHRcdFx0cyggciApICYmICh0KCByICksIGEoIHIgKSAmJiBkZWxldGUgZVsgbiBdKSwgdm9pZCAwICE9PSByICYmIG51bGwgIT09IHIgJiYgXCJcIiAhPT0gciB8fCBkZWxldGUgZVsgbiBdXG5cdFx0XHRcdH0gKSwgZVxuXHRcdFx0fSxcblx0XHRcdGNvbnRhaW5zOiBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0cmV0dXJuICEoIXQgfHwgIXQuaW5kZXhPZikgJiYgdC5pbmRleE9mKCBlICkgPiAtIDFcblx0XHRcdH0sXG5cdFx0XHRmb3JJbjogaSxcblx0XHRcdGlzT2JqZWN0OiBzLFxuXHRcdFx0aXNFbXB0eU9iamVjdDogYSxcblx0XHRcdHRvVHlwZTogbyxcblx0XHRcdGlzVHlwZTogZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdHJldHVybiB0ID09IG8oIGUgKVxuXHRcdFx0fSxcblx0XHRcdHRvUmVhbEFycmF5OiB1XG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSApIHtcblx0XHR0LmV4cG9ydHMgPSB3aW5kb3dcblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCA2ICk7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdCA9IHRoaXM7XG5cdFx0XHR0aGlzLnByb21pc2UgPSBuZXcgciggZnVuY3Rpb24oIGUsIG4gKSB7XG5cdFx0XHRcdHQucmVzb2x2ZSA9IGUsIHQucmVqZWN0ID0gblxuXHRcdFx0fSApXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDExICksXG5cdFx0XHRpID0gLyg/Ol58KD86aHR0cHM/Oik/XFwvXFwvKD86d3d3XFwuKT90d2l0dGVyXFwuY29tKD86OlxcZCspPyg/OlxcL2ludGVudFxcLyg/OmZvbGxvd3x1c2VyKVxcLz9cXD9zY3JlZW5fbmFtZT18KD86XFwvIyEpP1xcLykpQD8oW1xcd10rKSg/OlxcP3wmfCQpL2ksXG5cdFx0XHRvID0gLyg/Ol58KD86aHR0cHM/Oik/XFwvXFwvKD86d3d3XFwuKT90d2l0dGVyXFwuY29tKD86OlxcZCspP1xcLyg/OiMhXFwvKT9bXFx3X10rXFwvc3RhdHVzKD86ZXMpP1xcLykoXFxkKykvaSxcblx0XHRcdHMgPSAvXmh0dHAocz8pOlxcL1xcLyhcXHcrXFwuKSp0d2l0dGVyXFwuY29tKFs6L118JCkvaSwgYSA9IC9eaHR0cChzPyk6XFwvXFwvKHRvbnxwYnMpXFwudHdpbWdcXC5jb20vLFxuXHRcdFx0dSA9IC9eIz8oW14uLDw+IVxccy8jXFwtKCknXCJdKykkLywgYyA9IC90d2l0dGVyXFwuY29tKD86OlxcZHsyLDR9KT9cXC9pbnRlbnRcXC8oXFx3KykvLFxuXHRcdFx0ZCA9IC9eaHR0cHM/OlxcL1xcLyg/Ond3d1xcLik/dHdpdHRlclxcLmNvbVxcL1xcdytcXC90aW1lbGluZXNcXC8oXFxkKykvaSxcblx0XHRcdGYgPSAvXmh0dHBzPzpcXC9cXC8oPzp3d3dcXC4pP3R3aXR0ZXJcXC5jb21cXC9pXFwvbW9tZW50c1xcLyhcXGQrKS9pLFxuXHRcdFx0bCA9IC9eaHR0cHM/OlxcL1xcLyg/Ond3d1xcLik/dHdpdHRlclxcLmNvbVxcLyhcXHcrKVxcLyg/Omxpa2VzfGZhdm9yaXRlcykvaSxcblx0XHRcdGggPSAvXmh0dHBzPzpcXC9cXC8oPzp3d3dcXC4pP3R3aXR0ZXJcXC5jb21cXC8oXFx3KylcXC9saXN0c1xcLyhbXFx3LSVdKykvaSxcblx0XHRcdHAgPSAvXmh0dHBzPzpcXC9cXC8oPzp3d3dcXC4pP3R3aXR0ZXJcXC5jb21cXC9pXFwvbGl2ZVxcLyhcXGQrKS9pLFxuXHRcdFx0bSA9IC9eaHR0cHM/OlxcL1xcL3N5bmRpY2F0aW9uXFwudHdpdHRlclxcLmNvbVxcL3NldHRpbmdzL2ksXG5cdFx0XHR2ID0gL15odHRwcz86XFwvXFwvKGxvY2FsaG9zdHxwbGF0Zm9ybSlcXC50d2l0dGVyXFwuY29tKD86OlxcZCspP1xcL3dpZGdldHNcXC93aWRnZXRfaWZyYW1lXFwuKC4rKS9pLFxuXHRcdFx0ZyA9IC9eaHR0cHM/OlxcL1xcLyg/Ond3d1xcLik/dHdpdHRlclxcLmNvbVxcL3NlYXJjaFxcP3E9KFxcdyspL2k7XG5cblx0XHRmdW5jdGlvbiB3KCB0ICkge1xuXHRcdFx0cmV0dXJuIFwic3RyaW5nXCIgPT0gdHlwZW9mIHQgJiYgaS50ZXN0KCB0ICkgJiYgUmVnRXhwLiQxLmxlbmd0aCA8PSAyMFxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHkoIHQgKSB7XG5cdFx0XHRpZiAoIHcoIHQgKSApIHtcblx0XHRcdFx0cmV0dXJuIFJlZ0V4cC4kMVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGIoIHQsIGUgKSB7XG5cdFx0XHR2YXIgbiA9IHIuZGVjb2RlVVJMKCB0ICk7XG5cdFx0XHRpZiAoIGUgPSBlIHx8ICExLCBuLnNjcmVlbl9uYW1lID0geSggdCApLCBuLnNjcmVlbl9uYW1lICkge1xuXHRcdFx0XHRyZXR1cm4gci51cmwoIFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvXCIgKyAoZSA/IFwiZm9sbG93XCIgOiBcInVzZXJcIiksIG4gKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIF8oIHQgKSB7XG5cdFx0XHRyZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgdCAmJiB1LnRlc3QoIHQgKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIEUoIHQgKSB7XG5cdFx0XHRyZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgdCAmJiBvLnRlc3QoIHQgKVxuXHRcdH1cblxuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdGlzSGFzaFRhZzogXyxcblx0XHRcdGhhc2hUYWc6IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHRpZiAoIGUgPSB2b2lkIDAgPT09IGUgfHwgZSwgXyggdCApICkge1xuXHRcdFx0XHRcdHJldHVybiAoZSA/IFwiI1wiIDogXCJcIikgKyBSZWdFeHAuJDFcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGlzU2NyZWVuTmFtZTogdyxcblx0XHRcdHNjcmVlbk5hbWU6IHksXG5cdFx0XHRpc1N0YXR1czogRSxcblx0XHRcdHN0YXR1czogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiBFKCB0ICkgJiYgUmVnRXhwLiQxXG5cdFx0XHR9LFxuXHRcdFx0aW50ZW50Rm9yUHJvZmlsZVVSTDogYixcblx0XHRcdGludGVudEZvckZvbGxvd1VSTDogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiBiKCB0LCAhMCApXG5cdFx0XHR9LFxuXHRcdFx0aXNUd2l0dGVyVVJMOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIHMudGVzdCggdCApXG5cdFx0XHR9LFxuXHRcdFx0aXNUd2ltZ1VSTDogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiBhLnRlc3QoIHQgKVxuXHRcdFx0fSxcblx0XHRcdGlzSW50ZW50VVJMOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIGMudGVzdCggdCApXG5cdFx0XHR9LFxuXHRcdFx0aXNTZXR0aW5nc1VSTDogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiBtLnRlc3QoIHQgKVxuXHRcdFx0fSxcblx0XHRcdGlzV2lkZ2V0SWZyYW1lVVJMOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIHYudGVzdCggdCApXG5cdFx0XHR9LFxuXHRcdFx0aXNTZWFyY2hVcmw6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRyZXR1cm4gZy50ZXN0KCB0IClcblx0XHRcdH0sXG5cdFx0XHRyZWdleGVuOiB7IHByb2ZpbGU6IGkgfSxcblx0XHRcdG1vbWVudElkOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIGYudGVzdCggdCApICYmIFJlZ0V4cC4kMVxuXHRcdFx0fSxcblx0XHRcdGNvbGxlY3Rpb25JZDogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiBkLnRlc3QoIHQgKSAmJiBSZWdFeHAuJDFcblx0XHRcdH0sXG5cdFx0XHRpbnRlbnRUeXBlOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIGMudGVzdCggdCApICYmIFJlZ0V4cC4kMVxuXHRcdFx0fSxcblx0XHRcdGxpa2VzU2NyZWVuTmFtZTogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiBsLnRlc3QoIHQgKSAmJiBSZWdFeHAuJDFcblx0XHRcdH0sXG5cdFx0XHRsaXN0U2NyZWVuTmFtZUFuZFNsdWc6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSwgbiwgcjtcblx0XHRcdFx0aWYgKCBoLnRlc3QoIHQgKSApIHtcblx0XHRcdFx0XHRlID0gUmVnRXhwLiQxLCBuID0gUmVnRXhwLiQyO1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRyID0gZGVjb2RlVVJJQ29tcG9uZW50KCBuIClcblx0XHRcdFx0XHR9IGNhdGNoICggdCApIHtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdG93bmVyU2NyZWVuTmFtZTogZSxcblx0XHRcdFx0XHRcdHNsdWc6IHIgfHwgblxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gITFcblx0XHRcdH0sXG5cdFx0XHRldmVudElkOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIHAudGVzdCggdCApICYmIFJlZ0V4cC4kMVxuXHRcdFx0fVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0dC5leHBvcnRzID0gZG9jdW1lbnRcblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAwICksIGkgPSBbITAsIDEsIFwiMVwiLCBcIm9uXCIsIFwiT05cIiwgXCJ0cnVlXCIsIFwiVFJVRVwiLCBcInllc1wiLCBcIllFU1wiXSxcblx0XHRcdG8gPSBbITEsIDAsIFwiMFwiLCBcIm9mZlwiLCBcIk9GRlwiLCBcImZhbHNlXCIsIFwiRkFMU0VcIiwgXCJub1wiLCBcIk5PXCJdO1xuXG5cdFx0ZnVuY3Rpb24gcyggdCApIHtcblx0XHRcdHJldHVybiB2b2lkIDAgIT09IHQgJiYgbnVsbCAhPT0gdCAmJiBcIlwiICE9PSB0XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gYSggdCApIHtcblx0XHRcdHJldHVybiBjKCB0ICkgJiYgdCAlIDEgPT0gMFxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHUoIHQgKSB7XG5cdFx0XHRyZXR1cm4gYyggdCApICYmICFhKCB0IClcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBjKCB0ICkge1xuXHRcdFx0cmV0dXJuIHMoIHQgKSAmJiAhaXNOYU4oIHQgKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGQoIHQgKSB7XG5cdFx0XHRyZXR1cm4gci5jb250YWlucyggbywgdCApXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZiggdCApIHtcblx0XHRcdHJldHVybiByLmNvbnRhaW5zKCBpLCB0IClcblx0XHR9XG5cblx0XHR0LmV4cG9ydHMgPSB7XG5cdFx0XHRoYXNWYWx1ZTogcyxcblx0XHRcdGlzSW50OiBhLFxuXHRcdFx0aXNGbG9hdDogdSxcblx0XHRcdGlzTnVtYmVyOiBjLFxuXHRcdFx0aXNTdHJpbmc6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRyZXR1cm4gXCJzdHJpbmdcIiA9PT0gci50b1R5cGUoIHQgKVxuXHRcdFx0fSxcblx0XHRcdGlzQXJyYXk6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRyZXR1cm4gcyggdCApICYmIFwiYXJyYXlcIiA9PSByLnRvVHlwZSggdCApXG5cdFx0XHR9LFxuXHRcdFx0aXNUcnV0aFZhbHVlOiBmLFxuXHRcdFx0aXNGYWxzZVZhbHVlOiBkLFxuXHRcdFx0YXNJbnQ6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRpZiAoIGEoIHQgKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gcGFyc2VJbnQoIHQsIDEwIClcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGFzRmxvYXQ6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRpZiAoIHUoIHQgKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gdFxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0YXNOdW1iZXI6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRpZiAoIGMoIHQgKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gdFxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0YXNCb29sZWFuOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuICEoIXMoIHQgKSB8fCAhZiggdCApICYmIChkKCB0ICkgfHwgIXQpKVxuXHRcdFx0fVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAxICksIGkgPSBuKCAyMiApLCBvID0gbiggNDggKTtcblx0XHRpLmhhc1Byb21pc2VTdXBwb3J0KCkgfHwgKHIuUHJvbWlzZSA9IG8pLCB0LmV4cG9ydHMgPSByLlByb21pc2Vcblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAwICk7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHR2YXIgbiA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKCBhcmd1bWVudHMsIDIgKTtcblx0XHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGkgPSByLnRvUmVhbEFycmF5KCBhcmd1bWVudHMgKTtcblx0XHRcdFx0cmV0dXJuIHQuYXBwbHkoIGUsIG4uY29uY2F0KCBpICkgKVxuXHRcdFx0fVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0dC5leHBvcnRzID0gbG9jYXRpb25cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCA1MCApO1xuXHRcdHQuZXhwb3J0cyA9IG5ldyByKCBcIl9fdHd0dHJcIiApXG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMCApLCBpID0gL1xcYihbXFx3LV9dKylcXGIvZztcblxuXHRcdGZ1bmN0aW9uIG8oIHQgKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFJlZ0V4cCggXCJcXFxcYlwiICsgdCArIFwiXFxcXGJcIiwgXCJnXCIgKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHMoIHQsIGUgKSB7XG5cdFx0XHR0LmNsYXNzTGlzdCA/IHQuY2xhc3NMaXN0LmFkZCggZSApIDogbyggZSApLnRlc3QoIHQuY2xhc3NOYW1lICkgfHwgKHQuY2xhc3NOYW1lICs9IFwiIFwiICsgZSlcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBhKCB0LCBlICkge1xuXHRcdFx0dC5jbGFzc0xpc3QgPyB0LmNsYXNzTGlzdC5yZW1vdmUoIGUgKSA6IHQuY2xhc3NOYW1lID0gdC5jbGFzc05hbWUucmVwbGFjZSggbyggZSApLCBcIiBcIiApXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdSggdCwgZSApIHtcblx0XHRcdHJldHVybiB0LmNsYXNzTGlzdCA/IHQuY2xhc3NMaXN0LmNvbnRhaW5zKCBlICkgOiByLmNvbnRhaW5zKCBjKCB0ICksIGUgKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGMoIHQgKSB7XG5cdFx0XHRyZXR1cm4gci50b1JlYWxBcnJheSggdC5jbGFzc0xpc3QgPyB0LmNsYXNzTGlzdCA6IHQuY2xhc3NOYW1lLm1hdGNoKCBpICkgKVxuXHRcdH1cblxuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdGFkZDogcyxcblx0XHRcdHJlbW92ZTogYSxcblx0XHRcdHJlcGxhY2U6IGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdFx0XHRpZiAoIHQuY2xhc3NMaXN0ICYmIHUoIHQsIGUgKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gYSggdCwgZSApLCB2b2lkIHMoIHQsIG4gKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0LmNsYXNzTmFtZSA9IHQuY2xhc3NOYW1lLnJlcGxhY2UoIG8oIGUgKSwgbiApXG5cdFx0XHR9LFxuXHRcdFx0dG9nZ2xlOiBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHRcdFx0cmV0dXJuIHZvaWQgMCA9PT0gbiAmJiB0LmNsYXNzTGlzdCAmJiB0LmNsYXNzTGlzdC50b2dnbGUgPyB0LmNsYXNzTGlzdC50b2dnbGUoIGUsIG4gKSA6IChuID8gcyggdCwgZSApIDogYSggdCwgZSApLCBuKVxuXHRcdFx0fSxcblx0XHRcdHByZXNlbnQ6IHUsXG5cdFx0XHRsaXN0OiBjXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDUgKSwgaSA9IG4oIDAgKTtcblxuXHRcdGZ1bmN0aW9uIG8oIHQgKSB7XG5cdFx0XHRyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KCB0ICkucmVwbGFjZSggL1xcKy9nLCBcIiUyQlwiICkucmVwbGFjZSggLycvZywgXCIlMjdcIiApXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gcyggdCApIHtcblx0XHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoIHQgKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGEoIHQgKSB7XG5cdFx0XHR2YXIgZSA9IFtdO1xuXHRcdFx0cmV0dXJuIGkuZm9ySW4oIHQsIGZ1bmN0aW9uKCB0LCBuICkge1xuXHRcdFx0XHR2YXIgcyA9IG8oIHQgKTtcblx0XHRcdFx0aS5pc1R5cGUoIFwiYXJyYXlcIiwgbiApIHx8IChuID0gW25dKSwgbi5mb3JFYWNoKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRyLmhhc1ZhbHVlKCB0ICkgJiYgZS5wdXNoKCBzICsgXCI9XCIgKyBvKCB0ICkgKVxuXHRcdFx0XHR9IClcblx0XHRcdH0gKSwgZS5zb3J0KCkuam9pbiggXCImXCIgKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHUoIHQgKSB7XG5cdFx0XHR2YXIgZSA9IHt9O1xuXHRcdFx0cmV0dXJuIHQgPyAodC5zcGxpdCggXCImXCIgKS5mb3JFYWNoKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIG4gPSB0LnNwbGl0KCBcIj1cIiApLCByID0gcyggblsgMCBdICksIG8gPSBzKCBuWyAxIF0gKTtcblx0XHRcdFx0aWYgKCAyID09IG4ubGVuZ3RoICkge1xuXHRcdFx0XHRcdGlmICggIWkuaXNUeXBlKCBcImFycmF5XCIsIGVbIHIgXSApICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHIgaW4gZSA/IChlWyByIF0gPSBbZVsgciBdXSwgdm9pZCBlWyByIF0ucHVzaCggbyApKSA6IHZvaWQgKGVbIHIgXSA9IG8pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlWyByIF0ucHVzaCggbyApXG5cdFx0XHRcdH1cblx0XHRcdH0gKSwgZSkgOiB7fVxuXHRcdH1cblxuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdHVybDogZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdHJldHVybiBhKCBlICkubGVuZ3RoID4gMCA/IGkuY29udGFpbnMoIHQsIFwiP1wiICkgPyB0ICsgXCImXCIgKyBhKCBlICkgOiB0ICsgXCI/XCIgKyBhKCBlICkgOiB0XG5cdFx0XHR9LFxuXHRcdFx0ZGVjb2RlVVJMOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUgPSB0ICYmIHQuc3BsaXQoIFwiP1wiICk7XG5cdFx0XHRcdHJldHVybiAyID09IGUubGVuZ3RoID8gdSggZVsgMSBdICkgOiB7fVxuXHRcdFx0fSxcblx0XHRcdGRlY29kZTogdSxcblx0XHRcdGVuY29kZTogYSxcblx0XHRcdGVuY29kZVBhcnQ6IG8sXG5cdFx0XHRkZWNvZGVQYXJ0OiBzXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDggKSwgaSA9IG4oIDEgKSwgbyA9IG4oIDAgKSwgcyA9IHt9LCBhID0gby5jb250YWlucyggci5ocmVmLCBcInR3X2RlYnVnPXRydWVcIiApO1xuXG5cdFx0ZnVuY3Rpb24gdSgpIHtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBjKCkge1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGQoKSB7XG5cdFx0XHRyZXR1cm4gaS5wZXJmb3JtYW5jZSAmJiArIGkucGVyZm9ybWFuY2Uubm93KCkgfHwgKyBuZXcgRGF0ZVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGYoIHQsIGUgKSB7XG5cdFx0XHRpZiAoIGkuY29uc29sZSAmJiBpLmNvbnNvbGVbIHQgXSApIHtcblx0XHRcdFx0c3dpdGNoICggZS5sZW5ndGggKSB7XG5cdFx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdFx0aS5jb25zb2xlWyB0IF0oIGVbIDAgXSApO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRcdFx0aS5jb25zb2xlWyB0IF0oIGVbIDAgXSwgZVsgMSBdICk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIDM6XG5cdFx0XHRcdFx0XHRpLmNvbnNvbGVbIHQgXSggZVsgMCBdLCBlWyAxIF0sIGVbIDIgXSApO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSA0OlxuXHRcdFx0XHRcdFx0aS5jb25zb2xlWyB0IF0oIGVbIDAgXSwgZVsgMSBdLCBlWyAyIF0sIGVbIDMgXSApO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSA1OlxuXHRcdFx0XHRcdFx0aS5jb25zb2xlWyB0IF0oIGVbIDAgXSwgZVsgMSBdLCBlWyAyIF0sIGVbIDMgXSwgZVsgNCBdICk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0MCAhPT0gZS5sZW5ndGggJiYgaS5jb25zb2xlLndhcm4gJiYgaS5jb25zb2xlLndhcm4oIFwidG9vIG1hbnkgcGFyYW1zIHBhc3NlZCB0byBsb2dnZXIuXCIgKyB0IClcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdGRldkVycm9yOiB1LFxuXHRcdFx0ZGV2SW5mbzogYyxcblx0XHRcdGRldk9iamVjdDogZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHR9LFxuXHRcdFx0cHVibGljRXJyb3I6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRmKCBcImVycm9yXCIsIG8udG9SZWFsQXJyYXkoIGFyZ3VtZW50cyApIClcblx0XHRcdH0sXG5cdFx0XHRwdWJsaWNMb2c6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRmKCBcImluZm9cIiwgby50b1JlYWxBcnJheSggYXJndW1lbnRzICkgKVxuXHRcdFx0fSxcblx0XHRcdHRpbWU6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRhICYmIChzWyB0IF0gPSBkKCkpXG5cdFx0XHR9LFxuXHRcdFx0dGltZUVuZDogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdGEgJiYgc1sgdCBdICYmIChkKCksIHNbIHQgXSlcblx0XHRcdH1cblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMjAgKSwgaSA9IG4oIDUgKSwgbyA9IG4oIDExICksIHMgPSBuKCAwICksIGEgPSBuKCAxMjEgKTtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdHZhciBlID0gdC5ocmVmICYmIHQuaHJlZi5zcGxpdCggXCI/XCIgKVsgMSBdLCBuID0gZSA/IG8uZGVjb2RlKCBlICkgOiB7fSwgdSA9IHtcblx0XHRcdFx0bGFuZzogYSggdCApLFxuXHRcdFx0XHR3aWR0aDogdC5nZXRBdHRyaWJ1dGUoIFwiZGF0YS13aWR0aFwiICkgfHwgdC5nZXRBdHRyaWJ1dGUoIFwid2lkdGhcIiApLFxuXHRcdFx0XHRoZWlnaHQ6IHQuZ2V0QXR0cmlidXRlKCBcImRhdGEtaGVpZ2h0XCIgKSB8fCB0LmdldEF0dHJpYnV0ZSggXCJoZWlnaHRcIiApLFxuXHRcdFx0XHRyZWxhdGVkOiB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLXJlbGF0ZWRcIiApLFxuXHRcdFx0XHRwYXJ0bmVyOiB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLXBhcnRuZXJcIiApXG5cdFx0XHR9O1xuXHRcdFx0cmV0dXJuIGkuYXNCb29sZWFuKCB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLWRudFwiICkgKSAmJiByLnNldE9uKCksIHMuZm9ySW4oIHUsIGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHR2YXIgciA9IG5bIHQgXTtcblx0XHRcdFx0blsgdCBdID0gaS5oYXNWYWx1ZSggciApID8gciA6IGVcblx0XHRcdH0gKSwgcy5jb21wYWN0KCBuIClcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggODIgKSwgaSA9IG4oIDI0ICk7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdCA9IFwiZGF0YS10d2l0dGVyLWV4dHJhY3RlZC1cIiArIGkuZ2VuZXJhdGUoKTtcblx0XHRcdHJldHVybiBmdW5jdGlvbiggZSwgbiApIHtcblx0XHRcdFx0cmV0dXJuIHIoIGUsIG4gKS5maWx0ZXIoIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0XHRcdHJldHVybiAhZS5oYXNBdHRyaWJ1dGUoIHQgKVxuXHRcdFx0XHR9ICkubWFwKCBmdW5jdGlvbiggZSApIHtcblx0XHRcdFx0XHRyZXR1cm4gZS5zZXRBdHRyaWJ1dGUoIHQsIFwidHJ1ZVwiICksIGVcblx0XHRcdFx0fSApXG5cdFx0XHR9XG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRmdW5jdGlvbiBuKCB0LCBlLCBuLCByLCBpLCBvLCBzICkge1xuXHRcdFx0dGhpcy5mYWN0b3J5ID0gdCwgdGhpcy5TYW5kYm94ID0gZSwgdGhpcy5zcmNFbCA9IG8sIHRoaXMudGFyZ2V0RWwgPSBpLCB0aGlzLnBhcmFtZXRlcnMgPSByLCB0aGlzLmNsYXNzTmFtZSA9IG4sIHRoaXMub3B0aW9ucyA9IHNcblx0XHR9XG5cblx0XHRuLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLnNyY0VsID0gdGhpcy50YXJnZXRFbCA9IG51bGxcblx0XHR9LCB0LmV4cG9ydHMgPSBuXG5cdH0sIGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdERNX0JVVFRPTjogXCJ0d2l0dGVyLWRtLWJ1dHRvblwiLFxuXHRcdFx0Rk9MTE9XX0JVVFRPTjogXCJ0d2l0dGVyLWZvbGxvdy1idXR0b25cIixcblx0XHRcdEhBU0hUQUdfQlVUVE9OOiBcInR3aXR0ZXItaGFzaHRhZy1idXR0b25cIixcblx0XHRcdE1FTlRJT05fQlVUVE9OOiBcInR3aXR0ZXItbWVudGlvbi1idXR0b25cIixcblx0XHRcdE1PTUVOVDogXCJ0d2l0dGVyLW1vbWVudFwiLFxuXHRcdFx0UEVSSVNDT1BFOiBcInBlcmlzY29wZS1vbi1haXJcIixcblx0XHRcdFNIQVJFX0JVVFRPTjogXCJ0d2l0dGVyLXNoYXJlLWJ1dHRvblwiLFxuXHRcdFx0VElNRUxJTkU6IFwidHdpdHRlci10aW1lbGluZVwiLFxuXHRcdFx0VFdFRVQ6IFwidHdpdHRlci10d2VldFwiXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDYgKSwgaSA9IG4oIDIwICksIG8gPSBuKCA1MiApLCBzID0gbiggMzEgKSwgYSA9IG4oIDUgKSwgdSA9IG4oIDAgKTtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHRcdHZhciBjO1xuXHRcdFx0cmV0dXJuIHQgPSB0IHx8IFtdLCBlID0gZSB8fCB7fSwgYyA9IFwixpIoXCIgKyB0LmpvaW4oIFwiLCBcIiApICsgXCIsIHRhcmdldCwgW29wdGlvbnNdKTtcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBkLCBmLCBsLCBoLCBwID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KCBhcmd1bWVudHMsIFswLCB0Lmxlbmd0aF0gKSxcblx0XHRcdFx0XHRtID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KCBhcmd1bWVudHMsIFt0Lmxlbmd0aF0gKTtcblx0XHRcdFx0cmV0dXJuIG0uZm9yRWFjaCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0dCAmJiAodC5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUgPyB1LmlzVHlwZSggXCJmdW5jdGlvblwiLCB0ICkgPyBkID0gdCA6IHUuaXNUeXBlKCBcIm9iamVjdFwiLCB0ICkgJiYgKGYgPSB0KSA6IGwgPSB0KVxuXHRcdFx0XHR9ICksIHAubGVuZ3RoICE9PSB0Lmxlbmd0aCB8fCAwID09PSBtLmxlbmd0aCA/IChkICYmIHUuYXN5bmMoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGQoICExIClcblx0XHRcdFx0fSApLCByLnJlamVjdCggbmV3IEVycm9yKCBcIk5vdCBlbm91Z2ggcGFyYW1ldGVycy4gRXhwZWN0ZWQ6IFwiICsgYyApICkpIDogbCA/IChmID0gdS5hdWcoIHt9LCBmIHx8IHt9LCBlICksIHQuZm9yRWFjaCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0ZlsgdCBdID0gcC5zaGlmdCgpXG5cdFx0XHRcdH0gKSwgYS5hc0Jvb2xlYW4oIGYuZG50ICkgJiYgaS5zZXRPbigpLCBoID0gcy5nZXRFeHBlcmltZW50cygpLnRoZW4oIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdHJldHVybiBvLmFkZFdpZGdldCggbiggZiwgbCwgdm9pZCAwLCB0ICkgKVxuXHRcdFx0XHR9ICksIGQgJiYgaC50aGVuKCBkLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRkKCAhMSApXG5cdFx0XHRcdH0gKSwgaCkgOiAoZCAmJiB1LmFzeW5jKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRkKCAhMSApXG5cdFx0XHRcdH0gKSwgci5yZWplY3QoIG5ldyBFcnJvciggXCJObyB0YXJnZXQgZWxlbWVudCBzcGVjaWZpZWQuIEV4cGVjdGVkOiBcIiArIGMgKSApKVxuXHRcdFx0fVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAxMDQgKSwgaSA9IG4oIDIgKSwgbyA9IG4oIDAgKTtcblxuXHRcdGZ1bmN0aW9uIHMoIHQsIGUgKSB7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0ZS5yZXNvbHZlKCB0LmNhbGwoIHRoaXMgKSApXG5cdFx0XHRcdH0gY2F0Y2ggKCB0ICkge1xuXHRcdFx0XHRcdGUucmVqZWN0KCB0IClcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdHN5bmM6IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHR0LmNhbGwoIGUgKVxuXHRcdFx0fSxcblx0XHRcdHJlYWQ6IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHR2YXIgbiA9IG5ldyBpO1xuXHRcdFx0XHRyZXR1cm4gci5yZWFkKCBzKCB0LCBuICksIGUgKSwgbi5wcm9taXNlXG5cdFx0XHR9LFxuXHRcdFx0d3JpdGU6IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHR2YXIgbiA9IG5ldyBpO1xuXHRcdFx0XHRyZXR1cm4gci53cml0ZSggcyggdCwgbiApLCBlICksIG4ucHJvbWlzZVxuXHRcdFx0fSxcblx0XHRcdGRlZmVyOiBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHRcdFx0dmFyIGEgPSBuZXcgaTtcblx0XHRcdFx0cmV0dXJuIG8uaXNUeXBlKCBcImZ1bmN0aW9uXCIsIHQgKSAmJiAobiA9IGUsIGUgPSB0LCB0ID0gMSksIHIuZGVmZXIoIHQsIHMoIGUsIGEgKSwgbiApLCBhLnByb21pc2Vcblx0XHRcdH1cblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggOSApLCBpID0gW1xuXHRcdFx0XCJodHRwczovL3N5bmRpY2F0aW9uLnR3aXR0ZXIuY29tXCIsXG5cdFx0XHRcImh0dHBzOi8vY2RuLnN5bmRpY2F0aW9uLnR3aW1nLmNvbVwiLFxuXHRcdFx0XCJodHRwczovL2xvY2FsaG9zdC50d2l0dGVyLmNvbTo4NDQ0XCJcblx0XHRdLCBvID0gW1wiaHR0cHM6Ly9zeW5kaWNhdGlvbi50d2l0dGVyLmNvbVwiLCBcImh0dHBzOi8vbG9jYWxob3N0LnR3aXR0ZXIuY29tOjg0NDVcIl0sIHMgPSBbXG5cdFx0XHRcImh0dHBzOi8vcGxhdGZvcm0udHdpdHRlci5jb20vZW1iZWQvaW5kZXguaHRtbFwiLFxuXHRcdFx0XCJodHRwczovL2xvY2FsaG9zdC50d2l0dGVyLmNvbVwiLFxuXHRcdFx0L2h0dHBzOlxcL1xcL3RvblxcLnNtZjFcXC50d2l0dGVyXFwuY29tXFwvc3luZGljYXRpb24taW50ZXJuYWxcXC9lbWJlZC1pZnJhbWVcXC9bMC05QS1aYS16Xy1dK1xcL2FwcFxcL2luZGV4XFwuaHRtbC9cblx0XHRdLCBhID0gZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRyZXR1cm4gdC5zb21lKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIHQgaW5zdGFuY2VvZiBSZWdFeHAgPyB0LnRlc3QoIGUgKSA6IHQgPT09IGVcblx0XHRcdH0gKVxuXHRcdH0sIHUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciB0ID0gci5nZXQoIFwiYmFja2VuZEhvc3RcIiApO1xuXHRcdFx0cmV0dXJuIHQgJiYgYSggaSwgdCApID8gdCA6IFwiaHR0cHM6Ly9jZG4uc3luZGljYXRpb24udHdpbWcuY29tXCJcblx0XHR9LCBjID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdCA9IHIuZ2V0KCBcInNldHRpbmdzU3ZjSG9zdFwiICk7XG5cdFx0XHRyZXR1cm4gdCAmJiBhKCBvLCB0ICkgPyB0IDogXCJodHRwczovL3N5bmRpY2F0aW9uLnR3aXR0ZXIuY29tXCJcblx0XHR9LCBkID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdCA9IHIuZ2V0KCBcImVtYmVkSWZyYW1lVVJMXCIgKTtcblx0XHRcdHJldHVybiB0ICYmIGEoIHMsIHQgKSA/IHQgOiBcImh0dHBzOi8vcGxhdGZvcm0udHdpdHRlci5jb20vZW1iZWQvaW5kZXguaHRtbFwiXG5cdFx0fTtcblxuXHRcdGZ1bmN0aW9uIGYoIHQsIGUgKSB7XG5cdFx0XHR2YXIgbiA9IFt0XTtcblx0XHRcdHJldHVybiBlLmZvckVhY2goIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRuLnB1c2goIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdHZhciBlID0gKHQgfHwgXCJcIikudG9TdHJpbmcoKSwgbiA9IFwiL1wiID09PSBlLnNsaWNlKCAwLCAxICkgPyAxIDogMCwgciA9IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIFwiL1wiID09PSB0LnNsaWNlKCAtIDEgKVxuXHRcdFx0XHRcdH0oIGUgKSA/IC0gMSA6IHZvaWQgMDtcblx0XHRcdFx0XHRyZXR1cm4gZS5zbGljZSggbiwgciApXG5cdFx0XHRcdH0oIHQgKSApXG5cdFx0XHR9ICksIG4uam9pbiggXCIvXCIgKVxuXHRcdH1cblxuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdGNvb2tpZUNvbnNlbnQ6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSA9IHQgfHwgW107XG5cdFx0XHRcdHJldHVybiBlLnVuc2hpZnQoIFwiY29va2llL2NvbnNlbnRcIiApLCBmKCBjKCksIGUgKVxuXHRcdFx0fSxcblx0XHRcdGVtYmVkSWZyYW1lOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIGQoKVxuXHRcdFx0fSxcblx0XHRcdGV2ZW50VmlkZW86IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSA9IHQgfHwgW107XG5cdFx0XHRcdHJldHVybiBlLnVuc2hpZnQoIFwidmlkZW8vZXZlbnRcIiApLCBmKCB1KCksIGUgKVxuXHRcdFx0fSxcblx0XHRcdGdyaWQ6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSA9IHQgfHwgW107XG5cdFx0XHRcdHJldHVybiBlLnVuc2hpZnQoIFwiZ3JpZC9jb2xsZWN0aW9uXCIgKSwgZiggdSgpLCBlIClcblx0XHRcdH0sXG5cdFx0XHRtb21lbnQ6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSA9IHQgfHwgW107XG5cdFx0XHRcdHJldHVybiBlLnVuc2hpZnQoIFwibW9tZW50c1wiICksIGYoIHUoKSwgZSApXG5cdFx0XHR9LFxuXHRcdFx0c2V0dGluZ3M6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSA9IHQgfHwgW107XG5cdFx0XHRcdHJldHVybiBlLnVuc2hpZnQoIFwic2V0dGluZ3NcIiApLCBmKCBjKCksIGUgKVxuXHRcdFx0fSxcblx0XHRcdHRpbWVsaW5lOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUgPSB0IHx8IFtdO1xuXHRcdFx0XHRyZXR1cm4gZS51bnNoaWZ0KCBcInRpbWVsaW5lXCIgKSwgZiggdSgpLCBlIClcblx0XHRcdH0sXG5cdFx0XHR0d2VldEJhdGNoOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUgPSB0IHx8IFtdO1xuXHRcdFx0XHRyZXR1cm4gZS51bnNoaWZ0KCBcInR3ZWV0cy5qc29uXCIgKSwgZiggdSgpLCBlIClcblx0XHRcdH0sXG5cdFx0XHR2aWRlbzogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHZhciBlID0gdCB8fCBbXTtcblx0XHRcdFx0cmV0dXJuIGUudW5zaGlmdCggXCJ3aWRnZXRzL3ZpZGVvXCIgKSwgZiggdSgpLCBlIClcblx0XHRcdH1cblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggNCApLCBpID0gbiggOCApLCBvID0gbiggMzkgKSwgcyA9IG4oIDgwICksIGEgPSBuKCA1ICksIHUgPSBuKCAzNSApLCBjID0gITEsXG5cdFx0XHRkID0gL2h0dHBzPzpcXC9cXC8oW14vXSspLiovaTtcblx0XHR0LmV4cG9ydHMgPSB7XG5cdFx0XHRzZXRPbjogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGMgPSAhMFxuXHRcdFx0fSxcblx0XHRcdGVuYWJsZWQ6IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHRyZXR1cm4gISEoYyB8fCBhLmFzQm9vbGVhbiggdS52YWwoIFwiZG50XCIgKSApIHx8IHMuaXNVcmxTZW5zaXRpdmUoIGUgfHwgaS5ob3N0ICkgfHwgby5pc0ZyYW1lZCgpICYmIHMuaXNVcmxTZW5zaXRpdmUoIG8ucm9vdERvY3VtZW50TG9jYXRpb24oKSApIHx8ICh0ID0gZC50ZXN0KCB0IHx8IHIucmVmZXJyZXIgKSAmJiBSZWdFeHAuJDEpICYmIHMuaXNVcmxTZW5zaXRpdmUoIHQgKSlcblx0XHRcdH1cblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggNDcgKSwgaSA9IG4oIDQgKSwgbyA9IG4oIDIwICksIHMgPSBuKCAzNCApLCBhID0gbiggNzIgKSwgdSA9IG4oIDMzICksIGMgPSBuKCA5ICksIGQgPSBuKCAzICksXG5cdFx0XHRmID0gbiggMCApLCBsID0gMSwgaCA9IHIudmVyc2lvbixcblx0XHRcdHAgPSBjLmdldCggXCJjbGllbnRFdmVudEVuZHBvaW50XCIgKSB8fCBcImh0dHBzOi8vc3luZGljYXRpb24udHdpdHRlci5jb20vaS9qb3RcIjtcblxuXHRcdGZ1bmN0aW9uIG0oIHQgKSB7XG5cdFx0XHRyZXR1cm4gZi5hdWcoIHsgY2xpZW50OiBcInRmd1wiIH0sIHQgfHwge30gKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHYoIHQsIGUsIG4gKSB7XG5cdFx0XHRyZXR1cm4gZSA9IGUgfHwge30sIGYuYXVnKCB7fSwgZSwge1xuXHRcdFx0XHRfY2F0ZWdvcnlfOiB0LFxuXHRcdFx0XHR0cmlnZ2VyZWRfb246IGUudHJpZ2dlcmVkX29uIHx8ICsgbmV3IERhdGUsXG5cdFx0XHRcdGRudDogby5lbmFibGVkKCBuIClcblx0XHRcdH0gKVxuXHRcdH1cblxuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdGV4dHJhY3RUZXJtc0Zyb21ET006IGZ1bmN0aW9uIHQoIGUsIG4gKSB7XG5cdFx0XHRcdHZhciByO1xuXHRcdFx0XHRyZXR1cm4gbiA9IG4gfHwge30sIGUgJiYgZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgPyAoKHIgPSBlLmdldEF0dHJpYnV0ZSggXCJkYXRhLXNjcmliZVwiICkpICYmIHIuc3BsaXQoIFwiIFwiICkuZm9yRWFjaCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0dmFyIGUgPSB0LnRyaW0oKS5zcGxpdCggXCI6XCIgKSwgciA9IGVbIDAgXSwgaSA9IGVbIDEgXTtcblx0XHRcdFx0XHRyICYmIGkgJiYgIW5bIHIgXSAmJiAoblsgciBdID0gaSlcblx0XHRcdFx0fSApLCB0KCBlLnBhcmVudE5vZGUsIG4gKSkgOiBuXG5cdFx0XHR9LFxuXHRcdFx0Y2xpY2tFdmVudEVsZW1lbnQ6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSA9IHMuY2xvc2VzdCggXCJbZGF0YS1leHBhbmRlZC11cmxdXCIsIHQgKSwgbiA9IGUgJiYgZS5nZXRBdHRyaWJ1dGUoIFwiZGF0YS1leHBhbmRlZC11cmxcIiApO1xuXHRcdFx0XHRyZXR1cm4gbiAmJiBkLmlzVHdpdHRlclVSTCggbiApID8gXCJ0d2l0dGVyX3VybFwiIDogXCJ1cmxcIlxuXHRcdFx0fSxcblx0XHRcdGZsYXR0ZW5DbGllbnRFdmVudFBheWxvYWQ6IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHRyZXR1cm4gZi5hdWcoIHt9LCBlLCB7IGV2ZW50X25hbWVzcGFjZTogdCB9IClcblx0XHRcdH0sXG5cdFx0XHRmb3JtYXRHZW5lcmljRXZlbnREYXRhOiB2LFxuXHRcdFx0Zm9ybWF0Q2xpZW50RXZlbnREYXRhOiBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHRcdFx0dmFyIHIgPSB0ICYmIHQud2lkZ2V0X29yaWdpbiB8fCBpLnJlZmVycmVyO1xuXHRcdFx0XHRyZXR1cm4gKHQgPSB2KCBcInRmd19jbGllbnRfZXZlbnRcIiwgdCwgciApKS5jbGllbnRfdmVyc2lvbiA9IGgsIHQuZm9ybWF0X3ZlcnNpb24gPSB2b2lkIDAgIT09IG4gPyBuIDogMSwgZSB8fCAodC53aWRnZXRfb3JpZ2luID0gciksIHRcblx0XHRcdH0sXG5cdFx0XHRmb3JtYXRDbGllbnRFdmVudE5hbWVzcGFjZTogbSxcblx0XHRcdGZvcm1hdEhvcml6b25Ud2VldERhdGE6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSA9IHtcblx0XHRcdFx0XHRpdGVtX2lkczogW10sXG5cdFx0XHRcdFx0aXRlbV9kZXRhaWxzOiB7fVxuXHRcdFx0XHR9O1xuXHRcdFx0XHRyZXR1cm4gZS5pdGVtX2lkcy5wdXNoKCB0ICksIGUuaXRlbV9kZXRhaWxzWyB0IF0gPSB7IGl0ZW1fdHlwZTogYS5UV0VFVCB9LCBlXG5cdFx0XHR9LFxuXHRcdFx0Zm9ybWF0VHdlZXRBc3NvY2lhdGlvbjogZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdHZhciBuID0ge307XG5cdFx0XHRcdHJldHVybiAoZSA9IGUgfHwge30pLmFzc29jaWF0aW9uX25hbWVzcGFjZSA9IG0oIHQgKSwgblsgbCBdID0gZSwgblxuXHRcdFx0fSxcblx0XHRcdG5vdGljZVNlZW46IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRyZXR1cm4gXCJub3RpY2VcIiA9PT0gdC5lbGVtZW50ICYmIFwic2VlblwiID09PSB0LmFjdGlvblxuXHRcdFx0fSxcblx0XHRcdHNwbGl0TG9nRW50cnk6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSwgbiwgciwgaSwgbztcblx0XHRcdFx0cmV0dXJuIHQuaXRlbV9pZHMgJiYgdC5pdGVtX2lkcy5sZW5ndGggPiAxID8gKGUgPSBNYXRoLmZsb29yKCB0Lml0ZW1faWRzLmxlbmd0aCAvIDIgKSwgbiA9IHQuaXRlbV9pZHMuc2xpY2UoIDAsIGUgKSwgciA9IHt9LCBpID0gdC5pdGVtX2lkcy5zbGljZSggZSApLCBvID0ge30sIG4uZm9yRWFjaCggZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRcdFx0clsgZSBdID0gdC5pdGVtX2RldGFpbHNbIGUgXVxuXHRcdFx0XHR9ICksIGkuZm9yRWFjaCggZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRcdFx0b1sgZSBdID0gdC5pdGVtX2RldGFpbHNbIGUgXVxuXHRcdFx0XHR9ICksIFtcblx0XHRcdFx0XHRmLmF1Zygge30sIHQsIHtcblx0XHRcdFx0XHRcdGl0ZW1faWRzOiBuLFxuXHRcdFx0XHRcdFx0aXRlbV9kZXRhaWxzOiByXG5cdFx0XHRcdFx0fSApLFxuXHRcdFx0XHRcdGYuYXVnKCB7fSwgdCwge1xuXHRcdFx0XHRcdFx0aXRlbV9pZHM6IGksXG5cdFx0XHRcdFx0XHRpdGVtX2RldGFpbHM6IG9cblx0XHRcdFx0XHR9IClcblx0XHRcdFx0XSkgOiBbdF1cblx0XHRcdH0sXG5cdFx0XHRzdHJpbmdpZnk6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSwgbiA9IEFycmF5LnByb3RvdHlwZS50b0pTT047XG5cdFx0XHRcdHJldHVybiBkZWxldGUgQXJyYXkucHJvdG90eXBlLnRvSlNPTiwgZSA9IHUuc3RyaW5naWZ5KCB0ICksIG4gJiYgKEFycmF5LnByb3RvdHlwZS50b0pTT04gPSBuKSwgZVxuXHRcdFx0fSxcblx0XHRcdEFVRElFTkNFX0VORFBPSU5UOiBcImh0dHBzOi8vc3luZGljYXRpb24udHdpdHRlci5jb20vaS9qb3Qvc3luZGljYXRpb25cIixcblx0XHRcdENMSUVOVF9FVkVOVF9FTkRQT0lOVDogcCxcblx0XHRcdFJVRk9VU19SRURJUkVDVDogXCJodHRwczovL3BsYXRmb3JtLnR3aXR0ZXIuY29tL2pvdC5odG1sXCJcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggNCApLCBpID0gbiggMTIgKSwgbyA9IG4oIDk3ICksIHMgPSBuKCAxICksIGEgPSBuKCAwICksIHUgPSBvLnVzZXJBZ2VudDtcblxuXHRcdGZ1bmN0aW9uIGMoIHQgKSB7XG5cdFx0XHRyZXR1cm4gLyhUcmlkZW50fE1TSUV8RWRnZVsvIF0/XFxkKS8udGVzdCggdCA9IHQgfHwgdSApXG5cdFx0fVxuXG5cdFx0dC5leHBvcnRzID0ge1xuXHRcdFx0cmV0aW5hOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuICh0ID0gdCB8fCBzKS5kZXZpY2VQaXhlbFJhdGlvID8gdC5kZXZpY2VQaXhlbFJhdGlvID49IDEuNSA6ICEhdC5tYXRjaE1lZGlhICYmIHQubWF0Y2hNZWRpYSggXCJvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxNDRkcGkpXCIgKS5tYXRjaGVzXG5cdFx0XHR9LFxuXHRcdFx0YW55SUU6IGMsXG5cdFx0XHRpZTk6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRyZXR1cm4gL01TSUUgOS8udGVzdCggdCA9IHQgfHwgdSApXG5cdFx0XHR9LFxuXHRcdFx0aWUxMDogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiAvTVNJRSAxMC8udGVzdCggdCA9IHQgfHwgdSApXG5cdFx0XHR9LFxuXHRcdFx0aW9zOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIC8oaVBhZHxpUGhvbmV8aVBvZCkvLnRlc3QoIHQgPSB0IHx8IHUgKVxuXHRcdFx0fSxcblx0XHRcdGFuZHJvaWQ6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRyZXR1cm4gL15Nb3ppbGxhXFwvNVxcLjAgXFwoTGludXg7IChVOyApP0FuZHJvaWQvLnRlc3QoIHQgPSB0IHx8IHUgKVxuXHRcdFx0fSxcblx0XHRcdGNhblBvc3RNZXNzYWdlOiBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0cmV0dXJuIHQgPSB0IHx8IHMsIGUgPSBlIHx8IHUsIHQucG9zdE1lc3NhZ2UgJiYgIShjKCBlICkgJiYgdC5vcGVuZXIpXG5cdFx0XHR9LFxuXHRcdFx0dG91Y2g6IGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdFx0XHRyZXR1cm4gdCA9IHQgfHwgcywgZSA9IGUgfHwgbywgbiA9IG4gfHwgdSwgXCJvbnRvdWNoc3RhcnRcIiBpbiB0IHx8IC9PcGVyYSBNaW5pLy50ZXN0KCBuICkgfHwgZS5tc01heFRvdWNoUG9pbnRzID4gMFxuXHRcdFx0fSxcblx0XHRcdGNzc1RyYW5zaXRpb25zOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHQgPSByLmJvZHkuc3R5bGU7XG5cdFx0XHRcdHJldHVybiB2b2lkIDAgIT09IHQudHJhbnNpdGlvbiB8fCB2b2lkIDAgIT09IHQud2Via2l0VHJhbnNpdGlvbiB8fCB2b2lkIDAgIT09IHQubW96VHJhbnNpdGlvbiB8fCB2b2lkIDAgIT09IHQub1RyYW5zaXRpb24gfHwgdm9pZCAwICE9PSB0Lm1zVHJhbnNpdGlvblxuXHRcdFx0fSxcblx0XHRcdGhhc1Byb21pc2VTdXBwb3J0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICEhKHMuUHJvbWlzZSAmJiBzLlByb21pc2UucmVzb2x2ZSAmJiBzLlByb21pc2UucmVqZWN0ICYmIHMuUHJvbWlzZS5hbGwgJiYgcy5Qcm9taXNlLnJhY2UgJiYgKG5ldyBzLlByb21pc2UoIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0XHRcdHQgPSBlXG5cdFx0XHRcdH0gKSwgYS5pc1R5cGUoIFwiZnVuY3Rpb25cIiwgdCApKSk7XG5cdFx0XHRcdHZhciB0XG5cdFx0XHR9LFxuXHRcdFx0aGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJTdXBwb3J0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICEhcy5JbnRlcnNlY3Rpb25PYnNlcnZlclxuXHRcdFx0fSxcblx0XHRcdGhhc1BlcmZvcm1hbmNlSW5mb3JtYXRpb246IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gcy5wZXJmb3JtYW5jZSAmJiBzLnBlcmZvcm1hbmNlLmdldEVudHJpZXNCeVR5cGVcblx0XHRcdH0sXG5cdFx0XHRoYXNMb2NhbFN0b3JhZ2VTdXBwb3J0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRyZXR1cm4gcy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSggXCJsb2NhbF9zdG9yYWdlX3N1cHBvcnRfdGVzdFwiLCBcInRydWVcIiApLCB2b2lkIDAgIT09IHMubG9jYWxTdG9yYWdlXG5cdFx0XHRcdH0gY2F0Y2ggKCB0ICkge1xuXHRcdFx0XHRcdHJldHVybiBpLmRldkVycm9yKCBcIndpbmRvdy5sb2NhbFN0b3JhZ2UgaXMgbm90IHN1cHBvcnRlZDpcIiwgdCApLCAhMVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDYgKSwgaSA9IG4oIDIgKTtcblxuXHRcdGZ1bmN0aW9uIG8oIHQsIGUgKSB7XG5cdFx0XHRyZXR1cm4gdC50aGVuKCBlLCBlIClcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBzKCB0ICkge1xuXHRcdFx0cmV0dXJuIHQgaW5zdGFuY2VvZiByXG5cdFx0fVxuXG5cdFx0dC5leHBvcnRzID0ge1xuXHRcdFx0YWx3YXlzOiBvLFxuXHRcdFx0YWxsUmVzb2x2ZWQ6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZTtcblx0XHRcdFx0cmV0dXJuIHZvaWQgMCA9PT0gdCA/IHIucmVqZWN0KCBuZXcgRXJyb3IoIFwidW5kZWZpbmVkIGlzIG5vdCBhbiBvYmplY3RcIiApICkgOiBBcnJheS5pc0FycmF5KCB0ICkgPyAoZSA9IHQubGVuZ3RoKSA/IG5ldyByKCBmdW5jdGlvbiggbiwgciApIHtcblx0XHRcdFx0XHR2YXIgaSA9IDAsIG8gPSBbXTtcblxuXHRcdFx0XHRcdGZ1bmN0aW9uIGEoKSB7XG5cdFx0XHRcdFx0XHQoaSArPSAxKSA9PT0gZSAmJiAoMCA9PT0gby5sZW5ndGggPyByKCkgOiBuKCBvICkpXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0ZnVuY3Rpb24gdSggdCApIHtcblx0XHRcdFx0XHRcdG8ucHVzaCggdCApLCBhKClcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0LmZvckVhY2goIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdFx0cyggdCApID8gdC50aGVuKCB1LCBhICkgOiB1KCB0IClcblx0XHRcdFx0XHR9IClcblx0XHRcdFx0fSApIDogci5yZXNvbHZlKCBbXSApIDogci5yZWplY3QoIG5ldyBFcnJvciggXCJUeXBlIGVycm9yXCIgKSApXG5cdFx0XHR9LFxuXHRcdFx0c29tZTogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHZhciBlO1xuXHRcdFx0XHRyZXR1cm4gZSA9ICh0ID0gdCB8fCBbXSkubGVuZ3RoLCB0ID0gdC5maWx0ZXIoIHMgKSwgZSA/IGUgIT09IHQubGVuZ3RoID8gci5yZWplY3QoIFwibm9uLVByb21pc2UgcGFzc2VkIHRvIC5zb21lXCIgKSA6IG5ldyByKCBmdW5jdGlvbiggZSwgbiApIHtcblx0XHRcdFx0XHR2YXIgciA9IDA7XG5cblx0XHRcdFx0XHRmdW5jdGlvbiBpKCkge1xuXHRcdFx0XHRcdFx0KHIgKz0gMSkgPT09IHQubGVuZ3RoICYmIG4oKVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHQuZm9yRWFjaCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0XHR0LnRoZW4oIGUsIGkgKVxuXHRcdFx0XHRcdH0gKVxuXHRcdFx0XHR9ICkgOiByLnJlamVjdCggXCJubyBwcm9taXNlcyBwYXNzZWQgdG8gLnNvbWVcIiApXG5cdFx0XHR9LFxuXHRcdFx0aXNQcm9taXNlOiBzLFxuXHRcdFx0YWxsU2V0dGxlZDogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdGZ1bmN0aW9uIGUoKSB7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gci5hbGwoICh0IHx8IFtdKS5tYXAoIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdHJldHVybiBvKCB0LCBlIClcblx0XHRcdFx0fSApIClcblx0XHRcdH0sXG5cdFx0XHR0aW1lb3V0OiBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0dmFyIG4gPSBuZXcgaTtcblx0XHRcdFx0cmV0dXJuIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdG4ucmVqZWN0KCBuZXcgRXJyb3IoIFwiUHJvbWlzZSB0aW1lZCBvdXRcIiApIClcblx0XHRcdFx0fSwgZSApLCB0LnRoZW4oIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdG4ucmVzb2x2ZSggdCApXG5cdFx0XHRcdH0sIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdG4ucmVqZWN0KCB0IClcblx0XHRcdFx0fSApLCBuLnByb21pc2Vcblx0XHRcdH1cblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdHZhciBuID0gXCJpXCIsIHIgPSAwLCBpID0gMDtcblx0XHR0LmV4cG9ydHMgPSB7XG5cdFx0XHRnZW5lcmF0ZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBuICsgU3RyaW5nKCArIG5ldyBEYXRlICkgKyBNYXRoLmZsb29yKCAxZTUgKiBNYXRoLnJhbmRvbSgpICkgKyByICsrXG5cdFx0XHR9LFxuXHRcdFx0ZGV0ZXJtaW5pc3RpYzogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBuICsgU3RyaW5nKCBpICsrIClcblx0XHRcdH1cblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggNDkgKSwgaSA9IG4oIDUxICksIG8gPSBuKCAwICk7XG5cdFx0dC5leHBvcnRzID0gby5hdWcoIHIuZ2V0KCBcImV2ZW50c1wiICkgfHwge30sIGkuRW1pdHRlciApXG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMjcgKSwgaSA9IG4oIDExMiApO1xuXHRcdHQuZXhwb3J0cyA9IHIuYnVpbGQoIFtpXSApXG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggNDAgKSwgaSA9IG4oIDEwOSApLCBvID0gbiggNyApO1xuXHRcdChyID0gT2JqZWN0LmNyZWF0ZSggciApKS5idWlsZCA9IG8oIHIuYnVpbGQsIG51bGwsIGkgKSwgdC5leHBvcnRzID0gclxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDQwICksIGkgPSBuKCA0MSApLCBvID0gbiggNyApO1xuXHRcdChyID0gT2JqZWN0LmNyZWF0ZSggciApKS5idWlsZCA9IG8oIHIuYnVpbGQsIG51bGwsIGkgKSwgdC5leHBvcnRzID0gclxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDg0ICksIGkgPSBuKCA3NiApLCBvID0gbiggODUgKSwgcyA9IG4oIDggKSwgYSA9IG4oIDcxICksIHUgPSBuKCA3NSApLCBjID0gbiggMjAgKSwgZCA9IG4oIDUgKSxcblx0XHRcdGYgPSBuKCAyNCApLCBsID0gbiggMCApO1xuXG5cdFx0ZnVuY3Rpb24gaCggdCApIHtcblx0XHRcdGlmICggIXQgfHwgIXQuaGVhZGVycyApIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcInVuZXhwZWN0ZWQgcmVzcG9uc2Ugc2NoZW1hXCIgKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGh0bWw6IHQuYm9keSxcblx0XHRcdFx0Y29uZmlnOiB0LmNvbmZpZyxcblx0XHRcdFx0cG9sbEludGVydmFsOiAxZTMgKiBwYXJzZUludCggdC5oZWFkZXJzLnhQb2xsaW5nLCAxMCApIHx8IG51bGwsXG5cdFx0XHRcdG1heEN1cnNvclBvc2l0aW9uOiB0LmhlYWRlcnMubWF4UG9zaXRpb24sXG5cdFx0XHRcdG1pbkN1cnNvclBvc2l0aW9uOiB0LmhlYWRlcnMubWluUG9zaXRpb25cblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBwKCB0ICkge1xuXHRcdFx0aWYgKCB0ICYmIHQuaGVhZGVycyApIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCB0LmhlYWRlcnMuc3RhdHVzICk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvdyB0IGluc3RhbmNlb2YgRXJyb3IgPyB0IDogbmV3IEVycm9yKCB0IClcblx0XHR9XG5cblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdHQucGFyYW1zKCB7XG5cdFx0XHRcdGluc3RhbmNlSWQ6IHtcblx0XHRcdFx0XHRyZXF1aXJlZDogITAsXG5cdFx0XHRcdFx0ZmFsbGJhY2s6IGYuZGV0ZXJtaW5pc3RpY1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRsYW5nOiB7XG5cdFx0XHRcdFx0cmVxdWlyZWQ6ICEwLFxuXHRcdFx0XHRcdHRyYW5zZm9ybTogYS5tYXRjaExhbmd1YWdlLFxuXHRcdFx0XHRcdGZhbGxiYWNrOiBcImVuXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0dHdlZXRMaW1pdDogeyB0cmFuc2Zvcm06IGQuYXNJbnQgfVxuXHRcdFx0fSApLCB0LmRlZmluZVByb3BlcnR5KCBcImVuZHBvaW50XCIsIHtcblx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiZW5kcG9pbnQgbm90IHNwZWNpZmllZFwiIClcblx0XHRcdFx0fVxuXHRcdFx0fSApLCB0LmRlZmluZVByb3BlcnR5KCBcInBvbGxFbmRwb2ludFwiLCB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZW5kcG9pbnRcblx0XHRcdFx0fVxuXHRcdFx0fSApLCB0LmRlZmluZSggXCJjYklkXCIsIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSA9IHQgPyBcIl9uZXdcIiA6IFwiX29sZFwiO1xuXHRcdFx0XHRyZXR1cm4gXCJ0bF9cIiArIHRoaXMucGFyYW1zLmluc3RhbmNlSWQgKyBcIl9cIiArIHRoaXMuaWQgKyBlXG5cdFx0XHR9ICksIHQuZGVmaW5lKCBcInF1ZXJ5UGFyYW1zXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGxhbmc6IHRoaXMucGFyYW1zLmxhbmcsXG5cdFx0XHRcdFx0dHo6IHUuZ2V0VGltZXpvbmVPZmZzZXQoKSxcblx0XHRcdFx0XHR0OiByKCksXG5cdFx0XHRcdFx0ZG9tYWluOiBzLmhvc3QsXG5cdFx0XHRcdFx0dHdlZXRfbGltaXQ6IHRoaXMucGFyYW1zLnR3ZWV0TGltaXQsXG5cdFx0XHRcdFx0ZG50OiBjLmVuYWJsZWQoKVxuXHRcdFx0XHR9XG5cdFx0XHR9ICksIHQuZGVmaW5lKCBcImZldGNoXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gaS5mZXRjaCggdGhpcy5lbmRwb2ludCwgdGhpcy5xdWVyeVBhcmFtcygpLCBvLCB0aGlzLmNiSWQoKSApLnRoZW4oIGgsIHAgKVxuXHRcdFx0fSApLCB0LmRlZmluZSggXCJwb2xsXCIsIGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHR2YXIgbiwgcjtcblx0XHRcdFx0cmV0dXJuIG4gPSB7XG5cdFx0XHRcdFx0c2luY2VfaWQ6ICh0ID0gdCB8fCB7fSkuc2luY2VJZCxcblx0XHRcdFx0XHRtYXhfaWQ6IHQubWF4SWQsXG5cdFx0XHRcdFx0bWluX3Bvc2l0aW9uOiB0Lm1pblBvc2l0aW9uLFxuXHRcdFx0XHRcdG1heF9wb3NpdGlvbjogdC5tYXhQb3NpdGlvblxuXHRcdFx0XHR9LCByID0gbC5hdWcoIHRoaXMucXVlcnlQYXJhbXMoKSwgbiApLCBpLmZldGNoKCB0aGlzLnBvbGxFbmRwb2ludCwgciwgbywgdGhpcy5jYklkKCBlICkgKS50aGVuKCBoLCBwIClcblx0XHRcdH0gKVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCA1MSApLm1ha2VFbWl0dGVyKCk7XG5cdFx0dC5leHBvcnRzID0ge1xuXHRcdFx0ZW1pdHRlcjogcixcblx0XHRcdFNUQVJUOiBcInN0YXJ0XCIsXG5cdFx0XHRBTExfV0lER0VUU19SRU5ERVJfU1RBUlQ6IFwiYWxsX3dpZGdldHNfcmVuZGVyX3N0YXJ0XCIsXG5cdFx0XHRBTExfV0lER0VUU19SRU5ERVJfRU5EOiBcImFsbF93aWRnZXRzX3JlbmRlcl9lbmRcIixcblx0XHRcdEFMTF9XSURHRVRTX0FORF9JTUFHRVNfTE9BREVEOiBcImFsbF93aWRnZXRzX2FuZF9pbWFnZXNfbG9hZGVkXCJcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMTE1ICksIGkgPSBuKCAxMTggKTtcblxuXHRcdGZ1bmN0aW9uIG8oIHQgKSB7XG5cdFx0XHRyZXR1cm4gci5zZXR0aW5nc0xvYWRlZCgpLnRoZW4oIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0XHRyZXR1cm4gZVsgdCBdXG5cdFx0XHR9IClcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBzKCkge1xuXHRcdFx0cmV0dXJuIG8oIFwiZXhwZXJpbWVudHNcIiApXG5cdFx0fVxuXG5cdFx0dC5leHBvcnRzID0ge1xuXHRcdFx0c2hvdWxkT2J0YWluQ29va2llQ29uc2VudDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBvKCBcInNob3VsZE9idGFpbkNvb2tpZUNvbnNlbnRcIiApXG5cdFx0XHR9LFxuXHRcdFx0Z2V0RXhwZXJpbWVudHM6IHMsXG5cdFx0XHRnZXRFeHBlcmltZW50OiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIHMoKS50aGVuKCBmdW5jdGlvbiggZSApIHtcblx0XHRcdFx0XHRpZiAoICFlWyB0IF0gKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiRXhwZXJpbWVudCBub3QgZm91bmRcIiApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gZVsgdCBdXG5cdFx0XHRcdH0gKVxuXHRcdFx0fSxcblx0XHRcdGdldEFjdGl2ZUV4cGVyaW1lbnREYXRhU3RyaW5nOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHMoKS50aGVuKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHR2YXIgZSA9IE9iamVjdC5rZXlzKCB0ICkucmVkdWNlKCBmdW5jdGlvbiggZSwgbiApIHtcblx0XHRcdFx0XHRcdHZhciByO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRbIG4gXS52ZXJzaW9uICYmIChyID0gbi5zcGxpdCggXCJfXCIgKS5zbGljZSggLSAxIClbIDAgXSwgZS5wdXNoKCByICsgXCI7XCIgKyB0WyBuIF0uYnVja2V0ICkpLCBlXG5cdFx0XHRcdFx0fSwgW10gKTtcblx0XHRcdFx0XHRyZXR1cm4gaSggZS5qb2luKCBcIixcIiApIClcblx0XHRcdFx0fSApXG5cdFx0XHR9LFxuXHRcdFx0Z2V0RXhwZXJpbWVudEtleXM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gcygpLnRoZW4oIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdHJldHVybiBPYmplY3Qua2V5cyggdCApXG5cdFx0XHRcdH0gKVxuXHRcdFx0fSxcblx0XHRcdGxvYWQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyLmxvYWQoKVxuXHRcdFx0fVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCA0ICksIGkgPSBuKCAwICk7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0XHR2YXIgbztcblx0XHRcdGlmICggbiA9IG4gfHwgciwgdCA9IHQgfHwge30sIGUgPSBlIHx8IHt9LCB0Lm5hbWUgKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0byA9IG4uY3JlYXRlRWxlbWVudCggJzxpZnJhbWUgbmFtZT1cIicgKyB0Lm5hbWUgKyAnXCI+PC9pZnJhbWU+JyApXG5cdFx0XHRcdH0gY2F0Y2ggKCBlICkge1xuXHRcdFx0XHRcdChvID0gbi5jcmVhdGVFbGVtZW50KCBcImlmcmFtZVwiICkpLm5hbWUgPSB0Lm5hbWVcblx0XHRcdFx0fVxuXHRcdFx0XHRkZWxldGUgdC5uYW1lXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvID0gbi5jcmVhdGVFbGVtZW50KCBcImlmcmFtZVwiICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdC5pZCAmJiAoby5pZCA9IHQuaWQsIGRlbGV0ZSB0LmlkKSwgby5hbGxvd3RyYW5zcGFyZW5jeSA9IFwidHJ1ZVwiLCBvLnNjcm9sbGluZyA9IFwibm9cIiwgby5zZXRBdHRyaWJ1dGUoIFwiZnJhbWVCb3JkZXJcIiwgMCApLCBvLnNldEF0dHJpYnV0ZSggXCJhbGxvd1RyYW5zcGFyZW5jeVwiLCAhMCApLCBpLmZvckluKCB0LCBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0by5zZXRBdHRyaWJ1dGUoIHQsIGUgKVxuXHRcdFx0fSApLCBpLmZvckluKCBlLCBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0by5zdHlsZVsgdCBdID0gZVxuXHRcdFx0fSApLCBvXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDEgKS5KU09OO1xuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdHN0cmluZ2lmeTogci5zdHJpbmdpZnkgfHwgci5lbmNvZGUsXG5cdFx0XHRwYXJzZTogci5wYXJzZSB8fCByLmRlY29kZVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAwICksIGkgPSBuKCA0MyApO1xuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdGNsb3Nlc3Q6IGZ1bmN0aW9uIHQoIGUsIG4sIG8gKSB7XG5cdFx0XHRcdHZhciBzO1xuXHRcdFx0XHRpZiAoIG4gKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG8gPSBvIHx8IG4gJiYgbi5vd25lckRvY3VtZW50LCBzID0gci5pc1R5cGUoIFwiZnVuY3Rpb25cIiwgZSApID8gZSA6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gISFlLnRhZ05hbWUgJiYgaSggZSwgdCApXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSggZSApLCBuID09PSBvID8gcyggbiApID8gbiA6IHZvaWQgMCA6IHMoIG4gKSA/IG4gOiB0KCBzLCBuLnBhcmVudE5vZGUsIG8gKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciwgaSA9IG4oIDQgKTtcblxuXHRcdGZ1bmN0aW9uIG8oIHQgKSB7XG5cdFx0XHR2YXIgZSwgbiwgbywgcyA9IDA7XG5cdFx0XHRmb3IgKCByID0ge30sIGUgPSAodCA9IHQgfHwgaSkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIFwibWV0YVwiICk7IGVbIHMgXTsgcyArKyApIHtcblx0XHRcdFx0aWYgKCBuID0gZVsgcyBdLCAvXnR3aXR0ZXI6Ly50ZXN0KCBuLmdldEF0dHJpYnV0ZSggXCJuYW1lXCIgKSApICkge1xuXHRcdFx0XHRcdG8gPSBuLmdldEF0dHJpYnV0ZSggXCJuYW1lXCIgKS5yZXBsYWNlKCAvXnR3aXR0ZXI6LywgXCJcIiApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmICggIS9edHdpdHRlcjovLnRlc3QoIG4uZ2V0QXR0cmlidXRlKCBcInByb3BlcnR5XCIgKSApICkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG8gPSBuLmdldEF0dHJpYnV0ZSggXCJwcm9wZXJ0eVwiICkucmVwbGFjZSggL150d2l0dGVyOi8sIFwiXCIgKVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJbIG8gXSA9IG4uZ2V0QXR0cmlidXRlKCBcImNvbnRlbnRcIiApIHx8IG4uZ2V0QXR0cmlidXRlKCBcInZhbHVlXCIgKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdG8oKSwgdC5leHBvcnRzID0ge1xuXHRcdFx0aW5pdDogbyxcblx0XHRcdHZhbDogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiByWyB0IF1cblx0XHRcdH1cblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMTAgKSwgaSA9IHt9LCBvID0gLSAxLCBzID0ge307XG5cblx0XHRmdW5jdGlvbiBhKCB0ICkge1xuXHRcdFx0dmFyIGUgPSB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLXR3aXR0ZXItZXZlbnQtaWRcIiApO1xuXHRcdFx0cmV0dXJuIGUgfHwgKHQuc2V0QXR0cmlidXRlKCBcImRhdGEtdHdpdHRlci1ldmVudC1pZFwiLCArKyBvICksIG8pXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdSggdCwgZSwgbiApIHtcblx0XHRcdHZhciByID0gMCwgaSA9IHQgJiYgdC5sZW5ndGggfHwgMDtcblx0XHRcdGZvciAoIHIgPSAwOyByIDwgaTsgciArKyApIHtcblx0XHRcdFx0aWYgKCB0WyByIF0uY2FsbCggZSwgbiwgZSApLCBuLmNlYXNlSW1tZWRpYXRlbHkgKSB7XG5cdFx0XHRcdFx0cmV0dXJuICExXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBjKCB0LCBlLCBuICkge1xuXHRcdFx0Zm9yIChcblx0XHRcdFx0dmFyIGkgPSBuIHx8IHQudGFyZ2V0IHx8IHQuc3JjRWxlbWVudCwgbyA9IHIubGlzdCggaSApLm1hcCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFwiLlwiICsgdFxuXHRcdFx0XHR9ICkuY29uY2F0KCBpLnRhZ05hbWUgKSwgcyA9IDAsIGEgPSBvLmxlbmd0aDsgcyA8IGE7IHMgKytcblx0XHRcdCkge1xuXHRcdFx0XHRpZiAoICExID09PSB1KCBlWyBvWyBzIF0gXSwgaSwgdCApICkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dC5jZWFzZSB8fCBpICE9PSB0aGlzICYmIGMuY2FsbCggdGhpcywgdCwgZSwgaS5wYXJlbnRFbGVtZW50IHx8IGkucGFyZW50Tm9kZSApXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZCggdCwgZSwgbiwgciApIHtcblx0XHRcdGZ1bmN0aW9uIGkoIHIgKSB7XG5cdFx0XHRcdGMuY2FsbCggdCwgciwgblsgZSBdIClcblx0XHRcdH1cblxuXHRcdFx0IWZ1bmN0aW9uKCB0LCBlLCBuLCByICkge1xuXHRcdFx0XHR0LmlkICYmIChzWyB0LmlkIF0gPSBzWyB0LmlkIF0gfHwgW10sIHNbIHQuaWQgXS5wdXNoKCB7XG5cdFx0XHRcdFx0ZWw6IHQsXG5cdFx0XHRcdFx0bGlzdGVuZXI6IGUsXG5cdFx0XHRcdFx0dHlwZTogbixcblx0XHRcdFx0XHRyb290SWQ6IHJcblx0XHRcdFx0fSApKVxuXHRcdFx0fSggdCwgaSwgZSwgciApLCB0LmFkZEV2ZW50TGlzdGVuZXIoIGUsIGksICExIClcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBmKCB0ICkge1xuXHRcdFx0dCAmJiB0LnByZXZlbnREZWZhdWx0ID8gdC5wcmV2ZW50RGVmYXVsdCgpIDogdC5yZXR1cm5WYWx1ZSA9ICExXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gbCggdCApIHtcblx0XHRcdHQgJiYgKHQuY2Vhc2UgPSAhMCkgJiYgdC5zdG9wUHJvcGFnYXRpb24gPyB0LnN0b3BQcm9wYWdhdGlvbigpIDogdC5jYW5jZWxCdWJibGUgPSAhMFxuXHRcdH1cblxuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdHN0b3A6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRyZXR1cm4gbCggdCApLCBmKCB0ICksICExXG5cdFx0XHR9LFxuXHRcdFx0c3RvcFByb3BhZ2F0aW9uOiBsLFxuXHRcdFx0c3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dCAmJiAodC5jZWFzZUltbWVkaWF0ZWx5ID0gITAsIGwoIHQgKSwgdC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSlcblx0XHRcdH0sXG5cdFx0XHRwcmV2ZW50RGVmYXVsdDogZixcblx0XHRcdGRlbGVnYXRlOiBmdW5jdGlvbiggdCwgZSwgbiwgciApIHtcblx0XHRcdFx0dmFyIG8gPSBhKCB0ICk7XG5cdFx0XHRcdGlbIG8gXSA9IGlbIG8gXSB8fCB7fSwgaVsgbyBdWyBlIF0gfHwgKGlbIG8gXVsgZSBdID0ge30sIGQoIHQsIGUsIGlbIG8gXSwgbyApKSwgaVsgbyBdWyBlIF1bIG4gXSA9IGlbIG8gXVsgZSBdWyBuIF0gfHwgW10sIGlbIG8gXVsgZSBdWyBuIF0ucHVzaCggciApXG5cdFx0XHR9LFxuXHRcdFx0c2ltdWxhdGU6IGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdFx0XHR2YXIgciA9IGEoIGUgKSwgbyA9IGlbIHIgXSAmJiBpWyByIF07XG5cdFx0XHRcdGMuY2FsbCggZSwgeyB0YXJnZXQ6IG4gfSwgb1sgdCBdIClcblx0XHRcdH0sXG5cdFx0XHRyZW1vdmVEZWxlZ2F0ZXNGb3JXaWRnZXQ6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSA9IHNbIHQgXTtcblx0XHRcdFx0ZSAmJiAoZS5mb3JFYWNoKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHR0LmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoIHQudHlwZSwgdC5saXN0ZW5lciwgITEgKSwgZGVsZXRlIGlbIHQucm9vdElkIF1cblx0XHRcdFx0fSApLCBkZWxldGUgc1sgdCBdKVxuXHRcdFx0fVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCA3OCApLCBpID0gbiggMTA2ICksIG8gPSBuKCA4MSApLCBzID0gbiggMjEgKSwgYSA9IG5ldyAobiggMTE0ICkpKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdHZhciBlLCBuLCBhO1xuXHRcdFx0aWYgKCAwICE9PSB0Lmxlbmd0aCApIHtcblx0XHRcdFx0aWYgKCB1KCB0ICkgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGMoIHQgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlID0gciggdCwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHMubm90aWNlU2VlbiggdC5pbnB1dC5uYW1lc3BhY2UgKVxuXHRcdFx0XHR9ICksIG4gPSBlLnRydWUsIGEgPSBlLmZhbHNlLCBuICYmIG4ubGVuZ3RoID4gMCAmJiAobiA9IG4uc2xpY2UoIDAsIDEgKSwgby5jYW5GbHVzaE9uZUl0ZW0oIG5bIDAgXSApIHx8IChuWyAwIF0uaW5wdXQuZGF0YS5tZXNzYWdlID0gXCJcIiksIGMoIG4gKSksIGEgJiYgKHUoIGEgKSA/IGMgOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRpLmluaXQoKSwgdC5mb3JFYWNoKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRcdHZhciBlID0gdC5pbnB1dC5uYW1lc3BhY2UsIG4gPSB0LmlucHV0LmRhdGEsIHIgPSB0LmlucHV0Lm9mZnNpdGUsIG8gPSB0LmlucHV0LnZlcnNpb247XG5cdFx0XHRcdFx0XHRpLmNsaWVudEV2ZW50KCBlLCBuLCByLCBvIClcblx0XHRcdFx0XHR9ICksIGkuZmx1c2goKS50aGVuKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdHQuZm9yRWFjaCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0XHRcdHQudGFza0RvbmVEZWZlcnJlZC5yZXNvbHZlKClcblx0XHRcdFx0XHRcdH0gKVxuXHRcdFx0XHRcdH0sIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0dC5mb3JFYWNoKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRcdFx0dC50YXNrRG9uZURlZmVycmVkLnJlamVjdCgpXG5cdFx0XHRcdFx0XHR9IClcblx0XHRcdFx0XHR9IClcblx0XHRcdFx0fSkoIGEgKVxuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdGZ1bmN0aW9uIHUoIHQgKSB7XG5cdFx0XHRyZXR1cm4gMSA9PT0gdC5sZW5ndGggJiYgby5jYW5GbHVzaE9uZUl0ZW0oIHRbIDAgXSApXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gYyggdCApIHtcblx0XHRcdHQuZm9yRWFjaCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHZhciBlID0gdC5pbnB1dC5uYW1lc3BhY2UsIG4gPSB0LmlucHV0LmRhdGEsIHIgPSB0LmlucHV0Lm9mZnNpdGUsIGkgPSB0LmlucHV0LnZlcnNpb247XG5cdFx0XHRcdG8uY2xpZW50RXZlbnQoIGUsIG4sIHIsIGkgKSwgdC50YXNrRG9uZURlZmVycmVkLnJlc29sdmUoKVxuXHRcdFx0fSApXG5cdFx0fVxuXG5cdFx0dC5leHBvcnRzID0ge1xuXHRcdFx0c2NyaWJlOiBmdW5jdGlvbiggdCwgZSwgbiwgciApIHtcblx0XHRcdFx0cmV0dXJuIGEuYWRkKCB7XG5cdFx0XHRcdFx0bmFtZXNwYWNlOiB0LFxuXHRcdFx0XHRcdGRhdGE6IGUsXG5cdFx0XHRcdFx0b2Zmc2l0ZTogbixcblx0XHRcdFx0XHR2ZXJzaW9uOiByXG5cdFx0XHRcdH0gKVxuXHRcdFx0fSxcblx0XHRcdHBhdXNlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0YS5wYXVzZSgpXG5cdFx0XHR9LFxuXHRcdFx0cmVzdW1lOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0YS5yZXN1bWUoKVxuXHRcdFx0fVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAyNyApLCBpID0gbiggMTI3ICk7XG5cdFx0dC5leHBvcnRzID0gci5idWlsZCggW2ldIClcblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCA4ICksIGkgPSBuKCA3OSApLCBvID0gbiggMCApLCBzID0gaS5nZXRDYW5vbmljYWxVUkwoKSB8fCByLmhyZWYsIGEgPSBzO1xuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdGlzRnJhbWVkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHMgIT09IGFcblx0XHRcdH0sXG5cdFx0XHRyb290RG9jdW1lbnRMb2NhdGlvbjogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiB0ICYmIG8uaXNUeXBlKCBcInN0cmluZ1wiLCB0ICkgJiYgKHMgPSB0KSwgc1xuXHRcdFx0fSxcblx0XHRcdGN1cnJlbnREb2N1bWVudExvY2F0aW9uOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIGFcblx0XHRcdH1cblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMTA3ICksIGkgPSBuKCAxMDggKSwgbyA9IG4oIDAgKTtcblx0XHR0LmV4cG9ydHMgPSB7XG5cdFx0XHRjb3VwbGU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gby50b1JlYWxBcnJheSggYXJndW1lbnRzIClcblx0XHRcdH0sXG5cdFx0XHRidWlsZDogZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0XHRcdHZhciBvID0gbmV3IHQ7XG5cdFx0XHRcdHJldHVybiAoZSA9IGkoIHIoIGUgfHwgW10gKSApKS5mb3JFYWNoKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHR0LmNhbGwoIG51bGwsIG8gKVxuXHRcdFx0XHR9ICksIG8uYnVpbGQoIG4gKVxuXHRcdFx0fVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAxMTAgKSwgaSA9IG4oIDAgKSwgbyA9IG4oIDQyICk7XG5cblx0XHRmdW5jdGlvbiBzKCkge1xuXHRcdFx0dGhpcy5Db21wb25lbnQgPSB0aGlzLmZhY3RvcnkoKSwgdGhpcy5fYWR2aWNlQXJncyA9IFtdLCB0aGlzLl9sYXN0QXJncyA9IFtdXG5cdFx0fVxuXG5cdFx0aS5hdWcoIHMucHJvdG90eXBlLCB7XG5cdFx0XHRmYWN0b3J5OiBvLFxuXHRcdFx0YnVpbGQ6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSA9IHRoaXM7XG5cdFx0XHRcdHJldHVybiB0aGlzLkNvbXBvbmVudCwgaS5hdWcoIHRoaXMuQ29tcG9uZW50LnByb3RvdHlwZS5ib3VuZFBhcmFtcywgdCApLCB0aGlzLl9hZHZpY2VBcmdzLmNvbmNhdCggdGhpcy5fbGFzdEFyZ3MgKS5mb3JFYWNoKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHQoZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0XHRcdFx0XHR2YXIgciA9IHRoaXNbIGUgXTtcblx0XHRcdFx0XHRcdGlmICggIXIgKSB7XG5cdFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggZSArIFwiIGRvZXMgbm90IGV4aXN0XCIgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHRoaXNbIGUgXSA9IHQoIHIsIG4gKVxuXHRcdFx0XHRcdH0pLmFwcGx5KCBlLkNvbXBvbmVudC5wcm90b3R5cGUsIHQgKVxuXHRcdFx0XHR9ICksIGRlbGV0ZSB0aGlzLl9sYXN0QXJncywgZGVsZXRlIHRoaXMuX2FkdmljZUFyZ3MsIHRoaXMuQ29tcG9uZW50XG5cdFx0XHR9LFxuXHRcdFx0cGFyYW1zOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUgPSB0aGlzLkNvbXBvbmVudC5wcm90b3R5cGUucGFyYW1Db25maWdzO1xuXHRcdFx0XHR0ID0gdCB8fCB7fSwgdGhpcy5Db21wb25lbnQucHJvdG90eXBlLnBhcmFtQ29uZmlncyA9IGkuYXVnKCB7fSwgdCwgZSApXG5cdFx0XHR9LFxuXHRcdFx0ZGVmaW5lOiBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0aWYgKCB0IGluIHRoaXMuQ29tcG9uZW50LnByb3RvdHlwZSApIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIHQgKyBcIiBoYXMgcHJldmlvdXNseSBiZWVuIGRlZmluZWRcIiApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMub3ZlcnJpZGUoIHQsIGUgKVxuXHRcdFx0fSxcblx0XHRcdGRlZmluZVN0YXRpYzogZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdHRoaXMuQ29tcG9uZW50WyB0IF0gPSBlXG5cdFx0XHR9LFxuXHRcdFx0b3ZlcnJpZGU6IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHR0aGlzLkNvbXBvbmVudC5wcm90b3R5cGVbIHQgXSA9IGVcblx0XHRcdH0sXG5cdFx0XHRkZWZpbmVQcm9wZXJ0eTogZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdGlmICggdCBpbiB0aGlzLkNvbXBvbmVudC5wcm90b3R5cGUgKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCB0ICsgXCIgaGFzIHByZXZpb3VzbHkgYmVlbiBkZWZpbmVkXCIgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLm92ZXJyaWRlUHJvcGVydHkoIHQsIGUgKVxuXHRcdFx0fSxcblx0XHRcdG92ZXJyaWRlUHJvcGVydHk6IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHR2YXIgbiA9IGkuYXVnKCB7IGNvbmZpZ3VyYWJsZTogITAgfSwgZSApO1xuXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIHRoaXMuQ29tcG9uZW50LnByb3RvdHlwZSwgdCwgbiApXG5cdFx0XHR9LFxuXHRcdFx0YmVmb3JlOiBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0dGhpcy5fYWR2aWNlQXJncy5wdXNoKCBbci5iZWZvcmUsIHQsIGVdIClcblx0XHRcdH0sXG5cdFx0XHRhZnRlcjogZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdHRoaXMuX2FkdmljZUFyZ3MucHVzaCggW3IuYWZ0ZXIsIHQsIGVdIClcblx0XHRcdH0sXG5cdFx0XHRhcm91bmQ6IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHR0aGlzLl9hZHZpY2VBcmdzLnB1c2goIFtyLmFyb3VuZCwgdCwgZV0gKVxuXHRcdFx0fSxcblx0XHRcdGxhc3Q6IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHR0aGlzLl9sYXN0QXJncy5wdXNoKCBbci5hZnRlciwgdCwgZV0gKVxuXHRcdFx0fVxuXHRcdH0gKSwgdC5leHBvcnRzID0gc1xuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDAgKTtcblxuXHRcdGZ1bmN0aW9uIGkoKSB7XG5cdFx0XHRyZXR1cm4gITBcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvKCB0ICkge1xuXHRcdFx0cmV0dXJuIHRcblx0XHR9XG5cblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblx0XHRcdGZ1bmN0aW9uIHQoIHQgKSB7XG5cdFx0XHRcdHZhciBlID0gdGhpcztcblx0XHRcdFx0dCA9IHQgfHwge30sIHRoaXMucGFyYW1zID0gT2JqZWN0LmtleXMoIHRoaXMucGFyYW1Db25maWdzICkucmVkdWNlKCBmdW5jdGlvbiggbiwgcyApIHtcblx0XHRcdFx0XHR2YXIgYSA9IFtdLCB1ID0gZS5ib3VuZFBhcmFtcywgYyA9IGUucGFyYW1Db25maWdzWyBzIF0sIGQgPSBjLnZhbGlkYXRlIHx8IGksIGYgPSBjLnRyYW5zZm9ybSB8fCBvO1xuXHRcdFx0XHRcdGlmICggcyBpbiB1ICYmIGEucHVzaCggdVsgcyBdICksIHMgaW4gdCAmJiBhLnB1c2goIHRbIHMgXSApLCBhID0gXCJmYWxsYmFja1wiIGluIGMgPyBhLmNvbmNhdCggYy5mYWxsYmFjayApIDogYSwgblsgcyBdID0gZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0XHRcdFx0XHR2YXIgaSA9IG51bGw7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdC5zb21lKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRcdFx0aWYgKCB0ID0gci5pc1R5cGUoIFwiZnVuY3Rpb25cIiwgdCApID8gdCgpIDogdCwgZSggdCApICkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBpID0gbiggdCApLCAhMFxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9ICksIGlcblx0XHRcdFx0XHR9KCBhLCBkLCBmICksIGMucmVxdWlyZWQgJiYgbnVsbCA9PSBuWyBzIF0gKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIHMgKyBcIiBpcyBhIHJlcXVpcmVkIHBhcmFtZXRlclwiICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBuXG5cdFx0XHRcdH0sIHt9ICksIHRoaXMuaW5pdGlhbGl6ZSgpXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiByLmF1ZyggdC5wcm90b3R5cGUsIHtcblx0XHRcdFx0cGFyYW1Db25maWdzOiB7fSxcblx0XHRcdFx0Ym91bmRQYXJhbXM6IHt9LFxuXHRcdFx0XHRpbml0aWFsaXplOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0fVxuXHRcdFx0fSApLCB0XG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDEgKS5IVE1MRWxlbWVudCxcblx0XHRcdGkgPSByLnByb3RvdHlwZS5tYXRjaGVzIHx8IHIucHJvdG90eXBlLm1hdGNoZXNTZWxlY3RvciB8fCByLnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHwgci5wcm90b3R5cGUubW96TWF0Y2hlc1NlbGVjdG9yIHx8IHIucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IHIucHJvdG90eXBlLm9NYXRjaGVzU2VsZWN0b3I7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRpZiAoIGkgKSB7XG5cdFx0XHRcdHJldHVybiBpLmNhbGwoIHQsIGUgKVxuXHRcdFx0fVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIsIGkgPSBuKCAxMCApLCBvID0gbiggNCApLCBzID0gbiggMSApLCBhID0gbiggMzUgKSwgdSA9IG4oIDUzICksIGMgPSBuKCA1ICksIGQgPSBuKCAyNCApLCBmID0gXCJjc3B0ZXN0XCI7XG5cdFx0dC5leHBvcnRzID0ge1xuXHRcdFx0aW5saW5lU3R5bGU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgdCA9IGYgKyBkLmdlbmVyYXRlKCksIGUgPSBvLmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKSwgbiA9IG8uY3JlYXRlRWxlbWVudCggXCJzdHlsZVwiICksXG5cdFx0XHRcdFx0bCA9IFwiLlwiICsgdCArIFwiIHsgdmlzaWJpbGl0eTogaGlkZGVuOyB9XCI7XG5cdFx0XHRcdHJldHVybiAhIW8uYm9keSAmJiAoYy5hc0Jvb2xlYW4oIGEudmFsKCBcIndpZGdldHM6Y3NwXCIgKSApICYmIChyID0gITEpLCB2b2lkIDAgIT09IHIgPyByIDogKGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiLCBpLmFkZCggZSwgdCApLCBuLnR5cGUgPSBcInRleHQvY3NzXCIsIG4uYXBwZW5kQ2hpbGQoIG8uY3JlYXRlVGV4dE5vZGUoIGwgKSApLCBvLmJvZHkuYXBwZW5kQ2hpbGQoIG4gKSwgby5ib2R5LmFwcGVuZENoaWxkKCBlICksIHIgPSBcImhpZGRlblwiID09PSBzLmdldENvbXB1dGVkU3R5bGUoIGUgKS52aXNpYmlsaXR5LCB1KCBlICksIHUoIG4gKSwgcikpXG5cdFx0XHR9XG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDEgKTtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHRcdHZhciBpLCBvID0gMDtcblx0XHRcdHJldHVybiBuID0gbiB8fCBudWxsLCBmdW5jdGlvbiBzKCkge1xuXHRcdFx0XHR2YXIgYSA9IG4gfHwgdGhpcywgdSA9IGFyZ3VtZW50cywgYyA9ICsgbmV3IERhdGU7XG5cdFx0XHRcdGlmICggci5jbGVhclRpbWVvdXQoIGkgKSwgYyAtIG8gPiBlICkge1xuXHRcdFx0XHRcdHJldHVybiBvID0gYywgdm9pZCB0LmFwcGx5KCBhLCB1ICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aSA9IHIuc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cy5hcHBseSggYSwgdSApXG5cdFx0XHRcdH0sIGUgKVxuXHRcdFx0fVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHR2YXIgZSA9IHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR3aWR0aDogZS53aWR0aCxcblx0XHRcdFx0aGVpZ2h0OiBlLmhlaWdodFxuXHRcdFx0fVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0dC5leHBvcnRzID0geyB2ZXJzaW9uOiBcIjVjMGU4ZDM6MTU4NDY0OTU0MTk4MlwiIH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0LyohXG4gKiBAb3ZlcnZpZXcgZXM2LXByb21pc2UgLSBhIHRpbnkgaW1wbGVtZW50YXRpb24gb2YgUHJvbWlzZXMvQSsuXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoYykgMjAxNCBZZWh1ZGEgS2F0eiwgVG9tIERhbGUsIFN0ZWZhbiBQZW5uZXIgYW5kIGNvbnRyaWJ1dG9ycyAoQ29udmVyc2lvbiB0byBFUzYgQVBJIGJ5IEpha2UgQXJjaGliYWxkKVxuICogQGxpY2Vuc2UgICBMaWNlbnNlZCB1bmRlciBNSVQgbGljZW5zZVxuICogICAgICAgICAgICBTZWUgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3N0ZWZhbnBlbm5lci9lczYtcHJvbWlzZS9tYXN0ZXIvTElDRU5TRVxuICogQHZlcnNpb24gICB2NC4yLjUrN2YyYjUyNmRcbiAqL1xuXHRcdHZhciByO1xuXHRcdHIgPSBmdW5jdGlvbigpIHtcblx0XHRcdFwidXNlIHN0cmljdFwiO1xuXG5cdFx0XHRmdW5jdGlvbiB0KCB0ICkge1xuXHRcdFx0XHRyZXR1cm4gXCJmdW5jdGlvblwiID09IHR5cGVvZiB0XG5cdFx0XHR9XG5cblx0XHRcdHZhciBlID0gQXJyYXkuaXNBcnJheSA/IEFycmF5LmlzQXJyYXkgOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRyZXR1cm4gXCJbb2JqZWN0IEFycmF5XVwiID09PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoIHQgKVxuXHRcdFx0XHR9LCBuID0gMCwgciA9IHZvaWQgMCwgaSA9IHZvaWQgMCwgbyA9IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHRcdGxbIG4gXSA9IHQsIGxbIG4gKyAxIF0gPSBlLCAyID09PSAobiArPSAyKSAmJiAoaSA/IGkoIGggKSA6IHcoKSlcblx0XHRcdFx0fSwgcyA9IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHdpbmRvdyA/IHdpbmRvdyA6IHZvaWQgMCwgYSA9IHMgfHwge30sXG5cdFx0XHRcdHUgPSBhLk11dGF0aW9uT2JzZXJ2ZXIgfHwgYS5XZWJLaXRNdXRhdGlvbk9ic2VydmVyLFxuXHRcdFx0XHRjID0gXCJ1bmRlZmluZWRcIiA9PSB0eXBlb2Ygc2VsZiAmJiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBwcm9jZXNzICYmIFwiW29iamVjdCBwcm9jZXNzXVwiID09PSB7fS50b1N0cmluZy5jYWxsKCBwcm9jZXNzICksXG5cdFx0XHRcdGQgPSBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBVaW50OENsYW1wZWRBcnJheSAmJiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBpbXBvcnRTY3JpcHRzICYmIFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIE1lc3NhZ2VDaGFubmVsO1xuXG5cdFx0XHRmdW5jdGlvbiBmKCkge1xuXHRcdFx0XHR2YXIgdCA9IHNldFRpbWVvdXQ7XG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZXR1cm4gdCggaCwgMSApXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dmFyIGwgPSBuZXcgQXJyYXkoIDFlMyApO1xuXG5cdFx0XHRmdW5jdGlvbiBoKCkge1xuXHRcdFx0XHRmb3IgKCB2YXIgdCA9IDA7IHQgPCBuOyB0ICs9IDIgKSB7XG5cdFx0XHRcdFx0KDAsIGxbIHQgXSkoIGxbIHQgKyAxIF0gKSwgbFsgdCBdID0gdm9pZCAwLCBsWyB0ICsgMSBdID0gdm9pZCAwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG4gPSAwXG5cdFx0XHR9XG5cblx0XHRcdHZhciBwLCBtLCB2LCBnLCB3ID0gdm9pZCAwO1xuXG5cdFx0XHRmdW5jdGlvbiB5KCB0LCBlICkge1xuXHRcdFx0XHR2YXIgbiA9IHRoaXMsIHIgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvciggRSApO1xuXHRcdFx0XHR2b2lkIDAgPT09IHJbIF8gXSAmJiBrKCByICk7XG5cdFx0XHRcdHZhciBpID0gbi5fc3RhdGU7XG5cdFx0XHRcdGlmICggaSApIHtcblx0XHRcdFx0XHR2YXIgcyA9IGFyZ3VtZW50c1sgaSAtIDEgXTtcblx0XHRcdFx0XHRvKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdHJldHVybiBEKCBpLCByLCBzLCBuLl9yZXN1bHQgKVxuXHRcdFx0XHRcdH0gKVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGooIG4sIHIsIHQsIGUgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gclxuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBiKCB0ICkge1xuXHRcdFx0XHRpZiAoIHQgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgdCAmJiB0LmNvbnN0cnVjdG9yID09PSB0aGlzICkge1xuXHRcdFx0XHRcdHJldHVybiB0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciBlID0gbmV3IHRoaXMoIEUgKTtcblx0XHRcdFx0cmV0dXJuIEMoIGUsIHQgKSwgZVxuXHRcdFx0fVxuXG5cdFx0XHRjID8gdyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gcHJvY2Vzcy5uZXh0VGljayggaCApXG5cdFx0XHR9IDogdSA/IChtID0gMCwgdiA9IG5ldyB1KCBoICksIGcgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSggXCJcIiApLCB2Lm9ic2VydmUoIGcsIHsgY2hhcmFjdGVyRGF0YTogITAgfSApLCB3ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGcuZGF0YSA9IG0gPSArKyBtICUgMlxuXHRcdFx0fSkgOiBkID8gKChwID0gbmV3IE1lc3NhZ2VDaGFubmVsKS5wb3J0MS5vbm1lc3NhZ2UgPSBoLCB3ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBwLnBvcnQyLnBvc3RNZXNzYWdlKCAwIClcblx0XHRcdH0pIDogdyA9IHZvaWQgMCA9PT0gcyA/IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHZhciB0ID0gRnVuY3Rpb24oIFwicmV0dXJuIHRoaXNcIiApKCkucmVxdWlyZSggXCJ2ZXJ0eFwiICk7XG5cdFx0XHRcdFx0cmV0dXJuIHZvaWQgMCAhPT0gKHIgPSB0LnJ1bk9uTG9vcCB8fCB0LnJ1bk9uQ29udGV4dCkgPyBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdHIoIGggKVxuXHRcdFx0XHRcdH0gOiBmKClcblx0XHRcdFx0fSBjYXRjaCAoIHQgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGYoKVxuXHRcdFx0XHR9XG5cdFx0XHR9KCkgOiBmKCk7XG5cdFx0XHR2YXIgXyA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoIDM2ICkuc3Vic3RyaW5nKCAyICk7XG5cblx0XHRcdGZ1bmN0aW9uIEUoKSB7XG5cdFx0XHR9XG5cblx0XHRcdHZhciB4ID0gdm9pZCAwLCBUID0gMSwgQSA9IDIsIFMgPSB7IGVycm9yOiBudWxsIH07XG5cblx0XHRcdGZ1bmN0aW9uIFIoIHQgKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0cmV0dXJuIHQudGhlblxuXHRcdFx0XHR9IGNhdGNoICggdCApIHtcblx0XHRcdFx0XHRyZXR1cm4gUy5lcnJvciA9IHQsIFNcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBOKCBlLCBuLCByICkge1xuXHRcdFx0XHRuLmNvbnN0cnVjdG9yID09PSBlLmNvbnN0cnVjdG9yICYmIHIgPT09IHkgJiYgbi5jb25zdHJ1Y3Rvci5yZXNvbHZlID09PSBiID8gZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdFx0ZS5fc3RhdGUgPT09IFQgPyBMKCB0LCBlLl9yZXN1bHQgKSA6IGUuX3N0YXRlID09PSBBID8gSSggdCwgZS5fcmVzdWx0ICkgOiBqKCBlLCB2b2lkIDAsIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIEMoIHQsIGUgKVxuXHRcdFx0XHRcdH0sIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIEkoIHQsIGUgKVxuXHRcdFx0XHRcdH0gKVxuXHRcdFx0XHR9KCBlLCBuICkgOiByID09PSBTID8gKEkoIGUsIFMuZXJyb3IgKSwgUy5lcnJvciA9IG51bGwpIDogdm9pZCAwID09PSByID8gTCggZSwgbiApIDogdCggciApID8gZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0XHRcdFx0byggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0XHR2YXIgciA9ICExLCBpID0gZnVuY3Rpb24oIHQsIGUsIG4sIHIgKSB7XG5cdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0dC5jYWxsKCBlLCBuLCByIClcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoIHQgKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSggbiwgZSwgZnVuY3Rpb24oIG4gKSB7XG5cdFx0XHRcdFx0XHRcdHIgfHwgKHIgPSAhMCwgZSAhPT0gbiA/IEMoIHQsIG4gKSA6IEwoIHQsIG4gKSlcblx0XHRcdFx0XHRcdH0sIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0XHRcdFx0XHRyIHx8IChyID0gITAsIEkoIHQsIGUgKSlcblx0XHRcdFx0XHRcdH0sIHQuX2xhYmVsICk7XG5cdFx0XHRcdFx0XHQhciAmJiBpICYmIChyID0gITAsIEkoIHQsIGkgKSlcblx0XHRcdFx0XHR9LCB0IClcblx0XHRcdFx0fSggZSwgbiwgciApIDogTCggZSwgbiApXG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIEMoIHQsIGUgKSB7XG5cdFx0XHRcdHZhciBuLCByO1xuXHRcdFx0XHR0ID09PSBlID8gSSggdCwgbmV3IFR5cGVFcnJvciggXCJZb3UgY2Fubm90IHJlc29sdmUgYSBwcm9taXNlIHdpdGggaXRzZWxmXCIgKSApIDogKHIgPSB0eXBlb2YgKG4gPSBlKSwgbnVsbCA9PT0gbiB8fCBcIm9iamVjdFwiICE9PSByICYmIFwiZnVuY3Rpb25cIiAhPT0gciA/IEwoIHQsIGUgKSA6IE4oIHQsIGUsIFIoIGUgKSApKVxuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBQKCB0ICkge1xuXHRcdFx0XHR0Ll9vbmVycm9yICYmIHQuX29uZXJyb3IoIHQuX3Jlc3VsdCApLCBPKCB0IClcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gTCggdCwgZSApIHtcblx0XHRcdFx0dC5fc3RhdGUgPT09IHggJiYgKHQuX3Jlc3VsdCA9IGUsIHQuX3N0YXRlID0gVCwgMCAhPT0gdC5fc3Vic2NyaWJlcnMubGVuZ3RoICYmIG8oIE8sIHQgKSlcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gSSggdCwgZSApIHtcblx0XHRcdFx0dC5fc3RhdGUgPT09IHggJiYgKHQuX3N0YXRlID0gQSwgdC5fcmVzdWx0ID0gZSwgbyggUCwgdCApKVxuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBqKCB0LCBlLCBuLCByICkge1xuXHRcdFx0XHR2YXIgaSA9IHQuX3N1YnNjcmliZXJzLCBzID0gaS5sZW5ndGg7XG5cdFx0XHRcdHQuX29uZXJyb3IgPSBudWxsLCBpWyBzIF0gPSBlLCBpWyBzICsgVCBdID0gbiwgaVsgcyArIEEgXSA9IHIsIDAgPT09IHMgJiYgdC5fc3RhdGUgJiYgbyggTywgdCApXG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIE8oIHQgKSB7XG5cdFx0XHRcdHZhciBlID0gdC5fc3Vic2NyaWJlcnMsIG4gPSB0Ll9zdGF0ZTtcblx0XHRcdFx0aWYgKCAwICE9PSBlLmxlbmd0aCApIHtcblx0XHRcdFx0XHRmb3IgKCB2YXIgciA9IHZvaWQgMCwgaSA9IHZvaWQgMCwgbyA9IHQuX3Jlc3VsdCwgcyA9IDA7IHMgPCBlLmxlbmd0aDsgcyArPSAzICkge1xuXHRcdFx0XHRcdFx0ciA9IGVbIHMgXSwgaSA9IGVbIHMgKyBuIF0sIHIgPyBEKCBuLCByLCBpLCBvICkgOiBpKCBvICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHQuX3N1YnNjcmliZXJzLmxlbmd0aCA9IDBcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBEKCBlLCBuLCByLCBpICkge1xuXHRcdFx0XHR2YXIgbyA9IHQoIHIgKSwgcyA9IHZvaWQgMCwgYSA9IHZvaWQgMCwgdSA9IHZvaWQgMCwgYyA9IHZvaWQgMDtcblx0XHRcdFx0aWYgKCBvICkge1xuXHRcdFx0XHRcdGlmICggKHMgPSBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0KCBlIClcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKCB0ICkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gUy5lcnJvciA9IHQsIFNcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KCByLCBpICkpID09PSBTID8gKGMgPSAhMCwgYSA9IHMuZXJyb3IsIHMuZXJyb3IgPSBudWxsKSA6IHUgPSAhMCwgbiA9PT0gcyApIHtcblx0XHRcdFx0XHRcdHJldHVybiB2b2lkIEkoIG4sIG5ldyBUeXBlRXJyb3IoIFwiQSBwcm9taXNlcyBjYWxsYmFjayBjYW5ub3QgcmV0dXJuIHRoYXQgc2FtZSBwcm9taXNlLlwiICkgKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzID0gaSwgdSA9ICEwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG4uX3N0YXRlICE9PSB4IHx8IChvICYmIHUgPyBDKCBuLCBzICkgOiBjID8gSSggbiwgYSApIDogZSA9PT0gVCA/IEwoIG4sIHMgKSA6IGUgPT09IEEgJiYgSSggbiwgcyApKVxuXHRcdFx0fVxuXG5cdFx0XHR2YXIgeiA9IDA7XG5cblx0XHRcdGZ1bmN0aW9uIGsoIHQgKSB7XG5cdFx0XHRcdHRbIF8gXSA9IHogKyssIHQuX3N0YXRlID0gdm9pZCAwLCB0Ll9yZXN1bHQgPSB2b2lkIDAsIHQuX3N1YnNjcmliZXJzID0gW11cblx0XHRcdH1cblxuXHRcdFx0dmFyIE0gPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0ZnVuY3Rpb24gdCggdCwgbiApIHtcblx0XHRcdFx0XHR0aGlzLl9pbnN0YW5jZUNvbnN0cnVjdG9yID0gdCwgdGhpcy5wcm9taXNlID0gbmV3IHQoIEUgKSwgdGhpcy5wcm9taXNlWyBfIF0gfHwgayggdGhpcy5wcm9taXNlICksIGUoIG4gKSA/ICh0aGlzLmxlbmd0aCA9IG4ubGVuZ3RoLCB0aGlzLl9yZW1haW5pbmcgPSBuLmxlbmd0aCwgdGhpcy5fcmVzdWx0ID0gbmV3IEFycmF5KCB0aGlzLmxlbmd0aCApLCAwID09PSB0aGlzLmxlbmd0aCA/IEwoIHRoaXMucHJvbWlzZSwgdGhpcy5fcmVzdWx0ICkgOiAodGhpcy5sZW5ndGggPSB0aGlzLmxlbmd0aCB8fCAwLCB0aGlzLl9lbnVtZXJhdGUoIG4gKSwgMCA9PT0gdGhpcy5fcmVtYWluaW5nICYmIEwoIHRoaXMucHJvbWlzZSwgdGhpcy5fcmVzdWx0ICkpKSA6IEkoIHRoaXMucHJvbWlzZSwgbmV3IEVycm9yKCBcIkFycmF5IE1ldGhvZHMgbXVzdCBiZSBwcm92aWRlZCBhbiBBcnJheVwiICkgKVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHQucHJvdG90eXBlLl9lbnVtZXJhdGUgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRmb3IgKCB2YXIgZSA9IDA7IHRoaXMuX3N0YXRlID09PSB4ICYmIGUgPCB0Lmxlbmd0aDsgZSArKyApIHtcblx0XHRcdFx0XHRcdHRoaXMuX2VhY2hFbnRyeSggdFsgZSBdLCBlIClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIHQucHJvdG90eXBlLl9lYWNoRW50cnkgPSBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0XHR2YXIgbiA9IHRoaXMuX2luc3RhbmNlQ29uc3RydWN0b3IsIHIgPSBuLnJlc29sdmU7XG5cdFx0XHRcdFx0aWYgKCByID09PSBiICkge1xuXHRcdFx0XHRcdFx0dmFyIGkgPSBSKCB0ICk7XG5cdFx0XHRcdFx0XHRpZiAoIGkgPT09IHkgJiYgdC5fc3RhdGUgIT09IHggKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX3NldHRsZWRBdCggdC5fc3RhdGUsIGUsIHQuX3Jlc3VsdCApO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICggXCJmdW5jdGlvblwiICE9IHR5cGVvZiBpICkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9yZW1haW5pbmcgLS0sIHRoaXMuX3Jlc3VsdFsgZSBdID0gdDtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIG4gPT09IFUgKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBvID0gbmV3IG4oIEUgKTtcblx0XHRcdFx0XHRcdFx0TiggbywgdCwgaSApLCB0aGlzLl93aWxsU2V0dGxlQXQoIG8sIGUgKVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5fd2lsbFNldHRsZUF0KCBuZXcgbiggZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGUoIHQgKVxuXHRcdFx0XHRcdFx0XHR9ICksIGUgKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLl93aWxsU2V0dGxlQXQoIHIoIHQgKSwgZSApXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCB0LnByb3RvdHlwZS5fc2V0dGxlZEF0ID0gZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0XHRcdFx0dmFyIHIgPSB0aGlzLnByb21pc2U7XG5cdFx0XHRcdFx0ci5fc3RhdGUgPT09IHggJiYgKHRoaXMuX3JlbWFpbmluZyAtLSwgdCA9PT0gQSA/IEkoIHIsIG4gKSA6IHRoaXMuX3Jlc3VsdFsgZSBdID0gbiksIDAgPT09IHRoaXMuX3JlbWFpbmluZyAmJiBMKCByLCB0aGlzLl9yZXN1bHQgKVxuXHRcdFx0XHR9LCB0LnByb3RvdHlwZS5fd2lsbFNldHRsZUF0ID0gZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdFx0dmFyIG4gPSB0aGlzO1xuXHRcdFx0XHRcdGooIHQsIHZvaWQgMCwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbi5fc2V0dGxlZEF0KCBULCBlLCB0IClcblx0XHRcdFx0XHR9LCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRcdHJldHVybiBuLl9zZXR0bGVkQXQoIEEsIGUsIHQgKVxuXHRcdFx0XHRcdH0gKVxuXHRcdFx0XHR9LCB0XG5cdFx0XHR9KCksIFUgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0ZnVuY3Rpb24gZSggdCApIHtcblx0XHRcdFx0XHR0aGlzWyBfIF0gPSB6ICsrLCB0aGlzLl9yZXN1bHQgPSB0aGlzLl9zdGF0ZSA9IHZvaWQgMCwgdGhpcy5fc3Vic2NyaWJlcnMgPSBbXSwgRSAhPT0gdCAmJiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiB0ICYmIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvciggXCJZb3UgbXVzdCBwYXNzIGEgcmVzb2x2ZXIgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBwcm9taXNlIGNvbnN0cnVjdG9yXCIgKVxuXHRcdFx0XHRcdH0oKSwgdGhpcyBpbnN0YW5jZW9mIGUgPyBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdGUoIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0XHRcdFx0XHRcdEMoIHQsIGUgKVxuXHRcdFx0XHRcdFx0XHR9LCBmdW5jdGlvbiggZSApIHtcblx0XHRcdFx0XHRcdFx0XHRJKCB0LCBlIClcblx0XHRcdFx0XHRcdFx0fSApXG5cdFx0XHRcdFx0XHR9IGNhdGNoICggZSApIHtcblx0XHRcdFx0XHRcdFx0SSggdCwgZSApXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSggdGhpcywgdCApIDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCBcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1Byb21pc2UnOiBQbGVhc2UgdXNlIHRoZSAnbmV3JyBvcGVyYXRvciwgdGhpcyBvYmplY3QgY29uc3RydWN0b3IgY2Fubm90IGJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLlwiIClcblx0XHRcdFx0XHR9KCkpXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gZS5wcm90b3R5cGUuY2F0Y2ggPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy50aGVuKCBudWxsLCB0IClcblx0XHRcdFx0fSwgZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0XHRcdHZhciBuID0gdGhpcy5jb25zdHJ1Y3Rvcjtcblx0XHRcdFx0XHRyZXR1cm4gdCggZSApID8gdGhpcy50aGVuKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRcdHJldHVybiBuLnJlc29sdmUoIGUoKSApLnRoZW4oIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdFxuXHRcdFx0XHRcdFx0fSApXG5cdFx0XHRcdFx0fSwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbi5yZXNvbHZlKCBlKCkgKS50aGVuKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0dGhyb3cgdFxuXHRcdFx0XHRcdFx0fSApXG5cdFx0XHRcdFx0fSApIDogdGhpcy50aGVuKCBlLCBlIClcblx0XHRcdFx0fSwgZVxuXHRcdFx0fSgpO1xuXHRcdFx0cmV0dXJuIFUucHJvdG90eXBlLnRoZW4gPSB5LCBVLmFsbCA9IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRyZXR1cm4gbmV3IE0oIHRoaXMsIHQgKS5wcm9taXNlXG5cdFx0XHR9LCBVLnJhY2UgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIG4gPSB0aGlzO1xuXHRcdFx0XHRyZXR1cm4gZSggdCApID8gbmV3IG4oIGZ1bmN0aW9uKCBlLCByICkge1xuXHRcdFx0XHRcdGZvciAoIHZhciBpID0gdC5sZW5ndGgsIG8gPSAwOyBvIDwgaTsgbyArKyApIHtcblx0XHRcdFx0XHRcdG4ucmVzb2x2ZSggdFsgbyBdICkudGhlbiggZSwgciApXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ICkgOiBuZXcgbiggZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGUoIG5ldyBUeXBlRXJyb3IoIFwiWW91IG11c3QgcGFzcyBhbiBhcnJheSB0byByYWNlLlwiICkgKVxuXHRcdFx0XHR9IClcblx0XHRcdH0sIFUucmVzb2x2ZSA9IGIsIFUucmVqZWN0ID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHZhciBlID0gbmV3IHRoaXMoIEUgKTtcblx0XHRcdFx0cmV0dXJuIEkoIGUsIHQgKSwgZVxuXHRcdFx0fSwgVS5fc2V0U2NoZWR1bGVyID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdGkgPSB0XG5cdFx0XHR9LCBVLl9zZXRBc2FwID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdG8gPSB0XG5cdFx0XHR9LCBVLl9hc2FwID0gbywgVS5wb2x5ZmlsbCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgdCA9IHZvaWQgMDtcblx0XHRcdFx0aWYgKCBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBnbG9iYWwgKSB7XG5cdFx0XHRcdFx0dCA9IGdsb2JhbDtcblx0XHRcdFx0fSBlbHNlIGlmICggXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2Ygc2VsZiApIHtcblx0XHRcdFx0XHR0ID0gc2VsZjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0dCA9IEZ1bmN0aW9uKCBcInJldHVybiB0aGlzXCIgKSgpXG5cdFx0XHRcdFx0fSBjYXRjaCAoIHQgKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwicG9seWZpbGwgZmFpbGVkIGJlY2F1c2UgZ2xvYmFsIG9iamVjdCBpcyB1bmF2YWlsYWJsZSBpbiB0aGlzIGVudmlyb25tZW50XCIgKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgZSA9IHQuUHJvbWlzZTtcblx0XHRcdFx0aWYgKCBlICkge1xuXHRcdFx0XHRcdHZhciBuID0gbnVsbDtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0biA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCggZS5yZXNvbHZlKCkgKVxuXHRcdFx0XHRcdH0gY2F0Y2ggKCB0ICkge1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIFwiW29iamVjdCBQcm9taXNlXVwiID09PSBuICYmICFlLmNhc3QgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dC5Qcm9taXNlID0gVVxuXHRcdFx0fSwgVS5Qcm9taXNlID0gVSwgVVxuXHRcdH0sIHQuZXhwb3J0cyA9IHIoKVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDUwICk7XG5cdFx0dC5leHBvcnRzID0gbmV3IHIoIFwidHd0dHJcIiApXG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMSApLCBpID0gbiggMCApO1xuXG5cdFx0ZnVuY3Rpb24gbyggdCApIHtcblx0XHRcdHJldHVybiBpLmlzVHlwZSggXCJzdHJpbmdcIiwgdCApID8gdC5zcGxpdCggXCIuXCIgKSA6IGkuaXNUeXBlKCBcImFycmF5XCIsIHQgKSA/IHQgOiBbXVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHMoIHQsIGUgKSB7XG5cdFx0XHQoZSA9IGUgfHwgcilbIHQgXSA9IGVbIHQgXSB8fCB7fSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KCB0aGlzLCBcImJhc2VcIiwgeyB2YWx1ZTogZVsgdCBdIH0gKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KCB0aGlzLCBcIm5hbWVcIiwgeyB2YWx1ZTogdCB9IClcblx0XHR9XG5cblx0XHRpLmF1Zyggcy5wcm90b3R5cGUsIHtcblx0XHRcdGdldDogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiBvKCB0ICkucmVkdWNlKCBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0XHRpZiAoIGkuaXNPYmplY3QoIHQgKSApIHtcblx0XHRcdFx0XHRcdHJldHVybiB0WyBlIF1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIHRoaXMuYmFzZSApXG5cdFx0XHR9LFxuXHRcdFx0c2V0OiBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHRcdFx0dmFyIHIgPSBvKCB0ICksIHMgPSBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0XHR2YXIgbiA9IG8oIGUgKS5zbGljZSggMCwgLSAxICk7XG5cdFx0XHRcdFx0cmV0dXJuIG4ucmVkdWNlKCBmdW5jdGlvbiggdCwgZSwgciApIHtcblx0XHRcdFx0XHRcdGlmICggdFsgZSBdID0gdFsgZSBdIHx8IHt9LCAhaS5pc09iamVjdCggdFsgZSBdICkgKSB7XG5cdFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggbi5zbGljZSggMCwgciArIDEgKS5qb2luKCBcIi5cIiApICsgXCIgaXMgYWxyZWFkeSBkZWZpbmVkIHdpdGggYSB2YWx1ZS5cIiApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmV0dXJuIHRbIGUgXVxuXHRcdFx0XHRcdH0sIHQgKVxuXHRcdFx0XHR9KCB0aGlzLmJhc2UsIHQgKSwgYSA9IHIuc2xpY2UoIC0gMSApO1xuXHRcdFx0XHRyZXR1cm4gbiAmJiBhIGluIHMgPyBzWyBhIF0gOiBzWyBhIF0gPSBlXG5cdFx0XHR9LFxuXHRcdFx0aW5pdDogZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnNldCggdCwgZSwgITAgKVxuXHRcdFx0fSxcblx0XHRcdHVuc2V0OiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUgPSBvKCB0ICksIG4gPSB0aGlzLmdldCggZS5zbGljZSggMCwgLSAxICkgKTtcblx0XHRcdFx0biAmJiBkZWxldGUgblsgZS5zbGljZSggLSAxICkgXVxuXHRcdFx0fSxcblx0XHRcdGF1ZzogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHZhciBlID0gdGhpcy5nZXQoIHQgKSwgbiA9IGkudG9SZWFsQXJyYXkoIGFyZ3VtZW50cyApLnNsaWNlKCAxICk7XG5cdFx0XHRcdGlmICggZSA9IHZvaWQgMCAhPT0gZSA/IGUgOiB7fSwgbi51bnNoaWZ0KCBlICksICFuLmV2ZXJ5KCBpLmlzT2JqZWN0ICkgKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcIkNhbm5vdCBhdWdtZW50IG5vbi1vYmplY3QuXCIgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zZXQoIHQsIGkuYXVnLmFwcGx5KCBudWxsLCBuICkgKVxuXHRcdFx0fSxcblx0XHRcdGNhbGw6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSA9IHRoaXMuZ2V0KCB0ICksIG4gPSBpLnRvUmVhbEFycmF5KCBhcmd1bWVudHMgKS5zbGljZSggMSApO1xuXHRcdFx0XHRpZiAoICFpLmlzVHlwZSggXCJmdW5jdGlvblwiLCBlICkgKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcIkZ1bmN0aW9uIFwiICsgdCArIFwiZG9lcyBub3QgZXhpc3QuXCIgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gZS5hcHBseSggbnVsbCwgbiApXG5cdFx0XHR9LFxuXHRcdFx0ZnVsbFBhdGg6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSA9IG8oIHQgKTtcblx0XHRcdFx0cmV0dXJuIGUudW5zaGlmdCggdGhpcy5uYW1lICksIGUuam9pbiggXCIuXCIgKVxuXHRcdFx0fVxuXHRcdH0gKSwgdC5leHBvcnRzID0gc1xuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDAgKSwgaSA9IG4oIDcgKSwgbyA9IHtcblx0XHRcdGJpbmQ6IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5faGFuZGxlcnMgPSB0aGlzLl9oYW5kbGVycyB8fCB7fSwgdGhpcy5faGFuZGxlcnNbIHQgXSA9IHRoaXMuX2hhbmRsZXJzWyB0IF0gfHwgW10sIHRoaXMuX2hhbmRsZXJzWyB0IF0ucHVzaCggZSApXG5cdFx0XHR9LFxuXHRcdFx0dW5iaW5kOiBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0dmFyIG47XG5cdFx0XHRcdHRoaXMuX2hhbmRsZXJzICYmIHRoaXMuX2hhbmRsZXJzWyB0IF0gJiYgKGUgPyAobiA9IHRoaXMuX2hhbmRsZXJzWyB0IF0uaW5kZXhPZiggZSApKSA+PSAwICYmIHRoaXMuX2hhbmRsZXJzWyB0IF0uc3BsaWNlKCBuLCAxICkgOiB0aGlzLl9oYW5kbGVyc1sgdCBdID0gW10pXG5cdFx0XHR9LFxuXHRcdFx0dHJpZ2dlcjogZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdHZhciBuID0gdGhpcy5faGFuZGxlcnMgJiYgdGhpcy5faGFuZGxlcnNbIHQgXTtcblx0XHRcdFx0KGUgPSBlIHx8IHt9KS50eXBlID0gdCwgbiAmJiBuLmZvckVhY2goIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdHIuYXN5bmMoIGkoIHQsIHRoaXMsIGUgKSApXG5cdFx0XHRcdH0gKVxuXHRcdFx0fVxuXHRcdH07XG5cdFx0dC5leHBvcnRzID0ge1xuXHRcdFx0RW1pdHRlcjogbyxcblx0XHRcdG1ha2VFbWl0dGVyOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHIuYXVnKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0fSwgbyApXG5cdFx0XHR9XG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDEwMyApLCBpID0gbiggNzcgKSwgbyA9IG4oIDYgKSwgcyA9IG4oIDIzICksIGEgPSBuKCA3ICksIHUgPSBuKCAwICksIGMgPSBuZXcgaSggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHR2YXIgZSA9IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRyZXR1cm4gdC5yZWR1Y2UoIGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHRcdHJldHVybiB0WyBlLl9jbGFzc05hbWUgXSA9IHRbIGUuX2NsYXNzTmFtZSBdIHx8IFtdLCB0WyBlLl9jbGFzc05hbWUgXS5wdXNoKCBlICksIHRcblx0XHRcdFx0fSwge30gKVxuXHRcdFx0fSggdC5tYXAoIHIuZnJvbVJhd1Rhc2sgKSApO1xuXHRcdFx0dS5mb3JJbiggZSwgZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdHMuYWxsU2V0dGxlZCggZS5tYXAoIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdHJldHVybiB0LmluaXRpYWxpemUoKVxuXHRcdFx0XHR9ICkgKS50aGVuKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRlLmZvckVhY2goIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdFx0by5hbGwoIFtcblx0XHRcdFx0XHRcdFx0dC5oeWRyYXRlKCksXG5cdFx0XHRcdFx0XHRcdHQuaW5zZXJ0SW50b0RvbSgpXG5cdFx0XHRcdFx0XHRdICkudGhlbiggYSggdC5yZW5kZXIsIHQgKSApLnRoZW4oIGEoIHQuc3VjY2VzcywgdCApLCBhKCB0LmZhaWwsIHQgKSApXG5cdFx0XHRcdFx0fSApXG5cdFx0XHRcdH0gKVxuXHRcdFx0fSApXG5cdFx0fSApO1xuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdGFkZFdpZGdldDogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiBjLmFkZCggdCApXG5cdFx0XHR9XG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDE4ICk7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRyZXR1cm4gci53cml0ZSggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHQgJiYgdC5wYXJlbnROb2RlICYmIHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggdCApXG5cdFx0XHR9IClcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdG4oIDEyICksIHQuZXhwb3J0cyA9IHtcblx0XHRcdGxvZzogZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDEgKTtcblxuXHRcdGZ1bmN0aW9uIGkoIHQgKSB7XG5cdFx0XHRyZXR1cm4gKHQgPSB0IHx8IHIpLmdldFNlbGVjdGlvbiAmJiB0LmdldFNlbGVjdGlvbigpXG5cdFx0fVxuXG5cdFx0dC5leHBvcnRzID0ge1xuXHRcdFx0Z2V0U2VsZWN0aW9uOiBpLFxuXHRcdFx0Z2V0U2VsZWN0ZWRUZXh0OiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUgPSBpKCB0ICk7XG5cdFx0XHRcdHJldHVybiBlID8gZS50b1N0cmluZygpIDogXCJcIlxuXHRcdFx0fVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCA0ICksIGkgPSBuKCAxICksIG8gPSBuKCAyICksIHMgPSAyZTQ7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHR2YXIgZSA9IG5ldyBvLCBuID0gci5jcmVhdGVFbGVtZW50KCBcImltZ1wiICk7XG5cdFx0XHRyZXR1cm4gbi5vbmxvYWQgPSBuLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0aS5zZXRUaW1lb3V0KCBlLnJlc29sdmUsIDUwIClcblx0XHRcdH0sIG4uc3JjID0gdCwgaS5zZXRUaW1lb3V0KCBlLnJlamVjdCwgcyApLCBlLnByb21pc2Vcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMTEzICk7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHR0LmRlZmluZSggXCJjcmVhdGVFbGVtZW50XCIsIHIgKSwgdC5kZWZpbmUoIFwiY3JlYXRlRnJhZ21lbnRcIiwgciApLCB0LmRlZmluZSggXCJodG1sVG9FbGVtZW50XCIsIHIgKSwgdC5kZWZpbmUoIFwiaGFzU2VsZWN0ZWRUZXh0XCIsIHIgKSwgdC5kZWZpbmUoIFwiYWRkUm9vdENsYXNzXCIsIHIgKSwgdC5kZWZpbmUoIFwicmVtb3ZlUm9vdENsYXNzXCIsIHIgKSwgdC5kZWZpbmUoIFwiaGFzUm9vdENsYXNzXCIsIHIgKSwgdC5kZWZpbmUoIFwicHJlcGVuZFN0eWxlU2hlZXRcIiwgciApLCB0LmRlZmluZSggXCJhcHBlbmRTdHlsZVNoZWV0XCIsIHIgKSwgdC5kZWZpbmUoIFwicHJlcGVuZENzc1wiLCByICksIHQuZGVmaW5lKCBcImFwcGVuZENzc1wiLCByICksIHQuZGVmaW5lKCBcIm1ha2VWaXNpYmxlXCIsIHIgKSwgdC5kZWZpbmUoIFwiaW5qZWN0V2lkZ2V0RWxcIiwgciApLCB0LmRlZmluZSggXCJtYXRjaEhlaWdodFRvQ29udGVudFwiLCByICksIHQuZGVmaW5lKCBcIm1hdGNoV2lkdGhUb0NvbnRlbnRcIiwgciApXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSApIHtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdHZhciBlLCBuID0gITE7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBuID8gZSA6IChuID0gITAsIGUgPSB0LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKSlcblx0XHRcdH1cblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMTUgKSwgaSA9IG4oIDEyMiApLCBvID0gbiggNjAgKSwgcyA9IG4oIDE2ICk7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0XHRyZXR1cm4gbmV3IHIoIGksIG8sIHMuRE1fQlVUVE9OLCB0LCBlLCBuIClcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggNjEgKSwgaSA9IG4oIDI2ICk7XG5cdFx0dC5leHBvcnRzID0gci5pc1N1cHBvcnRlZCgpID8gciA6IGlcblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAyNyApLCBpID0gbiggMTIzICk7XG5cdFx0dC5leHBvcnRzID0gci5idWlsZCggW2ldIClcblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAxNSApLCBpID0gbiggMTI2ICksIG8gPSBuKCAzOCApLCBzID0gbiggMTYgKTtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHRcdHJldHVybiBuZXcgciggaSwgbywgcy5GT0xMT1dfQlVUVE9OLCB0LCBlLCBuIClcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMTUgKSwgaSA9IG4oIDEzNCApLCBvID0gbiggMjYgKSwgcyA9IG4oIDE2ICk7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0XHRyZXR1cm4gbmV3IHIoIGksIG8sIHMuTU9NRU5ULCB0LCBlLCBuIClcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMTUgKSwgaSA9IG4oIDEzNiApLCBvID0gbiggMjYgKSwgcyA9IG4oIDE2ICk7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0XHRyZXR1cm4gbmV3IHIoIGksIG8sIHMuUEVSSVNDT1BFLCB0LCBlLCBuIClcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggODMgKSwgaSA9IG4oIDEzOCApLCBvID0gbiggMTQyICksIHMgPSBuKCAxNDQgKSwgYSA9IG4oIDE0NiApLCB1ID0gbiggMTQ4ICksIGMgPSB7XG5cdFx0XHRjb2xsZWN0aW9uOiBpLFxuXHRcdFx0ZXZlbnQ6IG8sXG5cdFx0XHRsaWtlczogcyxcblx0XHRcdGxpc3Q6IGEsXG5cdFx0XHRwcm9maWxlOiB1LFxuXHRcdFx0dXJsOiBmXG5cdFx0fSwgZCA9IFt1LCBzLCBpLCBhLCBvXTtcblxuXHRcdGZ1bmN0aW9uIGYoIHQgKSB7XG5cdFx0XHRyZXR1cm4gciggZCwgZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBlKCB0IClcblx0XHRcdFx0fSBjYXRjaCAoIHQgKSB7XG5cdFx0XHRcdH1cblx0XHRcdH0gKVxuXHRcdH1cblxuXHRcdHQuZXhwb3J0cyA9IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0cmV0dXJuIHQgPyBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUsIG47XG5cdFx0XHRcdHJldHVybiBlID0gKHQuc291cmNlVHlwZSArIFwiXCIpLnRvTG93ZXJDYXNlKCksIChuID0gY1sgZSBdKSA/IG5ldyBuKCB0ICkgOiBudWxsXG5cdFx0XHR9KCB0ICkgfHwgZiggdCApIDogbnVsbFxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAxNSApLCBpID0gbiggMTUwICksIG8gPSBuKCAyNiApLCBzID0gbiggMTYgKTtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHRcdHJldHVybiBuZXcgciggaSwgbywgcy5USU1FTElORSwgdCwgZSwgbiApXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDQgKSwgaSA9IG4oIDY4ICksIG8gPSBuKCAxNTIgKSwgcyA9IG4oIDE1ICksIGEgPSBuKCAzOCApLCB1ID0gbiggMTUzICksIGMgPSBuKCA2MCApLCBkID0gbiggMTU0ICksXG5cdFx0XHRmID0gbiggMTYgKTtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCwgZSwgbiwgbCApIHtcblx0XHRcdHZhciBoLCBwID0gaS5pc0hvcml6b25Ud2VldEVuYWJsZWQoIGwgKTtcblx0XHRcdHJldHVybiBvKCBsLCB0LnR3ZWV0SWQgKSwgcCA/IChoID0gci5jcmVhdGVFbGVtZW50KCBcImRpdlwiICksIG5ldyBzKCB1LCBhLCBmLlRXRUVULCB0LCBlLCBuLCB7IHNhbmRib3hXcmFwcGVyRWw6IGggfSApKSA6IG5ldyBzKCBkLCBjLCBmLlRXRUVULCB0LCBlLCBuIClcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdHZhciBuID0gXCJ0ZndfaG9yaXpvbl90d2VldF9lbWJlZF85NTU1XCI7XG5cdFx0dC5leHBvcnRzID0ge1xuXHRcdFx0aXNIb3Jpem9uVHdlZXRFbmFibGVkOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuICEoIXQgfHwgIXRbIG4gXSB8fCBcImh0ZVwiICE9PSB0WyBuIF0uYnVja2V0KVxuXHRcdFx0fVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAxNSApLCBpID0gbiggMTU2ICksIG8gPSBuKCAzOCApLCBzID0gbiggMTYgKTtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHRcdHZhciBhID0gdCAmJiB0LnR5cGUgfHwgXCJzaGFyZVwiLFxuXHRcdFx0XHR1ID0gXCJoYXNodGFnXCIgPT0gYSA/IHMuSEFTSFRBR19CVVRUT04gOiBcIm1lbnRpb25cIiA9PSBhID8gcy5NRU5USU9OX0JVVFRPTiA6IHMuU0hBUkVfQlVUVE9OO1xuXHRcdFx0cmV0dXJuIG5ldyByKCBpLCBvLCB1LCB0LCBlLCBuIClcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMzcgKSwgaSA9IG4oIDM5ICksIG8gPSBuKCAwICksIHMgPSBuKCA2OCApLCBhID0gbiggMzEgKTtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdHZhciBlID0ge1xuXHRcdFx0XHR3aWRnZXRfb3JpZ2luOiBpLnJvb3REb2N1bWVudExvY2F0aW9uKCksXG5cdFx0XHRcdHdpZGdldF9mcmFtZTogaS5pc0ZyYW1lZCgpID8gaS5jdXJyZW50RG9jdW1lbnRMb2NhdGlvbigpIDogbnVsbCxcblx0XHRcdFx0ZHVyYXRpb25fbXM6IHQuZHVyYXRpb24sXG5cdFx0XHRcdGl0ZW1faWRzOiB0LndpZGdldElkcyB8fCBbXVxuXHRcdFx0fSwgbiA9IG8uYXVnKCB0Lm5hbWVzcGFjZSwge1xuXHRcdFx0XHRwYWdlOiBcInBhZ2VcIixcblx0XHRcdFx0Y29tcG9uZW50OiBcInBlcmZvcm1hbmNlXCJcblx0XHRcdH0gKTtcblx0XHRcdHJldHVybiBhLmdldEV4cGVyaW1lbnRzKCkudGhlbiggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHZhciBpID0gcy5pc0hvcml6b25Ud2VldEVuYWJsZWQoIHQgKSA/IG8uYXVnKCBlLCB7IGNvbnRleHQ6IFwiaG9yaXpvblwiIH0gKSA6IGU7XG5cdFx0XHRcdHIuc2NyaWJlKCBuLCBpIClcblx0XHRcdH0gKVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAwICksIGkgPSBuKCAxMzkgKSwgbyA9IFtcImFyXCIsIFwiZmFcIiwgXCJoZVwiLCBcInVyXCJdO1xuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdGlzUnRsTGFuZzogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiB0ID0gU3RyaW5nKCB0ICkudG9Mb3dlckNhc2UoKSwgci5jb250YWlucyggbywgdCApXG5cdFx0XHR9LFxuXHRcdFx0bWF0Y2hMYW5ndWFnZTogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiB0ID0gKHQgPSAodCB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpKS5yZXBsYWNlKCBcIl9cIiwgXCItXCIgKSwgaSggdCApID8gdCA6ICh0ID0gdC5yZXBsYWNlKCAvLS4qLywgXCJcIiApLCBpKCB0ICkgPyB0IDogXCJlblwiKVxuXHRcdFx0fVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0dC5leHBvcnRzID0ge1xuXHRcdFx0VFdFRVQ6IDAsXG5cdFx0XHRSRVRXRUVUOiAxMCxcblx0XHRcdENVU1RPTV9USU1FTElORTogMTcsXG5cdFx0XHRMSVZFX1ZJREVPX0VWRU5UOiAyOCxcblx0XHRcdFFVT1RFX1RXRUVUOiAyM1xuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0dC5leHBvcnRzID0ge1xuXHRcdFx0dHdlZXRCdXR0b25IdG1sUGF0aDogXCIvd2lkZ2V0cy90d2VldF9idXR0b24uZDBmMTNiZTgzMjFlYjQzMmZiYTI4Y2ZjMWMzMzUxYjEue3tsYW5nfX0uaHRtbFwiLFxuXHRcdFx0Zm9sbG93QnV0dG9uSHRtbFBhdGg6IFwiL3dpZGdldHMvZm9sbG93X2J1dHRvbi5kMGYxM2JlODMyMWViNDMyZmJhMjhjZmMxYzMzNTFiMS57e2xhbmd9fS5odG1sXCIsXG5cdFx0XHRodWJIdG1sUGF0aDogXCIvd2lkZ2V0cy9odWIuaHRtbFwiLFxuXHRcdFx0d2lkZ2V0SWZyYW1lSHRtbFBhdGg6IFwiL3dpZGdldHMvd2lkZ2V0X2lmcmFtZS5kMGYxM2JlODMyMWViNDMyZmJhMjhjZmMxYzMzNTFiMS5odG1sXCIsXG5cdFx0XHRyZXNvdXJjZUJhc2VVcmw6IFwiaHR0cHM6Ly9wbGF0Zm9ybS50d2l0dGVyLmNvbVwiXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDMgKSwgaSA9IG4oIDEwMCApLCBvID0gbiggMjUgKSwgcyA9IG4oIDExICksIGEgPSB7XG5cdFx0XHRmYXZvcml0ZTogW1wiZmF2b3JpdGVcIiwgXCJsaWtlXCJdLFxuXHRcdFx0Zm9sbG93OiBbXCJmb2xsb3dcIl0sXG5cdFx0XHRsaWtlOiBbXCJmYXZvcml0ZVwiLCBcImxpa2VcIl0sXG5cdFx0XHRyZXR3ZWV0OiBbXCJyZXR3ZWV0XCJdLFxuXHRcdFx0dHdlZXQ6IFtcInR3ZWV0XCJdXG5cdFx0fTtcblxuXHRcdGZ1bmN0aW9uIHUoIHQgKSB7XG5cdFx0XHR0aGlzLnNyY0VsID0gW10sIHRoaXMuZWxlbWVudCA9IHRcblx0XHR9XG5cblx0XHR1Lm9wZW4gPSBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHRcdHZhciB1ID0gKHIuaW50ZW50VHlwZSggdCApIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRyLmlzVHdpdHRlclVSTCggdCApICYmIChmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0aS5vcGVuKCB0LCB7fSwgZSApXG5cdFx0XHR9KCB0LCBuICksIGUgJiYgby50cmlnZ2VyKCBcImNsaWNrXCIsIHtcblx0XHRcdFx0dGFyZ2V0OiBlLFxuXHRcdFx0XHRyZWdpb246IFwiaW50ZW50XCIsXG5cdFx0XHRcdHR5cGU6IFwiY2xpY2tcIixcblx0XHRcdFx0ZGF0YToge31cblx0XHRcdH0gKSwgZSAmJiBhWyB1IF0gJiYgYVsgdSBdLmZvckVhY2goIGZ1bmN0aW9uKCBuICkge1xuXHRcdFx0XHRvLnRyaWdnZXIoIG4sIHtcblx0XHRcdFx0XHR0YXJnZXQ6IGUsXG5cdFx0XHRcdFx0cmVnaW9uOiBcImludGVudFwiLFxuXHRcdFx0XHRcdHR5cGU6IG4sXG5cdFx0XHRcdFx0ZGF0YTogZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdFx0XHR2YXIgbiA9IHMuZGVjb2RlVVJMKCBlICk7XG5cdFx0XHRcdFx0XHRzd2l0Y2ggKCB0ICkge1xuXHRcdFx0XHRcdFx0XHRjYXNlXCJmYXZvcml0ZVwiOlxuXHRcdFx0XHRcdFx0XHRjYXNlXCJsaWtlXCI6XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHsgdHdlZXRfaWQ6IG4udHdlZXRfaWQgfTtcblx0XHRcdFx0XHRcdFx0Y2FzZVwiZm9sbG93XCI6XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0XHRcdHNjcmVlbl9uYW1lOiBuLnNjcmVlbl9uYW1lLFxuXHRcdFx0XHRcdFx0XHRcdFx0dXNlcl9pZDogbi51c2VyX2lkXG5cdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0Y2FzZVwicmV0d2VldFwiOlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB7IHNvdXJjZV90d2VldF9pZDogbi50d2VldF9pZCB9O1xuXHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB7fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0oIHUsIHQgKVxuXHRcdFx0XHR9IClcblx0XHRcdH0gKSlcblx0XHR9LCB0LmV4cG9ydHMgPSB1XG5cdH0sIGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdGdldFRpbWV6b25lT2Zmc2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHQgPSAobmV3IERhdGUpLnRvU3RyaW5nKCkubWF0Y2goIC8oR01UWystXT9cXGQrKS8gKTtcblx0XHRcdFx0cmV0dXJuIHQgJiYgdFsgMCBdIHx8IFwiR01UXCJcblx0XHRcdH1cblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggNCApLCBpID0gbiggOSApLCBvID0gbiggMiApLCBzID0gbiggMCApLCBhID0gbiggMTEgKSwgdSA9IFwiY2JcIiwgYyA9IDA7XG5cdFx0dC5leHBvcnRzID0ge1xuXHRcdFx0ZmV0Y2g6IGZ1bmN0aW9uKCB0LCBlLCBuLCBkICkge1xuXHRcdFx0XHR2YXIgZiwgbCwgaDtcblx0XHRcdFx0cmV0dXJuIGQgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRpZiAoIHQgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdC5yZXBsYWNlKCAvW15cXHckXS9nLCBcIl9cIiApXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KCBkIHx8IHUgKyBjICsrICksIGYgPSBpLmZ1bGxQYXRoKCBbXG5cdFx0XHRcdFx0XCJjYWxsYmFja3NcIixcblx0XHRcdFx0XHRkXG5cdFx0XHRcdF0gKSwgbCA9IHIuY3JlYXRlRWxlbWVudCggXCJzY3JpcHRcIiApLCBoID0gbmV3IG8sIGUgPSBzLmF1Zygge30sIGUsIHtcblx0XHRcdFx0XHRjYWxsYmFjazogZixcblx0XHRcdFx0XHRzdXBwcmVzc19yZXNwb25zZV9jb2RlczogITBcblx0XHRcdFx0fSApLCBpLnNldCggW1wiY2FsbGJhY2tzXCIsIGRdLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHR2YXIgZTtcblx0XHRcdFx0XHR0ID0gKGUgPSBuKCB0IHx8ICExICkpLnJlc3AsIGUuc3VjY2VzcyA/IGgucmVzb2x2ZSggdCApIDogaC5yZWplY3QoIHQgKSwgbC5vbmxvYWQgPSBsLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGwsIGwucGFyZW50Tm9kZSAmJiBsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIGwgKSwgaS51bnNldCggW1xuXHRcdFx0XHRcdFx0XCJjYWxsYmFja3NcIixcblx0XHRcdFx0XHRcdGRcblx0XHRcdFx0XHRdIClcblx0XHRcdFx0fSApLCBsLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRoLnJlamVjdCggbmV3IEVycm9yKCBcImZhaWxlZCB0byBmZXRjaCBcIiArIGwuc3JjICkgKVxuXHRcdFx0XHR9LCBsLnNyYyA9IGEudXJsKCB0LCBlICksIGwuYXN5bmMgPSBcImFzeW5jXCIsIHIuYm9keS5hcHBlbmRDaGlsZCggbCApLCBoLnByb21pc2Vcblx0XHRcdH1cblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMiApLCBpID0gbiggMTA1ICksIG8gPSBuKCA3ICk7XG5cblx0XHRmdW5jdGlvbiBzKCB0ICkge1xuXHRcdFx0dGhpcy5faW5wdXRzUXVldWUgPSBbXSwgdGhpcy5fdGFzayA9IHQsIHRoaXMuX2hhc0ZsdXNoQmVlblNjaGVkdWxlZCA9ICExXG5cdFx0fVxuXG5cdFx0cy5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHR2YXIgZSA9IG5ldyByO1xuXHRcdFx0cmV0dXJuIHRoaXMuX2lucHV0c1F1ZXVlLnB1c2goIHtcblx0XHRcdFx0aW5wdXQ6IHQsXG5cdFx0XHRcdHRhc2tEb25lRGVmZXJyZWQ6IGVcblx0XHRcdH0gKSwgdGhpcy5faGFzRmx1c2hCZWVuU2NoZWR1bGVkIHx8ICh0aGlzLl9oYXNGbHVzaEJlZW5TY2hlZHVsZWQgPSAhMCwgaSggbyggdGhpcy5fZmx1c2gsIHRoaXMgKSApKSwgZS5wcm9taXNlXG5cdFx0fSwgcy5wcm90b3R5cGUuX2ZsdXNoID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR0aGlzLl90YXNrLmNhbGwoIG51bGwsIHRoaXMuX2lucHV0c1F1ZXVlIClcblx0XHRcdH0gY2F0Y2ggKCB0ICkge1xuXHRcdFx0XHR0aGlzLl9pbnB1dHNRdWV1ZS5mb3JFYWNoKCBmdW5jdGlvbiggZSApIHtcblx0XHRcdFx0XHRlLnRhc2tEb25lRGVmZXJyZWQucmVqZWN0KCB0IClcblx0XHRcdFx0fSApXG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9pbnB1dHNRdWV1ZSA9IFtdLCB0aGlzLl9oYXNGbHVzaEJlZW5TY2hlZHVsZWQgPSAhMVxuXHRcdH0sIHQuZXhwb3J0cyA9IHNcblx0fSwgZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRyZXR1cm4gdC5yZWR1Y2UoIGZ1bmN0aW9uKCB0LCBuICkge1xuXHRcdFx0XHR2YXIgciA9IGUoIG4gKTtcblx0XHRcdFx0cmV0dXJuIHRbIHIgXSA9IHRbIHIgXSB8fCBbXSwgdFsgciBdLnB1c2goIG4gKSwgdFxuXHRcdFx0fSwge30gKVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCA0ICksIGkgPSBuKCA4ICksIG8gPSBuKCAzICk7XG5cblx0XHRmdW5jdGlvbiBzKCB0LCBlICkge1xuXHRcdFx0dmFyIG4sIHI7XG5cdFx0XHRyZXR1cm4gZSA9IGUgfHwgaSwgL15odHRwcz86XFwvXFwvLy50ZXN0KCB0ICkgPyB0IDogL15cXC9cXC8vLnRlc3QoIHQgKSA/IGUucHJvdG9jb2wgKyB0IDogKG4gPSBlLmhvc3QgKyAoZS5wb3J0Lmxlbmd0aCA/IFwiOlwiICsgZS5wb3J0IDogXCJcIiksIDAgIT09IHQuaW5kZXhPZiggXCIvXCIgKSAmJiAoKHIgPSBlLnBhdGhuYW1lLnNwbGl0KCBcIi9cIiApKS5wb3AoKSwgci5wdXNoKCB0ICksIHQgPSBcIi9cIiArIHIuam9pbiggXCIvXCIgKSksIFtcblx0XHRcdFx0ZS5wcm90b2NvbCxcblx0XHRcdFx0XCIvL1wiLFxuXHRcdFx0XHRuLFxuXHRcdFx0XHR0XG5cdFx0XHRdLmpvaW4oIFwiXCIgKSlcblx0XHR9XG5cblx0XHR0LmV4cG9ydHMgPSB7XG5cdFx0XHRhYnNvbHV0aXplOiBzLFxuXHRcdFx0Z2V0Q2Fub25pY2FsVVJMOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0Zm9yICggdmFyIHQsIGUgPSByLmdldEVsZW1lbnRzQnlUYWdOYW1lKCBcImxpbmtcIiApLCBuID0gMDsgZVsgbiBdOyBuICsrICkge1xuXHRcdFx0XHRcdGlmICggXCJjYW5vbmljYWxcIiA9PSAodCA9IGVbIG4gXSkucmVsICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHMoIHQuaHJlZiApXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Z2V0U2NyZWVuTmFtZUZyb21QYWdlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0Zm9yIChcblx0XHRcdFx0XHR2YXIgdCwgZSwgbiwgaSA9IFtcblx0XHRcdFx0XHRcdHIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIFwiYVwiICksXG5cdFx0XHRcdFx0XHRyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCBcImxpbmtcIiApXG5cdFx0XHRcdFx0XSwgcyA9IDAsIGEgPSAwLCB1ID0gL1xcYm1lXFxiLzsgdCA9IGlbIHMgXTsgcyArK1xuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRmb3IgKCBhID0gMDsgZSA9IHRbIGEgXTsgYSArKyApIHtcblx0XHRcdFx0XHRcdGlmICggdS50ZXN0KCBlLnJlbCApICYmIChuID0gby5zY3JlZW5OYW1lKCBlLmhyZWYgKSkgKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBuXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDggKSwgaSA9IC9eW14jP10qXFwuKGdvdnxtaWwpKDpcXGQrKT8oWyM/XS4qKT8kL2ksIG8gPSB7fTtcblxuXHRcdGZ1bmN0aW9uIHMoIHQgKSB7XG5cdFx0XHRyZXR1cm4gdCBpbiBvID8gb1sgdCBdIDogb1sgdCBdID0gaS50ZXN0KCB0IClcblx0XHR9XG5cblx0XHR0LmV4cG9ydHMgPSB7XG5cdFx0XHRpc1VybFNlbnNpdGl2ZTogcyxcblx0XHRcdGlzSG9zdFBhZ2VTZW5zaXRpdmU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gcyggci5ob3N0IClcblx0XHRcdH1cblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMjAgKSwgaSA9IG4oIDU0ICksIG8gPSBuKCAxMSApLCBzID0gbiggMjEgKSwgYSA9IG4oIDAgKSwgdSA9IG4oIDkgKS5nZXQoIFwic2NyaWJlQ2FsbGJhY2tcIiApLFxuXHRcdFx0YyA9IDIwODMsIGQgPSBbXSwgZiA9IG8udXJsKCBzLkNMSUVOVF9FVkVOVF9FTkRQT0lOVCwge1xuXHRcdFx0XHRkbnQ6IDAsXG5cdFx0XHRcdGw6IFwiXCJcblx0XHRcdH0gKSwgbCA9IGVuY29kZVVSSUNvbXBvbmVudCggZiApLmxlbmd0aDtcblxuXHRcdGZ1bmN0aW9uIGgoIHQsIGUsIG4sIHIgKSB7XG5cdFx0XHR2YXIgaSA9ICFhLmlzT2JqZWN0KCB0ICksIG8gPSAhIWUgJiYgIWEuaXNPYmplY3QoIGUgKTtcblx0XHRcdGkgfHwgbyB8fCAodSAmJiB1KCBhcmd1bWVudHMgKSwgcCggcy5mb3JtYXRDbGllbnRFdmVudE5hbWVzcGFjZSggdCApLCBzLmZvcm1hdENsaWVudEV2ZW50RGF0YSggZSwgbiwgciApLCBzLkNMSUVOVF9FVkVOVF9FTkRQT0lOVCApKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHAoIHQsIGUsIG4gKSB7XG5cdFx0XHR2YXIgciwgdTtcblx0XHRcdG4gJiYgYS5pc09iamVjdCggdCApICYmIGEuaXNPYmplY3QoIGUgKSAmJiAoaS5sb2coIHQsIGUgKSwgciA9IHMuZmxhdHRlbkNsaWVudEV2ZW50UGF5bG9hZCggdCwgZSApLCB1ID0geyBsOiBzLnN0cmluZ2lmeSggciApIH0sIHMubm90aWNlU2VlbiggdCApICYmICh1Lm5vdGljZV9zZWVuID0gITApLCByLmRudCAmJiAodS5kbnQgPSAxKSwgdyggby51cmwoIG4sIHUgKSApKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG0oIHQsIGUsIG4sIHIgKSB7XG5cdFx0XHR2YXIgaSA9ICFhLmlzT2JqZWN0KCB0ICksIG8gPSAhIWUgJiYgIWEuaXNPYmplY3QoIGUgKTtcblx0XHRcdGlmICggIWkgJiYgIW8gKSB7XG5cdFx0XHRcdHJldHVybiB2KCBzLmZsYXR0ZW5DbGllbnRFdmVudFBheWxvYWQoIHMuZm9ybWF0Q2xpZW50RXZlbnROYW1lc3BhY2UoIHQgKSwgcy5mb3JtYXRDbGllbnRFdmVudERhdGEoIGUsIG4sIHIgKSApIClcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiB2KCB0ICkge1xuXHRcdFx0cmV0dXJuIGQucHVzaCggdCApLCBkXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZyggdCApIHtcblx0XHRcdHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoIHQgKS5sZW5ndGggKyAzXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdyggdCApIHtcblx0XHRcdHJldHVybiAobmV3IEltYWdlKS5zcmMgPSB0XG5cdFx0fVxuXG5cdFx0dC5leHBvcnRzID0ge1xuXHRcdFx0Y2FuRmx1c2hPbmVJdGVtOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUgPSBnKCBzLnN0cmluZ2lmeSggdCApICk7XG5cdFx0XHRcdHJldHVybiBsICsgZSA8IGNcblx0XHRcdH0sXG5cdFx0XHRfZW5xdWV1ZVJhd09iamVjdDogdixcblx0XHRcdHNjcmliZTogcCxcblx0XHRcdGNsaWVudEV2ZW50OiBoLFxuXHRcdFx0Y2xpZW50RXZlbnQyOiBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHRcdFx0cmV0dXJuIGgoIHQsIGUsIG4sIDIgKVxuXHRcdFx0fSxcblx0XHRcdGVucXVldWVDbGllbnRFdmVudDogbSxcblx0XHRcdGZsdXNoQ2xpZW50RXZlbnRzOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHQ7XG5cdFx0XHRcdHJldHVybiBkLmxlbmd0aCA+IDEgJiYgbSgge1xuXHRcdFx0XHRcdHBhZ2U6IFwid2lkZ2V0c19qc1wiLFxuXHRcdFx0XHRcdGNvbXBvbmVudDogXCJzY3JpYmVfcGl4ZWxcIixcblx0XHRcdFx0XHRhY3Rpb246IFwiYmF0Y2hfbG9nXCJcblx0XHRcdFx0fSwge30gKSwgdCA9IGQsIGQgPSBbXSwgdC5yZWR1Y2UoIGZ1bmN0aW9uKCBlLCBuLCByICkge1xuXHRcdFx0XHRcdHZhciBpID0gZS5sZW5ndGgsIG8gPSBpICYmIGVbIGkgLSAxIF07XG5cdFx0XHRcdFx0cmV0dXJuIHIgKyAxID09IHQubGVuZ3RoICYmIG4uZXZlbnRfbmFtZXNwYWNlICYmIFwiYmF0Y2hfbG9nXCIgPT0gbi5ldmVudF9uYW1lc3BhY2UuYWN0aW9uICYmIChuLm1lc3NhZ2UgPSBbXG5cdFx0XHRcdFx0XHRcImVudHJpZXM6XCIgKyByLFxuXHRcdFx0XHRcdFx0XCJyZXF1ZXN0czpcIiArIGlcblx0XHRcdFx0XHRdLmpvaW4oIFwiL1wiICkpLCBmdW5jdGlvbiB0KCBlICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIEFycmF5LmlzQXJyYXkoIGUgKSB8fCAoZSA9IFtlXSksIGUucmVkdWNlKCBmdW5jdGlvbiggZSwgbiApIHtcblx0XHRcdFx0XHRcdFx0dmFyIHIsIGkgPSBzLnN0cmluZ2lmeSggbiApLCBvID0gZyggaSApO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gbCArIG8gPCBjID8gZSA9IGUuY29uY2F0KCBpICkgOiAociA9IHMuc3BsaXRMb2dFbnRyeSggbiApKS5sZW5ndGggPiAxICYmIChlID0gZS5jb25jYXQoIHQoIHIgKSApKSwgZVxuXHRcdFx0XHRcdFx0fSwgW10gKVxuXHRcdFx0XHRcdH0oIG4gKS5mb3JFYWNoKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRcdHZhciBuID0gZyggdCApO1xuXHRcdFx0XHRcdFx0KCFvIHx8IG8udXJsTGVuZ3RoICsgbiA+IGMpICYmIChvID0ge1xuXHRcdFx0XHRcdFx0XHR1cmxMZW5ndGg6IGwsXG5cdFx0XHRcdFx0XHRcdGl0ZW1zOiBbXVxuXHRcdFx0XHRcdFx0fSwgZS5wdXNoKCBvICkpLCBvLnVybExlbmd0aCArPSBuLCBvLml0ZW1zLnB1c2goIHQgKVxuXHRcdFx0XHRcdH0gKSwgZVxuXHRcdFx0XHR9LCBbXSApLm1hcCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0dmFyIGUgPSB7IGw6IHQuaXRlbXMgfTtcblx0XHRcdFx0XHRyZXR1cm4gci5lbmFibGVkKCkgJiYgKGUuZG50ID0gMSksIHcoIG8udXJsKCBzLkNMSUVOVF9FVkVOVF9FTkRQT0lOVCwgZSApIClcblx0XHRcdFx0fSApXG5cdFx0XHR9LFxuXHRcdFx0aW50ZXJhY3Rpb246IGZ1bmN0aW9uKCB0LCBlLCBuLCByICkge1xuXHRcdFx0XHR2YXIgaSA9IHMuZXh0cmFjdFRlcm1zRnJvbURPTSggdC50YXJnZXQgfHwgdC5zcmNFbGVtZW50ICk7XG5cdFx0XHRcdGkuYWN0aW9uID0gciB8fCBcImNsaWNrXCIsIGgoIGksIGUsIG4gKVxuXHRcdFx0fVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAwICksIGkgPSBuKCA0MyApO1xuXHRcdHQuZXhwb3J0cyA9IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0cmV0dXJuIGkoIHQsIGUgKSA/IFt0XSA6IHIudG9SZWFsQXJyYXkoIHQucXVlcnlTZWxlY3RvckFsbCggZSApIClcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdHQuZXhwb3J0cyA9IGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdFx0Zm9yICggdmFyIHIsIGkgPSAwOyBpIDwgdC5sZW5ndGg7IGkgKysgKSB7XG5cdFx0XHRcdGlmICggciA9IGUuY2FsbCggbiwgdFsgaSBdLCBpLCB0ICkgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gTWF0aC5mbG9vciggKyBuZXcgRGF0ZSAvIDllNSApXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDEyICk7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHR2YXIgZSwgbjtcblx0XHRcdHJldHVybiBlID0gdC5oZWFkZXJzICYmIHQuaGVhZGVycy5zdGF0dXMsICEobiA9IHQgJiYgIXQuZXJyb3IgJiYgMjAwID09PSBlKSAmJiB0LmhlYWRlcnMgJiYgdC5oZWFkZXJzLm1lc3NhZ2UgJiYgci5wdWJsaWNFcnJvciggdC5oZWFkZXJzLm1lc3NhZ2UgKSwge1xuXHRcdFx0XHRzdWNjZXNzOiBuLFxuXHRcdFx0XHRyZXNwOiB0XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDM3ICksIGkgPSBuKCAyMSApO1xuXHRcdHQuZXhwb3J0cyA9IGZ1bmN0aW9uKCB0LCBlLCBuLCBvICkge1xuXHRcdFx0ci5zY3JpYmUoIGkuZm9ybWF0Q2xpZW50RXZlbnROYW1lc3BhY2UoIHtcblx0XHRcdFx0Y2xpZW50OiBcInRmd1wiLFxuXHRcdFx0XHRwYWdlOiBcImRkZ1wiLFxuXHRcdFx0XHRzZWN0aW9uOiB0LFxuXHRcdFx0XHRhY3Rpb246IFwiZXhwZXJpbWVudFwiXG5cdFx0XHR9ICksIHtcblx0XHRcdFx0ZXhwZXJpbWVudF9rZXk6IHQsXG5cdFx0XHRcdGJ1Y2tldDogZSxcblx0XHRcdFx0dmVyc2lvbjogbixcblx0XHRcdFx0ZGF0YTogb1xuXHRcdFx0fSwgITAgKVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIsIGkgPSBuKCAzMCApLCBvID0gMDtcblxuXHRcdGZ1bmN0aW9uIHMoKSB7XG5cdFx0XHRyICYmIHIubGVuZ3RoID09PSBvICYmIChpLmVtaXR0ZXIudHJpZ2dlciggaS5BTExfV0lER0VUU19BTkRfSU1BR0VTX0xPQURFRCwgciApLCByID0gbnVsbClcblx0XHR9XG5cblx0XHRpLmVtaXR0ZXIuYmluZCggaS5BTExfV0lER0VUU19SRU5ERVJfRU5ELCBmdW5jdGlvbiggdCApIHtcblx0XHRcdHIgPSB0LndpZGdldHMsIHMoKVxuXHRcdH0gKSwgdC5leHBvcnRzID0ge1xuXHRcdFx0cmVwb3J0SW1hZ2VzTG9hZEZvckFXaWRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRvICsrLCBzKClcblx0XHRcdH1cblx0XHR9XG5cdH0sICwgLCAsICwgLCAsICwgLCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciwgaSA9IG4oIDIgKSwgbyA9IG4oIDQgKSwgcyA9IG4oIDk4ICksIGEgPSBuKCA0OSApLCB1ID0gbiggOSApLCBjID0gbiggOTkgKSwgZCA9IG4oIDI1ICksIGYgPSBuKCAxMDIgKSxcblx0XHRcdGwgPSBuKCAxNTcgKSwgaCA9IG4oIDE2NSApLCBwID0gbiggMTY2ICksIG0gPSBuKCAzMCApLCB2ID0gbiggMzEgKTtcblx0XHRuKCAxNjcgKSwgbS5lbWl0dGVyLnRyaWdnZXIoIG0uU1RBUlQgKSwgdS5zZXQoIFwid2lkZ2V0cy5pbml0XCIsICEwICksIGEuc2V0KCBcImluaXRcIiwgITAgKSwgcCgpLCByID0gbmV3IGksIHMuZXhwb3NlUmVhZHlQcm9taXNlKCByLnByb21pc2UsIGEuYmFzZSwgXCJfZVwiICksIGEuc2V0KCBcIndpZGdldHNcIiwgbCApLCBhLnNldCggXCJ3aWRnZXRzLmxvYWRcIiwgZi5sb2FkICksIGEuc2V0KCBcImV2ZW50c1wiLCBkICksIGgoIGZ1bmN0aW9uKCkge1xuXHRcdFx0di5sb2FkKCksIHIucmVzb2x2ZSggYS5iYXNlICksIGMuYXR0YWNoVG8oIG8gKSwgZi5sb2FkUGFnZSgpXG5cdFx0fSApXG5cdH0sIGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdHQuZXhwb3J0cyA9IG5hdmlnYXRvclxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDcgKTtcblx0XHR0LmV4cG9ydHMgPSB7XG5cdFx0XHRleHBvc2VSZWFkeVByb21pc2U6IGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdFx0XHRlLnJlYWR5ID0gciggdC50aGVuLCB0ICksIG4gJiYgQXJyYXkuaXNBcnJheSggZVsgbiBdICkgJiYgKGVbIG4gXS5mb3JFYWNoKCByKCB0LnRoZW4sIHQgKSApLCBkZWxldGUgZVsgbiBdKVxuXHRcdFx0fVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCA4ICksIGkgPSBuKCAzNiApLCBvID0gbiggMzQgKSwgcyA9IG4oIDc0ICksIGEgPSBuKCAzICk7XG5cblx0XHRmdW5jdGlvbiB1KCB0ICkge1xuXHRcdFx0dmFyIGUsIG4sIHU7XG5cdFx0XHR0LmFsdEtleSB8fCB0Lm1ldGFLZXkgfHwgdC5zaGlmdEtleSB8fCAoZSA9IG8uY2xvc2VzdCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiBcIkFcIiA9PT0gdC50YWdOYW1lIHx8IFwiQVJFQVwiID09PSB0LnRhZ05hbWVcblx0XHRcdH0sIHQudGFyZ2V0ICkpICYmIGEuaXNJbnRlbnRVUkwoIGUuaHJlZiApICYmIChuID0gKG4gPSAobiA9IFtcblx0XHRcdFx0dSA9IGUuaHJlZixcblx0XHRcdFx0XCJvcmlnaW5hbF9yZWZlcmVyPVwiICsgci5ocmVmXG5cdFx0XHRdLmpvaW4oIC0gMSA9PSB1LmluZGV4T2YoIFwiP1wiICkgPyBcIj9cIiA6IFwiJlwiICkpLnJlcGxhY2UoIC9eaHR0cFs6XS8sIFwiaHR0cHM6XCIgKSkucmVwbGFjZSggL15cXC9cXC8vLCBcImh0dHBzOi8vXCIgKSwgcy5vcGVuKCBuLCBlICksIGkucHJldmVudERlZmF1bHQoIHQgKSlcblx0XHR9XG5cblx0XHR0LmV4cG9ydHMgPSB7XG5cdFx0XHRhdHRhY2hUbzogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHQuYWRkRXZlbnRMaXN0ZW5lciggXCJjbGlja1wiLCB1LCAhMSApXG5cdFx0XHR9XG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciwgaSA9IG4oIDEgKSwgbyA9IG4oIDEwMSApLCBzID0gbiggMzYgKSwgYSA9IG4oIDM0ICksIHUgPSBuKCAyMiApLCBjID0gbiggMyApLCBkID0gbiggMjQgKSwgZiA9IG4oIDAgKSxcblx0XHRcdGwgPSBcImludGVudF9cIiwgaCA9IGkuc2NyZWVuLndpZHRoLCBwID0gaS5zY3JlZW4uaGVpZ2h0O1xuXG5cdFx0ZnVuY3Rpb24gbSggdCwgZSApIHtcblx0XHRcdGZ1bmN0aW9uIG4oIHQgKSB7XG5cdFx0XHRcdHJldHVybiBNYXRoLnJvdW5kKCB0IC8gMiApXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0ID4gZSA/IHtcblx0XHRcdFx0Y29vcmRpbmF0ZTogMCxcblx0XHRcdFx0c2l6ZTogZVxuXHRcdFx0fSA6IHtcblx0XHRcdFx0Y29vcmRpbmF0ZTogbiggZSApIC0gbiggdCApLFxuXHRcdFx0XHRzaXplOiB0XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdiggdCwgZSwgbiApIHtcblx0XHRcdHZhciBpLCBvO1xuXHRcdFx0ZSA9IHIucGFyc2UoIGUgKSwgbiA9IG4gfHwge30sIGkgPSBtKCBlLndpZHRoLCBuLndpZHRoIHx8IGggKSwgZS5sZWZ0ID0gaS5jb29yZGluYXRlLCBlLndpZHRoID0gaS5zaXplLCBvID0gbSggZS5oZWlnaHQsIG4uaGVpZ2h0IHx8IHAgKSwgZS50b3AgPSBvLmNvb3JkaW5hdGUsIGUuaGVpZ2h0ID0gby5zaXplLCB0aGlzLndpbiA9IHQsIHRoaXMuZmVhdHVyZXMgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUgPSBbXTtcblx0XHRcdFx0cmV0dXJuIGYuZm9ySW4oIHQsIGZ1bmN0aW9uKCB0LCBuICkge1xuXHRcdFx0XHRcdGUucHVzaCggdCArIFwiPVwiICsgbiApXG5cdFx0XHRcdH0gKSwgZS5qb2luKCBcIixcIiApXG5cdFx0XHR9KCBlIClcblx0XHR9XG5cblx0XHRyID0gKG5ldyBvKS5kZWZhdWx0cygge1xuXHRcdFx0d2lkdGg6IDU1MCxcblx0XHRcdGhlaWdodDogNTIwLFxuXHRcdFx0cGVyc29uYWxiYXI6IFwiMFwiLFxuXHRcdFx0dG9vbGJhcjogXCIwXCIsXG5cdFx0XHRsb2NhdGlvbjogXCIxXCIsXG5cdFx0XHRzY3JvbGxiYXJzOiBcIjFcIixcblx0XHRcdHJlc2l6YWJsZTogXCIxXCJcblx0XHR9ICksIHYucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdHZhciBuID0gZSAmJiBcImNsaWNrXCIgPT0gZS50eXBlICYmIGEuY2xvc2VzdCggXCJhXCIsIGUudGFyZ2V0ICksXG5cdFx0XHRcdHIgPSBlICYmIChlLmFsdEtleSB8fCBlLm1ldGFLZXkgfHwgZS5zaGlmdEtleSksIGkgPSBuICYmICh1LmlvcygpIHx8IHUuYW5kcm9pZCgpKTtcblx0XHRcdGlmICggYy5pc1R3aXR0ZXJVUkwoIHQgKSApIHtcblx0XHRcdFx0cmV0dXJuIHIgfHwgaSA/IHRoaXMgOiAodGhpcy5uYW1lID0gbCArIGQuZ2VuZXJhdGUoKSwgdGhpcy5wb3B1cCA9IHRoaXMud2luLm9wZW4oIHQsIHRoaXMubmFtZSwgdGhpcy5mZWF0dXJlcyApLCBlICYmIHMucHJldmVudERlZmF1bHQoIGUgKSwgdGhpcylcblx0XHRcdH1cblx0XHR9LCB2Lm9wZW4gPSBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHRcdHJldHVybiBuZXcgdiggaSwgZSApLm9wZW4oIHQsIG4gKVxuXHRcdH0sIHQuZXhwb3J0cyA9IHZcblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCA1ICksIGkgPSBuKCAwICk7XG5cblx0XHRmdW5jdGlvbiBvKCkge1xuXHRcdFx0dGhpcy5hc3NlcnRpb25zID0gW10sIHRoaXMuX2RlZmF1bHRzID0ge31cblx0XHR9XG5cblx0XHRvLnByb3RvdHlwZS5hc3NlcnQgPSBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdHJldHVybiB0aGlzLmFzc2VydGlvbnMucHVzaCgge1xuXHRcdFx0XHRmbjogdCxcblx0XHRcdFx0bXNnOiBlIHx8IFwiYXNzZXJ0aW9uIGZhaWxlZFwiXG5cdFx0XHR9ICksIHRoaXNcblx0XHR9LCBvLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX2RlZmF1bHRzID0gdCB8fCB0aGlzLl9kZWZhdWx0cywgdGhpc1xuXHRcdH0sIG8ucHJvdG90eXBlLnJlcXVpcmUgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdHZhciBlID0gdGhpcztcblx0XHRcdHJldHVybiAodCA9IEFycmF5LmlzQXJyYXkoIHQgKSA/IHQgOiBpLnRvUmVhbEFycmF5KCBhcmd1bWVudHMgKSkuZm9yRWFjaCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdGUuYXNzZXJ0KCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gci5oYXNWYWx1ZSggZVsgdCBdIClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0oIHQgKSwgXCJyZXF1aXJlZDogXCIgKyB0IClcblx0XHRcdH0gKSwgdGhpc1xuXHRcdH0sIG8ucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHR2YXIgZSwgbjtcblx0XHRcdGlmICggZSA9IGkuYXVnKCB7fSwgdGhpcy5fZGVmYXVsdHMsIHQgfHwge30gKSwgKG4gPSB0aGlzLmFzc2VydGlvbnMucmVkdWNlKCBmdW5jdGlvbiggdCwgbiApIHtcblx0XHRcdFx0cmV0dXJuIG4uZm4oIGUgKSB8fCB0LnB1c2goIG4ubXNnICksIHRcblx0XHRcdH0sIFtdICkpLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggbi5qb2luKCBcIlxcblwiICkgKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBlXG5cdFx0fSwgdC5leHBvcnRzID0gb1xuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDQgKSwgaSA9IG4oIDYgKSwgbyA9IG4oIDIzICksIHMgPSBuKCA1MiApLCBhID0gbiggMzUgKSwgdSA9IG4oIDkgKSwgYyA9IG4oIDM3ICksIGQgPSBuKCAyNSApLFxuXHRcdFx0ZiA9IG4oIDUgKSwgbCA9IG4oIDAgKSwgaCA9IG4oIDMxICksIHAgPSBuKCAxMTkgKSwgbSA9IG4oIDMwICk7XG5cblx0XHRmdW5jdGlvbiB2KCkge1xuXHRcdFx0dmFyIHQgPSBhLnZhbCggXCJ3aWRnZXRzOmF1dG9sb2FkXCIgKSB8fCAhMDtcblx0XHRcdHJldHVybiAhZi5pc0ZhbHNlVmFsdWUoIHQgKSAmJiAoZi5pc1RydXRoVmFsdWUoIHQgKSA/IHIuYm9keSA6IHIucXVlcnlTZWxlY3RvckFsbCggdCApKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGcoIHQsIGUgKSB7XG5cdFx0XHR2YXIgbiwgaTtcblx0XHRcdHJldHVybiB0ID0gKHQgPSB0IHx8IHIuYm9keSkubGVuZ3RoID8gbC50b1JlYWxBcnJheSggdCApIDogW3RdLCBjLnBhdXNlKCksIGkgPSBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0cmV0dXJuIHQucmVkdWNlKCBmdW5jdGlvbiggdCwgbiApIHtcblx0XHRcdFx0XHRyZXR1cm4gdC5jb25jYXQoIHAucmVkdWNlKCBmdW5jdGlvbiggdCwgciApIHtcblx0XHRcdFx0XHRcdHJldHVybiB0LmNvbmNhdCggciggbiwgZSApIClcblx0XHRcdFx0XHR9LCBbXSApIClcblx0XHRcdFx0fSwgW10gKVxuXHRcdFx0fSggdCwgZSApLCBtLmVtaXR0ZXIudHJpZ2dlciggbS5BTExfV0lER0VUU19SRU5ERVJfU1RBUlQsIHsgd2lkZ2V0czogaSB9ICksIG4gPSBvLmFsbFJlc29sdmVkKCBpLm1hcCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiBzLmFkZFdpZGdldCggdCApXG5cdFx0XHR9ICkgKS50aGVuKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0ZC50cmlnZ2VyKCBcImxvYWRlZFwiLCB7IHdpZGdldHM6IHQgfSApLCB0ICYmIHQubGVuZ3RoICYmIG0uZW1pdHRlci50cmlnZ2VyKCBtLkFMTF9XSURHRVRTX1JFTkRFUl9FTkQsIHsgd2lkZ2V0czogdCB9IClcblx0XHRcdH0gKSwgby5hbHdheXMoIG4sIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjLnJlc3VtZSgpXG5cdFx0XHR9ICksIG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiB3KCB0ICkge1xuXHRcdFx0cmV0dXJuIGguZ2V0RXhwZXJpbWVudHMoKS50aGVuKCBmdW5jdGlvbiggZSApIHtcblx0XHRcdFx0cmV0dXJuIGcoIHQsIGUgKVxuXHRcdFx0fSApXG5cdFx0fVxuXG5cdFx0dC5leHBvcnRzID0ge1xuXHRcdFx0bG9hZDogdyxcblx0XHRcdGxvYWRQYWdlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHQgPSB2KCk7XG5cdFx0XHRcdHJldHVybiAhMSA9PT0gdCA/IGkucmVzb2x2ZSgpIDogKHUuc2V0KCBcIndpZGdldHMubG9hZGVkXCIsICEwICksIHcoIHQgKSlcblx0XHRcdH0sXG5cdFx0XHRfZ2V0UGFnZUxvYWRUYXJnZXQ6IHZcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMTAgKSwgaSA9IG4oIDE4ICksIG8gPSBuKCAyNSApLCBzID0gbiggNTMgKSwgYSA9IG4oIDYgKSwgdSA9IG4oIDIzICk7XG5cblx0XHRmdW5jdGlvbiBjKCB0LCBlICkge1xuXHRcdFx0dGhpcy5fd2lkZ2V0ID0gbnVsbCwgdGhpcy5fc2FuZGJveCA9IG51bGwsIHRoaXMuX2h5ZHJhdGVkID0gITEsIHRoaXMuX2luc2VydGVkSW50b0RvbSA9ICExLCB0aGlzLl9TYW5kYm94ID0gdC5TYW5kYm94LCB0aGlzLl9mYWN0b3J5ID0gdC5mYWN0b3J5LCB0aGlzLl93aWRnZXRQYXJhbXMgPSB0LnBhcmFtZXRlcnMsIHRoaXMuX3Jlc29sdmUgPSBlLCB0aGlzLl9jbGFzc05hbWUgPSB0LmNsYXNzTmFtZSwgdGhpcy5fcmVuZGVyZWRDbGFzc05hbWUgPSB0LmNsYXNzTmFtZSArIFwiLXJlbmRlcmVkXCIsIHRoaXMuX2Vycm9yQ2xhc3NOYW1lID0gdC5jbGFzc05hbWUgKyBcIi1lcnJvclwiLCB0aGlzLl9zcmNFbCA9IHQuc3JjRWwsIHRoaXMuX3RhcmdldEdsb2JhbCA9IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRyZXR1cm4gKHQuc3JjRWwgfHwgdC50YXJnZXRFbCkub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlld1xuXHRcdFx0fSggdCApLCB0aGlzLl9zYW5kYm94V3JhcHBlckVsID0gdC5vcHRpb25zID8gdC5vcHRpb25zLnNhbmRib3hXcmFwcGVyRWwgOiBudWxsLCB0aGlzLl9pbnNlcnRpb25TdHJhdGVneSA9IGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0XHR2YXIgbiwgciA9IHQuc3JjRWwsIGkgPSB0LnRhcmdldEVsLCBvID0gdC5vcHRpb25zID8gdC5vcHRpb25zLnNhbmRib3hXcmFwcGVyRWwgOiBudWxsO1xuXHRcdFx0XHRvID8gKG8uYXBwZW5kQ2hpbGQoIGUgKSwgbiA9IG8pIDogbiA9IGUsIHIgPyBpLmluc2VydEJlZm9yZSggbiwgciApIDogaS5hcHBlbmRDaGlsZCggbiApXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Yy5mcm9tUmF3VGFzayA9IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0cmV0dXJuIG5ldyBjKCB0LmlucHV0LCB0LnRhc2tEb25lRGVmZXJyZWQucmVzb2x2ZSApXG5cdFx0fSwgYy5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHQgPSB0aGlzLCBlID0gbmV3IHRoaXMuX1NhbmRib3goIHRoaXMuX3RhcmdldEdsb2JhbCApO1xuXHRcdFx0cmV0dXJuIHRoaXMuX2ZhY3RvcnkoIHRoaXMuX3dpZGdldFBhcmFtcywgZSApLnRoZW4oIGZ1bmN0aW9uKCBuICkge1xuXHRcdFx0XHRyZXR1cm4gdC5fd2lkZ2V0ID0gbiwgdC5fc2FuZGJveCA9IGUsIG4uX3NhbmRib3hXcmFwcGVyRWwgPSB0Ll9zYW5kYm94V3JhcHBlckVsLCBuXG5cdFx0XHR9IClcblx0XHR9LCBjLnByb3RvdHlwZS5pbnNlcnRJbnRvRG9tID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdCA9IHRoaXM7XG5cdFx0XHRyZXR1cm4gdGhpcy5fd2lkZ2V0ID8gdGhpcy5fc2FuZGJveC5pbnNlcnQoIHRoaXMuX3dpZGdldC5pZCwge1xuXHRcdFx0XHRjbGFzczogW1xuXHRcdFx0XHRcdHRoaXMuX2NsYXNzTmFtZSxcblx0XHRcdFx0XHR0aGlzLl9yZW5kZXJlZENsYXNzTmFtZVxuXHRcdFx0XHRdLmpvaW4oIFwiIFwiIClcblx0XHRcdH0sIG51bGwsIHRoaXMuX2luc2VydGlvblN0cmF0ZWd5ICkudGhlbiggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHQuX2luc2VydGVkSW50b0RvbSA9ICEwXG5cdFx0XHR9ICkgOiBhLnJlamVjdCggbmV3IEVycm9yKCBcImNhbm5vdCBpbnNlcnQgd2lkZ2V0IGludG8gRE9NIGJlZm9yZSBpdCBpcyBpbml0aWFsaXplZFwiICkgKVxuXHRcdH0sIGMucHJvdG90eXBlLmh5ZHJhdGUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciB0ID0gdGhpcztcblx0XHRcdHJldHVybiB0aGlzLl93aWRnZXQgPyB0aGlzLl93aWRnZXQuaHlkcmF0ZSgpLnRoZW4oIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR0Ll9oeWRyYXRlZCA9ICEwXG5cdFx0XHR9ICkgOiBhLnJlamVjdCggbmV3IEVycm9yKCBcImNhbm5vdCBoeWRyYXRlIHdpZGdldCBiZWZvcmUgaXQgaXMgaW5pdGlhbGl6ZWRcIiApIClcblx0XHR9LCBjLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciB0ID0gdGhpcztcblxuXHRcdFx0ZnVuY3Rpb24gZSggZSApIHtcblx0XHRcdFx0cmV0dXJuIHMoIHQuX3NhbmRib3guc2FuZGJveEVsICkudGhlbiggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGEucmVqZWN0KCBlIClcblx0XHRcdFx0fSApXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzLl9oeWRyYXRlZCA/IHRoaXMuX2luc2VydGVkSW50b0RvbSA/IHQuX3dpZGdldC5yZW5kZXIoIHQuX3NhbmRib3ggKS50aGVuKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHQuX3NhbmRib3gub25SZXNpemUoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiB0Ll93aWRnZXQucmVzaXplKCkudGhlbiggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRvLnRyaWdnZXIoIFwicmVzaXplXCIsIHsgdGFyZ2V0OiB0Ll9zYW5kYm94LnNhbmRib3hFbCB9IClcblx0XHRcdFx0XHR9IClcblx0XHRcdFx0fSApLCB0Ll93aWRnZXQuc2hvdygpXG5cdFx0XHR9ICkudGhlbiggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBzKCB0Ll9zcmNFbCApLnRoZW4oIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiB0Ll9zYW5kYm94LnNhbmRib3hFbFxuXHRcdFx0XHR9IClcblx0XHRcdH0sIGUgKSA6IGUoIG5ldyBFcnJvciggXCJjYW5ub3QgcmVuZGVyIHdpZGdldCBiZWZvcmUgRE9NIGluc2VydGlvblwiICkgKSA6IGUoIG5ldyBFcnJvciggXCJjYW5ub3QgcmVuZGVyIHdpZGdldCBiZWZvcmUgaHlkcmF0aW9uXCIgKSApXG5cdFx0fSwgYy5wcm90b3R5cGUuZmFpbCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHQgPSB0aGlzO1xuXHRcdFx0cmV0dXJuIHRoaXMuX3NyY0VsID8gdS5hbHdheXMoIGkud3JpdGUoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyLmFkZCggdC5fc3JjRWwsIHQuX2Vycm9yQ2xhc3NOYW1lIClcblx0XHRcdH0gKSwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdG8udHJpZ2dlciggXCJyZW5kZXJlZFwiLCB7IHRhcmdldDogdC5fc3JjRWwgfSApLCB0Ll9yZXNvbHZlKCB0Ll9zcmNFbCApXG5cdFx0XHR9ICkgOiAodC5fcmVzb2x2ZSgpLCBhLnJlc29sdmUoKSlcblx0XHR9LCBjLnByb3RvdHlwZS5zdWNjZXNzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRvLnRyaWdnZXIoIFwicmVuZGVyZWRcIiwgeyB0YXJnZXQ6IHRoaXMuX3NhbmRib3guc2FuZGJveEVsIH0gKSwgdGhpcy5fcmVzb2x2ZSggdGhpcy5fc2FuZGJveC5zYW5kYm94RWwgKVxuXHRcdH0sIHQuZXhwb3J0cyA9IGNcblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHI7XG5cdFx0IWZ1bmN0aW9uKCkge1xuXHRcdFx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFx0XHR2YXIgaSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KCB0LCAxZTMgLyA2MCApXG5cdFx0XHR9O1xuXG5cdFx0XHRmdW5jdGlvbiBvKCkge1xuXHRcdFx0XHR0aGlzLmZyYW1lcyA9IFtdLCB0aGlzLmxhc3RJZCA9IDAsIHRoaXMucmFmID0gaSwgdGhpcy5iYXRjaCA9IHtcblx0XHRcdFx0XHRoYXNoOiB7fSxcblx0XHRcdFx0XHRyZWFkOiBbXSxcblx0XHRcdFx0XHR3cml0ZTogW10sXG5cdFx0XHRcdFx0bW9kZTogbnVsbFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdG8ucHJvdG90eXBlLnJlYWQgPSBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0dmFyIG4gPSB0aGlzLmFkZCggXCJyZWFkXCIsIHQsIGUgKSwgciA9IG4uaWQ7XG5cdFx0XHRcdHJldHVybiB0aGlzLmJhdGNoLnJlYWQucHVzaCggbi5pZCApLCBcInJlYWRpbmdcIiA9PT0gdGhpcy5iYXRjaC5tb2RlIHx8IHRoaXMuYmF0Y2guc2NoZWR1bGVkID8gciA6ICh0aGlzLnNjaGVkdWxlQmF0Y2goKSwgcilcblx0XHRcdH0sIG8ucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdHZhciBuID0gdGhpcy5hZGQoIFwid3JpdGVcIiwgdCwgZSApLCByID0gdGhpcy5iYXRjaC5tb2RlLCBpID0gbi5pZDtcblx0XHRcdFx0cmV0dXJuIHRoaXMuYmF0Y2gud3JpdGUucHVzaCggbi5pZCApLCBcIndyaXRpbmdcIiA9PT0gciB8fCBcInJlYWRpbmdcIiA9PT0gciB8fCB0aGlzLmJhdGNoLnNjaGVkdWxlZCA/IGkgOiAodGhpcy5zY2hlZHVsZUJhdGNoKCksIGkpXG5cdFx0XHR9LCBvLnByb3RvdHlwZS5kZWZlciA9IGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdFx0XHRcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQgJiYgKG4gPSBlLCBlID0gdCwgdCA9IDEpO1xuXHRcdFx0XHR2YXIgciA9IHRoaXMsIGkgPSB0IC0gMTtcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2NoZWR1bGUoIGksIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHIucnVuKCB7XG5cdFx0XHRcdFx0XHRmbjogZSxcblx0XHRcdFx0XHRcdGN0eDogblxuXHRcdFx0XHRcdH0gKVxuXHRcdFx0XHR9IClcblx0XHRcdH0sIG8ucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdGlmICggXCJmdW5jdGlvblwiID09IHR5cGVvZiB0ICkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNsZWFyRnJhbWUoIHQgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0ID0gTnVtYmVyKCB0ICk7XG5cdFx0XHRcdHZhciBlID0gdGhpcy5iYXRjaC5oYXNoWyB0IF07XG5cdFx0XHRcdGlmICggZSApIHtcblx0XHRcdFx0XHR2YXIgbiA9IHRoaXMuYmF0Y2hbIGUudHlwZSBdLCByID0gbi5pbmRleE9mKCB0ICk7XG5cdFx0XHRcdFx0ZGVsZXRlIHRoaXMuYmF0Y2guaGFzaFsgdCBdLCB+IHIgJiYgbi5zcGxpY2UoIHIsIDEgKVxuXHRcdFx0XHR9XG5cdFx0XHR9LCBvLnByb3RvdHlwZS5jbGVhckZyYW1lID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHZhciBlID0gdGhpcy5mcmFtZXMuaW5kZXhPZiggdCApO1xuXHRcdFx0XHR+IGUgJiYgdGhpcy5mcmFtZXMuc3BsaWNlKCBlLCAxIClcblx0XHRcdH0sIG8ucHJvdG90eXBlLnNjaGVkdWxlQmF0Y2ggPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHQgPSB0aGlzO1xuXHRcdFx0XHR0aGlzLnNjaGVkdWxlKCAwLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR0LmJhdGNoLnNjaGVkdWxlZCA9ICExLCB0LnJ1bkJhdGNoKClcblx0XHRcdFx0fSApLCB0aGlzLmJhdGNoLnNjaGVkdWxlZCA9ICEwXG5cdFx0XHR9LCBvLnByb3RvdHlwZS51bmlxdWVJZCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gKysgdGhpcy5sYXN0SWRcblx0XHRcdH0sIG8ucHJvdG90eXBlLmZsdXNoID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdGZvciAoIHZhciBlOyBlID0gdC5zaGlmdCgpOyApIHtcblx0XHRcdFx0XHR0aGlzLnJ1biggdGhpcy5iYXRjaC5oYXNoWyBlIF0gKVxuXHRcdFx0XHR9XG5cdFx0XHR9LCBvLnByb3RvdHlwZS5ydW5CYXRjaCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHRoaXMuYmF0Y2gubW9kZSA9IFwicmVhZGluZ1wiLCB0aGlzLmZsdXNoKCB0aGlzLmJhdGNoLnJlYWQgKSwgdGhpcy5iYXRjaC5tb2RlID0gXCJ3cml0aW5nXCIsIHRoaXMuZmx1c2goIHRoaXMuYmF0Y2gud3JpdGUgKSwgdGhpcy5iYXRjaC5tb2RlID0gbnVsbFxuXHRcdFx0XHR9IGNhdGNoICggdCApIHtcblx0XHRcdFx0XHR0aHJvdyB0aGlzLnJ1bkJhdGNoKCksIHRcblx0XHRcdFx0fVxuXHRcdFx0fSwgby5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0XHRcdHZhciByID0gdGhpcy51bmlxdWVJZCgpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5iYXRjaC5oYXNoWyByIF0gPSB7XG5cdFx0XHRcdFx0aWQ6IHIsXG5cdFx0XHRcdFx0Zm46IGUsXG5cdFx0XHRcdFx0Y3R4OiBuLFxuXHRcdFx0XHRcdHR5cGU6IHRcblx0XHRcdFx0fVxuXHRcdFx0fSwgby5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHZhciBlID0gdC5jdHggfHwgdGhpcywgbiA9IHQuZm47XG5cdFx0XHRcdGlmICggZGVsZXRlIHRoaXMuYmF0Y2guaGFzaFsgdC5pZCBdLCAhdGhpcy5vbkVycm9yICkge1xuXHRcdFx0XHRcdHJldHVybiBuLmNhbGwoIGUgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdG4uY2FsbCggZSApXG5cdFx0XHRcdH0gY2F0Y2ggKCB0ICkge1xuXHRcdFx0XHRcdHRoaXMub25FcnJvciggdCApXG5cdFx0XHRcdH1cblx0XHRcdH0sIG8ucHJvdG90eXBlLmxvb3AgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHQsIGUgPSB0aGlzLCBuID0gdGhpcy5yYWYsIHIgPSAhMTtcblxuXHRcdFx0XHRmdW5jdGlvbiBpKCkge1xuXHRcdFx0XHRcdHZhciB0ID0gZS5mcmFtZXMuc2hpZnQoKTtcblx0XHRcdFx0XHRlLmZyYW1lcy5sZW5ndGggPyBuKCBpICkgOiBlLmxvb3BpbmcgPSAhMSwgdCAmJiB0KClcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMubG9vcGluZyB8fCAodCA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHIgPSAhMCwgaSgpXG5cdFx0XHRcdH0sIDUwMCApLCBuKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyIHx8IChjbGVhclRpbWVvdXQoIHQgKSwgaSgpKVxuXHRcdFx0XHR9ICksIHRoaXMubG9vcGluZyA9ICEwKVxuXHRcdFx0fSwgby5wcm90b3R5cGUuc2NoZWR1bGUgPSBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZnJhbWVzWyB0IF0gPyB0aGlzLnNjaGVkdWxlKCB0ICsgMSwgZSApIDogKHRoaXMubG9vcCgpLCB0aGlzLmZyYW1lc1sgdCBdID0gZSlcblx0XHRcdH07XG5cdFx0XHR2YXIgcyA9IG5ldyBvO1xuXHRcdFx0dm9pZCAwICE9PSB0ICYmIHQuZXhwb3J0cyA/IHQuZXhwb3J0cyA9IHMgOiB2b2lkIDAgPT09IChyID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBzXG5cdFx0XHR9LmNhbGwoIGUsIG4sIGUsIHQgKSkgfHwgKHQuZXhwb3J0cyA9IHIpXG5cdFx0fSgpXG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggNDggKS5Qcm9taXNlO1xuXHRcdHQuZXhwb3J0cyA9IHIuX2FzYXBcblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIsIGksIG8sIHMgPSBuKCA0ICksIGEgPSBuKCAxICksIHUgPSBuKCAzMiApLCBjID0gbiggMjAgKSwgZCA9IG4oIDIgKSwgZiA9IG4oIDYgKSwgbCA9IG4oIDU0ICksIGggPSBuKCAyMSApLFxuXHRcdFx0cCA9IG4oIDAgKSwgbSA9IG4oIDI2ICksIHYgPSBuKCA5ICkuZ2V0KCBcInNjcmliZUNhbGxiYWNrXCIgKSwgZyA9IE1hdGguZmxvb3IoIDFlMyAqIE1hdGgucmFuZG9tKCkgKSArIFwiX1wiLFxuXHRcdFx0dyA9IFwicnVmb3VzLWZyYW1lLVwiICsgZyArIFwiLVwiLCB5ID0gXCJydWZvdXMtZm9ybS1cIiArIGcgKyBcIi1cIiwgYiA9IDAsIF8gPSAhMSwgRSA9IG5ldyBkO1xuXG5cdFx0ZnVuY3Rpb24geCgpIHtcblx0XHRcdHZhciB0ID0gby5jcmVhdGVFbGVtZW50KCBcImZvcm1cIiApLCBlID0gby5jcmVhdGVFbGVtZW50KCBcImlucHV0XCIgKSwgbiA9IG8uY3JlYXRlRWxlbWVudCggXCJpbnB1dFwiICk7XG5cdFx0XHRyZXR1cm4gYiArKywgdC5hY3Rpb24gPSBoLkNMSUVOVF9FVkVOVF9FTkRQT0lOVCwgdC5tZXRob2QgPSBcIlBPU1RcIiwgdC50YXJnZXQgPSB3ICsgYiwgdC5pZCA9IHkgKyBiLCBlLnR5cGUgPSBcImhpZGRlblwiLCBlLm5hbWUgPSBcImRudFwiLCBlLnZhbHVlID0gYy5lbmFibGVkKCksIG4udHlwZSA9IFwiaGlkZGVuXCIsIG4ubmFtZSA9IFwidGZ3X3JlZGlyZWN0XCIsIG4udmFsdWUgPSBoLlJVRk9VU19SRURJUkVDVCwgdC5hcHBlbmRDaGlsZCggZSApLCB0LmFwcGVuZENoaWxkKCBuICksIHRcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBUKCkge1xuXHRcdFx0dmFyIHQgPSB3ICsgYjtcblx0XHRcdHJldHVybiB1KCB7XG5cdFx0XHRcdGlkOiB0LFxuXHRcdFx0XHRuYW1lOiB0LFxuXHRcdFx0XHR3aWR0aDogMCxcblx0XHRcdFx0aGVpZ2h0OiAwLFxuXHRcdFx0XHRib3JkZXI6IDBcblx0XHRcdH0sIHsgZGlzcGxheTogXCJub25lXCIgfSwgby5kb2MgKVxuXHRcdH1cblxuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdGNsaWVudEV2ZW50OiBmdW5jdGlvbiggdCwgZSwgbiwgaSApIHtcblx0XHRcdFx0KGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHRcdHZhciBuID0gIXAuaXNPYmplY3QoIHQgKSwgciA9ICEhZSAmJiAhcC5pc09iamVjdCggZSApLCBpID0gbiB8fCByO1xuXHRcdFx0XHRcdHJldHVybiBpXG5cdFx0XHRcdH0pKCB0LCBlICkgfHwgKHYgJiYgdiggYXJndW1lbnRzICksIEUucHJvbWlzZS50aGVuKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQhZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdFx0XHR2YXIgbiwgaSwgcztcblx0XHRcdFx0XHRcdHAuaXNPYmplY3QoIHQgKSAmJiBwLmlzT2JqZWN0KCBlICkgJiYgKGwubG9nKCB0LCBlICksIHMgPSBoLmZsYXR0ZW5DbGllbnRFdmVudFBheWxvYWQoIHQsIGUgKSwgKG4gPSByLmZpcnN0Q2hpbGQpLnZhbHVlID0gKyAoKyBuLnZhbHVlIHx8IHMuZG50IHx8IDApLCAoaSA9IG8uY3JlYXRlRWxlbWVudCggXCJpbnB1dFwiICkpLnR5cGUgPSBcImhpZGRlblwiLCBpLm5hbWUgPSBcImxcIiwgaS52YWx1ZSA9IGguc3RyaW5naWZ5KCBzICksIHIuYXBwZW5kQ2hpbGQoIGkgKSlcblx0XHRcdFx0XHR9KCBoLmZvcm1hdENsaWVudEV2ZW50TmFtZXNwYWNlKCB0ICksIGguZm9ybWF0Q2xpZW50RXZlbnREYXRhKCBlLCBuLCBpICkgKVxuXHRcdFx0XHR9ICkpXG5cdFx0XHR9LFxuXHRcdFx0Zmx1c2g6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gRS5wcm9taXNlLnRoZW4oIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciB0O1xuXHRcdFx0XHRcdHJldHVybiByLmNoaWxkcmVuLmxlbmd0aCA8PSAyID8gZi5yZWplY3QoKSA6ICh0ID0gZi5hbGwoIFtcblx0XHRcdFx0XHRcdG8uZG9jLmJvZHkuYXBwZW5kQ2hpbGQoIHIgKSxcblx0XHRcdFx0XHRcdG8uZG9jLmJvZHkuYXBwZW5kQ2hpbGQoIGkgKVxuXHRcdFx0XHRcdF0gKS50aGVuKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRcdHZhciBlID0gdFsgMCBdLCBuID0gdFsgMSBdO1xuXHRcdFx0XHRcdFx0cmV0dXJuIG4uYWRkRXZlbnRMaXN0ZW5lciggXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHQhZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIG4gPSB0LnBhcmVudE5vZGU7XG5cdFx0XHRcdFx0XHRcdFx0XHRuICYmIChuLnJlbW92ZUNoaWxkKCB0ICksIG4ucmVtb3ZlQ2hpbGQoIGUgKSlcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0oIGUsIG4gKSgpXG5cdFx0XHRcdFx0XHR9ICksIGUuc3VibWl0KCksIHRcblx0XHRcdFx0XHR9ICksIHIgPSB4KCksIGkgPSBUKCksIHQpXG5cdFx0XHRcdH0gKVxuXHRcdFx0fSxcblx0XHRcdGluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gXyA/IEUucHJvbWlzZSA6ICgobyA9IG5ldyBtKCBhICkpLmluc2VydCggXCJydWZvdXMtc2FuZGJveFwiLCBudWxsLCB7IGRpc3BsYXk6IFwibm9uZVwiIH0sIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdHMuYm9keS5hcHBlbmRDaGlsZCggdCApXG5cdFx0XHRcdH0gKS50aGVuKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRvLnNldFRpdGxlKCBcIlR3aXR0ZXIgYW5hbHl0aWNzIGlmcmFtZVwiICksIHIgPSB4KCksIGkgPSBUKCksIEUucmVzb2x2ZSggW3IsIGldIClcblx0XHRcdFx0fSApLCBfID0gITAsIEUucHJvbWlzZSlcblx0XHRcdH1cblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMCApO1xuXHRcdHQuZXhwb3J0cyA9IGZ1bmN0aW9uIHQoIGUgKSB7XG5cdFx0XHR2YXIgbiA9IFtdO1xuXHRcdFx0cmV0dXJuIGUuZm9yRWFjaCggZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRcdHZhciBpID0gci5pc1R5cGUoIFwiYXJyYXlcIiwgZSApID8gdCggZSApIDogW2VdO1xuXHRcdFx0XHRuID0gbi5jb25jYXQoIGkgKVxuXHRcdFx0fSApLCBuXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSApIHtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdHJldHVybiB0LmZpbHRlciggZnVuY3Rpb24oIGUsIG4gKSB7XG5cdFx0XHRcdHJldHVybiB0LmluZGV4T2YoIGUgKSA9PT0gblxuXHRcdFx0fSApXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDQxICksIGkgPSBuKCAwICksIG8gPSBuKCAxMTEgKTtcblxuXHRcdGZ1bmN0aW9uIHMoKSB7XG5cdFx0XHRyLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKVxuXHRcdH1cblxuXHRcdHMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggci5wcm90b3R5cGUgKSwgaS5hdWcoIHMucHJvdG90eXBlLCB7IGZhY3Rvcnk6IG8gfSApLCB0LmV4cG9ydHMgPSBzXG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMjMgKSwgaSA9IG4oIDAgKSwgbyA9IG4oIDcgKTtcblx0XHR0LmV4cG9ydHMgPSB7XG5cdFx0XHRiZWZvcmU6IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dmFyIG4sIGkgPSB0aGlzLCBvID0gYXJndW1lbnRzO1xuXHRcdFx0XHRcdHJldHVybiBuID0gZS5hcHBseSggdGhpcywgYXJndW1lbnRzICksIHIuaXNQcm9taXNlKCBuICkgPyBuLnRoZW4oIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHQuYXBwbHkoIGksIG8gKVxuXHRcdFx0XHRcdH0gKSA6IHQuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRhZnRlcjogZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR2YXIgbiwgaSA9IHRoaXMsIG8gPSBhcmd1bWVudHM7XG5cblx0XHRcdFx0XHRmdW5jdGlvbiBzKCB0LCBlICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHIuaXNQcm9taXNlKCBlICkgPyBlLnRoZW4oIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdFxuXHRcdFx0XHRcdFx0fSApIDogdFxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiBuID0gdC5hcHBseSggdGhpcywgYXJndW1lbnRzICksIHIuaXNQcm9taXNlKCBuICkgPyBuLnRoZW4oIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHMoIHQsIGUuYXBwbHkoIGksIG8gKSApXG5cdFx0XHRcdFx0fSApIDogcyggbiwgZS5hcHBseSggdGhpcywgYXJndW1lbnRzICkgKVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0YXJvdW5kOiBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciBuID0gaS50b1JlYWxBcnJheSggYXJndW1lbnRzICk7XG5cdFx0XHRcdFx0cmV0dXJuIG4udW5zaGlmdCggbyggdCwgdGhpcyApICksIGUuYXBwbHkoIHRoaXMsIG4gKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDEwICksIGkgPSBuKCAxOCApLCBvID0gbiggNDIgKSwgcyA9IG4oIDYgKSwgYSA9IG4oIDAgKTtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciB0ID0gbygpO1xuXG5cdFx0XHRmdW5jdGlvbiBlKCBlICkge1xuXHRcdFx0XHR0LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KCB0aGlzLCBcInRhcmdldEdsb2JhbFwiLCB7IHZhbHVlOiBlIH0gKVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCB0LnByb3RvdHlwZSApLCBhLmF1ZyggZS5wcm90b3R5cGUsIHtcblx0XHRcdFx0aWQ6IG51bGwsXG5cdFx0XHRcdGluaXRpYWxpemVkOiAhMSxcblx0XHRcdFx0d2lkdGg6IDAsXG5cdFx0XHRcdGhlaWdodDogMCxcblx0XHRcdFx0c2FuZGJveEVsOiBudWxsLFxuXHRcdFx0XHRpbnNlcnQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiBzLnJlamVjdCgpXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uUmVzaXplOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0fSxcblx0XHRcdFx0YWRkQ2xhc3M6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdHZhciBlID0gdGhpcy5zYW5kYm94RWw7XG5cdFx0XHRcdFx0cmV0dXJuIHQgPSBBcnJheS5pc0FycmF5KCB0ICkgPyB0IDogW3RdLCBpLndyaXRlKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdHQuZm9yRWFjaCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0XHRcdHIuYWRkKCBlLCB0IClcblx0XHRcdFx0XHRcdH0gKVxuXHRcdFx0XHRcdH0gKVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRyZW1vdmVDbGFzczogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0dmFyIGUgPSB0aGlzLnNhbmRib3hFbDtcblx0XHRcdFx0XHRyZXR1cm4gdCA9IEFycmF5LmlzQXJyYXkoIHQgKSA/IHQgOiBbdF0sIGkud3JpdGUoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0dC5mb3JFYWNoKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRcdFx0ci5yZW1vdmUoIGUsIHQgKVxuXHRcdFx0XHRcdFx0fSApXG5cdFx0XHRcdFx0fSApXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHN0eWxlU2VsZjogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0dmFyIGUgPSB0aGlzO1xuXHRcdFx0XHRcdHJldHVybiBpLndyaXRlKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGEuZm9ySW4oIHQsIGZ1bmN0aW9uKCB0LCBuICkge1xuXHRcdFx0XHRcdFx0XHRlLnNhbmRib3hFbC5zdHlsZVsgdCBdID0gblxuXHRcdFx0XHRcdFx0fSApXG5cdFx0XHRcdFx0fSApXG5cdFx0XHRcdH1cblx0XHRcdH0gKSwgZVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCA0ICksIGkgPSBuKCAxMCApLCBvID0gbiggMTggKSwgcyA9IG4oIDU1ICksIGEgPSBuKCAyNyApLCB1ID0gbiggNTYgKSwgYyA9IG4oIDQ0ICksIGQgPSBuKCA0NSApLFxuXHRcdFx0ZiA9IG4oIDMyICksIGwgPSBuKCAxMiApLCBoID0gbiggNDYgKSwgcCA9IG4oIDIgKSwgbSA9IG4oIDYgKSwgdiA9IG4oIDAgKSwgZyA9IG4oIDkgKSwgdyA9IG4oIDI0ICksXG5cdFx0XHR5ID0gbiggNyApLCBiID0geyBhbGxvd2Z1bGxzY3JlZW46IFwidHJ1ZVwiIH0sIF8gPSB7XG5cdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG5cdFx0XHRcdHZpc2liaWxpdHk6IFwiaGlkZGVuXCIsXG5cdFx0XHRcdGRpc3BsYXk6IFwiYmxvY2tcIixcblx0XHRcdFx0d2lkdGg6IFwiMHB4XCIsXG5cdFx0XHRcdGhlaWdodDogXCIwcHhcIixcblx0XHRcdFx0cGFkZGluZzogXCIwXCIsXG5cdFx0XHRcdGJvcmRlcjogXCJub25lXCJcblx0XHRcdH0sIEUgPSB7XG5cdFx0XHRcdHBvc2l0aW9uOiBcInN0YXRpY1wiLFxuXHRcdFx0XHR2aXNpYmlsaXR5OiBcInZpc2libGVcIlxuXHRcdFx0fSwgeCA9IFwiU2FuZGJveFJvb3RcIiwgVCA9IFwiLlNhbmRib3hSb290IHsgZGlzcGxheTogbm9uZTsgfVwiLCBBID0gNTA7XG5cblx0XHRmdW5jdGlvbiBTKCB0LCBlLCBuLCByICkge1xuXHRcdFx0cmV0dXJuIGUgPSB2LmF1ZyggeyBpZDogdCB9LCBiLCBlICksIG4gPSB2LmF1Zygge30sIF8sIG4gKSwgZiggZSwgbiwgciApXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gUiggdCwgZSwgbiwgaSwgcyApIHtcblx0XHRcdHZhciBhID0gbmV3IHAsIHUgPSB3LmdlbmVyYXRlKCksIGMgPSBTKCB0LCBlLCBuLCBzICk7XG5cdFx0XHRyZXR1cm4gZy5zZXQoIFtcInNhbmRib3hcIiwgdV0sIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgdCA9IGMuY29udGVudFdpbmRvdy5kb2N1bWVudDtcblx0XHRcdFx0by53cml0ZSggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dC53cml0ZSggXCI8IURPQ1RZUEUgaHRtbD48aHRtbD48aGVhZD48L2hlYWQ+PGJvZHk+PC9ib2R5PjwvaHRtbD5cIiApXG5cdFx0XHRcdH0gKS50aGVuKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR0LmNsb3NlKCksIGEucmVzb2x2ZSggYyApXG5cdFx0XHRcdH0gKVxuXHRcdFx0fSApLCBjLnNyYyA9IFtcblx0XHRcdFx0XCJqYXZhc2NyaXB0OlwiLFxuXHRcdFx0XHQnZG9jdW1lbnQud3JpdGUoXCJcIik7Jyxcblx0XHRcdFx0XCJ0cnkgeyB3aW5kb3cucGFyZW50LmRvY3VtZW50OyB9XCIsXG5cdFx0XHRcdCdjYXRjaCAoZSkgeyBkb2N1bWVudC5kb21haW49XCInICsgci5kb21haW4gKyAnXCI7IH0nLFxuXHRcdFx0XHRcIndpbmRvdy5wYXJlbnQuXCIgKyBnLmZ1bGxQYXRoKCBbXCJzYW5kYm94XCIsIHVdICkgKyBcIigpO1wiXG5cdFx0XHRdLmpvaW4oIFwiXCIgKSwgYy5hZGRFdmVudExpc3RlbmVyKCBcImVycm9yXCIsIGEucmVqZWN0LCAhMSApLCBvLndyaXRlKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZCggYywgaSApXG5cdFx0XHR9ICksIGEucHJvbWlzZVxuXHRcdH1cblxuXHRcdHQuZXhwb3J0cyA9IGEuY291cGxlKCBuKCA1NyApLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdHQub3ZlcnJpZGVQcm9wZXJ0eSggXCJpZFwiLCB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuc2FuZGJveEVsICYmIHRoaXMuc2FuZGJveEVsLmlkXG5cdFx0XHRcdH1cblx0XHRcdH0gKSwgdC5vdmVycmlkZVByb3BlcnR5KCBcImluaXRpYWxpemVkXCIsIHtcblx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZXR1cm4gISF0aGlzLndpblxuXHRcdFx0XHR9XG5cdFx0XHR9ICksIHQub3ZlcnJpZGVQcm9wZXJ0eSggXCJ3aWR0aFwiLCB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX3dpZHRoXG5cdFx0XHRcdH1cblx0XHRcdH0gKSwgdC5vdmVycmlkZVByb3BlcnR5KCBcImhlaWdodFwiLCB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX2hlaWdodFxuXHRcdFx0XHR9XG5cdFx0XHR9ICksIHQub3ZlcnJpZGVQcm9wZXJ0eSggXCJzYW5kYm94RWxcIiwge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmlmcmFtZUVsXG5cdFx0XHRcdH1cblx0XHRcdH0gKSwgdC5kZWZpbmVQcm9wZXJ0eSggXCJpZnJhbWVFbFwiLCB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX2lmcmFtZVxuXHRcdFx0XHR9XG5cdFx0XHR9ICksIHQuZGVmaW5lUHJvcGVydHkoIFwicm9vdEVsXCIsIHtcblx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5kb2MgJiYgdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50XG5cdFx0XHRcdH1cblx0XHRcdH0gKSwgdC5kZWZpbmVQcm9wZXJ0eSggXCJ3aWRnZXRFbFwiLCB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZG9jICYmIHRoaXMuZG9jLmJvZHkuZmlyc3RFbGVtZW50Q2hpbGRcblx0XHRcdFx0fVxuXHRcdFx0fSApLCB0LmRlZmluZVByb3BlcnR5KCBcIndpblwiLCB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuaWZyYW1lRWwgJiYgdGhpcy5pZnJhbWVFbC5jb250ZW50V2luZG93XG5cdFx0XHRcdH1cblx0XHRcdH0gKSwgdC5kZWZpbmVQcm9wZXJ0eSggXCJkb2NcIiwge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLndpbiAmJiB0aGlzLndpbi5kb2N1bWVudFxuXHRcdFx0XHR9XG5cdFx0XHR9ICksIHQuZGVmaW5lKCBcIl91cGRhdGVDYWNoZWREaW1lbnNpb25zXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgdCA9IHRoaXM7XG5cdFx0XHRcdHJldHVybiBvLnJlYWQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciBlLCBuID0gaCggdC5zYW5kYm94RWwgKTtcblx0XHRcdFx0XHRcInZpc2libGVcIiA9PSB0LnNhbmRib3hFbC5zdHlsZS52aXNpYmlsaXR5ID8gdC5fd2lkdGggPSBuLndpZHRoIDogKGUgPSBoKCB0LnNhbmRib3hFbC5wYXJlbnRFbGVtZW50ICkud2lkdGgsIHQuX3dpZHRoID0gTWF0aC5taW4oIG4ud2lkdGgsIGUgKSksIHQuX2hlaWdodCA9IG4uaGVpZ2h0XG5cdFx0XHRcdH0gKVxuXHRcdFx0fSApLCB0LmRlZmluZSggXCJfc2V0VGFyZ2V0VG9CbGFua1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoIFwiYmFzZVwiICk7XG5cdFx0XHRcdHQudGFyZ2V0ID0gXCJfYmxhbmtcIiwgdGhpcy5kb2MuaGVhZC5hcHBlbmRDaGlsZCggdCApXG5cdFx0XHR9ICksIHQuZGVmaW5lKCBcIl9kaWRSZXNpemVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciB0ID0gdGhpcywgZSA9IHRoaXMuX3Jlc2l6ZUhhbmRsZXJzLnNsaWNlKCAwICk7XG5cdFx0XHRcdHJldHVybiB0aGlzLl91cGRhdGVDYWNoZWREaW1lbnNpb25zKCkudGhlbiggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0ZS5mb3JFYWNoKCBmdW5jdGlvbiggZSApIHtcblx0XHRcdFx0XHRcdGUoIHQgKVxuXHRcdFx0XHRcdH0gKVxuXHRcdFx0XHR9IClcblx0XHRcdH0gKSwgdC5kZWZpbmUoIFwic2V0VGl0bGVcIiwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHRoaXMuaWZyYW1lRWwudGl0bGUgPSB0XG5cdFx0XHR9ICksIHQub3ZlcnJpZGUoIFwiY3JlYXRlRWxlbWVudFwiLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoIHQgKVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlKCBcImNyZWF0ZUZyYWdtZW50XCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5kb2MuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG5cdFx0XHR9ICksIHQub3ZlcnJpZGUoIFwiaHRtbFRvRWxlbWVudFwiLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGU7XG5cdFx0XHRcdHJldHVybiAoZSA9IHRoaXMuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApKS5pbm5lckhUTUwgPSB0LCBlLmZpcnN0RWxlbWVudENoaWxkXG5cdFx0XHR9ICksIHQub3ZlcnJpZGUoIFwiaGFzU2VsZWN0ZWRUZXh0XCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gISFzLmdldFNlbGVjdGVkVGV4dCggdGhpcy53aW4gKVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlKCBcImFkZFJvb3RDbGFzc1wiLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUgPSB0aGlzLnJvb3RFbDtcblx0XHRcdFx0cmV0dXJuIHQgPSBBcnJheS5pc0FycmF5KCB0ICkgPyB0IDogW3RdLCB0aGlzLmluaXRpYWxpemVkID8gby53cml0ZSggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dC5mb3JFYWNoKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRcdGkuYWRkKCBlLCB0IClcblx0XHRcdFx0XHR9IClcblx0XHRcdFx0fSApIDogbS5yZWplY3QoIG5ldyBFcnJvciggXCJzYW5kYm94IG5vdCBpbml0aWFsaXplZFwiICkgKVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlKCBcInJlbW92ZVJvb3RDbGFzc1wiLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUgPSB0aGlzLnJvb3RFbDtcblx0XHRcdFx0cmV0dXJuIHQgPSBBcnJheS5pc0FycmF5KCB0ICkgPyB0IDogW3RdLCB0aGlzLmluaXRpYWxpemVkID8gby53cml0ZSggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dC5mb3JFYWNoKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRcdGkucmVtb3ZlKCBlLCB0IClcblx0XHRcdFx0XHR9IClcblx0XHRcdFx0fSApIDogbS5yZWplY3QoIG5ldyBFcnJvciggXCJzYW5kYm94IG5vdCBpbml0aWFsaXplZFwiICkgKVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlKCBcImhhc1Jvb3RDbGFzc1wiLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIGkucHJlc2VudCggdGhpcy5yb290RWwsIHQgKVxuXHRcdFx0fSApLCB0LmRlZmluZSggXCJhZGRTdHlsZVNoZWV0XCIsIGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHR2YXIgbiwgciA9IG5ldyBwO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5pbml0aWFsaXplZCA/ICgobiA9IHRoaXMuY3JlYXRlRWxlbWVudCggXCJsaW5rXCIgKSkudHlwZSA9IFwidGV4dC9jc3NcIiwgbi5yZWwgPSBcInN0eWxlc2hlZXRcIiwgbi5ocmVmID0gdCwgbi5hZGRFdmVudExpc3RlbmVyKCBcImxvYWRcIiwgci5yZXNvbHZlLCAhMSApLCBuLmFkZEV2ZW50TGlzdGVuZXIoIFwiZXJyb3JcIiwgci5yZWplY3QsICExICksIG8ud3JpdGUoIHkoIGUsIG51bGwsIG4gKSApLnRoZW4oIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiB1KCB0ICkudGhlbiggci5yZXNvbHZlLCByLnJlamVjdCApLCByLnByb21pc2Vcblx0XHRcdFx0fSApKSA6IG0ucmVqZWN0KCBuZXcgRXJyb3IoIFwic2FuZGJveCBub3QgaW5pdGlhbGl6ZWRcIiApIClcblx0XHRcdH0gKSwgdC5vdmVycmlkZSggXCJwcmVwZW5kU3R5bGVTaGVldFwiLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUgPSB0aGlzLmRvYztcblx0XHRcdFx0cmV0dXJuIHRoaXMuYWRkU3R5bGVTaGVldCggdCwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0dmFyIG4gPSBlLmhlYWQuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cdFx0XHRcdFx0cmV0dXJuIG4gPyBlLmhlYWQuaW5zZXJ0QmVmb3JlKCB0LCBuICkgOiBlLmhlYWQuYXBwZW5kQ2hpbGQoIHQgKVxuXHRcdFx0XHR9IClcblx0XHRcdH0gKSwgdC5vdmVycmlkZSggXCJhcHBlbmRTdHlsZVNoZWV0XCIsIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSA9IHRoaXMuZG9jO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5hZGRTdHlsZVNoZWV0KCB0LCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRyZXR1cm4gZS5oZWFkLmFwcGVuZENoaWxkKCB0IClcblx0XHRcdFx0fSApXG5cdFx0XHR9ICksIHQuZGVmaW5lKCBcImFkZENzc1wiLCBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0dmFyIG47XG5cdFx0XHRcdHJldHVybiBjLmlubGluZVN0eWxlKCkgPyAoKG4gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoIFwic3R5bGVcIiApKS50eXBlID0gXCJ0ZXh0L2Nzc1wiLCBuLmFwcGVuZENoaWxkKCB0aGlzLmRvYy5jcmVhdGVUZXh0Tm9kZSggdCApICksIG8ud3JpdGUoIHkoIGUsIG51bGwsIG4gKSApKSA6IChsLmRldkVycm9yKCBcIkNTUCBlbmFibGVkOyBjYW5ub3QgZW1iZWQgaW5saW5lIHN0eWxlc1wiICksIG0ucmVzb2x2ZSgpKVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlKCBcInByZXBlbmRDc3NcIiwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHZhciBlID0gdGhpcy5kb2M7XG5cdFx0XHRcdHJldHVybiB0aGlzLmFkZENzcyggdCwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0dmFyIG4gPSBlLmhlYWQuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cdFx0XHRcdFx0cmV0dXJuIG4gPyBlLmhlYWQuaW5zZXJ0QmVmb3JlKCB0LCBuICkgOiBlLmhlYWQuYXBwZW5kQ2hpbGQoIHQgKVxuXHRcdFx0XHR9IClcblx0XHRcdH0gKSwgdC5vdmVycmlkZSggXCJhcHBlbmRDc3NcIiwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHZhciBlID0gdGhpcy5kb2M7XG5cdFx0XHRcdHJldHVybiB0aGlzLmFkZENzcyggdCwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGUuaGVhZC5hcHBlbmRDaGlsZCggdCApXG5cdFx0XHRcdH0gKVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlKCBcIm1ha2VWaXNpYmxlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgdCA9IHRoaXM7XG5cdFx0XHRcdHJldHVybiB0aGlzLnN0eWxlU2VsZiggRSApLnRoZW4oIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHQuX3VwZGF0ZUNhY2hlZERpbWVuc2lvbnMoKVxuXHRcdFx0XHR9IClcblx0XHRcdH0gKSwgdC5vdmVycmlkZSggXCJpbmplY3RXaWRnZXRFbFwiLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUgPSB0aGlzO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5pbml0aWFsaXplZCA/IHRoaXMud2lkZ2V0RWwgPyBtLnJlamVjdCggbmV3IEVycm9yKCBcIndpZGdldCBhbHJlYWR5IGluamVjdGVkXCIgKSApIDogby53cml0ZSggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0ZS5kb2MuYm9keS5hcHBlbmRDaGlsZCggdCApXG5cdFx0XHRcdH0gKSA6IG0ucmVqZWN0KCBuZXcgRXJyb3IoIFwic2FuZGJveCBub3QgaW5pdGlhbGl6ZWRcIiApIClcblx0XHRcdH0gKSwgdC5vdmVycmlkZSggXCJtYXRjaEhlaWdodFRvQ29udGVudFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHQsIGUgPSB0aGlzO1xuXHRcdFx0XHRyZXR1cm4gby5yZWFkKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR0ID0gZS53aWRnZXRFbCA/IGgoIGUud2lkZ2V0RWwgKS5oZWlnaHQgOiAwXG5cdFx0XHRcdH0gKSwgby53cml0ZSggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0ZS5zYW5kYm94RWwuc3R5bGUuaGVpZ2h0ID0gdCArIFwicHhcIlxuXHRcdFx0XHR9ICkudGhlbiggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGUuX3VwZGF0ZUNhY2hlZERpbWVuc2lvbnMoKVxuXHRcdFx0XHR9IClcblx0XHRcdH0gKSwgdC5vdmVycmlkZSggXCJtYXRjaFdpZHRoVG9Db250ZW50XCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgdCwgZSA9IHRoaXM7XG5cdFx0XHRcdHJldHVybiBvLnJlYWQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHQgPSBlLndpZGdldEVsID8gaCggZS53aWRnZXRFbCApLndpZHRoIDogMFxuXHRcdFx0XHR9ICksIG8ud3JpdGUoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGUuc2FuZGJveEVsLnN0eWxlLndpZHRoID0gdCArIFwicHhcIlxuXHRcdFx0XHR9ICkudGhlbiggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGUuX3VwZGF0ZUNhY2hlZERpbWVuc2lvbnMoKVxuXHRcdFx0XHR9IClcblx0XHRcdH0gKSwgdC5hZnRlciggXCJpbml0aWFsaXplXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR0aGlzLl9pZnJhbWUgPSBudWxsLCB0aGlzLl93aWR0aCA9IHRoaXMuX2hlaWdodCA9IDAsIHRoaXMuX3Jlc2l6ZUhhbmRsZXJzID0gW11cblx0XHRcdH0gKSwgdC5vdmVycmlkZSggXCJpbnNlcnRcIiwgZnVuY3Rpb24oIHQsIGUsIG4sIHIgKSB7XG5cdFx0XHRcdHZhciBpID0gdGhpcywgcyA9IG5ldyBwLCBhID0gdGhpcy50YXJnZXRHbG9iYWwuZG9jdW1lbnQsIHUgPSBTKCB0LCBlLCBuLCBhICk7XG5cdFx0XHRcdHJldHVybiBvLndyaXRlKCB5KCByLCBudWxsLCB1ICkgKSwgdS5hZGRFdmVudExpc3RlbmVyKCBcImxvYWRcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0KGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0dC5jb250ZW50V2luZG93LmRvY3VtZW50XG5cdFx0XHRcdFx0XHR9IGNhdGNoICggdCApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIG0ucmVqZWN0KCB0IClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBtLnJlc29sdmUoIHQgKVxuXHRcdFx0XHRcdH0pKCB1ICkudGhlbiggbnVsbCwgeSggUiwgbnVsbCwgdCwgZSwgbiwgdSwgYSApICkudGhlbiggcy5yZXNvbHZlLCBzLnJlamVjdCApXG5cdFx0XHRcdH0sICExICksIHUuYWRkRXZlbnRMaXN0ZW5lciggXCJlcnJvclwiLCBzLnJlamVjdCwgITEgKSwgcy5wcm9taXNlLnRoZW4oIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdHZhciBlID0gZCggaS5fZGlkUmVzaXplLCBBLCBpICk7XG5cdFx0XHRcdFx0cmV0dXJuIGkuX2lmcmFtZSA9IHQsIGkud2luLmFkZEV2ZW50TGlzdGVuZXIoIFwicmVzaXplXCIsIGUsICExICksIG0uYWxsKCBbXG5cdFx0XHRcdFx0XHRpLl9zZXRUYXJnZXRUb0JsYW5rKCksXG5cdFx0XHRcdFx0XHRpLmFkZFJvb3RDbGFzcyggeCApLFxuXHRcdFx0XHRcdFx0aS5wcmVwZW5kQ3NzKCBUIClcblx0XHRcdFx0XHRdIClcblx0XHRcdFx0fSApXG5cdFx0XHR9ICksIHQub3ZlcnJpZGUoIFwib25SZXNpemVcIiwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHRoaXMuX3Jlc2l6ZUhhbmRsZXJzLnB1c2goIHQgKVxuXHRcdFx0fSApLCB0LmFmdGVyKCBcInN0eWxlU2VsZlwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3VwZGF0ZUNhY2hlZERpbWVuc2lvbnMoKVxuXHRcdFx0fSApXG5cdFx0fSApXG5cdH0sIGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdHQuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcInVuaW1wbGVtZW50ZWQgbWV0aG9kXCIgKVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAyICksIGkgPSBuKCA3ICksIG8gPSAxMDAsIHMgPSAzZTM7XG5cblx0XHRmdW5jdGlvbiBhKCB0LCBlICkge1xuXHRcdFx0dGhpcy5faW5wdXRzUXVldWUgPSBbXSwgdGhpcy5fdGFzayA9IHQsIHRoaXMuX2lzUGF1c2VkID0gITEsIHRoaXMuX2ZsdXNoRGVsYXkgPSBlICYmIGUuZmx1c2hEZWxheSB8fCBvLCB0aGlzLl9wYXVzZUxlbmd0aCA9IGUgJiYgZS5wYXVzZUxlbmd0aCB8fCBzLCB0aGlzLl9mbHVzaFRpbWVvdXQgPSB2b2lkIDBcblx0XHR9XG5cblx0XHRhLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdHZhciBlID0gbmV3IHI7XG5cdFx0XHRyZXR1cm4gdGhpcy5faW5wdXRzUXVldWUucHVzaCgge1xuXHRcdFx0XHRpbnB1dDogdCxcblx0XHRcdFx0dGFza0RvbmVEZWZlcnJlZDogZVxuXHRcdFx0fSApLCB0aGlzLl9zY2hlZHVsZUZsdXNoKCksIGUucHJvbWlzZVxuXHRcdH0sIGEucHJvdG90eXBlLl9zY2hlZHVsZUZsdXNoID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLl9pc1BhdXNlZCB8fCAoY2xlYXJUaW1lb3V0KCB0aGlzLl9mbHVzaFRpbWVvdXQgKSwgdGhpcy5fZmx1c2hUaW1lb3V0ID0gc2V0VGltZW91dCggaSggdGhpcy5fZmx1c2gsIHRoaXMgKSwgdGhpcy5fZmx1c2hEZWxheSApKVxuXHRcdH0sIGEucHJvdG90eXBlLl9mbHVzaCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dGhpcy5fdGFzay5jYWxsKCBudWxsLCB0aGlzLl9pbnB1dHNRdWV1ZSApXG5cdFx0XHR9IGNhdGNoICggdCApIHtcblx0XHRcdFx0dGhpcy5faW5wdXRzUXVldWUuZm9yRWFjaCggZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRcdFx0ZS50YXNrRG9uZURlZmVycmVkLnJlamVjdCggdCApXG5cdFx0XHRcdH0gKVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5faW5wdXRzUXVldWUgPSBbXSwgdGhpcy5fZmx1c2hUaW1lb3V0ID0gdm9pZCAwXG5cdFx0fSwgYS5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdGNsZWFyVGltZW91dCggdGhpcy5fZmx1c2hUaW1lb3V0ICksIHRoaXMuX2lzUGF1c2VkID0gITAsICF0ICYmIHRoaXMuX3BhdXNlTGVuZ3RoICYmIHNldFRpbWVvdXQoIGkoIHRoaXMucmVzdW1lLCB0aGlzICksIHRoaXMuX3BhdXNlTGVuZ3RoIClcblx0XHR9LCBhLnByb3RvdHlwZS5yZXN1bWUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuX2lzUGF1c2VkID0gITEsIHRoaXMuX3NjaGVkdWxlRmx1c2goKVxuXHRcdH0sIHQuZXhwb3J0cyA9IGFcblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIsIGkgPSBuKCA3MyApLCBvID0gbiggMzIgKSwgcyA9IG4oIDIgKSwgYSA9IG4oIDQgKSwgdSA9IG4oIDE5ICksIGMgPSBuKCAyMiApLCBkID0gbiggMzMgKSwgZiA9IG4oIDggKSxcblx0XHRcdGwgPSBuKCAxMiApLCBoID0gbiggMTE2ICksIHAgPSBuKCA1OCApLCBtID0gbiggOSApLCB2ID0gbiggMTEgKSwgZyA9IG4oIDExNyApLCB3ID0gbiggMyApLCB5ID0gbiggMCApLFxuXHRcdFx0YiA9IG4oIDEgKSwgXyA9IHAoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbmV3IHNcblx0XHRcdH0gKTtcblxuXHRcdGZ1bmN0aW9uIEUoIHQgKSB7XG5cdFx0XHR2YXIgZSA9IHQgfHwge1xuXHRcdFx0XHRzaG91bGRfb2J0YWluX2Nvb2tpZV9jb25zZW50OiAhMCxcblx0XHRcdFx0ZXhwZXJpbWVudHM6IHt9XG5cdFx0XHR9O1xuXHRcdFx0cmV0dXJuIG5ldyBnKCBlLnNob3VsZF9vYnRhaW5fY29va2llX2NvbnNlbnQsIGUuZXhwZXJpbWVudHMgKVxuXHRcdH1cblxuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdGxvYWQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgdCwgZSwgbiwgcztcblx0XHRcdFx0aWYgKCBjLmllOSgpIHx8IGMuaWUxMCgpIHx8IFwiaHR0cDpcIiAhPT0gZi5wcm90b2NvbCAmJiBcImh0dHBzOlwiICE9PSBmLnByb3RvY29sICkge1xuXHRcdFx0XHRcdHJldHVybiBsLmRldkVycm9yKCBcIlVzaW5nIGRlZmF1bHQgc2V0dGluZ3MgZHVlIHRvIHVuc3VwcG9ydGVkIGJyb3dzZXIgb3IgcHJvdG9jb2wuXCIgKSwgciA9IEUoKSwgdm9pZCBfKCkucmVzb2x2ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHQgPSB7IG9yaWdpbjogZi5vcmlnaW4gfSwgdS5zZXR0aW5ncygpLmluZGV4T2YoIFwibG9jYWxob3N0XCIgKSA+IC0gMSAmJiAodC5sb2NhbFNldHRpbmdzID0gITApLCBlID0gdi51cmwoIGkucmVzb3VyY2VCYXNlVXJsICsgaS53aWRnZXRJZnJhbWVIdG1sUGF0aCwgdCApLCBuID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0dmFyIG4sIGksIG8sIHM7XG5cdFx0XHRcdFx0aWYgKCBpID0gdy5pc1R3aXR0ZXJVUkwoIHQub3JpZ2luICksIG8gPSBlLnN1YnN0ciggMCwgdC5vcmlnaW4ubGVuZ3RoICkgPT09IHQub3JpZ2luLCBzID0gdy5pc1R3aW1nVVJMKCB0Lm9yaWdpbiApLCBvICYmIGkgfHwgcyApIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdChuID0gXCJzdHJpbmdcIiA9PSB0eXBlb2YgdC5kYXRhID8gZC5wYXJzZSggdC5kYXRhICkgOiB0LmRhdGEpLm5hbWVzcGFjZSA9PT0gaC5zZXR0aW5ncyAmJiAociA9IEUoIG4uc2V0dGluZ3MgKSwgXygpLnJlc29sdmUoKSlcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKCB0ICkge1xuXHRcdFx0XHRcdFx0XHRsLmRldkVycm9yKCB0IClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIGIuYWRkRXZlbnRMaXN0ZW5lciggXCJtZXNzYWdlXCIsIG4gKSwgcyA9IG8oIHtcblx0XHRcdFx0XHRzcmM6IGUsXG5cdFx0XHRcdFx0dGl0bGU6IFwiVHdpdHRlciBzZXR0aW5ncyBpZnJhbWVcIlxuXHRcdFx0XHR9LCB7IGRpc3BsYXk6IFwibm9uZVwiIH0gKSwgYS5ib2R5LmFwcGVuZENoaWxkKCBzIClcblx0XHRcdH0sXG5cdFx0XHRzZXR0aW5nc0xvYWRlZDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciB0LCBlLCBuO1xuXHRcdFx0XHRyZXR1cm4gdCA9IG5ldyBzLCBlID0gbS5nZXQoIFwiZXhwZXJpbWVudE92ZXJyaWRlXCIgKSwgXygpLnByb21pc2UudGhlbiggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0ZSAmJiBlLm5hbWUgJiYgZS5hc3NpZ25tZW50ICYmICgobiA9IHt9KVsgZS5uYW1lIF0gPSB7IGJ1Y2tldDogZS5hc3NpZ25tZW50IH0sIHIuZXhwZXJpbWVudHMgPSB5LmF1Zyggci5leHBlcmltZW50cywgbiApKSwgdC5yZXNvbHZlKCByIClcblx0XHRcdFx0fSApLmNhdGNoKCBmdW5jdGlvbiggZSApIHtcblx0XHRcdFx0XHR0LnJlamVjdCggZSApXG5cdFx0XHRcdH0gKSwgdC5wcm9taXNlXG5cdFx0XHR9XG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSApIHtcblx0XHR0LmV4cG9ydHMgPSB7IHNldHRpbmdzOiBcInR3dHRyLnNldHRpbmdzXCIgfVxuXHR9LCBmdW5jdGlvbiggdCwgZSApIHtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdHRoaXMuc2hvdWxkT2J0YWluQ29va2llQ29uc2VudCA9IHQsIHRoaXMuZXhwZXJpbWVudHMgPSBlIHx8IHt9XG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSApIHtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdHJldHVybiB0LnNwbGl0KCBcIlwiICkubWFwKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIHQuY2hhckNvZGVBdCggMCApLnRvU3RyaW5nKCAxNiApXG5cdFx0XHR9ICkuam9pbiggXCJcIiApXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR0LmV4cG9ydHMgPSBbbiggMTIwICksIG4oIDEyNSApLCBuKCAxMzMgKSwgbiggMTM1ICksIG4oIDEzNyApLCBuKCAxNTEgKSwgbiggMTU1ICldXG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMTEgKSwgaSA9IG4oIDUgKSwgbyA9IG4oIDAgKSwgcyA9IG4oIDEzICksIGEgPSBuKCAxNCApKCksIHUgPSBuKCA1OSApLCBjID0gXCJhLnR3aXR0ZXItZG0tYnV0dG9uXCI7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRyZXR1cm4gYSggdCwgYyApLm1hcCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiB1KCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHR2YXIgZSA9IHQuZ2V0QXR0cmlidXRlKCBcImRhdGEtc2hvdy1zY3JlZW4tbmFtZVwiICksIG4gPSBzKCB0ICksIGEgPSB0LmdldEF0dHJpYnV0ZSggXCJocmVmXCIgKSxcblx0XHRcdFx0XHRcdHUgPSB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLXNjcmVlbi1uYW1lXCIgKSwgYyA9IGUgPyBpLmFzQm9vbGVhbiggZSApIDogbnVsbCxcblx0XHRcdFx0XHRcdGQgPSB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLXNpemVcIiApLCBmID0gci5kZWNvZGVVUkwoIGEgKSwgbCA9IGYucmVjaXBpZW50X2lkLFxuXHRcdFx0XHRcdFx0aCA9IHQuZ2V0QXR0cmlidXRlKCBcImRhdGEtdGV4dFwiICkgfHwgZi50ZXh0LFxuXHRcdFx0XHRcdFx0cCA9IHQuZ2V0QXR0cmlidXRlKCBcImRhdGEtd2VsY29tZS1tZXNzYWdlLWlkXCIgKSB8fCBmLndlbGNvbWVNZXNzYWdlSWQ7XG5cdFx0XHRcdFx0cmV0dXJuIG8uYXVnKCBuLCB7XG5cdFx0XHRcdFx0XHRzY3JlZW5OYW1lOiB1LFxuXHRcdFx0XHRcdFx0c2hvd1NjcmVlbk5hbWU6IGMsXG5cdFx0XHRcdFx0XHRzaXplOiBkLFxuXHRcdFx0XHRcdFx0dGV4dDogaCxcblx0XHRcdFx0XHRcdHVzZXJJZDogbCxcblx0XHRcdFx0XHRcdHdlbGNvbWVNZXNzYWdlSWQ6IHBcblx0XHRcdFx0XHR9IClcblx0XHRcdFx0fSggdCApLCB0LnBhcmVudE5vZGUsIHQgKVxuXHRcdFx0fSApXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDAgKTtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiB0KCBlICkge1xuXHRcdFx0dmFyIG47XG5cdFx0XHRpZiAoIGUgKSB7XG5cdFx0XHRcdHJldHVybiBuID0gZS5sYW5nIHx8IGUuZ2V0QXR0cmlidXRlKCBcImRhdGEtbGFuZ1wiICksIHIuaXNUeXBlKCBcInN0cmluZ1wiLCBuICkgPyBuIDogdCggZS5wYXJlbnRFbGVtZW50IClcblx0XHRcdH1cblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMiApO1xuXHRcdHQuZXhwb3J0cyA9IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0dmFyIGkgPSBuZXcgcjtcblx0XHRcdHJldHVybiBuLmUoIDIgKS50aGVuKCBmdW5jdGlvbiggciApIHtcblx0XHRcdFx0dmFyIG87XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0byA9IG4oIDg4ICksIGkucmVzb2x2ZSggbmV3IG8oIHQsIGUgKSApXG5cdFx0XHRcdH0gY2F0Y2ggKCB0ICkge1xuXHRcdFx0XHRcdGkucmVqZWN0KCB0IClcblx0XHRcdFx0fVxuXHRcdFx0fS5iaW5kKCBudWxsLCBuICkgKS5jYXRjaCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdGkucmVqZWN0KCB0IClcblx0XHRcdH0gKSwgaS5wcm9taXNlXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDEyNCApLCBpID0gbiggMSApLCBvID0gbiggMTAgKSwgcyA9IG4oIDM2ICksIGEgPSBuKCAxOCApLCB1ID0gbiggNTUgKSwgYyA9IG4oIDI3ICksIGQgPSBuKCA1NiApLFxuXHRcdFx0ZiA9IG4oIDQ0ICksIGwgPSBuKCA0NiApLCBoID0gbiggNyApLCBwID0gbiggNDUgKSwgbSA9IG4oIDYgKSwgdiA9IG4oIDAgKSwgZyA9IDUwLCB3ID0ge1xuXHRcdFx0XHRwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuXHRcdFx0XHR2aXNpYmlsaXR5OiBcImhpZGRlblwiLFxuXHRcdFx0XHRkaXNwbGF5OiBcImJsb2NrXCIsXG5cdFx0XHRcdHRyYW5zZm9ybTogXCJyb3RhdGUoMGRlZylcIlxuXHRcdFx0fSwgeSA9IHtcblx0XHRcdFx0cG9zaXRpb246IFwic3RhdGljXCIsXG5cdFx0XHRcdHZpc2liaWxpdHk6IFwidmlzaWJsZVwiXG5cdFx0XHR9LCBiID0gXCJ0d2l0dGVyLXdpZGdldFwiLCBfID0gXCJvcGVuXCIsIEUgPSBcIlNhbmRib3hSb290XCIsXG5cdFx0XHR4ID0gXCIuU2FuZGJveFJvb3QgeyBkaXNwbGF5OiBub25lOyBtYXgtaGVpZ2h0OiAxMDAwMHB4OyB9XCI7XG5cdFx0dC5leHBvcnRzID0gYy5jb3VwbGUoIG4oIDU3ICksIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0dC5kZWZpbmVTdGF0aWMoIFwiaXNTdXBwb3J0ZWRcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiAhIWkuSFRNTEVsZW1lbnQucHJvdG90eXBlLmF0dGFjaFNoYWRvdyAmJiBmLmlubGluZVN0eWxlKClcblx0XHRcdH0gKSwgdC5vdmVycmlkZVByb3BlcnR5KCBcImlkXCIsIHtcblx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5zYW5kYm94RWwgJiYgdGhpcy5zYW5kYm94RWwuaWRcblx0XHRcdFx0fVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlUHJvcGVydHkoIFwiaW5pdGlhbGl6ZWRcIiwge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiAhIXRoaXMuX3NoYWRvd0hvc3Rcblx0XHRcdFx0fVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlUHJvcGVydHkoIFwid2lkdGhcIiwge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLl93aWR0aFxuXHRcdFx0XHR9XG5cdFx0XHR9ICksIHQub3ZlcnJpZGVQcm9wZXJ0eSggXCJoZWlnaHRcIiwge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLl9oZWlnaHRcblx0XHRcdFx0fVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlUHJvcGVydHkoIFwic2FuZGJveEVsXCIsIHtcblx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5fc2hhZG93SG9zdFxuXHRcdFx0XHR9XG5cdFx0XHR9ICksIHQuZGVmaW5lKCBcIl91cGRhdGVDYWNoZWREaW1lbnNpb25zXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgdCA9IHRoaXM7XG5cdFx0XHRcdHJldHVybiBhLnJlYWQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciBlLCBuID0gbCggdC5zYW5kYm94RWwgKTtcblx0XHRcdFx0XHRcInZpc2libGVcIiA9PSB0LnNhbmRib3hFbC5zdHlsZS52aXNpYmlsaXR5ID8gdC5fd2lkdGggPSBuLndpZHRoIDogKGUgPSBsKCB0LnNhbmRib3hFbC5wYXJlbnRFbGVtZW50ICkud2lkdGgsIHQuX3dpZHRoID0gTWF0aC5taW4oIG4ud2lkdGgsIGUgKSksIHQuX2hlaWdodCA9IG4uaGVpZ2h0XG5cdFx0XHRcdH0gKVxuXHRcdFx0fSApLCB0LmRlZmluZSggXCJfZGlkUmVzaXplXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgdCA9IHRoaXMsIGUgPSB0aGlzLl9yZXNpemVIYW5kbGVycy5zbGljZSggMCApO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fdXBkYXRlQ2FjaGVkRGltZW5zaW9ucygpLnRoZW4oIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGUuZm9yRWFjaCggZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRcdFx0XHRlKCB0IClcblx0XHRcdFx0XHR9IClcblx0XHRcdFx0fSApXG5cdFx0XHR9ICksIHQub3ZlcnJpZGUoIFwiY3JlYXRlRWxlbWVudFwiLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMudGFyZ2V0R2xvYmFsLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIHQgKVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlKCBcImNyZWF0ZUZyYWdtZW50XCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy50YXJnZXRHbG9iYWwuZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG5cdFx0XHR9ICksIHQub3ZlcnJpZGUoIFwiaHRtbFRvRWxlbWVudFwiLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGU7XG5cdFx0XHRcdHJldHVybiAoZSA9IHRoaXMuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApKS5pbm5lckhUTUwgPSB0LCBlLmZpcnN0RWxlbWVudENoaWxkXG5cdFx0XHR9ICksIHQub3ZlcnJpZGUoIFwiaGFzU2VsZWN0ZWRUZXh0XCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gISF1LmdldFNlbGVjdGVkVGV4dCggdGhpcy50YXJnZXRHbG9iYWwgKVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlKCBcImFkZFJvb3RDbGFzc1wiLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUgPSB0aGlzLl9zaGFkb3dSb290Qm9keTtcblx0XHRcdFx0cmV0dXJuIHQgPSBBcnJheS5pc0FycmF5KCB0ICkgPyB0IDogW3RdLCB0aGlzLmluaXRpYWxpemVkID8gYS53cml0ZSggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dC5mb3JFYWNoKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRcdG8uYWRkKCBlLCB0IClcblx0XHRcdFx0XHR9IClcblx0XHRcdFx0fSApIDogbS5yZWplY3QoIG5ldyBFcnJvciggXCJzYW5kYm94IG5vdCBpbml0aWFsaXplZFwiICkgKVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlKCBcInJlbW92ZVJvb3RDbGFzc1wiLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUgPSB0aGlzLl9zaGFkb3dSb290Qm9keTtcblx0XHRcdFx0cmV0dXJuIHQgPSBBcnJheS5pc0FycmF5KCB0ICkgPyB0IDogW3RdLCB0aGlzLmluaXRpYWxpemVkID8gYS53cml0ZSggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dC5mb3JFYWNoKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRcdG8ucmVtb3ZlKCBlLCB0IClcblx0XHRcdFx0XHR9IClcblx0XHRcdFx0fSApIDogbS5yZWplY3QoIG5ldyBFcnJvciggXCJzYW5kYm94IG5vdCBpbml0aWFsaXplZFwiICkgKVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlKCBcImhhc1Jvb3RDbGFzc1wiLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIG8ucHJlc2VudCggdGhpcy5fc2hhZG93Um9vdEJvZHksIHQgKVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlKCBcImFkZFN0eWxlU2hlZXRcIiwgZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmFkZENzcyggJ0BpbXBvcnQgdXJsKFwiJyArIHQgKyAnXCIpOycsIGUgKS50aGVuKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZXR1cm4gZCggdCApXG5cdFx0XHRcdH0gKVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlKCBcInByZXBlbmRTdHlsZVNoZWV0XCIsIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSA9IHRoaXMuX3NoYWRvd1Jvb3Q7XG5cdFx0XHRcdHJldHVybiB0aGlzLmFkZFN0eWxlU2hlZXQoIHQsIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdHZhciBuID0gZS5maXJzdEVsZW1lbnRDaGlsZDtcblx0XHRcdFx0XHRyZXR1cm4gbiA/IGUuaW5zZXJ0QmVmb3JlKCB0LCBuICkgOiBlLmFwcGVuZENoaWxkKCB0IClcblx0XHRcdFx0fSApXG5cdFx0XHR9ICksIHQub3ZlcnJpZGUoIFwiYXBwZW5kU3R5bGVTaGVldFwiLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUgPSB0aGlzLl9zaGFkb3dSb290O1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5hZGRTdHlsZVNoZWV0KCB0LCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRyZXR1cm4gZS5hcHBlbmRDaGlsZCggdCApXG5cdFx0XHRcdH0gKVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlKCBcImFkZENzc1wiLCBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0dmFyIG47XG5cdFx0XHRcdHJldHVybiB0aGlzLmluaXRpYWxpemVkID8gZi5pbmxpbmVTdHlsZSgpID8gKChuID0gdGhpcy5jcmVhdGVFbGVtZW50KCBcInN0eWxlXCIgKSkudHlwZSA9IFwidGV4dC9jc3NcIiwgbi5hcHBlbmRDaGlsZCggdGhpcy50YXJnZXRHbG9iYWwuZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoIHQgKSApLCBhLndyaXRlKCBoKCBlLCBudWxsLCBuICkgKSkgOiBtLnJlc29sdmUoKSA6IG0ucmVqZWN0KCBuZXcgRXJyb3IoIFwic2FuZGJveCBub3QgaW5pdGlhbGl6ZWRcIiApIClcblx0XHRcdH0gKSwgdC5vdmVycmlkZSggXCJwcmVwZW5kQ3NzXCIsIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSA9IHRoaXMuX3NoYWRvd1Jvb3Q7XG5cdFx0XHRcdHJldHVybiB0aGlzLmFkZENzcyggdCwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0dmFyIG4gPSBlLmZpcnN0RWxlbWVudENoaWxkO1xuXHRcdFx0XHRcdHJldHVybiBuID8gZS5pbnNlcnRCZWZvcmUoIHQsIG4gKSA6IGUuYXBwZW5kQ2hpbGQoIHQgKVxuXHRcdFx0XHR9IClcblx0XHRcdH0gKSwgdC5vdmVycmlkZSggXCJhcHBlbmRDc3NcIiwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHZhciBlID0gdGhpcy5fc2hhZG93Um9vdDtcblx0XHRcdFx0cmV0dXJuIHRoaXMuYWRkQ3NzKCB0LCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRyZXR1cm4gZS5hcHBlbmRDaGlsZCggdCApXG5cdFx0XHRcdH0gKVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlKCBcIm1ha2VWaXNpYmxlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5zdHlsZVNlbGYoIHkgKVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlKCBcImluamVjdFdpZGdldEVsXCIsIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSA9IHRoaXM7XG5cdFx0XHRcdHJldHVybiB0aGlzLmluaXRpYWxpemVkID8gdGhpcy5fc2hhZG93Um9vdEJvZHkuZmlyc3RFbGVtZW50Q2hpbGQgPyBtLnJlamVjdCggbmV3IEVycm9yKCBcIndpZGdldCBhbHJlYWR5IGluamVjdGVkXCIgKSApIDogYS53cml0ZSggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0ZS5fc2hhZG93Um9vdEJvZHkuYXBwZW5kQ2hpbGQoIHQgKVxuXHRcdFx0XHR9ICkudGhlbiggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGUuX3VwZGF0ZUNhY2hlZERpbWVuc2lvbnMoKVxuXHRcdFx0XHR9ICkudGhlbiggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dmFyIHQgPSBwKCBlLl9kaWRSZXNpemUsIGcsIGUgKTtcblx0XHRcdFx0XHRuZXcgciggZS5fc2hhZG93Um9vdEJvZHksIHQgKVxuXHRcdFx0XHR9ICkgOiBtLnJlamVjdCggbmV3IEVycm9yKCBcInNhbmRib3ggbm90IGluaXRpYWxpemVkXCIgKSApXG5cdFx0XHR9ICksIHQub3ZlcnJpZGUoIFwibWF0Y2hIZWlnaHRUb0NvbnRlbnRcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtLnJlc29sdmUoKVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlKCBcIm1hdGNoV2lkdGhUb0NvbnRlbnRcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtLnJlc29sdmUoKVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlKCBcImluc2VydFwiLCBmdW5jdGlvbiggdCwgZSwgbiwgciApIHtcblx0XHRcdFx0dmFyIGkgPSB0aGlzLnRhcmdldEdsb2JhbC5kb2N1bWVudCwgbyA9IHRoaXMuX3NoYWRvd0hvc3QgPSBpLmNyZWF0ZUVsZW1lbnQoIGIgKSxcblx0XHRcdFx0XHR1ID0gdGhpcy5fc2hhZG93Um9vdCA9IG8uYXR0YWNoU2hhZG93KCB7IG1vZGU6IF8gfSApLFxuXHRcdFx0XHRcdGMgPSB0aGlzLl9zaGFkb3dSb290Qm9keSA9IGkuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApO1xuXHRcdFx0XHRyZXR1cm4gdi5mb3JJbiggZSB8fCB7fSwgZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdFx0by5zZXRBdHRyaWJ1dGUoIHQsIGUgKVxuXHRcdFx0XHR9ICksIG8uaWQgPSB0LCB1LmFwcGVuZENoaWxkKCBjICksIHMuZGVsZWdhdGUoIGMsIFwiY2xpY2tcIiwgXCJBXCIsIGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHRcdGUuaGFzQXR0cmlidXRlKCBcInRhcmdldFwiICkgfHwgZS5zZXRBdHRyaWJ1dGUoIFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIgKVxuXHRcdFx0XHR9ICksIG0uYWxsKCBbXG5cdFx0XHRcdFx0dGhpcy5zdHlsZVNlbGYoIHcgKSxcblx0XHRcdFx0XHR0aGlzLmFkZFJvb3RDbGFzcyggRSApLFxuXHRcdFx0XHRcdHRoaXMucHJlcGVuZENzcyggeCApLFxuXHRcdFx0XHRcdGEud3JpdGUoIHIuYmluZCggbnVsbCwgbyApIClcblx0XHRcdFx0XSApXG5cdFx0XHR9ICksIHQub3ZlcnJpZGUoIFwib25SZXNpemVcIiwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHRoaXMuX3Jlc2l6ZUhhbmRsZXJzLnB1c2goIHQgKVxuXHRcdFx0fSApLCB0LmFmdGVyKCBcImluaXRpYWxpemVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHRoaXMuX3NoYWRvd0hvc3QgPSB0aGlzLl9zaGFkb3dSb290ID0gdGhpcy5fc2hhZG93Um9vdEJvZHkgPSBudWxsLCB0aGlzLl93aWR0aCA9IHRoaXMuX2hlaWdodCA9IDAsIHRoaXMuX3Jlc2l6ZUhhbmRsZXJzID0gW11cblx0XHRcdH0gKSwgdC5hZnRlciggXCJzdHlsZVNlbGZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl91cGRhdGVDYWNoZWREaW1lbnNpb25zKClcblx0XHRcdH0gKVxuXHRcdH0gKVxuXHR9LCBmdW5jdGlvbiggdCwgZSApIHtcblx0XHR2YXIgbjtcblx0XHQobiA9IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0ZnVuY3Rpb24gciggdCwgZSApIHtcblx0XHRcdFx0aWYgKCB0LnJlc2l6ZWRBdHRhY2hlZCApIHtcblx0XHRcdFx0XHRpZiAoIHQucmVzaXplZEF0dGFjaGVkICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHZvaWQgdC5yZXNpemVkQXR0YWNoZWQuYWRkKCBlIClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dC5yZXNpemVkQXR0YWNoZWQgPSBuZXcgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHR2YXIgdCwgZTtcblx0XHRcdFx0XHRcdHRoaXMucSA9IFtdLCB0aGlzLmFkZCA9IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnEucHVzaCggdCApXG5cdFx0XHRcdFx0XHR9LCB0aGlzLmNhbGwgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0Zm9yICggdCA9IDAsIGUgPSB0aGlzLnEubGVuZ3RoOyB0IDwgZTsgdCArKyApIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnFbIHQgXS5jYWxsKClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIHQucmVzaXplZEF0dGFjaGVkLmFkZCggZSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHQucmVzaXplU2Vuc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApLCB0LnJlc2l6ZVNlbnNvci5jbGFzc05hbWUgPSBcInJlc2l6ZS1zZW5zb3JcIjtcblx0XHRcdFx0dmFyIG4gPSBcInBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMDsgdG9wOiAwOyByaWdodDogMDsgYm90dG9tOiAwOyBvdmVyZmxvdzogaGlkZGVuOyB6LWluZGV4OiAtMTsgdmlzaWJpbGl0eTogaGlkZGVuO1wiLFxuXHRcdFx0XHRcdHIgPSBcInBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMDsgdG9wOiAwOyB0cmFuc2l0aW9uOiAwcztcIjtcblx0XHRcdFx0dC5yZXNpemVTZW5zb3Iuc3R5bGUuY3NzVGV4dCA9IG4sIHQucmVzaXplU2Vuc29yLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwicmVzaXplLXNlbnNvci1leHBhbmRcIiBzdHlsZT1cIicgKyBuICsgJ1wiPjxkaXYgc3R5bGU9XCInICsgciArICdcIj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwicmVzaXplLXNlbnNvci1zaHJpbmtcIiBzdHlsZT1cIicgKyBuICsgJ1wiPjxkaXYgc3R5bGU9XCInICsgciArICcgd2lkdGg6IDIwMCU7IGhlaWdodDogMjAwJVwiPjwvZGl2PjwvZGl2PicsIHQuYXBwZW5kQ2hpbGQoIHQucmVzaXplU2Vuc29yICksIHtcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZml4ZWQ6IDEsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFic29sdXRlOiAxXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9WyBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0XHRyZXR1cm4gdC5jdXJyZW50U3R5bGUgPyB0LmN1cnJlbnRTdHlsZVsgZSBdIDogd2luZG93LmdldENvbXB1dGVkU3R5bGUgPyB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSggdCwgbnVsbCApLmdldFByb3BlcnR5VmFsdWUoIGUgKSA6IHQuc3R5bGVbIGUgXVxuXHRcdFx0XHR9KCB0LCBcInBvc2l0aW9uXCIgKSBdIHx8ICh0LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiKTtcblx0XHRcdFx0dmFyIGksIG8sIHMgPSB0LnJlc2l6ZVNlbnNvci5jaGlsZE5vZGVzWyAwIF0sIGEgPSBzLmNoaWxkTm9kZXNbIDAgXSwgdSA9IHQucmVzaXplU2Vuc29yLmNoaWxkTm9kZXNbIDEgXSxcblx0XHRcdFx0XHRjID0gKHUuY2hpbGROb2Rlc1sgMCBdLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGEuc3R5bGUud2lkdGggPSBzLm9mZnNldFdpZHRoICsgMTAgKyBcInB4XCIsIGEuc3R5bGUuaGVpZ2h0ID0gcy5vZmZzZXRIZWlnaHQgKyAxMCArIFwicHhcIiwgcy5zY3JvbGxMZWZ0ID0gcy5zY3JvbGxXaWR0aCwgcy5zY3JvbGxUb3AgPSBzLnNjcm9sbEhlaWdodCwgdS5zY3JvbGxMZWZ0ID0gdS5zY3JvbGxXaWR0aCwgdS5zY3JvbGxUb3AgPSB1LnNjcm9sbEhlaWdodCwgaSA9IHQub2Zmc2V0V2lkdGgsIG8gPSB0Lm9mZnNldEhlaWdodFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRjKCk7XG5cdFx0XHRcdHZhciBkID0gZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0XHRcdFx0dC5hdHRhY2hFdmVudCA/IHQuYXR0YWNoRXZlbnQoIFwib25cIiArIGUsIG4gKSA6IHQuYWRkRXZlbnRMaXN0ZW5lciggZSwgbiApXG5cdFx0XHRcdH0sIGYgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR0Lm9mZnNldFdpZHRoID09IGkgJiYgdC5vZmZzZXRIZWlnaHQgPT0gbyB8fCB0LnJlc2l6ZWRBdHRhY2hlZCAmJiB0LnJlc2l6ZWRBdHRhY2hlZC5jYWxsKCksIGMoKVxuXHRcdFx0XHR9O1xuXHRcdFx0XHRkKCBzLCBcInNjcm9sbFwiLCBmICksIGQoIHUsIFwic2Nyb2xsXCIsIGYgKVxuXHRcdFx0fVxuXG5cdFx0XHR2YXIgaSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCggdCApLFxuXHRcdFx0XHRvID0gXCJbb2JqZWN0IEFycmF5XVwiID09PSBpIHx8IFwiW29iamVjdCBOb2RlTGlzdF1cIiA9PT0gaSB8fCBcIltvYmplY3QgSFRNTENvbGxlY3Rpb25dXCIgPT09IGkgfHwgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgalF1ZXJ5ICYmIHQgaW5zdGFuY2VvZiBqUXVlcnkgfHwgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgRWxlbWVudHMgJiYgdCBpbnN0YW5jZW9mIEVsZW1lbnRzO1xuXHRcdFx0aWYgKCBvICkge1xuXHRcdFx0XHRmb3IgKCB2YXIgcyA9IDAsIGEgPSB0Lmxlbmd0aDsgcyA8IGE7IHMgKysgKSB7XG5cdFx0XHRcdFx0ciggdFsgcyBdLCBlICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHIoIHQsIGUgKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuZGV0YWNoID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggbyApIHtcblx0XHRcdFx0XHRmb3IgKCB2YXIgZSA9IDAsIHIgPSB0Lmxlbmd0aDsgZSA8IHI7IGUgKysgKSB7XG5cdFx0XHRcdFx0XHRuLmRldGFjaCggdFsgZSBdICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG4uZGV0YWNoKCB0IClcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pLmRldGFjaCA9IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0dC5yZXNpemVTZW5zb3IgJiYgKHQucmVtb3ZlQ2hpbGQoIHQucmVzaXplU2Vuc29yICksIGRlbGV0ZSB0LnJlc2l6ZVNlbnNvciwgZGVsZXRlIHQucmVzaXplZEF0dGFjaGVkKVxuXHRcdH0sIHZvaWQgMCAhPT0gdCAmJiB2b2lkIDAgIT09IHQuZXhwb3J0cyA/IHQuZXhwb3J0cyA9IG4gOiB3aW5kb3cuUmVzaXplU2Vuc29yID0gblxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDMgKSwgaSA9IG4oIDAgKSwgbyA9IG4oIDEzICksIHMgPSBuKCAxNCApKCksIGEgPSBuKCA2MiApLCB1ID0gbiggNSApLCBjID0gXCJhLnR3aXR0ZXItZm9sbG93LWJ1dHRvblwiO1xuXHRcdHQuZXhwb3J0cyA9IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0cmV0dXJuIHMoIHQsIGMgKS5tYXAoIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRyZXR1cm4gYSggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0dmFyIGUgPSBvKCB0ICksIG4gPSB7XG5cdFx0XHRcdFx0XHRzY3JlZW5OYW1lOiByLnNjcmVlbk5hbWUoIHQuaHJlZiApLFxuXHRcdFx0XHRcdFx0c2hvd1NjcmVlbk5hbWU6IFwiZmFsc2VcIiAhPT0gdC5nZXRBdHRyaWJ1dGUoIFwiZGF0YS1zaG93LXNjcmVlbi1uYW1lXCIgKSxcblx0XHRcdFx0XHRcdHNob3dDb3VudDogXCJmYWxzZVwiICE9PSB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLXNob3ctY291bnRcIiApLFxuXHRcdFx0XHRcdFx0c2l6ZTogdC5nZXRBdHRyaWJ1dGUoIFwiZGF0YS1zaXplXCIgKSxcblx0XHRcdFx0XHRcdGNvdW50OiB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLWNvdW50XCIgKSxcblx0XHRcdFx0XHRcdHByZXZpZXc6IHQuZ2V0QXR0cmlidXRlKCBcImRhdGEtcHJldmlld1wiIClcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHJldHVybiBpLmZvckluKCBuLCBmdW5jdGlvbiggdCwgbiApIHtcblx0XHRcdFx0XHRcdHZhciByID0gZVsgdCBdO1xuXHRcdFx0XHRcdFx0ZVsgdCBdID0gdS5oYXNWYWx1ZSggciApID8gciA6IG5cblx0XHRcdFx0XHR9ICksIGUuc2NyZWVuTmFtZSA9IGUuc2NyZWVuTmFtZSB8fCBlLnNjcmVlbl9uYW1lLCBlXG5cdFx0XHRcdH0oIHQgKSwgdC5wYXJlbnROb2RlLCB0IClcblx0XHRcdH0gKVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAyICk7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHR2YXIgaSA9IG5ldyByO1xuXHRcdFx0cmV0dXJuIG4uZSggMyApLnRoZW4oIGZ1bmN0aW9uKCByICkge1xuXHRcdFx0XHR2YXIgbztcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRvID0gbiggODkgKSwgaS5yZXNvbHZlKCBuZXcgbyggdCwgZSApIClcblx0XHRcdFx0fSBjYXRjaCAoIHQgKSB7XG5cdFx0XHRcdFx0aS5yZWplY3QoIHQgKVxuXHRcdFx0XHR9XG5cdFx0XHR9LmJpbmQoIG51bGwsIG4gKSApLmNhdGNoKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0aS5yZWplY3QoIHQgKVxuXHRcdFx0fSApLCBpLnByb21pc2Vcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMTggKSwgaSA9IG4oIDEyOCApLCBvID0gbiggNTggKSwgcyA9IG4oIDMyICksIGEgPSBuKCAyICksIHUgPSBuKCA2ICksIGMgPSBuKCA3ICksIGQgPSBuKCAwICksXG5cdFx0XHRmID0geyBhbGxvd2Z1bGxzY3JlZW46IFwidHJ1ZVwiIH0sIGwgPSB7XG5cdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG5cdFx0XHRcdHZpc2liaWxpdHk6IFwiaGlkZGVuXCIsXG5cdFx0XHRcdHdpZHRoOiBcIjBweFwiLFxuXHRcdFx0XHRoZWlnaHQ6IFwiMHB4XCJcblx0XHRcdH0sIGggPSB7XG5cdFx0XHRcdHBvc2l0aW9uOiBcInN0YXRpY1wiLFxuXHRcdFx0XHR2aXNpYmlsaXR5OiBcInZpc2libGVcIlxuXHRcdFx0fSwgcCA9IHt9O1xuXHRcdGkoIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdFx0dmFyIHIgPSBwWyB0IF07XG5cdFx0XHRpZiAoIHIgKSB7XG5cdFx0XHRcdHJldHVybiBlID0gZSB8fCAxLCBuID0gbiB8fCAxLCByLnN0eWxlU2VsZigge1xuXHRcdFx0XHRcdHdpZHRoOiBlICsgXCJweFwiLFxuXHRcdFx0XHRcdGhlaWdodDogbiArIFwicHhcIlxuXHRcdFx0XHR9ICkudGhlbiggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0ci5kaWRSZXNpemUoKVxuXHRcdFx0XHR9IClcblx0XHRcdH1cblx0XHR9LCBmdW5jdGlvbiggdCApIHtcblx0XHRcdHZhciBlID0gcFsgdCBdO1xuXHRcdFx0aWYgKCBlICkge1xuXHRcdFx0XHRyZXR1cm4gZS5fcmVuZGVyZWQucmVzb2x2ZSgpXG5cdFx0XHR9XG5cdFx0fSwgZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHR2YXIgbiA9IHBbIHQgXTtcblx0XHRcdG4gJiYgZSAmJiBuLnNldElmcmFtZVZlcnNpb24oIGUgKVxuXHRcdH0gKSwgdC5leHBvcnRzID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHR0Lm92ZXJyaWRlUHJvcGVydHkoIFwiaWRcIiwge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLnNhbmRib3hFbCAmJiB0aGlzLnNhbmRib3hFbC5pZFxuXHRcdFx0XHR9XG5cdFx0XHR9ICksIHQub3ZlcnJpZGVQcm9wZXJ0eSggXCJpbml0aWFsaXplZFwiLCB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuICEhdGhpcy5pZnJhbWVFbFxuXHRcdFx0XHR9XG5cdFx0XHR9ICksIHQub3ZlcnJpZGVQcm9wZXJ0eSggXCJ3aWR0aFwiLCB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX3dpZHRoXG5cdFx0XHRcdH1cblx0XHRcdH0gKSwgdC5vdmVycmlkZVByb3BlcnR5KCBcImhlaWdodFwiLCB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX2hlaWdodFxuXHRcdFx0XHR9XG5cdFx0XHR9ICksIHQub3ZlcnJpZGVQcm9wZXJ0eSggXCJzYW5kYm94RWxcIiwge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmlmcmFtZUVsXG5cdFx0XHRcdH1cblx0XHRcdH0gKSwgdC5kZWZpbmVQcm9wZXJ0eSggXCJpZnJhbWVFbFwiLCB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX2lmcmFtZVxuXHRcdFx0XHR9XG5cdFx0XHR9ICksIHQuZGVmaW5lUHJvcGVydHkoIFwiaWZyYW1lVmVyc2lvblwiLCB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX2lmcmFtZVZlcnNpb25cblx0XHRcdFx0fVxuXHRcdFx0fSApLCB0LmRlZmluZSggXCJ1cGRhdGVDYWNoZWREaW1lbnNpb25zXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgdCA9IHRoaXM7XG5cdFx0XHRcdHJldHVybiB0aGlzLmluaXRpYWxpemVkID8gci5yZWFkKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR0Ll93aWR0aCA9IHQuc2FuZGJveEVsLm9mZnNldFdpZHRoLCB0Ll9oZWlnaHQgPSB0LnNhbmRib3hFbC5vZmZzZXRIZWlnaHRcblx0XHRcdFx0fSApIDogdS5yZXNvbHZlKClcblx0XHRcdH0gKSwgdC5kZWZpbmUoIFwic2V0VGl0bGVcIiwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHRoaXMuaWZyYW1lRWwudGl0bGUgPSB0XG5cdFx0XHR9ICksIHQuZGVmaW5lKCBcInNldFdhaXRUb1N3YXBVbnRpbFJlbmRlcmVkXCIsIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR0aGlzLl93YWl0VG9Td2FwVW50aWxSZW5kZXJlZCA9IHRcblx0XHRcdH0gKSwgdC5kZWZpbmUoIFwic2V0SWZyYW1lVmVyc2lvblwiLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dGhpcy5faWZyYW1lVmVyc2lvbiA9IHRcblx0XHRcdH0gKSwgdC5kZWZpbmUoIFwiaXNSZW5kZXJlZFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3JlbmRlcmVkLnByb21pc2Vcblx0XHRcdH0gKSwgdC5kZWZpbmUoIFwibWFrZVZpc2libGVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnN0eWxlU2VsZiggaCApXG5cdFx0XHR9ICksIHQuZGVmaW5lKCBcImRpZFJlc2l6ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHQgPSB0aGlzLCBlID0gdC5fcmVzaXplSGFuZGxlcnMubGVuZ3RoID4gMDtcblx0XHRcdFx0cmV0dXJuIHRoaXMudXBkYXRlQ2FjaGVkRGltZW5zaW9ucygpLnRoZW4oIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGUgJiYgdC5fcmVzaXplSGFuZGxlcnMuZm9yRWFjaCggZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRcdFx0XHRlKCB0IClcblx0XHRcdFx0XHR9IClcblx0XHRcdFx0fSApXG5cdFx0XHR9ICksIHQuZGVmaW5lKCBcImxvYWREb2N1bWVudFwiLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUgPSBuZXcgYTtcblx0XHRcdFx0cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZWQgPyB0aGlzLmlmcmFtZUVsLnNyYyA/IHUucmVqZWN0KCBuZXcgRXJyb3IoIFwid2lkZ2V0IGFscmVhZHkgbG9hZGVkXCIgKSApIDogKHRoaXMuaWZyYW1lRWwuYWRkRXZlbnRMaXN0ZW5lciggXCJsb2FkXCIsIGUucmVzb2x2ZSwgITEgKSwgdGhpcy5pZnJhbWVFbC5hZGRFdmVudExpc3RlbmVyKCBcImVycm9yXCIsIGUucmVqZWN0LCAhMSApLCB0aGlzLmlmcmFtZUVsLnNyYyA9IHQsIGUucHJvbWlzZSkgOiB1LnJlamVjdCggbmV3IEVycm9yKCBcInNhbmRib3ggbm90IGluaXRpYWxpemVkXCIgKSApXG5cdFx0XHR9ICksIHQuYWZ0ZXIoIFwiaW5pdGlhbGl6ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHQgPSBuZXcgYTtcblx0XHRcdFx0dGhpcy5faWZyYW1lID0gbnVsbCwgdGhpcy5faWZyYW1lVmVyc2lvbiA9IG51bGwsIHRoaXMuX3dpZHRoID0gdGhpcy5faGVpZ2h0ID0gMCwgdGhpcy5fcmVzaXplSGFuZGxlcnMgPSBbXSwgdGhpcy5fcmVuZGVyZWQgPSB0LCB0aGlzLl93YWl0VG9Td2FwVW50aWxSZW5kZXJlZCA9ICExXG5cdFx0XHR9ICksIHQub3ZlcnJpZGUoIFwiaW5zZXJ0XCIsIGZ1bmN0aW9uKCB0LCBlLCBuLCBpICkge1xuXHRcdFx0XHR2YXIgYSA9IHRoaXM7XG5cdFx0XHRcdHJldHVybiBlID0gZC5hdWcoIHsgaWQ6IHQgfSwgZiwgZSApLCBuID0gZC5hdWcoIHt9LCBsLCBuICksIHRoaXMuX2lmcmFtZSA9IHMoIGUsIG4gKSwgcFsgdCBdID0gdGhpcywgYS5fd2FpdFRvU3dhcFVudGlsUmVuZGVyZWQgfHwgdGhpcy5vblJlc2l6ZSggbyggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0YS5tYWtlVmlzaWJsZSgpXG5cdFx0XHRcdH0gKSApLCByLndyaXRlKCBjKCBpLCBudWxsLCB0aGlzLl9pZnJhbWUgKSApXG5cdFx0XHR9ICksIHQub3ZlcnJpZGUoIFwib25SZXNpemVcIiwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHRoaXMuX3Jlc2l6ZUhhbmRsZXJzLnB1c2goIHQgKVxuXHRcdFx0fSApLCB0LmFmdGVyKCBcInN0eWxlU2VsZlwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMudXBkYXRlQ2FjaGVkRGltZW5zaW9ucygpXG5cdFx0XHR9IClcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMSApLCBpID0gbiggMTI5ICksIG8gPSBuKCAxMzEgKSwgcyA9IG4oIDI1ICksIGEgPSBuKCA1ICksIHUgPSBuKCAxMzIgKTtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHRcdGZ1bmN0aW9uIGMoIHQsIGUgKSB7XG5cdFx0XHRcdHZhciBuID0gdSggdGhpcyApO1xuXHRcdFx0XHRzLnRyaWdnZXIoIHQsIHtcblx0XHRcdFx0XHR0YXJnZXQ6IG4sXG5cdFx0XHRcdFx0cmVnaW9uOiBlLFxuXHRcdFx0XHRcdHR5cGU6IHQsXG5cdFx0XHRcdFx0ZGF0YToge31cblx0XHRcdFx0fSApXG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIGQoIGUgKSB7XG5cdFx0XHRcdHZhciBuID0gdSggdGhpcyApLCByID0gbiAmJiBuLmlkLCBpID0gYS5hc0ludCggZS53aWR0aCApLCBvID0gYS5hc0ludCggZS5oZWlnaHQgKTtcblx0XHRcdFx0ciAmJiB2b2lkIDAgIT09IGkgJiYgdm9pZCAwICE9PSBvICYmIHQoIHIsIGksIG8gKVxuXHRcdFx0fVxuXG5cdFx0XHQobmV3IGkpLmF0dGFjaFJlY2VpdmVyKCBuZXcgby5SZWNlaXZlciggciwgXCJ0d3R0ci5idXR0b25cIiApICkuYmluZCggXCJ0d3R0ci5wcml2YXRlLnRyaWdnZXJcIiwgYyApLmJpbmQoIFwidHd0dHIucHJpdmF0ZS5yZXNpemVCdXR0b25cIiwgZCApLCAobmV3IGkpLmF0dGFjaFJlY2VpdmVyKCBuZXcgby5SZWNlaXZlciggciwgXCJ0d3R0ci5lbWJlZFwiICkgKS5iaW5kKCBcInR3dHRyLnByaXZhdGUuaW5pdGlhbGl6ZWRcIiwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHZhciBlID0gdSggdGhpcyApLCByID0gZSAmJiBlLmlkLCBpID0gdC5pZnJhbWVfdmVyc2lvbjtcblx0XHRcdFx0ciAmJiBpICYmIG4gJiYgbiggciwgaSApXG5cdFx0XHR9ICkuYmluZCggXCJ0d3R0ci5wcml2YXRlLnRyaWdnZXJcIiwgYyApLmJpbmQoIFwidHd0dHIucHJpdmF0ZS5yZW5kZXJlZFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHQgPSB1KCB0aGlzICksIG4gPSB0ICYmIHQuaWQ7XG5cdFx0XHRcdG4gJiYgZSAmJiBlKCBuIClcblx0XHRcdH0gKS5iaW5kKCBcInR3dHRyLnByaXZhdGUucmVzaXplXCIsIGQgKVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAzMyApLCBpID0gbiggMTMwICksIG8gPSBuKCAwICksIHMgPSBuKCA2ICksIGEgPSBuKCAyMyApLCB1ID0gXCIyLjBcIjtcblxuXHRcdGZ1bmN0aW9uIGMoIHQgKSB7XG5cdFx0XHR0aGlzLnJlZ2lzdHJ5ID0gdCB8fCB7fVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGQoIHQgKSB7XG5cdFx0XHR2YXIgZSwgbjtcblx0XHRcdHJldHVybiBlID0gby5pc1R5cGUoIFwic3RyaW5nXCIsIHQgKSwgbiA9IG8uaXNUeXBlKCBcIm51bWJlclwiLCB0ICksIGUgfHwgbiB8fCBudWxsID09PSB0XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZiggdCwgZSApIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGpzb25ycGM6IHUsXG5cdFx0XHRcdGlkOiBkKCB0ICkgPyB0IDogbnVsbCxcblx0XHRcdFx0ZXJyb3I6IGVcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjLnByb3RvdHlwZS5faW52b2tlID0gZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHR2YXIgbiwgciwgaTtcblx0XHRcdG4gPSB0aGlzLnJlZ2lzdHJ5WyB0Lm1ldGhvZCBdLCByID0gdC5wYXJhbXMgfHwgW10sIHIgPSBvLmlzVHlwZSggXCJhcnJheVwiLCByICkgPyByIDogW3JdO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aSA9IG4uYXBwbHkoIGUuc291cmNlIHx8IG51bGwsIHIgKVxuXHRcdFx0fSBjYXRjaCAoIHQgKSB7XG5cdFx0XHRcdGkgPSBzLnJlamVjdCggdC5tZXNzYWdlIClcblx0XHRcdH1cblx0XHRcdHJldHVybiBhLmlzUHJvbWlzZSggaSApID8gaSA6IHMucmVzb2x2ZSggaSApXG5cdFx0fSwgYy5wcm90b3R5cGUuX3Byb2Nlc3NSZXF1ZXN0ID0gZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHR2YXIgbiwgcjtcblx0XHRcdHJldHVybiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUsIG4sIHI7XG5cdFx0XHRcdHJldHVybiAhIW8uaXNPYmplY3QoIHQgKSAmJiAoZSA9IHQuanNvbnJwYyA9PT0gdSwgbiA9IG8uaXNUeXBlKCBcInN0cmluZ1wiLCB0Lm1ldGhvZCApLCByID0gIShcImlkXCIgaW4gdCkgfHwgZCggdC5pZCApLCBlICYmIG4gJiYgcilcblx0XHRcdH0oIHQgKSA/IChuID0gXCJwYXJhbXNcIiBpbiB0ICYmIChyID0gdC5wYXJhbXMsICFvLmlzT2JqZWN0KCByICkgfHwgby5pc1R5cGUoIFwiZnVuY3Rpb25cIiwgciApKSA/IHMucmVzb2x2ZSggZiggdC5pZCwgaS5JTlZBTElEX1BBUkFNUyApICkgOiB0aGlzLnJlZ2lzdHJ5WyB0Lm1ldGhvZCBdID8gdGhpcy5faW52b2tlKCB0LCB7IHNvdXJjZTogZSB9ICkudGhlbiggZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRcdHJldHVybiBuID0gdC5pZCwge1xuXHRcdFx0XHRcdGpzb25ycGM6IHUsXG5cdFx0XHRcdFx0aWQ6IG4sXG5cdFx0XHRcdFx0cmVzdWx0OiBlXG5cdFx0XHRcdH07XG5cdFx0XHRcdHZhciBuXG5cdFx0XHR9LCBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIGYoIHQuaWQsIGkuSU5URVJOQUxfRVJST1IgKVxuXHRcdFx0fSApIDogcy5yZXNvbHZlKCBmKCB0LmlkLCBpLk1FVEhPRF9OT1RfRk9VTkQgKSApLCBudWxsICE9IHQuaWQgPyBuIDogcy5yZXNvbHZlKCkpIDogcy5yZXNvbHZlKCBmKCB0LmlkLCBpLklOVkFMSURfUkVRVUVTVCApIClcblx0XHR9LCBjLnByb3RvdHlwZS5hdHRhY2hSZWNlaXZlciA9IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0cmV0dXJuIHQuYXR0YWNoVG8oIHRoaXMgKSwgdGhpc1xuXHRcdH0sIGMucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdHJldHVybiB0aGlzLnJlZ2lzdHJ5WyB0IF0gPSBlLCB0aGlzXG5cdFx0fSwgYy5wcm90b3R5cGUucmVjZWl2ZSA9IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0dmFyIG4sIGEsIHUsIGMgPSB0aGlzO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dSA9IHQsIHQgPSBvLmlzVHlwZSggXCJzdHJpbmdcIiwgdSApID8gci5wYXJzZSggdSApIDogdVxuXHRcdFx0fSBjYXRjaCAoIHQgKSB7XG5cdFx0XHRcdHJldHVybiBzLnJlc29sdmUoIGYoIG51bGwsIGkuUEFSU0VfRVJST1IgKSApXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZSA9IGUgfHwgbnVsbCwgYSA9ICgobiA9IG8uaXNUeXBlKCBcImFycmF5XCIsIHQgKSkgPyB0IDogW3RdKS5tYXAoIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRyZXR1cm4gYy5fcHJvY2Vzc1JlcXVlc3QoIHQsIGUgKVxuXHRcdFx0fSApLCBuID8gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiBzLmFsbCggdCApLnRoZW4oIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdHJldHVybiAodCA9IHQuZmlsdGVyKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRcdHJldHVybiB2b2lkIDAgIT09IHRcblx0XHRcdFx0XHR9ICkpLmxlbmd0aCA/IHQgOiB2b2lkIDBcblx0XHRcdFx0fSApXG5cdFx0XHR9KCBhICkgOiBhWyAwIF1cblx0XHR9LCB0LmV4cG9ydHMgPSBjXG5cdH0sIGZ1bmN0aW9uKCB0ICkge1xuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdFBBUlNFX0VSUk9SOiB7XG5cdFx0XHRcdGNvZGU6IC0gMzI3MDAsXG5cdFx0XHRcdG1lc3NhZ2U6IFwiUGFyc2UgZXJyb3JcIlxuXHRcdFx0fSxcblx0XHRcdElOVkFMSURfUkVRVUVTVDoge1xuXHRcdFx0XHRjb2RlOiAtIDMyNjAwLFxuXHRcdFx0XHRtZXNzYWdlOiBcIkludmFsaWQgUmVxdWVzdFwiXG5cdFx0XHR9LFxuXHRcdFx0SU5WQUxJRF9QQVJBTVM6IHtcblx0XHRcdFx0Y29kZTogLSAzMjYwMixcblx0XHRcdFx0bWVzc2FnZTogXCJJbnZhbGlkIHBhcmFtc1wiXG5cdFx0XHR9LFxuXHRcdFx0TUVUSE9EX05PVF9GT1VORDoge1xuXHRcdFx0XHRjb2RlOiAtIDMyNjAxLFxuXHRcdFx0XHRtZXNzYWdlOiBcIk1ldGhvZCBub3QgZm91bmRcIlxuXHRcdFx0fSxcblx0XHRcdElOVEVSTkFMX0VSUk9SOiB7XG5cdFx0XHRcdGNvZGU6IC0gMzI2MDMsXG5cdFx0XHRcdG1lc3NhZ2U6IFwiSW50ZXJuYWwgZXJyb3JcIlxuXHRcdFx0fVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCA4ICksIGkgPSBuKCAxICksIG8gPSBuKCAzMyApLCBzID0gbiggMiApLCBhID0gbiggMjIgKSwgdSA9IG4oIDAgKSwgYyA9IG4oIDMgKSwgZCA9IG4oIDcgKSxcblx0XHRcdGYgPSBhLmllOSgpO1xuXG5cdFx0ZnVuY3Rpb24gbCggdCwgZSwgbiApIHtcblx0XHRcdHZhciByO1xuXHRcdFx0dCAmJiB0LnBvc3RNZXNzYWdlICYmIChmID8gciA9IChuIHx8IFwiXCIpICsgby5zdHJpbmdpZnkoIGUgKSA6IG4gPyAociA9IHt9KVsgbiBdID0gZSA6IHIgPSBlLCB0LnBvc3RNZXNzYWdlKCByLCBcIipcIiApKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGgoIHQgKSB7XG5cdFx0XHRyZXR1cm4gdS5pc1R5cGUoIFwic3RyaW5nXCIsIHQgKSA/IHQgOiBcIkpTT05SUENcIlxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHAoIHQsIGUgKSB7XG5cdFx0XHRyZXR1cm4gZSA/IHUuaXNUeXBlKCBcInN0cmluZ1wiLCB0ICkgJiYgMCA9PT0gdC5pbmRleE9mKCBlICkgPyB0LnN1YnN0cmluZyggZS5sZW5ndGggKSA6IHQgJiYgdFsgZSBdID8gdFsgZSBdIDogdm9pZCAwIDogdFxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG0oIHQsIGUgKSB7XG5cdFx0XHR2YXIgbiA9IHQuZG9jdW1lbnQ7XG5cdFx0XHR0aGlzLmZpbHRlciA9IGgoIGUgKSwgdGhpcy5zZXJ2ZXIgPSBudWxsLCB0aGlzLmlzVHdpdHRlckZyYW1lID0gYy5pc1R3aXR0ZXJVUkwoIG4ubG9jYXRpb24uaHJlZiApLCB0LmFkZEV2ZW50TGlzdGVuZXIoIFwibWVzc2FnZVwiLCBkKCB0aGlzLl9vbk1lc3NhZ2UsIHRoaXMgKSwgITEgKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHYoIHQsIGUgKSB7XG5cdFx0XHR0aGlzLnBlbmRpbmcgPSB7fSwgdGhpcy50YXJnZXQgPSB0LCB0aGlzLmlzVHdpdHRlckhvc3QgPSBjLmlzVHdpdHRlclVSTCggci5ocmVmICksIHRoaXMuZmlsdGVyID0gaCggZSApLCBpLmFkZEV2ZW50TGlzdGVuZXIoIFwibWVzc2FnZVwiLCBkKCB0aGlzLl9vbk1lc3NhZ2UsIHRoaXMgKSwgITEgKVxuXHRcdH1cblxuXHRcdHUuYXVnKCBtLnByb3RvdHlwZSwge1xuXHRcdFx0X29uTWVzc2FnZTogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHZhciBlLCBuID0gdGhpcztcblx0XHRcdFx0dGhpcy5zZXJ2ZXIgJiYgKHRoaXMuaXNUd2l0dGVyRnJhbWUgJiYgIWMuaXNUd2l0dGVyVVJMKCB0Lm9yaWdpbiApIHx8IChlID0gcCggdC5kYXRhLCB0aGlzLmZpbHRlciApKSAmJiB0aGlzLnNlcnZlci5yZWNlaXZlKCBlLCB0LnNvdXJjZSApLnRoZW4oIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0XHRcdGUgJiYgbCggdC5zb3VyY2UsIGUsIG4uZmlsdGVyIClcblx0XHRcdFx0fSApKVxuXHRcdFx0fSxcblx0XHRcdGF0dGFjaFRvOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dGhpcy5zZXJ2ZXIgPSB0XG5cdFx0XHR9LFxuXHRcdFx0ZGV0YWNoOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0dGhpcy5zZXJ2ZXIgPSBudWxsXG5cdFx0XHR9XG5cdFx0fSApLCB1LmF1Zyggdi5wcm90b3R5cGUsIHtcblx0XHRcdF9wcm9jZXNzUmVzcG9uc2U6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSA9IHRoaXMucGVuZGluZ1sgdC5pZCBdO1xuXHRcdFx0XHRlICYmIChlLnJlc29sdmUoIHQgKSwgZGVsZXRlIHRoaXMucGVuZGluZ1sgdC5pZCBdKVxuXHRcdFx0fSxcblx0XHRcdF9vbk1lc3NhZ2U6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZTtcblx0XHRcdFx0aWYgKCAoIXRoaXMuaXNUd2l0dGVySG9zdCB8fCBjLmlzVHdpdHRlclVSTCggdC5vcmlnaW4gKSkgJiYgKGUgPSBwKCB0LmRhdGEsIHRoaXMuZmlsdGVyICkpICkge1xuXHRcdFx0XHRcdGlmICggdS5pc1R5cGUoIFwic3RyaW5nXCIsIGUgKSApIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdGUgPSBvLnBhcnNlKCBlIClcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKCB0ICkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KGUgPSB1LmlzVHlwZSggXCJhcnJheVwiLCBlICkgPyBlIDogW2VdKS5mb3JFYWNoKCBkKCB0aGlzLl9wcm9jZXNzUmVzcG9uc2UsIHRoaXMgKSApXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRzZW5kOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUgPSBuZXcgcztcblx0XHRcdFx0cmV0dXJuIHQuaWQgPyB0aGlzLnBlbmRpbmdbIHQuaWQgXSA9IGUgOiBlLnJlc29sdmUoKSwgbCggdGhpcy50YXJnZXQsIHQsIHRoaXMuZmlsdGVyICksIGUucHJvbWlzZVxuXHRcdFx0fVxuXHRcdH0gKSwgdC5leHBvcnRzID0ge1xuXHRcdFx0UmVjZWl2ZXI6IG0sXG5cdFx0XHREaXNwYXRjaGVyOiB2LFxuXHRcdFx0X3N0cmluZ2lmeVBheWxvYWQ6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRyZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgKGYgPSAhIXQpLCBmXG5cdFx0XHR9XG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDQgKTtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdGZvciAoIHZhciBlLCBuID0gci5nZXRFbGVtZW50c0J5VGFnTmFtZSggXCJpZnJhbWVcIiApLCBpID0gMDsgblsgaSBdOyBpICsrICkge1xuXHRcdFx0XHRpZiAoIChlID0gblsgaSBdKS5jb250ZW50V2luZG93ID09PSB0ICkge1xuXHRcdFx0XHRcdHJldHVybiBlXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggNSApLCBpID0gbiggMCApLCBvID0gbiggMyApLCBzID0gbiggMTMgKSwgYSA9IG4oIDE0ICkoKSwgdSA9IG4oIDYzICksIGMgPSBcImEudHdpdHRlci1tb21lbnRcIjtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdHJldHVybiBhKCB0LCBjICkubWFwKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIHUoIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdHZhciBlID0gcyggdCApLCBuID0ge1xuXHRcdFx0XHRcdFx0bW9tZW50SWQ6IG8ubW9tZW50SWQoIHQuaHJlZiApLFxuXHRcdFx0XHRcdFx0Y2hyb21lOiB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLWNocm9tZVwiICksXG5cdFx0XHRcdFx0XHRsaW1pdDogdC5nZXRBdHRyaWJ1dGUoIFwiZGF0YS1saW1pdFwiIClcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHJldHVybiBpLmZvckluKCBuLCBmdW5jdGlvbiggdCwgbiApIHtcblx0XHRcdFx0XHRcdHZhciBpID0gZVsgdCBdO1xuXHRcdFx0XHRcdFx0ZVsgdCBdID0gci5oYXNWYWx1ZSggaSApID8gaSA6IG5cblx0XHRcdFx0XHR9ICksIGVcblx0XHRcdFx0fSggdCApLCB0LnBhcmVudE5vZGUsIHQgKVxuXHRcdFx0fSApXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDIgKTtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdHZhciBpID0gbmV3IHI7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIFtuLmUoIDAgKSwgbi5lKCA0ICldICkudGhlbiggZnVuY3Rpb24oIHIgKSB7XG5cdFx0XHRcdHZhciBvO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdG8gPSBuKCA5MCApLCBpLnJlc29sdmUoIG5ldyBvKCB0LCBlICkgKVxuXHRcdFx0XHR9IGNhdGNoICggdCApIHtcblx0XHRcdFx0XHRpLnJlamVjdCggdCApXG5cdFx0XHRcdH1cblx0XHRcdH0uYmluZCggbnVsbCwgbiApICkuY2F0Y2goIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRpLnJlamVjdCggdCApXG5cdFx0XHR9ICksIGkucHJvbWlzZVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAwICksIGkgPSBuKCAxMyApLCBvID0gbiggMTQgKSgpLCBzID0gbiggNjQgKSwgYSA9IFwiYS5wZXJpc2NvcGUtb24tYWlyXCIsXG5cdFx0XHR1ID0gL15odHRwcz86XFwvXFwvKD86d3d3XFwuKT8oPzpwZXJpc2NvcGV8cHNjcClcXC50dlxcL0A/KFthLXpBLVowLTlfXSspXFwvPyQvaTtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdHJldHVybiBvKCB0LCBhICkubWFwKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIHMoIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdHZhciBlID0gaSggdCApLCBuID0gdC5nZXRBdHRyaWJ1dGUoIFwiaHJlZlwiICksIG8gPSB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLXNpemVcIiApLFxuXHRcdFx0XHRcdFx0cyA9IHUuZXhlYyggbiApWyAxIF07XG5cdFx0XHRcdFx0cmV0dXJuIHIuYXVnKCBlLCB7XG5cdFx0XHRcdFx0XHR1c2VybmFtZTogcyxcblx0XHRcdFx0XHRcdHNpemU6IG9cblx0XHRcdFx0XHR9IClcblx0XHRcdFx0fSggdCApLCB0LnBhcmVudE5vZGUsIHQgKVxuXHRcdFx0fSApXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDIgKTtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdHZhciBpID0gbmV3IHI7XG5cdFx0XHRyZXR1cm4gbi5lKCA1ICkudGhlbiggZnVuY3Rpb24oIHIgKSB7XG5cdFx0XHRcdHZhciBvO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdG8gPSBuKCA5MSApLCBpLnJlc29sdmUoIG5ldyBvKCB0LCBlICkgKVxuXHRcdFx0XHR9IGNhdGNoICggdCApIHtcblx0XHRcdFx0XHRpLnJlamVjdCggdCApXG5cdFx0XHRcdH1cblx0XHRcdH0uYmluZCggbnVsbCwgbiApICkuY2F0Y2goIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRpLnJlamVjdCggdCApXG5cdFx0XHR9ICksIGkucHJvbWlzZVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCA1ICksIGkgPSBuKCAwICksIG8gPSBuKCA2NSApLCBzID0gbiggMTMgKSwgYSA9IG4oIDE0ICkoKSwgdSA9IG4oIDY2ICksIGMgPSBuKCAzICksIGQgPSBuKCAxMiApLFxuXHRcdFx0ZiA9IFwiYS50d2l0dGVyLXRpbWVsaW5lLGRpdi50d2l0dGVyLXRpbWVsaW5lLGEudHdpdHRlci1ncmlkXCIsXG5cdFx0XHRsID0gXCJFbWJlZGRlZCBTZWFyY2ggdGltZWxpbmVzIGhhdmUgYmVlbiBkZXByZWNhdGVkLiBTZWUgaHR0cHM6Ly90d2l0dGVyY29tbXVuaXR5LmNvbS90L2RlcHJlY2F0aW5nLXdpZGdldC1zZXR0aW5ncy8xMDIyOTUuXCIsXG5cdFx0XHRoID0gXCJZb3UgbWF5IGhhdmUgYmVlbiBhZmZlY3RlZCBieSBhbiB1cGRhdGUgdG8gc2V0dGluZ3MgaW4gZW1iZWRkZWQgdGltZWxpbmVzLiBTZWUgaHR0cHM6Ly90d2l0dGVyY29tbXVuaXR5LmNvbS90L2RlcHJlY2F0aW5nLXdpZGdldC1zZXR0aW5ncy8xMDIyOTUuXCIsXG5cdFx0XHRwID0gXCJFbWJlZGRlZCBncmlkcyBoYXZlIGJlZW4gZGVwcmVjYXRlZCBhbmQgd2lsbCBub3cgcmVuZGVyIGFzIHRpbWVsaW5lcy4gUGxlYXNlIHVwZGF0ZSB5b3VyIGVtYmVkIGNvZGUgdG8gdXNlIHRoZSB0d2l0dGVyLXRpbWVsaW5lIGNsYXNzLiBNb3JlIGluZm86IGh0dHBzOi8vdHdpdHRlcmNvbW11bml0eS5jb20vdC91cGRhdGUtb24tdGhlLWVtYmVkZGVkLWdyaWQtZGlzcGxheS10eXBlLzExOTU2NC5cIjtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdHJldHVybiBhKCB0LCBmICkubWFwKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIHUoIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdHZhciBlID0gcyggdCApLCBuID0gdC5nZXRBdHRyaWJ1dGUoIFwiZGF0YS1zaG93LXJlcGxpZXNcIiApLCBhID0ge1xuXHRcdFx0XHRcdFx0aXNQcmVjb25maWd1cmVkOiAhIXQuZ2V0QXR0cmlidXRlKCBcImRhdGEtd2lkZ2V0LWlkXCIgKSxcblx0XHRcdFx0XHRcdGNocm9tZTogdC5nZXRBdHRyaWJ1dGUoIFwiZGF0YS1jaHJvbWVcIiApLFxuXHRcdFx0XHRcdFx0dHdlZXRMaW1pdDogdC5nZXRBdHRyaWJ1dGUoIFwiZGF0YS10d2VldC1saW1pdFwiICkgfHwgdC5nZXRBdHRyaWJ1dGUoIFwiZGF0YS1saW1pdFwiICksXG5cdFx0XHRcdFx0XHRhcmlhTGl2ZTogdC5nZXRBdHRyaWJ1dGUoIFwiZGF0YS1hcmlhLXBvbGl0ZVwiICksXG5cdFx0XHRcdFx0XHR0aGVtZTogdC5nZXRBdHRyaWJ1dGUoIFwiZGF0YS10aGVtZVwiICksXG5cdFx0XHRcdFx0XHRib3JkZXJDb2xvcjogdC5nZXRBdHRyaWJ1dGUoIFwiZGF0YS1ib3JkZXItY29sb3JcIiApLFxuXHRcdFx0XHRcdFx0c2hvd1JlcGxpZXM6IG4gPyByLmFzQm9vbGVhbiggbiApIDogbnVsbCxcblx0XHRcdFx0XHRcdHByb2ZpbGVTY3JlZW5OYW1lOiB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLXNjcmVlbi1uYW1lXCIgKSxcblx0XHRcdFx0XHRcdHByb2ZpbGVVc2VySWQ6IHQuZ2V0QXR0cmlidXRlKCBcImRhdGEtdXNlci1pZFwiICksXG5cdFx0XHRcdFx0XHRmYXZvcml0ZXNTY3JlZW5OYW1lOiB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLWZhdm9yaXRlcy1zY3JlZW4tbmFtZVwiICksXG5cdFx0XHRcdFx0XHRmYXZvcml0ZXNVc2VySWQ6IHQuZ2V0QXR0cmlidXRlKCBcImRhdGEtZmF2b3JpdGVzLXVzZXItaWRcIiApLFxuXHRcdFx0XHRcdFx0bGlrZXNTY3JlZW5OYW1lOiB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLWxpa2VzLXNjcmVlbi1uYW1lXCIgKSxcblx0XHRcdFx0XHRcdGxpa2VzVXNlcklkOiB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLWxpa2VzLXVzZXItaWRcIiApLFxuXHRcdFx0XHRcdFx0bGlzdE93bmVyU2NyZWVuTmFtZTogdC5nZXRBdHRyaWJ1dGUoIFwiZGF0YS1saXN0LW93bmVyLXNjcmVlbi1uYW1lXCIgKSxcblx0XHRcdFx0XHRcdGxpc3RPd25lclVzZXJJZDogdC5nZXRBdHRyaWJ1dGUoIFwiZGF0YS1saXN0LW93bmVyLWlkXCIgKSxcblx0XHRcdFx0XHRcdGxpc3RJZDogdC5nZXRBdHRyaWJ1dGUoIFwiZGF0YS1saXN0LWlkXCIgKSxcblx0XHRcdFx0XHRcdGxpc3RTbHVnOiB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLWxpc3Qtc2x1Z1wiICksXG5cdFx0XHRcdFx0XHRjdXN0b21UaW1lbGluZUlkOiB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLWN1c3RvbS10aW1lbGluZS1pZFwiICksXG5cdFx0XHRcdFx0XHRzdGF0aWNDb250ZW50OiB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLXN0YXRpYy1jb250ZW50XCIgKSxcblx0XHRcdFx0XHRcdHVybDogdC5ocmVmXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRyZXR1cm4gYS5pc1ByZWNvbmZpZ3VyZWQgJiYgKGMuaXNTZWFyY2hVcmwoIGEudXJsICkgPyBkLnB1YmxpY0Vycm9yKCBsLCB0ICkgOiBkLnB1YmxpY0xvZyggaCwgdCApKSwgXCJ0d2l0dGVyLWdyaWRcIiA9PT0gdC5jbGFzc05hbWUgJiYgZC5wdWJsaWNMb2coIHAsIHQgKSwgKGEgPSBpLmF1ZyggYSwgZSApKS5kYXRhU291cmNlID0gbyggYSApLCBhLmlkID0gYS5kYXRhU291cmNlICYmIGEuZGF0YVNvdXJjZS5pZCwgYVxuXHRcdFx0XHR9KCB0ICksIHQucGFyZW50Tm9kZSwgdCApXG5cdFx0XHR9IClcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMjggKTtcblx0XHR0LmV4cG9ydHMgPSByLmJ1aWxkKCBbbiggMjkgKSwgbiggMTQxICldIClcblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAwICksIGkgPSBuKCAxNDAgKTtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdHJldHVybiBcImVuXCIgPT09IHQgfHwgci5jb250YWlucyggaSwgdCApXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSApIHtcblx0XHR0LmV4cG9ydHMgPSBbXG5cdFx0XHRcImhpXCIsXG5cdFx0XHRcInpoLWNuXCIsXG5cdFx0XHRcImZyXCIsXG5cdFx0XHRcInpoLXR3XCIsXG5cdFx0XHRcIm1zYVwiLFxuXHRcdFx0XCJmaWxcIixcblx0XHRcdFwiZmlcIixcblx0XHRcdFwic3ZcIixcblx0XHRcdFwicGxcIixcblx0XHRcdFwiamFcIixcblx0XHRcdFwia29cIixcblx0XHRcdFwiZGVcIixcblx0XHRcdFwiaXRcIixcblx0XHRcdFwicHRcIixcblx0XHRcdFwiZXNcIixcblx0XHRcdFwicnVcIixcblx0XHRcdFwiaWRcIixcblx0XHRcdFwidHJcIixcblx0XHRcdFwiZGFcIixcblx0XHRcdFwibm9cIixcblx0XHRcdFwibmxcIixcblx0XHRcdFwiaHVcIixcblx0XHRcdFwiZmFcIixcblx0XHRcdFwiYXJcIixcblx0XHRcdFwidXJcIixcblx0XHRcdFwiaGVcIixcblx0XHRcdFwidGhcIixcblx0XHRcdFwiY3NcIixcblx0XHRcdFwidWtcIixcblx0XHRcdFwidmlcIixcblx0XHRcdFwicm9cIixcblx0XHRcdFwiYm5cIixcblx0XHRcdFwiZWxcIixcblx0XHRcdFwiZW4tZ2JcIixcblx0XHRcdFwiZ3VcIixcblx0XHRcdFwia25cIixcblx0XHRcdFwibXJcIixcblx0XHRcdFwidGFcIixcblx0XHRcdFwiYmdcIixcblx0XHRcdFwiY2FcIixcblx0XHRcdFwiaHJcIixcblx0XHRcdFwic3JcIixcblx0XHRcdFwic2tcIlxuXHRcdF1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAzICksIGkgPSBuKCAwICksIG8gPSBuKCAxOSApLCBzID0gXCJjb2xsZWN0aW9uOlwiO1xuXG5cdFx0ZnVuY3Rpb24gYSggdCwgZSApIHtcblx0XHRcdHJldHVybiByLmNvbGxlY3Rpb25JZCggdCApIHx8IGVcblx0XHR9XG5cblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdHQucGFyYW1zKCB7XG5cdFx0XHRcdGlkOiB7fSxcblx0XHRcdFx0dXJsOiB7fVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlUHJvcGVydHkoIFwiaWRcIiwge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciB0ID0gYSggdGhpcy5wYXJhbXMudXJsLCB0aGlzLnBhcmFtcy5pZCApO1xuXHRcdFx0XHRcdHJldHVybiBzICsgdFxuXHRcdFx0XHR9XG5cdFx0XHR9ICksIHQub3ZlcnJpZGVQcm9wZXJ0eSggXCJlbmRwb2ludFwiLCB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG8udGltZWxpbmUoIFtcImNvbGxlY3Rpb25cIl0gKVxuXHRcdFx0XHR9XG5cdFx0XHR9ICksIHQuYXJvdW5kKCBcInF1ZXJ5UGFyYW1zXCIsIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRyZXR1cm4gaS5hdWcoIHQoKSwgeyBjb2xsZWN0aW9uX2lkOiBhKCB0aGlzLnBhcmFtcy51cmwsIHRoaXMucGFyYW1zLmlkICkgfSApXG5cdFx0XHR9ICksIHQuYmVmb3JlKCBcImluaXRpYWxpemVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggIWEoIHRoaXMucGFyYW1zLnVybCwgdGhpcy5wYXJhbXMuaWQgKSApIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwib25lIG9mIHVybCBvciBpZCBpcyByZXF1aXJlZFwiIClcblx0XHRcdFx0fVxuXHRcdFx0fSApXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDI4ICk7XG5cdFx0dC5leHBvcnRzID0gci5idWlsZCggW24oIDI5ICksIG4oIDE0MyApXSApXG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMyApLCBpID0gbiggMCApLCBvID0gbiggMTkgKSwgcyA9IFwiZXZlbnQ6XCI7XG5cblx0XHRmdW5jdGlvbiBhKCB0LCBlICkge1xuXHRcdFx0cmV0dXJuIHIuZXZlbnRJZCggdCApIHx8IGVcblx0XHR9XG5cblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdHQucGFyYW1zKCB7XG5cdFx0XHRcdGlkOiB7fSxcblx0XHRcdFx0dXJsOiB7fVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlUHJvcGVydHkoIFwiaWRcIiwge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciB0ID0gYSggdGhpcy5wYXJhbXMudXJsLCB0aGlzLnBhcmFtcy5pZCApO1xuXHRcdFx0XHRcdHJldHVybiBzICsgdFxuXHRcdFx0XHR9XG5cdFx0XHR9ICksIHQub3ZlcnJpZGVQcm9wZXJ0eSggXCJlbmRwb2ludFwiLCB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG8udGltZWxpbmUoIFtcImV2ZW50XCJdIClcblx0XHRcdFx0fVxuXHRcdFx0fSApLCB0LmFyb3VuZCggXCJxdWVyeVBhcmFtc1wiLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIGkuYXVnKCB0KCksIHsgZXZlbnRfaWQ6IGEoIHRoaXMucGFyYW1zLnVybCwgdGhpcy5wYXJhbXMuaWQgKSB9IClcblx0XHRcdH0gKSwgdC5iZWZvcmUoIFwiaW5pdGlhbGl6ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCAhYSggdGhpcy5wYXJhbXMudXJsLCB0aGlzLnBhcmFtcy5pZCApICkge1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJvbmUgb2YgdXJsIG9yIGlkIGlzIHJlcXVpcmVkXCIgKVxuXHRcdFx0XHR9XG5cdFx0XHR9IClcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMjggKTtcblx0XHR0LmV4cG9ydHMgPSByLmJ1aWxkKCBbbiggMjkgKSwgbiggMTQ1ICldIClcblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAzICksIGkgPSBuKCAwICksIG8gPSBuKCAxOSApLCBzID0gXCJsaWtlczpcIjtcblxuXHRcdGZ1bmN0aW9uIGEoIHQgKSB7XG5cdFx0XHRyZXR1cm4gci5saWtlc1NjcmVlbk5hbWUoIHQudXJsICkgfHwgdC5zY3JlZW5OYW1lXG5cdFx0fVxuXG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHR0LnBhcmFtcygge1xuXHRcdFx0XHRzY3JlZW5OYW1lOiB7fSxcblx0XHRcdFx0dXNlcklkOiB7fSxcblx0XHRcdFx0dXJsOiB7fVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlUHJvcGVydHkoIFwiaWRcIiwge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciB0ID0gYSggdGhpcy5wYXJhbXMgKSB8fCB0aGlzLnBhcmFtcy51c2VySWQ7XG5cdFx0XHRcdFx0cmV0dXJuIHMgKyB0XG5cdFx0XHRcdH1cblx0XHRcdH0gKSwgdC5vdmVycmlkZVByb3BlcnR5KCBcImVuZHBvaW50XCIsIHtcblx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZXR1cm4gby50aW1lbGluZSggW1wibGlrZXNcIl0gKVxuXHRcdFx0XHR9XG5cdFx0XHR9ICksIHQuZGVmaW5lKCBcIl9nZXRMaWtlc1F1ZXJ5UGFyYW1cIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciB0ID0gYSggdGhpcy5wYXJhbXMgKTtcblx0XHRcdFx0cmV0dXJuIHQgPyB7IHNjcmVlbl9uYW1lOiB0IH0gOiB7IHVzZXJfaWQ6IHRoaXMucGFyYW1zLnVzZXJJZCB9XG5cdFx0XHR9ICksIHQuYXJvdW5kKCBcInF1ZXJ5UGFyYW1zXCIsIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRyZXR1cm4gaS5hdWcoIHQoKSwgdGhpcy5fZ2V0TGlrZXNRdWVyeVBhcmFtKCkgKVxuXHRcdFx0fSApLCB0LmJlZm9yZSggXCJpbml0aWFsaXplXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoICFhKCB0aGlzLnBhcmFtcyApICYmICF0aGlzLnBhcmFtcy51c2VySWQgKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcInNjcmVlbiBuYW1lIG9yIHVzZXIgaWQgaXMgcmVxdWlyZWRcIiApXG5cdFx0XHRcdH1cblx0XHRcdH0gKVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAyOCApO1xuXHRcdHQuZXhwb3J0cyA9IHIuYnVpbGQoIFtuKCAyOSApLCBuKCAxNDcgKV0gKVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDMgKSwgaSA9IG4oIDAgKSwgbyA9IG4oIDE5ICksIHMgPSBcImxpc3Q6XCI7XG5cblx0XHRmdW5jdGlvbiBhKCB0ICkge1xuXHRcdFx0dmFyIGUgPSByLmxpc3RTY3JlZW5OYW1lQW5kU2x1ZyggdC51cmwgKSB8fCB0O1xuXHRcdFx0cmV0dXJuIGkuY29tcGFjdCgge1xuXHRcdFx0XHRzY3JlZW5fbmFtZTogZS5vd25lclNjcmVlbk5hbWUsXG5cdFx0XHRcdHVzZXJfaWQ6IGUub3duZXJVc2VySWQsXG5cdFx0XHRcdGxpc3Rfc2x1ZzogZS5zbHVnXG5cdFx0XHR9IClcblx0XHR9XG5cblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdHQucGFyYW1zKCB7XG5cdFx0XHRcdGlkOiB7fSxcblx0XHRcdFx0b3duZXJTY3JlZW5OYW1lOiB7fSxcblx0XHRcdFx0b3duZXJVc2VySWQ6IHt9LFxuXHRcdFx0XHRzbHVnOiB7fSxcblx0XHRcdFx0dXJsOiB7fVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlUHJvcGVydHkoIFwiaWRcIiwge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciB0LCBlLCBuO1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLnBhcmFtcy5pZCA/IHMgKyB0aGlzLnBhcmFtcy5pZCA6IChlID0gKHQgPSBhKCB0aGlzLnBhcmFtcyApKSAmJiB0Lmxpc3Rfc2x1Zy5yZXBsYWNlKCAvLS9nLCBcIl9cIiApLCBuID0gdCAmJiAodC5zY3JlZW5fbmFtZSB8fCB0LnVzZXJfaWQpLCBzICsgKG4gKyBcIjpcIikgKyBlKVxuXHRcdFx0XHR9XG5cdFx0XHR9ICksIHQub3ZlcnJpZGVQcm9wZXJ0eSggXCJlbmRwb2ludFwiLCB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG8udGltZWxpbmUoIFtcImxpc3RcIl0gKVxuXHRcdFx0XHR9XG5cdFx0XHR9ICksIHQuZGVmaW5lKCBcIl9nZXRMaXN0UXVlcnlQYXJhbVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMucGFyYW1zLmlkID8geyBsaXN0X2lkOiB0aGlzLnBhcmFtcy5pZCB9IDogYSggdGhpcy5wYXJhbXMgKVxuXHRcdFx0fSApLCB0LmFyb3VuZCggXCJxdWVyeVBhcmFtc1wiLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIGkuYXVnKCB0KCksIHRoaXMuX2dldExpc3RRdWVyeVBhcmFtKCkgKVxuXHRcdFx0fSApLCB0LmJlZm9yZSggXCJpbml0aWFsaXplXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgdCA9IGEoIHRoaXMucGFyYW1zICk7XG5cdFx0XHRcdGlmICggaS5pc0VtcHR5T2JqZWN0KCB0ICkgJiYgIXRoaXMucGFyYW1zLmlkICkge1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJxdWFsaWZpZWQgc2x1ZyBvciBsaXN0IGlkIHJlcXVpcmVkXCIgKVxuXHRcdFx0XHR9XG5cdFx0XHR9IClcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMjggKTtcblx0XHR0LmV4cG9ydHMgPSByLmJ1aWxkKCBbbiggMjkgKSwgbiggMTQ5ICldIClcblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAzICksIGkgPSBuKCA1ICksIG8gPSBuKCAwICksIHMgPSBuKCAxOSApLCBhID0gXCJwcm9maWxlOlwiO1xuXG5cdFx0ZnVuY3Rpb24gdSggdCwgZSApIHtcblx0XHRcdHJldHVybiByLnNjcmVlbk5hbWUoIHQgKSB8fCBlXG5cdFx0fVxuXG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHR0LnBhcmFtcygge1xuXHRcdFx0XHRzaG93UmVwbGllczoge1xuXHRcdFx0XHRcdGZhbGxiYWNrOiAhMSxcblx0XHRcdFx0XHR0cmFuc2Zvcm06IGkuYXNCb29sZWFuXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNjcmVlbk5hbWU6IHt9LFxuXHRcdFx0XHR1c2VySWQ6IHt9LFxuXHRcdFx0XHR1cmw6IHt9XG5cdFx0XHR9ICksIHQub3ZlcnJpZGVQcm9wZXJ0eSggXCJpZFwiLCB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dmFyIHQgPSB1KCB0aGlzLnBhcmFtcy51cmwsIHRoaXMucGFyYW1zLnNjcmVlbk5hbWUgKTtcblx0XHRcdFx0XHRyZXR1cm4gYSArICh0IHx8IHRoaXMucGFyYW1zLnVzZXJJZClcblx0XHRcdFx0fVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlUHJvcGVydHkoIFwiZW5kcG9pbnRcIiwge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiBzLnRpbWVsaW5lKCBbXCJwcm9maWxlXCJdIClcblx0XHRcdFx0fVxuXHRcdFx0fSApLCB0LmRlZmluZSggXCJfZ2V0UHJvZmlsZVF1ZXJ5UGFyYW1cIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciB0ID0gdSggdGhpcy5wYXJhbXMudXJsLCB0aGlzLnBhcmFtcy5zY3JlZW5OYW1lICksXG5cdFx0XHRcdFx0ZSA9IHQgPyB7IHNjcmVlbl9uYW1lOiB0IH0gOiB7IHVzZXJfaWQ6IHRoaXMucGFyYW1zLnVzZXJJZCB9O1xuXHRcdFx0XHRyZXR1cm4gby5hdWcoIGUsIHsgd2l0aF9yZXBsaWVzOiB0aGlzLnBhcmFtcy5zaG93UmVwbGllcyA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiIH0gKVxuXHRcdFx0fSApLCB0LmFyb3VuZCggXCJxdWVyeVBhcmFtc1wiLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIG8uYXVnKCB0KCksIHRoaXMuX2dldFByb2ZpbGVRdWVyeVBhcmFtKCkgKVxuXHRcdFx0fSApLCB0LmJlZm9yZSggXCJpbml0aWFsaXplXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoICF1KCB0aGlzLnBhcmFtcy51cmwsIHRoaXMucGFyYW1zLnNjcmVlbk5hbWUgKSAmJiAhdGhpcy5wYXJhbXMudXNlcklkICkge1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJzY3JlZW4gbmFtZSBvciB1c2VyIGlkIGlzIHJlcXVpcmVkXCIgKVxuXHRcdFx0XHR9XG5cdFx0XHR9IClcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMiApO1xuXHRcdHQuZXhwb3J0cyA9IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0dmFyIGkgPSBuZXcgcjtcblx0XHRcdHJldHVybiBQcm9taXNlLmFsbCggW24uZSggMCApLCBuLmUoIDYgKV0gKS50aGVuKCBmdW5jdGlvbiggciApIHtcblx0XHRcdFx0dmFyIG87XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0byA9IG4oIDkyICksIGkucmVzb2x2ZSggbmV3IG8oIHQsIGUgKSApXG5cdFx0XHRcdH0gY2F0Y2ggKCB0ICkge1xuXHRcdFx0XHRcdGkucmVqZWN0KCB0IClcblx0XHRcdFx0fVxuXHRcdFx0fS5iaW5kKCBudWxsLCBuICkgKS5jYXRjaCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdGkucmVqZWN0KCB0IClcblx0XHRcdH0gKSwgaS5wcm9taXNlXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDEwICksIGkgPSBuKCAzICksIG8gPSBuKCAwICksIHMgPSBuKCAxMyApLCBhID0gbiggMTQgKSgpLCB1ID0gbiggNjcgKSxcblx0XHRcdGMgPSBcImJsb2NrcXVvdGUudHdpdHRlci10d2VldCwgYmxvY2txdW90ZS50d2l0dGVyLXZpZGVvXCIsIGQgPSAvXFxidHctYWxpZ24tKGxlZnR8cmlnaHR8Y2VudGVyKVxcYi87XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRyZXR1cm4gYSggdCwgYyApLm1hcCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiB1KCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHR2YXIgZSA9IHMoIHQgKSwgbiA9IHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIFwiQVwiICksIGEgPSBuICYmIG5bIG4ubGVuZ3RoIC0gMSBdLFxuXHRcdFx0XHRcdFx0dSA9IGEgJiYgaS5zdGF0dXMoIGEuaHJlZiApLCBjID0gdC5nZXRBdHRyaWJ1dGUoIFwiZGF0YS1jb252ZXJzYXRpb25cIiApLFxuXHRcdFx0XHRcdFx0ZiA9IFwibm9uZVwiID09IGMgfHwgXCJoaWRkZW5cIiA9PSBjIHx8IHIucHJlc2VudCggdCwgXCJ0dy1oaWRlLXRocmVhZFwiICksXG5cdFx0XHRcdFx0XHRsID0gdC5nZXRBdHRyaWJ1dGUoIFwiZGF0YS1jYXJkc1wiICksXG5cdFx0XHRcdFx0XHRoID0gXCJub25lXCIgPT0gbCB8fCBcImhpZGRlblwiID09IGwgfHwgci5wcmVzZW50KCB0LCBcInR3LWhpZGUtbWVkaWFcIiApLFxuXHRcdFx0XHRcdFx0cCA9IHQuZ2V0QXR0cmlidXRlKCBcImRhdGEtYWxpZ25cIiApIHx8IHQuZ2V0QXR0cmlidXRlKCBcImFsaWduXCIgKSxcblx0XHRcdFx0XHRcdG0gPSB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLXRoZW1lXCIgKTtcblx0XHRcdFx0XHRyZXR1cm4gIXAgJiYgZC50ZXN0KCB0LmNsYXNzTmFtZSApICYmIChwID0gUmVnRXhwLiQxKSwgby5hdWcoIGUsIHtcblx0XHRcdFx0XHRcdHR3ZWV0SWQ6IHUsXG5cdFx0XHRcdFx0XHRoaWRlVGhyZWFkOiBmLFxuXHRcdFx0XHRcdFx0aGlkZUNhcmQ6IGgsXG5cdFx0XHRcdFx0XHRhbGlnbjogcCxcblx0XHRcdFx0XHRcdHRoZW1lOiBtLFxuXHRcdFx0XHRcdFx0aWQ6IHVcblx0XHRcdFx0XHR9IClcblx0XHRcdFx0fSggdCApLCB0LnBhcmVudE5vZGUsIHQsIGUgKVxuXHRcdFx0fSApXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDg2ICksIGkgPSBuKCAyMSApLCBvID0gXCJ0ZndfaG9yaXpvbl90d2VldF9lbWJlZF85NTU1XCI7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHR2YXIgbjtcblx0XHRcdHQgJiYgKG4gPSB0WyBvIF0pICYmIG4uYnVja2V0ICYmIHIoIG8sIG4uYnVja2V0LCBuLnZlcnNpb24sIGkuZm9ybWF0SG9yaXpvblR3ZWV0RGF0YSggZSApIClcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMiApO1xuXHRcdHQuZXhwb3J0cyA9IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0dmFyIGkgPSBuZXcgcjtcblx0XHRcdHJldHVybiBuLmUoIDcgKS50aGVuKCBmdW5jdGlvbiggciApIHtcblx0XHRcdFx0dmFyIG87XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0byA9IG4oIDkzICksIGkucmVzb2x2ZSggbmV3IG8oIHQsIGUgKSApXG5cdFx0XHRcdH0gY2F0Y2ggKCB0ICkge1xuXHRcdFx0XHRcdGkucmVqZWN0KCB0IClcblx0XHRcdFx0fVxuXHRcdFx0fS5iaW5kKCBudWxsLCBuICkgKS5jYXRjaCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdGkucmVqZWN0KCB0IClcblx0XHRcdH0gKSwgaS5wcm9taXNlXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDIgKTtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdHZhciBpID0gbmV3IHI7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIFtuLmUoIDAgKSwgbi5lKCA4ICldICkudGhlbiggZnVuY3Rpb24oIHIgKSB7XG5cdFx0XHRcdHZhciBvO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdG8gPSBuKCA5NCApLCBpLnJlc29sdmUoIG5ldyBvKCB0LCBlICkgKVxuXHRcdFx0XHR9IGNhdGNoICggdCApIHtcblx0XHRcdFx0XHRpLnJlamVjdCggdCApXG5cdFx0XHRcdH1cblx0XHRcdH0uYmluZCggbnVsbCwgbiApICkuY2F0Y2goIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRpLnJlamVjdCggdCApXG5cdFx0XHR9ICksIGkucHJvbWlzZVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAxMCApLCBpID0gbiggMCApLCBvID0gbiggMTMgKSwgcyA9IG4oIDE0ICkoKSwgYSA9IG4oIDY5ICksIHUgPSBuKCA1ICksXG5cdFx0XHRjID0gXCJhLnR3aXR0ZXItc2hhcmUtYnV0dG9uLCBhLnR3aXR0ZXItbWVudGlvbi1idXR0b24sIGEudHdpdHRlci1oYXNodGFnLWJ1dHRvblwiLFxuXHRcdFx0ZCA9IFwidHdpdHRlci1oYXNodGFnLWJ1dHRvblwiLCBmID0gXCJ0d2l0dGVyLW1lbnRpb24tYnV0dG9uXCI7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRyZXR1cm4gcyggdCwgYyApLm1hcCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiBhKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHR2YXIgZSA9IG8oIHQgKSwgbiA9IHtcblx0XHRcdFx0XHRcdHNjcmVlbk5hbWU6IHQuZ2V0QXR0cmlidXRlKCBcImRhdGEtYnV0dG9uLXNjcmVlbi1uYW1lXCIgKSxcblx0XHRcdFx0XHRcdHRleHQ6IHQuZ2V0QXR0cmlidXRlKCBcImRhdGEtdGV4dFwiICksXG5cdFx0XHRcdFx0XHR0eXBlOiB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLXR5cGVcIiApLFxuXHRcdFx0XHRcdFx0c2l6ZTogdC5nZXRBdHRyaWJ1dGUoIFwiZGF0YS1zaXplXCIgKSxcblx0XHRcdFx0XHRcdHVybDogdC5nZXRBdHRyaWJ1dGUoIFwiZGF0YS11cmxcIiApLFxuXHRcdFx0XHRcdFx0aGFzaHRhZ3M6IHQuZ2V0QXR0cmlidXRlKCBcImRhdGEtaGFzaHRhZ3NcIiApLFxuXHRcdFx0XHRcdFx0dmlhOiB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLXZpYVwiICksXG5cdFx0XHRcdFx0XHRidXR0b25IYXNodGFnOiB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLWJ1dHRvbi1oYXNodGFnXCIgKVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0cmV0dXJuIGkuZm9ySW4oIG4sIGZ1bmN0aW9uKCB0LCBuICkge1xuXHRcdFx0XHRcdFx0dmFyIHIgPSBlWyB0IF07XG5cdFx0XHRcdFx0XHRlWyB0IF0gPSB1Lmhhc1ZhbHVlKCByICkgPyByIDogblxuXHRcdFx0XHRcdH0gKSwgZS5zY3JlZW5OYW1lID0gZS5zY3JlZW5OYW1lIHx8IGUuc2NyZWVuX25hbWUsIGUuYnV0dG9uSGFzaHRhZyA9IGUuYnV0dG9uSGFzaHRhZyB8fCBlLmJ1dHRvbl9oYXNodGFnIHx8IGUuaGFzaHRhZywgci5wcmVzZW50KCB0LCBkICkgJiYgKGUudHlwZSA9IFwiaGFzaHRhZ1wiKSwgci5wcmVzZW50KCB0LCBmICkgJiYgKGUudHlwZSA9IFwibWVudGlvblwiKSwgZVxuXHRcdFx0XHR9KCB0ICksIHQucGFyZW50Tm9kZSwgdCApXG5cdFx0XHR9IClcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMiApO1xuXHRcdHQuZXhwb3J0cyA9IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0dmFyIGkgPSBuZXcgcjtcblx0XHRcdHJldHVybiBuLmUoIDMgKS50aGVuKCBmdW5jdGlvbiggciApIHtcblx0XHRcdFx0dmFyIG87XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0byA9IG4oIDk1ICksIGkucmVzb2x2ZSggbmV3IG8oIHQsIGUgKSApXG5cdFx0XHRcdH0gY2F0Y2ggKCB0ICkge1xuXHRcdFx0XHRcdGkucmVqZWN0KCB0IClcblx0XHRcdFx0fVxuXHRcdFx0fS5iaW5kKCBudWxsLCBuICkgKS5jYXRjaCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdGkucmVqZWN0KCB0IClcblx0XHRcdH0gKSwgaS5wcm9taXNlXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDAgKTtcblx0XHR0LmV4cG9ydHMgPSByLmF1Zygge30sIG4oIDE1OCApLCBuKCAxNTkgKSwgbiggMTYwICksIG4oIDE2MSApLCBuKCAxNjIgKSwgbiggMTYzICksIG4oIDE2NCApIClcblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCA1OSApLCBpID0gbiggMTcgKSggW1widXNlcklkXCJdLCB7fSwgciApO1xuXHRcdHQuZXhwb3J0cyA9IHsgY3JlYXRlRE1CdXR0b246IGkgfVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDYyICksIGkgPSBuKCAxNyApKCBbXCJzY3JlZW5OYW1lXCJdLCB7fSwgciApO1xuXHRcdHQuZXhwb3J0cyA9IHsgY3JlYXRlRm9sbG93QnV0dG9uOiBpIH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCA2MyApLCBpID0gbiggMTcgKSggW1wibW9tZW50SWRcIl0sIHt9LCByICk7XG5cdFx0dC5leHBvcnRzID0geyBjcmVhdGVNb21lbnQ6IGkgfVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDY0ICksIGkgPSBuKCAxNyApKCBbXCJ1c2VybmFtZVwiXSwge30sIHIgKTtcblx0XHR0LmV4cG9ydHMgPSB7IGNyZWF0ZVBlcmlzY29wZU9uQWlyQnV0dG9uOiBpIH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCA4ICksIGkgPSBuKCAxMiApLCBvID0gbiggMyApLCBzID0gbiggMCApLCBhID0gbiggNSApLCB1ID0gbiggNjUgKSwgYyA9IG4oIDY2ICksXG5cdFx0XHRkID0gbiggMTcgKSggW10sIHt9LCBjICksIGYgPSBuKCA2ICksXG5cdFx0XHRsID0gXCJFbWJlZGRlZCBncmlkcyBoYXZlIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSB0d3R0ci53aWRnZXRzLmNyZWF0ZVRpbWVsaW5lIGluc3RlYWQuIE1vcmUgaW5mbzogaHR0cHM6Ly90d2l0dGVyY29tbXVuaXR5LmNvbS90L3VwZGF0ZS1vbi10aGUtZW1iZWRkZWQtZ3JpZC1kaXNwbGF5LXR5cGUvMTE5NTY0LlwiLFxuXHRcdFx0aCA9IHtcblx0XHRcdFx0Y3JlYXRlVGltZWxpbmU6IHAsXG5cdFx0XHRcdGNyZWF0ZUdyaWRGcm9tQ29sbGVjdGlvbjogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0dmFyIGUgPSBzLnRvUmVhbEFycmF5KCBhcmd1bWVudHMgKS5zbGljZSggMSApLCBuID0ge1xuXHRcdFx0XHRcdFx0c291cmNlVHlwZTogXCJjb2xsZWN0aW9uXCIsXG5cdFx0XHRcdFx0XHRpZDogdFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0cmV0dXJuIGUudW5zaGlmdCggbiApLCBpLnB1YmxpY0xvZyggbCApLCBwLmFwcGx5KCB0aGlzLCBlIClcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdGZ1bmN0aW9uIHAoIHQgKSB7XG5cdFx0XHR2YXIgZSwgbiA9IHMudG9SZWFsQXJyYXkoIGFyZ3VtZW50cyApLnNsaWNlKCAxICk7XG5cdFx0XHRyZXR1cm4gYS5pc1N0cmluZyggdCApIHx8IGEuaXNOdW1iZXIoIHQgKSA/IGYucmVqZWN0KCBcIkVtYmVkZGVkIHRpbWVsaW5lcyB3aXRoIHdpZGdldCBzZXR0aW5ncyBoYXZlIGJlZW4gZGVwcmVjYXRlZC4gU2VlIGh0dHBzOi8vdHdpdHRlcmNvbW11bml0eS5jb20vdC9kZXByZWNhdGluZy13aWRnZXQtc2V0dGluZ3MvMTAyMjk1LlwiICkgOiBzLmlzT2JqZWN0KCB0ICkgPyAodCA9IHQgfHwge30sIG4uZm9yRWFjaCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHMuaXNUeXBlKCBcIm9iamVjdFwiLCB0ICkgJiYgZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0dC5hcmlhTGl2ZSA9IHQuYXJpYVBvbGl0ZVxuXHRcdFx0XHR9KCBlID0gdCApXG5cdFx0XHR9ICksIGUgfHwgKGUgPSB7fSwgbi5wdXNoKCBlICkpLCB0LmxhbmcgPSBlLmxhbmcsIHQudHdlZXRMaW1pdCA9IGUudHdlZXRMaW1pdCwgdC5zaG93UmVwbGllcyA9IGUuc2hvd1JlcGxpZXMsIGUuZGF0YVNvdXJjZSA9IHUoIHQgKSwgZC5hcHBseSggdGhpcywgbiApKSA6IGYucmVqZWN0KCBcImRhdGEgc291cmNlIG11c3QgYmUgYW4gb2JqZWN0LlwiIClcblx0XHR9XG5cblx0XHRvLmlzVHdpdHRlclVSTCggci5ocmVmICkgJiYgKGguY3JlYXRlVGltZWxpbmVQcmV2aWV3ID0gZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0XHR2YXIgciA9IHtcblx0XHRcdFx0cHJldmlld1BhcmFtczogdCxcblx0XHRcdFx0dXNlTGVnYWN5RGVmYXVsdHM6ICEwLFxuXHRcdFx0XHRpc1ByZXZpZXdUaW1lbGluZTogITBcblx0XHRcdH07XG5cdFx0XHRyZXR1cm4gci5kYXRhU291cmNlID0gdSggciApLCBkKCBlLCByLCBuIClcblx0XHR9KSwgdC5leHBvcnRzID0gaFxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciwgaSA9IG4oIDAgKSwgbyA9IG4oIDY3ICksIHMgPSBuKCAxNyApLCBhID0gKHIgPSBzKCBbXCJ0d2VldElkXCJdLCB7fSwgbyApLCBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBpLnRvUmVhbEFycmF5KCBhcmd1bWVudHMgKS5zbGljZSggMSApLmZvckVhY2goIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRpLmlzVHlwZSggXCJvYmplY3RcIiwgdCApICYmICh0LmhpZGVDYXJkID0gXCJub25lXCIgPT0gdC5jYXJkcyB8fCBcImhpZGRlblwiID09IHQuY2FyZHMsIHQuaGlkZVRocmVhZCA9IFwibm9uZVwiID09IHQuY29udmVyc2F0aW9uIHx8IFwiaGlkZGVuXCIgPT0gdC5jb252ZXJzYXRpb24pXG5cdFx0XHR9ICksIHIuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApXG5cdFx0fSk7XG5cdFx0dC5leHBvcnRzID0ge1xuXHRcdFx0Y3JlYXRlVHdlZXQ6IGEsXG5cdFx0XHRjcmVhdGVUd2VldEVtYmVkOiBhLFxuXHRcdFx0Y3JlYXRlVmlkZW86IGFcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMCApLCBpID0gbiggNjkgKSwgbyA9IG4oIDE3ICksIHMgPSBvKCBbXCJ1cmxcIl0sIHsgdHlwZTogXCJzaGFyZVwiIH0sIGkgKSxcblx0XHRcdGEgPSBvKCBbXCJidXR0b25IYXNodGFnXCJdLCB7IHR5cGU6IFwiaGFzaHRhZ1wiIH0sIGkgKSwgdSA9IG8oIFtcInNjcmVlbk5hbWVcIl0sIHsgdHlwZTogXCJtZW50aW9uXCIgfSwgaSApO1xuXG5cdFx0ZnVuY3Rpb24gYyggdCApIHtcblx0XHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHIudG9SZWFsQXJyYXkoIGFyZ3VtZW50cyApLnNsaWNlKCAxICkuZm9yRWFjaCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0ci5pc1R5cGUoIFwib2JqZWN0XCIsIHQgKSAmJiAodC5zY3JlZW5OYW1lID0gdC5zY3JlZW5OYW1lIHx8IHQuc2NyZWVuX25hbWUsIHQuYnV0dG9uSGFzaHRhZyA9IHQuYnV0dG9uSGFzaHRhZyB8fCB0LmJ1dHRvbl9oYXNodGFnIHx8IHQuaGFzaHRhZylcblx0XHRcdFx0fSApLCB0LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdGNyZWF0ZVNoYXJlQnV0dG9uOiBjKCBzICksXG5cdFx0XHRjcmVhdGVIYXNodGFnQnV0dG9uOiBjKCBhICksXG5cdFx0XHRjcmVhdGVNZW50aW9uQnV0dG9uOiBjKCB1IClcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByLCBpLCBvLCBzID0gbiggNCApLCBhID0gbiggMSApLCB1ID0gMCwgYyA9IFtdLCBkID0gcy5jcmVhdGVFbGVtZW50KCBcImFcIiApO1xuXG5cdFx0ZnVuY3Rpb24gZigpIHtcblx0XHRcdHZhciB0LCBlO1xuXHRcdFx0Zm9yICggdSA9IDEsIHQgPSAwLCBlID0gYy5sZW5ndGg7IHQgPCBlOyB0ICsrICkge1xuXHRcdFx0XHRjWyB0IF0oKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC9ebG9hZGV8Yy8udGVzdCggcy5yZWFkeVN0YXRlICkgJiYgKHUgPSAxKSwgcy5hZGRFdmVudExpc3RlbmVyICYmIHMuYWRkRXZlbnRMaXN0ZW5lciggXCJET01Db250ZW50TG9hZGVkXCIsIGkgPSBmdW5jdGlvbigpIHtcblx0XHRcdHMucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJET01Db250ZW50TG9hZGVkXCIsIGksICExICksIGYoKVxuXHRcdH0sICExICksIGQuZG9TY3JvbGwgJiYgcy5hdHRhY2hFdmVudCggXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIiwgciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0L15jLy50ZXN0KCBzLnJlYWR5U3RhdGUgKSAmJiAocy5kZXRhY2hFdmVudCggXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIiwgciApLCBmKCkpXG5cdFx0fSApLCBvID0gZC5kb1Njcm9sbCA/IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0YS5zZWxmICE9IGEudG9wID8gdSA/IHQoKSA6IGMucHVzaCggdCApIDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0ZC5kb1Njcm9sbCggXCJsZWZ0XCIgKVxuXHRcdFx0XHR9IGNhdGNoICggZSApIHtcblx0XHRcdFx0XHRyZXR1cm4gc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRvKCB0IClcblx0XHRcdFx0XHR9LCA1MCApXG5cdFx0XHRcdH1cblx0XHRcdFx0dCgpXG5cdFx0XHR9KClcblx0XHR9IDogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHR1ID8gdCgpIDogYy5wdXNoKCB0IClcblx0XHR9LCB0LmV4cG9ydHMgPSBvXG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggNDcgKSwgaSA9IG4oIDkgKTtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblx0XHRcdGkuc2V0KCBcImJ1aWxkVmVyc2lvblwiLCByLnZlcnNpb24gKVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0biggMTY4ICksIG4oIDg3ICksIG4oIDE3MSApXG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMTY5ICksIGkgPSBuKCAzMCApLCBvID0gbiggNzAgKSwgcyA9IG5ldyByLCBhID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHR0LndpZGdldHMgJiYgMSA9PT0gdC53aWRnZXRzLmxlbmd0aCAmJiAocy5zdGFydCgpLCBpLmVtaXR0ZXIudW5iaW5kKCBpLkFMTF9XSURHRVRTX1JFTkRFUl9TVEFSVCwgYSApKVxuXHRcdH0sIHUgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdHZhciBlO1xuXHRcdFx0dC53aWRnZXRzICYmIDEgPT09IHQud2lkZ2V0cy5sZW5ndGggJiYgKGUgPSB0LndpZGdldHNbIDAgXSwgcy5lbmQoKSwgZS5kYXRhc2V0ICYmIGUuZGF0YXNldC50d2VldElkICYmIG8oIHtcblx0XHRcdFx0ZHVyYXRpb246IHMuZHVyYXRpb24oKSxcblx0XHRcdFx0bmFtZXNwYWNlOiB7XG5cdFx0XHRcdFx0ZWxlbWVudDogXCJ0d2VldFwiLFxuXHRcdFx0XHRcdGFjdGlvbjogXCJyZW5kZXJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR3aWRnZXRJZHM6IFtlLmRhdGFzZXQudHdlZXRJZF1cblx0XHRcdH0gKSksIGkuZW1pdHRlci51bmJpbmQoIGkuQUxMX1dJREdFVFNfUkVOREVSX0VORCwgdSApXG5cdFx0fTtcblx0XHRpLmVtaXR0ZXIuYmluZCggaS5BTExfV0lER0VUU19SRU5ERVJfU1RBUlQsIGEgKSwgaS5lbWl0dGVyLmJpbmQoIGkuQUxMX1dJREdFVFNfUkVOREVSX0VORCwgdSApXG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMTcwICk7XG5cblx0XHRmdW5jdGlvbiBpKCkge1xuXHRcdH1cblxuXHRcdGkucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLl9zdGFydFRpbWUgPSByKClcblx0XHR9LCBpLnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuX2R1cmF0aW9uID0gcigpIC0gdGhpcy5fc3RhcnRUaW1lXG5cdFx0fSwgaS5wcm90b3R5cGUuZHVyYXRpb24gPSBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiB0aGlzLl9kdXJhdGlvblxuXHRcdH0sIHQuZXhwb3J0cyA9IGlcblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAxICk7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gci5wZXJmb3JtYW5jZSAmJiByLnBlcmZvcm1hbmNlLm5vdyA/IHIucGVyZm9ybWFuY2Uubm93KCkgOiBEYXRlLm5vdygpXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDMwICksIGkgPSBuKCA3MCApLCBvID0gbiggMTcyICksIHMgPSBuKCAzICksIGEgPSBuKCAxICksIHUgPSBuKCAwICksIGMgPSBuKCAyMiApLCBkID0gbiggNjEgKTtcblxuXHRcdGZ1bmN0aW9uIGYoIHQgKSB7XG5cdFx0XHRyZXR1cm4gdC5wZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlUeXBlKCBcInJlc291cmNlXCIgKS5maWx0ZXIoIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRyZXR1cm4gcy5pc1R3aW1nVVJMKCB0Lm5hbWUgKSB8fCBzLmlzVHdpdHRlclVSTCggdC5uYW1lIClcblx0XHRcdH0gKS5yZWR1Y2UoIGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHRyZXR1cm4gdFsgZS5uYW1lIF0gPSBlLmR1cmF0aW9uLCB0XG5cdFx0XHR9LCB7fSApXG5cdFx0fVxuXG5cdFx0ci5lbWl0dGVyLmJpbmQoIHIuQUxMX1dJREdFVFNfQU5EX0lNQUdFU19MT0FERUQsIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0dmFyIGUsIG4sIHIgPSBbXTtcblx0XHRcdGMuaGFzUGVyZm9ybWFuY2VJbmZvcm1hdGlvbigpICYmIChlID0gZiggYSApLCBkLmlzU3VwcG9ydGVkKCkgfHwgKHIgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIHQucmVkdWNlKCBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0XHRyZXR1cm4gdS5hdWcoIHQsIGYoIGUuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3ICkgKVxuXHRcdFx0XHR9LCB7fSApXG5cdFx0XHR9KCB0ICkpLCBuID0gdS5hdWcoIHt9LCBlLCByICksIE9iamVjdC5rZXlzKCBvICkuZm9yRWFjaCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdCFmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHRcdFx0XHR2YXIgciA9IE9iamVjdC5rZXlzKCB0ICkucmVkdWNlKCBmdW5jdGlvbiggZSwgciApIHtcblx0XHRcdFx0XHRcdHJldHVybiBuKCByICkgPyBlICsgdFsgciBdIDogZVxuXHRcdFx0XHRcdH0sIDAgKTtcblx0XHRcdFx0XHRpKCB7XG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogcixcblx0XHRcdFx0XHRcdG5hbWVzcGFjZToge1xuXHRcdFx0XHRcdFx0XHRlbGVtZW50OiBlLFxuXHRcdFx0XHRcdFx0XHRhY3Rpb246IFwicmVzb3VyY2VcIlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gKVxuXHRcdFx0XHR9KCBuLCB0LCBvWyB0IF0gKVxuXHRcdFx0fSApKVxuXHRcdH0gKVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDMgKSwgaSA9IHtcblx0XHRcdGFsbDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiAhMFxuXHRcdFx0fSxcblx0XHRcdGltYWdlOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIHIuaXNUd2ltZ1VSTCggdCApXG5cdFx0XHR9LFxuXHRcdFx0c2V0dGluZ3M6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRyZXR1cm4gci5pc1NldHRpbmdzVVJMKCB0IClcblx0XHRcdH0sXG5cdFx0XHR3aWRnZXRfaWZyYW1lOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIHIuaXNXaWRnZXRJZnJhbWVVUkwoIHQgKVxuXHRcdFx0fVxuXHRcdH07XG5cdFx0dC5leHBvcnRzID0gaVxuXHR9XG5dICkpKTtcbiJdLCJmaWxlIjoidmVuZG9yL3dpZGdldHMuanMifQ==

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ2ZW5kb3Ivd2lkZ2V0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJGdW5jdGlvbiAmJiBGdW5jdGlvbi5wcm90b3R5cGUgJiYgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgJiYgKC8oTVNJRSAoWzY3ODldfDEwfDExKSl8VHJpZGVudC8udGVzdCggbmF2aWdhdG9yLnVzZXJBZ2VudCApIHx8ICh3aW5kb3cuX190d3R0ciAmJiB3aW5kb3cuX190d3R0ci53aWRnZXRzICYmIHdpbmRvdy5fX3R3dHRyLndpZGdldHMubG9hZGVkICYmIHdpbmRvdy50d3R0ci53aWRnZXRzLmxvYWQgJiYgd2luZG93LnR3dHRyLndpZGdldHMubG9hZCgpLCB3aW5kb3cuX190d3R0ciAmJiB3aW5kb3cuX190d3R0ci53aWRnZXRzICYmIHdpbmRvdy5fX3R3dHRyLndpZGdldHMuaW5pdCB8fCBmdW5jdGlvbiggdCApIHtcblx0ZnVuY3Rpb24gZSggZSApIHtcblx0XHRmb3IgKCB2YXIgbiwgaSwgbyA9IGVbIDAgXSwgcyA9IGVbIDEgXSwgYSA9IDAsIGMgPSBbXTsgYSA8IG8ubGVuZ3RoOyBhICsrICkge1xuXHRcdFx0aSA9IG9bIGEgXSwgclsgaSBdICYmIGMucHVzaCggclsgaSBdWyAwIF0gKSwgclsgaSBdID0gMDtcblx0XHR9XG5cdFx0Zm9yICggbiBpbiBzICkge1xuXHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCBzLCBuICkgJiYgKHRbIG4gXSA9IHNbIG4gXSk7XG5cdFx0fVxuXHRcdGZvciAoIHUgJiYgdSggZSApOyBjLmxlbmd0aDsgKSB7XG5cdFx0XHRjLnNoaWZ0KCkoKVxuXHRcdH1cblx0fVxuXG5cdHZhciBuID0ge30sIHIgPSB7IDE6IDAgfTtcblxuXHRmdW5jdGlvbiBpKCBlICkge1xuXHRcdGlmICggblsgZSBdICkge1xuXHRcdFx0cmV0dXJuIG5bIGUgXS5leHBvcnRzO1xuXHRcdH1cblx0XHR2YXIgciA9IG5bIGUgXSA9IHtcblx0XHRcdGk6IGUsXG5cdFx0XHRsOiAhMSxcblx0XHRcdGV4cG9ydHM6IHt9XG5cdFx0fTtcblx0XHRyZXR1cm4gdFsgZSBdLmNhbGwoIHIuZXhwb3J0cywgciwgci5leHBvcnRzLCBpICksIHIubCA9ICEwLCByLmV4cG9ydHNcblx0fVxuXG5cdGkuZSA9IGZ1bmN0aW9uKCB0ICkge1xuXHRcdHZhciBlID0gW10sIG4gPSByWyB0IF07XG5cdFx0aWYgKCAwICE9PSBuICkge1xuXHRcdFx0aWYgKCBuICkge1xuXHRcdFx0XHRlLnB1c2goIG5bIDIgXSApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIG8gPSBuZXcgUHJvbWlzZSggZnVuY3Rpb24oIGUsIGkgKSB7XG5cdFx0XHRcdFx0biA9IHJbIHQgXSA9IFtlLCBpXVxuXHRcdFx0XHR9ICk7XG5cdFx0XHRcdGUucHVzaCggblsgMiBdID0gbyApO1xuXHRcdFx0XHR2YXIgcywgYSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCBcImhlYWRcIiApWyAwIF0sIHUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcInNjcmlwdFwiICk7XG5cdFx0XHRcdHUuY2hhcnNldCA9IFwidXRmLThcIiwgdS50aW1lb3V0ID0gMTIwLCBpLm5jICYmIHUuc2V0QXR0cmlidXRlKCBcIm5vbmNlXCIsIGkubmMgKSwgdS5zcmMgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRyZXR1cm4gaS5wICsgXCJqcy9cIiArICh7XG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgMDogXCJtb21lbnR+dGltZWxpbmV+dHdlZXRcIixcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAyOiBcImRtX2J1dHRvblwiLFxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgIDM6IFwiYnV0dG9uXCIsXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgNDogXCJtb21lbnRcIixcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICA1OiBcInBlcmlzY29wZV9vbl9haXJcIixcblx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICA2OiBcInRpbWVsaW5lXCIsXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgNzogXCJob3Jpem9uX3R3ZWV0XCIsXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgODogXCJ0d2VldFwiXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgIH1bIHQgXSB8fCB0KSArIFwiLlwiICsge1xuXHRcdFx0XHRcdFx0ICAgICAgIDA6IFwiOTljZTVlMGU0NjE3OTg1MzU0YzVjNDI2ZDdlMWI5ZjRcIixcblx0XHRcdFx0XHRcdCAgICAgICAyOiBcImFhZmRiYWM4YzBjYTMwYjAzNDVmZmFkZmI0NmFiYWFlXCIsXG5cdFx0XHRcdFx0XHQgICAgICAgMzogXCI5M2EwYzI1YzJkMmYzMDgxYzcwNWM5OGMyZDlkZWMwZVwiLFxuXHRcdFx0XHRcdFx0ICAgICAgIDQ6IFwiNzBkNDZlNDZiYjZlNWQzMjQyOGQyNzRlMjlkMzNhN2FcIixcblx0XHRcdFx0XHRcdCAgICAgICA1OiBcImE5MjQ5ODIzNzZlNTMyYWZlZWU0NjM2Yzc5NGVhNWRhXCIsXG5cdFx0XHRcdFx0XHQgICAgICAgNjogXCJkMjI4ZGNmMzU3MzQ2MWYyOThiMDgyYzlhNWMwYTQyY1wiLFxuXHRcdFx0XHRcdFx0ICAgICAgIDc6IFwiNzczODEzNzNmOTY0ZWVlOWI0MzcyOGIzZDQzZDY0MmZcIixcblx0XHRcdFx0XHRcdCAgICAgICA4OiBcIjlhYTllZGEzYzE2M2VjNTM5YzE2YWVmMGQ4MjJkODA3XCJcblx0XHRcdFx0XHQgICAgICAgfVsgdCBdICsgXCIuanNcIlxuXHRcdFx0XHR9KCB0ICksIHMgPSBmdW5jdGlvbiggZSApIHtcblx0XHRcdFx0XHR1Lm9uZXJyb3IgPSB1Lm9ubG9hZCA9IG51bGwsIGNsZWFyVGltZW91dCggYyApO1xuXHRcdFx0XHRcdHZhciBuID0gclsgdCBdO1xuXHRcdFx0XHRcdGlmICggMCAhPT0gbiApIHtcblx0XHRcdFx0XHRcdGlmICggbiApIHtcblx0XHRcdFx0XHRcdFx0dmFyIGkgPSBlICYmIChcImxvYWRcIiA9PT0gZS50eXBlID8gXCJtaXNzaW5nXCIgOiBlLnR5cGUpLCBvID0gZSAmJiBlLnRhcmdldCAmJiBlLnRhcmdldC5zcmMsXG5cdFx0XHRcdFx0XHRcdFx0cyA9IG5ldyBFcnJvciggXCJMb2FkaW5nIGNodW5rIFwiICsgdCArIFwiIGZhaWxlZC5cXG4oXCIgKyBpICsgXCI6IFwiICsgbyArIFwiKVwiICk7XG5cdFx0XHRcdFx0XHRcdHMudHlwZSA9IGksIHMucmVxdWVzdCA9IG8sIG5bIDEgXSggcyApXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyWyB0IF0gPSB2b2lkIDBcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHRcdHZhciBjID0gc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cygge1xuXHRcdFx0XHRcdFx0dHlwZTogXCJ0aW1lb3V0XCIsXG5cdFx0XHRcdFx0XHR0YXJnZXQ6IHVcblx0XHRcdFx0XHR9IClcblx0XHRcdFx0fSwgMTJlNCApO1xuXHRcdFx0XHR1Lm9uZXJyb3IgPSB1Lm9ubG9hZCA9IHMsIGEuYXBwZW5kQ2hpbGQoIHUgKVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIGUgKVxuXHR9LCBpLm0gPSB0LCBpLmMgPSBuLCBpLmQgPSBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHRpLm8oIHQsIGUgKSB8fCBPYmplY3QuZGVmaW5lUHJvcGVydHkoIHQsIGUsIHtcblx0XHRcdGVudW1lcmFibGU6ICEwLFxuXHRcdFx0Z2V0OiBuXG5cdFx0fSApXG5cdH0sIGkuciA9IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCAmJiBTeW1ib2wudG9TdHJpbmdUYWcgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KCB0LCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSApLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoIHQsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiAhMCB9IClcblx0fSwgaS50ID0gZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0aWYgKCAxICYgZSAmJiAodCA9IGkoIHQgKSksIDggJiBlICkge1xuXHRcdFx0cmV0dXJuIHQ7XG5cdFx0fVxuXHRcdGlmICggNCAmIGUgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgdCAmJiB0ICYmIHQuX19lc01vZHVsZSApIHtcblx0XHRcdHJldHVybiB0O1xuXHRcdH1cblx0XHR2YXIgbiA9IE9iamVjdC5jcmVhdGUoIG51bGwgKTtcblx0XHRpZiAoIGkuciggbiApLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoIG4sIFwiZGVmYXVsdFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiAhMCxcblx0XHRcdHZhbHVlOiB0XG5cdFx0fSApLCAyICYgZSAmJiBcInN0cmluZ1wiICE9IHR5cGVvZiB0ICkge1xuXHRcdFx0Zm9yICggdmFyIHIgaW4gdCApIHtcblx0XHRcdFx0aS5kKCBuLCByLCBmdW5jdGlvbiggZSApIHtcblx0XHRcdFx0XHRyZXR1cm4gdFsgZSBdXG5cdFx0XHRcdH0uYmluZCggbnVsbCwgciApICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBuXG5cdH0sIGkubiA9IGZ1bmN0aW9uKCB0ICkge1xuXHRcdHZhciBlID0gdCAmJiB0Ll9fZXNNb2R1bGUgPyBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiB0LmRlZmF1bHRcblx0XHR9IDogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gdFxuXHRcdH07XG5cdFx0cmV0dXJuIGkuZCggZSwgXCJhXCIsIGUgKSwgZVxuXHR9LCBpLm8gPSBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCB0LCBlIClcblx0fSwgaS5wID0gXCJodHRwczovL3BsYXRmb3JtLnR3aXR0ZXIuY29tL1wiLCBpLm9lID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0dGhyb3cgY29uc29sZS5lcnJvciggdCApLCB0XG5cdH07XG5cdHZhciBvID0gd2luZG93Ll9fdHd0dHJsbCA9IHdpbmRvdy5fX3R3dHRybGwgfHwgW10sIHMgPSBvLnB1c2guYmluZCggbyApO1xuXHRvLnB1c2ggPSBlLCBvID0gby5zbGljZSgpO1xuXHRmb3IgKCB2YXIgYSA9IDA7IGEgPCBvLmxlbmd0aDsgYSArKyApIHtcblx0XHRlKCBvWyBhIF0gKTtcblx0fVxuXHR2YXIgdSA9IHM7XG5cdGkoIGkucyA9IDk2IClcbn0oIFtcblx0ZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAxICk7XG5cblx0XHRmdW5jdGlvbiBpKCB0LCBlICkge1xuXHRcdFx0dmFyIG47XG5cdFx0XHRmb3IgKCBuIGluIHQgKSB7XG5cdFx0XHRcdHQuaGFzT3duUHJvcGVydHkgJiYgIXQuaGFzT3duUHJvcGVydHkoIG4gKSB8fCBlKCBuLCB0WyBuIF0gKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gbyggdCApIHtcblx0XHRcdHJldHVybiB7fS50b1N0cmluZy5jYWxsKCB0ICkubWF0Y2goIC9cXHMoW2EtekEtWl0rKS8gKVsgMSBdLnRvTG93ZXJDYXNlKClcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBzKCB0ICkge1xuXHRcdFx0cmV0dXJuIHQgPT09IE9iamVjdCggdCApXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gYSggdCApIHtcblx0XHRcdHZhciBlO1xuXHRcdFx0aWYgKCAhcyggdCApICkge1xuXHRcdFx0XHRyZXR1cm4gITE7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIE9iamVjdC5rZXlzICkge1xuXHRcdFx0XHRyZXR1cm4gIU9iamVjdC5rZXlzKCB0ICkubGVuZ3RoO1xuXHRcdFx0fVxuXHRcdFx0Zm9yICggZSBpbiB0ICkge1xuXHRcdFx0XHRpZiAoIHQuaGFzT3duUHJvcGVydHkoIGUgKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gITE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiAhMFxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHUoIHQgKSB7XG5cdFx0XHRyZXR1cm4gdCA/IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKCB0ICkgOiBbXVxuXHRcdH1cblxuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdGF1ZzogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiB1KCBhcmd1bWVudHMgKS5zbGljZSggMSApLmZvckVhY2goIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0XHRcdGkoIGUsIGZ1bmN0aW9uKCBlLCBuICkge1xuXHRcdFx0XHRcdFx0dFsgZSBdID0gblxuXHRcdFx0XHRcdH0gKVxuXHRcdFx0XHR9ICksIHRcblx0XHRcdH0sXG5cdFx0XHRhc3luYzogZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdHIuc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dC5jYWxsKCBlIHx8IG51bGwgKVxuXHRcdFx0XHR9LCAwIClcblx0XHRcdH0sXG5cdFx0XHRjb21wYWN0OiBmdW5jdGlvbiB0KCBlICkge1xuXHRcdFx0XHRyZXR1cm4gaSggZSwgZnVuY3Rpb24oIG4sIHIgKSB7XG5cdFx0XHRcdFx0cyggciApICYmICh0KCByICksIGEoIHIgKSAmJiBkZWxldGUgZVsgbiBdKSwgdm9pZCAwICE9PSByICYmIG51bGwgIT09IHIgJiYgXCJcIiAhPT0gciB8fCBkZWxldGUgZVsgbiBdXG5cdFx0XHRcdH0gKSwgZVxuXHRcdFx0fSxcblx0XHRcdGNvbnRhaW5zOiBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0cmV0dXJuICEoIXQgfHwgIXQuaW5kZXhPZikgJiYgdC5pbmRleE9mKCBlICkgPiAtIDFcblx0XHRcdH0sXG5cdFx0XHRmb3JJbjogaSxcblx0XHRcdGlzT2JqZWN0OiBzLFxuXHRcdFx0aXNFbXB0eU9iamVjdDogYSxcblx0XHRcdHRvVHlwZTogbyxcblx0XHRcdGlzVHlwZTogZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdHJldHVybiB0ID09IG8oIGUgKVxuXHRcdFx0fSxcblx0XHRcdHRvUmVhbEFycmF5OiB1XG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSApIHtcblx0XHR0LmV4cG9ydHMgPSB3aW5kb3dcblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCA2ICk7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdCA9IHRoaXM7XG5cdFx0XHR0aGlzLnByb21pc2UgPSBuZXcgciggZnVuY3Rpb24oIGUsIG4gKSB7XG5cdFx0XHRcdHQucmVzb2x2ZSA9IGUsIHQucmVqZWN0ID0gblxuXHRcdFx0fSApXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDExICksXG5cdFx0XHRpID0gLyg/Ol58KD86aHR0cHM/Oik/XFwvXFwvKD86d3d3XFwuKT90d2l0dGVyXFwuY29tKD86OlxcZCspPyg/OlxcL2ludGVudFxcLyg/OmZvbGxvd3x1c2VyKVxcLz9cXD9zY3JlZW5fbmFtZT18KD86XFwvIyEpP1xcLykpQD8oW1xcd10rKSg/OlxcP3wmfCQpL2ksXG5cdFx0XHRvID0gLyg/Ol58KD86aHR0cHM/Oik/XFwvXFwvKD86d3d3XFwuKT90d2l0dGVyXFwuY29tKD86OlxcZCspP1xcLyg/OiMhXFwvKT9bXFx3X10rXFwvc3RhdHVzKD86ZXMpP1xcLykoXFxkKykvaSxcblx0XHRcdHMgPSAvXmh0dHAocz8pOlxcL1xcLyhcXHcrXFwuKSp0d2l0dGVyXFwuY29tKFs6L118JCkvaSwgYSA9IC9eaHR0cChzPyk6XFwvXFwvKHRvbnxwYnMpXFwudHdpbWdcXC5jb20vLFxuXHRcdFx0dSA9IC9eIz8oW14uLDw+IVxccy8jXFwtKCknXCJdKykkLywgYyA9IC90d2l0dGVyXFwuY29tKD86OlxcZHsyLDR9KT9cXC9pbnRlbnRcXC8oXFx3KykvLFxuXHRcdFx0ZCA9IC9eaHR0cHM/OlxcL1xcLyg/Ond3d1xcLik/dHdpdHRlclxcLmNvbVxcL1xcdytcXC90aW1lbGluZXNcXC8oXFxkKykvaSxcblx0XHRcdGYgPSAvXmh0dHBzPzpcXC9cXC8oPzp3d3dcXC4pP3R3aXR0ZXJcXC5jb21cXC9pXFwvbW9tZW50c1xcLyhcXGQrKS9pLFxuXHRcdFx0bCA9IC9eaHR0cHM/OlxcL1xcLyg/Ond3d1xcLik/dHdpdHRlclxcLmNvbVxcLyhcXHcrKVxcLyg/Omxpa2VzfGZhdm9yaXRlcykvaSxcblx0XHRcdGggPSAvXmh0dHBzPzpcXC9cXC8oPzp3d3dcXC4pP3R3aXR0ZXJcXC5jb21cXC8oXFx3KylcXC9saXN0c1xcLyhbXFx3LSVdKykvaSxcblx0XHRcdHAgPSAvXmh0dHBzPzpcXC9cXC8oPzp3d3dcXC4pP3R3aXR0ZXJcXC5jb21cXC9pXFwvbGl2ZVxcLyhcXGQrKS9pLFxuXHRcdFx0bSA9IC9eaHR0cHM/OlxcL1xcL3N5bmRpY2F0aW9uXFwudHdpdHRlclxcLmNvbVxcL3NldHRpbmdzL2ksXG5cdFx0XHR2ID0gL15odHRwcz86XFwvXFwvKGxvY2FsaG9zdHxwbGF0Zm9ybSlcXC50d2l0dGVyXFwuY29tKD86OlxcZCspP1xcL3dpZGdldHNcXC93aWRnZXRfaWZyYW1lXFwuKC4rKS9pLFxuXHRcdFx0ZyA9IC9eaHR0cHM/OlxcL1xcLyg/Ond3d1xcLik/dHdpdHRlclxcLmNvbVxcL3NlYXJjaFxcP3E9KFxcdyspL2k7XG5cblx0XHRmdW5jdGlvbiB3KCB0ICkge1xuXHRcdFx0cmV0dXJuIFwic3RyaW5nXCIgPT0gdHlwZW9mIHQgJiYgaS50ZXN0KCB0ICkgJiYgUmVnRXhwLiQxLmxlbmd0aCA8PSAyMFxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHkoIHQgKSB7XG5cdFx0XHRpZiAoIHcoIHQgKSApIHtcblx0XHRcdFx0cmV0dXJuIFJlZ0V4cC4kMVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGIoIHQsIGUgKSB7XG5cdFx0XHR2YXIgbiA9IHIuZGVjb2RlVVJMKCB0ICk7XG5cdFx0XHRpZiAoIGUgPSBlIHx8ICExLCBuLnNjcmVlbl9uYW1lID0geSggdCApLCBuLnNjcmVlbl9uYW1lICkge1xuXHRcdFx0XHRyZXR1cm4gci51cmwoIFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvXCIgKyAoZSA/IFwiZm9sbG93XCIgOiBcInVzZXJcIiksIG4gKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIF8oIHQgKSB7XG5cdFx0XHRyZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgdCAmJiB1LnRlc3QoIHQgKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIEUoIHQgKSB7XG5cdFx0XHRyZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgdCAmJiBvLnRlc3QoIHQgKVxuXHRcdH1cblxuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdGlzSGFzaFRhZzogXyxcblx0XHRcdGhhc2hUYWc6IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHRpZiAoIGUgPSB2b2lkIDAgPT09IGUgfHwgZSwgXyggdCApICkge1xuXHRcdFx0XHRcdHJldHVybiAoZSA/IFwiI1wiIDogXCJcIikgKyBSZWdFeHAuJDFcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGlzU2NyZWVuTmFtZTogdyxcblx0XHRcdHNjcmVlbk5hbWU6IHksXG5cdFx0XHRpc1N0YXR1czogRSxcblx0XHRcdHN0YXR1czogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiBFKCB0ICkgJiYgUmVnRXhwLiQxXG5cdFx0XHR9LFxuXHRcdFx0aW50ZW50Rm9yUHJvZmlsZVVSTDogYixcblx0XHRcdGludGVudEZvckZvbGxvd1VSTDogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiBiKCB0LCAhMCApXG5cdFx0XHR9LFxuXHRcdFx0aXNUd2l0dGVyVVJMOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIHMudGVzdCggdCApXG5cdFx0XHR9LFxuXHRcdFx0aXNUd2ltZ1VSTDogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiBhLnRlc3QoIHQgKVxuXHRcdFx0fSxcblx0XHRcdGlzSW50ZW50VVJMOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIGMudGVzdCggdCApXG5cdFx0XHR9LFxuXHRcdFx0aXNTZXR0aW5nc1VSTDogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiBtLnRlc3QoIHQgKVxuXHRcdFx0fSxcblx0XHRcdGlzV2lkZ2V0SWZyYW1lVVJMOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIHYudGVzdCggdCApXG5cdFx0XHR9LFxuXHRcdFx0aXNTZWFyY2hVcmw6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRyZXR1cm4gZy50ZXN0KCB0IClcblx0XHRcdH0sXG5cdFx0XHRyZWdleGVuOiB7IHByb2ZpbGU6IGkgfSxcblx0XHRcdG1vbWVudElkOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIGYudGVzdCggdCApICYmIFJlZ0V4cC4kMVxuXHRcdFx0fSxcblx0XHRcdGNvbGxlY3Rpb25JZDogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiBkLnRlc3QoIHQgKSAmJiBSZWdFeHAuJDFcblx0XHRcdH0sXG5cdFx0XHRpbnRlbnRUeXBlOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIGMudGVzdCggdCApICYmIFJlZ0V4cC4kMVxuXHRcdFx0fSxcblx0XHRcdGxpa2VzU2NyZWVuTmFtZTogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiBsLnRlc3QoIHQgKSAmJiBSZWdFeHAuJDFcblx0XHRcdH0sXG5cdFx0XHRsaXN0U2NyZWVuTmFtZUFuZFNsdWc6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSwgbiwgcjtcblx0XHRcdFx0aWYgKCBoLnRlc3QoIHQgKSApIHtcblx0XHRcdFx0XHRlID0gUmVnRXhwLiQxLCBuID0gUmVnRXhwLiQyO1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRyID0gZGVjb2RlVVJJQ29tcG9uZW50KCBuIClcblx0XHRcdFx0XHR9IGNhdGNoICggdCApIHtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdG93bmVyU2NyZWVuTmFtZTogZSxcblx0XHRcdFx0XHRcdHNsdWc6IHIgfHwgblxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gITFcblx0XHRcdH0sXG5cdFx0XHRldmVudElkOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIHAudGVzdCggdCApICYmIFJlZ0V4cC4kMVxuXHRcdFx0fVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0dC5leHBvcnRzID0gZG9jdW1lbnRcblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAwICksIGkgPSBbITAsIDEsIFwiMVwiLCBcIm9uXCIsIFwiT05cIiwgXCJ0cnVlXCIsIFwiVFJVRVwiLCBcInllc1wiLCBcIllFU1wiXSxcblx0XHRcdG8gPSBbITEsIDAsIFwiMFwiLCBcIm9mZlwiLCBcIk9GRlwiLCBcImZhbHNlXCIsIFwiRkFMU0VcIiwgXCJub1wiLCBcIk5PXCJdO1xuXG5cdFx0ZnVuY3Rpb24gcyggdCApIHtcblx0XHRcdHJldHVybiB2b2lkIDAgIT09IHQgJiYgbnVsbCAhPT0gdCAmJiBcIlwiICE9PSB0XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gYSggdCApIHtcblx0XHRcdHJldHVybiBjKCB0ICkgJiYgdCAlIDEgPT0gMFxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHUoIHQgKSB7XG5cdFx0XHRyZXR1cm4gYyggdCApICYmICFhKCB0IClcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBjKCB0ICkge1xuXHRcdFx0cmV0dXJuIHMoIHQgKSAmJiAhaXNOYU4oIHQgKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGQoIHQgKSB7XG5cdFx0XHRyZXR1cm4gci5jb250YWlucyggbywgdCApXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZiggdCApIHtcblx0XHRcdHJldHVybiByLmNvbnRhaW5zKCBpLCB0IClcblx0XHR9XG5cblx0XHR0LmV4cG9ydHMgPSB7XG5cdFx0XHRoYXNWYWx1ZTogcyxcblx0XHRcdGlzSW50OiBhLFxuXHRcdFx0aXNGbG9hdDogdSxcblx0XHRcdGlzTnVtYmVyOiBjLFxuXHRcdFx0aXNTdHJpbmc6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRyZXR1cm4gXCJzdHJpbmdcIiA9PT0gci50b1R5cGUoIHQgKVxuXHRcdFx0fSxcblx0XHRcdGlzQXJyYXk6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRyZXR1cm4gcyggdCApICYmIFwiYXJyYXlcIiA9PSByLnRvVHlwZSggdCApXG5cdFx0XHR9LFxuXHRcdFx0aXNUcnV0aFZhbHVlOiBmLFxuXHRcdFx0aXNGYWxzZVZhbHVlOiBkLFxuXHRcdFx0YXNJbnQ6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRpZiAoIGEoIHQgKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gcGFyc2VJbnQoIHQsIDEwIClcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGFzRmxvYXQ6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRpZiAoIHUoIHQgKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gdFxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0YXNOdW1iZXI6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRpZiAoIGMoIHQgKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gdFxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0YXNCb29sZWFuOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuICEoIXMoIHQgKSB8fCAhZiggdCApICYmIChkKCB0ICkgfHwgIXQpKVxuXHRcdFx0fVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAxICksIGkgPSBuKCAyMiApLCBvID0gbiggNDggKTtcblx0XHRpLmhhc1Byb21pc2VTdXBwb3J0KCkgfHwgKHIuUHJvbWlzZSA9IG8pLCB0LmV4cG9ydHMgPSByLlByb21pc2Vcblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAwICk7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHR2YXIgbiA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKCBhcmd1bWVudHMsIDIgKTtcblx0XHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGkgPSByLnRvUmVhbEFycmF5KCBhcmd1bWVudHMgKTtcblx0XHRcdFx0cmV0dXJuIHQuYXBwbHkoIGUsIG4uY29uY2F0KCBpICkgKVxuXHRcdFx0fVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0dC5leHBvcnRzID0gbG9jYXRpb25cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCA1MCApO1xuXHRcdHQuZXhwb3J0cyA9IG5ldyByKCBcIl9fdHd0dHJcIiApXG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMCApLCBpID0gL1xcYihbXFx3LV9dKylcXGIvZztcblxuXHRcdGZ1bmN0aW9uIG8oIHQgKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFJlZ0V4cCggXCJcXFxcYlwiICsgdCArIFwiXFxcXGJcIiwgXCJnXCIgKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHMoIHQsIGUgKSB7XG5cdFx0XHR0LmNsYXNzTGlzdCA/IHQuY2xhc3NMaXN0LmFkZCggZSApIDogbyggZSApLnRlc3QoIHQuY2xhc3NOYW1lICkgfHwgKHQuY2xhc3NOYW1lICs9IFwiIFwiICsgZSlcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBhKCB0LCBlICkge1xuXHRcdFx0dC5jbGFzc0xpc3QgPyB0LmNsYXNzTGlzdC5yZW1vdmUoIGUgKSA6IHQuY2xhc3NOYW1lID0gdC5jbGFzc05hbWUucmVwbGFjZSggbyggZSApLCBcIiBcIiApXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdSggdCwgZSApIHtcblx0XHRcdHJldHVybiB0LmNsYXNzTGlzdCA/IHQuY2xhc3NMaXN0LmNvbnRhaW5zKCBlICkgOiByLmNvbnRhaW5zKCBjKCB0ICksIGUgKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGMoIHQgKSB7XG5cdFx0XHRyZXR1cm4gci50b1JlYWxBcnJheSggdC5jbGFzc0xpc3QgPyB0LmNsYXNzTGlzdCA6IHQuY2xhc3NOYW1lLm1hdGNoKCBpICkgKVxuXHRcdH1cblxuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdGFkZDogcyxcblx0XHRcdHJlbW92ZTogYSxcblx0XHRcdHJlcGxhY2U6IGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdFx0XHRpZiAoIHQuY2xhc3NMaXN0ICYmIHUoIHQsIGUgKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gYSggdCwgZSApLCB2b2lkIHMoIHQsIG4gKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0LmNsYXNzTmFtZSA9IHQuY2xhc3NOYW1lLnJlcGxhY2UoIG8oIGUgKSwgbiApXG5cdFx0XHR9LFxuXHRcdFx0dG9nZ2xlOiBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHRcdFx0cmV0dXJuIHZvaWQgMCA9PT0gbiAmJiB0LmNsYXNzTGlzdCAmJiB0LmNsYXNzTGlzdC50b2dnbGUgPyB0LmNsYXNzTGlzdC50b2dnbGUoIGUsIG4gKSA6IChuID8gcyggdCwgZSApIDogYSggdCwgZSApLCBuKVxuXHRcdFx0fSxcblx0XHRcdHByZXNlbnQ6IHUsXG5cdFx0XHRsaXN0OiBjXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDUgKSwgaSA9IG4oIDAgKTtcblxuXHRcdGZ1bmN0aW9uIG8oIHQgKSB7XG5cdFx0XHRyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KCB0ICkucmVwbGFjZSggL1xcKy9nLCBcIiUyQlwiICkucmVwbGFjZSggLycvZywgXCIlMjdcIiApXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gcyggdCApIHtcblx0XHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoIHQgKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGEoIHQgKSB7XG5cdFx0XHR2YXIgZSA9IFtdO1xuXHRcdFx0cmV0dXJuIGkuZm9ySW4oIHQsIGZ1bmN0aW9uKCB0LCBuICkge1xuXHRcdFx0XHR2YXIgcyA9IG8oIHQgKTtcblx0XHRcdFx0aS5pc1R5cGUoIFwiYXJyYXlcIiwgbiApIHx8IChuID0gW25dKSwgbi5mb3JFYWNoKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRyLmhhc1ZhbHVlKCB0ICkgJiYgZS5wdXNoKCBzICsgXCI9XCIgKyBvKCB0ICkgKVxuXHRcdFx0XHR9IClcblx0XHRcdH0gKSwgZS5zb3J0KCkuam9pbiggXCImXCIgKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHUoIHQgKSB7XG5cdFx0XHR2YXIgZSA9IHt9O1xuXHRcdFx0cmV0dXJuIHQgPyAodC5zcGxpdCggXCImXCIgKS5mb3JFYWNoKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIG4gPSB0LnNwbGl0KCBcIj1cIiApLCByID0gcyggblsgMCBdICksIG8gPSBzKCBuWyAxIF0gKTtcblx0XHRcdFx0aWYgKCAyID09IG4ubGVuZ3RoICkge1xuXHRcdFx0XHRcdGlmICggIWkuaXNUeXBlKCBcImFycmF5XCIsIGVbIHIgXSApICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHIgaW4gZSA/IChlWyByIF0gPSBbZVsgciBdXSwgdm9pZCBlWyByIF0ucHVzaCggbyApKSA6IHZvaWQgKGVbIHIgXSA9IG8pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlWyByIF0ucHVzaCggbyApXG5cdFx0XHRcdH1cblx0XHRcdH0gKSwgZSkgOiB7fVxuXHRcdH1cblxuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdHVybDogZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdHJldHVybiBhKCBlICkubGVuZ3RoID4gMCA/IGkuY29udGFpbnMoIHQsIFwiP1wiICkgPyB0ICsgXCImXCIgKyBhKCBlICkgOiB0ICsgXCI/XCIgKyBhKCBlICkgOiB0XG5cdFx0XHR9LFxuXHRcdFx0ZGVjb2RlVVJMOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUgPSB0ICYmIHQuc3BsaXQoIFwiP1wiICk7XG5cdFx0XHRcdHJldHVybiAyID09IGUubGVuZ3RoID8gdSggZVsgMSBdICkgOiB7fVxuXHRcdFx0fSxcblx0XHRcdGRlY29kZTogdSxcblx0XHRcdGVuY29kZTogYSxcblx0XHRcdGVuY29kZVBhcnQ6IG8sXG5cdFx0XHRkZWNvZGVQYXJ0OiBzXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDggKSwgaSA9IG4oIDEgKSwgbyA9IG4oIDAgKSwgcyA9IHt9LCBhID0gby5jb250YWlucyggci5ocmVmLCBcInR3X2RlYnVnPXRydWVcIiApO1xuXG5cdFx0ZnVuY3Rpb24gdSgpIHtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBjKCkge1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGQoKSB7XG5cdFx0XHRyZXR1cm4gaS5wZXJmb3JtYW5jZSAmJiArIGkucGVyZm9ybWFuY2Uubm93KCkgfHwgKyBuZXcgRGF0ZVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGYoIHQsIGUgKSB7XG5cdFx0XHRpZiAoIGkuY29uc29sZSAmJiBpLmNvbnNvbGVbIHQgXSApIHtcblx0XHRcdFx0c3dpdGNoICggZS5sZW5ndGggKSB7XG5cdFx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdFx0aS5jb25zb2xlWyB0IF0oIGVbIDAgXSApO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRcdFx0aS5jb25zb2xlWyB0IF0oIGVbIDAgXSwgZVsgMSBdICk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIDM6XG5cdFx0XHRcdFx0XHRpLmNvbnNvbGVbIHQgXSggZVsgMCBdLCBlWyAxIF0sIGVbIDIgXSApO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSA0OlxuXHRcdFx0XHRcdFx0aS5jb25zb2xlWyB0IF0oIGVbIDAgXSwgZVsgMSBdLCBlWyAyIF0sIGVbIDMgXSApO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSA1OlxuXHRcdFx0XHRcdFx0aS5jb25zb2xlWyB0IF0oIGVbIDAgXSwgZVsgMSBdLCBlWyAyIF0sIGVbIDMgXSwgZVsgNCBdICk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0MCAhPT0gZS5sZW5ndGggJiYgaS5jb25zb2xlLndhcm4gJiYgaS5jb25zb2xlLndhcm4oIFwidG9vIG1hbnkgcGFyYW1zIHBhc3NlZCB0byBsb2dnZXIuXCIgKyB0IClcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdGRldkVycm9yOiB1LFxuXHRcdFx0ZGV2SW5mbzogYyxcblx0XHRcdGRldk9iamVjdDogZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHR9LFxuXHRcdFx0cHVibGljRXJyb3I6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRmKCBcImVycm9yXCIsIG8udG9SZWFsQXJyYXkoIGFyZ3VtZW50cyApIClcblx0XHRcdH0sXG5cdFx0XHRwdWJsaWNMb2c6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRmKCBcImluZm9cIiwgby50b1JlYWxBcnJheSggYXJndW1lbnRzICkgKVxuXHRcdFx0fSxcblx0XHRcdHRpbWU6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRhICYmIChzWyB0IF0gPSBkKCkpXG5cdFx0XHR9LFxuXHRcdFx0dGltZUVuZDogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdGEgJiYgc1sgdCBdICYmIChkKCksIHNbIHQgXSlcblx0XHRcdH1cblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMjAgKSwgaSA9IG4oIDUgKSwgbyA9IG4oIDExICksIHMgPSBuKCAwICksIGEgPSBuKCAxMjEgKTtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdHZhciBlID0gdC5ocmVmICYmIHQuaHJlZi5zcGxpdCggXCI/XCIgKVsgMSBdLCBuID0gZSA/IG8uZGVjb2RlKCBlICkgOiB7fSwgdSA9IHtcblx0XHRcdFx0bGFuZzogYSggdCApLFxuXHRcdFx0XHR3aWR0aDogdC5nZXRBdHRyaWJ1dGUoIFwiZGF0YS13aWR0aFwiICkgfHwgdC5nZXRBdHRyaWJ1dGUoIFwid2lkdGhcIiApLFxuXHRcdFx0XHRoZWlnaHQ6IHQuZ2V0QXR0cmlidXRlKCBcImRhdGEtaGVpZ2h0XCIgKSB8fCB0LmdldEF0dHJpYnV0ZSggXCJoZWlnaHRcIiApLFxuXHRcdFx0XHRyZWxhdGVkOiB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLXJlbGF0ZWRcIiApLFxuXHRcdFx0XHRwYXJ0bmVyOiB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLXBhcnRuZXJcIiApXG5cdFx0XHR9O1xuXHRcdFx0cmV0dXJuIGkuYXNCb29sZWFuKCB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLWRudFwiICkgKSAmJiByLnNldE9uKCksIHMuZm9ySW4oIHUsIGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHR2YXIgciA9IG5bIHQgXTtcblx0XHRcdFx0blsgdCBdID0gaS5oYXNWYWx1ZSggciApID8gciA6IGVcblx0XHRcdH0gKSwgcy5jb21wYWN0KCBuIClcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggODIgKSwgaSA9IG4oIDI0ICk7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdCA9IFwiZGF0YS10d2l0dGVyLWV4dHJhY3RlZC1cIiArIGkuZ2VuZXJhdGUoKTtcblx0XHRcdHJldHVybiBmdW5jdGlvbiggZSwgbiApIHtcblx0XHRcdFx0cmV0dXJuIHIoIGUsIG4gKS5maWx0ZXIoIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0XHRcdHJldHVybiAhZS5oYXNBdHRyaWJ1dGUoIHQgKVxuXHRcdFx0XHR9ICkubWFwKCBmdW5jdGlvbiggZSApIHtcblx0XHRcdFx0XHRyZXR1cm4gZS5zZXRBdHRyaWJ1dGUoIHQsIFwidHJ1ZVwiICksIGVcblx0XHRcdFx0fSApXG5cdFx0XHR9XG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRmdW5jdGlvbiBuKCB0LCBlLCBuLCByLCBpLCBvLCBzICkge1xuXHRcdFx0dGhpcy5mYWN0b3J5ID0gdCwgdGhpcy5TYW5kYm94ID0gZSwgdGhpcy5zcmNFbCA9IG8sIHRoaXMudGFyZ2V0RWwgPSBpLCB0aGlzLnBhcmFtZXRlcnMgPSByLCB0aGlzLmNsYXNzTmFtZSA9IG4sIHRoaXMub3B0aW9ucyA9IHNcblx0XHR9XG5cblx0XHRuLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLnNyY0VsID0gdGhpcy50YXJnZXRFbCA9IG51bGxcblx0XHR9LCB0LmV4cG9ydHMgPSBuXG5cdH0sIGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdERNX0JVVFRPTjogXCJ0d2l0dGVyLWRtLWJ1dHRvblwiLFxuXHRcdFx0Rk9MTE9XX0JVVFRPTjogXCJ0d2l0dGVyLWZvbGxvdy1idXR0b25cIixcblx0XHRcdEhBU0hUQUdfQlVUVE9OOiBcInR3aXR0ZXItaGFzaHRhZy1idXR0b25cIixcblx0XHRcdE1FTlRJT05fQlVUVE9OOiBcInR3aXR0ZXItbWVudGlvbi1idXR0b25cIixcblx0XHRcdE1PTUVOVDogXCJ0d2l0dGVyLW1vbWVudFwiLFxuXHRcdFx0UEVSSVNDT1BFOiBcInBlcmlzY29wZS1vbi1haXJcIixcblx0XHRcdFNIQVJFX0JVVFRPTjogXCJ0d2l0dGVyLXNoYXJlLWJ1dHRvblwiLFxuXHRcdFx0VElNRUxJTkU6IFwidHdpdHRlci10aW1lbGluZVwiLFxuXHRcdFx0VFdFRVQ6IFwidHdpdHRlci10d2VldFwiXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDYgKSwgaSA9IG4oIDIwICksIG8gPSBuKCA1MiApLCBzID0gbiggMzEgKSwgYSA9IG4oIDUgKSwgdSA9IG4oIDAgKTtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHRcdHZhciBjO1xuXHRcdFx0cmV0dXJuIHQgPSB0IHx8IFtdLCBlID0gZSB8fCB7fSwgYyA9IFwixpIoXCIgKyB0LmpvaW4oIFwiLCBcIiApICsgXCIsIHRhcmdldCwgW29wdGlvbnNdKTtcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBkLCBmLCBsLCBoLCBwID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KCBhcmd1bWVudHMsIFswLCB0Lmxlbmd0aF0gKSxcblx0XHRcdFx0XHRtID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KCBhcmd1bWVudHMsIFt0Lmxlbmd0aF0gKTtcblx0XHRcdFx0cmV0dXJuIG0uZm9yRWFjaCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0dCAmJiAodC5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUgPyB1LmlzVHlwZSggXCJmdW5jdGlvblwiLCB0ICkgPyBkID0gdCA6IHUuaXNUeXBlKCBcIm9iamVjdFwiLCB0ICkgJiYgKGYgPSB0KSA6IGwgPSB0KVxuXHRcdFx0XHR9ICksIHAubGVuZ3RoICE9PSB0Lmxlbmd0aCB8fCAwID09PSBtLmxlbmd0aCA/IChkICYmIHUuYXN5bmMoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGQoICExIClcblx0XHRcdFx0fSApLCByLnJlamVjdCggbmV3IEVycm9yKCBcIk5vdCBlbm91Z2ggcGFyYW1ldGVycy4gRXhwZWN0ZWQ6IFwiICsgYyApICkpIDogbCA/IChmID0gdS5hdWcoIHt9LCBmIHx8IHt9LCBlICksIHQuZm9yRWFjaCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0ZlsgdCBdID0gcC5zaGlmdCgpXG5cdFx0XHRcdH0gKSwgYS5hc0Jvb2xlYW4oIGYuZG50ICkgJiYgaS5zZXRPbigpLCBoID0gcy5nZXRFeHBlcmltZW50cygpLnRoZW4oIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdHJldHVybiBvLmFkZFdpZGdldCggbiggZiwgbCwgdm9pZCAwLCB0ICkgKVxuXHRcdFx0XHR9ICksIGQgJiYgaC50aGVuKCBkLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRkKCAhMSApXG5cdFx0XHRcdH0gKSwgaCkgOiAoZCAmJiB1LmFzeW5jKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRkKCAhMSApXG5cdFx0XHRcdH0gKSwgci5yZWplY3QoIG5ldyBFcnJvciggXCJObyB0YXJnZXQgZWxlbWVudCBzcGVjaWZpZWQuIEV4cGVjdGVkOiBcIiArIGMgKSApKVxuXHRcdFx0fVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAxMDQgKSwgaSA9IG4oIDIgKSwgbyA9IG4oIDAgKTtcblxuXHRcdGZ1bmN0aW9uIHMoIHQsIGUgKSB7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0ZS5yZXNvbHZlKCB0LmNhbGwoIHRoaXMgKSApXG5cdFx0XHRcdH0gY2F0Y2ggKCB0ICkge1xuXHRcdFx0XHRcdGUucmVqZWN0KCB0IClcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdHN5bmM6IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHR0LmNhbGwoIGUgKVxuXHRcdFx0fSxcblx0XHRcdHJlYWQ6IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHR2YXIgbiA9IG5ldyBpO1xuXHRcdFx0XHRyZXR1cm4gci5yZWFkKCBzKCB0LCBuICksIGUgKSwgbi5wcm9taXNlXG5cdFx0XHR9LFxuXHRcdFx0d3JpdGU6IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHR2YXIgbiA9IG5ldyBpO1xuXHRcdFx0XHRyZXR1cm4gci53cml0ZSggcyggdCwgbiApLCBlICksIG4ucHJvbWlzZVxuXHRcdFx0fSxcblx0XHRcdGRlZmVyOiBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHRcdFx0dmFyIGEgPSBuZXcgaTtcblx0XHRcdFx0cmV0dXJuIG8uaXNUeXBlKCBcImZ1bmN0aW9uXCIsIHQgKSAmJiAobiA9IGUsIGUgPSB0LCB0ID0gMSksIHIuZGVmZXIoIHQsIHMoIGUsIGEgKSwgbiApLCBhLnByb21pc2Vcblx0XHRcdH1cblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggOSApLCBpID0gW1xuXHRcdFx0XCJodHRwczovL3N5bmRpY2F0aW9uLnR3aXR0ZXIuY29tXCIsXG5cdFx0XHRcImh0dHBzOi8vY2RuLnN5bmRpY2F0aW9uLnR3aW1nLmNvbVwiLFxuXHRcdFx0XCJodHRwczovL2xvY2FsaG9zdC50d2l0dGVyLmNvbTo4NDQ0XCJcblx0XHRdLCBvID0gW1wiaHR0cHM6Ly9zeW5kaWNhdGlvbi50d2l0dGVyLmNvbVwiLCBcImh0dHBzOi8vbG9jYWxob3N0LnR3aXR0ZXIuY29tOjg0NDVcIl0sIHMgPSBbXG5cdFx0XHRcImh0dHBzOi8vcGxhdGZvcm0udHdpdHRlci5jb20vZW1iZWQvaW5kZXguaHRtbFwiLFxuXHRcdFx0XCJodHRwczovL2xvY2FsaG9zdC50d2l0dGVyLmNvbVwiLFxuXHRcdFx0L2h0dHBzOlxcL1xcL3RvblxcLnNtZjFcXC50d2l0dGVyXFwuY29tXFwvc3luZGljYXRpb24taW50ZXJuYWxcXC9lbWJlZC1pZnJhbWVcXC9bMC05QS1aYS16Xy1dK1xcL2FwcFxcL2luZGV4XFwuaHRtbC9cblx0XHRdLCBhID0gZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRyZXR1cm4gdC5zb21lKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIHQgaW5zdGFuY2VvZiBSZWdFeHAgPyB0LnRlc3QoIGUgKSA6IHQgPT09IGVcblx0XHRcdH0gKVxuXHRcdH0sIHUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciB0ID0gci5nZXQoIFwiYmFja2VuZEhvc3RcIiApO1xuXHRcdFx0cmV0dXJuIHQgJiYgYSggaSwgdCApID8gdCA6IFwiaHR0cHM6Ly9jZG4uc3luZGljYXRpb24udHdpbWcuY29tXCJcblx0XHR9LCBjID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdCA9IHIuZ2V0KCBcInNldHRpbmdzU3ZjSG9zdFwiICk7XG5cdFx0XHRyZXR1cm4gdCAmJiBhKCBvLCB0ICkgPyB0IDogXCJodHRwczovL3N5bmRpY2F0aW9uLnR3aXR0ZXIuY29tXCJcblx0XHR9LCBkID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdCA9IHIuZ2V0KCBcImVtYmVkSWZyYW1lVVJMXCIgKTtcblx0XHRcdHJldHVybiB0ICYmIGEoIHMsIHQgKSA/IHQgOiBcImh0dHBzOi8vcGxhdGZvcm0udHdpdHRlci5jb20vZW1iZWQvaW5kZXguaHRtbFwiXG5cdFx0fTtcblxuXHRcdGZ1bmN0aW9uIGYoIHQsIGUgKSB7XG5cdFx0XHR2YXIgbiA9IFt0XTtcblx0XHRcdHJldHVybiBlLmZvckVhY2goIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRuLnB1c2goIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdHZhciBlID0gKHQgfHwgXCJcIikudG9TdHJpbmcoKSwgbiA9IFwiL1wiID09PSBlLnNsaWNlKCAwLCAxICkgPyAxIDogMCwgciA9IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIFwiL1wiID09PSB0LnNsaWNlKCAtIDEgKVxuXHRcdFx0XHRcdH0oIGUgKSA/IC0gMSA6IHZvaWQgMDtcblx0XHRcdFx0XHRyZXR1cm4gZS5zbGljZSggbiwgciApXG5cdFx0XHRcdH0oIHQgKSApXG5cdFx0XHR9ICksIG4uam9pbiggXCIvXCIgKVxuXHRcdH1cblxuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdGNvb2tpZUNvbnNlbnQ6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSA9IHQgfHwgW107XG5cdFx0XHRcdHJldHVybiBlLnVuc2hpZnQoIFwiY29va2llL2NvbnNlbnRcIiApLCBmKCBjKCksIGUgKVxuXHRcdFx0fSxcblx0XHRcdGVtYmVkSWZyYW1lOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIGQoKVxuXHRcdFx0fSxcblx0XHRcdGV2ZW50VmlkZW86IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSA9IHQgfHwgW107XG5cdFx0XHRcdHJldHVybiBlLnVuc2hpZnQoIFwidmlkZW8vZXZlbnRcIiApLCBmKCB1KCksIGUgKVxuXHRcdFx0fSxcblx0XHRcdGdyaWQ6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSA9IHQgfHwgW107XG5cdFx0XHRcdHJldHVybiBlLnVuc2hpZnQoIFwiZ3JpZC9jb2xsZWN0aW9uXCIgKSwgZiggdSgpLCBlIClcblx0XHRcdH0sXG5cdFx0XHRtb21lbnQ6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSA9IHQgfHwgW107XG5cdFx0XHRcdHJldHVybiBlLnVuc2hpZnQoIFwibW9tZW50c1wiICksIGYoIHUoKSwgZSApXG5cdFx0XHR9LFxuXHRcdFx0c2V0dGluZ3M6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSA9IHQgfHwgW107XG5cdFx0XHRcdHJldHVybiBlLnVuc2hpZnQoIFwic2V0dGluZ3NcIiApLCBmKCBjKCksIGUgKVxuXHRcdFx0fSxcblx0XHRcdHRpbWVsaW5lOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUgPSB0IHx8IFtdO1xuXHRcdFx0XHRyZXR1cm4gZS51bnNoaWZ0KCBcInRpbWVsaW5lXCIgKSwgZiggdSgpLCBlIClcblx0XHRcdH0sXG5cdFx0XHR0d2VldEJhdGNoOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUgPSB0IHx8IFtdO1xuXHRcdFx0XHRyZXR1cm4gZS51bnNoaWZ0KCBcInR3ZWV0cy5qc29uXCIgKSwgZiggdSgpLCBlIClcblx0XHRcdH0sXG5cdFx0XHR2aWRlbzogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHZhciBlID0gdCB8fCBbXTtcblx0XHRcdFx0cmV0dXJuIGUudW5zaGlmdCggXCJ3aWRnZXRzL3ZpZGVvXCIgKSwgZiggdSgpLCBlIClcblx0XHRcdH1cblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggNCApLCBpID0gbiggOCApLCBvID0gbiggMzkgKSwgcyA9IG4oIDgwICksIGEgPSBuKCA1ICksIHUgPSBuKCAzNSApLCBjID0gITEsXG5cdFx0XHRkID0gL2h0dHBzPzpcXC9cXC8oW14vXSspLiovaTtcblx0XHR0LmV4cG9ydHMgPSB7XG5cdFx0XHRzZXRPbjogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGMgPSAhMFxuXHRcdFx0fSxcblx0XHRcdGVuYWJsZWQ6IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHRyZXR1cm4gISEoYyB8fCBhLmFzQm9vbGVhbiggdS52YWwoIFwiZG50XCIgKSApIHx8IHMuaXNVcmxTZW5zaXRpdmUoIGUgfHwgaS5ob3N0ICkgfHwgby5pc0ZyYW1lZCgpICYmIHMuaXNVcmxTZW5zaXRpdmUoIG8ucm9vdERvY3VtZW50TG9jYXRpb24oKSApIHx8ICh0ID0gZC50ZXN0KCB0IHx8IHIucmVmZXJyZXIgKSAmJiBSZWdFeHAuJDEpICYmIHMuaXNVcmxTZW5zaXRpdmUoIHQgKSlcblx0XHRcdH1cblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggNDcgKSwgaSA9IG4oIDQgKSwgbyA9IG4oIDIwICksIHMgPSBuKCAzNCApLCBhID0gbiggNzIgKSwgdSA9IG4oIDMzICksIGMgPSBuKCA5ICksIGQgPSBuKCAzICksXG5cdFx0XHRmID0gbiggMCApLCBsID0gMSwgaCA9IHIudmVyc2lvbixcblx0XHRcdHAgPSBjLmdldCggXCJjbGllbnRFdmVudEVuZHBvaW50XCIgKSB8fCBcImh0dHBzOi8vc3luZGljYXRpb24udHdpdHRlci5jb20vaS9qb3RcIjtcblxuXHRcdGZ1bmN0aW9uIG0oIHQgKSB7XG5cdFx0XHRyZXR1cm4gZi5hdWcoIHsgY2xpZW50OiBcInRmd1wiIH0sIHQgfHwge30gKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHYoIHQsIGUsIG4gKSB7XG5cdFx0XHRyZXR1cm4gZSA9IGUgfHwge30sIGYuYXVnKCB7fSwgZSwge1xuXHRcdFx0XHRfY2F0ZWdvcnlfOiB0LFxuXHRcdFx0XHR0cmlnZ2VyZWRfb246IGUudHJpZ2dlcmVkX29uIHx8ICsgbmV3IERhdGUsXG5cdFx0XHRcdGRudDogby5lbmFibGVkKCBuIClcblx0XHRcdH0gKVxuXHRcdH1cblxuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdGV4dHJhY3RUZXJtc0Zyb21ET006IGZ1bmN0aW9uIHQoIGUsIG4gKSB7XG5cdFx0XHRcdHZhciByO1xuXHRcdFx0XHRyZXR1cm4gbiA9IG4gfHwge30sIGUgJiYgZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgPyAoKHIgPSBlLmdldEF0dHJpYnV0ZSggXCJkYXRhLXNjcmliZVwiICkpICYmIHIuc3BsaXQoIFwiIFwiICkuZm9yRWFjaCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0dmFyIGUgPSB0LnRyaW0oKS5zcGxpdCggXCI6XCIgKSwgciA9IGVbIDAgXSwgaSA9IGVbIDEgXTtcblx0XHRcdFx0XHRyICYmIGkgJiYgIW5bIHIgXSAmJiAoblsgciBdID0gaSlcblx0XHRcdFx0fSApLCB0KCBlLnBhcmVudE5vZGUsIG4gKSkgOiBuXG5cdFx0XHR9LFxuXHRcdFx0Y2xpY2tFdmVudEVsZW1lbnQ6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSA9IHMuY2xvc2VzdCggXCJbZGF0YS1leHBhbmRlZC11cmxdXCIsIHQgKSwgbiA9IGUgJiYgZS5nZXRBdHRyaWJ1dGUoIFwiZGF0YS1leHBhbmRlZC11cmxcIiApO1xuXHRcdFx0XHRyZXR1cm4gbiAmJiBkLmlzVHdpdHRlclVSTCggbiApID8gXCJ0d2l0dGVyX3VybFwiIDogXCJ1cmxcIlxuXHRcdFx0fSxcblx0XHRcdGZsYXR0ZW5DbGllbnRFdmVudFBheWxvYWQ6IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHRyZXR1cm4gZi5hdWcoIHt9LCBlLCB7IGV2ZW50X25hbWVzcGFjZTogdCB9IClcblx0XHRcdH0sXG5cdFx0XHRmb3JtYXRHZW5lcmljRXZlbnREYXRhOiB2LFxuXHRcdFx0Zm9ybWF0Q2xpZW50RXZlbnREYXRhOiBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHRcdFx0dmFyIHIgPSB0ICYmIHQud2lkZ2V0X29yaWdpbiB8fCBpLnJlZmVycmVyO1xuXHRcdFx0XHRyZXR1cm4gKHQgPSB2KCBcInRmd19jbGllbnRfZXZlbnRcIiwgdCwgciApKS5jbGllbnRfdmVyc2lvbiA9IGgsIHQuZm9ybWF0X3ZlcnNpb24gPSB2b2lkIDAgIT09IG4gPyBuIDogMSwgZSB8fCAodC53aWRnZXRfb3JpZ2luID0gciksIHRcblx0XHRcdH0sXG5cdFx0XHRmb3JtYXRDbGllbnRFdmVudE5hbWVzcGFjZTogbSxcblx0XHRcdGZvcm1hdEhvcml6b25Ud2VldERhdGE6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSA9IHtcblx0XHRcdFx0XHRpdGVtX2lkczogW10sXG5cdFx0XHRcdFx0aXRlbV9kZXRhaWxzOiB7fVxuXHRcdFx0XHR9O1xuXHRcdFx0XHRyZXR1cm4gZS5pdGVtX2lkcy5wdXNoKCB0ICksIGUuaXRlbV9kZXRhaWxzWyB0IF0gPSB7IGl0ZW1fdHlwZTogYS5UV0VFVCB9LCBlXG5cdFx0XHR9LFxuXHRcdFx0Zm9ybWF0VHdlZXRBc3NvY2lhdGlvbjogZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdHZhciBuID0ge307XG5cdFx0XHRcdHJldHVybiAoZSA9IGUgfHwge30pLmFzc29jaWF0aW9uX25hbWVzcGFjZSA9IG0oIHQgKSwgblsgbCBdID0gZSwgblxuXHRcdFx0fSxcblx0XHRcdG5vdGljZVNlZW46IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRyZXR1cm4gXCJub3RpY2VcIiA9PT0gdC5lbGVtZW50ICYmIFwic2VlblwiID09PSB0LmFjdGlvblxuXHRcdFx0fSxcblx0XHRcdHNwbGl0TG9nRW50cnk6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSwgbiwgciwgaSwgbztcblx0XHRcdFx0cmV0dXJuIHQuaXRlbV9pZHMgJiYgdC5pdGVtX2lkcy5sZW5ndGggPiAxID8gKGUgPSBNYXRoLmZsb29yKCB0Lml0ZW1faWRzLmxlbmd0aCAvIDIgKSwgbiA9IHQuaXRlbV9pZHMuc2xpY2UoIDAsIGUgKSwgciA9IHt9LCBpID0gdC5pdGVtX2lkcy5zbGljZSggZSApLCBvID0ge30sIG4uZm9yRWFjaCggZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRcdFx0clsgZSBdID0gdC5pdGVtX2RldGFpbHNbIGUgXVxuXHRcdFx0XHR9ICksIGkuZm9yRWFjaCggZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRcdFx0b1sgZSBdID0gdC5pdGVtX2RldGFpbHNbIGUgXVxuXHRcdFx0XHR9ICksIFtcblx0XHRcdFx0XHRmLmF1Zygge30sIHQsIHtcblx0XHRcdFx0XHRcdGl0ZW1faWRzOiBuLFxuXHRcdFx0XHRcdFx0aXRlbV9kZXRhaWxzOiByXG5cdFx0XHRcdFx0fSApLFxuXHRcdFx0XHRcdGYuYXVnKCB7fSwgdCwge1xuXHRcdFx0XHRcdFx0aXRlbV9pZHM6IGksXG5cdFx0XHRcdFx0XHRpdGVtX2RldGFpbHM6IG9cblx0XHRcdFx0XHR9IClcblx0XHRcdFx0XSkgOiBbdF1cblx0XHRcdH0sXG5cdFx0XHRzdHJpbmdpZnk6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSwgbiA9IEFycmF5LnByb3RvdHlwZS50b0pTT047XG5cdFx0XHRcdHJldHVybiBkZWxldGUgQXJyYXkucHJvdG90eXBlLnRvSlNPTiwgZSA9IHUuc3RyaW5naWZ5KCB0ICksIG4gJiYgKEFycmF5LnByb3RvdHlwZS50b0pTT04gPSBuKSwgZVxuXHRcdFx0fSxcblx0XHRcdEFVRElFTkNFX0VORFBPSU5UOiBcImh0dHBzOi8vc3luZGljYXRpb24udHdpdHRlci5jb20vaS9qb3Qvc3luZGljYXRpb25cIixcblx0XHRcdENMSUVOVF9FVkVOVF9FTkRQT0lOVDogcCxcblx0XHRcdFJVRk9VU19SRURJUkVDVDogXCJodHRwczovL3BsYXRmb3JtLnR3aXR0ZXIuY29tL2pvdC5odG1sXCJcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggNCApLCBpID0gbiggMTIgKSwgbyA9IG4oIDk3ICksIHMgPSBuKCAxICksIGEgPSBuKCAwICksIHUgPSBvLnVzZXJBZ2VudDtcblxuXHRcdGZ1bmN0aW9uIGMoIHQgKSB7XG5cdFx0XHRyZXR1cm4gLyhUcmlkZW50fE1TSUV8RWRnZVsvIF0/XFxkKS8udGVzdCggdCA9IHQgfHwgdSApXG5cdFx0fVxuXG5cdFx0dC5leHBvcnRzID0ge1xuXHRcdFx0cmV0aW5hOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuICh0ID0gdCB8fCBzKS5kZXZpY2VQaXhlbFJhdGlvID8gdC5kZXZpY2VQaXhlbFJhdGlvID49IDEuNSA6ICEhdC5tYXRjaE1lZGlhICYmIHQubWF0Y2hNZWRpYSggXCJvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxNDRkcGkpXCIgKS5tYXRjaGVzXG5cdFx0XHR9LFxuXHRcdFx0YW55SUU6IGMsXG5cdFx0XHRpZTk6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRyZXR1cm4gL01TSUUgOS8udGVzdCggdCA9IHQgfHwgdSApXG5cdFx0XHR9LFxuXHRcdFx0aWUxMDogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiAvTVNJRSAxMC8udGVzdCggdCA9IHQgfHwgdSApXG5cdFx0XHR9LFxuXHRcdFx0aW9zOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIC8oaVBhZHxpUGhvbmV8aVBvZCkvLnRlc3QoIHQgPSB0IHx8IHUgKVxuXHRcdFx0fSxcblx0XHRcdGFuZHJvaWQ6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRyZXR1cm4gL15Nb3ppbGxhXFwvNVxcLjAgXFwoTGludXg7IChVOyApP0FuZHJvaWQvLnRlc3QoIHQgPSB0IHx8IHUgKVxuXHRcdFx0fSxcblx0XHRcdGNhblBvc3RNZXNzYWdlOiBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0cmV0dXJuIHQgPSB0IHx8IHMsIGUgPSBlIHx8IHUsIHQucG9zdE1lc3NhZ2UgJiYgIShjKCBlICkgJiYgdC5vcGVuZXIpXG5cdFx0XHR9LFxuXHRcdFx0dG91Y2g6IGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdFx0XHRyZXR1cm4gdCA9IHQgfHwgcywgZSA9IGUgfHwgbywgbiA9IG4gfHwgdSwgXCJvbnRvdWNoc3RhcnRcIiBpbiB0IHx8IC9PcGVyYSBNaW5pLy50ZXN0KCBuICkgfHwgZS5tc01heFRvdWNoUG9pbnRzID4gMFxuXHRcdFx0fSxcblx0XHRcdGNzc1RyYW5zaXRpb25zOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHQgPSByLmJvZHkuc3R5bGU7XG5cdFx0XHRcdHJldHVybiB2b2lkIDAgIT09IHQudHJhbnNpdGlvbiB8fCB2b2lkIDAgIT09IHQud2Via2l0VHJhbnNpdGlvbiB8fCB2b2lkIDAgIT09IHQubW96VHJhbnNpdGlvbiB8fCB2b2lkIDAgIT09IHQub1RyYW5zaXRpb24gfHwgdm9pZCAwICE9PSB0Lm1zVHJhbnNpdGlvblxuXHRcdFx0fSxcblx0XHRcdGhhc1Byb21pc2VTdXBwb3J0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICEhKHMuUHJvbWlzZSAmJiBzLlByb21pc2UucmVzb2x2ZSAmJiBzLlByb21pc2UucmVqZWN0ICYmIHMuUHJvbWlzZS5hbGwgJiYgcy5Qcm9taXNlLnJhY2UgJiYgKG5ldyBzLlByb21pc2UoIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0XHRcdHQgPSBlXG5cdFx0XHRcdH0gKSwgYS5pc1R5cGUoIFwiZnVuY3Rpb25cIiwgdCApKSk7XG5cdFx0XHRcdHZhciB0XG5cdFx0XHR9LFxuXHRcdFx0aGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJTdXBwb3J0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICEhcy5JbnRlcnNlY3Rpb25PYnNlcnZlclxuXHRcdFx0fSxcblx0XHRcdGhhc1BlcmZvcm1hbmNlSW5mb3JtYXRpb246IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gcy5wZXJmb3JtYW5jZSAmJiBzLnBlcmZvcm1hbmNlLmdldEVudHJpZXNCeVR5cGVcblx0XHRcdH0sXG5cdFx0XHRoYXNMb2NhbFN0b3JhZ2VTdXBwb3J0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRyZXR1cm4gcy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSggXCJsb2NhbF9zdG9yYWdlX3N1cHBvcnRfdGVzdFwiLCBcInRydWVcIiApLCB2b2lkIDAgIT09IHMubG9jYWxTdG9yYWdlXG5cdFx0XHRcdH0gY2F0Y2ggKCB0ICkge1xuXHRcdFx0XHRcdHJldHVybiBpLmRldkVycm9yKCBcIndpbmRvdy5sb2NhbFN0b3JhZ2UgaXMgbm90IHN1cHBvcnRlZDpcIiwgdCApLCAhMVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDYgKSwgaSA9IG4oIDIgKTtcblxuXHRcdGZ1bmN0aW9uIG8oIHQsIGUgKSB7XG5cdFx0XHRyZXR1cm4gdC50aGVuKCBlLCBlIClcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBzKCB0ICkge1xuXHRcdFx0cmV0dXJuIHQgaW5zdGFuY2VvZiByXG5cdFx0fVxuXG5cdFx0dC5leHBvcnRzID0ge1xuXHRcdFx0YWx3YXlzOiBvLFxuXHRcdFx0YWxsUmVzb2x2ZWQ6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZTtcblx0XHRcdFx0cmV0dXJuIHZvaWQgMCA9PT0gdCA/IHIucmVqZWN0KCBuZXcgRXJyb3IoIFwidW5kZWZpbmVkIGlzIG5vdCBhbiBvYmplY3RcIiApICkgOiBBcnJheS5pc0FycmF5KCB0ICkgPyAoZSA9IHQubGVuZ3RoKSA/IG5ldyByKCBmdW5jdGlvbiggbiwgciApIHtcblx0XHRcdFx0XHR2YXIgaSA9IDAsIG8gPSBbXTtcblxuXHRcdFx0XHRcdGZ1bmN0aW9uIGEoKSB7XG5cdFx0XHRcdFx0XHQoaSArPSAxKSA9PT0gZSAmJiAoMCA9PT0gby5sZW5ndGggPyByKCkgOiBuKCBvICkpXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0ZnVuY3Rpb24gdSggdCApIHtcblx0XHRcdFx0XHRcdG8ucHVzaCggdCApLCBhKClcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0LmZvckVhY2goIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdFx0cyggdCApID8gdC50aGVuKCB1LCBhICkgOiB1KCB0IClcblx0XHRcdFx0XHR9IClcblx0XHRcdFx0fSApIDogci5yZXNvbHZlKCBbXSApIDogci5yZWplY3QoIG5ldyBFcnJvciggXCJUeXBlIGVycm9yXCIgKSApXG5cdFx0XHR9LFxuXHRcdFx0c29tZTogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHZhciBlO1xuXHRcdFx0XHRyZXR1cm4gZSA9ICh0ID0gdCB8fCBbXSkubGVuZ3RoLCB0ID0gdC5maWx0ZXIoIHMgKSwgZSA/IGUgIT09IHQubGVuZ3RoID8gci5yZWplY3QoIFwibm9uLVByb21pc2UgcGFzc2VkIHRvIC5zb21lXCIgKSA6IG5ldyByKCBmdW5jdGlvbiggZSwgbiApIHtcblx0XHRcdFx0XHR2YXIgciA9IDA7XG5cblx0XHRcdFx0XHRmdW5jdGlvbiBpKCkge1xuXHRcdFx0XHRcdFx0KHIgKz0gMSkgPT09IHQubGVuZ3RoICYmIG4oKVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHQuZm9yRWFjaCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0XHR0LnRoZW4oIGUsIGkgKVxuXHRcdFx0XHRcdH0gKVxuXHRcdFx0XHR9ICkgOiByLnJlamVjdCggXCJubyBwcm9taXNlcyBwYXNzZWQgdG8gLnNvbWVcIiApXG5cdFx0XHR9LFxuXHRcdFx0aXNQcm9taXNlOiBzLFxuXHRcdFx0YWxsU2V0dGxlZDogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdGZ1bmN0aW9uIGUoKSB7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gci5hbGwoICh0IHx8IFtdKS5tYXAoIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdHJldHVybiBvKCB0LCBlIClcblx0XHRcdFx0fSApIClcblx0XHRcdH0sXG5cdFx0XHR0aW1lb3V0OiBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0dmFyIG4gPSBuZXcgaTtcblx0XHRcdFx0cmV0dXJuIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdG4ucmVqZWN0KCBuZXcgRXJyb3IoIFwiUHJvbWlzZSB0aW1lZCBvdXRcIiApIClcblx0XHRcdFx0fSwgZSApLCB0LnRoZW4oIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdG4ucmVzb2x2ZSggdCApXG5cdFx0XHRcdH0sIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdG4ucmVqZWN0KCB0IClcblx0XHRcdFx0fSApLCBuLnByb21pc2Vcblx0XHRcdH1cblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdHZhciBuID0gXCJpXCIsIHIgPSAwLCBpID0gMDtcblx0XHR0LmV4cG9ydHMgPSB7XG5cdFx0XHRnZW5lcmF0ZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBuICsgU3RyaW5nKCArIG5ldyBEYXRlICkgKyBNYXRoLmZsb29yKCAxZTUgKiBNYXRoLnJhbmRvbSgpICkgKyByICsrXG5cdFx0XHR9LFxuXHRcdFx0ZGV0ZXJtaW5pc3RpYzogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBuICsgU3RyaW5nKCBpICsrIClcblx0XHRcdH1cblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggNDkgKSwgaSA9IG4oIDUxICksIG8gPSBuKCAwICk7XG5cdFx0dC5leHBvcnRzID0gby5hdWcoIHIuZ2V0KCBcImV2ZW50c1wiICkgfHwge30sIGkuRW1pdHRlciApXG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMjcgKSwgaSA9IG4oIDExMiApO1xuXHRcdHQuZXhwb3J0cyA9IHIuYnVpbGQoIFtpXSApXG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggNDAgKSwgaSA9IG4oIDEwOSApLCBvID0gbiggNyApO1xuXHRcdChyID0gT2JqZWN0LmNyZWF0ZSggciApKS5idWlsZCA9IG8oIHIuYnVpbGQsIG51bGwsIGkgKSwgdC5leHBvcnRzID0gclxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDQwICksIGkgPSBuKCA0MSApLCBvID0gbiggNyApO1xuXHRcdChyID0gT2JqZWN0LmNyZWF0ZSggciApKS5idWlsZCA9IG8oIHIuYnVpbGQsIG51bGwsIGkgKSwgdC5leHBvcnRzID0gclxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDg0ICksIGkgPSBuKCA3NiApLCBvID0gbiggODUgKSwgcyA9IG4oIDggKSwgYSA9IG4oIDcxICksIHUgPSBuKCA3NSApLCBjID0gbiggMjAgKSwgZCA9IG4oIDUgKSxcblx0XHRcdGYgPSBuKCAyNCApLCBsID0gbiggMCApO1xuXG5cdFx0ZnVuY3Rpb24gaCggdCApIHtcblx0XHRcdGlmICggIXQgfHwgIXQuaGVhZGVycyApIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcInVuZXhwZWN0ZWQgcmVzcG9uc2Ugc2NoZW1hXCIgKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGh0bWw6IHQuYm9keSxcblx0XHRcdFx0Y29uZmlnOiB0LmNvbmZpZyxcblx0XHRcdFx0cG9sbEludGVydmFsOiAxZTMgKiBwYXJzZUludCggdC5oZWFkZXJzLnhQb2xsaW5nLCAxMCApIHx8IG51bGwsXG5cdFx0XHRcdG1heEN1cnNvclBvc2l0aW9uOiB0LmhlYWRlcnMubWF4UG9zaXRpb24sXG5cdFx0XHRcdG1pbkN1cnNvclBvc2l0aW9uOiB0LmhlYWRlcnMubWluUG9zaXRpb25cblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBwKCB0ICkge1xuXHRcdFx0aWYgKCB0ICYmIHQuaGVhZGVycyApIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCB0LmhlYWRlcnMuc3RhdHVzICk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvdyB0IGluc3RhbmNlb2YgRXJyb3IgPyB0IDogbmV3IEVycm9yKCB0IClcblx0XHR9XG5cblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdHQucGFyYW1zKCB7XG5cdFx0XHRcdGluc3RhbmNlSWQ6IHtcblx0XHRcdFx0XHRyZXF1aXJlZDogITAsXG5cdFx0XHRcdFx0ZmFsbGJhY2s6IGYuZGV0ZXJtaW5pc3RpY1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRsYW5nOiB7XG5cdFx0XHRcdFx0cmVxdWlyZWQ6ICEwLFxuXHRcdFx0XHRcdHRyYW5zZm9ybTogYS5tYXRjaExhbmd1YWdlLFxuXHRcdFx0XHRcdGZhbGxiYWNrOiBcImVuXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0dHdlZXRMaW1pdDogeyB0cmFuc2Zvcm06IGQuYXNJbnQgfVxuXHRcdFx0fSApLCB0LmRlZmluZVByb3BlcnR5KCBcImVuZHBvaW50XCIsIHtcblx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiZW5kcG9pbnQgbm90IHNwZWNpZmllZFwiIClcblx0XHRcdFx0fVxuXHRcdFx0fSApLCB0LmRlZmluZVByb3BlcnR5KCBcInBvbGxFbmRwb2ludFwiLCB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZW5kcG9pbnRcblx0XHRcdFx0fVxuXHRcdFx0fSApLCB0LmRlZmluZSggXCJjYklkXCIsIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSA9IHQgPyBcIl9uZXdcIiA6IFwiX29sZFwiO1xuXHRcdFx0XHRyZXR1cm4gXCJ0bF9cIiArIHRoaXMucGFyYW1zLmluc3RhbmNlSWQgKyBcIl9cIiArIHRoaXMuaWQgKyBlXG5cdFx0XHR9ICksIHQuZGVmaW5lKCBcInF1ZXJ5UGFyYW1zXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGxhbmc6IHRoaXMucGFyYW1zLmxhbmcsXG5cdFx0XHRcdFx0dHo6IHUuZ2V0VGltZXpvbmVPZmZzZXQoKSxcblx0XHRcdFx0XHR0OiByKCksXG5cdFx0XHRcdFx0ZG9tYWluOiBzLmhvc3QsXG5cdFx0XHRcdFx0dHdlZXRfbGltaXQ6IHRoaXMucGFyYW1zLnR3ZWV0TGltaXQsXG5cdFx0XHRcdFx0ZG50OiBjLmVuYWJsZWQoKVxuXHRcdFx0XHR9XG5cdFx0XHR9ICksIHQuZGVmaW5lKCBcImZldGNoXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gaS5mZXRjaCggdGhpcy5lbmRwb2ludCwgdGhpcy5xdWVyeVBhcmFtcygpLCBvLCB0aGlzLmNiSWQoKSApLnRoZW4oIGgsIHAgKVxuXHRcdFx0fSApLCB0LmRlZmluZSggXCJwb2xsXCIsIGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHR2YXIgbiwgcjtcblx0XHRcdFx0cmV0dXJuIG4gPSB7XG5cdFx0XHRcdFx0c2luY2VfaWQ6ICh0ID0gdCB8fCB7fSkuc2luY2VJZCxcblx0XHRcdFx0XHRtYXhfaWQ6IHQubWF4SWQsXG5cdFx0XHRcdFx0bWluX3Bvc2l0aW9uOiB0Lm1pblBvc2l0aW9uLFxuXHRcdFx0XHRcdG1heF9wb3NpdGlvbjogdC5tYXhQb3NpdGlvblxuXHRcdFx0XHR9LCByID0gbC5hdWcoIHRoaXMucXVlcnlQYXJhbXMoKSwgbiApLCBpLmZldGNoKCB0aGlzLnBvbGxFbmRwb2ludCwgciwgbywgdGhpcy5jYklkKCBlICkgKS50aGVuKCBoLCBwIClcblx0XHRcdH0gKVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCA1MSApLm1ha2VFbWl0dGVyKCk7XG5cdFx0dC5leHBvcnRzID0ge1xuXHRcdFx0ZW1pdHRlcjogcixcblx0XHRcdFNUQVJUOiBcInN0YXJ0XCIsXG5cdFx0XHRBTExfV0lER0VUU19SRU5ERVJfU1RBUlQ6IFwiYWxsX3dpZGdldHNfcmVuZGVyX3N0YXJ0XCIsXG5cdFx0XHRBTExfV0lER0VUU19SRU5ERVJfRU5EOiBcImFsbF93aWRnZXRzX3JlbmRlcl9lbmRcIixcblx0XHRcdEFMTF9XSURHRVRTX0FORF9JTUFHRVNfTE9BREVEOiBcImFsbF93aWRnZXRzX2FuZF9pbWFnZXNfbG9hZGVkXCJcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMTE1ICksIGkgPSBuKCAxMTggKTtcblxuXHRcdGZ1bmN0aW9uIG8oIHQgKSB7XG5cdFx0XHRyZXR1cm4gci5zZXR0aW5nc0xvYWRlZCgpLnRoZW4oIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0XHRyZXR1cm4gZVsgdCBdXG5cdFx0XHR9IClcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBzKCkge1xuXHRcdFx0cmV0dXJuIG8oIFwiZXhwZXJpbWVudHNcIiApXG5cdFx0fVxuXG5cdFx0dC5leHBvcnRzID0ge1xuXHRcdFx0c2hvdWxkT2J0YWluQ29va2llQ29uc2VudDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBvKCBcInNob3VsZE9idGFpbkNvb2tpZUNvbnNlbnRcIiApXG5cdFx0XHR9LFxuXHRcdFx0Z2V0RXhwZXJpbWVudHM6IHMsXG5cdFx0XHRnZXRFeHBlcmltZW50OiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIHMoKS50aGVuKCBmdW5jdGlvbiggZSApIHtcblx0XHRcdFx0XHRpZiAoICFlWyB0IF0gKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiRXhwZXJpbWVudCBub3QgZm91bmRcIiApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gZVsgdCBdXG5cdFx0XHRcdH0gKVxuXHRcdFx0fSxcblx0XHRcdGdldEFjdGl2ZUV4cGVyaW1lbnREYXRhU3RyaW5nOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHMoKS50aGVuKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHR2YXIgZSA9IE9iamVjdC5rZXlzKCB0ICkucmVkdWNlKCBmdW5jdGlvbiggZSwgbiApIHtcblx0XHRcdFx0XHRcdHZhciByO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRbIG4gXS52ZXJzaW9uICYmIChyID0gbi5zcGxpdCggXCJfXCIgKS5zbGljZSggLSAxIClbIDAgXSwgZS5wdXNoKCByICsgXCI7XCIgKyB0WyBuIF0uYnVja2V0ICkpLCBlXG5cdFx0XHRcdFx0fSwgW10gKTtcblx0XHRcdFx0XHRyZXR1cm4gaSggZS5qb2luKCBcIixcIiApIClcblx0XHRcdFx0fSApXG5cdFx0XHR9LFxuXHRcdFx0Z2V0RXhwZXJpbWVudEtleXM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gcygpLnRoZW4oIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdHJldHVybiBPYmplY3Qua2V5cyggdCApXG5cdFx0XHRcdH0gKVxuXHRcdFx0fSxcblx0XHRcdGxvYWQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyLmxvYWQoKVxuXHRcdFx0fVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCA0ICksIGkgPSBuKCAwICk7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0XHR2YXIgbztcblx0XHRcdGlmICggbiA9IG4gfHwgciwgdCA9IHQgfHwge30sIGUgPSBlIHx8IHt9LCB0Lm5hbWUgKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0byA9IG4uY3JlYXRlRWxlbWVudCggJzxpZnJhbWUgbmFtZT1cIicgKyB0Lm5hbWUgKyAnXCI+PC9pZnJhbWU+JyApXG5cdFx0XHRcdH0gY2F0Y2ggKCBlICkge1xuXHRcdFx0XHRcdChvID0gbi5jcmVhdGVFbGVtZW50KCBcImlmcmFtZVwiICkpLm5hbWUgPSB0Lm5hbWVcblx0XHRcdFx0fVxuXHRcdFx0XHRkZWxldGUgdC5uYW1lXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvID0gbi5jcmVhdGVFbGVtZW50KCBcImlmcmFtZVwiICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdC5pZCAmJiAoby5pZCA9IHQuaWQsIGRlbGV0ZSB0LmlkKSwgby5hbGxvd3RyYW5zcGFyZW5jeSA9IFwidHJ1ZVwiLCBvLnNjcm9sbGluZyA9IFwibm9cIiwgby5zZXRBdHRyaWJ1dGUoIFwiZnJhbWVCb3JkZXJcIiwgMCApLCBvLnNldEF0dHJpYnV0ZSggXCJhbGxvd1RyYW5zcGFyZW5jeVwiLCAhMCApLCBpLmZvckluKCB0LCBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0by5zZXRBdHRyaWJ1dGUoIHQsIGUgKVxuXHRcdFx0fSApLCBpLmZvckluKCBlLCBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0by5zdHlsZVsgdCBdID0gZVxuXHRcdFx0fSApLCBvXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDEgKS5KU09OO1xuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdHN0cmluZ2lmeTogci5zdHJpbmdpZnkgfHwgci5lbmNvZGUsXG5cdFx0XHRwYXJzZTogci5wYXJzZSB8fCByLmRlY29kZVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAwICksIGkgPSBuKCA0MyApO1xuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdGNsb3Nlc3Q6IGZ1bmN0aW9uIHQoIGUsIG4sIG8gKSB7XG5cdFx0XHRcdHZhciBzO1xuXHRcdFx0XHRpZiAoIG4gKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG8gPSBvIHx8IG4gJiYgbi5vd25lckRvY3VtZW50LCBzID0gci5pc1R5cGUoIFwiZnVuY3Rpb25cIiwgZSApID8gZSA6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gISFlLnRhZ05hbWUgJiYgaSggZSwgdCApXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSggZSApLCBuID09PSBvID8gcyggbiApID8gbiA6IHZvaWQgMCA6IHMoIG4gKSA/IG4gOiB0KCBzLCBuLnBhcmVudE5vZGUsIG8gKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciwgaSA9IG4oIDQgKTtcblxuXHRcdGZ1bmN0aW9uIG8oIHQgKSB7XG5cdFx0XHR2YXIgZSwgbiwgbywgcyA9IDA7XG5cdFx0XHRmb3IgKCByID0ge30sIGUgPSAodCA9IHQgfHwgaSkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIFwibWV0YVwiICk7IGVbIHMgXTsgcyArKyApIHtcblx0XHRcdFx0aWYgKCBuID0gZVsgcyBdLCAvXnR3aXR0ZXI6Ly50ZXN0KCBuLmdldEF0dHJpYnV0ZSggXCJuYW1lXCIgKSApICkge1xuXHRcdFx0XHRcdG8gPSBuLmdldEF0dHJpYnV0ZSggXCJuYW1lXCIgKS5yZXBsYWNlKCAvXnR3aXR0ZXI6LywgXCJcIiApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmICggIS9edHdpdHRlcjovLnRlc3QoIG4uZ2V0QXR0cmlidXRlKCBcInByb3BlcnR5XCIgKSApICkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG8gPSBuLmdldEF0dHJpYnV0ZSggXCJwcm9wZXJ0eVwiICkucmVwbGFjZSggL150d2l0dGVyOi8sIFwiXCIgKVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJbIG8gXSA9IG4uZ2V0QXR0cmlidXRlKCBcImNvbnRlbnRcIiApIHx8IG4uZ2V0QXR0cmlidXRlKCBcInZhbHVlXCIgKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdG8oKSwgdC5leHBvcnRzID0ge1xuXHRcdFx0aW5pdDogbyxcblx0XHRcdHZhbDogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiByWyB0IF1cblx0XHRcdH1cblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMTAgKSwgaSA9IHt9LCBvID0gLSAxLCBzID0ge307XG5cblx0XHRmdW5jdGlvbiBhKCB0ICkge1xuXHRcdFx0dmFyIGUgPSB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLXR3aXR0ZXItZXZlbnQtaWRcIiApO1xuXHRcdFx0cmV0dXJuIGUgfHwgKHQuc2V0QXR0cmlidXRlKCBcImRhdGEtdHdpdHRlci1ldmVudC1pZFwiLCArKyBvICksIG8pXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdSggdCwgZSwgbiApIHtcblx0XHRcdHZhciByID0gMCwgaSA9IHQgJiYgdC5sZW5ndGggfHwgMDtcblx0XHRcdGZvciAoIHIgPSAwOyByIDwgaTsgciArKyApIHtcblx0XHRcdFx0aWYgKCB0WyByIF0uY2FsbCggZSwgbiwgZSApLCBuLmNlYXNlSW1tZWRpYXRlbHkgKSB7XG5cdFx0XHRcdFx0cmV0dXJuICExXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBjKCB0LCBlLCBuICkge1xuXHRcdFx0Zm9yIChcblx0XHRcdFx0dmFyIGkgPSBuIHx8IHQudGFyZ2V0IHx8IHQuc3JjRWxlbWVudCwgbyA9IHIubGlzdCggaSApLm1hcCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFwiLlwiICsgdFxuXHRcdFx0XHR9ICkuY29uY2F0KCBpLnRhZ05hbWUgKSwgcyA9IDAsIGEgPSBvLmxlbmd0aDsgcyA8IGE7IHMgKytcblx0XHRcdCkge1xuXHRcdFx0XHRpZiAoICExID09PSB1KCBlWyBvWyBzIF0gXSwgaSwgdCApICkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dC5jZWFzZSB8fCBpICE9PSB0aGlzICYmIGMuY2FsbCggdGhpcywgdCwgZSwgaS5wYXJlbnRFbGVtZW50IHx8IGkucGFyZW50Tm9kZSApXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZCggdCwgZSwgbiwgciApIHtcblx0XHRcdGZ1bmN0aW9uIGkoIHIgKSB7XG5cdFx0XHRcdGMuY2FsbCggdCwgciwgblsgZSBdIClcblx0XHRcdH1cblxuXHRcdFx0IWZ1bmN0aW9uKCB0LCBlLCBuLCByICkge1xuXHRcdFx0XHR0LmlkICYmIChzWyB0LmlkIF0gPSBzWyB0LmlkIF0gfHwgW10sIHNbIHQuaWQgXS5wdXNoKCB7XG5cdFx0XHRcdFx0ZWw6IHQsXG5cdFx0XHRcdFx0bGlzdGVuZXI6IGUsXG5cdFx0XHRcdFx0dHlwZTogbixcblx0XHRcdFx0XHRyb290SWQ6IHJcblx0XHRcdFx0fSApKVxuXHRcdFx0fSggdCwgaSwgZSwgciApLCB0LmFkZEV2ZW50TGlzdGVuZXIoIGUsIGksICExIClcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBmKCB0ICkge1xuXHRcdFx0dCAmJiB0LnByZXZlbnREZWZhdWx0ID8gdC5wcmV2ZW50RGVmYXVsdCgpIDogdC5yZXR1cm5WYWx1ZSA9ICExXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gbCggdCApIHtcblx0XHRcdHQgJiYgKHQuY2Vhc2UgPSAhMCkgJiYgdC5zdG9wUHJvcGFnYXRpb24gPyB0LnN0b3BQcm9wYWdhdGlvbigpIDogdC5jYW5jZWxCdWJibGUgPSAhMFxuXHRcdH1cblxuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdHN0b3A6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRyZXR1cm4gbCggdCApLCBmKCB0ICksICExXG5cdFx0XHR9LFxuXHRcdFx0c3RvcFByb3BhZ2F0aW9uOiBsLFxuXHRcdFx0c3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dCAmJiAodC5jZWFzZUltbWVkaWF0ZWx5ID0gITAsIGwoIHQgKSwgdC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSlcblx0XHRcdH0sXG5cdFx0XHRwcmV2ZW50RGVmYXVsdDogZixcblx0XHRcdGRlbGVnYXRlOiBmdW5jdGlvbiggdCwgZSwgbiwgciApIHtcblx0XHRcdFx0dmFyIG8gPSBhKCB0ICk7XG5cdFx0XHRcdGlbIG8gXSA9IGlbIG8gXSB8fCB7fSwgaVsgbyBdWyBlIF0gfHwgKGlbIG8gXVsgZSBdID0ge30sIGQoIHQsIGUsIGlbIG8gXSwgbyApKSwgaVsgbyBdWyBlIF1bIG4gXSA9IGlbIG8gXVsgZSBdWyBuIF0gfHwgW10sIGlbIG8gXVsgZSBdWyBuIF0ucHVzaCggciApXG5cdFx0XHR9LFxuXHRcdFx0c2ltdWxhdGU6IGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdFx0XHR2YXIgciA9IGEoIGUgKSwgbyA9IGlbIHIgXSAmJiBpWyByIF07XG5cdFx0XHRcdGMuY2FsbCggZSwgeyB0YXJnZXQ6IG4gfSwgb1sgdCBdIClcblx0XHRcdH0sXG5cdFx0XHRyZW1vdmVEZWxlZ2F0ZXNGb3JXaWRnZXQ6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSA9IHNbIHQgXTtcblx0XHRcdFx0ZSAmJiAoZS5mb3JFYWNoKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHR0LmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoIHQudHlwZSwgdC5saXN0ZW5lciwgITEgKSwgZGVsZXRlIGlbIHQucm9vdElkIF1cblx0XHRcdFx0fSApLCBkZWxldGUgc1sgdCBdKVxuXHRcdFx0fVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCA3OCApLCBpID0gbiggMTA2ICksIG8gPSBuKCA4MSApLCBzID0gbiggMjEgKSwgYSA9IG5ldyAobiggMTE0ICkpKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdHZhciBlLCBuLCBhO1xuXHRcdFx0aWYgKCAwICE9PSB0Lmxlbmd0aCApIHtcblx0XHRcdFx0aWYgKCB1KCB0ICkgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGMoIHQgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlID0gciggdCwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHMubm90aWNlU2VlbiggdC5pbnB1dC5uYW1lc3BhY2UgKVxuXHRcdFx0XHR9ICksIG4gPSBlLnRydWUsIGEgPSBlLmZhbHNlLCBuICYmIG4ubGVuZ3RoID4gMCAmJiAobiA9IG4uc2xpY2UoIDAsIDEgKSwgby5jYW5GbHVzaE9uZUl0ZW0oIG5bIDAgXSApIHx8IChuWyAwIF0uaW5wdXQuZGF0YS5tZXNzYWdlID0gXCJcIiksIGMoIG4gKSksIGEgJiYgKHUoIGEgKSA/IGMgOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRpLmluaXQoKSwgdC5mb3JFYWNoKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRcdHZhciBlID0gdC5pbnB1dC5uYW1lc3BhY2UsIG4gPSB0LmlucHV0LmRhdGEsIHIgPSB0LmlucHV0Lm9mZnNpdGUsIG8gPSB0LmlucHV0LnZlcnNpb247XG5cdFx0XHRcdFx0XHRpLmNsaWVudEV2ZW50KCBlLCBuLCByLCBvIClcblx0XHRcdFx0XHR9ICksIGkuZmx1c2goKS50aGVuKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdHQuZm9yRWFjaCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0XHRcdHQudGFza0RvbmVEZWZlcnJlZC5yZXNvbHZlKClcblx0XHRcdFx0XHRcdH0gKVxuXHRcdFx0XHRcdH0sIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0dC5mb3JFYWNoKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRcdFx0dC50YXNrRG9uZURlZmVycmVkLnJlamVjdCgpXG5cdFx0XHRcdFx0XHR9IClcblx0XHRcdFx0XHR9IClcblx0XHRcdFx0fSkoIGEgKVxuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdGZ1bmN0aW9uIHUoIHQgKSB7XG5cdFx0XHRyZXR1cm4gMSA9PT0gdC5sZW5ndGggJiYgby5jYW5GbHVzaE9uZUl0ZW0oIHRbIDAgXSApXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gYyggdCApIHtcblx0XHRcdHQuZm9yRWFjaCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHZhciBlID0gdC5pbnB1dC5uYW1lc3BhY2UsIG4gPSB0LmlucHV0LmRhdGEsIHIgPSB0LmlucHV0Lm9mZnNpdGUsIGkgPSB0LmlucHV0LnZlcnNpb247XG5cdFx0XHRcdG8uY2xpZW50RXZlbnQoIGUsIG4sIHIsIGkgKSwgdC50YXNrRG9uZURlZmVycmVkLnJlc29sdmUoKVxuXHRcdFx0fSApXG5cdFx0fVxuXG5cdFx0dC5leHBvcnRzID0ge1xuXHRcdFx0c2NyaWJlOiBmdW5jdGlvbiggdCwgZSwgbiwgciApIHtcblx0XHRcdFx0cmV0dXJuIGEuYWRkKCB7XG5cdFx0XHRcdFx0bmFtZXNwYWNlOiB0LFxuXHRcdFx0XHRcdGRhdGE6IGUsXG5cdFx0XHRcdFx0b2Zmc2l0ZTogbixcblx0XHRcdFx0XHR2ZXJzaW9uOiByXG5cdFx0XHRcdH0gKVxuXHRcdFx0fSxcblx0XHRcdHBhdXNlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0YS5wYXVzZSgpXG5cdFx0XHR9LFxuXHRcdFx0cmVzdW1lOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0YS5yZXN1bWUoKVxuXHRcdFx0fVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAyNyApLCBpID0gbiggMTI3ICk7XG5cdFx0dC5leHBvcnRzID0gci5idWlsZCggW2ldIClcblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCA4ICksIGkgPSBuKCA3OSApLCBvID0gbiggMCApLCBzID0gaS5nZXRDYW5vbmljYWxVUkwoKSB8fCByLmhyZWYsIGEgPSBzO1xuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdGlzRnJhbWVkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHMgIT09IGFcblx0XHRcdH0sXG5cdFx0XHRyb290RG9jdW1lbnRMb2NhdGlvbjogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiB0ICYmIG8uaXNUeXBlKCBcInN0cmluZ1wiLCB0ICkgJiYgKHMgPSB0KSwgc1xuXHRcdFx0fSxcblx0XHRcdGN1cnJlbnREb2N1bWVudExvY2F0aW9uOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIGFcblx0XHRcdH1cblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMTA3ICksIGkgPSBuKCAxMDggKSwgbyA9IG4oIDAgKTtcblx0XHR0LmV4cG9ydHMgPSB7XG5cdFx0XHRjb3VwbGU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gby50b1JlYWxBcnJheSggYXJndW1lbnRzIClcblx0XHRcdH0sXG5cdFx0XHRidWlsZDogZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0XHRcdHZhciBvID0gbmV3IHQ7XG5cdFx0XHRcdHJldHVybiAoZSA9IGkoIHIoIGUgfHwgW10gKSApKS5mb3JFYWNoKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHR0LmNhbGwoIG51bGwsIG8gKVxuXHRcdFx0XHR9ICksIG8uYnVpbGQoIG4gKVxuXHRcdFx0fVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAxMTAgKSwgaSA9IG4oIDAgKSwgbyA9IG4oIDQyICk7XG5cblx0XHRmdW5jdGlvbiBzKCkge1xuXHRcdFx0dGhpcy5Db21wb25lbnQgPSB0aGlzLmZhY3RvcnkoKSwgdGhpcy5fYWR2aWNlQXJncyA9IFtdLCB0aGlzLl9sYXN0QXJncyA9IFtdXG5cdFx0fVxuXG5cdFx0aS5hdWcoIHMucHJvdG90eXBlLCB7XG5cdFx0XHRmYWN0b3J5OiBvLFxuXHRcdFx0YnVpbGQ6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSA9IHRoaXM7XG5cdFx0XHRcdHJldHVybiB0aGlzLkNvbXBvbmVudCwgaS5hdWcoIHRoaXMuQ29tcG9uZW50LnByb3RvdHlwZS5ib3VuZFBhcmFtcywgdCApLCB0aGlzLl9hZHZpY2VBcmdzLmNvbmNhdCggdGhpcy5fbGFzdEFyZ3MgKS5mb3JFYWNoKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHQoZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0XHRcdFx0XHR2YXIgciA9IHRoaXNbIGUgXTtcblx0XHRcdFx0XHRcdGlmICggIXIgKSB7XG5cdFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggZSArIFwiIGRvZXMgbm90IGV4aXN0XCIgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHRoaXNbIGUgXSA9IHQoIHIsIG4gKVxuXHRcdFx0XHRcdH0pLmFwcGx5KCBlLkNvbXBvbmVudC5wcm90b3R5cGUsIHQgKVxuXHRcdFx0XHR9ICksIGRlbGV0ZSB0aGlzLl9sYXN0QXJncywgZGVsZXRlIHRoaXMuX2FkdmljZUFyZ3MsIHRoaXMuQ29tcG9uZW50XG5cdFx0XHR9LFxuXHRcdFx0cGFyYW1zOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUgPSB0aGlzLkNvbXBvbmVudC5wcm90b3R5cGUucGFyYW1Db25maWdzO1xuXHRcdFx0XHR0ID0gdCB8fCB7fSwgdGhpcy5Db21wb25lbnQucHJvdG90eXBlLnBhcmFtQ29uZmlncyA9IGkuYXVnKCB7fSwgdCwgZSApXG5cdFx0XHR9LFxuXHRcdFx0ZGVmaW5lOiBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0aWYgKCB0IGluIHRoaXMuQ29tcG9uZW50LnByb3RvdHlwZSApIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIHQgKyBcIiBoYXMgcHJldmlvdXNseSBiZWVuIGRlZmluZWRcIiApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMub3ZlcnJpZGUoIHQsIGUgKVxuXHRcdFx0fSxcblx0XHRcdGRlZmluZVN0YXRpYzogZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdHRoaXMuQ29tcG9uZW50WyB0IF0gPSBlXG5cdFx0XHR9LFxuXHRcdFx0b3ZlcnJpZGU6IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHR0aGlzLkNvbXBvbmVudC5wcm90b3R5cGVbIHQgXSA9IGVcblx0XHRcdH0sXG5cdFx0XHRkZWZpbmVQcm9wZXJ0eTogZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdGlmICggdCBpbiB0aGlzLkNvbXBvbmVudC5wcm90b3R5cGUgKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCB0ICsgXCIgaGFzIHByZXZpb3VzbHkgYmVlbiBkZWZpbmVkXCIgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLm92ZXJyaWRlUHJvcGVydHkoIHQsIGUgKVxuXHRcdFx0fSxcblx0XHRcdG92ZXJyaWRlUHJvcGVydHk6IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHR2YXIgbiA9IGkuYXVnKCB7IGNvbmZpZ3VyYWJsZTogITAgfSwgZSApO1xuXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIHRoaXMuQ29tcG9uZW50LnByb3RvdHlwZSwgdCwgbiApXG5cdFx0XHR9LFxuXHRcdFx0YmVmb3JlOiBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0dGhpcy5fYWR2aWNlQXJncy5wdXNoKCBbci5iZWZvcmUsIHQsIGVdIClcblx0XHRcdH0sXG5cdFx0XHRhZnRlcjogZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdHRoaXMuX2FkdmljZUFyZ3MucHVzaCggW3IuYWZ0ZXIsIHQsIGVdIClcblx0XHRcdH0sXG5cdFx0XHRhcm91bmQ6IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHR0aGlzLl9hZHZpY2VBcmdzLnB1c2goIFtyLmFyb3VuZCwgdCwgZV0gKVxuXHRcdFx0fSxcblx0XHRcdGxhc3Q6IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHR0aGlzLl9sYXN0QXJncy5wdXNoKCBbci5hZnRlciwgdCwgZV0gKVxuXHRcdFx0fVxuXHRcdH0gKSwgdC5leHBvcnRzID0gc1xuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDAgKTtcblxuXHRcdGZ1bmN0aW9uIGkoKSB7XG5cdFx0XHRyZXR1cm4gITBcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvKCB0ICkge1xuXHRcdFx0cmV0dXJuIHRcblx0XHR9XG5cblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblx0XHRcdGZ1bmN0aW9uIHQoIHQgKSB7XG5cdFx0XHRcdHZhciBlID0gdGhpcztcblx0XHRcdFx0dCA9IHQgfHwge30sIHRoaXMucGFyYW1zID0gT2JqZWN0LmtleXMoIHRoaXMucGFyYW1Db25maWdzICkucmVkdWNlKCBmdW5jdGlvbiggbiwgcyApIHtcblx0XHRcdFx0XHR2YXIgYSA9IFtdLCB1ID0gZS5ib3VuZFBhcmFtcywgYyA9IGUucGFyYW1Db25maWdzWyBzIF0sIGQgPSBjLnZhbGlkYXRlIHx8IGksIGYgPSBjLnRyYW5zZm9ybSB8fCBvO1xuXHRcdFx0XHRcdGlmICggcyBpbiB1ICYmIGEucHVzaCggdVsgcyBdICksIHMgaW4gdCAmJiBhLnB1c2goIHRbIHMgXSApLCBhID0gXCJmYWxsYmFja1wiIGluIGMgPyBhLmNvbmNhdCggYy5mYWxsYmFjayApIDogYSwgblsgcyBdID0gZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0XHRcdFx0XHR2YXIgaSA9IG51bGw7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdC5zb21lKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRcdFx0aWYgKCB0ID0gci5pc1R5cGUoIFwiZnVuY3Rpb25cIiwgdCApID8gdCgpIDogdCwgZSggdCApICkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBpID0gbiggdCApLCAhMFxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9ICksIGlcblx0XHRcdFx0XHR9KCBhLCBkLCBmICksIGMucmVxdWlyZWQgJiYgbnVsbCA9PSBuWyBzIF0gKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIHMgKyBcIiBpcyBhIHJlcXVpcmVkIHBhcmFtZXRlclwiICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBuXG5cdFx0XHRcdH0sIHt9ICksIHRoaXMuaW5pdGlhbGl6ZSgpXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiByLmF1ZyggdC5wcm90b3R5cGUsIHtcblx0XHRcdFx0cGFyYW1Db25maWdzOiB7fSxcblx0XHRcdFx0Ym91bmRQYXJhbXM6IHt9LFxuXHRcdFx0XHRpbml0aWFsaXplOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0fVxuXHRcdFx0fSApLCB0XG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDEgKS5IVE1MRWxlbWVudCxcblx0XHRcdGkgPSByLnByb3RvdHlwZS5tYXRjaGVzIHx8IHIucHJvdG90eXBlLm1hdGNoZXNTZWxlY3RvciB8fCByLnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHwgci5wcm90b3R5cGUubW96TWF0Y2hlc1NlbGVjdG9yIHx8IHIucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IHIucHJvdG90eXBlLm9NYXRjaGVzU2VsZWN0b3I7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRpZiAoIGkgKSB7XG5cdFx0XHRcdHJldHVybiBpLmNhbGwoIHQsIGUgKVxuXHRcdFx0fVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIsIGkgPSBuKCAxMCApLCBvID0gbiggNCApLCBzID0gbiggMSApLCBhID0gbiggMzUgKSwgdSA9IG4oIDUzICksIGMgPSBuKCA1ICksIGQgPSBuKCAyNCApLCBmID0gXCJjc3B0ZXN0XCI7XG5cdFx0dC5leHBvcnRzID0ge1xuXHRcdFx0aW5saW5lU3R5bGU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgdCA9IGYgKyBkLmdlbmVyYXRlKCksIGUgPSBvLmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKSwgbiA9IG8uY3JlYXRlRWxlbWVudCggXCJzdHlsZVwiICksXG5cdFx0XHRcdFx0bCA9IFwiLlwiICsgdCArIFwiIHsgdmlzaWJpbGl0eTogaGlkZGVuOyB9XCI7XG5cdFx0XHRcdHJldHVybiAhIW8uYm9keSAmJiAoYy5hc0Jvb2xlYW4oIGEudmFsKCBcIndpZGdldHM6Y3NwXCIgKSApICYmIChyID0gITEpLCB2b2lkIDAgIT09IHIgPyByIDogKGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiLCBpLmFkZCggZSwgdCApLCBuLnR5cGUgPSBcInRleHQvY3NzXCIsIG4uYXBwZW5kQ2hpbGQoIG8uY3JlYXRlVGV4dE5vZGUoIGwgKSApLCBvLmJvZHkuYXBwZW5kQ2hpbGQoIG4gKSwgby5ib2R5LmFwcGVuZENoaWxkKCBlICksIHIgPSBcImhpZGRlblwiID09PSBzLmdldENvbXB1dGVkU3R5bGUoIGUgKS52aXNpYmlsaXR5LCB1KCBlICksIHUoIG4gKSwgcikpXG5cdFx0XHR9XG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDEgKTtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHRcdHZhciBpLCBvID0gMDtcblx0XHRcdHJldHVybiBuID0gbiB8fCBudWxsLCBmdW5jdGlvbiBzKCkge1xuXHRcdFx0XHR2YXIgYSA9IG4gfHwgdGhpcywgdSA9IGFyZ3VtZW50cywgYyA9ICsgbmV3IERhdGU7XG5cdFx0XHRcdGlmICggci5jbGVhclRpbWVvdXQoIGkgKSwgYyAtIG8gPiBlICkge1xuXHRcdFx0XHRcdHJldHVybiBvID0gYywgdm9pZCB0LmFwcGx5KCBhLCB1ICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aSA9IHIuc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cy5hcHBseSggYSwgdSApXG5cdFx0XHRcdH0sIGUgKVxuXHRcdFx0fVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHR2YXIgZSA9IHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR3aWR0aDogZS53aWR0aCxcblx0XHRcdFx0aGVpZ2h0OiBlLmhlaWdodFxuXHRcdFx0fVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0dC5leHBvcnRzID0geyB2ZXJzaW9uOiBcIjVjMGU4ZDM6MTU4NDY0OTU0MTk4MlwiIH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0LyohXG4gKiBAb3ZlcnZpZXcgZXM2LXByb21pc2UgLSBhIHRpbnkgaW1wbGVtZW50YXRpb24gb2YgUHJvbWlzZXMvQSsuXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoYykgMjAxNCBZZWh1ZGEgS2F0eiwgVG9tIERhbGUsIFN0ZWZhbiBQZW5uZXIgYW5kIGNvbnRyaWJ1dG9ycyAoQ29udmVyc2lvbiB0byBFUzYgQVBJIGJ5IEpha2UgQXJjaGliYWxkKVxuICogQGxpY2Vuc2UgICBMaWNlbnNlZCB1bmRlciBNSVQgbGljZW5zZVxuICogICAgICAgICAgICBTZWUgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3N0ZWZhbnBlbm5lci9lczYtcHJvbWlzZS9tYXN0ZXIvTElDRU5TRVxuICogQHZlcnNpb24gICB2NC4yLjUrN2YyYjUyNmRcbiAqL1xuXHRcdHZhciByO1xuXHRcdHIgPSBmdW5jdGlvbigpIHtcblx0XHRcdFwidXNlIHN0cmljdFwiO1xuXG5cdFx0XHRmdW5jdGlvbiB0KCB0ICkge1xuXHRcdFx0XHRyZXR1cm4gXCJmdW5jdGlvblwiID09IHR5cGVvZiB0XG5cdFx0XHR9XG5cblx0XHRcdHZhciBlID0gQXJyYXkuaXNBcnJheSA/IEFycmF5LmlzQXJyYXkgOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRyZXR1cm4gXCJbb2JqZWN0IEFycmF5XVwiID09PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoIHQgKVxuXHRcdFx0XHR9LCBuID0gMCwgciA9IHZvaWQgMCwgaSA9IHZvaWQgMCwgbyA9IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHRcdGxbIG4gXSA9IHQsIGxbIG4gKyAxIF0gPSBlLCAyID09PSAobiArPSAyKSAmJiAoaSA/IGkoIGggKSA6IHcoKSlcblx0XHRcdFx0fSwgcyA9IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHdpbmRvdyA/IHdpbmRvdyA6IHZvaWQgMCwgYSA9IHMgfHwge30sXG5cdFx0XHRcdHUgPSBhLk11dGF0aW9uT2JzZXJ2ZXIgfHwgYS5XZWJLaXRNdXRhdGlvbk9ic2VydmVyLFxuXHRcdFx0XHRjID0gXCJ1bmRlZmluZWRcIiA9PSB0eXBlb2Ygc2VsZiAmJiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBwcm9jZXNzICYmIFwiW29iamVjdCBwcm9jZXNzXVwiID09PSB7fS50b1N0cmluZy5jYWxsKCBwcm9jZXNzICksXG5cdFx0XHRcdGQgPSBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBVaW50OENsYW1wZWRBcnJheSAmJiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBpbXBvcnRTY3JpcHRzICYmIFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIE1lc3NhZ2VDaGFubmVsO1xuXG5cdFx0XHRmdW5jdGlvbiBmKCkge1xuXHRcdFx0XHR2YXIgdCA9IHNldFRpbWVvdXQ7XG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZXR1cm4gdCggaCwgMSApXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dmFyIGwgPSBuZXcgQXJyYXkoIDFlMyApO1xuXG5cdFx0XHRmdW5jdGlvbiBoKCkge1xuXHRcdFx0XHRmb3IgKCB2YXIgdCA9IDA7IHQgPCBuOyB0ICs9IDIgKSB7XG5cdFx0XHRcdFx0KDAsIGxbIHQgXSkoIGxbIHQgKyAxIF0gKSwgbFsgdCBdID0gdm9pZCAwLCBsWyB0ICsgMSBdID0gdm9pZCAwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG4gPSAwXG5cdFx0XHR9XG5cblx0XHRcdHZhciBwLCBtLCB2LCBnLCB3ID0gdm9pZCAwO1xuXG5cdFx0XHRmdW5jdGlvbiB5KCB0LCBlICkge1xuXHRcdFx0XHR2YXIgbiA9IHRoaXMsIHIgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvciggRSApO1xuXHRcdFx0XHR2b2lkIDAgPT09IHJbIF8gXSAmJiBrKCByICk7XG5cdFx0XHRcdHZhciBpID0gbi5fc3RhdGU7XG5cdFx0XHRcdGlmICggaSApIHtcblx0XHRcdFx0XHR2YXIgcyA9IGFyZ3VtZW50c1sgaSAtIDEgXTtcblx0XHRcdFx0XHRvKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdHJldHVybiBEKCBpLCByLCBzLCBuLl9yZXN1bHQgKVxuXHRcdFx0XHRcdH0gKVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGooIG4sIHIsIHQsIGUgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gclxuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBiKCB0ICkge1xuXHRcdFx0XHRpZiAoIHQgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgdCAmJiB0LmNvbnN0cnVjdG9yID09PSB0aGlzICkge1xuXHRcdFx0XHRcdHJldHVybiB0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciBlID0gbmV3IHRoaXMoIEUgKTtcblx0XHRcdFx0cmV0dXJuIEMoIGUsIHQgKSwgZVxuXHRcdFx0fVxuXG5cdFx0XHRjID8gdyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gcHJvY2Vzcy5uZXh0VGljayggaCApXG5cdFx0XHR9IDogdSA/IChtID0gMCwgdiA9IG5ldyB1KCBoICksIGcgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSggXCJcIiApLCB2Lm9ic2VydmUoIGcsIHsgY2hhcmFjdGVyRGF0YTogITAgfSApLCB3ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGcuZGF0YSA9IG0gPSArKyBtICUgMlxuXHRcdFx0fSkgOiBkID8gKChwID0gbmV3IE1lc3NhZ2VDaGFubmVsKS5wb3J0MS5vbm1lc3NhZ2UgPSBoLCB3ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBwLnBvcnQyLnBvc3RNZXNzYWdlKCAwIClcblx0XHRcdH0pIDogdyA9IHZvaWQgMCA9PT0gcyA/IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHZhciB0ID0gRnVuY3Rpb24oIFwicmV0dXJuIHRoaXNcIiApKCkucmVxdWlyZSggXCJ2ZXJ0eFwiICk7XG5cdFx0XHRcdFx0cmV0dXJuIHZvaWQgMCAhPT0gKHIgPSB0LnJ1bk9uTG9vcCB8fCB0LnJ1bk9uQ29udGV4dCkgPyBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdHIoIGggKVxuXHRcdFx0XHRcdH0gOiBmKClcblx0XHRcdFx0fSBjYXRjaCAoIHQgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGYoKVxuXHRcdFx0XHR9XG5cdFx0XHR9KCkgOiBmKCk7XG5cdFx0XHR2YXIgXyA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoIDM2ICkuc3Vic3RyaW5nKCAyICk7XG5cblx0XHRcdGZ1bmN0aW9uIEUoKSB7XG5cdFx0XHR9XG5cblx0XHRcdHZhciB4ID0gdm9pZCAwLCBUID0gMSwgQSA9IDIsIFMgPSB7IGVycm9yOiBudWxsIH07XG5cblx0XHRcdGZ1bmN0aW9uIFIoIHQgKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0cmV0dXJuIHQudGhlblxuXHRcdFx0XHR9IGNhdGNoICggdCApIHtcblx0XHRcdFx0XHRyZXR1cm4gUy5lcnJvciA9IHQsIFNcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBOKCBlLCBuLCByICkge1xuXHRcdFx0XHRuLmNvbnN0cnVjdG9yID09PSBlLmNvbnN0cnVjdG9yICYmIHIgPT09IHkgJiYgbi5jb25zdHJ1Y3Rvci5yZXNvbHZlID09PSBiID8gZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdFx0ZS5fc3RhdGUgPT09IFQgPyBMKCB0LCBlLl9yZXN1bHQgKSA6IGUuX3N0YXRlID09PSBBID8gSSggdCwgZS5fcmVzdWx0ICkgOiBqKCBlLCB2b2lkIDAsIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIEMoIHQsIGUgKVxuXHRcdFx0XHRcdH0sIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIEkoIHQsIGUgKVxuXHRcdFx0XHRcdH0gKVxuXHRcdFx0XHR9KCBlLCBuICkgOiByID09PSBTID8gKEkoIGUsIFMuZXJyb3IgKSwgUy5lcnJvciA9IG51bGwpIDogdm9pZCAwID09PSByID8gTCggZSwgbiApIDogdCggciApID8gZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0XHRcdFx0byggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0XHR2YXIgciA9ICExLCBpID0gZnVuY3Rpb24oIHQsIGUsIG4sIHIgKSB7XG5cdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0dC5jYWxsKCBlLCBuLCByIClcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoIHQgKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSggbiwgZSwgZnVuY3Rpb24oIG4gKSB7XG5cdFx0XHRcdFx0XHRcdHIgfHwgKHIgPSAhMCwgZSAhPT0gbiA/IEMoIHQsIG4gKSA6IEwoIHQsIG4gKSlcblx0XHRcdFx0XHRcdH0sIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0XHRcdFx0XHRyIHx8IChyID0gITAsIEkoIHQsIGUgKSlcblx0XHRcdFx0XHRcdH0sIHQuX2xhYmVsICk7XG5cdFx0XHRcdFx0XHQhciAmJiBpICYmIChyID0gITAsIEkoIHQsIGkgKSlcblx0XHRcdFx0XHR9LCB0IClcblx0XHRcdFx0fSggZSwgbiwgciApIDogTCggZSwgbiApXG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIEMoIHQsIGUgKSB7XG5cdFx0XHRcdHZhciBuLCByO1xuXHRcdFx0XHR0ID09PSBlID8gSSggdCwgbmV3IFR5cGVFcnJvciggXCJZb3UgY2Fubm90IHJlc29sdmUgYSBwcm9taXNlIHdpdGggaXRzZWxmXCIgKSApIDogKHIgPSB0eXBlb2YgKG4gPSBlKSwgbnVsbCA9PT0gbiB8fCBcIm9iamVjdFwiICE9PSByICYmIFwiZnVuY3Rpb25cIiAhPT0gciA/IEwoIHQsIGUgKSA6IE4oIHQsIGUsIFIoIGUgKSApKVxuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBQKCB0ICkge1xuXHRcdFx0XHR0Ll9vbmVycm9yICYmIHQuX29uZXJyb3IoIHQuX3Jlc3VsdCApLCBPKCB0IClcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gTCggdCwgZSApIHtcblx0XHRcdFx0dC5fc3RhdGUgPT09IHggJiYgKHQuX3Jlc3VsdCA9IGUsIHQuX3N0YXRlID0gVCwgMCAhPT0gdC5fc3Vic2NyaWJlcnMubGVuZ3RoICYmIG8oIE8sIHQgKSlcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gSSggdCwgZSApIHtcblx0XHRcdFx0dC5fc3RhdGUgPT09IHggJiYgKHQuX3N0YXRlID0gQSwgdC5fcmVzdWx0ID0gZSwgbyggUCwgdCApKVxuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBqKCB0LCBlLCBuLCByICkge1xuXHRcdFx0XHR2YXIgaSA9IHQuX3N1YnNjcmliZXJzLCBzID0gaS5sZW5ndGg7XG5cdFx0XHRcdHQuX29uZXJyb3IgPSBudWxsLCBpWyBzIF0gPSBlLCBpWyBzICsgVCBdID0gbiwgaVsgcyArIEEgXSA9IHIsIDAgPT09IHMgJiYgdC5fc3RhdGUgJiYgbyggTywgdCApXG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIE8oIHQgKSB7XG5cdFx0XHRcdHZhciBlID0gdC5fc3Vic2NyaWJlcnMsIG4gPSB0Ll9zdGF0ZTtcblx0XHRcdFx0aWYgKCAwICE9PSBlLmxlbmd0aCApIHtcblx0XHRcdFx0XHRmb3IgKCB2YXIgciA9IHZvaWQgMCwgaSA9IHZvaWQgMCwgbyA9IHQuX3Jlc3VsdCwgcyA9IDA7IHMgPCBlLmxlbmd0aDsgcyArPSAzICkge1xuXHRcdFx0XHRcdFx0ciA9IGVbIHMgXSwgaSA9IGVbIHMgKyBuIF0sIHIgPyBEKCBuLCByLCBpLCBvICkgOiBpKCBvICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHQuX3N1YnNjcmliZXJzLmxlbmd0aCA9IDBcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBEKCBlLCBuLCByLCBpICkge1xuXHRcdFx0XHR2YXIgbyA9IHQoIHIgKSwgcyA9IHZvaWQgMCwgYSA9IHZvaWQgMCwgdSA9IHZvaWQgMCwgYyA9IHZvaWQgMDtcblx0XHRcdFx0aWYgKCBvICkge1xuXHRcdFx0XHRcdGlmICggKHMgPSBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0KCBlIClcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKCB0ICkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gUy5lcnJvciA9IHQsIFNcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KCByLCBpICkpID09PSBTID8gKGMgPSAhMCwgYSA9IHMuZXJyb3IsIHMuZXJyb3IgPSBudWxsKSA6IHUgPSAhMCwgbiA9PT0gcyApIHtcblx0XHRcdFx0XHRcdHJldHVybiB2b2lkIEkoIG4sIG5ldyBUeXBlRXJyb3IoIFwiQSBwcm9taXNlcyBjYWxsYmFjayBjYW5ub3QgcmV0dXJuIHRoYXQgc2FtZSBwcm9taXNlLlwiICkgKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzID0gaSwgdSA9ICEwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG4uX3N0YXRlICE9PSB4IHx8IChvICYmIHUgPyBDKCBuLCBzICkgOiBjID8gSSggbiwgYSApIDogZSA9PT0gVCA/IEwoIG4sIHMgKSA6IGUgPT09IEEgJiYgSSggbiwgcyApKVxuXHRcdFx0fVxuXG5cdFx0XHR2YXIgeiA9IDA7XG5cblx0XHRcdGZ1bmN0aW9uIGsoIHQgKSB7XG5cdFx0XHRcdHRbIF8gXSA9IHogKyssIHQuX3N0YXRlID0gdm9pZCAwLCB0Ll9yZXN1bHQgPSB2b2lkIDAsIHQuX3N1YnNjcmliZXJzID0gW11cblx0XHRcdH1cblxuXHRcdFx0dmFyIE0gPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0ZnVuY3Rpb24gdCggdCwgbiApIHtcblx0XHRcdFx0XHR0aGlzLl9pbnN0YW5jZUNvbnN0cnVjdG9yID0gdCwgdGhpcy5wcm9taXNlID0gbmV3IHQoIEUgKSwgdGhpcy5wcm9taXNlWyBfIF0gfHwgayggdGhpcy5wcm9taXNlICksIGUoIG4gKSA/ICh0aGlzLmxlbmd0aCA9IG4ubGVuZ3RoLCB0aGlzLl9yZW1haW5pbmcgPSBuLmxlbmd0aCwgdGhpcy5fcmVzdWx0ID0gbmV3IEFycmF5KCB0aGlzLmxlbmd0aCApLCAwID09PSB0aGlzLmxlbmd0aCA/IEwoIHRoaXMucHJvbWlzZSwgdGhpcy5fcmVzdWx0ICkgOiAodGhpcy5sZW5ndGggPSB0aGlzLmxlbmd0aCB8fCAwLCB0aGlzLl9lbnVtZXJhdGUoIG4gKSwgMCA9PT0gdGhpcy5fcmVtYWluaW5nICYmIEwoIHRoaXMucHJvbWlzZSwgdGhpcy5fcmVzdWx0ICkpKSA6IEkoIHRoaXMucHJvbWlzZSwgbmV3IEVycm9yKCBcIkFycmF5IE1ldGhvZHMgbXVzdCBiZSBwcm92aWRlZCBhbiBBcnJheVwiICkgKVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHQucHJvdG90eXBlLl9lbnVtZXJhdGUgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRmb3IgKCB2YXIgZSA9IDA7IHRoaXMuX3N0YXRlID09PSB4ICYmIGUgPCB0Lmxlbmd0aDsgZSArKyApIHtcblx0XHRcdFx0XHRcdHRoaXMuX2VhY2hFbnRyeSggdFsgZSBdLCBlIClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIHQucHJvdG90eXBlLl9lYWNoRW50cnkgPSBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0XHR2YXIgbiA9IHRoaXMuX2luc3RhbmNlQ29uc3RydWN0b3IsIHIgPSBuLnJlc29sdmU7XG5cdFx0XHRcdFx0aWYgKCByID09PSBiICkge1xuXHRcdFx0XHRcdFx0dmFyIGkgPSBSKCB0ICk7XG5cdFx0XHRcdFx0XHRpZiAoIGkgPT09IHkgJiYgdC5fc3RhdGUgIT09IHggKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX3NldHRsZWRBdCggdC5fc3RhdGUsIGUsIHQuX3Jlc3VsdCApO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICggXCJmdW5jdGlvblwiICE9IHR5cGVvZiBpICkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9yZW1haW5pbmcgLS0sIHRoaXMuX3Jlc3VsdFsgZSBdID0gdDtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIG4gPT09IFUgKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBvID0gbmV3IG4oIEUgKTtcblx0XHRcdFx0XHRcdFx0TiggbywgdCwgaSApLCB0aGlzLl93aWxsU2V0dGxlQXQoIG8sIGUgKVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5fd2lsbFNldHRsZUF0KCBuZXcgbiggZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGUoIHQgKVxuXHRcdFx0XHRcdFx0XHR9ICksIGUgKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLl93aWxsU2V0dGxlQXQoIHIoIHQgKSwgZSApXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCB0LnByb3RvdHlwZS5fc2V0dGxlZEF0ID0gZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0XHRcdFx0dmFyIHIgPSB0aGlzLnByb21pc2U7XG5cdFx0XHRcdFx0ci5fc3RhdGUgPT09IHggJiYgKHRoaXMuX3JlbWFpbmluZyAtLSwgdCA9PT0gQSA/IEkoIHIsIG4gKSA6IHRoaXMuX3Jlc3VsdFsgZSBdID0gbiksIDAgPT09IHRoaXMuX3JlbWFpbmluZyAmJiBMKCByLCB0aGlzLl9yZXN1bHQgKVxuXHRcdFx0XHR9LCB0LnByb3RvdHlwZS5fd2lsbFNldHRsZUF0ID0gZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdFx0dmFyIG4gPSB0aGlzO1xuXHRcdFx0XHRcdGooIHQsIHZvaWQgMCwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbi5fc2V0dGxlZEF0KCBULCBlLCB0IClcblx0XHRcdFx0XHR9LCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRcdHJldHVybiBuLl9zZXR0bGVkQXQoIEEsIGUsIHQgKVxuXHRcdFx0XHRcdH0gKVxuXHRcdFx0XHR9LCB0XG5cdFx0XHR9KCksIFUgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0ZnVuY3Rpb24gZSggdCApIHtcblx0XHRcdFx0XHR0aGlzWyBfIF0gPSB6ICsrLCB0aGlzLl9yZXN1bHQgPSB0aGlzLl9zdGF0ZSA9IHZvaWQgMCwgdGhpcy5fc3Vic2NyaWJlcnMgPSBbXSwgRSAhPT0gdCAmJiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiB0ICYmIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvciggXCJZb3UgbXVzdCBwYXNzIGEgcmVzb2x2ZXIgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBwcm9taXNlIGNvbnN0cnVjdG9yXCIgKVxuXHRcdFx0XHRcdH0oKSwgdGhpcyBpbnN0YW5jZW9mIGUgPyBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdGUoIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0XHRcdFx0XHRcdEMoIHQsIGUgKVxuXHRcdFx0XHRcdFx0XHR9LCBmdW5jdGlvbiggZSApIHtcblx0XHRcdFx0XHRcdFx0XHRJKCB0LCBlIClcblx0XHRcdFx0XHRcdFx0fSApXG5cdFx0XHRcdFx0XHR9IGNhdGNoICggZSApIHtcblx0XHRcdFx0XHRcdFx0SSggdCwgZSApXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSggdGhpcywgdCApIDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCBcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1Byb21pc2UnOiBQbGVhc2UgdXNlIHRoZSAnbmV3JyBvcGVyYXRvciwgdGhpcyBvYmplY3QgY29uc3RydWN0b3IgY2Fubm90IGJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLlwiIClcblx0XHRcdFx0XHR9KCkpXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gZS5wcm90b3R5cGUuY2F0Y2ggPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy50aGVuKCBudWxsLCB0IClcblx0XHRcdFx0fSwgZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0XHRcdHZhciBuID0gdGhpcy5jb25zdHJ1Y3Rvcjtcblx0XHRcdFx0XHRyZXR1cm4gdCggZSApID8gdGhpcy50aGVuKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRcdHJldHVybiBuLnJlc29sdmUoIGUoKSApLnRoZW4oIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdFxuXHRcdFx0XHRcdFx0fSApXG5cdFx0XHRcdFx0fSwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbi5yZXNvbHZlKCBlKCkgKS50aGVuKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0dGhyb3cgdFxuXHRcdFx0XHRcdFx0fSApXG5cdFx0XHRcdFx0fSApIDogdGhpcy50aGVuKCBlLCBlIClcblx0XHRcdFx0fSwgZVxuXHRcdFx0fSgpO1xuXHRcdFx0cmV0dXJuIFUucHJvdG90eXBlLnRoZW4gPSB5LCBVLmFsbCA9IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRyZXR1cm4gbmV3IE0oIHRoaXMsIHQgKS5wcm9taXNlXG5cdFx0XHR9LCBVLnJhY2UgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIG4gPSB0aGlzO1xuXHRcdFx0XHRyZXR1cm4gZSggdCApID8gbmV3IG4oIGZ1bmN0aW9uKCBlLCByICkge1xuXHRcdFx0XHRcdGZvciAoIHZhciBpID0gdC5sZW5ndGgsIG8gPSAwOyBvIDwgaTsgbyArKyApIHtcblx0XHRcdFx0XHRcdG4ucmVzb2x2ZSggdFsgbyBdICkudGhlbiggZSwgciApXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ICkgOiBuZXcgbiggZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGUoIG5ldyBUeXBlRXJyb3IoIFwiWW91IG11c3QgcGFzcyBhbiBhcnJheSB0byByYWNlLlwiICkgKVxuXHRcdFx0XHR9IClcblx0XHRcdH0sIFUucmVzb2x2ZSA9IGIsIFUucmVqZWN0ID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHZhciBlID0gbmV3IHRoaXMoIEUgKTtcblx0XHRcdFx0cmV0dXJuIEkoIGUsIHQgKSwgZVxuXHRcdFx0fSwgVS5fc2V0U2NoZWR1bGVyID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdGkgPSB0XG5cdFx0XHR9LCBVLl9zZXRBc2FwID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdG8gPSB0XG5cdFx0XHR9LCBVLl9hc2FwID0gbywgVS5wb2x5ZmlsbCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgdCA9IHZvaWQgMDtcblx0XHRcdFx0aWYgKCBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBnbG9iYWwgKSB7XG5cdFx0XHRcdFx0dCA9IGdsb2JhbDtcblx0XHRcdFx0fSBlbHNlIGlmICggXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2Ygc2VsZiApIHtcblx0XHRcdFx0XHR0ID0gc2VsZjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0dCA9IEZ1bmN0aW9uKCBcInJldHVybiB0aGlzXCIgKSgpXG5cdFx0XHRcdFx0fSBjYXRjaCAoIHQgKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwicG9seWZpbGwgZmFpbGVkIGJlY2F1c2UgZ2xvYmFsIG9iamVjdCBpcyB1bmF2YWlsYWJsZSBpbiB0aGlzIGVudmlyb25tZW50XCIgKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgZSA9IHQuUHJvbWlzZTtcblx0XHRcdFx0aWYgKCBlICkge1xuXHRcdFx0XHRcdHZhciBuID0gbnVsbDtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0biA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCggZS5yZXNvbHZlKCkgKVxuXHRcdFx0XHRcdH0gY2F0Y2ggKCB0ICkge1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIFwiW29iamVjdCBQcm9taXNlXVwiID09PSBuICYmICFlLmNhc3QgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dC5Qcm9taXNlID0gVVxuXHRcdFx0fSwgVS5Qcm9taXNlID0gVSwgVVxuXHRcdH0sIHQuZXhwb3J0cyA9IHIoKVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDUwICk7XG5cdFx0dC5leHBvcnRzID0gbmV3IHIoIFwidHd0dHJcIiApXG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMSApLCBpID0gbiggMCApO1xuXG5cdFx0ZnVuY3Rpb24gbyggdCApIHtcblx0XHRcdHJldHVybiBpLmlzVHlwZSggXCJzdHJpbmdcIiwgdCApID8gdC5zcGxpdCggXCIuXCIgKSA6IGkuaXNUeXBlKCBcImFycmF5XCIsIHQgKSA/IHQgOiBbXVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHMoIHQsIGUgKSB7XG5cdFx0XHQoZSA9IGUgfHwgcilbIHQgXSA9IGVbIHQgXSB8fCB7fSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KCB0aGlzLCBcImJhc2VcIiwgeyB2YWx1ZTogZVsgdCBdIH0gKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KCB0aGlzLCBcIm5hbWVcIiwgeyB2YWx1ZTogdCB9IClcblx0XHR9XG5cblx0XHRpLmF1Zyggcy5wcm90b3R5cGUsIHtcblx0XHRcdGdldDogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiBvKCB0ICkucmVkdWNlKCBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0XHRpZiAoIGkuaXNPYmplY3QoIHQgKSApIHtcblx0XHRcdFx0XHRcdHJldHVybiB0WyBlIF1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIHRoaXMuYmFzZSApXG5cdFx0XHR9LFxuXHRcdFx0c2V0OiBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHRcdFx0dmFyIHIgPSBvKCB0ICksIHMgPSBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0XHR2YXIgbiA9IG8oIGUgKS5zbGljZSggMCwgLSAxICk7XG5cdFx0XHRcdFx0cmV0dXJuIG4ucmVkdWNlKCBmdW5jdGlvbiggdCwgZSwgciApIHtcblx0XHRcdFx0XHRcdGlmICggdFsgZSBdID0gdFsgZSBdIHx8IHt9LCAhaS5pc09iamVjdCggdFsgZSBdICkgKSB7XG5cdFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggbi5zbGljZSggMCwgciArIDEgKS5qb2luKCBcIi5cIiApICsgXCIgaXMgYWxyZWFkeSBkZWZpbmVkIHdpdGggYSB2YWx1ZS5cIiApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmV0dXJuIHRbIGUgXVxuXHRcdFx0XHRcdH0sIHQgKVxuXHRcdFx0XHR9KCB0aGlzLmJhc2UsIHQgKSwgYSA9IHIuc2xpY2UoIC0gMSApO1xuXHRcdFx0XHRyZXR1cm4gbiAmJiBhIGluIHMgPyBzWyBhIF0gOiBzWyBhIF0gPSBlXG5cdFx0XHR9LFxuXHRcdFx0aW5pdDogZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnNldCggdCwgZSwgITAgKVxuXHRcdFx0fSxcblx0XHRcdHVuc2V0OiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUgPSBvKCB0ICksIG4gPSB0aGlzLmdldCggZS5zbGljZSggMCwgLSAxICkgKTtcblx0XHRcdFx0biAmJiBkZWxldGUgblsgZS5zbGljZSggLSAxICkgXVxuXHRcdFx0fSxcblx0XHRcdGF1ZzogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHZhciBlID0gdGhpcy5nZXQoIHQgKSwgbiA9IGkudG9SZWFsQXJyYXkoIGFyZ3VtZW50cyApLnNsaWNlKCAxICk7XG5cdFx0XHRcdGlmICggZSA9IHZvaWQgMCAhPT0gZSA/IGUgOiB7fSwgbi51bnNoaWZ0KCBlICksICFuLmV2ZXJ5KCBpLmlzT2JqZWN0ICkgKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcIkNhbm5vdCBhdWdtZW50IG5vbi1vYmplY3QuXCIgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zZXQoIHQsIGkuYXVnLmFwcGx5KCBudWxsLCBuICkgKVxuXHRcdFx0fSxcblx0XHRcdGNhbGw6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSA9IHRoaXMuZ2V0KCB0ICksIG4gPSBpLnRvUmVhbEFycmF5KCBhcmd1bWVudHMgKS5zbGljZSggMSApO1xuXHRcdFx0XHRpZiAoICFpLmlzVHlwZSggXCJmdW5jdGlvblwiLCBlICkgKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcIkZ1bmN0aW9uIFwiICsgdCArIFwiZG9lcyBub3QgZXhpc3QuXCIgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gZS5hcHBseSggbnVsbCwgbiApXG5cdFx0XHR9LFxuXHRcdFx0ZnVsbFBhdGg6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSA9IG8oIHQgKTtcblx0XHRcdFx0cmV0dXJuIGUudW5zaGlmdCggdGhpcy5uYW1lICksIGUuam9pbiggXCIuXCIgKVxuXHRcdFx0fVxuXHRcdH0gKSwgdC5leHBvcnRzID0gc1xuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDAgKSwgaSA9IG4oIDcgKSwgbyA9IHtcblx0XHRcdGJpbmQ6IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5faGFuZGxlcnMgPSB0aGlzLl9oYW5kbGVycyB8fCB7fSwgdGhpcy5faGFuZGxlcnNbIHQgXSA9IHRoaXMuX2hhbmRsZXJzWyB0IF0gfHwgW10sIHRoaXMuX2hhbmRsZXJzWyB0IF0ucHVzaCggZSApXG5cdFx0XHR9LFxuXHRcdFx0dW5iaW5kOiBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0dmFyIG47XG5cdFx0XHRcdHRoaXMuX2hhbmRsZXJzICYmIHRoaXMuX2hhbmRsZXJzWyB0IF0gJiYgKGUgPyAobiA9IHRoaXMuX2hhbmRsZXJzWyB0IF0uaW5kZXhPZiggZSApKSA+PSAwICYmIHRoaXMuX2hhbmRsZXJzWyB0IF0uc3BsaWNlKCBuLCAxICkgOiB0aGlzLl9oYW5kbGVyc1sgdCBdID0gW10pXG5cdFx0XHR9LFxuXHRcdFx0dHJpZ2dlcjogZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdHZhciBuID0gdGhpcy5faGFuZGxlcnMgJiYgdGhpcy5faGFuZGxlcnNbIHQgXTtcblx0XHRcdFx0KGUgPSBlIHx8IHt9KS50eXBlID0gdCwgbiAmJiBuLmZvckVhY2goIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdHIuYXN5bmMoIGkoIHQsIHRoaXMsIGUgKSApXG5cdFx0XHRcdH0gKVxuXHRcdFx0fVxuXHRcdH07XG5cdFx0dC5leHBvcnRzID0ge1xuXHRcdFx0RW1pdHRlcjogbyxcblx0XHRcdG1ha2VFbWl0dGVyOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHIuYXVnKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0fSwgbyApXG5cdFx0XHR9XG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDEwMyApLCBpID0gbiggNzcgKSwgbyA9IG4oIDYgKSwgcyA9IG4oIDIzICksIGEgPSBuKCA3ICksIHUgPSBuKCAwICksIGMgPSBuZXcgaSggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHR2YXIgZSA9IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRyZXR1cm4gdC5yZWR1Y2UoIGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHRcdHJldHVybiB0WyBlLl9jbGFzc05hbWUgXSA9IHRbIGUuX2NsYXNzTmFtZSBdIHx8IFtdLCB0WyBlLl9jbGFzc05hbWUgXS5wdXNoKCBlICksIHRcblx0XHRcdFx0fSwge30gKVxuXHRcdFx0fSggdC5tYXAoIHIuZnJvbVJhd1Rhc2sgKSApO1xuXHRcdFx0dS5mb3JJbiggZSwgZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdHMuYWxsU2V0dGxlZCggZS5tYXAoIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdHJldHVybiB0LmluaXRpYWxpemUoKVxuXHRcdFx0XHR9ICkgKS50aGVuKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRlLmZvckVhY2goIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdFx0by5hbGwoIFtcblx0XHRcdFx0XHRcdFx0dC5oeWRyYXRlKCksXG5cdFx0XHRcdFx0XHRcdHQuaW5zZXJ0SW50b0RvbSgpXG5cdFx0XHRcdFx0XHRdICkudGhlbiggYSggdC5yZW5kZXIsIHQgKSApLnRoZW4oIGEoIHQuc3VjY2VzcywgdCApLCBhKCB0LmZhaWwsIHQgKSApXG5cdFx0XHRcdFx0fSApXG5cdFx0XHRcdH0gKVxuXHRcdFx0fSApXG5cdFx0fSApO1xuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdGFkZFdpZGdldDogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiBjLmFkZCggdCApXG5cdFx0XHR9XG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDE4ICk7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRyZXR1cm4gci53cml0ZSggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHQgJiYgdC5wYXJlbnROb2RlICYmIHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggdCApXG5cdFx0XHR9IClcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdG4oIDEyICksIHQuZXhwb3J0cyA9IHtcblx0XHRcdGxvZzogZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDEgKTtcblxuXHRcdGZ1bmN0aW9uIGkoIHQgKSB7XG5cdFx0XHRyZXR1cm4gKHQgPSB0IHx8IHIpLmdldFNlbGVjdGlvbiAmJiB0LmdldFNlbGVjdGlvbigpXG5cdFx0fVxuXG5cdFx0dC5leHBvcnRzID0ge1xuXHRcdFx0Z2V0U2VsZWN0aW9uOiBpLFxuXHRcdFx0Z2V0U2VsZWN0ZWRUZXh0OiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUgPSBpKCB0ICk7XG5cdFx0XHRcdHJldHVybiBlID8gZS50b1N0cmluZygpIDogXCJcIlxuXHRcdFx0fVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCA0ICksIGkgPSBuKCAxICksIG8gPSBuKCAyICksIHMgPSAyZTQ7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHR2YXIgZSA9IG5ldyBvLCBuID0gci5jcmVhdGVFbGVtZW50KCBcImltZ1wiICk7XG5cdFx0XHRyZXR1cm4gbi5vbmxvYWQgPSBuLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0aS5zZXRUaW1lb3V0KCBlLnJlc29sdmUsIDUwIClcblx0XHRcdH0sIG4uc3JjID0gdCwgaS5zZXRUaW1lb3V0KCBlLnJlamVjdCwgcyApLCBlLnByb21pc2Vcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMTEzICk7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHR0LmRlZmluZSggXCJjcmVhdGVFbGVtZW50XCIsIHIgKSwgdC5kZWZpbmUoIFwiY3JlYXRlRnJhZ21lbnRcIiwgciApLCB0LmRlZmluZSggXCJodG1sVG9FbGVtZW50XCIsIHIgKSwgdC5kZWZpbmUoIFwiaGFzU2VsZWN0ZWRUZXh0XCIsIHIgKSwgdC5kZWZpbmUoIFwiYWRkUm9vdENsYXNzXCIsIHIgKSwgdC5kZWZpbmUoIFwicmVtb3ZlUm9vdENsYXNzXCIsIHIgKSwgdC5kZWZpbmUoIFwiaGFzUm9vdENsYXNzXCIsIHIgKSwgdC5kZWZpbmUoIFwicHJlcGVuZFN0eWxlU2hlZXRcIiwgciApLCB0LmRlZmluZSggXCJhcHBlbmRTdHlsZVNoZWV0XCIsIHIgKSwgdC5kZWZpbmUoIFwicHJlcGVuZENzc1wiLCByICksIHQuZGVmaW5lKCBcImFwcGVuZENzc1wiLCByICksIHQuZGVmaW5lKCBcIm1ha2VWaXNpYmxlXCIsIHIgKSwgdC5kZWZpbmUoIFwiaW5qZWN0V2lkZ2V0RWxcIiwgciApLCB0LmRlZmluZSggXCJtYXRjaEhlaWdodFRvQ29udGVudFwiLCByICksIHQuZGVmaW5lKCBcIm1hdGNoV2lkdGhUb0NvbnRlbnRcIiwgciApXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSApIHtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdHZhciBlLCBuID0gITE7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBuID8gZSA6IChuID0gITAsIGUgPSB0LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKSlcblx0XHRcdH1cblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMTUgKSwgaSA9IG4oIDEyMiApLCBvID0gbiggNjAgKSwgcyA9IG4oIDE2ICk7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0XHRyZXR1cm4gbmV3IHIoIGksIG8sIHMuRE1fQlVUVE9OLCB0LCBlLCBuIClcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggNjEgKSwgaSA9IG4oIDI2ICk7XG5cdFx0dC5leHBvcnRzID0gci5pc1N1cHBvcnRlZCgpID8gciA6IGlcblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAyNyApLCBpID0gbiggMTIzICk7XG5cdFx0dC5leHBvcnRzID0gci5idWlsZCggW2ldIClcblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAxNSApLCBpID0gbiggMTI2ICksIG8gPSBuKCAzOCApLCBzID0gbiggMTYgKTtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHRcdHJldHVybiBuZXcgciggaSwgbywgcy5GT0xMT1dfQlVUVE9OLCB0LCBlLCBuIClcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMTUgKSwgaSA9IG4oIDEzNCApLCBvID0gbiggMjYgKSwgcyA9IG4oIDE2ICk7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0XHRyZXR1cm4gbmV3IHIoIGksIG8sIHMuTU9NRU5ULCB0LCBlLCBuIClcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMTUgKSwgaSA9IG4oIDEzNiApLCBvID0gbiggMjYgKSwgcyA9IG4oIDE2ICk7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0XHRyZXR1cm4gbmV3IHIoIGksIG8sIHMuUEVSSVNDT1BFLCB0LCBlLCBuIClcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggODMgKSwgaSA9IG4oIDEzOCApLCBvID0gbiggMTQyICksIHMgPSBuKCAxNDQgKSwgYSA9IG4oIDE0NiApLCB1ID0gbiggMTQ4ICksIGMgPSB7XG5cdFx0XHRjb2xsZWN0aW9uOiBpLFxuXHRcdFx0ZXZlbnQ6IG8sXG5cdFx0XHRsaWtlczogcyxcblx0XHRcdGxpc3Q6IGEsXG5cdFx0XHRwcm9maWxlOiB1LFxuXHRcdFx0dXJsOiBmXG5cdFx0fSwgZCA9IFt1LCBzLCBpLCBhLCBvXTtcblxuXHRcdGZ1bmN0aW9uIGYoIHQgKSB7XG5cdFx0XHRyZXR1cm4gciggZCwgZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBlKCB0IClcblx0XHRcdFx0fSBjYXRjaCAoIHQgKSB7XG5cdFx0XHRcdH1cblx0XHRcdH0gKVxuXHRcdH1cblxuXHRcdHQuZXhwb3J0cyA9IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0cmV0dXJuIHQgPyBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUsIG47XG5cdFx0XHRcdHJldHVybiBlID0gKHQuc291cmNlVHlwZSArIFwiXCIpLnRvTG93ZXJDYXNlKCksIChuID0gY1sgZSBdKSA/IG5ldyBuKCB0ICkgOiBudWxsXG5cdFx0XHR9KCB0ICkgfHwgZiggdCApIDogbnVsbFxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAxNSApLCBpID0gbiggMTUwICksIG8gPSBuKCAyNiApLCBzID0gbiggMTYgKTtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHRcdHJldHVybiBuZXcgciggaSwgbywgcy5USU1FTElORSwgdCwgZSwgbiApXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDQgKSwgaSA9IG4oIDY4ICksIG8gPSBuKCAxNTIgKSwgcyA9IG4oIDE1ICksIGEgPSBuKCAzOCApLCB1ID0gbiggMTUzICksIGMgPSBuKCA2MCApLCBkID0gbiggMTU0ICksXG5cdFx0XHRmID0gbiggMTYgKTtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCwgZSwgbiwgbCApIHtcblx0XHRcdHZhciBoLCBwID0gaS5pc0hvcml6b25Ud2VldEVuYWJsZWQoIGwgKTtcblx0XHRcdHJldHVybiBvKCBsLCB0LnR3ZWV0SWQgKSwgcCA/IChoID0gci5jcmVhdGVFbGVtZW50KCBcImRpdlwiICksIG5ldyBzKCB1LCBhLCBmLlRXRUVULCB0LCBlLCBuLCB7IHNhbmRib3hXcmFwcGVyRWw6IGggfSApKSA6IG5ldyBzKCBkLCBjLCBmLlRXRUVULCB0LCBlLCBuIClcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdHZhciBuID0gXCJ0ZndfaG9yaXpvbl90d2VldF9lbWJlZF85NTU1XCI7XG5cdFx0dC5leHBvcnRzID0ge1xuXHRcdFx0aXNIb3Jpem9uVHdlZXRFbmFibGVkOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuICEoIXQgfHwgIXRbIG4gXSB8fCBcImh0ZVwiICE9PSB0WyBuIF0uYnVja2V0KVxuXHRcdFx0fVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAxNSApLCBpID0gbiggMTU2ICksIG8gPSBuKCAzOCApLCBzID0gbiggMTYgKTtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHRcdHZhciBhID0gdCAmJiB0LnR5cGUgfHwgXCJzaGFyZVwiLFxuXHRcdFx0XHR1ID0gXCJoYXNodGFnXCIgPT0gYSA/IHMuSEFTSFRBR19CVVRUT04gOiBcIm1lbnRpb25cIiA9PSBhID8gcy5NRU5USU9OX0JVVFRPTiA6IHMuU0hBUkVfQlVUVE9OO1xuXHRcdFx0cmV0dXJuIG5ldyByKCBpLCBvLCB1LCB0LCBlLCBuIClcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMzcgKSwgaSA9IG4oIDM5ICksIG8gPSBuKCAwICksIHMgPSBuKCA2OCApLCBhID0gbiggMzEgKTtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdHZhciBlID0ge1xuXHRcdFx0XHR3aWRnZXRfb3JpZ2luOiBpLnJvb3REb2N1bWVudExvY2F0aW9uKCksXG5cdFx0XHRcdHdpZGdldF9mcmFtZTogaS5pc0ZyYW1lZCgpID8gaS5jdXJyZW50RG9jdW1lbnRMb2NhdGlvbigpIDogbnVsbCxcblx0XHRcdFx0ZHVyYXRpb25fbXM6IHQuZHVyYXRpb24sXG5cdFx0XHRcdGl0ZW1faWRzOiB0LndpZGdldElkcyB8fCBbXVxuXHRcdFx0fSwgbiA9IG8uYXVnKCB0Lm5hbWVzcGFjZSwge1xuXHRcdFx0XHRwYWdlOiBcInBhZ2VcIixcblx0XHRcdFx0Y29tcG9uZW50OiBcInBlcmZvcm1hbmNlXCJcblx0XHRcdH0gKTtcblx0XHRcdHJldHVybiBhLmdldEV4cGVyaW1lbnRzKCkudGhlbiggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHZhciBpID0gcy5pc0hvcml6b25Ud2VldEVuYWJsZWQoIHQgKSA/IG8uYXVnKCBlLCB7IGNvbnRleHQ6IFwiaG9yaXpvblwiIH0gKSA6IGU7XG5cdFx0XHRcdHIuc2NyaWJlKCBuLCBpIClcblx0XHRcdH0gKVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAwICksIGkgPSBuKCAxMzkgKSwgbyA9IFtcImFyXCIsIFwiZmFcIiwgXCJoZVwiLCBcInVyXCJdO1xuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdGlzUnRsTGFuZzogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiB0ID0gU3RyaW5nKCB0ICkudG9Mb3dlckNhc2UoKSwgci5jb250YWlucyggbywgdCApXG5cdFx0XHR9LFxuXHRcdFx0bWF0Y2hMYW5ndWFnZTogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiB0ID0gKHQgPSAodCB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpKS5yZXBsYWNlKCBcIl9cIiwgXCItXCIgKSwgaSggdCApID8gdCA6ICh0ID0gdC5yZXBsYWNlKCAvLS4qLywgXCJcIiApLCBpKCB0ICkgPyB0IDogXCJlblwiKVxuXHRcdFx0fVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0dC5leHBvcnRzID0ge1xuXHRcdFx0VFdFRVQ6IDAsXG5cdFx0XHRSRVRXRUVUOiAxMCxcblx0XHRcdENVU1RPTV9USU1FTElORTogMTcsXG5cdFx0XHRMSVZFX1ZJREVPX0VWRU5UOiAyOCxcblx0XHRcdFFVT1RFX1RXRUVUOiAyM1xuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0dC5leHBvcnRzID0ge1xuXHRcdFx0dHdlZXRCdXR0b25IdG1sUGF0aDogXCIvd2lkZ2V0cy90d2VldF9idXR0b24uZDBmMTNiZTgzMjFlYjQzMmZiYTI4Y2ZjMWMzMzUxYjEue3tsYW5nfX0uaHRtbFwiLFxuXHRcdFx0Zm9sbG93QnV0dG9uSHRtbFBhdGg6IFwiL3dpZGdldHMvZm9sbG93X2J1dHRvbi5kMGYxM2JlODMyMWViNDMyZmJhMjhjZmMxYzMzNTFiMS57e2xhbmd9fS5odG1sXCIsXG5cdFx0XHRodWJIdG1sUGF0aDogXCIvd2lkZ2V0cy9odWIuaHRtbFwiLFxuXHRcdFx0d2lkZ2V0SWZyYW1lSHRtbFBhdGg6IFwiL3dpZGdldHMvd2lkZ2V0X2lmcmFtZS5kMGYxM2JlODMyMWViNDMyZmJhMjhjZmMxYzMzNTFiMS5odG1sXCIsXG5cdFx0XHRyZXNvdXJjZUJhc2VVcmw6IFwiaHR0cHM6Ly9wbGF0Zm9ybS50d2l0dGVyLmNvbVwiXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDMgKSwgaSA9IG4oIDEwMCApLCBvID0gbiggMjUgKSwgcyA9IG4oIDExICksIGEgPSB7XG5cdFx0XHRmYXZvcml0ZTogW1wiZmF2b3JpdGVcIiwgXCJsaWtlXCJdLFxuXHRcdFx0Zm9sbG93OiBbXCJmb2xsb3dcIl0sXG5cdFx0XHRsaWtlOiBbXCJmYXZvcml0ZVwiLCBcImxpa2VcIl0sXG5cdFx0XHRyZXR3ZWV0OiBbXCJyZXR3ZWV0XCJdLFxuXHRcdFx0dHdlZXQ6IFtcInR3ZWV0XCJdXG5cdFx0fTtcblxuXHRcdGZ1bmN0aW9uIHUoIHQgKSB7XG5cdFx0XHR0aGlzLnNyY0VsID0gW10sIHRoaXMuZWxlbWVudCA9IHRcblx0XHR9XG5cblx0XHR1Lm9wZW4gPSBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHRcdHZhciB1ID0gKHIuaW50ZW50VHlwZSggdCApIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRyLmlzVHdpdHRlclVSTCggdCApICYmIChmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0aS5vcGVuKCB0LCB7fSwgZSApXG5cdFx0XHR9KCB0LCBuICksIGUgJiYgby50cmlnZ2VyKCBcImNsaWNrXCIsIHtcblx0XHRcdFx0dGFyZ2V0OiBlLFxuXHRcdFx0XHRyZWdpb246IFwiaW50ZW50XCIsXG5cdFx0XHRcdHR5cGU6IFwiY2xpY2tcIixcblx0XHRcdFx0ZGF0YToge31cblx0XHRcdH0gKSwgZSAmJiBhWyB1IF0gJiYgYVsgdSBdLmZvckVhY2goIGZ1bmN0aW9uKCBuICkge1xuXHRcdFx0XHRvLnRyaWdnZXIoIG4sIHtcblx0XHRcdFx0XHR0YXJnZXQ6IGUsXG5cdFx0XHRcdFx0cmVnaW9uOiBcImludGVudFwiLFxuXHRcdFx0XHRcdHR5cGU6IG4sXG5cdFx0XHRcdFx0ZGF0YTogZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdFx0XHR2YXIgbiA9IHMuZGVjb2RlVVJMKCBlICk7XG5cdFx0XHRcdFx0XHRzd2l0Y2ggKCB0ICkge1xuXHRcdFx0XHRcdFx0XHRjYXNlXCJmYXZvcml0ZVwiOlxuXHRcdFx0XHRcdFx0XHRjYXNlXCJsaWtlXCI6XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHsgdHdlZXRfaWQ6IG4udHdlZXRfaWQgfTtcblx0XHRcdFx0XHRcdFx0Y2FzZVwiZm9sbG93XCI6XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0XHRcdHNjcmVlbl9uYW1lOiBuLnNjcmVlbl9uYW1lLFxuXHRcdFx0XHRcdFx0XHRcdFx0dXNlcl9pZDogbi51c2VyX2lkXG5cdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0Y2FzZVwicmV0d2VldFwiOlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB7IHNvdXJjZV90d2VldF9pZDogbi50d2VldF9pZCB9O1xuXHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB7fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0oIHUsIHQgKVxuXHRcdFx0XHR9IClcblx0XHRcdH0gKSlcblx0XHR9LCB0LmV4cG9ydHMgPSB1XG5cdH0sIGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdGdldFRpbWV6b25lT2Zmc2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHQgPSAobmV3IERhdGUpLnRvU3RyaW5nKCkubWF0Y2goIC8oR01UWystXT9cXGQrKS8gKTtcblx0XHRcdFx0cmV0dXJuIHQgJiYgdFsgMCBdIHx8IFwiR01UXCJcblx0XHRcdH1cblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggNCApLCBpID0gbiggOSApLCBvID0gbiggMiApLCBzID0gbiggMCApLCBhID0gbiggMTEgKSwgdSA9IFwiY2JcIiwgYyA9IDA7XG5cdFx0dC5leHBvcnRzID0ge1xuXHRcdFx0ZmV0Y2g6IGZ1bmN0aW9uKCB0LCBlLCBuLCBkICkge1xuXHRcdFx0XHR2YXIgZiwgbCwgaDtcblx0XHRcdFx0cmV0dXJuIGQgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRpZiAoIHQgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdC5yZXBsYWNlKCAvW15cXHckXS9nLCBcIl9cIiApXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KCBkIHx8IHUgKyBjICsrICksIGYgPSBpLmZ1bGxQYXRoKCBbXG5cdFx0XHRcdFx0XCJjYWxsYmFja3NcIixcblx0XHRcdFx0XHRkXG5cdFx0XHRcdF0gKSwgbCA9IHIuY3JlYXRlRWxlbWVudCggXCJzY3JpcHRcIiApLCBoID0gbmV3IG8sIGUgPSBzLmF1Zygge30sIGUsIHtcblx0XHRcdFx0XHRjYWxsYmFjazogZixcblx0XHRcdFx0XHRzdXBwcmVzc19yZXNwb25zZV9jb2RlczogITBcblx0XHRcdFx0fSApLCBpLnNldCggW1wiY2FsbGJhY2tzXCIsIGRdLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHR2YXIgZTtcblx0XHRcdFx0XHR0ID0gKGUgPSBuKCB0IHx8ICExICkpLnJlc3AsIGUuc3VjY2VzcyA/IGgucmVzb2x2ZSggdCApIDogaC5yZWplY3QoIHQgKSwgbC5vbmxvYWQgPSBsLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGwsIGwucGFyZW50Tm9kZSAmJiBsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIGwgKSwgaS51bnNldCggW1xuXHRcdFx0XHRcdFx0XCJjYWxsYmFja3NcIixcblx0XHRcdFx0XHRcdGRcblx0XHRcdFx0XHRdIClcblx0XHRcdFx0fSApLCBsLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRoLnJlamVjdCggbmV3IEVycm9yKCBcImZhaWxlZCB0byBmZXRjaCBcIiArIGwuc3JjICkgKVxuXHRcdFx0XHR9LCBsLnNyYyA9IGEudXJsKCB0LCBlICksIGwuYXN5bmMgPSBcImFzeW5jXCIsIHIuYm9keS5hcHBlbmRDaGlsZCggbCApLCBoLnByb21pc2Vcblx0XHRcdH1cblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMiApLCBpID0gbiggMTA1ICksIG8gPSBuKCA3ICk7XG5cblx0XHRmdW5jdGlvbiBzKCB0ICkge1xuXHRcdFx0dGhpcy5faW5wdXRzUXVldWUgPSBbXSwgdGhpcy5fdGFzayA9IHQsIHRoaXMuX2hhc0ZsdXNoQmVlblNjaGVkdWxlZCA9ICExXG5cdFx0fVxuXG5cdFx0cy5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHR2YXIgZSA9IG5ldyByO1xuXHRcdFx0cmV0dXJuIHRoaXMuX2lucHV0c1F1ZXVlLnB1c2goIHtcblx0XHRcdFx0aW5wdXQ6IHQsXG5cdFx0XHRcdHRhc2tEb25lRGVmZXJyZWQ6IGVcblx0XHRcdH0gKSwgdGhpcy5faGFzRmx1c2hCZWVuU2NoZWR1bGVkIHx8ICh0aGlzLl9oYXNGbHVzaEJlZW5TY2hlZHVsZWQgPSAhMCwgaSggbyggdGhpcy5fZmx1c2gsIHRoaXMgKSApKSwgZS5wcm9taXNlXG5cdFx0fSwgcy5wcm90b3R5cGUuX2ZsdXNoID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR0aGlzLl90YXNrLmNhbGwoIG51bGwsIHRoaXMuX2lucHV0c1F1ZXVlIClcblx0XHRcdH0gY2F0Y2ggKCB0ICkge1xuXHRcdFx0XHR0aGlzLl9pbnB1dHNRdWV1ZS5mb3JFYWNoKCBmdW5jdGlvbiggZSApIHtcblx0XHRcdFx0XHRlLnRhc2tEb25lRGVmZXJyZWQucmVqZWN0KCB0IClcblx0XHRcdFx0fSApXG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9pbnB1dHNRdWV1ZSA9IFtdLCB0aGlzLl9oYXNGbHVzaEJlZW5TY2hlZHVsZWQgPSAhMVxuXHRcdH0sIHQuZXhwb3J0cyA9IHNcblx0fSwgZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRyZXR1cm4gdC5yZWR1Y2UoIGZ1bmN0aW9uKCB0LCBuICkge1xuXHRcdFx0XHR2YXIgciA9IGUoIG4gKTtcblx0XHRcdFx0cmV0dXJuIHRbIHIgXSA9IHRbIHIgXSB8fCBbXSwgdFsgciBdLnB1c2goIG4gKSwgdFxuXHRcdFx0fSwge30gKVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCA0ICksIGkgPSBuKCA4ICksIG8gPSBuKCAzICk7XG5cblx0XHRmdW5jdGlvbiBzKCB0LCBlICkge1xuXHRcdFx0dmFyIG4sIHI7XG5cdFx0XHRyZXR1cm4gZSA9IGUgfHwgaSwgL15odHRwcz86XFwvXFwvLy50ZXN0KCB0ICkgPyB0IDogL15cXC9cXC8vLnRlc3QoIHQgKSA/IGUucHJvdG9jb2wgKyB0IDogKG4gPSBlLmhvc3QgKyAoZS5wb3J0Lmxlbmd0aCA/IFwiOlwiICsgZS5wb3J0IDogXCJcIiksIDAgIT09IHQuaW5kZXhPZiggXCIvXCIgKSAmJiAoKHIgPSBlLnBhdGhuYW1lLnNwbGl0KCBcIi9cIiApKS5wb3AoKSwgci5wdXNoKCB0ICksIHQgPSBcIi9cIiArIHIuam9pbiggXCIvXCIgKSksIFtcblx0XHRcdFx0ZS5wcm90b2NvbCxcblx0XHRcdFx0XCIvL1wiLFxuXHRcdFx0XHRuLFxuXHRcdFx0XHR0XG5cdFx0XHRdLmpvaW4oIFwiXCIgKSlcblx0XHR9XG5cblx0XHR0LmV4cG9ydHMgPSB7XG5cdFx0XHRhYnNvbHV0aXplOiBzLFxuXHRcdFx0Z2V0Q2Fub25pY2FsVVJMOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0Zm9yICggdmFyIHQsIGUgPSByLmdldEVsZW1lbnRzQnlUYWdOYW1lKCBcImxpbmtcIiApLCBuID0gMDsgZVsgbiBdOyBuICsrICkge1xuXHRcdFx0XHRcdGlmICggXCJjYW5vbmljYWxcIiA9PSAodCA9IGVbIG4gXSkucmVsICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHMoIHQuaHJlZiApXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Z2V0U2NyZWVuTmFtZUZyb21QYWdlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0Zm9yIChcblx0XHRcdFx0XHR2YXIgdCwgZSwgbiwgaSA9IFtcblx0XHRcdFx0XHRcdHIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIFwiYVwiICksXG5cdFx0XHRcdFx0XHRyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCBcImxpbmtcIiApXG5cdFx0XHRcdFx0XSwgcyA9IDAsIGEgPSAwLCB1ID0gL1xcYm1lXFxiLzsgdCA9IGlbIHMgXTsgcyArK1xuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRmb3IgKCBhID0gMDsgZSA9IHRbIGEgXTsgYSArKyApIHtcblx0XHRcdFx0XHRcdGlmICggdS50ZXN0KCBlLnJlbCApICYmIChuID0gby5zY3JlZW5OYW1lKCBlLmhyZWYgKSkgKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBuXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDggKSwgaSA9IC9eW14jP10qXFwuKGdvdnxtaWwpKDpcXGQrKT8oWyM/XS4qKT8kL2ksIG8gPSB7fTtcblxuXHRcdGZ1bmN0aW9uIHMoIHQgKSB7XG5cdFx0XHRyZXR1cm4gdCBpbiBvID8gb1sgdCBdIDogb1sgdCBdID0gaS50ZXN0KCB0IClcblx0XHR9XG5cblx0XHR0LmV4cG9ydHMgPSB7XG5cdFx0XHRpc1VybFNlbnNpdGl2ZTogcyxcblx0XHRcdGlzSG9zdFBhZ2VTZW5zaXRpdmU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gcyggci5ob3N0IClcblx0XHRcdH1cblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMjAgKSwgaSA9IG4oIDU0ICksIG8gPSBuKCAxMSApLCBzID0gbiggMjEgKSwgYSA9IG4oIDAgKSwgdSA9IG4oIDkgKS5nZXQoIFwic2NyaWJlQ2FsbGJhY2tcIiApLFxuXHRcdFx0YyA9IDIwODMsIGQgPSBbXSwgZiA9IG8udXJsKCBzLkNMSUVOVF9FVkVOVF9FTkRQT0lOVCwge1xuXHRcdFx0XHRkbnQ6IDAsXG5cdFx0XHRcdGw6IFwiXCJcblx0XHRcdH0gKSwgbCA9IGVuY29kZVVSSUNvbXBvbmVudCggZiApLmxlbmd0aDtcblxuXHRcdGZ1bmN0aW9uIGgoIHQsIGUsIG4sIHIgKSB7XG5cdFx0XHR2YXIgaSA9ICFhLmlzT2JqZWN0KCB0ICksIG8gPSAhIWUgJiYgIWEuaXNPYmplY3QoIGUgKTtcblx0XHRcdGkgfHwgbyB8fCAodSAmJiB1KCBhcmd1bWVudHMgKSwgcCggcy5mb3JtYXRDbGllbnRFdmVudE5hbWVzcGFjZSggdCApLCBzLmZvcm1hdENsaWVudEV2ZW50RGF0YSggZSwgbiwgciApLCBzLkNMSUVOVF9FVkVOVF9FTkRQT0lOVCApKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHAoIHQsIGUsIG4gKSB7XG5cdFx0XHR2YXIgciwgdTtcblx0XHRcdG4gJiYgYS5pc09iamVjdCggdCApICYmIGEuaXNPYmplY3QoIGUgKSAmJiAoaS5sb2coIHQsIGUgKSwgciA9IHMuZmxhdHRlbkNsaWVudEV2ZW50UGF5bG9hZCggdCwgZSApLCB1ID0geyBsOiBzLnN0cmluZ2lmeSggciApIH0sIHMubm90aWNlU2VlbiggdCApICYmICh1Lm5vdGljZV9zZWVuID0gITApLCByLmRudCAmJiAodS5kbnQgPSAxKSwgdyggby51cmwoIG4sIHUgKSApKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG0oIHQsIGUsIG4sIHIgKSB7XG5cdFx0XHR2YXIgaSA9ICFhLmlzT2JqZWN0KCB0ICksIG8gPSAhIWUgJiYgIWEuaXNPYmplY3QoIGUgKTtcblx0XHRcdGlmICggIWkgJiYgIW8gKSB7XG5cdFx0XHRcdHJldHVybiB2KCBzLmZsYXR0ZW5DbGllbnRFdmVudFBheWxvYWQoIHMuZm9ybWF0Q2xpZW50RXZlbnROYW1lc3BhY2UoIHQgKSwgcy5mb3JtYXRDbGllbnRFdmVudERhdGEoIGUsIG4sIHIgKSApIClcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiB2KCB0ICkge1xuXHRcdFx0cmV0dXJuIGQucHVzaCggdCApLCBkXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZyggdCApIHtcblx0XHRcdHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoIHQgKS5sZW5ndGggKyAzXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdyggdCApIHtcblx0XHRcdHJldHVybiAobmV3IEltYWdlKS5zcmMgPSB0XG5cdFx0fVxuXG5cdFx0dC5leHBvcnRzID0ge1xuXHRcdFx0Y2FuRmx1c2hPbmVJdGVtOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUgPSBnKCBzLnN0cmluZ2lmeSggdCApICk7XG5cdFx0XHRcdHJldHVybiBsICsgZSA8IGNcblx0XHRcdH0sXG5cdFx0XHRfZW5xdWV1ZVJhd09iamVjdDogdixcblx0XHRcdHNjcmliZTogcCxcblx0XHRcdGNsaWVudEV2ZW50OiBoLFxuXHRcdFx0Y2xpZW50RXZlbnQyOiBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHRcdFx0cmV0dXJuIGgoIHQsIGUsIG4sIDIgKVxuXHRcdFx0fSxcblx0XHRcdGVucXVldWVDbGllbnRFdmVudDogbSxcblx0XHRcdGZsdXNoQ2xpZW50RXZlbnRzOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHQ7XG5cdFx0XHRcdHJldHVybiBkLmxlbmd0aCA+IDEgJiYgbSgge1xuXHRcdFx0XHRcdHBhZ2U6IFwid2lkZ2V0c19qc1wiLFxuXHRcdFx0XHRcdGNvbXBvbmVudDogXCJzY3JpYmVfcGl4ZWxcIixcblx0XHRcdFx0XHRhY3Rpb246IFwiYmF0Y2hfbG9nXCJcblx0XHRcdFx0fSwge30gKSwgdCA9IGQsIGQgPSBbXSwgdC5yZWR1Y2UoIGZ1bmN0aW9uKCBlLCBuLCByICkge1xuXHRcdFx0XHRcdHZhciBpID0gZS5sZW5ndGgsIG8gPSBpICYmIGVbIGkgLSAxIF07XG5cdFx0XHRcdFx0cmV0dXJuIHIgKyAxID09IHQubGVuZ3RoICYmIG4uZXZlbnRfbmFtZXNwYWNlICYmIFwiYmF0Y2hfbG9nXCIgPT0gbi5ldmVudF9uYW1lc3BhY2UuYWN0aW9uICYmIChuLm1lc3NhZ2UgPSBbXG5cdFx0XHRcdFx0XHRcImVudHJpZXM6XCIgKyByLFxuXHRcdFx0XHRcdFx0XCJyZXF1ZXN0czpcIiArIGlcblx0XHRcdFx0XHRdLmpvaW4oIFwiL1wiICkpLCBmdW5jdGlvbiB0KCBlICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIEFycmF5LmlzQXJyYXkoIGUgKSB8fCAoZSA9IFtlXSksIGUucmVkdWNlKCBmdW5jdGlvbiggZSwgbiApIHtcblx0XHRcdFx0XHRcdFx0dmFyIHIsIGkgPSBzLnN0cmluZ2lmeSggbiApLCBvID0gZyggaSApO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gbCArIG8gPCBjID8gZSA9IGUuY29uY2F0KCBpICkgOiAociA9IHMuc3BsaXRMb2dFbnRyeSggbiApKS5sZW5ndGggPiAxICYmIChlID0gZS5jb25jYXQoIHQoIHIgKSApKSwgZVxuXHRcdFx0XHRcdFx0fSwgW10gKVxuXHRcdFx0XHRcdH0oIG4gKS5mb3JFYWNoKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRcdHZhciBuID0gZyggdCApO1xuXHRcdFx0XHRcdFx0KCFvIHx8IG8udXJsTGVuZ3RoICsgbiA+IGMpICYmIChvID0ge1xuXHRcdFx0XHRcdFx0XHR1cmxMZW5ndGg6IGwsXG5cdFx0XHRcdFx0XHRcdGl0ZW1zOiBbXVxuXHRcdFx0XHRcdFx0fSwgZS5wdXNoKCBvICkpLCBvLnVybExlbmd0aCArPSBuLCBvLml0ZW1zLnB1c2goIHQgKVxuXHRcdFx0XHRcdH0gKSwgZVxuXHRcdFx0XHR9LCBbXSApLm1hcCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0dmFyIGUgPSB7IGw6IHQuaXRlbXMgfTtcblx0XHRcdFx0XHRyZXR1cm4gci5lbmFibGVkKCkgJiYgKGUuZG50ID0gMSksIHcoIG8udXJsKCBzLkNMSUVOVF9FVkVOVF9FTkRQT0lOVCwgZSApIClcblx0XHRcdFx0fSApXG5cdFx0XHR9LFxuXHRcdFx0aW50ZXJhY3Rpb246IGZ1bmN0aW9uKCB0LCBlLCBuLCByICkge1xuXHRcdFx0XHR2YXIgaSA9IHMuZXh0cmFjdFRlcm1zRnJvbURPTSggdC50YXJnZXQgfHwgdC5zcmNFbGVtZW50ICk7XG5cdFx0XHRcdGkuYWN0aW9uID0gciB8fCBcImNsaWNrXCIsIGgoIGksIGUsIG4gKVxuXHRcdFx0fVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAwICksIGkgPSBuKCA0MyApO1xuXHRcdHQuZXhwb3J0cyA9IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0cmV0dXJuIGkoIHQsIGUgKSA/IFt0XSA6IHIudG9SZWFsQXJyYXkoIHQucXVlcnlTZWxlY3RvckFsbCggZSApIClcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdHQuZXhwb3J0cyA9IGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdFx0Zm9yICggdmFyIHIsIGkgPSAwOyBpIDwgdC5sZW5ndGg7IGkgKysgKSB7XG5cdFx0XHRcdGlmICggciA9IGUuY2FsbCggbiwgdFsgaSBdLCBpLCB0ICkgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gTWF0aC5mbG9vciggKyBuZXcgRGF0ZSAvIDllNSApXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDEyICk7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHR2YXIgZSwgbjtcblx0XHRcdHJldHVybiBlID0gdC5oZWFkZXJzICYmIHQuaGVhZGVycy5zdGF0dXMsICEobiA9IHQgJiYgIXQuZXJyb3IgJiYgMjAwID09PSBlKSAmJiB0LmhlYWRlcnMgJiYgdC5oZWFkZXJzLm1lc3NhZ2UgJiYgci5wdWJsaWNFcnJvciggdC5oZWFkZXJzLm1lc3NhZ2UgKSwge1xuXHRcdFx0XHRzdWNjZXNzOiBuLFxuXHRcdFx0XHRyZXNwOiB0XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDM3ICksIGkgPSBuKCAyMSApO1xuXHRcdHQuZXhwb3J0cyA9IGZ1bmN0aW9uKCB0LCBlLCBuLCBvICkge1xuXHRcdFx0ci5zY3JpYmUoIGkuZm9ybWF0Q2xpZW50RXZlbnROYW1lc3BhY2UoIHtcblx0XHRcdFx0Y2xpZW50OiBcInRmd1wiLFxuXHRcdFx0XHRwYWdlOiBcImRkZ1wiLFxuXHRcdFx0XHRzZWN0aW9uOiB0LFxuXHRcdFx0XHRhY3Rpb246IFwiZXhwZXJpbWVudFwiXG5cdFx0XHR9ICksIHtcblx0XHRcdFx0ZXhwZXJpbWVudF9rZXk6IHQsXG5cdFx0XHRcdGJ1Y2tldDogZSxcblx0XHRcdFx0dmVyc2lvbjogbixcblx0XHRcdFx0ZGF0YTogb1xuXHRcdFx0fSwgITAgKVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIsIGkgPSBuKCAzMCApLCBvID0gMDtcblxuXHRcdGZ1bmN0aW9uIHMoKSB7XG5cdFx0XHRyICYmIHIubGVuZ3RoID09PSBvICYmIChpLmVtaXR0ZXIudHJpZ2dlciggaS5BTExfV0lER0VUU19BTkRfSU1BR0VTX0xPQURFRCwgciApLCByID0gbnVsbClcblx0XHR9XG5cblx0XHRpLmVtaXR0ZXIuYmluZCggaS5BTExfV0lER0VUU19SRU5ERVJfRU5ELCBmdW5jdGlvbiggdCApIHtcblx0XHRcdHIgPSB0LndpZGdldHMsIHMoKVxuXHRcdH0gKSwgdC5leHBvcnRzID0ge1xuXHRcdFx0cmVwb3J0SW1hZ2VzTG9hZEZvckFXaWRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRvICsrLCBzKClcblx0XHRcdH1cblx0XHR9XG5cdH0sICwgLCAsICwgLCAsICwgLCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciwgaSA9IG4oIDIgKSwgbyA9IG4oIDQgKSwgcyA9IG4oIDk4ICksIGEgPSBuKCA0OSApLCB1ID0gbiggOSApLCBjID0gbiggOTkgKSwgZCA9IG4oIDI1ICksIGYgPSBuKCAxMDIgKSxcblx0XHRcdGwgPSBuKCAxNTcgKSwgaCA9IG4oIDE2NSApLCBwID0gbiggMTY2ICksIG0gPSBuKCAzMCApLCB2ID0gbiggMzEgKTtcblx0XHRuKCAxNjcgKSwgbS5lbWl0dGVyLnRyaWdnZXIoIG0uU1RBUlQgKSwgdS5zZXQoIFwid2lkZ2V0cy5pbml0XCIsICEwICksIGEuc2V0KCBcImluaXRcIiwgITAgKSwgcCgpLCByID0gbmV3IGksIHMuZXhwb3NlUmVhZHlQcm9taXNlKCByLnByb21pc2UsIGEuYmFzZSwgXCJfZVwiICksIGEuc2V0KCBcIndpZGdldHNcIiwgbCApLCBhLnNldCggXCJ3aWRnZXRzLmxvYWRcIiwgZi5sb2FkICksIGEuc2V0KCBcImV2ZW50c1wiLCBkICksIGgoIGZ1bmN0aW9uKCkge1xuXHRcdFx0di5sb2FkKCksIHIucmVzb2x2ZSggYS5iYXNlICksIGMuYXR0YWNoVG8oIG8gKSwgZi5sb2FkUGFnZSgpXG5cdFx0fSApXG5cdH0sIGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdHQuZXhwb3J0cyA9IG5hdmlnYXRvclxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDcgKTtcblx0XHR0LmV4cG9ydHMgPSB7XG5cdFx0XHRleHBvc2VSZWFkeVByb21pc2U6IGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdFx0XHRlLnJlYWR5ID0gciggdC50aGVuLCB0ICksIG4gJiYgQXJyYXkuaXNBcnJheSggZVsgbiBdICkgJiYgKGVbIG4gXS5mb3JFYWNoKCByKCB0LnRoZW4sIHQgKSApLCBkZWxldGUgZVsgbiBdKVxuXHRcdFx0fVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCA4ICksIGkgPSBuKCAzNiApLCBvID0gbiggMzQgKSwgcyA9IG4oIDc0ICksIGEgPSBuKCAzICk7XG5cblx0XHRmdW5jdGlvbiB1KCB0ICkge1xuXHRcdFx0dmFyIGUsIG4sIHU7XG5cdFx0XHR0LmFsdEtleSB8fCB0Lm1ldGFLZXkgfHwgdC5zaGlmdEtleSB8fCAoZSA9IG8uY2xvc2VzdCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiBcIkFcIiA9PT0gdC50YWdOYW1lIHx8IFwiQVJFQVwiID09PSB0LnRhZ05hbWVcblx0XHRcdH0sIHQudGFyZ2V0ICkpICYmIGEuaXNJbnRlbnRVUkwoIGUuaHJlZiApICYmIChuID0gKG4gPSAobiA9IFtcblx0XHRcdFx0dSA9IGUuaHJlZixcblx0XHRcdFx0XCJvcmlnaW5hbF9yZWZlcmVyPVwiICsgci5ocmVmXG5cdFx0XHRdLmpvaW4oIC0gMSA9PSB1LmluZGV4T2YoIFwiP1wiICkgPyBcIj9cIiA6IFwiJlwiICkpLnJlcGxhY2UoIC9eaHR0cFs6XS8sIFwiaHR0cHM6XCIgKSkucmVwbGFjZSggL15cXC9cXC8vLCBcImh0dHBzOi8vXCIgKSwgcy5vcGVuKCBuLCBlICksIGkucHJldmVudERlZmF1bHQoIHQgKSlcblx0XHR9XG5cblx0XHR0LmV4cG9ydHMgPSB7XG5cdFx0XHRhdHRhY2hUbzogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHQuYWRkRXZlbnRMaXN0ZW5lciggXCJjbGlja1wiLCB1LCAhMSApXG5cdFx0XHR9XG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciwgaSA9IG4oIDEgKSwgbyA9IG4oIDEwMSApLCBzID0gbiggMzYgKSwgYSA9IG4oIDM0ICksIHUgPSBuKCAyMiApLCBjID0gbiggMyApLCBkID0gbiggMjQgKSwgZiA9IG4oIDAgKSxcblx0XHRcdGwgPSBcImludGVudF9cIiwgaCA9IGkuc2NyZWVuLndpZHRoLCBwID0gaS5zY3JlZW4uaGVpZ2h0O1xuXG5cdFx0ZnVuY3Rpb24gbSggdCwgZSApIHtcblx0XHRcdGZ1bmN0aW9uIG4oIHQgKSB7XG5cdFx0XHRcdHJldHVybiBNYXRoLnJvdW5kKCB0IC8gMiApXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0ID4gZSA/IHtcblx0XHRcdFx0Y29vcmRpbmF0ZTogMCxcblx0XHRcdFx0c2l6ZTogZVxuXHRcdFx0fSA6IHtcblx0XHRcdFx0Y29vcmRpbmF0ZTogbiggZSApIC0gbiggdCApLFxuXHRcdFx0XHRzaXplOiB0XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdiggdCwgZSwgbiApIHtcblx0XHRcdHZhciBpLCBvO1xuXHRcdFx0ZSA9IHIucGFyc2UoIGUgKSwgbiA9IG4gfHwge30sIGkgPSBtKCBlLndpZHRoLCBuLndpZHRoIHx8IGggKSwgZS5sZWZ0ID0gaS5jb29yZGluYXRlLCBlLndpZHRoID0gaS5zaXplLCBvID0gbSggZS5oZWlnaHQsIG4uaGVpZ2h0IHx8IHAgKSwgZS50b3AgPSBvLmNvb3JkaW5hdGUsIGUuaGVpZ2h0ID0gby5zaXplLCB0aGlzLndpbiA9IHQsIHRoaXMuZmVhdHVyZXMgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUgPSBbXTtcblx0XHRcdFx0cmV0dXJuIGYuZm9ySW4oIHQsIGZ1bmN0aW9uKCB0LCBuICkge1xuXHRcdFx0XHRcdGUucHVzaCggdCArIFwiPVwiICsgbiApXG5cdFx0XHRcdH0gKSwgZS5qb2luKCBcIixcIiApXG5cdFx0XHR9KCBlIClcblx0XHR9XG5cblx0XHRyID0gKG5ldyBvKS5kZWZhdWx0cygge1xuXHRcdFx0d2lkdGg6IDU1MCxcblx0XHRcdGhlaWdodDogNTIwLFxuXHRcdFx0cGVyc29uYWxiYXI6IFwiMFwiLFxuXHRcdFx0dG9vbGJhcjogXCIwXCIsXG5cdFx0XHRsb2NhdGlvbjogXCIxXCIsXG5cdFx0XHRzY3JvbGxiYXJzOiBcIjFcIixcblx0XHRcdHJlc2l6YWJsZTogXCIxXCJcblx0XHR9ICksIHYucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdHZhciBuID0gZSAmJiBcImNsaWNrXCIgPT0gZS50eXBlICYmIGEuY2xvc2VzdCggXCJhXCIsIGUudGFyZ2V0ICksXG5cdFx0XHRcdHIgPSBlICYmIChlLmFsdEtleSB8fCBlLm1ldGFLZXkgfHwgZS5zaGlmdEtleSksIGkgPSBuICYmICh1LmlvcygpIHx8IHUuYW5kcm9pZCgpKTtcblx0XHRcdGlmICggYy5pc1R3aXR0ZXJVUkwoIHQgKSApIHtcblx0XHRcdFx0cmV0dXJuIHIgfHwgaSA/IHRoaXMgOiAodGhpcy5uYW1lID0gbCArIGQuZ2VuZXJhdGUoKSwgdGhpcy5wb3B1cCA9IHRoaXMud2luLm9wZW4oIHQsIHRoaXMubmFtZSwgdGhpcy5mZWF0dXJlcyApLCBlICYmIHMucHJldmVudERlZmF1bHQoIGUgKSwgdGhpcylcblx0XHRcdH1cblx0XHR9LCB2Lm9wZW4gPSBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHRcdHJldHVybiBuZXcgdiggaSwgZSApLm9wZW4oIHQsIG4gKVxuXHRcdH0sIHQuZXhwb3J0cyA9IHZcblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCA1ICksIGkgPSBuKCAwICk7XG5cblx0XHRmdW5jdGlvbiBvKCkge1xuXHRcdFx0dGhpcy5hc3NlcnRpb25zID0gW10sIHRoaXMuX2RlZmF1bHRzID0ge31cblx0XHR9XG5cblx0XHRvLnByb3RvdHlwZS5hc3NlcnQgPSBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdHJldHVybiB0aGlzLmFzc2VydGlvbnMucHVzaCgge1xuXHRcdFx0XHRmbjogdCxcblx0XHRcdFx0bXNnOiBlIHx8IFwiYXNzZXJ0aW9uIGZhaWxlZFwiXG5cdFx0XHR9ICksIHRoaXNcblx0XHR9LCBvLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX2RlZmF1bHRzID0gdCB8fCB0aGlzLl9kZWZhdWx0cywgdGhpc1xuXHRcdH0sIG8ucHJvdG90eXBlLnJlcXVpcmUgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdHZhciBlID0gdGhpcztcblx0XHRcdHJldHVybiAodCA9IEFycmF5LmlzQXJyYXkoIHQgKSA/IHQgOiBpLnRvUmVhbEFycmF5KCBhcmd1bWVudHMgKSkuZm9yRWFjaCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdGUuYXNzZXJ0KCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gci5oYXNWYWx1ZSggZVsgdCBdIClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0oIHQgKSwgXCJyZXF1aXJlZDogXCIgKyB0IClcblx0XHRcdH0gKSwgdGhpc1xuXHRcdH0sIG8ucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHR2YXIgZSwgbjtcblx0XHRcdGlmICggZSA9IGkuYXVnKCB7fSwgdGhpcy5fZGVmYXVsdHMsIHQgfHwge30gKSwgKG4gPSB0aGlzLmFzc2VydGlvbnMucmVkdWNlKCBmdW5jdGlvbiggdCwgbiApIHtcblx0XHRcdFx0cmV0dXJuIG4uZm4oIGUgKSB8fCB0LnB1c2goIG4ubXNnICksIHRcblx0XHRcdH0sIFtdICkpLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggbi5qb2luKCBcIlxcblwiICkgKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBlXG5cdFx0fSwgdC5leHBvcnRzID0gb1xuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDQgKSwgaSA9IG4oIDYgKSwgbyA9IG4oIDIzICksIHMgPSBuKCA1MiApLCBhID0gbiggMzUgKSwgdSA9IG4oIDkgKSwgYyA9IG4oIDM3ICksIGQgPSBuKCAyNSApLFxuXHRcdFx0ZiA9IG4oIDUgKSwgbCA9IG4oIDAgKSwgaCA9IG4oIDMxICksIHAgPSBuKCAxMTkgKSwgbSA9IG4oIDMwICk7XG5cblx0XHRmdW5jdGlvbiB2KCkge1xuXHRcdFx0dmFyIHQgPSBhLnZhbCggXCJ3aWRnZXRzOmF1dG9sb2FkXCIgKSB8fCAhMDtcblx0XHRcdHJldHVybiAhZi5pc0ZhbHNlVmFsdWUoIHQgKSAmJiAoZi5pc1RydXRoVmFsdWUoIHQgKSA/IHIuYm9keSA6IHIucXVlcnlTZWxlY3RvckFsbCggdCApKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGcoIHQsIGUgKSB7XG5cdFx0XHR2YXIgbiwgaTtcblx0XHRcdHJldHVybiB0ID0gKHQgPSB0IHx8IHIuYm9keSkubGVuZ3RoID8gbC50b1JlYWxBcnJheSggdCApIDogW3RdLCBjLnBhdXNlKCksIGkgPSBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0cmV0dXJuIHQucmVkdWNlKCBmdW5jdGlvbiggdCwgbiApIHtcblx0XHRcdFx0XHRyZXR1cm4gdC5jb25jYXQoIHAucmVkdWNlKCBmdW5jdGlvbiggdCwgciApIHtcblx0XHRcdFx0XHRcdHJldHVybiB0LmNvbmNhdCggciggbiwgZSApIClcblx0XHRcdFx0XHR9LCBbXSApIClcblx0XHRcdFx0fSwgW10gKVxuXHRcdFx0fSggdCwgZSApLCBtLmVtaXR0ZXIudHJpZ2dlciggbS5BTExfV0lER0VUU19SRU5ERVJfU1RBUlQsIHsgd2lkZ2V0czogaSB9ICksIG4gPSBvLmFsbFJlc29sdmVkKCBpLm1hcCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiBzLmFkZFdpZGdldCggdCApXG5cdFx0XHR9ICkgKS50aGVuKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0ZC50cmlnZ2VyKCBcImxvYWRlZFwiLCB7IHdpZGdldHM6IHQgfSApLCB0ICYmIHQubGVuZ3RoICYmIG0uZW1pdHRlci50cmlnZ2VyKCBtLkFMTF9XSURHRVRTX1JFTkRFUl9FTkQsIHsgd2lkZ2V0czogdCB9IClcblx0XHRcdH0gKSwgby5hbHdheXMoIG4sIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjLnJlc3VtZSgpXG5cdFx0XHR9ICksIG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiB3KCB0ICkge1xuXHRcdFx0cmV0dXJuIGguZ2V0RXhwZXJpbWVudHMoKS50aGVuKCBmdW5jdGlvbiggZSApIHtcblx0XHRcdFx0cmV0dXJuIGcoIHQsIGUgKVxuXHRcdFx0fSApXG5cdFx0fVxuXG5cdFx0dC5leHBvcnRzID0ge1xuXHRcdFx0bG9hZDogdyxcblx0XHRcdGxvYWRQYWdlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHQgPSB2KCk7XG5cdFx0XHRcdHJldHVybiAhMSA9PT0gdCA/IGkucmVzb2x2ZSgpIDogKHUuc2V0KCBcIndpZGdldHMubG9hZGVkXCIsICEwICksIHcoIHQgKSlcblx0XHRcdH0sXG5cdFx0XHRfZ2V0UGFnZUxvYWRUYXJnZXQ6IHZcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMTAgKSwgaSA9IG4oIDE4ICksIG8gPSBuKCAyNSApLCBzID0gbiggNTMgKSwgYSA9IG4oIDYgKSwgdSA9IG4oIDIzICk7XG5cblx0XHRmdW5jdGlvbiBjKCB0LCBlICkge1xuXHRcdFx0dGhpcy5fd2lkZ2V0ID0gbnVsbCwgdGhpcy5fc2FuZGJveCA9IG51bGwsIHRoaXMuX2h5ZHJhdGVkID0gITEsIHRoaXMuX2luc2VydGVkSW50b0RvbSA9ICExLCB0aGlzLl9TYW5kYm94ID0gdC5TYW5kYm94LCB0aGlzLl9mYWN0b3J5ID0gdC5mYWN0b3J5LCB0aGlzLl93aWRnZXRQYXJhbXMgPSB0LnBhcmFtZXRlcnMsIHRoaXMuX3Jlc29sdmUgPSBlLCB0aGlzLl9jbGFzc05hbWUgPSB0LmNsYXNzTmFtZSwgdGhpcy5fcmVuZGVyZWRDbGFzc05hbWUgPSB0LmNsYXNzTmFtZSArIFwiLXJlbmRlcmVkXCIsIHRoaXMuX2Vycm9yQ2xhc3NOYW1lID0gdC5jbGFzc05hbWUgKyBcIi1lcnJvclwiLCB0aGlzLl9zcmNFbCA9IHQuc3JjRWwsIHRoaXMuX3RhcmdldEdsb2JhbCA9IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRyZXR1cm4gKHQuc3JjRWwgfHwgdC50YXJnZXRFbCkub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlld1xuXHRcdFx0fSggdCApLCB0aGlzLl9zYW5kYm94V3JhcHBlckVsID0gdC5vcHRpb25zID8gdC5vcHRpb25zLnNhbmRib3hXcmFwcGVyRWwgOiBudWxsLCB0aGlzLl9pbnNlcnRpb25TdHJhdGVneSA9IGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0XHR2YXIgbiwgciA9IHQuc3JjRWwsIGkgPSB0LnRhcmdldEVsLCBvID0gdC5vcHRpb25zID8gdC5vcHRpb25zLnNhbmRib3hXcmFwcGVyRWwgOiBudWxsO1xuXHRcdFx0XHRvID8gKG8uYXBwZW5kQ2hpbGQoIGUgKSwgbiA9IG8pIDogbiA9IGUsIHIgPyBpLmluc2VydEJlZm9yZSggbiwgciApIDogaS5hcHBlbmRDaGlsZCggbiApXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Yy5mcm9tUmF3VGFzayA9IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0cmV0dXJuIG5ldyBjKCB0LmlucHV0LCB0LnRhc2tEb25lRGVmZXJyZWQucmVzb2x2ZSApXG5cdFx0fSwgYy5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHQgPSB0aGlzLCBlID0gbmV3IHRoaXMuX1NhbmRib3goIHRoaXMuX3RhcmdldEdsb2JhbCApO1xuXHRcdFx0cmV0dXJuIHRoaXMuX2ZhY3RvcnkoIHRoaXMuX3dpZGdldFBhcmFtcywgZSApLnRoZW4oIGZ1bmN0aW9uKCBuICkge1xuXHRcdFx0XHRyZXR1cm4gdC5fd2lkZ2V0ID0gbiwgdC5fc2FuZGJveCA9IGUsIG4uX3NhbmRib3hXcmFwcGVyRWwgPSB0Ll9zYW5kYm94V3JhcHBlckVsLCBuXG5cdFx0XHR9IClcblx0XHR9LCBjLnByb3RvdHlwZS5pbnNlcnRJbnRvRG9tID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdCA9IHRoaXM7XG5cdFx0XHRyZXR1cm4gdGhpcy5fd2lkZ2V0ID8gdGhpcy5fc2FuZGJveC5pbnNlcnQoIHRoaXMuX3dpZGdldC5pZCwge1xuXHRcdFx0XHRjbGFzczogW1xuXHRcdFx0XHRcdHRoaXMuX2NsYXNzTmFtZSxcblx0XHRcdFx0XHR0aGlzLl9yZW5kZXJlZENsYXNzTmFtZVxuXHRcdFx0XHRdLmpvaW4oIFwiIFwiIClcblx0XHRcdH0sIG51bGwsIHRoaXMuX2luc2VydGlvblN0cmF0ZWd5ICkudGhlbiggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHQuX2luc2VydGVkSW50b0RvbSA9ICEwXG5cdFx0XHR9ICkgOiBhLnJlamVjdCggbmV3IEVycm9yKCBcImNhbm5vdCBpbnNlcnQgd2lkZ2V0IGludG8gRE9NIGJlZm9yZSBpdCBpcyBpbml0aWFsaXplZFwiICkgKVxuXHRcdH0sIGMucHJvdG90eXBlLmh5ZHJhdGUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciB0ID0gdGhpcztcblx0XHRcdHJldHVybiB0aGlzLl93aWRnZXQgPyB0aGlzLl93aWRnZXQuaHlkcmF0ZSgpLnRoZW4oIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR0Ll9oeWRyYXRlZCA9ICEwXG5cdFx0XHR9ICkgOiBhLnJlamVjdCggbmV3IEVycm9yKCBcImNhbm5vdCBoeWRyYXRlIHdpZGdldCBiZWZvcmUgaXQgaXMgaW5pdGlhbGl6ZWRcIiApIClcblx0XHR9LCBjLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciB0ID0gdGhpcztcblxuXHRcdFx0ZnVuY3Rpb24gZSggZSApIHtcblx0XHRcdFx0cmV0dXJuIHMoIHQuX3NhbmRib3guc2FuZGJveEVsICkudGhlbiggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGEucmVqZWN0KCBlIClcblx0XHRcdFx0fSApXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzLl9oeWRyYXRlZCA/IHRoaXMuX2luc2VydGVkSW50b0RvbSA/IHQuX3dpZGdldC5yZW5kZXIoIHQuX3NhbmRib3ggKS50aGVuKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHQuX3NhbmRib3gub25SZXNpemUoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiB0Ll93aWRnZXQucmVzaXplKCkudGhlbiggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRvLnRyaWdnZXIoIFwicmVzaXplXCIsIHsgdGFyZ2V0OiB0Ll9zYW5kYm94LnNhbmRib3hFbCB9IClcblx0XHRcdFx0XHR9IClcblx0XHRcdFx0fSApLCB0Ll93aWRnZXQuc2hvdygpXG5cdFx0XHR9ICkudGhlbiggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBzKCB0Ll9zcmNFbCApLnRoZW4oIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiB0Ll9zYW5kYm94LnNhbmRib3hFbFxuXHRcdFx0XHR9IClcblx0XHRcdH0sIGUgKSA6IGUoIG5ldyBFcnJvciggXCJjYW5ub3QgcmVuZGVyIHdpZGdldCBiZWZvcmUgRE9NIGluc2VydGlvblwiICkgKSA6IGUoIG5ldyBFcnJvciggXCJjYW5ub3QgcmVuZGVyIHdpZGdldCBiZWZvcmUgaHlkcmF0aW9uXCIgKSApXG5cdFx0fSwgYy5wcm90b3R5cGUuZmFpbCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHQgPSB0aGlzO1xuXHRcdFx0cmV0dXJuIHRoaXMuX3NyY0VsID8gdS5hbHdheXMoIGkud3JpdGUoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyLmFkZCggdC5fc3JjRWwsIHQuX2Vycm9yQ2xhc3NOYW1lIClcblx0XHRcdH0gKSwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdG8udHJpZ2dlciggXCJyZW5kZXJlZFwiLCB7IHRhcmdldDogdC5fc3JjRWwgfSApLCB0Ll9yZXNvbHZlKCB0Ll9zcmNFbCApXG5cdFx0XHR9ICkgOiAodC5fcmVzb2x2ZSgpLCBhLnJlc29sdmUoKSlcblx0XHR9LCBjLnByb3RvdHlwZS5zdWNjZXNzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRvLnRyaWdnZXIoIFwicmVuZGVyZWRcIiwgeyB0YXJnZXQ6IHRoaXMuX3NhbmRib3guc2FuZGJveEVsIH0gKSwgdGhpcy5fcmVzb2x2ZSggdGhpcy5fc2FuZGJveC5zYW5kYm94RWwgKVxuXHRcdH0sIHQuZXhwb3J0cyA9IGNcblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHI7XG5cdFx0IWZ1bmN0aW9uKCkge1xuXHRcdFx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFx0XHR2YXIgaSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KCB0LCAxZTMgLyA2MCApXG5cdFx0XHR9O1xuXG5cdFx0XHRmdW5jdGlvbiBvKCkge1xuXHRcdFx0XHR0aGlzLmZyYW1lcyA9IFtdLCB0aGlzLmxhc3RJZCA9IDAsIHRoaXMucmFmID0gaSwgdGhpcy5iYXRjaCA9IHtcblx0XHRcdFx0XHRoYXNoOiB7fSxcblx0XHRcdFx0XHRyZWFkOiBbXSxcblx0XHRcdFx0XHR3cml0ZTogW10sXG5cdFx0XHRcdFx0bW9kZTogbnVsbFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdG8ucHJvdG90eXBlLnJlYWQgPSBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0dmFyIG4gPSB0aGlzLmFkZCggXCJyZWFkXCIsIHQsIGUgKSwgciA9IG4uaWQ7XG5cdFx0XHRcdHJldHVybiB0aGlzLmJhdGNoLnJlYWQucHVzaCggbi5pZCApLCBcInJlYWRpbmdcIiA9PT0gdGhpcy5iYXRjaC5tb2RlIHx8IHRoaXMuYmF0Y2guc2NoZWR1bGVkID8gciA6ICh0aGlzLnNjaGVkdWxlQmF0Y2goKSwgcilcblx0XHRcdH0sIG8ucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdHZhciBuID0gdGhpcy5hZGQoIFwid3JpdGVcIiwgdCwgZSApLCByID0gdGhpcy5iYXRjaC5tb2RlLCBpID0gbi5pZDtcblx0XHRcdFx0cmV0dXJuIHRoaXMuYmF0Y2gud3JpdGUucHVzaCggbi5pZCApLCBcIndyaXRpbmdcIiA9PT0gciB8fCBcInJlYWRpbmdcIiA9PT0gciB8fCB0aGlzLmJhdGNoLnNjaGVkdWxlZCA/IGkgOiAodGhpcy5zY2hlZHVsZUJhdGNoKCksIGkpXG5cdFx0XHR9LCBvLnByb3RvdHlwZS5kZWZlciA9IGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdFx0XHRcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQgJiYgKG4gPSBlLCBlID0gdCwgdCA9IDEpO1xuXHRcdFx0XHR2YXIgciA9IHRoaXMsIGkgPSB0IC0gMTtcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2NoZWR1bGUoIGksIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHIucnVuKCB7XG5cdFx0XHRcdFx0XHRmbjogZSxcblx0XHRcdFx0XHRcdGN0eDogblxuXHRcdFx0XHRcdH0gKVxuXHRcdFx0XHR9IClcblx0XHRcdH0sIG8ucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdGlmICggXCJmdW5jdGlvblwiID09IHR5cGVvZiB0ICkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNsZWFyRnJhbWUoIHQgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0ID0gTnVtYmVyKCB0ICk7XG5cdFx0XHRcdHZhciBlID0gdGhpcy5iYXRjaC5oYXNoWyB0IF07XG5cdFx0XHRcdGlmICggZSApIHtcblx0XHRcdFx0XHR2YXIgbiA9IHRoaXMuYmF0Y2hbIGUudHlwZSBdLCByID0gbi5pbmRleE9mKCB0ICk7XG5cdFx0XHRcdFx0ZGVsZXRlIHRoaXMuYmF0Y2guaGFzaFsgdCBdLCB+IHIgJiYgbi5zcGxpY2UoIHIsIDEgKVxuXHRcdFx0XHR9XG5cdFx0XHR9LCBvLnByb3RvdHlwZS5jbGVhckZyYW1lID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHZhciBlID0gdGhpcy5mcmFtZXMuaW5kZXhPZiggdCApO1xuXHRcdFx0XHR+IGUgJiYgdGhpcy5mcmFtZXMuc3BsaWNlKCBlLCAxIClcblx0XHRcdH0sIG8ucHJvdG90eXBlLnNjaGVkdWxlQmF0Y2ggPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHQgPSB0aGlzO1xuXHRcdFx0XHR0aGlzLnNjaGVkdWxlKCAwLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR0LmJhdGNoLnNjaGVkdWxlZCA9ICExLCB0LnJ1bkJhdGNoKClcblx0XHRcdFx0fSApLCB0aGlzLmJhdGNoLnNjaGVkdWxlZCA9ICEwXG5cdFx0XHR9LCBvLnByb3RvdHlwZS51bmlxdWVJZCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gKysgdGhpcy5sYXN0SWRcblx0XHRcdH0sIG8ucHJvdG90eXBlLmZsdXNoID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdGZvciAoIHZhciBlOyBlID0gdC5zaGlmdCgpOyApIHtcblx0XHRcdFx0XHR0aGlzLnJ1biggdGhpcy5iYXRjaC5oYXNoWyBlIF0gKVxuXHRcdFx0XHR9XG5cdFx0XHR9LCBvLnByb3RvdHlwZS5ydW5CYXRjaCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHRoaXMuYmF0Y2gubW9kZSA9IFwicmVhZGluZ1wiLCB0aGlzLmZsdXNoKCB0aGlzLmJhdGNoLnJlYWQgKSwgdGhpcy5iYXRjaC5tb2RlID0gXCJ3cml0aW5nXCIsIHRoaXMuZmx1c2goIHRoaXMuYmF0Y2gud3JpdGUgKSwgdGhpcy5iYXRjaC5tb2RlID0gbnVsbFxuXHRcdFx0XHR9IGNhdGNoICggdCApIHtcblx0XHRcdFx0XHR0aHJvdyB0aGlzLnJ1bkJhdGNoKCksIHRcblx0XHRcdFx0fVxuXHRcdFx0fSwgby5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0XHRcdHZhciByID0gdGhpcy51bmlxdWVJZCgpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5iYXRjaC5oYXNoWyByIF0gPSB7XG5cdFx0XHRcdFx0aWQ6IHIsXG5cdFx0XHRcdFx0Zm46IGUsXG5cdFx0XHRcdFx0Y3R4OiBuLFxuXHRcdFx0XHRcdHR5cGU6IHRcblx0XHRcdFx0fVxuXHRcdFx0fSwgby5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHZhciBlID0gdC5jdHggfHwgdGhpcywgbiA9IHQuZm47XG5cdFx0XHRcdGlmICggZGVsZXRlIHRoaXMuYmF0Y2guaGFzaFsgdC5pZCBdLCAhdGhpcy5vbkVycm9yICkge1xuXHRcdFx0XHRcdHJldHVybiBuLmNhbGwoIGUgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdG4uY2FsbCggZSApXG5cdFx0XHRcdH0gY2F0Y2ggKCB0ICkge1xuXHRcdFx0XHRcdHRoaXMub25FcnJvciggdCApXG5cdFx0XHRcdH1cblx0XHRcdH0sIG8ucHJvdG90eXBlLmxvb3AgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHQsIGUgPSB0aGlzLCBuID0gdGhpcy5yYWYsIHIgPSAhMTtcblxuXHRcdFx0XHRmdW5jdGlvbiBpKCkge1xuXHRcdFx0XHRcdHZhciB0ID0gZS5mcmFtZXMuc2hpZnQoKTtcblx0XHRcdFx0XHRlLmZyYW1lcy5sZW5ndGggPyBuKCBpICkgOiBlLmxvb3BpbmcgPSAhMSwgdCAmJiB0KClcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMubG9vcGluZyB8fCAodCA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHIgPSAhMCwgaSgpXG5cdFx0XHRcdH0sIDUwMCApLCBuKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyIHx8IChjbGVhclRpbWVvdXQoIHQgKSwgaSgpKVxuXHRcdFx0XHR9ICksIHRoaXMubG9vcGluZyA9ICEwKVxuXHRcdFx0fSwgby5wcm90b3R5cGUuc2NoZWR1bGUgPSBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZnJhbWVzWyB0IF0gPyB0aGlzLnNjaGVkdWxlKCB0ICsgMSwgZSApIDogKHRoaXMubG9vcCgpLCB0aGlzLmZyYW1lc1sgdCBdID0gZSlcblx0XHRcdH07XG5cdFx0XHR2YXIgcyA9IG5ldyBvO1xuXHRcdFx0dm9pZCAwICE9PSB0ICYmIHQuZXhwb3J0cyA/IHQuZXhwb3J0cyA9IHMgOiB2b2lkIDAgPT09IChyID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBzXG5cdFx0XHR9LmNhbGwoIGUsIG4sIGUsIHQgKSkgfHwgKHQuZXhwb3J0cyA9IHIpXG5cdFx0fSgpXG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggNDggKS5Qcm9taXNlO1xuXHRcdHQuZXhwb3J0cyA9IHIuX2FzYXBcblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIsIGksIG8sIHMgPSBuKCA0ICksIGEgPSBuKCAxICksIHUgPSBuKCAzMiApLCBjID0gbiggMjAgKSwgZCA9IG4oIDIgKSwgZiA9IG4oIDYgKSwgbCA9IG4oIDU0ICksIGggPSBuKCAyMSApLFxuXHRcdFx0cCA9IG4oIDAgKSwgbSA9IG4oIDI2ICksIHYgPSBuKCA5ICkuZ2V0KCBcInNjcmliZUNhbGxiYWNrXCIgKSwgZyA9IE1hdGguZmxvb3IoIDFlMyAqIE1hdGgucmFuZG9tKCkgKSArIFwiX1wiLFxuXHRcdFx0dyA9IFwicnVmb3VzLWZyYW1lLVwiICsgZyArIFwiLVwiLCB5ID0gXCJydWZvdXMtZm9ybS1cIiArIGcgKyBcIi1cIiwgYiA9IDAsIF8gPSAhMSwgRSA9IG5ldyBkO1xuXG5cdFx0ZnVuY3Rpb24geCgpIHtcblx0XHRcdHZhciB0ID0gby5jcmVhdGVFbGVtZW50KCBcImZvcm1cIiApLCBlID0gby5jcmVhdGVFbGVtZW50KCBcImlucHV0XCIgKSwgbiA9IG8uY3JlYXRlRWxlbWVudCggXCJpbnB1dFwiICk7XG5cdFx0XHRyZXR1cm4gYiArKywgdC5hY3Rpb24gPSBoLkNMSUVOVF9FVkVOVF9FTkRQT0lOVCwgdC5tZXRob2QgPSBcIlBPU1RcIiwgdC50YXJnZXQgPSB3ICsgYiwgdC5pZCA9IHkgKyBiLCBlLnR5cGUgPSBcImhpZGRlblwiLCBlLm5hbWUgPSBcImRudFwiLCBlLnZhbHVlID0gYy5lbmFibGVkKCksIG4udHlwZSA9IFwiaGlkZGVuXCIsIG4ubmFtZSA9IFwidGZ3X3JlZGlyZWN0XCIsIG4udmFsdWUgPSBoLlJVRk9VU19SRURJUkVDVCwgdC5hcHBlbmRDaGlsZCggZSApLCB0LmFwcGVuZENoaWxkKCBuICksIHRcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBUKCkge1xuXHRcdFx0dmFyIHQgPSB3ICsgYjtcblx0XHRcdHJldHVybiB1KCB7XG5cdFx0XHRcdGlkOiB0LFxuXHRcdFx0XHRuYW1lOiB0LFxuXHRcdFx0XHR3aWR0aDogMCxcblx0XHRcdFx0aGVpZ2h0OiAwLFxuXHRcdFx0XHRib3JkZXI6IDBcblx0XHRcdH0sIHsgZGlzcGxheTogXCJub25lXCIgfSwgby5kb2MgKVxuXHRcdH1cblxuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdGNsaWVudEV2ZW50OiBmdW5jdGlvbiggdCwgZSwgbiwgaSApIHtcblx0XHRcdFx0KGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHRcdHZhciBuID0gIXAuaXNPYmplY3QoIHQgKSwgciA9ICEhZSAmJiAhcC5pc09iamVjdCggZSApLCBpID0gbiB8fCByO1xuXHRcdFx0XHRcdHJldHVybiBpXG5cdFx0XHRcdH0pKCB0LCBlICkgfHwgKHYgJiYgdiggYXJndW1lbnRzICksIEUucHJvbWlzZS50aGVuKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQhZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdFx0XHR2YXIgbiwgaSwgcztcblx0XHRcdFx0XHRcdHAuaXNPYmplY3QoIHQgKSAmJiBwLmlzT2JqZWN0KCBlICkgJiYgKGwubG9nKCB0LCBlICksIHMgPSBoLmZsYXR0ZW5DbGllbnRFdmVudFBheWxvYWQoIHQsIGUgKSwgKG4gPSByLmZpcnN0Q2hpbGQpLnZhbHVlID0gKyAoKyBuLnZhbHVlIHx8IHMuZG50IHx8IDApLCAoaSA9IG8uY3JlYXRlRWxlbWVudCggXCJpbnB1dFwiICkpLnR5cGUgPSBcImhpZGRlblwiLCBpLm5hbWUgPSBcImxcIiwgaS52YWx1ZSA9IGguc3RyaW5naWZ5KCBzICksIHIuYXBwZW5kQ2hpbGQoIGkgKSlcblx0XHRcdFx0XHR9KCBoLmZvcm1hdENsaWVudEV2ZW50TmFtZXNwYWNlKCB0ICksIGguZm9ybWF0Q2xpZW50RXZlbnREYXRhKCBlLCBuLCBpICkgKVxuXHRcdFx0XHR9ICkpXG5cdFx0XHR9LFxuXHRcdFx0Zmx1c2g6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gRS5wcm9taXNlLnRoZW4oIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciB0O1xuXHRcdFx0XHRcdHJldHVybiByLmNoaWxkcmVuLmxlbmd0aCA8PSAyID8gZi5yZWplY3QoKSA6ICh0ID0gZi5hbGwoIFtcblx0XHRcdFx0XHRcdG8uZG9jLmJvZHkuYXBwZW5kQ2hpbGQoIHIgKSxcblx0XHRcdFx0XHRcdG8uZG9jLmJvZHkuYXBwZW5kQ2hpbGQoIGkgKVxuXHRcdFx0XHRcdF0gKS50aGVuKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRcdHZhciBlID0gdFsgMCBdLCBuID0gdFsgMSBdO1xuXHRcdFx0XHRcdFx0cmV0dXJuIG4uYWRkRXZlbnRMaXN0ZW5lciggXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHQhZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIG4gPSB0LnBhcmVudE5vZGU7XG5cdFx0XHRcdFx0XHRcdFx0XHRuICYmIChuLnJlbW92ZUNoaWxkKCB0ICksIG4ucmVtb3ZlQ2hpbGQoIGUgKSlcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0oIGUsIG4gKSgpXG5cdFx0XHRcdFx0XHR9ICksIGUuc3VibWl0KCksIHRcblx0XHRcdFx0XHR9ICksIHIgPSB4KCksIGkgPSBUKCksIHQpXG5cdFx0XHRcdH0gKVxuXHRcdFx0fSxcblx0XHRcdGluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gXyA/IEUucHJvbWlzZSA6ICgobyA9IG5ldyBtKCBhICkpLmluc2VydCggXCJydWZvdXMtc2FuZGJveFwiLCBudWxsLCB7IGRpc3BsYXk6IFwibm9uZVwiIH0sIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdHMuYm9keS5hcHBlbmRDaGlsZCggdCApXG5cdFx0XHRcdH0gKS50aGVuKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRvLnNldFRpdGxlKCBcIlR3aXR0ZXIgYW5hbHl0aWNzIGlmcmFtZVwiICksIHIgPSB4KCksIGkgPSBUKCksIEUucmVzb2x2ZSggW3IsIGldIClcblx0XHRcdFx0fSApLCBfID0gITAsIEUucHJvbWlzZSlcblx0XHRcdH1cblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMCApO1xuXHRcdHQuZXhwb3J0cyA9IGZ1bmN0aW9uIHQoIGUgKSB7XG5cdFx0XHR2YXIgbiA9IFtdO1xuXHRcdFx0cmV0dXJuIGUuZm9yRWFjaCggZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRcdHZhciBpID0gci5pc1R5cGUoIFwiYXJyYXlcIiwgZSApID8gdCggZSApIDogW2VdO1xuXHRcdFx0XHRuID0gbi5jb25jYXQoIGkgKVxuXHRcdFx0fSApLCBuXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSApIHtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdHJldHVybiB0LmZpbHRlciggZnVuY3Rpb24oIGUsIG4gKSB7XG5cdFx0XHRcdHJldHVybiB0LmluZGV4T2YoIGUgKSA9PT0gblxuXHRcdFx0fSApXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDQxICksIGkgPSBuKCAwICksIG8gPSBuKCAxMTEgKTtcblxuXHRcdGZ1bmN0aW9uIHMoKSB7XG5cdFx0XHRyLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKVxuXHRcdH1cblxuXHRcdHMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggci5wcm90b3R5cGUgKSwgaS5hdWcoIHMucHJvdG90eXBlLCB7IGZhY3Rvcnk6IG8gfSApLCB0LmV4cG9ydHMgPSBzXG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMjMgKSwgaSA9IG4oIDAgKSwgbyA9IG4oIDcgKTtcblx0XHR0LmV4cG9ydHMgPSB7XG5cdFx0XHRiZWZvcmU6IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dmFyIG4sIGkgPSB0aGlzLCBvID0gYXJndW1lbnRzO1xuXHRcdFx0XHRcdHJldHVybiBuID0gZS5hcHBseSggdGhpcywgYXJndW1lbnRzICksIHIuaXNQcm9taXNlKCBuICkgPyBuLnRoZW4oIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHQuYXBwbHkoIGksIG8gKVxuXHRcdFx0XHRcdH0gKSA6IHQuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRhZnRlcjogZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR2YXIgbiwgaSA9IHRoaXMsIG8gPSBhcmd1bWVudHM7XG5cblx0XHRcdFx0XHRmdW5jdGlvbiBzKCB0LCBlICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHIuaXNQcm9taXNlKCBlICkgPyBlLnRoZW4oIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdFxuXHRcdFx0XHRcdFx0fSApIDogdFxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiBuID0gdC5hcHBseSggdGhpcywgYXJndW1lbnRzICksIHIuaXNQcm9taXNlKCBuICkgPyBuLnRoZW4oIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHMoIHQsIGUuYXBwbHkoIGksIG8gKSApXG5cdFx0XHRcdFx0fSApIDogcyggbiwgZS5hcHBseSggdGhpcywgYXJndW1lbnRzICkgKVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0YXJvdW5kOiBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciBuID0gaS50b1JlYWxBcnJheSggYXJndW1lbnRzICk7XG5cdFx0XHRcdFx0cmV0dXJuIG4udW5zaGlmdCggbyggdCwgdGhpcyApICksIGUuYXBwbHkoIHRoaXMsIG4gKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDEwICksIGkgPSBuKCAxOCApLCBvID0gbiggNDIgKSwgcyA9IG4oIDYgKSwgYSA9IG4oIDAgKTtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciB0ID0gbygpO1xuXG5cdFx0XHRmdW5jdGlvbiBlKCBlICkge1xuXHRcdFx0XHR0LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KCB0aGlzLCBcInRhcmdldEdsb2JhbFwiLCB7IHZhbHVlOiBlIH0gKVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCB0LnByb3RvdHlwZSApLCBhLmF1ZyggZS5wcm90b3R5cGUsIHtcblx0XHRcdFx0aWQ6IG51bGwsXG5cdFx0XHRcdGluaXRpYWxpemVkOiAhMSxcblx0XHRcdFx0d2lkdGg6IDAsXG5cdFx0XHRcdGhlaWdodDogMCxcblx0XHRcdFx0c2FuZGJveEVsOiBudWxsLFxuXHRcdFx0XHRpbnNlcnQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiBzLnJlamVjdCgpXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uUmVzaXplOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0fSxcblx0XHRcdFx0YWRkQ2xhc3M6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdHZhciBlID0gdGhpcy5zYW5kYm94RWw7XG5cdFx0XHRcdFx0cmV0dXJuIHQgPSBBcnJheS5pc0FycmF5KCB0ICkgPyB0IDogW3RdLCBpLndyaXRlKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdHQuZm9yRWFjaCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0XHRcdHIuYWRkKCBlLCB0IClcblx0XHRcdFx0XHRcdH0gKVxuXHRcdFx0XHRcdH0gKVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRyZW1vdmVDbGFzczogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0dmFyIGUgPSB0aGlzLnNhbmRib3hFbDtcblx0XHRcdFx0XHRyZXR1cm4gdCA9IEFycmF5LmlzQXJyYXkoIHQgKSA/IHQgOiBbdF0sIGkud3JpdGUoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0dC5mb3JFYWNoKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRcdFx0ci5yZW1vdmUoIGUsIHQgKVxuXHRcdFx0XHRcdFx0fSApXG5cdFx0XHRcdFx0fSApXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHN0eWxlU2VsZjogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0dmFyIGUgPSB0aGlzO1xuXHRcdFx0XHRcdHJldHVybiBpLndyaXRlKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGEuZm9ySW4oIHQsIGZ1bmN0aW9uKCB0LCBuICkge1xuXHRcdFx0XHRcdFx0XHRlLnNhbmRib3hFbC5zdHlsZVsgdCBdID0gblxuXHRcdFx0XHRcdFx0fSApXG5cdFx0XHRcdFx0fSApXG5cdFx0XHRcdH1cblx0XHRcdH0gKSwgZVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCA0ICksIGkgPSBuKCAxMCApLCBvID0gbiggMTggKSwgcyA9IG4oIDU1ICksIGEgPSBuKCAyNyApLCB1ID0gbiggNTYgKSwgYyA9IG4oIDQ0ICksIGQgPSBuKCA0NSApLFxuXHRcdFx0ZiA9IG4oIDMyICksIGwgPSBuKCAxMiApLCBoID0gbiggNDYgKSwgcCA9IG4oIDIgKSwgbSA9IG4oIDYgKSwgdiA9IG4oIDAgKSwgZyA9IG4oIDkgKSwgdyA9IG4oIDI0ICksXG5cdFx0XHR5ID0gbiggNyApLCBiID0geyBhbGxvd2Z1bGxzY3JlZW46IFwidHJ1ZVwiIH0sIF8gPSB7XG5cdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG5cdFx0XHRcdHZpc2liaWxpdHk6IFwiaGlkZGVuXCIsXG5cdFx0XHRcdGRpc3BsYXk6IFwiYmxvY2tcIixcblx0XHRcdFx0d2lkdGg6IFwiMHB4XCIsXG5cdFx0XHRcdGhlaWdodDogXCIwcHhcIixcblx0XHRcdFx0cGFkZGluZzogXCIwXCIsXG5cdFx0XHRcdGJvcmRlcjogXCJub25lXCJcblx0XHRcdH0sIEUgPSB7XG5cdFx0XHRcdHBvc2l0aW9uOiBcInN0YXRpY1wiLFxuXHRcdFx0XHR2aXNpYmlsaXR5OiBcInZpc2libGVcIlxuXHRcdFx0fSwgeCA9IFwiU2FuZGJveFJvb3RcIiwgVCA9IFwiLlNhbmRib3hSb290IHsgZGlzcGxheTogbm9uZTsgfVwiLCBBID0gNTA7XG5cblx0XHRmdW5jdGlvbiBTKCB0LCBlLCBuLCByICkge1xuXHRcdFx0cmV0dXJuIGUgPSB2LmF1ZyggeyBpZDogdCB9LCBiLCBlICksIG4gPSB2LmF1Zygge30sIF8sIG4gKSwgZiggZSwgbiwgciApXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gUiggdCwgZSwgbiwgaSwgcyApIHtcblx0XHRcdHZhciBhID0gbmV3IHAsIHUgPSB3LmdlbmVyYXRlKCksIGMgPSBTKCB0LCBlLCBuLCBzICk7XG5cdFx0XHRyZXR1cm4gZy5zZXQoIFtcInNhbmRib3hcIiwgdV0sIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgdCA9IGMuY29udGVudFdpbmRvdy5kb2N1bWVudDtcblx0XHRcdFx0by53cml0ZSggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dC53cml0ZSggXCI8IURPQ1RZUEUgaHRtbD48aHRtbD48aGVhZD48L2hlYWQ+PGJvZHk+PC9ib2R5PjwvaHRtbD5cIiApXG5cdFx0XHRcdH0gKS50aGVuKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR0LmNsb3NlKCksIGEucmVzb2x2ZSggYyApXG5cdFx0XHRcdH0gKVxuXHRcdFx0fSApLCBjLnNyYyA9IFtcblx0XHRcdFx0XCJqYXZhc2NyaXB0OlwiLFxuXHRcdFx0XHQnZG9jdW1lbnQud3JpdGUoXCJcIik7Jyxcblx0XHRcdFx0XCJ0cnkgeyB3aW5kb3cucGFyZW50LmRvY3VtZW50OyB9XCIsXG5cdFx0XHRcdCdjYXRjaCAoZSkgeyBkb2N1bWVudC5kb21haW49XCInICsgci5kb21haW4gKyAnXCI7IH0nLFxuXHRcdFx0XHRcIndpbmRvdy5wYXJlbnQuXCIgKyBnLmZ1bGxQYXRoKCBbXCJzYW5kYm94XCIsIHVdICkgKyBcIigpO1wiXG5cdFx0XHRdLmpvaW4oIFwiXCIgKSwgYy5hZGRFdmVudExpc3RlbmVyKCBcImVycm9yXCIsIGEucmVqZWN0LCAhMSApLCBvLndyaXRlKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZCggYywgaSApXG5cdFx0XHR9ICksIGEucHJvbWlzZVxuXHRcdH1cblxuXHRcdHQuZXhwb3J0cyA9IGEuY291cGxlKCBuKCA1NyApLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdHQub3ZlcnJpZGVQcm9wZXJ0eSggXCJpZFwiLCB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuc2FuZGJveEVsICYmIHRoaXMuc2FuZGJveEVsLmlkXG5cdFx0XHRcdH1cblx0XHRcdH0gKSwgdC5vdmVycmlkZVByb3BlcnR5KCBcImluaXRpYWxpemVkXCIsIHtcblx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZXR1cm4gISF0aGlzLndpblxuXHRcdFx0XHR9XG5cdFx0XHR9ICksIHQub3ZlcnJpZGVQcm9wZXJ0eSggXCJ3aWR0aFwiLCB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX3dpZHRoXG5cdFx0XHRcdH1cblx0XHRcdH0gKSwgdC5vdmVycmlkZVByb3BlcnR5KCBcImhlaWdodFwiLCB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX2hlaWdodFxuXHRcdFx0XHR9XG5cdFx0XHR9ICksIHQub3ZlcnJpZGVQcm9wZXJ0eSggXCJzYW5kYm94RWxcIiwge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmlmcmFtZUVsXG5cdFx0XHRcdH1cblx0XHRcdH0gKSwgdC5kZWZpbmVQcm9wZXJ0eSggXCJpZnJhbWVFbFwiLCB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX2lmcmFtZVxuXHRcdFx0XHR9XG5cdFx0XHR9ICksIHQuZGVmaW5lUHJvcGVydHkoIFwicm9vdEVsXCIsIHtcblx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5kb2MgJiYgdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50XG5cdFx0XHRcdH1cblx0XHRcdH0gKSwgdC5kZWZpbmVQcm9wZXJ0eSggXCJ3aWRnZXRFbFwiLCB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZG9jICYmIHRoaXMuZG9jLmJvZHkuZmlyc3RFbGVtZW50Q2hpbGRcblx0XHRcdFx0fVxuXHRcdFx0fSApLCB0LmRlZmluZVByb3BlcnR5KCBcIndpblwiLCB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuaWZyYW1lRWwgJiYgdGhpcy5pZnJhbWVFbC5jb250ZW50V2luZG93XG5cdFx0XHRcdH1cblx0XHRcdH0gKSwgdC5kZWZpbmVQcm9wZXJ0eSggXCJkb2NcIiwge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLndpbiAmJiB0aGlzLndpbi5kb2N1bWVudFxuXHRcdFx0XHR9XG5cdFx0XHR9ICksIHQuZGVmaW5lKCBcIl91cGRhdGVDYWNoZWREaW1lbnNpb25zXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgdCA9IHRoaXM7XG5cdFx0XHRcdHJldHVybiBvLnJlYWQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciBlLCBuID0gaCggdC5zYW5kYm94RWwgKTtcblx0XHRcdFx0XHRcInZpc2libGVcIiA9PSB0LnNhbmRib3hFbC5zdHlsZS52aXNpYmlsaXR5ID8gdC5fd2lkdGggPSBuLndpZHRoIDogKGUgPSBoKCB0LnNhbmRib3hFbC5wYXJlbnRFbGVtZW50ICkud2lkdGgsIHQuX3dpZHRoID0gTWF0aC5taW4oIG4ud2lkdGgsIGUgKSksIHQuX2hlaWdodCA9IG4uaGVpZ2h0XG5cdFx0XHRcdH0gKVxuXHRcdFx0fSApLCB0LmRlZmluZSggXCJfc2V0VGFyZ2V0VG9CbGFua1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoIFwiYmFzZVwiICk7XG5cdFx0XHRcdHQudGFyZ2V0ID0gXCJfYmxhbmtcIiwgdGhpcy5kb2MuaGVhZC5hcHBlbmRDaGlsZCggdCApXG5cdFx0XHR9ICksIHQuZGVmaW5lKCBcIl9kaWRSZXNpemVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciB0ID0gdGhpcywgZSA9IHRoaXMuX3Jlc2l6ZUhhbmRsZXJzLnNsaWNlKCAwICk7XG5cdFx0XHRcdHJldHVybiB0aGlzLl91cGRhdGVDYWNoZWREaW1lbnNpb25zKCkudGhlbiggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0ZS5mb3JFYWNoKCBmdW5jdGlvbiggZSApIHtcblx0XHRcdFx0XHRcdGUoIHQgKVxuXHRcdFx0XHRcdH0gKVxuXHRcdFx0XHR9IClcblx0XHRcdH0gKSwgdC5kZWZpbmUoIFwic2V0VGl0bGVcIiwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHRoaXMuaWZyYW1lRWwudGl0bGUgPSB0XG5cdFx0XHR9ICksIHQub3ZlcnJpZGUoIFwiY3JlYXRlRWxlbWVudFwiLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoIHQgKVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlKCBcImNyZWF0ZUZyYWdtZW50XCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5kb2MuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG5cdFx0XHR9ICksIHQub3ZlcnJpZGUoIFwiaHRtbFRvRWxlbWVudFwiLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGU7XG5cdFx0XHRcdHJldHVybiAoZSA9IHRoaXMuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApKS5pbm5lckhUTUwgPSB0LCBlLmZpcnN0RWxlbWVudENoaWxkXG5cdFx0XHR9ICksIHQub3ZlcnJpZGUoIFwiaGFzU2VsZWN0ZWRUZXh0XCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gISFzLmdldFNlbGVjdGVkVGV4dCggdGhpcy53aW4gKVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlKCBcImFkZFJvb3RDbGFzc1wiLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUgPSB0aGlzLnJvb3RFbDtcblx0XHRcdFx0cmV0dXJuIHQgPSBBcnJheS5pc0FycmF5KCB0ICkgPyB0IDogW3RdLCB0aGlzLmluaXRpYWxpemVkID8gby53cml0ZSggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dC5mb3JFYWNoKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRcdGkuYWRkKCBlLCB0IClcblx0XHRcdFx0XHR9IClcblx0XHRcdFx0fSApIDogbS5yZWplY3QoIG5ldyBFcnJvciggXCJzYW5kYm94IG5vdCBpbml0aWFsaXplZFwiICkgKVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlKCBcInJlbW92ZVJvb3RDbGFzc1wiLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUgPSB0aGlzLnJvb3RFbDtcblx0XHRcdFx0cmV0dXJuIHQgPSBBcnJheS5pc0FycmF5KCB0ICkgPyB0IDogW3RdLCB0aGlzLmluaXRpYWxpemVkID8gby53cml0ZSggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dC5mb3JFYWNoKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRcdGkucmVtb3ZlKCBlLCB0IClcblx0XHRcdFx0XHR9IClcblx0XHRcdFx0fSApIDogbS5yZWplY3QoIG5ldyBFcnJvciggXCJzYW5kYm94IG5vdCBpbml0aWFsaXplZFwiICkgKVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlKCBcImhhc1Jvb3RDbGFzc1wiLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIGkucHJlc2VudCggdGhpcy5yb290RWwsIHQgKVxuXHRcdFx0fSApLCB0LmRlZmluZSggXCJhZGRTdHlsZVNoZWV0XCIsIGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHR2YXIgbiwgciA9IG5ldyBwO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5pbml0aWFsaXplZCA/ICgobiA9IHRoaXMuY3JlYXRlRWxlbWVudCggXCJsaW5rXCIgKSkudHlwZSA9IFwidGV4dC9jc3NcIiwgbi5yZWwgPSBcInN0eWxlc2hlZXRcIiwgbi5ocmVmID0gdCwgbi5hZGRFdmVudExpc3RlbmVyKCBcImxvYWRcIiwgci5yZXNvbHZlLCAhMSApLCBuLmFkZEV2ZW50TGlzdGVuZXIoIFwiZXJyb3JcIiwgci5yZWplY3QsICExICksIG8ud3JpdGUoIHkoIGUsIG51bGwsIG4gKSApLnRoZW4oIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiB1KCB0ICkudGhlbiggci5yZXNvbHZlLCByLnJlamVjdCApLCByLnByb21pc2Vcblx0XHRcdFx0fSApKSA6IG0ucmVqZWN0KCBuZXcgRXJyb3IoIFwic2FuZGJveCBub3QgaW5pdGlhbGl6ZWRcIiApIClcblx0XHRcdH0gKSwgdC5vdmVycmlkZSggXCJwcmVwZW5kU3R5bGVTaGVldFwiLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUgPSB0aGlzLmRvYztcblx0XHRcdFx0cmV0dXJuIHRoaXMuYWRkU3R5bGVTaGVldCggdCwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0dmFyIG4gPSBlLmhlYWQuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cdFx0XHRcdFx0cmV0dXJuIG4gPyBlLmhlYWQuaW5zZXJ0QmVmb3JlKCB0LCBuICkgOiBlLmhlYWQuYXBwZW5kQ2hpbGQoIHQgKVxuXHRcdFx0XHR9IClcblx0XHRcdH0gKSwgdC5vdmVycmlkZSggXCJhcHBlbmRTdHlsZVNoZWV0XCIsIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSA9IHRoaXMuZG9jO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5hZGRTdHlsZVNoZWV0KCB0LCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRyZXR1cm4gZS5oZWFkLmFwcGVuZENoaWxkKCB0IClcblx0XHRcdFx0fSApXG5cdFx0XHR9ICksIHQuZGVmaW5lKCBcImFkZENzc1wiLCBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0dmFyIG47XG5cdFx0XHRcdHJldHVybiBjLmlubGluZVN0eWxlKCkgPyAoKG4gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoIFwic3R5bGVcIiApKS50eXBlID0gXCJ0ZXh0L2Nzc1wiLCBuLmFwcGVuZENoaWxkKCB0aGlzLmRvYy5jcmVhdGVUZXh0Tm9kZSggdCApICksIG8ud3JpdGUoIHkoIGUsIG51bGwsIG4gKSApKSA6IChsLmRldkVycm9yKCBcIkNTUCBlbmFibGVkOyBjYW5ub3QgZW1iZWQgaW5saW5lIHN0eWxlc1wiICksIG0ucmVzb2x2ZSgpKVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlKCBcInByZXBlbmRDc3NcIiwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHZhciBlID0gdGhpcy5kb2M7XG5cdFx0XHRcdHJldHVybiB0aGlzLmFkZENzcyggdCwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0dmFyIG4gPSBlLmhlYWQuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cdFx0XHRcdFx0cmV0dXJuIG4gPyBlLmhlYWQuaW5zZXJ0QmVmb3JlKCB0LCBuICkgOiBlLmhlYWQuYXBwZW5kQ2hpbGQoIHQgKVxuXHRcdFx0XHR9IClcblx0XHRcdH0gKSwgdC5vdmVycmlkZSggXCJhcHBlbmRDc3NcIiwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHZhciBlID0gdGhpcy5kb2M7XG5cdFx0XHRcdHJldHVybiB0aGlzLmFkZENzcyggdCwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGUuaGVhZC5hcHBlbmRDaGlsZCggdCApXG5cdFx0XHRcdH0gKVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlKCBcIm1ha2VWaXNpYmxlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgdCA9IHRoaXM7XG5cdFx0XHRcdHJldHVybiB0aGlzLnN0eWxlU2VsZiggRSApLnRoZW4oIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHQuX3VwZGF0ZUNhY2hlZERpbWVuc2lvbnMoKVxuXHRcdFx0XHR9IClcblx0XHRcdH0gKSwgdC5vdmVycmlkZSggXCJpbmplY3RXaWRnZXRFbFwiLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUgPSB0aGlzO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5pbml0aWFsaXplZCA/IHRoaXMud2lkZ2V0RWwgPyBtLnJlamVjdCggbmV3IEVycm9yKCBcIndpZGdldCBhbHJlYWR5IGluamVjdGVkXCIgKSApIDogby53cml0ZSggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0ZS5kb2MuYm9keS5hcHBlbmRDaGlsZCggdCApXG5cdFx0XHRcdH0gKSA6IG0ucmVqZWN0KCBuZXcgRXJyb3IoIFwic2FuZGJveCBub3QgaW5pdGlhbGl6ZWRcIiApIClcblx0XHRcdH0gKSwgdC5vdmVycmlkZSggXCJtYXRjaEhlaWdodFRvQ29udGVudFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHQsIGUgPSB0aGlzO1xuXHRcdFx0XHRyZXR1cm4gby5yZWFkKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR0ID0gZS53aWRnZXRFbCA/IGgoIGUud2lkZ2V0RWwgKS5oZWlnaHQgOiAwXG5cdFx0XHRcdH0gKSwgby53cml0ZSggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0ZS5zYW5kYm94RWwuc3R5bGUuaGVpZ2h0ID0gdCArIFwicHhcIlxuXHRcdFx0XHR9ICkudGhlbiggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGUuX3VwZGF0ZUNhY2hlZERpbWVuc2lvbnMoKVxuXHRcdFx0XHR9IClcblx0XHRcdH0gKSwgdC5vdmVycmlkZSggXCJtYXRjaFdpZHRoVG9Db250ZW50XCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgdCwgZSA9IHRoaXM7XG5cdFx0XHRcdHJldHVybiBvLnJlYWQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHQgPSBlLndpZGdldEVsID8gaCggZS53aWRnZXRFbCApLndpZHRoIDogMFxuXHRcdFx0XHR9ICksIG8ud3JpdGUoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGUuc2FuZGJveEVsLnN0eWxlLndpZHRoID0gdCArIFwicHhcIlxuXHRcdFx0XHR9ICkudGhlbiggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGUuX3VwZGF0ZUNhY2hlZERpbWVuc2lvbnMoKVxuXHRcdFx0XHR9IClcblx0XHRcdH0gKSwgdC5hZnRlciggXCJpbml0aWFsaXplXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR0aGlzLl9pZnJhbWUgPSBudWxsLCB0aGlzLl93aWR0aCA9IHRoaXMuX2hlaWdodCA9IDAsIHRoaXMuX3Jlc2l6ZUhhbmRsZXJzID0gW11cblx0XHRcdH0gKSwgdC5vdmVycmlkZSggXCJpbnNlcnRcIiwgZnVuY3Rpb24oIHQsIGUsIG4sIHIgKSB7XG5cdFx0XHRcdHZhciBpID0gdGhpcywgcyA9IG5ldyBwLCBhID0gdGhpcy50YXJnZXRHbG9iYWwuZG9jdW1lbnQsIHUgPSBTKCB0LCBlLCBuLCBhICk7XG5cdFx0XHRcdHJldHVybiBvLndyaXRlKCB5KCByLCBudWxsLCB1ICkgKSwgdS5hZGRFdmVudExpc3RlbmVyKCBcImxvYWRcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0KGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0dC5jb250ZW50V2luZG93LmRvY3VtZW50XG5cdFx0XHRcdFx0XHR9IGNhdGNoICggdCApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIG0ucmVqZWN0KCB0IClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBtLnJlc29sdmUoIHQgKVxuXHRcdFx0XHRcdH0pKCB1ICkudGhlbiggbnVsbCwgeSggUiwgbnVsbCwgdCwgZSwgbiwgdSwgYSApICkudGhlbiggcy5yZXNvbHZlLCBzLnJlamVjdCApXG5cdFx0XHRcdH0sICExICksIHUuYWRkRXZlbnRMaXN0ZW5lciggXCJlcnJvclwiLCBzLnJlamVjdCwgITEgKSwgcy5wcm9taXNlLnRoZW4oIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdHZhciBlID0gZCggaS5fZGlkUmVzaXplLCBBLCBpICk7XG5cdFx0XHRcdFx0cmV0dXJuIGkuX2lmcmFtZSA9IHQsIGkud2luLmFkZEV2ZW50TGlzdGVuZXIoIFwicmVzaXplXCIsIGUsICExICksIG0uYWxsKCBbXG5cdFx0XHRcdFx0XHRpLl9zZXRUYXJnZXRUb0JsYW5rKCksXG5cdFx0XHRcdFx0XHRpLmFkZFJvb3RDbGFzcyggeCApLFxuXHRcdFx0XHRcdFx0aS5wcmVwZW5kQ3NzKCBUIClcblx0XHRcdFx0XHRdIClcblx0XHRcdFx0fSApXG5cdFx0XHR9ICksIHQub3ZlcnJpZGUoIFwib25SZXNpemVcIiwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHRoaXMuX3Jlc2l6ZUhhbmRsZXJzLnB1c2goIHQgKVxuXHRcdFx0fSApLCB0LmFmdGVyKCBcInN0eWxlU2VsZlwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3VwZGF0ZUNhY2hlZERpbWVuc2lvbnMoKVxuXHRcdFx0fSApXG5cdFx0fSApXG5cdH0sIGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdHQuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcInVuaW1wbGVtZW50ZWQgbWV0aG9kXCIgKVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAyICksIGkgPSBuKCA3ICksIG8gPSAxMDAsIHMgPSAzZTM7XG5cblx0XHRmdW5jdGlvbiBhKCB0LCBlICkge1xuXHRcdFx0dGhpcy5faW5wdXRzUXVldWUgPSBbXSwgdGhpcy5fdGFzayA9IHQsIHRoaXMuX2lzUGF1c2VkID0gITEsIHRoaXMuX2ZsdXNoRGVsYXkgPSBlICYmIGUuZmx1c2hEZWxheSB8fCBvLCB0aGlzLl9wYXVzZUxlbmd0aCA9IGUgJiYgZS5wYXVzZUxlbmd0aCB8fCBzLCB0aGlzLl9mbHVzaFRpbWVvdXQgPSB2b2lkIDBcblx0XHR9XG5cblx0XHRhLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdHZhciBlID0gbmV3IHI7XG5cdFx0XHRyZXR1cm4gdGhpcy5faW5wdXRzUXVldWUucHVzaCgge1xuXHRcdFx0XHRpbnB1dDogdCxcblx0XHRcdFx0dGFza0RvbmVEZWZlcnJlZDogZVxuXHRcdFx0fSApLCB0aGlzLl9zY2hlZHVsZUZsdXNoKCksIGUucHJvbWlzZVxuXHRcdH0sIGEucHJvdG90eXBlLl9zY2hlZHVsZUZsdXNoID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLl9pc1BhdXNlZCB8fCAoY2xlYXJUaW1lb3V0KCB0aGlzLl9mbHVzaFRpbWVvdXQgKSwgdGhpcy5fZmx1c2hUaW1lb3V0ID0gc2V0VGltZW91dCggaSggdGhpcy5fZmx1c2gsIHRoaXMgKSwgdGhpcy5fZmx1c2hEZWxheSApKVxuXHRcdH0sIGEucHJvdG90eXBlLl9mbHVzaCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dGhpcy5fdGFzay5jYWxsKCBudWxsLCB0aGlzLl9pbnB1dHNRdWV1ZSApXG5cdFx0XHR9IGNhdGNoICggdCApIHtcblx0XHRcdFx0dGhpcy5faW5wdXRzUXVldWUuZm9yRWFjaCggZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRcdFx0ZS50YXNrRG9uZURlZmVycmVkLnJlamVjdCggdCApXG5cdFx0XHRcdH0gKVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5faW5wdXRzUXVldWUgPSBbXSwgdGhpcy5fZmx1c2hUaW1lb3V0ID0gdm9pZCAwXG5cdFx0fSwgYS5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdGNsZWFyVGltZW91dCggdGhpcy5fZmx1c2hUaW1lb3V0ICksIHRoaXMuX2lzUGF1c2VkID0gITAsICF0ICYmIHRoaXMuX3BhdXNlTGVuZ3RoICYmIHNldFRpbWVvdXQoIGkoIHRoaXMucmVzdW1lLCB0aGlzICksIHRoaXMuX3BhdXNlTGVuZ3RoIClcblx0XHR9LCBhLnByb3RvdHlwZS5yZXN1bWUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuX2lzUGF1c2VkID0gITEsIHRoaXMuX3NjaGVkdWxlRmx1c2goKVxuXHRcdH0sIHQuZXhwb3J0cyA9IGFcblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIsIGkgPSBuKCA3MyApLCBvID0gbiggMzIgKSwgcyA9IG4oIDIgKSwgYSA9IG4oIDQgKSwgdSA9IG4oIDE5ICksIGMgPSBuKCAyMiApLCBkID0gbiggMzMgKSwgZiA9IG4oIDggKSxcblx0XHRcdGwgPSBuKCAxMiApLCBoID0gbiggMTE2ICksIHAgPSBuKCA1OCApLCBtID0gbiggOSApLCB2ID0gbiggMTEgKSwgZyA9IG4oIDExNyApLCB3ID0gbiggMyApLCB5ID0gbiggMCApLFxuXHRcdFx0YiA9IG4oIDEgKSwgXyA9IHAoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbmV3IHNcblx0XHRcdH0gKTtcblxuXHRcdGZ1bmN0aW9uIEUoIHQgKSB7XG5cdFx0XHR2YXIgZSA9IHQgfHwge1xuXHRcdFx0XHRzaG91bGRfb2J0YWluX2Nvb2tpZV9jb25zZW50OiAhMCxcblx0XHRcdFx0ZXhwZXJpbWVudHM6IHt9XG5cdFx0XHR9O1xuXHRcdFx0cmV0dXJuIG5ldyBnKCBlLnNob3VsZF9vYnRhaW5fY29va2llX2NvbnNlbnQsIGUuZXhwZXJpbWVudHMgKVxuXHRcdH1cblxuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdGxvYWQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgdCwgZSwgbiwgcztcblx0XHRcdFx0aWYgKCBjLmllOSgpIHx8IGMuaWUxMCgpIHx8IFwiaHR0cDpcIiAhPT0gZi5wcm90b2NvbCAmJiBcImh0dHBzOlwiICE9PSBmLnByb3RvY29sICkge1xuXHRcdFx0XHRcdHJldHVybiBsLmRldkVycm9yKCBcIlVzaW5nIGRlZmF1bHQgc2V0dGluZ3MgZHVlIHRvIHVuc3VwcG9ydGVkIGJyb3dzZXIgb3IgcHJvdG9jb2wuXCIgKSwgciA9IEUoKSwgdm9pZCBfKCkucmVzb2x2ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHQgPSB7IG9yaWdpbjogZi5vcmlnaW4gfSwgdS5zZXR0aW5ncygpLmluZGV4T2YoIFwibG9jYWxob3N0XCIgKSA+IC0gMSAmJiAodC5sb2NhbFNldHRpbmdzID0gITApLCBlID0gdi51cmwoIGkucmVzb3VyY2VCYXNlVXJsICsgaS53aWRnZXRJZnJhbWVIdG1sUGF0aCwgdCApLCBuID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0dmFyIG4sIGksIG8sIHM7XG5cdFx0XHRcdFx0aWYgKCBpID0gdy5pc1R3aXR0ZXJVUkwoIHQub3JpZ2luICksIG8gPSBlLnN1YnN0ciggMCwgdC5vcmlnaW4ubGVuZ3RoICkgPT09IHQub3JpZ2luLCBzID0gdy5pc1R3aW1nVVJMKCB0Lm9yaWdpbiApLCBvICYmIGkgfHwgcyApIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdChuID0gXCJzdHJpbmdcIiA9PSB0eXBlb2YgdC5kYXRhID8gZC5wYXJzZSggdC5kYXRhICkgOiB0LmRhdGEpLm5hbWVzcGFjZSA9PT0gaC5zZXR0aW5ncyAmJiAociA9IEUoIG4uc2V0dGluZ3MgKSwgXygpLnJlc29sdmUoKSlcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKCB0ICkge1xuXHRcdFx0XHRcdFx0XHRsLmRldkVycm9yKCB0IClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIGIuYWRkRXZlbnRMaXN0ZW5lciggXCJtZXNzYWdlXCIsIG4gKSwgcyA9IG8oIHtcblx0XHRcdFx0XHRzcmM6IGUsXG5cdFx0XHRcdFx0dGl0bGU6IFwiVHdpdHRlciBzZXR0aW5ncyBpZnJhbWVcIlxuXHRcdFx0XHR9LCB7IGRpc3BsYXk6IFwibm9uZVwiIH0gKSwgYS5ib2R5LmFwcGVuZENoaWxkKCBzIClcblx0XHRcdH0sXG5cdFx0XHRzZXR0aW5nc0xvYWRlZDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciB0LCBlLCBuO1xuXHRcdFx0XHRyZXR1cm4gdCA9IG5ldyBzLCBlID0gbS5nZXQoIFwiZXhwZXJpbWVudE92ZXJyaWRlXCIgKSwgXygpLnByb21pc2UudGhlbiggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0ZSAmJiBlLm5hbWUgJiYgZS5hc3NpZ25tZW50ICYmICgobiA9IHt9KVsgZS5uYW1lIF0gPSB7IGJ1Y2tldDogZS5hc3NpZ25tZW50IH0sIHIuZXhwZXJpbWVudHMgPSB5LmF1Zyggci5leHBlcmltZW50cywgbiApKSwgdC5yZXNvbHZlKCByIClcblx0XHRcdFx0fSApLmNhdGNoKCBmdW5jdGlvbiggZSApIHtcblx0XHRcdFx0XHR0LnJlamVjdCggZSApXG5cdFx0XHRcdH0gKSwgdC5wcm9taXNlXG5cdFx0XHR9XG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSApIHtcblx0XHR0LmV4cG9ydHMgPSB7IHNldHRpbmdzOiBcInR3dHRyLnNldHRpbmdzXCIgfVxuXHR9LCBmdW5jdGlvbiggdCwgZSApIHtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdHRoaXMuc2hvdWxkT2J0YWluQ29va2llQ29uc2VudCA9IHQsIHRoaXMuZXhwZXJpbWVudHMgPSBlIHx8IHt9XG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSApIHtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdHJldHVybiB0LnNwbGl0KCBcIlwiICkubWFwKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIHQuY2hhckNvZGVBdCggMCApLnRvU3RyaW5nKCAxNiApXG5cdFx0XHR9ICkuam9pbiggXCJcIiApXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR0LmV4cG9ydHMgPSBbbiggMTIwICksIG4oIDEyNSApLCBuKCAxMzMgKSwgbiggMTM1ICksIG4oIDEzNyApLCBuKCAxNTEgKSwgbiggMTU1ICldXG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMTEgKSwgaSA9IG4oIDUgKSwgbyA9IG4oIDAgKSwgcyA9IG4oIDEzICksIGEgPSBuKCAxNCApKCksIHUgPSBuKCA1OSApLCBjID0gXCJhLnR3aXR0ZXItZG0tYnV0dG9uXCI7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRyZXR1cm4gYSggdCwgYyApLm1hcCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiB1KCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHR2YXIgZSA9IHQuZ2V0QXR0cmlidXRlKCBcImRhdGEtc2hvdy1zY3JlZW4tbmFtZVwiICksIG4gPSBzKCB0ICksIGEgPSB0LmdldEF0dHJpYnV0ZSggXCJocmVmXCIgKSxcblx0XHRcdFx0XHRcdHUgPSB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLXNjcmVlbi1uYW1lXCIgKSwgYyA9IGUgPyBpLmFzQm9vbGVhbiggZSApIDogbnVsbCxcblx0XHRcdFx0XHRcdGQgPSB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLXNpemVcIiApLCBmID0gci5kZWNvZGVVUkwoIGEgKSwgbCA9IGYucmVjaXBpZW50X2lkLFxuXHRcdFx0XHRcdFx0aCA9IHQuZ2V0QXR0cmlidXRlKCBcImRhdGEtdGV4dFwiICkgfHwgZi50ZXh0LFxuXHRcdFx0XHRcdFx0cCA9IHQuZ2V0QXR0cmlidXRlKCBcImRhdGEtd2VsY29tZS1tZXNzYWdlLWlkXCIgKSB8fCBmLndlbGNvbWVNZXNzYWdlSWQ7XG5cdFx0XHRcdFx0cmV0dXJuIG8uYXVnKCBuLCB7XG5cdFx0XHRcdFx0XHRzY3JlZW5OYW1lOiB1LFxuXHRcdFx0XHRcdFx0c2hvd1NjcmVlbk5hbWU6IGMsXG5cdFx0XHRcdFx0XHRzaXplOiBkLFxuXHRcdFx0XHRcdFx0dGV4dDogaCxcblx0XHRcdFx0XHRcdHVzZXJJZDogbCxcblx0XHRcdFx0XHRcdHdlbGNvbWVNZXNzYWdlSWQ6IHBcblx0XHRcdFx0XHR9IClcblx0XHRcdFx0fSggdCApLCB0LnBhcmVudE5vZGUsIHQgKVxuXHRcdFx0fSApXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDAgKTtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiB0KCBlICkge1xuXHRcdFx0dmFyIG47XG5cdFx0XHRpZiAoIGUgKSB7XG5cdFx0XHRcdHJldHVybiBuID0gZS5sYW5nIHx8IGUuZ2V0QXR0cmlidXRlKCBcImRhdGEtbGFuZ1wiICksIHIuaXNUeXBlKCBcInN0cmluZ1wiLCBuICkgPyBuIDogdCggZS5wYXJlbnRFbGVtZW50IClcblx0XHRcdH1cblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMiApO1xuXHRcdHQuZXhwb3J0cyA9IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0dmFyIGkgPSBuZXcgcjtcblx0XHRcdHJldHVybiBuLmUoIDIgKS50aGVuKCBmdW5jdGlvbiggciApIHtcblx0XHRcdFx0dmFyIG87XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0byA9IG4oIDg4ICksIGkucmVzb2x2ZSggbmV3IG8oIHQsIGUgKSApXG5cdFx0XHRcdH0gY2F0Y2ggKCB0ICkge1xuXHRcdFx0XHRcdGkucmVqZWN0KCB0IClcblx0XHRcdFx0fVxuXHRcdFx0fS5iaW5kKCBudWxsLCBuICkgKS5jYXRjaCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdGkucmVqZWN0KCB0IClcblx0XHRcdH0gKSwgaS5wcm9taXNlXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDEyNCApLCBpID0gbiggMSApLCBvID0gbiggMTAgKSwgcyA9IG4oIDM2ICksIGEgPSBuKCAxOCApLCB1ID0gbiggNTUgKSwgYyA9IG4oIDI3ICksIGQgPSBuKCA1NiApLFxuXHRcdFx0ZiA9IG4oIDQ0ICksIGwgPSBuKCA0NiApLCBoID0gbiggNyApLCBwID0gbiggNDUgKSwgbSA9IG4oIDYgKSwgdiA9IG4oIDAgKSwgZyA9IDUwLCB3ID0ge1xuXHRcdFx0XHRwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuXHRcdFx0XHR2aXNpYmlsaXR5OiBcImhpZGRlblwiLFxuXHRcdFx0XHRkaXNwbGF5OiBcImJsb2NrXCIsXG5cdFx0XHRcdHRyYW5zZm9ybTogXCJyb3RhdGUoMGRlZylcIlxuXHRcdFx0fSwgeSA9IHtcblx0XHRcdFx0cG9zaXRpb246IFwic3RhdGljXCIsXG5cdFx0XHRcdHZpc2liaWxpdHk6IFwidmlzaWJsZVwiXG5cdFx0XHR9LCBiID0gXCJ0d2l0dGVyLXdpZGdldFwiLCBfID0gXCJvcGVuXCIsIEUgPSBcIlNhbmRib3hSb290XCIsXG5cdFx0XHR4ID0gXCIuU2FuZGJveFJvb3QgeyBkaXNwbGF5OiBub25lOyBtYXgtaGVpZ2h0OiAxMDAwMHB4OyB9XCI7XG5cdFx0dC5leHBvcnRzID0gYy5jb3VwbGUoIG4oIDU3ICksIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0dC5kZWZpbmVTdGF0aWMoIFwiaXNTdXBwb3J0ZWRcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiAhIWkuSFRNTEVsZW1lbnQucHJvdG90eXBlLmF0dGFjaFNoYWRvdyAmJiBmLmlubGluZVN0eWxlKClcblx0XHRcdH0gKSwgdC5vdmVycmlkZVByb3BlcnR5KCBcImlkXCIsIHtcblx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5zYW5kYm94RWwgJiYgdGhpcy5zYW5kYm94RWwuaWRcblx0XHRcdFx0fVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlUHJvcGVydHkoIFwiaW5pdGlhbGl6ZWRcIiwge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiAhIXRoaXMuX3NoYWRvd0hvc3Rcblx0XHRcdFx0fVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlUHJvcGVydHkoIFwid2lkdGhcIiwge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLl93aWR0aFxuXHRcdFx0XHR9XG5cdFx0XHR9ICksIHQub3ZlcnJpZGVQcm9wZXJ0eSggXCJoZWlnaHRcIiwge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLl9oZWlnaHRcblx0XHRcdFx0fVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlUHJvcGVydHkoIFwic2FuZGJveEVsXCIsIHtcblx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5fc2hhZG93SG9zdFxuXHRcdFx0XHR9XG5cdFx0XHR9ICksIHQuZGVmaW5lKCBcIl91cGRhdGVDYWNoZWREaW1lbnNpb25zXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgdCA9IHRoaXM7XG5cdFx0XHRcdHJldHVybiBhLnJlYWQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciBlLCBuID0gbCggdC5zYW5kYm94RWwgKTtcblx0XHRcdFx0XHRcInZpc2libGVcIiA9PSB0LnNhbmRib3hFbC5zdHlsZS52aXNpYmlsaXR5ID8gdC5fd2lkdGggPSBuLndpZHRoIDogKGUgPSBsKCB0LnNhbmRib3hFbC5wYXJlbnRFbGVtZW50ICkud2lkdGgsIHQuX3dpZHRoID0gTWF0aC5taW4oIG4ud2lkdGgsIGUgKSksIHQuX2hlaWdodCA9IG4uaGVpZ2h0XG5cdFx0XHRcdH0gKVxuXHRcdFx0fSApLCB0LmRlZmluZSggXCJfZGlkUmVzaXplXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgdCA9IHRoaXMsIGUgPSB0aGlzLl9yZXNpemVIYW5kbGVycy5zbGljZSggMCApO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fdXBkYXRlQ2FjaGVkRGltZW5zaW9ucygpLnRoZW4oIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGUuZm9yRWFjaCggZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRcdFx0XHRlKCB0IClcblx0XHRcdFx0XHR9IClcblx0XHRcdFx0fSApXG5cdFx0XHR9ICksIHQub3ZlcnJpZGUoIFwiY3JlYXRlRWxlbWVudFwiLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMudGFyZ2V0R2xvYmFsLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIHQgKVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlKCBcImNyZWF0ZUZyYWdtZW50XCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy50YXJnZXRHbG9iYWwuZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG5cdFx0XHR9ICksIHQub3ZlcnJpZGUoIFwiaHRtbFRvRWxlbWVudFwiLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGU7XG5cdFx0XHRcdHJldHVybiAoZSA9IHRoaXMuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApKS5pbm5lckhUTUwgPSB0LCBlLmZpcnN0RWxlbWVudENoaWxkXG5cdFx0XHR9ICksIHQub3ZlcnJpZGUoIFwiaGFzU2VsZWN0ZWRUZXh0XCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gISF1LmdldFNlbGVjdGVkVGV4dCggdGhpcy50YXJnZXRHbG9iYWwgKVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlKCBcImFkZFJvb3RDbGFzc1wiLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUgPSB0aGlzLl9zaGFkb3dSb290Qm9keTtcblx0XHRcdFx0cmV0dXJuIHQgPSBBcnJheS5pc0FycmF5KCB0ICkgPyB0IDogW3RdLCB0aGlzLmluaXRpYWxpemVkID8gYS53cml0ZSggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dC5mb3JFYWNoKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRcdG8uYWRkKCBlLCB0IClcblx0XHRcdFx0XHR9IClcblx0XHRcdFx0fSApIDogbS5yZWplY3QoIG5ldyBFcnJvciggXCJzYW5kYm94IG5vdCBpbml0aWFsaXplZFwiICkgKVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlKCBcInJlbW92ZVJvb3RDbGFzc1wiLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUgPSB0aGlzLl9zaGFkb3dSb290Qm9keTtcblx0XHRcdFx0cmV0dXJuIHQgPSBBcnJheS5pc0FycmF5KCB0ICkgPyB0IDogW3RdLCB0aGlzLmluaXRpYWxpemVkID8gYS53cml0ZSggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dC5mb3JFYWNoKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRcdG8ucmVtb3ZlKCBlLCB0IClcblx0XHRcdFx0XHR9IClcblx0XHRcdFx0fSApIDogbS5yZWplY3QoIG5ldyBFcnJvciggXCJzYW5kYm94IG5vdCBpbml0aWFsaXplZFwiICkgKVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlKCBcImhhc1Jvb3RDbGFzc1wiLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIG8ucHJlc2VudCggdGhpcy5fc2hhZG93Um9vdEJvZHksIHQgKVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlKCBcImFkZFN0eWxlU2hlZXRcIiwgZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmFkZENzcyggJ0BpbXBvcnQgdXJsKFwiJyArIHQgKyAnXCIpOycsIGUgKS50aGVuKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZXR1cm4gZCggdCApXG5cdFx0XHRcdH0gKVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlKCBcInByZXBlbmRTdHlsZVNoZWV0XCIsIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSA9IHRoaXMuX3NoYWRvd1Jvb3Q7XG5cdFx0XHRcdHJldHVybiB0aGlzLmFkZFN0eWxlU2hlZXQoIHQsIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdHZhciBuID0gZS5maXJzdEVsZW1lbnRDaGlsZDtcblx0XHRcdFx0XHRyZXR1cm4gbiA/IGUuaW5zZXJ0QmVmb3JlKCB0LCBuICkgOiBlLmFwcGVuZENoaWxkKCB0IClcblx0XHRcdFx0fSApXG5cdFx0XHR9ICksIHQub3ZlcnJpZGUoIFwiYXBwZW5kU3R5bGVTaGVldFwiLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUgPSB0aGlzLl9zaGFkb3dSb290O1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5hZGRTdHlsZVNoZWV0KCB0LCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRyZXR1cm4gZS5hcHBlbmRDaGlsZCggdCApXG5cdFx0XHRcdH0gKVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlKCBcImFkZENzc1wiLCBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0dmFyIG47XG5cdFx0XHRcdHJldHVybiB0aGlzLmluaXRpYWxpemVkID8gZi5pbmxpbmVTdHlsZSgpID8gKChuID0gdGhpcy5jcmVhdGVFbGVtZW50KCBcInN0eWxlXCIgKSkudHlwZSA9IFwidGV4dC9jc3NcIiwgbi5hcHBlbmRDaGlsZCggdGhpcy50YXJnZXRHbG9iYWwuZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoIHQgKSApLCBhLndyaXRlKCBoKCBlLCBudWxsLCBuICkgKSkgOiBtLnJlc29sdmUoKSA6IG0ucmVqZWN0KCBuZXcgRXJyb3IoIFwic2FuZGJveCBub3QgaW5pdGlhbGl6ZWRcIiApIClcblx0XHRcdH0gKSwgdC5vdmVycmlkZSggXCJwcmVwZW5kQ3NzXCIsIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSA9IHRoaXMuX3NoYWRvd1Jvb3Q7XG5cdFx0XHRcdHJldHVybiB0aGlzLmFkZENzcyggdCwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0dmFyIG4gPSBlLmZpcnN0RWxlbWVudENoaWxkO1xuXHRcdFx0XHRcdHJldHVybiBuID8gZS5pbnNlcnRCZWZvcmUoIHQsIG4gKSA6IGUuYXBwZW5kQ2hpbGQoIHQgKVxuXHRcdFx0XHR9IClcblx0XHRcdH0gKSwgdC5vdmVycmlkZSggXCJhcHBlbmRDc3NcIiwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHZhciBlID0gdGhpcy5fc2hhZG93Um9vdDtcblx0XHRcdFx0cmV0dXJuIHRoaXMuYWRkQ3NzKCB0LCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRyZXR1cm4gZS5hcHBlbmRDaGlsZCggdCApXG5cdFx0XHRcdH0gKVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlKCBcIm1ha2VWaXNpYmxlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5zdHlsZVNlbGYoIHkgKVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlKCBcImluamVjdFdpZGdldEVsXCIsIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSA9IHRoaXM7XG5cdFx0XHRcdHJldHVybiB0aGlzLmluaXRpYWxpemVkID8gdGhpcy5fc2hhZG93Um9vdEJvZHkuZmlyc3RFbGVtZW50Q2hpbGQgPyBtLnJlamVjdCggbmV3IEVycm9yKCBcIndpZGdldCBhbHJlYWR5IGluamVjdGVkXCIgKSApIDogYS53cml0ZSggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0ZS5fc2hhZG93Um9vdEJvZHkuYXBwZW5kQ2hpbGQoIHQgKVxuXHRcdFx0XHR9ICkudGhlbiggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGUuX3VwZGF0ZUNhY2hlZERpbWVuc2lvbnMoKVxuXHRcdFx0XHR9ICkudGhlbiggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dmFyIHQgPSBwKCBlLl9kaWRSZXNpemUsIGcsIGUgKTtcblx0XHRcdFx0XHRuZXcgciggZS5fc2hhZG93Um9vdEJvZHksIHQgKVxuXHRcdFx0XHR9ICkgOiBtLnJlamVjdCggbmV3IEVycm9yKCBcInNhbmRib3ggbm90IGluaXRpYWxpemVkXCIgKSApXG5cdFx0XHR9ICksIHQub3ZlcnJpZGUoIFwibWF0Y2hIZWlnaHRUb0NvbnRlbnRcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtLnJlc29sdmUoKVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlKCBcIm1hdGNoV2lkdGhUb0NvbnRlbnRcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtLnJlc29sdmUoKVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlKCBcImluc2VydFwiLCBmdW5jdGlvbiggdCwgZSwgbiwgciApIHtcblx0XHRcdFx0dmFyIGkgPSB0aGlzLnRhcmdldEdsb2JhbC5kb2N1bWVudCwgbyA9IHRoaXMuX3NoYWRvd0hvc3QgPSBpLmNyZWF0ZUVsZW1lbnQoIGIgKSxcblx0XHRcdFx0XHR1ID0gdGhpcy5fc2hhZG93Um9vdCA9IG8uYXR0YWNoU2hhZG93KCB7IG1vZGU6IF8gfSApLFxuXHRcdFx0XHRcdGMgPSB0aGlzLl9zaGFkb3dSb290Qm9keSA9IGkuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApO1xuXHRcdFx0XHRyZXR1cm4gdi5mb3JJbiggZSB8fCB7fSwgZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRcdFx0by5zZXRBdHRyaWJ1dGUoIHQsIGUgKVxuXHRcdFx0XHR9ICksIG8uaWQgPSB0LCB1LmFwcGVuZENoaWxkKCBjICksIHMuZGVsZWdhdGUoIGMsIFwiY2xpY2tcIiwgXCJBXCIsIGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHRcdGUuaGFzQXR0cmlidXRlKCBcInRhcmdldFwiICkgfHwgZS5zZXRBdHRyaWJ1dGUoIFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIgKVxuXHRcdFx0XHR9ICksIG0uYWxsKCBbXG5cdFx0XHRcdFx0dGhpcy5zdHlsZVNlbGYoIHcgKSxcblx0XHRcdFx0XHR0aGlzLmFkZFJvb3RDbGFzcyggRSApLFxuXHRcdFx0XHRcdHRoaXMucHJlcGVuZENzcyggeCApLFxuXHRcdFx0XHRcdGEud3JpdGUoIHIuYmluZCggbnVsbCwgbyApIClcblx0XHRcdFx0XSApXG5cdFx0XHR9ICksIHQub3ZlcnJpZGUoIFwib25SZXNpemVcIiwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHRoaXMuX3Jlc2l6ZUhhbmRsZXJzLnB1c2goIHQgKVxuXHRcdFx0fSApLCB0LmFmdGVyKCBcImluaXRpYWxpemVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHRoaXMuX3NoYWRvd0hvc3QgPSB0aGlzLl9zaGFkb3dSb290ID0gdGhpcy5fc2hhZG93Um9vdEJvZHkgPSBudWxsLCB0aGlzLl93aWR0aCA9IHRoaXMuX2hlaWdodCA9IDAsIHRoaXMuX3Jlc2l6ZUhhbmRsZXJzID0gW11cblx0XHRcdH0gKSwgdC5hZnRlciggXCJzdHlsZVNlbGZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl91cGRhdGVDYWNoZWREaW1lbnNpb25zKClcblx0XHRcdH0gKVxuXHRcdH0gKVxuXHR9LCBmdW5jdGlvbiggdCwgZSApIHtcblx0XHR2YXIgbjtcblx0XHQobiA9IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0ZnVuY3Rpb24gciggdCwgZSApIHtcblx0XHRcdFx0aWYgKCB0LnJlc2l6ZWRBdHRhY2hlZCApIHtcblx0XHRcdFx0XHRpZiAoIHQucmVzaXplZEF0dGFjaGVkICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHZvaWQgdC5yZXNpemVkQXR0YWNoZWQuYWRkKCBlIClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dC5yZXNpemVkQXR0YWNoZWQgPSBuZXcgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHR2YXIgdCwgZTtcblx0XHRcdFx0XHRcdHRoaXMucSA9IFtdLCB0aGlzLmFkZCA9IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnEucHVzaCggdCApXG5cdFx0XHRcdFx0XHR9LCB0aGlzLmNhbGwgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0Zm9yICggdCA9IDAsIGUgPSB0aGlzLnEubGVuZ3RoOyB0IDwgZTsgdCArKyApIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnFbIHQgXS5jYWxsKClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIHQucmVzaXplZEF0dGFjaGVkLmFkZCggZSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHQucmVzaXplU2Vuc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApLCB0LnJlc2l6ZVNlbnNvci5jbGFzc05hbWUgPSBcInJlc2l6ZS1zZW5zb3JcIjtcblx0XHRcdFx0dmFyIG4gPSBcInBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMDsgdG9wOiAwOyByaWdodDogMDsgYm90dG9tOiAwOyBvdmVyZmxvdzogaGlkZGVuOyB6LWluZGV4OiAtMTsgdmlzaWJpbGl0eTogaGlkZGVuO1wiLFxuXHRcdFx0XHRcdHIgPSBcInBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMDsgdG9wOiAwOyB0cmFuc2l0aW9uOiAwcztcIjtcblx0XHRcdFx0dC5yZXNpemVTZW5zb3Iuc3R5bGUuY3NzVGV4dCA9IG4sIHQucmVzaXplU2Vuc29yLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwicmVzaXplLXNlbnNvci1leHBhbmRcIiBzdHlsZT1cIicgKyBuICsgJ1wiPjxkaXYgc3R5bGU9XCInICsgciArICdcIj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwicmVzaXplLXNlbnNvci1zaHJpbmtcIiBzdHlsZT1cIicgKyBuICsgJ1wiPjxkaXYgc3R5bGU9XCInICsgciArICcgd2lkdGg6IDIwMCU7IGhlaWdodDogMjAwJVwiPjwvZGl2PjwvZGl2PicsIHQuYXBwZW5kQ2hpbGQoIHQucmVzaXplU2Vuc29yICksIHtcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZml4ZWQ6IDEsXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFic29sdXRlOiAxXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9WyBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0XHRyZXR1cm4gdC5jdXJyZW50U3R5bGUgPyB0LmN1cnJlbnRTdHlsZVsgZSBdIDogd2luZG93LmdldENvbXB1dGVkU3R5bGUgPyB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSggdCwgbnVsbCApLmdldFByb3BlcnR5VmFsdWUoIGUgKSA6IHQuc3R5bGVbIGUgXVxuXHRcdFx0XHR9KCB0LCBcInBvc2l0aW9uXCIgKSBdIHx8ICh0LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiKTtcblx0XHRcdFx0dmFyIGksIG8sIHMgPSB0LnJlc2l6ZVNlbnNvci5jaGlsZE5vZGVzWyAwIF0sIGEgPSBzLmNoaWxkTm9kZXNbIDAgXSwgdSA9IHQucmVzaXplU2Vuc29yLmNoaWxkTm9kZXNbIDEgXSxcblx0XHRcdFx0XHRjID0gKHUuY2hpbGROb2Rlc1sgMCBdLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGEuc3R5bGUud2lkdGggPSBzLm9mZnNldFdpZHRoICsgMTAgKyBcInB4XCIsIGEuc3R5bGUuaGVpZ2h0ID0gcy5vZmZzZXRIZWlnaHQgKyAxMCArIFwicHhcIiwgcy5zY3JvbGxMZWZ0ID0gcy5zY3JvbGxXaWR0aCwgcy5zY3JvbGxUb3AgPSBzLnNjcm9sbEhlaWdodCwgdS5zY3JvbGxMZWZ0ID0gdS5zY3JvbGxXaWR0aCwgdS5zY3JvbGxUb3AgPSB1LnNjcm9sbEhlaWdodCwgaSA9IHQub2Zmc2V0V2lkdGgsIG8gPSB0Lm9mZnNldEhlaWdodFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRjKCk7XG5cdFx0XHRcdHZhciBkID0gZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0XHRcdFx0dC5hdHRhY2hFdmVudCA/IHQuYXR0YWNoRXZlbnQoIFwib25cIiArIGUsIG4gKSA6IHQuYWRkRXZlbnRMaXN0ZW5lciggZSwgbiApXG5cdFx0XHRcdH0sIGYgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR0Lm9mZnNldFdpZHRoID09IGkgJiYgdC5vZmZzZXRIZWlnaHQgPT0gbyB8fCB0LnJlc2l6ZWRBdHRhY2hlZCAmJiB0LnJlc2l6ZWRBdHRhY2hlZC5jYWxsKCksIGMoKVxuXHRcdFx0XHR9O1xuXHRcdFx0XHRkKCBzLCBcInNjcm9sbFwiLCBmICksIGQoIHUsIFwic2Nyb2xsXCIsIGYgKVxuXHRcdFx0fVxuXG5cdFx0XHR2YXIgaSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCggdCApLFxuXHRcdFx0XHRvID0gXCJbb2JqZWN0IEFycmF5XVwiID09PSBpIHx8IFwiW29iamVjdCBOb2RlTGlzdF1cIiA9PT0gaSB8fCBcIltvYmplY3QgSFRNTENvbGxlY3Rpb25dXCIgPT09IGkgfHwgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgalF1ZXJ5ICYmIHQgaW5zdGFuY2VvZiBqUXVlcnkgfHwgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgRWxlbWVudHMgJiYgdCBpbnN0YW5jZW9mIEVsZW1lbnRzO1xuXHRcdFx0aWYgKCBvICkge1xuXHRcdFx0XHRmb3IgKCB2YXIgcyA9IDAsIGEgPSB0Lmxlbmd0aDsgcyA8IGE7IHMgKysgKSB7XG5cdFx0XHRcdFx0ciggdFsgcyBdLCBlICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHIoIHQsIGUgKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuZGV0YWNoID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggbyApIHtcblx0XHRcdFx0XHRmb3IgKCB2YXIgZSA9IDAsIHIgPSB0Lmxlbmd0aDsgZSA8IHI7IGUgKysgKSB7XG5cdFx0XHRcdFx0XHRuLmRldGFjaCggdFsgZSBdICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG4uZGV0YWNoKCB0IClcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pLmRldGFjaCA9IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0dC5yZXNpemVTZW5zb3IgJiYgKHQucmVtb3ZlQ2hpbGQoIHQucmVzaXplU2Vuc29yICksIGRlbGV0ZSB0LnJlc2l6ZVNlbnNvciwgZGVsZXRlIHQucmVzaXplZEF0dGFjaGVkKVxuXHRcdH0sIHZvaWQgMCAhPT0gdCAmJiB2b2lkIDAgIT09IHQuZXhwb3J0cyA/IHQuZXhwb3J0cyA9IG4gOiB3aW5kb3cuUmVzaXplU2Vuc29yID0gblxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDMgKSwgaSA9IG4oIDAgKSwgbyA9IG4oIDEzICksIHMgPSBuKCAxNCApKCksIGEgPSBuKCA2MiApLCB1ID0gbiggNSApLCBjID0gXCJhLnR3aXR0ZXItZm9sbG93LWJ1dHRvblwiO1xuXHRcdHQuZXhwb3J0cyA9IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0cmV0dXJuIHMoIHQsIGMgKS5tYXAoIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRyZXR1cm4gYSggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0dmFyIGUgPSBvKCB0ICksIG4gPSB7XG5cdFx0XHRcdFx0XHRzY3JlZW5OYW1lOiByLnNjcmVlbk5hbWUoIHQuaHJlZiApLFxuXHRcdFx0XHRcdFx0c2hvd1NjcmVlbk5hbWU6IFwiZmFsc2VcIiAhPT0gdC5nZXRBdHRyaWJ1dGUoIFwiZGF0YS1zaG93LXNjcmVlbi1uYW1lXCIgKSxcblx0XHRcdFx0XHRcdHNob3dDb3VudDogXCJmYWxzZVwiICE9PSB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLXNob3ctY291bnRcIiApLFxuXHRcdFx0XHRcdFx0c2l6ZTogdC5nZXRBdHRyaWJ1dGUoIFwiZGF0YS1zaXplXCIgKSxcblx0XHRcdFx0XHRcdGNvdW50OiB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLWNvdW50XCIgKSxcblx0XHRcdFx0XHRcdHByZXZpZXc6IHQuZ2V0QXR0cmlidXRlKCBcImRhdGEtcHJldmlld1wiIClcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHJldHVybiBpLmZvckluKCBuLCBmdW5jdGlvbiggdCwgbiApIHtcblx0XHRcdFx0XHRcdHZhciByID0gZVsgdCBdO1xuXHRcdFx0XHRcdFx0ZVsgdCBdID0gdS5oYXNWYWx1ZSggciApID8gciA6IG5cblx0XHRcdFx0XHR9ICksIGUuc2NyZWVuTmFtZSA9IGUuc2NyZWVuTmFtZSB8fCBlLnNjcmVlbl9uYW1lLCBlXG5cdFx0XHRcdH0oIHQgKSwgdC5wYXJlbnROb2RlLCB0IClcblx0XHRcdH0gKVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAyICk7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHR2YXIgaSA9IG5ldyByO1xuXHRcdFx0cmV0dXJuIG4uZSggMyApLnRoZW4oIGZ1bmN0aW9uKCByICkge1xuXHRcdFx0XHR2YXIgbztcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRvID0gbiggODkgKSwgaS5yZXNvbHZlKCBuZXcgbyggdCwgZSApIClcblx0XHRcdFx0fSBjYXRjaCAoIHQgKSB7XG5cdFx0XHRcdFx0aS5yZWplY3QoIHQgKVxuXHRcdFx0XHR9XG5cdFx0XHR9LmJpbmQoIG51bGwsIG4gKSApLmNhdGNoKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0aS5yZWplY3QoIHQgKVxuXHRcdFx0fSApLCBpLnByb21pc2Vcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMTggKSwgaSA9IG4oIDEyOCApLCBvID0gbiggNTggKSwgcyA9IG4oIDMyICksIGEgPSBuKCAyICksIHUgPSBuKCA2ICksIGMgPSBuKCA3ICksIGQgPSBuKCAwICksXG5cdFx0XHRmID0geyBhbGxvd2Z1bGxzY3JlZW46IFwidHJ1ZVwiIH0sIGwgPSB7XG5cdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG5cdFx0XHRcdHZpc2liaWxpdHk6IFwiaGlkZGVuXCIsXG5cdFx0XHRcdHdpZHRoOiBcIjBweFwiLFxuXHRcdFx0XHRoZWlnaHQ6IFwiMHB4XCJcblx0XHRcdH0sIGggPSB7XG5cdFx0XHRcdHBvc2l0aW9uOiBcInN0YXRpY1wiLFxuXHRcdFx0XHR2aXNpYmlsaXR5OiBcInZpc2libGVcIlxuXHRcdFx0fSwgcCA9IHt9O1xuXHRcdGkoIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdFx0dmFyIHIgPSBwWyB0IF07XG5cdFx0XHRpZiAoIHIgKSB7XG5cdFx0XHRcdHJldHVybiBlID0gZSB8fCAxLCBuID0gbiB8fCAxLCByLnN0eWxlU2VsZigge1xuXHRcdFx0XHRcdHdpZHRoOiBlICsgXCJweFwiLFxuXHRcdFx0XHRcdGhlaWdodDogbiArIFwicHhcIlxuXHRcdFx0XHR9ICkudGhlbiggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0ci5kaWRSZXNpemUoKVxuXHRcdFx0XHR9IClcblx0XHRcdH1cblx0XHR9LCBmdW5jdGlvbiggdCApIHtcblx0XHRcdHZhciBlID0gcFsgdCBdO1xuXHRcdFx0aWYgKCBlICkge1xuXHRcdFx0XHRyZXR1cm4gZS5fcmVuZGVyZWQucmVzb2x2ZSgpXG5cdFx0XHR9XG5cdFx0fSwgZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHR2YXIgbiA9IHBbIHQgXTtcblx0XHRcdG4gJiYgZSAmJiBuLnNldElmcmFtZVZlcnNpb24oIGUgKVxuXHRcdH0gKSwgdC5leHBvcnRzID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHR0Lm92ZXJyaWRlUHJvcGVydHkoIFwiaWRcIiwge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLnNhbmRib3hFbCAmJiB0aGlzLnNhbmRib3hFbC5pZFxuXHRcdFx0XHR9XG5cdFx0XHR9ICksIHQub3ZlcnJpZGVQcm9wZXJ0eSggXCJpbml0aWFsaXplZFwiLCB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuICEhdGhpcy5pZnJhbWVFbFxuXHRcdFx0XHR9XG5cdFx0XHR9ICksIHQub3ZlcnJpZGVQcm9wZXJ0eSggXCJ3aWR0aFwiLCB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX3dpZHRoXG5cdFx0XHRcdH1cblx0XHRcdH0gKSwgdC5vdmVycmlkZVByb3BlcnR5KCBcImhlaWdodFwiLCB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX2hlaWdodFxuXHRcdFx0XHR9XG5cdFx0XHR9ICksIHQub3ZlcnJpZGVQcm9wZXJ0eSggXCJzYW5kYm94RWxcIiwge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmlmcmFtZUVsXG5cdFx0XHRcdH1cblx0XHRcdH0gKSwgdC5kZWZpbmVQcm9wZXJ0eSggXCJpZnJhbWVFbFwiLCB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX2lmcmFtZVxuXHRcdFx0XHR9XG5cdFx0XHR9ICksIHQuZGVmaW5lUHJvcGVydHkoIFwiaWZyYW1lVmVyc2lvblwiLCB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX2lmcmFtZVZlcnNpb25cblx0XHRcdFx0fVxuXHRcdFx0fSApLCB0LmRlZmluZSggXCJ1cGRhdGVDYWNoZWREaW1lbnNpb25zXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgdCA9IHRoaXM7XG5cdFx0XHRcdHJldHVybiB0aGlzLmluaXRpYWxpemVkID8gci5yZWFkKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR0Ll93aWR0aCA9IHQuc2FuZGJveEVsLm9mZnNldFdpZHRoLCB0Ll9oZWlnaHQgPSB0LnNhbmRib3hFbC5vZmZzZXRIZWlnaHRcblx0XHRcdFx0fSApIDogdS5yZXNvbHZlKClcblx0XHRcdH0gKSwgdC5kZWZpbmUoIFwic2V0VGl0bGVcIiwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHRoaXMuaWZyYW1lRWwudGl0bGUgPSB0XG5cdFx0XHR9ICksIHQuZGVmaW5lKCBcInNldFdhaXRUb1N3YXBVbnRpbFJlbmRlcmVkXCIsIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR0aGlzLl93YWl0VG9Td2FwVW50aWxSZW5kZXJlZCA9IHRcblx0XHRcdH0gKSwgdC5kZWZpbmUoIFwic2V0SWZyYW1lVmVyc2lvblwiLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dGhpcy5faWZyYW1lVmVyc2lvbiA9IHRcblx0XHRcdH0gKSwgdC5kZWZpbmUoIFwiaXNSZW5kZXJlZFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3JlbmRlcmVkLnByb21pc2Vcblx0XHRcdH0gKSwgdC5kZWZpbmUoIFwibWFrZVZpc2libGVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnN0eWxlU2VsZiggaCApXG5cdFx0XHR9ICksIHQuZGVmaW5lKCBcImRpZFJlc2l6ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHQgPSB0aGlzLCBlID0gdC5fcmVzaXplSGFuZGxlcnMubGVuZ3RoID4gMDtcblx0XHRcdFx0cmV0dXJuIHRoaXMudXBkYXRlQ2FjaGVkRGltZW5zaW9ucygpLnRoZW4oIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGUgJiYgdC5fcmVzaXplSGFuZGxlcnMuZm9yRWFjaCggZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRcdFx0XHRlKCB0IClcblx0XHRcdFx0XHR9IClcblx0XHRcdFx0fSApXG5cdFx0XHR9ICksIHQuZGVmaW5lKCBcImxvYWREb2N1bWVudFwiLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUgPSBuZXcgYTtcblx0XHRcdFx0cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZWQgPyB0aGlzLmlmcmFtZUVsLnNyYyA/IHUucmVqZWN0KCBuZXcgRXJyb3IoIFwid2lkZ2V0IGFscmVhZHkgbG9hZGVkXCIgKSApIDogKHRoaXMuaWZyYW1lRWwuYWRkRXZlbnRMaXN0ZW5lciggXCJsb2FkXCIsIGUucmVzb2x2ZSwgITEgKSwgdGhpcy5pZnJhbWVFbC5hZGRFdmVudExpc3RlbmVyKCBcImVycm9yXCIsIGUucmVqZWN0LCAhMSApLCB0aGlzLmlmcmFtZUVsLnNyYyA9IHQsIGUucHJvbWlzZSkgOiB1LnJlamVjdCggbmV3IEVycm9yKCBcInNhbmRib3ggbm90IGluaXRpYWxpemVkXCIgKSApXG5cdFx0XHR9ICksIHQuYWZ0ZXIoIFwiaW5pdGlhbGl6ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHQgPSBuZXcgYTtcblx0XHRcdFx0dGhpcy5faWZyYW1lID0gbnVsbCwgdGhpcy5faWZyYW1lVmVyc2lvbiA9IG51bGwsIHRoaXMuX3dpZHRoID0gdGhpcy5faGVpZ2h0ID0gMCwgdGhpcy5fcmVzaXplSGFuZGxlcnMgPSBbXSwgdGhpcy5fcmVuZGVyZWQgPSB0LCB0aGlzLl93YWl0VG9Td2FwVW50aWxSZW5kZXJlZCA9ICExXG5cdFx0XHR9ICksIHQub3ZlcnJpZGUoIFwiaW5zZXJ0XCIsIGZ1bmN0aW9uKCB0LCBlLCBuLCBpICkge1xuXHRcdFx0XHR2YXIgYSA9IHRoaXM7XG5cdFx0XHRcdHJldHVybiBlID0gZC5hdWcoIHsgaWQ6IHQgfSwgZiwgZSApLCBuID0gZC5hdWcoIHt9LCBsLCBuICksIHRoaXMuX2lmcmFtZSA9IHMoIGUsIG4gKSwgcFsgdCBdID0gdGhpcywgYS5fd2FpdFRvU3dhcFVudGlsUmVuZGVyZWQgfHwgdGhpcy5vblJlc2l6ZSggbyggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0YS5tYWtlVmlzaWJsZSgpXG5cdFx0XHRcdH0gKSApLCByLndyaXRlKCBjKCBpLCBudWxsLCB0aGlzLl9pZnJhbWUgKSApXG5cdFx0XHR9ICksIHQub3ZlcnJpZGUoIFwib25SZXNpemVcIiwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHRoaXMuX3Jlc2l6ZUhhbmRsZXJzLnB1c2goIHQgKVxuXHRcdFx0fSApLCB0LmFmdGVyKCBcInN0eWxlU2VsZlwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMudXBkYXRlQ2FjaGVkRGltZW5zaW9ucygpXG5cdFx0XHR9IClcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMSApLCBpID0gbiggMTI5ICksIG8gPSBuKCAxMzEgKSwgcyA9IG4oIDI1ICksIGEgPSBuKCA1ICksIHUgPSBuKCAxMzIgKTtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHRcdGZ1bmN0aW9uIGMoIHQsIGUgKSB7XG5cdFx0XHRcdHZhciBuID0gdSggdGhpcyApO1xuXHRcdFx0XHRzLnRyaWdnZXIoIHQsIHtcblx0XHRcdFx0XHR0YXJnZXQ6IG4sXG5cdFx0XHRcdFx0cmVnaW9uOiBlLFxuXHRcdFx0XHRcdHR5cGU6IHQsXG5cdFx0XHRcdFx0ZGF0YToge31cblx0XHRcdFx0fSApXG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIGQoIGUgKSB7XG5cdFx0XHRcdHZhciBuID0gdSggdGhpcyApLCByID0gbiAmJiBuLmlkLCBpID0gYS5hc0ludCggZS53aWR0aCApLCBvID0gYS5hc0ludCggZS5oZWlnaHQgKTtcblx0XHRcdFx0ciAmJiB2b2lkIDAgIT09IGkgJiYgdm9pZCAwICE9PSBvICYmIHQoIHIsIGksIG8gKVxuXHRcdFx0fVxuXG5cdFx0XHQobmV3IGkpLmF0dGFjaFJlY2VpdmVyKCBuZXcgby5SZWNlaXZlciggciwgXCJ0d3R0ci5idXR0b25cIiApICkuYmluZCggXCJ0d3R0ci5wcml2YXRlLnRyaWdnZXJcIiwgYyApLmJpbmQoIFwidHd0dHIucHJpdmF0ZS5yZXNpemVCdXR0b25cIiwgZCApLCAobmV3IGkpLmF0dGFjaFJlY2VpdmVyKCBuZXcgby5SZWNlaXZlciggciwgXCJ0d3R0ci5lbWJlZFwiICkgKS5iaW5kKCBcInR3dHRyLnByaXZhdGUuaW5pdGlhbGl6ZWRcIiwgZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHZhciBlID0gdSggdGhpcyApLCByID0gZSAmJiBlLmlkLCBpID0gdC5pZnJhbWVfdmVyc2lvbjtcblx0XHRcdFx0ciAmJiBpICYmIG4gJiYgbiggciwgaSApXG5cdFx0XHR9ICkuYmluZCggXCJ0d3R0ci5wcml2YXRlLnRyaWdnZXJcIiwgYyApLmJpbmQoIFwidHd0dHIucHJpdmF0ZS5yZW5kZXJlZFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHQgPSB1KCB0aGlzICksIG4gPSB0ICYmIHQuaWQ7XG5cdFx0XHRcdG4gJiYgZSAmJiBlKCBuIClcblx0XHRcdH0gKS5iaW5kKCBcInR3dHRyLnByaXZhdGUucmVzaXplXCIsIGQgKVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAzMyApLCBpID0gbiggMTMwICksIG8gPSBuKCAwICksIHMgPSBuKCA2ICksIGEgPSBuKCAyMyApLCB1ID0gXCIyLjBcIjtcblxuXHRcdGZ1bmN0aW9uIGMoIHQgKSB7XG5cdFx0XHR0aGlzLnJlZ2lzdHJ5ID0gdCB8fCB7fVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGQoIHQgKSB7XG5cdFx0XHR2YXIgZSwgbjtcblx0XHRcdHJldHVybiBlID0gby5pc1R5cGUoIFwic3RyaW5nXCIsIHQgKSwgbiA9IG8uaXNUeXBlKCBcIm51bWJlclwiLCB0ICksIGUgfHwgbiB8fCBudWxsID09PSB0XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZiggdCwgZSApIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGpzb25ycGM6IHUsXG5cdFx0XHRcdGlkOiBkKCB0ICkgPyB0IDogbnVsbCxcblx0XHRcdFx0ZXJyb3I6IGVcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjLnByb3RvdHlwZS5faW52b2tlID0gZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHR2YXIgbiwgciwgaTtcblx0XHRcdG4gPSB0aGlzLnJlZ2lzdHJ5WyB0Lm1ldGhvZCBdLCByID0gdC5wYXJhbXMgfHwgW10sIHIgPSBvLmlzVHlwZSggXCJhcnJheVwiLCByICkgPyByIDogW3JdO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aSA9IG4uYXBwbHkoIGUuc291cmNlIHx8IG51bGwsIHIgKVxuXHRcdFx0fSBjYXRjaCAoIHQgKSB7XG5cdFx0XHRcdGkgPSBzLnJlamVjdCggdC5tZXNzYWdlIClcblx0XHRcdH1cblx0XHRcdHJldHVybiBhLmlzUHJvbWlzZSggaSApID8gaSA6IHMucmVzb2x2ZSggaSApXG5cdFx0fSwgYy5wcm90b3R5cGUuX3Byb2Nlc3NSZXF1ZXN0ID0gZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHR2YXIgbiwgcjtcblx0XHRcdHJldHVybiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUsIG4sIHI7XG5cdFx0XHRcdHJldHVybiAhIW8uaXNPYmplY3QoIHQgKSAmJiAoZSA9IHQuanNvbnJwYyA9PT0gdSwgbiA9IG8uaXNUeXBlKCBcInN0cmluZ1wiLCB0Lm1ldGhvZCApLCByID0gIShcImlkXCIgaW4gdCkgfHwgZCggdC5pZCApLCBlICYmIG4gJiYgcilcblx0XHRcdH0oIHQgKSA/IChuID0gXCJwYXJhbXNcIiBpbiB0ICYmIChyID0gdC5wYXJhbXMsICFvLmlzT2JqZWN0KCByICkgfHwgby5pc1R5cGUoIFwiZnVuY3Rpb25cIiwgciApKSA/IHMucmVzb2x2ZSggZiggdC5pZCwgaS5JTlZBTElEX1BBUkFNUyApICkgOiB0aGlzLnJlZ2lzdHJ5WyB0Lm1ldGhvZCBdID8gdGhpcy5faW52b2tlKCB0LCB7IHNvdXJjZTogZSB9ICkudGhlbiggZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRcdHJldHVybiBuID0gdC5pZCwge1xuXHRcdFx0XHRcdGpzb25ycGM6IHUsXG5cdFx0XHRcdFx0aWQ6IG4sXG5cdFx0XHRcdFx0cmVzdWx0OiBlXG5cdFx0XHRcdH07XG5cdFx0XHRcdHZhciBuXG5cdFx0XHR9LCBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIGYoIHQuaWQsIGkuSU5URVJOQUxfRVJST1IgKVxuXHRcdFx0fSApIDogcy5yZXNvbHZlKCBmKCB0LmlkLCBpLk1FVEhPRF9OT1RfRk9VTkQgKSApLCBudWxsICE9IHQuaWQgPyBuIDogcy5yZXNvbHZlKCkpIDogcy5yZXNvbHZlKCBmKCB0LmlkLCBpLklOVkFMSURfUkVRVUVTVCApIClcblx0XHR9LCBjLnByb3RvdHlwZS5hdHRhY2hSZWNlaXZlciA9IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0cmV0dXJuIHQuYXR0YWNoVG8oIHRoaXMgKSwgdGhpc1xuXHRcdH0sIGMucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdHJldHVybiB0aGlzLnJlZ2lzdHJ5WyB0IF0gPSBlLCB0aGlzXG5cdFx0fSwgYy5wcm90b3R5cGUucmVjZWl2ZSA9IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0dmFyIG4sIGEsIHUsIGMgPSB0aGlzO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dSA9IHQsIHQgPSBvLmlzVHlwZSggXCJzdHJpbmdcIiwgdSApID8gci5wYXJzZSggdSApIDogdVxuXHRcdFx0fSBjYXRjaCAoIHQgKSB7XG5cdFx0XHRcdHJldHVybiBzLnJlc29sdmUoIGYoIG51bGwsIGkuUEFSU0VfRVJST1IgKSApXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZSA9IGUgfHwgbnVsbCwgYSA9ICgobiA9IG8uaXNUeXBlKCBcImFycmF5XCIsIHQgKSkgPyB0IDogW3RdKS5tYXAoIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRyZXR1cm4gYy5fcHJvY2Vzc1JlcXVlc3QoIHQsIGUgKVxuXHRcdFx0fSApLCBuID8gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiBzLmFsbCggdCApLnRoZW4oIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdHJldHVybiAodCA9IHQuZmlsdGVyKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHRcdHJldHVybiB2b2lkIDAgIT09IHRcblx0XHRcdFx0XHR9ICkpLmxlbmd0aCA/IHQgOiB2b2lkIDBcblx0XHRcdFx0fSApXG5cdFx0XHR9KCBhICkgOiBhWyAwIF1cblx0XHR9LCB0LmV4cG9ydHMgPSBjXG5cdH0sIGZ1bmN0aW9uKCB0ICkge1xuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdFBBUlNFX0VSUk9SOiB7XG5cdFx0XHRcdGNvZGU6IC0gMzI3MDAsXG5cdFx0XHRcdG1lc3NhZ2U6IFwiUGFyc2UgZXJyb3JcIlxuXHRcdFx0fSxcblx0XHRcdElOVkFMSURfUkVRVUVTVDoge1xuXHRcdFx0XHRjb2RlOiAtIDMyNjAwLFxuXHRcdFx0XHRtZXNzYWdlOiBcIkludmFsaWQgUmVxdWVzdFwiXG5cdFx0XHR9LFxuXHRcdFx0SU5WQUxJRF9QQVJBTVM6IHtcblx0XHRcdFx0Y29kZTogLSAzMjYwMixcblx0XHRcdFx0bWVzc2FnZTogXCJJbnZhbGlkIHBhcmFtc1wiXG5cdFx0XHR9LFxuXHRcdFx0TUVUSE9EX05PVF9GT1VORDoge1xuXHRcdFx0XHRjb2RlOiAtIDMyNjAxLFxuXHRcdFx0XHRtZXNzYWdlOiBcIk1ldGhvZCBub3QgZm91bmRcIlxuXHRcdFx0fSxcblx0XHRcdElOVEVSTkFMX0VSUk9SOiB7XG5cdFx0XHRcdGNvZGU6IC0gMzI2MDMsXG5cdFx0XHRcdG1lc3NhZ2U6IFwiSW50ZXJuYWwgZXJyb3JcIlxuXHRcdFx0fVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCA4ICksIGkgPSBuKCAxICksIG8gPSBuKCAzMyApLCBzID0gbiggMiApLCBhID0gbiggMjIgKSwgdSA9IG4oIDAgKSwgYyA9IG4oIDMgKSwgZCA9IG4oIDcgKSxcblx0XHRcdGYgPSBhLmllOSgpO1xuXG5cdFx0ZnVuY3Rpb24gbCggdCwgZSwgbiApIHtcblx0XHRcdHZhciByO1xuXHRcdFx0dCAmJiB0LnBvc3RNZXNzYWdlICYmIChmID8gciA9IChuIHx8IFwiXCIpICsgby5zdHJpbmdpZnkoIGUgKSA6IG4gPyAociA9IHt9KVsgbiBdID0gZSA6IHIgPSBlLCB0LnBvc3RNZXNzYWdlKCByLCBcIipcIiApKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGgoIHQgKSB7XG5cdFx0XHRyZXR1cm4gdS5pc1R5cGUoIFwic3RyaW5nXCIsIHQgKSA/IHQgOiBcIkpTT05SUENcIlxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHAoIHQsIGUgKSB7XG5cdFx0XHRyZXR1cm4gZSA/IHUuaXNUeXBlKCBcInN0cmluZ1wiLCB0ICkgJiYgMCA9PT0gdC5pbmRleE9mKCBlICkgPyB0LnN1YnN0cmluZyggZS5sZW5ndGggKSA6IHQgJiYgdFsgZSBdID8gdFsgZSBdIDogdm9pZCAwIDogdFxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG0oIHQsIGUgKSB7XG5cdFx0XHR2YXIgbiA9IHQuZG9jdW1lbnQ7XG5cdFx0XHR0aGlzLmZpbHRlciA9IGgoIGUgKSwgdGhpcy5zZXJ2ZXIgPSBudWxsLCB0aGlzLmlzVHdpdHRlckZyYW1lID0gYy5pc1R3aXR0ZXJVUkwoIG4ubG9jYXRpb24uaHJlZiApLCB0LmFkZEV2ZW50TGlzdGVuZXIoIFwibWVzc2FnZVwiLCBkKCB0aGlzLl9vbk1lc3NhZ2UsIHRoaXMgKSwgITEgKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHYoIHQsIGUgKSB7XG5cdFx0XHR0aGlzLnBlbmRpbmcgPSB7fSwgdGhpcy50YXJnZXQgPSB0LCB0aGlzLmlzVHdpdHRlckhvc3QgPSBjLmlzVHdpdHRlclVSTCggci5ocmVmICksIHRoaXMuZmlsdGVyID0gaCggZSApLCBpLmFkZEV2ZW50TGlzdGVuZXIoIFwibWVzc2FnZVwiLCBkKCB0aGlzLl9vbk1lc3NhZ2UsIHRoaXMgKSwgITEgKVxuXHRcdH1cblxuXHRcdHUuYXVnKCBtLnByb3RvdHlwZSwge1xuXHRcdFx0X29uTWVzc2FnZTogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHZhciBlLCBuID0gdGhpcztcblx0XHRcdFx0dGhpcy5zZXJ2ZXIgJiYgKHRoaXMuaXNUd2l0dGVyRnJhbWUgJiYgIWMuaXNUd2l0dGVyVVJMKCB0Lm9yaWdpbiApIHx8IChlID0gcCggdC5kYXRhLCB0aGlzLmZpbHRlciApKSAmJiB0aGlzLnNlcnZlci5yZWNlaXZlKCBlLCB0LnNvdXJjZSApLnRoZW4oIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0XHRcdGUgJiYgbCggdC5zb3VyY2UsIGUsIG4uZmlsdGVyIClcblx0XHRcdFx0fSApKVxuXHRcdFx0fSxcblx0XHRcdGF0dGFjaFRvOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dGhpcy5zZXJ2ZXIgPSB0XG5cdFx0XHR9LFxuXHRcdFx0ZGV0YWNoOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0dGhpcy5zZXJ2ZXIgPSBudWxsXG5cdFx0XHR9XG5cdFx0fSApLCB1LmF1Zyggdi5wcm90b3R5cGUsIHtcblx0XHRcdF9wcm9jZXNzUmVzcG9uc2U6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZSA9IHRoaXMucGVuZGluZ1sgdC5pZCBdO1xuXHRcdFx0XHRlICYmIChlLnJlc29sdmUoIHQgKSwgZGVsZXRlIHRoaXMucGVuZGluZ1sgdC5pZCBdKVxuXHRcdFx0fSxcblx0XHRcdF9vbk1lc3NhZ2U6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHR2YXIgZTtcblx0XHRcdFx0aWYgKCAoIXRoaXMuaXNUd2l0dGVySG9zdCB8fCBjLmlzVHdpdHRlclVSTCggdC5vcmlnaW4gKSkgJiYgKGUgPSBwKCB0LmRhdGEsIHRoaXMuZmlsdGVyICkpICkge1xuXHRcdFx0XHRcdGlmICggdS5pc1R5cGUoIFwic3RyaW5nXCIsIGUgKSApIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdGUgPSBvLnBhcnNlKCBlIClcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKCB0ICkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KGUgPSB1LmlzVHlwZSggXCJhcnJheVwiLCBlICkgPyBlIDogW2VdKS5mb3JFYWNoKCBkKCB0aGlzLl9wcm9jZXNzUmVzcG9uc2UsIHRoaXMgKSApXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRzZW5kOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0dmFyIGUgPSBuZXcgcztcblx0XHRcdFx0cmV0dXJuIHQuaWQgPyB0aGlzLnBlbmRpbmdbIHQuaWQgXSA9IGUgOiBlLnJlc29sdmUoKSwgbCggdGhpcy50YXJnZXQsIHQsIHRoaXMuZmlsdGVyICksIGUucHJvbWlzZVxuXHRcdFx0fVxuXHRcdH0gKSwgdC5leHBvcnRzID0ge1xuXHRcdFx0UmVjZWl2ZXI6IG0sXG5cdFx0XHREaXNwYXRjaGVyOiB2LFxuXHRcdFx0X3N0cmluZ2lmeVBheWxvYWQ6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRyZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgKGYgPSAhIXQpLCBmXG5cdFx0XHR9XG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDQgKTtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdGZvciAoIHZhciBlLCBuID0gci5nZXRFbGVtZW50c0J5VGFnTmFtZSggXCJpZnJhbWVcIiApLCBpID0gMDsgblsgaSBdOyBpICsrICkge1xuXHRcdFx0XHRpZiAoIChlID0gblsgaSBdKS5jb250ZW50V2luZG93ID09PSB0ICkge1xuXHRcdFx0XHRcdHJldHVybiBlXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggNSApLCBpID0gbiggMCApLCBvID0gbiggMyApLCBzID0gbiggMTMgKSwgYSA9IG4oIDE0ICkoKSwgdSA9IG4oIDYzICksIGMgPSBcImEudHdpdHRlci1tb21lbnRcIjtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdHJldHVybiBhKCB0LCBjICkubWFwKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIHUoIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdHZhciBlID0gcyggdCApLCBuID0ge1xuXHRcdFx0XHRcdFx0bW9tZW50SWQ6IG8ubW9tZW50SWQoIHQuaHJlZiApLFxuXHRcdFx0XHRcdFx0Y2hyb21lOiB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLWNocm9tZVwiICksXG5cdFx0XHRcdFx0XHRsaW1pdDogdC5nZXRBdHRyaWJ1dGUoIFwiZGF0YS1saW1pdFwiIClcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHJldHVybiBpLmZvckluKCBuLCBmdW5jdGlvbiggdCwgbiApIHtcblx0XHRcdFx0XHRcdHZhciBpID0gZVsgdCBdO1xuXHRcdFx0XHRcdFx0ZVsgdCBdID0gci5oYXNWYWx1ZSggaSApID8gaSA6IG5cblx0XHRcdFx0XHR9ICksIGVcblx0XHRcdFx0fSggdCApLCB0LnBhcmVudE5vZGUsIHQgKVxuXHRcdFx0fSApXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDIgKTtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdHZhciBpID0gbmV3IHI7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIFtuLmUoIDAgKSwgbi5lKCA0ICldICkudGhlbiggZnVuY3Rpb24oIHIgKSB7XG5cdFx0XHRcdHZhciBvO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdG8gPSBuKCA5MCApLCBpLnJlc29sdmUoIG5ldyBvKCB0LCBlICkgKVxuXHRcdFx0XHR9IGNhdGNoICggdCApIHtcblx0XHRcdFx0XHRpLnJlamVjdCggdCApXG5cdFx0XHRcdH1cblx0XHRcdH0uYmluZCggbnVsbCwgbiApICkuY2F0Y2goIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRpLnJlamVjdCggdCApXG5cdFx0XHR9ICksIGkucHJvbWlzZVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAwICksIGkgPSBuKCAxMyApLCBvID0gbiggMTQgKSgpLCBzID0gbiggNjQgKSwgYSA9IFwiYS5wZXJpc2NvcGUtb24tYWlyXCIsXG5cdFx0XHR1ID0gL15odHRwcz86XFwvXFwvKD86d3d3XFwuKT8oPzpwZXJpc2NvcGV8cHNjcClcXC50dlxcL0A/KFthLXpBLVowLTlfXSspXFwvPyQvaTtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdHJldHVybiBvKCB0LCBhICkubWFwKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIHMoIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdHZhciBlID0gaSggdCApLCBuID0gdC5nZXRBdHRyaWJ1dGUoIFwiaHJlZlwiICksIG8gPSB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLXNpemVcIiApLFxuXHRcdFx0XHRcdFx0cyA9IHUuZXhlYyggbiApWyAxIF07XG5cdFx0XHRcdFx0cmV0dXJuIHIuYXVnKCBlLCB7XG5cdFx0XHRcdFx0XHR1c2VybmFtZTogcyxcblx0XHRcdFx0XHRcdHNpemU6IG9cblx0XHRcdFx0XHR9IClcblx0XHRcdFx0fSggdCApLCB0LnBhcmVudE5vZGUsIHQgKVxuXHRcdFx0fSApXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDIgKTtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdHZhciBpID0gbmV3IHI7XG5cdFx0XHRyZXR1cm4gbi5lKCA1ICkudGhlbiggZnVuY3Rpb24oIHIgKSB7XG5cdFx0XHRcdHZhciBvO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdG8gPSBuKCA5MSApLCBpLnJlc29sdmUoIG5ldyBvKCB0LCBlICkgKVxuXHRcdFx0XHR9IGNhdGNoICggdCApIHtcblx0XHRcdFx0XHRpLnJlamVjdCggdCApXG5cdFx0XHRcdH1cblx0XHRcdH0uYmluZCggbnVsbCwgbiApICkuY2F0Y2goIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRpLnJlamVjdCggdCApXG5cdFx0XHR9ICksIGkucHJvbWlzZVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCA1ICksIGkgPSBuKCAwICksIG8gPSBuKCA2NSApLCBzID0gbiggMTMgKSwgYSA9IG4oIDE0ICkoKSwgdSA9IG4oIDY2ICksIGMgPSBuKCAzICksIGQgPSBuKCAxMiApLFxuXHRcdFx0ZiA9IFwiYS50d2l0dGVyLXRpbWVsaW5lLGRpdi50d2l0dGVyLXRpbWVsaW5lLGEudHdpdHRlci1ncmlkXCIsXG5cdFx0XHRsID0gXCJFbWJlZGRlZCBTZWFyY2ggdGltZWxpbmVzIGhhdmUgYmVlbiBkZXByZWNhdGVkLiBTZWUgaHR0cHM6Ly90d2l0dGVyY29tbXVuaXR5LmNvbS90L2RlcHJlY2F0aW5nLXdpZGdldC1zZXR0aW5ncy8xMDIyOTUuXCIsXG5cdFx0XHRoID0gXCJZb3UgbWF5IGhhdmUgYmVlbiBhZmZlY3RlZCBieSBhbiB1cGRhdGUgdG8gc2V0dGluZ3MgaW4gZW1iZWRkZWQgdGltZWxpbmVzLiBTZWUgaHR0cHM6Ly90d2l0dGVyY29tbXVuaXR5LmNvbS90L2RlcHJlY2F0aW5nLXdpZGdldC1zZXR0aW5ncy8xMDIyOTUuXCIsXG5cdFx0XHRwID0gXCJFbWJlZGRlZCBncmlkcyBoYXZlIGJlZW4gZGVwcmVjYXRlZCBhbmQgd2lsbCBub3cgcmVuZGVyIGFzIHRpbWVsaW5lcy4gUGxlYXNlIHVwZGF0ZSB5b3VyIGVtYmVkIGNvZGUgdG8gdXNlIHRoZSB0d2l0dGVyLXRpbWVsaW5lIGNsYXNzLiBNb3JlIGluZm86IGh0dHBzOi8vdHdpdHRlcmNvbW11bml0eS5jb20vdC91cGRhdGUtb24tdGhlLWVtYmVkZGVkLWdyaWQtZGlzcGxheS10eXBlLzExOTU2NC5cIjtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdHJldHVybiBhKCB0LCBmICkubWFwKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIHUoIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRcdHZhciBlID0gcyggdCApLCBuID0gdC5nZXRBdHRyaWJ1dGUoIFwiZGF0YS1zaG93LXJlcGxpZXNcIiApLCBhID0ge1xuXHRcdFx0XHRcdFx0aXNQcmVjb25maWd1cmVkOiAhIXQuZ2V0QXR0cmlidXRlKCBcImRhdGEtd2lkZ2V0LWlkXCIgKSxcblx0XHRcdFx0XHRcdGNocm9tZTogdC5nZXRBdHRyaWJ1dGUoIFwiZGF0YS1jaHJvbWVcIiApLFxuXHRcdFx0XHRcdFx0dHdlZXRMaW1pdDogdC5nZXRBdHRyaWJ1dGUoIFwiZGF0YS10d2VldC1saW1pdFwiICkgfHwgdC5nZXRBdHRyaWJ1dGUoIFwiZGF0YS1saW1pdFwiICksXG5cdFx0XHRcdFx0XHRhcmlhTGl2ZTogdC5nZXRBdHRyaWJ1dGUoIFwiZGF0YS1hcmlhLXBvbGl0ZVwiICksXG5cdFx0XHRcdFx0XHR0aGVtZTogdC5nZXRBdHRyaWJ1dGUoIFwiZGF0YS10aGVtZVwiICksXG5cdFx0XHRcdFx0XHRib3JkZXJDb2xvcjogdC5nZXRBdHRyaWJ1dGUoIFwiZGF0YS1ib3JkZXItY29sb3JcIiApLFxuXHRcdFx0XHRcdFx0c2hvd1JlcGxpZXM6IG4gPyByLmFzQm9vbGVhbiggbiApIDogbnVsbCxcblx0XHRcdFx0XHRcdHByb2ZpbGVTY3JlZW5OYW1lOiB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLXNjcmVlbi1uYW1lXCIgKSxcblx0XHRcdFx0XHRcdHByb2ZpbGVVc2VySWQ6IHQuZ2V0QXR0cmlidXRlKCBcImRhdGEtdXNlci1pZFwiICksXG5cdFx0XHRcdFx0XHRmYXZvcml0ZXNTY3JlZW5OYW1lOiB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLWZhdm9yaXRlcy1zY3JlZW4tbmFtZVwiICksXG5cdFx0XHRcdFx0XHRmYXZvcml0ZXNVc2VySWQ6IHQuZ2V0QXR0cmlidXRlKCBcImRhdGEtZmF2b3JpdGVzLXVzZXItaWRcIiApLFxuXHRcdFx0XHRcdFx0bGlrZXNTY3JlZW5OYW1lOiB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLWxpa2VzLXNjcmVlbi1uYW1lXCIgKSxcblx0XHRcdFx0XHRcdGxpa2VzVXNlcklkOiB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLWxpa2VzLXVzZXItaWRcIiApLFxuXHRcdFx0XHRcdFx0bGlzdE93bmVyU2NyZWVuTmFtZTogdC5nZXRBdHRyaWJ1dGUoIFwiZGF0YS1saXN0LW93bmVyLXNjcmVlbi1uYW1lXCIgKSxcblx0XHRcdFx0XHRcdGxpc3RPd25lclVzZXJJZDogdC5nZXRBdHRyaWJ1dGUoIFwiZGF0YS1saXN0LW93bmVyLWlkXCIgKSxcblx0XHRcdFx0XHRcdGxpc3RJZDogdC5nZXRBdHRyaWJ1dGUoIFwiZGF0YS1saXN0LWlkXCIgKSxcblx0XHRcdFx0XHRcdGxpc3RTbHVnOiB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLWxpc3Qtc2x1Z1wiICksXG5cdFx0XHRcdFx0XHRjdXN0b21UaW1lbGluZUlkOiB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLWN1c3RvbS10aW1lbGluZS1pZFwiICksXG5cdFx0XHRcdFx0XHRzdGF0aWNDb250ZW50OiB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLXN0YXRpYy1jb250ZW50XCIgKSxcblx0XHRcdFx0XHRcdHVybDogdC5ocmVmXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRyZXR1cm4gYS5pc1ByZWNvbmZpZ3VyZWQgJiYgKGMuaXNTZWFyY2hVcmwoIGEudXJsICkgPyBkLnB1YmxpY0Vycm9yKCBsLCB0ICkgOiBkLnB1YmxpY0xvZyggaCwgdCApKSwgXCJ0d2l0dGVyLWdyaWRcIiA9PT0gdC5jbGFzc05hbWUgJiYgZC5wdWJsaWNMb2coIHAsIHQgKSwgKGEgPSBpLmF1ZyggYSwgZSApKS5kYXRhU291cmNlID0gbyggYSApLCBhLmlkID0gYS5kYXRhU291cmNlICYmIGEuZGF0YVNvdXJjZS5pZCwgYVxuXHRcdFx0XHR9KCB0ICksIHQucGFyZW50Tm9kZSwgdCApXG5cdFx0XHR9IClcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMjggKTtcblx0XHR0LmV4cG9ydHMgPSByLmJ1aWxkKCBbbiggMjkgKSwgbiggMTQxICldIClcblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAwICksIGkgPSBuKCAxNDAgKTtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdHJldHVybiBcImVuXCIgPT09IHQgfHwgci5jb250YWlucyggaSwgdCApXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSApIHtcblx0XHR0LmV4cG9ydHMgPSBbXG5cdFx0XHRcImhpXCIsXG5cdFx0XHRcInpoLWNuXCIsXG5cdFx0XHRcImZyXCIsXG5cdFx0XHRcInpoLXR3XCIsXG5cdFx0XHRcIm1zYVwiLFxuXHRcdFx0XCJmaWxcIixcblx0XHRcdFwiZmlcIixcblx0XHRcdFwic3ZcIixcblx0XHRcdFwicGxcIixcblx0XHRcdFwiamFcIixcblx0XHRcdFwia29cIixcblx0XHRcdFwiZGVcIixcblx0XHRcdFwiaXRcIixcblx0XHRcdFwicHRcIixcblx0XHRcdFwiZXNcIixcblx0XHRcdFwicnVcIixcblx0XHRcdFwiaWRcIixcblx0XHRcdFwidHJcIixcblx0XHRcdFwiZGFcIixcblx0XHRcdFwibm9cIixcblx0XHRcdFwibmxcIixcblx0XHRcdFwiaHVcIixcblx0XHRcdFwiZmFcIixcblx0XHRcdFwiYXJcIixcblx0XHRcdFwidXJcIixcblx0XHRcdFwiaGVcIixcblx0XHRcdFwidGhcIixcblx0XHRcdFwiY3NcIixcblx0XHRcdFwidWtcIixcblx0XHRcdFwidmlcIixcblx0XHRcdFwicm9cIixcblx0XHRcdFwiYm5cIixcblx0XHRcdFwiZWxcIixcblx0XHRcdFwiZW4tZ2JcIixcblx0XHRcdFwiZ3VcIixcblx0XHRcdFwia25cIixcblx0XHRcdFwibXJcIixcblx0XHRcdFwidGFcIixcblx0XHRcdFwiYmdcIixcblx0XHRcdFwiY2FcIixcblx0XHRcdFwiaHJcIixcblx0XHRcdFwic3JcIixcblx0XHRcdFwic2tcIlxuXHRcdF1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAzICksIGkgPSBuKCAwICksIG8gPSBuKCAxOSApLCBzID0gXCJjb2xsZWN0aW9uOlwiO1xuXG5cdFx0ZnVuY3Rpb24gYSggdCwgZSApIHtcblx0XHRcdHJldHVybiByLmNvbGxlY3Rpb25JZCggdCApIHx8IGVcblx0XHR9XG5cblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdHQucGFyYW1zKCB7XG5cdFx0XHRcdGlkOiB7fSxcblx0XHRcdFx0dXJsOiB7fVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlUHJvcGVydHkoIFwiaWRcIiwge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciB0ID0gYSggdGhpcy5wYXJhbXMudXJsLCB0aGlzLnBhcmFtcy5pZCApO1xuXHRcdFx0XHRcdHJldHVybiBzICsgdFxuXHRcdFx0XHR9XG5cdFx0XHR9ICksIHQub3ZlcnJpZGVQcm9wZXJ0eSggXCJlbmRwb2ludFwiLCB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG8udGltZWxpbmUoIFtcImNvbGxlY3Rpb25cIl0gKVxuXHRcdFx0XHR9XG5cdFx0XHR9ICksIHQuYXJvdW5kKCBcInF1ZXJ5UGFyYW1zXCIsIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRyZXR1cm4gaS5hdWcoIHQoKSwgeyBjb2xsZWN0aW9uX2lkOiBhKCB0aGlzLnBhcmFtcy51cmwsIHRoaXMucGFyYW1zLmlkICkgfSApXG5cdFx0XHR9ICksIHQuYmVmb3JlKCBcImluaXRpYWxpemVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggIWEoIHRoaXMucGFyYW1zLnVybCwgdGhpcy5wYXJhbXMuaWQgKSApIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwib25lIG9mIHVybCBvciBpZCBpcyByZXF1aXJlZFwiIClcblx0XHRcdFx0fVxuXHRcdFx0fSApXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDI4ICk7XG5cdFx0dC5leHBvcnRzID0gci5idWlsZCggW24oIDI5ICksIG4oIDE0MyApXSApXG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMyApLCBpID0gbiggMCApLCBvID0gbiggMTkgKSwgcyA9IFwiZXZlbnQ6XCI7XG5cblx0XHRmdW5jdGlvbiBhKCB0LCBlICkge1xuXHRcdFx0cmV0dXJuIHIuZXZlbnRJZCggdCApIHx8IGVcblx0XHR9XG5cblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdHQucGFyYW1zKCB7XG5cdFx0XHRcdGlkOiB7fSxcblx0XHRcdFx0dXJsOiB7fVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlUHJvcGVydHkoIFwiaWRcIiwge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciB0ID0gYSggdGhpcy5wYXJhbXMudXJsLCB0aGlzLnBhcmFtcy5pZCApO1xuXHRcdFx0XHRcdHJldHVybiBzICsgdFxuXHRcdFx0XHR9XG5cdFx0XHR9ICksIHQub3ZlcnJpZGVQcm9wZXJ0eSggXCJlbmRwb2ludFwiLCB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG8udGltZWxpbmUoIFtcImV2ZW50XCJdIClcblx0XHRcdFx0fVxuXHRcdFx0fSApLCB0LmFyb3VuZCggXCJxdWVyeVBhcmFtc1wiLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIGkuYXVnKCB0KCksIHsgZXZlbnRfaWQ6IGEoIHRoaXMucGFyYW1zLnVybCwgdGhpcy5wYXJhbXMuaWQgKSB9IClcblx0XHRcdH0gKSwgdC5iZWZvcmUoIFwiaW5pdGlhbGl6ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCAhYSggdGhpcy5wYXJhbXMudXJsLCB0aGlzLnBhcmFtcy5pZCApICkge1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJvbmUgb2YgdXJsIG9yIGlkIGlzIHJlcXVpcmVkXCIgKVxuXHRcdFx0XHR9XG5cdFx0XHR9IClcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMjggKTtcblx0XHR0LmV4cG9ydHMgPSByLmJ1aWxkKCBbbiggMjkgKSwgbiggMTQ1ICldIClcblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAzICksIGkgPSBuKCAwICksIG8gPSBuKCAxOSApLCBzID0gXCJsaWtlczpcIjtcblxuXHRcdGZ1bmN0aW9uIGEoIHQgKSB7XG5cdFx0XHRyZXR1cm4gci5saWtlc1NjcmVlbk5hbWUoIHQudXJsICkgfHwgdC5zY3JlZW5OYW1lXG5cdFx0fVxuXG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHR0LnBhcmFtcygge1xuXHRcdFx0XHRzY3JlZW5OYW1lOiB7fSxcblx0XHRcdFx0dXNlcklkOiB7fSxcblx0XHRcdFx0dXJsOiB7fVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlUHJvcGVydHkoIFwiaWRcIiwge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciB0ID0gYSggdGhpcy5wYXJhbXMgKSB8fCB0aGlzLnBhcmFtcy51c2VySWQ7XG5cdFx0XHRcdFx0cmV0dXJuIHMgKyB0XG5cdFx0XHRcdH1cblx0XHRcdH0gKSwgdC5vdmVycmlkZVByb3BlcnR5KCBcImVuZHBvaW50XCIsIHtcblx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZXR1cm4gby50aW1lbGluZSggW1wibGlrZXNcIl0gKVxuXHRcdFx0XHR9XG5cdFx0XHR9ICksIHQuZGVmaW5lKCBcIl9nZXRMaWtlc1F1ZXJ5UGFyYW1cIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciB0ID0gYSggdGhpcy5wYXJhbXMgKTtcblx0XHRcdFx0cmV0dXJuIHQgPyB7IHNjcmVlbl9uYW1lOiB0IH0gOiB7IHVzZXJfaWQ6IHRoaXMucGFyYW1zLnVzZXJJZCB9XG5cdFx0XHR9ICksIHQuYXJvdW5kKCBcInF1ZXJ5UGFyYW1zXCIsIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRyZXR1cm4gaS5hdWcoIHQoKSwgdGhpcy5fZ2V0TGlrZXNRdWVyeVBhcmFtKCkgKVxuXHRcdFx0fSApLCB0LmJlZm9yZSggXCJpbml0aWFsaXplXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoICFhKCB0aGlzLnBhcmFtcyApICYmICF0aGlzLnBhcmFtcy51c2VySWQgKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcInNjcmVlbiBuYW1lIG9yIHVzZXIgaWQgaXMgcmVxdWlyZWRcIiApXG5cdFx0XHRcdH1cblx0XHRcdH0gKVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAyOCApO1xuXHRcdHQuZXhwb3J0cyA9IHIuYnVpbGQoIFtuKCAyOSApLCBuKCAxNDcgKV0gKVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDMgKSwgaSA9IG4oIDAgKSwgbyA9IG4oIDE5ICksIHMgPSBcImxpc3Q6XCI7XG5cblx0XHRmdW5jdGlvbiBhKCB0ICkge1xuXHRcdFx0dmFyIGUgPSByLmxpc3RTY3JlZW5OYW1lQW5kU2x1ZyggdC51cmwgKSB8fCB0O1xuXHRcdFx0cmV0dXJuIGkuY29tcGFjdCgge1xuXHRcdFx0XHRzY3JlZW5fbmFtZTogZS5vd25lclNjcmVlbk5hbWUsXG5cdFx0XHRcdHVzZXJfaWQ6IGUub3duZXJVc2VySWQsXG5cdFx0XHRcdGxpc3Rfc2x1ZzogZS5zbHVnXG5cdFx0XHR9IClcblx0XHR9XG5cblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdHQucGFyYW1zKCB7XG5cdFx0XHRcdGlkOiB7fSxcblx0XHRcdFx0b3duZXJTY3JlZW5OYW1lOiB7fSxcblx0XHRcdFx0b3duZXJVc2VySWQ6IHt9LFxuXHRcdFx0XHRzbHVnOiB7fSxcblx0XHRcdFx0dXJsOiB7fVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlUHJvcGVydHkoIFwiaWRcIiwge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciB0LCBlLCBuO1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLnBhcmFtcy5pZCA/IHMgKyB0aGlzLnBhcmFtcy5pZCA6IChlID0gKHQgPSBhKCB0aGlzLnBhcmFtcyApKSAmJiB0Lmxpc3Rfc2x1Zy5yZXBsYWNlKCAvLS9nLCBcIl9cIiApLCBuID0gdCAmJiAodC5zY3JlZW5fbmFtZSB8fCB0LnVzZXJfaWQpLCBzICsgKG4gKyBcIjpcIikgKyBlKVxuXHRcdFx0XHR9XG5cdFx0XHR9ICksIHQub3ZlcnJpZGVQcm9wZXJ0eSggXCJlbmRwb2ludFwiLCB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG8udGltZWxpbmUoIFtcImxpc3RcIl0gKVxuXHRcdFx0XHR9XG5cdFx0XHR9ICksIHQuZGVmaW5lKCBcIl9nZXRMaXN0UXVlcnlQYXJhbVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMucGFyYW1zLmlkID8geyBsaXN0X2lkOiB0aGlzLnBhcmFtcy5pZCB9IDogYSggdGhpcy5wYXJhbXMgKVxuXHRcdFx0fSApLCB0LmFyb3VuZCggXCJxdWVyeVBhcmFtc1wiLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIGkuYXVnKCB0KCksIHRoaXMuX2dldExpc3RRdWVyeVBhcmFtKCkgKVxuXHRcdFx0fSApLCB0LmJlZm9yZSggXCJpbml0aWFsaXplXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgdCA9IGEoIHRoaXMucGFyYW1zICk7XG5cdFx0XHRcdGlmICggaS5pc0VtcHR5T2JqZWN0KCB0ICkgJiYgIXRoaXMucGFyYW1zLmlkICkge1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJxdWFsaWZpZWQgc2x1ZyBvciBsaXN0IGlkIHJlcXVpcmVkXCIgKVxuXHRcdFx0XHR9XG5cdFx0XHR9IClcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMjggKTtcblx0XHR0LmV4cG9ydHMgPSByLmJ1aWxkKCBbbiggMjkgKSwgbiggMTQ5ICldIClcblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAzICksIGkgPSBuKCA1ICksIG8gPSBuKCAwICksIHMgPSBuKCAxOSApLCBhID0gXCJwcm9maWxlOlwiO1xuXG5cdFx0ZnVuY3Rpb24gdSggdCwgZSApIHtcblx0XHRcdHJldHVybiByLnNjcmVlbk5hbWUoIHQgKSB8fCBlXG5cdFx0fVxuXG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHR0LnBhcmFtcygge1xuXHRcdFx0XHRzaG93UmVwbGllczoge1xuXHRcdFx0XHRcdGZhbGxiYWNrOiAhMSxcblx0XHRcdFx0XHR0cmFuc2Zvcm06IGkuYXNCb29sZWFuXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNjcmVlbk5hbWU6IHt9LFxuXHRcdFx0XHR1c2VySWQ6IHt9LFxuXHRcdFx0XHR1cmw6IHt9XG5cdFx0XHR9ICksIHQub3ZlcnJpZGVQcm9wZXJ0eSggXCJpZFwiLCB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dmFyIHQgPSB1KCB0aGlzLnBhcmFtcy51cmwsIHRoaXMucGFyYW1zLnNjcmVlbk5hbWUgKTtcblx0XHRcdFx0XHRyZXR1cm4gYSArICh0IHx8IHRoaXMucGFyYW1zLnVzZXJJZClcblx0XHRcdFx0fVxuXHRcdFx0fSApLCB0Lm92ZXJyaWRlUHJvcGVydHkoIFwiZW5kcG9pbnRcIiwge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiBzLnRpbWVsaW5lKCBbXCJwcm9maWxlXCJdIClcblx0XHRcdFx0fVxuXHRcdFx0fSApLCB0LmRlZmluZSggXCJfZ2V0UHJvZmlsZVF1ZXJ5UGFyYW1cIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciB0ID0gdSggdGhpcy5wYXJhbXMudXJsLCB0aGlzLnBhcmFtcy5zY3JlZW5OYW1lICksXG5cdFx0XHRcdFx0ZSA9IHQgPyB7IHNjcmVlbl9uYW1lOiB0IH0gOiB7IHVzZXJfaWQ6IHRoaXMucGFyYW1zLnVzZXJJZCB9O1xuXHRcdFx0XHRyZXR1cm4gby5hdWcoIGUsIHsgd2l0aF9yZXBsaWVzOiB0aGlzLnBhcmFtcy5zaG93UmVwbGllcyA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiIH0gKVxuXHRcdFx0fSApLCB0LmFyb3VuZCggXCJxdWVyeVBhcmFtc1wiLCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIG8uYXVnKCB0KCksIHRoaXMuX2dldFByb2ZpbGVRdWVyeVBhcmFtKCkgKVxuXHRcdFx0fSApLCB0LmJlZm9yZSggXCJpbml0aWFsaXplXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoICF1KCB0aGlzLnBhcmFtcy51cmwsIHRoaXMucGFyYW1zLnNjcmVlbk5hbWUgKSAmJiAhdGhpcy5wYXJhbXMudXNlcklkICkge1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJzY3JlZW4gbmFtZSBvciB1c2VyIGlkIGlzIHJlcXVpcmVkXCIgKVxuXHRcdFx0XHR9XG5cdFx0XHR9IClcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMiApO1xuXHRcdHQuZXhwb3J0cyA9IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0dmFyIGkgPSBuZXcgcjtcblx0XHRcdHJldHVybiBQcm9taXNlLmFsbCggW24uZSggMCApLCBuLmUoIDYgKV0gKS50aGVuKCBmdW5jdGlvbiggciApIHtcblx0XHRcdFx0dmFyIG87XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0byA9IG4oIDkyICksIGkucmVzb2x2ZSggbmV3IG8oIHQsIGUgKSApXG5cdFx0XHRcdH0gY2F0Y2ggKCB0ICkge1xuXHRcdFx0XHRcdGkucmVqZWN0KCB0IClcblx0XHRcdFx0fVxuXHRcdFx0fS5iaW5kKCBudWxsLCBuICkgKS5jYXRjaCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdGkucmVqZWN0KCB0IClcblx0XHRcdH0gKSwgaS5wcm9taXNlXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDEwICksIGkgPSBuKCAzICksIG8gPSBuKCAwICksIHMgPSBuKCAxMyApLCBhID0gbiggMTQgKSgpLCB1ID0gbiggNjcgKSxcblx0XHRcdGMgPSBcImJsb2NrcXVvdGUudHdpdHRlci10d2VldCwgYmxvY2txdW90ZS50d2l0dGVyLXZpZGVvXCIsIGQgPSAvXFxidHctYWxpZ24tKGxlZnR8cmlnaHR8Y2VudGVyKVxcYi87XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHRyZXR1cm4gYSggdCwgYyApLm1hcCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiB1KCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHR2YXIgZSA9IHMoIHQgKSwgbiA9IHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIFwiQVwiICksIGEgPSBuICYmIG5bIG4ubGVuZ3RoIC0gMSBdLFxuXHRcdFx0XHRcdFx0dSA9IGEgJiYgaS5zdGF0dXMoIGEuaHJlZiApLCBjID0gdC5nZXRBdHRyaWJ1dGUoIFwiZGF0YS1jb252ZXJzYXRpb25cIiApLFxuXHRcdFx0XHRcdFx0ZiA9IFwibm9uZVwiID09IGMgfHwgXCJoaWRkZW5cIiA9PSBjIHx8IHIucHJlc2VudCggdCwgXCJ0dy1oaWRlLXRocmVhZFwiICksXG5cdFx0XHRcdFx0XHRsID0gdC5nZXRBdHRyaWJ1dGUoIFwiZGF0YS1jYXJkc1wiICksXG5cdFx0XHRcdFx0XHRoID0gXCJub25lXCIgPT0gbCB8fCBcImhpZGRlblwiID09IGwgfHwgci5wcmVzZW50KCB0LCBcInR3LWhpZGUtbWVkaWFcIiApLFxuXHRcdFx0XHRcdFx0cCA9IHQuZ2V0QXR0cmlidXRlKCBcImRhdGEtYWxpZ25cIiApIHx8IHQuZ2V0QXR0cmlidXRlKCBcImFsaWduXCIgKSxcblx0XHRcdFx0XHRcdG0gPSB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLXRoZW1lXCIgKTtcblx0XHRcdFx0XHRyZXR1cm4gIXAgJiYgZC50ZXN0KCB0LmNsYXNzTmFtZSApICYmIChwID0gUmVnRXhwLiQxKSwgby5hdWcoIGUsIHtcblx0XHRcdFx0XHRcdHR3ZWV0SWQ6IHUsXG5cdFx0XHRcdFx0XHRoaWRlVGhyZWFkOiBmLFxuXHRcdFx0XHRcdFx0aGlkZUNhcmQ6IGgsXG5cdFx0XHRcdFx0XHRhbGlnbjogcCxcblx0XHRcdFx0XHRcdHRoZW1lOiBtLFxuXHRcdFx0XHRcdFx0aWQ6IHVcblx0XHRcdFx0XHR9IClcblx0XHRcdFx0fSggdCApLCB0LnBhcmVudE5vZGUsIHQsIGUgKVxuXHRcdFx0fSApXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDg2ICksIGkgPSBuKCAyMSApLCBvID0gXCJ0ZndfaG9yaXpvbl90d2VldF9lbWJlZF85NTU1XCI7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQsIGUgKSB7XG5cdFx0XHR2YXIgbjtcblx0XHRcdHQgJiYgKG4gPSB0WyBvIF0pICYmIG4uYnVja2V0ICYmIHIoIG8sIG4uYnVja2V0LCBuLnZlcnNpb24sIGkuZm9ybWF0SG9yaXpvblR3ZWV0RGF0YSggZSApIClcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMiApO1xuXHRcdHQuZXhwb3J0cyA9IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0dmFyIGkgPSBuZXcgcjtcblx0XHRcdHJldHVybiBuLmUoIDcgKS50aGVuKCBmdW5jdGlvbiggciApIHtcblx0XHRcdFx0dmFyIG87XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0byA9IG4oIDkzICksIGkucmVzb2x2ZSggbmV3IG8oIHQsIGUgKSApXG5cdFx0XHRcdH0gY2F0Y2ggKCB0ICkge1xuXHRcdFx0XHRcdGkucmVqZWN0KCB0IClcblx0XHRcdFx0fVxuXHRcdFx0fS5iaW5kKCBudWxsLCBuICkgKS5jYXRjaCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdGkucmVqZWN0KCB0IClcblx0XHRcdH0gKSwgaS5wcm9taXNlXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDIgKTtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdHZhciBpID0gbmV3IHI7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIFtuLmUoIDAgKSwgbi5lKCA4ICldICkudGhlbiggZnVuY3Rpb24oIHIgKSB7XG5cdFx0XHRcdHZhciBvO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdG8gPSBuKCA5NCApLCBpLnJlc29sdmUoIG5ldyBvKCB0LCBlICkgKVxuXHRcdFx0XHR9IGNhdGNoICggdCApIHtcblx0XHRcdFx0XHRpLnJlamVjdCggdCApXG5cdFx0XHRcdH1cblx0XHRcdH0uYmluZCggbnVsbCwgbiApICkuY2F0Y2goIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRpLnJlamVjdCggdCApXG5cdFx0XHR9ICksIGkucHJvbWlzZVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAxMCApLCBpID0gbiggMCApLCBvID0gbiggMTMgKSwgcyA9IG4oIDE0ICkoKSwgYSA9IG4oIDY5ICksIHUgPSBuKCA1ICksXG5cdFx0XHRjID0gXCJhLnR3aXR0ZXItc2hhcmUtYnV0dG9uLCBhLnR3aXR0ZXItbWVudGlvbi1idXR0b24sIGEudHdpdHRlci1oYXNodGFnLWJ1dHRvblwiLFxuXHRcdFx0ZCA9IFwidHdpdHRlci1oYXNodGFnLWJ1dHRvblwiLCBmID0gXCJ0d2l0dGVyLW1lbnRpb24tYnV0dG9uXCI7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRyZXR1cm4gcyggdCwgYyApLm1hcCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHJldHVybiBhKCBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0XHR2YXIgZSA9IG8oIHQgKSwgbiA9IHtcblx0XHRcdFx0XHRcdHNjcmVlbk5hbWU6IHQuZ2V0QXR0cmlidXRlKCBcImRhdGEtYnV0dG9uLXNjcmVlbi1uYW1lXCIgKSxcblx0XHRcdFx0XHRcdHRleHQ6IHQuZ2V0QXR0cmlidXRlKCBcImRhdGEtdGV4dFwiICksXG5cdFx0XHRcdFx0XHR0eXBlOiB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLXR5cGVcIiApLFxuXHRcdFx0XHRcdFx0c2l6ZTogdC5nZXRBdHRyaWJ1dGUoIFwiZGF0YS1zaXplXCIgKSxcblx0XHRcdFx0XHRcdHVybDogdC5nZXRBdHRyaWJ1dGUoIFwiZGF0YS11cmxcIiApLFxuXHRcdFx0XHRcdFx0aGFzaHRhZ3M6IHQuZ2V0QXR0cmlidXRlKCBcImRhdGEtaGFzaHRhZ3NcIiApLFxuXHRcdFx0XHRcdFx0dmlhOiB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLXZpYVwiICksXG5cdFx0XHRcdFx0XHRidXR0b25IYXNodGFnOiB0LmdldEF0dHJpYnV0ZSggXCJkYXRhLWJ1dHRvbi1oYXNodGFnXCIgKVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0cmV0dXJuIGkuZm9ySW4oIG4sIGZ1bmN0aW9uKCB0LCBuICkge1xuXHRcdFx0XHRcdFx0dmFyIHIgPSBlWyB0IF07XG5cdFx0XHRcdFx0XHRlWyB0IF0gPSB1Lmhhc1ZhbHVlKCByICkgPyByIDogblxuXHRcdFx0XHRcdH0gKSwgZS5zY3JlZW5OYW1lID0gZS5zY3JlZW5OYW1lIHx8IGUuc2NyZWVuX25hbWUsIGUuYnV0dG9uSGFzaHRhZyA9IGUuYnV0dG9uSGFzaHRhZyB8fCBlLmJ1dHRvbl9oYXNodGFnIHx8IGUuaGFzaHRhZywgci5wcmVzZW50KCB0LCBkICkgJiYgKGUudHlwZSA9IFwiaGFzaHRhZ1wiKSwgci5wcmVzZW50KCB0LCBmICkgJiYgKGUudHlwZSA9IFwibWVudGlvblwiKSwgZVxuXHRcdFx0XHR9KCB0ICksIHQucGFyZW50Tm9kZSwgdCApXG5cdFx0XHR9IClcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMiApO1xuXHRcdHQuZXhwb3J0cyA9IGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0dmFyIGkgPSBuZXcgcjtcblx0XHRcdHJldHVybiBuLmUoIDMgKS50aGVuKCBmdW5jdGlvbiggciApIHtcblx0XHRcdFx0dmFyIG87XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0byA9IG4oIDk1ICksIGkucmVzb2x2ZSggbmV3IG8oIHQsIGUgKSApXG5cdFx0XHRcdH0gY2F0Y2ggKCB0ICkge1xuXHRcdFx0XHRcdGkucmVqZWN0KCB0IClcblx0XHRcdFx0fVxuXHRcdFx0fS5iaW5kKCBudWxsLCBuICkgKS5jYXRjaCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdGkucmVqZWN0KCB0IClcblx0XHRcdH0gKSwgaS5wcm9taXNlXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDAgKTtcblx0XHR0LmV4cG9ydHMgPSByLmF1Zygge30sIG4oIDE1OCApLCBuKCAxNTkgKSwgbiggMTYwICksIG4oIDE2MSApLCBuKCAxNjIgKSwgbiggMTYzICksIG4oIDE2NCApIClcblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCA1OSApLCBpID0gbiggMTcgKSggW1widXNlcklkXCJdLCB7fSwgciApO1xuXHRcdHQuZXhwb3J0cyA9IHsgY3JlYXRlRE1CdXR0b246IGkgfVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDYyICksIGkgPSBuKCAxNyApKCBbXCJzY3JlZW5OYW1lXCJdLCB7fSwgciApO1xuXHRcdHQuZXhwb3J0cyA9IHsgY3JlYXRlRm9sbG93QnV0dG9uOiBpIH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCA2MyApLCBpID0gbiggMTcgKSggW1wibW9tZW50SWRcIl0sIHt9LCByICk7XG5cdFx0dC5leHBvcnRzID0geyBjcmVhdGVNb21lbnQ6IGkgfVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDY0ICksIGkgPSBuKCAxNyApKCBbXCJ1c2VybmFtZVwiXSwge30sIHIgKTtcblx0XHR0LmV4cG9ydHMgPSB7IGNyZWF0ZVBlcmlzY29wZU9uQWlyQnV0dG9uOiBpIH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCA4ICksIGkgPSBuKCAxMiApLCBvID0gbiggMyApLCBzID0gbiggMCApLCBhID0gbiggNSApLCB1ID0gbiggNjUgKSwgYyA9IG4oIDY2ICksXG5cdFx0XHRkID0gbiggMTcgKSggW10sIHt9LCBjICksIGYgPSBuKCA2ICksXG5cdFx0XHRsID0gXCJFbWJlZGRlZCBncmlkcyBoYXZlIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSB0d3R0ci53aWRnZXRzLmNyZWF0ZVRpbWVsaW5lIGluc3RlYWQuIE1vcmUgaW5mbzogaHR0cHM6Ly90d2l0dGVyY29tbXVuaXR5LmNvbS90L3VwZGF0ZS1vbi10aGUtZW1iZWRkZWQtZ3JpZC1kaXNwbGF5LXR5cGUvMTE5NTY0LlwiLFxuXHRcdFx0aCA9IHtcblx0XHRcdFx0Y3JlYXRlVGltZWxpbmU6IHAsXG5cdFx0XHRcdGNyZWF0ZUdyaWRGcm9tQ29sbGVjdGlvbjogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0dmFyIGUgPSBzLnRvUmVhbEFycmF5KCBhcmd1bWVudHMgKS5zbGljZSggMSApLCBuID0ge1xuXHRcdFx0XHRcdFx0c291cmNlVHlwZTogXCJjb2xsZWN0aW9uXCIsXG5cdFx0XHRcdFx0XHRpZDogdFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0cmV0dXJuIGUudW5zaGlmdCggbiApLCBpLnB1YmxpY0xvZyggbCApLCBwLmFwcGx5KCB0aGlzLCBlIClcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdGZ1bmN0aW9uIHAoIHQgKSB7XG5cdFx0XHR2YXIgZSwgbiA9IHMudG9SZWFsQXJyYXkoIGFyZ3VtZW50cyApLnNsaWNlKCAxICk7XG5cdFx0XHRyZXR1cm4gYS5pc1N0cmluZyggdCApIHx8IGEuaXNOdW1iZXIoIHQgKSA/IGYucmVqZWN0KCBcIkVtYmVkZGVkIHRpbWVsaW5lcyB3aXRoIHdpZGdldCBzZXR0aW5ncyBoYXZlIGJlZW4gZGVwcmVjYXRlZC4gU2VlIGh0dHBzOi8vdHdpdHRlcmNvbW11bml0eS5jb20vdC9kZXByZWNhdGluZy13aWRnZXQtc2V0dGluZ3MvMTAyMjk1LlwiICkgOiBzLmlzT2JqZWN0KCB0ICkgPyAodCA9IHQgfHwge30sIG4uZm9yRWFjaCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdHMuaXNUeXBlKCBcIm9iamVjdFwiLCB0ICkgJiYgZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0dC5hcmlhTGl2ZSA9IHQuYXJpYVBvbGl0ZVxuXHRcdFx0XHR9KCBlID0gdCApXG5cdFx0XHR9ICksIGUgfHwgKGUgPSB7fSwgbi5wdXNoKCBlICkpLCB0LmxhbmcgPSBlLmxhbmcsIHQudHdlZXRMaW1pdCA9IGUudHdlZXRMaW1pdCwgdC5zaG93UmVwbGllcyA9IGUuc2hvd1JlcGxpZXMsIGUuZGF0YVNvdXJjZSA9IHUoIHQgKSwgZC5hcHBseSggdGhpcywgbiApKSA6IGYucmVqZWN0KCBcImRhdGEgc291cmNlIG11c3QgYmUgYW4gb2JqZWN0LlwiIClcblx0XHR9XG5cblx0XHRvLmlzVHdpdHRlclVSTCggci5ocmVmICkgJiYgKGguY3JlYXRlVGltZWxpbmVQcmV2aWV3ID0gZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0XHR2YXIgciA9IHtcblx0XHRcdFx0cHJldmlld1BhcmFtczogdCxcblx0XHRcdFx0dXNlTGVnYWN5RGVmYXVsdHM6ICEwLFxuXHRcdFx0XHRpc1ByZXZpZXdUaW1lbGluZTogITBcblx0XHRcdH07XG5cdFx0XHRyZXR1cm4gci5kYXRhU291cmNlID0gdSggciApLCBkKCBlLCByLCBuIClcblx0XHR9KSwgdC5leHBvcnRzID0gaFxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciwgaSA9IG4oIDAgKSwgbyA9IG4oIDY3ICksIHMgPSBuKCAxNyApLCBhID0gKHIgPSBzKCBbXCJ0d2VldElkXCJdLCB7fSwgbyApLCBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBpLnRvUmVhbEFycmF5KCBhcmd1bWVudHMgKS5zbGljZSggMSApLmZvckVhY2goIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRpLmlzVHlwZSggXCJvYmplY3RcIiwgdCApICYmICh0LmhpZGVDYXJkID0gXCJub25lXCIgPT0gdC5jYXJkcyB8fCBcImhpZGRlblwiID09IHQuY2FyZHMsIHQuaGlkZVRocmVhZCA9IFwibm9uZVwiID09IHQuY29udmVyc2F0aW9uIHx8IFwiaGlkZGVuXCIgPT0gdC5jb252ZXJzYXRpb24pXG5cdFx0XHR9ICksIHIuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApXG5cdFx0fSk7XG5cdFx0dC5leHBvcnRzID0ge1xuXHRcdFx0Y3JlYXRlVHdlZXQ6IGEsXG5cdFx0XHRjcmVhdGVUd2VldEVtYmVkOiBhLFxuXHRcdFx0Y3JlYXRlVmlkZW86IGFcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMCApLCBpID0gbiggNjkgKSwgbyA9IG4oIDE3ICksIHMgPSBvKCBbXCJ1cmxcIl0sIHsgdHlwZTogXCJzaGFyZVwiIH0sIGkgKSxcblx0XHRcdGEgPSBvKCBbXCJidXR0b25IYXNodGFnXCJdLCB7IHR5cGU6IFwiaGFzaHRhZ1wiIH0sIGkgKSwgdSA9IG8oIFtcInNjcmVlbk5hbWVcIl0sIHsgdHlwZTogXCJtZW50aW9uXCIgfSwgaSApO1xuXG5cdFx0ZnVuY3Rpb24gYyggdCApIHtcblx0XHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHIudG9SZWFsQXJyYXkoIGFyZ3VtZW50cyApLnNsaWNlKCAxICkuZm9yRWFjaCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdFx0ci5pc1R5cGUoIFwib2JqZWN0XCIsIHQgKSAmJiAodC5zY3JlZW5OYW1lID0gdC5zY3JlZW5OYW1lIHx8IHQuc2NyZWVuX25hbWUsIHQuYnV0dG9uSGFzaHRhZyA9IHQuYnV0dG9uSGFzaHRhZyB8fCB0LmJ1dHRvbl9oYXNodGFnIHx8IHQuaGFzaHRhZylcblx0XHRcdFx0fSApLCB0LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHQuZXhwb3J0cyA9IHtcblx0XHRcdGNyZWF0ZVNoYXJlQnV0dG9uOiBjKCBzICksXG5cdFx0XHRjcmVhdGVIYXNodGFnQnV0dG9uOiBjKCBhICksXG5cdFx0XHRjcmVhdGVNZW50aW9uQnV0dG9uOiBjKCB1IClcblx0XHR9XG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByLCBpLCBvLCBzID0gbiggNCApLCBhID0gbiggMSApLCB1ID0gMCwgYyA9IFtdLCBkID0gcy5jcmVhdGVFbGVtZW50KCBcImFcIiApO1xuXG5cdFx0ZnVuY3Rpb24gZigpIHtcblx0XHRcdHZhciB0LCBlO1xuXHRcdFx0Zm9yICggdSA9IDEsIHQgPSAwLCBlID0gYy5sZW5ndGg7IHQgPCBlOyB0ICsrICkge1xuXHRcdFx0XHRjWyB0IF0oKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC9ebG9hZGV8Yy8udGVzdCggcy5yZWFkeVN0YXRlICkgJiYgKHUgPSAxKSwgcy5hZGRFdmVudExpc3RlbmVyICYmIHMuYWRkRXZlbnRMaXN0ZW5lciggXCJET01Db250ZW50TG9hZGVkXCIsIGkgPSBmdW5jdGlvbigpIHtcblx0XHRcdHMucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJET01Db250ZW50TG9hZGVkXCIsIGksICExICksIGYoKVxuXHRcdH0sICExICksIGQuZG9TY3JvbGwgJiYgcy5hdHRhY2hFdmVudCggXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIiwgciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0L15jLy50ZXN0KCBzLnJlYWR5U3RhdGUgKSAmJiAocy5kZXRhY2hFdmVudCggXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIiwgciApLCBmKCkpXG5cdFx0fSApLCBvID0gZC5kb1Njcm9sbCA/IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0YS5zZWxmICE9IGEudG9wID8gdSA/IHQoKSA6IGMucHVzaCggdCApIDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0ZC5kb1Njcm9sbCggXCJsZWZ0XCIgKVxuXHRcdFx0XHR9IGNhdGNoICggZSApIHtcblx0XHRcdFx0XHRyZXR1cm4gc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRvKCB0IClcblx0XHRcdFx0XHR9LCA1MCApXG5cdFx0XHRcdH1cblx0XHRcdFx0dCgpXG5cdFx0XHR9KClcblx0XHR9IDogZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHR1ID8gdCgpIDogYy5wdXNoKCB0IClcblx0XHR9LCB0LmV4cG9ydHMgPSBvXG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggNDcgKSwgaSA9IG4oIDkgKTtcblx0XHR0LmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblx0XHRcdGkuc2V0KCBcImJ1aWxkVmVyc2lvblwiLCByLnZlcnNpb24gKVxuXHRcdH1cblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0biggMTY4ICksIG4oIDg3ICksIG4oIDE3MSApXG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMTY5ICksIGkgPSBuKCAzMCApLCBvID0gbiggNzAgKSwgcyA9IG5ldyByLCBhID0gZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHR0LndpZGdldHMgJiYgMSA9PT0gdC53aWRnZXRzLmxlbmd0aCAmJiAocy5zdGFydCgpLCBpLmVtaXR0ZXIudW5iaW5kKCBpLkFMTF9XSURHRVRTX1JFTkRFUl9TVEFSVCwgYSApKVxuXHRcdH0sIHUgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdHZhciBlO1xuXHRcdFx0dC53aWRnZXRzICYmIDEgPT09IHQud2lkZ2V0cy5sZW5ndGggJiYgKGUgPSB0LndpZGdldHNbIDAgXSwgcy5lbmQoKSwgZS5kYXRhc2V0ICYmIGUuZGF0YXNldC50d2VldElkICYmIG8oIHtcblx0XHRcdFx0ZHVyYXRpb246IHMuZHVyYXRpb24oKSxcblx0XHRcdFx0bmFtZXNwYWNlOiB7XG5cdFx0XHRcdFx0ZWxlbWVudDogXCJ0d2VldFwiLFxuXHRcdFx0XHRcdGFjdGlvbjogXCJyZW5kZXJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR3aWRnZXRJZHM6IFtlLmRhdGFzZXQudHdlZXRJZF1cblx0XHRcdH0gKSksIGkuZW1pdHRlci51bmJpbmQoIGkuQUxMX1dJREdFVFNfUkVOREVSX0VORCwgdSApXG5cdFx0fTtcblx0XHRpLmVtaXR0ZXIuYmluZCggaS5BTExfV0lER0VUU19SRU5ERVJfU1RBUlQsIGEgKSwgaS5lbWl0dGVyLmJpbmQoIGkuQUxMX1dJREdFVFNfUkVOREVSX0VORCwgdSApXG5cdH0sIGZ1bmN0aW9uKCB0LCBlLCBuICkge1xuXHRcdHZhciByID0gbiggMTcwICk7XG5cblx0XHRmdW5jdGlvbiBpKCkge1xuXHRcdH1cblxuXHRcdGkucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLl9zdGFydFRpbWUgPSByKClcblx0XHR9LCBpLnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuX2R1cmF0aW9uID0gcigpIC0gdGhpcy5fc3RhcnRUaW1lXG5cdFx0fSwgaS5wcm90b3R5cGUuZHVyYXRpb24gPSBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiB0aGlzLl9kdXJhdGlvblxuXHRcdH0sIHQuZXhwb3J0cyA9IGlcblx0fSwgZnVuY3Rpb24oIHQsIGUsIG4gKSB7XG5cdFx0dmFyIHIgPSBuKCAxICk7XG5cdFx0dC5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gci5wZXJmb3JtYW5jZSAmJiByLnBlcmZvcm1hbmNlLm5vdyA/IHIucGVyZm9ybWFuY2Uubm93KCkgOiBEYXRlLm5vdygpXG5cdFx0fVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDMwICksIGkgPSBuKCA3MCApLCBvID0gbiggMTcyICksIHMgPSBuKCAzICksIGEgPSBuKCAxICksIHUgPSBuKCAwICksIGMgPSBuKCAyMiApLCBkID0gbiggNjEgKTtcblxuXHRcdGZ1bmN0aW9uIGYoIHQgKSB7XG5cdFx0XHRyZXR1cm4gdC5wZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlUeXBlKCBcInJlc291cmNlXCIgKS5maWx0ZXIoIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRyZXR1cm4gcy5pc1R3aW1nVVJMKCB0Lm5hbWUgKSB8fCBzLmlzVHdpdHRlclVSTCggdC5uYW1lIClcblx0XHRcdH0gKS5yZWR1Y2UoIGZ1bmN0aW9uKCB0LCBlICkge1xuXHRcdFx0XHRyZXR1cm4gdFsgZS5uYW1lIF0gPSBlLmR1cmF0aW9uLCB0XG5cdFx0XHR9LCB7fSApXG5cdFx0fVxuXG5cdFx0ci5lbWl0dGVyLmJpbmQoIHIuQUxMX1dJREdFVFNfQU5EX0lNQUdFU19MT0FERUQsIGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0dmFyIGUsIG4sIHIgPSBbXTtcblx0XHRcdGMuaGFzUGVyZm9ybWFuY2VJbmZvcm1hdGlvbigpICYmIChlID0gZiggYSApLCBkLmlzU3VwcG9ydGVkKCkgfHwgKHIgPSBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIHQucmVkdWNlKCBmdW5jdGlvbiggdCwgZSApIHtcblx0XHRcdFx0XHRyZXR1cm4gdS5hdWcoIHQsIGYoIGUuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3ICkgKVxuXHRcdFx0XHR9LCB7fSApXG5cdFx0XHR9KCB0ICkpLCBuID0gdS5hdWcoIHt9LCBlLCByICksIE9iamVjdC5rZXlzKCBvICkuZm9yRWFjaCggZnVuY3Rpb24oIHQgKSB7XG5cdFx0XHRcdCFmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHRcdFx0XHR2YXIgciA9IE9iamVjdC5rZXlzKCB0ICkucmVkdWNlKCBmdW5jdGlvbiggZSwgciApIHtcblx0XHRcdFx0XHRcdHJldHVybiBuKCByICkgPyBlICsgdFsgciBdIDogZVxuXHRcdFx0XHRcdH0sIDAgKTtcblx0XHRcdFx0XHRpKCB7XG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogcixcblx0XHRcdFx0XHRcdG5hbWVzcGFjZToge1xuXHRcdFx0XHRcdFx0XHRlbGVtZW50OiBlLFxuXHRcdFx0XHRcdFx0XHRhY3Rpb246IFwicmVzb3VyY2VcIlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gKVxuXHRcdFx0XHR9KCBuLCB0LCBvWyB0IF0gKVxuXHRcdFx0fSApKVxuXHRcdH0gKVxuXHR9LCBmdW5jdGlvbiggdCwgZSwgbiApIHtcblx0XHR2YXIgciA9IG4oIDMgKSwgaSA9IHtcblx0XHRcdGFsbDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiAhMFxuXHRcdFx0fSxcblx0XHRcdGltYWdlOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIHIuaXNUd2ltZ1VSTCggdCApXG5cdFx0XHR9LFxuXHRcdFx0c2V0dGluZ3M6IGZ1bmN0aW9uKCB0ICkge1xuXHRcdFx0XHRyZXR1cm4gci5pc1NldHRpbmdzVVJMKCB0IClcblx0XHRcdH0sXG5cdFx0XHR3aWRnZXRfaWZyYW1lOiBmdW5jdGlvbiggdCApIHtcblx0XHRcdFx0cmV0dXJuIHIuaXNXaWRnZXRJZnJhbWVVUkwoIHQgKVxuXHRcdFx0fVxuXHRcdH07XG5cdFx0dC5leHBvcnRzID0gaVxuXHR9XG5dICkpKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pSWl3aWMyOTFjbU5sY3lJNld5SjJaVzVrYjNJdmQybGtaMlYwY3k1cWN5SmRMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpHZFc1amRHbHZiaUFtSmlCR2RXNWpkR2x2Ymk1d2NtOTBiM1I1Y0dVZ0ppWWdSblZ1WTNScGIyNHVjSEp2ZEc5MGVYQmxMbUpwYm1RZ0ppWWdLQzhvVFZOSlJTQW9XelkzT0RsZGZERXdmREV4S1NsOFZISnBaR1Z1ZEM4dWRHVnpkQ2dnYm1GMmFXZGhkRzl5TG5WelpYSkJaMlZ1ZENBcElIeDhJQ2gzYVc1a2IzY3VYMTkwZDNSMGNpQW1KaUIzYVc1a2IzY3VYMTkwZDNSMGNpNTNhV1JuWlhSeklDWW1JSGRwYm1SdmR5NWZYM1IzZEhSeUxuZHBaR2RsZEhNdWJHOWhaR1ZrSUNZbUlIZHBibVJ2ZHk1MGQzUjBjaTUzYVdSblpYUnpMbXh2WVdRZ0ppWWdkMmx1Wkc5M0xuUjNkSFJ5TG5kcFpHZGxkSE11Ykc5aFpDZ3BMQ0IzYVc1a2IzY3VYMTkwZDNSMGNpQW1KaUIzYVc1a2IzY3VYMTkwZDNSMGNpNTNhV1JuWlhSeklDWW1JSGRwYm1SdmR5NWZYM1IzZEhSeUxuZHBaR2RsZEhNdWFXNXBkQ0I4ZkNCbWRXNWpkR2x2YmlnZ2RDQXBJSHRjYmx4MFpuVnVZM1JwYjI0Z1pTZ2daU0FwSUh0Y2JseDBYSFJtYjNJZ0tDQjJZWElnYml3Z2FTd2dieUE5SUdWYklEQWdYU3dnY3lBOUlHVmJJREVnWFN3Z1lTQTlJREFzSUdNZ1BTQmJYVHNnWVNBOElHOHViR1Z1WjNSb095QmhJQ3NySUNrZ2UxeHVYSFJjZEZ4MGFTQTlJRzliSUdFZ1hTd2djbHNnYVNCZElDWW1JR011Y0hWemFDZ2djbHNnYVNCZFd5QXdJRjBnS1N3Z2Nsc2dhU0JkSUQwZ01EdGNibHgwWEhSOVhHNWNkRngwWm05eUlDZ2diaUJwYmlCeklDa2dlMXh1WEhSY2RGeDBUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNLQ0J6TENCdUlDa2dKaVlnS0hSYklHNGdYU0E5SUhOYklHNGdYU2s3WEc1Y2RGeDBmVnh1WEhSY2RHWnZjaUFvSUhVZ0ppWWdkU2dnWlNBcE95QmpMbXhsYm1kMGFEc2dLU0I3WEc1Y2RGeDBYSFJqTG5Ob2FXWjBLQ2tvS1Z4dVhIUmNkSDFjYmx4MGZWeHVYRzVjZEhaaGNpQnVJRDBnZTMwc0lISWdQU0I3SURFNklEQWdmVHRjYmx4dVhIUm1kVzVqZEdsdmJpQnBLQ0JsSUNrZ2UxeHVYSFJjZEdsbUlDZ2dibHNnWlNCZElDa2dlMXh1WEhSY2RGeDBjbVYwZFhKdUlHNWJJR1VnWFM1bGVIQnZjblJ6TzF4dVhIUmNkSDFjYmx4MFhIUjJZWElnY2lBOUlHNWJJR1VnWFNBOUlIdGNibHgwWEhSY2RHazZJR1VzWEc1Y2RGeDBYSFJzT2lBaE1TeGNibHgwWEhSY2RHVjRjRzl5ZEhNNklIdDlYRzVjZEZ4MGZUdGNibHgwWEhSeVpYUjFjbTRnZEZzZ1pTQmRMbU5oYkd3b0lISXVaWGh3YjNKMGN5d2djaXdnY2k1bGVIQnZjblJ6TENCcElDa3NJSEl1YkNBOUlDRXdMQ0J5TG1WNGNHOXlkSE5jYmx4MGZWeHVYRzVjZEdrdVpTQTlJR1oxYm1OMGFXOXVLQ0IwSUNrZ2UxeHVYSFJjZEhaaGNpQmxJRDBnVzEwc0lHNGdQU0J5V3lCMElGMDdYRzVjZEZ4MGFXWWdLQ0F3SUNFOVBTQnVJQ2tnZTF4dVhIUmNkRngwYVdZZ0tDQnVJQ2tnZTF4dVhIUmNkRngwWEhSbExuQjFjMmdvSUc1YklESWdYU0FwTzF4dVhIUmNkRngwZlNCbGJITmxJSHRjYmx4MFhIUmNkRngwZG1GeUlHOGdQU0J1WlhjZ1VISnZiV2x6WlNnZ1puVnVZM1JwYjI0b0lHVXNJR2tnS1NCN1hHNWNkRngwWEhSY2RGeDBiaUE5SUhKYklIUWdYU0E5SUZ0bExDQnBYVnh1WEhSY2RGeDBYSFI5SUNrN1hHNWNkRngwWEhSY2RHVXVjSFZ6YUNnZ2Jsc2dNaUJkSUQwZ2J5QXBPMXh1WEhSY2RGeDBYSFIyWVhJZ2N5d2dZU0E5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SelFubFVZV2RPWVcxbEtDQmNJbWhsWVdSY0lpQXBXeUF3SUYwc0lIVWdQU0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtDQmNJbk5qY21sd2RGd2lJQ2s3WEc1Y2RGeDBYSFJjZEhVdVkyaGhjbk5sZENBOUlGd2lkWFJtTFRoY0lpd2dkUzUwYVcxbGIzVjBJRDBnTVRJd0xDQnBMbTVqSUNZbUlIVXVjMlYwUVhSMGNtbGlkWFJsS0NCY0ltNXZibU5sWENJc0lHa3VibU1nS1N3Z2RTNXpjbU1nUFNCbWRXNWpkR2x2YmlnZ2RDQXBJSHRjYmx4MFhIUmNkRngwWEhSeVpYUjFjbTRnYVM1d0lDc2dYQ0pxY3k5Y0lpQXJJQ2g3WEc1Y2RGeDBYSFJjZEZ4MFhIUWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTURvZ1hDSnRiMjFsYm5SK2RHbHRaV3hwYm1WK2RIZGxaWFJjSWl4Y2JseDBYSFJjZEZ4MFhIUmNkQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBeU9pQmNJbVJ0WDJKMWRIUnZibHdpTEZ4dVhIUmNkRngwWEhSY2RGeDBJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSURNNklGd2lZblYwZEc5dVhDSXNYRzVjZEZ4MFhIUmNkRngwWEhRZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdORG9nWENKdGIyMWxiblJjSWl4Y2JseDBYSFJjZEZ4MFhIUmNkQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBMU9pQmNJbkJsY21selkyOXdaVjl2Ymw5aGFYSmNJaXhjYmx4MFhIUmNkRngwWEhSY2RDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0EyT2lCY0luUnBiV1ZzYVc1bFhDSXNYRzVjZEZ4MFhIUmNkRngwWEhRZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdOem9nWENKb2IzSnBlbTl1WDNSM1pXVjBYQ0lzWEc1Y2RGeDBYSFJjZEZ4MFhIUWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnT0RvZ1hDSjBkMlZsZEZ3aVhHNWNkRngwWEhSY2RGeDBJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxYklIUWdYU0I4ZkNCMEtTQXJJRndpTGx3aUlDc2dlMXh1WEhSY2RGeDBYSFJjZEZ4MElDQWdJQ0FnSURBNklGd2lPVGxqWlRWbE1HVTBOakUzT1RnMU16VTBZelZqTkRJMlpEZGxNV0k1WmpSY0lpeGNibHgwWEhSY2RGeDBYSFJjZENBZ0lDQWdJQ0F5T2lCY0ltRmhabVJpWVdNNFl6QmpZVE13WWpBek5EVm1abUZrWm1JME5tRmlZV0ZsWENJc1hHNWNkRngwWEhSY2RGeDBYSFFnSUNBZ0lDQWdNem9nWENJNU0yRXdZekkxWXpKa01tWXpNRGd4WXpjd05XTTVPR015WkRsa1pXTXdaVndpTEZ4dVhIUmNkRngwWEhSY2RGeDBJQ0FnSUNBZ0lEUTZJRndpTnpCa05EWmxORFppWWpabE5XUXpNalF5T0dReU56UmxNamxrTXpOaE4yRmNJaXhjYmx4MFhIUmNkRngwWEhSY2RDQWdJQ0FnSUNBMU9pQmNJbUU1TWpRNU9ESXpOelpsTlRNeVlXWmxaV1UwTmpNMll6YzVOR1ZoTldSaFhDSXNYRzVjZEZ4MFhIUmNkRngwWEhRZ0lDQWdJQ0FnTmpvZ1hDSmtNakk0WkdObU16VTNNelEyTVdZeU9UaGlNRGd5WXpsaE5XTXdZVFF5WTF3aUxGeHVYSFJjZEZ4MFhIUmNkRngwSUNBZ0lDQWdJRGM2SUZ3aU56Y3pPREV6TnpObU9UWTBaV1ZsT1dJME16Y3lPR0l6WkRRelpEWTBNbVpjSWl4Y2JseDBYSFJjZEZ4MFhIUmNkQ0FnSUNBZ0lDQTRPaUJjSWpsaFlUbGxaR0V6WXpFMk0yVmpOVE01WXpFMllXVm1NR1E0TWpKa09EQTNYQ0pjYmx4MFhIUmNkRngwWEhRZ0lDQWdJQ0FnZlZzZ2RDQmRJQ3NnWENJdWFuTmNJbHh1WEhSY2RGeDBYSFI5S0NCMElDa3NJSE1nUFNCbWRXNWpkR2x2YmlnZ1pTQXBJSHRjYmx4MFhIUmNkRngwWEhSMUxtOXVaWEp5YjNJZ1BTQjFMbTl1Ykc5aFpDQTlJRzUxYkd3c0lHTnNaV0Z5VkdsdFpXOTFkQ2dnWXlBcE8xeHVYSFJjZEZ4MFhIUmNkSFpoY2lCdUlEMGdjbHNnZENCZE8xeHVYSFJjZEZ4MFhIUmNkR2xtSUNnZ01DQWhQVDBnYmlBcElIdGNibHgwWEhSY2RGeDBYSFJjZEdsbUlDZ2diaUFwSUh0Y2JseDBYSFJjZEZ4MFhIUmNkRngwZG1GeUlHa2dQU0JsSUNZbUlDaGNJbXh2WVdSY0lpQTlQVDBnWlM1MGVYQmxJRDhnWENKdGFYTnphVzVuWENJZ09pQmxMblI1Y0dVcExDQnZJRDBnWlNBbUppQmxMblJoY21kbGRDQW1KaUJsTG5SaGNtZGxkQzV6Y21Nc1hHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MGN5QTlJRzVsZHlCRmNuSnZjaWdnWENKTWIyRmthVzVuSUdOb2RXNXJJRndpSUNzZ2RDQXJJRndpSUdaaGFXeGxaQzVjWEc0b1hDSWdLeUJwSUNzZ1hDSTZJRndpSUNzZ2J5QXJJRndpS1Z3aUlDazdYRzVjZEZ4MFhIUmNkRngwWEhSY2RITXVkSGx3WlNBOUlHa3NJSE11Y21WeGRXVnpkQ0E5SUc4c0lHNWJJREVnWFNnZ2N5QXBYRzVjZEZ4MFhIUmNkRngwWEhSOVhHNWNkRngwWEhSY2RGeDBYSFJ5V3lCMElGMGdQU0IyYjJsa0lEQmNibHgwWEhSY2RGeDBYSFI5WEc1Y2RGeDBYSFJjZEgwN1hHNWNkRngwWEhSY2RIWmhjaUJqSUQwZ2MyVjBWR2x0Wlc5MWRDZ2dablZ1WTNScGIyNG9LU0I3WEc1Y2RGeDBYSFJjZEZ4MGN5Z2dlMXh1WEhSY2RGeDBYSFJjZEZ4MGRIbHdaVG9nWENKMGFXMWxiM1YwWENJc1hHNWNkRngwWEhSY2RGeDBYSFIwWVhKblpYUTZJSFZjYmx4MFhIUmNkRngwWEhSOUlDbGNibHgwWEhSY2RGeDBmU3dnTVRKbE5DQXBPMXh1WEhSY2RGeDBYSFIxTG05dVpYSnliM0lnUFNCMUxtOXViRzloWkNBOUlITXNJR0V1WVhCd1pXNWtRMmhwYkdRb0lIVWdLVnh1WEhSY2RGeDBmVnh1WEhSY2RIMWNibHgwWEhSeVpYUjFjbTRnVUhKdmJXbHpaUzVoYkd3b0lHVWdLVnh1WEhSOUxDQnBMbTBnUFNCMExDQnBMbU1nUFNCdUxDQnBMbVFnUFNCbWRXNWpkR2x2YmlnZ2RDd2daU3dnYmlBcElIdGNibHgwWEhScExtOG9JSFFzSUdVZ0tTQjhmQ0JQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb0lIUXNJR1VzSUh0Y2JseDBYSFJjZEdWdWRXMWxjbUZpYkdVNklDRXdMRnh1WEhSY2RGeDBaMlYwT2lCdVhHNWNkRngwZlNBcFhHNWNkSDBzSUdrdWNpQTlJR1oxYm1OMGFXOXVLQ0IwSUNrZ2UxeHVYSFJjZEZ3aWRXNWtaV1pwYm1Wa1hDSWdJVDBnZEhsd1pXOW1JRk41YldKdmJDQW1KaUJUZVcxaWIyd3VkRzlUZEhKcGJtZFVZV2NnSmlZZ1QySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLQ0IwTENCVGVXMWliMnd1ZEc5VGRISnBibWRVWVdjc0lIc2dkbUZzZFdVNklGd2lUVzlrZFd4bFhDSWdmU0FwTENCUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29JSFFzSUZ3aVgxOWxjMDF2WkhWc1pWd2lMQ0I3SUhaaGJIVmxPaUFoTUNCOUlDbGNibHgwZlN3Z2FTNTBJRDBnWm5WdVkzUnBiMjRvSUhRc0lHVWdLU0I3WEc1Y2RGeDBhV1lnS0NBeElDWWdaU0FtSmlBb2RDQTlJR2tvSUhRZ0tTa3NJRGdnSmlCbElDa2dlMXh1WEhSY2RGeDBjbVYwZFhKdUlIUTdYRzVjZEZ4MGZWeHVYSFJjZEdsbUlDZ2dOQ0FtSUdVZ0ppWWdYQ0p2WW1wbFkzUmNJaUE5UFNCMGVYQmxiMllnZENBbUppQjBJQ1ltSUhRdVgxOWxjMDF2WkhWc1pTQXBJSHRjYmx4MFhIUmNkSEpsZEhWeWJpQjBPMXh1WEhSY2RIMWNibHgwWEhSMllYSWdiaUE5SUU5aWFtVmpkQzVqY21WaGRHVW9JRzUxYkd3Z0tUdGNibHgwWEhScFppQW9JR2t1Y2lnZ2JpQXBMQ0JQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb0lHNHNJRndpWkdWbVlYVnNkRndpTENCN1hHNWNkRngwWEhSbGJuVnRaWEpoWW14bE9pQWhNQ3hjYmx4MFhIUmNkSFpoYkhWbE9pQjBYRzVjZEZ4MGZTQXBMQ0F5SUNZZ1pTQW1KaUJjSW5OMGNtbHVaMXdpSUNFOUlIUjVjR1Z2WmlCMElDa2dlMXh1WEhSY2RGeDBabTl5SUNnZ2RtRnlJSElnYVc0Z2RDQXBJSHRjYmx4MFhIUmNkRngwYVM1a0tDQnVMQ0J5TENCbWRXNWpkR2x2YmlnZ1pTQXBJSHRjYmx4MFhIUmNkRngwWEhSeVpYUjFjbTRnZEZzZ1pTQmRYRzVjZEZ4MFhIUmNkSDB1WW1sdVpDZ2diblZzYkN3Z2NpQXBJQ2s3WEc1Y2RGeDBYSFI5WEc1Y2RGeDBmVnh1WEhSY2RISmxkSFZ5YmlCdVhHNWNkSDBzSUdrdWJpQTlJR1oxYm1OMGFXOXVLQ0IwSUNrZ2UxeHVYSFJjZEhaaGNpQmxJRDBnZENBbUppQjBMbDlmWlhOTmIyUjFiR1VnUHlCbWRXNWpkR2x2YmlncElIdGNibHgwWEhSY2RISmxkSFZ5YmlCMExtUmxabUYxYkhSY2JseDBYSFI5SURvZ1puVnVZM1JwYjI0b0tTQjdYRzVjZEZ4MFhIUnlaWFIxY200Z2RGeHVYSFJjZEgwN1hHNWNkRngwY21WMGRYSnVJR2t1WkNnZ1pTd2dYQ0poWENJc0lHVWdLU3dnWlZ4dVhIUjlMQ0JwTG04Z1BTQm1kVzVqZEdsdmJpZ2dkQ3dnWlNBcElIdGNibHgwWEhSeVpYUjFjbTRnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzS0NCMExDQmxJQ2xjYmx4MGZTd2dhUzV3SUQwZ1hDSm9kSFJ3Y3pvdkwzQnNZWFJtYjNKdExuUjNhWFIwWlhJdVkyOXRMMXdpTENCcExtOWxJRDBnWm5WdVkzUnBiMjRvSUhRZ0tTQjdYRzVjZEZ4MGRHaHliM2NnWTI5dWMyOXNaUzVsY25KdmNpZ2dkQ0FwTENCMFhHNWNkSDA3WEc1Y2RIWmhjaUJ2SUQwZ2QybHVaRzkzTGw5ZmRIZDBkSEpzYkNBOUlIZHBibVJ2ZHk1ZlgzUjNkSFJ5Ykd3Z2ZId2dXMTBzSUhNZ1BTQnZMbkIxYzJndVltbHVaQ2dnYnlBcE8xeHVYSFJ2TG5CMWMyZ2dQU0JsTENCdklEMGdieTV6YkdsalpTZ3BPMXh1WEhSbWIzSWdLQ0IyWVhJZ1lTQTlJREE3SUdFZ1BDQnZMbXhsYm1kMGFEc2dZU0FyS3lBcElIdGNibHgwWEhSbEtDQnZXeUJoSUYwZ0tUdGNibHgwZlZ4dVhIUjJZWElnZFNBOUlITTdYRzVjZEdrb0lHa3VjeUE5SURrMklDbGNibjBvSUZ0Y2JseDBablZ1WTNScGIyNG9JSFFzSUdVc0lHNGdLU0I3WEc1Y2RGeDBkbUZ5SUhJZ1BTQnVLQ0F4SUNrN1hHNWNibHgwWEhSbWRXNWpkR2x2YmlCcEtDQjBMQ0JsSUNrZ2UxeHVYSFJjZEZ4MGRtRnlJRzQ3WEc1Y2RGeDBYSFJtYjNJZ0tDQnVJR2x1SUhRZ0tTQjdYRzVjZEZ4MFhIUmNkSFF1YUdGelQzZHVVSEp2Y0dWeWRIa2dKaVlnSVhRdWFHRnpUM2R1VUhKdmNHVnlkSGtvSUc0Z0tTQjhmQ0JsS0NCdUxDQjBXeUJ1SUYwZ0tUdGNibHgwWEhSY2RIMWNibHgwWEhSY2RISmxkSFZ5YmlCMFhHNWNkRngwZlZ4dVhHNWNkRngwWm5WdVkzUnBiMjRnYnlnZ2RDQXBJSHRjYmx4MFhIUmNkSEpsZEhWeWJpQjdmUzUwYjFOMGNtbHVaeTVqWVd4c0tDQjBJQ2t1YldGMFkyZ29JQzljWEhNb1cyRXRla0V0V2wwcktTOGdLVnNnTVNCZExuUnZURzkzWlhKRFlYTmxLQ2xjYmx4MFhIUjlYRzVjYmx4MFhIUm1kVzVqZEdsdmJpQnpLQ0IwSUNrZ2UxeHVYSFJjZEZ4MGNtVjBkWEp1SUhRZ1BUMDlJRTlpYW1WamRDZ2dkQ0FwWEc1Y2RGeDBmVnh1WEc1Y2RGeDBablZ1WTNScGIyNGdZU2dnZENBcElIdGNibHgwWEhSY2RIWmhjaUJsTzF4dVhIUmNkRngwYVdZZ0tDQWhjeWdnZENBcElDa2dlMXh1WEhSY2RGeDBYSFJ5WlhSMWNtNGdJVEU3WEc1Y2RGeDBYSFI5WEc1Y2RGeDBYSFJwWmlBb0lFOWlhbVZqZEM1clpYbHpJQ2tnZTF4dVhIUmNkRngwWEhSeVpYUjFjbTRnSVU5aWFtVmpkQzVyWlhsektDQjBJQ2t1YkdWdVozUm9PMXh1WEhSY2RGeDBmVnh1WEhSY2RGeDBabTl5SUNnZ1pTQnBiaUIwSUNrZ2UxeHVYSFJjZEZ4MFhIUnBaaUFvSUhRdWFHRnpUM2R1VUhKdmNHVnlkSGtvSUdVZ0tTQXBJSHRjYmx4MFhIUmNkRngwWEhSeVpYUjFjbTRnSVRFN1hHNWNkRngwWEhSY2RIMWNibHgwWEhSY2RIMWNibHgwWEhSY2RISmxkSFZ5YmlBaE1GeHVYSFJjZEgxY2JseHVYSFJjZEdaMWJtTjBhVzl1SUhVb0lIUWdLU0I3WEc1Y2RGeDBYSFJ5WlhSMWNtNGdkQ0EvSUVGeWNtRjVMbkJ5YjNSdmRIbHdaUzV6YkdsalpTNWpZV3hzS0NCMElDa2dPaUJiWFZ4dVhIUmNkSDFjYmx4dVhIUmNkSFF1Wlhod2IzSjBjeUE5SUh0Y2JseDBYSFJjZEdGMVp6b2dablZ1WTNScGIyNG9JSFFnS1NCN1hHNWNkRngwWEhSY2RISmxkSFZ5YmlCMUtDQmhjbWQxYldWdWRITWdLUzV6YkdsalpTZ2dNU0FwTG1admNrVmhZMmdvSUdaMWJtTjBhVzl1S0NCbElDa2dlMXh1WEhSY2RGeDBYSFJjZEdrb0lHVXNJR1oxYm1OMGFXOXVLQ0JsTENCdUlDa2dlMXh1WEhSY2RGeDBYSFJjZEZ4MGRGc2daU0JkSUQwZ2JseHVYSFJjZEZ4MFhIUmNkSDBnS1Z4dVhIUmNkRngwWEhSOUlDa3NJSFJjYmx4MFhIUmNkSDBzWEc1Y2RGeDBYSFJoYzNsdVl6b2dablZ1WTNScGIyNG9JSFFzSUdVZ0tTQjdYRzVjZEZ4MFhIUmNkSEl1YzJWMFZHbHRaVzkxZENnZ1puVnVZM1JwYjI0b0tTQjdYRzVjZEZ4MFhIUmNkRngwZEM1allXeHNLQ0JsSUh4OElHNTFiR3dnS1Z4dVhIUmNkRngwWEhSOUxDQXdJQ2xjYmx4MFhIUmNkSDBzWEc1Y2RGeDBYSFJqYjIxd1lXTjBPaUJtZFc1amRHbHZiaUIwS0NCbElDa2dlMXh1WEhSY2RGeDBYSFJ5WlhSMWNtNGdhU2dnWlN3Z1puVnVZM1JwYjI0b0lHNHNJSElnS1NCN1hHNWNkRngwWEhSY2RGeDBjeWdnY2lBcElDWW1JQ2gwS0NCeUlDa3NJR0VvSUhJZ0tTQW1KaUJrWld4bGRHVWdaVnNnYmlCZEtTd2dkbTlwWkNBd0lDRTlQU0J5SUNZbUlHNTFiR3dnSVQwOUlISWdKaVlnWENKY0lpQWhQVDBnY2lCOGZDQmtaV3hsZEdVZ1pWc2diaUJkWEc1Y2RGeDBYSFJjZEgwZ0tTd2daVnh1WEhSY2RGeDBmU3hjYmx4MFhIUmNkR052Ym5SaGFXNXpPaUJtZFc1amRHbHZiaWdnZEN3Z1pTQXBJSHRjYmx4MFhIUmNkRngwY21WMGRYSnVJQ0VvSVhRZ2ZId2dJWFF1YVc1a1pYaFBaaWtnSmlZZ2RDNXBibVJsZUU5bUtDQmxJQ2tnUGlBdElERmNibHgwWEhSY2RIMHNYRzVjZEZ4MFhIUm1iM0pKYmpvZ2FTeGNibHgwWEhSY2RHbHpUMkpxWldOME9pQnpMRnh1WEhSY2RGeDBhWE5GYlhCMGVVOWlhbVZqZERvZ1lTeGNibHgwWEhSY2RIUnZWSGx3WlRvZ2J5eGNibHgwWEhSY2RHbHpWSGx3WlRvZ1puVnVZM1JwYjI0b0lIUXNJR1VnS1NCN1hHNWNkRngwWEhSY2RISmxkSFZ5YmlCMElEMDlJRzhvSUdVZ0tWeHVYSFJjZEZ4MGZTeGNibHgwWEhSY2RIUnZVbVZoYkVGeWNtRjVPaUIxWEc1Y2RGeDBmVnh1WEhSOUxDQm1kVzVqZEdsdmJpZ2dkQ3dnWlNBcElIdGNibHgwWEhSMExtVjRjRzl5ZEhNZ1BTQjNhVzVrYjNkY2JseDBmU3dnWm5WdVkzUnBiMjRvSUhRc0lHVXNJRzRnS1NCN1hHNWNkRngwZG1GeUlISWdQU0J1S0NBMklDazdYRzVjZEZ4MGRDNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNG9LU0I3WEc1Y2RGeDBYSFIyWVhJZ2RDQTlJSFJvYVhNN1hHNWNkRngwWEhSMGFHbHpMbkJ5YjIxcGMyVWdQU0J1WlhjZ2NpZ2dablZ1WTNScGIyNG9JR1VzSUc0Z0tTQjdYRzVjZEZ4MFhIUmNkSFF1Y21WemIyeDJaU0E5SUdVc0lIUXVjbVZxWldOMElEMGdibHh1WEhSY2RGeDBmU0FwWEc1Y2RGeDBmVnh1WEhSOUxDQm1kVzVqZEdsdmJpZ2dkQ3dnWlN3Z2JpQXBJSHRjYmx4MFhIUjJZWElnY2lBOUlHNG9JREV4SUNrc1hHNWNkRngwWEhScElEMGdMeWcvT2w1OEtEODZhSFIwY0hNL09pay9YRnd2WEZ3dktEODZkM2QzWEZ3dUtUOTBkMmwwZEdWeVhGd3VZMjl0S0Q4Nk9seGNaQ3NwUHlnL09seGNMMmx1ZEdWdWRGeGNMeWcvT21admJHeHZkM3gxYzJWeUtWeGNMejljWEQ5elkzSmxaVzVmYm1GdFpUMThLRDg2WEZ3dkl5RXBQMXhjTHlrcFFEOG9XMXhjZDEwcktTZy9PbHhjUDN3bWZDUXBMMmtzWEc1Y2RGeDBYSFJ2SUQwZ0x5Zy9PbDU4S0Q4NmFIUjBjSE0vT2lrL1hGd3ZYRnd2S0Q4NmQzZDNYRnd1S1Q5MGQybDBkR1Z5WEZ3dVkyOXRLRDg2T2x4Y1pDc3BQMXhjTHlnL09pTWhYRnd2S1Q5YlhGeDNYMTByWEZ3dmMzUmhkSFZ6S0Q4NlpYTXBQMXhjTHlrb1hGeGtLeWt2YVN4Y2JseDBYSFJjZEhNZ1BTQXZYbWgwZEhBb2N6OHBPbHhjTDF4Y0x5aGNYSGNyWEZ3dUtTcDBkMmwwZEdWeVhGd3VZMjl0S0ZzNkwxMThKQ2t2YVN3Z1lTQTlJQzllYUhSMGNDaHpQeWs2WEZ3dlhGd3ZLSFJ2Ym54d1luTXBYRnd1ZEhkcGJXZGNYQzVqYjIwdkxGeHVYSFJjZEZ4MGRTQTlJQzllSXo4b1cxNHVMRHcrSVZ4Y2N5OGpYRnd0S0NrblhDSmRLeWtrTHl3Z1l5QTlJQzkwZDJsMGRHVnlYRnd1WTI5dEtEODZPbHhjWkhzeUxEUjlLVDljWEM5cGJuUmxiblJjWEM4b1hGeDNLeWt2TEZ4dVhIUmNkRngwWkNBOUlDOWVhSFIwY0hNL09seGNMMXhjTHlnL09uZDNkMXhjTGlrL2RIZHBkSFJsY2x4Y0xtTnZiVnhjTDF4Y2R5dGNYQzkwYVcxbGJHbHVaWE5jWEM4b1hGeGtLeWt2YVN4Y2JseDBYSFJjZEdZZ1BTQXZYbWgwZEhCelB6cGNYQzljWEM4b1B6cDNkM2RjWEM0cFAzUjNhWFIwWlhKY1hDNWpiMjFjWEM5cFhGd3ZiVzl0Wlc1MGMxeGNMeWhjWEdRcktTOXBMRnh1WEhSY2RGeDBiQ0E5SUM5ZWFIUjBjSE0vT2x4Y0wxeGNMeWcvT25kM2QxeGNMaWsvZEhkcGRIUmxjbHhjTG1OdmJWeGNMeWhjWEhjcktWeGNMeWcvT214cGEyVnpmR1poZG05eWFYUmxjeWt2YVN4Y2JseDBYSFJjZEdnZ1BTQXZYbWgwZEhCelB6cGNYQzljWEM4b1B6cDNkM2RjWEM0cFAzUjNhWFIwWlhKY1hDNWpiMjFjWEM4b1hGeDNLeWxjWEM5c2FYTjBjMXhjTHloYlhGeDNMU1ZkS3lrdmFTeGNibHgwWEhSY2RIQWdQU0F2WG1oMGRIQnpQenBjWEM5Y1hDOG9QenAzZDNkY1hDNHBQM1IzYVhSMFpYSmNYQzVqYjIxY1hDOXBYRnd2YkdsMlpWeGNMeWhjWEdRcktTOXBMRnh1WEhSY2RGeDBiU0E5SUM5ZWFIUjBjSE0vT2x4Y0wxeGNMM041Ym1ScFkyRjBhVzl1WEZ3dWRIZHBkSFJsY2x4Y0xtTnZiVnhjTDNObGRIUnBibWR6TDJrc1hHNWNkRngwWEhSMklEMGdMMTVvZEhSd2N6ODZYRnd2WEZ3dktHeHZZMkZzYUc5emRIeHdiR0YwWm05eWJTbGNYQzUwZDJsMGRHVnlYRnd1WTI5dEtEODZPbHhjWkNzcFAxeGNMM2RwWkdkbGRITmNYQzkzYVdSblpYUmZhV1p5WVcxbFhGd3VLQzRyS1M5cExGeHVYSFJjZEZ4MFp5QTlJQzllYUhSMGNITS9PbHhjTDF4Y0x5Zy9PbmQzZDF4Y0xpay9kSGRwZEhSbGNseGNMbU52YlZ4Y0wzTmxZWEpqYUZ4Y1AzRTlLRnhjZHlzcEwyazdYRzVjYmx4MFhIUm1kVzVqZEdsdmJpQjNLQ0IwSUNrZ2UxeHVYSFJjZEZ4MGNtVjBkWEp1SUZ3aWMzUnlhVzVuWENJZ1BUMGdkSGx3Wlc5bUlIUWdKaVlnYVM1MFpYTjBLQ0IwSUNrZ0ppWWdVbVZuUlhod0xpUXhMbXhsYm1kMGFDQThQU0F5TUZ4dVhIUmNkSDFjYmx4dVhIUmNkR1oxYm1OMGFXOXVJSGtvSUhRZ0tTQjdYRzVjZEZ4MFhIUnBaaUFvSUhjb0lIUWdLU0FwSUh0Y2JseDBYSFJjZEZ4MGNtVjBkWEp1SUZKbFowVjRjQzRrTVZ4dVhIUmNkRngwZlZ4dVhIUmNkSDFjYmx4dVhIUmNkR1oxYm1OMGFXOXVJR0lvSUhRc0lHVWdLU0I3WEc1Y2RGeDBYSFIyWVhJZ2JpQTlJSEl1WkdWamIyUmxWVkpNS0NCMElDazdYRzVjZEZ4MFhIUnBaaUFvSUdVZ1BTQmxJSHg4SUNFeExDQnVMbk5qY21WbGJsOXVZVzFsSUQwZ2VTZ2dkQ0FwTENCdUxuTmpjbVZsYmw5dVlXMWxJQ2tnZTF4dVhIUmNkRngwWEhSeVpYUjFjbTRnY2k1MWNtd29JRndpYUhSMGNITTZMeTkwZDJsMGRHVnlMbU52YlM5cGJuUmxiblF2WENJZ0t5QW9aU0EvSUZ3aVptOXNiRzkzWENJZ09pQmNJblZ6WlhKY0lpa3NJRzRnS1Z4dVhIUmNkRngwZlZ4dVhIUmNkSDFjYmx4dVhIUmNkR1oxYm1OMGFXOXVJRjhvSUhRZ0tTQjdYRzVjZEZ4MFhIUnlaWFIxY200Z1hDSnpkSEpwYm1kY0lpQTlQU0IwZVhCbGIyWWdkQ0FtSmlCMUxuUmxjM1FvSUhRZ0tWeHVYSFJjZEgxY2JseHVYSFJjZEdaMWJtTjBhVzl1SUVVb0lIUWdLU0I3WEc1Y2RGeDBYSFJ5WlhSMWNtNGdYQ0p6ZEhKcGJtZGNJaUE5UFNCMGVYQmxiMllnZENBbUppQnZMblJsYzNRb0lIUWdLVnh1WEhSY2RIMWNibHh1WEhSY2RIUXVaWGh3YjNKMGN5QTlJSHRjYmx4MFhIUmNkR2x6U0dGemFGUmhaem9nWHl4Y2JseDBYSFJjZEdoaGMyaFVZV2M2SUdaMWJtTjBhVzl1S0NCMExDQmxJQ2tnZTF4dVhIUmNkRngwWEhScFppQW9JR1VnUFNCMmIybGtJREFnUFQwOUlHVWdmSHdnWlN3Z1h5Z2dkQ0FwSUNrZ2UxeHVYSFJjZEZ4MFhIUmNkSEpsZEhWeWJpQW9aU0EvSUZ3aUkxd2lJRG9nWENKY0lpa2dLeUJTWldkRmVIQXVKREZjYmx4MFhIUmNkRngwZlZ4dVhIUmNkRngwZlN4Y2JseDBYSFJjZEdselUyTnlaV1Z1VG1GdFpUb2dkeXhjYmx4MFhIUmNkSE5qY21WbGJrNWhiV1U2SUhrc1hHNWNkRngwWEhScGMxTjBZWFIxY3pvZ1JTeGNibHgwWEhSY2RITjBZWFIxY3pvZ1puVnVZM1JwYjI0b0lIUWdLU0I3WEc1Y2RGeDBYSFJjZEhKbGRIVnliaUJGS0NCMElDa2dKaVlnVW1WblJYaHdMaVF4WEc1Y2RGeDBYSFI5TEZ4dVhIUmNkRngwYVc1MFpXNTBSbTl5VUhKdlptbHNaVlZTVERvZ1lpeGNibHgwWEhSY2RHbHVkR1Z1ZEVadmNrWnZiR3h2ZDFWU1REb2dablZ1WTNScGIyNG9JSFFnS1NCN1hHNWNkRngwWEhSY2RISmxkSFZ5YmlCaUtDQjBMQ0FoTUNBcFhHNWNkRngwWEhSOUxGeHVYSFJjZEZ4MGFYTlVkMmwwZEdWeVZWSk1PaUJtZFc1amRHbHZiaWdnZENBcElIdGNibHgwWEhSY2RGeDBjbVYwZFhKdUlITXVkR1Z6ZENnZ2RDQXBYRzVjZEZ4MFhIUjlMRnh1WEhSY2RGeDBhWE5VZDJsdFoxVlNURG9nWm5WdVkzUnBiMjRvSUhRZ0tTQjdYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQmhMblJsYzNRb0lIUWdLVnh1WEhSY2RGeDBmU3hjYmx4MFhIUmNkR2x6U1c1MFpXNTBWVkpNT2lCbWRXNWpkR2x2YmlnZ2RDQXBJSHRjYmx4MFhIUmNkRngwY21WMGRYSnVJR011ZEdWemRDZ2dkQ0FwWEc1Y2RGeDBYSFI5TEZ4dVhIUmNkRngwYVhOVFpYUjBhVzVuYzFWU1REb2dablZ1WTNScGIyNG9JSFFnS1NCN1hHNWNkRngwWEhSY2RISmxkSFZ5YmlCdExuUmxjM1FvSUhRZ0tWeHVYSFJjZEZ4MGZTeGNibHgwWEhSY2RHbHpWMmxrWjJWMFNXWnlZVzFsVlZKTU9pQm1kVzVqZEdsdmJpZ2dkQ0FwSUh0Y2JseDBYSFJjZEZ4MGNtVjBkWEp1SUhZdWRHVnpkQ2dnZENBcFhHNWNkRngwWEhSOUxGeHVYSFJjZEZ4MGFYTlRaV0Z5WTJoVmNtdzZJR1oxYm1OMGFXOXVLQ0IwSUNrZ2UxeHVYSFJjZEZ4MFhIUnlaWFIxY200Z1p5NTBaWE4wS0NCMElDbGNibHgwWEhSY2RIMHNYRzVjZEZ4MFhIUnlaV2RsZUdWdU9pQjdJSEJ5YjJacGJHVTZJR2tnZlN4Y2JseDBYSFJjZEcxdmJXVnVkRWxrT2lCbWRXNWpkR2x2YmlnZ2RDQXBJSHRjYmx4MFhIUmNkRngwY21WMGRYSnVJR1l1ZEdWemRDZ2dkQ0FwSUNZbUlGSmxaMFY0Y0M0a01WeHVYSFJjZEZ4MGZTeGNibHgwWEhSY2RHTnZiR3hsWTNScGIyNUpaRG9nWm5WdVkzUnBiMjRvSUhRZ0tTQjdYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQmtMblJsYzNRb0lIUWdLU0FtSmlCU1pXZEZlSEF1SkRGY2JseDBYSFJjZEgwc1hHNWNkRngwWEhScGJuUmxiblJVZVhCbE9pQm1kVzVqZEdsdmJpZ2dkQ0FwSUh0Y2JseDBYSFJjZEZ4MGNtVjBkWEp1SUdNdWRHVnpkQ2dnZENBcElDWW1JRkpsWjBWNGNDNGtNVnh1WEhSY2RGeDBmU3hjYmx4MFhIUmNkR3hwYTJWelUyTnlaV1Z1VG1GdFpUb2dablZ1WTNScGIyNG9JSFFnS1NCN1hHNWNkRngwWEhSY2RISmxkSFZ5YmlCc0xuUmxjM1FvSUhRZ0tTQW1KaUJTWldkRmVIQXVKREZjYmx4MFhIUmNkSDBzWEc1Y2RGeDBYSFJzYVhOMFUyTnlaV1Z1VG1GdFpVRnVaRk5zZFdjNklHWjFibU4wYVc5dUtDQjBJQ2tnZTF4dVhIUmNkRngwWEhSMllYSWdaU3dnYml3Z2NqdGNibHgwWEhSY2RGeDBhV1lnS0NCb0xuUmxjM1FvSUhRZ0tTQXBJSHRjYmx4MFhIUmNkRngwWEhSbElEMGdVbVZuUlhod0xpUXhMQ0J1SUQwZ1VtVm5SWGh3TGlReU8xeHVYSFJjZEZ4MFhIUmNkSFJ5ZVNCN1hHNWNkRngwWEhSY2RGeDBYSFJ5SUQwZ1pHVmpiMlJsVlZKSlEyOXRjRzl1Wlc1MEtDQnVJQ2xjYmx4MFhIUmNkRngwWEhSOUlHTmhkR05vSUNnZ2RDQXBJSHRjYmx4MFhIUmNkRngwWEhSOVhHNWNkRngwWEhSY2RGeDBjbVYwZFhKdUlIdGNibHgwWEhSY2RGeDBYSFJjZEc5M2JtVnlVMk55WldWdVRtRnRaVG9nWlN4Y2JseDBYSFJjZEZ4MFhIUmNkSE5zZFdjNklISWdmSHdnYmx4dVhIUmNkRngwWEhSY2RIMWNibHgwWEhSY2RGeDBmVnh1WEhSY2RGeDBYSFJ5WlhSMWNtNGdJVEZjYmx4MFhIUmNkSDBzWEc1Y2RGeDBYSFJsZG1WdWRFbGtPaUJtZFc1amRHbHZiaWdnZENBcElIdGNibHgwWEhSY2RGeDBjbVYwZFhKdUlIQXVkR1Z6ZENnZ2RDQXBJQ1ltSUZKbFowVjRjQzRrTVZ4dVhIUmNkRngwZlZ4dVhIUmNkSDFjYmx4MGZTd2dablZ1WTNScGIyNG9JSFFzSUdVZ0tTQjdYRzVjZEZ4MGRDNWxlSEJ2Y25SeklEMGdaRzlqZFcxbGJuUmNibHgwZlN3Z1puVnVZM1JwYjI0b0lIUXNJR1VzSUc0Z0tTQjdYRzVjZEZ4MGRtRnlJSElnUFNCdUtDQXdJQ2tzSUdrZ1BTQmJJVEFzSURFc0lGd2lNVndpTENCY0ltOXVYQ0lzSUZ3aVQwNWNJaXdnWENKMGNuVmxYQ0lzSUZ3aVZGSlZSVndpTENCY0lubGxjMXdpTENCY0lsbEZVMXdpWFN4Y2JseDBYSFJjZEc4Z1BTQmJJVEVzSURBc0lGd2lNRndpTENCY0ltOW1abHdpTENCY0lrOUdSbHdpTENCY0ltWmhiSE5sWENJc0lGd2lSa0ZNVTBWY0lpd2dYQ0p1YjF3aUxDQmNJazVQWENKZE8xeHVYRzVjZEZ4MFpuVnVZM1JwYjI0Z2N5Z2dkQ0FwSUh0Y2JseDBYSFJjZEhKbGRIVnliaUIyYjJsa0lEQWdJVDA5SUhRZ0ppWWdiblZzYkNBaFBUMGdkQ0FtSmlCY0lsd2lJQ0U5UFNCMFhHNWNkRngwZlZ4dVhHNWNkRngwWm5WdVkzUnBiMjRnWVNnZ2RDQXBJSHRjYmx4MFhIUmNkSEpsZEhWeWJpQmpLQ0IwSUNrZ0ppWWdkQ0FsSURFZ1BUMGdNRnh1WEhSY2RIMWNibHh1WEhSY2RHWjFibU4wYVc5dUlIVW9JSFFnS1NCN1hHNWNkRngwWEhSeVpYUjFjbTRnWXlnZ2RDQXBJQ1ltSUNGaEtDQjBJQ2xjYmx4MFhIUjlYRzVjYmx4MFhIUm1kVzVqZEdsdmJpQmpLQ0IwSUNrZ2UxeHVYSFJjZEZ4MGNtVjBkWEp1SUhNb0lIUWdLU0FtSmlBaGFYTk9ZVTRvSUhRZ0tWeHVYSFJjZEgxY2JseHVYSFJjZEdaMWJtTjBhVzl1SUdRb0lIUWdLU0I3WEc1Y2RGeDBYSFJ5WlhSMWNtNGdjaTVqYjI1MFlXbHVjeWdnYnl3Z2RDQXBYRzVjZEZ4MGZWeHVYRzVjZEZ4MFpuVnVZM1JwYjI0Z1ppZ2dkQ0FwSUh0Y2JseDBYSFJjZEhKbGRIVnliaUJ5TG1OdmJuUmhhVzV6S0NCcExDQjBJQ2xjYmx4MFhIUjlYRzVjYmx4MFhIUjBMbVY0Y0c5eWRITWdQU0I3WEc1Y2RGeDBYSFJvWVhOV1lXeDFaVG9nY3l4Y2JseDBYSFJjZEdselNXNTBPaUJoTEZ4dVhIUmNkRngwYVhOR2JHOWhkRG9nZFN4Y2JseDBYSFJjZEdselRuVnRZbVZ5T2lCakxGeHVYSFJjZEZ4MGFYTlRkSEpwYm1jNklHWjFibU4wYVc5dUtDQjBJQ2tnZTF4dVhIUmNkRngwWEhSeVpYUjFjbTRnWENKemRISnBibWRjSWlBOVBUMGdjaTUwYjFSNWNHVW9JSFFnS1Z4dVhIUmNkRngwZlN4Y2JseDBYSFJjZEdselFYSnlZWGs2SUdaMWJtTjBhVzl1S0NCMElDa2dlMXh1WEhSY2RGeDBYSFJ5WlhSMWNtNGdjeWdnZENBcElDWW1JRndpWVhKeVlYbGNJaUE5UFNCeUxuUnZWSGx3WlNnZ2RDQXBYRzVjZEZ4MFhIUjlMRnh1WEhSY2RGeDBhWE5VY25WMGFGWmhiSFZsT2lCbUxGeHVYSFJjZEZ4MGFYTkdZV3h6WlZaaGJIVmxPaUJrTEZ4dVhIUmNkRngwWVhOSmJuUTZJR1oxYm1OMGFXOXVLQ0IwSUNrZ2UxeHVYSFJjZEZ4MFhIUnBaaUFvSUdFb0lIUWdLU0FwSUh0Y2JseDBYSFJjZEZ4MFhIUnlaWFIxY200Z2NHRnljMlZKYm5Rb0lIUXNJREV3SUNsY2JseDBYSFJjZEZ4MGZWeHVYSFJjZEZ4MGZTeGNibHgwWEhSY2RHRnpSbXh2WVhRNklHWjFibU4wYVc5dUtDQjBJQ2tnZTF4dVhIUmNkRngwWEhScFppQW9JSFVvSUhRZ0tTQXBJSHRjYmx4MFhIUmNkRngwWEhSeVpYUjFjbTRnZEZ4dVhIUmNkRngwWEhSOVhHNWNkRngwWEhSOUxGeHVYSFJjZEZ4MFlYTk9kVzFpWlhJNklHWjFibU4wYVc5dUtDQjBJQ2tnZTF4dVhIUmNkRngwWEhScFppQW9JR01vSUhRZ0tTQXBJSHRjYmx4MFhIUmNkRngwWEhSeVpYUjFjbTRnZEZ4dVhIUmNkRngwWEhSOVhHNWNkRngwWEhSOUxGeHVYSFJjZEZ4MFlYTkNiMjlzWldGdU9pQm1kVzVqZEdsdmJpZ2dkQ0FwSUh0Y2JseDBYSFJjZEZ4MGNtVjBkWEp1SUNFb0lYTW9JSFFnS1NCOGZDQWhaaWdnZENBcElDWW1JQ2hrS0NCMElDa2dmSHdnSVhRcEtWeHVYSFJjZEZ4MGZWeHVYSFJjZEgxY2JseDBmU3dnWm5WdVkzUnBiMjRvSUhRc0lHVXNJRzRnS1NCN1hHNWNkRngwZG1GeUlISWdQU0J1S0NBeElDa3NJR2tnUFNCdUtDQXlNaUFwTENCdklEMGdiaWdnTkRnZ0tUdGNibHgwWEhScExtaGhjMUJ5YjIxcGMyVlRkWEJ3YjNKMEtDa2dmSHdnS0hJdVVISnZiV2x6WlNBOUlHOHBMQ0IwTG1WNGNHOXlkSE1nUFNCeUxsQnliMjFwYzJWY2JseDBmU3dnWm5WdVkzUnBiMjRvSUhRc0lHVXNJRzRnS1NCN1hHNWNkRngwZG1GeUlISWdQU0J1S0NBd0lDazdYRzVjZEZ4MGRDNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNG9JSFFzSUdVZ0tTQjdYRzVjZEZ4MFhIUjJZWElnYmlBOUlFRnljbUY1TG5CeWIzUnZkSGx3WlM1emJHbGpaUzVqWVd4c0tDQmhjbWQxYldWdWRITXNJRElnS1R0Y2JseDBYSFJjZEhKbGRIVnliaUJtZFc1amRHbHZiaWdwSUh0Y2JseDBYSFJjZEZ4MGRtRnlJR2tnUFNCeUxuUnZVbVZoYkVGeWNtRjVLQ0JoY21kMWJXVnVkSE1nS1R0Y2JseDBYSFJjZEZ4MGNtVjBkWEp1SUhRdVlYQndiSGtvSUdVc0lHNHVZMjl1WTJGMEtDQnBJQ2tnS1Z4dVhIUmNkRngwZlZ4dVhIUmNkSDFjYmx4MGZTd2dablZ1WTNScGIyNG9JSFFzSUdVZ0tTQjdYRzVjZEZ4MGRDNWxlSEJ2Y25SeklEMGdiRzlqWVhScGIyNWNibHgwZlN3Z1puVnVZM1JwYjI0b0lIUXNJR1VzSUc0Z0tTQjdYRzVjZEZ4MGRtRnlJSElnUFNCdUtDQTFNQ0FwTzF4dVhIUmNkSFF1Wlhod2IzSjBjeUE5SUc1bGR5QnlLQ0JjSWw5ZmRIZDBkSEpjSWlBcFhHNWNkSDBzSUdaMWJtTjBhVzl1S0NCMExDQmxMQ0J1SUNrZ2UxeHVYSFJjZEhaaGNpQnlJRDBnYmlnZ01DQXBMQ0JwSUQwZ0wxeGNZaWhiWEZ4M0xWOWRLeWxjWEdJdlp6dGNibHh1WEhSY2RHWjFibU4wYVc5dUlHOG9JSFFnS1NCN1hHNWNkRngwWEhSeVpYUjFjbTRnYm1WM0lGSmxaMFY0Y0NnZ1hDSmNYRnhjWWx3aUlDc2dkQ0FySUZ3aVhGeGNYR0pjSWl3Z1hDSm5YQ0lnS1Z4dVhIUmNkSDFjYmx4dVhIUmNkR1oxYm1OMGFXOXVJSE1vSUhRc0lHVWdLU0I3WEc1Y2RGeDBYSFIwTG1Oc1lYTnpUR2x6ZENBL0lIUXVZMnhoYzNOTWFYTjBMbUZrWkNnZ1pTQXBJRG9nYnlnZ1pTQXBMblJsYzNRb0lIUXVZMnhoYzNOT1lXMWxJQ2tnZkh3Z0tIUXVZMnhoYzNOT1lXMWxJQ3M5SUZ3aUlGd2lJQ3NnWlNsY2JseDBYSFI5WEc1Y2JseDBYSFJtZFc1amRHbHZiaUJoS0NCMExDQmxJQ2tnZTF4dVhIUmNkRngwZEM1amJHRnpjMHhwYzNRZ1B5QjBMbU5zWVhOelRHbHpkQzV5WlcxdmRtVW9JR1VnS1NBNklIUXVZMnhoYzNOT1lXMWxJRDBnZEM1amJHRnpjMDVoYldVdWNtVndiR0ZqWlNnZ2J5Z2daU0FwTENCY0lpQmNJaUFwWEc1Y2RGeDBmVnh1WEc1Y2RGeDBablZ1WTNScGIyNGdkU2dnZEN3Z1pTQXBJSHRjYmx4MFhIUmNkSEpsZEhWeWJpQjBMbU5zWVhOelRHbHpkQ0EvSUhRdVkyeGhjM05NYVhOMExtTnZiblJoYVc1ektDQmxJQ2tnT2lCeUxtTnZiblJoYVc1ektDQmpLQ0IwSUNrc0lHVWdLVnh1WEhSY2RIMWNibHh1WEhSY2RHWjFibU4wYVc5dUlHTW9JSFFnS1NCN1hHNWNkRngwWEhSeVpYUjFjbTRnY2k1MGIxSmxZV3hCY25KaGVTZ2dkQzVqYkdGemMweHBjM1FnUHlCMExtTnNZWE56VEdsemRDQTZJSFF1WTJ4aGMzTk9ZVzFsTG0xaGRHTm9LQ0JwSUNrZ0tWeHVYSFJjZEgxY2JseHVYSFJjZEhRdVpYaHdiM0owY3lBOUlIdGNibHgwWEhSY2RHRmtaRG9nY3l4Y2JseDBYSFJjZEhKbGJXOTJaVG9nWVN4Y2JseDBYSFJjZEhKbGNHeGhZMlU2SUdaMWJtTjBhVzl1S0NCMExDQmxMQ0J1SUNrZ2UxeHVYSFJjZEZ4MFhIUnBaaUFvSUhRdVkyeGhjM05NYVhOMElDWW1JSFVvSUhRc0lHVWdLU0FwSUh0Y2JseDBYSFJjZEZ4MFhIUnlaWFIxY200Z1lTZ2dkQ3dnWlNBcExDQjJiMmxrSUhNb0lIUXNJRzRnS1R0Y2JseDBYSFJjZEZ4MGZWeHVYSFJjZEZ4MFhIUjBMbU5zWVhOelRtRnRaU0E5SUhRdVkyeGhjM05PWVcxbExuSmxjR3hoWTJVb0lHOG9JR1VnS1N3Z2JpQXBYRzVjZEZ4MFhIUjlMRnh1WEhSY2RGeDBkRzluWjJ4bE9pQm1kVzVqZEdsdmJpZ2dkQ3dnWlN3Z2JpQXBJSHRjYmx4MFhIUmNkRngwY21WMGRYSnVJSFp2YVdRZ01DQTlQVDBnYmlBbUppQjBMbU5zWVhOelRHbHpkQ0FtSmlCMExtTnNZWE56VEdsemRDNTBiMmRuYkdVZ1B5QjBMbU5zWVhOelRHbHpkQzUwYjJkbmJHVW9JR1VzSUc0Z0tTQTZJQ2h1SUQ4Z2N5Z2dkQ3dnWlNBcElEb2dZU2dnZEN3Z1pTQXBMQ0J1S1Z4dVhIUmNkRngwZlN4Y2JseDBYSFJjZEhCeVpYTmxiblE2SUhVc1hHNWNkRngwWEhSc2FYTjBPaUJqWEc1Y2RGeDBmVnh1WEhSOUxDQm1kVzVqZEdsdmJpZ2dkQ3dnWlN3Z2JpQXBJSHRjYmx4MFhIUjJZWElnY2lBOUlHNG9JRFVnS1N3Z2FTQTlJRzRvSURBZ0tUdGNibHh1WEhSY2RHWjFibU4wYVc5dUlHOG9JSFFnS1NCN1hHNWNkRngwWEhSeVpYUjFjbTRnWlc1amIyUmxWVkpKUTI5dGNHOXVaVzUwS0NCMElDa3VjbVZ3YkdGalpTZ2dMMXhjS3k5bkxDQmNJaVV5UWx3aUlDa3VjbVZ3YkdGalpTZ2dMeWN2Wnl3Z1hDSWxNamRjSWlBcFhHNWNkRngwZlZ4dVhHNWNkRngwWm5WdVkzUnBiMjRnY3lnZ2RDQXBJSHRjYmx4MFhIUmNkSEpsZEhWeWJpQmtaV052WkdWVlVrbERiMjF3YjI1bGJuUW9JSFFnS1Z4dVhIUmNkSDFjYmx4dVhIUmNkR1oxYm1OMGFXOXVJR0VvSUhRZ0tTQjdYRzVjZEZ4MFhIUjJZWElnWlNBOUlGdGRPMXh1WEhSY2RGeDBjbVYwZFhKdUlHa3VabTl5U1c0b0lIUXNJR1oxYm1OMGFXOXVLQ0IwTENCdUlDa2dlMXh1WEhSY2RGeDBYSFIyWVhJZ2N5QTlJRzhvSUhRZ0tUdGNibHgwWEhSY2RGeDBhUzVwYzFSNWNHVW9JRndpWVhKeVlYbGNJaXdnYmlBcElIeDhJQ2h1SUQwZ1cyNWRLU3dnYmk1bWIzSkZZV05vS0NCbWRXNWpkR2x2YmlnZ2RDQXBJSHRjYmx4MFhIUmNkRngwWEhSeUxtaGhjMVpoYkhWbEtDQjBJQ2tnSmlZZ1pTNXdkWE5vS0NCeklDc2dYQ0k5WENJZ0t5QnZLQ0IwSUNrZ0tWeHVYSFJjZEZ4MFhIUjlJQ2xjYmx4MFhIUmNkSDBnS1N3Z1pTNXpiM0owS0NrdWFtOXBiaWdnWENJbVhDSWdLVnh1WEhSY2RIMWNibHh1WEhSY2RHWjFibU4wYVc5dUlIVW9JSFFnS1NCN1hHNWNkRngwWEhSMllYSWdaU0E5SUh0OU8xeHVYSFJjZEZ4MGNtVjBkWEp1SUhRZ1B5QW9kQzV6Y0d4cGRDZ2dYQ0ltWENJZ0tTNW1iM0pGWVdOb0tDQm1kVzVqZEdsdmJpZ2dkQ0FwSUh0Y2JseDBYSFJjZEZ4MGRtRnlJRzRnUFNCMExuTndiR2wwS0NCY0lqMWNJaUFwTENCeUlEMGdjeWdnYmxzZ01DQmRJQ2tzSUc4Z1BTQnpLQ0J1V3lBeElGMGdLVHRjYmx4MFhIUmNkRngwYVdZZ0tDQXlJRDA5SUc0dWJHVnVaM1JvSUNrZ2UxeHVYSFJjZEZ4MFhIUmNkR2xtSUNnZ0lXa3VhWE5VZVhCbEtDQmNJbUZ5Y21GNVhDSXNJR1ZiSUhJZ1hTQXBJQ2tnZTF4dVhIUmNkRngwWEhSY2RGeDBjbVYwZFhKdUlISWdhVzRnWlNBL0lDaGxXeUJ5SUYwZ1BTQmJaVnNnY2lCZFhTd2dkbTlwWkNCbFd5QnlJRjB1Y0hWemFDZ2dieUFwS1NBNklIWnZhV1FnS0dWYklISWdYU0E5SUc4cE8xeHVYSFJjZEZ4MFhIUmNkSDFjYmx4MFhIUmNkRngwWEhSbFd5QnlJRjB1Y0hWemFDZ2dieUFwWEc1Y2RGeDBYSFJjZEgxY2JseDBYSFJjZEgwZ0tTd2daU2tnT2lCN2ZWeHVYSFJjZEgxY2JseHVYSFJjZEhRdVpYaHdiM0owY3lBOUlIdGNibHgwWEhSY2RIVnliRG9nWm5WdVkzUnBiMjRvSUhRc0lHVWdLU0I3WEc1Y2RGeDBYSFJjZEhKbGRIVnliaUJoS0NCbElDa3ViR1Z1WjNSb0lENGdNQ0EvSUdrdVkyOXVkR0ZwYm5Nb0lIUXNJRndpUDF3aUlDa2dQeUIwSUNzZ1hDSW1YQ0lnS3lCaEtDQmxJQ2tnT2lCMElDc2dYQ0kvWENJZ0t5QmhLQ0JsSUNrZ09pQjBYRzVjZEZ4MFhIUjlMRnh1WEhSY2RGeDBaR1ZqYjJSbFZWSk1PaUJtZFc1amRHbHZiaWdnZENBcElIdGNibHgwWEhSY2RGeDBkbUZ5SUdVZ1BTQjBJQ1ltSUhRdWMzQnNhWFFvSUZ3aVAxd2lJQ2s3WEc1Y2RGeDBYSFJjZEhKbGRIVnliaUF5SUQwOUlHVXViR1Z1WjNSb0lEOGdkU2dnWlZzZ01TQmRJQ2tnT2lCN2ZWeHVYSFJjZEZ4MGZTeGNibHgwWEhSY2RHUmxZMjlrWlRvZ2RTeGNibHgwWEhSY2RHVnVZMjlrWlRvZ1lTeGNibHgwWEhSY2RHVnVZMjlrWlZCaGNuUTZJRzhzWEc1Y2RGeDBYSFJrWldOdlpHVlFZWEowT2lCelhHNWNkRngwZlZ4dVhIUjlMQ0JtZFc1amRHbHZiaWdnZEN3Z1pTd2diaUFwSUh0Y2JseDBYSFIyWVhJZ2NpQTlJRzRvSURnZ0tTd2dhU0E5SUc0b0lERWdLU3dnYnlBOUlHNG9JREFnS1N3Z2N5QTlJSHQ5TENCaElEMGdieTVqYjI1MFlXbHVjeWdnY2k1b2NtVm1MQ0JjSW5SM1gyUmxZblZuUFhSeWRXVmNJaUFwTzF4dVhHNWNkRngwWm5WdVkzUnBiMjRnZFNncElIdGNibHgwWEhSOVhHNWNibHgwWEhSbWRXNWpkR2x2YmlCaktDa2dlMXh1WEhSY2RIMWNibHh1WEhSY2RHWjFibU4wYVc5dUlHUW9LU0I3WEc1Y2RGeDBYSFJ5WlhSMWNtNGdhUzV3WlhKbWIzSnRZVzVqWlNBbUppQXJJR2t1Y0dWeVptOXliV0Z1WTJVdWJtOTNLQ2tnZkh3Z0t5QnVaWGNnUkdGMFpWeHVYSFJjZEgxY2JseHVYSFJjZEdaMWJtTjBhVzl1SUdZb0lIUXNJR1VnS1NCN1hHNWNkRngwWEhScFppQW9JR2t1WTI5dWMyOXNaU0FtSmlCcExtTnZibk52YkdWYklIUWdYU0FwSUh0Y2JseDBYSFJjZEZ4MGMzZHBkR05vSUNnZ1pTNXNaVzVuZEdnZ0tTQjdYRzVjZEZ4MFhIUmNkRngwWTJGelpTQXhPbHh1WEhSY2RGeDBYSFJjZEZ4MGFTNWpiMjV6YjJ4bFd5QjBJRjBvSUdWYklEQWdYU0FwTzF4dVhIUmNkRngwWEhSY2RGeDBZbkpsWVdzN1hHNWNkRngwWEhSY2RGeDBZMkZ6WlNBeU9seHVYSFJjZEZ4MFhIUmNkRngwYVM1amIyNXpiMnhsV3lCMElGMG9JR1ZiSURBZ1hTd2daVnNnTVNCZElDazdYRzVjZEZ4MFhIUmNkRngwWEhSaWNtVmhhenRjYmx4MFhIUmNkRngwWEhSallYTmxJRE02WEc1Y2RGeDBYSFJjZEZ4MFhIUnBMbU52Ym5OdmJHVmJJSFFnWFNnZ1pWc2dNQ0JkTENCbFd5QXhJRjBzSUdWYklESWdYU0FwTzF4dVhIUmNkRngwWEhSY2RGeDBZbkpsWVdzN1hHNWNkRngwWEhSY2RGeDBZMkZ6WlNBME9seHVYSFJjZEZ4MFhIUmNkRngwYVM1amIyNXpiMnhsV3lCMElGMG9JR1ZiSURBZ1hTd2daVnNnTVNCZExDQmxXeUF5SUYwc0lHVmJJRE1nWFNBcE8xeHVYSFJjZEZ4MFhIUmNkRngwWW5KbFlXczdYRzVjZEZ4MFhIUmNkRngwWTJGelpTQTFPbHh1WEhSY2RGeDBYSFJjZEZ4MGFTNWpiMjV6YjJ4bFd5QjBJRjBvSUdWYklEQWdYU3dnWlZzZ01TQmRMQ0JsV3lBeUlGMHNJR1ZiSURNZ1hTd2daVnNnTkNCZElDazdYRzVjZEZ4MFhIUmNkRngwWEhSaWNtVmhhenRjYmx4MFhIUmNkRngwWEhSa1pXWmhkV3gwT2x4dVhIUmNkRngwWEhSY2RGeDBNQ0FoUFQwZ1pTNXNaVzVuZEdnZ0ppWWdhUzVqYjI1emIyeGxMbmRoY200Z0ppWWdhUzVqYjI1emIyeGxMbmRoY200b0lGd2lkRzl2SUcxaGJua2djR0Z5WVcxeklIQmhjM05sWkNCMGJ5QnNiMmRuWlhJdVhDSWdLeUIwSUNsY2JseDBYSFJjZEZ4MGZWeHVYSFJjZEZ4MGZWeHVYSFJjZEgxY2JseHVYSFJjZEhRdVpYaHdiM0owY3lBOUlIdGNibHgwWEhSY2RHUmxka1Z5Y205eU9pQjFMRnh1WEhSY2RGeDBaR1YyU1c1bWJ6b2dZeXhjYmx4MFhIUmNkR1JsZGs5aWFtVmpkRG9nWm5WdVkzUnBiMjRvSUhRc0lHVWdLU0I3WEc1Y2RGeDBYSFI5TEZ4dVhIUmNkRngwY0hWaWJHbGpSWEp5YjNJNklHWjFibU4wYVc5dUtDa2dlMXh1WEhSY2RGeDBYSFJtS0NCY0ltVnljbTl5WENJc0lHOHVkRzlTWldGc1FYSnlZWGtvSUdGeVozVnRaVzUwY3lBcElDbGNibHgwWEhSY2RIMHNYRzVjZEZ4MFhIUndkV0pzYVdOTWIyYzZJR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWEhSbUtDQmNJbWx1Wm05Y0lpd2dieTUwYjFKbFlXeEJjbkpoZVNnZ1lYSm5kVzFsYm5SeklDa2dLVnh1WEhSY2RGeDBmU3hjYmx4MFhIUmNkSFJwYldVNklHWjFibU4wYVc5dUtDQjBJQ2tnZTF4dVhIUmNkRngwWEhSaElDWW1JQ2h6V3lCMElGMGdQU0JrS0NrcFhHNWNkRngwWEhSOUxGeHVYSFJjZEZ4MGRHbHRaVVZ1WkRvZ1puVnVZM1JwYjI0b0lIUWdLU0I3WEc1Y2RGeDBYSFJjZEdFZ0ppWWdjMXNnZENCZElDWW1JQ2hrS0Nrc0lITmJJSFFnWFNsY2JseDBYSFJjZEgxY2JseDBYSFI5WEc1Y2RIMHNJR1oxYm1OMGFXOXVLQ0IwTENCbExDQnVJQ2tnZTF4dVhIUmNkSFpoY2lCeUlEMGdiaWdnTWpBZ0tTd2dhU0E5SUc0b0lEVWdLU3dnYnlBOUlHNG9JREV4SUNrc0lITWdQU0J1S0NBd0lDa3NJR0VnUFNCdUtDQXhNakVnS1R0Y2JseDBYSFIwTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlnZ2RDQXBJSHRjYmx4MFhIUmNkSFpoY2lCbElEMGdkQzVvY21WbUlDWW1JSFF1YUhKbFppNXpjR3hwZENnZ1hDSS9YQ0lnS1ZzZ01TQmRMQ0J1SUQwZ1pTQS9JRzh1WkdWamIyUmxLQ0JsSUNrZ09pQjdmU3dnZFNBOUlIdGNibHgwWEhSY2RGeDBiR0Z1WnpvZ1lTZ2dkQ0FwTEZ4dVhIUmNkRngwWEhSM2FXUjBhRG9nZEM1blpYUkJkSFJ5YVdKMWRHVW9JRndpWkdGMFlTMTNhV1IwYUZ3aUlDa2dmSHdnZEM1blpYUkJkSFJ5YVdKMWRHVW9JRndpZDJsa2RHaGNJaUFwTEZ4dVhIUmNkRngwWEhSb1pXbG5hSFE2SUhRdVoyVjBRWFIwY21saWRYUmxLQ0JjSW1SaGRHRXRhR1ZwWjJoMFhDSWdLU0I4ZkNCMExtZGxkRUYwZEhKcFluVjBaU2dnWENKb1pXbG5hSFJjSWlBcExGeHVYSFJjZEZ4MFhIUnlaV3hoZEdWa09pQjBMbWRsZEVGMGRISnBZblYwWlNnZ1hDSmtZWFJoTFhKbGJHRjBaV1JjSWlBcExGeHVYSFJjZEZ4MFhIUndZWEowYm1WeU9pQjBMbWRsZEVGMGRISnBZblYwWlNnZ1hDSmtZWFJoTFhCaGNuUnVaWEpjSWlBcFhHNWNkRngwWEhSOU8xeHVYSFJjZEZ4MGNtVjBkWEp1SUdrdVlYTkNiMjlzWldGdUtDQjBMbWRsZEVGMGRISnBZblYwWlNnZ1hDSmtZWFJoTFdSdWRGd2lJQ2tnS1NBbUppQnlMbk5sZEU5dUtDa3NJSE11Wm05eVNXNG9JSFVzSUdaMWJtTjBhVzl1S0NCMExDQmxJQ2tnZTF4dVhIUmNkRngwWEhSMllYSWdjaUE5SUc1YklIUWdYVHRjYmx4MFhIUmNkRngwYmxzZ2RDQmRJRDBnYVM1b1lYTldZV3gxWlNnZ2NpQXBJRDhnY2lBNklHVmNibHgwWEhSY2RIMGdLU3dnY3k1amIyMXdZV04wS0NCdUlDbGNibHgwWEhSOVhHNWNkSDBzSUdaMWJtTjBhVzl1S0NCMExDQmxMQ0J1SUNrZ2UxeHVYSFJjZEhaaGNpQnlJRDBnYmlnZ09ESWdLU3dnYVNBOUlHNG9JREkwSUNrN1hHNWNkRngwZEM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0b0tTQjdYRzVjZEZ4MFhIUjJZWElnZENBOUlGd2laR0YwWVMxMGQybDBkR1Z5TFdWNGRISmhZM1JsWkMxY0lpQXJJR2t1WjJWdVpYSmhkR1VvS1R0Y2JseDBYSFJjZEhKbGRIVnliaUJtZFc1amRHbHZiaWdnWlN3Z2JpQXBJSHRjYmx4MFhIUmNkRngwY21WMGRYSnVJSElvSUdVc0lHNGdLUzVtYVd4MFpYSW9JR1oxYm1OMGFXOXVLQ0JsSUNrZ2UxeHVYSFJjZEZ4MFhIUmNkSEpsZEhWeWJpQWhaUzVvWVhOQmRIUnlhV0oxZEdVb0lIUWdLVnh1WEhSY2RGeDBYSFI5SUNrdWJXRndLQ0JtZFc1amRHbHZiaWdnWlNBcElIdGNibHgwWEhSY2RGeDBYSFJ5WlhSMWNtNGdaUzV6WlhSQmRIUnlhV0oxZEdVb0lIUXNJRndpZEhKMVpWd2lJQ2tzSUdWY2JseDBYSFJjZEZ4MGZTQXBYRzVjZEZ4MFhIUjlYRzVjZEZ4MGZWeHVYSFI5TENCbWRXNWpkR2x2YmlnZ2RDd2daU0FwSUh0Y2JseDBYSFJtZFc1amRHbHZiaUJ1S0NCMExDQmxMQ0J1TENCeUxDQnBMQ0J2TENCeklDa2dlMXh1WEhSY2RGeDBkR2hwY3k1bVlXTjBiM0o1SUQwZ2RDd2dkR2hwY3k1VFlXNWtZbTk0SUQwZ1pTd2dkR2hwY3k1emNtTkZiQ0E5SUc4c0lIUm9hWE11ZEdGeVoyVjBSV3dnUFNCcExDQjBhR2x6TG5CaGNtRnRaWFJsY25NZ1BTQnlMQ0IwYUdsekxtTnNZWE56VG1GdFpTQTlJRzRzSUhSb2FYTXViM0IwYVc5dWN5QTlJSE5jYmx4MFhIUjlYRzVjYmx4MFhIUnVMbkJ5YjNSdmRIbHdaUzVrWlhOMGNtOTVJRDBnWm5WdVkzUnBiMjRvS1NCN1hHNWNkRngwWEhSMGFHbHpMbk55WTBWc0lEMGdkR2hwY3k1MFlYSm5aWFJGYkNBOUlHNTFiR3hjYmx4MFhIUjlMQ0IwTG1WNGNHOXlkSE1nUFNCdVhHNWNkSDBzSUdaMWJtTjBhVzl1S0NCMExDQmxJQ2tnZTF4dVhIUmNkSFF1Wlhod2IzSjBjeUE5SUh0Y2JseDBYSFJjZEVSTlgwSlZWRlJQVGpvZ1hDSjBkMmwwZEdWeUxXUnRMV0oxZEhSdmJsd2lMRnh1WEhSY2RGeDBSazlNVEU5WFgwSlZWRlJQVGpvZ1hDSjBkMmwwZEdWeUxXWnZiR3h2ZHkxaWRYUjBiMjVjSWl4Y2JseDBYSFJjZEVoQlUwaFVRVWRmUWxWVVZFOU9PaUJjSW5SM2FYUjBaWEl0YUdGemFIUmhaeTFpZFhSMGIyNWNJaXhjYmx4MFhIUmNkRTFGVGxSSlQwNWZRbFZVVkU5T09pQmNJblIzYVhSMFpYSXRiV1Z1ZEdsdmJpMWlkWFIwYjI1Y0lpeGNibHgwWEhSY2RFMVBUVVZPVkRvZ1hDSjBkMmwwZEdWeUxXMXZiV1Z1ZEZ3aUxGeHVYSFJjZEZ4MFVFVlNTVk5EVDFCRk9pQmNJbkJsY21selkyOXdaUzF2YmkxaGFYSmNJaXhjYmx4MFhIUmNkRk5JUVZKRlgwSlZWRlJQVGpvZ1hDSjBkMmwwZEdWeUxYTm9ZWEpsTFdKMWRIUnZibHdpTEZ4dVhIUmNkRngwVkVsTlJVeEpUa1U2SUZ3aWRIZHBkSFJsY2kxMGFXMWxiR2x1WlZ3aUxGeHVYSFJjZEZ4MFZGZEZSVlE2SUZ3aWRIZHBkSFJsY2kxMGQyVmxkRndpWEc1Y2RGeDBmVnh1WEhSOUxDQm1kVzVqZEdsdmJpZ2dkQ3dnWlN3Z2JpQXBJSHRjYmx4MFhIUjJZWElnY2lBOUlHNG9JRFlnS1N3Z2FTQTlJRzRvSURJd0lDa3NJRzhnUFNCdUtDQTFNaUFwTENCeklEMGdiaWdnTXpFZ0tTd2dZU0E5SUc0b0lEVWdLU3dnZFNBOUlHNG9JREFnS1R0Y2JseDBYSFIwTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlnZ2RDd2daU3dnYmlBcElIdGNibHgwWEhSY2RIWmhjaUJqTzF4dVhIUmNkRngwY21WMGRYSnVJSFFnUFNCMElIeDhJRnRkTENCbElEMGdaU0I4ZkNCN2ZTd2dZeUE5SUZ3aXhwSW9YQ0lnS3lCMExtcHZhVzRvSUZ3aUxDQmNJaUFwSUNzZ1hDSXNJSFJoY21kbGRDd2dXMjl3ZEdsdmJuTmRLVHRjSWl3Z1puVnVZM1JwYjI0b0tTQjdYRzVjZEZ4MFhIUmNkSFpoY2lCa0xDQm1MQ0JzTENCb0xDQndJRDBnUVhKeVlYa3VjSEp2ZEc5MGVYQmxMbk5zYVdObExtRndjR3g1S0NCaGNtZDFiV1Z1ZEhNc0lGc3dMQ0IwTG14bGJtZDBhRjBnS1N4Y2JseDBYSFJjZEZ4MFhIUnRJRDBnUVhKeVlYa3VjSEp2ZEc5MGVYQmxMbk5zYVdObExtRndjR3g1S0NCaGNtZDFiV1Z1ZEhNc0lGdDBMbXhsYm1kMGFGMGdLVHRjYmx4MFhIUmNkRngwY21WMGRYSnVJRzB1Wm05eVJXRmphQ2dnWm5WdVkzUnBiMjRvSUhRZ0tTQjdYRzVjZEZ4MFhIUmNkRngwZENBbUppQW9kQzV1YjJSbFZIbHdaU0FoUFQwZ1RtOWtaUzVGVEVWTlJVNVVYMDVQUkVVZ1B5QjFMbWx6Vkhsd1pTZ2dYQ0ptZFc1amRHbHZibHdpTENCMElDa2dQeUJrSUQwZ2RDQTZJSFV1YVhOVWVYQmxLQ0JjSW05aWFtVmpkRndpTENCMElDa2dKaVlnS0dZZ1BTQjBLU0E2SUd3Z1BTQjBLVnh1WEhSY2RGeDBYSFI5SUNrc0lIQXViR1Z1WjNSb0lDRTlQU0IwTG14bGJtZDBhQ0I4ZkNBd0lEMDlQU0J0TG14bGJtZDBhQ0EvSUNoa0lDWW1JSFV1WVhONWJtTW9JR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWEhSY2RHUW9JQ0V4SUNsY2JseDBYSFJjZEZ4MGZTQXBMQ0J5TG5KbGFtVmpkQ2dnYm1WM0lFVnljbTl5S0NCY0lrNXZkQ0JsYm05MVoyZ2djR0Z5WVcxbGRHVnljeTRnUlhod1pXTjBaV1E2SUZ3aUlDc2dZeUFwSUNrcElEb2diQ0EvSUNobUlEMGdkUzVoZFdjb0lIdDlMQ0JtSUh4OElIdDlMQ0JsSUNrc0lIUXVabTl5UldGamFDZ2dablZ1WTNScGIyNG9JSFFnS1NCN1hHNWNkRngwWEhSY2RGeDBabHNnZENCZElEMGdjQzV6YUdsbWRDZ3BYRzVjZEZ4MFhIUmNkSDBnS1N3Z1lTNWhjMEp2YjJ4bFlXNG9JR1l1Wkc1MElDa2dKaVlnYVM1elpYUlBiaWdwTENCb0lEMGdjeTVuWlhSRmVIQmxjbWx0Wlc1MGN5Z3BMblJvWlc0b0lHWjFibU4wYVc5dUtDQjBJQ2tnZTF4dVhIUmNkRngwWEhSY2RISmxkSFZ5YmlCdkxtRmtaRmRwWkdkbGRDZ2diaWdnWml3Z2JDd2dkbTlwWkNBd0xDQjBJQ2tnS1Z4dVhIUmNkRngwWEhSOUlDa3NJR1FnSmlZZ2FDNTBhR1Z1S0NCa0xDQm1kVzVqZEdsdmJpZ3BJSHRjYmx4MFhIUmNkRngwWEhSa0tDQWhNU0FwWEc1Y2RGeDBYSFJjZEgwZ0tTd2dhQ2tnT2lBb1pDQW1KaUIxTG1GemVXNWpLQ0JtZFc1amRHbHZiaWdwSUh0Y2JseDBYSFJjZEZ4MFhIUmtLQ0FoTVNBcFhHNWNkRngwWEhSY2RIMGdLU3dnY2k1eVpXcGxZM1FvSUc1bGR5QkZjbkp2Y2lnZ1hDSk9ieUIwWVhKblpYUWdaV3hsYldWdWRDQnpjR1ZqYVdacFpXUXVJRVY0Y0dWamRHVmtPaUJjSWlBcklHTWdLU0FwS1Z4dVhIUmNkRngwZlZ4dVhIUmNkSDFjYmx4MGZTd2dablZ1WTNScGIyNG9JSFFzSUdVc0lHNGdLU0I3WEc1Y2RGeDBkbUZ5SUhJZ1BTQnVLQ0F4TURRZ0tTd2dhU0E5SUc0b0lESWdLU3dnYnlBOUlHNG9JREFnS1R0Y2JseHVYSFJjZEdaMWJtTjBhVzl1SUhNb0lIUXNJR1VnS1NCN1hHNWNkRngwWEhSeVpYUjFjbTRnWm5WdVkzUnBiMjRvS1NCN1hHNWNkRngwWEhSY2RIUnllU0I3WEc1Y2RGeDBYSFJjZEZ4MFpTNXlaWE52YkhabEtDQjBMbU5oYkd3b0lIUm9hWE1nS1NBcFhHNWNkRngwWEhSY2RIMGdZMkYwWTJnZ0tDQjBJQ2tnZTF4dVhIUmNkRngwWEhSY2RHVXVjbVZxWldOMEtDQjBJQ2xjYmx4MFhIUmNkRngwZlZ4dVhIUmNkRngwZlZ4dVhIUmNkSDFjYmx4dVhIUmNkSFF1Wlhod2IzSjBjeUE5SUh0Y2JseDBYSFJjZEhONWJtTTZJR1oxYm1OMGFXOXVLQ0IwTENCbElDa2dlMXh1WEhSY2RGeDBYSFIwTG1OaGJHd29JR1VnS1Z4dVhIUmNkRngwZlN4Y2JseDBYSFJjZEhKbFlXUTZJR1oxYm1OMGFXOXVLQ0IwTENCbElDa2dlMXh1WEhSY2RGeDBYSFIyWVhJZ2JpQTlJRzVsZHlCcE8xeHVYSFJjZEZ4MFhIUnlaWFIxY200Z2NpNXlaV0ZrS0NCektDQjBMQ0J1SUNrc0lHVWdLU3dnYmk1d2NtOXRhWE5sWEc1Y2RGeDBYSFI5TEZ4dVhIUmNkRngwZDNKcGRHVTZJR1oxYm1OMGFXOXVLQ0IwTENCbElDa2dlMXh1WEhSY2RGeDBYSFIyWVhJZ2JpQTlJRzVsZHlCcE8xeHVYSFJjZEZ4MFhIUnlaWFIxY200Z2NpNTNjbWwwWlNnZ2N5Z2dkQ3dnYmlBcExDQmxJQ2tzSUc0dWNISnZiV2x6WlZ4dVhIUmNkRngwZlN4Y2JseDBYSFJjZEdSbFptVnlPaUJtZFc1amRHbHZiaWdnZEN3Z1pTd2diaUFwSUh0Y2JseDBYSFJjZEZ4MGRtRnlJR0VnUFNCdVpYY2dhVHRjYmx4MFhIUmNkRngwY21WMGRYSnVJRzh1YVhOVWVYQmxLQ0JjSW1aMWJtTjBhVzl1WENJc0lIUWdLU0FtSmlBb2JpQTlJR1VzSUdVZ1BTQjBMQ0IwSUQwZ01Ta3NJSEl1WkdWbVpYSW9JSFFzSUhNb0lHVXNJR0VnS1N3Z2JpQXBMQ0JoTG5CeWIyMXBjMlZjYmx4MFhIUmNkSDFjYmx4MFhIUjlYRzVjZEgwc0lHWjFibU4wYVc5dUtDQjBMQ0JsTENCdUlDa2dlMXh1WEhSY2RIWmhjaUJ5SUQwZ2JpZ2dPU0FwTENCcElEMGdXMXh1WEhSY2RGeDBYQ0pvZEhSd2N6b3ZMM041Ym1ScFkyRjBhVzl1TG5SM2FYUjBaWEl1WTI5dFhDSXNYRzVjZEZ4MFhIUmNJbWgwZEhCek9pOHZZMlJ1TG5ONWJtUnBZMkYwYVc5dUxuUjNhVzFuTG1OdmJWd2lMRnh1WEhSY2RGeDBYQ0pvZEhSd2N6b3ZMMnh2WTJGc2FHOXpkQzUwZDJsMGRHVnlMbU52YlRvNE5EUTBYQ0pjYmx4MFhIUmRMQ0J2SUQwZ1cxd2lhSFIwY0hNNkx5OXplVzVrYVdOaGRHbHZiaTUwZDJsMGRHVnlMbU52YlZ3aUxDQmNJbWgwZEhCek9pOHZiRzlqWVd4b2IzTjBMblIzYVhSMFpYSXVZMjl0T2pnME5EVmNJbDBzSUhNZ1BTQmJYRzVjZEZ4MFhIUmNJbWgwZEhCek9pOHZjR3hoZEdadmNtMHVkSGRwZEhSbGNpNWpiMjB2WlcxaVpXUXZhVzVrWlhndWFIUnRiRndpTEZ4dVhIUmNkRngwWENKb2RIUndjem92TDJ4dlkyRnNhRzl6ZEM1MGQybDBkR1Z5TG1OdmJWd2lMRnh1WEhSY2RGeDBMMmgwZEhCek9seGNMMXhjTDNSdmJseGNMbk50WmpGY1hDNTBkMmwwZEdWeVhGd3VZMjl0WEZ3dmMzbHVaR2xqWVhScGIyNHRhVzUwWlhKdVlXeGNYQzlsYldKbFpDMXBabkpoYldWY1hDOWJNQzA1UVMxYVlTMTZYeTFkSzF4Y0wyRndjRnhjTDJsdVpHVjRYRnd1YUhSdGJDOWNibHgwWEhSZExDQmhJRDBnWm5WdVkzUnBiMjRvSUhRc0lHVWdLU0I3WEc1Y2RGeDBYSFJ5WlhSMWNtNGdkQzV6YjIxbEtDQm1kVzVqZEdsdmJpZ2dkQ0FwSUh0Y2JseDBYSFJjZEZ4MGNtVjBkWEp1SUhRZ2FXNXpkR0Z1WTJWdlppQlNaV2RGZUhBZ1B5QjBMblJsYzNRb0lHVWdLU0E2SUhRZ1BUMDlJR1ZjYmx4MFhIUmNkSDBnS1Z4dVhIUmNkSDBzSUhVZ1BTQm1kVzVqZEdsdmJpZ3BJSHRjYmx4MFhIUmNkSFpoY2lCMElEMGdjaTVuWlhRb0lGd2lZbUZqYTJWdVpFaHZjM1JjSWlBcE8xeHVYSFJjZEZ4MGNtVjBkWEp1SUhRZ0ppWWdZU2dnYVN3Z2RDQXBJRDhnZENBNklGd2lhSFIwY0hNNkx5OWpaRzR1YzNsdVpHbGpZWFJwYjI0dWRIZHBiV2N1WTI5dFhDSmNibHgwWEhSOUxDQmpJRDBnWm5WdVkzUnBiMjRvS1NCN1hHNWNkRngwWEhSMllYSWdkQ0E5SUhJdVoyVjBLQ0JjSW5ObGRIUnBibWR6VTNaalNHOXpkRndpSUNrN1hHNWNkRngwWEhSeVpYUjFjbTRnZENBbUppQmhLQ0J2TENCMElDa2dQeUIwSURvZ1hDSm9kSFJ3Y3pvdkwzTjVibVJwWTJGMGFXOXVMblIzYVhSMFpYSXVZMjl0WENKY2JseDBYSFI5TENCa0lEMGdablZ1WTNScGIyNG9LU0I3WEc1Y2RGeDBYSFIyWVhJZ2RDQTlJSEl1WjJWMEtDQmNJbVZ0WW1Wa1NXWnlZVzFsVlZKTVhDSWdLVHRjYmx4MFhIUmNkSEpsZEhWeWJpQjBJQ1ltSUdFb0lITXNJSFFnS1NBL0lIUWdPaUJjSW1oMGRIQnpPaTh2Y0d4aGRHWnZjbTB1ZEhkcGRIUmxjaTVqYjIwdlpXMWlaV1F2YVc1a1pYZ3VhSFJ0YkZ3aVhHNWNkRngwZlR0Y2JseHVYSFJjZEdaMWJtTjBhVzl1SUdZb0lIUXNJR1VnS1NCN1hHNWNkRngwWEhSMllYSWdiaUE5SUZ0MFhUdGNibHgwWEhSY2RISmxkSFZ5YmlCbExtWnZja1ZoWTJnb0lHWjFibU4wYVc5dUtDQjBJQ2tnZTF4dVhIUmNkRngwWEhSdUxuQjFjMmdvSUdaMWJtTjBhVzl1S0NCMElDa2dlMXh1WEhSY2RGeDBYSFJjZEhaaGNpQmxJRDBnS0hRZ2ZId2dYQ0pjSWlrdWRHOVRkSEpwYm1jb0tTd2diaUE5SUZ3aUwxd2lJRDA5UFNCbExuTnNhV05sS0NBd0xDQXhJQ2tnUHlBeElEb2dNQ3dnY2lBOUlHWjFibU4wYVc5dUtDQjBJQ2tnZTF4dVhIUmNkRngwWEhSY2RGeDBjbVYwZFhKdUlGd2lMMXdpSUQwOVBTQjBMbk5zYVdObEtDQXRJREVnS1Z4dVhIUmNkRngwWEhSY2RIMG9JR1VnS1NBL0lDMGdNU0E2SUhadmFXUWdNRHRjYmx4MFhIUmNkRngwWEhSeVpYUjFjbTRnWlM1emJHbGpaU2dnYml3Z2NpQXBYRzVjZEZ4MFhIUmNkSDBvSUhRZ0tTQXBYRzVjZEZ4MFhIUjlJQ2tzSUc0dWFtOXBiaWdnWENJdlhDSWdLVnh1WEhSY2RIMWNibHh1WEhSY2RIUXVaWGh3YjNKMGN5QTlJSHRjYmx4MFhIUmNkR052YjJ0cFpVTnZibk5sYm5RNklHWjFibU4wYVc5dUtDQjBJQ2tnZTF4dVhIUmNkRngwWEhSMllYSWdaU0E5SUhRZ2ZId2dXMTA3WEc1Y2RGeDBYSFJjZEhKbGRIVnliaUJsTG5WdWMyaHBablFvSUZ3aVkyOXZhMmxsTDJOdmJuTmxiblJjSWlBcExDQm1LQ0JqS0Nrc0lHVWdLVnh1WEhSY2RGeDBmU3hjYmx4MFhIUmNkR1Z0WW1Wa1NXWnlZVzFsT2lCbWRXNWpkR2x2YmlncElIdGNibHgwWEhSY2RGeDBjbVYwZFhKdUlHUW9LVnh1WEhSY2RGeDBmU3hjYmx4MFhIUmNkR1YyWlc1MFZtbGtaVzg2SUdaMWJtTjBhVzl1S0NCMElDa2dlMXh1WEhSY2RGeDBYSFIyWVhJZ1pTQTlJSFFnZkh3Z1cxMDdYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQmxMblZ1YzJocFpuUW9JRndpZG1sa1pXOHZaWFpsYm5SY0lpQXBMQ0JtS0NCMUtDa3NJR1VnS1Z4dVhIUmNkRngwZlN4Y2JseDBYSFJjZEdkeWFXUTZJR1oxYm1OMGFXOXVLQ0IwSUNrZ2UxeHVYSFJjZEZ4MFhIUjJZWElnWlNBOUlIUWdmSHdnVzEwN1hHNWNkRngwWEhSY2RISmxkSFZ5YmlCbExuVnVjMmhwWm5Rb0lGd2laM0pwWkM5amIyeHNaV04wYVc5dVhDSWdLU3dnWmlnZ2RTZ3BMQ0JsSUNsY2JseDBYSFJjZEgwc1hHNWNkRngwWEhSdGIyMWxiblE2SUdaMWJtTjBhVzl1S0NCMElDa2dlMXh1WEhSY2RGeDBYSFIyWVhJZ1pTQTlJSFFnZkh3Z1cxMDdYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQmxMblZ1YzJocFpuUW9JRndpYlc5dFpXNTBjMXdpSUNrc0lHWW9JSFVvS1N3Z1pTQXBYRzVjZEZ4MFhIUjlMRnh1WEhSY2RGeDBjMlYwZEdsdVozTTZJR1oxYm1OMGFXOXVLQ0IwSUNrZ2UxeHVYSFJjZEZ4MFhIUjJZWElnWlNBOUlIUWdmSHdnVzEwN1hHNWNkRngwWEhSY2RISmxkSFZ5YmlCbExuVnVjMmhwWm5Rb0lGd2ljMlYwZEdsdVozTmNJaUFwTENCbUtDQmpLQ2tzSUdVZ0tWeHVYSFJjZEZ4MGZTeGNibHgwWEhSY2RIUnBiV1ZzYVc1bE9pQm1kVzVqZEdsdmJpZ2dkQ0FwSUh0Y2JseDBYSFJjZEZ4MGRtRnlJR1VnUFNCMElIeDhJRnRkTzF4dVhIUmNkRngwWEhSeVpYUjFjbTRnWlM1MWJuTm9hV1owS0NCY0luUnBiV1ZzYVc1bFhDSWdLU3dnWmlnZ2RTZ3BMQ0JsSUNsY2JseDBYSFJjZEgwc1hHNWNkRngwWEhSMGQyVmxkRUpoZEdOb09pQm1kVzVqZEdsdmJpZ2dkQ0FwSUh0Y2JseDBYSFJjZEZ4MGRtRnlJR1VnUFNCMElIeDhJRnRkTzF4dVhIUmNkRngwWEhSeVpYUjFjbTRnWlM1MWJuTm9hV1owS0NCY0luUjNaV1YwY3k1cWMyOXVYQ0lnS1N3Z1ppZ2dkU2dwTENCbElDbGNibHgwWEhSY2RIMHNYRzVjZEZ4MFhIUjJhV1JsYnpvZ1puVnVZM1JwYjI0b0lIUWdLU0I3WEc1Y2RGeDBYSFJjZEhaaGNpQmxJRDBnZENCOGZDQmJYVHRjYmx4MFhIUmNkRngwY21WMGRYSnVJR1V1ZFc1emFHbG1kQ2dnWENKM2FXUm5aWFJ6TDNacFpHVnZYQ0lnS1N3Z1ppZ2dkU2dwTENCbElDbGNibHgwWEhSY2RIMWNibHgwWEhSOVhHNWNkSDBzSUdaMWJtTjBhVzl1S0NCMExDQmxMQ0J1SUNrZ2UxeHVYSFJjZEhaaGNpQnlJRDBnYmlnZ05DQXBMQ0JwSUQwZ2JpZ2dPQ0FwTENCdklEMGdiaWdnTXprZ0tTd2djeUE5SUc0b0lEZ3dJQ2tzSUdFZ1BTQnVLQ0ExSUNrc0lIVWdQU0J1S0NBek5TQXBMQ0JqSUQwZ0lURXNYRzVjZEZ4MFhIUmtJRDBnTDJoMGRIQnpQenBjWEM5Y1hDOG9XMTR2WFNzcExpb3ZhVHRjYmx4MFhIUjBMbVY0Y0c5eWRITWdQU0I3WEc1Y2RGeDBYSFJ6WlhSUGJqb2dablZ1WTNScGIyNG9LU0I3WEc1Y2RGeDBYSFJjZEdNZ1BTQWhNRnh1WEhSY2RGeDBmU3hjYmx4MFhIUmNkR1Z1WVdKc1pXUTZJR1oxYm1OMGFXOXVLQ0IwTENCbElDa2dlMXh1WEhSY2RGeDBYSFJ5WlhSMWNtNGdJU0VvWXlCOGZDQmhMbUZ6UW05dmJHVmhiaWdnZFM1MllXd29JRndpWkc1MFhDSWdLU0FwSUh4OElITXVhWE5WY214VFpXNXphWFJwZG1Vb0lHVWdmSHdnYVM1b2IzTjBJQ2tnZkh3Z2J5NXBjMFp5WVcxbFpDZ3BJQ1ltSUhNdWFYTlZjbXhUWlc1emFYUnBkbVVvSUc4dWNtOXZkRVJ2WTNWdFpXNTBURzlqWVhScGIyNG9LU0FwSUh4OElDaDBJRDBnWkM1MFpYTjBLQ0IwSUh4OElISXVjbVZtWlhKeVpYSWdLU0FtSmlCU1pXZEZlSEF1SkRFcElDWW1JSE11YVhOVmNteFRaVzV6YVhScGRtVW9JSFFnS1NsY2JseDBYSFJjZEgxY2JseDBYSFI5WEc1Y2RIMHNJR1oxYm1OMGFXOXVLQ0IwTENCbExDQnVJQ2tnZTF4dVhIUmNkSFpoY2lCeUlEMGdiaWdnTkRjZ0tTd2dhU0E5SUc0b0lEUWdLU3dnYnlBOUlHNG9JREl3SUNrc0lITWdQU0J1S0NBek5DQXBMQ0JoSUQwZ2JpZ2dOeklnS1N3Z2RTQTlJRzRvSURNeklDa3NJR01nUFNCdUtDQTVJQ2tzSUdRZ1BTQnVLQ0F6SUNrc1hHNWNkRngwWEhSbUlEMGdiaWdnTUNBcExDQnNJRDBnTVN3Z2FDQTlJSEl1ZG1WeWMybHZiaXhjYmx4MFhIUmNkSEFnUFNCakxtZGxkQ2dnWENKamJHbGxiblJGZG1WdWRFVnVaSEJ2YVc1MFhDSWdLU0I4ZkNCY0ltaDBkSEJ6T2k4dmMzbHVaR2xqWVhScGIyNHVkSGRwZEhSbGNpNWpiMjB2YVM5cWIzUmNJanRjYmx4dVhIUmNkR1oxYm1OMGFXOXVJRzBvSUhRZ0tTQjdYRzVjZEZ4MFhIUnlaWFIxY200Z1ppNWhkV2NvSUhzZ1kyeHBaVzUwT2lCY0luUm1kMXdpSUgwc0lIUWdmSHdnZTMwZ0tWeHVYSFJjZEgxY2JseHVYSFJjZEdaMWJtTjBhVzl1SUhZb0lIUXNJR1VzSUc0Z0tTQjdYRzVjZEZ4MFhIUnlaWFIxY200Z1pTQTlJR1VnZkh3Z2UzMHNJR1l1WVhWbktDQjdmU3dnWlN3Z2UxeHVYSFJjZEZ4MFhIUmZZMkYwWldkdmNubGZPaUIwTEZ4dVhIUmNkRngwWEhSMGNtbG5aMlZ5WldSZmIyNDZJR1V1ZEhKcFoyZGxjbVZrWDI5dUlIeDhJQ3NnYm1WM0lFUmhkR1VzWEc1Y2RGeDBYSFJjZEdSdWREb2dieTVsYm1GaWJHVmtLQ0J1SUNsY2JseDBYSFJjZEgwZ0tWeHVYSFJjZEgxY2JseHVYSFJjZEhRdVpYaHdiM0owY3lBOUlIdGNibHgwWEhSY2RHVjRkSEpoWTNSVVpYSnRjMFp5YjIxRVQwMDZJR1oxYm1OMGFXOXVJSFFvSUdVc0lHNGdLU0I3WEc1Y2RGeDBYSFJjZEhaaGNpQnlPMXh1WEhSY2RGeDBYSFJ5WlhSMWNtNGdiaUE5SUc0Z2ZId2dlMzBzSUdVZ0ppWWdaUzV1YjJSbFZIbHdaU0E5UFQwZ1RtOWtaUzVGVEVWTlJVNVVYMDVQUkVVZ1B5QW9LSElnUFNCbExtZGxkRUYwZEhKcFluVjBaU2dnWENKa1lYUmhMWE5qY21saVpWd2lJQ2twSUNZbUlISXVjM0JzYVhRb0lGd2lJRndpSUNrdVptOXlSV0ZqYUNnZ1puVnVZM1JwYjI0b0lIUWdLU0I3WEc1Y2RGeDBYSFJjZEZ4MGRtRnlJR1VnUFNCMExuUnlhVzBvS1M1emNHeHBkQ2dnWENJNlhDSWdLU3dnY2lBOUlHVmJJREFnWFN3Z2FTQTlJR1ZiSURFZ1hUdGNibHgwWEhSY2RGeDBYSFJ5SUNZbUlHa2dKaVlnSVc1YklISWdYU0FtSmlBb2Jsc2djaUJkSUQwZ2FTbGNibHgwWEhSY2RGeDBmU0FwTENCMEtDQmxMbkJoY21WdWRFNXZaR1VzSUc0Z0tTa2dPaUJ1WEc1Y2RGeDBYSFI5TEZ4dVhIUmNkRngwWTJ4cFkydEZkbVZ1ZEVWc1pXMWxiblE2SUdaMWJtTjBhVzl1S0NCMElDa2dlMXh1WEhSY2RGeDBYSFIyWVhJZ1pTQTlJSE11WTJ4dmMyVnpkQ2dnWENKYlpHRjBZUzFsZUhCaGJtUmxaQzExY214ZFhDSXNJSFFnS1N3Z2JpQTlJR1VnSmlZZ1pTNW5aWFJCZEhSeWFXSjFkR1VvSUZ3aVpHRjBZUzFsZUhCaGJtUmxaQzExY214Y0lpQXBPMXh1WEhSY2RGeDBYSFJ5WlhSMWNtNGdiaUFtSmlCa0xtbHpWSGRwZEhSbGNsVlNUQ2dnYmlBcElEOGdYQ0owZDJsMGRHVnlYM1Z5YkZ3aUlEb2dYQ0oxY214Y0lseHVYSFJjZEZ4MGZTeGNibHgwWEhSY2RHWnNZWFIwWlc1RGJHbGxiblJGZG1WdWRGQmhlV3h2WVdRNklHWjFibU4wYVc5dUtDQjBMQ0JsSUNrZ2UxeHVYSFJjZEZ4MFhIUnlaWFIxY200Z1ppNWhkV2NvSUh0OUxDQmxMQ0I3SUdWMlpXNTBYMjVoYldWemNHRmpaVG9nZENCOUlDbGNibHgwWEhSY2RIMHNYRzVjZEZ4MFhIUm1iM0p0WVhSSFpXNWxjbWxqUlhabGJuUkVZWFJoT2lCMkxGeHVYSFJjZEZ4MFptOXliV0YwUTJ4cFpXNTBSWFpsYm5SRVlYUmhPaUJtZFc1amRHbHZiaWdnZEN3Z1pTd2diaUFwSUh0Y2JseDBYSFJjZEZ4MGRtRnlJSElnUFNCMElDWW1JSFF1ZDJsa1oyVjBYMjl5YVdkcGJpQjhmQ0JwTG5KbFptVnljbVZ5TzF4dVhIUmNkRngwWEhSeVpYUjFjbTRnS0hRZ1BTQjJLQ0JjSW5SbWQxOWpiR2xsYm5SZlpYWmxiblJjSWl3Z2RDd2djaUFwS1M1amJHbGxiblJmZG1WeWMybHZiaUE5SUdnc0lIUXVabTl5YldGMFgzWmxjbk5wYjI0Z1BTQjJiMmxrSURBZ0lUMDlJRzRnUHlCdUlEb2dNU3dnWlNCOGZDQW9kQzUzYVdSblpYUmZiM0pwWjJsdUlEMGdjaWtzSUhSY2JseDBYSFJjZEgwc1hHNWNkRngwWEhSbWIzSnRZWFJEYkdsbGJuUkZkbVZ1ZEU1aGJXVnpjR0ZqWlRvZ2JTeGNibHgwWEhSY2RHWnZjbTFoZEVodmNtbDZiMjVVZDJWbGRFUmhkR0U2SUdaMWJtTjBhVzl1S0NCMElDa2dlMXh1WEhSY2RGeDBYSFIyWVhJZ1pTQTlJSHRjYmx4MFhIUmNkRngwWEhScGRHVnRYMmxrY3pvZ1cxMHNYRzVjZEZ4MFhIUmNkRngwYVhSbGJWOWtaWFJoYVd4ek9pQjdmVnh1WEhSY2RGeDBYSFI5TzF4dVhIUmNkRngwWEhSeVpYUjFjbTRnWlM1cGRHVnRYMmxrY3k1d2RYTm9LQ0IwSUNrc0lHVXVhWFJsYlY5a1pYUmhhV3h6V3lCMElGMGdQU0I3SUdsMFpXMWZkSGx3WlRvZ1lTNVVWMFZGVkNCOUxDQmxYRzVjZEZ4MFhIUjlMRnh1WEhSY2RGeDBabTl5YldGMFZIZGxaWFJCYzNOdlkybGhkR2x2YmpvZ1puVnVZM1JwYjI0b0lIUXNJR1VnS1NCN1hHNWNkRngwWEhSY2RIWmhjaUJ1SUQwZ2UzMDdYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQW9aU0E5SUdVZ2ZId2dlMzBwTG1GemMyOWphV0YwYVc5dVgyNWhiV1Z6Y0dGalpTQTlJRzBvSUhRZ0tTd2dibHNnYkNCZElEMGdaU3dnYmx4dVhIUmNkRngwZlN4Y2JseDBYSFJjZEc1dmRHbGpaVk5sWlc0NklHWjFibU4wYVc5dUtDQjBJQ2tnZTF4dVhIUmNkRngwWEhSeVpYUjFjbTRnWENKdWIzUnBZMlZjSWlBOVBUMGdkQzVsYkdWdFpXNTBJQ1ltSUZ3aWMyVmxibHdpSUQwOVBTQjBMbUZqZEdsdmJseHVYSFJjZEZ4MGZTeGNibHgwWEhSY2RITndiR2wwVEc5blJXNTBjbms2SUdaMWJtTjBhVzl1S0NCMElDa2dlMXh1WEhSY2RGeDBYSFIyWVhJZ1pTd2diaXdnY2l3Z2FTd2dienRjYmx4MFhIUmNkRngwY21WMGRYSnVJSFF1YVhSbGJWOXBaSE1nSmlZZ2RDNXBkR1Z0WDJsa2N5NXNaVzVuZEdnZ1BpQXhJRDhnS0dVZ1BTQk5ZWFJvTG1ac2IyOXlLQ0IwTG1sMFpXMWZhV1J6TG14bGJtZDBhQ0F2SURJZ0tTd2diaUE5SUhRdWFYUmxiVjlwWkhNdWMyeHBZMlVvSURBc0lHVWdLU3dnY2lBOUlIdDlMQ0JwSUQwZ2RDNXBkR1Z0WDJsa2N5NXpiR2xqWlNnZ1pTQXBMQ0J2SUQwZ2UzMHNJRzR1Wm05eVJXRmphQ2dnWm5WdVkzUnBiMjRvSUdVZ0tTQjdYRzVjZEZ4MFhIUmNkRngwY2xzZ1pTQmRJRDBnZEM1cGRHVnRYMlJsZEdGcGJITmJJR1VnWFZ4dVhIUmNkRngwWEhSOUlDa3NJR2t1Wm05eVJXRmphQ2dnWm5WdVkzUnBiMjRvSUdVZ0tTQjdYRzVjZEZ4MFhIUmNkRngwYjFzZ1pTQmRJRDBnZEM1cGRHVnRYMlJsZEdGcGJITmJJR1VnWFZ4dVhIUmNkRngwWEhSOUlDa3NJRnRjYmx4MFhIUmNkRngwWEhSbUxtRjFaeWdnZTMwc0lIUXNJSHRjYmx4MFhIUmNkRngwWEhSY2RHbDBaVzFmYVdSek9pQnVMRnh1WEhSY2RGeDBYSFJjZEZ4MGFYUmxiVjlrWlhSaGFXeHpPaUJ5WEc1Y2RGeDBYSFJjZEZ4MGZTQXBMRnh1WEhSY2RGeDBYSFJjZEdZdVlYVm5LQ0I3ZlN3Z2RDd2dlMXh1WEhSY2RGeDBYSFJjZEZ4MGFYUmxiVjlwWkhNNklHa3NYRzVjZEZ4MFhIUmNkRngwWEhScGRHVnRYMlJsZEdGcGJITTZJRzljYmx4MFhIUmNkRngwWEhSOUlDbGNibHgwWEhSY2RGeDBYU2tnT2lCYmRGMWNibHgwWEhSY2RIMHNYRzVjZEZ4MFhIUnpkSEpwYm1kcFpuazZJR1oxYm1OMGFXOXVLQ0IwSUNrZ2UxeHVYSFJjZEZ4MFhIUjJZWElnWlN3Z2JpQTlJRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNTBiMHBUVDA0N1hHNWNkRngwWEhSY2RISmxkSFZ5YmlCa1pXeGxkR1VnUVhKeVlYa3VjSEp2ZEc5MGVYQmxMblJ2U2xOUFRpd2daU0E5SUhVdWMzUnlhVzVuYVdaNUtDQjBJQ2tzSUc0Z0ppWWdLRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNTBiMHBUVDA0Z1BTQnVLU3dnWlZ4dVhIUmNkRngwZlN4Y2JseDBYSFJjZEVGVlJFbEZUa05GWDBWT1JGQlBTVTVVT2lCY0ltaDBkSEJ6T2k4dmMzbHVaR2xqWVhScGIyNHVkSGRwZEhSbGNpNWpiMjB2YVM5cWIzUXZjM2x1WkdsallYUnBiMjVjSWl4Y2JseDBYSFJjZEVOTVNVVk9WRjlGVmtWT1ZGOUZUa1JRVDBsT1ZEb2djQ3hjYmx4MFhIUmNkRkpWUms5VlUxOVNSVVJKVWtWRFZEb2dYQ0pvZEhSd2N6b3ZMM0JzWVhSbWIzSnRMblIzYVhSMFpYSXVZMjl0TDJwdmRDNW9kRzFzWENKY2JseDBYSFI5WEc1Y2RIMHNJR1oxYm1OMGFXOXVLQ0IwTENCbExDQnVJQ2tnZTF4dVhIUmNkSFpoY2lCeUlEMGdiaWdnTkNBcExDQnBJRDBnYmlnZ01USWdLU3dnYnlBOUlHNG9JRGszSUNrc0lITWdQU0J1S0NBeElDa3NJR0VnUFNCdUtDQXdJQ2tzSUhVZ1BTQnZMblZ6WlhKQloyVnVkRHRjYmx4dVhIUmNkR1oxYm1OMGFXOXVJR01vSUhRZ0tTQjdYRzVjZEZ4MFhIUnlaWFIxY200Z0x5aFVjbWxrWlc1MGZFMVRTVVY4UldSblpWc3ZJRjAvWEZ4a0tTOHVkR1Z6ZENnZ2RDQTlJSFFnZkh3Z2RTQXBYRzVjZEZ4MGZWeHVYRzVjZEZ4MGRDNWxlSEJ2Y25SeklEMGdlMXh1WEhSY2RGeDBjbVYwYVc1aE9pQm1kVzVqZEdsdmJpZ2dkQ0FwSUh0Y2JseDBYSFJjZEZ4MGNtVjBkWEp1SUNoMElEMGdkQ0I4ZkNCektTNWtaWFpwWTJWUWFYaGxiRkpoZEdsdklEOGdkQzVrWlhacFkyVlFhWGhsYkZKaGRHbHZJRDQ5SURFdU5TQTZJQ0VoZEM1dFlYUmphRTFsWkdsaElDWW1JSFF1YldGMFkyaE5aV1JwWVNnZ1hDSnZibXg1SUhOamNtVmxiaUJoYm1RZ0tHMXBiaTF5WlhOdmJIVjBhVzl1T2lBeE5EUmtjR2twWENJZ0tTNXRZWFJqYUdWelhHNWNkRngwWEhSOUxGeHVYSFJjZEZ4MFlXNTVTVVU2SUdNc1hHNWNkRngwWEhScFpUazZJR1oxYm1OMGFXOXVLQ0IwSUNrZ2UxeHVYSFJjZEZ4MFhIUnlaWFIxY200Z0wwMVRTVVVnT1M4dWRHVnpkQ2dnZENBOUlIUWdmSHdnZFNBcFhHNWNkRngwWEhSOUxGeHVYSFJjZEZ4MGFXVXhNRG9nWm5WdVkzUnBiMjRvSUhRZ0tTQjdYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQXZUVk5KUlNBeE1DOHVkR1Z6ZENnZ2RDQTlJSFFnZkh3Z2RTQXBYRzVjZEZ4MFhIUjlMRnh1WEhSY2RGeDBhVzl6T2lCbWRXNWpkR2x2YmlnZ2RDQXBJSHRjYmx4MFhIUmNkRngwY21WMGRYSnVJQzhvYVZCaFpIeHBVR2h2Ym1WOGFWQnZaQ2t2TG5SbGMzUW9JSFFnUFNCMElIeDhJSFVnS1Z4dVhIUmNkRngwZlN4Y2JseDBYSFJjZEdGdVpISnZhV1E2SUdaMWJtTjBhVzl1S0NCMElDa2dlMXh1WEhSY2RGeDBYSFJ5WlhSMWNtNGdMMTVOYjNwcGJHeGhYRnd2TlZ4Y0xqQWdYRndvVEdsdWRYZzdJQ2hWT3lBcFAwRnVaSEp2YVdRdkxuUmxjM1FvSUhRZ1BTQjBJSHg4SUhVZ0tWeHVYSFJjZEZ4MGZTeGNibHgwWEhSY2RHTmhibEJ2YzNSTlpYTnpZV2RsT2lCbWRXNWpkR2x2YmlnZ2RDd2daU0FwSUh0Y2JseDBYSFJjZEZ4MGNtVjBkWEp1SUhRZ1BTQjBJSHg4SUhNc0lHVWdQU0JsSUh4OElIVXNJSFF1Y0c5emRFMWxjM05oWjJVZ0ppWWdJU2hqS0NCbElDa2dKaVlnZEM1dmNHVnVaWElwWEc1Y2RGeDBYSFI5TEZ4dVhIUmNkRngwZEc5MVkyZzZJR1oxYm1OMGFXOXVLQ0IwTENCbExDQnVJQ2tnZTF4dVhIUmNkRngwWEhSeVpYUjFjbTRnZENBOUlIUWdmSHdnY3l3Z1pTQTlJR1VnZkh3Z2J5d2diaUE5SUc0Z2ZId2dkU3dnWENKdmJuUnZkV05vYzNSaGNuUmNJaUJwYmlCMElIeDhJQzlQY0dWeVlTQk5hVzVwTHk1MFpYTjBLQ0J1SUNrZ2ZId2daUzV0YzAxaGVGUnZkV05vVUc5cGJuUnpJRDRnTUZ4dVhIUmNkRngwZlN4Y2JseDBYSFJjZEdOemMxUnlZVzV6YVhScGIyNXpPaUJtZFc1amRHbHZiaWdwSUh0Y2JseDBYSFJjZEZ4MGRtRnlJSFFnUFNCeUxtSnZaSGt1YzNSNWJHVTdYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQjJiMmxrSURBZ0lUMDlJSFF1ZEhKaGJuTnBkR2x2YmlCOGZDQjJiMmxrSURBZ0lUMDlJSFF1ZDJWaWEybDBWSEpoYm5OcGRHbHZiaUI4ZkNCMmIybGtJREFnSVQwOUlIUXViVzk2VkhKaGJuTnBkR2x2YmlCOGZDQjJiMmxrSURBZ0lUMDlJSFF1YjFSeVlXNXphWFJwYjI0Z2ZId2dkbTlwWkNBd0lDRTlQU0IwTG0xelZISmhibk5wZEdsdmJseHVYSFJjZEZ4MGZTeGNibHgwWEhSY2RHaGhjMUJ5YjIxcGMyVlRkWEJ3YjNKME9pQm1kVzVqZEdsdmJpZ3BJSHRjYmx4MFhIUmNkRngwY21WMGRYSnVJQ0VoS0hNdVVISnZiV2x6WlNBbUppQnpMbEJ5YjIxcGMyVXVjbVZ6YjJ4MlpTQW1KaUJ6TGxCeWIyMXBjMlV1Y21WcVpXTjBJQ1ltSUhNdVVISnZiV2x6WlM1aGJHd2dKaVlnY3k1UWNtOXRhWE5sTG5KaFkyVWdKaVlnS0c1bGR5QnpMbEJ5YjIxcGMyVW9JR1oxYm1OMGFXOXVLQ0JsSUNrZ2UxeHVYSFJjZEZ4MFhIUmNkSFFnUFNCbFhHNWNkRngwWEhSY2RIMGdLU3dnWVM1cGMxUjVjR1VvSUZ3aVpuVnVZM1JwYjI1Y0lpd2dkQ0FwS1NrN1hHNWNkRngwWEhSY2RIWmhjaUIwWEc1Y2RGeDBYSFI5TEZ4dVhIUmNkRngwYUdGelNXNTBaWEp6WldOMGFXOXVUMkp6WlhKMlpYSlRkWEJ3YjNKME9pQm1kVzVqZEdsdmJpZ3BJSHRjYmx4MFhIUmNkRngwY21WMGRYSnVJQ0VoY3k1SmJuUmxjbk5sWTNScGIyNVBZbk5sY25abGNseHVYSFJjZEZ4MGZTeGNibHgwWEhSY2RHaGhjMUJsY21admNtMWhibU5sU1c1bWIzSnRZWFJwYjI0NklHWjFibU4wYVc5dUtDa2dlMXh1WEhSY2RGeDBYSFJ5WlhSMWNtNGdjeTV3WlhKbWIzSnRZVzVqWlNBbUppQnpMbkJsY21admNtMWhibU5sTG1kbGRFVnVkSEpwWlhOQ2VWUjVjR1ZjYmx4MFhIUmNkSDBzWEc1Y2RGeDBYSFJvWVhOTWIyTmhiRk4wYjNKaFoyVlRkWEJ3YjNKME9pQm1kVzVqZEdsdmJpZ3BJSHRjYmx4MFhIUmNkRngwZEhKNUlIdGNibHgwWEhSY2RGeDBYSFJ5WlhSMWNtNGdjeTVzYjJOaGJGTjBiM0poWjJVdWMyVjBTWFJsYlNnZ1hDSnNiMk5oYkY5emRHOXlZV2RsWDNOMWNIQnZjblJmZEdWemRGd2lMQ0JjSW5SeWRXVmNJaUFwTENCMmIybGtJREFnSVQwOUlITXViRzlqWVd4VGRHOXlZV2RsWEc1Y2RGeDBYSFJjZEgwZ1kyRjBZMmdnS0NCMElDa2dlMXh1WEhSY2RGeDBYSFJjZEhKbGRIVnliaUJwTG1SbGRrVnljbTl5S0NCY0luZHBibVJ2ZHk1c2IyTmhiRk4wYjNKaFoyVWdhWE1nYm05MElITjFjSEJ2Y25SbFpEcGNJaXdnZENBcExDQWhNVnh1WEhSY2RGeDBYSFI5WEc1Y2RGeDBYSFI5WEc1Y2RGeDBmVnh1WEhSOUxDQm1kVzVqZEdsdmJpZ2dkQ3dnWlN3Z2JpQXBJSHRjYmx4MFhIUjJZWElnY2lBOUlHNG9JRFlnS1N3Z2FTQTlJRzRvSURJZ0tUdGNibHh1WEhSY2RHWjFibU4wYVc5dUlHOG9JSFFzSUdVZ0tTQjdYRzVjZEZ4MFhIUnlaWFIxY200Z2RDNTBhR1Z1S0NCbExDQmxJQ2xjYmx4MFhIUjlYRzVjYmx4MFhIUm1kVzVqZEdsdmJpQnpLQ0IwSUNrZ2UxeHVYSFJjZEZ4MGNtVjBkWEp1SUhRZ2FXNXpkR0Z1WTJWdlppQnlYRzVjZEZ4MGZWeHVYRzVjZEZ4MGRDNWxlSEJ2Y25SeklEMGdlMXh1WEhSY2RGeDBZV3gzWVhsek9pQnZMRnh1WEhSY2RGeDBZV3hzVW1WemIyeDJaV1E2SUdaMWJtTjBhVzl1S0NCMElDa2dlMXh1WEhSY2RGeDBYSFIyWVhJZ1pUdGNibHgwWEhSY2RGeDBjbVYwZFhKdUlIWnZhV1FnTUNBOVBUMGdkQ0EvSUhJdWNtVnFaV04wS0NCdVpYY2dSWEp5YjNJb0lGd2lkVzVrWldacGJtVmtJR2x6SUc1dmRDQmhiaUJ2WW1wbFkzUmNJaUFwSUNrZ09pQkJjbkpoZVM1cGMwRnljbUY1S0NCMElDa2dQeUFvWlNBOUlIUXViR1Z1WjNSb0tTQS9JRzVsZHlCeUtDQm1kVzVqZEdsdmJpZ2diaXdnY2lBcElIdGNibHgwWEhSY2RGeDBYSFIyWVhJZ2FTQTlJREFzSUc4Z1BTQmJYVHRjYmx4dVhIUmNkRngwWEhSY2RHWjFibU4wYVc5dUlHRW9LU0I3WEc1Y2RGeDBYSFJjZEZ4MFhIUW9hU0FyUFNBeEtTQTlQVDBnWlNBbUppQW9NQ0E5UFQwZ2J5NXNaVzVuZEdnZ1B5QnlLQ2tnT2lCdUtDQnZJQ2twWEc1Y2RGeDBYSFJjZEZ4MGZWeHVYRzVjZEZ4MFhIUmNkRngwWm5WdVkzUnBiMjRnZFNnZ2RDQXBJSHRjYmx4MFhIUmNkRngwWEhSY2RHOHVjSFZ6YUNnZ2RDQXBMQ0JoS0NsY2JseDBYSFJjZEZ4MFhIUjlYRzVjYmx4MFhIUmNkRngwWEhSMExtWnZja1ZoWTJnb0lHWjFibU4wYVc5dUtDQjBJQ2tnZTF4dVhIUmNkRngwWEhSY2RGeDBjeWdnZENBcElEOGdkQzUwYUdWdUtDQjFMQ0JoSUNrZ09pQjFLQ0IwSUNsY2JseDBYSFJjZEZ4MFhIUjlJQ2xjYmx4MFhIUmNkRngwZlNBcElEb2djaTV5WlhOdmJIWmxLQ0JiWFNBcElEb2djaTV5WldwbFkzUW9JRzVsZHlCRmNuSnZjaWdnWENKVWVYQmxJR1Z5Y205eVhDSWdLU0FwWEc1Y2RGeDBYSFI5TEZ4dVhIUmNkRngwYzI5dFpUb2dablZ1WTNScGIyNG9JSFFnS1NCN1hHNWNkRngwWEhSY2RIWmhjaUJsTzF4dVhIUmNkRngwWEhSeVpYUjFjbTRnWlNBOUlDaDBJRDBnZENCOGZDQmJYU2t1YkdWdVozUm9MQ0IwSUQwZ2RDNW1hV3gwWlhJb0lITWdLU3dnWlNBL0lHVWdJVDA5SUhRdWJHVnVaM1JvSUQ4Z2NpNXlaV3BsWTNRb0lGd2libTl1TFZCeWIyMXBjMlVnY0dGemMyVmtJSFJ2SUM1emIyMWxYQ0lnS1NBNklHNWxkeUJ5S0NCbWRXNWpkR2x2YmlnZ1pTd2diaUFwSUh0Y2JseDBYSFJjZEZ4MFhIUjJZWElnY2lBOUlEQTdYRzVjYmx4MFhIUmNkRngwWEhSbWRXNWpkR2x2YmlCcEtDa2dlMXh1WEhSY2RGeDBYSFJjZEZ4MEtISWdLejBnTVNrZ1BUMDlJSFF1YkdWdVozUm9JQ1ltSUc0b0tWeHVYSFJjZEZ4MFhIUmNkSDFjYmx4dVhIUmNkRngwWEhSY2RIUXVabTl5UldGamFDZ2dablZ1WTNScGIyNG9JSFFnS1NCN1hHNWNkRngwWEhSY2RGeDBYSFIwTG5Sb1pXNG9JR1VzSUdrZ0tWeHVYSFJjZEZ4MFhIUmNkSDBnS1Z4dVhIUmNkRngwWEhSOUlDa2dPaUJ5TG5KbGFtVmpkQ2dnWENKdWJ5QndjbTl0YVhObGN5QndZWE56WldRZ2RHOGdMbk52YldWY0lpQXBYRzVjZEZ4MFhIUjlMRnh1WEhSY2RGeDBhWE5RY205dGFYTmxPaUJ6TEZ4dVhIUmNkRngwWVd4c1UyVjBkR3hsWkRvZ1puVnVZM1JwYjI0b0lIUWdLU0I3WEc1Y2RGeDBYSFJjZEdaMWJtTjBhVzl1SUdVb0tTQjdYRzVjZEZ4MFhIUmNkSDFjYmx4dVhIUmNkRngwWEhSeVpYUjFjbTRnY2k1aGJHd29JQ2gwSUh4OElGdGRLUzV0WVhBb0lHWjFibU4wYVc5dUtDQjBJQ2tnZTF4dVhIUmNkRngwWEhSY2RISmxkSFZ5YmlCdktDQjBMQ0JsSUNsY2JseDBYSFJjZEZ4MGZTQXBJQ2xjYmx4MFhIUmNkSDBzWEc1Y2RGeDBYSFIwYVcxbGIzVjBPaUJtZFc1amRHbHZiaWdnZEN3Z1pTQXBJSHRjYmx4MFhIUmNkRngwZG1GeUlHNGdQU0J1WlhjZ2FUdGNibHgwWEhSY2RGeDBjbVYwZFhKdUlITmxkRlJwYldWdmRYUW9JR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWEhSY2RHNHVjbVZxWldOMEtDQnVaWGNnUlhKeWIzSW9JRndpVUhKdmJXbHpaU0IwYVcxbFpDQnZkWFJjSWlBcElDbGNibHgwWEhSY2RGeDBmU3dnWlNBcExDQjBMblJvWlc0b0lHWjFibU4wYVc5dUtDQjBJQ2tnZTF4dVhIUmNkRngwWEhSY2RHNHVjbVZ6YjJ4MlpTZ2dkQ0FwWEc1Y2RGeDBYSFJjZEgwc0lHWjFibU4wYVc5dUtDQjBJQ2tnZTF4dVhIUmNkRngwWEhSY2RHNHVjbVZxWldOMEtDQjBJQ2xjYmx4MFhIUmNkRngwZlNBcExDQnVMbkJ5YjIxcGMyVmNibHgwWEhSY2RIMWNibHgwWEhSOVhHNWNkSDBzSUdaMWJtTjBhVzl1S0NCMExDQmxJQ2tnZTF4dVhIUmNkSFpoY2lCdUlEMGdYQ0pwWENJc0lISWdQU0F3TENCcElEMGdNRHRjYmx4MFhIUjBMbVY0Y0c5eWRITWdQU0I3WEc1Y2RGeDBYSFJuWlc1bGNtRjBaVG9nWm5WdVkzUnBiMjRvS1NCN1hHNWNkRngwWEhSY2RISmxkSFZ5YmlCdUlDc2dVM1J5YVc1bktDQXJJRzVsZHlCRVlYUmxJQ2tnS3lCTllYUm9MbVpzYjI5eUtDQXhaVFVnS2lCTllYUm9MbkpoYm1SdmJTZ3BJQ2tnS3lCeUlDc3JYRzVjZEZ4MFhIUjlMRnh1WEhSY2RGeDBaR1YwWlhKdGFXNXBjM1JwWXpvZ1puVnVZM1JwYjI0b0tTQjdYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQnVJQ3NnVTNSeWFXNW5LQ0JwSUNzcklDbGNibHgwWEhSY2RIMWNibHgwWEhSOVhHNWNkSDBzSUdaMWJtTjBhVzl1S0NCMExDQmxMQ0J1SUNrZ2UxeHVYSFJjZEhaaGNpQnlJRDBnYmlnZ05Ea2dLU3dnYVNBOUlHNG9JRFV4SUNrc0lHOGdQU0J1S0NBd0lDazdYRzVjZEZ4MGRDNWxlSEJ2Y25SeklEMGdieTVoZFdjb0lISXVaMlYwS0NCY0ltVjJaVzUwYzF3aUlDa2dmSHdnZTMwc0lHa3VSVzFwZEhSbGNpQXBYRzVjZEgwc0lHWjFibU4wYVc5dUtDQjBMQ0JsTENCdUlDa2dlMXh1WEhSY2RIWmhjaUJ5SUQwZ2JpZ2dNamNnS1N3Z2FTQTlJRzRvSURFeE1pQXBPMXh1WEhSY2RIUXVaWGh3YjNKMGN5QTlJSEl1WW5WcGJHUW9JRnRwWFNBcFhHNWNkSDBzSUdaMWJtTjBhVzl1S0NCMExDQmxMQ0J1SUNrZ2UxeHVYSFJjZEhaaGNpQnlJRDBnYmlnZ05EQWdLU3dnYVNBOUlHNG9JREV3T1NBcExDQnZJRDBnYmlnZ055QXBPMXh1WEhSY2RDaHlJRDBnVDJKcVpXTjBMbU55WldGMFpTZ2djaUFwS1M1aWRXbHNaQ0E5SUc4b0lISXVZblZwYkdRc0lHNTFiR3dzSUdrZ0tTd2dkQzVsZUhCdmNuUnpJRDBnY2x4dVhIUjlMQ0JtZFc1amRHbHZiaWdnZEN3Z1pTd2diaUFwSUh0Y2JseDBYSFIyWVhJZ2NpQTlJRzRvSURRd0lDa3NJR2tnUFNCdUtDQTBNU0FwTENCdklEMGdiaWdnTnlBcE8xeHVYSFJjZENoeUlEMGdUMkpxWldOMExtTnlaV0YwWlNnZ2NpQXBLUzVpZFdsc1pDQTlJRzhvSUhJdVluVnBiR1FzSUc1MWJHd3NJR2tnS1N3Z2RDNWxlSEJ2Y25SeklEMGdjbHh1WEhSOUxDQm1kVzVqZEdsdmJpZ2dkQ3dnWlN3Z2JpQXBJSHRjYmx4MFhIUjJZWElnY2lBOUlHNG9JRGcwSUNrc0lHa2dQU0J1S0NBM05pQXBMQ0J2SUQwZ2JpZ2dPRFVnS1N3Z2N5QTlJRzRvSURnZ0tTd2dZU0E5SUc0b0lEY3hJQ2tzSUhVZ1BTQnVLQ0EzTlNBcExDQmpJRDBnYmlnZ01qQWdLU3dnWkNBOUlHNG9JRFVnS1N4Y2JseDBYSFJjZEdZZ1BTQnVLQ0F5TkNBcExDQnNJRDBnYmlnZ01DQXBPMXh1WEc1Y2RGeDBablZ1WTNScGIyNGdhQ2dnZENBcElIdGNibHgwWEhSY2RHbG1JQ2dnSVhRZ2ZId2dJWFF1YUdWaFpHVnljeUFwSUh0Y2JseDBYSFJjZEZ4MGRHaHliM2NnYm1WM0lFVnljbTl5S0NCY0luVnVaWGh3WldOMFpXUWdjbVZ6Y0c5dWMyVWdjMk5vWlcxaFhDSWdLVHRjYmx4MFhIUmNkSDFjYmx4MFhIUmNkSEpsZEhWeWJpQjdYRzVjZEZ4MFhIUmNkR2gwYld3NklIUXVZbTlrZVN4Y2JseDBYSFJjZEZ4MFkyOXVabWxuT2lCMExtTnZibVpwWnl4Y2JseDBYSFJjZEZ4MGNHOXNiRWx1ZEdWeWRtRnNPaUF4WlRNZ0tpQndZWEp6WlVsdWRDZ2dkQzVvWldGa1pYSnpMbmhRYjJ4c2FXNW5MQ0F4TUNBcElIeDhJRzUxYkd3c1hHNWNkRngwWEhSY2RHMWhlRU4xY25OdmNsQnZjMmwwYVc5dU9pQjBMbWhsWVdSbGNuTXViV0Y0VUc5emFYUnBiMjRzWEc1Y2RGeDBYSFJjZEcxcGJrTjFjbk52Y2xCdmMybDBhVzl1T2lCMExtaGxZV1JsY25NdWJXbHVVRzl6YVhScGIyNWNibHgwWEhSY2RIMWNibHgwWEhSOVhHNWNibHgwWEhSbWRXNWpkR2x2YmlCd0tDQjBJQ2tnZTF4dVhIUmNkRngwYVdZZ0tDQjBJQ1ltSUhRdWFHVmhaR1Z5Y3lBcElIdGNibHgwWEhSY2RGeDBkR2h5YjNjZ2JtVjNJRVZ5Y205eUtDQjBMbWhsWVdSbGNuTXVjM1JoZEhWeklDazdYRzVjZEZ4MFhIUjlYRzVjZEZ4MFhIUjBhSEp2ZHlCMElHbHVjM1JoYm1ObGIyWWdSWEp5YjNJZ1B5QjBJRG9nYm1WM0lFVnljbTl5S0NCMElDbGNibHgwWEhSOVhHNWNibHgwWEhSMExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpZ2dkQ0FwSUh0Y2JseDBYSFJjZEhRdWNHRnlZVzF6S0NCN1hHNWNkRngwWEhSY2RHbHVjM1JoYm1ObFNXUTZJSHRjYmx4MFhIUmNkRngwWEhSeVpYRjFhWEpsWkRvZ0lUQXNYRzVjZEZ4MFhIUmNkRngwWm1Gc2JHSmhZMnM2SUdZdVpHVjBaWEp0YVc1cGMzUnBZMXh1WEhSY2RGeDBYSFI5TEZ4dVhIUmNkRngwWEhSc1lXNW5PaUI3WEc1Y2RGeDBYSFJjZEZ4MGNtVnhkV2x5WldRNklDRXdMRnh1WEhSY2RGeDBYSFJjZEhSeVlXNXpabTl5YlRvZ1lTNXRZWFJqYUV4aGJtZDFZV2RsTEZ4dVhIUmNkRngwWEhSY2RHWmhiR3hpWVdOck9pQmNJbVZ1WENKY2JseDBYSFJjZEZ4MGZTeGNibHgwWEhSY2RGeDBkSGRsWlhSTWFXMXBkRG9nZXlCMGNtRnVjMlp2Y20wNklHUXVZWE5KYm5RZ2ZWeHVYSFJjZEZ4MGZTQXBMQ0IwTG1SbFptbHVaVkJ5YjNCbGNuUjVLQ0JjSW1WdVpIQnZhVzUwWENJc0lIdGNibHgwWEhSY2RGeDBaMlYwT2lCbWRXNWpkR2x2YmlncElIdGNibHgwWEhSY2RGeDBYSFIwYUhKdmR5QnVaWGNnUlhKeWIzSW9JRndpWlc1a2NHOXBiblFnYm05MElITndaV05wWm1sbFpGd2lJQ2xjYmx4MFhIUmNkRngwZlZ4dVhIUmNkRngwZlNBcExDQjBMbVJsWm1sdVpWQnliM0JsY25SNUtDQmNJbkJ2Ykd4RmJtUndiMmx1ZEZ3aUxDQjdYRzVjZEZ4MFhIUmNkR2RsZERvZ1puVnVZM1JwYjI0b0tTQjdYRzVjZEZ4MFhIUmNkRngwY21WMGRYSnVJSFJvYVhNdVpXNWtjRzlwYm5SY2JseDBYSFJjZEZ4MGZWeHVYSFJjZEZ4MGZTQXBMQ0IwTG1SbFptbHVaU2dnWENKallrbGtYQ0lzSUdaMWJtTjBhVzl1S0NCMElDa2dlMXh1WEhSY2RGeDBYSFIyWVhJZ1pTQTlJSFFnUHlCY0lsOXVaWGRjSWlBNklGd2lYMjlzWkZ3aU8xeHVYSFJjZEZ4MFhIUnlaWFIxY200Z1hDSjBiRjljSWlBcklIUm9hWE11Y0dGeVlXMXpMbWx1YzNSaGJtTmxTV1FnS3lCY0lsOWNJaUFySUhSb2FYTXVhV1FnS3lCbFhHNWNkRngwWEhSOUlDa3NJSFF1WkdWbWFXNWxLQ0JjSW5GMVpYSjVVR0Z5WVcxelhDSXNJR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWEhSeVpYUjFjbTRnZTF4dVhIUmNkRngwWEhSY2RHeGhibWM2SUhSb2FYTXVjR0Z5WVcxekxteGhibWNzWEc1Y2RGeDBYSFJjZEZ4MGRIbzZJSFV1WjJWMFZHbHRaWHB2Ym1WUFptWnpaWFFvS1N4Y2JseDBYSFJjZEZ4MFhIUjBPaUJ5S0Nrc1hHNWNkRngwWEhSY2RGeDBaRzl0WVdsdU9pQnpMbWh2YzNRc1hHNWNkRngwWEhSY2RGeDBkSGRsWlhSZmJHbHRhWFE2SUhSb2FYTXVjR0Z5WVcxekxuUjNaV1YwVEdsdGFYUXNYRzVjZEZ4MFhIUmNkRngwWkc1ME9pQmpMbVZ1WVdKc1pXUW9LVnh1WEhSY2RGeDBYSFI5WEc1Y2RGeDBYSFI5SUNrc0lIUXVaR1ZtYVc1bEtDQmNJbVpsZEdOb1hDSXNJR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWEhSeVpYUjFjbTRnYVM1bVpYUmphQ2dnZEdocGN5NWxibVJ3YjJsdWRDd2dkR2hwY3k1eGRXVnllVkJoY21GdGN5Z3BMQ0J2TENCMGFHbHpMbU5pU1dRb0tTQXBMblJvWlc0b0lHZ3NJSEFnS1Z4dVhIUmNkRngwZlNBcExDQjBMbVJsWm1sdVpTZ2dYQ0p3YjJ4c1hDSXNJR1oxYm1OMGFXOXVLQ0IwTENCbElDa2dlMXh1WEhSY2RGeDBYSFIyWVhJZ2Jpd2djanRjYmx4MFhIUmNkRngwY21WMGRYSnVJRzRnUFNCN1hHNWNkRngwWEhSY2RGeDBjMmx1WTJWZmFXUTZJQ2gwSUQwZ2RDQjhmQ0I3ZlNrdWMybHVZMlZKWkN4Y2JseDBYSFJjZEZ4MFhIUnRZWGhmYVdRNklIUXViV0Y0U1dRc1hHNWNkRngwWEhSY2RGeDBiV2x1WDNCdmMybDBhVzl1T2lCMExtMXBibEJ2YzJsMGFXOXVMRnh1WEhSY2RGeDBYSFJjZEcxaGVGOXdiM05wZEdsdmJqb2dkQzV0WVhoUWIzTnBkR2x2Ymx4dVhIUmNkRngwWEhSOUxDQnlJRDBnYkM1aGRXY29JSFJvYVhNdWNYVmxjbmxRWVhKaGJYTW9LU3dnYmlBcExDQnBMbVpsZEdOb0tDQjBhR2x6TG5CdmJHeEZibVJ3YjJsdWRDd2djaXdnYnl3Z2RHaHBjeTVqWWtsa0tDQmxJQ2tnS1M1MGFHVnVLQ0JvTENCd0lDbGNibHgwWEhSY2RIMGdLVnh1WEhSY2RIMWNibHgwZlN3Z1puVnVZM1JwYjI0b0lIUXNJR1VzSUc0Z0tTQjdYRzVjZEZ4MGRtRnlJSElnUFNCdUtDQTFNU0FwTG0xaGEyVkZiV2wwZEdWeUtDazdYRzVjZEZ4MGRDNWxlSEJ2Y25SeklEMGdlMXh1WEhSY2RGeDBaVzFwZEhSbGNqb2djaXhjYmx4MFhIUmNkRk5VUVZKVU9pQmNJbk4wWVhKMFhDSXNYRzVjZEZ4MFhIUkJURXhmVjBsRVIwVlVVMTlTUlU1RVJWSmZVMVJCVWxRNklGd2lZV3hzWDNkcFpHZGxkSE5mY21WdVpHVnlYM04wWVhKMFhDSXNYRzVjZEZ4MFhIUkJURXhmVjBsRVIwVlVVMTlTUlU1RVJWSmZSVTVFT2lCY0ltRnNiRjkzYVdSblpYUnpYM0psYm1SbGNsOWxibVJjSWl4Y2JseDBYSFJjZEVGTVRGOVhTVVJIUlZSVFgwRk9SRjlKVFVGSFJWTmZURTlCUkVWRU9pQmNJbUZzYkY5M2FXUm5aWFJ6WDJGdVpGOXBiV0ZuWlhOZmJHOWhaR1ZrWENKY2JseDBYSFI5WEc1Y2RIMHNJR1oxYm1OMGFXOXVLQ0IwTENCbExDQnVJQ2tnZTF4dVhIUmNkSFpoY2lCeUlEMGdiaWdnTVRFMUlDa3NJR2tnUFNCdUtDQXhNVGdnS1R0Y2JseHVYSFJjZEdaMWJtTjBhVzl1SUc4b0lIUWdLU0I3WEc1Y2RGeDBYSFJ5WlhSMWNtNGdjaTV6WlhSMGFXNW5jMHh2WVdSbFpDZ3BMblJvWlc0b0lHWjFibU4wYVc5dUtDQmxJQ2tnZTF4dVhIUmNkRngwWEhSeVpYUjFjbTRnWlZzZ2RDQmRYRzVjZEZ4MFhIUjlJQ2xjYmx4MFhIUjlYRzVjYmx4MFhIUm1kVzVqZEdsdmJpQnpLQ2tnZTF4dVhIUmNkRngwY21WMGRYSnVJRzhvSUZ3aVpYaHdaWEpwYldWdWRITmNJaUFwWEc1Y2RGeDBmVnh1WEc1Y2RGeDBkQzVsZUhCdmNuUnpJRDBnZTF4dVhIUmNkRngwYzJodmRXeGtUMkowWVdsdVEyOXZhMmxsUTI5dWMyVnVkRG9nWm5WdVkzUnBiMjRvS1NCN1hHNWNkRngwWEhSY2RISmxkSFZ5YmlCdktDQmNJbk5vYjNWc1pFOWlkR0ZwYmtOdmIydHBaVU52Ym5ObGJuUmNJaUFwWEc1Y2RGeDBYSFI5TEZ4dVhIUmNkRngwWjJWMFJYaHdaWEpwYldWdWRITTZJSE1zWEc1Y2RGeDBYSFJuWlhSRmVIQmxjbWx0Wlc1ME9pQm1kVzVqZEdsdmJpZ2dkQ0FwSUh0Y2JseDBYSFJjZEZ4MGNtVjBkWEp1SUhNb0tTNTBhR1Z1S0NCbWRXNWpkR2x2YmlnZ1pTQXBJSHRjYmx4MFhIUmNkRngwWEhScFppQW9JQ0ZsV3lCMElGMGdLU0I3WEc1Y2RGeDBYSFJjZEZ4MFhIUjBhSEp2ZHlCdVpYY2dSWEp5YjNJb0lGd2lSWGh3WlhKcGJXVnVkQ0J1YjNRZ1ptOTFibVJjSWlBcE8xeHVYSFJjZEZ4MFhIUmNkSDFjYmx4MFhIUmNkRngwWEhSeVpYUjFjbTRnWlZzZ2RDQmRYRzVjZEZ4MFhIUmNkSDBnS1Z4dVhIUmNkRngwZlN4Y2JseDBYSFJjZEdkbGRFRmpkR2wyWlVWNGNHVnlhVzFsYm5SRVlYUmhVM1J5YVc1bk9pQm1kVzVqZEdsdmJpZ3BJSHRjYmx4MFhIUmNkRngwY21WMGRYSnVJSE1vS1M1MGFHVnVLQ0JtZFc1amRHbHZiaWdnZENBcElIdGNibHgwWEhSY2RGeDBYSFIyWVhJZ1pTQTlJRTlpYW1WamRDNXJaWGx6S0NCMElDa3VjbVZrZFdObEtDQm1kVzVqZEdsdmJpZ2daU3dnYmlBcElIdGNibHgwWEhSY2RGeDBYSFJjZEhaaGNpQnlPMXh1WEhSY2RGeDBYSFJjZEZ4MGNtVjBkWEp1SUhSYklHNGdYUzUyWlhKemFXOXVJQ1ltSUNoeUlEMGdiaTV6Y0d4cGRDZ2dYQ0pmWENJZ0tTNXpiR2xqWlNnZ0xTQXhJQ2xiSURBZ1hTd2daUzV3ZFhOb0tDQnlJQ3NnWENJN1hDSWdLeUIwV3lCdUlGMHVZblZqYTJWMElDa3BMQ0JsWEc1Y2RGeDBYSFJjZEZ4MGZTd2dXMTBnS1R0Y2JseDBYSFJjZEZ4MFhIUnlaWFIxY200Z2FTZ2daUzVxYjJsdUtDQmNJaXhjSWlBcElDbGNibHgwWEhSY2RGeDBmU0FwWEc1Y2RGeDBYSFI5TEZ4dVhIUmNkRngwWjJWMFJYaHdaWEpwYldWdWRFdGxlWE02SUdaMWJtTjBhVzl1S0NrZ2UxeHVYSFJjZEZ4MFhIUnlaWFIxY200Z2N5Z3BMblJvWlc0b0lHWjFibU4wYVc5dUtDQjBJQ2tnZTF4dVhIUmNkRngwWEhSY2RISmxkSFZ5YmlCUFltcGxZM1F1YTJWNWN5Z2dkQ0FwWEc1Y2RGeDBYSFJjZEgwZ0tWeHVYSFJjZEZ4MGZTeGNibHgwWEhSY2RHeHZZV1E2SUdaMWJtTjBhVzl1S0NrZ2UxeHVYSFJjZEZ4MFhIUnlMbXh2WVdRb0tWeHVYSFJjZEZ4MGZWeHVYSFJjZEgxY2JseDBmU3dnWm5WdVkzUnBiMjRvSUhRc0lHVXNJRzRnS1NCN1hHNWNkRngwZG1GeUlISWdQU0J1S0NBMElDa3NJR2tnUFNCdUtDQXdJQ2s3WEc1Y2RGeDBkQzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRvSUhRc0lHVXNJRzRnS1NCN1hHNWNkRngwWEhSMllYSWdienRjYmx4MFhIUmNkR2xtSUNnZ2JpQTlJRzRnZkh3Z2Npd2dkQ0E5SUhRZ2ZId2dlMzBzSUdVZ1BTQmxJSHg4SUh0OUxDQjBMbTVoYldVZ0tTQjdYRzVjZEZ4MFhIUmNkSFJ5ZVNCN1hHNWNkRngwWEhSY2RGeDBieUE5SUc0dVkzSmxZWFJsUld4bGJXVnVkQ2dnSnp4cFpuSmhiV1VnYm1GdFpUMWNJaWNnS3lCMExtNWhiV1VnS3lBblhDSStQQzlwWm5KaGJXVStKeUFwWEc1Y2RGeDBYSFJjZEgwZ1kyRjBZMmdnS0NCbElDa2dlMXh1WEhSY2RGeDBYSFJjZENodklEMGdiaTVqY21WaGRHVkZiR1Z0Wlc1MEtDQmNJbWxtY21GdFpWd2lJQ2twTG01aGJXVWdQU0IwTG01aGJXVmNibHgwWEhSY2RGeDBmVnh1WEhSY2RGeDBYSFJrWld4bGRHVWdkQzV1WVcxbFhHNWNkRngwWEhSOUlHVnNjMlVnZTF4dVhIUmNkRngwWEhSdklEMGdiaTVqY21WaGRHVkZiR1Z0Wlc1MEtDQmNJbWxtY21GdFpWd2lJQ2s3WEc1Y2RGeDBYSFI5WEc1Y2RGeDBYSFJ5WlhSMWNtNGdkQzVwWkNBbUppQW9ieTVwWkNBOUlIUXVhV1FzSUdSbGJHVjBaU0IwTG1sa0tTd2dieTVoYkd4dmQzUnlZVzV6Y0dGeVpXNWplU0E5SUZ3aWRISjFaVndpTENCdkxuTmpjbTlzYkdsdVp5QTlJRndpYm05Y0lpd2dieTV6WlhSQmRIUnlhV0oxZEdVb0lGd2labkpoYldWQ2IzSmtaWEpjSWl3Z01DQXBMQ0J2TG5ObGRFRjBkSEpwWW5WMFpTZ2dYQ0poYkd4dmQxUnlZVzV6Y0dGeVpXNWplVndpTENBaE1DQXBMQ0JwTG1admNrbHVLQ0IwTENCbWRXNWpkR2x2YmlnZ2RDd2daU0FwSUh0Y2JseDBYSFJjZEZ4MGJ5NXpaWFJCZEhSeWFXSjFkR1VvSUhRc0lHVWdLVnh1WEhSY2RGeDBmU0FwTENCcExtWnZja2x1S0NCbExDQm1kVzVqZEdsdmJpZ2dkQ3dnWlNBcElIdGNibHgwWEhSY2RGeDBieTV6ZEhsc1pWc2dkQ0JkSUQwZ1pWeHVYSFJjZEZ4MGZTQXBMQ0J2WEc1Y2RGeDBmVnh1WEhSOUxDQm1kVzVqZEdsdmJpZ2dkQ3dnWlN3Z2JpQXBJSHRjYmx4MFhIUjJZWElnY2lBOUlHNG9JREVnS1M1S1UwOU9PMXh1WEhSY2RIUXVaWGh3YjNKMGN5QTlJSHRjYmx4MFhIUmNkSE4wY21sdVoybG1lVG9nY2k1emRISnBibWRwWm5rZ2ZId2djaTVsYm1OdlpHVXNYRzVjZEZ4MFhIUndZWEp6WlRvZ2NpNXdZWEp6WlNCOGZDQnlMbVJsWTI5a1pWeHVYSFJjZEgxY2JseDBmU3dnWm5WdVkzUnBiMjRvSUhRc0lHVXNJRzRnS1NCN1hHNWNkRngwZG1GeUlISWdQU0J1S0NBd0lDa3NJR2tnUFNCdUtDQTBNeUFwTzF4dVhIUmNkSFF1Wlhod2IzSjBjeUE5SUh0Y2JseDBYSFJjZEdOc2IzTmxjM1E2SUdaMWJtTjBhVzl1SUhRb0lHVXNJRzRzSUc4Z0tTQjdYRzVjZEZ4MFhIUmNkSFpoY2lCek8xeHVYSFJjZEZ4MFhIUnBaaUFvSUc0Z0tTQjdYRzVjZEZ4MFhIUmNkRngwY21WMGRYSnVJRzhnUFNCdklIeDhJRzRnSmlZZ2JpNXZkMjVsY2tSdlkzVnRaVzUwTENCeklEMGdjaTVwYzFSNWNHVW9JRndpWm5WdVkzUnBiMjVjSWl3Z1pTQXBJRDhnWlNBNklHWjFibU4wYVc5dUtDQjBJQ2tnZTF4dVhIUmNkRngwWEhSY2RGeDBjbVYwZFhKdUlHWjFibU4wYVc5dUtDQmxJQ2tnZTF4dVhIUmNkRngwWEhSY2RGeDBYSFJ5WlhSMWNtNGdJU0ZsTG5SaFowNWhiV1VnSmlZZ2FTZ2daU3dnZENBcFhHNWNkRngwWEhSY2RGeDBYSFI5WEc1Y2RGeDBYSFJjZEZ4MGZTZ2daU0FwTENCdUlEMDlQU0J2SUQ4Z2N5Z2diaUFwSUQ4Z2JpQTZJSFp2YVdRZ01DQTZJSE1vSUc0Z0tTQS9JRzRnT2lCMEtDQnpMQ0J1TG5CaGNtVnVkRTV2WkdVc0lHOGdLVnh1WEhSY2RGeDBYSFI5WEc1Y2RGeDBYSFI5WEc1Y2RGeDBmVnh1WEhSOUxDQm1kVzVqZEdsdmJpZ2dkQ3dnWlN3Z2JpQXBJSHRjYmx4MFhIUjJZWElnY2l3Z2FTQTlJRzRvSURRZ0tUdGNibHh1WEhSY2RHWjFibU4wYVc5dUlHOG9JSFFnS1NCN1hHNWNkRngwWEhSMllYSWdaU3dnYml3Z2J5d2djeUE5SURBN1hHNWNkRngwWEhSbWIzSWdLQ0J5SUQwZ2UzMHNJR1VnUFNBb2RDQTlJSFFnZkh3Z2FTa3VaMlYwUld4bGJXVnVkSE5DZVZSaFowNWhiV1VvSUZ3aWJXVjBZVndpSUNrN0lHVmJJSE1nWFRzZ2N5QXJLeUFwSUh0Y2JseDBYSFJjZEZ4MGFXWWdLQ0J1SUQwZ1pWc2djeUJkTENBdlhuUjNhWFIwWlhJNkx5NTBaWE4wS0NCdUxtZGxkRUYwZEhKcFluVjBaU2dnWENKdVlXMWxYQ0lnS1NBcElDa2dlMXh1WEhSY2RGeDBYSFJjZEc4Z1BTQnVMbWRsZEVGMGRISnBZblYwWlNnZ1hDSnVZVzFsWENJZ0tTNXlaWEJzWVdObEtDQXZYblIzYVhSMFpYSTZMeXdnWENKY0lpQXBPMXh1WEhSY2RGeDBYSFI5SUdWc2MyVWdlMXh1WEhSY2RGeDBYSFJjZEdsbUlDZ2dJUzllZEhkcGRIUmxjam92TG5SbGMzUW9JRzR1WjJWMFFYUjBjbWxpZFhSbEtDQmNJbkJ5YjNCbGNuUjVYQ0lnS1NBcElDa2dlMXh1WEhSY2RGeDBYSFJjZEZ4MFkyOXVkR2x1ZFdVN1hHNWNkRngwWEhSY2RGeDBmVnh1WEhSY2RGeDBYSFJjZEc4Z1BTQnVMbWRsZEVGMGRISnBZblYwWlNnZ1hDSndjbTl3WlhKMGVWd2lJQ2t1Y21Wd2JHRmpaU2dnTDE1MGQybDBkR1Z5T2k4c0lGd2lYQ0lnS1Z4dVhIUmNkRngwWEhSOVhHNWNkRngwWEhSY2RISmJJRzhnWFNBOUlHNHVaMlYwUVhSMGNtbGlkWFJsS0NCY0ltTnZiblJsYm5SY0lpQXBJSHg4SUc0dVoyVjBRWFIwY21saWRYUmxLQ0JjSW5aaGJIVmxYQ0lnS1Z4dVhIUmNkRngwZlZ4dVhIUmNkSDFjYmx4dVhIUmNkRzhvS1N3Z2RDNWxlSEJ2Y25SeklEMGdlMXh1WEhSY2RGeDBhVzVwZERvZ2J5eGNibHgwWEhSY2RIWmhiRG9nWm5WdVkzUnBiMjRvSUhRZ0tTQjdYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQnlXeUIwSUYxY2JseDBYSFJjZEgxY2JseDBYSFI5WEc1Y2RIMHNJR1oxYm1OMGFXOXVLQ0IwTENCbExDQnVJQ2tnZTF4dVhIUmNkSFpoY2lCeUlEMGdiaWdnTVRBZ0tTd2dhU0E5SUh0OUxDQnZJRDBnTFNBeExDQnpJRDBnZTMwN1hHNWNibHgwWEhSbWRXNWpkR2x2YmlCaEtDQjBJQ2tnZTF4dVhIUmNkRngwZG1GeUlHVWdQU0IwTG1kbGRFRjBkSEpwWW5WMFpTZ2dYQ0prWVhSaExYUjNhWFIwWlhJdFpYWmxiblF0YVdSY0lpQXBPMXh1WEhSY2RGeDBjbVYwZFhKdUlHVWdmSHdnS0hRdWMyVjBRWFIwY21saWRYUmxLQ0JjSW1SaGRHRXRkSGRwZEhSbGNpMWxkbVZ1ZEMxcFpGd2lMQ0FyS3lCdklDa3NJRzhwWEc1Y2RGeDBmVnh1WEc1Y2RGeDBablZ1WTNScGIyNGdkU2dnZEN3Z1pTd2diaUFwSUh0Y2JseDBYSFJjZEhaaGNpQnlJRDBnTUN3Z2FTQTlJSFFnSmlZZ2RDNXNaVzVuZEdnZ2ZId2dNRHRjYmx4MFhIUmNkR1p2Y2lBb0lISWdQU0F3T3lCeUlEd2dhVHNnY2lBckt5QXBJSHRjYmx4MFhIUmNkRngwYVdZZ0tDQjBXeUJ5SUYwdVkyRnNiQ2dnWlN3Z2Jpd2daU0FwTENCdUxtTmxZWE5sU1cxdFpXUnBZWFJsYkhrZ0tTQjdYRzVjZEZ4MFhIUmNkRngwY21WMGRYSnVJQ0V4WEc1Y2RGeDBYSFJjZEgxY2JseDBYSFJjZEgxY2JseDBYSFI5WEc1Y2JseDBYSFJtZFc1amRHbHZiaUJqS0NCMExDQmxMQ0J1SUNrZ2UxeHVYSFJjZEZ4MFptOXlJQ2hjYmx4MFhIUmNkRngwZG1GeUlHa2dQU0J1SUh4OElIUXVkR0Z5WjJWMElIeDhJSFF1YzNKalJXeGxiV1Z1ZEN3Z2J5QTlJSEl1YkdsemRDZ2dhU0FwTG0xaGNDZ2dablZ1WTNScGIyNG9JSFFnS1NCN1hHNWNkRngwWEhSY2RGeDBjbVYwZFhKdUlGd2lMbHdpSUNzZ2RGeHVYSFJjZEZ4MFhIUjlJQ2t1WTI5dVkyRjBLQ0JwTG5SaFowNWhiV1VnS1N3Z2N5QTlJREFzSUdFZ1BTQnZMbXhsYm1kMGFEc2djeUE4SUdFN0lITWdLeXRjYmx4MFhIUmNkQ2tnZTF4dVhIUmNkRngwWEhScFppQW9JQ0V4SUQwOVBTQjFLQ0JsV3lCdld5QnpJRjBnWFN3Z2FTd2dkQ0FwSUNrZ2UxeHVYSFJjZEZ4MFhIUmNkSEpsZEhWeWJqdGNibHgwWEhSY2RGeDBmVnh1WEhSY2RGeDBmVnh1WEhSY2RGeDBkQzVqWldGelpTQjhmQ0JwSUNFOVBTQjBhR2x6SUNZbUlHTXVZMkZzYkNnZ2RHaHBjeXdnZEN3Z1pTd2dhUzV3WVhKbGJuUkZiR1Z0Wlc1MElIeDhJR2t1Y0dGeVpXNTBUbTlrWlNBcFhHNWNkRngwZlZ4dVhHNWNkRngwWm5WdVkzUnBiMjRnWkNnZ2RDd2daU3dnYml3Z2NpQXBJSHRjYmx4MFhIUmNkR1oxYm1OMGFXOXVJR2tvSUhJZ0tTQjdYRzVjZEZ4MFhIUmNkR011WTJGc2JDZ2dkQ3dnY2l3Z2Jsc2daU0JkSUNsY2JseDBYSFJjZEgxY2JseHVYSFJjZEZ4MElXWjFibU4wYVc5dUtDQjBMQ0JsTENCdUxDQnlJQ2tnZTF4dVhIUmNkRngwWEhSMExtbGtJQ1ltSUNoeld5QjBMbWxrSUYwZ1BTQnpXeUIwTG1sa0lGMGdmSHdnVzEwc0lITmJJSFF1YVdRZ1hTNXdkWE5vS0NCN1hHNWNkRngwWEhSY2RGeDBaV3c2SUhRc1hHNWNkRngwWEhSY2RGeDBiR2x6ZEdWdVpYSTZJR1VzWEc1Y2RGeDBYSFJjZEZ4MGRIbHdaVG9nYml4Y2JseDBYSFJjZEZ4MFhIUnliMjkwU1dRNklISmNibHgwWEhSY2RGeDBmU0FwS1Z4dVhIUmNkRngwZlNnZ2RDd2dhU3dnWlN3Z2NpQXBMQ0IwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSUdVc0lHa3NJQ0V4SUNsY2JseDBYSFI5WEc1Y2JseDBYSFJtZFc1amRHbHZiaUJtS0NCMElDa2dlMXh1WEhSY2RGeDBkQ0FtSmlCMExuQnlaWFpsYm5SRVpXWmhkV3gwSUQ4Z2RDNXdjbVYyWlc1MFJHVm1ZWFZzZENncElEb2dkQzV5WlhSMWNtNVdZV3gxWlNBOUlDRXhYRzVjZEZ4MGZWeHVYRzVjZEZ4MFpuVnVZM1JwYjI0Z2JDZ2dkQ0FwSUh0Y2JseDBYSFJjZEhRZ0ppWWdLSFF1WTJWaGMyVWdQU0FoTUNrZ0ppWWdkQzV6ZEc5d1VISnZjR0ZuWVhScGIyNGdQeUIwTG5OMGIzQlFjbTl3WVdkaGRHbHZiaWdwSURvZ2RDNWpZVzVqWld4Q2RXSmliR1VnUFNBaE1GeHVYSFJjZEgxY2JseHVYSFJjZEhRdVpYaHdiM0owY3lBOUlIdGNibHgwWEhSY2RITjBiM0E2SUdaMWJtTjBhVzl1S0NCMElDa2dlMXh1WEhSY2RGeDBYSFJ5WlhSMWNtNGdiQ2dnZENBcExDQm1LQ0IwSUNrc0lDRXhYRzVjZEZ4MFhIUjlMRnh1WEhSY2RGeDBjM1J2Y0ZCeWIzQmhaMkYwYVc5dU9pQnNMRnh1WEhSY2RGeDBjM1J2Y0VsdGJXVmthV0YwWlZCeWIzQmhaMkYwYVc5dU9pQm1kVzVqZEdsdmJpZ2dkQ0FwSUh0Y2JseDBYSFJjZEZ4MGRDQW1KaUFvZEM1alpXRnpaVWx0YldWa2FXRjBaV3g1SUQwZ0lUQXNJR3dvSUhRZ0tTd2dkQzV6ZEc5d1NXMXRaV1JwWVhSbFVISnZjR0ZuWVhScGIyNG9LU2xjYmx4MFhIUmNkSDBzWEc1Y2RGeDBYSFJ3Y21WMlpXNTBSR1ZtWVhWc2REb2daaXhjYmx4MFhIUmNkR1JsYkdWbllYUmxPaUJtZFc1amRHbHZiaWdnZEN3Z1pTd2diaXdnY2lBcElIdGNibHgwWEhSY2RGeDBkbUZ5SUc4Z1BTQmhLQ0IwSUNrN1hHNWNkRngwWEhSY2RHbGJJRzhnWFNBOUlHbGJJRzhnWFNCOGZDQjdmU3dnYVZzZ2J5QmRXeUJsSUYwZ2ZId2dLR2xiSUc4Z1hWc2daU0JkSUQwZ2UzMHNJR1FvSUhRc0lHVXNJR2xiSUc4Z1hTd2dieUFwS1N3Z2FWc2dieUJkV3lCbElGMWJJRzRnWFNBOUlHbGJJRzhnWFZzZ1pTQmRXeUJ1SUYwZ2ZId2dXMTBzSUdsYklHOGdYVnNnWlNCZFd5QnVJRjB1Y0hWemFDZ2djaUFwWEc1Y2RGeDBYSFI5TEZ4dVhIUmNkRngwYzJsdGRXeGhkR1U2SUdaMWJtTjBhVzl1S0NCMExDQmxMQ0J1SUNrZ2UxeHVYSFJjZEZ4MFhIUjJZWElnY2lBOUlHRW9JR1VnS1N3Z2J5QTlJR2xiSUhJZ1hTQW1KaUJwV3lCeUlGMDdYRzVjZEZ4MFhIUmNkR011WTJGc2JDZ2daU3dnZXlCMFlYSm5aWFE2SUc0Z2ZTd2diMXNnZENCZElDbGNibHgwWEhSY2RIMHNYRzVjZEZ4MFhIUnlaVzF2ZG1WRVpXeGxaMkYwWlhOR2IzSlhhV1JuWlhRNklHWjFibU4wYVc5dUtDQjBJQ2tnZTF4dVhIUmNkRngwWEhSMllYSWdaU0E5SUhOYklIUWdYVHRjYmx4MFhIUmNkRngwWlNBbUppQW9aUzVtYjNKRllXTm9LQ0JtZFc1amRHbHZiaWdnZENBcElIdGNibHgwWEhSY2RGeDBYSFIwTG1Wc0xuSmxiVzkyWlVWMlpXNTBUR2x6ZEdWdVpYSW9JSFF1ZEhsd1pTd2dkQzVzYVhOMFpXNWxjaXdnSVRFZ0tTd2daR1ZzWlhSbElHbGJJSFF1Y205dmRFbGtJRjFjYmx4MFhIUmNkRngwZlNBcExDQmtaV3hsZEdVZ2Mxc2dkQ0JkS1Z4dVhIUmNkRngwZlZ4dVhIUmNkSDFjYmx4MGZTd2dablZ1WTNScGIyNG9JSFFzSUdVc0lHNGdLU0I3WEc1Y2RGeDBkbUZ5SUhJZ1BTQnVLQ0EzT0NBcExDQnBJRDBnYmlnZ01UQTJJQ2tzSUc4Z1BTQnVLQ0E0TVNBcExDQnpJRDBnYmlnZ01qRWdLU3dnWVNBOUlHNWxkeUFvYmlnZ01URTBJQ2twS0NCbWRXNWpkR2x2YmlnZ2RDQXBJSHRjYmx4MFhIUmNkSFpoY2lCbExDQnVMQ0JoTzF4dVhIUmNkRngwYVdZZ0tDQXdJQ0U5UFNCMExteGxibWQwYUNBcElIdGNibHgwWEhSY2RGeDBhV1lnS0NCMUtDQjBJQ2tnS1NCN1hHNWNkRngwWEhSY2RGeDBjbVYwZFhKdUlHTW9JSFFnS1R0Y2JseDBYSFJjZEZ4MGZWeHVYSFJjZEZ4MFhIUmxJRDBnY2lnZ2RDd2dablZ1WTNScGIyNG9JSFFnS1NCN1hHNWNkRngwWEhSY2RGeDBjbVYwZFhKdUlITXVibTkwYVdObFUyVmxiaWdnZEM1cGJuQjFkQzV1WVcxbGMzQmhZMlVnS1Z4dVhIUmNkRngwWEhSOUlDa3NJRzRnUFNCbExuUnlkV1VzSUdFZ1BTQmxMbVpoYkhObExDQnVJQ1ltSUc0dWJHVnVaM1JvSUQ0Z01DQW1KaUFvYmlBOUlHNHVjMnhwWTJVb0lEQXNJREVnS1N3Z2J5NWpZVzVHYkhWemFFOXVaVWwwWlcwb0lHNWJJREFnWFNBcElIeDhJQ2h1V3lBd0lGMHVhVzV3ZFhRdVpHRjBZUzV0WlhOellXZGxJRDBnWENKY0lpa3NJR01vSUc0Z0tTa3NJR0VnSmlZZ0tIVW9JR0VnS1NBL0lHTWdPaUJtZFc1amRHbHZiaWdnZENBcElIdGNibHgwWEhSY2RGeDBYSFJwTG1sdWFYUW9LU3dnZEM1bWIzSkZZV05vS0NCbWRXNWpkR2x2YmlnZ2RDQXBJSHRjYmx4MFhIUmNkRngwWEhSY2RIWmhjaUJsSUQwZ2RDNXBibkIxZEM1dVlXMWxjM0JoWTJVc0lHNGdQU0IwTG1sdWNIVjBMbVJoZEdFc0lISWdQU0IwTG1sdWNIVjBMbTltWm5OcGRHVXNJRzhnUFNCMExtbHVjSFYwTG5abGNuTnBiMjQ3WEc1Y2RGeDBYSFJjZEZ4MFhIUnBMbU5zYVdWdWRFVjJaVzUwS0NCbExDQnVMQ0J5TENCdklDbGNibHgwWEhSY2RGeDBYSFI5SUNrc0lHa3VabXgxYzJnb0tTNTBhR1Z1S0NCbWRXNWpkR2x2YmlncElIdGNibHgwWEhSY2RGeDBYSFJjZEhRdVptOXlSV0ZqYUNnZ1puVnVZM1JwYjI0b0lIUWdLU0I3WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkSFF1ZEdGemEwUnZibVZFWldabGNuSmxaQzV5WlhOdmJIWmxLQ2xjYmx4MFhIUmNkRngwWEhSY2RIMGdLVnh1WEhSY2RGeDBYSFJjZEgwc0lHWjFibU4wYVc5dUtDa2dlMXh1WEhSY2RGeDBYSFJjZEZ4MGRDNW1iM0pGWVdOb0tDQm1kVzVqZEdsdmJpZ2dkQ0FwSUh0Y2JseDBYSFJjZEZ4MFhIUmNkRngwZEM1MFlYTnJSRzl1WlVSbFptVnljbVZrTG5KbGFtVmpkQ2dwWEc1Y2RGeDBYSFJjZEZ4MFhIUjlJQ2xjYmx4MFhIUmNkRngwWEhSOUlDbGNibHgwWEhSY2RGeDBmU2tvSUdFZ0tWeHVYSFJjZEZ4MGZWeHVYSFJjZEgwZ0tUdGNibHh1WEhSY2RHWjFibU4wYVc5dUlIVW9JSFFnS1NCN1hHNWNkRngwWEhSeVpYUjFjbTRnTVNBOVBUMGdkQzVzWlc1bmRHZ2dKaVlnYnk1allXNUdiSFZ6YUU5dVpVbDBaVzBvSUhSYklEQWdYU0FwWEc1Y2RGeDBmVnh1WEc1Y2RGeDBablZ1WTNScGIyNGdZeWdnZENBcElIdGNibHgwWEhSY2RIUXVabTl5UldGamFDZ2dablZ1WTNScGIyNG9JSFFnS1NCN1hHNWNkRngwWEhSY2RIWmhjaUJsSUQwZ2RDNXBibkIxZEM1dVlXMWxjM0JoWTJVc0lHNGdQU0IwTG1sdWNIVjBMbVJoZEdFc0lISWdQU0IwTG1sdWNIVjBMbTltWm5OcGRHVXNJR2tnUFNCMExtbHVjSFYwTG5abGNuTnBiMjQ3WEc1Y2RGeDBYSFJjZEc4dVkyeHBaVzUwUlhabGJuUW9JR1VzSUc0c0lISXNJR2tnS1N3Z2RDNTBZWE5yUkc5dVpVUmxabVZ5Y21Wa0xuSmxjMjlzZG1Vb0tWeHVYSFJjZEZ4MGZTQXBYRzVjZEZ4MGZWeHVYRzVjZEZ4MGRDNWxlSEJ2Y25SeklEMGdlMXh1WEhSY2RGeDBjMk55YVdKbE9pQm1kVzVqZEdsdmJpZ2dkQ3dnWlN3Z2Jpd2djaUFwSUh0Y2JseDBYSFJjZEZ4MGNtVjBkWEp1SUdFdVlXUmtLQ0I3WEc1Y2RGeDBYSFJjZEZ4MGJtRnRaWE53WVdObE9pQjBMRnh1WEhSY2RGeDBYSFJjZEdSaGRHRTZJR1VzWEc1Y2RGeDBYSFJjZEZ4MGIyWm1jMmwwWlRvZ2JpeGNibHgwWEhSY2RGeDBYSFIyWlhKemFXOXVPaUJ5WEc1Y2RGeDBYSFJjZEgwZ0tWeHVYSFJjZEZ4MGZTeGNibHgwWEhSY2RIQmhkWE5sT2lCbWRXNWpkR2x2YmlncElIdGNibHgwWEhSY2RGeDBZUzV3WVhWelpTZ3BYRzVjZEZ4MFhIUjlMRnh1WEhSY2RGeDBjbVZ6ZFcxbE9pQm1kVzVqZEdsdmJpZ3BJSHRjYmx4MFhIUmNkRngwWVM1eVpYTjFiV1VvS1Z4dVhIUmNkRngwZlZ4dVhIUmNkSDFjYmx4MGZTd2dablZ1WTNScGIyNG9JSFFzSUdVc0lHNGdLU0I3WEc1Y2RGeDBkbUZ5SUhJZ1BTQnVLQ0F5TnlBcExDQnBJRDBnYmlnZ01USTNJQ2s3WEc1Y2RGeDBkQzVsZUhCdmNuUnpJRDBnY2k1aWRXbHNaQ2dnVzJsZElDbGNibHgwZlN3Z1puVnVZM1JwYjI0b0lIUXNJR1VzSUc0Z0tTQjdYRzVjZEZ4MGRtRnlJSElnUFNCdUtDQTRJQ2tzSUdrZ1BTQnVLQ0EzT1NBcExDQnZJRDBnYmlnZ01DQXBMQ0J6SUQwZ2FTNW5aWFJEWVc1dmJtbGpZV3hWVWt3b0tTQjhmQ0J5TG1oeVpXWXNJR0VnUFNCek8xeHVYSFJjZEhRdVpYaHdiM0owY3lBOUlIdGNibHgwWEhSY2RHbHpSbkpoYldWa09pQm1kVzVqZEdsdmJpZ3BJSHRjYmx4MFhIUmNkRngwY21WMGRYSnVJSE1nSVQwOUlHRmNibHgwWEhSY2RIMHNYRzVjZEZ4MFhIUnliMjkwUkc5amRXMWxiblJNYjJOaGRHbHZiam9nWm5WdVkzUnBiMjRvSUhRZ0tTQjdYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQjBJQ1ltSUc4dWFYTlVlWEJsS0NCY0luTjBjbWx1WjF3aUxDQjBJQ2tnSmlZZ0tITWdQU0IwS1N3Z2MxeHVYSFJjZEZ4MGZTeGNibHgwWEhSY2RHTjFjbkpsYm5SRWIyTjFiV1Z1ZEV4dlkyRjBhVzl1T2lCbWRXNWpkR2x2YmlncElIdGNibHgwWEhSY2RGeDBjbVYwZFhKdUlHRmNibHgwWEhSY2RIMWNibHgwWEhSOVhHNWNkSDBzSUdaMWJtTjBhVzl1S0NCMExDQmxMQ0J1SUNrZ2UxeHVYSFJjZEhaaGNpQnlJRDBnYmlnZ01UQTNJQ2tzSUdrZ1BTQnVLQ0F4TURnZ0tTd2dieUE5SUc0b0lEQWdLVHRjYmx4MFhIUjBMbVY0Y0c5eWRITWdQU0I3WEc1Y2RGeDBYSFJqYjNWd2JHVTZJR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWEhSeVpYUjFjbTRnYnk1MGIxSmxZV3hCY25KaGVTZ2dZWEpuZFcxbGJuUnpJQ2xjYmx4MFhIUmNkSDBzWEc1Y2RGeDBYSFJpZFdsc1pEb2dablZ1WTNScGIyNG9JSFFzSUdVc0lHNGdLU0I3WEc1Y2RGeDBYSFJjZEhaaGNpQnZJRDBnYm1WM0lIUTdYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQW9aU0E5SUdrb0lISW9JR1VnZkh3Z1cxMGdLU0FwS1M1bWIzSkZZV05vS0NCbWRXNWpkR2x2YmlnZ2RDQXBJSHRjYmx4MFhIUmNkRngwWEhSMExtTmhiR3dvSUc1MWJHd3NJRzhnS1Z4dVhIUmNkRngwWEhSOUlDa3NJRzh1WW5WcGJHUW9JRzRnS1Z4dVhIUmNkRngwZlZ4dVhIUmNkSDFjYmx4MGZTd2dablZ1WTNScGIyNG9JSFFzSUdVc0lHNGdLU0I3WEc1Y2RGeDBkbUZ5SUhJZ1BTQnVLQ0F4TVRBZ0tTd2dhU0E5SUc0b0lEQWdLU3dnYnlBOUlHNG9JRFF5SUNrN1hHNWNibHgwWEhSbWRXNWpkR2x2YmlCektDa2dlMXh1WEhSY2RGeDBkR2hwY3k1RGIyMXdiMjVsYm5RZ1BTQjBhR2x6TG1aaFkzUnZjbmtvS1N3Z2RHaHBjeTVmWVdSMmFXTmxRWEpuY3lBOUlGdGRMQ0IwYUdsekxsOXNZWE4wUVhKbmN5QTlJRnRkWEc1Y2RGeDBmVnh1WEc1Y2RGeDBhUzVoZFdjb0lITXVjSEp2ZEc5MGVYQmxMQ0I3WEc1Y2RGeDBYSFJtWVdOMGIzSjVPaUJ2TEZ4dVhIUmNkRngwWW5WcGJHUTZJR1oxYm1OMGFXOXVLQ0IwSUNrZ2UxeHVYSFJjZEZ4MFhIUjJZWElnWlNBOUlIUm9hWE03WEc1Y2RGeDBYSFJjZEhKbGRIVnliaUIwYUdsekxrTnZiWEJ2Ym1WdWRDd2dhUzVoZFdjb0lIUm9hWE11UTI5dGNHOXVaVzUwTG5CeWIzUnZkSGx3WlM1aWIzVnVaRkJoY21GdGN5d2dkQ0FwTENCMGFHbHpMbDloWkhacFkyVkJjbWR6TG1OdmJtTmhkQ2dnZEdocGN5NWZiR0Z6ZEVGeVozTWdLUzVtYjNKRllXTm9LQ0JtZFc1amRHbHZiaWdnZENBcElIdGNibHgwWEhSY2RGeDBYSFFvWm5WdVkzUnBiMjRvSUhRc0lHVXNJRzRnS1NCN1hHNWNkRngwWEhSY2RGeDBYSFIyWVhJZ2NpQTlJSFJvYVhOYklHVWdYVHRjYmx4MFhIUmNkRngwWEhSY2RHbG1JQ2dnSVhJZ0tTQjdYRzVjZEZ4MFhIUmNkRngwWEhSY2RIUm9jbTkzSUc1bGR5QkZjbkp2Y2lnZ1pTQXJJRndpSUdSdlpYTWdibTkwSUdWNGFYTjBYQ0lnS1R0Y2JseDBYSFJjZEZ4MFhIUmNkSDFjYmx4MFhIUmNkRngwWEhSY2RIUm9hWE5iSUdVZ1hTQTlJSFFvSUhJc0lHNGdLVnh1WEhSY2RGeDBYSFJjZEgwcExtRndjR3g1S0NCbExrTnZiWEJ2Ym1WdWRDNXdjbTkwYjNSNWNHVXNJSFFnS1Z4dVhIUmNkRngwWEhSOUlDa3NJR1JsYkdWMFpTQjBhR2x6TGw5c1lYTjBRWEpuY3l3Z1pHVnNaWFJsSUhSb2FYTXVYMkZrZG1salpVRnlaM01zSUhSb2FYTXVRMjl0Y0c5dVpXNTBYRzVjZEZ4MFhIUjlMRnh1WEhSY2RGeDBjR0Z5WVcxek9pQm1kVzVqZEdsdmJpZ2dkQ0FwSUh0Y2JseDBYSFJjZEZ4MGRtRnlJR1VnUFNCMGFHbHpMa052YlhCdmJtVnVkQzV3Y205MGIzUjVjR1V1Y0dGeVlXMURiMjVtYVdkek8xeHVYSFJjZEZ4MFhIUjBJRDBnZENCOGZDQjdmU3dnZEdocGN5NURiMjF3YjI1bGJuUXVjSEp2ZEc5MGVYQmxMbkJoY21GdFEyOXVabWxuY3lBOUlHa3VZWFZuS0NCN2ZTd2dkQ3dnWlNBcFhHNWNkRngwWEhSOUxGeHVYSFJjZEZ4MFpHVm1hVzVsT2lCbWRXNWpkR2x2YmlnZ2RDd2daU0FwSUh0Y2JseDBYSFJjZEZ4MGFXWWdLQ0IwSUdsdUlIUm9hWE11UTI5dGNHOXVaVzUwTG5CeWIzUnZkSGx3WlNBcElIdGNibHgwWEhSY2RGeDBYSFIwYUhKdmR5QnVaWGNnUlhKeWIzSW9JSFFnS3lCY0lpQm9ZWE1nY0hKbGRtbHZkWE5zZVNCaVpXVnVJR1JsWm1sdVpXUmNJaUFwTzF4dVhIUmNkRngwWEhSOVhHNWNkRngwWEhSY2RIUm9hWE11YjNabGNuSnBaR1VvSUhRc0lHVWdLVnh1WEhSY2RGeDBmU3hjYmx4MFhIUmNkR1JsWm1sdVpWTjBZWFJwWXpvZ1puVnVZM1JwYjI0b0lIUXNJR1VnS1NCN1hHNWNkRngwWEhSY2RIUm9hWE11UTI5dGNHOXVaVzUwV3lCMElGMGdQU0JsWEc1Y2RGeDBYSFI5TEZ4dVhIUmNkRngwYjNabGNuSnBaR1U2SUdaMWJtTjBhVzl1S0NCMExDQmxJQ2tnZTF4dVhIUmNkRngwWEhSMGFHbHpMa052YlhCdmJtVnVkQzV3Y205MGIzUjVjR1ZiSUhRZ1hTQTlJR1ZjYmx4MFhIUmNkSDBzWEc1Y2RGeDBYSFJrWldacGJtVlFjbTl3WlhKMGVUb2dablZ1WTNScGIyNG9JSFFzSUdVZ0tTQjdYRzVjZEZ4MFhIUmNkR2xtSUNnZ2RDQnBiaUIwYUdsekxrTnZiWEJ2Ym1WdWRDNXdjbTkwYjNSNWNHVWdLU0I3WEc1Y2RGeDBYSFJjZEZ4MGRHaHliM2NnYm1WM0lFVnljbTl5S0NCMElDc2dYQ0lnYUdGeklIQnlaWFpwYjNWemJIa2dZbVZsYmlCa1pXWnBibVZrWENJZ0tUdGNibHgwWEhSY2RGeDBmVnh1WEhSY2RGeDBYSFIwYUdsekxtOTJaWEp5YVdSbFVISnZjR1Z5ZEhrb0lIUXNJR1VnS1Z4dVhIUmNkRngwZlN4Y2JseDBYSFJjZEc5MlpYSnlhV1JsVUhKdmNHVnlkSGs2SUdaMWJtTjBhVzl1S0NCMExDQmxJQ2tnZTF4dVhIUmNkRngwWEhSMllYSWdiaUE5SUdrdVlYVm5LQ0I3SUdOdmJtWnBaM1Z5WVdKc1pUb2dJVEFnZlN3Z1pTQXBPMXh1WEhSY2RGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb0lIUm9hWE11UTI5dGNHOXVaVzUwTG5CeWIzUnZkSGx3WlN3Z2RDd2diaUFwWEc1Y2RGeDBYSFI5TEZ4dVhIUmNkRngwWW1WbWIzSmxPaUJtZFc1amRHbHZiaWdnZEN3Z1pTQXBJSHRjYmx4MFhIUmNkRngwZEdocGN5NWZZV1IyYVdObFFYSm5jeTV3ZFhOb0tDQmJjaTVpWldadmNtVXNJSFFzSUdWZElDbGNibHgwWEhSY2RIMHNYRzVjZEZ4MFhIUmhablJsY2pvZ1puVnVZM1JwYjI0b0lIUXNJR1VnS1NCN1hHNWNkRngwWEhSY2RIUm9hWE11WDJGa2RtbGpaVUZ5WjNNdWNIVnphQ2dnVzNJdVlXWjBaWElzSUhRc0lHVmRJQ2xjYmx4MFhIUmNkSDBzWEc1Y2RGeDBYSFJoY205MWJtUTZJR1oxYm1OMGFXOXVLQ0IwTENCbElDa2dlMXh1WEhSY2RGeDBYSFIwYUdsekxsOWhaSFpwWTJWQmNtZHpMbkIxYzJnb0lGdHlMbUZ5YjNWdVpDd2dkQ3dnWlYwZ0tWeHVYSFJjZEZ4MGZTeGNibHgwWEhSY2RHeGhjM1E2SUdaMWJtTjBhVzl1S0NCMExDQmxJQ2tnZTF4dVhIUmNkRngwWEhSMGFHbHpMbDlzWVhOMFFYSm5jeTV3ZFhOb0tDQmJjaTVoWm5SbGNpd2dkQ3dnWlYwZ0tWeHVYSFJjZEZ4MGZWeHVYSFJjZEgwZ0tTd2dkQzVsZUhCdmNuUnpJRDBnYzF4dVhIUjlMQ0JtZFc1amRHbHZiaWdnZEN3Z1pTd2diaUFwSUh0Y2JseDBYSFIyWVhJZ2NpQTlJRzRvSURBZ0tUdGNibHh1WEhSY2RHWjFibU4wYVc5dUlHa29LU0I3WEc1Y2RGeDBYSFJ5WlhSMWNtNGdJVEJjYmx4MFhIUjlYRzVjYmx4MFhIUm1kVzVqZEdsdmJpQnZLQ0IwSUNrZ2UxeHVYSFJjZEZ4MGNtVjBkWEp1SUhSY2JseDBYSFI5WEc1Y2JseDBYSFIwTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlncElIdGNibHgwWEhSY2RHWjFibU4wYVc5dUlIUW9JSFFnS1NCN1hHNWNkRngwWEhSY2RIWmhjaUJsSUQwZ2RHaHBjenRjYmx4MFhIUmNkRngwZENBOUlIUWdmSHdnZTMwc0lIUm9hWE11Y0dGeVlXMXpJRDBnVDJKcVpXTjBMbXRsZVhNb0lIUm9hWE11Y0dGeVlXMURiMjVtYVdkeklDa3VjbVZrZFdObEtDQm1kVzVqZEdsdmJpZ2diaXdnY3lBcElIdGNibHgwWEhSY2RGeDBYSFIyWVhJZ1lTQTlJRnRkTENCMUlEMGdaUzVpYjNWdVpGQmhjbUZ0Y3l3Z1l5QTlJR1V1Y0dGeVlXMURiMjVtYVdkeld5QnpJRjBzSUdRZ1BTQmpMblpoYkdsa1lYUmxJSHg4SUdrc0lHWWdQU0JqTG5SeVlXNXpabTl5YlNCOGZDQnZPMXh1WEhSY2RGeDBYSFJjZEdsbUlDZ2djeUJwYmlCMUlDWW1JR0V1Y0hWemFDZ2dkVnNnY3lCZElDa3NJSE1nYVc0Z2RDQW1KaUJoTG5CMWMyZ29JSFJiSUhNZ1hTQXBMQ0JoSUQwZ1hDSm1ZV3hzWW1GamExd2lJR2x1SUdNZ1B5QmhMbU52Ym1OaGRDZ2dZeTVtWVd4c1ltRmpheUFwSURvZ1lTd2dibHNnY3lCZElEMGdablZ1WTNScGIyNG9JSFFzSUdVc0lHNGdLU0I3WEc1Y2RGeDBYSFJjZEZ4MFhIUjJZWElnYVNBOUlHNTFiR3c3WEc1Y2RGeDBYSFJjZEZ4MFhIUnlaWFIxY200Z2RDNXpiMjFsS0NCbWRXNWpkR2x2YmlnZ2RDQXBJSHRjYmx4MFhIUmNkRngwWEhSY2RGeDBhV1lnS0NCMElEMGdjaTVwYzFSNWNHVW9JRndpWm5WdVkzUnBiMjVjSWl3Z2RDQXBJRDhnZENncElEb2dkQ3dnWlNnZ2RDQXBJQ2tnZTF4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEhKbGRIVnliaUJwSUQwZ2JpZ2dkQ0FwTENBaE1GeHVYSFJjZEZ4MFhIUmNkRngwWEhSOVhHNWNkRngwWEhSY2RGeDBYSFI5SUNrc0lHbGNibHgwWEhSY2RGeDBYSFI5S0NCaExDQmtMQ0JtSUNrc0lHTXVjbVZ4ZFdseVpXUWdKaVlnYm5Wc2JDQTlQU0J1V3lCeklGMGdLU0I3WEc1Y2RGeDBYSFJjZEZ4MFhIUjBhSEp2ZHlCdVpYY2dSWEp5YjNJb0lITWdLeUJjSWlCcGN5QmhJSEpsY1hWcGNtVmtJSEJoY21GdFpYUmxjbHdpSUNrN1hHNWNkRngwWEhSY2RGeDBmVnh1WEhSY2RGeDBYSFJjZEhKbGRIVnliaUJ1WEc1Y2RGeDBYSFJjZEgwc0lIdDlJQ2tzSUhSb2FYTXVhVzVwZEdsaGJHbDZaU2dwWEc1Y2RGeDBYSFI5WEc1Y2JseDBYSFJjZEhKbGRIVnliaUJ5TG1GMVp5Z2dkQzV3Y205MGIzUjVjR1VzSUh0Y2JseDBYSFJjZEZ4MGNHRnlZVzFEYjI1bWFXZHpPaUI3ZlN4Y2JseDBYSFJjZEZ4MFltOTFibVJRWVhKaGJYTTZJSHQ5TEZ4dVhIUmNkRngwWEhScGJtbDBhV0ZzYVhwbE9pQm1kVzVqZEdsdmJpZ3BJSHRjYmx4MFhIUmNkRngwZlZ4dVhIUmNkRngwZlNBcExDQjBYRzVjZEZ4MGZWeHVYSFI5TENCbWRXNWpkR2x2YmlnZ2RDd2daU3dnYmlBcElIdGNibHgwWEhSMllYSWdjaUE5SUc0b0lERWdLUzVJVkUxTVJXeGxiV1Z1ZEN4Y2JseDBYSFJjZEdrZ1BTQnlMbkJ5YjNSdmRIbHdaUzV0WVhSamFHVnpJSHg4SUhJdWNISnZkRzkwZVhCbExtMWhkR05vWlhOVFpXeGxZM1J2Y2lCOGZDQnlMbkJ5YjNSdmRIbHdaUzUzWldKcmFYUk5ZWFJqYUdWelUyVnNaV04wYjNJZ2ZId2djaTV3Y205MGIzUjVjR1V1Ylc5NlRXRjBZMmhsYzFObGJHVmpkRzl5SUh4OElISXVjSEp2ZEc5MGVYQmxMbTF6VFdGMFkyaGxjMU5sYkdWamRHOXlJSHg4SUhJdWNISnZkRzkwZVhCbExtOU5ZWFJqYUdWelUyVnNaV04wYjNJN1hHNWNkRngwZEM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0b0lIUXNJR1VnS1NCN1hHNWNkRngwWEhScFppQW9JR2tnS1NCN1hHNWNkRngwWEhSY2RISmxkSFZ5YmlCcExtTmhiR3dvSUhRc0lHVWdLVnh1WEhSY2RGeDBmVnh1WEhSY2RIMWNibHgwZlN3Z1puVnVZM1JwYjI0b0lIUXNJR1VzSUc0Z0tTQjdYRzVjZEZ4MGRtRnlJSElzSUdrZ1BTQnVLQ0F4TUNBcExDQnZJRDBnYmlnZ05DQXBMQ0J6SUQwZ2JpZ2dNU0FwTENCaElEMGdiaWdnTXpVZ0tTd2dkU0E5SUc0b0lEVXpJQ2tzSUdNZ1BTQnVLQ0ExSUNrc0lHUWdQU0J1S0NBeU5DQXBMQ0JtSUQwZ1hDSmpjM0IwWlhOMFhDSTdYRzVjZEZ4MGRDNWxlSEJ2Y25SeklEMGdlMXh1WEhSY2RGeDBhVzVzYVc1bFUzUjViR1U2SUdaMWJtTjBhVzl1S0NrZ2UxeHVYSFJjZEZ4MFhIUjJZWElnZENBOUlHWWdLeUJrTG1kbGJtVnlZWFJsS0Nrc0lHVWdQU0J2TG1OeVpXRjBaVVZzWlcxbGJuUW9JRndpWkdsMlhDSWdLU3dnYmlBOUlHOHVZM0psWVhSbFJXeGxiV1Z1ZENnZ1hDSnpkSGxzWlZ3aUlDa3NYRzVjZEZ4MFhIUmNkRngwYkNBOUlGd2lMbHdpSUNzZ2RDQXJJRndpSUhzZ2RtbHphV0pwYkdsMGVUb2dhR2xrWkdWdU95QjlYQ0k3WEc1Y2RGeDBYSFJjZEhKbGRIVnliaUFoSVc4dVltOWtlU0FtSmlBb1l5NWhjMEp2YjJ4bFlXNG9JR0V1ZG1Gc0tDQmNJbmRwWkdkbGRITTZZM053WENJZ0tTQXBJQ1ltSUNoeUlEMGdJVEVwTENCMmIybGtJREFnSVQwOUlISWdQeUJ5SURvZ0tHVXVjM1I1YkdVdVpHbHpjR3hoZVNBOUlGd2libTl1WlZ3aUxDQnBMbUZrWkNnZ1pTd2dkQ0FwTENCdUxuUjVjR1VnUFNCY0luUmxlSFF2WTNOelhDSXNJRzR1WVhCd1pXNWtRMmhwYkdRb0lHOHVZM0psWVhSbFZHVjRkRTV2WkdVb0lHd2dLU0FwTENCdkxtSnZaSGt1WVhCd1pXNWtRMmhwYkdRb0lHNGdLU3dnYnk1aWIyUjVMbUZ3Y0dWdVpFTm9hV3hrS0NCbElDa3NJSElnUFNCY0ltaHBaR1JsYmx3aUlEMDlQU0J6TG1kbGRFTnZiWEIxZEdWa1UzUjViR1VvSUdVZ0tTNTJhWE5wWW1sc2FYUjVMQ0IxS0NCbElDa3NJSFVvSUc0Z0tTd2djaWtwWEc1Y2RGeDBYSFI5WEc1Y2RGeDBmVnh1WEhSOUxDQm1kVzVqZEdsdmJpZ2dkQ3dnWlN3Z2JpQXBJSHRjYmx4MFhIUjJZWElnY2lBOUlHNG9JREVnS1R0Y2JseDBYSFIwTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlnZ2RDd2daU3dnYmlBcElIdGNibHgwWEhSY2RIWmhjaUJwTENCdklEMGdNRHRjYmx4MFhIUmNkSEpsZEhWeWJpQnVJRDBnYmlCOGZDQnVkV3hzTENCbWRXNWpkR2x2YmlCektDa2dlMXh1WEhSY2RGeDBYSFIyWVhJZ1lTQTlJRzRnZkh3Z2RHaHBjeXdnZFNBOUlHRnlaM1Z0Wlc1MGN5d2dZeUE5SUNzZ2JtVjNJRVJoZEdVN1hHNWNkRngwWEhSY2RHbG1JQ2dnY2k1amJHVmhjbFJwYldWdmRYUW9JR2tnS1N3Z1l5QXRJRzhnUGlCbElDa2dlMXh1WEhSY2RGeDBYSFJjZEhKbGRIVnliaUJ2SUQwZ1l5d2dkbTlwWkNCMExtRndjR3g1S0NCaExDQjFJQ2s3WEc1Y2RGeDBYSFJjZEgxY2JseDBYSFJjZEZ4MGFTQTlJSEl1YzJWMFZHbHRaVzkxZENnZ1puVnVZM1JwYjI0b0tTQjdYRzVjZEZ4MFhIUmNkRngwY3k1aGNIQnNlU2dnWVN3Z2RTQXBYRzVjZEZ4MFhIUmNkSDBzSUdVZ0tWeHVYSFJjZEZ4MGZWeHVYSFJjZEgxY2JseDBmU3dnWm5WdVkzUnBiMjRvSUhRc0lHVWdLU0I3WEc1Y2RGeDBkQzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRvSUhRZ0tTQjdYRzVjZEZ4MFhIUjJZWElnWlNBOUlIUXVaMlYwUW05MWJtUnBibWREYkdsbGJuUlNaV04wS0NrN1hHNWNkRngwWEhSeVpYUjFjbTRnZTF4dVhIUmNkRngwWEhSM2FXUjBhRG9nWlM1M2FXUjBhQ3hjYmx4MFhIUmNkRngwYUdWcFoyaDBPaUJsTG1obGFXZG9kRnh1WEhSY2RGeDBmVnh1WEhSY2RIMWNibHgwZlN3Z1puVnVZM1JwYjI0b0lIUWdLU0I3WEc1Y2RGeDBkQzVsZUhCdmNuUnpJRDBnZXlCMlpYSnphVzl1T2lCY0lqVmpNR1U0WkRNNk1UVTRORFkwT1RVME1UazRNbHdpSUgxY2JseDBmU3dnWm5WdVkzUnBiMjRvSUhRc0lHVXNJRzRnS1NCN1hHNWNkRngwTHlvaFhHNGdLaUJBYjNabGNuWnBaWGNnWlhNMkxYQnliMjFwYzJVZ0xTQmhJSFJwYm5rZ2FXMXdiR1Z0Wlc1MFlYUnBiMjRnYjJZZ1VISnZiV2x6WlhNdlFTc3VYRzRnS2lCQVkyOXdlWEpwWjJoMElFTnZjSGx5YVdkb2RDQW9ZeWtnTWpBeE5DQlpaV2gxWkdFZ1MyRjBlaXdnVkc5dElFUmhiR1VzSUZOMFpXWmhiaUJRWlc1dVpYSWdZVzVrSUdOdmJuUnlhV0oxZEc5eWN5QW9RMjl1ZG1WeWMybHZiaUIwYnlCRlV6WWdRVkJKSUdKNUlFcGhhMlVnUVhKamFHbGlZV3hrS1Z4dUlDb2dRR3hwWTJWdWMyVWdJQ0JNYVdObGJuTmxaQ0IxYm1SbGNpQk5TVlFnYkdsalpXNXpaVnh1SUNvZ0lDQWdJQ0FnSUNBZ0lDQlRaV1VnYUhSMGNITTZMeTl5WVhjdVoybDBhSFZpZFhObGNtTnZiblJsYm5RdVkyOXRMM04wWldaaGJuQmxibTVsY2k5bGN6WXRjSEp2YldselpTOXRZWE4wWlhJdlRFbERSVTVUUlZ4dUlDb2dRSFpsY25OcGIyNGdJQ0IyTkM0eUxqVXJOMll5WWpVeU5tUmNiaUFxTDF4dVhIUmNkSFpoY2lCeU8xeHVYSFJjZEhJZ1BTQm1kVzVqZEdsdmJpZ3BJSHRjYmx4MFhIUmNkRndpZFhObElITjBjbWxqZEZ3aU8xeHVYRzVjZEZ4MFhIUm1kVzVqZEdsdmJpQjBLQ0IwSUNrZ2UxeHVYSFJjZEZ4MFhIUnlaWFIxY200Z1hDSm1kVzVqZEdsdmJsd2lJRDA5SUhSNWNHVnZaaUIwWEc1Y2RGeDBYSFI5WEc1Y2JseDBYSFJjZEhaaGNpQmxJRDBnUVhKeVlYa3VhWE5CY25KaGVTQS9JRUZ5Y21GNUxtbHpRWEp5WVhrZ09pQm1kVzVqZEdsdmJpZ2dkQ0FwSUh0Y2JseDBYSFJjZEZ4MFhIUnlaWFIxY200Z1hDSmJiMkpxWldOMElFRnljbUY1WFZ3aUlEMDlQU0JQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMblJ2VTNSeWFXNW5MbU5oYkd3b0lIUWdLVnh1WEhSY2RGeDBYSFI5TENCdUlEMGdNQ3dnY2lBOUlIWnZhV1FnTUN3Z2FTQTlJSFp2YVdRZ01Dd2dieUE5SUdaMWJtTjBhVzl1S0NCMExDQmxJQ2tnZTF4dVhIUmNkRngwWEhSY2RHeGJJRzRnWFNBOUlIUXNJR3hiSUc0Z0t5QXhJRjBnUFNCbExDQXlJRDA5UFNBb2JpQXJQU0F5S1NBbUppQW9hU0EvSUdrb0lHZ2dLU0E2SUhjb0tTbGNibHgwWEhSY2RGeDBmU3dnY3lBOUlGd2lkVzVrWldacGJtVmtYQ0lnSVQwZ2RIbHdaVzltSUhkcGJtUnZkeUEvSUhkcGJtUnZkeUE2SUhadmFXUWdNQ3dnWVNBOUlITWdmSHdnZTMwc1hHNWNkRngwWEhSY2RIVWdQU0JoTGsxMWRHRjBhVzl1VDJKelpYSjJaWElnZkh3Z1lTNVhaV0pMYVhSTmRYUmhkR2x2Yms5aWMyVnlkbVZ5TEZ4dVhIUmNkRngwWEhSaklEMGdYQ0oxYm1SbFptbHVaV1JjSWlBOVBTQjBlWEJsYjJZZ2MyVnNaaUFtSmlCY0luVnVaR1ZtYVc1bFpGd2lJQ0U5SUhSNWNHVnZaaUJ3Y205alpYTnpJQ1ltSUZ3aVcyOWlhbVZqZENCd2NtOWpaWE56WFZ3aUlEMDlQU0I3ZlM1MGIxTjBjbWx1Wnk1allXeHNLQ0J3Y205alpYTnpJQ2tzWEc1Y2RGeDBYSFJjZEdRZ1BTQmNJblZ1WkdWbWFXNWxaRndpSUNFOUlIUjVjR1Z2WmlCVmFXNTBPRU5zWVcxd1pXUkJjbkpoZVNBbUppQmNJblZ1WkdWbWFXNWxaRndpSUNFOUlIUjVjR1Z2WmlCcGJYQnZjblJUWTNKcGNIUnpJQ1ltSUZ3aWRXNWtaV1pwYm1Wa1hDSWdJVDBnZEhsd1pXOW1JRTFsYzNOaFoyVkRhR0Z1Ym1Wc08xeHVYRzVjZEZ4MFhIUm1kVzVqZEdsdmJpQm1LQ2tnZTF4dVhIUmNkRngwWEhSMllYSWdkQ0E5SUhObGRGUnBiV1Z2ZFhRN1hHNWNkRngwWEhSY2RISmxkSFZ5YmlCbWRXNWpkR2x2YmlncElIdGNibHgwWEhSY2RGeDBYSFJ5WlhSMWNtNGdkQ2dnYUN3Z01TQXBYRzVjZEZ4MFhIUmNkSDFjYmx4MFhIUmNkSDFjYmx4dVhIUmNkRngwZG1GeUlHd2dQU0J1WlhjZ1FYSnlZWGtvSURGbE15QXBPMXh1WEc1Y2RGeDBYSFJtZFc1amRHbHZiaUJvS0NrZ2UxeHVYSFJjZEZ4MFhIUm1iM0lnS0NCMllYSWdkQ0E5SURBN0lIUWdQQ0J1T3lCMElDczlJRElnS1NCN1hHNWNkRngwWEhSY2RGeDBLREFzSUd4YklIUWdYU2tvSUd4YklIUWdLeUF4SUYwZ0tTd2diRnNnZENCZElEMGdkbTlwWkNBd0xDQnNXeUIwSUNzZ01TQmRJRDBnZG05cFpDQXdPMXh1WEhSY2RGeDBYSFI5WEc1Y2RGeDBYSFJjZEc0Z1BTQXdYRzVjZEZ4MFhIUjlYRzVjYmx4MFhIUmNkSFpoY2lCd0xDQnRMQ0IyTENCbkxDQjNJRDBnZG05cFpDQXdPMXh1WEc1Y2RGeDBYSFJtZFc1amRHbHZiaUI1S0NCMExDQmxJQ2tnZTF4dVhIUmNkRngwWEhSMllYSWdiaUE5SUhSb2FYTXNJSElnUFNCdVpYY2dkR2hwY3k1amIyNXpkSEoxWTNSdmNpZ2dSU0FwTzF4dVhIUmNkRngwWEhSMmIybGtJREFnUFQwOUlISmJJRjhnWFNBbUppQnJLQ0J5SUNrN1hHNWNkRngwWEhSY2RIWmhjaUJwSUQwZ2JpNWZjM1JoZEdVN1hHNWNkRngwWEhSY2RHbG1JQ2dnYVNBcElIdGNibHgwWEhSY2RGeDBYSFIyWVhJZ2N5QTlJR0Z5WjNWdFpXNTBjMXNnYVNBdElERWdYVHRjYmx4MFhIUmNkRngwWEhSdktDQm1kVzVqZEdsdmJpZ3BJSHRjYmx4MFhIUmNkRngwWEhSY2RISmxkSFZ5YmlCRUtDQnBMQ0J5TENCekxDQnVMbDl5WlhOMWJIUWdLVnh1WEhSY2RGeDBYSFJjZEgwZ0tWeHVYSFJjZEZ4MFhIUjlJR1ZzYzJVZ2UxeHVYSFJjZEZ4MFhIUmNkR29vSUc0c0lISXNJSFFzSUdVZ0tUdGNibHgwWEhSY2RGeDBmVnh1WEhSY2RGeDBYSFJ5WlhSMWNtNGdjbHh1WEhSY2RGeDBmVnh1WEc1Y2RGeDBYSFJtZFc1amRHbHZiaUJpS0NCMElDa2dlMXh1WEhSY2RGeDBYSFJwWmlBb0lIUWdKaVlnWENKdlltcGxZM1JjSWlBOVBTQjBlWEJsYjJZZ2RDQW1KaUIwTG1OdmJuTjBjblZqZEc5eUlEMDlQU0IwYUdseklDa2dlMXh1WEhSY2RGeDBYSFJjZEhKbGRIVnliaUIwTzF4dVhIUmNkRngwWEhSOVhHNWNkRngwWEhSY2RIWmhjaUJsSUQwZ2JtVjNJSFJvYVhNb0lFVWdLVHRjYmx4MFhIUmNkRngwY21WMGRYSnVJRU1vSUdVc0lIUWdLU3dnWlZ4dVhIUmNkRngwZlZ4dVhHNWNkRngwWEhSaklEOGdkeUE5SUdaMWJtTjBhVzl1S0NrZ2UxeHVYSFJjZEZ4MFhIUnlaWFIxY200Z2NISnZZMlZ6Y3k1dVpYaDBWR2xqYXlnZ2FDQXBYRzVjZEZ4MFhIUjlJRG9nZFNBL0lDaHRJRDBnTUN3Z2RpQTlJRzVsZHlCMUtDQm9JQ2tzSUdjZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWVVpYaDBUbTlrWlNnZ1hDSmNJaUFwTENCMkxtOWljMlZ5ZG1Vb0lHY3NJSHNnWTJoaGNtRmpkR1Z5UkdGMFlUb2dJVEFnZlNBcExDQjNJRDBnWm5WdVkzUnBiMjRvS1NCN1hHNWNkRngwWEhSY2RHY3VaR0YwWVNBOUlHMGdQU0FyS3lCdElDVWdNbHh1WEhSY2RGeDBmU2tnT2lCa0lEOGdLQ2h3SUQwZ2JtVjNJRTFsYzNOaFoyVkRhR0Z1Ym1Wc0tTNXdiM0owTVM1dmJtMWxjM05oWjJVZ1BTQm9MQ0IzSUQwZ1puVnVZM1JwYjI0b0tTQjdYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQndMbkJ2Y25ReUxuQnZjM1JOWlhOellXZGxLQ0F3SUNsY2JseDBYSFJjZEgwcElEb2dkeUE5SUhadmFXUWdNQ0E5UFQwZ2N5QS9JR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWEhSMGNua2dlMXh1WEhSY2RGeDBYSFJjZEhaaGNpQjBJRDBnUm5WdVkzUnBiMjRvSUZ3aWNtVjBkWEp1SUhSb2FYTmNJaUFwS0NrdWNtVnhkV2x5WlNnZ1hDSjJaWEowZUZ3aUlDazdYRzVjZEZ4MFhIUmNkRngwY21WMGRYSnVJSFp2YVdRZ01DQWhQVDBnS0hJZ1BTQjBMbkoxYms5dVRHOXZjQ0I4ZkNCMExuSjFiazl1UTI5dWRHVjRkQ2tnUHlCbWRXNWpkR2x2YmlncElIdGNibHgwWEhSY2RGeDBYSFJjZEhJb0lHZ2dLVnh1WEhSY2RGeDBYSFJjZEgwZ09pQm1LQ2xjYmx4MFhIUmNkRngwZlNCallYUmphQ0FvSUhRZ0tTQjdYRzVjZEZ4MFhIUmNkRngwY21WMGRYSnVJR1lvS1Z4dVhIUmNkRngwWEhSOVhHNWNkRngwWEhSOUtDa2dPaUJtS0NrN1hHNWNkRngwWEhSMllYSWdYeUE5SUUxaGRHZ3VjbUZ1Wkc5dEtDa3VkRzlUZEhKcGJtY29JRE0ySUNrdWMzVmljM1J5YVc1bktDQXlJQ2s3WEc1Y2JseDBYSFJjZEdaMWJtTjBhVzl1SUVVb0tTQjdYRzVjZEZ4MFhIUjlYRzVjYmx4MFhIUmNkSFpoY2lCNElEMGdkbTlwWkNBd0xDQlVJRDBnTVN3Z1FTQTlJRElzSUZNZ1BTQjdJR1Z5Y205eU9pQnVkV3hzSUgwN1hHNWNibHgwWEhSY2RHWjFibU4wYVc5dUlGSW9JSFFnS1NCN1hHNWNkRngwWEhSY2RIUnllU0I3WEc1Y2RGeDBYSFJjZEZ4MGNtVjBkWEp1SUhRdWRHaGxibHh1WEhSY2RGeDBYSFI5SUdOaGRHTm9JQ2dnZENBcElIdGNibHgwWEhSY2RGeDBYSFJ5WlhSMWNtNGdVeTVsY25KdmNpQTlJSFFzSUZOY2JseDBYSFJjZEZ4MGZWeHVYSFJjZEZ4MGZWeHVYRzVjZEZ4MFhIUm1kVzVqZEdsdmJpQk9LQ0JsTENCdUxDQnlJQ2tnZTF4dVhIUmNkRngwWEhSdUxtTnZibk4wY25WamRHOXlJRDA5UFNCbExtTnZibk4wY25WamRHOXlJQ1ltSUhJZ1BUMDlJSGtnSmlZZ2JpNWpiMjV6ZEhKMVkzUnZjaTV5WlhOdmJIWmxJRDA5UFNCaUlEOGdablZ1WTNScGIyNG9JSFFzSUdVZ0tTQjdYRzVjZEZ4MFhIUmNkRngwWlM1ZmMzUmhkR1VnUFQwOUlGUWdQeUJNS0NCMExDQmxMbDl5WlhOMWJIUWdLU0E2SUdVdVgzTjBZWFJsSUQwOVBTQkJJRDhnU1NnZ2RDd2daUzVmY21WemRXeDBJQ2tnT2lCcUtDQmxMQ0IyYjJsa0lEQXNJR1oxYm1OMGFXOXVLQ0JsSUNrZ2UxeHVYSFJjZEZ4MFhIUmNkRngwY21WMGRYSnVJRU1vSUhRc0lHVWdLVnh1WEhSY2RGeDBYSFJjZEgwc0lHWjFibU4wYVc5dUtDQmxJQ2tnZTF4dVhIUmNkRngwWEhSY2RGeDBjbVYwZFhKdUlFa29JSFFzSUdVZ0tWeHVYSFJjZEZ4MFhIUmNkSDBnS1Z4dVhIUmNkRngwWEhSOUtDQmxMQ0J1SUNrZ09pQnlJRDA5UFNCVElEOGdLRWtvSUdVc0lGTXVaWEp5YjNJZ0tTd2dVeTVsY25KdmNpQTlJRzUxYkd3cElEb2dkbTlwWkNBd0lEMDlQU0J5SUQ4Z1RDZ2daU3dnYmlBcElEb2dkQ2dnY2lBcElEOGdablZ1WTNScGIyNG9JSFFzSUdVc0lHNGdLU0I3WEc1Y2RGeDBYSFJjZEZ4MGJ5Z2dablZ1WTNScGIyNG9JSFFnS1NCN1hHNWNkRngwWEhSY2RGeDBYSFIyWVhJZ2NpQTlJQ0V4TENCcElEMGdablZ1WTNScGIyNG9JSFFzSUdVc0lHNHNJSElnS1NCN1hHNWNkRngwWEhSY2RGeDBYSFJjZEhSeWVTQjdYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBkQzVqWVd4c0tDQmxMQ0J1TENCeUlDbGNibHgwWEhSY2RGeDBYSFJjZEZ4MGZTQmpZWFJqYUNBb0lIUWdLU0I3WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwY21WMGRYSnVJSFJjYmx4MFhIUmNkRngwWEhSY2RGeDBmVnh1WEhSY2RGeDBYSFJjZEZ4MGZTZ2diaXdnWlN3Z1puVnVZM1JwYjI0b0lHNGdLU0I3WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkSElnZkh3Z0tISWdQU0FoTUN3Z1pTQWhQVDBnYmlBL0lFTW9JSFFzSUc0Z0tTQTZJRXdvSUhRc0lHNGdLU2xjYmx4MFhIUmNkRngwWEhSY2RIMHNJR1oxYm1OMGFXOXVLQ0JsSUNrZ2UxeHVYSFJjZEZ4MFhIUmNkRngwWEhSeUlIeDhJQ2h5SUQwZ0lUQXNJRWtvSUhRc0lHVWdLU2xjYmx4MFhIUmNkRngwWEhSY2RIMHNJSFF1WDJ4aFltVnNJQ2s3WEc1Y2RGeDBYSFJjZEZ4MFhIUWhjaUFtSmlCcElDWW1JQ2h5SUQwZ0lUQXNJRWtvSUhRc0lHa2dLU2xjYmx4MFhIUmNkRngwWEhSOUxDQjBJQ2xjYmx4MFhIUmNkRngwZlNnZ1pTd2diaXdnY2lBcElEb2dUQ2dnWlN3Z2JpQXBYRzVjZEZ4MFhIUjlYRzVjYmx4MFhIUmNkR1oxYm1OMGFXOXVJRU1vSUhRc0lHVWdLU0I3WEc1Y2RGeDBYSFJjZEhaaGNpQnVMQ0J5TzF4dVhIUmNkRngwWEhSMElEMDlQU0JsSUQ4Z1NTZ2dkQ3dnYm1WM0lGUjVjR1ZGY25KdmNpZ2dYQ0paYjNVZ1kyRnVibTkwSUhKbGMyOXNkbVVnWVNCd2NtOXRhWE5sSUhkcGRHZ2dhWFJ6Wld4bVhDSWdLU0FwSURvZ0tISWdQU0IwZVhCbGIyWWdLRzRnUFNCbEtTd2diblZzYkNBOVBUMGdiaUI4ZkNCY0ltOWlhbVZqZEZ3aUlDRTlQU0J5SUNZbUlGd2lablZ1WTNScGIyNWNJaUFoUFQwZ2NpQS9JRXdvSUhRc0lHVWdLU0E2SUU0b0lIUXNJR1VzSUZJb0lHVWdLU0FwS1Z4dVhIUmNkRngwZlZ4dVhHNWNkRngwWEhSbWRXNWpkR2x2YmlCUUtDQjBJQ2tnZTF4dVhIUmNkRngwWEhSMExsOXZibVZ5Y205eUlDWW1JSFF1WDI5dVpYSnliM0lvSUhRdVgzSmxjM1ZzZENBcExDQlBLQ0IwSUNsY2JseDBYSFJjZEgxY2JseHVYSFJjZEZ4MFpuVnVZM1JwYjI0Z1RDZ2dkQ3dnWlNBcElIdGNibHgwWEhSY2RGeDBkQzVmYzNSaGRHVWdQVDA5SUhnZ0ppWWdLSFF1WDNKbGMzVnNkQ0E5SUdVc0lIUXVYM04wWVhSbElEMGdWQ3dnTUNBaFBUMGdkQzVmYzNWaWMyTnlhV0psY25NdWJHVnVaM1JvSUNZbUlHOG9JRThzSUhRZ0tTbGNibHgwWEhSY2RIMWNibHh1WEhSY2RGeDBablZ1WTNScGIyNGdTU2dnZEN3Z1pTQXBJSHRjYmx4MFhIUmNkRngwZEM1ZmMzUmhkR1VnUFQwOUlIZ2dKaVlnS0hRdVgzTjBZWFJsSUQwZ1FTd2dkQzVmY21WemRXeDBJRDBnWlN3Z2J5Z2dVQ3dnZENBcEtWeHVYSFJjZEZ4MGZWeHVYRzVjZEZ4MFhIUm1kVzVqZEdsdmJpQnFLQ0IwTENCbExDQnVMQ0J5SUNrZ2UxeHVYSFJjZEZ4MFhIUjJZWElnYVNBOUlIUXVYM04xWW5OamNtbGlaWEp6TENCeklEMGdhUzVzWlc1bmRHZzdYRzVjZEZ4MFhIUmNkSFF1WDI5dVpYSnliM0lnUFNCdWRXeHNMQ0JwV3lCeklGMGdQU0JsTENCcFd5QnpJQ3NnVkNCZElEMGdiaXdnYVZzZ2N5QXJJRUVnWFNBOUlISXNJREFnUFQwOUlITWdKaVlnZEM1ZmMzUmhkR1VnSmlZZ2J5Z2dUeXdnZENBcFhHNWNkRngwWEhSOVhHNWNibHgwWEhSY2RHWjFibU4wYVc5dUlFOG9JSFFnS1NCN1hHNWNkRngwWEhSY2RIWmhjaUJsSUQwZ2RDNWZjM1ZpYzJOeWFXSmxjbk1zSUc0Z1BTQjBMbDl6ZEdGMFpUdGNibHgwWEhSY2RGeDBhV1lnS0NBd0lDRTlQU0JsTG14bGJtZDBhQ0FwSUh0Y2JseDBYSFJjZEZ4MFhIUm1iM0lnS0NCMllYSWdjaUE5SUhadmFXUWdNQ3dnYVNBOUlIWnZhV1FnTUN3Z2J5QTlJSFF1WDNKbGMzVnNkQ3dnY3lBOUlEQTdJSE1nUENCbExteGxibWQwYURzZ2N5QXJQU0F6SUNrZ2UxeHVYSFJjZEZ4MFhIUmNkRngwY2lBOUlHVmJJSE1nWFN3Z2FTQTlJR1ZiSUhNZ0t5QnVJRjBzSUhJZ1B5QkVLQ0J1TENCeUxDQnBMQ0J2SUNrZ09pQnBLQ0J2SUNrN1hHNWNkRngwWEhSY2RGeDBmVnh1WEhSY2RGeDBYSFJjZEhRdVgzTjFZbk5qY21saVpYSnpMbXhsYm1kMGFDQTlJREJjYmx4MFhIUmNkRngwZlZ4dVhIUmNkRngwZlZ4dVhHNWNkRngwWEhSbWRXNWpkR2x2YmlCRUtDQmxMQ0J1TENCeUxDQnBJQ2tnZTF4dVhIUmNkRngwWEhSMllYSWdieUE5SUhRb0lISWdLU3dnY3lBOUlIWnZhV1FnTUN3Z1lTQTlJSFp2YVdRZ01Dd2dkU0E5SUhadmFXUWdNQ3dnWXlBOUlIWnZhV1FnTUR0Y2JseDBYSFJjZEZ4MGFXWWdLQ0J2SUNrZ2UxeHVYSFJjZEZ4MFhIUmNkR2xtSUNnZ0tITWdQU0JtZFc1amRHbHZiaWdnZEN3Z1pTQXBJSHRjYmx4MFhIUmNkRngwWEhSY2RIUnllU0I3WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkSEpsZEhWeWJpQjBLQ0JsSUNsY2JseDBYSFJjZEZ4MFhIUmNkSDBnWTJGMFkyZ2dLQ0IwSUNrZ2UxeHVYSFJjZEZ4MFhIUmNkRngwWEhSeVpYUjFjbTRnVXk1bGNuSnZjaUE5SUhRc0lGTmNibHgwWEhSY2RGeDBYSFJjZEgxY2JseDBYSFJjZEZ4MFhIUjlLQ0J5TENCcElDa3BJRDA5UFNCVElEOGdLR01nUFNBaE1Dd2dZU0E5SUhNdVpYSnliM0lzSUhNdVpYSnliM0lnUFNCdWRXeHNLU0E2SUhVZ1BTQWhNQ3dnYmlBOVBUMGdjeUFwSUh0Y2JseDBYSFJjZEZ4MFhIUmNkSEpsZEhWeWJpQjJiMmxrSUVrb0lHNHNJRzVsZHlCVWVYQmxSWEp5YjNJb0lGd2lRU0J3Y205dGFYTmxjeUJqWVd4c1ltRmpheUJqWVc1dWIzUWdjbVYwZFhKdUlIUm9ZWFFnYzJGdFpTQndjbTl0YVhObExsd2lJQ2tnS1Z4dVhIUmNkRngwWEhSY2RIMWNibHgwWEhSY2RGeDBmU0JsYkhObElIdGNibHgwWEhSY2RGeDBYSFJ6SUQwZ2FTd2dkU0E5SUNFd08xeHVYSFJjZEZ4MFhIUjlYRzVjZEZ4MFhIUmNkRzR1WDNOMFlYUmxJQ0U5UFNCNElIeDhJQ2h2SUNZbUlIVWdQeUJES0NCdUxDQnpJQ2tnT2lCaklEOGdTU2dnYml3Z1lTQXBJRG9nWlNBOVBUMGdWQ0EvSUV3b0lHNHNJSE1nS1NBNklHVWdQVDA5SUVFZ0ppWWdTU2dnYml3Z2N5QXBLVnh1WEhSY2RGeDBmVnh1WEc1Y2RGeDBYSFIyWVhJZ2VpQTlJREE3WEc1Y2JseDBYSFJjZEdaMWJtTjBhVzl1SUdzb0lIUWdLU0I3WEc1Y2RGeDBYSFJjZEhSYklGOGdYU0E5SUhvZ0t5c3NJSFF1WDNOMFlYUmxJRDBnZG05cFpDQXdMQ0IwTGw5eVpYTjFiSFFnUFNCMmIybGtJREFzSUhRdVgzTjFZbk5qY21saVpYSnpJRDBnVzExY2JseDBYSFJjZEgxY2JseHVYSFJjZEZ4MGRtRnlJRTBnUFNCbWRXNWpkR2x2YmlncElIdGNibHgwWEhSY2RGeDBablZ1WTNScGIyNGdkQ2dnZEN3Z2JpQXBJSHRjYmx4MFhIUmNkRngwWEhSMGFHbHpMbDlwYm5OMFlXNWpaVU52Ym5OMGNuVmpkRzl5SUQwZ2RDd2dkR2hwY3k1d2NtOXRhWE5sSUQwZ2JtVjNJSFFvSUVVZ0tTd2dkR2hwY3k1d2NtOXRhWE5sV3lCZklGMGdmSHdnYXlnZ2RHaHBjeTV3Y205dGFYTmxJQ2tzSUdVb0lHNGdLU0EvSUNoMGFHbHpMbXhsYm1kMGFDQTlJRzR1YkdWdVozUm9MQ0IwYUdsekxsOXlaVzFoYVc1cGJtY2dQU0J1TG14bGJtZDBhQ3dnZEdocGN5NWZjbVZ6ZFd4MElEMGdibVYzSUVGeWNtRjVLQ0IwYUdsekxteGxibWQwYUNBcExDQXdJRDA5UFNCMGFHbHpMbXhsYm1kMGFDQS9JRXdvSUhSb2FYTXVjSEp2YldselpTd2dkR2hwY3k1ZmNtVnpkV3gwSUNrZ09pQW9kR2hwY3k1c1pXNW5kR2dnUFNCMGFHbHpMbXhsYm1kMGFDQjhmQ0F3TENCMGFHbHpMbDlsYm5WdFpYSmhkR1VvSUc0Z0tTd2dNQ0E5UFQwZ2RHaHBjeTVmY21WdFlXbHVhVzVuSUNZbUlFd29JSFJvYVhNdWNISnZiV2x6WlN3Z2RHaHBjeTVmY21WemRXeDBJQ2twS1NBNklFa29JSFJvYVhNdWNISnZiV2x6WlN3Z2JtVjNJRVZ5Y205eUtDQmNJa0Z5Y21GNUlFMWxkR2h2WkhNZ2JYVnpkQ0JpWlNCd2NtOTJhV1JsWkNCaGJpQkJjbkpoZVZ3aUlDa2dLVnh1WEhSY2RGeDBYSFI5WEc1Y2JseDBYSFJjZEZ4MGNtVjBkWEp1SUhRdWNISnZkRzkwZVhCbExsOWxiblZ0WlhKaGRHVWdQU0JtZFc1amRHbHZiaWdnZENBcElIdGNibHgwWEhSY2RGeDBYSFJtYjNJZ0tDQjJZWElnWlNBOUlEQTdJSFJvYVhNdVgzTjBZWFJsSUQwOVBTQjRJQ1ltSUdVZ1BDQjBMbXhsYm1kMGFEc2daU0FyS3lBcElIdGNibHgwWEhSY2RGeDBYSFJjZEhSb2FYTXVYMlZoWTJoRmJuUnllU2dnZEZzZ1pTQmRMQ0JsSUNsY2JseDBYSFJjZEZ4MFhIUjlYRzVjZEZ4MFhIUmNkSDBzSUhRdWNISnZkRzkwZVhCbExsOWxZV05vUlc1MGNua2dQU0JtZFc1amRHbHZiaWdnZEN3Z1pTQXBJSHRjYmx4MFhIUmNkRngwWEhSMllYSWdiaUE5SUhSb2FYTXVYMmx1YzNSaGJtTmxRMjl1YzNSeWRXTjBiM0lzSUhJZ1BTQnVMbkpsYzI5c2RtVTdYRzVjZEZ4MFhIUmNkRngwYVdZZ0tDQnlJRDA5UFNCaUlDa2dlMXh1WEhSY2RGeDBYSFJjZEZ4MGRtRnlJR2tnUFNCU0tDQjBJQ2s3WEc1Y2RGeDBYSFJjZEZ4MFhIUnBaaUFvSUdrZ1BUMDlJSGtnSmlZZ2RDNWZjM1JoZEdVZ0lUMDlJSGdnS1NCN1hHNWNkRngwWEhSY2RGeDBYSFJjZEhSb2FYTXVYM05sZEhSc1pXUkJkQ2dnZEM1ZmMzUmhkR1VzSUdVc0lIUXVYM0psYzNWc2RDQXBPMXh1WEhSY2RGeDBYSFJjZEZ4MGZTQmxiSE5sSUdsbUlDZ2dYQ0ptZFc1amRHbHZibHdpSUNFOUlIUjVjR1Z2WmlCcElDa2dlMXh1WEhSY2RGeDBYSFJjZEZ4MFhIUjBhR2x6TGw5eVpXMWhhVzVwYm1jZ0xTMHNJSFJvYVhNdVgzSmxjM1ZzZEZzZ1pTQmRJRDBnZER0Y2JseDBYSFJjZEZ4MFhIUmNkSDBnWld4elpTQnBaaUFvSUc0Z1BUMDlJRlVnS1NCN1hHNWNkRngwWEhSY2RGeDBYSFJjZEhaaGNpQnZJRDBnYm1WM0lHNG9JRVVnS1R0Y2JseDBYSFJjZEZ4MFhIUmNkRngwVGlnZ2J5d2dkQ3dnYVNBcExDQjBhR2x6TGw5M2FXeHNVMlYwZEd4bFFYUW9JRzhzSUdVZ0tWeHVYSFJjZEZ4MFhIUmNkRngwZlNCbGJITmxJSHRjYmx4MFhIUmNkRngwWEhSY2RGeDBkR2hwY3k1ZmQybHNiRk5sZEhSc1pVRjBLQ0J1WlhjZ2JpZ2dablZ1WTNScGIyNG9JR1VnS1NCN1hHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MGNtVjBkWEp1SUdVb0lIUWdLVnh1WEhSY2RGeDBYSFJjZEZ4MFhIUjlJQ2tzSUdVZ0tWeHVYSFJjZEZ4MFhIUmNkRngwZlZ4dVhIUmNkRngwWEhSY2RIMGdaV3h6WlNCN1hHNWNkRngwWEhSY2RGeDBYSFIwYUdsekxsOTNhV3hzVTJWMGRHeGxRWFFvSUhJb0lIUWdLU3dnWlNBcFhHNWNkRngwWEhSY2RGeDBmVnh1WEhSY2RGeDBYSFI5TENCMExuQnliM1J2ZEhsd1pTNWZjMlYwZEd4bFpFRjBJRDBnWm5WdVkzUnBiMjRvSUhRc0lHVXNJRzRnS1NCN1hHNWNkRngwWEhSY2RGeDBkbUZ5SUhJZ1BTQjBhR2x6TG5CeWIyMXBjMlU3WEc1Y2RGeDBYSFJjZEZ4MGNpNWZjM1JoZEdVZ1BUMDlJSGdnSmlZZ0tIUm9hWE11WDNKbGJXRnBibWx1WnlBdExTd2dkQ0E5UFQwZ1FTQS9JRWtvSUhJc0lHNGdLU0E2SUhSb2FYTXVYM0psYzNWc2RGc2daU0JkSUQwZ2Jpa3NJREFnUFQwOUlIUm9hWE11WDNKbGJXRnBibWx1WnlBbUppQk1LQ0J5TENCMGFHbHpMbDl5WlhOMWJIUWdLVnh1WEhSY2RGeDBYSFI5TENCMExuQnliM1J2ZEhsd1pTNWZkMmxzYkZObGRIUnNaVUYwSUQwZ1puVnVZM1JwYjI0b0lIUXNJR1VnS1NCN1hHNWNkRngwWEhSY2RGeDBkbUZ5SUc0Z1BTQjBhR2x6TzF4dVhIUmNkRngwWEhSY2RHb29JSFFzSUhadmFXUWdNQ3dnWm5WdVkzUnBiMjRvSUhRZ0tTQjdYRzVjZEZ4MFhIUmNkRngwWEhSeVpYUjFjbTRnYmk1ZmMyVjBkR3hsWkVGMEtDQlVMQ0JsTENCMElDbGNibHgwWEhSY2RGeDBYSFI5TENCbWRXNWpkR2x2YmlnZ2RDQXBJSHRjYmx4MFhIUmNkRngwWEhSY2RISmxkSFZ5YmlCdUxsOXpaWFIwYkdWa1FYUW9JRUVzSUdVc0lIUWdLVnh1WEhSY2RGeDBYSFJjZEgwZ0tWeHVYSFJjZEZ4MFhIUjlMQ0IwWEc1Y2RGeDBYSFI5S0Nrc0lGVWdQU0JtZFc1amRHbHZiaWdwSUh0Y2JseDBYSFJjZEZ4MFpuVnVZM1JwYjI0Z1pTZ2dkQ0FwSUh0Y2JseDBYSFJjZEZ4MFhIUjBhR2x6V3lCZklGMGdQU0I2SUNzckxDQjBhR2x6TGw5eVpYTjFiSFFnUFNCMGFHbHpMbDl6ZEdGMFpTQTlJSFp2YVdRZ01Dd2dkR2hwY3k1ZmMzVmljMk55YVdKbGNuTWdQU0JiWFN3Z1JTQWhQVDBnZENBbUppQW9YQ0ptZFc1amRHbHZibHdpSUNFOUlIUjVjR1Z2WmlCMElDWW1JR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWEhSY2RGeDBkR2h5YjNjZ2JtVjNJRlI1Y0dWRmNuSnZjaWdnWENKWmIzVWdiWFZ6ZENCd1lYTnpJR0VnY21WemIyeDJaWElnWm5WdVkzUnBiMjRnWVhNZ2RHaGxJR1pwY25OMElHRnlaM1Z0Wlc1MElIUnZJSFJvWlNCd2NtOXRhWE5sSUdOdmJuTjBjblZqZEc5eVhDSWdLVnh1WEhSY2RGeDBYSFJjZEgwb0tTd2dkR2hwY3lCcGJuTjBZVzVqWlc5bUlHVWdQeUJtZFc1amRHbHZiaWdnZEN3Z1pTQXBJSHRjYmx4MFhIUmNkRngwWEhSY2RIUnllU0I3WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkR1VvSUdaMWJtTjBhVzl1S0NCbElDa2dlMXh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRU1vSUhRc0lHVWdLVnh1WEhSY2RGeDBYSFJjZEZ4MFhIUjlMQ0JtZFc1amRHbHZiaWdnWlNBcElIdGNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUkpLQ0IwTENCbElDbGNibHgwWEhSY2RGeDBYSFJjZEZ4MGZTQXBYRzVjZEZ4MFhIUmNkRngwWEhSOUlHTmhkR05vSUNnZ1pTQXBJSHRjYmx4MFhIUmNkRngwWEhSY2RGeDBTU2dnZEN3Z1pTQXBYRzVjZEZ4MFhIUmNkRngwWEhSOVhHNWNkRngwWEhSY2RGeDBmU2dnZEdocGN5d2dkQ0FwSURvZ1puVnVZM1JwYjI0b0tTQjdYRzVjZEZ4MFhIUmNkRngwWEhSMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtDQmNJa1poYVd4bFpDQjBieUJqYjI1emRISjFZM1FnSjFCeWIyMXBjMlVuT2lCUWJHVmhjMlVnZFhObElIUm9aU0FuYm1WM0p5QnZjR1Z5WVhSdmNpd2dkR2hwY3lCdlltcGxZM1FnWTI5dWMzUnlkV04wYjNJZ1kyRnVibTkwSUdKbElHTmhiR3hsWkNCaGN5QmhJR1oxYm1OMGFXOXVMbHdpSUNsY2JseDBYSFJjZEZ4MFhIUjlLQ2twWEc1Y2RGeDBYSFJjZEgxY2JseHVYSFJjZEZ4MFhIUnlaWFIxY200Z1pTNXdjbTkwYjNSNWNHVXVZMkYwWTJnZ1BTQm1kVzVqZEdsdmJpZ2dkQ0FwSUh0Y2JseDBYSFJjZEZ4MFhIUnlaWFIxY200Z2RHaHBjeTUwYUdWdUtDQnVkV3hzTENCMElDbGNibHgwWEhSY2RGeDBmU3dnWlM1d2NtOTBiM1I1Y0dVdVptbHVZV3hzZVNBOUlHWjFibU4wYVc5dUtDQmxJQ2tnZTF4dVhIUmNkRngwWEhSY2RIWmhjaUJ1SUQwZ2RHaHBjeTVqYjI1emRISjFZM1J2Y2p0Y2JseDBYSFJjZEZ4MFhIUnlaWFIxY200Z2RDZ2daU0FwSUQ4Z2RHaHBjeTUwYUdWdUtDQm1kVzVqZEdsdmJpZ2dkQ0FwSUh0Y2JseDBYSFJjZEZ4MFhIUmNkSEpsZEhWeWJpQnVMbkpsYzI5c2RtVW9JR1VvS1NBcExuUm9aVzRvSUdaMWJtTjBhVzl1S0NrZ2UxeHVYSFJjZEZ4MFhIUmNkRngwWEhSeVpYUjFjbTRnZEZ4dVhIUmNkRngwWEhSY2RGeDBmU0FwWEc1Y2RGeDBYSFJjZEZ4MGZTd2dablZ1WTNScGIyNG9JSFFnS1NCN1hHNWNkRngwWEhSY2RGeDBYSFJ5WlhSMWNtNGdiaTV5WlhOdmJIWmxLQ0JsS0NrZ0tTNTBhR1Z1S0NCbWRXNWpkR2x2YmlncElIdGNibHgwWEhSY2RGeDBYSFJjZEZ4MGRHaHliM2NnZEZ4dVhIUmNkRngwWEhSY2RGeDBmU0FwWEc1Y2RGeDBYSFJjZEZ4MGZTQXBJRG9nZEdocGN5NTBhR1Z1S0NCbExDQmxJQ2xjYmx4MFhIUmNkRngwZlN3Z1pWeHVYSFJjZEZ4MGZTZ3BPMXh1WEhSY2RGeDBjbVYwZFhKdUlGVXVjSEp2ZEc5MGVYQmxMblJvWlc0Z1BTQjVMQ0JWTG1Gc2JDQTlJR1oxYm1OMGFXOXVLQ0IwSUNrZ2UxeHVYSFJjZEZ4MFhIUnlaWFIxY200Z2JtVjNJRTBvSUhSb2FYTXNJSFFnS1M1d2NtOXRhWE5sWEc1Y2RGeDBYSFI5TENCVkxuSmhZMlVnUFNCbWRXNWpkR2x2YmlnZ2RDQXBJSHRjYmx4MFhIUmNkRngwZG1GeUlHNGdQU0IwYUdsek8xeHVYSFJjZEZ4MFhIUnlaWFIxY200Z1pTZ2dkQ0FwSUQ4Z2JtVjNJRzRvSUdaMWJtTjBhVzl1S0NCbExDQnlJQ2tnZTF4dVhIUmNkRngwWEhSY2RHWnZjaUFvSUhaaGNpQnBJRDBnZEM1c1pXNW5kR2dzSUc4Z1BTQXdPeUJ2SUR3Z2FUc2dieUFyS3lBcElIdGNibHgwWEhSY2RGeDBYSFJjZEc0dWNtVnpiMngyWlNnZ2RGc2dieUJkSUNrdWRHaGxiaWdnWlN3Z2NpQXBYRzVjZEZ4MFhIUmNkRngwZlZ4dVhIUmNkRngwWEhSOUlDa2dPaUJ1WlhjZ2JpZ2dablZ1WTNScGIyNG9JSFFzSUdVZ0tTQjdYRzVjZEZ4MFhIUmNkRngwY21WMGRYSnVJR1VvSUc1bGR5QlVlWEJsUlhKeWIzSW9JRndpV1c5MUlHMTFjM1FnY0dGemN5QmhiaUJoY25KaGVTQjBieUJ5WVdObExsd2lJQ2tnS1Z4dVhIUmNkRngwWEhSOUlDbGNibHgwWEhSY2RIMHNJRlV1Y21WemIyeDJaU0E5SUdJc0lGVXVjbVZxWldOMElEMGdablZ1WTNScGIyNG9JSFFnS1NCN1hHNWNkRngwWEhSY2RIWmhjaUJsSUQwZ2JtVjNJSFJvYVhNb0lFVWdLVHRjYmx4MFhIUmNkRngwY21WMGRYSnVJRWtvSUdVc0lIUWdLU3dnWlZ4dVhIUmNkRngwZlN3Z1ZTNWZjMlYwVTJOb1pXUjFiR1Z5SUQwZ1puVnVZM1JwYjI0b0lIUWdLU0I3WEc1Y2RGeDBYSFJjZEdrZ1BTQjBYRzVjZEZ4MFhIUjlMQ0JWTGw5elpYUkJjMkZ3SUQwZ1puVnVZM1JwYjI0b0lIUWdLU0I3WEc1Y2RGeDBYSFJjZEc4Z1BTQjBYRzVjZEZ4MFhIUjlMQ0JWTGw5aGMyRndJRDBnYnl3Z1ZTNXdiMng1Wm1sc2JDQTlJR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWEhSMllYSWdkQ0E5SUhadmFXUWdNRHRjYmx4MFhIUmNkRngwYVdZZ0tDQmNJblZ1WkdWbWFXNWxaRndpSUNFOUlIUjVjR1Z2WmlCbmJHOWlZV3dnS1NCN1hHNWNkRngwWEhSY2RGeDBkQ0E5SUdkc2IySmhiRHRjYmx4MFhIUmNkRngwZlNCbGJITmxJR2xtSUNnZ1hDSjFibVJsWm1sdVpXUmNJaUFoUFNCMGVYQmxiMllnYzJWc1ppQXBJSHRjYmx4MFhIUmNkRngwWEhSMElEMGdjMlZzWmp0Y2JseDBYSFJjZEZ4MGZTQmxiSE5sSUh0Y2JseDBYSFJjZEZ4MFhIUjBjbmtnZTF4dVhIUmNkRngwWEhSY2RGeDBkQ0E5SUVaMWJtTjBhVzl1S0NCY0luSmxkSFZ5YmlCMGFHbHpYQ0lnS1NncFhHNWNkRngwWEhSY2RGeDBmU0JqWVhSamFDQW9JSFFnS1NCN1hHNWNkRngwWEhSY2RGeDBYSFIwYUhKdmR5QnVaWGNnUlhKeWIzSW9JRndpY0c5c2VXWnBiR3dnWm1GcGJHVmtJR0psWTJGMWMyVWdaMnh2WW1Gc0lHOWlhbVZqZENCcGN5QjFibUYyWVdsc1lXSnNaU0JwYmlCMGFHbHpJR1Z1ZG1seWIyNXRaVzUwWENJZ0tWeHVYSFJjZEZ4MFhIUmNkSDFjYmx4MFhIUmNkRngwZlZ4dVhIUmNkRngwWEhSMllYSWdaU0E5SUhRdVVISnZiV2x6WlR0Y2JseDBYSFJjZEZ4MGFXWWdLQ0JsSUNrZ2UxeHVYSFJjZEZ4MFhIUmNkSFpoY2lCdUlEMGdiblZzYkR0Y2JseDBYSFJjZEZ4MFhIUjBjbmtnZTF4dVhIUmNkRngwWEhSY2RGeDBiaUE5SUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1ZEc5VGRISnBibWN1WTJGc2JDZ2daUzV5WlhOdmJIWmxLQ2tnS1Z4dVhIUmNkRngwWEhSY2RIMGdZMkYwWTJnZ0tDQjBJQ2tnZTF4dVhIUmNkRngwWEhSY2RIMWNibHgwWEhSY2RGeDBYSFJwWmlBb0lGd2lXMjlpYW1WamRDQlFjbTl0YVhObFhWd2lJRDA5UFNCdUlDWW1JQ0ZsTG1OaGMzUWdLU0I3WEc1Y2RGeDBYSFJjZEZ4MFhIUnlaWFIxY201Y2JseDBYSFJjZEZ4MFhIUjlYRzVjZEZ4MFhIUmNkSDFjYmx4MFhIUmNkRngwZEM1UWNtOXRhWE5sSUQwZ1ZWeHVYSFJjZEZ4MGZTd2dWUzVRY205dGFYTmxJRDBnVlN3Z1ZWeHVYSFJjZEgwc0lIUXVaWGh3YjNKMGN5QTlJSElvS1Z4dVhIUjlMQ0JtZFc1amRHbHZiaWdnZEN3Z1pTd2diaUFwSUh0Y2JseDBYSFIyWVhJZ2NpQTlJRzRvSURVd0lDazdYRzVjZEZ4MGRDNWxlSEJ2Y25SeklEMGdibVYzSUhJb0lGd2lkSGQwZEhKY0lpQXBYRzVjZEgwc0lHWjFibU4wYVc5dUtDQjBMQ0JsTENCdUlDa2dlMXh1WEhSY2RIWmhjaUJ5SUQwZ2JpZ2dNU0FwTENCcElEMGdiaWdnTUNBcE8xeHVYRzVjZEZ4MFpuVnVZM1JwYjI0Z2J5Z2dkQ0FwSUh0Y2JseDBYSFJjZEhKbGRIVnliaUJwTG1selZIbHdaU2dnWENKemRISnBibWRjSWl3Z2RDQXBJRDhnZEM1emNHeHBkQ2dnWENJdVhDSWdLU0E2SUdrdWFYTlVlWEJsS0NCY0ltRnljbUY1WENJc0lIUWdLU0EvSUhRZ09pQmJYVnh1WEhSY2RIMWNibHh1WEhSY2RHWjFibU4wYVc5dUlITW9JSFFzSUdVZ0tTQjdYRzVjZEZ4MFhIUW9aU0E5SUdVZ2ZId2djaWxiSUhRZ1hTQTlJR1ZiSUhRZ1hTQjhmQ0I3ZlN3Z1QySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLQ0IwYUdsekxDQmNJbUpoYzJWY0lpd2dleUIyWVd4MVpUb2daVnNnZENCZElIMGdLU3dnVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtDQjBhR2x6TENCY0ltNWhiV1ZjSWl3Z2V5QjJZV3gxWlRvZ2RDQjlJQ2xjYmx4MFhIUjlYRzVjYmx4MFhIUnBMbUYxWnlnZ2N5NXdjbTkwYjNSNWNHVXNJSHRjYmx4MFhIUmNkR2RsZERvZ1puVnVZM1JwYjI0b0lIUWdLU0I3WEc1Y2RGeDBYSFJjZEhKbGRIVnliaUJ2S0NCMElDa3VjbVZrZFdObEtDQm1kVzVqZEdsdmJpZ2dkQ3dnWlNBcElIdGNibHgwWEhSY2RGeDBYSFJwWmlBb0lHa3VhWE5QWW1wbFkzUW9JSFFnS1NBcElIdGNibHgwWEhSY2RGeDBYSFJjZEhKbGRIVnliaUIwV3lCbElGMWNibHgwWEhSY2RGeDBYSFI5WEc1Y2RGeDBYSFJjZEgwc0lIUm9hWE11WW1GelpTQXBYRzVjZEZ4MFhIUjlMRnh1WEhSY2RGeDBjMlYwT2lCbWRXNWpkR2x2YmlnZ2RDd2daU3dnYmlBcElIdGNibHgwWEhSY2RGeDBkbUZ5SUhJZ1BTQnZLQ0IwSUNrc0lITWdQU0JtZFc1amRHbHZiaWdnZEN3Z1pTQXBJSHRjYmx4MFhIUmNkRngwWEhSMllYSWdiaUE5SUc4b0lHVWdLUzV6YkdsalpTZ2dNQ3dnTFNBeElDazdYRzVjZEZ4MFhIUmNkRngwY21WMGRYSnVJRzR1Y21Wa2RXTmxLQ0JtZFc1amRHbHZiaWdnZEN3Z1pTd2djaUFwSUh0Y2JseDBYSFJjZEZ4MFhIUmNkR2xtSUNnZ2RGc2daU0JkSUQwZ2RGc2daU0JkSUh4OElIdDlMQ0FoYVM1cGMwOWlhbVZqZENnZ2RGc2daU0JkSUNrZ0tTQjdYRzVjZEZ4MFhIUmNkRngwWEhSY2RIUm9jbTkzSUc1bGR5QkZjbkp2Y2lnZ2JpNXpiR2xqWlNnZ01Dd2djaUFySURFZ0tTNXFiMmx1S0NCY0lpNWNJaUFwSUNzZ1hDSWdhWE1nWVd4eVpXRmtlU0JrWldacGJtVmtJSGRwZEdnZ1lTQjJZV3gxWlM1Y0lpQXBPMXh1WEhSY2RGeDBYSFJjZEZ4MGZWeHVYSFJjZEZ4MFhIUmNkRngwY21WMGRYSnVJSFJiSUdVZ1hWeHVYSFJjZEZ4MFhIUmNkSDBzSUhRZ0tWeHVYSFJjZEZ4MFhIUjlLQ0IwYUdsekxtSmhjMlVzSUhRZ0tTd2dZU0E5SUhJdWMyeHBZMlVvSUMwZ01TQXBPMXh1WEhSY2RGeDBYSFJ5WlhSMWNtNGdiaUFtSmlCaElHbHVJSE1nUHlCeld5QmhJRjBnT2lCeld5QmhJRjBnUFNCbFhHNWNkRngwWEhSOUxGeHVYSFJjZEZ4MGFXNXBkRG9nWm5WdVkzUnBiMjRvSUhRc0lHVWdLU0I3WEc1Y2RGeDBYSFJjZEhKbGRIVnliaUIwYUdsekxuTmxkQ2dnZEN3Z1pTd2dJVEFnS1Z4dVhIUmNkRngwZlN4Y2JseDBYSFJjZEhWdWMyVjBPaUJtZFc1amRHbHZiaWdnZENBcElIdGNibHgwWEhSY2RGeDBkbUZ5SUdVZ1BTQnZLQ0IwSUNrc0lHNGdQU0IwYUdsekxtZGxkQ2dnWlM1emJHbGpaU2dnTUN3Z0xTQXhJQ2tnS1R0Y2JseDBYSFJjZEZ4MGJpQW1KaUJrWld4bGRHVWdibHNnWlM1emJHbGpaU2dnTFNBeElDa2dYVnh1WEhSY2RGeDBmU3hjYmx4MFhIUmNkR0YxWnpvZ1puVnVZM1JwYjI0b0lIUWdLU0I3WEc1Y2RGeDBYSFJjZEhaaGNpQmxJRDBnZEdocGN5NW5aWFFvSUhRZ0tTd2diaUE5SUdrdWRHOVNaV0ZzUVhKeVlYa29JR0Z5WjNWdFpXNTBjeUFwTG5Oc2FXTmxLQ0F4SUNrN1hHNWNkRngwWEhSY2RHbG1JQ2dnWlNBOUlIWnZhV1FnTUNBaFBUMGdaU0EvSUdVZ09pQjdmU3dnYmk1MWJuTm9hV1owS0NCbElDa3NJQ0Z1TG1WMlpYSjVLQ0JwTG1selQySnFaV04wSUNrZ0tTQjdYRzVjZEZ4MFhIUmNkRngwZEdoeWIzY2dibVYzSUVWeWNtOXlLQ0JjSWtOaGJtNXZkQ0JoZFdkdFpXNTBJRzV2YmkxdlltcGxZM1F1WENJZ0tUdGNibHgwWEhSY2RGeDBmVnh1WEhSY2RGeDBYSFJ5WlhSMWNtNGdkR2hwY3k1elpYUW9JSFFzSUdrdVlYVm5MbUZ3Y0d4NUtDQnVkV3hzTENCdUlDa2dLVnh1WEhSY2RGeDBmU3hjYmx4MFhIUmNkR05oYkd3NklHWjFibU4wYVc5dUtDQjBJQ2tnZTF4dVhIUmNkRngwWEhSMllYSWdaU0E5SUhSb2FYTXVaMlYwS0NCMElDa3NJRzRnUFNCcExuUnZVbVZoYkVGeWNtRjVLQ0JoY21kMWJXVnVkSE1nS1M1emJHbGpaU2dnTVNBcE8xeHVYSFJjZEZ4MFhIUnBaaUFvSUNGcExtbHpWSGx3WlNnZ1hDSm1kVzVqZEdsdmJsd2lMQ0JsSUNrZ0tTQjdYRzVjZEZ4MFhIUmNkRngwZEdoeWIzY2dibVYzSUVWeWNtOXlLQ0JjSWtaMWJtTjBhVzl1SUZ3aUlDc2dkQ0FySUZ3aVpHOWxjeUJ1YjNRZ1pYaHBjM1F1WENJZ0tUdGNibHgwWEhSY2RGeDBmVnh1WEhSY2RGeDBYSFJ5WlhSMWNtNGdaUzVoY0hCc2VTZ2diblZzYkN3Z2JpQXBYRzVjZEZ4MFhIUjlMRnh1WEhSY2RGeDBablZzYkZCaGRHZzZJR1oxYm1OMGFXOXVLQ0IwSUNrZ2UxeHVYSFJjZEZ4MFhIUjJZWElnWlNBOUlHOG9JSFFnS1R0Y2JseDBYSFJjZEZ4MGNtVjBkWEp1SUdVdWRXNXphR2xtZENnZ2RHaHBjeTV1WVcxbElDa3NJR1V1YW05cGJpZ2dYQ0l1WENJZ0tWeHVYSFJjZEZ4MGZWeHVYSFJjZEgwZ0tTd2dkQzVsZUhCdmNuUnpJRDBnYzF4dVhIUjlMQ0JtZFc1amRHbHZiaWdnZEN3Z1pTd2diaUFwSUh0Y2JseDBYSFIyWVhJZ2NpQTlJRzRvSURBZ0tTd2dhU0E5SUc0b0lEY2dLU3dnYnlBOUlIdGNibHgwWEhSY2RHSnBibVE2SUdaMWJtTjBhVzl1S0NCMExDQmxJQ2tnZTF4dVhIUmNkRngwWEhSeVpYUjFjbTRnZEdocGN5NWZhR0Z1Wkd4bGNuTWdQU0IwYUdsekxsOW9ZVzVrYkdWeWN5QjhmQ0I3ZlN3Z2RHaHBjeTVmYUdGdVpHeGxjbk5iSUhRZ1hTQTlJSFJvYVhNdVgyaGhibVJzWlhKeld5QjBJRjBnZkh3Z1cxMHNJSFJvYVhNdVgyaGhibVJzWlhKeld5QjBJRjB1Y0hWemFDZ2daU0FwWEc1Y2RGeDBYSFI5TEZ4dVhIUmNkRngwZFc1aWFXNWtPaUJtZFc1amRHbHZiaWdnZEN3Z1pTQXBJSHRjYmx4MFhIUmNkRngwZG1GeUlHNDdYRzVjZEZ4MFhIUmNkSFJvYVhNdVgyaGhibVJzWlhKeklDWW1JSFJvYVhNdVgyaGhibVJzWlhKeld5QjBJRjBnSmlZZ0tHVWdQeUFvYmlBOUlIUm9hWE11WDJoaGJtUnNaWEp6V3lCMElGMHVhVzVrWlhoUFppZ2daU0FwS1NBK1BTQXdJQ1ltSUhSb2FYTXVYMmhoYm1Sc1pYSnpXeUIwSUYwdWMzQnNhV05sS0NCdUxDQXhJQ2tnT2lCMGFHbHpMbDlvWVc1a2JHVnljMXNnZENCZElEMGdXMTBwWEc1Y2RGeDBYSFI5TEZ4dVhIUmNkRngwZEhKcFoyZGxjam9nWm5WdVkzUnBiMjRvSUhRc0lHVWdLU0I3WEc1Y2RGeDBYSFJjZEhaaGNpQnVJRDBnZEdocGN5NWZhR0Z1Wkd4bGNuTWdKaVlnZEdocGN5NWZhR0Z1Wkd4bGNuTmJJSFFnWFR0Y2JseDBYSFJjZEZ4MEtHVWdQU0JsSUh4OElIdDlLUzUwZVhCbElEMGdkQ3dnYmlBbUppQnVMbVp2Y2tWaFkyZ29JR1oxYm1OMGFXOXVLQ0IwSUNrZ2UxeHVYSFJjZEZ4MFhIUmNkSEl1WVhONWJtTW9JR2tvSUhRc0lIUm9hWE1zSUdVZ0tTQXBYRzVjZEZ4MFhIUmNkSDBnS1Z4dVhIUmNkRngwZlZ4dVhIUmNkSDA3WEc1Y2RGeDBkQzVsZUhCdmNuUnpJRDBnZTF4dVhIUmNkRngwUlcxcGRIUmxjam9nYnl4Y2JseDBYSFJjZEcxaGEyVkZiV2wwZEdWeU9pQm1kVzVqZEdsdmJpZ3BJSHRjYmx4MFhIUmNkRngwY21WMGRYSnVJSEl1WVhWbktDQm1kVzVqZEdsdmJpZ3BJSHRjYmx4MFhIUmNkRngwZlN3Z2J5QXBYRzVjZEZ4MFhIUjlYRzVjZEZ4MGZWeHVYSFI5TENCbWRXNWpkR2x2YmlnZ2RDd2daU3dnYmlBcElIdGNibHgwWEhSMllYSWdjaUE5SUc0b0lERXdNeUFwTENCcElEMGdiaWdnTnpjZ0tTd2dieUE5SUc0b0lEWWdLU3dnY3lBOUlHNG9JREl6SUNrc0lHRWdQU0J1S0NBM0lDa3NJSFVnUFNCdUtDQXdJQ2tzSUdNZ1BTQnVaWGNnYVNnZ1puVnVZM1JwYjI0b0lIUWdLU0I3WEc1Y2RGeDBYSFIyWVhJZ1pTQTlJR1oxYm1OMGFXOXVLQ0IwSUNrZ2UxeHVYSFJjZEZ4MFhIUnlaWFIxY200Z2RDNXlaV1IxWTJVb0lHWjFibU4wYVc5dUtDQjBMQ0JsSUNrZ2UxeHVYSFJjZEZ4MFhIUmNkSEpsZEhWeWJpQjBXeUJsTGw5amJHRnpjMDVoYldVZ1hTQTlJSFJiSUdVdVgyTnNZWE56VG1GdFpTQmRJSHg4SUZ0ZExDQjBXeUJsTGw5amJHRnpjMDVoYldVZ1hTNXdkWE5vS0NCbElDa3NJSFJjYmx4MFhIUmNkRngwZlN3Z2UzMGdLVnh1WEhSY2RGeDBmU2dnZEM1dFlYQW9JSEl1Wm5KdmJWSmhkMVJoYzJzZ0tTQXBPMXh1WEhSY2RGeDBkUzVtYjNKSmJpZ2daU3dnWm5WdVkzUnBiMjRvSUhRc0lHVWdLU0I3WEc1Y2RGeDBYSFJjZEhNdVlXeHNVMlYwZEd4bFpDZ2daUzV0WVhBb0lHWjFibU4wYVc5dUtDQjBJQ2tnZTF4dVhIUmNkRngwWEhSY2RISmxkSFZ5YmlCMExtbHVhWFJwWVd4cGVtVW9LVnh1WEhSY2RGeDBYSFI5SUNrZ0tTNTBhR1Z1S0NCbWRXNWpkR2x2YmlncElIdGNibHgwWEhSY2RGeDBYSFJsTG1admNrVmhZMmdvSUdaMWJtTjBhVzl1S0NCMElDa2dlMXh1WEhSY2RGeDBYSFJjZEZ4MGJ5NWhiR3dvSUZ0Y2JseDBYSFJjZEZ4MFhIUmNkRngwZEM1b2VXUnlZWFJsS0Nrc1hHNWNkRngwWEhSY2RGeDBYSFJjZEhRdWFXNXpaWEowU1c1MGIwUnZiU2dwWEc1Y2RGeDBYSFJjZEZ4MFhIUmRJQ2t1ZEdobGJpZ2dZU2dnZEM1eVpXNWtaWElzSUhRZ0tTQXBMblJvWlc0b0lHRW9JSFF1YzNWalkyVnpjeXdnZENBcExDQmhLQ0IwTG1aaGFXd3NJSFFnS1NBcFhHNWNkRngwWEhSY2RGeDBmU0FwWEc1Y2RGeDBYSFJjZEgwZ0tWeHVYSFJjZEZ4MGZTQXBYRzVjZEZ4MGZTQXBPMXh1WEhSY2RIUXVaWGh3YjNKMGN5QTlJSHRjYmx4MFhIUmNkR0ZrWkZkcFpHZGxkRG9nWm5WdVkzUnBiMjRvSUhRZ0tTQjdYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQmpMbUZrWkNnZ2RDQXBYRzVjZEZ4MFhIUjlYRzVjZEZ4MGZWeHVYSFI5TENCbWRXNWpkR2x2YmlnZ2RDd2daU3dnYmlBcElIdGNibHgwWEhSMllYSWdjaUE5SUc0b0lERTRJQ2s3WEc1Y2RGeDBkQzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRvSUhRZ0tTQjdYRzVjZEZ4MFhIUnlaWFIxY200Z2NpNTNjbWwwWlNnZ1puVnVZM1JwYjI0b0tTQjdYRzVjZEZ4MFhIUmNkSFFnSmlZZ2RDNXdZWEpsYm5ST2IyUmxJQ1ltSUhRdWNHRnlaVzUwVG05a1pTNXlaVzF2ZG1WRGFHbHNaQ2dnZENBcFhHNWNkRngwWEhSOUlDbGNibHgwWEhSOVhHNWNkSDBzSUdaMWJtTjBhVzl1S0NCMExDQmxMQ0J1SUNrZ2UxeHVYSFJjZEc0b0lERXlJQ2tzSUhRdVpYaHdiM0owY3lBOUlIdGNibHgwWEhSY2RHeHZaem9nWm5WdVkzUnBiMjRvSUhRc0lHVWdLU0I3WEc1Y2RGeDBYSFI5WEc1Y2RGeDBmVnh1WEhSOUxDQm1kVzVqZEdsdmJpZ2dkQ3dnWlN3Z2JpQXBJSHRjYmx4MFhIUjJZWElnY2lBOUlHNG9JREVnS1R0Y2JseHVYSFJjZEdaMWJtTjBhVzl1SUdrb0lIUWdLU0I3WEc1Y2RGeDBYSFJ5WlhSMWNtNGdLSFFnUFNCMElIeDhJSElwTG1kbGRGTmxiR1ZqZEdsdmJpQW1KaUIwTG1kbGRGTmxiR1ZqZEdsdmJpZ3BYRzVjZEZ4MGZWeHVYRzVjZEZ4MGRDNWxlSEJ2Y25SeklEMGdlMXh1WEhSY2RGeDBaMlYwVTJWc1pXTjBhVzl1T2lCcExGeHVYSFJjZEZ4MFoyVjBVMlZzWldOMFpXUlVaWGgwT2lCbWRXNWpkR2x2YmlnZ2RDQXBJSHRjYmx4MFhIUmNkRngwZG1GeUlHVWdQU0JwS0NCMElDazdYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQmxJRDhnWlM1MGIxTjBjbWx1WnlncElEb2dYQ0pjSWx4dVhIUmNkRngwZlZ4dVhIUmNkSDFjYmx4MGZTd2dablZ1WTNScGIyNG9JSFFzSUdVc0lHNGdLU0I3WEc1Y2RGeDBkbUZ5SUhJZ1BTQnVLQ0EwSUNrc0lHa2dQU0J1S0NBeElDa3NJRzhnUFNCdUtDQXlJQ2tzSUhNZ1BTQXlaVFE3WEc1Y2RGeDBkQzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRvSUhRZ0tTQjdYRzVjZEZ4MFhIUjJZWElnWlNBOUlHNWxkeUJ2TENCdUlEMGdjaTVqY21WaGRHVkZiR1Z0Wlc1MEtDQmNJbWx0WjF3aUlDazdYRzVjZEZ4MFhIUnlaWFIxY200Z2JpNXZibXh2WVdRZ1BTQnVMbTl1WlhKeWIzSWdQU0JtZFc1amRHbHZiaWdwSUh0Y2JseDBYSFJjZEZ4MGFTNXpaWFJVYVcxbGIzVjBLQ0JsTG5KbGMyOXNkbVVzSURVd0lDbGNibHgwWEhSY2RIMHNJRzR1YzNKaklEMGdkQ3dnYVM1elpYUlVhVzFsYjNWMEtDQmxMbkpsYW1WamRDd2djeUFwTENCbExuQnliMjFwYzJWY2JseDBYSFI5WEc1Y2RIMHNJR1oxYm1OMGFXOXVLQ0IwTENCbExDQnVJQ2tnZTF4dVhIUmNkSFpoY2lCeUlEMGdiaWdnTVRFeklDazdYRzVjZEZ4MGRDNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNG9JSFFnS1NCN1hHNWNkRngwWEhSMExtUmxabWx1WlNnZ1hDSmpjbVZoZEdWRmJHVnRaVzUwWENJc0lISWdLU3dnZEM1a1pXWnBibVVvSUZ3aVkzSmxZWFJsUm5KaFoyMWxiblJjSWl3Z2NpQXBMQ0IwTG1SbFptbHVaU2dnWENKb2RHMXNWRzlGYkdWdFpXNTBYQ0lzSUhJZ0tTd2dkQzVrWldacGJtVW9JRndpYUdGelUyVnNaV04wWldSVVpYaDBYQ0lzSUhJZ0tTd2dkQzVrWldacGJtVW9JRndpWVdSa1VtOXZkRU5zWVhOelhDSXNJSElnS1N3Z2RDNWtaV1pwYm1Vb0lGd2ljbVZ0YjNabFVtOXZkRU5zWVhOelhDSXNJSElnS1N3Z2RDNWtaV1pwYm1Vb0lGd2lhR0Z6VW05dmRFTnNZWE56WENJc0lISWdLU3dnZEM1a1pXWnBibVVvSUZ3aWNISmxjR1Z1WkZOMGVXeGxVMmhsWlhSY0lpd2djaUFwTENCMExtUmxabWx1WlNnZ1hDSmhjSEJsYm1SVGRIbHNaVk5vWldWMFhDSXNJSElnS1N3Z2RDNWtaV1pwYm1Vb0lGd2ljSEpsY0dWdVpFTnpjMXdpTENCeUlDa3NJSFF1WkdWbWFXNWxLQ0JjSW1Gd2NHVnVaRU56YzF3aUxDQnlJQ2tzSUhRdVpHVm1hVzVsS0NCY0ltMWhhMlZXYVhOcFlteGxYQ0lzSUhJZ0tTd2dkQzVrWldacGJtVW9JRndpYVc1cVpXTjBWMmxrWjJWMFJXeGNJaXdnY2lBcExDQjBMbVJsWm1sdVpTZ2dYQ0p0WVhSamFFaGxhV2RvZEZSdlEyOXVkR1Z1ZEZ3aUxDQnlJQ2tzSUhRdVpHVm1hVzVsS0NCY0ltMWhkR05vVjJsa2RHaFViME52Ym5SbGJuUmNJaXdnY2lBcFhHNWNkRngwZlZ4dVhIUjlMQ0JtZFc1amRHbHZiaWdnZEN3Z1pTQXBJSHRjYmx4MFhIUjBMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWdnZENBcElIdGNibHgwWEhSY2RIWmhjaUJsTENCdUlEMGdJVEU3WEc1Y2RGeDBYSFJ5WlhSMWNtNGdablZ1WTNScGIyNG9LU0I3WEc1Y2RGeDBYSFJjZEhKbGRIVnliaUJ1SUQ4Z1pTQTZJQ2h1SUQwZ0lUQXNJR1VnUFNCMExtRndjR3g1S0NCMGFHbHpMQ0JoY21kMWJXVnVkSE1nS1NsY2JseDBYSFJjZEgxY2JseDBYSFI5WEc1Y2RIMHNJR1oxYm1OMGFXOXVLQ0IwTENCbExDQnVJQ2tnZTF4dVhIUmNkSFpoY2lCeUlEMGdiaWdnTVRVZ0tTd2dhU0E5SUc0b0lERXlNaUFwTENCdklEMGdiaWdnTmpBZ0tTd2djeUE5SUc0b0lERTJJQ2s3WEc1Y2RGeDBkQzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRvSUhRc0lHVXNJRzRnS1NCN1hHNWNkRngwWEhSeVpYUjFjbTRnYm1WM0lISW9JR2tzSUc4c0lITXVSRTFmUWxWVVZFOU9MQ0IwTENCbExDQnVJQ2xjYmx4MFhIUjlYRzVjZEgwc0lHWjFibU4wYVc5dUtDQjBMQ0JsTENCdUlDa2dlMXh1WEhSY2RIWmhjaUJ5SUQwZ2JpZ2dOakVnS1N3Z2FTQTlJRzRvSURJMklDazdYRzVjZEZ4MGRDNWxlSEJ2Y25SeklEMGdjaTVwYzFOMWNIQnZjblJsWkNncElEOGdjaUE2SUdsY2JseDBmU3dnWm5WdVkzUnBiMjRvSUhRc0lHVXNJRzRnS1NCN1hHNWNkRngwZG1GeUlISWdQU0J1S0NBeU55QXBMQ0JwSUQwZ2JpZ2dNVEl6SUNrN1hHNWNkRngwZEM1bGVIQnZjblJ6SUQwZ2NpNWlkV2xzWkNnZ1cybGRJQ2xjYmx4MGZTd2dablZ1WTNScGIyNG9JSFFzSUdVc0lHNGdLU0I3WEc1Y2RGeDBkbUZ5SUhJZ1BTQnVLQ0F4TlNBcExDQnBJRDBnYmlnZ01USTJJQ2tzSUc4Z1BTQnVLQ0F6T0NBcExDQnpJRDBnYmlnZ01UWWdLVHRjYmx4MFhIUjBMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWdnZEN3Z1pTd2diaUFwSUh0Y2JseDBYSFJjZEhKbGRIVnliaUJ1WlhjZ2NpZ2dhU3dnYnl3Z2N5NUdUMHhNVDFkZlFsVlVWRTlPTENCMExDQmxMQ0J1SUNsY2JseDBYSFI5WEc1Y2RIMHNJR1oxYm1OMGFXOXVLQ0IwTENCbExDQnVJQ2tnZTF4dVhIUmNkSFpoY2lCeUlEMGdiaWdnTVRVZ0tTd2dhU0E5SUc0b0lERXpOQ0FwTENCdklEMGdiaWdnTWpZZ0tTd2djeUE5SUc0b0lERTJJQ2s3WEc1Y2RGeDBkQzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRvSUhRc0lHVXNJRzRnS1NCN1hHNWNkRngwWEhSeVpYUjFjbTRnYm1WM0lISW9JR2tzSUc4c0lITXVUVTlOUlU1VUxDQjBMQ0JsTENCdUlDbGNibHgwWEhSOVhHNWNkSDBzSUdaMWJtTjBhVzl1S0NCMExDQmxMQ0J1SUNrZ2UxeHVYSFJjZEhaaGNpQnlJRDBnYmlnZ01UVWdLU3dnYVNBOUlHNG9JREV6TmlBcExDQnZJRDBnYmlnZ01qWWdLU3dnY3lBOUlHNG9JREUySUNrN1hHNWNkRngwZEM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0b0lIUXNJR1VzSUc0Z0tTQjdYRzVjZEZ4MFhIUnlaWFIxY200Z2JtVjNJSElvSUdrc0lHOHNJSE11VUVWU1NWTkRUMUJGTENCMExDQmxMQ0J1SUNsY2JseDBYSFI5WEc1Y2RIMHNJR1oxYm1OMGFXOXVLQ0IwTENCbExDQnVJQ2tnZTF4dVhIUmNkSFpoY2lCeUlEMGdiaWdnT0RNZ0tTd2dhU0E5SUc0b0lERXpPQ0FwTENCdklEMGdiaWdnTVRReUlDa3NJSE1nUFNCdUtDQXhORFFnS1N3Z1lTQTlJRzRvSURFME5pQXBMQ0IxSUQwZ2JpZ2dNVFE0SUNrc0lHTWdQU0I3WEc1Y2RGeDBYSFJqYjJ4c1pXTjBhVzl1T2lCcExGeHVYSFJjZEZ4MFpYWmxiblE2SUc4c1hHNWNkRngwWEhSc2FXdGxjem9nY3l4Y2JseDBYSFJjZEd4cGMzUTZJR0VzWEc1Y2RGeDBYSFJ3Y205bWFXeGxPaUIxTEZ4dVhIUmNkRngwZFhKc09pQm1YRzVjZEZ4MGZTd2daQ0E5SUZ0MUxDQnpMQ0JwTENCaExDQnZYVHRjYmx4dVhIUmNkR1oxYm1OMGFXOXVJR1lvSUhRZ0tTQjdYRzVjZEZ4MFhIUnlaWFIxY200Z2NpZ2daQ3dnWm5WdVkzUnBiMjRvSUdVZ0tTQjdYRzVjZEZ4MFhIUmNkSFJ5ZVNCN1hHNWNkRngwWEhSY2RGeDBjbVYwZFhKdUlHNWxkeUJsS0NCMElDbGNibHgwWEhSY2RGeDBmU0JqWVhSamFDQW9JSFFnS1NCN1hHNWNkRngwWEhSY2RIMWNibHgwWEhSY2RIMGdLVnh1WEhSY2RIMWNibHh1WEhSY2RIUXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVLQ0IwSUNrZ2UxeHVYSFJjZEZ4MGNtVjBkWEp1SUhRZ1B5Qm1kVzVqZEdsdmJpZ2dkQ0FwSUh0Y2JseDBYSFJjZEZ4MGRtRnlJR1VzSUc0N1hHNWNkRngwWEhSY2RISmxkSFZ5YmlCbElEMGdLSFF1YzI5MWNtTmxWSGx3WlNBcklGd2lYQ0lwTG5SdlRHOTNaWEpEWVhObEtDa3NJQ2h1SUQwZ1kxc2daU0JkS1NBL0lHNWxkeUJ1S0NCMElDa2dPaUJ1ZFd4c1hHNWNkRngwWEhSOUtDQjBJQ2tnZkh3Z1ppZ2dkQ0FwSURvZ2JuVnNiRnh1WEhSY2RIMWNibHgwZlN3Z1puVnVZM1JwYjI0b0lIUXNJR1VzSUc0Z0tTQjdYRzVjZEZ4MGRtRnlJSElnUFNCdUtDQXhOU0FwTENCcElEMGdiaWdnTVRVd0lDa3NJRzhnUFNCdUtDQXlOaUFwTENCeklEMGdiaWdnTVRZZ0tUdGNibHgwWEhSMExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpZ2dkQ3dnWlN3Z2JpQXBJSHRjYmx4MFhIUmNkSEpsZEhWeWJpQnVaWGNnY2lnZ2FTd2dieXdnY3k1VVNVMUZURWxPUlN3Z2RDd2daU3dnYmlBcFhHNWNkRngwZlZ4dVhIUjlMQ0JtZFc1amRHbHZiaWdnZEN3Z1pTd2diaUFwSUh0Y2JseDBYSFIyWVhJZ2NpQTlJRzRvSURRZ0tTd2dhU0E5SUc0b0lEWTRJQ2tzSUc4Z1BTQnVLQ0F4TlRJZ0tTd2djeUE5SUc0b0lERTFJQ2tzSUdFZ1BTQnVLQ0F6T0NBcExDQjFJRDBnYmlnZ01UVXpJQ2tzSUdNZ1BTQnVLQ0EyTUNBcExDQmtJRDBnYmlnZ01UVTBJQ2tzWEc1Y2RGeDBYSFJtSUQwZ2JpZ2dNVFlnS1R0Y2JseDBYSFIwTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlnZ2RDd2daU3dnYml3Z2JDQXBJSHRjYmx4MFhIUmNkSFpoY2lCb0xDQndJRDBnYVM1cGMwaHZjbWw2YjI1VWQyVmxkRVZ1WVdKc1pXUW9JR3dnS1R0Y2JseDBYSFJjZEhKbGRIVnliaUJ2S0NCc0xDQjBMblIzWldWMFNXUWdLU3dnY0NBL0lDaG9JRDBnY2k1amNtVmhkR1ZGYkdWdFpXNTBLQ0JjSW1ScGRsd2lJQ2tzSUc1bGR5QnpLQ0IxTENCaExDQm1MbFJYUlVWVUxDQjBMQ0JsTENCdUxDQjdJSE5oYm1SaWIzaFhjbUZ3Y0dWeVJXdzZJR2dnZlNBcEtTQTZJRzVsZHlCektDQmtMQ0JqTENCbUxsUlhSVVZVTENCMExDQmxMQ0J1SUNsY2JseDBYSFI5WEc1Y2RIMHNJR1oxYm1OMGFXOXVLQ0IwTENCbElDa2dlMXh1WEhSY2RIWmhjaUJ1SUQwZ1hDSjBabmRmYUc5eWFYcHZibDkwZDJWbGRGOWxiV0psWkY4NU5UVTFYQ0k3WEc1Y2RGeDBkQzVsZUhCdmNuUnpJRDBnZTF4dVhIUmNkRngwYVhOSWIzSnBlbTl1VkhkbFpYUkZibUZpYkdWa09pQm1kVzVqZEdsdmJpZ2dkQ0FwSUh0Y2JseDBYSFJjZEZ4MGNtVjBkWEp1SUNFb0lYUWdmSHdnSVhSYklHNGdYU0I4ZkNCY0ltaDBaVndpSUNFOVBTQjBXeUJ1SUYwdVluVmphMlYwS1Z4dVhIUmNkRngwZlZ4dVhIUmNkSDFjYmx4MGZTd2dablZ1WTNScGIyNG9JSFFzSUdVc0lHNGdLU0I3WEc1Y2RGeDBkbUZ5SUhJZ1BTQnVLQ0F4TlNBcExDQnBJRDBnYmlnZ01UVTJJQ2tzSUc4Z1BTQnVLQ0F6T0NBcExDQnpJRDBnYmlnZ01UWWdLVHRjYmx4MFhIUjBMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWdnZEN3Z1pTd2diaUFwSUh0Y2JseDBYSFJjZEhaaGNpQmhJRDBnZENBbUppQjBMblI1Y0dVZ2ZId2dYQ0p6YUdGeVpWd2lMRnh1WEhSY2RGeDBYSFIxSUQwZ1hDSm9ZWE5vZEdGblhDSWdQVDBnWVNBL0lITXVTRUZUU0ZSQlIxOUNWVlJVVDA0Z09pQmNJbTFsYm5ScGIyNWNJaUE5UFNCaElEOGdjeTVOUlU1VVNVOU9YMEpWVkZSUFRpQTZJSE11VTBoQlVrVmZRbFZVVkU5T08xeHVYSFJjZEZ4MGNtVjBkWEp1SUc1bGR5QnlLQ0JwTENCdkxDQjFMQ0IwTENCbExDQnVJQ2xjYmx4MFhIUjlYRzVjZEgwc0lHWjFibU4wYVc5dUtDQjBMQ0JsTENCdUlDa2dlMXh1WEhSY2RIWmhjaUJ5SUQwZ2JpZ2dNemNnS1N3Z2FTQTlJRzRvSURNNUlDa3NJRzhnUFNCdUtDQXdJQ2tzSUhNZ1BTQnVLQ0EyT0NBcExDQmhJRDBnYmlnZ016RWdLVHRjYmx4MFhIUjBMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWdnZENBcElIdGNibHgwWEhSY2RIWmhjaUJsSUQwZ2UxeHVYSFJjZEZ4MFhIUjNhV1JuWlhSZmIzSnBaMmx1T2lCcExuSnZiM1JFYjJOMWJXVnVkRXh2WTJGMGFXOXVLQ2tzWEc1Y2RGeDBYSFJjZEhkcFpHZGxkRjltY21GdFpUb2dhUzVwYzBaeVlXMWxaQ2dwSUQ4Z2FTNWpkWEp5Wlc1MFJHOWpkVzFsYm5STWIyTmhkR2x2YmlncElEb2diblZzYkN4Y2JseDBYSFJjZEZ4MFpIVnlZWFJwYjI1ZmJYTTZJSFF1WkhWeVlYUnBiMjRzWEc1Y2RGeDBYSFJjZEdsMFpXMWZhV1J6T2lCMExuZHBaR2RsZEVsa2N5QjhmQ0JiWFZ4dVhIUmNkRngwZlN3Z2JpQTlJRzh1WVhWbktDQjBMbTVoYldWemNHRmpaU3dnZTF4dVhIUmNkRngwWEhSd1lXZGxPaUJjSW5CaFoyVmNJaXhjYmx4MFhIUmNkRngwWTI5dGNHOXVaVzUwT2lCY0luQmxjbVp2Y20xaGJtTmxYQ0pjYmx4MFhIUmNkSDBnS1R0Y2JseDBYSFJjZEhKbGRIVnliaUJoTG1kbGRFVjRjR1Z5YVcxbGJuUnpLQ2t1ZEdobGJpZ2dablZ1WTNScGIyNG9JSFFnS1NCN1hHNWNkRngwWEhSY2RIWmhjaUJwSUQwZ2N5NXBjMGh2Y21sNmIyNVVkMlZsZEVWdVlXSnNaV1FvSUhRZ0tTQS9JRzh1WVhWbktDQmxMQ0I3SUdOdmJuUmxlSFE2SUZ3aWFHOXlhWHB2Ymx3aUlIMGdLU0E2SUdVN1hHNWNkRngwWEhSY2RISXVjMk55YVdKbEtDQnVMQ0JwSUNsY2JseDBYSFJjZEgwZ0tWeHVYSFJjZEgxY2JseDBmU3dnWm5WdVkzUnBiMjRvSUhRc0lHVXNJRzRnS1NCN1hHNWNkRngwZG1GeUlISWdQU0J1S0NBd0lDa3NJR2tnUFNCdUtDQXhNemtnS1N3Z2J5QTlJRnRjSW1GeVhDSXNJRndpWm1GY0lpd2dYQ0pvWlZ3aUxDQmNJblZ5WENKZE8xeHVYSFJjZEhRdVpYaHdiM0owY3lBOUlIdGNibHgwWEhSY2RHbHpVblJzVEdGdVp6b2dablZ1WTNScGIyNG9JSFFnS1NCN1hHNWNkRngwWEhSY2RISmxkSFZ5YmlCMElEMGdVM1J5YVc1bktDQjBJQ2t1ZEc5TWIzZGxja05oYzJVb0tTd2djaTVqYjI1MFlXbHVjeWdnYnl3Z2RDQXBYRzVjZEZ4MFhIUjlMRnh1WEhSY2RGeDBiV0YwWTJoTVlXNW5kV0ZuWlRvZ1puVnVZM1JwYjI0b0lIUWdLU0I3WEc1Y2RGeDBYSFJjZEhKbGRIVnliaUIwSUQwZ0tIUWdQU0FvZENCOGZDQmNJbHdpS1M1MGIweHZkMlZ5UTJGelpTZ3BLUzV5WlhCc1lXTmxLQ0JjSWw5Y0lpd2dYQ0l0WENJZ0tTd2dhU2dnZENBcElEOGdkQ0E2SUNoMElEMGdkQzV5WlhCc1lXTmxLQ0F2TFM0cUx5d2dYQ0pjSWlBcExDQnBLQ0IwSUNrZ1B5QjBJRG9nWENKbGJsd2lLVnh1WEhSY2RGeDBmVnh1WEhSY2RIMWNibHgwZlN3Z1puVnVZM1JwYjI0b0lIUWdLU0I3WEc1Y2RGeDBkQzVsZUhCdmNuUnpJRDBnZTF4dVhIUmNkRngwVkZkRlJWUTZJREFzWEc1Y2RGeDBYSFJTUlZSWFJVVlVPaUF4TUN4Y2JseDBYSFJjZEVOVlUxUlBUVjlVU1UxRlRFbE9SVG9nTVRjc1hHNWNkRngwWEhSTVNWWkZYMVpKUkVWUFgwVldSVTVVT2lBeU9DeGNibHgwWEhSY2RGRlZUMVJGWDFSWFJVVlVPaUF5TTF4dVhIUmNkSDFjYmx4MGZTd2dablZ1WTNScGIyNG9JSFFnS1NCN1hHNWNkRngwZEM1bGVIQnZjblJ6SUQwZ2UxeHVYSFJjZEZ4MGRIZGxaWFJDZFhSMGIyNUlkRzFzVUdGMGFEb2dYQ0l2ZDJsa1oyVjBjeTkwZDJWbGRGOWlkWFIwYjI0dVpEQm1NVE5pWlRnek1qRmxZalF6TW1aaVlUSTRZMlpqTVdNek16VXhZakV1ZTN0c1lXNW5mWDB1YUhSdGJGd2lMRnh1WEhSY2RGeDBabTlzYkc5M1FuVjBkRzl1U0hSdGJGQmhkR2c2SUZ3aUwzZHBaR2RsZEhNdlptOXNiRzkzWDJKMWRIUnZiaTVrTUdZeE0ySmxPRE15TVdWaU5ETXlabUpoTWpoalptTXhZek16TlRGaU1TNTdlMnhoYm1kOWZTNW9kRzFzWENJc1hHNWNkRngwWEhSb2RXSklkRzFzVUdGMGFEb2dYQ0l2ZDJsa1oyVjBjeTlvZFdJdWFIUnRiRndpTEZ4dVhIUmNkRngwZDJsa1oyVjBTV1p5WVcxbFNIUnRiRkJoZEdnNklGd2lMM2RwWkdkbGRITXZkMmxrWjJWMFgybG1jbUZ0WlM1a01HWXhNMkpsT0RNeU1XVmlORE15Wm1KaE1qaGpabU14WXpNek5URmlNUzVvZEcxc1hDSXNYRzVjZEZ4MFhIUnlaWE52ZFhKalpVSmhjMlZWY213NklGd2lhSFIwY0hNNkx5OXdiR0YwWm05eWJTNTBkMmwwZEdWeUxtTnZiVndpWEc1Y2RGeDBmVnh1WEhSOUxDQm1kVzVqZEdsdmJpZ2dkQ3dnWlN3Z2JpQXBJSHRjYmx4MFhIUjJZWElnY2lBOUlHNG9JRE1nS1N3Z2FTQTlJRzRvSURFd01DQXBMQ0J2SUQwZ2JpZ2dNalVnS1N3Z2N5QTlJRzRvSURFeElDa3NJR0VnUFNCN1hHNWNkRngwWEhSbVlYWnZjbWwwWlRvZ1cxd2labUYyYjNKcGRHVmNJaXdnWENKc2FXdGxYQ0pkTEZ4dVhIUmNkRngwWm05c2JHOTNPaUJiWENKbWIyeHNiM2RjSWwwc1hHNWNkRngwWEhSc2FXdGxPaUJiWENKbVlYWnZjbWwwWlZ3aUxDQmNJbXhwYTJWY0lsMHNYRzVjZEZ4MFhIUnlaWFIzWldWME9pQmJYQ0p5WlhSM1pXVjBYQ0pkTEZ4dVhIUmNkRngwZEhkbFpYUTZJRnRjSW5SM1pXVjBYQ0pkWEc1Y2RGeDBmVHRjYmx4dVhIUmNkR1oxYm1OMGFXOXVJSFVvSUhRZ0tTQjdYRzVjZEZ4MFhIUjBhR2x6TG5OeVkwVnNJRDBnVzEwc0lIUm9hWE11Wld4bGJXVnVkQ0E5SUhSY2JseDBYSFI5WEc1Y2JseDBYSFIxTG05d1pXNGdQU0JtZFc1amRHbHZiaWdnZEN3Z1pTd2diaUFwSUh0Y2JseDBYSFJjZEhaaGNpQjFJRDBnS0hJdWFXNTBaVzUwVkhsd1pTZ2dkQ0FwSUh4OElGd2lYQ0lwTG5SdlRHOTNaWEpEWVhObEtDazdYRzVjZEZ4MFhIUnlMbWx6VkhkcGRIUmxjbFZTVENnZ2RDQXBJQ1ltSUNobWRXNWpkR2x2YmlnZ2RDd2daU0FwSUh0Y2JseDBYSFJjZEZ4MGFTNXZjR1Z1S0NCMExDQjdmU3dnWlNBcFhHNWNkRngwWEhSOUtDQjBMQ0J1SUNrc0lHVWdKaVlnYnk1MGNtbG5aMlZ5S0NCY0ltTnNhV05yWENJc0lIdGNibHgwWEhSY2RGeDBkR0Z5WjJWME9pQmxMRnh1WEhSY2RGeDBYSFJ5WldkcGIyNDZJRndpYVc1MFpXNTBYQ0lzWEc1Y2RGeDBYSFJjZEhSNWNHVTZJRndpWTJ4cFkydGNJaXhjYmx4MFhIUmNkRngwWkdGMFlUb2dlMzFjYmx4MFhIUmNkSDBnS1N3Z1pTQW1KaUJoV3lCMUlGMGdKaVlnWVZzZ2RTQmRMbVp2Y2tWaFkyZ29JR1oxYm1OMGFXOXVLQ0J1SUNrZ2UxeHVYSFJjZEZ4MFhIUnZMblJ5YVdkblpYSW9JRzRzSUh0Y2JseDBYSFJjZEZ4MFhIUjBZWEpuWlhRNklHVXNYRzVjZEZ4MFhIUmNkRngwY21WbmFXOXVPaUJjSW1sdWRHVnVkRndpTEZ4dVhIUmNkRngwWEhSY2RIUjVjR1U2SUc0c1hHNWNkRngwWEhSY2RGeDBaR0YwWVRvZ1puVnVZM1JwYjI0b0lIUXNJR1VnS1NCN1hHNWNkRngwWEhSY2RGeDBYSFIyWVhJZ2JpQTlJSE11WkdWamIyUmxWVkpNS0NCbElDazdYRzVjZEZ4MFhIUmNkRngwWEhSemQybDBZMmdnS0NCMElDa2dlMXh1WEhSY2RGeDBYSFJjZEZ4MFhIUmpZWE5sWENKbVlYWnZjbWwwWlZ3aU9seHVYSFJjZEZ4MFhIUmNkRngwWEhSallYTmxYQ0pzYVd0bFhDSTZYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBjbVYwZFhKdUlIc2dkSGRsWlhSZmFXUTZJRzR1ZEhkbFpYUmZhV1FnZlR0Y2JseDBYSFJjZEZ4MFhIUmNkRngwWTJGelpWd2labTlzYkc5M1hDSTZYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBjbVYwZFhKdUlIdGNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkSE5qY21WbGJsOXVZVzFsT2lCdUxuTmpjbVZsYmw5dVlXMWxMRnh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwZFhObGNsOXBaRG9nYmk1MWMyVnlYMmxrWEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwZlR0Y2JseDBYSFJjZEZ4MFhIUmNkRngwWTJGelpWd2ljbVYwZDJWbGRGd2lPbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkSEpsZEhWeWJpQjdJSE52ZFhKalpWOTBkMlZsZEY5cFpEb2diaTUwZDJWbGRGOXBaQ0I5TzF4dVhIUmNkRngwWEhSY2RGeDBYSFJrWldaaGRXeDBPbHh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkSEpsZEhWeWJpQjdmVnh1WEhSY2RGeDBYSFJjZEZ4MGZWeHVYSFJjZEZ4MFhIUmNkSDBvSUhVc0lIUWdLVnh1WEhSY2RGeDBYSFI5SUNsY2JseDBYSFJjZEgwZ0tTbGNibHgwWEhSOUxDQjBMbVY0Y0c5eWRITWdQU0IxWEc1Y2RIMHNJR1oxYm1OMGFXOXVLQ0IwTENCbElDa2dlMXh1WEhSY2RIUXVaWGh3YjNKMGN5QTlJSHRjYmx4MFhIUmNkR2RsZEZScGJXVjZiMjVsVDJabWMyVjBPaUJtZFc1amRHbHZiaWdwSUh0Y2JseDBYSFJjZEZ4MGRtRnlJSFFnUFNBb2JtVjNJRVJoZEdVcExuUnZVM1J5YVc1bktDa3ViV0YwWTJnb0lDOG9SMDFVV3lzdFhUOWNYR1FyS1M4Z0tUdGNibHgwWEhSY2RGeDBjbVYwZFhKdUlIUWdKaVlnZEZzZ01DQmRJSHg4SUZ3aVIwMVVYQ0pjYmx4MFhIUmNkSDFjYmx4MFhIUjlYRzVjZEgwc0lHWjFibU4wYVc5dUtDQjBMQ0JsTENCdUlDa2dlMXh1WEhSY2RIWmhjaUJ5SUQwZ2JpZ2dOQ0FwTENCcElEMGdiaWdnT1NBcExDQnZJRDBnYmlnZ01pQXBMQ0J6SUQwZ2JpZ2dNQ0FwTENCaElEMGdiaWdnTVRFZ0tTd2dkU0E5SUZ3aVkySmNJaXdnWXlBOUlEQTdYRzVjZEZ4MGRDNWxlSEJ2Y25SeklEMGdlMXh1WEhSY2RGeDBabVYwWTJnNklHWjFibU4wYVc5dUtDQjBMQ0JsTENCdUxDQmtJQ2tnZTF4dVhIUmNkRngwWEhSMllYSWdaaXdnYkN3Z2FEdGNibHgwWEhSY2RGeDBjbVYwZFhKdUlHUWdQU0JtZFc1amRHbHZiaWdnZENBcElIdGNibHgwWEhSY2RGeDBYSFJwWmlBb0lIUWdLU0I3WEc1Y2RGeDBYSFJjZEZ4MFhIUnlaWFIxY200Z2RDNXlaWEJzWVdObEtDQXZXMTVjWEhja1hTOW5MQ0JjSWw5Y0lpQXBYRzVjZEZ4MFhIUmNkRngwZlZ4dVhIUmNkRngwWEhSOUtDQmtJSHg4SUhVZ0t5QmpJQ3NySUNrc0lHWWdQU0JwTG1aMWJHeFFZWFJvS0NCYlhHNWNkRngwWEhSY2RGeDBYQ0pqWVd4c1ltRmphM05jSWl4Y2JseDBYSFJjZEZ4MFhIUmtYRzVjZEZ4MFhIUmNkRjBnS1N3Z2JDQTlJSEl1WTNKbFlYUmxSV3hsYldWdWRDZ2dYQ0p6WTNKcGNIUmNJaUFwTENCb0lEMGdibVYzSUc4c0lHVWdQU0J6TG1GMVp5Z2dlMzBzSUdVc0lIdGNibHgwWEhSY2RGeDBYSFJqWVd4c1ltRmphem9nWml4Y2JseDBYSFJjZEZ4MFhIUnpkWEJ3Y21WemMxOXlaWE53YjI1elpWOWpiMlJsY3pvZ0lUQmNibHgwWEhSY2RGeDBmU0FwTENCcExuTmxkQ2dnVzF3aVkyRnNiR0poWTJ0elhDSXNJR1JkTENCbWRXNWpkR2x2YmlnZ2RDQXBJSHRjYmx4MFhIUmNkRngwWEhSMllYSWdaVHRjYmx4MFhIUmNkRngwWEhSMElEMGdLR1VnUFNCdUtDQjBJSHg4SUNFeElDa3BMbkpsYzNBc0lHVXVjM1ZqWTJWemN5QS9JR2d1Y21WemIyeDJaU2dnZENBcElEb2dhQzV5WldwbFkzUW9JSFFnS1N3Z2JDNXZibXh2WVdRZ1BTQnNMbTl1Y21WaFpIbHpkR0YwWldOb1lXNW5aU0E5SUc1MWJHd3NJR3d1Y0dGeVpXNTBUbTlrWlNBbUppQnNMbkJoY21WdWRFNXZaR1V1Y21WdGIzWmxRMmhwYkdRb0lHd2dLU3dnYVM1MWJuTmxkQ2dnVzF4dVhIUmNkRngwWEhSY2RGeDBYQ0pqWVd4c1ltRmphM05jSWl4Y2JseDBYSFJjZEZ4MFhIUmNkR1JjYmx4MFhIUmNkRngwWEhSZElDbGNibHgwWEhSY2RGeDBmU0FwTENCc0xtOXVaWEp5YjNJZ1BTQm1kVzVqZEdsdmJpZ3BJSHRjYmx4MFhIUmNkRngwWEhSb0xuSmxhbVZqZENnZ2JtVjNJRVZ5Y205eUtDQmNJbVpoYVd4bFpDQjBieUJtWlhSamFDQmNJaUFySUd3dWMzSmpJQ2tnS1Z4dVhIUmNkRngwWEhSOUxDQnNMbk55WXlBOUlHRXVkWEpzS0NCMExDQmxJQ2tzSUd3dVlYTjVibU1nUFNCY0ltRnplVzVqWENJc0lISXVZbTlrZVM1aGNIQmxibVJEYUdsc1pDZ2diQ0FwTENCb0xuQnliMjFwYzJWY2JseDBYSFJjZEgxY2JseDBYSFI5WEc1Y2RIMHNJR1oxYm1OMGFXOXVLQ0IwTENCbExDQnVJQ2tnZTF4dVhIUmNkSFpoY2lCeUlEMGdiaWdnTWlBcExDQnBJRDBnYmlnZ01UQTFJQ2tzSUc4Z1BTQnVLQ0EzSUNrN1hHNWNibHgwWEhSbWRXNWpkR2x2YmlCektDQjBJQ2tnZTF4dVhIUmNkRngwZEdocGN5NWZhVzV3ZFhSelVYVmxkV1VnUFNCYlhTd2dkR2hwY3k1ZmRHRnpheUE5SUhRc0lIUm9hWE11WDJoaGMwWnNkWE5vUW1WbGJsTmphR1ZrZFd4bFpDQTlJQ0V4WEc1Y2RGeDBmVnh1WEc1Y2RGeDBjeTV3Y205MGIzUjVjR1V1WVdSa0lEMGdablZ1WTNScGIyNG9JSFFnS1NCN1hHNWNkRngwWEhSMllYSWdaU0E5SUc1bGR5QnlPMXh1WEhSY2RGeDBjbVYwZFhKdUlIUm9hWE11WDJsdWNIVjBjMUYxWlhWbExuQjFjMmdvSUh0Y2JseDBYSFJjZEZ4MGFXNXdkWFE2SUhRc1hHNWNkRngwWEhSY2RIUmhjMnRFYjI1bFJHVm1aWEp5WldRNklHVmNibHgwWEhSY2RIMGdLU3dnZEdocGN5NWZhR0Z6Um14MWMyaENaV1Z1VTJOb1pXUjFiR1ZrSUh4OElDaDBhR2x6TGw5b1lYTkdiSFZ6YUVKbFpXNVRZMmhsWkhWc1pXUWdQU0FoTUN3Z2FTZ2dieWdnZEdocGN5NWZabXgxYzJnc0lIUm9hWE1nS1NBcEtTd2daUzV3Y205dGFYTmxYRzVjZEZ4MGZTd2djeTV3Y205MGIzUjVjR1V1WDJac2RYTm9JRDBnWm5WdVkzUnBiMjRvS1NCN1hHNWNkRngwWEhSMGNua2dlMXh1WEhSY2RGeDBYSFIwYUdsekxsOTBZWE5yTG1OaGJHd29JRzUxYkd3c0lIUm9hWE11WDJsdWNIVjBjMUYxWlhWbElDbGNibHgwWEhSY2RIMGdZMkYwWTJnZ0tDQjBJQ2tnZTF4dVhIUmNkRngwWEhSMGFHbHpMbDlwYm5CMWRITlJkV1YxWlM1bWIzSkZZV05vS0NCbWRXNWpkR2x2YmlnZ1pTQXBJSHRjYmx4MFhIUmNkRngwWEhSbExuUmhjMnRFYjI1bFJHVm1aWEp5WldRdWNtVnFaV04wS0NCMElDbGNibHgwWEhSY2RGeDBmU0FwWEc1Y2RGeDBYSFI5WEc1Y2RGeDBYSFIwYUdsekxsOXBibkIxZEhOUmRXVjFaU0E5SUZ0ZExDQjBhR2x6TGw5b1lYTkdiSFZ6YUVKbFpXNVRZMmhsWkhWc1pXUWdQU0FoTVZ4dVhIUmNkSDBzSUhRdVpYaHdiM0owY3lBOUlITmNibHgwZlN3Z1puVnVZM1JwYjI0b0lIUXNJR1VnS1NCN1hHNWNkRngwZEM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0b0lIUXNJR1VnS1NCN1hHNWNkRngwWEhSeVpYUjFjbTRnZEM1eVpXUjFZMlVvSUdaMWJtTjBhVzl1S0NCMExDQnVJQ2tnZTF4dVhIUmNkRngwWEhSMllYSWdjaUE5SUdVb0lHNGdLVHRjYmx4MFhIUmNkRngwY21WMGRYSnVJSFJiSUhJZ1hTQTlJSFJiSUhJZ1hTQjhmQ0JiWFN3Z2RGc2djaUJkTG5CMWMyZ29JRzRnS1N3Z2RGeHVYSFJjZEZ4MGZTd2dlMzBnS1Z4dVhIUmNkSDFjYmx4MGZTd2dablZ1WTNScGIyNG9JSFFzSUdVc0lHNGdLU0I3WEc1Y2RGeDBkbUZ5SUhJZ1BTQnVLQ0EwSUNrc0lHa2dQU0J1S0NBNElDa3NJRzhnUFNCdUtDQXpJQ2s3WEc1Y2JseDBYSFJtZFc1amRHbHZiaUJ6S0NCMExDQmxJQ2tnZTF4dVhIUmNkRngwZG1GeUlHNHNJSEk3WEc1Y2RGeDBYSFJ5WlhSMWNtNGdaU0E5SUdVZ2ZId2dhU3dnTDE1b2RIUndjejg2WEZ3dlhGd3ZMeTUwWlhOMEtDQjBJQ2tnUHlCMElEb2dMMTVjWEM5Y1hDOHZMblJsYzNRb0lIUWdLU0EvSUdVdWNISnZkRzlqYjJ3Z0t5QjBJRG9nS0c0Z1BTQmxMbWh2YzNRZ0t5QW9aUzV3YjNKMExteGxibWQwYUNBL0lGd2lPbHdpSUNzZ1pTNXdiM0owSURvZ1hDSmNJaWtzSURBZ0lUMDlJSFF1YVc1a1pYaFBaaWdnWENJdlhDSWdLU0FtSmlBb0tISWdQU0JsTG5CaGRHaHVZVzFsTG5Od2JHbDBLQ0JjSWk5Y0lpQXBLUzV3YjNBb0tTd2djaTV3ZFhOb0tDQjBJQ2tzSUhRZ1BTQmNJaTljSWlBcklISXVhbTlwYmlnZ1hDSXZYQ0lnS1Nrc0lGdGNibHgwWEhSY2RGeDBaUzV3Y205MGIyTnZiQ3hjYmx4MFhIUmNkRngwWENJdkwxd2lMRnh1WEhSY2RGeDBYSFJ1TEZ4dVhIUmNkRngwWEhSMFhHNWNkRngwWEhSZExtcHZhVzRvSUZ3aVhDSWdLU2xjYmx4MFhIUjlYRzVjYmx4MFhIUjBMbVY0Y0c5eWRITWdQU0I3WEc1Y2RGeDBYSFJoWW5OdmJIVjBhWHBsT2lCekxGeHVYSFJjZEZ4MFoyVjBRMkZ1YjI1cFkyRnNWVkpNT2lCbWRXNWpkR2x2YmlncElIdGNibHgwWEhSY2RGeDBabTl5SUNnZ2RtRnlJSFFzSUdVZ1BTQnlMbWRsZEVWc1pXMWxiblJ6UW5sVVlXZE9ZVzFsS0NCY0lteHBibXRjSWlBcExDQnVJRDBnTURzZ1pWc2diaUJkT3lCdUlDc3JJQ2tnZTF4dVhIUmNkRngwWEhSY2RHbG1JQ2dnWENKallXNXZibWxqWVd4Y0lpQTlQU0FvZENBOUlHVmJJRzRnWFNrdWNtVnNJQ2tnZTF4dVhIUmNkRngwWEhSY2RGeDBjbVYwZFhKdUlITW9JSFF1YUhKbFppQXBYRzVjZEZ4MFhIUmNkRngwZlZ4dVhIUmNkRngwWEhSOVhHNWNkRngwWEhSOUxGeHVYSFJjZEZ4MFoyVjBVMk55WldWdVRtRnRaVVp5YjIxUVlXZGxPaUJtZFc1amRHbHZiaWdwSUh0Y2JseDBYSFJjZEZ4MFptOXlJQ2hjYmx4MFhIUmNkRngwWEhSMllYSWdkQ3dnWlN3Z2Jpd2dhU0E5SUZ0Y2JseDBYSFJjZEZ4MFhIUmNkSEl1WjJWMFJXeGxiV1Z1ZEhOQ2VWUmhaMDVoYldVb0lGd2lZVndpSUNrc1hHNWNkRngwWEhSY2RGeDBYSFJ5TG1kbGRFVnNaVzFsYm5SelFubFVZV2RPWVcxbEtDQmNJbXhwYm10Y0lpQXBYRzVjZEZ4MFhIUmNkRngwWFN3Z2N5QTlJREFzSUdFZ1BTQXdMQ0IxSUQwZ0wxeGNZbTFsWEZ4aUx6c2dkQ0E5SUdsYklITWdYVHNnY3lBcksxeHVYSFJjZEZ4MFhIUXBJSHRjYmx4MFhIUmNkRngwWEhSbWIzSWdLQ0JoSUQwZ01Ec2daU0E5SUhSYklHRWdYVHNnWVNBckt5QXBJSHRjYmx4MFhIUmNkRngwWEhSY2RHbG1JQ2dnZFM1MFpYTjBLQ0JsTG5KbGJDQXBJQ1ltSUNodUlEMGdieTV6WTNKbFpXNU9ZVzFsS0NCbExtaHlaV1lnS1NrZ0tTQjdYRzVjZEZ4MFhIUmNkRngwWEhSY2RISmxkSFZ5YmlCdVhHNWNkRngwWEhSY2RGeDBYSFI5WEc1Y2RGeDBYSFJjZEZ4MGZWeHVYSFJjZEZ4MFhIUjlYRzVjZEZ4MFhIUjlYRzVjZEZ4MGZWeHVYSFI5TENCbWRXNWpkR2x2YmlnZ2RDd2daU3dnYmlBcElIdGNibHgwWEhSMllYSWdjaUE5SUc0b0lEZ2dLU3dnYVNBOUlDOWVXMTRqUDEwcVhGd3VLR2R2ZG54dGFXd3BLRHBjWEdRcktUOG9XeU0vWFM0cUtUOGtMMmtzSUc4Z1BTQjdmVHRjYmx4dVhIUmNkR1oxYm1OMGFXOXVJSE1vSUhRZ0tTQjdYRzVjZEZ4MFhIUnlaWFIxY200Z2RDQnBiaUJ2SUQ4Z2Ixc2dkQ0JkSURvZ2Ixc2dkQ0JkSUQwZ2FTNTBaWE4wS0NCMElDbGNibHgwWEhSOVhHNWNibHgwWEhSMExtVjRjRzl5ZEhNZ1BTQjdYRzVjZEZ4MFhIUnBjMVZ5YkZObGJuTnBkR2wyWlRvZ2N5eGNibHgwWEhSY2RHbHpTRzl6ZEZCaFoyVlRaVzV6YVhScGRtVTZJR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWEhSeVpYUjFjbTRnY3lnZ2NpNW9iM04wSUNsY2JseDBYSFJjZEgxY2JseDBYSFI5WEc1Y2RIMHNJR1oxYm1OMGFXOXVLQ0IwTENCbExDQnVJQ2tnZTF4dVhIUmNkSFpoY2lCeUlEMGdiaWdnTWpBZ0tTd2dhU0E5SUc0b0lEVTBJQ2tzSUc4Z1BTQnVLQ0F4TVNBcExDQnpJRDBnYmlnZ01qRWdLU3dnWVNBOUlHNG9JREFnS1N3Z2RTQTlJRzRvSURrZ0tTNW5aWFFvSUZ3aWMyTnlhV0psUTJGc2JHSmhZMnRjSWlBcExGeHVYSFJjZEZ4MFl5QTlJREl3T0RNc0lHUWdQU0JiWFN3Z1ppQTlJRzh1ZFhKc0tDQnpMa05NU1VWT1ZGOUZWa1ZPVkY5RlRrUlFUMGxPVkN3Z2UxeHVYSFJjZEZ4MFhIUmtiblE2SURBc1hHNWNkRngwWEhSY2RHdzZJRndpWENKY2JseDBYSFJjZEgwZ0tTd2diQ0E5SUdWdVkyOWtaVlZTU1VOdmJYQnZibVZ1ZENnZ1ppQXBMbXhsYm1kMGFEdGNibHh1WEhSY2RHWjFibU4wYVc5dUlHZ29JSFFzSUdVc0lHNHNJSElnS1NCN1hHNWNkRngwWEhSMllYSWdhU0E5SUNGaExtbHpUMkpxWldOMEtDQjBJQ2tzSUc4Z1BTQWhJV1VnSmlZZ0lXRXVhWE5QWW1wbFkzUW9JR1VnS1R0Y2JseDBYSFJjZEdrZ2ZId2dieUI4ZkNBb2RTQW1KaUIxS0NCaGNtZDFiV1Z1ZEhNZ0tTd2djQ2dnY3k1bWIzSnRZWFJEYkdsbGJuUkZkbVZ1ZEU1aGJXVnpjR0ZqWlNnZ2RDQXBMQ0J6TG1admNtMWhkRU5zYVdWdWRFVjJaVzUwUkdGMFlTZ2daU3dnYml3Z2NpQXBMQ0J6TGtOTVNVVk9WRjlGVmtWT1ZGOUZUa1JRVDBsT1ZDQXBLVnh1WEhSY2RIMWNibHh1WEhSY2RHWjFibU4wYVc5dUlIQW9JSFFzSUdVc0lHNGdLU0I3WEc1Y2RGeDBYSFIyWVhJZ2Npd2dkVHRjYmx4MFhIUmNkRzRnSmlZZ1lTNXBjMDlpYW1WamRDZ2dkQ0FwSUNZbUlHRXVhWE5QWW1wbFkzUW9JR1VnS1NBbUppQW9hUzVzYjJjb0lIUXNJR1VnS1N3Z2NpQTlJSE11Wm14aGRIUmxia05zYVdWdWRFVjJaVzUwVUdGNWJHOWhaQ2dnZEN3Z1pTQXBMQ0IxSUQwZ2V5QnNPaUJ6TG5OMGNtbHVaMmxtZVNnZ2NpQXBJSDBzSUhNdWJtOTBhV05sVTJWbGJpZ2dkQ0FwSUNZbUlDaDFMbTV2ZEdsalpWOXpaV1Z1SUQwZ0lUQXBMQ0J5TG1SdWRDQW1KaUFvZFM1a2JuUWdQU0F4S1N3Z2R5Z2dieTUxY213b0lHNHNJSFVnS1NBcEtWeHVYSFJjZEgxY2JseHVYSFJjZEdaMWJtTjBhVzl1SUcwb0lIUXNJR1VzSUc0c0lISWdLU0I3WEc1Y2RGeDBYSFIyWVhJZ2FTQTlJQ0ZoTG1selQySnFaV04wS0NCMElDa3NJRzhnUFNBaElXVWdKaVlnSVdFdWFYTlBZbXBsWTNRb0lHVWdLVHRjYmx4MFhIUmNkR2xtSUNnZ0lXa2dKaVlnSVc4Z0tTQjdYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQjJLQ0J6TG1ac1lYUjBaVzVEYkdsbGJuUkZkbVZ1ZEZCaGVXeHZZV1FvSUhNdVptOXliV0YwUTJ4cFpXNTBSWFpsYm5ST1lXMWxjM0JoWTJVb0lIUWdLU3dnY3k1bWIzSnRZWFJEYkdsbGJuUkZkbVZ1ZEVSaGRHRW9JR1VzSUc0c0lISWdLU0FwSUNsY2JseDBYSFJjZEgxY2JseDBYSFI5WEc1Y2JseDBYSFJtZFc1amRHbHZiaUIyS0NCMElDa2dlMXh1WEhSY2RGeDBjbVYwZFhKdUlHUXVjSFZ6YUNnZ2RDQXBMQ0JrWEc1Y2RGeDBmVnh1WEc1Y2RGeDBablZ1WTNScGIyNGdaeWdnZENBcElIdGNibHgwWEhSY2RISmxkSFZ5YmlCbGJtTnZaR1ZWVWtsRGIyMXdiMjVsYm5Rb0lIUWdLUzVzWlc1bmRHZ2dLeUF6WEc1Y2RGeDBmVnh1WEc1Y2RGeDBablZ1WTNScGIyNGdkeWdnZENBcElIdGNibHgwWEhSY2RISmxkSFZ5YmlBb2JtVjNJRWx0WVdkbEtTNXpjbU1nUFNCMFhHNWNkRngwZlZ4dVhHNWNkRngwZEM1bGVIQnZjblJ6SUQwZ2UxeHVYSFJjZEZ4MFkyRnVSbXgxYzJoUGJtVkpkR1Z0T2lCbWRXNWpkR2x2YmlnZ2RDQXBJSHRjYmx4MFhIUmNkRngwZG1GeUlHVWdQU0JuS0NCekxuTjBjbWx1WjJsbWVTZ2dkQ0FwSUNrN1hHNWNkRngwWEhSY2RISmxkSFZ5YmlCc0lDc2daU0E4SUdOY2JseDBYSFJjZEgwc1hHNWNkRngwWEhSZlpXNXhkV1YxWlZKaGQwOWlhbVZqZERvZ2RpeGNibHgwWEhSY2RITmpjbWxpWlRvZ2NDeGNibHgwWEhSY2RHTnNhV1Z1ZEVWMlpXNTBPaUJvTEZ4dVhIUmNkRngwWTJ4cFpXNTBSWFpsYm5ReU9pQm1kVzVqZEdsdmJpZ2dkQ3dnWlN3Z2JpQXBJSHRjYmx4MFhIUmNkRngwY21WMGRYSnVJR2dvSUhRc0lHVXNJRzRzSURJZ0tWeHVYSFJjZEZ4MGZTeGNibHgwWEhSY2RHVnVjWFZsZFdWRGJHbGxiblJGZG1WdWREb2diU3hjYmx4MFhIUmNkR1pzZFhOb1EyeHBaVzUwUlhabGJuUnpPaUJtZFc1amRHbHZiaWdwSUh0Y2JseDBYSFJjZEZ4MGRtRnlJSFE3WEc1Y2RGeDBYSFJjZEhKbGRIVnliaUJrTG14bGJtZDBhQ0ErSURFZ0ppWWdiU2dnZTF4dVhIUmNkRngwWEhSY2RIQmhaMlU2SUZ3aWQybGtaMlYwYzE5cWMxd2lMRnh1WEhSY2RGeDBYSFJjZEdOdmJYQnZibVZ1ZERvZ1hDSnpZM0pwWW1WZmNHbDRaV3hjSWl4Y2JseDBYSFJjZEZ4MFhIUmhZM1JwYjI0NklGd2lZbUYwWTJoZmJHOW5YQ0pjYmx4MFhIUmNkRngwZlN3Z2UzMGdLU3dnZENBOUlHUXNJR1FnUFNCYlhTd2dkQzV5WldSMVkyVW9JR1oxYm1OMGFXOXVLQ0JsTENCdUxDQnlJQ2tnZTF4dVhIUmNkRngwWEhSY2RIWmhjaUJwSUQwZ1pTNXNaVzVuZEdnc0lHOGdQU0JwSUNZbUlHVmJJR2tnTFNBeElGMDdYRzVjZEZ4MFhIUmNkRngwY21WMGRYSnVJSElnS3lBeElEMDlJSFF1YkdWdVozUm9JQ1ltSUc0dVpYWmxiblJmYm1GdFpYTndZV05sSUNZbUlGd2lZbUYwWTJoZmJHOW5YQ0lnUFQwZ2JpNWxkbVZ1ZEY5dVlXMWxjM0JoWTJVdVlXTjBhVzl1SUNZbUlDaHVMbTFsYzNOaFoyVWdQU0JiWEc1Y2RGeDBYSFJjZEZ4MFhIUmNJbVZ1ZEhKcFpYTTZYQ0lnS3lCeUxGeHVYSFJjZEZ4MFhIUmNkRngwWENKeVpYRjFaWE4wY3pwY0lpQXJJR2xjYmx4MFhIUmNkRngwWEhSZExtcHZhVzRvSUZ3aUwxd2lJQ2twTENCbWRXNWpkR2x2YmlCMEtDQmxJQ2tnZTF4dVhIUmNkRngwWEhSY2RGeDBjbVYwZFhKdUlFRnljbUY1TG1selFYSnlZWGtvSUdVZ0tTQjhmQ0FvWlNBOUlGdGxYU2tzSUdVdWNtVmtkV05sS0NCbWRXNWpkR2x2YmlnZ1pTd2diaUFwSUh0Y2JseDBYSFJjZEZ4MFhIUmNkRngwZG1GeUlISXNJR2tnUFNCekxuTjBjbWx1WjJsbWVTZ2diaUFwTENCdklEMGdaeWdnYVNBcE8xeHVYSFJjZEZ4MFhIUmNkRngwWEhSeVpYUjFjbTRnYkNBcklHOGdQQ0JqSUQ4Z1pTQTlJR1V1WTI5dVkyRjBLQ0JwSUNrZ09pQW9jaUE5SUhNdWMzQnNhWFJNYjJkRmJuUnllU2dnYmlBcEtTNXNaVzVuZEdnZ1BpQXhJQ1ltSUNobElEMGdaUzVqYjI1allYUW9JSFFvSUhJZ0tTQXBLU3dnWlZ4dVhIUmNkRngwWEhSY2RGeDBmU3dnVzEwZ0tWeHVYSFJjZEZ4MFhIUmNkSDBvSUc0Z0tTNW1iM0pGWVdOb0tDQm1kVzVqZEdsdmJpZ2dkQ0FwSUh0Y2JseDBYSFJjZEZ4MFhIUmNkSFpoY2lCdUlEMGdaeWdnZENBcE8xeHVYSFJjZEZ4MFhIUmNkRngwS0NGdklIeDhJRzh1ZFhKc1RHVnVaM1JvSUNzZ2JpQStJR01wSUNZbUlDaHZJRDBnZTF4dVhIUmNkRngwWEhSY2RGeDBYSFIxY214TVpXNW5kR2c2SUd3c1hHNWNkRngwWEhSY2RGeDBYSFJjZEdsMFpXMXpPaUJiWFZ4dVhIUmNkRngwWEhSY2RGeDBmU3dnWlM1d2RYTm9LQ0J2SUNrcExDQnZMblZ5YkV4bGJtZDBhQ0FyUFNCdUxDQnZMbWwwWlcxekxuQjFjMmdvSUhRZ0tWeHVYSFJjZEZ4MFhIUmNkSDBnS1N3Z1pWeHVYSFJjZEZ4MFhIUjlMQ0JiWFNBcExtMWhjQ2dnWm5WdVkzUnBiMjRvSUhRZ0tTQjdYRzVjZEZ4MFhIUmNkRngwZG1GeUlHVWdQU0I3SUd3NklIUXVhWFJsYlhNZ2ZUdGNibHgwWEhSY2RGeDBYSFJ5WlhSMWNtNGdjaTVsYm1GaWJHVmtLQ2tnSmlZZ0tHVXVaRzUwSUQwZ01Ta3NJSGNvSUc4dWRYSnNLQ0J6TGtOTVNVVk9WRjlGVmtWT1ZGOUZUa1JRVDBsT1ZDd2daU0FwSUNsY2JseDBYSFJjZEZ4MGZTQXBYRzVjZEZ4MFhIUjlMRnh1WEhSY2RGeDBhVzUwWlhKaFkzUnBiMjQ2SUdaMWJtTjBhVzl1S0NCMExDQmxMQ0J1TENCeUlDa2dlMXh1WEhSY2RGeDBYSFIyWVhJZ2FTQTlJSE11WlhoMGNtRmpkRlJsY20xelJuSnZiVVJQVFNnZ2RDNTBZWEpuWlhRZ2ZId2dkQzV6Y21ORmJHVnRaVzUwSUNrN1hHNWNkRngwWEhSY2RHa3VZV04wYVc5dUlEMGdjaUI4ZkNCY0ltTnNhV05yWENJc0lHZ29JR2tzSUdVc0lHNGdLVnh1WEhSY2RGeDBmVnh1WEhSY2RIMWNibHgwZlN3Z1puVnVZM1JwYjI0b0lIUXNJR1VzSUc0Z0tTQjdYRzVjZEZ4MGRtRnlJSElnUFNCdUtDQXdJQ2tzSUdrZ1BTQnVLQ0EwTXlBcE8xeHVYSFJjZEhRdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUtDQjBMQ0JsSUNrZ2UxeHVYSFJjZEZ4MGNtVjBkWEp1SUdrb0lIUXNJR1VnS1NBL0lGdDBYU0E2SUhJdWRHOVNaV0ZzUVhKeVlYa29JSFF1Y1hWbGNubFRaV3hsWTNSdmNrRnNiQ2dnWlNBcElDbGNibHgwWEhSOVhHNWNkSDBzSUdaMWJtTjBhVzl1S0NCMExDQmxJQ2tnZTF4dVhIUmNkSFF1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0NCMExDQmxMQ0J1SUNrZ2UxeHVYSFJjZEZ4MFptOXlJQ2dnZG1GeUlISXNJR2tnUFNBd095QnBJRHdnZEM1c1pXNW5kR2c3SUdrZ0t5c2dLU0I3WEc1Y2RGeDBYSFJjZEdsbUlDZ2djaUE5SUdVdVkyRnNiQ2dnYml3Z2RGc2dhU0JkTENCcExDQjBJQ2tnS1NCN1hHNWNkRngwWEhSY2RGeDBjbVYwZFhKdUlISmNibHgwWEhSY2RGeDBmVnh1WEhSY2RGeDBmVnh1WEhSY2RIMWNibHgwZlN3Z1puVnVZM1JwYjI0b0lIUXNJR1VnS1NCN1hHNWNkRngwZEM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0b0tTQjdYRzVjZEZ4MFhIUnlaWFIxY200Z1RXRjBhQzVtYkc5dmNpZ2dLeUJ1WlhjZ1JHRjBaU0F2SURsbE5TQXBYRzVjZEZ4MGZWeHVYSFI5TENCbWRXNWpkR2x2YmlnZ2RDd2daU3dnYmlBcElIdGNibHgwWEhSMllYSWdjaUE5SUc0b0lERXlJQ2s3WEc1Y2RGeDBkQzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRvSUhRZ0tTQjdYRzVjZEZ4MFhIUjJZWElnWlN3Z2JqdGNibHgwWEhSY2RISmxkSFZ5YmlCbElEMGdkQzVvWldGa1pYSnpJQ1ltSUhRdWFHVmhaR1Z5Y3k1emRHRjBkWE1zSUNFb2JpQTlJSFFnSmlZZ0lYUXVaWEp5YjNJZ0ppWWdNakF3SUQwOVBTQmxLU0FtSmlCMExtaGxZV1JsY25NZ0ppWWdkQzVvWldGa1pYSnpMbTFsYzNOaFoyVWdKaVlnY2k1d2RXSnNhV05GY25KdmNpZ2dkQzVvWldGa1pYSnpMbTFsYzNOaFoyVWdLU3dnZTF4dVhIUmNkRngwWEhSemRXTmpaWE56T2lCdUxGeHVYSFJjZEZ4MFhIUnlaWE53T2lCMFhHNWNkRngwWEhSOVhHNWNkRngwZlZ4dVhIUjlMQ0JtZFc1amRHbHZiaWdnZEN3Z1pTd2diaUFwSUh0Y2JseDBYSFIyWVhJZ2NpQTlJRzRvSURNM0lDa3NJR2tnUFNCdUtDQXlNU0FwTzF4dVhIUmNkSFF1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0NCMExDQmxMQ0J1TENCdklDa2dlMXh1WEhSY2RGeDBjaTV6WTNKcFltVW9JR2t1Wm05eWJXRjBRMnhwWlc1MFJYWmxiblJPWVcxbGMzQmhZMlVvSUh0Y2JseDBYSFJjZEZ4MFkyeHBaVzUwT2lCY0luUm1kMXdpTEZ4dVhIUmNkRngwWEhSd1lXZGxPaUJjSW1Sa1oxd2lMRnh1WEhSY2RGeDBYSFJ6WldOMGFXOXVPaUIwTEZ4dVhIUmNkRngwWEhSaFkzUnBiMjQ2SUZ3aVpYaHdaWEpwYldWdWRGd2lYRzVjZEZ4MFhIUjlJQ2tzSUh0Y2JseDBYSFJjZEZ4MFpYaHdaWEpwYldWdWRGOXJaWGs2SUhRc1hHNWNkRngwWEhSY2RHSjFZMnRsZERvZ1pTeGNibHgwWEhSY2RGeDBkbVZ5YzJsdmJqb2diaXhjYmx4MFhIUmNkRngwWkdGMFlUb2diMXh1WEhSY2RGeDBmU3dnSVRBZ0tWeHVYSFJjZEgxY2JseDBmU3dnWm5WdVkzUnBiMjRvSUhRc0lHVXNJRzRnS1NCN1hHNWNkRngwZG1GeUlISXNJR2tnUFNCdUtDQXpNQ0FwTENCdklEMGdNRHRjYmx4dVhIUmNkR1oxYm1OMGFXOXVJSE1vS1NCN1hHNWNkRngwWEhSeUlDWW1JSEl1YkdWdVozUm9JRDA5UFNCdklDWW1JQ2hwTG1WdGFYUjBaWEl1ZEhKcFoyZGxjaWdnYVM1QlRFeGZWMGxFUjBWVVUxOUJUa1JmU1UxQlIwVlRYMHhQUVVSRlJDd2djaUFwTENCeUlEMGdiblZzYkNsY2JseDBYSFI5WEc1Y2JseDBYSFJwTG1WdGFYUjBaWEl1WW1sdVpDZ2dhUzVCVEV4ZlYwbEVSMFZVVTE5U1JVNUVSVkpmUlU1RUxDQm1kVzVqZEdsdmJpZ2dkQ0FwSUh0Y2JseDBYSFJjZEhJZ1BTQjBMbmRwWkdkbGRITXNJSE1vS1Z4dVhIUmNkSDBnS1N3Z2RDNWxlSEJ2Y25SeklEMGdlMXh1WEhSY2RGeDBjbVZ3YjNKMFNXMWhaMlZ6VEc5aFpFWnZja0ZYYVdSblpYUTZJR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWEhSdklDc3JMQ0J6S0NsY2JseDBYSFJjZEgxY2JseDBYSFI5WEc1Y2RIMHNJQ3dnTENBc0lDd2dMQ0FzSUN3Z0xDQm1kVzVqZEdsdmJpZ2dkQ3dnWlN3Z2JpQXBJSHRjYmx4MFhIUjJZWElnY2l3Z2FTQTlJRzRvSURJZ0tTd2dieUE5SUc0b0lEUWdLU3dnY3lBOUlHNG9JRGs0SUNrc0lHRWdQU0J1S0NBME9TQXBMQ0IxSUQwZ2JpZ2dPU0FwTENCaklEMGdiaWdnT1RrZ0tTd2daQ0E5SUc0b0lESTFJQ2tzSUdZZ1BTQnVLQ0F4TURJZ0tTeGNibHgwWEhSY2RHd2dQU0J1S0NBeE5UY2dLU3dnYUNBOUlHNG9JREUyTlNBcExDQndJRDBnYmlnZ01UWTJJQ2tzSUcwZ1BTQnVLQ0F6TUNBcExDQjJJRDBnYmlnZ016RWdLVHRjYmx4MFhIUnVLQ0F4TmpjZ0tTd2diUzVsYldsMGRHVnlMblJ5YVdkblpYSW9JRzB1VTFSQlVsUWdLU3dnZFM1elpYUW9JRndpZDJsa1oyVjBjeTVwYm1sMFhDSXNJQ0V3SUNrc0lHRXVjMlYwS0NCY0ltbHVhWFJjSWl3Z0lUQWdLU3dnY0NncExDQnlJRDBnYm1WM0lHa3NJSE11Wlhod2IzTmxVbVZoWkhsUWNtOXRhWE5sS0NCeUxuQnliMjFwYzJVc0lHRXVZbUZ6WlN3Z1hDSmZaVndpSUNrc0lHRXVjMlYwS0NCY0luZHBaR2RsZEhOY0lpd2diQ0FwTENCaExuTmxkQ2dnWENKM2FXUm5aWFJ6TG14dllXUmNJaXdnWmk1c2IyRmtJQ2tzSUdFdWMyVjBLQ0JjSW1WMlpXNTBjMXdpTENCa0lDa3NJR2dvSUdaMWJtTjBhVzl1S0NrZ2UxeHVYSFJjZEZ4MGRpNXNiMkZrS0Nrc0lISXVjbVZ6YjJ4MlpTZ2dZUzVpWVhObElDa3NJR011WVhSMFlXTm9WRzhvSUc4Z0tTd2daaTVzYjJGa1VHRm5aU2dwWEc1Y2RGeDBmU0FwWEc1Y2RIMHNJR1oxYm1OMGFXOXVLQ0IwTENCbElDa2dlMXh1WEhSY2RIUXVaWGh3YjNKMGN5QTlJRzVoZG1sbllYUnZjbHh1WEhSOUxDQm1kVzVqZEdsdmJpZ2dkQ3dnWlN3Z2JpQXBJSHRjYmx4MFhIUjJZWElnY2lBOUlHNG9JRGNnS1R0Y2JseDBYSFIwTG1WNGNHOXlkSE1nUFNCN1hHNWNkRngwWEhSbGVIQnZjMlZTWldGa2VWQnliMjFwYzJVNklHWjFibU4wYVc5dUtDQjBMQ0JsTENCdUlDa2dlMXh1WEhSY2RGeDBYSFJsTG5KbFlXUjVJRDBnY2lnZ2RDNTBhR1Z1TENCMElDa3NJRzRnSmlZZ1FYSnlZWGt1YVhOQmNuSmhlU2dnWlZzZ2JpQmRJQ2tnSmlZZ0tHVmJJRzRnWFM1bWIzSkZZV05vS0NCeUtDQjBMblJvWlc0c0lIUWdLU0FwTENCa1pXeGxkR1VnWlZzZ2JpQmRLVnh1WEhSY2RGeDBmVnh1WEhSY2RIMWNibHgwZlN3Z1puVnVZM1JwYjI0b0lIUXNJR1VzSUc0Z0tTQjdYRzVjZEZ4MGRtRnlJSElnUFNCdUtDQTRJQ2tzSUdrZ1BTQnVLQ0F6TmlBcExDQnZJRDBnYmlnZ016UWdLU3dnY3lBOUlHNG9JRGMwSUNrc0lHRWdQU0J1S0NBeklDazdYRzVjYmx4MFhIUm1kVzVqZEdsdmJpQjFLQ0IwSUNrZ2UxeHVYSFJjZEZ4MGRtRnlJR1VzSUc0c0lIVTdYRzVjZEZ4MFhIUjBMbUZzZEV0bGVTQjhmQ0IwTG0xbGRHRkxaWGtnZkh3Z2RDNXphR2xtZEV0bGVTQjhmQ0FvWlNBOUlHOHVZMnh2YzJWemRDZ2dablZ1WTNScGIyNG9JSFFnS1NCN1hHNWNkRngwWEhSY2RISmxkSFZ5YmlCY0lrRmNJaUE5UFQwZ2RDNTBZV2RPWVcxbElIeDhJRndpUVZKRlFWd2lJRDA5UFNCMExuUmhaMDVoYldWY2JseDBYSFJjZEgwc0lIUXVkR0Z5WjJWMElDa3BJQ1ltSUdFdWFYTkpiblJsYm5SVlVrd29JR1V1YUhKbFppQXBJQ1ltSUNodUlEMGdLRzRnUFNBb2JpQTlJRnRjYmx4MFhIUmNkRngwZFNBOUlHVXVhSEpsWml4Y2JseDBYSFJjZEZ4MFhDSnZjbWxuYVc1aGJGOXlaV1psY21WeVBWd2lJQ3NnY2k1b2NtVm1YRzVjZEZ4MFhIUmRMbXB2YVc0b0lDMGdNU0E5UFNCMUxtbHVaR1Y0VDJZb0lGd2lQMXdpSUNrZ1B5QmNJajljSWlBNklGd2lKbHdpSUNrcExuSmxjR3hoWTJVb0lDOWVhSFIwY0ZzNlhTOHNJRndpYUhSMGNITTZYQ0lnS1NrdWNtVndiR0ZqWlNnZ0wxNWNYQzljWEM4dkxDQmNJbWgwZEhCek9pOHZYQ0lnS1N3Z2N5NXZjR1Z1S0NCdUxDQmxJQ2tzSUdrdWNISmxkbVZ1ZEVSbFptRjFiSFFvSUhRZ0tTbGNibHgwWEhSOVhHNWNibHgwWEhSMExtVjRjRzl5ZEhNZ1BTQjdYRzVjZEZ4MFhIUmhkSFJoWTJoVWJ6b2dablZ1WTNScGIyNG9JSFFnS1NCN1hHNWNkRngwWEhSY2RIUXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ2dYQ0pqYkdsamExd2lMQ0IxTENBaE1TQXBYRzVjZEZ4MFhIUjlYRzVjZEZ4MGZWeHVYSFI5TENCbWRXNWpkR2x2YmlnZ2RDd2daU3dnYmlBcElIdGNibHgwWEhSMllYSWdjaXdnYVNBOUlHNG9JREVnS1N3Z2J5QTlJRzRvSURFd01TQXBMQ0J6SUQwZ2JpZ2dNellnS1N3Z1lTQTlJRzRvSURNMElDa3NJSFVnUFNCdUtDQXlNaUFwTENCaklEMGdiaWdnTXlBcExDQmtJRDBnYmlnZ01qUWdLU3dnWmlBOUlHNG9JREFnS1N4Y2JseDBYSFJjZEd3Z1BTQmNJbWx1ZEdWdWRGOWNJaXdnYUNBOUlHa3VjMk55WldWdUxuZHBaSFJvTENCd0lEMGdhUzV6WTNKbFpXNHVhR1ZwWjJoME8xeHVYRzVjZEZ4MFpuVnVZM1JwYjI0Z2JTZ2dkQ3dnWlNBcElIdGNibHgwWEhSY2RHWjFibU4wYVc5dUlHNG9JSFFnS1NCN1hHNWNkRngwWEhSY2RISmxkSFZ5YmlCTllYUm9Mbkp2ZFc1a0tDQjBJQzhnTWlBcFhHNWNkRngwWEhSOVhHNWNibHgwWEhSY2RISmxkSFZ5YmlCMElENGdaU0EvSUh0Y2JseDBYSFJjZEZ4MFkyOXZjbVJwYm1GMFpUb2dNQ3hjYmx4MFhIUmNkRngwYzJsNlpUb2daVnh1WEhSY2RGeDBmU0E2SUh0Y2JseDBYSFJjZEZ4MFkyOXZjbVJwYm1GMFpUb2diaWdnWlNBcElDMGdiaWdnZENBcExGeHVYSFJjZEZ4MFhIUnphWHBsT2lCMFhHNWNkRngwWEhSOVhHNWNkRngwZlZ4dVhHNWNkRngwWm5WdVkzUnBiMjRnZGlnZ2RDd2daU3dnYmlBcElIdGNibHgwWEhSY2RIWmhjaUJwTENCdk8xeHVYSFJjZEZ4MFpTQTlJSEl1Y0dGeWMyVW9JR1VnS1N3Z2JpQTlJRzRnZkh3Z2UzMHNJR2tnUFNCdEtDQmxMbmRwWkhSb0xDQnVMbmRwWkhSb0lIeDhJR2dnS1N3Z1pTNXNaV1owSUQwZ2FTNWpiMjl5WkdsdVlYUmxMQ0JsTG5kcFpIUm9JRDBnYVM1emFYcGxMQ0J2SUQwZ2JTZ2daUzVvWldsbmFIUXNJRzR1YUdWcFoyaDBJSHg4SUhBZ0tTd2daUzUwYjNBZ1BTQnZMbU52YjNKa2FXNWhkR1VzSUdVdWFHVnBaMmgwSUQwZ2J5NXphWHBsTENCMGFHbHpMbmRwYmlBOUlIUXNJSFJvYVhNdVptVmhkSFZ5WlhNZ1BTQm1kVzVqZEdsdmJpZ2dkQ0FwSUh0Y2JseDBYSFJjZEZ4MGRtRnlJR1VnUFNCYlhUdGNibHgwWEhSY2RGeDBjbVYwZFhKdUlHWXVabTl5U1c0b0lIUXNJR1oxYm1OMGFXOXVLQ0IwTENCdUlDa2dlMXh1WEhSY2RGeDBYSFJjZEdVdWNIVnphQ2dnZENBcklGd2lQVndpSUNzZ2JpQXBYRzVjZEZ4MFhIUmNkSDBnS1N3Z1pTNXFiMmx1S0NCY0lpeGNJaUFwWEc1Y2RGeDBYSFI5S0NCbElDbGNibHgwWEhSOVhHNWNibHgwWEhSeUlEMGdLRzVsZHlCdktTNWtaV1poZFd4MGN5Z2dlMXh1WEhSY2RGeDBkMmxrZEdnNklEVTFNQ3hjYmx4MFhIUmNkR2hsYVdkb2REb2dOVEl3TEZ4dVhIUmNkRngwY0dWeWMyOXVZV3hpWVhJNklGd2lNRndpTEZ4dVhIUmNkRngwZEc5dmJHSmhjam9nWENJd1hDSXNYRzVjZEZ4MFhIUnNiMk5oZEdsdmJqb2dYQ0l4WENJc1hHNWNkRngwWEhSelkzSnZiR3hpWVhKek9pQmNJakZjSWl4Y2JseDBYSFJjZEhKbGMybDZZV0pzWlRvZ1hDSXhYQ0pjYmx4MFhIUjlJQ2tzSUhZdWNISnZkRzkwZVhCbExtOXdaVzRnUFNCbWRXNWpkR2x2YmlnZ2RDd2daU0FwSUh0Y2JseDBYSFJjZEhaaGNpQnVJRDBnWlNBbUppQmNJbU5zYVdOclhDSWdQVDBnWlM1MGVYQmxJQ1ltSUdFdVkyeHZjMlZ6ZENnZ1hDSmhYQ0lzSUdVdWRHRnlaMlYwSUNrc1hHNWNkRngwWEhSY2RISWdQU0JsSUNZbUlDaGxMbUZzZEV0bGVTQjhmQ0JsTG0xbGRHRkxaWGtnZkh3Z1pTNXphR2xtZEV0bGVTa3NJR2tnUFNCdUlDWW1JQ2gxTG1sdmN5Z3BJSHg4SUhVdVlXNWtjbTlwWkNncEtUdGNibHgwWEhSY2RHbG1JQ2dnWXk1cGMxUjNhWFIwWlhKVlVrd29JSFFnS1NBcElIdGNibHgwWEhSY2RGeDBjbVYwZFhKdUlISWdmSHdnYVNBL0lIUm9hWE1nT2lBb2RHaHBjeTV1WVcxbElEMGdiQ0FySUdRdVoyVnVaWEpoZEdVb0tTd2dkR2hwY3k1d2IzQjFjQ0E5SUhSb2FYTXVkMmx1TG05d1pXNG9JSFFzSUhSb2FYTXVibUZ0WlN3Z2RHaHBjeTVtWldGMGRYSmxjeUFwTENCbElDWW1JSE11Y0hKbGRtVnVkRVJsWm1GMWJIUW9JR1VnS1N3Z2RHaHBjeWxjYmx4MFhIUmNkSDFjYmx4MFhIUjlMQ0IyTG05d1pXNGdQU0JtZFc1amRHbHZiaWdnZEN3Z1pTd2diaUFwSUh0Y2JseDBYSFJjZEhKbGRIVnliaUJ1WlhjZ2RpZ2dhU3dnWlNBcExtOXdaVzRvSUhRc0lHNGdLVnh1WEhSY2RIMHNJSFF1Wlhod2IzSjBjeUE5SUhaY2JseDBmU3dnWm5WdVkzUnBiMjRvSUhRc0lHVXNJRzRnS1NCN1hHNWNkRngwZG1GeUlISWdQU0J1S0NBMUlDa3NJR2tnUFNCdUtDQXdJQ2s3WEc1Y2JseDBYSFJtZFc1amRHbHZiaUJ2S0NrZ2UxeHVYSFJjZEZ4MGRHaHBjeTVoYzNObGNuUnBiMjV6SUQwZ1cxMHNJSFJvYVhNdVgyUmxabUYxYkhSeklEMGdlMzFjYmx4MFhIUjlYRzVjYmx4MFhIUnZMbkJ5YjNSdmRIbHdaUzVoYzNObGNuUWdQU0JtZFc1amRHbHZiaWdnZEN3Z1pTQXBJSHRjYmx4MFhIUmNkSEpsZEhWeWJpQjBhR2x6TG1GemMyVnlkR2x2Ym5NdWNIVnphQ2dnZTF4dVhIUmNkRngwWEhSbWJqb2dkQ3hjYmx4MFhIUmNkRngwYlhObk9pQmxJSHg4SUZ3aVlYTnpaWEowYVc5dUlHWmhhV3hsWkZ3aVhHNWNkRngwWEhSOUlDa3NJSFJvYVhOY2JseDBYSFI5TENCdkxuQnliM1J2ZEhsd1pTNWtaV1poZFd4MGN5QTlJR1oxYm1OMGFXOXVLQ0IwSUNrZ2UxeHVYSFJjZEZ4MGNtVjBkWEp1SUhSb2FYTXVYMlJsWm1GMWJIUnpJRDBnZENCOGZDQjBhR2x6TGw5a1pXWmhkV3gwY3l3Z2RHaHBjMXh1WEhSY2RIMHNJRzh1Y0hKdmRHOTBlWEJsTG5KbGNYVnBjbVVnUFNCbWRXNWpkR2x2YmlnZ2RDQXBJSHRjYmx4MFhIUmNkSFpoY2lCbElEMGdkR2hwY3p0Y2JseDBYSFJjZEhKbGRIVnliaUFvZENBOUlFRnljbUY1TG1selFYSnlZWGtvSUhRZ0tTQS9JSFFnT2lCcExuUnZVbVZoYkVGeWNtRjVLQ0JoY21kMWJXVnVkSE1nS1NrdVptOXlSV0ZqYUNnZ1puVnVZM1JwYjI0b0lIUWdLU0I3WEc1Y2RGeDBYSFJjZEdVdVlYTnpaWEowS0NCbWRXNWpkR2x2YmlnZ2RDQXBJSHRjYmx4MFhIUmNkRngwWEhSeVpYUjFjbTRnWm5WdVkzUnBiMjRvSUdVZ0tTQjdYRzVjZEZ4MFhIUmNkRngwWEhSeVpYUjFjbTRnY2k1b1lYTldZV3gxWlNnZ1pWc2dkQ0JkSUNsY2JseDBYSFJjZEZ4MFhIUjlYRzVjZEZ4MFhIUmNkSDBvSUhRZ0tTd2dYQ0p5WlhGMWFYSmxaRG9nWENJZ0t5QjBJQ2xjYmx4MFhIUmNkSDBnS1N3Z2RHaHBjMXh1WEhSY2RIMHNJRzh1Y0hKdmRHOTBlWEJsTG5CaGNuTmxJRDBnWm5WdVkzUnBiMjRvSUhRZ0tTQjdYRzVjZEZ4MFhIUjJZWElnWlN3Z2JqdGNibHgwWEhSY2RHbG1JQ2dnWlNBOUlHa3VZWFZuS0NCN2ZTd2dkR2hwY3k1ZlpHVm1ZWFZzZEhNc0lIUWdmSHdnZTMwZ0tTd2dLRzRnUFNCMGFHbHpMbUZ6YzJWeWRHbHZibk11Y21Wa2RXTmxLQ0JtZFc1amRHbHZiaWdnZEN3Z2JpQXBJSHRjYmx4MFhIUmNkRngwY21WMGRYSnVJRzR1Wm00b0lHVWdLU0I4ZkNCMExuQjFjMmdvSUc0dWJYTm5JQ2tzSUhSY2JseDBYSFJjZEgwc0lGdGRJQ2twTG14bGJtZDBhQ0ErSURBZ0tTQjdYRzVjZEZ4MFhIUmNkSFJvY205M0lHNWxkeUJGY25KdmNpZ2diaTVxYjJsdUtDQmNJbHhjYmx3aUlDa2dLVHRjYmx4MFhIUmNkSDFjYmx4MFhIUmNkSEpsZEhWeWJpQmxYRzVjZEZ4MGZTd2dkQzVsZUhCdmNuUnpJRDBnYjF4dVhIUjlMQ0JtZFc1amRHbHZiaWdnZEN3Z1pTd2diaUFwSUh0Y2JseDBYSFIyWVhJZ2NpQTlJRzRvSURRZ0tTd2dhU0E5SUc0b0lEWWdLU3dnYnlBOUlHNG9JREl6SUNrc0lITWdQU0J1S0NBMU1pQXBMQ0JoSUQwZ2JpZ2dNelVnS1N3Z2RTQTlJRzRvSURrZ0tTd2dZeUE5SUc0b0lETTNJQ2tzSUdRZ1BTQnVLQ0F5TlNBcExGeHVYSFJjZEZ4MFppQTlJRzRvSURVZ0tTd2diQ0E5SUc0b0lEQWdLU3dnYUNBOUlHNG9JRE14SUNrc0lIQWdQU0J1S0NBeE1Ua2dLU3dnYlNBOUlHNG9JRE13SUNrN1hHNWNibHgwWEhSbWRXNWpkR2x2YmlCMktDa2dlMXh1WEhSY2RGeDBkbUZ5SUhRZ1BTQmhMblpoYkNnZ1hDSjNhV1JuWlhSek9tRjFkRzlzYjJGa1hDSWdLU0I4ZkNBaE1EdGNibHgwWEhSY2RISmxkSFZ5YmlBaFppNXBjMFpoYkhObFZtRnNkV1VvSUhRZ0tTQW1KaUFvWmk1cGMxUnlkWFJvVm1Gc2RXVW9JSFFnS1NBL0lISXVZbTlrZVNBNklISXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ2dkQ0FwS1Z4dVhIUmNkSDFjYmx4dVhIUmNkR1oxYm1OMGFXOXVJR2NvSUhRc0lHVWdLU0I3WEc1Y2RGeDBYSFIyWVhJZ2Jpd2dhVHRjYmx4MFhIUmNkSEpsZEhWeWJpQjBJRDBnS0hRZ1BTQjBJSHg4SUhJdVltOWtlU2t1YkdWdVozUm9JRDhnYkM1MGIxSmxZV3hCY25KaGVTZ2dkQ0FwSURvZ1czUmRMQ0JqTG5CaGRYTmxLQ2tzSUdrZ1BTQm1kVzVqZEdsdmJpZ2dkQ3dnWlNBcElIdGNibHgwWEhSY2RGeDBjbVYwZFhKdUlIUXVjbVZrZFdObEtDQm1kVzVqZEdsdmJpZ2dkQ3dnYmlBcElIdGNibHgwWEhSY2RGeDBYSFJ5WlhSMWNtNGdkQzVqYjI1allYUW9JSEF1Y21Wa2RXTmxLQ0JtZFc1amRHbHZiaWdnZEN3Z2NpQXBJSHRjYmx4MFhIUmNkRngwWEhSY2RISmxkSFZ5YmlCMExtTnZibU5oZENnZ2NpZ2diaXdnWlNBcElDbGNibHgwWEhSY2RGeDBYSFI5TENCYlhTQXBJQ2xjYmx4MFhIUmNkRngwZlN3Z1cxMGdLVnh1WEhSY2RGeDBmU2dnZEN3Z1pTQXBMQ0J0TG1WdGFYUjBaWEl1ZEhKcFoyZGxjaWdnYlM1QlRFeGZWMGxFUjBWVVUxOVNSVTVFUlZKZlUxUkJVbFFzSUhzZ2QybGtaMlYwY3pvZ2FTQjlJQ2tzSUc0Z1BTQnZMbUZzYkZKbGMyOXNkbVZrS0NCcExtMWhjQ2dnWm5WdVkzUnBiMjRvSUhRZ0tTQjdYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQnpMbUZrWkZkcFpHZGxkQ2dnZENBcFhHNWNkRngwWEhSOUlDa2dLUzUwYUdWdUtDQm1kVzVqZEdsdmJpZ2dkQ0FwSUh0Y2JseDBYSFJjZEZ4MFpDNTBjbWxuWjJWeUtDQmNJbXh2WVdSbFpGd2lMQ0I3SUhkcFpHZGxkSE02SUhRZ2ZTQXBMQ0IwSUNZbUlIUXViR1Z1WjNSb0lDWW1JRzB1WlcxcGRIUmxjaTUwY21sbloyVnlLQ0J0TGtGTVRGOVhTVVJIUlZSVFgxSkZUa1JGVWw5RlRrUXNJSHNnZDJsa1oyVjBjem9nZENCOUlDbGNibHgwWEhSY2RIMGdLU3dnYnk1aGJIZGhlWE1vSUc0c0lHWjFibU4wYVc5dUtDa2dlMXh1WEhSY2RGeDBYSFJqTG5KbGMzVnRaU2dwWEc1Y2RGeDBYSFI5SUNrc0lHNWNibHgwWEhSOVhHNWNibHgwWEhSbWRXNWpkR2x2YmlCM0tDQjBJQ2tnZTF4dVhIUmNkRngwY21WMGRYSnVJR2d1WjJWMFJYaHdaWEpwYldWdWRITW9LUzUwYUdWdUtDQm1kVzVqZEdsdmJpZ2daU0FwSUh0Y2JseDBYSFJjZEZ4MGNtVjBkWEp1SUdjb0lIUXNJR1VnS1Z4dVhIUmNkRngwZlNBcFhHNWNkRngwZlZ4dVhHNWNkRngwZEM1bGVIQnZjblJ6SUQwZ2UxeHVYSFJjZEZ4MGJHOWhaRG9nZHl4Y2JseDBYSFJjZEd4dllXUlFZV2RsT2lCbWRXNWpkR2x2YmlncElIdGNibHgwWEhSY2RGeDBkbUZ5SUhRZ1BTQjJLQ2s3WEc1Y2RGeDBYSFJjZEhKbGRIVnliaUFoTVNBOVBUMGdkQ0EvSUdrdWNtVnpiMngyWlNncElEb2dLSFV1YzJWMEtDQmNJbmRwWkdkbGRITXViRzloWkdWa1hDSXNJQ0V3SUNrc0lIY29JSFFnS1NsY2JseDBYSFJjZEgwc1hHNWNkRngwWEhSZloyVjBVR0ZuWlV4dllXUlVZWEpuWlhRNklIWmNibHgwWEhSOVhHNWNkSDBzSUdaMWJtTjBhVzl1S0NCMExDQmxMQ0J1SUNrZ2UxeHVYSFJjZEhaaGNpQnlJRDBnYmlnZ01UQWdLU3dnYVNBOUlHNG9JREU0SUNrc0lHOGdQU0J1S0NBeU5TQXBMQ0J6SUQwZ2JpZ2dOVE1nS1N3Z1lTQTlJRzRvSURZZ0tTd2dkU0E5SUc0b0lESXpJQ2s3WEc1Y2JseDBYSFJtZFc1amRHbHZiaUJqS0NCMExDQmxJQ2tnZTF4dVhIUmNkRngwZEdocGN5NWZkMmxrWjJWMElEMGdiblZzYkN3Z2RHaHBjeTVmYzJGdVpHSnZlQ0E5SUc1MWJHd3NJSFJvYVhNdVgyaDVaSEpoZEdWa0lEMGdJVEVzSUhSb2FYTXVYMmx1YzJWeWRHVmtTVzUwYjBSdmJTQTlJQ0V4TENCMGFHbHpMbDlUWVc1a1ltOTRJRDBnZEM1VFlXNWtZbTk0TENCMGFHbHpMbDltWVdOMGIzSjVJRDBnZEM1bVlXTjBiM0o1TENCMGFHbHpMbDkzYVdSblpYUlFZWEpoYlhNZ1BTQjBMbkJoY21GdFpYUmxjbk1zSUhSb2FYTXVYM0psYzI5c2RtVWdQU0JsTENCMGFHbHpMbDlqYkdGemMwNWhiV1VnUFNCMExtTnNZWE56VG1GdFpTd2dkR2hwY3k1ZmNtVnVaR1Z5WldSRGJHRnpjMDVoYldVZ1BTQjBMbU5zWVhOelRtRnRaU0FySUZ3aUxYSmxibVJsY21Wa1hDSXNJSFJvYVhNdVgyVnljbTl5UTJ4aGMzTk9ZVzFsSUQwZ2RDNWpiR0Z6YzA1aGJXVWdLeUJjSWkxbGNuSnZjbHdpTENCMGFHbHpMbDl6Y21ORmJDQTlJSFF1YzNKalJXd3NJSFJvYVhNdVgzUmhjbWRsZEVkc2IySmhiQ0E5SUdaMWJtTjBhVzl1S0NCMElDa2dlMXh1WEhSY2RGeDBYSFJ5WlhSMWNtNGdLSFF1YzNKalJXd2dmSHdnZEM1MFlYSm5aWFJGYkNrdWIzZHVaWEpFYjJOMWJXVnVkQzVrWldaaGRXeDBWbWxsZDF4dVhIUmNkRngwZlNnZ2RDQXBMQ0IwYUdsekxsOXpZVzVrWW05NFYzSmhjSEJsY2tWc0lEMGdkQzV2Y0hScGIyNXpJRDhnZEM1dmNIUnBiMjV6TG5OaGJtUmliM2hYY21Gd2NHVnlSV3dnT2lCdWRXeHNMQ0IwYUdsekxsOXBibk5sY25ScGIyNVRkSEpoZEdWbmVTQTlJR1oxYm1OMGFXOXVLQ0JsSUNrZ2UxeHVYSFJjZEZ4MFhIUjJZWElnYml3Z2NpQTlJSFF1YzNKalJXd3NJR2tnUFNCMExuUmhjbWRsZEVWc0xDQnZJRDBnZEM1dmNIUnBiMjV6SUQ4Z2RDNXZjSFJwYjI1ekxuTmhibVJpYjNoWGNtRndjR1Z5Uld3Z09pQnVkV3hzTzF4dVhIUmNkRngwWEhSdklEOGdLRzh1WVhCd1pXNWtRMmhwYkdRb0lHVWdLU3dnYmlBOUlHOHBJRG9nYmlBOUlHVXNJSElnUHlCcExtbHVjMlZ5ZEVKbFptOXlaU2dnYml3Z2NpQXBJRG9nYVM1aGNIQmxibVJEYUdsc1pDZ2diaUFwWEc1Y2RGeDBYSFI5WEc1Y2RGeDBmVnh1WEc1Y2RGeDBZeTVtY205dFVtRjNWR0Z6YXlBOUlHWjFibU4wYVc5dUtDQjBJQ2tnZTF4dVhIUmNkRngwY21WMGRYSnVJRzVsZHlCaktDQjBMbWx1Y0hWMExDQjBMblJoYzJ0RWIyNWxSR1ZtWlhKeVpXUXVjbVZ6YjJ4MlpTQXBYRzVjZEZ4MGZTd2dZeTV3Y205MGIzUjVjR1V1YVc1cGRHbGhiR2w2WlNBOUlHWjFibU4wYVc5dUtDa2dlMXh1WEhSY2RGeDBkbUZ5SUhRZ1BTQjBhR2x6TENCbElEMGdibVYzSUhSb2FYTXVYMU5oYm1SaWIzZ29JSFJvYVhNdVgzUmhjbWRsZEVkc2IySmhiQ0FwTzF4dVhIUmNkRngwY21WMGRYSnVJSFJvYVhNdVgyWmhZM1J2Y25rb0lIUm9hWE11WDNkcFpHZGxkRkJoY21GdGN5d2daU0FwTG5Sb1pXNG9JR1oxYm1OMGFXOXVLQ0J1SUNrZ2UxeHVYSFJjZEZ4MFhIUnlaWFIxY200Z2RDNWZkMmxrWjJWMElEMGdiaXdnZEM1ZmMyRnVaR0p2ZUNBOUlHVXNJRzR1WDNOaGJtUmliM2hYY21Gd2NHVnlSV3dnUFNCMExsOXpZVzVrWW05NFYzSmhjSEJsY2tWc0xDQnVYRzVjZEZ4MFhIUjlJQ2xjYmx4MFhIUjlMQ0JqTG5CeWIzUnZkSGx3WlM1cGJuTmxjblJKYm5SdlJHOXRJRDBnWm5WdVkzUnBiMjRvS1NCN1hHNWNkRngwWEhSMllYSWdkQ0E5SUhSb2FYTTdYRzVjZEZ4MFhIUnlaWFIxY200Z2RHaHBjeTVmZDJsa1oyVjBJRDhnZEdocGN5NWZjMkZ1WkdKdmVDNXBibk5sY25Rb0lIUm9hWE11WDNkcFpHZGxkQzVwWkN3Z2UxeHVYSFJjZEZ4MFhIUmpiR0Z6Y3pvZ1cxeHVYSFJjZEZ4MFhIUmNkSFJvYVhNdVgyTnNZWE56VG1GdFpTeGNibHgwWEhSY2RGeDBYSFIwYUdsekxsOXlaVzVrWlhKbFpFTnNZWE56VG1GdFpWeHVYSFJjZEZ4MFhIUmRMbXB2YVc0b0lGd2lJRndpSUNsY2JseDBYSFJjZEgwc0lHNTFiR3dzSUhSb2FYTXVYMmx1YzJWeWRHbHZibE4wY21GMFpXZDVJQ2t1ZEdobGJpZ2dablZ1WTNScGIyNG9LU0I3WEc1Y2RGeDBYSFJjZEhRdVgybHVjMlZ5ZEdWa1NXNTBiMFJ2YlNBOUlDRXdYRzVjZEZ4MFhIUjlJQ2tnT2lCaExuSmxhbVZqZENnZ2JtVjNJRVZ5Y205eUtDQmNJbU5oYm01dmRDQnBibk5sY25RZ2QybGtaMlYwSUdsdWRHOGdSRTlOSUdKbFptOXlaU0JwZENCcGN5QnBibWwwYVdGc2FYcGxaRndpSUNrZ0tWeHVYSFJjZEgwc0lHTXVjSEp2ZEc5MGVYQmxMbWg1WkhKaGRHVWdQU0JtZFc1amRHbHZiaWdwSUh0Y2JseDBYSFJjZEhaaGNpQjBJRDBnZEdocGN6dGNibHgwWEhSY2RISmxkSFZ5YmlCMGFHbHpMbDkzYVdSblpYUWdQeUIwYUdsekxsOTNhV1JuWlhRdWFIbGtjbUYwWlNncExuUm9aVzRvSUdaMWJtTjBhVzl1S0NrZ2UxeHVYSFJjZEZ4MFhIUjBMbDlvZVdSeVlYUmxaQ0E5SUNFd1hHNWNkRngwWEhSOUlDa2dPaUJoTG5KbGFtVmpkQ2dnYm1WM0lFVnljbTl5S0NCY0ltTmhibTV2ZENCb2VXUnlZWFJsSUhkcFpHZGxkQ0JpWldadmNtVWdhWFFnYVhNZ2FXNXBkR2xoYkdsNlpXUmNJaUFwSUNsY2JseDBYSFI5TENCakxuQnliM1J2ZEhsd1pTNXlaVzVrWlhJZ1BTQm1kVzVqZEdsdmJpZ3BJSHRjYmx4MFhIUmNkSFpoY2lCMElEMGdkR2hwY3p0Y2JseHVYSFJjZEZ4MFpuVnVZM1JwYjI0Z1pTZ2daU0FwSUh0Y2JseDBYSFJjZEZ4MGNtVjBkWEp1SUhNb0lIUXVYM05oYm1SaWIzZ3VjMkZ1WkdKdmVFVnNJQ2t1ZEdobGJpZ2dablZ1WTNScGIyNG9LU0I3WEc1Y2RGeDBYSFJjZEZ4MGNtVjBkWEp1SUdFdWNtVnFaV04wS0NCbElDbGNibHgwWEhSY2RGeDBmU0FwWEc1Y2RGeDBYSFI5WEc1Y2JseDBYSFJjZEhKbGRIVnliaUIwYUdsekxsOW9lV1J5WVhSbFpDQS9JSFJvYVhNdVgybHVjMlZ5ZEdWa1NXNTBiMFJ2YlNBL0lIUXVYM2RwWkdkbGRDNXlaVzVrWlhJb0lIUXVYM05oYm1SaWIzZ2dLUzUwYUdWdUtDQm1kVzVqZEdsdmJpZ3BJSHRjYmx4MFhIUmNkRngwY21WMGRYSnVJSFF1WDNOaGJtUmliM2d1YjI1U1pYTnBlbVVvSUdaMWJtTjBhVzl1S0NrZ2UxeHVYSFJjZEZ4MFhIUmNkSEpsZEhWeWJpQjBMbDkzYVdSblpYUXVjbVZ6YVhwbEtDa3VkR2hsYmlnZ1puVnVZM1JwYjI0b0tTQjdYRzVjZEZ4MFhIUmNkRngwWEhSdkxuUnlhV2RuWlhJb0lGd2ljbVZ6YVhwbFhDSXNJSHNnZEdGeVoyVjBPaUIwTGw5ellXNWtZbTk0TG5OaGJtUmliM2hGYkNCOUlDbGNibHgwWEhSY2RGeDBYSFI5SUNsY2JseDBYSFJjZEZ4MGZTQXBMQ0IwTGw5M2FXUm5aWFF1YzJodmR5Z3BYRzVjZEZ4MFhIUjlJQ2t1ZEdobGJpZ2dablZ1WTNScGIyNG9LU0I3WEc1Y2RGeDBYSFJjZEhKbGRIVnliaUJ6S0NCMExsOXpjbU5GYkNBcExuUm9aVzRvSUdaMWJtTjBhVzl1S0NrZ2UxeHVYSFJjZEZ4MFhIUmNkSEpsZEhWeWJpQjBMbDl6WVc1a1ltOTRMbk5oYm1SaWIzaEZiRnh1WEhSY2RGeDBYSFI5SUNsY2JseDBYSFJjZEgwc0lHVWdLU0E2SUdVb0lHNWxkeUJGY25KdmNpZ2dYQ0pqWVc1dWIzUWdjbVZ1WkdWeUlIZHBaR2RsZENCaVpXWnZjbVVnUkU5TklHbHVjMlZ5ZEdsdmJsd2lJQ2tnS1NBNklHVW9JRzVsZHlCRmNuSnZjaWdnWENKallXNXViM1FnY21WdVpHVnlJSGRwWkdkbGRDQmlaV1p2Y21VZ2FIbGtjbUYwYVc5dVhDSWdLU0FwWEc1Y2RGeDBmU3dnWXk1d2NtOTBiM1I1Y0dVdVptRnBiQ0E5SUdaMWJtTjBhVzl1S0NrZ2UxeHVYSFJjZEZ4MGRtRnlJSFFnUFNCMGFHbHpPMXh1WEhSY2RGeDBjbVYwZFhKdUlIUm9hWE11WDNOeVkwVnNJRDhnZFM1aGJIZGhlWE1vSUdrdWQzSnBkR1VvSUdaMWJtTjBhVzl1S0NrZ2UxeHVYSFJjZEZ4MFhIUnlMbUZrWkNnZ2RDNWZjM0pqUld3c0lIUXVYMlZ5Y205eVEyeGhjM05PWVcxbElDbGNibHgwWEhSY2RIMGdLU3dnWm5WdVkzUnBiMjRvS1NCN1hHNWNkRngwWEhSY2RHOHVkSEpwWjJkbGNpZ2dYQ0p5Wlc1a1pYSmxaRndpTENCN0lIUmhjbWRsZERvZ2RDNWZjM0pqUld3Z2ZTQXBMQ0IwTGw5eVpYTnZiSFpsS0NCMExsOXpjbU5GYkNBcFhHNWNkRngwWEhSOUlDa2dPaUFvZEM1ZmNtVnpiMngyWlNncExDQmhMbkpsYzI5c2RtVW9LU2xjYmx4MFhIUjlMQ0JqTG5CeWIzUnZkSGx3WlM1emRXTmpaWE56SUQwZ1puVnVZM1JwYjI0b0tTQjdYRzVjZEZ4MFhIUnZMblJ5YVdkblpYSW9JRndpY21WdVpHVnlaV1JjSWl3Z2V5QjBZWEpuWlhRNklIUm9hWE11WDNOaGJtUmliM2d1YzJGdVpHSnZlRVZzSUgwZ0tTd2dkR2hwY3k1ZmNtVnpiMngyWlNnZ2RHaHBjeTVmYzJGdVpHSnZlQzV6WVc1a1ltOTRSV3dnS1Z4dVhIUmNkSDBzSUhRdVpYaHdiM0owY3lBOUlHTmNibHgwZlN3Z1puVnVZM1JwYjI0b0lIUXNJR1VzSUc0Z0tTQjdYRzVjZEZ4MGRtRnlJSEk3WEc1Y2RGeDBJV1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWENKMWMyVWdjM1J5YVdOMFhDSTdYRzVjZEZ4MFhIUjJZWElnYVNBOUlIZHBibVJ2ZHk1eVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVWdmSHdnZDJsdVpHOTNMbmRsWW10cGRGSmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaU0I4ZkNCM2FXNWtiM2N1Ylc5NlVtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxJSHg4SUhkcGJtUnZkeTV0YzFKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpTQjhmQ0JtZFc1amRHbHZiaWdnZENBcElIdGNibHgwWEhSY2RGeDBjbVYwZFhKdUlIZHBibVJ2ZHk1elpYUlVhVzFsYjNWMEtDQjBMQ0F4WlRNZ0x5QTJNQ0FwWEc1Y2RGeDBYSFI5TzF4dVhHNWNkRngwWEhSbWRXNWpkR2x2YmlCdktDa2dlMXh1WEhSY2RGeDBYSFIwYUdsekxtWnlZVzFsY3lBOUlGdGRMQ0IwYUdsekxteGhjM1JKWkNBOUlEQXNJSFJvYVhNdWNtRm1JRDBnYVN3Z2RHaHBjeTVpWVhSamFDQTlJSHRjYmx4MFhIUmNkRngwWEhSb1lYTm9PaUI3ZlN4Y2JseDBYSFJjZEZ4MFhIUnlaV0ZrT2lCYlhTeGNibHgwWEhSY2RGeDBYSFIzY21sMFpUb2dXMTBzWEc1Y2RGeDBYSFJjZEZ4MGJXOWtaVG9nYm5Wc2JGeHVYSFJjZEZ4MFhIUjlYRzVjZEZ4MFhIUjlYRzVjYmx4MFhIUmNkRzh1Y0hKdmRHOTBlWEJsTG5KbFlXUWdQU0JtZFc1amRHbHZiaWdnZEN3Z1pTQXBJSHRjYmx4MFhIUmNkRngwZG1GeUlHNGdQU0IwYUdsekxtRmtaQ2dnWENKeVpXRmtYQ0lzSUhRc0lHVWdLU3dnY2lBOUlHNHVhV1E3WEc1Y2RGeDBYSFJjZEhKbGRIVnliaUIwYUdsekxtSmhkR05vTG5KbFlXUXVjSFZ6YUNnZ2JpNXBaQ0FwTENCY0luSmxZV1JwYm1kY0lpQTlQVDBnZEdocGN5NWlZWFJqYUM1dGIyUmxJSHg4SUhSb2FYTXVZbUYwWTJndWMyTm9aV1IxYkdWa0lEOGdjaUE2SUNoMGFHbHpMbk5qYUdWa2RXeGxRbUYwWTJnb0tTd2djaWxjYmx4MFhIUmNkSDBzSUc4dWNISnZkRzkwZVhCbExuZHlhWFJsSUQwZ1puVnVZM1JwYjI0b0lIUXNJR1VnS1NCN1hHNWNkRngwWEhSY2RIWmhjaUJ1SUQwZ2RHaHBjeTVoWkdRb0lGd2lkM0pwZEdWY0lpd2dkQ3dnWlNBcExDQnlJRDBnZEdocGN5NWlZWFJqYUM1dGIyUmxMQ0JwSUQwZ2JpNXBaRHRjYmx4MFhIUmNkRngwY21WMGRYSnVJSFJvYVhNdVltRjBZMmd1ZDNKcGRHVXVjSFZ6YUNnZ2JpNXBaQ0FwTENCY0luZHlhWFJwYm1kY0lpQTlQVDBnY2lCOGZDQmNJbkpsWVdScGJtZGNJaUE5UFQwZ2NpQjhmQ0IwYUdsekxtSmhkR05vTG5OamFHVmtkV3hsWkNBL0lHa2dPaUFvZEdocGN5NXpZMmhsWkhWc1pVSmhkR05vS0Nrc0lHa3BYRzVjZEZ4MFhIUjlMQ0J2TG5CeWIzUnZkSGx3WlM1a1pXWmxjaUE5SUdaMWJtTjBhVzl1S0NCMExDQmxMQ0J1SUNrZ2UxeHVYSFJjZEZ4MFhIUmNJbVoxYm1OMGFXOXVYQ0lnUFQwZ2RIbHdaVzltSUhRZ0ppWWdLRzRnUFNCbExDQmxJRDBnZEN3Z2RDQTlJREVwTzF4dVhIUmNkRngwWEhSMllYSWdjaUE5SUhSb2FYTXNJR2tnUFNCMElDMGdNVHRjYmx4MFhIUmNkRngwY21WMGRYSnVJSFJvYVhNdWMyTm9aV1IxYkdVb0lHa3NJR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWEhSY2RISXVjblZ1S0NCN1hHNWNkRngwWEhSY2RGeDBYSFJtYmpvZ1pTeGNibHgwWEhSY2RGeDBYSFJjZEdOMGVEb2dibHh1WEhSY2RGeDBYSFJjZEgwZ0tWeHVYSFJjZEZ4MFhIUjlJQ2xjYmx4MFhIUmNkSDBzSUc4dWNISnZkRzkwZVhCbExtTnNaV0Z5SUQwZ1puVnVZM1JwYjI0b0lIUWdLU0I3WEc1Y2RGeDBYSFJjZEdsbUlDZ2dYQ0ptZFc1amRHbHZibHdpSUQwOUlIUjVjR1Z2WmlCMElDa2dlMXh1WEhSY2RGeDBYSFJjZEhKbGRIVnliaUIwYUdsekxtTnNaV0Z5Um5KaGJXVW9JSFFnS1R0Y2JseDBYSFJjZEZ4MGZWeHVYSFJjZEZ4MFhIUjBJRDBnVG5WdFltVnlLQ0IwSUNrN1hHNWNkRngwWEhSY2RIWmhjaUJsSUQwZ2RHaHBjeTVpWVhSamFDNW9ZWE5vV3lCMElGMDdYRzVjZEZ4MFhIUmNkR2xtSUNnZ1pTQXBJSHRjYmx4MFhIUmNkRngwWEhSMllYSWdiaUE5SUhSb2FYTXVZbUYwWTJoYklHVXVkSGx3WlNCZExDQnlJRDBnYmk1cGJtUmxlRTltS0NCMElDazdYRzVjZEZ4MFhIUmNkRngwWkdWc1pYUmxJSFJvYVhNdVltRjBZMmd1YUdGemFGc2dkQ0JkTENCK0lISWdKaVlnYmk1emNHeHBZMlVvSUhJc0lERWdLVnh1WEhSY2RGeDBYSFI5WEc1Y2RGeDBYSFI5TENCdkxuQnliM1J2ZEhsd1pTNWpiR1ZoY2taeVlXMWxJRDBnWm5WdVkzUnBiMjRvSUhRZ0tTQjdYRzVjZEZ4MFhIUmNkSFpoY2lCbElEMGdkR2hwY3k1bWNtRnRaWE11YVc1a1pYaFBaaWdnZENBcE8xeHVYSFJjZEZ4MFhIUitJR1VnSmlZZ2RHaHBjeTVtY21GdFpYTXVjM0JzYVdObEtDQmxMQ0F4SUNsY2JseDBYSFJjZEgwc0lHOHVjSEp2ZEc5MGVYQmxMbk5qYUdWa2RXeGxRbUYwWTJnZ1BTQm1kVzVqZEdsdmJpZ3BJSHRjYmx4MFhIUmNkRngwZG1GeUlIUWdQU0IwYUdsek8xeHVYSFJjZEZ4MFhIUjBhR2x6TG5OamFHVmtkV3hsS0NBd0xDQm1kVzVqZEdsdmJpZ3BJSHRjYmx4MFhIUmNkRngwWEhSMExtSmhkR05vTG5OamFHVmtkV3hsWkNBOUlDRXhMQ0IwTG5KMWJrSmhkR05vS0NsY2JseDBYSFJjZEZ4MGZTQXBMQ0IwYUdsekxtSmhkR05vTG5OamFHVmtkV3hsWkNBOUlDRXdYRzVjZEZ4MFhIUjlMQ0J2TG5CeWIzUnZkSGx3WlM1MWJtbHhkV1ZKWkNBOUlHWjFibU4wYVc5dUtDa2dlMXh1WEhSY2RGeDBYSFJ5WlhSMWNtNGdLeXNnZEdocGN5NXNZWE4wU1dSY2JseDBYSFJjZEgwc0lHOHVjSEp2ZEc5MGVYQmxMbVpzZFhOb0lEMGdablZ1WTNScGIyNG9JSFFnS1NCN1hHNWNkRngwWEhSY2RHWnZjaUFvSUhaaGNpQmxPeUJsSUQwZ2RDNXphR2xtZENncE95QXBJSHRjYmx4MFhIUmNkRngwWEhSMGFHbHpMbkoxYmlnZ2RHaHBjeTVpWVhSamFDNW9ZWE5vV3lCbElGMGdLVnh1WEhSY2RGeDBYSFI5WEc1Y2RGeDBYSFI5TENCdkxuQnliM1J2ZEhsd1pTNXlkVzVDWVhSamFDQTlJR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWEhSMGNua2dlMXh1WEhSY2RGeDBYSFJjZEhSb2FYTXVZbUYwWTJndWJXOWtaU0E5SUZ3aWNtVmhaR2x1WjF3aUxDQjBhR2x6TG1ac2RYTm9LQ0IwYUdsekxtSmhkR05vTG5KbFlXUWdLU3dnZEdocGN5NWlZWFJqYUM1dGIyUmxJRDBnWENKM2NtbDBhVzVuWENJc0lIUm9hWE11Wm14MWMyZ29JSFJvYVhNdVltRjBZMmd1ZDNKcGRHVWdLU3dnZEdocGN5NWlZWFJqYUM1dGIyUmxJRDBnYm5Wc2JGeHVYSFJjZEZ4MFhIUjlJR05oZEdOb0lDZ2dkQ0FwSUh0Y2JseDBYSFJjZEZ4MFhIUjBhSEp2ZHlCMGFHbHpMbkoxYmtKaGRHTm9LQ2tzSUhSY2JseDBYSFJjZEZ4MGZWeHVYSFJjZEZ4MGZTd2dieTV3Y205MGIzUjVjR1V1WVdSa0lEMGdablZ1WTNScGIyNG9JSFFzSUdVc0lHNGdLU0I3WEc1Y2RGeDBYSFJjZEhaaGNpQnlJRDBnZEdocGN5NTFibWx4ZFdWSlpDZ3BPMXh1WEhSY2RGeDBYSFJ5WlhSMWNtNGdkR2hwY3k1aVlYUmphQzVvWVhOb1d5QnlJRjBnUFNCN1hHNWNkRngwWEhSY2RGeDBhV1E2SUhJc1hHNWNkRngwWEhSY2RGeDBabTQ2SUdVc1hHNWNkRngwWEhSY2RGeDBZM1I0T2lCdUxGeHVYSFJjZEZ4MFhIUmNkSFI1Y0dVNklIUmNibHgwWEhSY2RGeDBmVnh1WEhSY2RGeDBmU3dnYnk1d2NtOTBiM1I1Y0dVdWNuVnVJRDBnWm5WdVkzUnBiMjRvSUhRZ0tTQjdYRzVjZEZ4MFhIUmNkSFpoY2lCbElEMGdkQzVqZEhnZ2ZId2dkR2hwY3l3Z2JpQTlJSFF1Wm00N1hHNWNkRngwWEhSY2RHbG1JQ2dnWkdWc1pYUmxJSFJvYVhNdVltRjBZMmd1YUdGemFGc2dkQzVwWkNCZExDQWhkR2hwY3k1dmJrVnljbTl5SUNrZ2UxeHVYSFJjZEZ4MFhIUmNkSEpsZEhWeWJpQnVMbU5oYkd3b0lHVWdLVHRjYmx4MFhIUmNkRngwZlZ4dVhIUmNkRngwWEhSMGNua2dlMXh1WEhSY2RGeDBYSFJjZEc0dVkyRnNiQ2dnWlNBcFhHNWNkRngwWEhSY2RIMGdZMkYwWTJnZ0tDQjBJQ2tnZTF4dVhIUmNkRngwWEhSY2RIUm9hWE11YjI1RmNuSnZjaWdnZENBcFhHNWNkRngwWEhSY2RIMWNibHgwWEhSY2RIMHNJRzh1Y0hKdmRHOTBlWEJsTG14dmIzQWdQU0JtZFc1amRHbHZiaWdwSUh0Y2JseDBYSFJjZEZ4MGRtRnlJSFFzSUdVZ1BTQjBhR2x6TENCdUlEMGdkR2hwY3k1eVlXWXNJSElnUFNBaE1UdGNibHh1WEhSY2RGeDBYSFJtZFc1amRHbHZiaUJwS0NrZ2UxeHVYSFJjZEZ4MFhIUmNkSFpoY2lCMElEMGdaUzVtY21GdFpYTXVjMmhwWm5Rb0tUdGNibHgwWEhSY2RGeDBYSFJsTG1aeVlXMWxjeTVzWlc1bmRHZ2dQeUJ1S0NCcElDa2dPaUJsTG14dmIzQnBibWNnUFNBaE1Td2dkQ0FtSmlCMEtDbGNibHgwWEhSY2RGeDBmVnh1WEc1Y2RGeDBYSFJjZEhSb2FYTXViRzl2Y0dsdVp5QjhmQ0FvZENBOUlITmxkRlJwYldWdmRYUW9JR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWEhSY2RISWdQU0FoTUN3Z2FTZ3BYRzVjZEZ4MFhIUmNkSDBzSURVd01DQXBMQ0J1S0NCbWRXNWpkR2x2YmlncElIdGNibHgwWEhSY2RGeDBYSFJ5SUh4OElDaGpiR1ZoY2xScGJXVnZkWFFvSUhRZ0tTd2dhU2dwS1Z4dVhIUmNkRngwWEhSOUlDa3NJSFJvYVhNdWJHOXZjR2x1WnlBOUlDRXdLVnh1WEhSY2RGeDBmU3dnYnk1d2NtOTBiM1I1Y0dVdWMyTm9aV1IxYkdVZ1BTQm1kVzVqZEdsdmJpZ2dkQ3dnWlNBcElIdGNibHgwWEhSY2RGeDBjbVYwZFhKdUlIUm9hWE11Wm5KaGJXVnpXeUIwSUYwZ1B5QjBhR2x6TG5OamFHVmtkV3hsS0NCMElDc2dNU3dnWlNBcElEb2dLSFJvYVhNdWJHOXZjQ2dwTENCMGFHbHpMbVp5WVcxbGMxc2dkQ0JkSUQwZ1pTbGNibHgwWEhSY2RIMDdYRzVjZEZ4MFhIUjJZWElnY3lBOUlHNWxkeUJ2TzF4dVhIUmNkRngwZG05cFpDQXdJQ0U5UFNCMElDWW1JSFF1Wlhod2IzSjBjeUEvSUhRdVpYaHdiM0owY3lBOUlITWdPaUIyYjJsa0lEQWdQVDA5SUNoeUlEMGdablZ1WTNScGIyNG9LU0I3WEc1Y2RGeDBYSFJjZEhKbGRIVnliaUJ6WEc1Y2RGeDBYSFI5TG1OaGJHd29JR1VzSUc0c0lHVXNJSFFnS1NrZ2ZId2dLSFF1Wlhod2IzSjBjeUE5SUhJcFhHNWNkRngwZlNncFhHNWNkSDBzSUdaMWJtTjBhVzl1S0NCMExDQmxMQ0J1SUNrZ2UxeHVYSFJjZEhaaGNpQnlJRDBnYmlnZ05EZ2dLUzVRY205dGFYTmxPMXh1WEhSY2RIUXVaWGh3YjNKMGN5QTlJSEl1WDJGellYQmNibHgwZlN3Z1puVnVZM1JwYjI0b0lIUXNJR1VzSUc0Z0tTQjdYRzVjZEZ4MGRtRnlJSElzSUdrc0lHOHNJSE1nUFNCdUtDQTBJQ2tzSUdFZ1BTQnVLQ0F4SUNrc0lIVWdQU0J1S0NBek1pQXBMQ0JqSUQwZ2JpZ2dNakFnS1N3Z1pDQTlJRzRvSURJZ0tTd2daaUE5SUc0b0lEWWdLU3dnYkNBOUlHNG9JRFUwSUNrc0lHZ2dQU0J1S0NBeU1TQXBMRnh1WEhSY2RGeDBjQ0E5SUc0b0lEQWdLU3dnYlNBOUlHNG9JREkySUNrc0lIWWdQU0J1S0NBNUlDa3VaMlYwS0NCY0luTmpjbWxpWlVOaGJHeGlZV05yWENJZ0tTd2daeUE5SUUxaGRHZ3VabXh2YjNJb0lERmxNeUFxSUUxaGRHZ3VjbUZ1Wkc5dEtDa2dLU0FySUZ3aVgxd2lMRnh1WEhSY2RGeDBkeUE5SUZ3aWNuVm1iM1Z6TFdaeVlXMWxMVndpSUNzZ1p5QXJJRndpTFZ3aUxDQjVJRDBnWENKeWRXWnZkWE10Wm05eWJTMWNJaUFySUdjZ0t5QmNJaTFjSWl3Z1lpQTlJREFzSUY4Z1BTQWhNU3dnUlNBOUlHNWxkeUJrTzF4dVhHNWNkRngwWm5WdVkzUnBiMjRnZUNncElIdGNibHgwWEhSY2RIWmhjaUIwSUQwZ2J5NWpjbVZoZEdWRmJHVnRaVzUwS0NCY0ltWnZjbTFjSWlBcExDQmxJRDBnYnk1amNtVmhkR1ZGYkdWdFpXNTBLQ0JjSW1sdWNIVjBYQ0lnS1N3Z2JpQTlJRzh1WTNKbFlYUmxSV3hsYldWdWRDZ2dYQ0pwYm5CMWRGd2lJQ2s3WEc1Y2RGeDBYSFJ5WlhSMWNtNGdZaUFyS3l3Z2RDNWhZM1JwYjI0Z1BTQm9Ma05NU1VWT1ZGOUZWa1ZPVkY5RlRrUlFUMGxPVkN3Z2RDNXRaWFJvYjJRZ1BTQmNJbEJQVTFSY0lpd2dkQzUwWVhKblpYUWdQU0IzSUNzZ1lpd2dkQzVwWkNBOUlIa2dLeUJpTENCbExuUjVjR1VnUFNCY0ltaHBaR1JsYmx3aUxDQmxMbTVoYldVZ1BTQmNJbVJ1ZEZ3aUxDQmxMblpoYkhWbElEMGdZeTVsYm1GaWJHVmtLQ2tzSUc0dWRIbHdaU0E5SUZ3aWFHbGtaR1Z1WENJc0lHNHVibUZ0WlNBOUlGd2lkR1ozWDNKbFpHbHlaV04wWENJc0lHNHVkbUZzZFdVZ1BTQm9MbEpWUms5VlUxOVNSVVJKVWtWRFZDd2dkQzVoY0hCbGJtUkRhR2xzWkNnZ1pTQXBMQ0IwTG1Gd2NHVnVaRU5vYVd4a0tDQnVJQ2tzSUhSY2JseDBYSFI5WEc1Y2JseDBYSFJtZFc1amRHbHZiaUJVS0NrZ2UxeHVYSFJjZEZ4MGRtRnlJSFFnUFNCM0lDc2dZanRjYmx4MFhIUmNkSEpsZEhWeWJpQjFLQ0I3WEc1Y2RGeDBYSFJjZEdsa09pQjBMRnh1WEhSY2RGeDBYSFJ1WVcxbE9pQjBMRnh1WEhSY2RGeDBYSFIzYVdSMGFEb2dNQ3hjYmx4MFhIUmNkRngwYUdWcFoyaDBPaUF3TEZ4dVhIUmNkRngwWEhSaWIzSmtaWEk2SURCY2JseDBYSFJjZEgwc0lIc2daR2x6Y0d4aGVUb2dYQ0p1YjI1bFhDSWdmU3dnYnk1a2IyTWdLVnh1WEhSY2RIMWNibHh1WEhSY2RIUXVaWGh3YjNKMGN5QTlJSHRjYmx4MFhIUmNkR05zYVdWdWRFVjJaVzUwT2lCbWRXNWpkR2x2YmlnZ2RDd2daU3dnYml3Z2FTQXBJSHRjYmx4MFhIUmNkRngwS0daMWJtTjBhVzl1S0NCMExDQmxJQ2tnZTF4dVhIUmNkRngwWEhSY2RIWmhjaUJ1SUQwZ0lYQXVhWE5QWW1wbFkzUW9JSFFnS1N3Z2NpQTlJQ0VoWlNBbUppQWhjQzVwYzA5aWFtVmpkQ2dnWlNBcExDQnBJRDBnYmlCOGZDQnlPMXh1WEhSY2RGeDBYSFJjZEhKbGRIVnliaUJwWEc1Y2RGeDBYSFJjZEgwcEtDQjBMQ0JsSUNrZ2ZId2dLSFlnSmlZZ2RpZ2dZWEpuZFcxbGJuUnpJQ2tzSUVVdWNISnZiV2x6WlM1MGFHVnVLQ0JtZFc1amRHbHZiaWdwSUh0Y2JseDBYSFJjZEZ4MFhIUWhablZ1WTNScGIyNG9JSFFzSUdVZ0tTQjdYRzVjZEZ4MFhIUmNkRngwWEhSMllYSWdiaXdnYVN3Z2N6dGNibHgwWEhSY2RGeDBYSFJjZEhBdWFYTlBZbXBsWTNRb0lIUWdLU0FtSmlCd0xtbHpUMkpxWldOMEtDQmxJQ2tnSmlZZ0tHd3ViRzluS0NCMExDQmxJQ2tzSUhNZ1BTQm9MbVpzWVhSMFpXNURiR2xsYm5SRmRtVnVkRkJoZVd4dllXUW9JSFFzSUdVZ0tTd2dLRzRnUFNCeUxtWnBjbk4wUTJocGJHUXBMblpoYkhWbElEMGdLeUFvS3lCdUxuWmhiSFZsSUh4OElITXVaRzUwSUh4OElEQXBMQ0FvYVNBOUlHOHVZM0psWVhSbFJXeGxiV1Z1ZENnZ1hDSnBibkIxZEZ3aUlDa3BMblI1Y0dVZ1BTQmNJbWhwWkdSbGJsd2lMQ0JwTG01aGJXVWdQU0JjSW14Y0lpd2dhUzUyWVd4MVpTQTlJR2d1YzNSeWFXNW5hV1o1S0NCeklDa3NJSEl1WVhCd1pXNWtRMmhwYkdRb0lHa2dLU2xjYmx4MFhIUmNkRngwWEhSOUtDQm9MbVp2Y20xaGRFTnNhV1Z1ZEVWMlpXNTBUbUZ0WlhOd1lXTmxLQ0IwSUNrc0lHZ3VabTl5YldGMFEyeHBaVzUwUlhabGJuUkVZWFJoS0NCbExDQnVMQ0JwSUNrZ0tWeHVYSFJjZEZ4MFhIUjlJQ2twWEc1Y2RGeDBYSFI5TEZ4dVhIUmNkRngwWm14MWMyZzZJR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWEhSeVpYUjFjbTRnUlM1d2NtOXRhWE5sTG5Sb1pXNG9JR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWEhSY2RIWmhjaUIwTzF4dVhIUmNkRngwWEhSY2RISmxkSFZ5YmlCeUxtTm9hV3hrY21WdUxteGxibWQwYUNBOFBTQXlJRDhnWmk1eVpXcGxZM1FvS1NBNklDaDBJRDBnWmk1aGJHd29JRnRjYmx4MFhIUmNkRngwWEhSY2RHOHVaRzlqTG1KdlpIa3VZWEJ3Wlc1a1EyaHBiR1FvSUhJZ0tTeGNibHgwWEhSY2RGeDBYSFJjZEc4dVpHOWpMbUp2WkhrdVlYQndaVzVrUTJocGJHUW9JR2tnS1Z4dVhIUmNkRngwWEhSY2RGMGdLUzUwYUdWdUtDQm1kVzVqZEdsdmJpZ2dkQ0FwSUh0Y2JseDBYSFJjZEZ4MFhIUmNkSFpoY2lCbElEMGdkRnNnTUNCZExDQnVJRDBnZEZzZ01TQmRPMXh1WEhSY2RGeDBYSFJjZEZ4MGNtVjBkWEp1SUc0dVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnZ1hDSnNiMkZrWENJc0lHWjFibU4wYVc5dUtDa2dlMXh1WEhSY2RGeDBYSFJjZEZ4MFhIUWhablZ1WTNScGIyNG9JSFFzSUdVZ0tTQjdYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBjbVYwZFhKdUlHWjFibU4wYVc5dUtDa2dlMXh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwZG1GeUlHNGdQU0IwTG5CaGNtVnVkRTV2WkdVN1hHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUnVJQ1ltSUNodUxuSmxiVzkyWlVOb2FXeGtLQ0IwSUNrc0lHNHVjbVZ0YjNabFEyaHBiR1FvSUdVZ0tTbGNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUjlYRzVjZEZ4MFhIUmNkRngwWEhSY2RIMG9JR1VzSUc0Z0tTZ3BYRzVjZEZ4MFhIUmNkRngwWEhSOUlDa3NJR1V1YzNWaWJXbDBLQ2tzSUhSY2JseDBYSFJjZEZ4MFhIUjlJQ2tzSUhJZ1BTQjRLQ2tzSUdrZ1BTQlVLQ2tzSUhRcFhHNWNkRngwWEhSY2RIMGdLVnh1WEhSY2RGeDBmU3hjYmx4MFhIUmNkR2x1YVhRNklHWjFibU4wYVc5dUtDa2dlMXh1WEhSY2RGeDBYSFJ5WlhSMWNtNGdYeUEvSUVVdWNISnZiV2x6WlNBNklDZ29ieUE5SUc1bGR5QnRLQ0JoSUNrcExtbHVjMlZ5ZENnZ1hDSnlkV1p2ZFhNdGMyRnVaR0p2ZUZ3aUxDQnVkV3hzTENCN0lHUnBjM0JzWVhrNklGd2libTl1WlZ3aUlIMHNJR1oxYm1OMGFXOXVLQ0IwSUNrZ2UxeHVYSFJjZEZ4MFhIUmNkSE11WW05a2VTNWhjSEJsYm1SRGFHbHNaQ2dnZENBcFhHNWNkRngwWEhSY2RIMGdLUzUwYUdWdUtDQm1kVzVqZEdsdmJpZ3BJSHRjYmx4MFhIUmNkRngwWEhSdkxuTmxkRlJwZEd4bEtDQmNJbFIzYVhSMFpYSWdZVzVoYkhsMGFXTnpJR2xtY21GdFpWd2lJQ2tzSUhJZ1BTQjRLQ2tzSUdrZ1BTQlVLQ2tzSUVVdWNtVnpiMngyWlNnZ1czSXNJR2xkSUNsY2JseDBYSFJjZEZ4MGZTQXBMQ0JmSUQwZ0lUQXNJRVV1Y0hKdmJXbHpaU2xjYmx4MFhIUmNkSDFjYmx4MFhIUjlYRzVjZEgwc0lHWjFibU4wYVc5dUtDQjBMQ0JsTENCdUlDa2dlMXh1WEhSY2RIWmhjaUJ5SUQwZ2JpZ2dNQ0FwTzF4dVhIUmNkSFF1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1SUhRb0lHVWdLU0I3WEc1Y2RGeDBYSFIyWVhJZ2JpQTlJRnRkTzF4dVhIUmNkRngwY21WMGRYSnVJR1V1Wm05eVJXRmphQ2dnWm5WdVkzUnBiMjRvSUdVZ0tTQjdYRzVjZEZ4MFhIUmNkSFpoY2lCcElEMGdjaTVwYzFSNWNHVW9JRndpWVhKeVlYbGNJaXdnWlNBcElEOGdkQ2dnWlNBcElEb2dXMlZkTzF4dVhIUmNkRngwWEhSdUlEMGdiaTVqYjI1allYUW9JR2tnS1Z4dVhIUmNkRngwZlNBcExDQnVYRzVjZEZ4MGZWeHVYSFI5TENCbWRXNWpkR2x2YmlnZ2RDd2daU0FwSUh0Y2JseDBYSFIwTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlnZ2RDQXBJSHRjYmx4MFhIUmNkSEpsZEhWeWJpQjBMbVpwYkhSbGNpZ2dablZ1WTNScGIyNG9JR1VzSUc0Z0tTQjdYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQjBMbWx1WkdWNFQyWW9JR1VnS1NBOVBUMGdibHh1WEhSY2RGeDBmU0FwWEc1Y2RGeDBmVnh1WEhSOUxDQm1kVzVqZEdsdmJpZ2dkQ3dnWlN3Z2JpQXBJSHRjYmx4MFhIUjJZWElnY2lBOUlHNG9JRFF4SUNrc0lHa2dQU0J1S0NBd0lDa3NJRzhnUFNCdUtDQXhNVEVnS1R0Y2JseHVYSFJjZEdaMWJtTjBhVzl1SUhNb0tTQjdYRzVjZEZ4MFhIUnlMbUZ3Y0d4NUtDQjBhR2x6TENCaGNtZDFiV1Z1ZEhNZ0tWeHVYSFJjZEgxY2JseHVYSFJjZEhNdWNISnZkRzkwZVhCbElEMGdUMkpxWldOMExtTnlaV0YwWlNnZ2NpNXdjbTkwYjNSNWNHVWdLU3dnYVM1aGRXY29JSE11Y0hKdmRHOTBlWEJsTENCN0lHWmhZM1J2Y25rNklHOGdmU0FwTENCMExtVjRjRzl5ZEhNZ1BTQnpYRzVjZEgwc0lHWjFibU4wYVc5dUtDQjBMQ0JsTENCdUlDa2dlMXh1WEhSY2RIWmhjaUJ5SUQwZ2JpZ2dNak1nS1N3Z2FTQTlJRzRvSURBZ0tTd2dieUE5SUc0b0lEY2dLVHRjYmx4MFhIUjBMbVY0Y0c5eWRITWdQU0I3WEc1Y2RGeDBYSFJpWldadmNtVTZJR1oxYm1OMGFXOXVLQ0IwTENCbElDa2dlMXh1WEhSY2RGeDBYSFJ5WlhSMWNtNGdablZ1WTNScGIyNG9LU0I3WEc1Y2RGeDBYSFJjZEZ4MGRtRnlJRzRzSUdrZ1BTQjBhR2x6TENCdklEMGdZWEpuZFcxbGJuUnpPMXh1WEhSY2RGeDBYSFJjZEhKbGRIVnliaUJ1SUQwZ1pTNWhjSEJzZVNnZ2RHaHBjeXdnWVhKbmRXMWxiblJ6SUNrc0lISXVhWE5RY205dGFYTmxLQ0J1SUNrZ1B5QnVMblJvWlc0b0lHWjFibU4wYVc5dUtDa2dlMXh1WEhSY2RGeDBYSFJjZEZ4MGNtVjBkWEp1SUhRdVlYQndiSGtvSUdrc0lHOGdLVnh1WEhSY2RGeDBYSFJjZEgwZ0tTQTZJSFF1WVhCd2JIa29JSFJvYVhNc0lHRnlaM1Z0Wlc1MGN5QXBYRzVjZEZ4MFhIUmNkSDFjYmx4MFhIUmNkSDBzWEc1Y2RGeDBYSFJoWm5SbGNqb2dablZ1WTNScGIyNG9JSFFzSUdVZ0tTQjdYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQm1kVzVqZEdsdmJpZ3BJSHRjYmx4MFhIUmNkRngwWEhSMllYSWdiaXdnYVNBOUlIUm9hWE1zSUc4Z1BTQmhjbWQxYldWdWRITTdYRzVjYmx4MFhIUmNkRngwWEhSbWRXNWpkR2x2YmlCektDQjBMQ0JsSUNrZ2UxeHVYSFJjZEZ4MFhIUmNkRngwY21WMGRYSnVJSEl1YVhOUWNtOXRhWE5sS0NCbElDa2dQeUJsTG5Sb1pXNG9JR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWEhSY2RGeDBYSFJ5WlhSMWNtNGdkRnh1WEhSY2RGeDBYSFJjZEZ4MGZTQXBJRG9nZEZ4dVhIUmNkRngwWEhSY2RIMWNibHh1WEhSY2RGeDBYSFJjZEhKbGRIVnliaUJ1SUQwZ2RDNWhjSEJzZVNnZ2RHaHBjeXdnWVhKbmRXMWxiblJ6SUNrc0lISXVhWE5RY205dGFYTmxLQ0J1SUNrZ1B5QnVMblJvWlc0b0lHWjFibU4wYVc5dUtDQjBJQ2tnZTF4dVhIUmNkRngwWEhSY2RGeDBjbVYwZFhKdUlITW9JSFFzSUdVdVlYQndiSGtvSUdrc0lHOGdLU0FwWEc1Y2RGeDBYSFJjZEZ4MGZTQXBJRG9nY3lnZ2Jpd2daUzVoY0hCc2VTZ2dkR2hwY3l3Z1lYSm5kVzFsYm5SeklDa2dLVnh1WEhSY2RGeDBYSFI5WEc1Y2RGeDBYSFI5TEZ4dVhIUmNkRngwWVhKdmRXNWtPaUJtZFc1amRHbHZiaWdnZEN3Z1pTQXBJSHRjYmx4MFhIUmNkRngwY21WMGRYSnVJR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWEhSY2RIWmhjaUJ1SUQwZ2FTNTBiMUpsWVd4QmNuSmhlU2dnWVhKbmRXMWxiblJ6SUNrN1hHNWNkRngwWEhSY2RGeDBjbVYwZFhKdUlHNHVkVzV6YUdsbWRDZ2dieWdnZEN3Z2RHaHBjeUFwSUNrc0lHVXVZWEJ3Ykhrb0lIUm9hWE1zSUc0Z0tWeHVYSFJjZEZ4MFhIUjlYRzVjZEZ4MFhIUjlYRzVjZEZ4MGZWeHVYSFI5TENCbWRXNWpkR2x2YmlnZ2RDd2daU3dnYmlBcElIdGNibHgwWEhSMllYSWdjaUE5SUc0b0lERXdJQ2tzSUdrZ1BTQnVLQ0F4T0NBcExDQnZJRDBnYmlnZ05ESWdLU3dnY3lBOUlHNG9JRFlnS1N3Z1lTQTlJRzRvSURBZ0tUdGNibHgwWEhSMExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpZ3BJSHRjYmx4MFhIUmNkSFpoY2lCMElEMGdieWdwTzF4dVhHNWNkRngwWEhSbWRXNWpkR2x2YmlCbEtDQmxJQ2tnZTF4dVhIUmNkRngwWEhSMExtRndjR3g1S0NCMGFHbHpMQ0JoY21kMWJXVnVkSE1nS1N3Z1QySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLQ0IwYUdsekxDQmNJblJoY21kbGRFZHNiMkpoYkZ3aUxDQjdJSFpoYkhWbE9pQmxJSDBnS1Z4dVhIUmNkRngwZlZ4dVhHNWNkRngwWEhSeVpYUjFjbTRnWlM1d2NtOTBiM1I1Y0dVZ1BTQlBZbXBsWTNRdVkzSmxZWFJsS0NCMExuQnliM1J2ZEhsd1pTQXBMQ0JoTG1GMVp5Z2daUzV3Y205MGIzUjVjR1VzSUh0Y2JseDBYSFJjZEZ4MGFXUTZJRzUxYkd3c1hHNWNkRngwWEhSY2RHbHVhWFJwWVd4cGVtVmtPaUFoTVN4Y2JseDBYSFJjZEZ4MGQybGtkR2c2SURBc1hHNWNkRngwWEhSY2RHaGxhV2RvZERvZ01DeGNibHgwWEhSY2RGeDBjMkZ1WkdKdmVFVnNPaUJ1ZFd4c0xGeHVYSFJjZEZ4MFhIUnBibk5sY25RNklHWjFibU4wYVc5dUtDa2dlMXh1WEhSY2RGeDBYSFJjZEhKbGRIVnliaUJ6TG5KbGFtVmpkQ2dwWEc1Y2RGeDBYSFJjZEgwc1hHNWNkRngwWEhSY2RHOXVVbVZ6YVhwbE9pQm1kVzVqZEdsdmJpZ3BJSHRjYmx4MFhIUmNkRngwZlN4Y2JseDBYSFJjZEZ4MFlXUmtRMnhoYzNNNklHWjFibU4wYVc5dUtDQjBJQ2tnZTF4dVhIUmNkRngwWEhSY2RIWmhjaUJsSUQwZ2RHaHBjeTV6WVc1a1ltOTRSV3c3WEc1Y2RGeDBYSFJjZEZ4MGNtVjBkWEp1SUhRZ1BTQkJjbkpoZVM1cGMwRnljbUY1S0NCMElDa2dQeUIwSURvZ1czUmRMQ0JwTG5keWFYUmxLQ0JtZFc1amRHbHZiaWdwSUh0Y2JseDBYSFJjZEZ4MFhIUmNkSFF1Wm05eVJXRmphQ2dnWm5WdVkzUnBiMjRvSUhRZ0tTQjdYRzVjZEZ4MFhIUmNkRngwWEhSY2RISXVZV1JrS0NCbExDQjBJQ2xjYmx4MFhIUmNkRngwWEhSY2RIMGdLVnh1WEhSY2RGeDBYSFJjZEgwZ0tWeHVYSFJjZEZ4MFhIUjlMRnh1WEhSY2RGeDBYSFJ5WlcxdmRtVkRiR0Z6Y3pvZ1puVnVZM1JwYjI0b0lIUWdLU0I3WEc1Y2RGeDBYSFJjZEZ4MGRtRnlJR1VnUFNCMGFHbHpMbk5oYm1SaWIzaEZiRHRjYmx4MFhIUmNkRngwWEhSeVpYUjFjbTRnZENBOUlFRnljbUY1TG1selFYSnlZWGtvSUhRZ0tTQS9JSFFnT2lCYmRGMHNJR2t1ZDNKcGRHVW9JR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWEhSY2RGeDBkQzVtYjNKRllXTm9LQ0JtZFc1amRHbHZiaWdnZENBcElIdGNibHgwWEhSY2RGeDBYSFJjZEZ4MGNpNXlaVzF2ZG1Vb0lHVXNJSFFnS1Z4dVhIUmNkRngwWEhSY2RGeDBmU0FwWEc1Y2RGeDBYSFJjZEZ4MGZTQXBYRzVjZEZ4MFhIUmNkSDBzWEc1Y2RGeDBYSFJjZEhOMGVXeGxVMlZzWmpvZ1puVnVZM1JwYjI0b0lIUWdLU0I3WEc1Y2RGeDBYSFJjZEZ4MGRtRnlJR1VnUFNCMGFHbHpPMXh1WEhSY2RGeDBYSFJjZEhKbGRIVnliaUJwTG5keWFYUmxLQ0JtZFc1amRHbHZiaWdwSUh0Y2JseDBYSFJjZEZ4MFhIUmNkR0V1Wm05eVNXNG9JSFFzSUdaMWJtTjBhVzl1S0NCMExDQnVJQ2tnZTF4dVhIUmNkRngwWEhSY2RGeDBYSFJsTG5OaGJtUmliM2hGYkM1emRIbHNaVnNnZENCZElEMGdibHh1WEhSY2RGeDBYSFJjZEZ4MGZTQXBYRzVjZEZ4MFhIUmNkRngwZlNBcFhHNWNkRngwWEhSY2RIMWNibHgwWEhSY2RIMGdLU3dnWlZ4dVhIUmNkSDFjYmx4MGZTd2dablZ1WTNScGIyNG9JSFFzSUdVc0lHNGdLU0I3WEc1Y2RGeDBkbUZ5SUhJZ1BTQnVLQ0EwSUNrc0lHa2dQU0J1S0NBeE1DQXBMQ0J2SUQwZ2JpZ2dNVGdnS1N3Z2N5QTlJRzRvSURVMUlDa3NJR0VnUFNCdUtDQXlOeUFwTENCMUlEMGdiaWdnTlRZZ0tTd2dZeUE5SUc0b0lEUTBJQ2tzSUdRZ1BTQnVLQ0EwTlNBcExGeHVYSFJjZEZ4MFppQTlJRzRvSURNeUlDa3NJR3dnUFNCdUtDQXhNaUFwTENCb0lEMGdiaWdnTkRZZ0tTd2djQ0E5SUc0b0lESWdLU3dnYlNBOUlHNG9JRFlnS1N3Z2RpQTlJRzRvSURBZ0tTd2daeUE5SUc0b0lEa2dLU3dnZHlBOUlHNG9JREkwSUNrc1hHNWNkRngwWEhSNUlEMGdiaWdnTnlBcExDQmlJRDBnZXlCaGJHeHZkMloxYkd4elkzSmxaVzQ2SUZ3aWRISjFaVndpSUgwc0lGOGdQU0I3WEc1Y2RGeDBYSFJjZEhCdmMybDBhVzl1T2lCY0ltRmljMjlzZFhSbFhDSXNYRzVjZEZ4MFhIUmNkSFpwYzJsaWFXeHBkSGs2SUZ3aWFHbGtaR1Z1WENJc1hHNWNkRngwWEhSY2RHUnBjM0JzWVhrNklGd2lZbXh2WTJ0Y0lpeGNibHgwWEhSY2RGeDBkMmxrZEdnNklGd2lNSEI0WENJc1hHNWNkRngwWEhSY2RHaGxhV2RvZERvZ1hDSXdjSGhjSWl4Y2JseDBYSFJjZEZ4MGNHRmtaR2x1WnpvZ1hDSXdYQ0lzWEc1Y2RGeDBYSFJjZEdKdmNtUmxjam9nWENKdWIyNWxYQ0pjYmx4MFhIUmNkSDBzSUVVZ1BTQjdYRzVjZEZ4MFhIUmNkSEJ2YzJsMGFXOXVPaUJjSW5OMFlYUnBZMXdpTEZ4dVhIUmNkRngwWEhSMmFYTnBZbWxzYVhSNU9pQmNJblpwYzJsaWJHVmNJbHh1WEhSY2RGeDBmU3dnZUNBOUlGd2lVMkZ1WkdKdmVGSnZiM1JjSWl3Z1ZDQTlJRndpTGxOaGJtUmliM2hTYjI5MElIc2daR2x6Y0d4aGVUb2dibTl1WlRzZ2ZWd2lMQ0JCSUQwZ05UQTdYRzVjYmx4MFhIUm1kVzVqZEdsdmJpQlRLQ0IwTENCbExDQnVMQ0J5SUNrZ2UxeHVYSFJjZEZ4MGNtVjBkWEp1SUdVZ1BTQjJMbUYxWnlnZ2V5QnBaRG9nZENCOUxDQmlMQ0JsSUNrc0lHNGdQU0IyTG1GMVp5Z2dlMzBzSUY4c0lHNGdLU3dnWmlnZ1pTd2diaXdnY2lBcFhHNWNkRngwZlZ4dVhHNWNkRngwWm5WdVkzUnBiMjRnVWlnZ2RDd2daU3dnYml3Z2FTd2djeUFwSUh0Y2JseDBYSFJjZEhaaGNpQmhJRDBnYm1WM0lIQXNJSFVnUFNCM0xtZGxibVZ5WVhSbEtDa3NJR01nUFNCVEtDQjBMQ0JsTENCdUxDQnpJQ2s3WEc1Y2RGeDBYSFJ5WlhSMWNtNGdaeTV6WlhRb0lGdGNJbk5oYm1SaWIzaGNJaXdnZFYwc0lHWjFibU4wYVc5dUtDa2dlMXh1WEhSY2RGeDBYSFIyWVhJZ2RDQTlJR011WTI5dWRHVnVkRmRwYm1SdmR5NWtiMk4xYldWdWREdGNibHgwWEhSY2RGeDBieTUzY21sMFpTZ2dablZ1WTNScGIyNG9LU0I3WEc1Y2RGeDBYSFJjZEZ4MGRDNTNjbWwwWlNnZ1hDSThJVVJQUTFSWlVFVWdhSFJ0YkQ0OGFIUnRiRDQ4YUdWaFpENDhMMmhsWVdRK1BHSnZaSGsrUEM5aWIyUjVQand2YUhSdGJENWNJaUFwWEc1Y2RGeDBYSFJjZEgwZ0tTNTBhR1Z1S0NCbWRXNWpkR2x2YmlncElIdGNibHgwWEhSY2RGeDBYSFIwTG1Oc2IzTmxLQ2tzSUdFdWNtVnpiMngyWlNnZ1l5QXBYRzVjZEZ4MFhIUmNkSDBnS1Z4dVhIUmNkRngwZlNBcExDQmpMbk55WXlBOUlGdGNibHgwWEhSY2RGeDBYQ0pxWVhaaGMyTnlhWEIwT2x3aUxGeHVYSFJjZEZ4MFhIUW5aRzlqZFcxbGJuUXVkM0pwZEdVb1hDSmNJaWs3Snl4Y2JseDBYSFJjZEZ4MFhDSjBjbmtnZXlCM2FXNWtiM2N1Y0dGeVpXNTBMbVJ2WTNWdFpXNTBPeUI5WENJc1hHNWNkRngwWEhSY2RDZGpZWFJqYUNBb1pTa2dleUJrYjJOMWJXVnVkQzVrYjIxaGFXNDlYQ0luSUNzZ2NpNWtiMjFoYVc0Z0t5QW5YQ0k3SUgwbkxGeHVYSFJjZEZ4MFhIUmNJbmRwYm1SdmR5NXdZWEpsYm5RdVhDSWdLeUJuTG1aMWJHeFFZWFJvS0NCYlhDSnpZVzVrWW05NFhDSXNJSFZkSUNrZ0t5QmNJaWdwTzF3aVhHNWNkRngwWEhSZExtcHZhVzRvSUZ3aVhDSWdLU3dnWXk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NCY0ltVnljbTl5WENJc0lHRXVjbVZxWldOMExDQWhNU0FwTENCdkxuZHlhWFJsS0NCbWRXNWpkR2x2YmlncElIdGNibHgwWEhSY2RGeDBhUzV3WVhKbGJuUk9iMlJsTG5KbGNHeGhZMlZEYUdsc1pDZ2dZeXdnYVNBcFhHNWNkRngwWEhSOUlDa3NJR0V1Y0hKdmJXbHpaVnh1WEhSY2RIMWNibHh1WEhSY2RIUXVaWGh3YjNKMGN5QTlJR0V1WTI5MWNHeGxLQ0J1S0NBMU55QXBMQ0JtZFc1amRHbHZiaWdnZENBcElIdGNibHgwWEhSY2RIUXViM1psY25KcFpHVlFjbTl3WlhKMGVTZ2dYQ0pwWkZ3aUxDQjdYRzVjZEZ4MFhIUmNkR2RsZERvZ1puVnVZM1JwYjI0b0tTQjdYRzVjZEZ4MFhIUmNkRngwY21WMGRYSnVJSFJvYVhNdWMyRnVaR0p2ZUVWc0lDWW1JSFJvYVhNdWMyRnVaR0p2ZUVWc0xtbGtYRzVjZEZ4MFhIUmNkSDFjYmx4MFhIUmNkSDBnS1N3Z2RDNXZkbVZ5Y21sa1pWQnliM0JsY25SNUtDQmNJbWx1YVhScFlXeHBlbVZrWENJc0lIdGNibHgwWEhSY2RGeDBaMlYwT2lCbWRXNWpkR2x2YmlncElIdGNibHgwWEhSY2RGeDBYSFJ5WlhSMWNtNGdJU0YwYUdsekxuZHBibHh1WEhSY2RGeDBYSFI5WEc1Y2RGeDBYSFI5SUNrc0lIUXViM1psY25KcFpHVlFjbTl3WlhKMGVTZ2dYQ0ozYVdSMGFGd2lMQ0I3WEc1Y2RGeDBYSFJjZEdkbGREb2dablZ1WTNScGIyNG9LU0I3WEc1Y2RGeDBYSFJjZEZ4MGNtVjBkWEp1SUhSb2FYTXVYM2RwWkhSb1hHNWNkRngwWEhSY2RIMWNibHgwWEhSY2RIMGdLU3dnZEM1dmRtVnljbWxrWlZCeWIzQmxjblI1S0NCY0ltaGxhV2RvZEZ3aUxDQjdYRzVjZEZ4MFhIUmNkR2RsZERvZ1puVnVZM1JwYjI0b0tTQjdYRzVjZEZ4MFhIUmNkRngwY21WMGRYSnVJSFJvYVhNdVgyaGxhV2RvZEZ4dVhIUmNkRngwWEhSOVhHNWNkRngwWEhSOUlDa3NJSFF1YjNabGNuSnBaR1ZRY205d1pYSjBlU2dnWENKellXNWtZbTk0Uld4Y0lpd2dlMXh1WEhSY2RGeDBYSFJuWlhRNklHWjFibU4wYVc5dUtDa2dlMXh1WEhSY2RGeDBYSFJjZEhKbGRIVnliaUIwYUdsekxtbG1jbUZ0WlVWc1hHNWNkRngwWEhSY2RIMWNibHgwWEhSY2RIMGdLU3dnZEM1a1pXWnBibVZRY205d1pYSjBlU2dnWENKcFpuSmhiV1ZGYkZ3aUxDQjdYRzVjZEZ4MFhIUmNkR2RsZERvZ1puVnVZM1JwYjI0b0tTQjdYRzVjZEZ4MFhIUmNkRngwY21WMGRYSnVJSFJvYVhNdVgybG1jbUZ0WlZ4dVhIUmNkRngwWEhSOVhHNWNkRngwWEhSOUlDa3NJSFF1WkdWbWFXNWxVSEp2Y0dWeWRIa29JRndpY205dmRFVnNYQ0lzSUh0Y2JseDBYSFJjZEZ4MFoyVjBPaUJtZFc1amRHbHZiaWdwSUh0Y2JseDBYSFJjZEZ4MFhIUnlaWFIxY200Z2RHaHBjeTVrYjJNZ0ppWWdkR2hwY3k1a2IyTXVaRzlqZFcxbGJuUkZiR1Z0Wlc1MFhHNWNkRngwWEhSY2RIMWNibHgwWEhSY2RIMGdLU3dnZEM1a1pXWnBibVZRY205d1pYSjBlU2dnWENKM2FXUm5aWFJGYkZ3aUxDQjdYRzVjZEZ4MFhIUmNkR2RsZERvZ1puVnVZM1JwYjI0b0tTQjdYRzVjZEZ4MFhIUmNkRngwY21WMGRYSnVJSFJvYVhNdVpHOWpJQ1ltSUhSb2FYTXVaRzlqTG1KdlpIa3VabWx5YzNSRmJHVnRaVzUwUTJocGJHUmNibHgwWEhSY2RGeDBmVnh1WEhSY2RGeDBmU0FwTENCMExtUmxabWx1WlZCeWIzQmxjblI1S0NCY0luZHBibHdpTENCN1hHNWNkRngwWEhSY2RHZGxkRG9nWm5WdVkzUnBiMjRvS1NCN1hHNWNkRngwWEhSY2RGeDBjbVYwZFhKdUlIUm9hWE11YVdaeVlXMWxSV3dnSmlZZ2RHaHBjeTVwWm5KaGJXVkZiQzVqYjI1MFpXNTBWMmx1Wkc5M1hHNWNkRngwWEhSY2RIMWNibHgwWEhSY2RIMGdLU3dnZEM1a1pXWnBibVZRY205d1pYSjBlU2dnWENKa2IyTmNJaXdnZTF4dVhIUmNkRngwWEhSblpYUTZJR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWEhSY2RISmxkSFZ5YmlCMGFHbHpMbmRwYmlBbUppQjBhR2x6TG5kcGJpNWtiMk4xYldWdWRGeHVYSFJjZEZ4MFhIUjlYRzVjZEZ4MFhIUjlJQ2tzSUhRdVpHVm1hVzVsS0NCY0lsOTFjR1JoZEdWRFlXTm9aV1JFYVcxbGJuTnBiMjV6WENJc0lHWjFibU4wYVc5dUtDa2dlMXh1WEhSY2RGeDBYSFIyWVhJZ2RDQTlJSFJvYVhNN1hHNWNkRngwWEhSY2RISmxkSFZ5YmlCdkxuSmxZV1FvSUdaMWJtTjBhVzl1S0NrZ2UxeHVYSFJjZEZ4MFhIUmNkSFpoY2lCbExDQnVJRDBnYUNnZ2RDNXpZVzVrWW05NFJXd2dLVHRjYmx4MFhIUmNkRngwWEhSY0luWnBjMmxpYkdWY0lpQTlQU0IwTG5OaGJtUmliM2hGYkM1emRIbHNaUzUyYVhOcFltbHNhWFI1SUQ4Z2RDNWZkMmxrZEdnZ1BTQnVMbmRwWkhSb0lEb2dLR1VnUFNCb0tDQjBMbk5oYm1SaWIzaEZiQzV3WVhKbGJuUkZiR1Z0Wlc1MElDa3VkMmxrZEdnc0lIUXVYM2RwWkhSb0lEMGdUV0YwYUM1dGFXNG9JRzR1ZDJsa2RHZ3NJR1VnS1Nrc0lIUXVYMmhsYVdkb2RDQTlJRzR1YUdWcFoyaDBYRzVjZEZ4MFhIUmNkSDBnS1Z4dVhIUmNkRngwZlNBcExDQjBMbVJsWm1sdVpTZ2dYQ0pmYzJWMFZHRnlaMlYwVkc5Q2JHRnVhMXdpTENCbWRXNWpkR2x2YmlncElIdGNibHgwWEhSY2RGeDBkbUZ5SUhRZ1BTQjBhR2x6TG1OeVpXRjBaVVZzWlcxbGJuUW9JRndpWW1GelpWd2lJQ2s3WEc1Y2RGeDBYSFJjZEhRdWRHRnlaMlYwSUQwZ1hDSmZZbXhoYm10Y0lpd2dkR2hwY3k1a2IyTXVhR1ZoWkM1aGNIQmxibVJEYUdsc1pDZ2dkQ0FwWEc1Y2RGeDBYSFI5SUNrc0lIUXVaR1ZtYVc1bEtDQmNJbDlrYVdSU1pYTnBlbVZjSWl3Z1puVnVZM1JwYjI0b0tTQjdYRzVjZEZ4MFhIUmNkSFpoY2lCMElEMGdkR2hwY3l3Z1pTQTlJSFJvYVhNdVgzSmxjMmw2WlVoaGJtUnNaWEp6TG5Oc2FXTmxLQ0F3SUNrN1hHNWNkRngwWEhSY2RISmxkSFZ5YmlCMGFHbHpMbDkxY0dSaGRHVkRZV05vWldSRWFXMWxibk5wYjI1ektDa3VkR2hsYmlnZ1puVnVZM1JwYjI0b0tTQjdYRzVjZEZ4MFhIUmNkRngwWlM1bWIzSkZZV05vS0NCbWRXNWpkR2x2YmlnZ1pTQXBJSHRjYmx4MFhIUmNkRngwWEhSY2RHVW9JSFFnS1Z4dVhIUmNkRngwWEhSY2RIMGdLVnh1WEhSY2RGeDBYSFI5SUNsY2JseDBYSFJjZEgwZ0tTd2dkQzVrWldacGJtVW9JRndpYzJWMFZHbDBiR1ZjSWl3Z1puVnVZM1JwYjI0b0lIUWdLU0I3WEc1Y2RGeDBYSFJjZEhSb2FYTXVhV1p5WVcxbFJXd3VkR2wwYkdVZ1BTQjBYRzVjZEZ4MFhIUjlJQ2tzSUhRdWIzWmxjbkpwWkdVb0lGd2lZM0psWVhSbFJXeGxiV1Z1ZEZ3aUxDQm1kVzVqZEdsdmJpZ2dkQ0FwSUh0Y2JseDBYSFJjZEZ4MGNtVjBkWEp1SUhSb2FYTXVaRzlqTG1OeVpXRjBaVVZzWlcxbGJuUW9JSFFnS1Z4dVhIUmNkRngwZlNBcExDQjBMbTkyWlhKeWFXUmxLQ0JjSW1OeVpXRjBaVVp5WVdkdFpXNTBYQ0lzSUdaMWJtTjBhVzl1S0NrZ2UxeHVYSFJjZEZ4MFhIUnlaWFIxY200Z2RHaHBjeTVrYjJNdVkzSmxZWFJsUkc5amRXMWxiblJHY21GbmJXVnVkQ2dwWEc1Y2RGeDBYSFI5SUNrc0lIUXViM1psY25KcFpHVW9JRndpYUhSdGJGUnZSV3hsYldWdWRGd2lMQ0JtZFc1amRHbHZiaWdnZENBcElIdGNibHgwWEhSY2RGeDBkbUZ5SUdVN1hHNWNkRngwWEhSY2RISmxkSFZ5YmlBb1pTQTlJSFJvYVhNdVkzSmxZWFJsUld4bGJXVnVkQ2dnWENKa2FYWmNJaUFwS1M1cGJtNWxja2hVVFV3Z1BTQjBMQ0JsTG1acGNuTjBSV3hsYldWdWRFTm9hV3hrWEc1Y2RGeDBYSFI5SUNrc0lIUXViM1psY25KcFpHVW9JRndpYUdGelUyVnNaV04wWldSVVpYaDBYQ0lzSUdaMWJtTjBhVzl1S0NrZ2UxeHVYSFJjZEZ4MFhIUnlaWFIxY200Z0lTRnpMbWRsZEZObGJHVmpkR1ZrVkdWNGRDZ2dkR2hwY3k1M2FXNGdLVnh1WEhSY2RGeDBmU0FwTENCMExtOTJaWEp5YVdSbEtDQmNJbUZrWkZKdmIzUkRiR0Z6YzF3aUxDQm1kVzVqZEdsdmJpZ2dkQ0FwSUh0Y2JseDBYSFJjZEZ4MGRtRnlJR1VnUFNCMGFHbHpMbkp2YjNSRmJEdGNibHgwWEhSY2RGeDBjbVYwZFhKdUlIUWdQU0JCY25KaGVTNXBjMEZ5Y21GNUtDQjBJQ2tnUHlCMElEb2dXM1JkTENCMGFHbHpMbWx1YVhScFlXeHBlbVZrSUQ4Z2J5NTNjbWwwWlNnZ1puVnVZM1JwYjI0b0tTQjdYRzVjZEZ4MFhIUmNkRngwZEM1bWIzSkZZV05vS0NCbWRXNWpkR2x2YmlnZ2RDQXBJSHRjYmx4MFhIUmNkRngwWEhSY2RHa3VZV1JrS0NCbExDQjBJQ2xjYmx4MFhIUmNkRngwWEhSOUlDbGNibHgwWEhSY2RGeDBmU0FwSURvZ2JTNXlaV3BsWTNRb0lHNWxkeUJGY25KdmNpZ2dYQ0p6WVc1a1ltOTRJRzV2ZENCcGJtbDBhV0ZzYVhwbFpGd2lJQ2tnS1Z4dVhIUmNkRngwZlNBcExDQjBMbTkyWlhKeWFXUmxLQ0JjSW5KbGJXOTJaVkp2YjNSRGJHRnpjMXdpTENCbWRXNWpkR2x2YmlnZ2RDQXBJSHRjYmx4MFhIUmNkRngwZG1GeUlHVWdQU0IwYUdsekxuSnZiM1JGYkR0Y2JseDBYSFJjZEZ4MGNtVjBkWEp1SUhRZ1BTQkJjbkpoZVM1cGMwRnljbUY1S0NCMElDa2dQeUIwSURvZ1czUmRMQ0IwYUdsekxtbHVhWFJwWVd4cGVtVmtJRDhnYnk1M2NtbDBaU2dnWm5WdVkzUnBiMjRvS1NCN1hHNWNkRngwWEhSY2RGeDBkQzVtYjNKRllXTm9LQ0JtZFc1amRHbHZiaWdnZENBcElIdGNibHgwWEhSY2RGeDBYSFJjZEdrdWNtVnRiM1psS0NCbExDQjBJQ2xjYmx4MFhIUmNkRngwWEhSOUlDbGNibHgwWEhSY2RGeDBmU0FwSURvZ2JTNXlaV3BsWTNRb0lHNWxkeUJGY25KdmNpZ2dYQ0p6WVc1a1ltOTRJRzV2ZENCcGJtbDBhV0ZzYVhwbFpGd2lJQ2tnS1Z4dVhIUmNkRngwZlNBcExDQjBMbTkyWlhKeWFXUmxLQ0JjSW1oaGMxSnZiM1JEYkdGemMxd2lMQ0JtZFc1amRHbHZiaWdnZENBcElIdGNibHgwWEhSY2RGeDBjbVYwZFhKdUlHa3VjSEpsYzJWdWRDZ2dkR2hwY3k1eWIyOTBSV3dzSUhRZ0tWeHVYSFJjZEZ4MGZTQXBMQ0IwTG1SbFptbHVaU2dnWENKaFpHUlRkSGxzWlZOb1pXVjBYQ0lzSUdaMWJtTjBhVzl1S0NCMExDQmxJQ2tnZTF4dVhIUmNkRngwWEhSMllYSWdiaXdnY2lBOUlHNWxkeUJ3TzF4dVhIUmNkRngwWEhSeVpYUjFjbTRnZEdocGN5NXBibWwwYVdGc2FYcGxaQ0EvSUNnb2JpQTlJSFJvYVhNdVkzSmxZWFJsUld4bGJXVnVkQ2dnWENKc2FXNXJYQ0lnS1NrdWRIbHdaU0E5SUZ3aWRHVjRkQzlqYzNOY0lpd2diaTV5Wld3Z1BTQmNJbk4wZVd4bGMyaGxaWFJjSWl3Z2JpNW9jbVZtSUQwZ2RDd2diaTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ0JjSW14dllXUmNJaXdnY2k1eVpYTnZiSFpsTENBaE1TQXBMQ0J1TG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSUZ3aVpYSnliM0pjSWl3Z2NpNXlaV3BsWTNRc0lDRXhJQ2tzSUc4dWQzSnBkR1VvSUhrb0lHVXNJRzUxYkd3c0lHNGdLU0FwTG5Sb1pXNG9JR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWEhSY2RISmxkSFZ5YmlCMUtDQjBJQ2t1ZEdobGJpZ2djaTV5WlhOdmJIWmxMQ0J5TG5KbGFtVmpkQ0FwTENCeUxuQnliMjFwYzJWY2JseDBYSFJjZEZ4MGZTQXBLU0E2SUcwdWNtVnFaV04wS0NCdVpYY2dSWEp5YjNJb0lGd2ljMkZ1WkdKdmVDQnViM1FnYVc1cGRHbGhiR2w2WldSY0lpQXBJQ2xjYmx4MFhIUmNkSDBnS1N3Z2RDNXZkbVZ5Y21sa1pTZ2dYQ0p3Y21Wd1pXNWtVM1I1YkdWVGFHVmxkRndpTENCbWRXNWpkR2x2YmlnZ2RDQXBJSHRjYmx4MFhIUmNkRngwZG1GeUlHVWdQU0IwYUdsekxtUnZZenRjYmx4MFhIUmNkRngwY21WMGRYSnVJSFJvYVhNdVlXUmtVM1I1YkdWVGFHVmxkQ2dnZEN3Z1puVnVZM1JwYjI0b0lIUWdLU0I3WEc1Y2RGeDBYSFJjZEZ4MGRtRnlJRzRnUFNCbExtaGxZV1F1Wm1seWMzUkZiR1Z0Wlc1MFEyaHBiR1E3WEc1Y2RGeDBYSFJjZEZ4MGNtVjBkWEp1SUc0Z1B5QmxMbWhsWVdRdWFXNXpaWEowUW1WbWIzSmxLQ0IwTENCdUlDa2dPaUJsTG1obFlXUXVZWEJ3Wlc1a1EyaHBiR1FvSUhRZ0tWeHVYSFJjZEZ4MFhIUjlJQ2xjYmx4MFhIUmNkSDBnS1N3Z2RDNXZkbVZ5Y21sa1pTZ2dYQ0poY0hCbGJtUlRkSGxzWlZOb1pXVjBYQ0lzSUdaMWJtTjBhVzl1S0NCMElDa2dlMXh1WEhSY2RGeDBYSFIyWVhJZ1pTQTlJSFJvYVhNdVpHOWpPMXh1WEhSY2RGeDBYSFJ5WlhSMWNtNGdkR2hwY3k1aFpHUlRkSGxzWlZOb1pXVjBLQ0IwTENCbWRXNWpkR2x2YmlnZ2RDQXBJSHRjYmx4MFhIUmNkRngwWEhSeVpYUjFjbTRnWlM1b1pXRmtMbUZ3Y0dWdVpFTm9hV3hrS0NCMElDbGNibHgwWEhSY2RGeDBmU0FwWEc1Y2RGeDBYSFI5SUNrc0lIUXVaR1ZtYVc1bEtDQmNJbUZrWkVOemMxd2lMQ0JtZFc1amRHbHZiaWdnZEN3Z1pTQXBJSHRjYmx4MFhIUmNkRngwZG1GeUlHNDdYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQmpMbWx1YkdsdVpWTjBlV3hsS0NrZ1B5QW9LRzRnUFNCMGFHbHpMbU55WldGMFpVVnNaVzFsYm5Rb0lGd2ljM1I1YkdWY0lpQXBLUzUwZVhCbElEMGdYQ0owWlhoMEwyTnpjMXdpTENCdUxtRndjR1Z1WkVOb2FXeGtLQ0IwYUdsekxtUnZZeTVqY21WaGRHVlVaWGgwVG05a1pTZ2dkQ0FwSUNrc0lHOHVkM0pwZEdVb0lIa29JR1VzSUc1MWJHd3NJRzRnS1NBcEtTQTZJQ2hzTG1SbGRrVnljbTl5S0NCY0lrTlRVQ0JsYm1GaWJHVmtPeUJqWVc1dWIzUWdaVzFpWldRZ2FXNXNhVzVsSUhOMGVXeGxjMXdpSUNrc0lHMHVjbVZ6YjJ4MlpTZ3BLVnh1WEhSY2RGeDBmU0FwTENCMExtOTJaWEp5YVdSbEtDQmNJbkJ5WlhCbGJtUkRjM05jSWl3Z1puVnVZM1JwYjI0b0lIUWdLU0I3WEc1Y2RGeDBYSFJjZEhaaGNpQmxJRDBnZEdocGN5NWtiMk03WEc1Y2RGeDBYSFJjZEhKbGRIVnliaUIwYUdsekxtRmtaRU56Y3lnZ2RDd2dablZ1WTNScGIyNG9JSFFnS1NCN1hHNWNkRngwWEhSY2RGeDBkbUZ5SUc0Z1BTQmxMbWhsWVdRdVptbHljM1JGYkdWdFpXNTBRMmhwYkdRN1hHNWNkRngwWEhSY2RGeDBjbVYwZFhKdUlHNGdQeUJsTG1obFlXUXVhVzV6WlhKMFFtVm1iM0psS0NCMExDQnVJQ2tnT2lCbExtaGxZV1F1WVhCd1pXNWtRMmhwYkdRb0lIUWdLVnh1WEhSY2RGeDBYSFI5SUNsY2JseDBYSFJjZEgwZ0tTd2dkQzV2ZG1WeWNtbGtaU2dnWENKaGNIQmxibVJEYzNOY0lpd2dablZ1WTNScGIyNG9JSFFnS1NCN1hHNWNkRngwWEhSY2RIWmhjaUJsSUQwZ2RHaHBjeTVrYjJNN1hHNWNkRngwWEhSY2RISmxkSFZ5YmlCMGFHbHpMbUZrWkVOemN5Z2dkQ3dnWm5WdVkzUnBiMjRvSUhRZ0tTQjdYRzVjZEZ4MFhIUmNkRngwY21WMGRYSnVJR1V1YUdWaFpDNWhjSEJsYm1SRGFHbHNaQ2dnZENBcFhHNWNkRngwWEhSY2RIMGdLVnh1WEhSY2RGeDBmU0FwTENCMExtOTJaWEp5YVdSbEtDQmNJbTFoYTJWV2FYTnBZbXhsWENJc0lHWjFibU4wYVc5dUtDa2dlMXh1WEhSY2RGeDBYSFIyWVhJZ2RDQTlJSFJvYVhNN1hHNWNkRngwWEhSY2RISmxkSFZ5YmlCMGFHbHpMbk4wZVd4bFUyVnNaaWdnUlNBcExuUm9aVzRvSUdaMWJtTjBhVzl1S0NrZ2UxeHVYSFJjZEZ4MFhIUmNkSFF1WDNWd1pHRjBaVU5oWTJobFpFUnBiV1Z1YzJsdmJuTW9LVnh1WEhSY2RGeDBYSFI5SUNsY2JseDBYSFJjZEgwZ0tTd2dkQzV2ZG1WeWNtbGtaU2dnWENKcGJtcGxZM1JYYVdSblpYUkZiRndpTENCbWRXNWpkR2x2YmlnZ2RDQXBJSHRjYmx4MFhIUmNkRngwZG1GeUlHVWdQU0IwYUdsek8xeHVYSFJjZEZ4MFhIUnlaWFIxY200Z2RHaHBjeTVwYm1sMGFXRnNhWHBsWkNBL0lIUm9hWE11ZDJsa1oyVjBSV3dnUHlCdExuSmxhbVZqZENnZ2JtVjNJRVZ5Y205eUtDQmNJbmRwWkdkbGRDQmhiSEpsWVdSNUlHbHVhbVZqZEdWa1hDSWdLU0FwSURvZ2J5NTNjbWwwWlNnZ1puVnVZM1JwYjI0b0tTQjdYRzVjZEZ4MFhIUmNkRngwWlM1a2IyTXVZbTlrZVM1aGNIQmxibVJEYUdsc1pDZ2dkQ0FwWEc1Y2RGeDBYSFJjZEgwZ0tTQTZJRzB1Y21WcVpXTjBLQ0J1WlhjZ1JYSnliM0lvSUZ3aWMyRnVaR0p2ZUNCdWIzUWdhVzVwZEdsaGJHbDZaV1JjSWlBcElDbGNibHgwWEhSY2RIMGdLU3dnZEM1dmRtVnljbWxrWlNnZ1hDSnRZWFJqYUVobGFXZG9kRlJ2UTI5dWRHVnVkRndpTENCbWRXNWpkR2x2YmlncElIdGNibHgwWEhSY2RGeDBkbUZ5SUhRc0lHVWdQU0IwYUdsek8xeHVYSFJjZEZ4MFhIUnlaWFIxY200Z2J5NXlaV0ZrS0NCbWRXNWpkR2x2YmlncElIdGNibHgwWEhSY2RGeDBYSFIwSUQwZ1pTNTNhV1JuWlhSRmJDQS9JR2dvSUdVdWQybGtaMlYwUld3Z0tTNW9aV2xuYUhRZ09pQXdYRzVjZEZ4MFhIUmNkSDBnS1N3Z2J5NTNjbWwwWlNnZ1puVnVZM1JwYjI0b0tTQjdYRzVjZEZ4MFhIUmNkRngwWlM1ellXNWtZbTk0Uld3dWMzUjViR1V1YUdWcFoyaDBJRDBnZENBcklGd2ljSGhjSWx4dVhIUmNkRngwWEhSOUlDa3VkR2hsYmlnZ1puVnVZM1JwYjI0b0tTQjdYRzVjZEZ4MFhIUmNkRngwY21WMGRYSnVJR1V1WDNWd1pHRjBaVU5oWTJobFpFUnBiV1Z1YzJsdmJuTW9LVnh1WEhSY2RGeDBYSFI5SUNsY2JseDBYSFJjZEgwZ0tTd2dkQzV2ZG1WeWNtbGtaU2dnWENKdFlYUmphRmRwWkhSb1ZHOURiMjUwWlc1MFhDSXNJR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWEhSMllYSWdkQ3dnWlNBOUlIUm9hWE03WEc1Y2RGeDBYSFJjZEhKbGRIVnliaUJ2TG5KbFlXUW9JR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWEhSY2RIUWdQU0JsTG5kcFpHZGxkRVZzSUQ4Z2FDZ2daUzUzYVdSblpYUkZiQ0FwTG5kcFpIUm9JRG9nTUZ4dVhIUmNkRngwWEhSOUlDa3NJRzh1ZDNKcGRHVW9JR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWEhSY2RHVXVjMkZ1WkdKdmVFVnNMbk4wZVd4bExuZHBaSFJvSUQwZ2RDQXJJRndpY0hoY0lseHVYSFJjZEZ4MFhIUjlJQ2t1ZEdobGJpZ2dablZ1WTNScGIyNG9LU0I3WEc1Y2RGeDBYSFJjZEZ4MGNtVjBkWEp1SUdVdVgzVndaR0YwWlVOaFkyaGxaRVJwYldWdWMybHZibk1vS1Z4dVhIUmNkRngwWEhSOUlDbGNibHgwWEhSY2RIMGdLU3dnZEM1aFpuUmxjaWdnWENKcGJtbDBhV0ZzYVhwbFhDSXNJR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWEhSMGFHbHpMbDlwWm5KaGJXVWdQU0J1ZFd4c0xDQjBhR2x6TGw5M2FXUjBhQ0E5SUhSb2FYTXVYMmhsYVdkb2RDQTlJREFzSUhSb2FYTXVYM0psYzJsNlpVaGhibVJzWlhKeklEMGdXMTFjYmx4MFhIUmNkSDBnS1N3Z2RDNXZkbVZ5Y21sa1pTZ2dYQ0pwYm5ObGNuUmNJaXdnWm5WdVkzUnBiMjRvSUhRc0lHVXNJRzRzSUhJZ0tTQjdYRzVjZEZ4MFhIUmNkSFpoY2lCcElEMGdkR2hwY3l3Z2N5QTlJRzVsZHlCd0xDQmhJRDBnZEdocGN5NTBZWEpuWlhSSGJHOWlZV3d1Wkc5amRXMWxiblFzSUhVZ1BTQlRLQ0IwTENCbExDQnVMQ0JoSUNrN1hHNWNkRngwWEhSY2RISmxkSFZ5YmlCdkxuZHlhWFJsS0NCNUtDQnlMQ0J1ZFd4c0xDQjFJQ2tnS1N3Z2RTNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDQmNJbXh2WVdSY0lpd2dablZ1WTNScGIyNG9LU0I3WEc1Y2RGeDBYSFJjZEZ4MEtHWjFibU4wYVc5dUtDQjBJQ2tnZTF4dVhIUmNkRngwWEhSY2RGeDBkSEo1SUh0Y2JseDBYSFJjZEZ4MFhIUmNkRngwZEM1amIyNTBaVzUwVjJsdVpHOTNMbVJ2WTNWdFpXNTBYRzVjZEZ4MFhIUmNkRngwWEhSOUlHTmhkR05vSUNnZ2RDQXBJSHRjYmx4MFhIUmNkRngwWEhSY2RGeDBjbVYwZFhKdUlHMHVjbVZxWldOMEtDQjBJQ2xjYmx4MFhIUmNkRngwWEhSY2RIMWNibHgwWEhSY2RGeDBYSFJjZEhKbGRIVnliaUJ0TG5KbGMyOXNkbVVvSUhRZ0tWeHVYSFJjZEZ4MFhIUmNkSDBwS0NCMUlDa3VkR2hsYmlnZ2JuVnNiQ3dnZVNnZ1Vpd2diblZzYkN3Z2RDd2daU3dnYml3Z2RTd2dZU0FwSUNrdWRHaGxiaWdnY3k1eVpYTnZiSFpsTENCekxuSmxhbVZqZENBcFhHNWNkRngwWEhSY2RIMHNJQ0V4SUNrc0lIVXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ2dYQ0psY25KdmNsd2lMQ0J6TG5KbGFtVmpkQ3dnSVRFZ0tTd2djeTV3Y205dGFYTmxMblJvWlc0b0lHWjFibU4wYVc5dUtDQjBJQ2tnZTF4dVhIUmNkRngwWEhSY2RIWmhjaUJsSUQwZ1pDZ2dhUzVmWkdsa1VtVnphWHBsTENCQkxDQnBJQ2s3WEc1Y2RGeDBYSFJjZEZ4MGNtVjBkWEp1SUdrdVgybG1jbUZ0WlNBOUlIUXNJR2t1ZDJsdUxtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0lGd2ljbVZ6YVhwbFhDSXNJR1VzSUNFeElDa3NJRzB1WVd4c0tDQmJYRzVjZEZ4MFhIUmNkRngwWEhScExsOXpaWFJVWVhKblpYUlViMEpzWVc1cktDa3NYRzVjZEZ4MFhIUmNkRngwWEhScExtRmtaRkp2YjNSRGJHRnpjeWdnZUNBcExGeHVYSFJjZEZ4MFhIUmNkRngwYVM1d2NtVndaVzVrUTNOektDQlVJQ2xjYmx4MFhIUmNkRngwWEhSZElDbGNibHgwWEhSY2RGeDBmU0FwWEc1Y2RGeDBYSFI5SUNrc0lIUXViM1psY25KcFpHVW9JRndpYjI1U1pYTnBlbVZjSWl3Z1puVnVZM1JwYjI0b0lIUWdLU0I3WEc1Y2RGeDBYSFJjZEhSb2FYTXVYM0psYzJsNlpVaGhibVJzWlhKekxuQjFjMmdvSUhRZ0tWeHVYSFJjZEZ4MGZTQXBMQ0IwTG1GbWRHVnlLQ0JjSW5OMGVXeGxVMlZzWmx3aUxDQm1kVzVqZEdsdmJpZ3BJSHRjYmx4MFhIUmNkRngwY21WMGRYSnVJSFJvYVhNdVgzVndaR0YwWlVOaFkyaGxaRVJwYldWdWMybHZibk1vS1Z4dVhIUmNkRngwZlNBcFhHNWNkRngwZlNBcFhHNWNkSDBzSUdaMWJtTjBhVzl1S0NCMExDQmxJQ2tnZTF4dVhIUmNkSFF1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0NrZ2UxeHVYSFJjZEZ4MGRHaHliM2NnYm1WM0lFVnljbTl5S0NCY0luVnVhVzF3YkdWdFpXNTBaV1FnYldWMGFHOWtYQ0lnS1Z4dVhIUmNkSDFjYmx4MGZTd2dablZ1WTNScGIyNG9JSFFzSUdVc0lHNGdLU0I3WEc1Y2RGeDBkbUZ5SUhJZ1BTQnVLQ0F5SUNrc0lHa2dQU0J1S0NBM0lDa3NJRzhnUFNBeE1EQXNJSE1nUFNBelpUTTdYRzVjYmx4MFhIUm1kVzVqZEdsdmJpQmhLQ0IwTENCbElDa2dlMXh1WEhSY2RGeDBkR2hwY3k1ZmFXNXdkWFJ6VVhWbGRXVWdQU0JiWFN3Z2RHaHBjeTVmZEdGemF5QTlJSFFzSUhSb2FYTXVYMmx6VUdGMWMyVmtJRDBnSVRFc0lIUm9hWE11WDJac2RYTm9SR1ZzWVhrZ1BTQmxJQ1ltSUdVdVpteDFjMmhFWld4aGVTQjhmQ0J2TENCMGFHbHpMbDl3WVhWelpVeGxibWQwYUNBOUlHVWdKaVlnWlM1d1lYVnpaVXhsYm1kMGFDQjhmQ0J6TENCMGFHbHpMbDltYkhWemFGUnBiV1Z2ZFhRZ1BTQjJiMmxrSURCY2JseDBYSFI5WEc1Y2JseDBYSFJoTG5CeWIzUnZkSGx3WlM1aFpHUWdQU0JtZFc1amRHbHZiaWdnZENBcElIdGNibHgwWEhSY2RIWmhjaUJsSUQwZ2JtVjNJSEk3WEc1Y2RGeDBYSFJ5WlhSMWNtNGdkR2hwY3k1ZmFXNXdkWFJ6VVhWbGRXVXVjSFZ6YUNnZ2UxeHVYSFJjZEZ4MFhIUnBibkIxZERvZ2RDeGNibHgwWEhSY2RGeDBkR0Z6YTBSdmJtVkVaV1psY25KbFpEb2daVnh1WEhSY2RGeDBmU0FwTENCMGFHbHpMbDl6WTJobFpIVnNaVVpzZFhOb0tDa3NJR1V1Y0hKdmJXbHpaVnh1WEhSY2RIMHNJR0V1Y0hKdmRHOTBlWEJsTGw5elkyaGxaSFZzWlVac2RYTm9JRDBnWm5WdVkzUnBiMjRvS1NCN1hHNWNkRngwWEhSMGFHbHpMbDlwYzFCaGRYTmxaQ0I4ZkNBb1kyeGxZWEpVYVcxbGIzVjBLQ0IwYUdsekxsOW1iSFZ6YUZScGJXVnZkWFFnS1N3Z2RHaHBjeTVmWm14MWMyaFVhVzFsYjNWMElEMGdjMlYwVkdsdFpXOTFkQ2dnYVNnZ2RHaHBjeTVmWm14MWMyZ3NJSFJvYVhNZ0tTd2dkR2hwY3k1ZlpteDFjMmhFWld4aGVTQXBLVnh1WEhSY2RIMHNJR0V1Y0hKdmRHOTBlWEJsTGw5bWJIVnphQ0E5SUdaMWJtTjBhVzl1S0NrZ2UxeHVYSFJjZEZ4MGRISjVJSHRjYmx4MFhIUmNkRngwZEdocGN5NWZkR0Z6YXk1allXeHNLQ0J1ZFd4c0xDQjBhR2x6TGw5cGJuQjFkSE5SZFdWMVpTQXBYRzVjZEZ4MFhIUjlJR05oZEdOb0lDZ2dkQ0FwSUh0Y2JseDBYSFJjZEZ4MGRHaHBjeTVmYVc1d2RYUnpVWFZsZFdVdVptOXlSV0ZqYUNnZ1puVnVZM1JwYjI0b0lHVWdLU0I3WEc1Y2RGeDBYSFJjZEZ4MFpTNTBZWE5yUkc5dVpVUmxabVZ5Y21Wa0xuSmxhbVZqZENnZ2RDQXBYRzVjZEZ4MFhIUmNkSDBnS1Z4dVhIUmNkRngwZlZ4dVhIUmNkRngwZEdocGN5NWZhVzV3ZFhSelVYVmxkV1VnUFNCYlhTd2dkR2hwY3k1ZlpteDFjMmhVYVcxbGIzVjBJRDBnZG05cFpDQXdYRzVjZEZ4MGZTd2dZUzV3Y205MGIzUjVjR1V1Y0dGMWMyVWdQU0JtZFc1amRHbHZiaWdnZENBcElIdGNibHgwWEhSY2RHTnNaV0Z5VkdsdFpXOTFkQ2dnZEdocGN5NWZabXgxYzJoVWFXMWxiM1YwSUNrc0lIUm9hWE11WDJselVHRjFjMlZrSUQwZ0lUQXNJQ0YwSUNZbUlIUm9hWE11WDNCaGRYTmxUR1Z1WjNSb0lDWW1JSE5sZEZScGJXVnZkWFFvSUdrb0lIUm9hWE11Y21WemRXMWxMQ0IwYUdseklDa3NJSFJvYVhNdVgzQmhkWE5sVEdWdVozUm9JQ2xjYmx4MFhIUjlMQ0JoTG5CeWIzUnZkSGx3WlM1eVpYTjFiV1VnUFNCbWRXNWpkR2x2YmlncElIdGNibHgwWEhSY2RIUm9hWE11WDJselVHRjFjMlZrSUQwZ0lURXNJSFJvYVhNdVgzTmphR1ZrZFd4bFJteDFjMmdvS1Z4dVhIUmNkSDBzSUhRdVpYaHdiM0owY3lBOUlHRmNibHgwZlN3Z1puVnVZM1JwYjI0b0lIUXNJR1VzSUc0Z0tTQjdYRzVjZEZ4MGRtRnlJSElzSUdrZ1BTQnVLQ0EzTXlBcExDQnZJRDBnYmlnZ016SWdLU3dnY3lBOUlHNG9JRElnS1N3Z1lTQTlJRzRvSURRZ0tTd2dkU0E5SUc0b0lERTVJQ2tzSUdNZ1BTQnVLQ0F5TWlBcExDQmtJRDBnYmlnZ016TWdLU3dnWmlBOUlHNG9JRGdnS1N4Y2JseDBYSFJjZEd3Z1BTQnVLQ0F4TWlBcExDQm9JRDBnYmlnZ01URTJJQ2tzSUhBZ1BTQnVLQ0ExT0NBcExDQnRJRDBnYmlnZ09TQXBMQ0IySUQwZ2JpZ2dNVEVnS1N3Z1p5QTlJRzRvSURFeE55QXBMQ0IzSUQwZ2JpZ2dNeUFwTENCNUlEMGdiaWdnTUNBcExGeHVYSFJjZEZ4MFlpQTlJRzRvSURFZ0tTd2dYeUE5SUhBb0lHWjFibU4wYVc5dUtDa2dlMXh1WEhSY2RGeDBYSFJ5WlhSMWNtNGdibVYzSUhOY2JseDBYSFJjZEgwZ0tUdGNibHh1WEhSY2RHWjFibU4wYVc5dUlFVW9JSFFnS1NCN1hHNWNkRngwWEhSMllYSWdaU0E5SUhRZ2ZId2dlMXh1WEhSY2RGeDBYSFJ6YUc5MWJHUmZiMkowWVdsdVgyTnZiMnRwWlY5amIyNXpaVzUwT2lBaE1DeGNibHgwWEhSY2RGeDBaWGh3WlhKcGJXVnVkSE02SUh0OVhHNWNkRngwWEhSOU8xeHVYSFJjZEZ4MGNtVjBkWEp1SUc1bGR5Qm5LQ0JsTG5Ob2IzVnNaRjl2WW5SaGFXNWZZMjl2YTJsbFgyTnZibk5sYm5Rc0lHVXVaWGh3WlhKcGJXVnVkSE1nS1Z4dVhIUmNkSDFjYmx4dVhIUmNkSFF1Wlhod2IzSjBjeUE5SUh0Y2JseDBYSFJjZEd4dllXUTZJR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWEhSMllYSWdkQ3dnWlN3Z2Jpd2djenRjYmx4MFhIUmNkRngwYVdZZ0tDQmpMbWxsT1NncElIeDhJR011YVdVeE1DZ3BJSHg4SUZ3aWFIUjBjRHBjSWlBaFBUMGdaaTV3Y205MGIyTnZiQ0FtSmlCY0ltaDBkSEJ6T2x3aUlDRTlQU0JtTG5CeWIzUnZZMjlzSUNrZ2UxeHVYSFJjZEZ4MFhIUmNkSEpsZEhWeWJpQnNMbVJsZGtWeWNtOXlLQ0JjSWxWemFXNW5JR1JsWm1GMWJIUWdjMlYwZEdsdVozTWdaSFZsSUhSdklIVnVjM1Z3Y0c5eWRHVmtJR0p5YjNkelpYSWdiM0lnY0hKdmRHOWpiMnd1WENJZ0tTd2djaUE5SUVVb0tTd2dkbTlwWkNCZktDa3VjbVZ6YjJ4MlpTZ3BPMXh1WEhSY2RGeDBYSFI5WEc1Y2RGeDBYSFJjZEhRZ1BTQjdJRzl5YVdkcGJqb2daaTV2Y21sbmFXNGdmU3dnZFM1elpYUjBhVzVuY3lncExtbHVaR1Y0VDJZb0lGd2liRzlqWVd4b2IzTjBYQ0lnS1NBK0lDMGdNU0FtSmlBb2RDNXNiMk5oYkZObGRIUnBibWR6SUQwZ0lUQXBMQ0JsSUQwZ2RpNTFjbXdvSUdrdWNtVnpiM1Z5WTJWQ1lYTmxWWEpzSUNzZ2FTNTNhV1JuWlhSSlpuSmhiV1ZJZEcxc1VHRjBhQ3dnZENBcExDQnVJRDBnWm5WdVkzUnBiMjRvSUhRZ0tTQjdYRzVjZEZ4MFhIUmNkRngwZG1GeUlHNHNJR2tzSUc4c0lITTdYRzVjZEZ4MFhIUmNkRngwYVdZZ0tDQnBJRDBnZHk1cGMxUjNhWFIwWlhKVlVrd29JSFF1YjNKcFoybHVJQ2tzSUc4Z1BTQmxMbk4xWW5OMGNpZ2dNQ3dnZEM1dmNtbG5hVzR1YkdWdVozUm9JQ2tnUFQwOUlIUXViM0pwWjJsdUxDQnpJRDBnZHk1cGMxUjNhVzFuVlZKTUtDQjBMbTl5YVdkcGJpQXBMQ0J2SUNZbUlHa2dmSHdnY3lBcElIdGNibHgwWEhSY2RGeDBYSFJjZEhSeWVTQjdYRzVjZEZ4MFhIUmNkRngwWEhSY2RDaHVJRDBnWENKemRISnBibWRjSWlBOVBTQjBlWEJsYjJZZ2RDNWtZWFJoSUQ4Z1pDNXdZWEp6WlNnZ2RDNWtZWFJoSUNrZ09pQjBMbVJoZEdFcExtNWhiV1Z6Y0dGalpTQTlQVDBnYUM1elpYUjBhVzVuY3lBbUppQW9jaUE5SUVVb0lHNHVjMlYwZEdsdVozTWdLU3dnWHlncExuSmxjMjlzZG1Vb0tTbGNibHgwWEhSY2RGeDBYSFJjZEgwZ1kyRjBZMmdnS0NCMElDa2dlMXh1WEhSY2RGeDBYSFJjZEZ4MFhIUnNMbVJsZGtWeWNtOXlLQ0IwSUNsY2JseDBYSFJjZEZ4MFhIUmNkSDFjYmx4MFhIUmNkRngwWEhSOVhHNWNkRngwWEhSY2RIMHNJR0l1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWdnWENKdFpYTnpZV2RsWENJc0lHNGdLU3dnY3lBOUlHOG9JSHRjYmx4MFhIUmNkRngwWEhSemNtTTZJR1VzWEc1Y2RGeDBYSFJjZEZ4MGRHbDBiR1U2SUZ3aVZIZHBkSFJsY2lCelpYUjBhVzVuY3lCcFpuSmhiV1ZjSWx4dVhIUmNkRngwWEhSOUxDQjdJR1JwYzNCc1lYazZJRndpYm05dVpWd2lJSDBnS1N3Z1lTNWliMlI1TG1Gd2NHVnVaRU5vYVd4a0tDQnpJQ2xjYmx4MFhIUmNkSDBzWEc1Y2RGeDBYSFJ6WlhSMGFXNW5jMHh2WVdSbFpEb2dablZ1WTNScGIyNG9LU0I3WEc1Y2RGeDBYSFJjZEhaaGNpQjBMQ0JsTENCdU8xeHVYSFJjZEZ4MFhIUnlaWFIxY200Z2RDQTlJRzVsZHlCekxDQmxJRDBnYlM1blpYUW9JRndpWlhod1pYSnBiV1Z1ZEU5MlpYSnlhV1JsWENJZ0tTd2dYeWdwTG5CeWIyMXBjMlV1ZEdobGJpZ2dablZ1WTNScGIyNG9LU0I3WEc1Y2RGeDBYSFJjZEZ4MFpTQW1KaUJsTG01aGJXVWdKaVlnWlM1aGMzTnBaMjV0Wlc1MElDWW1JQ2dvYmlBOUlIdDlLVnNnWlM1dVlXMWxJRjBnUFNCN0lHSjFZMnRsZERvZ1pTNWhjM05wWjI1dFpXNTBJSDBzSUhJdVpYaHdaWEpwYldWdWRITWdQU0I1TG1GMVp5Z2djaTVsZUhCbGNtbHRaVzUwY3l3Z2JpQXBLU3dnZEM1eVpYTnZiSFpsS0NCeUlDbGNibHgwWEhSY2RGeDBmU0FwTG1OaGRHTm9LQ0JtZFc1amRHbHZiaWdnWlNBcElIdGNibHgwWEhSY2RGeDBYSFIwTG5KbGFtVmpkQ2dnWlNBcFhHNWNkRngwWEhSY2RIMGdLU3dnZEM1d2NtOXRhWE5sWEc1Y2RGeDBYSFI5WEc1Y2RGeDBmVnh1WEhSOUxDQm1kVzVqZEdsdmJpZ2dkQ3dnWlNBcElIdGNibHgwWEhSMExtVjRjRzl5ZEhNZ1BTQjdJSE5sZEhScGJtZHpPaUJjSW5SM2RIUnlMbk5sZEhScGJtZHpYQ0lnZlZ4dVhIUjlMQ0JtZFc1amRHbHZiaWdnZEN3Z1pTQXBJSHRjYmx4MFhIUjBMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWdnZEN3Z1pTQXBJSHRjYmx4MFhIUmNkSFJvYVhNdWMyaHZkV3hrVDJKMFlXbHVRMjl2YTJsbFEyOXVjMlZ1ZENBOUlIUXNJSFJvYVhNdVpYaHdaWEpwYldWdWRITWdQU0JsSUh4OElIdDlYRzVjZEZ4MGZWeHVYSFI5TENCbWRXNWpkR2x2YmlnZ2RDd2daU0FwSUh0Y2JseDBYSFIwTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlnZ2RDQXBJSHRjYmx4MFhIUmNkSEpsZEhWeWJpQjBMbk53YkdsMEtDQmNJbHdpSUNrdWJXRndLQ0JtZFc1amRHbHZiaWdnZENBcElIdGNibHgwWEhSY2RGeDBjbVYwZFhKdUlIUXVZMmhoY2tOdlpHVkJkQ2dnTUNBcExuUnZVM1J5YVc1bktDQXhOaUFwWEc1Y2RGeDBYSFI5SUNrdWFtOXBiaWdnWENKY0lpQXBYRzVjZEZ4MGZWeHVYSFI5TENCbWRXNWpkR2x2YmlnZ2RDd2daU3dnYmlBcElIdGNibHgwWEhSMExtVjRjRzl5ZEhNZ1BTQmJiaWdnTVRJd0lDa3NJRzRvSURFeU5TQXBMQ0J1S0NBeE16TWdLU3dnYmlnZ01UTTFJQ2tzSUc0b0lERXpOeUFwTENCdUtDQXhOVEVnS1N3Z2JpZ2dNVFUxSUNsZFhHNWNkSDBzSUdaMWJtTjBhVzl1S0NCMExDQmxMQ0J1SUNrZ2UxeHVYSFJjZEhaaGNpQnlJRDBnYmlnZ01URWdLU3dnYVNBOUlHNG9JRFVnS1N3Z2J5QTlJRzRvSURBZ0tTd2djeUE5SUc0b0lERXpJQ2tzSUdFZ1BTQnVLQ0F4TkNBcEtDa3NJSFVnUFNCdUtDQTFPU0FwTENCaklEMGdYQ0poTG5SM2FYUjBaWEl0WkcwdFluVjBkRzl1WENJN1hHNWNkRngwZEM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0b0lIUWdLU0I3WEc1Y2RGeDBYSFJ5WlhSMWNtNGdZU2dnZEN3Z1l5QXBMbTFoY0NnZ1puVnVZM1JwYjI0b0lIUWdLU0I3WEc1Y2RGeDBYSFJjZEhKbGRIVnliaUIxS0NCbWRXNWpkR2x2YmlnZ2RDQXBJSHRjYmx4MFhIUmNkRngwWEhSMllYSWdaU0E5SUhRdVoyVjBRWFIwY21saWRYUmxLQ0JjSW1SaGRHRXRjMmh2ZHkxelkzSmxaVzR0Ym1GdFpWd2lJQ2tzSUc0Z1BTQnpLQ0IwSUNrc0lHRWdQU0IwTG1kbGRFRjBkSEpwWW5WMFpTZ2dYQ0pvY21WbVhDSWdLU3hjYmx4MFhIUmNkRngwWEhSY2RIVWdQU0IwTG1kbGRFRjBkSEpwWW5WMFpTZ2dYQ0prWVhSaExYTmpjbVZsYmkxdVlXMWxYQ0lnS1N3Z1l5QTlJR1VnUHlCcExtRnpRbTl2YkdWaGJpZ2daU0FwSURvZ2JuVnNiQ3hjYmx4MFhIUmNkRngwWEhSY2RHUWdQU0IwTG1kbGRFRjBkSEpwWW5WMFpTZ2dYQ0prWVhSaExYTnBlbVZjSWlBcExDQm1JRDBnY2k1a1pXTnZaR1ZWVWt3b0lHRWdLU3dnYkNBOUlHWXVjbVZqYVhCcFpXNTBYMmxrTEZ4dVhIUmNkRngwWEhSY2RGeDBhQ0E5SUhRdVoyVjBRWFIwY21saWRYUmxLQ0JjSW1SaGRHRXRkR1Y0ZEZ3aUlDa2dmSHdnWmk1MFpYaDBMRnh1WEhSY2RGeDBYSFJjZEZ4MGNDQTlJSFF1WjJWMFFYUjBjbWxpZFhSbEtDQmNJbVJoZEdFdGQyVnNZMjl0WlMxdFpYTnpZV2RsTFdsa1hDSWdLU0I4ZkNCbUxuZGxiR052YldWTlpYTnpZV2RsU1dRN1hHNWNkRngwWEhSY2RGeDBjbVYwZFhKdUlHOHVZWFZuS0NCdUxDQjdYRzVjZEZ4MFhIUmNkRngwWEhSelkzSmxaVzVPWVcxbE9pQjFMRnh1WEhSY2RGeDBYSFJjZEZ4MGMyaHZkMU5qY21WbGJrNWhiV1U2SUdNc1hHNWNkRngwWEhSY2RGeDBYSFJ6YVhwbE9pQmtMRnh1WEhSY2RGeDBYSFJjZEZ4MGRHVjRkRG9nYUN4Y2JseDBYSFJjZEZ4MFhIUmNkSFZ6WlhKSlpEb2diQ3hjYmx4MFhIUmNkRngwWEhSY2RIZGxiR052YldWTlpYTnpZV2RsU1dRNklIQmNibHgwWEhSY2RGeDBYSFI5SUNsY2JseDBYSFJjZEZ4MGZTZ2dkQ0FwTENCMExuQmhjbVZ1ZEU1dlpHVXNJSFFnS1Z4dVhIUmNkRngwZlNBcFhHNWNkRngwZlZ4dVhIUjlMQ0JtZFc1amRHbHZiaWdnZEN3Z1pTd2diaUFwSUh0Y2JseDBYSFIyWVhJZ2NpQTlJRzRvSURBZ0tUdGNibHgwWEhSMExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpQjBLQ0JsSUNrZ2UxeHVYSFJjZEZ4MGRtRnlJRzQ3WEc1Y2RGeDBYSFJwWmlBb0lHVWdLU0I3WEc1Y2RGeDBYSFJjZEhKbGRIVnliaUJ1SUQwZ1pTNXNZVzVuSUh4OElHVXVaMlYwUVhSMGNtbGlkWFJsS0NCY0ltUmhkR0V0YkdGdVoxd2lJQ2tzSUhJdWFYTlVlWEJsS0NCY0luTjBjbWx1WjF3aUxDQnVJQ2tnUHlCdUlEb2dkQ2dnWlM1d1lYSmxiblJGYkdWdFpXNTBJQ2xjYmx4MFhIUmNkSDFjYmx4MFhIUjlYRzVjZEgwc0lHWjFibU4wYVc5dUtDQjBMQ0JsTENCdUlDa2dlMXh1WEhSY2RIWmhjaUJ5SUQwZ2JpZ2dNaUFwTzF4dVhIUmNkSFF1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0NCMExDQmxJQ2tnZTF4dVhIUmNkRngwZG1GeUlHa2dQU0J1WlhjZ2NqdGNibHgwWEhSY2RISmxkSFZ5YmlCdUxtVW9JRElnS1M1MGFHVnVLQ0JtZFc1amRHbHZiaWdnY2lBcElIdGNibHgwWEhSY2RGeDBkbUZ5SUc4N1hHNWNkRngwWEhSY2RIUnllU0I3WEc1Y2RGeDBYSFJjZEZ4MGJ5QTlJRzRvSURnNElDa3NJR2t1Y21WemIyeDJaU2dnYm1WM0lHOG9JSFFzSUdVZ0tTQXBYRzVjZEZ4MFhIUmNkSDBnWTJGMFkyZ2dLQ0IwSUNrZ2UxeHVYSFJjZEZ4MFhIUmNkR2t1Y21WcVpXTjBLQ0IwSUNsY2JseDBYSFJjZEZ4MGZWeHVYSFJjZEZ4MGZTNWlhVzVrS0NCdWRXeHNMQ0J1SUNrZ0tTNWpZWFJqYUNnZ1puVnVZM1JwYjI0b0lIUWdLU0I3WEc1Y2RGeDBYSFJjZEdrdWNtVnFaV04wS0NCMElDbGNibHgwWEhSY2RIMGdLU3dnYVM1d2NtOXRhWE5sWEc1Y2RGeDBmVnh1WEhSOUxDQm1kVzVqZEdsdmJpZ2dkQ3dnWlN3Z2JpQXBJSHRjYmx4MFhIUjJZWElnY2lBOUlHNG9JREV5TkNBcExDQnBJRDBnYmlnZ01TQXBMQ0J2SUQwZ2JpZ2dNVEFnS1N3Z2N5QTlJRzRvSURNMklDa3NJR0VnUFNCdUtDQXhPQ0FwTENCMUlEMGdiaWdnTlRVZ0tTd2dZeUE5SUc0b0lESTNJQ2tzSUdRZ1BTQnVLQ0ExTmlBcExGeHVYSFJjZEZ4MFppQTlJRzRvSURRMElDa3NJR3dnUFNCdUtDQTBOaUFwTENCb0lEMGdiaWdnTnlBcExDQndJRDBnYmlnZ05EVWdLU3dnYlNBOUlHNG9JRFlnS1N3Z2RpQTlJRzRvSURBZ0tTd2daeUE5SURVd0xDQjNJRDBnZTF4dVhIUmNkRngwWEhSd2IzTnBkR2x2YmpvZ1hDSmhZbk52YkhWMFpWd2lMRnh1WEhSY2RGeDBYSFIyYVhOcFltbHNhWFI1T2lCY0ltaHBaR1JsYmx3aUxGeHVYSFJjZEZ4MFhIUmthWE53YkdGNU9pQmNJbUpzYjJOclhDSXNYRzVjZEZ4MFhIUmNkSFJ5WVc1elptOXliVG9nWENKeWIzUmhkR1VvTUdSbFp5bGNJbHh1WEhSY2RGeDBmU3dnZVNBOUlIdGNibHgwWEhSY2RGeDBjRzl6YVhScGIyNDZJRndpYzNSaGRHbGpYQ0lzWEc1Y2RGeDBYSFJjZEhacGMybGlhV3hwZEhrNklGd2lkbWx6YVdKc1pWd2lYRzVjZEZ4MFhIUjlMQ0JpSUQwZ1hDSjBkMmwwZEdWeUxYZHBaR2RsZEZ3aUxDQmZJRDBnWENKdmNHVnVYQ0lzSUVVZ1BTQmNJbE5oYm1SaWIzaFNiMjkwWENJc1hHNWNkRngwWEhSNElEMGdYQ0l1VTJGdVpHSnZlRkp2YjNRZ2V5QmthWE53YkdGNU9pQnViMjVsT3lCdFlYZ3RhR1ZwWjJoME9pQXhNREF3TUhCNE95QjlYQ0k3WEc1Y2RGeDBkQzVsZUhCdmNuUnpJRDBnWXk1amIzVndiR1VvSUc0b0lEVTNJQ2tzSUdaMWJtTjBhVzl1S0NCMElDa2dlMXh1WEhSY2RGeDBkQzVrWldacGJtVlRkR0YwYVdNb0lGd2lhWE5UZFhCd2IzSjBaV1JjSWl3Z1puVnVZM1JwYjI0b0tTQjdYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQWhJV2t1U0ZSTlRFVnNaVzFsYm5RdWNISnZkRzkwZVhCbExtRjBkR0ZqYUZOb1lXUnZkeUFtSmlCbUxtbHViR2x1WlZOMGVXeGxLQ2xjYmx4MFhIUmNkSDBnS1N3Z2RDNXZkbVZ5Y21sa1pWQnliM0JsY25SNUtDQmNJbWxrWENJc0lIdGNibHgwWEhSY2RGeDBaMlYwT2lCbWRXNWpkR2x2YmlncElIdGNibHgwWEhSY2RGeDBYSFJ5WlhSMWNtNGdkR2hwY3k1ellXNWtZbTk0Uld3Z0ppWWdkR2hwY3k1ellXNWtZbTk0Uld3dWFXUmNibHgwWEhSY2RGeDBmVnh1WEhSY2RGeDBmU0FwTENCMExtOTJaWEp5YVdSbFVISnZjR1Z5ZEhrb0lGd2lhVzVwZEdsaGJHbDZaV1JjSWl3Z2UxeHVYSFJjZEZ4MFhIUm5aWFE2SUdaMWJtTjBhVzl1S0NrZ2UxeHVYSFJjZEZ4MFhIUmNkSEpsZEhWeWJpQWhJWFJvYVhNdVgzTm9ZV1J2ZDBodmMzUmNibHgwWEhSY2RGeDBmVnh1WEhSY2RGeDBmU0FwTENCMExtOTJaWEp5YVdSbFVISnZjR1Z5ZEhrb0lGd2lkMmxrZEdoY0lpd2dlMXh1WEhSY2RGeDBYSFJuWlhRNklHWjFibU4wYVc5dUtDa2dlMXh1WEhSY2RGeDBYSFJjZEhKbGRIVnliaUIwYUdsekxsOTNhV1IwYUZ4dVhIUmNkRngwWEhSOVhHNWNkRngwWEhSOUlDa3NJSFF1YjNabGNuSnBaR1ZRY205d1pYSjBlU2dnWENKb1pXbG5hSFJjSWl3Z2UxeHVYSFJjZEZ4MFhIUm5aWFE2SUdaMWJtTjBhVzl1S0NrZ2UxeHVYSFJjZEZ4MFhIUmNkSEpsZEhWeWJpQjBhR2x6TGw5b1pXbG5hSFJjYmx4MFhIUmNkRngwZlZ4dVhIUmNkRngwZlNBcExDQjBMbTkyWlhKeWFXUmxVSEp2Y0dWeWRIa29JRndpYzJGdVpHSnZlRVZzWENJc0lIdGNibHgwWEhSY2RGeDBaMlYwT2lCbWRXNWpkR2x2YmlncElIdGNibHgwWEhSY2RGeDBYSFJ5WlhSMWNtNGdkR2hwY3k1ZmMyaGhaRzkzU0c5emRGeHVYSFJjZEZ4MFhIUjlYRzVjZEZ4MFhIUjlJQ2tzSUhRdVpHVm1hVzVsS0NCY0lsOTFjR1JoZEdWRFlXTm9aV1JFYVcxbGJuTnBiMjV6WENJc0lHWjFibU4wYVc5dUtDa2dlMXh1WEhSY2RGeDBYSFIyWVhJZ2RDQTlJSFJvYVhNN1hHNWNkRngwWEhSY2RISmxkSFZ5YmlCaExuSmxZV1FvSUdaMWJtTjBhVzl1S0NrZ2UxeHVYSFJjZEZ4MFhIUmNkSFpoY2lCbExDQnVJRDBnYkNnZ2RDNXpZVzVrWW05NFJXd2dLVHRjYmx4MFhIUmNkRngwWEhSY0luWnBjMmxpYkdWY0lpQTlQU0IwTG5OaGJtUmliM2hGYkM1emRIbHNaUzUyYVhOcFltbHNhWFI1SUQ4Z2RDNWZkMmxrZEdnZ1BTQnVMbmRwWkhSb0lEb2dLR1VnUFNCc0tDQjBMbk5oYm1SaWIzaEZiQzV3WVhKbGJuUkZiR1Z0Wlc1MElDa3VkMmxrZEdnc0lIUXVYM2RwWkhSb0lEMGdUV0YwYUM1dGFXNG9JRzR1ZDJsa2RHZ3NJR1VnS1Nrc0lIUXVYMmhsYVdkb2RDQTlJRzR1YUdWcFoyaDBYRzVjZEZ4MFhIUmNkSDBnS1Z4dVhIUmNkRngwZlNBcExDQjBMbVJsWm1sdVpTZ2dYQ0pmWkdsa1VtVnphWHBsWENJc0lHWjFibU4wYVc5dUtDa2dlMXh1WEhSY2RGeDBYSFIyWVhJZ2RDQTlJSFJvYVhNc0lHVWdQU0IwYUdsekxsOXlaWE5wZW1WSVlXNWtiR1Z5Y3k1emJHbGpaU2dnTUNBcE8xeHVYSFJjZEZ4MFhIUnlaWFIxY200Z2RHaHBjeTVmZFhCa1lYUmxRMkZqYUdWa1JHbHRaVzV6YVc5dWN5Z3BMblJvWlc0b0lHWjFibU4wYVc5dUtDa2dlMXh1WEhSY2RGeDBYSFJjZEdVdVptOXlSV0ZqYUNnZ1puVnVZM1JwYjI0b0lHVWdLU0I3WEc1Y2RGeDBYSFJjZEZ4MFhIUmxLQ0IwSUNsY2JseDBYSFJjZEZ4MFhIUjlJQ2xjYmx4MFhIUmNkRngwZlNBcFhHNWNkRngwWEhSOUlDa3NJSFF1YjNabGNuSnBaR1VvSUZ3aVkzSmxZWFJsUld4bGJXVnVkRndpTENCbWRXNWpkR2x2YmlnZ2RDQXBJSHRjYmx4MFhIUmNkRngwY21WMGRYSnVJSFJvYVhNdWRHRnlaMlYwUjJ4dlltRnNMbVJ2WTNWdFpXNTBMbU55WldGMFpVVnNaVzFsYm5Rb0lIUWdLVnh1WEhSY2RGeDBmU0FwTENCMExtOTJaWEp5YVdSbEtDQmNJbU55WldGMFpVWnlZV2R0Wlc1MFhDSXNJR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWEhSeVpYUjFjbTRnZEdocGN5NTBZWEpuWlhSSGJHOWlZV3d1Wkc5amRXMWxiblF1WTNKbFlYUmxSRzlqZFcxbGJuUkdjbUZuYldWdWRDZ3BYRzVjZEZ4MFhIUjlJQ2tzSUhRdWIzWmxjbkpwWkdVb0lGd2lhSFJ0YkZSdlJXeGxiV1Z1ZEZ3aUxDQm1kVzVqZEdsdmJpZ2dkQ0FwSUh0Y2JseDBYSFJjZEZ4MGRtRnlJR1U3WEc1Y2RGeDBYSFJjZEhKbGRIVnliaUFvWlNBOUlIUm9hWE11WTNKbFlYUmxSV3hsYldWdWRDZ2dYQ0prYVhaY0lpQXBLUzVwYm01bGNraFVUVXdnUFNCMExDQmxMbVpwY25OMFJXeGxiV1Z1ZEVOb2FXeGtYRzVjZEZ4MFhIUjlJQ2tzSUhRdWIzWmxjbkpwWkdVb0lGd2lhR0Z6VTJWc1pXTjBaV1JVWlhoMFhDSXNJR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWEhSeVpYUjFjbTRnSVNGMUxtZGxkRk5sYkdWamRHVmtWR1Y0ZENnZ2RHaHBjeTUwWVhKblpYUkhiRzlpWVd3Z0tWeHVYSFJjZEZ4MGZTQXBMQ0IwTG05MlpYSnlhV1JsS0NCY0ltRmtaRkp2YjNSRGJHRnpjMXdpTENCbWRXNWpkR2x2YmlnZ2RDQXBJSHRjYmx4MFhIUmNkRngwZG1GeUlHVWdQU0IwYUdsekxsOXphR0ZrYjNkU2IyOTBRbTlrZVR0Y2JseDBYSFJjZEZ4MGNtVjBkWEp1SUhRZ1BTQkJjbkpoZVM1cGMwRnljbUY1S0NCMElDa2dQeUIwSURvZ1czUmRMQ0IwYUdsekxtbHVhWFJwWVd4cGVtVmtJRDhnWVM1M2NtbDBaU2dnWm5WdVkzUnBiMjRvS1NCN1hHNWNkRngwWEhSY2RGeDBkQzVtYjNKRllXTm9LQ0JtZFc1amRHbHZiaWdnZENBcElIdGNibHgwWEhSY2RGeDBYSFJjZEc4dVlXUmtLQ0JsTENCMElDbGNibHgwWEhSY2RGeDBYSFI5SUNsY2JseDBYSFJjZEZ4MGZTQXBJRG9nYlM1eVpXcGxZM1FvSUc1bGR5QkZjbkp2Y2lnZ1hDSnpZVzVrWW05NElHNXZkQ0JwYm1sMGFXRnNhWHBsWkZ3aUlDa2dLVnh1WEhSY2RGeDBmU0FwTENCMExtOTJaWEp5YVdSbEtDQmNJbkpsYlc5MlpWSnZiM1JEYkdGemMxd2lMQ0JtZFc1amRHbHZiaWdnZENBcElIdGNibHgwWEhSY2RGeDBkbUZ5SUdVZ1BTQjBhR2x6TGw5emFHRmtiM2RTYjI5MFFtOWtlVHRjYmx4MFhIUmNkRngwY21WMGRYSnVJSFFnUFNCQmNuSmhlUzVwYzBGeWNtRjVLQ0IwSUNrZ1B5QjBJRG9nVzNSZExDQjBhR2x6TG1sdWFYUnBZV3hwZW1Wa0lEOGdZUzUzY21sMFpTZ2dablZ1WTNScGIyNG9LU0I3WEc1Y2RGeDBYSFJjZEZ4MGRDNW1iM0pGWVdOb0tDQm1kVzVqZEdsdmJpZ2dkQ0FwSUh0Y2JseDBYSFJjZEZ4MFhIUmNkRzh1Y21WdGIzWmxLQ0JsTENCMElDbGNibHgwWEhSY2RGeDBYSFI5SUNsY2JseDBYSFJjZEZ4MGZTQXBJRG9nYlM1eVpXcGxZM1FvSUc1bGR5QkZjbkp2Y2lnZ1hDSnpZVzVrWW05NElHNXZkQ0JwYm1sMGFXRnNhWHBsWkZ3aUlDa2dLVnh1WEhSY2RGeDBmU0FwTENCMExtOTJaWEp5YVdSbEtDQmNJbWhoYzFKdmIzUkRiR0Z6YzF3aUxDQm1kVzVqZEdsdmJpZ2dkQ0FwSUh0Y2JseDBYSFJjZEZ4MGNtVjBkWEp1SUc4dWNISmxjMlZ1ZENnZ2RHaHBjeTVmYzJoaFpHOTNVbTl2ZEVKdlpIa3NJSFFnS1Z4dVhIUmNkRngwZlNBcExDQjBMbTkyWlhKeWFXUmxLQ0JjSW1Ga1pGTjBlV3hsVTJobFpYUmNJaXdnWm5WdVkzUnBiMjRvSUhRc0lHVWdLU0I3WEc1Y2RGeDBYSFJjZEhKbGRIVnliaUIwYUdsekxtRmtaRU56Y3lnZ0owQnBiWEJ2Y25RZ2RYSnNLRndpSnlBcklIUWdLeUFuWENJcE95Y3NJR1VnS1M1MGFHVnVLQ0JtZFc1amRHbHZiaWdwSUh0Y2JseDBYSFJjZEZ4MFhIUnlaWFIxY200Z1pDZ2dkQ0FwWEc1Y2RGeDBYSFJjZEgwZ0tWeHVYSFJjZEZ4MGZTQXBMQ0IwTG05MlpYSnlhV1JsS0NCY0luQnlaWEJsYm1SVGRIbHNaVk5vWldWMFhDSXNJR1oxYm1OMGFXOXVLQ0IwSUNrZ2UxeHVYSFJjZEZ4MFhIUjJZWElnWlNBOUlIUm9hWE11WDNOb1lXUnZkMUp2YjNRN1hHNWNkRngwWEhSY2RISmxkSFZ5YmlCMGFHbHpMbUZrWkZOMGVXeGxVMmhsWlhRb0lIUXNJR1oxYm1OMGFXOXVLQ0IwSUNrZ2UxeHVYSFJjZEZ4MFhIUmNkSFpoY2lCdUlEMGdaUzVtYVhKemRFVnNaVzFsYm5SRGFHbHNaRHRjYmx4MFhIUmNkRngwWEhSeVpYUjFjbTRnYmlBL0lHVXVhVzV6WlhKMFFtVm1iM0psS0NCMExDQnVJQ2tnT2lCbExtRndjR1Z1WkVOb2FXeGtLQ0IwSUNsY2JseDBYSFJjZEZ4MGZTQXBYRzVjZEZ4MFhIUjlJQ2tzSUhRdWIzWmxjbkpwWkdVb0lGd2lZWEJ3Wlc1a1UzUjViR1ZUYUdWbGRGd2lMQ0JtZFc1amRHbHZiaWdnZENBcElIdGNibHgwWEhSY2RGeDBkbUZ5SUdVZ1BTQjBhR2x6TGw5emFHRmtiM2RTYjI5ME8xeHVYSFJjZEZ4MFhIUnlaWFIxY200Z2RHaHBjeTVoWkdSVGRIbHNaVk5vWldWMEtDQjBMQ0JtZFc1amRHbHZiaWdnZENBcElIdGNibHgwWEhSY2RGeDBYSFJ5WlhSMWNtNGdaUzVoY0hCbGJtUkRhR2xzWkNnZ2RDQXBYRzVjZEZ4MFhIUmNkSDBnS1Z4dVhIUmNkRngwZlNBcExDQjBMbTkyWlhKeWFXUmxLQ0JjSW1Ga1pFTnpjMXdpTENCbWRXNWpkR2x2YmlnZ2RDd2daU0FwSUh0Y2JseDBYSFJjZEZ4MGRtRnlJRzQ3WEc1Y2RGeDBYSFJjZEhKbGRIVnliaUIwYUdsekxtbHVhWFJwWVd4cGVtVmtJRDhnWmk1cGJteHBibVZUZEhsc1pTZ3BJRDhnS0NodUlEMGdkR2hwY3k1amNtVmhkR1ZGYkdWdFpXNTBLQ0JjSW5OMGVXeGxYQ0lnS1NrdWRIbHdaU0E5SUZ3aWRHVjRkQzlqYzNOY0lpd2diaTVoY0hCbGJtUkRhR2xzWkNnZ2RHaHBjeTUwWVhKblpYUkhiRzlpWVd3dVpHOWpkVzFsYm5RdVkzSmxZWFJsVkdWNGRFNXZaR1VvSUhRZ0tTQXBMQ0JoTG5keWFYUmxLQ0JvS0NCbExDQnVkV3hzTENCdUlDa2dLU2tnT2lCdExuSmxjMjlzZG1Vb0tTQTZJRzB1Y21WcVpXTjBLQ0J1WlhjZ1JYSnliM0lvSUZ3aWMyRnVaR0p2ZUNCdWIzUWdhVzVwZEdsaGJHbDZaV1JjSWlBcElDbGNibHgwWEhSY2RIMGdLU3dnZEM1dmRtVnljbWxrWlNnZ1hDSndjbVZ3Wlc1a1EzTnpYQ0lzSUdaMWJtTjBhVzl1S0NCMElDa2dlMXh1WEhSY2RGeDBYSFIyWVhJZ1pTQTlJSFJvYVhNdVgzTm9ZV1J2ZDFKdmIzUTdYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQjBhR2x6TG1Ga1pFTnpjeWdnZEN3Z1puVnVZM1JwYjI0b0lIUWdLU0I3WEc1Y2RGeDBYSFJjZEZ4MGRtRnlJRzRnUFNCbExtWnBjbk4wUld4bGJXVnVkRU5vYVd4a08xeHVYSFJjZEZ4MFhIUmNkSEpsZEhWeWJpQnVJRDhnWlM1cGJuTmxjblJDWldadmNtVW9JSFFzSUc0Z0tTQTZJR1V1WVhCd1pXNWtRMmhwYkdRb0lIUWdLVnh1WEhSY2RGeDBYSFI5SUNsY2JseDBYSFJjZEgwZ0tTd2dkQzV2ZG1WeWNtbGtaU2dnWENKaGNIQmxibVJEYzNOY0lpd2dablZ1WTNScGIyNG9JSFFnS1NCN1hHNWNkRngwWEhSY2RIWmhjaUJsSUQwZ2RHaHBjeTVmYzJoaFpHOTNVbTl2ZER0Y2JseDBYSFJjZEZ4MGNtVjBkWEp1SUhSb2FYTXVZV1JrUTNOektDQjBMQ0JtZFc1amRHbHZiaWdnZENBcElIdGNibHgwWEhSY2RGeDBYSFJ5WlhSMWNtNGdaUzVoY0hCbGJtUkRhR2xzWkNnZ2RDQXBYRzVjZEZ4MFhIUmNkSDBnS1Z4dVhIUmNkRngwZlNBcExDQjBMbTkyWlhKeWFXUmxLQ0JjSW0xaGEyVldhWE5wWW14bFhDSXNJR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWEhSeVpYUjFjbTRnZEdocGN5NXpkSGxzWlZObGJHWW9JSGtnS1Z4dVhIUmNkRngwZlNBcExDQjBMbTkyWlhKeWFXUmxLQ0JjSW1sdWFtVmpkRmRwWkdkbGRFVnNYQ0lzSUdaMWJtTjBhVzl1S0NCMElDa2dlMXh1WEhSY2RGeDBYSFIyWVhJZ1pTQTlJSFJvYVhNN1hHNWNkRngwWEhSY2RISmxkSFZ5YmlCMGFHbHpMbWx1YVhScFlXeHBlbVZrSUQ4Z2RHaHBjeTVmYzJoaFpHOTNVbTl2ZEVKdlpIa3VabWx5YzNSRmJHVnRaVzUwUTJocGJHUWdQeUJ0TG5KbGFtVmpkQ2dnYm1WM0lFVnljbTl5S0NCY0luZHBaR2RsZENCaGJISmxZV1I1SUdsdWFtVmpkR1ZrWENJZ0tTQXBJRG9nWVM1M2NtbDBaU2dnWm5WdVkzUnBiMjRvS1NCN1hHNWNkRngwWEhSY2RGeDBaUzVmYzJoaFpHOTNVbTl2ZEVKdlpIa3VZWEJ3Wlc1a1EyaHBiR1FvSUhRZ0tWeHVYSFJjZEZ4MFhIUjlJQ2t1ZEdobGJpZ2dablZ1WTNScGIyNG9LU0I3WEc1Y2RGeDBYSFJjZEZ4MGNtVjBkWEp1SUdVdVgzVndaR0YwWlVOaFkyaGxaRVJwYldWdWMybHZibk1vS1Z4dVhIUmNkRngwWEhSOUlDa3VkR2hsYmlnZ1puVnVZM1JwYjI0b0tTQjdYRzVjZEZ4MFhIUmNkRngwZG1GeUlIUWdQU0J3S0NCbExsOWthV1JTWlhOcGVtVXNJR2NzSUdVZ0tUdGNibHgwWEhSY2RGeDBYSFJ1WlhjZ2NpZ2daUzVmYzJoaFpHOTNVbTl2ZEVKdlpIa3NJSFFnS1Z4dVhIUmNkRngwWEhSOUlDa2dPaUJ0TG5KbGFtVmpkQ2dnYm1WM0lFVnljbTl5S0NCY0luTmhibVJpYjNnZ2JtOTBJR2x1YVhScFlXeHBlbVZrWENJZ0tTQXBYRzVjZEZ4MFhIUjlJQ2tzSUhRdWIzWmxjbkpwWkdVb0lGd2liV0YwWTJoSVpXbG5hSFJVYjBOdmJuUmxiblJjSWl3Z1puVnVZM1JwYjI0b0tTQjdYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQnRMbkpsYzI5c2RtVW9LVnh1WEhSY2RGeDBmU0FwTENCMExtOTJaWEp5YVdSbEtDQmNJbTFoZEdOb1YybGtkR2hVYjBOdmJuUmxiblJjSWl3Z1puVnVZM1JwYjI0b0tTQjdYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQnRMbkpsYzI5c2RtVW9LVnh1WEhSY2RGeDBmU0FwTENCMExtOTJaWEp5YVdSbEtDQmNJbWx1YzJWeWRGd2lMQ0JtZFc1amRHbHZiaWdnZEN3Z1pTd2diaXdnY2lBcElIdGNibHgwWEhSY2RGeDBkbUZ5SUdrZ1BTQjBhR2x6TG5SaGNtZGxkRWRzYjJKaGJDNWtiMk4xYldWdWRDd2dieUE5SUhSb2FYTXVYM05vWVdSdmQwaHZjM1FnUFNCcExtTnlaV0YwWlVWc1pXMWxiblFvSUdJZ0tTeGNibHgwWEhSY2RGeDBYSFIxSUQwZ2RHaHBjeTVmYzJoaFpHOTNVbTl2ZENBOUlHOHVZWFIwWVdOb1UyaGhaRzkzS0NCN0lHMXZaR1U2SUY4Z2ZTQXBMRnh1WEhSY2RGeDBYSFJjZEdNZ1BTQjBhR2x6TGw5emFHRmtiM2RTYjI5MFFtOWtlU0E5SUdrdVkzSmxZWFJsUld4bGJXVnVkQ2dnWENKa2FYWmNJaUFwTzF4dVhIUmNkRngwWEhSeVpYUjFjbTRnZGk1bWIzSkpiaWdnWlNCOGZDQjdmU3dnWm5WdVkzUnBiMjRvSUhRc0lHVWdLU0I3WEc1Y2RGeDBYSFJjZEZ4MGJ5NXpaWFJCZEhSeWFXSjFkR1VvSUhRc0lHVWdLVnh1WEhSY2RGeDBYSFI5SUNrc0lHOHVhV1FnUFNCMExDQjFMbUZ3Y0dWdVpFTm9hV3hrS0NCaklDa3NJSE11WkdWc1pXZGhkR1VvSUdNc0lGd2lZMnhwWTJ0Y0lpd2dYQ0pCWENJc0lHWjFibU4wYVc5dUtDQjBMQ0JsSUNrZ2UxeHVYSFJjZEZ4MFhIUmNkR1V1YUdGelFYUjBjbWxpZFhSbEtDQmNJblJoY21kbGRGd2lJQ2tnZkh3Z1pTNXpaWFJCZEhSeWFXSjFkR1VvSUZ3aWRHRnlaMlYwWENJc0lGd2lYMkpzWVc1clhDSWdLVnh1WEhSY2RGeDBYSFI5SUNrc0lHMHVZV3hzS0NCYlhHNWNkRngwWEhSY2RGeDBkR2hwY3k1emRIbHNaVk5sYkdZb0lIY2dLU3hjYmx4MFhIUmNkRngwWEhSMGFHbHpMbUZrWkZKdmIzUkRiR0Z6Y3lnZ1JTQXBMRnh1WEhSY2RGeDBYSFJjZEhSb2FYTXVjSEpsY0dWdVpFTnpjeWdnZUNBcExGeHVYSFJjZEZ4MFhIUmNkR0V1ZDNKcGRHVW9JSEl1WW1sdVpDZ2diblZzYkN3Z2J5QXBJQ2xjYmx4MFhIUmNkRngwWFNBcFhHNWNkRngwWEhSOUlDa3NJSFF1YjNabGNuSnBaR1VvSUZ3aWIyNVNaWE5wZW1WY0lpd2dablZ1WTNScGIyNG9JSFFnS1NCN1hHNWNkRngwWEhSY2RIUm9hWE11WDNKbGMybDZaVWhoYm1Sc1pYSnpMbkIxYzJnb0lIUWdLVnh1WEhSY2RGeDBmU0FwTENCMExtRm1kR1Z5S0NCY0ltbHVhWFJwWVd4cGVtVmNJaXdnWm5WdVkzUnBiMjRvS1NCN1hHNWNkRngwWEhSY2RIUm9hWE11WDNOb1lXUnZkMGh2YzNRZ1BTQjBhR2x6TGw5emFHRmtiM2RTYjI5MElEMGdkR2hwY3k1ZmMyaGhaRzkzVW05dmRFSnZaSGtnUFNCdWRXeHNMQ0IwYUdsekxsOTNhV1IwYUNBOUlIUm9hWE11WDJobGFXZG9kQ0E5SURBc0lIUm9hWE11WDNKbGMybDZaVWhoYm1Sc1pYSnpJRDBnVzExY2JseDBYSFJjZEgwZ0tTd2dkQzVoWm5SbGNpZ2dYQ0p6ZEhsc1pWTmxiR1pjSWl3Z1puVnVZM1JwYjI0b0tTQjdYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQjBhR2x6TGw5MWNHUmhkR1ZEWVdOb1pXUkVhVzFsYm5OcGIyNXpLQ2xjYmx4MFhIUmNkSDBnS1Z4dVhIUmNkSDBnS1Z4dVhIUjlMQ0JtZFc1amRHbHZiaWdnZEN3Z1pTQXBJSHRjYmx4MFhIUjJZWElnYmp0Y2JseDBYSFFvYmlBOUlHWjFibU4wYVc5dUtDQjBMQ0JsSUNrZ2UxeHVYSFJjZEZ4MFpuVnVZM1JwYjI0Z2NpZ2dkQ3dnWlNBcElIdGNibHgwWEhSY2RGeDBhV1lnS0NCMExuSmxjMmw2WldSQmRIUmhZMmhsWkNBcElIdGNibHgwWEhSY2RGeDBYSFJwWmlBb0lIUXVjbVZ6YVhwbFpFRjBkR0ZqYUdWa0lDa2dlMXh1WEhSY2RGeDBYSFJjZEZ4MGNtVjBkWEp1SUhadmFXUWdkQzV5WlhOcGVtVmtRWFIwWVdOb1pXUXVZV1JrS0NCbElDbGNibHgwWEhSY2RGeDBYSFI5WEc1Y2RGeDBYSFJjZEgwZ1pXeHpaU0I3WEc1Y2RGeDBYSFJjZEZ4MGRDNXlaWE5wZW1Wa1FYUjBZV05vWldRZ1BTQnVaWGNnWm5WdVkzUnBiMjRvS1NCN1hHNWNkRngwWEhSY2RGeDBYSFIyWVhJZ2RDd2daVHRjYmx4MFhIUmNkRngwWEhSY2RIUm9hWE11Y1NBOUlGdGRMQ0IwYUdsekxtRmtaQ0E5SUdaMWJtTjBhVzl1S0NCMElDa2dlMXh1WEhSY2RGeDBYSFJjZEZ4MFhIUjBhR2x6TG5FdWNIVnphQ2dnZENBcFhHNWNkRngwWEhSY2RGeDBYSFI5TENCMGFHbHpMbU5oYkd3Z1BTQm1kVzVqZEdsdmJpZ3BJSHRjYmx4MFhIUmNkRngwWEhSY2RGeDBabTl5SUNnZ2RDQTlJREFzSUdVZ1BTQjBhR2x6TG5FdWJHVnVaM1JvT3lCMElEd2daVHNnZENBckt5QXBJSHRjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFIwYUdsekxuRmJJSFFnWFM1allXeHNLQ2xjYmx4MFhIUmNkRngwWEhSY2RGeDBmVnh1WEhSY2RGeDBYSFJjZEZ4MGZWeHVYSFJjZEZ4MFhIUmNkSDBzSUhRdWNtVnphWHBsWkVGMGRHRmphR1ZrTG1Ga1pDZ2daU0FwTzF4dVhIUmNkRngwWEhSOVhHNWNkRngwWEhSY2RIUXVjbVZ6YVhwbFUyVnVjMjl5SUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2dnWENKa2FYWmNJaUFwTENCMExuSmxjMmw2WlZObGJuTnZjaTVqYkdGemMwNWhiV1VnUFNCY0luSmxjMmw2WlMxelpXNXpiM0pjSWp0Y2JseDBYSFJjZEZ4MGRtRnlJRzRnUFNCY0luQnZjMmwwYVc5dU9pQmhZbk52YkhWMFpUc2diR1ZtZERvZ01Ec2dkRzl3T2lBd095QnlhV2RvZERvZ01Ec2dZbTkwZEc5dE9pQXdPeUJ2ZG1WeVpteHZkem9nYUdsa1pHVnVPeUI2TFdsdVpHVjRPaUF0TVRzZ2RtbHphV0pwYkdsMGVUb2dhR2xrWkdWdU8xd2lMRnh1WEhSY2RGeDBYSFJjZEhJZ1BTQmNJbkJ2YzJsMGFXOXVPaUJoWW5OdmJIVjBaVHNnYkdWbWREb2dNRHNnZEc5d09pQXdPeUIwY21GdWMybDBhVzl1T2lBd2N6dGNJanRjYmx4MFhIUmNkRngwZEM1eVpYTnBlbVZUWlc1emIzSXVjM1I1YkdVdVkzTnpWR1Y0ZENBOUlHNHNJSFF1Y21WemFYcGxVMlZ1YzI5eUxtbHVibVZ5U0ZSTlRDQTlJQ2M4WkdsMklHTnNZWE56UFZ3aWNtVnphWHBsTFhObGJuTnZjaTFsZUhCaGJtUmNJaUJ6ZEhsc1pUMWNJaWNnS3lCdUlDc2dKMXdpUGp4a2FYWWdjM1I1YkdVOVhDSW5JQ3NnY2lBcklDZGNJajQ4TDJScGRqNDhMMlJwZGo0OFpHbDJJR05zWVhOelBWd2ljbVZ6YVhwbExYTmxibk52Y2kxemFISnBibXRjSWlCemRIbHNaVDFjSWljZ0t5QnVJQ3NnSjF3aVBqeGthWFlnYzNSNWJHVTlYQ0luSUNzZ2NpQXJJQ2NnZDJsa2RHZzZJREl3TUNVN0lHaGxhV2RvZERvZ01qQXdKVndpUGp3dlpHbDJQand2WkdsMlBpY3NJSFF1WVhCd1pXNWtRMmhwYkdRb0lIUXVjbVZ6YVhwbFUyVnVjMjl5SUNrc0lIdGNibHgwWEhSY2RGeDBYSFFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWm1sNFpXUTZJREVzWEc1Y2RGeDBYSFJjZEZ4MElDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRmljMjlzZFhSbE9pQXhYRzVjZEZ4MFhIUmNkQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5V3lCbWRXNWpkR2x2YmlnZ2RDd2daU0FwSUh0Y2JseDBYSFJjZEZ4MFhIUnlaWFIxY200Z2RDNWpkWEp5Wlc1MFUzUjViR1VnUHlCMExtTjFjbkpsYm5SVGRIbHNaVnNnWlNCZElEb2dkMmx1Wkc5M0xtZGxkRU52YlhCMWRHVmtVM1I1YkdVZ1B5QjNhVzVrYjNjdVoyVjBRMjl0Y0hWMFpXUlRkSGxzWlNnZ2RDd2diblZzYkNBcExtZGxkRkJ5YjNCbGNuUjVWbUZzZFdVb0lHVWdLU0E2SUhRdWMzUjViR1ZiSUdVZ1hWeHVYSFJjZEZ4MFhIUjlLQ0IwTENCY0luQnZjMmwwYVc5dVhDSWdLU0JkSUh4OElDaDBMbk4wZVd4bExuQnZjMmwwYVc5dUlEMGdYQ0p5Wld4aGRHbDJaVndpS1R0Y2JseDBYSFJjZEZ4MGRtRnlJR2tzSUc4c0lITWdQU0IwTG5KbGMybDZaVk5sYm5OdmNpNWphR2xzWkU1dlpHVnpXeUF3SUYwc0lHRWdQU0J6TG1Ob2FXeGtUbTlrWlhOYklEQWdYU3dnZFNBOUlIUXVjbVZ6YVhwbFUyVnVjMjl5TG1Ob2FXeGtUbTlrWlhOYklERWdYU3hjYmx4MFhIUmNkRngwWEhSaklEMGdLSFV1WTJocGJHUk9iMlJsYzFzZ01DQmRMQ0JtZFc1amRHbHZiaWdwSUh0Y2JseDBYSFJjZEZ4MFhIUmNkR0V1YzNSNWJHVXVkMmxrZEdnZ1BTQnpMbTltWm5ObGRGZHBaSFJvSUNzZ01UQWdLeUJjSW5CNFhDSXNJR0V1YzNSNWJHVXVhR1ZwWjJoMElEMGdjeTV2Wm1aelpYUklaV2xuYUhRZ0t5QXhNQ0FySUZ3aWNIaGNJaXdnY3k1elkzSnZiR3hNWldaMElEMGdjeTV6WTNKdmJHeFhhV1IwYUN3Z2N5NXpZM0p2Ykd4VWIzQWdQU0J6TG5OamNtOXNiRWhsYVdkb2RDd2dkUzV6WTNKdmJHeE1aV1owSUQwZ2RTNXpZM0p2Ykd4WGFXUjBhQ3dnZFM1elkzSnZiR3hVYjNBZ1BTQjFMbk5qY205c2JFaGxhV2RvZEN3Z2FTQTlJSFF1YjJabWMyVjBWMmxrZEdnc0lHOGdQU0IwTG05bVpuTmxkRWhsYVdkb2RGeHVYSFJjZEZ4MFhIUmNkSDBwTzF4dVhIUmNkRngwWEhSaktDazdYRzVjZEZ4MFhIUmNkSFpoY2lCa0lEMGdablZ1WTNScGIyNG9JSFFzSUdVc0lHNGdLU0I3WEc1Y2RGeDBYSFJjZEZ4MGRDNWhkSFJoWTJoRmRtVnVkQ0EvSUhRdVlYUjBZV05vUlhabGJuUW9JRndpYjI1Y0lpQXJJR1VzSUc0Z0tTQTZJSFF1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWdnWlN3Z2JpQXBYRzVjZEZ4MFhIUmNkSDBzSUdZZ1BTQm1kVzVqZEdsdmJpZ3BJSHRjYmx4MFhIUmNkRngwWEhSMExtOW1abk5sZEZkcFpIUm9JRDA5SUdrZ0ppWWdkQzV2Wm1aelpYUklaV2xuYUhRZ1BUMGdieUI4ZkNCMExuSmxjMmw2WldSQmRIUmhZMmhsWkNBbUppQjBMbkpsYzJsNlpXUkJkSFJoWTJobFpDNWpZV3hzS0Nrc0lHTW9LVnh1WEhSY2RGeDBYSFI5TzF4dVhIUmNkRngwWEhSa0tDQnpMQ0JjSW5OamNtOXNiRndpTENCbUlDa3NJR1FvSUhVc0lGd2ljMk55YjJ4c1hDSXNJR1lnS1Z4dVhIUmNkRngwZlZ4dVhHNWNkRngwWEhSMllYSWdhU0E5SUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1ZEc5VGRISnBibWN1WTJGc2JDZ2dkQ0FwTEZ4dVhIUmNkRngwWEhSdklEMGdYQ0piYjJKcVpXTjBJRUZ5Y21GNVhWd2lJRDA5UFNCcElIeDhJRndpVzI5aWFtVmpkQ0JPYjJSbFRHbHpkRjFjSWlBOVBUMGdhU0I4ZkNCY0lsdHZZbXBsWTNRZ1NGUk5URU52Ykd4bFkzUnBiMjVkWENJZ1BUMDlJR2tnZkh3Z1hDSjFibVJsWm1sdVpXUmNJaUFoUFNCMGVYQmxiMllnYWxGMVpYSjVJQ1ltSUhRZ2FXNXpkR0Z1WTJWdlppQnFVWFZsY25rZ2ZId2dYQ0oxYm1SbFptbHVaV1JjSWlBaFBTQjBlWEJsYjJZZ1JXeGxiV1Z1ZEhNZ0ppWWdkQ0JwYm5OMFlXNWpaVzltSUVWc1pXMWxiblJ6TzF4dVhIUmNkRngwYVdZZ0tDQnZJQ2tnZTF4dVhIUmNkRngwWEhSbWIzSWdLQ0IyWVhJZ2N5QTlJREFzSUdFZ1BTQjBMbXhsYm1kMGFEc2djeUE4SUdFN0lITWdLeXNnS1NCN1hHNWNkRngwWEhSY2RGeDBjaWdnZEZzZ2N5QmRMQ0JsSUNrN1hHNWNkRngwWEhSY2RIMWNibHgwWEhSY2RIMGdaV3h6WlNCN1hHNWNkRngwWEhSY2RISW9JSFFzSUdVZ0tUdGNibHgwWEhSY2RIMWNibHgwWEhSY2RIUm9hWE11WkdWMFlXTm9JRDBnWm5WdVkzUnBiMjRvS1NCN1hHNWNkRngwWEhSY2RHbG1JQ2dnYnlBcElIdGNibHgwWEhSY2RGeDBYSFJtYjNJZ0tDQjJZWElnWlNBOUlEQXNJSElnUFNCMExteGxibWQwYURzZ1pTQThJSEk3SUdVZ0t5c2dLU0I3WEc1Y2RGeDBYSFJjZEZ4MFhIUnVMbVJsZEdGamFDZ2dkRnNnWlNCZElDazdYRzVjZEZ4MFhIUmNkRngwZlZ4dVhIUmNkRngwWEhSOUlHVnNjMlVnZTF4dVhIUmNkRngwWEhSY2RHNHVaR1YwWVdOb0tDQjBJQ2xjYmx4MFhIUmNkRngwZlZ4dVhIUmNkRngwZlZ4dVhIUmNkSDBwTG1SbGRHRmphQ0E5SUdaMWJtTjBhVzl1S0NCMElDa2dlMXh1WEhSY2RGeDBkQzV5WlhOcGVtVlRaVzV6YjNJZ0ppWWdLSFF1Y21WdGIzWmxRMmhwYkdRb0lIUXVjbVZ6YVhwbFUyVnVjMjl5SUNrc0lHUmxiR1YwWlNCMExuSmxjMmw2WlZObGJuTnZjaXdnWkdWc1pYUmxJSFF1Y21WemFYcGxaRUYwZEdGamFHVmtLVnh1WEhSY2RIMHNJSFp2YVdRZ01DQWhQVDBnZENBbUppQjJiMmxrSURBZ0lUMDlJSFF1Wlhod2IzSjBjeUEvSUhRdVpYaHdiM0owY3lBOUlHNGdPaUIzYVc1a2IzY3VVbVZ6YVhwbFUyVnVjMjl5SUQwZ2JseHVYSFI5TENCbWRXNWpkR2x2YmlnZ2RDd2daU3dnYmlBcElIdGNibHgwWEhSMllYSWdjaUE5SUc0b0lETWdLU3dnYVNBOUlHNG9JREFnS1N3Z2J5QTlJRzRvSURFeklDa3NJSE1nUFNCdUtDQXhOQ0FwS0Nrc0lHRWdQU0J1S0NBMk1pQXBMQ0IxSUQwZ2JpZ2dOU0FwTENCaklEMGdYQ0poTG5SM2FYUjBaWEl0Wm05c2JHOTNMV0oxZEhSdmJsd2lPMXh1WEhSY2RIUXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVLQ0IwSUNrZ2UxeHVYSFJjZEZ4MGNtVjBkWEp1SUhNb0lIUXNJR01nS1M1dFlYQW9JR1oxYm1OMGFXOXVLQ0IwSUNrZ2UxeHVYSFJjZEZ4MFhIUnlaWFIxY200Z1lTZ2dablZ1WTNScGIyNG9JSFFnS1NCN1hHNWNkRngwWEhSY2RGeDBkbUZ5SUdVZ1BTQnZLQ0IwSUNrc0lHNGdQU0I3WEc1Y2RGeDBYSFJjZEZ4MFhIUnpZM0psWlc1T1lXMWxPaUJ5TG5OamNtVmxiazVoYldVb0lIUXVhSEpsWmlBcExGeHVYSFJjZEZ4MFhIUmNkRngwYzJodmQxTmpjbVZsYms1aGJXVTZJRndpWm1Gc2MyVmNJaUFoUFQwZ2RDNW5aWFJCZEhSeWFXSjFkR1VvSUZ3aVpHRjBZUzF6YUc5M0xYTmpjbVZsYmkxdVlXMWxYQ0lnS1N4Y2JseDBYSFJjZEZ4MFhIUmNkSE5vYjNkRGIzVnVkRG9nWENKbVlXeHpaVndpSUNFOVBTQjBMbWRsZEVGMGRISnBZblYwWlNnZ1hDSmtZWFJoTFhOb2IzY3RZMjkxYm5SY0lpQXBMRnh1WEhSY2RGeDBYSFJjZEZ4MGMybDZaVG9nZEM1blpYUkJkSFJ5YVdKMWRHVW9JRndpWkdGMFlTMXphWHBsWENJZ0tTeGNibHgwWEhSY2RGeDBYSFJjZEdOdmRXNTBPaUIwTG1kbGRFRjBkSEpwWW5WMFpTZ2dYQ0prWVhSaExXTnZkVzUwWENJZ0tTeGNibHgwWEhSY2RGeDBYSFJjZEhCeVpYWnBaWGM2SUhRdVoyVjBRWFIwY21saWRYUmxLQ0JjSW1SaGRHRXRjSEpsZG1sbGQxd2lJQ2xjYmx4MFhIUmNkRngwWEhSOU8xeHVYSFJjZEZ4MFhIUmNkSEpsZEhWeWJpQnBMbVp2Y2tsdUtDQnVMQ0JtZFc1amRHbHZiaWdnZEN3Z2JpQXBJSHRjYmx4MFhIUmNkRngwWEhSY2RIWmhjaUJ5SUQwZ1pWc2dkQ0JkTzF4dVhIUmNkRngwWEhSY2RGeDBaVnNnZENCZElEMGdkUzVvWVhOV1lXeDFaU2dnY2lBcElEOGdjaUE2SUc1Y2JseDBYSFJjZEZ4MFhIUjlJQ2tzSUdVdWMyTnlaV1Z1VG1GdFpTQTlJR1V1YzJOeVpXVnVUbUZ0WlNCOGZDQmxMbk5qY21WbGJsOXVZVzFsTENCbFhHNWNkRngwWEhSY2RIMG9JSFFnS1N3Z2RDNXdZWEpsYm5ST2IyUmxMQ0IwSUNsY2JseDBYSFJjZEgwZ0tWeHVYSFJjZEgxY2JseDBmU3dnWm5WdVkzUnBiMjRvSUhRc0lHVXNJRzRnS1NCN1hHNWNkRngwZG1GeUlISWdQU0J1S0NBeUlDazdYRzVjZEZ4MGRDNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNG9JSFFzSUdVZ0tTQjdYRzVjZEZ4MFhIUjJZWElnYVNBOUlHNWxkeUJ5TzF4dVhIUmNkRngwY21WMGRYSnVJRzR1WlNnZ015QXBMblJvWlc0b0lHWjFibU4wYVc5dUtDQnlJQ2tnZTF4dVhIUmNkRngwWEhSMllYSWdienRjYmx4MFhIUmNkRngwZEhKNUlIdGNibHgwWEhSY2RGeDBYSFJ2SUQwZ2JpZ2dPRGtnS1N3Z2FTNXlaWE52YkhabEtDQnVaWGNnYnlnZ2RDd2daU0FwSUNsY2JseDBYSFJjZEZ4MGZTQmpZWFJqYUNBb0lIUWdLU0I3WEc1Y2RGeDBYSFJjZEZ4MGFTNXlaV3BsWTNRb0lIUWdLVnh1WEhSY2RGeDBYSFI5WEc1Y2RGeDBYSFI5TG1KcGJtUW9JRzUxYkd3c0lHNGdLU0FwTG1OaGRHTm9LQ0JtZFc1amRHbHZiaWdnZENBcElIdGNibHgwWEhSY2RGeDBhUzV5WldwbFkzUW9JSFFnS1Z4dVhIUmNkRngwZlNBcExDQnBMbkJ5YjIxcGMyVmNibHgwWEhSOVhHNWNkSDBzSUdaMWJtTjBhVzl1S0NCMExDQmxMQ0J1SUNrZ2UxeHVYSFJjZEhaaGNpQnlJRDBnYmlnZ01UZ2dLU3dnYVNBOUlHNG9JREV5T0NBcExDQnZJRDBnYmlnZ05UZ2dLU3dnY3lBOUlHNG9JRE15SUNrc0lHRWdQU0J1S0NBeUlDa3NJSFVnUFNCdUtDQTJJQ2tzSUdNZ1BTQnVLQ0EzSUNrc0lHUWdQU0J1S0NBd0lDa3NYRzVjZEZ4MFhIUm1JRDBnZXlCaGJHeHZkMloxYkd4elkzSmxaVzQ2SUZ3aWRISjFaVndpSUgwc0lHd2dQU0I3WEc1Y2RGeDBYSFJjZEhCdmMybDBhVzl1T2lCY0ltRmljMjlzZFhSbFhDSXNYRzVjZEZ4MFhIUmNkSFpwYzJsaWFXeHBkSGs2SUZ3aWFHbGtaR1Z1WENJc1hHNWNkRngwWEhSY2RIZHBaSFJvT2lCY0lqQndlRndpTEZ4dVhIUmNkRngwWEhSb1pXbG5hSFE2SUZ3aU1IQjRYQ0pjYmx4MFhIUmNkSDBzSUdnZ1BTQjdYRzVjZEZ4MFhIUmNkSEJ2YzJsMGFXOXVPaUJjSW5OMFlYUnBZMXdpTEZ4dVhIUmNkRngwWEhSMmFYTnBZbWxzYVhSNU9pQmNJblpwYzJsaWJHVmNJbHh1WEhSY2RGeDBmU3dnY0NBOUlIdDlPMXh1WEhSY2RHa29JR1oxYm1OMGFXOXVLQ0IwTENCbExDQnVJQ2tnZTF4dVhIUmNkRngwZG1GeUlISWdQU0J3V3lCMElGMDdYRzVjZEZ4MFhIUnBaaUFvSUhJZ0tTQjdYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQmxJRDBnWlNCOGZDQXhMQ0J1SUQwZ2JpQjhmQ0F4TENCeUxuTjBlV3hsVTJWc1ppZ2dlMXh1WEhSY2RGeDBYSFJjZEhkcFpIUm9PaUJsSUNzZ1hDSndlRndpTEZ4dVhIUmNkRngwWEhSY2RHaGxhV2RvZERvZ2JpQXJJRndpY0hoY0lseHVYSFJjZEZ4MFhIUjlJQ2t1ZEdobGJpZ2dablZ1WTNScGIyNG9LU0I3WEc1Y2RGeDBYSFJjZEZ4MGNpNWthV1JTWlhOcGVtVW9LVnh1WEhSY2RGeDBYSFI5SUNsY2JseDBYSFJjZEgxY2JseDBYSFI5TENCbWRXNWpkR2x2YmlnZ2RDQXBJSHRjYmx4MFhIUmNkSFpoY2lCbElEMGdjRnNnZENCZE8xeHVYSFJjZEZ4MGFXWWdLQ0JsSUNrZ2UxeHVYSFJjZEZ4MFhIUnlaWFIxY200Z1pTNWZjbVZ1WkdWeVpXUXVjbVZ6YjJ4MlpTZ3BYRzVjZEZ4MFhIUjlYRzVjZEZ4MGZTd2dablZ1WTNScGIyNG9JSFFzSUdVZ0tTQjdYRzVjZEZ4MFhIUjJZWElnYmlBOUlIQmJJSFFnWFR0Y2JseDBYSFJjZEc0Z0ppWWdaU0FtSmlCdUxuTmxkRWxtY21GdFpWWmxjbk5wYjI0b0lHVWdLVnh1WEhSY2RIMGdLU3dnZEM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0b0lIUWdLU0I3WEc1Y2RGeDBYSFIwTG05MlpYSnlhV1JsVUhKdmNHVnlkSGtvSUZ3aWFXUmNJaXdnZTF4dVhIUmNkRngwWEhSblpYUTZJR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWEhSY2RISmxkSFZ5YmlCMGFHbHpMbk5oYm1SaWIzaEZiQ0FtSmlCMGFHbHpMbk5oYm1SaWIzaEZiQzVwWkZ4dVhIUmNkRngwWEhSOVhHNWNkRngwWEhSOUlDa3NJSFF1YjNabGNuSnBaR1ZRY205d1pYSjBlU2dnWENKcGJtbDBhV0ZzYVhwbFpGd2lMQ0I3WEc1Y2RGeDBYSFJjZEdkbGREb2dablZ1WTNScGIyNG9LU0I3WEc1Y2RGeDBYSFJjZEZ4MGNtVjBkWEp1SUNFaGRHaHBjeTVwWm5KaGJXVkZiRnh1WEhSY2RGeDBYSFI5WEc1Y2RGeDBYSFI5SUNrc0lIUXViM1psY25KcFpHVlFjbTl3WlhKMGVTZ2dYQ0ozYVdSMGFGd2lMQ0I3WEc1Y2RGeDBYSFJjZEdkbGREb2dablZ1WTNScGIyNG9LU0I3WEc1Y2RGeDBYSFJjZEZ4MGNtVjBkWEp1SUhSb2FYTXVYM2RwWkhSb1hHNWNkRngwWEhSY2RIMWNibHgwWEhSY2RIMGdLU3dnZEM1dmRtVnljbWxrWlZCeWIzQmxjblI1S0NCY0ltaGxhV2RvZEZ3aUxDQjdYRzVjZEZ4MFhIUmNkR2RsZERvZ1puVnVZM1JwYjI0b0tTQjdYRzVjZEZ4MFhIUmNkRngwY21WMGRYSnVJSFJvYVhNdVgyaGxhV2RvZEZ4dVhIUmNkRngwWEhSOVhHNWNkRngwWEhSOUlDa3NJSFF1YjNabGNuSnBaR1ZRY205d1pYSjBlU2dnWENKellXNWtZbTk0Uld4Y0lpd2dlMXh1WEhSY2RGeDBYSFJuWlhRNklHWjFibU4wYVc5dUtDa2dlMXh1WEhSY2RGeDBYSFJjZEhKbGRIVnliaUIwYUdsekxtbG1jbUZ0WlVWc1hHNWNkRngwWEhSY2RIMWNibHgwWEhSY2RIMGdLU3dnZEM1a1pXWnBibVZRY205d1pYSjBlU2dnWENKcFpuSmhiV1ZGYkZ3aUxDQjdYRzVjZEZ4MFhIUmNkR2RsZERvZ1puVnVZM1JwYjI0b0tTQjdYRzVjZEZ4MFhIUmNkRngwY21WMGRYSnVJSFJvYVhNdVgybG1jbUZ0WlZ4dVhIUmNkRngwWEhSOVhHNWNkRngwWEhSOUlDa3NJSFF1WkdWbWFXNWxVSEp2Y0dWeWRIa29JRndpYVdaeVlXMWxWbVZ5YzJsdmJsd2lMQ0I3WEc1Y2RGeDBYSFJjZEdkbGREb2dablZ1WTNScGIyNG9LU0I3WEc1Y2RGeDBYSFJjZEZ4MGNtVjBkWEp1SUhSb2FYTXVYMmxtY21GdFpWWmxjbk5wYjI1Y2JseDBYSFJjZEZ4MGZWeHVYSFJjZEZ4MGZTQXBMQ0IwTG1SbFptbHVaU2dnWENKMWNHUmhkR1ZEWVdOb1pXUkVhVzFsYm5OcGIyNXpYQ0lzSUdaMWJtTjBhVzl1S0NrZ2UxeHVYSFJjZEZ4MFhIUjJZWElnZENBOUlIUm9hWE03WEc1Y2RGeDBYSFJjZEhKbGRIVnliaUIwYUdsekxtbHVhWFJwWVd4cGVtVmtJRDhnY2k1eVpXRmtLQ0JtZFc1amRHbHZiaWdwSUh0Y2JseDBYSFJjZEZ4MFhIUjBMbDkzYVdSMGFDQTlJSFF1YzJGdVpHSnZlRVZzTG05bVpuTmxkRmRwWkhSb0xDQjBMbDlvWldsbmFIUWdQU0IwTG5OaGJtUmliM2hGYkM1dlptWnpaWFJJWldsbmFIUmNibHgwWEhSY2RGeDBmU0FwSURvZ2RTNXlaWE52YkhabEtDbGNibHgwWEhSY2RIMGdLU3dnZEM1a1pXWnBibVVvSUZ3aWMyVjBWR2wwYkdWY0lpd2dablZ1WTNScGIyNG9JSFFnS1NCN1hHNWNkRngwWEhSY2RIUm9hWE11YVdaeVlXMWxSV3d1ZEdsMGJHVWdQU0IwWEc1Y2RGeDBYSFI5SUNrc0lIUXVaR1ZtYVc1bEtDQmNJbk5sZEZkaGFYUlViMU4zWVhCVmJuUnBiRkpsYm1SbGNtVmtYQ0lzSUdaMWJtTjBhVzl1S0NCMElDa2dlMXh1WEhSY2RGeDBYSFIwYUdsekxsOTNZV2wwVkc5VGQyRndWVzUwYVd4U1pXNWtaWEpsWkNBOUlIUmNibHgwWEhSY2RIMGdLU3dnZEM1a1pXWnBibVVvSUZ3aWMyVjBTV1p5WVcxbFZtVnljMmx2Ymx3aUxDQm1kVzVqZEdsdmJpZ2dkQ0FwSUh0Y2JseDBYSFJjZEZ4MGRHaHBjeTVmYVdaeVlXMWxWbVZ5YzJsdmJpQTlJSFJjYmx4MFhIUmNkSDBnS1N3Z2RDNWtaV1pwYm1Vb0lGd2lhWE5TWlc1a1pYSmxaRndpTENCbWRXNWpkR2x2YmlncElIdGNibHgwWEhSY2RGeDBjbVYwZFhKdUlIUm9hWE11WDNKbGJtUmxjbVZrTG5CeWIyMXBjMlZjYmx4MFhIUmNkSDBnS1N3Z2RDNWtaV1pwYm1Vb0lGd2liV0ZyWlZacGMybGliR1ZjSWl3Z1puVnVZM1JwYjI0b0tTQjdYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQjBhR2x6TG5OMGVXeGxVMlZzWmlnZ2FDQXBYRzVjZEZ4MFhIUjlJQ2tzSUhRdVpHVm1hVzVsS0NCY0ltUnBaRkpsYzJsNlpWd2lMQ0JtZFc1amRHbHZiaWdwSUh0Y2JseDBYSFJjZEZ4MGRtRnlJSFFnUFNCMGFHbHpMQ0JsSUQwZ2RDNWZjbVZ6YVhwbFNHRnVaR3hsY25NdWJHVnVaM1JvSUQ0Z01EdGNibHgwWEhSY2RGeDBjbVYwZFhKdUlIUm9hWE11ZFhCa1lYUmxRMkZqYUdWa1JHbHRaVzV6YVc5dWN5Z3BMblJvWlc0b0lHWjFibU4wYVc5dUtDa2dlMXh1WEhSY2RGeDBYSFJjZEdVZ0ppWWdkQzVmY21WemFYcGxTR0Z1Wkd4bGNuTXVabTl5UldGamFDZ2dablZ1WTNScGIyNG9JR1VnS1NCN1hHNWNkRngwWEhSY2RGeDBYSFJsS0NCMElDbGNibHgwWEhSY2RGeDBYSFI5SUNsY2JseDBYSFJjZEZ4MGZTQXBYRzVjZEZ4MFhIUjlJQ2tzSUhRdVpHVm1hVzVsS0NCY0lteHZZV1JFYjJOMWJXVnVkRndpTENCbWRXNWpkR2x2YmlnZ2RDQXBJSHRjYmx4MFhIUmNkRngwZG1GeUlHVWdQU0J1WlhjZ1lUdGNibHgwWEhSY2RGeDBjbVYwZFhKdUlIUm9hWE11YVc1cGRHbGhiR2w2WldRZ1B5QjBhR2x6TG1sbWNtRnRaVVZzTG5OeVl5QS9JSFV1Y21WcVpXTjBLQ0J1WlhjZ1JYSnliM0lvSUZ3aWQybGtaMlYwSUdGc2NtVmhaSGtnYkc5aFpHVmtYQ0lnS1NBcElEb2dLSFJvYVhNdWFXWnlZVzFsUld3dVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnZ1hDSnNiMkZrWENJc0lHVXVjbVZ6YjJ4MlpTd2dJVEVnS1N3Z2RHaHBjeTVwWm5KaGJXVkZiQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ0JjSW1WeWNtOXlYQ0lzSUdVdWNtVnFaV04wTENBaE1TQXBMQ0IwYUdsekxtbG1jbUZ0WlVWc0xuTnlZeUE5SUhRc0lHVXVjSEp2YldselpTa2dPaUIxTG5KbGFtVmpkQ2dnYm1WM0lFVnljbTl5S0NCY0luTmhibVJpYjNnZ2JtOTBJR2x1YVhScFlXeHBlbVZrWENJZ0tTQXBYRzVjZEZ4MFhIUjlJQ2tzSUhRdVlXWjBaWElvSUZ3aWFXNXBkR2xoYkdsNlpWd2lMQ0JtZFc1amRHbHZiaWdwSUh0Y2JseDBYSFJjZEZ4MGRtRnlJSFFnUFNCdVpYY2dZVHRjYmx4MFhIUmNkRngwZEdocGN5NWZhV1p5WVcxbElEMGdiblZzYkN3Z2RHaHBjeTVmYVdaeVlXMWxWbVZ5YzJsdmJpQTlJRzUxYkd3c0lIUm9hWE11WDNkcFpIUm9JRDBnZEdocGN5NWZhR1ZwWjJoMElEMGdNQ3dnZEdocGN5NWZjbVZ6YVhwbFNHRnVaR3hsY25NZ1BTQmJYU3dnZEdocGN5NWZjbVZ1WkdWeVpXUWdQU0IwTENCMGFHbHpMbDkzWVdsMFZHOVRkMkZ3Vlc1MGFXeFNaVzVrWlhKbFpDQTlJQ0V4WEc1Y2RGeDBYSFI5SUNrc0lIUXViM1psY25KcFpHVW9JRndpYVc1elpYSjBYQ0lzSUdaMWJtTjBhVzl1S0NCMExDQmxMQ0J1TENCcElDa2dlMXh1WEhSY2RGeDBYSFIyWVhJZ1lTQTlJSFJvYVhNN1hHNWNkRngwWEhSY2RISmxkSFZ5YmlCbElEMGdaQzVoZFdjb0lIc2dhV1E2SUhRZ2ZTd2daaXdnWlNBcExDQnVJRDBnWkM1aGRXY29JSHQ5TENCc0xDQnVJQ2tzSUhSb2FYTXVYMmxtY21GdFpTQTlJSE1vSUdVc0lHNGdLU3dnY0ZzZ2RDQmRJRDBnZEdocGN5d2dZUzVmZDJGcGRGUnZVM2RoY0ZWdWRHbHNVbVZ1WkdWeVpXUWdmSHdnZEdocGN5NXZibEpsYzJsNlpTZ2dieWdnWm5WdVkzUnBiMjRvS1NCN1hHNWNkRngwWEhSY2RGeDBZUzV0WVd0bFZtbHphV0pzWlNncFhHNWNkRngwWEhSY2RIMGdLU0FwTENCeUxuZHlhWFJsS0NCaktDQnBMQ0J1ZFd4c0xDQjBhR2x6TGw5cFpuSmhiV1VnS1NBcFhHNWNkRngwWEhSOUlDa3NJSFF1YjNabGNuSnBaR1VvSUZ3aWIyNVNaWE5wZW1WY0lpd2dablZ1WTNScGIyNG9JSFFnS1NCN1hHNWNkRngwWEhSY2RIUm9hWE11WDNKbGMybDZaVWhoYm1Sc1pYSnpMbkIxYzJnb0lIUWdLVnh1WEhSY2RGeDBmU0FwTENCMExtRm1kR1Z5S0NCY0luTjBlV3hsVTJWc1psd2lMQ0JtZFc1amRHbHZiaWdwSUh0Y2JseDBYSFJjZEZ4MGNtVjBkWEp1SUhSb2FYTXVkWEJrWVhSbFEyRmphR1ZrUkdsdFpXNXphVzl1Y3lncFhHNWNkRngwWEhSOUlDbGNibHgwWEhSOVhHNWNkSDBzSUdaMWJtTjBhVzl1S0NCMExDQmxMQ0J1SUNrZ2UxeHVYSFJjZEhaaGNpQnlJRDBnYmlnZ01TQXBMQ0JwSUQwZ2JpZ2dNVEk1SUNrc0lHOGdQU0J1S0NBeE16RWdLU3dnY3lBOUlHNG9JREkxSUNrc0lHRWdQU0J1S0NBMUlDa3NJSFVnUFNCdUtDQXhNeklnS1R0Y2JseDBYSFIwTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlnZ2RDd2daU3dnYmlBcElIdGNibHgwWEhSY2RHWjFibU4wYVc5dUlHTW9JSFFzSUdVZ0tTQjdYRzVjZEZ4MFhIUmNkSFpoY2lCdUlEMGdkU2dnZEdocGN5QXBPMXh1WEhSY2RGeDBYSFJ6TG5SeWFXZG5aWElvSUhRc0lIdGNibHgwWEhSY2RGeDBYSFIwWVhKblpYUTZJRzRzWEc1Y2RGeDBYSFJjZEZ4MGNtVm5hVzl1T2lCbExGeHVYSFJjZEZ4MFhIUmNkSFI1Y0dVNklIUXNYRzVjZEZ4MFhIUmNkRngwWkdGMFlUb2dlMzFjYmx4MFhIUmNkRngwZlNBcFhHNWNkRngwWEhSOVhHNWNibHgwWEhSY2RHWjFibU4wYVc5dUlHUW9JR1VnS1NCN1hHNWNkRngwWEhSY2RIWmhjaUJ1SUQwZ2RTZ2dkR2hwY3lBcExDQnlJRDBnYmlBbUppQnVMbWxrTENCcElEMGdZUzVoYzBsdWRDZ2daUzUzYVdSMGFDQXBMQ0J2SUQwZ1lTNWhjMGx1ZENnZ1pTNW9aV2xuYUhRZ0tUdGNibHgwWEhSY2RGeDBjaUFtSmlCMmIybGtJREFnSVQwOUlHa2dKaVlnZG05cFpDQXdJQ0U5UFNCdklDWW1JSFFvSUhJc0lHa3NJRzhnS1Z4dVhIUmNkRngwZlZ4dVhHNWNkRngwWEhRb2JtVjNJR2twTG1GMGRHRmphRkpsWTJWcGRtVnlLQ0J1WlhjZ2J5NVNaV05sYVhabGNpZ2djaXdnWENKMGQzUjBjaTVpZFhSMGIyNWNJaUFwSUNrdVltbHVaQ2dnWENKMGQzUjBjaTV3Y21sMllYUmxMblJ5YVdkblpYSmNJaXdnWXlBcExtSnBibVFvSUZ3aWRIZDBkSEl1Y0hKcGRtRjBaUzV5WlhOcGVtVkNkWFIwYjI1Y0lpd2daQ0FwTENBb2JtVjNJR2twTG1GMGRHRmphRkpsWTJWcGRtVnlLQ0J1WlhjZ2J5NVNaV05sYVhabGNpZ2djaXdnWENKMGQzUjBjaTVsYldKbFpGd2lJQ2tnS1M1aWFXNWtLQ0JjSW5SM2RIUnlMbkJ5YVhaaGRHVXVhVzVwZEdsaGJHbDZaV1JjSWl3Z1puVnVZM1JwYjI0b0lIUWdLU0I3WEc1Y2RGeDBYSFJjZEhaaGNpQmxJRDBnZFNnZ2RHaHBjeUFwTENCeUlEMGdaU0FtSmlCbExtbGtMQ0JwSUQwZ2RDNXBabkpoYldWZmRtVnljMmx2Ymp0Y2JseDBYSFJjZEZ4MGNpQW1KaUJwSUNZbUlHNGdKaVlnYmlnZ2Npd2dhU0FwWEc1Y2RGeDBYSFI5SUNrdVltbHVaQ2dnWENKMGQzUjBjaTV3Y21sMllYUmxMblJ5YVdkblpYSmNJaXdnWXlBcExtSnBibVFvSUZ3aWRIZDBkSEl1Y0hKcGRtRjBaUzV5Wlc1a1pYSmxaRndpTENCbWRXNWpkR2x2YmlncElIdGNibHgwWEhSY2RGeDBkbUZ5SUhRZ1BTQjFLQ0IwYUdseklDa3NJRzRnUFNCMElDWW1JSFF1YVdRN1hHNWNkRngwWEhSY2RHNGdKaVlnWlNBbUppQmxLQ0J1SUNsY2JseDBYSFJjZEgwZ0tTNWlhVzVrS0NCY0luUjNkSFJ5TG5CeWFYWmhkR1V1Y21WemFYcGxYQ0lzSUdRZ0tWeHVYSFJjZEgxY2JseDBmU3dnWm5WdVkzUnBiMjRvSUhRc0lHVXNJRzRnS1NCN1hHNWNkRngwZG1GeUlISWdQU0J1S0NBek15QXBMQ0JwSUQwZ2JpZ2dNVE13SUNrc0lHOGdQU0J1S0NBd0lDa3NJSE1nUFNCdUtDQTJJQ2tzSUdFZ1BTQnVLQ0F5TXlBcExDQjFJRDBnWENJeUxqQmNJanRjYmx4dVhIUmNkR1oxYm1OMGFXOXVJR01vSUhRZ0tTQjdYRzVjZEZ4MFhIUjBhR2x6TG5KbFoybHpkSEo1SUQwZ2RDQjhmQ0I3ZlZ4dVhIUmNkSDFjYmx4dVhIUmNkR1oxYm1OMGFXOXVJR1FvSUhRZ0tTQjdYRzVjZEZ4MFhIUjJZWElnWlN3Z2JqdGNibHgwWEhSY2RISmxkSFZ5YmlCbElEMGdieTVwYzFSNWNHVW9JRndpYzNSeWFXNW5YQ0lzSUhRZ0tTd2diaUE5SUc4dWFYTlVlWEJsS0NCY0ltNTFiV0psY2x3aUxDQjBJQ2tzSUdVZ2ZId2diaUI4ZkNCdWRXeHNJRDA5UFNCMFhHNWNkRngwZlZ4dVhHNWNkRngwWm5WdVkzUnBiMjRnWmlnZ2RDd2daU0FwSUh0Y2JseDBYSFJjZEhKbGRIVnliaUI3WEc1Y2RGeDBYSFJjZEdwemIyNXljR002SUhVc1hHNWNkRngwWEhSY2RHbGtPaUJrS0NCMElDa2dQeUIwSURvZ2JuVnNiQ3hjYmx4MFhIUmNkRngwWlhKeWIzSTZJR1ZjYmx4MFhIUmNkSDFjYmx4MFhIUjlYRzVjYmx4MFhIUmpMbkJ5YjNSdmRIbHdaUzVmYVc1MmIydGxJRDBnWm5WdVkzUnBiMjRvSUhRc0lHVWdLU0I3WEc1Y2RGeDBYSFIyWVhJZ2Jpd2djaXdnYVR0Y2JseDBYSFJjZEc0Z1BTQjBhR2x6TG5KbFoybHpkSEo1V3lCMExtMWxkR2h2WkNCZExDQnlJRDBnZEM1d1lYSmhiWE1nZkh3Z1cxMHNJSElnUFNCdkxtbHpWSGx3WlNnZ1hDSmhjbkpoZVZ3aUxDQnlJQ2tnUHlCeUlEb2dXM0pkTzF4dVhIUmNkRngwZEhKNUlIdGNibHgwWEhSY2RGeDBhU0E5SUc0dVlYQndiSGtvSUdVdWMyOTFjbU5sSUh4OElHNTFiR3dzSUhJZ0tWeHVYSFJjZEZ4MGZTQmpZWFJqYUNBb0lIUWdLU0I3WEc1Y2RGeDBYSFJjZEdrZ1BTQnpMbkpsYW1WamRDZ2dkQzV0WlhOellXZGxJQ2xjYmx4MFhIUmNkSDFjYmx4MFhIUmNkSEpsZEhWeWJpQmhMbWx6VUhKdmJXbHpaU2dnYVNBcElEOGdhU0E2SUhNdWNtVnpiMngyWlNnZ2FTQXBYRzVjZEZ4MGZTd2dZeTV3Y205MGIzUjVjR1V1WDNCeWIyTmxjM05TWlhGMVpYTjBJRDBnWm5WdVkzUnBiMjRvSUhRc0lHVWdLU0I3WEc1Y2RGeDBYSFIyWVhJZ2Jpd2djanRjYmx4MFhIUmNkSEpsZEhWeWJpQm1kVzVqZEdsdmJpZ2dkQ0FwSUh0Y2JseDBYSFJjZEZ4MGRtRnlJR1VzSUc0c0lISTdYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQWhJVzh1YVhOUFltcGxZM1FvSUhRZ0tTQW1KaUFvWlNBOUlIUXVhbk52Ym5Kd1l5QTlQVDBnZFN3Z2JpQTlJRzh1YVhOVWVYQmxLQ0JjSW5OMGNtbHVaMXdpTENCMExtMWxkR2h2WkNBcExDQnlJRDBnSVNoY0ltbGtYQ0lnYVc0Z2RDa2dmSHdnWkNnZ2RDNXBaQ0FwTENCbElDWW1JRzRnSmlZZ2NpbGNibHgwWEhSY2RIMG9JSFFnS1NBL0lDaHVJRDBnWENKd1lYSmhiWE5jSWlCcGJpQjBJQ1ltSUNoeUlEMGdkQzV3WVhKaGJYTXNJQ0Z2TG1selQySnFaV04wS0NCeUlDa2dmSHdnYnk1cGMxUjVjR1VvSUZ3aVpuVnVZM1JwYjI1Y0lpd2djaUFwS1NBL0lITXVjbVZ6YjJ4MlpTZ2daaWdnZEM1cFpDd2dhUzVKVGxaQlRFbEVYMUJCVWtGTlV5QXBJQ2tnT2lCMGFHbHpMbkpsWjJsemRISjVXeUIwTG0xbGRHaHZaQ0JkSUQ4Z2RHaHBjeTVmYVc1MmIydGxLQ0IwTENCN0lITnZkWEpqWlRvZ1pTQjlJQ2t1ZEdobGJpZ2dablZ1WTNScGIyNG9JR1VnS1NCN1hHNWNkRngwWEhSY2RISmxkSFZ5YmlCdUlEMGdkQzVwWkN3Z2UxeHVYSFJjZEZ4MFhIUmNkR3B6YjI1eWNHTTZJSFVzWEc1Y2RGeDBYSFJjZEZ4MGFXUTZJRzRzWEc1Y2RGeDBYSFJjZEZ4MGNtVnpkV3gwT2lCbFhHNWNkRngwWEhSY2RIMDdYRzVjZEZ4MFhIUmNkSFpoY2lCdVhHNWNkRngwWEhSOUxDQm1kVzVqZEdsdmJpZ3BJSHRjYmx4MFhIUmNkRngwY21WMGRYSnVJR1lvSUhRdWFXUXNJR2t1U1U1VVJWSk9RVXhmUlZKU1QxSWdLVnh1WEhSY2RGeDBmU0FwSURvZ2N5NXlaWE52YkhabEtDQm1LQ0IwTG1sa0xDQnBMazFGVkVoUFJGOU9UMVJmUms5VlRrUWdLU0FwTENCdWRXeHNJQ0U5SUhRdWFXUWdQeUJ1SURvZ2N5NXlaWE52YkhabEtDa3BJRG9nY3k1eVpYTnZiSFpsS0NCbUtDQjBMbWxrTENCcExrbE9Wa0ZNU1VSZlVrVlJWVVZUVkNBcElDbGNibHgwWEhSOUxDQmpMbkJ5YjNSdmRIbHdaUzVoZEhSaFkyaFNaV05sYVhabGNpQTlJR1oxYm1OMGFXOXVLQ0IwSUNrZ2UxeHVYSFJjZEZ4MGNtVjBkWEp1SUhRdVlYUjBZV05vVkc4b0lIUm9hWE1nS1N3Z2RHaHBjMXh1WEhSY2RIMHNJR011Y0hKdmRHOTBlWEJsTG1KcGJtUWdQU0JtZFc1amRHbHZiaWdnZEN3Z1pTQXBJSHRjYmx4MFhIUmNkSEpsZEhWeWJpQjBhR2x6TG5KbFoybHpkSEo1V3lCMElGMGdQU0JsTENCMGFHbHpYRzVjZEZ4MGZTd2dZeTV3Y205MGIzUjVjR1V1Y21WalpXbDJaU0E5SUdaMWJtTjBhVzl1S0NCMExDQmxJQ2tnZTF4dVhIUmNkRngwZG1GeUlHNHNJR0VzSUhVc0lHTWdQU0IwYUdsek8xeHVYSFJjZEZ4MGRISjVJSHRjYmx4MFhIUmNkRngwZFNBOUlIUXNJSFFnUFNCdkxtbHpWSGx3WlNnZ1hDSnpkSEpwYm1kY0lpd2dkU0FwSUQ4Z2NpNXdZWEp6WlNnZ2RTQXBJRG9nZFZ4dVhIUmNkRngwZlNCallYUmphQ0FvSUhRZ0tTQjdYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQnpMbkpsYzI5c2RtVW9JR1lvSUc1MWJHd3NJR2t1VUVGU1UwVmZSVkpTVDFJZ0tTQXBYRzVjZEZ4MFhIUjlYRzVjZEZ4MFhIUnlaWFIxY200Z1pTQTlJR1VnZkh3Z2JuVnNiQ3dnWVNBOUlDZ29iaUE5SUc4dWFYTlVlWEJsS0NCY0ltRnljbUY1WENJc0lIUWdLU2tnUHlCMElEb2dXM1JkS1M1dFlYQW9JR1oxYm1OMGFXOXVLQ0IwSUNrZ2UxeHVYSFJjZEZ4MFhIUnlaWFIxY200Z1l5NWZjSEp2WTJWemMxSmxjWFZsYzNRb0lIUXNJR1VnS1Z4dVhIUmNkRngwZlNBcExDQnVJRDhnWm5WdVkzUnBiMjRvSUhRZ0tTQjdYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQnpMbUZzYkNnZ2RDQXBMblJvWlc0b0lHWjFibU4wYVc5dUtDQjBJQ2tnZTF4dVhIUmNkRngwWEhSY2RISmxkSFZ5YmlBb2RDQTlJSFF1Wm1sc2RHVnlLQ0JtZFc1amRHbHZiaWdnZENBcElIdGNibHgwWEhSY2RGeDBYSFJjZEhKbGRIVnliaUIyYjJsa0lEQWdJVDA5SUhSY2JseDBYSFJjZEZ4MFhIUjlJQ2twTG14bGJtZDBhQ0EvSUhRZ09pQjJiMmxrSURCY2JseDBYSFJjZEZ4MGZTQXBYRzVjZEZ4MFhIUjlLQ0JoSUNrZ09pQmhXeUF3SUYxY2JseDBYSFI5TENCMExtVjRjRzl5ZEhNZ1BTQmpYRzVjZEgwc0lHWjFibU4wYVc5dUtDQjBJQ2tnZTF4dVhIUmNkSFF1Wlhod2IzSjBjeUE5SUh0Y2JseDBYSFJjZEZCQlVsTkZYMFZTVWs5U09pQjdYRzVjZEZ4MFhIUmNkR052WkdVNklDMGdNekkzTURBc1hHNWNkRngwWEhSY2RHMWxjM05oWjJVNklGd2lVR0Z5YzJVZ1pYSnliM0pjSWx4dVhIUmNkRngwZlN4Y2JseDBYSFJjZEVsT1ZrRk1TVVJmVWtWUlZVVlRWRG9nZTF4dVhIUmNkRngwWEhSamIyUmxPaUF0SURNeU5qQXdMRnh1WEhSY2RGeDBYSFJ0WlhOellXZGxPaUJjSWtsdWRtRnNhV1FnVW1WeGRXVnpkRndpWEc1Y2RGeDBYSFI5TEZ4dVhIUmNkRngwU1U1V1FVeEpSRjlRUVZKQlRWTTZJSHRjYmx4MFhIUmNkRngwWTI5a1pUb2dMU0F6TWpZd01peGNibHgwWEhSY2RGeDBiV1Z6YzJGblpUb2dYQ0pKYm5aaGJHbGtJSEJoY21GdGMxd2lYRzVjZEZ4MFhIUjlMRnh1WEhSY2RGeDBUVVZVU0U5RVgwNVBWRjlHVDFWT1JEb2dlMXh1WEhSY2RGeDBYSFJqYjJSbE9pQXRJRE15TmpBeExGeHVYSFJjZEZ4MFhIUnRaWE56WVdkbE9pQmNJazFsZEdodlpDQnViM1FnWm05MWJtUmNJbHh1WEhSY2RGeDBmU3hjYmx4MFhIUmNkRWxPVkVWU1RrRk1YMFZTVWs5U09pQjdYRzVjZEZ4MFhIUmNkR052WkdVNklDMGdNekkyTURNc1hHNWNkRngwWEhSY2RHMWxjM05oWjJVNklGd2lTVzUwWlhKdVlXd2daWEp5YjNKY0lseHVYSFJjZEZ4MGZWeHVYSFJjZEgxY2JseDBmU3dnWm5WdVkzUnBiMjRvSUhRc0lHVXNJRzRnS1NCN1hHNWNkRngwZG1GeUlISWdQU0J1S0NBNElDa3NJR2tnUFNCdUtDQXhJQ2tzSUc4Z1BTQnVLQ0F6TXlBcExDQnpJRDBnYmlnZ01pQXBMQ0JoSUQwZ2JpZ2dNaklnS1N3Z2RTQTlJRzRvSURBZ0tTd2dZeUE5SUc0b0lETWdLU3dnWkNBOUlHNG9JRGNnS1N4Y2JseDBYSFJjZEdZZ1BTQmhMbWxsT1NncE8xeHVYRzVjZEZ4MFpuVnVZM1JwYjI0Z2JDZ2dkQ3dnWlN3Z2JpQXBJSHRjYmx4MFhIUmNkSFpoY2lCeU8xeHVYSFJjZEZ4MGRDQW1KaUIwTG5CdmMzUk5aWE56WVdkbElDWW1JQ2htSUQ4Z2NpQTlJQ2h1SUh4OElGd2lYQ0lwSUNzZ2J5NXpkSEpwYm1kcFpua29JR1VnS1NBNklHNGdQeUFvY2lBOUlIdDlLVnNnYmlCZElEMGdaU0E2SUhJZ1BTQmxMQ0IwTG5CdmMzUk5aWE56WVdkbEtDQnlMQ0JjSWlwY0lpQXBLVnh1WEhSY2RIMWNibHh1WEhSY2RHWjFibU4wYVc5dUlHZ29JSFFnS1NCN1hHNWNkRngwWEhSeVpYUjFjbTRnZFM1cGMxUjVjR1VvSUZ3aWMzUnlhVzVuWENJc0lIUWdLU0EvSUhRZ09pQmNJa3BUVDA1U1VFTmNJbHh1WEhSY2RIMWNibHh1WEhSY2RHWjFibU4wYVc5dUlIQW9JSFFzSUdVZ0tTQjdYRzVjZEZ4MFhIUnlaWFIxY200Z1pTQS9JSFV1YVhOVWVYQmxLQ0JjSW5OMGNtbHVaMXdpTENCMElDa2dKaVlnTUNBOVBUMGdkQzVwYm1SbGVFOW1LQ0JsSUNrZ1B5QjBMbk4xWW5OMGNtbHVaeWdnWlM1c1pXNW5kR2dnS1NBNklIUWdKaVlnZEZzZ1pTQmRJRDhnZEZzZ1pTQmRJRG9nZG05cFpDQXdJRG9nZEZ4dVhIUmNkSDFjYmx4dVhIUmNkR1oxYm1OMGFXOXVJRzBvSUhRc0lHVWdLU0I3WEc1Y2RGeDBYSFIyWVhJZ2JpQTlJSFF1Wkc5amRXMWxiblE3WEc1Y2RGeDBYSFIwYUdsekxtWnBiSFJsY2lBOUlHZ29JR1VnS1N3Z2RHaHBjeTV6WlhKMlpYSWdQU0J1ZFd4c0xDQjBhR2x6TG1selZIZHBkSFJsY2taeVlXMWxJRDBnWXk1cGMxUjNhWFIwWlhKVlVrd29JRzR1Ykc5allYUnBiMjR1YUhKbFppQXBMQ0IwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSUZ3aWJXVnpjMkZuWlZ3aUxDQmtLQ0IwYUdsekxsOXZiazFsYzNOaFoyVXNJSFJvYVhNZ0tTd2dJVEVnS1Z4dVhIUmNkSDFjYmx4dVhIUmNkR1oxYm1OMGFXOXVJSFlvSUhRc0lHVWdLU0I3WEc1Y2RGeDBYSFIwYUdsekxuQmxibVJwYm1jZ1BTQjdmU3dnZEdocGN5NTBZWEpuWlhRZ1BTQjBMQ0IwYUdsekxtbHpWSGRwZEhSbGNraHZjM1FnUFNCakxtbHpWSGRwZEhSbGNsVlNUQ2dnY2k1b2NtVm1JQ2tzSUhSb2FYTXVabWxzZEdWeUlEMGdhQ2dnWlNBcExDQnBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9JRndpYldWemMyRm5aVndpTENCa0tDQjBhR2x6TGw5dmJrMWxjM05oWjJVc0lIUm9hWE1nS1N3Z0lURWdLVnh1WEhSY2RIMWNibHh1WEhSY2RIVXVZWFZuS0NCdExuQnliM1J2ZEhsd1pTd2dlMXh1WEhSY2RGeDBYMjl1VFdWemMyRm5aVG9nWm5WdVkzUnBiMjRvSUhRZ0tTQjdYRzVjZEZ4MFhIUmNkSFpoY2lCbExDQnVJRDBnZEdocGN6dGNibHgwWEhSY2RGeDBkR2hwY3k1elpYSjJaWElnSmlZZ0tIUm9hWE11YVhOVWQybDBkR1Z5Um5KaGJXVWdKaVlnSVdNdWFYTlVkMmwwZEdWeVZWSk1LQ0IwTG05eWFXZHBiaUFwSUh4OElDaGxJRDBnY0NnZ2RDNWtZWFJoTENCMGFHbHpMbVpwYkhSbGNpQXBLU0FtSmlCMGFHbHpMbk5sY25abGNpNXlaV05sYVhabEtDQmxMQ0IwTG5OdmRYSmpaU0FwTG5Sb1pXNG9JR1oxYm1OMGFXOXVLQ0JsSUNrZ2UxeHVYSFJjZEZ4MFhIUmNkR1VnSmlZZ2JDZ2dkQzV6YjNWeVkyVXNJR1VzSUc0dVptbHNkR1Z5SUNsY2JseDBYSFJjZEZ4MGZTQXBLVnh1WEhSY2RGeDBmU3hjYmx4MFhIUmNkR0YwZEdGamFGUnZPaUJtZFc1amRHbHZiaWdnZENBcElIdGNibHgwWEhSY2RGeDBkR2hwY3k1elpYSjJaWElnUFNCMFhHNWNkRngwWEhSOUxGeHVYSFJjZEZ4MFpHVjBZV05vT2lCbWRXNWpkR2x2YmlncElIdGNibHgwWEhSY2RGeDBkR2hwY3k1elpYSjJaWElnUFNCdWRXeHNYRzVjZEZ4MFhIUjlYRzVjZEZ4MGZTQXBMQ0IxTG1GMVp5Z2dkaTV3Y205MGIzUjVjR1VzSUh0Y2JseDBYSFJjZEY5d2NtOWpaWE56VW1WemNHOXVjMlU2SUdaMWJtTjBhVzl1S0NCMElDa2dlMXh1WEhSY2RGeDBYSFIyWVhJZ1pTQTlJSFJvYVhNdWNHVnVaR2x1WjFzZ2RDNXBaQ0JkTzF4dVhIUmNkRngwWEhSbElDWW1JQ2hsTG5KbGMyOXNkbVVvSUhRZ0tTd2daR1ZzWlhSbElIUm9hWE11Y0dWdVpHbHVaMXNnZEM1cFpDQmRLVnh1WEhSY2RGeDBmU3hjYmx4MFhIUmNkRjl2YmsxbGMzTmhaMlU2SUdaMWJtTjBhVzl1S0NCMElDa2dlMXh1WEhSY2RGeDBYSFIyWVhJZ1pUdGNibHgwWEhSY2RGeDBhV1lnS0NBb0lYUm9hWE11YVhOVWQybDBkR1Z5U0c5emRDQjhmQ0JqTG1selZIZHBkSFJsY2xWU1RDZ2dkQzV2Y21sbmFXNGdLU2tnSmlZZ0tHVWdQU0J3S0NCMExtUmhkR0VzSUhSb2FYTXVabWxzZEdWeUlDa3BJQ2tnZTF4dVhIUmNkRngwWEhSY2RHbG1JQ2dnZFM1cGMxUjVjR1VvSUZ3aWMzUnlhVzVuWENJc0lHVWdLU0FwSUh0Y2JseDBYSFJjZEZ4MFhIUmNkSFJ5ZVNCN1hHNWNkRngwWEhSY2RGeDBYSFJjZEdVZ1BTQnZMbkJoY25ObEtDQmxJQ2xjYmx4MFhIUmNkRngwWEhSY2RIMGdZMkYwWTJnZ0tDQjBJQ2tnZTF4dVhIUmNkRngwWEhSY2RGeDBYSFJ5WlhSMWNtNWNibHgwWEhSY2RGeDBYSFJjZEgxY2JseDBYSFJjZEZ4MFhIUjlYRzVjZEZ4MFhIUmNkRngwS0dVZ1BTQjFMbWx6Vkhsd1pTZ2dYQ0poY25KaGVWd2lMQ0JsSUNrZ1B5QmxJRG9nVzJWZEtTNW1iM0pGWVdOb0tDQmtLQ0IwYUdsekxsOXdjbTlqWlhOelVtVnpjRzl1YzJVc0lIUm9hWE1nS1NBcFhHNWNkRngwWEhSY2RIMWNibHgwWEhSY2RIMHNYRzVjZEZ4MFhIUnpaVzVrT2lCbWRXNWpkR2x2YmlnZ2RDQXBJSHRjYmx4MFhIUmNkRngwZG1GeUlHVWdQU0J1WlhjZ2N6dGNibHgwWEhSY2RGeDBjbVYwZFhKdUlIUXVhV1FnUHlCMGFHbHpMbkJsYm1ScGJtZGJJSFF1YVdRZ1hTQTlJR1VnT2lCbExuSmxjMjlzZG1Vb0tTd2diQ2dnZEdocGN5NTBZWEpuWlhRc0lIUXNJSFJvYVhNdVptbHNkR1Z5SUNrc0lHVXVjSEp2YldselpWeHVYSFJjZEZ4MGZWeHVYSFJjZEgwZ0tTd2dkQzVsZUhCdmNuUnpJRDBnZTF4dVhIUmNkRngwVW1WalpXbDJaWEk2SUcwc1hHNWNkRngwWEhSRWFYTndZWFJqYUdWeU9pQjJMRnh1WEhSY2RGeDBYM04wY21sdVoybG1lVkJoZVd4dllXUTZJR1oxYm1OMGFXOXVLQ0IwSUNrZ2UxeHVYSFJjZEZ4MFhIUnlaWFIxY200Z1lYSm5kVzFsYm5SekxteGxibWQwYUNBK0lEQWdKaVlnS0dZZ1BTQWhJWFFwTENCbVhHNWNkRngwWEhSOVhHNWNkRngwZlZ4dVhIUjlMQ0JtZFc1amRHbHZiaWdnZEN3Z1pTd2diaUFwSUh0Y2JseDBYSFIyWVhJZ2NpQTlJRzRvSURRZ0tUdGNibHgwWEhSMExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpZ2dkQ0FwSUh0Y2JseDBYSFJjZEdadmNpQW9JSFpoY2lCbExDQnVJRDBnY2k1blpYUkZiR1Z0Wlc1MGMwSjVWR0ZuVG1GdFpTZ2dYQ0pwWm5KaGJXVmNJaUFwTENCcElEMGdNRHNnYmxzZ2FTQmRPeUJwSUNzcklDa2dlMXh1WEhSY2RGeDBYSFJwWmlBb0lDaGxJRDBnYmxzZ2FTQmRLUzVqYjI1MFpXNTBWMmx1Wkc5M0lEMDlQU0IwSUNrZ2UxeHVYSFJjZEZ4MFhIUmNkSEpsZEhWeWJpQmxYRzVjZEZ4MFhIUmNkSDFjYmx4MFhIUmNkSDFjYmx4MFhIUjlYRzVjZEgwc0lHWjFibU4wYVc5dUtDQjBMQ0JsTENCdUlDa2dlMXh1WEhSY2RIWmhjaUJ5SUQwZ2JpZ2dOU0FwTENCcElEMGdiaWdnTUNBcExDQnZJRDBnYmlnZ015QXBMQ0J6SUQwZ2JpZ2dNVE1nS1N3Z1lTQTlJRzRvSURFMElDa29LU3dnZFNBOUlHNG9JRFl6SUNrc0lHTWdQU0JjSW1FdWRIZHBkSFJsY2kxdGIyMWxiblJjSWp0Y2JseDBYSFIwTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlnZ2RDQXBJSHRjYmx4MFhIUmNkSEpsZEhWeWJpQmhLQ0IwTENCaklDa3ViV0Z3S0NCbWRXNWpkR2x2YmlnZ2RDQXBJSHRjYmx4MFhIUmNkRngwY21WMGRYSnVJSFVvSUdaMWJtTjBhVzl1S0NCMElDa2dlMXh1WEhSY2RGeDBYSFJjZEhaaGNpQmxJRDBnY3lnZ2RDQXBMQ0J1SUQwZ2UxeHVYSFJjZEZ4MFhIUmNkRngwYlc5dFpXNTBTV1E2SUc4dWJXOXRaVzUwU1dRb0lIUXVhSEpsWmlBcExGeHVYSFJjZEZ4MFhIUmNkRngwWTJoeWIyMWxPaUIwTG1kbGRFRjBkSEpwWW5WMFpTZ2dYQ0prWVhSaExXTm9jbTl0WlZ3aUlDa3NYRzVjZEZ4MFhIUmNkRngwWEhSc2FXMXBkRG9nZEM1blpYUkJkSFJ5YVdKMWRHVW9JRndpWkdGMFlTMXNhVzFwZEZ3aUlDbGNibHgwWEhSY2RGeDBYSFI5TzF4dVhIUmNkRngwWEhSY2RISmxkSFZ5YmlCcExtWnZja2x1S0NCdUxDQm1kVzVqZEdsdmJpZ2dkQ3dnYmlBcElIdGNibHgwWEhSY2RGeDBYSFJjZEhaaGNpQnBJRDBnWlZzZ2RDQmRPMXh1WEhSY2RGeDBYSFJjZEZ4MFpWc2dkQ0JkSUQwZ2NpNW9ZWE5XWVd4MVpTZ2dhU0FwSUQ4Z2FTQTZJRzVjYmx4MFhIUmNkRngwWEhSOUlDa3NJR1ZjYmx4MFhIUmNkRngwZlNnZ2RDQXBMQ0IwTG5CaGNtVnVkRTV2WkdVc0lIUWdLVnh1WEhSY2RGeDBmU0FwWEc1Y2RGeDBmVnh1WEhSOUxDQm1kVzVqZEdsdmJpZ2dkQ3dnWlN3Z2JpQXBJSHRjYmx4MFhIUjJZWElnY2lBOUlHNG9JRElnS1R0Y2JseDBYSFIwTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlnZ2RDd2daU0FwSUh0Y2JseDBYSFJjZEhaaGNpQnBJRDBnYm1WM0lISTdYRzVjZEZ4MFhIUnlaWFIxY200Z1VISnZiV2x6WlM1aGJHd29JRnR1TG1Vb0lEQWdLU3dnYmk1bEtDQTBJQ2xkSUNrdWRHaGxiaWdnWm5WdVkzUnBiMjRvSUhJZ0tTQjdYRzVjZEZ4MFhIUmNkSFpoY2lCdk8xeHVYSFJjZEZ4MFhIUjBjbmtnZTF4dVhIUmNkRngwWEhSY2RHOGdQU0J1S0NBNU1DQXBMQ0JwTG5KbGMyOXNkbVVvSUc1bGR5QnZLQ0IwTENCbElDa2dLVnh1WEhSY2RGeDBYSFI5SUdOaGRHTm9JQ2dnZENBcElIdGNibHgwWEhSY2RGeDBYSFJwTG5KbGFtVmpkQ2dnZENBcFhHNWNkRngwWEhSY2RIMWNibHgwWEhSY2RIMHVZbWx1WkNnZ2JuVnNiQ3dnYmlBcElDa3VZMkYwWTJnb0lHWjFibU4wYVc5dUtDQjBJQ2tnZTF4dVhIUmNkRngwWEhScExuSmxhbVZqZENnZ2RDQXBYRzVjZEZ4MFhIUjlJQ2tzSUdrdWNISnZiV2x6WlZ4dVhIUmNkSDFjYmx4MGZTd2dablZ1WTNScGIyNG9JSFFzSUdVc0lHNGdLU0I3WEc1Y2RGeDBkbUZ5SUhJZ1BTQnVLQ0F3SUNrc0lHa2dQU0J1S0NBeE15QXBMQ0J2SUQwZ2JpZ2dNVFFnS1NncExDQnpJRDBnYmlnZ05qUWdLU3dnWVNBOUlGd2lZUzV3WlhKcGMyTnZjR1V0YjI0dFlXbHlYQ0lzWEc1Y2RGeDBYSFIxSUQwZ0wxNW9kSFJ3Y3o4NlhGd3ZYRnd2S0Q4NmQzZDNYRnd1S1Q4b1B6cHdaWEpwYzJOdmNHVjhjSE5qY0NsY1hDNTBkbHhjTDBBL0tGdGhMWHBCTFZvd0xUbGZYU3NwWEZ3dlB5UXZhVHRjYmx4MFhIUjBMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWdnZENBcElIdGNibHgwWEhSY2RISmxkSFZ5YmlCdktDQjBMQ0JoSUNrdWJXRndLQ0JtZFc1amRHbHZiaWdnZENBcElIdGNibHgwWEhSY2RGeDBjbVYwZFhKdUlITW9JR1oxYm1OMGFXOXVLQ0IwSUNrZ2UxeHVYSFJjZEZ4MFhIUmNkSFpoY2lCbElEMGdhU2dnZENBcExDQnVJRDBnZEM1blpYUkJkSFJ5YVdKMWRHVW9JRndpYUhKbFpsd2lJQ2tzSUc4Z1BTQjBMbWRsZEVGMGRISnBZblYwWlNnZ1hDSmtZWFJoTFhOcGVtVmNJaUFwTEZ4dVhIUmNkRngwWEhSY2RGeDBjeUE5SUhVdVpYaGxZeWdnYmlBcFd5QXhJRjA3WEc1Y2RGeDBYSFJjZEZ4MGNtVjBkWEp1SUhJdVlYVm5LQ0JsTENCN1hHNWNkRngwWEhSY2RGeDBYSFIxYzJWeWJtRnRaVG9nY3l4Y2JseDBYSFJjZEZ4MFhIUmNkSE5wZW1VNklHOWNibHgwWEhSY2RGeDBYSFI5SUNsY2JseDBYSFJjZEZ4MGZTZ2dkQ0FwTENCMExuQmhjbVZ1ZEU1dlpHVXNJSFFnS1Z4dVhIUmNkRngwZlNBcFhHNWNkRngwZlZ4dVhIUjlMQ0JtZFc1amRHbHZiaWdnZEN3Z1pTd2diaUFwSUh0Y2JseDBYSFIyWVhJZ2NpQTlJRzRvSURJZ0tUdGNibHgwWEhSMExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpZ2dkQ3dnWlNBcElIdGNibHgwWEhSY2RIWmhjaUJwSUQwZ2JtVjNJSEk3WEc1Y2RGeDBYSFJ5WlhSMWNtNGdiaTVsS0NBMUlDa3VkR2hsYmlnZ1puVnVZM1JwYjI0b0lISWdLU0I3WEc1Y2RGeDBYSFJjZEhaaGNpQnZPMXh1WEhSY2RGeDBYSFIwY25rZ2UxeHVYSFJjZEZ4MFhIUmNkRzhnUFNCdUtDQTVNU0FwTENCcExuSmxjMjlzZG1Vb0lHNWxkeUJ2S0NCMExDQmxJQ2tnS1Z4dVhIUmNkRngwWEhSOUlHTmhkR05vSUNnZ2RDQXBJSHRjYmx4MFhIUmNkRngwWEhScExuSmxhbVZqZENnZ2RDQXBYRzVjZEZ4MFhIUmNkSDFjYmx4MFhIUmNkSDB1WW1sdVpDZ2diblZzYkN3Z2JpQXBJQ2t1WTJGMFkyZ29JR1oxYm1OMGFXOXVLQ0IwSUNrZ2UxeHVYSFJjZEZ4MFhIUnBMbkpsYW1WamRDZ2dkQ0FwWEc1Y2RGeDBYSFI5SUNrc0lHa3VjSEp2YldselpWeHVYSFJjZEgxY2JseDBmU3dnWm5WdVkzUnBiMjRvSUhRc0lHVXNJRzRnS1NCN1hHNWNkRngwZG1GeUlISWdQU0J1S0NBMUlDa3NJR2tnUFNCdUtDQXdJQ2tzSUc4Z1BTQnVLQ0EyTlNBcExDQnpJRDBnYmlnZ01UTWdLU3dnWVNBOUlHNG9JREUwSUNrb0tTd2dkU0E5SUc0b0lEWTJJQ2tzSUdNZ1BTQnVLQ0F6SUNrc0lHUWdQU0J1S0NBeE1pQXBMRnh1WEhSY2RGeDBaaUE5SUZ3aVlTNTBkMmwwZEdWeUxYUnBiV1ZzYVc1bExHUnBkaTUwZDJsMGRHVnlMWFJwYldWc2FXNWxMR0V1ZEhkcGRIUmxjaTFuY21sa1hDSXNYRzVjZEZ4MFhIUnNJRDBnWENKRmJXSmxaR1JsWkNCVFpXRnlZMmdnZEdsdFpXeHBibVZ6SUdoaGRtVWdZbVZsYmlCa1pYQnlaV05oZEdWa0xpQlRaV1VnYUhSMGNITTZMeTkwZDJsMGRHVnlZMjl0YlhWdWFYUjVMbU52YlM5MEwyUmxjSEpsWTJGMGFXNW5MWGRwWkdkbGRDMXpaWFIwYVc1bmN5OHhNREl5T1RVdVhDSXNYRzVjZEZ4MFhIUm9JRDBnWENKWmIzVWdiV0Y1SUdoaGRtVWdZbVZsYmlCaFptWmxZM1JsWkNCaWVTQmhiaUIxY0dSaGRHVWdkRzhnYzJWMGRHbHVaM01nYVc0Z1pXMWlaV1JrWldRZ2RHbHRaV3hwYm1WekxpQlRaV1VnYUhSMGNITTZMeTkwZDJsMGRHVnlZMjl0YlhWdWFYUjVMbU52YlM5MEwyUmxjSEpsWTJGMGFXNW5MWGRwWkdkbGRDMXpaWFIwYVc1bmN5OHhNREl5T1RVdVhDSXNYRzVjZEZ4MFhIUndJRDBnWENKRmJXSmxaR1JsWkNCbmNtbGtjeUJvWVhabElHSmxaVzRnWkdWd2NtVmpZWFJsWkNCaGJtUWdkMmxzYkNCdWIzY2djbVZ1WkdWeUlHRnpJSFJwYldWc2FXNWxjeTRnVUd4bFlYTmxJSFZ3WkdGMFpTQjViM1Z5SUdWdFltVmtJR052WkdVZ2RHOGdkWE5sSUhSb1pTQjBkMmwwZEdWeUxYUnBiV1ZzYVc1bElHTnNZWE56TGlCTmIzSmxJR2x1Wm04NklHaDBkSEJ6T2k4dmRIZHBkSFJsY21OdmJXMTFibWwwZVM1amIyMHZkQzkxY0dSaGRHVXRiMjR0ZEdobExXVnRZbVZrWkdWa0xXZHlhV1F0WkdsemNHeGhlUzEwZVhCbEx6RXhPVFUyTkM1Y0lqdGNibHgwWEhSMExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpZ2dkQ0FwSUh0Y2JseDBYSFJjZEhKbGRIVnliaUJoS0NCMExDQm1JQ2t1YldGd0tDQm1kVzVqZEdsdmJpZ2dkQ0FwSUh0Y2JseDBYSFJjZEZ4MGNtVjBkWEp1SUhVb0lHWjFibU4wYVc5dUtDQjBJQ2tnZTF4dVhIUmNkRngwWEhSY2RIWmhjaUJsSUQwZ2N5Z2dkQ0FwTENCdUlEMGdkQzVuWlhSQmRIUnlhV0oxZEdVb0lGd2laR0YwWVMxemFHOTNMWEpsY0d4cFpYTmNJaUFwTENCaElEMGdlMXh1WEhSY2RGeDBYSFJjZEZ4MGFYTlFjbVZqYjI1bWFXZDFjbVZrT2lBaElYUXVaMlYwUVhSMGNtbGlkWFJsS0NCY0ltUmhkR0V0ZDJsa1oyVjBMV2xrWENJZ0tTeGNibHgwWEhSY2RGeDBYSFJjZEdOb2NtOXRaVG9nZEM1blpYUkJkSFJ5YVdKMWRHVW9JRndpWkdGMFlTMWphSEp2YldWY0lpQXBMRnh1WEhSY2RGeDBYSFJjZEZ4MGRIZGxaWFJNYVcxcGREb2dkQzVuWlhSQmRIUnlhV0oxZEdVb0lGd2laR0YwWVMxMGQyVmxkQzFzYVcxcGRGd2lJQ2tnZkh3Z2RDNW5aWFJCZEhSeWFXSjFkR1VvSUZ3aVpHRjBZUzFzYVcxcGRGd2lJQ2tzWEc1Y2RGeDBYSFJjZEZ4MFhIUmhjbWxoVEdsMlpUb2dkQzVuWlhSQmRIUnlhV0oxZEdVb0lGd2laR0YwWVMxaGNtbGhMWEJ2YkdsMFpWd2lJQ2tzWEc1Y2RGeDBYSFJjZEZ4MFhIUjBhR1Z0WlRvZ2RDNW5aWFJCZEhSeWFXSjFkR1VvSUZ3aVpHRjBZUzEwYUdWdFpWd2lJQ2tzWEc1Y2RGeDBYSFJjZEZ4MFhIUmliM0prWlhKRGIyeHZjam9nZEM1blpYUkJkSFJ5YVdKMWRHVW9JRndpWkdGMFlTMWliM0prWlhJdFkyOXNiM0pjSWlBcExGeHVYSFJjZEZ4MFhIUmNkRngwYzJodmQxSmxjR3hwWlhNNklHNGdQeUJ5TG1GelFtOXZiR1ZoYmlnZ2JpQXBJRG9nYm5Wc2JDeGNibHgwWEhSY2RGeDBYSFJjZEhCeWIyWnBiR1ZUWTNKbFpXNU9ZVzFsT2lCMExtZGxkRUYwZEhKcFluVjBaU2dnWENKa1lYUmhMWE5qY21WbGJpMXVZVzFsWENJZ0tTeGNibHgwWEhSY2RGeDBYSFJjZEhCeWIyWnBiR1ZWYzJWeVNXUTZJSFF1WjJWMFFYUjBjbWxpZFhSbEtDQmNJbVJoZEdFdGRYTmxjaTFwWkZ3aUlDa3NYRzVjZEZ4MFhIUmNkRngwWEhSbVlYWnZjbWwwWlhOVFkzSmxaVzVPWVcxbE9pQjBMbWRsZEVGMGRISnBZblYwWlNnZ1hDSmtZWFJoTFdaaGRtOXlhWFJsY3kxelkzSmxaVzR0Ym1GdFpWd2lJQ2tzWEc1Y2RGeDBYSFJjZEZ4MFhIUm1ZWFp2Y21sMFpYTlZjMlZ5U1dRNklIUXVaMlYwUVhSMGNtbGlkWFJsS0NCY0ltUmhkR0V0Wm1GMmIzSnBkR1Z6TFhWelpYSXRhV1JjSWlBcExGeHVYSFJjZEZ4MFhIUmNkRngwYkdsclpYTlRZM0psWlc1T1lXMWxPaUIwTG1kbGRFRjBkSEpwWW5WMFpTZ2dYQ0prWVhSaExXeHBhMlZ6TFhOamNtVmxiaTF1WVcxbFhDSWdLU3hjYmx4MFhIUmNkRngwWEhSY2RHeHBhMlZ6VlhObGNrbGtPaUIwTG1kbGRFRjBkSEpwWW5WMFpTZ2dYQ0prWVhSaExXeHBhMlZ6TFhWelpYSXRhV1JjSWlBcExGeHVYSFJjZEZ4MFhIUmNkRngwYkdsemRFOTNibVZ5VTJOeVpXVnVUbUZ0WlRvZ2RDNW5aWFJCZEhSeWFXSjFkR1VvSUZ3aVpHRjBZUzFzYVhOMExXOTNibVZ5TFhOamNtVmxiaTF1WVcxbFhDSWdLU3hjYmx4MFhIUmNkRngwWEhSY2RHeHBjM1JQZDI1bGNsVnpaWEpKWkRvZ2RDNW5aWFJCZEhSeWFXSjFkR1VvSUZ3aVpHRjBZUzFzYVhOMExXOTNibVZ5TFdsa1hDSWdLU3hjYmx4MFhIUmNkRngwWEhSY2RHeHBjM1JKWkRvZ2RDNW5aWFJCZEhSeWFXSjFkR1VvSUZ3aVpHRjBZUzFzYVhOMExXbGtYQ0lnS1N4Y2JseDBYSFJjZEZ4MFhIUmNkR3hwYzNSVGJIVm5PaUIwTG1kbGRFRjBkSEpwWW5WMFpTZ2dYQ0prWVhSaExXeHBjM1F0YzJ4MVoxd2lJQ2tzWEc1Y2RGeDBYSFJjZEZ4MFhIUmpkWE4wYjIxVWFXMWxiR2x1WlVsa09pQjBMbWRsZEVGMGRISnBZblYwWlNnZ1hDSmtZWFJoTFdOMWMzUnZiUzEwYVcxbGJHbHVaUzFwWkZ3aUlDa3NYRzVjZEZ4MFhIUmNkRngwWEhSemRHRjBhV05EYjI1MFpXNTBPaUIwTG1kbGRFRjBkSEpwWW5WMFpTZ2dYQ0prWVhSaExYTjBZWFJwWXkxamIyNTBaVzUwWENJZ0tTeGNibHgwWEhSY2RGeDBYSFJjZEhWeWJEb2dkQzVvY21WbVhHNWNkRngwWEhSY2RGeDBmVHRjYmx4MFhIUmNkRngwWEhSeVpYUjFjbTRnWVM1cGMxQnlaV052Ym1acFozVnlaV1FnSmlZZ0tHTXVhWE5UWldGeVkyaFZjbXdvSUdFdWRYSnNJQ2tnUHlCa0xuQjFZbXhwWTBWeWNtOXlLQ0JzTENCMElDa2dPaUJrTG5CMVlteHBZMHh2WnlnZ2FDd2dkQ0FwS1N3Z1hDSjBkMmwwZEdWeUxXZHlhV1JjSWlBOVBUMGdkQzVqYkdGemMwNWhiV1VnSmlZZ1pDNXdkV0pzYVdOTWIyY29JSEFzSUhRZ0tTd2dLR0VnUFNCcExtRjFaeWdnWVN3Z1pTQXBLUzVrWVhSaFUyOTFjbU5sSUQwZ2J5Z2dZU0FwTENCaExtbGtJRDBnWVM1a1lYUmhVMjkxY21ObElDWW1JR0V1WkdGMFlWTnZkWEpqWlM1cFpDd2dZVnh1WEhSY2RGeDBYSFI5S0NCMElDa3NJSFF1Y0dGeVpXNTBUbTlrWlN3Z2RDQXBYRzVjZEZ4MFhIUjlJQ2xjYmx4MFhIUjlYRzVjZEgwc0lHWjFibU4wYVc5dUtDQjBMQ0JsTENCdUlDa2dlMXh1WEhSY2RIWmhjaUJ5SUQwZ2JpZ2dNamdnS1R0Y2JseDBYSFIwTG1WNGNHOXlkSE1nUFNCeUxtSjFhV3hrS0NCYmJpZ2dNamtnS1N3Z2JpZ2dNVFF4SUNsZElDbGNibHgwZlN3Z1puVnVZM1JwYjI0b0lIUXNJR1VzSUc0Z0tTQjdYRzVjZEZ4MGRtRnlJSElnUFNCdUtDQXdJQ2tzSUdrZ1BTQnVLQ0F4TkRBZ0tUdGNibHgwWEhSMExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpZ2dkQ0FwSUh0Y2JseDBYSFJjZEhKbGRIVnliaUJjSW1WdVhDSWdQVDA5SUhRZ2ZId2djaTVqYjI1MFlXbHVjeWdnYVN3Z2RDQXBYRzVjZEZ4MGZWeHVYSFI5TENCbWRXNWpkR2x2YmlnZ2RDd2daU0FwSUh0Y2JseDBYSFIwTG1WNGNHOXlkSE1nUFNCYlhHNWNkRngwWEhSY0ltaHBYQ0lzWEc1Y2RGeDBYSFJjSW5wb0xXTnVYQ0lzWEc1Y2RGeDBYSFJjSW1aeVhDSXNYRzVjZEZ4MFhIUmNJbnBvTFhSM1hDSXNYRzVjZEZ4MFhIUmNJbTF6WVZ3aUxGeHVYSFJjZEZ4MFhDSm1hV3hjSWl4Y2JseDBYSFJjZEZ3aVptbGNJaXhjYmx4MFhIUmNkRndpYzNaY0lpeGNibHgwWEhSY2RGd2ljR3hjSWl4Y2JseDBYSFJjZEZ3aWFtRmNJaXhjYmx4MFhIUmNkRndpYTI5Y0lpeGNibHgwWEhSY2RGd2laR1ZjSWl4Y2JseDBYSFJjZEZ3aWFYUmNJaXhjYmx4MFhIUmNkRndpY0hSY0lpeGNibHgwWEhSY2RGd2laWE5jSWl4Y2JseDBYSFJjZEZ3aWNuVmNJaXhjYmx4MFhIUmNkRndpYVdSY0lpeGNibHgwWEhSY2RGd2lkSEpjSWl4Y2JseDBYSFJjZEZ3aVpHRmNJaXhjYmx4MFhIUmNkRndpYm05Y0lpeGNibHgwWEhSY2RGd2libXhjSWl4Y2JseDBYSFJjZEZ3aWFIVmNJaXhjYmx4MFhIUmNkRndpWm1GY0lpeGNibHgwWEhSY2RGd2lZWEpjSWl4Y2JseDBYSFJjZEZ3aWRYSmNJaXhjYmx4MFhIUmNkRndpYUdWY0lpeGNibHgwWEhSY2RGd2lkR2hjSWl4Y2JseDBYSFJjZEZ3aVkzTmNJaXhjYmx4MFhIUmNkRndpZFd0Y0lpeGNibHgwWEhSY2RGd2lkbWxjSWl4Y2JseDBYSFJjZEZ3aWNtOWNJaXhjYmx4MFhIUmNkRndpWW01Y0lpeGNibHgwWEhSY2RGd2laV3hjSWl4Y2JseDBYSFJjZEZ3aVpXNHRaMkpjSWl4Y2JseDBYSFJjZEZ3aVozVmNJaXhjYmx4MFhIUmNkRndpYTI1Y0lpeGNibHgwWEhSY2RGd2liWEpjSWl4Y2JseDBYSFJjZEZ3aWRHRmNJaXhjYmx4MFhIUmNkRndpWW1kY0lpeGNibHgwWEhSY2RGd2lZMkZjSWl4Y2JseDBYSFJjZEZ3aWFISmNJaXhjYmx4MFhIUmNkRndpYzNKY0lpeGNibHgwWEhSY2RGd2ljMnRjSWx4dVhIUmNkRjFjYmx4MGZTd2dablZ1WTNScGIyNG9JSFFzSUdVc0lHNGdLU0I3WEc1Y2RGeDBkbUZ5SUhJZ1BTQnVLQ0F6SUNrc0lHa2dQU0J1S0NBd0lDa3NJRzhnUFNCdUtDQXhPU0FwTENCeklEMGdYQ0pqYjJ4c1pXTjBhVzl1T2x3aU8xeHVYRzVjZEZ4MFpuVnVZM1JwYjI0Z1lTZ2dkQ3dnWlNBcElIdGNibHgwWEhSY2RISmxkSFZ5YmlCeUxtTnZiR3hsWTNScGIyNUpaQ2dnZENBcElIeDhJR1ZjYmx4MFhIUjlYRzVjYmx4MFhIUjBMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWdnZENBcElIdGNibHgwWEhSY2RIUXVjR0Z5WVcxektDQjdYRzVjZEZ4MFhIUmNkR2xrT2lCN2ZTeGNibHgwWEhSY2RGeDBkWEpzT2lCN2ZWeHVYSFJjZEZ4MGZTQXBMQ0IwTG05MlpYSnlhV1JsVUhKdmNHVnlkSGtvSUZ3aWFXUmNJaXdnZTF4dVhIUmNkRngwWEhSblpYUTZJR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWEhSY2RIWmhjaUIwSUQwZ1lTZ2dkR2hwY3k1d1lYSmhiWE11ZFhKc0xDQjBhR2x6TG5CaGNtRnRjeTVwWkNBcE8xeHVYSFJjZEZ4MFhIUmNkSEpsZEhWeWJpQnpJQ3NnZEZ4dVhIUmNkRngwWEhSOVhHNWNkRngwWEhSOUlDa3NJSFF1YjNabGNuSnBaR1ZRY205d1pYSjBlU2dnWENKbGJtUndiMmx1ZEZ3aUxDQjdYRzVjZEZ4MFhIUmNkR2RsZERvZ1puVnVZM1JwYjI0b0tTQjdYRzVjZEZ4MFhIUmNkRngwY21WMGRYSnVJRzh1ZEdsdFpXeHBibVVvSUZ0Y0ltTnZiR3hsWTNScGIyNWNJbDBnS1Z4dVhIUmNkRngwWEhSOVhHNWNkRngwWEhSOUlDa3NJSFF1WVhKdmRXNWtLQ0JjSW5GMVpYSjVVR0Z5WVcxelhDSXNJR1oxYm1OMGFXOXVLQ0IwSUNrZ2UxeHVYSFJjZEZ4MFhIUnlaWFIxY200Z2FTNWhkV2NvSUhRb0tTd2dleUJqYjJ4c1pXTjBhVzl1WDJsa09pQmhLQ0IwYUdsekxuQmhjbUZ0Y3k1MWNtd3NJSFJvYVhNdWNHRnlZVzF6TG1sa0lDa2dmU0FwWEc1Y2RGeDBYSFI5SUNrc0lIUXVZbVZtYjNKbEtDQmNJbWx1YVhScFlXeHBlbVZjSWl3Z1puVnVZM1JwYjI0b0tTQjdYRzVjZEZ4MFhIUmNkR2xtSUNnZ0lXRW9JSFJvYVhNdWNHRnlZVzF6TG5WeWJDd2dkR2hwY3k1d1lYSmhiWE11YVdRZ0tTQXBJSHRjYmx4MFhIUmNkRngwWEhSMGFISnZkeUJ1WlhjZ1JYSnliM0lvSUZ3aWIyNWxJRzltSUhWeWJDQnZjaUJwWkNCcGN5QnlaWEYxYVhKbFpGd2lJQ2xjYmx4MFhIUmNkRngwZlZ4dVhIUmNkRngwZlNBcFhHNWNkRngwZlZ4dVhIUjlMQ0JtZFc1amRHbHZiaWdnZEN3Z1pTd2diaUFwSUh0Y2JseDBYSFIyWVhJZ2NpQTlJRzRvSURJNElDazdYRzVjZEZ4MGRDNWxlSEJ2Y25SeklEMGdjaTVpZFdsc1pDZ2dXMjRvSURJNUlDa3NJRzRvSURFME15QXBYU0FwWEc1Y2RIMHNJR1oxYm1OMGFXOXVLQ0IwTENCbExDQnVJQ2tnZTF4dVhIUmNkSFpoY2lCeUlEMGdiaWdnTXlBcExDQnBJRDBnYmlnZ01DQXBMQ0J2SUQwZ2JpZ2dNVGtnS1N3Z2N5QTlJRndpWlhabGJuUTZYQ0k3WEc1Y2JseDBYSFJtZFc1amRHbHZiaUJoS0NCMExDQmxJQ2tnZTF4dVhIUmNkRngwY21WMGRYSnVJSEl1WlhabGJuUkpaQ2dnZENBcElIeDhJR1ZjYmx4MFhIUjlYRzVjYmx4MFhIUjBMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWdnZENBcElIdGNibHgwWEhSY2RIUXVjR0Z5WVcxektDQjdYRzVjZEZ4MFhIUmNkR2xrT2lCN2ZTeGNibHgwWEhSY2RGeDBkWEpzT2lCN2ZWeHVYSFJjZEZ4MGZTQXBMQ0IwTG05MlpYSnlhV1JsVUhKdmNHVnlkSGtvSUZ3aWFXUmNJaXdnZTF4dVhIUmNkRngwWEhSblpYUTZJR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWEhSY2RIWmhjaUIwSUQwZ1lTZ2dkR2hwY3k1d1lYSmhiWE11ZFhKc0xDQjBhR2x6TG5CaGNtRnRjeTVwWkNBcE8xeHVYSFJjZEZ4MFhIUmNkSEpsZEhWeWJpQnpJQ3NnZEZ4dVhIUmNkRngwWEhSOVhHNWNkRngwWEhSOUlDa3NJSFF1YjNabGNuSnBaR1ZRY205d1pYSjBlU2dnWENKbGJtUndiMmx1ZEZ3aUxDQjdYRzVjZEZ4MFhIUmNkR2RsZERvZ1puVnVZM1JwYjI0b0tTQjdYRzVjZEZ4MFhIUmNkRngwY21WMGRYSnVJRzh1ZEdsdFpXeHBibVVvSUZ0Y0ltVjJaVzUwWENKZElDbGNibHgwWEhSY2RGeDBmVnh1WEhSY2RGeDBmU0FwTENCMExtRnliM1Z1WkNnZ1hDSnhkV1Z5ZVZCaGNtRnRjMXdpTENCbWRXNWpkR2x2YmlnZ2RDQXBJSHRjYmx4MFhIUmNkRngwY21WMGRYSnVJR2t1WVhWbktDQjBLQ2tzSUhzZ1pYWmxiblJmYVdRNklHRW9JSFJvYVhNdWNHRnlZVzF6TG5WeWJDd2dkR2hwY3k1d1lYSmhiWE11YVdRZ0tTQjlJQ2xjYmx4MFhIUmNkSDBnS1N3Z2RDNWlaV1p2Y21Vb0lGd2lhVzVwZEdsaGJHbDZaVndpTENCbWRXNWpkR2x2YmlncElIdGNibHgwWEhSY2RGeDBhV1lnS0NBaFlTZ2dkR2hwY3k1d1lYSmhiWE11ZFhKc0xDQjBhR2x6TG5CaGNtRnRjeTVwWkNBcElDa2dlMXh1WEhSY2RGeDBYSFJjZEhSb2NtOTNJRzVsZHlCRmNuSnZjaWdnWENKdmJtVWdiMllnZFhKc0lHOXlJR2xrSUdseklISmxjWFZwY21Wa1hDSWdLVnh1WEhSY2RGeDBYSFI5WEc1Y2RGeDBYSFI5SUNsY2JseDBYSFI5WEc1Y2RIMHNJR1oxYm1OMGFXOXVLQ0IwTENCbExDQnVJQ2tnZTF4dVhIUmNkSFpoY2lCeUlEMGdiaWdnTWpnZ0tUdGNibHgwWEhSMExtVjRjRzl5ZEhNZ1BTQnlMbUoxYVd4a0tDQmJiaWdnTWprZ0tTd2diaWdnTVRRMUlDbGRJQ2xjYmx4MGZTd2dablZ1WTNScGIyNG9JSFFzSUdVc0lHNGdLU0I3WEc1Y2RGeDBkbUZ5SUhJZ1BTQnVLQ0F6SUNrc0lHa2dQU0J1S0NBd0lDa3NJRzhnUFNCdUtDQXhPU0FwTENCeklEMGdYQ0pzYVd0bGN6cGNJanRjYmx4dVhIUmNkR1oxYm1OMGFXOXVJR0VvSUhRZ0tTQjdYRzVjZEZ4MFhIUnlaWFIxY200Z2NpNXNhV3RsYzFOamNtVmxiazVoYldVb0lIUXVkWEpzSUNrZ2ZId2dkQzV6WTNKbFpXNU9ZVzFsWEc1Y2RGeDBmVnh1WEc1Y2RGeDBkQzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRvSUhRZ0tTQjdYRzVjZEZ4MFhIUjBMbkJoY21GdGN5Z2dlMXh1WEhSY2RGeDBYSFJ6WTNKbFpXNU9ZVzFsT2lCN2ZTeGNibHgwWEhSY2RGeDBkWE5sY2tsa09pQjdmU3hjYmx4MFhIUmNkRngwZFhKc09pQjdmVnh1WEhSY2RGeDBmU0FwTENCMExtOTJaWEp5YVdSbFVISnZjR1Z5ZEhrb0lGd2lhV1JjSWl3Z2UxeHVYSFJjZEZ4MFhIUm5aWFE2SUdaMWJtTjBhVzl1S0NrZ2UxeHVYSFJjZEZ4MFhIUmNkSFpoY2lCMElEMGdZU2dnZEdocGN5NXdZWEpoYlhNZ0tTQjhmQ0IwYUdsekxuQmhjbUZ0Y3k1MWMyVnlTV1E3WEc1Y2RGeDBYSFJjZEZ4MGNtVjBkWEp1SUhNZ0t5QjBYRzVjZEZ4MFhIUmNkSDFjYmx4MFhIUmNkSDBnS1N3Z2RDNXZkbVZ5Y21sa1pWQnliM0JsY25SNUtDQmNJbVZ1WkhCdmFXNTBYQ0lzSUh0Y2JseDBYSFJjZEZ4MFoyVjBPaUJtZFc1amRHbHZiaWdwSUh0Y2JseDBYSFJjZEZ4MFhIUnlaWFIxY200Z2J5NTBhVzFsYkdsdVpTZ2dXMXdpYkdsclpYTmNJbDBnS1Z4dVhIUmNkRngwWEhSOVhHNWNkRngwWEhSOUlDa3NJSFF1WkdWbWFXNWxLQ0JjSWw5blpYUk1hV3RsYzFGMVpYSjVVR0Z5WVcxY0lpd2dablZ1WTNScGIyNG9LU0I3WEc1Y2RGeDBYSFJjZEhaaGNpQjBJRDBnWVNnZ2RHaHBjeTV3WVhKaGJYTWdLVHRjYmx4MFhIUmNkRngwY21WMGRYSnVJSFFnUHlCN0lITmpjbVZsYmw5dVlXMWxPaUIwSUgwZ09pQjdJSFZ6WlhKZmFXUTZJSFJvYVhNdWNHRnlZVzF6TG5WelpYSkpaQ0I5WEc1Y2RGeDBYSFI5SUNrc0lIUXVZWEp2ZFc1a0tDQmNJbkYxWlhKNVVHRnlZVzF6WENJc0lHWjFibU4wYVc5dUtDQjBJQ2tnZTF4dVhIUmNkRngwWEhSeVpYUjFjbTRnYVM1aGRXY29JSFFvS1N3Z2RHaHBjeTVmWjJWMFRHbHJaWE5SZFdWeWVWQmhjbUZ0S0NrZ0tWeHVYSFJjZEZ4MGZTQXBMQ0IwTG1KbFptOXlaU2dnWENKcGJtbDBhV0ZzYVhwbFhDSXNJR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWEhScFppQW9JQ0ZoS0NCMGFHbHpMbkJoY21GdGN5QXBJQ1ltSUNGMGFHbHpMbkJoY21GdGN5NTFjMlZ5U1dRZ0tTQjdYRzVjZEZ4MFhIUmNkRngwZEdoeWIzY2dibVYzSUVWeWNtOXlLQ0JjSW5OamNtVmxiaUJ1WVcxbElHOXlJSFZ6WlhJZ2FXUWdhWE1nY21WeGRXbHlaV1JjSWlBcFhHNWNkRngwWEhSY2RIMWNibHgwWEhSY2RIMGdLVnh1WEhSY2RIMWNibHgwZlN3Z1puVnVZM1JwYjI0b0lIUXNJR1VzSUc0Z0tTQjdYRzVjZEZ4MGRtRnlJSElnUFNCdUtDQXlPQ0FwTzF4dVhIUmNkSFF1Wlhod2IzSjBjeUE5SUhJdVluVnBiR1FvSUZ0dUtDQXlPU0FwTENCdUtDQXhORGNnS1YwZ0tWeHVYSFI5TENCbWRXNWpkR2x2YmlnZ2RDd2daU3dnYmlBcElIdGNibHgwWEhSMllYSWdjaUE5SUc0b0lETWdLU3dnYVNBOUlHNG9JREFnS1N3Z2J5QTlJRzRvSURFNUlDa3NJSE1nUFNCY0lteHBjM1E2WENJN1hHNWNibHgwWEhSbWRXNWpkR2x2YmlCaEtDQjBJQ2tnZTF4dVhIUmNkRngwZG1GeUlHVWdQU0J5TG14cGMzUlRZM0psWlc1T1lXMWxRVzVrVTJ4MVp5Z2dkQzUxY213Z0tTQjhmQ0IwTzF4dVhIUmNkRngwY21WMGRYSnVJR2t1WTI5dGNHRmpkQ2dnZTF4dVhIUmNkRngwWEhSelkzSmxaVzVmYm1GdFpUb2daUzV2ZDI1bGNsTmpjbVZsYms1aGJXVXNYRzVjZEZ4MFhIUmNkSFZ6WlhKZmFXUTZJR1V1YjNkdVpYSlZjMlZ5U1dRc1hHNWNkRngwWEhSY2RHeHBjM1JmYzJ4MVp6b2daUzV6YkhWblhHNWNkRngwWEhSOUlDbGNibHgwWEhSOVhHNWNibHgwWEhSMExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpZ2dkQ0FwSUh0Y2JseDBYSFJjZEhRdWNHRnlZVzF6S0NCN1hHNWNkRngwWEhSY2RHbGtPaUI3ZlN4Y2JseDBYSFJjZEZ4MGIzZHVaWEpUWTNKbFpXNU9ZVzFsT2lCN2ZTeGNibHgwWEhSY2RGeDBiM2R1WlhKVmMyVnlTV1E2SUh0OUxGeHVYSFJjZEZ4MFhIUnpiSFZuT2lCN2ZTeGNibHgwWEhSY2RGeDBkWEpzT2lCN2ZWeHVYSFJjZEZ4MGZTQXBMQ0IwTG05MlpYSnlhV1JsVUhKdmNHVnlkSGtvSUZ3aWFXUmNJaXdnZTF4dVhIUmNkRngwWEhSblpYUTZJR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWEhSY2RIWmhjaUIwTENCbExDQnVPMXh1WEhSY2RGeDBYSFJjZEhKbGRIVnliaUIwYUdsekxuQmhjbUZ0Y3k1cFpDQS9JSE1nS3lCMGFHbHpMbkJoY21GdGN5NXBaQ0E2SUNobElEMGdLSFFnUFNCaEtDQjBhR2x6TG5CaGNtRnRjeUFwS1NBbUppQjBMbXhwYzNSZmMyeDFaeTV5WlhCc1lXTmxLQ0F2TFM5bkxDQmNJbDljSWlBcExDQnVJRDBnZENBbUppQW9kQzV6WTNKbFpXNWZibUZ0WlNCOGZDQjBMblZ6WlhKZmFXUXBMQ0J6SUNzZ0tHNGdLeUJjSWpwY0lpa2dLeUJsS1Z4dVhIUmNkRngwWEhSOVhHNWNkRngwWEhSOUlDa3NJSFF1YjNabGNuSnBaR1ZRY205d1pYSjBlU2dnWENKbGJtUndiMmx1ZEZ3aUxDQjdYRzVjZEZ4MFhIUmNkR2RsZERvZ1puVnVZM1JwYjI0b0tTQjdYRzVjZEZ4MFhIUmNkRngwY21WMGRYSnVJRzh1ZEdsdFpXeHBibVVvSUZ0Y0lteHBjM1JjSWwwZ0tWeHVYSFJjZEZ4MFhIUjlYRzVjZEZ4MFhIUjlJQ2tzSUhRdVpHVm1hVzVsS0NCY0lsOW5aWFJNYVhOMFVYVmxjbmxRWVhKaGJWd2lMQ0JtZFc1amRHbHZiaWdwSUh0Y2JseDBYSFJjZEZ4MGNtVjBkWEp1SUhSb2FYTXVjR0Z5WVcxekxtbGtJRDhnZXlCc2FYTjBYMmxrT2lCMGFHbHpMbkJoY21GdGN5NXBaQ0I5SURvZ1lTZ2dkR2hwY3k1d1lYSmhiWE1nS1Z4dVhIUmNkRngwZlNBcExDQjBMbUZ5YjNWdVpDZ2dYQ0p4ZFdWeWVWQmhjbUZ0YzF3aUxDQm1kVzVqZEdsdmJpZ2dkQ0FwSUh0Y2JseDBYSFJjZEZ4MGNtVjBkWEp1SUdrdVlYVm5LQ0IwS0Nrc0lIUm9hWE11WDJkbGRFeHBjM1JSZFdWeWVWQmhjbUZ0S0NrZ0tWeHVYSFJjZEZ4MGZTQXBMQ0IwTG1KbFptOXlaU2dnWENKcGJtbDBhV0ZzYVhwbFhDSXNJR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWEhSMllYSWdkQ0E5SUdFb0lIUm9hWE11Y0dGeVlXMXpJQ2s3WEc1Y2RGeDBYSFJjZEdsbUlDZ2dhUzVwYzBWdGNIUjVUMkpxWldOMEtDQjBJQ2tnSmlZZ0lYUm9hWE11Y0dGeVlXMXpMbWxrSUNrZ2UxeHVYSFJjZEZ4MFhIUmNkSFJvY205M0lHNWxkeUJGY25KdmNpZ2dYQ0p4ZFdGc2FXWnBaV1FnYzJ4MVp5QnZjaUJzYVhOMElHbGtJSEpsY1hWcGNtVmtYQ0lnS1Z4dVhIUmNkRngwWEhSOVhHNWNkRngwWEhSOUlDbGNibHgwWEhSOVhHNWNkSDBzSUdaMWJtTjBhVzl1S0NCMExDQmxMQ0J1SUNrZ2UxeHVYSFJjZEhaaGNpQnlJRDBnYmlnZ01qZ2dLVHRjYmx4MFhIUjBMbVY0Y0c5eWRITWdQU0J5TG1KMWFXeGtLQ0JiYmlnZ01qa2dLU3dnYmlnZ01UUTVJQ2xkSUNsY2JseDBmU3dnWm5WdVkzUnBiMjRvSUhRc0lHVXNJRzRnS1NCN1hHNWNkRngwZG1GeUlISWdQU0J1S0NBeklDa3NJR2tnUFNCdUtDQTFJQ2tzSUc4Z1BTQnVLQ0F3SUNrc0lITWdQU0J1S0NBeE9TQXBMQ0JoSUQwZ1hDSndjbTltYVd4bE9sd2lPMXh1WEc1Y2RGeDBablZ1WTNScGIyNGdkU2dnZEN3Z1pTQXBJSHRjYmx4MFhIUmNkSEpsZEhWeWJpQnlMbk5qY21WbGJrNWhiV1VvSUhRZ0tTQjhmQ0JsWEc1Y2RGeDBmVnh1WEc1Y2RGeDBkQzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRvSUhRZ0tTQjdYRzVjZEZ4MFhIUjBMbkJoY21GdGN5Z2dlMXh1WEhSY2RGeDBYSFJ6YUc5M1VtVndiR2xsY3pvZ2UxeHVYSFJjZEZ4MFhIUmNkR1poYkd4aVlXTnJPaUFoTVN4Y2JseDBYSFJjZEZ4MFhIUjBjbUZ1YzJadmNtMDZJR2t1WVhOQ2IyOXNaV0Z1WEc1Y2RGeDBYSFJjZEgwc1hHNWNkRngwWEhSY2RITmpjbVZsYms1aGJXVTZJSHQ5TEZ4dVhIUmNkRngwWEhSMWMyVnlTV1E2SUh0OUxGeHVYSFJjZEZ4MFhIUjFjbXc2SUh0OVhHNWNkRngwWEhSOUlDa3NJSFF1YjNabGNuSnBaR1ZRY205d1pYSjBlU2dnWENKcFpGd2lMQ0I3WEc1Y2RGeDBYSFJjZEdkbGREb2dablZ1WTNScGIyNG9LU0I3WEc1Y2RGeDBYSFJjZEZ4MGRtRnlJSFFnUFNCMUtDQjBhR2x6TG5CaGNtRnRjeTUxY213c0lIUm9hWE11Y0dGeVlXMXpMbk5qY21WbGJrNWhiV1VnS1R0Y2JseDBYSFJjZEZ4MFhIUnlaWFIxY200Z1lTQXJJQ2gwSUh4OElIUm9hWE11Y0dGeVlXMXpMblZ6WlhKSlpDbGNibHgwWEhSY2RGeDBmVnh1WEhSY2RGeDBmU0FwTENCMExtOTJaWEp5YVdSbFVISnZjR1Z5ZEhrb0lGd2laVzVrY0c5cGJuUmNJaXdnZTF4dVhIUmNkRngwWEhSblpYUTZJR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWEhSY2RISmxkSFZ5YmlCekxuUnBiV1ZzYVc1bEtDQmJYQ0p3Y205bWFXeGxYQ0pkSUNsY2JseDBYSFJjZEZ4MGZWeHVYSFJjZEZ4MGZTQXBMQ0IwTG1SbFptbHVaU2dnWENKZloyVjBVSEp2Wm1sc1pWRjFaWEo1VUdGeVlXMWNJaXdnWm5WdVkzUnBiMjRvS1NCN1hHNWNkRngwWEhSY2RIWmhjaUIwSUQwZ2RTZ2dkR2hwY3k1d1lYSmhiWE11ZFhKc0xDQjBhR2x6TG5CaGNtRnRjeTV6WTNKbFpXNU9ZVzFsSUNrc1hHNWNkRngwWEhSY2RGeDBaU0E5SUhRZ1B5QjdJSE5qY21WbGJsOXVZVzFsT2lCMElIMGdPaUI3SUhWelpYSmZhV1E2SUhSb2FYTXVjR0Z5WVcxekxuVnpaWEpKWkNCOU8xeHVYSFJjZEZ4MFhIUnlaWFIxY200Z2J5NWhkV2NvSUdVc0lIc2dkMmwwYUY5eVpYQnNhV1Z6T2lCMGFHbHpMbkJoY21GdGN5NXphRzkzVW1Wd2JHbGxjeUEvSUZ3aWRISjFaVndpSURvZ1hDSm1ZV3h6WlZ3aUlIMGdLVnh1WEhSY2RGeDBmU0FwTENCMExtRnliM1Z1WkNnZ1hDSnhkV1Z5ZVZCaGNtRnRjMXdpTENCbWRXNWpkR2x2YmlnZ2RDQXBJSHRjYmx4MFhIUmNkRngwY21WMGRYSnVJRzh1WVhWbktDQjBLQ2tzSUhSb2FYTXVYMmRsZEZCeWIyWnBiR1ZSZFdWeWVWQmhjbUZ0S0NrZ0tWeHVYSFJjZEZ4MGZTQXBMQ0IwTG1KbFptOXlaU2dnWENKcGJtbDBhV0ZzYVhwbFhDSXNJR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUmNkRngwWEhScFppQW9JQ0YxS0NCMGFHbHpMbkJoY21GdGN5NTFjbXdzSUhSb2FYTXVjR0Z5WVcxekxuTmpjbVZsYms1aGJXVWdLU0FtSmlBaGRHaHBjeTV3WVhKaGJYTXVkWE5sY2tsa0lDa2dlMXh1WEhSY2RGeDBYSFJjZEhSb2NtOTNJRzVsZHlCRmNuSnZjaWdnWENKelkzSmxaVzRnYm1GdFpTQnZjaUIxYzJWeUlHbGtJR2x6SUhKbGNYVnBjbVZrWENJZ0tWeHVYSFJjZEZ4MFhIUjlYRzVjZEZ4MFhIUjlJQ2xjYmx4MFhIUjlYRzVjZEgwc0lHWjFibU4wYVc5dUtDQjBMQ0JsTENCdUlDa2dlMXh1WEhSY2RIWmhjaUJ5SUQwZ2JpZ2dNaUFwTzF4dVhIUmNkSFF1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0NCMExDQmxJQ2tnZTF4dVhIUmNkRngwZG1GeUlHa2dQU0J1WlhjZ2NqdGNibHgwWEhSY2RISmxkSFZ5YmlCUWNtOXRhWE5sTG1Gc2JDZ2dXMjR1WlNnZ01DQXBMQ0J1TG1Vb0lEWWdLVjBnS1M1MGFHVnVLQ0JtZFc1amRHbHZiaWdnY2lBcElIdGNibHgwWEhSY2RGeDBkbUZ5SUc4N1hHNWNkRngwWEhSY2RIUnllU0I3WEc1Y2RGeDBYSFJjZEZ4MGJ5QTlJRzRvSURreUlDa3NJR2t1Y21WemIyeDJaU2dnYm1WM0lHOG9JSFFzSUdVZ0tTQXBYRzVjZEZ4MFhIUmNkSDBnWTJGMFkyZ2dLQ0IwSUNrZ2UxeHVYSFJjZEZ4MFhIUmNkR2t1Y21WcVpXTjBLQ0IwSUNsY2JseDBYSFJjZEZ4MGZWeHVYSFJjZEZ4MGZTNWlhVzVrS0NCdWRXeHNMQ0J1SUNrZ0tTNWpZWFJqYUNnZ1puVnVZM1JwYjI0b0lIUWdLU0I3WEc1Y2RGeDBYSFJjZEdrdWNtVnFaV04wS0NCMElDbGNibHgwWEhSY2RIMGdLU3dnYVM1d2NtOXRhWE5sWEc1Y2RGeDBmVnh1WEhSOUxDQm1kVzVqZEdsdmJpZ2dkQ3dnWlN3Z2JpQXBJSHRjYmx4MFhIUjJZWElnY2lBOUlHNG9JREV3SUNrc0lHa2dQU0J1S0NBeklDa3NJRzhnUFNCdUtDQXdJQ2tzSUhNZ1BTQnVLQ0F4TXlBcExDQmhJRDBnYmlnZ01UUWdLU2dwTENCMUlEMGdiaWdnTmpjZ0tTeGNibHgwWEhSY2RHTWdQU0JjSW1Kc2IyTnJjWFZ2ZEdVdWRIZHBkSFJsY2kxMGQyVmxkQ3dnWW14dlkydHhkVzkwWlM1MGQybDBkR1Z5TFhacFpHVnZYQ0lzSUdRZ1BTQXZYRnhpZEhjdFlXeHBaMjR0S0d4bFpuUjhjbWxuYUhSOFkyVnVkR1Z5S1Z4Y1lpODdYRzVjZEZ4MGRDNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNG9JSFFzSUdVZ0tTQjdYRzVjZEZ4MFhIUnlaWFIxY200Z1lTZ2dkQ3dnWXlBcExtMWhjQ2dnWm5WdVkzUnBiMjRvSUhRZ0tTQjdYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQjFLQ0JtZFc1amRHbHZiaWdnZENBcElIdGNibHgwWEhSY2RGeDBYSFIyWVhJZ1pTQTlJSE1vSUhRZ0tTd2diaUE5SUhRdVoyVjBSV3hsYldWdWRITkNlVlJoWjA1aGJXVW9JRndpUVZ3aUlDa3NJR0VnUFNCdUlDWW1JRzViSUc0dWJHVnVaM1JvSUMwZ01TQmRMRnh1WEhSY2RGeDBYSFJjZEZ4MGRTQTlJR0VnSmlZZ2FTNXpkR0YwZFhNb0lHRXVhSEpsWmlBcExDQmpJRDBnZEM1blpYUkJkSFJ5YVdKMWRHVW9JRndpWkdGMFlTMWpiMjUyWlhKellYUnBiMjVjSWlBcExGeHVYSFJjZEZ4MFhIUmNkRngwWmlBOUlGd2libTl1WlZ3aUlEMDlJR01nZkh3Z1hDSm9hV1JrWlc1Y0lpQTlQU0JqSUh4OElISXVjSEpsYzJWdWRDZ2dkQ3dnWENKMGR5MW9hV1JsTFhSb2NtVmhaRndpSUNrc1hHNWNkRngwWEhSY2RGeDBYSFJzSUQwZ2RDNW5aWFJCZEhSeWFXSjFkR1VvSUZ3aVpHRjBZUzFqWVhKa2Mxd2lJQ2tzWEc1Y2RGeDBYSFJjZEZ4MFhIUm9JRDBnWENKdWIyNWxYQ0lnUFQwZ2JDQjhmQ0JjSW1ocFpHUmxibHdpSUQwOUlHd2dmSHdnY2k1d2NtVnpaVzUwS0NCMExDQmNJblIzTFdocFpHVXRiV1ZrYVdGY0lpQXBMRnh1WEhSY2RGeDBYSFJjZEZ4MGNDQTlJSFF1WjJWMFFYUjBjbWxpZFhSbEtDQmNJbVJoZEdFdFlXeHBaMjVjSWlBcElIeDhJSFF1WjJWMFFYUjBjbWxpZFhSbEtDQmNJbUZzYVdkdVhDSWdLU3hjYmx4MFhIUmNkRngwWEhSY2RHMGdQU0IwTG1kbGRFRjBkSEpwWW5WMFpTZ2dYQ0prWVhSaExYUm9aVzFsWENJZ0tUdGNibHgwWEhSY2RGeDBYSFJ5WlhSMWNtNGdJWEFnSmlZZ1pDNTBaWE4wS0NCMExtTnNZWE56VG1GdFpTQXBJQ1ltSUNod0lEMGdVbVZuUlhod0xpUXhLU3dnYnk1aGRXY29JR1VzSUh0Y2JseDBYSFJjZEZ4MFhIUmNkSFIzWldWMFNXUTZJSFVzWEc1Y2RGeDBYSFJjZEZ4MFhIUm9hV1JsVkdoeVpXRmtPaUJtTEZ4dVhIUmNkRngwWEhSY2RGeDBhR2xrWlVOaGNtUTZJR2dzWEc1Y2RGeDBYSFJjZEZ4MFhIUmhiR2xuYmpvZ2NDeGNibHgwWEhSY2RGeDBYSFJjZEhSb1pXMWxPaUJ0TEZ4dVhIUmNkRngwWEhSY2RGeDBhV1E2SUhWY2JseDBYSFJjZEZ4MFhIUjlJQ2xjYmx4MFhIUmNkRngwZlNnZ2RDQXBMQ0IwTG5CaGNtVnVkRTV2WkdVc0lIUXNJR1VnS1Z4dVhIUmNkRngwZlNBcFhHNWNkRngwZlZ4dVhIUjlMQ0JtZFc1amRHbHZiaWdnZEN3Z1pTd2diaUFwSUh0Y2JseDBYSFIyWVhJZ2NpQTlJRzRvSURnMklDa3NJR2tnUFNCdUtDQXlNU0FwTENCdklEMGdYQ0owWm5kZmFHOXlhWHB2Ymw5MGQyVmxkRjlsYldKbFpGODVOVFUxWENJN1hHNWNkRngwZEM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0b0lIUXNJR1VnS1NCN1hHNWNkRngwWEhSMllYSWdianRjYmx4MFhIUmNkSFFnSmlZZ0tHNGdQU0IwV3lCdklGMHBJQ1ltSUc0dVluVmphMlYwSUNZbUlISW9JRzhzSUc0dVluVmphMlYwTENCdUxuWmxjbk5wYjI0c0lHa3VabTl5YldGMFNHOXlhWHB2YmxSM1pXVjBSR0YwWVNnZ1pTQXBJQ2xjYmx4MFhIUjlYRzVjZEgwc0lHWjFibU4wYVc5dUtDQjBMQ0JsTENCdUlDa2dlMXh1WEhSY2RIWmhjaUJ5SUQwZ2JpZ2dNaUFwTzF4dVhIUmNkSFF1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0NCMExDQmxJQ2tnZTF4dVhIUmNkRngwZG1GeUlHa2dQU0J1WlhjZ2NqdGNibHgwWEhSY2RISmxkSFZ5YmlCdUxtVW9JRGNnS1M1MGFHVnVLQ0JtZFc1amRHbHZiaWdnY2lBcElIdGNibHgwWEhSY2RGeDBkbUZ5SUc4N1hHNWNkRngwWEhSY2RIUnllU0I3WEc1Y2RGeDBYSFJjZEZ4MGJ5QTlJRzRvSURreklDa3NJR2t1Y21WemIyeDJaU2dnYm1WM0lHOG9JSFFzSUdVZ0tTQXBYRzVjZEZ4MFhIUmNkSDBnWTJGMFkyZ2dLQ0IwSUNrZ2UxeHVYSFJjZEZ4MFhIUmNkR2t1Y21WcVpXTjBLQ0IwSUNsY2JseDBYSFJjZEZ4MGZWeHVYSFJjZEZ4MGZTNWlhVzVrS0NCdWRXeHNMQ0J1SUNrZ0tTNWpZWFJqYUNnZ1puVnVZM1JwYjI0b0lIUWdLU0I3WEc1Y2RGeDBYSFJjZEdrdWNtVnFaV04wS0NCMElDbGNibHgwWEhSY2RIMGdLU3dnYVM1d2NtOXRhWE5sWEc1Y2RGeDBmVnh1WEhSOUxDQm1kVzVqZEdsdmJpZ2dkQ3dnWlN3Z2JpQXBJSHRjYmx4MFhIUjJZWElnY2lBOUlHNG9JRElnS1R0Y2JseDBYSFIwTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlnZ2RDd2daU0FwSUh0Y2JseDBYSFJjZEhaaGNpQnBJRDBnYm1WM0lISTdYRzVjZEZ4MFhIUnlaWFIxY200Z1VISnZiV2x6WlM1aGJHd29JRnR1TG1Vb0lEQWdLU3dnYmk1bEtDQTRJQ2xkSUNrdWRHaGxiaWdnWm5WdVkzUnBiMjRvSUhJZ0tTQjdYRzVjZEZ4MFhIUmNkSFpoY2lCdk8xeHVYSFJjZEZ4MFhIUjBjbmtnZTF4dVhIUmNkRngwWEhSY2RHOGdQU0J1S0NBNU5DQXBMQ0JwTG5KbGMyOXNkbVVvSUc1bGR5QnZLQ0IwTENCbElDa2dLVnh1WEhSY2RGeDBYSFI5SUdOaGRHTm9JQ2dnZENBcElIdGNibHgwWEhSY2RGeDBYSFJwTG5KbGFtVmpkQ2dnZENBcFhHNWNkRngwWEhSY2RIMWNibHgwWEhSY2RIMHVZbWx1WkNnZ2JuVnNiQ3dnYmlBcElDa3VZMkYwWTJnb0lHWjFibU4wYVc5dUtDQjBJQ2tnZTF4dVhIUmNkRngwWEhScExuSmxhbVZqZENnZ2RDQXBYRzVjZEZ4MFhIUjlJQ2tzSUdrdWNISnZiV2x6WlZ4dVhIUmNkSDFjYmx4MGZTd2dablZ1WTNScGIyNG9JSFFzSUdVc0lHNGdLU0I3WEc1Y2RGeDBkbUZ5SUhJZ1BTQnVLQ0F4TUNBcExDQnBJRDBnYmlnZ01DQXBMQ0J2SUQwZ2JpZ2dNVE1nS1N3Z2N5QTlJRzRvSURFMElDa29LU3dnWVNBOUlHNG9JRFk1SUNrc0lIVWdQU0J1S0NBMUlDa3NYRzVjZEZ4MFhIUmpJRDBnWENKaExuUjNhWFIwWlhJdGMyaGhjbVV0WW5WMGRHOXVMQ0JoTG5SM2FYUjBaWEl0YldWdWRHbHZiaTFpZFhSMGIyNHNJR0V1ZEhkcGRIUmxjaTFvWVhOb2RHRm5MV0oxZEhSdmJsd2lMRnh1WEhSY2RGeDBaQ0E5SUZ3aWRIZHBkSFJsY2kxb1lYTm9kR0ZuTFdKMWRIUnZibHdpTENCbUlEMGdYQ0owZDJsMGRHVnlMVzFsYm5ScGIyNHRZblYwZEc5dVhDSTdYRzVjZEZ4MGRDNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNG9JSFFnS1NCN1hHNWNkRngwWEhSeVpYUjFjbTRnY3lnZ2RDd2dZeUFwTG0xaGNDZ2dablZ1WTNScGIyNG9JSFFnS1NCN1hHNWNkRngwWEhSY2RISmxkSFZ5YmlCaEtDQm1kVzVqZEdsdmJpZ2dkQ0FwSUh0Y2JseDBYSFJjZEZ4MFhIUjJZWElnWlNBOUlHOG9JSFFnS1N3Z2JpQTlJSHRjYmx4MFhIUmNkRngwWEhSY2RITmpjbVZsYms1aGJXVTZJSFF1WjJWMFFYUjBjbWxpZFhSbEtDQmNJbVJoZEdFdFluVjBkRzl1TFhOamNtVmxiaTF1WVcxbFhDSWdLU3hjYmx4MFhIUmNkRngwWEhSY2RIUmxlSFE2SUhRdVoyVjBRWFIwY21saWRYUmxLQ0JjSW1SaGRHRXRkR1Y0ZEZ3aUlDa3NYRzVjZEZ4MFhIUmNkRngwWEhSMGVYQmxPaUIwTG1kbGRFRjBkSEpwWW5WMFpTZ2dYQ0prWVhSaExYUjVjR1ZjSWlBcExGeHVYSFJjZEZ4MFhIUmNkRngwYzJsNlpUb2dkQzVuWlhSQmRIUnlhV0oxZEdVb0lGd2laR0YwWVMxemFYcGxYQ0lnS1N4Y2JseDBYSFJjZEZ4MFhIUmNkSFZ5YkRvZ2RDNW5aWFJCZEhSeWFXSjFkR1VvSUZ3aVpHRjBZUzExY214Y0lpQXBMRnh1WEhSY2RGeDBYSFJjZEZ4MGFHRnphSFJoWjNNNklIUXVaMlYwUVhSMGNtbGlkWFJsS0NCY0ltUmhkR0V0YUdGemFIUmhaM05jSWlBcExGeHVYSFJjZEZ4MFhIUmNkRngwZG1saE9pQjBMbWRsZEVGMGRISnBZblYwWlNnZ1hDSmtZWFJoTFhacFlWd2lJQ2tzWEc1Y2RGeDBYSFJjZEZ4MFhIUmlkWFIwYjI1SVlYTm9kR0ZuT2lCMExtZGxkRUYwZEhKcFluVjBaU2dnWENKa1lYUmhMV0oxZEhSdmJpMW9ZWE5vZEdGblhDSWdLVnh1WEhSY2RGeDBYSFJjZEgwN1hHNWNkRngwWEhSY2RGeDBjbVYwZFhKdUlHa3VabTl5U1c0b0lHNHNJR1oxYm1OMGFXOXVLQ0IwTENCdUlDa2dlMXh1WEhSY2RGeDBYSFJjZEZ4MGRtRnlJSElnUFNCbFd5QjBJRjA3WEc1Y2RGeDBYSFJjZEZ4MFhIUmxXeUIwSUYwZ1BTQjFMbWhoYzFaaGJIVmxLQ0J5SUNrZ1B5QnlJRG9nYmx4dVhIUmNkRngwWEhSY2RIMGdLU3dnWlM1elkzSmxaVzVPWVcxbElEMGdaUzV6WTNKbFpXNU9ZVzFsSUh4OElHVXVjMk55WldWdVgyNWhiV1VzSUdVdVluVjBkRzl1U0dGemFIUmhaeUE5SUdVdVluVjBkRzl1U0dGemFIUmhaeUI4ZkNCbExtSjFkSFJ2Ymw5b1lYTm9kR0ZuSUh4OElHVXVhR0Z6YUhSaFp5d2djaTV3Y21WelpXNTBLQ0IwTENCa0lDa2dKaVlnS0dVdWRIbHdaU0E5SUZ3aWFHRnphSFJoWjF3aUtTd2djaTV3Y21WelpXNTBLQ0IwTENCbUlDa2dKaVlnS0dVdWRIbHdaU0E5SUZ3aWJXVnVkR2x2Ymx3aUtTd2daVnh1WEhSY2RGeDBYSFI5S0NCMElDa3NJSFF1Y0dGeVpXNTBUbTlrWlN3Z2RDQXBYRzVjZEZ4MFhIUjlJQ2xjYmx4MFhIUjlYRzVjZEgwc0lHWjFibU4wYVc5dUtDQjBMQ0JsTENCdUlDa2dlMXh1WEhSY2RIWmhjaUJ5SUQwZ2JpZ2dNaUFwTzF4dVhIUmNkSFF1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0NCMExDQmxJQ2tnZTF4dVhIUmNkRngwZG1GeUlHa2dQU0J1WlhjZ2NqdGNibHgwWEhSY2RISmxkSFZ5YmlCdUxtVW9JRE1nS1M1MGFHVnVLQ0JtZFc1amRHbHZiaWdnY2lBcElIdGNibHgwWEhSY2RGeDBkbUZ5SUc4N1hHNWNkRngwWEhSY2RIUnllU0I3WEc1Y2RGeDBYSFJjZEZ4MGJ5QTlJRzRvSURrMUlDa3NJR2t1Y21WemIyeDJaU2dnYm1WM0lHOG9JSFFzSUdVZ0tTQXBYRzVjZEZ4MFhIUmNkSDBnWTJGMFkyZ2dLQ0IwSUNrZ2UxeHVYSFJjZEZ4MFhIUmNkR2t1Y21WcVpXTjBLQ0IwSUNsY2JseDBYSFJjZEZ4MGZWeHVYSFJjZEZ4MGZTNWlhVzVrS0NCdWRXeHNMQ0J1SUNrZ0tTNWpZWFJqYUNnZ1puVnVZM1JwYjI0b0lIUWdLU0I3WEc1Y2RGeDBYSFJjZEdrdWNtVnFaV04wS0NCMElDbGNibHgwWEhSY2RIMGdLU3dnYVM1d2NtOXRhWE5sWEc1Y2RGeDBmVnh1WEhSOUxDQm1kVzVqZEdsdmJpZ2dkQ3dnWlN3Z2JpQXBJSHRjYmx4MFhIUjJZWElnY2lBOUlHNG9JREFnS1R0Y2JseDBYSFIwTG1WNGNHOXlkSE1nUFNCeUxtRjFaeWdnZTMwc0lHNG9JREUxT0NBcExDQnVLQ0F4TlRrZ0tTd2diaWdnTVRZd0lDa3NJRzRvSURFMk1TQXBMQ0J1S0NBeE5qSWdLU3dnYmlnZ01UWXpJQ2tzSUc0b0lERTJOQ0FwSUNsY2JseDBmU3dnWm5WdVkzUnBiMjRvSUhRc0lHVXNJRzRnS1NCN1hHNWNkRngwZG1GeUlISWdQU0J1S0NBMU9TQXBMQ0JwSUQwZ2JpZ2dNVGNnS1NnZ1cxd2lkWE5sY2tsa1hDSmRMQ0I3ZlN3Z2NpQXBPMXh1WEhSY2RIUXVaWGh3YjNKMGN5QTlJSHNnWTNKbFlYUmxSRTFDZFhSMGIyNDZJR2tnZlZ4dVhIUjlMQ0JtZFc1amRHbHZiaWdnZEN3Z1pTd2diaUFwSUh0Y2JseDBYSFIyWVhJZ2NpQTlJRzRvSURZeUlDa3NJR2tnUFNCdUtDQXhOeUFwS0NCYlhDSnpZM0psWlc1T1lXMWxYQ0pkTENCN2ZTd2djaUFwTzF4dVhIUmNkSFF1Wlhod2IzSjBjeUE5SUhzZ1kzSmxZWFJsUm05c2JHOTNRblYwZEc5dU9pQnBJSDFjYmx4MGZTd2dablZ1WTNScGIyNG9JSFFzSUdVc0lHNGdLU0I3WEc1Y2RGeDBkbUZ5SUhJZ1BTQnVLQ0EyTXlBcExDQnBJRDBnYmlnZ01UY2dLU2dnVzF3aWJXOXRaVzUwU1dSY0lsMHNJSHQ5TENCeUlDazdYRzVjZEZ4MGRDNWxlSEJ2Y25SeklEMGdleUJqY21WaGRHVk5iMjFsYm5RNklHa2dmVnh1WEhSOUxDQm1kVzVqZEdsdmJpZ2dkQ3dnWlN3Z2JpQXBJSHRjYmx4MFhIUjJZWElnY2lBOUlHNG9JRFkwSUNrc0lHa2dQU0J1S0NBeE55QXBLQ0JiWENKMWMyVnlibUZ0WlZ3aVhTd2dlMzBzSUhJZ0tUdGNibHgwWEhSMExtVjRjRzl5ZEhNZ1BTQjdJR055WldGMFpWQmxjbWx6WTI5d1pVOXVRV2x5UW5WMGRHOXVPaUJwSUgxY2JseDBmU3dnWm5WdVkzUnBiMjRvSUhRc0lHVXNJRzRnS1NCN1hHNWNkRngwZG1GeUlISWdQU0J1S0NBNElDa3NJR2tnUFNCdUtDQXhNaUFwTENCdklEMGdiaWdnTXlBcExDQnpJRDBnYmlnZ01DQXBMQ0JoSUQwZ2JpZ2dOU0FwTENCMUlEMGdiaWdnTmpVZ0tTd2dZeUE5SUc0b0lEWTJJQ2tzWEc1Y2RGeDBYSFJrSUQwZ2JpZ2dNVGNnS1NnZ1cxMHNJSHQ5TENCaklDa3NJR1lnUFNCdUtDQTJJQ2tzWEc1Y2RGeDBYSFJzSUQwZ1hDSkZiV0psWkdSbFpDQm5jbWxrY3lCb1lYWmxJR0psWlc0Z1pHVndjbVZqWVhSbFpDNGdVR3hsWVhObElIVnpaU0IwZDNSMGNpNTNhV1JuWlhSekxtTnlaV0YwWlZScGJXVnNhVzVsSUdsdWMzUmxZV1F1SUUxdmNtVWdhVzVtYnpvZ2FIUjBjSE02THk5MGQybDBkR1Z5WTI5dGJYVnVhWFI1TG1OdmJTOTBMM1Z3WkdGMFpTMXZiaTEwYUdVdFpXMWlaV1JrWldRdFozSnBaQzFrYVhOd2JHRjVMWFI1Y0dVdk1URTVOVFkwTGx3aUxGeHVYSFJjZEZ4MGFDQTlJSHRjYmx4MFhIUmNkRngwWTNKbFlYUmxWR2x0Wld4cGJtVTZJSEFzWEc1Y2RGeDBYSFJjZEdOeVpXRjBaVWR5YVdSR2NtOXRRMjlzYkdWamRHbHZiam9nWm5WdVkzUnBiMjRvSUhRZ0tTQjdYRzVjZEZ4MFhIUmNkRngwZG1GeUlHVWdQU0J6TG5SdlVtVmhiRUZ5Y21GNUtDQmhjbWQxYldWdWRITWdLUzV6YkdsalpTZ2dNU0FwTENCdUlEMGdlMXh1WEhSY2RGeDBYSFJjZEZ4MGMyOTFjbU5sVkhsd1pUb2dYQ0pqYjJ4c1pXTjBhVzl1WENJc1hHNWNkRngwWEhSY2RGeDBYSFJwWkRvZ2RGeHVYSFJjZEZ4MFhIUmNkSDA3WEc1Y2RGeDBYSFJjZEZ4MGNtVjBkWEp1SUdVdWRXNXphR2xtZENnZ2JpQXBMQ0JwTG5CMVlteHBZMHh2WnlnZ2JDQXBMQ0J3TG1Gd2NHeDVLQ0IwYUdsekxDQmxJQ2xjYmx4MFhIUmNkRngwZlZ4dVhIUmNkRngwZlR0Y2JseHVYSFJjZEdaMWJtTjBhVzl1SUhBb0lIUWdLU0I3WEc1Y2RGeDBYSFIyWVhJZ1pTd2diaUE5SUhNdWRHOVNaV0ZzUVhKeVlYa29JR0Z5WjNWdFpXNTBjeUFwTG5Oc2FXTmxLQ0F4SUNrN1hHNWNkRngwWEhSeVpYUjFjbTRnWVM1cGMxTjBjbWx1WnlnZ2RDQXBJSHg4SUdFdWFYTk9kVzFpWlhJb0lIUWdLU0EvSUdZdWNtVnFaV04wS0NCY0lrVnRZbVZrWkdWa0lIUnBiV1ZzYVc1bGN5QjNhWFJvSUhkcFpHZGxkQ0J6WlhSMGFXNW5jeUJvWVhabElHSmxaVzRnWkdWd2NtVmpZWFJsWkM0Z1UyVmxJR2gwZEhCek9pOHZkSGRwZEhSbGNtTnZiVzExYm1sMGVTNWpiMjB2ZEM5a1pYQnlaV05oZEdsdVp5MTNhV1JuWlhRdGMyVjBkR2x1WjNNdk1UQXlNamsxTGx3aUlDa2dPaUJ6TG1selQySnFaV04wS0NCMElDa2dQeUFvZENBOUlIUWdmSHdnZTMwc0lHNHVabTl5UldGamFDZ2dablZ1WTNScGIyNG9JSFFnS1NCN1hHNWNkRngwWEhSY2RITXVhWE5VZVhCbEtDQmNJbTlpYW1WamRGd2lMQ0IwSUNrZ0ppWWdablZ1WTNScGIyNG9JSFFnS1NCN1hHNWNkRngwWEhSY2RGeDBkQzVoY21saFRHbDJaU0E5SUhRdVlYSnBZVkJ2YkdsMFpWeHVYSFJjZEZ4MFhIUjlLQ0JsSUQwZ2RDQXBYRzVjZEZ4MFhIUjlJQ2tzSUdVZ2ZId2dLR1VnUFNCN2ZTd2diaTV3ZFhOb0tDQmxJQ2twTENCMExteGhibWNnUFNCbExteGhibWNzSUhRdWRIZGxaWFJNYVcxcGRDQTlJR1V1ZEhkbFpYUk1hVzFwZEN3Z2RDNXphRzkzVW1Wd2JHbGxjeUE5SUdVdWMyaHZkMUpsY0d4cFpYTXNJR1V1WkdGMFlWTnZkWEpqWlNBOUlIVW9JSFFnS1N3Z1pDNWhjSEJzZVNnZ2RHaHBjeXdnYmlBcEtTQTZJR1l1Y21WcVpXTjBLQ0JjSW1SaGRHRWdjMjkxY21ObElHMTFjM1FnWW1VZ1lXNGdiMkpxWldOMExsd2lJQ2xjYmx4MFhIUjlYRzVjYmx4MFhIUnZMbWx6VkhkcGRIUmxjbFZTVENnZ2NpNW9jbVZtSUNrZ0ppWWdLR2d1WTNKbFlYUmxWR2x0Wld4cGJtVlFjbVYyYVdWM0lEMGdablZ1WTNScGIyNG9JSFFzSUdVc0lHNGdLU0I3WEc1Y2RGeDBYSFIyWVhJZ2NpQTlJSHRjYmx4MFhIUmNkRngwY0hKbGRtbGxkMUJoY21GdGN6b2dkQ3hjYmx4MFhIUmNkRngwZFhObFRHVm5ZV041UkdWbVlYVnNkSE02SUNFd0xGeHVYSFJjZEZ4MFhIUnBjMUJ5WlhacFpYZFVhVzFsYkdsdVpUb2dJVEJjYmx4MFhIUmNkSDA3WEc1Y2RGeDBYSFJ5WlhSMWNtNGdjaTVrWVhSaFUyOTFjbU5sSUQwZ2RTZ2djaUFwTENCa0tDQmxMQ0J5TENCdUlDbGNibHgwWEhSOUtTd2dkQzVsZUhCdmNuUnpJRDBnYUZ4dVhIUjlMQ0JtZFc1amRHbHZiaWdnZEN3Z1pTd2diaUFwSUh0Y2JseDBYSFIyWVhJZ2Npd2dhU0E5SUc0b0lEQWdLU3dnYnlBOUlHNG9JRFkzSUNrc0lITWdQU0J1S0NBeE55QXBMQ0JoSUQwZ0tISWdQU0J6S0NCYlhDSjBkMlZsZEVsa1hDSmRMQ0I3ZlN3Z2J5QXBMQ0JtZFc1amRHbHZiaWdwSUh0Y2JseDBYSFJjZEhKbGRIVnliaUJwTG5SdlVtVmhiRUZ5Y21GNUtDQmhjbWQxYldWdWRITWdLUzV6YkdsalpTZ2dNU0FwTG1admNrVmhZMmdvSUdaMWJtTjBhVzl1S0NCMElDa2dlMXh1WEhSY2RGeDBYSFJwTG1selZIbHdaU2dnWENKdlltcGxZM1JjSWl3Z2RDQXBJQ1ltSUNoMExtaHBaR1ZEWVhKa0lEMGdYQ0p1YjI1bFhDSWdQVDBnZEM1allYSmtjeUI4ZkNCY0ltaHBaR1JsYmx3aUlEMDlJSFF1WTJGeVpITXNJSFF1YUdsa1pWUm9jbVZoWkNBOUlGd2libTl1WlZ3aUlEMDlJSFF1WTI5dWRtVnljMkYwYVc5dUlIeDhJRndpYUdsa1pHVnVYQ0lnUFQwZ2RDNWpiMjUyWlhKellYUnBiMjRwWEc1Y2RGeDBYSFI5SUNrc0lISXVZWEJ3Ykhrb0lIUm9hWE1zSUdGeVozVnRaVzUwY3lBcFhHNWNkRngwZlNrN1hHNWNkRngwZEM1bGVIQnZjblJ6SUQwZ2UxeHVYSFJjZEZ4MFkzSmxZWFJsVkhkbFpYUTZJR0VzWEc1Y2RGeDBYSFJqY21WaGRHVlVkMlZsZEVWdFltVmtPaUJoTEZ4dVhIUmNkRngwWTNKbFlYUmxWbWxrWlc4NklHRmNibHgwWEhSOVhHNWNkSDBzSUdaMWJtTjBhVzl1S0NCMExDQmxMQ0J1SUNrZ2UxeHVYSFJjZEhaaGNpQnlJRDBnYmlnZ01DQXBMQ0JwSUQwZ2JpZ2dOamtnS1N3Z2J5QTlJRzRvSURFM0lDa3NJSE1nUFNCdktDQmJYQ0oxY214Y0lsMHNJSHNnZEhsd1pUb2dYQ0p6YUdGeVpWd2lJSDBzSUdrZ0tTeGNibHgwWEhSY2RHRWdQU0J2S0NCYlhDSmlkWFIwYjI1SVlYTm9kR0ZuWENKZExDQjdJSFI1Y0dVNklGd2lhR0Z6YUhSaFoxd2lJSDBzSUdrZ0tTd2dkU0E5SUc4b0lGdGNJbk5qY21WbGJrNWhiV1ZjSWwwc0lIc2dkSGx3WlRvZ1hDSnRaVzUwYVc5dVhDSWdmU3dnYVNBcE8xeHVYRzVjZEZ4MFpuVnVZM1JwYjI0Z1l5Z2dkQ0FwSUh0Y2JseDBYSFJjZEhKbGRIVnliaUJtZFc1amRHbHZiaWdwSUh0Y2JseDBYSFJjZEZ4MGNtVjBkWEp1SUhJdWRHOVNaV0ZzUVhKeVlYa29JR0Z5WjNWdFpXNTBjeUFwTG5Oc2FXTmxLQ0F4SUNrdVptOXlSV0ZqYUNnZ1puVnVZM1JwYjI0b0lIUWdLU0I3WEc1Y2RGeDBYSFJjZEZ4MGNpNXBjMVI1Y0dVb0lGd2liMkpxWldOMFhDSXNJSFFnS1NBbUppQW9kQzV6WTNKbFpXNU9ZVzFsSUQwZ2RDNXpZM0psWlc1T1lXMWxJSHg4SUhRdWMyTnlaV1Z1WDI1aGJXVXNJSFF1WW5WMGRHOXVTR0Z6YUhSaFp5QTlJSFF1WW5WMGRHOXVTR0Z6YUhSaFp5QjhmQ0IwTG1KMWRIUnZibDlvWVhOb2RHRm5JSHg4SUhRdWFHRnphSFJoWnlsY2JseDBYSFJjZEZ4MGZTQXBMQ0IwTG1Gd2NHeDVLQ0IwYUdsekxDQmhjbWQxYldWdWRITWdLVnh1WEhSY2RGeDBmVnh1WEhSY2RIMWNibHh1WEhSY2RIUXVaWGh3YjNKMGN5QTlJSHRjYmx4MFhIUmNkR055WldGMFpWTm9ZWEpsUW5WMGRHOXVPaUJqS0NCeklDa3NYRzVjZEZ4MFhIUmpjbVZoZEdWSVlYTm9kR0ZuUW5WMGRHOXVPaUJqS0NCaElDa3NYRzVjZEZ4MFhIUmpjbVZoZEdWTlpXNTBhVzl1UW5WMGRHOXVPaUJqS0NCMUlDbGNibHgwWEhSOVhHNWNkSDBzSUdaMWJtTjBhVzl1S0NCMExDQmxMQ0J1SUNrZ2UxeHVYSFJjZEhaaGNpQnlMQ0JwTENCdkxDQnpJRDBnYmlnZ05DQXBMQ0JoSUQwZ2JpZ2dNU0FwTENCMUlEMGdNQ3dnWXlBOUlGdGRMQ0JrSUQwZ2N5NWpjbVZoZEdWRmJHVnRaVzUwS0NCY0ltRmNJaUFwTzF4dVhHNWNkRngwWm5WdVkzUnBiMjRnWmlncElIdGNibHgwWEhSY2RIWmhjaUIwTENCbE8xeHVYSFJjZEZ4MFptOXlJQ2dnZFNBOUlERXNJSFFnUFNBd0xDQmxJRDBnWXk1c1pXNW5kR2c3SUhRZ1BDQmxPeUIwSUNzcklDa2dlMXh1WEhSY2RGeDBYSFJqV3lCMElGMG9LVnh1WEhSY2RGeDBmVnh1WEhSY2RIMWNibHh1WEhSY2RDOWViRzloWkdWOFl5OHVkR1Z6ZENnZ2N5NXlaV0ZrZVZOMFlYUmxJQ2tnSmlZZ0tIVWdQU0F4S1N3Z2N5NWhaR1JGZG1WdWRFeHBjM1JsYm1WeUlDWW1JSE11WVdSa1JYWmxiblJNYVhOMFpXNWxjaWdnWENKRVQwMURiMjUwWlc1MFRHOWhaR1ZrWENJc0lHa2dQU0JtZFc1amRHbHZiaWdwSUh0Y2JseDBYSFJjZEhNdWNtVnRiM1psUlhabGJuUk1hWE4wWlc1bGNpZ2dYQ0pFVDAxRGIyNTBaVzUwVEc5aFpHVmtYQ0lzSUdrc0lDRXhJQ2tzSUdZb0tWeHVYSFJjZEgwc0lDRXhJQ2tzSUdRdVpHOVRZM0p2Ykd3Z0ppWWdjeTVoZEhSaFkyaEZkbVZ1ZENnZ1hDSnZibkpsWVdSNWMzUmhkR1ZqYUdGdVoyVmNJaXdnY2lBOUlHWjFibU4wYVc5dUtDa2dlMXh1WEhSY2RGeDBMMTVqTHk1MFpYTjBLQ0J6TG5KbFlXUjVVM1JoZEdVZ0tTQW1KaUFvY3k1a1pYUmhZMmhGZG1WdWRDZ2dYQ0p2Ym5KbFlXUjVjM1JoZEdWamFHRnVaMlZjSWl3Z2NpQXBMQ0JtS0NrcFhHNWNkRngwZlNBcExDQnZJRDBnWkM1a2IxTmpjbTlzYkNBL0lHWjFibU4wYVc5dUtDQjBJQ2tnZTF4dVhIUmNkRngwWVM1elpXeG1JQ0U5SUdFdWRHOXdJRDhnZFNBL0lIUW9LU0E2SUdNdWNIVnphQ2dnZENBcElEb2dablZ1WTNScGIyNG9LU0I3WEc1Y2RGeDBYSFJjZEhSeWVTQjdYRzVjZEZ4MFhIUmNkRngwWkM1a2IxTmpjbTlzYkNnZ1hDSnNaV1owWENJZ0tWeHVYSFJjZEZ4MFhIUjlJR05oZEdOb0lDZ2daU0FwSUh0Y2JseDBYSFJjZEZ4MFhIUnlaWFIxY200Z2MyVjBWR2x0Wlc5MWRDZ2dablZ1WTNScGIyNG9LU0I3WEc1Y2RGeDBYSFJjZEZ4MFhIUnZLQ0IwSUNsY2JseDBYSFJjZEZ4MFhIUjlMQ0ExTUNBcFhHNWNkRngwWEhSY2RIMWNibHgwWEhSY2RGeDBkQ2dwWEc1Y2RGeDBYSFI5S0NsY2JseDBYSFI5SURvZ1puVnVZM1JwYjI0b0lIUWdLU0I3WEc1Y2RGeDBYSFIxSUQ4Z2RDZ3BJRG9nWXk1d2RYTm9LQ0IwSUNsY2JseDBYSFI5TENCMExtVjRjRzl5ZEhNZ1BTQnZYRzVjZEgwc0lHWjFibU4wYVc5dUtDQjBMQ0JsTENCdUlDa2dlMXh1WEhSY2RIWmhjaUJ5SUQwZ2JpZ2dORGNnS1N3Z2FTQTlJRzRvSURrZ0tUdGNibHgwWEhSMExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpZ3BJSHRjYmx4MFhIUmNkR2t1YzJWMEtDQmNJbUoxYVd4a1ZtVnljMmx2Ymx3aUxDQnlMblpsY25OcGIyNGdLVnh1WEhSY2RIMWNibHgwZlN3Z1puVnVZM1JwYjI0b0lIUXNJR1VzSUc0Z0tTQjdYRzVjZEZ4MGJpZ2dNVFk0SUNrc0lHNG9JRGczSUNrc0lHNG9JREUzTVNBcFhHNWNkSDBzSUdaMWJtTjBhVzl1S0NCMExDQmxMQ0J1SUNrZ2UxeHVYSFJjZEhaaGNpQnlJRDBnYmlnZ01UWTVJQ2tzSUdrZ1BTQnVLQ0F6TUNBcExDQnZJRDBnYmlnZ056QWdLU3dnY3lBOUlHNWxkeUJ5TENCaElEMGdablZ1WTNScGIyNG9JSFFnS1NCN1hHNWNkRngwWEhSMExuZHBaR2RsZEhNZ0ppWWdNU0E5UFQwZ2RDNTNhV1JuWlhSekxteGxibWQwYUNBbUppQW9jeTV6ZEdGeWRDZ3BMQ0JwTG1WdGFYUjBaWEl1ZFc1aWFXNWtLQ0JwTGtGTVRGOVhTVVJIUlZSVFgxSkZUa1JGVWw5VFZFRlNWQ3dnWVNBcEtWeHVYSFJjZEgwc0lIVWdQU0JtZFc1amRHbHZiaWdnZENBcElIdGNibHgwWEhSY2RIWmhjaUJsTzF4dVhIUmNkRngwZEM1M2FXUm5aWFJ6SUNZbUlERWdQVDA5SUhRdWQybGtaMlYwY3k1c1pXNW5kR2dnSmlZZ0tHVWdQU0IwTG5kcFpHZGxkSE5iSURBZ1hTd2djeTVsYm1Rb0tTd2daUzVrWVhSaGMyVjBJQ1ltSUdVdVpHRjBZWE5sZEM1MGQyVmxkRWxrSUNZbUlHOG9JSHRjYmx4MFhIUmNkRngwWkhWeVlYUnBiMjQ2SUhNdVpIVnlZWFJwYjI0b0tTeGNibHgwWEhSY2RGeDBibUZ0WlhOd1lXTmxPaUI3WEc1Y2RGeDBYSFJjZEZ4MFpXeGxiV1Z1ZERvZ1hDSjBkMlZsZEZ3aUxGeHVYSFJjZEZ4MFhIUmNkR0ZqZEdsdmJqb2dYQ0p5Wlc1a1pYSmNJbHh1WEhSY2RGeDBYSFI5TEZ4dVhIUmNkRngwWEhSM2FXUm5aWFJKWkhNNklGdGxMbVJoZEdGelpYUXVkSGRsWlhSSlpGMWNibHgwWEhSY2RIMGdLU2tzSUdrdVpXMXBkSFJsY2k1MWJtSnBibVFvSUdrdVFVeE1YMWRKUkVkRlZGTmZVa1ZPUkVWU1gwVk9SQ3dnZFNBcFhHNWNkRngwZlR0Y2JseDBYSFJwTG1WdGFYUjBaWEl1WW1sdVpDZ2dhUzVCVEV4ZlYwbEVSMFZVVTE5U1JVNUVSVkpmVTFSQlVsUXNJR0VnS1N3Z2FTNWxiV2wwZEdWeUxtSnBibVFvSUdrdVFVeE1YMWRKUkVkRlZGTmZVa1ZPUkVWU1gwVk9SQ3dnZFNBcFhHNWNkSDBzSUdaMWJtTjBhVzl1S0NCMExDQmxMQ0J1SUNrZ2UxeHVYSFJjZEhaaGNpQnlJRDBnYmlnZ01UY3dJQ2s3WEc1Y2JseDBYSFJtZFc1amRHbHZiaUJwS0NrZ2UxeHVYSFJjZEgxY2JseHVYSFJjZEdrdWNISnZkRzkwZVhCbExuTjBZWEowSUQwZ1puVnVZM1JwYjI0b0tTQjdYRzVjZEZ4MFhIUjBhR2x6TGw5emRHRnlkRlJwYldVZ1BTQnlLQ2xjYmx4MFhIUjlMQ0JwTG5CeWIzUnZkSGx3WlM1bGJtUWdQU0JtZFc1amRHbHZiaWdwSUh0Y2JseDBYSFJjZEhSb2FYTXVYMlIxY21GMGFXOXVJRDBnY2lncElDMGdkR2hwY3k1ZmMzUmhjblJVYVcxbFhHNWNkRngwZlN3Z2FTNXdjbTkwYjNSNWNHVXVaSFZ5WVhScGIyNGdQU0JtZFc1amRHbHZiaWdwSUh0Y2JseDBYSFJjZEhKbGRIVnliaUIwYUdsekxsOWtkWEpoZEdsdmJseHVYSFJjZEgwc0lIUXVaWGh3YjNKMGN5QTlJR2xjYmx4MGZTd2dablZ1WTNScGIyNG9JSFFzSUdVc0lHNGdLU0I3WEc1Y2RGeDBkbUZ5SUhJZ1BTQnVLQ0F4SUNrN1hHNWNkRngwZEM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0b0tTQjdYRzVjZEZ4MFhIUnlaWFIxY200Z2NpNXdaWEptYjNKdFlXNWpaU0FtSmlCeUxuQmxjbVp2Y20xaGJtTmxMbTV2ZHlBL0lISXVjR1Z5Wm05eWJXRnVZMlV1Ym05M0tDa2dPaUJFWVhSbExtNXZkeWdwWEc1Y2RGeDBmVnh1WEhSOUxDQm1kVzVqZEdsdmJpZ2dkQ3dnWlN3Z2JpQXBJSHRjYmx4MFhIUjJZWElnY2lBOUlHNG9JRE13SUNrc0lHa2dQU0J1S0NBM01DQXBMQ0J2SUQwZ2JpZ2dNVGN5SUNrc0lITWdQU0J1S0NBeklDa3NJR0VnUFNCdUtDQXhJQ2tzSUhVZ1BTQnVLQ0F3SUNrc0lHTWdQU0J1S0NBeU1pQXBMQ0JrSUQwZ2JpZ2dOakVnS1R0Y2JseHVYSFJjZEdaMWJtTjBhVzl1SUdZb0lIUWdLU0I3WEc1Y2RGeDBYSFJ5WlhSMWNtNGdkQzV3WlhKbWIzSnRZVzVqWlM1blpYUkZiblJ5YVdWelFubFVlWEJsS0NCY0luSmxjMjkxY21ObFhDSWdLUzVtYVd4MFpYSW9JR1oxYm1OMGFXOXVLQ0IwSUNrZ2UxeHVYSFJjZEZ4MFhIUnlaWFIxY200Z2N5NXBjMVIzYVcxblZWSk1LQ0IwTG01aGJXVWdLU0I4ZkNCekxtbHpWSGRwZEhSbGNsVlNUQ2dnZEM1dVlXMWxJQ2xjYmx4MFhIUmNkSDBnS1M1eVpXUjFZMlVvSUdaMWJtTjBhVzl1S0NCMExDQmxJQ2tnZTF4dVhIUmNkRngwWEhSeVpYUjFjbTRnZEZzZ1pTNXVZVzFsSUYwZ1BTQmxMbVIxY21GMGFXOXVMQ0IwWEc1Y2RGeDBYSFI5TENCN2ZTQXBYRzVjZEZ4MGZWeHVYRzVjZEZ4MGNpNWxiV2wwZEdWeUxtSnBibVFvSUhJdVFVeE1YMWRKUkVkRlZGTmZRVTVFWDBsTlFVZEZVMTlNVDBGRVJVUXNJR1oxYm1OMGFXOXVLQ0IwSUNrZ2UxeHVYSFJjZEZ4MGRtRnlJR1VzSUc0c0lISWdQU0JiWFR0Y2JseDBYSFJjZEdNdWFHRnpVR1Z5Wm05eWJXRnVZMlZKYm1admNtMWhkR2x2YmlncElDWW1JQ2hsSUQwZ1ppZ2dZU0FwTENCa0xtbHpVM1Z3Y0c5eWRHVmtLQ2tnZkh3Z0tISWdQU0JtZFc1amRHbHZiaWdnZENBcElIdGNibHgwWEhSY2RGeDBjbVYwZFhKdUlIUXVjbVZrZFdObEtDQm1kVzVqZEdsdmJpZ2dkQ3dnWlNBcElIdGNibHgwWEhSY2RGeDBYSFJ5WlhSMWNtNGdkUzVoZFdjb0lIUXNJR1lvSUdVdVkyOXVkR1Z1ZEVSdlkzVnRaVzUwTG1SbFptRjFiSFJXYVdWM0lDa2dLVnh1WEhSY2RGeDBYSFI5TENCN2ZTQXBYRzVjZEZ4MFhIUjlLQ0IwSUNrcExDQnVJRDBnZFM1aGRXY29JSHQ5TENCbExDQnlJQ2tzSUU5aWFtVmpkQzVyWlhsektDQnZJQ2t1Wm05eVJXRmphQ2dnWm5WdVkzUnBiMjRvSUhRZ0tTQjdYRzVjZEZ4MFhIUmNkQ0ZtZFc1amRHbHZiaWdnZEN3Z1pTd2diaUFwSUh0Y2JseDBYSFJjZEZ4MFhIUjJZWElnY2lBOUlFOWlhbVZqZEM1clpYbHpLQ0IwSUNrdWNtVmtkV05sS0NCbWRXNWpkR2x2YmlnZ1pTd2djaUFwSUh0Y2JseDBYSFJjZEZ4MFhIUmNkSEpsZEhWeWJpQnVLQ0J5SUNrZ1B5QmxJQ3NnZEZzZ2NpQmRJRG9nWlZ4dVhIUmNkRngwWEhSY2RIMHNJREFnS1R0Y2JseDBYSFJjZEZ4MFhIUnBLQ0I3WEc1Y2RGeDBYSFJjZEZ4MFhIUmtkWEpoZEdsdmJqb2djaXhjYmx4MFhIUmNkRngwWEhSY2RHNWhiV1Z6Y0dGalpUb2dlMXh1WEhSY2RGeDBYSFJjZEZ4MFhIUmxiR1Z0Wlc1ME9pQmxMRnh1WEhSY2RGeDBYSFJjZEZ4MFhIUmhZM1JwYjI0NklGd2ljbVZ6YjNWeVkyVmNJbHh1WEhSY2RGeDBYSFJjZEZ4MGZWeHVYSFJjZEZ4MFhIUmNkSDBnS1Z4dVhIUmNkRngwWEhSOUtDQnVMQ0IwTENCdld5QjBJRjBnS1Z4dVhIUmNkRngwZlNBcEtWeHVYSFJjZEgwZ0tWeHVYSFI5TENCbWRXNWpkR2x2YmlnZ2RDd2daU3dnYmlBcElIdGNibHgwWEhSMllYSWdjaUE5SUc0b0lETWdLU3dnYVNBOUlIdGNibHgwWEhSY2RHRnNiRG9nWm5WdVkzUnBiMjRvS1NCN1hHNWNkRngwWEhSY2RISmxkSFZ5YmlBaE1GeHVYSFJjZEZ4MGZTeGNibHgwWEhSY2RHbHRZV2RsT2lCbWRXNWpkR2x2YmlnZ2RDQXBJSHRjYmx4MFhIUmNkRngwY21WMGRYSnVJSEl1YVhOVWQybHRaMVZTVENnZ2RDQXBYRzVjZEZ4MFhIUjlMRnh1WEhSY2RGeDBjMlYwZEdsdVozTTZJR1oxYm1OMGFXOXVLQ0IwSUNrZ2UxeHVYSFJjZEZ4MFhIUnlaWFIxY200Z2NpNXBjMU5sZEhScGJtZHpWVkpNS0NCMElDbGNibHgwWEhSY2RIMHNYRzVjZEZ4MFhIUjNhV1JuWlhSZmFXWnlZVzFsT2lCbWRXNWpkR2x2YmlnZ2RDQXBJSHRjYmx4MFhIUmNkRngwY21WMGRYSnVJSEl1YVhOWGFXUm5aWFJKWm5KaGJXVlZVa3dvSUhRZ0tWeHVYSFJjZEZ4MGZWeHVYSFJjZEgwN1hHNWNkRngwZEM1bGVIQnZjblJ6SUQwZ2FWeHVYSFI5WEc1ZElDa3BLVHRjYmlKZExDSm1hV3hsSWpvaWRtVnVaRzl5TDNkcFpHZGxkSE11YW5NaWZRPT1cbiJdLCJmaWxlIjoidmVuZG9yL3dpZGdldHMuanMifQ==
