/**
 * Main
 *
 * The main file, page logic which is needed on all pages will be included here.
 * Please note for specific components like a slider create a separated components/<component_name>.js
 * The components will be loaded through the component loader and are not needed on every page!
 */

define( ['jquery', 'widgets', 'singlepagenav'], function( $ ) {
	var close = $( '.js-toggle' );
	var twitter = $( '.twitter-block' );
	var toggle = $( '.js-accordion' );
	var navbar = $( 'nav li a' );
	var close_btn = $( '.js-close-important' );
	var faqFixed = $( '.js-faq-fixed' );
	var sidebar = $( '#sidebar' );
	var header = $( '.header' );
	var wrapper = $( '.wrapper' );
	var tabs = $( 'ul.tabs li' );
	var symptoms_tabs = $( 'ul.js-symptoms-tabs li' );
	var help = $( '.js-get-help' );
	var body = document.body;
	var scrollUp = 'scroll-up';
	var scrollDown = 'scroll-down';
	var lastScroll = 0;

	if ( close.length > 0 ) {
		close.on( 'click', function( e ) {
			e.preventDefault();
			$( this ).toggleClass( 'active' );
			$( '.header nav' ).slideToggle();
		} );
	}

	if ( help.length > 0 ) {
		help.on( 'click', function( e ) {
			e.preventDefault();
			$( this ).toggleClass( 'is-active' );
			$( this ).parent().next().toggleClass( 'is-active' );
		} );
	}

	if ( close_btn.length > 0 ) {
		close_btn.on( 'click', function( e ) {
			e.preventDefault();
			$( '.js-imp-message' ).hide();
		} );
	}

	if ( navbar.length > 0 ) {
		if ( $( window ).width() < 767 ) {
			navbar.on( 'click', function() {
				$( 'nav' ).slideUp();
				$( '.js-toggle' ).removeClass( 'active' );
			} );
		}
	}

	if ( twitter.length > 0 ) {
		twitter.delegate( '#twitter-widget-0', 'DOMSubtreeModified propertychange', function() {
			//function call to override the base twitter styles
			customizeTweetMedia();
		} );

		var customizeTweetMedia = function() {

			//overrides font styles and removes the profile picture and media from twitter feed
			twitter.find( '.twitter-timeline' ).contents().find( '.timeline-Tweet-media' ).css( 'display', 'none' );
			$( '.twitter-block' ).find( '.twitter-timeline' ).contents().find( 'a.TweetAuthor-avatar.Identity-avatar' ).css( {
				'width': '87px',
				'height': '87px'
			} );
			twitter.find( '.twitter-timeline' ).contents().find( 'a.TweetAuthor-avatar.Identity-avatar img' ).css(
				{
					'width': '70px',
					'max-widget': 'none'
				}
			);
			twitter.find( '.twitter-timeline' ).contents().find( 'span.TweetAuthor-screenName' ).remove();
			twitter.find( '.twitter-timeline' ).contents().find( '.timeline-Tweet-metadata' ).remove();
			twitter.find( '.twitter-timeline' ).contents().find( '.timeline-Tweet-actions' ).remove();
			twitter.find( '.twitter-timeline' ).contents().find( '.timeline-Tweet-brand' ).remove();
			twitter.find( '.twitter-timeline' ).contents().find( '.timeline-Tweet-inReplyTo' ).remove();
			twitter.find( '.twitter-timeline' ).contents().find( '.timeline-Tweet-retweetCredit' ).remove();
			twitter.find( '.twitter-timeline' ).contents().find( 'span.TweetAuthor-verifiedBadge' ).remove();
			twitter.find( '.twitter-timeline' ).contents().find( 'p.timeline-Tweet-text' ).css( {
				'margin': '0 0 0 20px',
				'white-space': 'normal',
				'max-width': '335px',
				'font-size': '16px',
				'height': '74px',
				'overflow': 'hidden'
			} );
			twitter.find( '.twitter-timeline' ).contents().find( '.timeline-Tweet' ).css( {
				'padding': '10px 0 43px 0',
				'position': 'relative'
			} );
			twitter.find( '.twitter-timeline' ).contents().find( '.TweetAuthor' ).css( {
				'position': 'absolute',
				'left': '90px',
				'width': '200px',
				'bottom': '-30px',
				'max-width': 'none'
			} );
			twitter.find( '.twitter-timeline' ).contents().find( '.TweetAuthor-avatar' ).css( { 'position': 'relative' } );
			twitter.find( '.twitter-timeline' ).contents().find( '.timeline-Tweet-author ' ).css( { 'padding-left': '0' } );
			twitter.find( '.twitter-timeline' ).contents().find( '.timeline-Tweet ' ).css( { 'display': 'flex' } );
			twitter.find( '.twitter-timeline' ).contents().find( '.timeline-TweetList-tweet' ).css( { 'margin-bottom': '15px' } );
			twitter.find( '.twitter-timeline' ).contents().find( '.timeline-TweetList-tweet' ).addClass( 'Test' );

			//also call the function on dynamic updates in addition to page load
			twitter.find( '.twitter-timeline' ).contents().find( '.timeline-TweetList' ).bind( 'DOMSubtreeModified propertychange', function() {
				customizeTweetMedia( this );
			} );
		};
	}

	if ( faqFixed.length > 0 ) {
		var length = faqFixed.height() - sidebar.height() + faqFixed.offset().top;

		if ( $( window ).width() > 767 ) {

			$( window ).scroll( function() {

				var scroll = $( this ).scrollTop();
				var height = sidebar.height() + 'px';

				if ( scroll < faqFixed.offset().top ) {

					sidebar.css( {
						'position': 'absolute',
						'top': '0'
					} );

				} else if ( scroll > length ) {

					sidebar.css( {
						'position': 'absolute',
						'bottom': '0',
						'top': 'auto'
					} );

				} else {

					sidebar.css( {
						'position': 'fixed',
						'top': '0',
						'height': height
					} );
				}
			} );

		}
	}

	$( '.js-scroll-page a' ).mPageScroll2id( {
		offset: '150',
		highlightSelector: '.js-scroll-page a'
	} );

	if ( toggle.length > 0 ) {
		toggle.on( 'click', function( e ) {
			e.preventDefault();

			var $this = $( this );

			if ( $this.next().hasClass( 'show' ) ) {
				$this.next().removeClass( 'show' );
				$this.next().slideUp( 350 );
			} else {
				$this.parent().parent().find( 'li .inner' ).removeClass( 'show' );
				$this.parent().parent().find( 'li .inner' ).slideUp( 350 );
				$this.next().toggleClass( 'show' );
				$this.next().slideToggle( 350 );
			}
		} );
	}

	if ( header.length > 0 ) {
		$( window ).scroll( function() {
			if ( $( window ).scrollTop() >= 2 ) {
				header.addClass( 'header--sticky' );
				wrapper.addClass( 'active' );
			} else {
				header.removeClass( 'header--sticky' );
				wrapper.removeClass( 'active' );
			}
		} );
	}

	if ( tabs.length > 0 ) {
		tabs.click( function( e ) {
			e.preventDefault();
			var tab_id = $( this ).attr( 'data-tab' );

			tabs.removeClass( 'current' );
			$( '.tab-content' ).removeClass( 'current' );

			$( this ).addClass( 'current' );
			$( '#' + tab_id ).addClass( 'current' );
		} );
	}

	if ( symptoms_tabs.length > 0 ) {
		symptoms_tabs.click( function( e ) {
			e.preventDefault();
			var tab_id2 = $( this ).attr( 'data-tab' );

			symptoms_tabs.removeClass( 'current' );
			$( '.tab-content-2' ).removeClass( 'current' );

			$( this ).addClass( 'current' );
			$( '#' + tab_id2 ).addClass( 'current' );
		} );
	}

	setTimeout( function() {
		$( 'body' ).addClass( 'loaded' );
	}, 800 );

	setTimeout( function() {
		$( '.stat-number' ).each( function() {
			var size = $( this ).text().split( '.' )[ 1 ] ? $( this ).text().split( '.' )[ 1 ].length : 0;
			$( this ).prop( 'Counter', 0 ).animate( {
				Counter: $( this ).text()
			}, {
				duration: 5000,
				step: function( func ) {
					$( this ).text( parseFloat( func ).toFixed( size ) );
				}
			} );
		} );
	}, 1000 );

	window.addEventListener( 'scroll', () => {
		var currentScroll = window.pageYOffset;

		if ( currentScroll < 100 ) {
			body.classList.remove( scrollUp );
			return;
		}

		if ( currentScroll > lastScroll && !body.classList.contains( scrollDown ) ) {
			// down
			body.classList.remove( scrollUp );
			body.classList.add( scrollDown );
		} else if ( currentScroll < lastScroll && body.classList.contains( scrollDown ) ) {
			// up
			body.classList.remove( scrollDown );
			body.classList.add( scrollUp );
		}
		lastScroll = currentScroll;
	} );


	$( '.js-translator-btn' ).click( function( e ) {
		e.preventDefault();
		$(this).next().toggleClass( 'is-active' );
	} );

	$( 'body, html' ).not( '.banner__navigation ul li' ).click( function() {
	} );
} );

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1haW5cbiAqXG4gKiBUaGUgbWFpbiBmaWxlLCBwYWdlIGxvZ2ljIHdoaWNoIGlzIG5lZWRlZCBvbiBhbGwgcGFnZXMgd2lsbCBiZSBpbmNsdWRlZCBoZXJlLlxuICogUGxlYXNlIG5vdGUgZm9yIHNwZWNpZmljIGNvbXBvbmVudHMgbGlrZSBhIHNsaWRlciBjcmVhdGUgYSBzZXBhcmF0ZWQgY29tcG9uZW50cy88Y29tcG9uZW50X25hbWU+LmpzXG4gKiBUaGUgY29tcG9uZW50cyB3aWxsIGJlIGxvYWRlZCB0aHJvdWdoIHRoZSBjb21wb25lbnQgbG9hZGVyIGFuZCBhcmUgbm90IG5lZWRlZCBvbiBldmVyeSBwYWdlIVxuICovXG5cbmRlZmluZSggWydqcXVlcnknLCAnd2lkZ2V0cycsICdzaW5nbGVwYWdlbmF2J10sIGZ1bmN0aW9uKCAkICkge1xuXHR2YXIgY2xvc2UgPSAkKCAnLmpzLXRvZ2dsZScgKTtcblx0dmFyIHR3aXR0ZXIgPSAkKCAnLnR3aXR0ZXItYmxvY2snICk7XG5cdHZhciB0b2dnbGUgPSAkKCAnLmpzLWFjY29yZGlvbicgKTtcblx0dmFyIG5hdmJhciA9ICQoICduYXYgbGkgYScgKTtcblx0dmFyIGNsb3NlX2J0biA9ICQoICcuanMtY2xvc2UtaW1wb3J0YW50JyApO1xuXHR2YXIgZmFxRml4ZWQgPSAkKCAnLmpzLWZhcS1maXhlZCcgKTtcblx0dmFyIHNpZGViYXIgPSAkKCAnI3NpZGViYXInICk7XG5cdHZhciBoZWFkZXIgPSAkKCAnLmhlYWRlcicgKTtcblx0dmFyIHdyYXBwZXIgPSAkKCAnLndyYXBwZXInICk7XG5cdHZhciB0YWJzID0gJCggJ3VsLnRhYnMgbGknICk7XG5cdHZhciBzeW1wdG9tc190YWJzID0gJCggJ3VsLmpzLXN5bXB0b21zLXRhYnMgbGknICk7XG5cdHZhciBoZWxwID0gJCggJy5qcy1nZXQtaGVscCcgKTtcblx0dmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXHR2YXIgc2Nyb2xsVXAgPSAnc2Nyb2xsLXVwJztcblx0dmFyIHNjcm9sbERvd24gPSAnc2Nyb2xsLWRvd24nO1xuXHR2YXIgbGFzdFNjcm9sbCA9IDA7XG5cblx0aWYgKCBjbG9zZS5sZW5ndGggPiAwICkge1xuXHRcdGNsb3NlLm9uKCAnY2xpY2snLCBmdW5jdGlvbiggZSApIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdCQoIHRoaXMgKS50b2dnbGVDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHRcdCQoICcuaGVhZGVyIG5hdicgKS5zbGlkZVRvZ2dsZSgpO1xuXHRcdH0gKTtcblx0fVxuXG5cdGlmICggaGVscC5sZW5ndGggPiAwICkge1xuXHRcdGhlbHAub24oICdjbGljaycsIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0JCggdGhpcyApLnRvZ2dsZUNsYXNzKCAnaXMtYWN0aXZlJyApO1xuXHRcdFx0JCggdGhpcyApLnBhcmVudCgpLm5leHQoKS50b2dnbGVDbGFzcyggJ2lzLWFjdGl2ZScgKTtcblx0XHR9ICk7XG5cdH1cblxuXHRpZiAoIGNsb3NlX2J0bi5sZW5ndGggPiAwICkge1xuXHRcdGNsb3NlX2J0bi5vbiggJ2NsaWNrJywgZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHQkKCAnLmpzLWltcC1tZXNzYWdlJyApLmhpZGUoKTtcblx0XHR9ICk7XG5cdH1cblxuXHRpZiAoIG5hdmJhci5sZW5ndGggPiAwICkge1xuXHRcdGlmICggJCggd2luZG93ICkud2lkdGgoKSA8IDc2NyApIHtcblx0XHRcdG5hdmJhci5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoICduYXYnICkuc2xpZGVVcCgpO1xuXHRcdFx0XHQkKCAnLmpzLXRvZ2dsZScgKS5yZW1vdmVDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cblxuXHRpZiAoIHR3aXR0ZXIubGVuZ3RoID4gMCApIHtcblx0XHR0d2l0dGVyLmRlbGVnYXRlKCAnI3R3aXR0ZXItd2lkZ2V0LTAnLCAnRE9NU3VidHJlZU1vZGlmaWVkIHByb3BlcnR5Y2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHQvL2Z1bmN0aW9uIGNhbGwgdG8gb3ZlcnJpZGUgdGhlIGJhc2UgdHdpdHRlciBzdHlsZXNcblx0XHRcdGN1c3RvbWl6ZVR3ZWV0TWVkaWEoKTtcblx0XHR9ICk7XG5cblx0XHR2YXIgY3VzdG9taXplVHdlZXRNZWRpYSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvL292ZXJyaWRlcyBmb250IHN0eWxlcyBhbmQgcmVtb3ZlcyB0aGUgcHJvZmlsZSBwaWN0dXJlIGFuZCBtZWRpYSBmcm9tIHR3aXR0ZXIgZmVlZFxuXHRcdFx0dHdpdHRlci5maW5kKCAnLnR3aXR0ZXItdGltZWxpbmUnICkuY29udGVudHMoKS5maW5kKCAnLnRpbWVsaW5lLVR3ZWV0LW1lZGlhJyApLmNzcyggJ2Rpc3BsYXknLCAnbm9uZScgKTtcblx0XHRcdCQoICcudHdpdHRlci1ibG9jaycgKS5maW5kKCAnLnR3aXR0ZXItdGltZWxpbmUnICkuY29udGVudHMoKS5maW5kKCAnYS5Ud2VldEF1dGhvci1hdmF0YXIuSWRlbnRpdHktYXZhdGFyJyApLmNzcygge1xuXHRcdFx0XHQnd2lkdGgnOiAnODdweCcsXG5cdFx0XHRcdCdoZWlnaHQnOiAnODdweCdcblx0XHRcdH0gKTtcblx0XHRcdHR3aXR0ZXIuZmluZCggJy50d2l0dGVyLXRpbWVsaW5lJyApLmNvbnRlbnRzKCkuZmluZCggJ2EuVHdlZXRBdXRob3ItYXZhdGFyLklkZW50aXR5LWF2YXRhciBpbWcnICkuY3NzKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0J3dpZHRoJzogJzcwcHgnLFxuXHRcdFx0XHRcdCdtYXgtd2lkZ2V0JzogJ25vbmUnXG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0XHR0d2l0dGVyLmZpbmQoICcudHdpdHRlci10aW1lbGluZScgKS5jb250ZW50cygpLmZpbmQoICdzcGFuLlR3ZWV0QXV0aG9yLXNjcmVlbk5hbWUnICkucmVtb3ZlKCk7XG5cdFx0XHR0d2l0dGVyLmZpbmQoICcudHdpdHRlci10aW1lbGluZScgKS5jb250ZW50cygpLmZpbmQoICcudGltZWxpbmUtVHdlZXQtbWV0YWRhdGEnICkucmVtb3ZlKCk7XG5cdFx0XHR0d2l0dGVyLmZpbmQoICcudHdpdHRlci10aW1lbGluZScgKS5jb250ZW50cygpLmZpbmQoICcudGltZWxpbmUtVHdlZXQtYWN0aW9ucycgKS5yZW1vdmUoKTtcblx0XHRcdHR3aXR0ZXIuZmluZCggJy50d2l0dGVyLXRpbWVsaW5lJyApLmNvbnRlbnRzKCkuZmluZCggJy50aW1lbGluZS1Ud2VldC1icmFuZCcgKS5yZW1vdmUoKTtcblx0XHRcdHR3aXR0ZXIuZmluZCggJy50d2l0dGVyLXRpbWVsaW5lJyApLmNvbnRlbnRzKCkuZmluZCggJy50aW1lbGluZS1Ud2VldC1pblJlcGx5VG8nICkucmVtb3ZlKCk7XG5cdFx0XHR0d2l0dGVyLmZpbmQoICcudHdpdHRlci10aW1lbGluZScgKS5jb250ZW50cygpLmZpbmQoICcudGltZWxpbmUtVHdlZXQtcmV0d2VldENyZWRpdCcgKS5yZW1vdmUoKTtcblx0XHRcdHR3aXR0ZXIuZmluZCggJy50d2l0dGVyLXRpbWVsaW5lJyApLmNvbnRlbnRzKCkuZmluZCggJ3NwYW4uVHdlZXRBdXRob3ItdmVyaWZpZWRCYWRnZScgKS5yZW1vdmUoKTtcblx0XHRcdHR3aXR0ZXIuZmluZCggJy50d2l0dGVyLXRpbWVsaW5lJyApLmNvbnRlbnRzKCkuZmluZCggJ3AudGltZWxpbmUtVHdlZXQtdGV4dCcgKS5jc3MoIHtcblx0XHRcdFx0J21hcmdpbic6ICcwIDAgMCAyMHB4Jyxcblx0XHRcdFx0J3doaXRlLXNwYWNlJzogJ25vcm1hbCcsXG5cdFx0XHRcdCdtYXgtd2lkdGgnOiAnMzM1cHgnLFxuXHRcdFx0XHQnZm9udC1zaXplJzogJzE2cHgnLFxuXHRcdFx0XHQnaGVpZ2h0JzogJzc0cHgnLFxuXHRcdFx0XHQnb3ZlcmZsb3cnOiAnaGlkZGVuJ1xuXHRcdFx0fSApO1xuXHRcdFx0dHdpdHRlci5maW5kKCAnLnR3aXR0ZXItdGltZWxpbmUnICkuY29udGVudHMoKS5maW5kKCAnLnRpbWVsaW5lLVR3ZWV0JyApLmNzcygge1xuXHRcdFx0XHQncGFkZGluZyc6ICcxMHB4IDAgNDNweCAwJyxcblx0XHRcdFx0J3Bvc2l0aW9uJzogJ3JlbGF0aXZlJ1xuXHRcdFx0fSApO1xuXHRcdFx0dHdpdHRlci5maW5kKCAnLnR3aXR0ZXItdGltZWxpbmUnICkuY29udGVudHMoKS5maW5kKCAnLlR3ZWV0QXV0aG9yJyApLmNzcygge1xuXHRcdFx0XHQncG9zaXRpb24nOiAnYWJzb2x1dGUnLFxuXHRcdFx0XHQnbGVmdCc6ICc5MHB4Jyxcblx0XHRcdFx0J3dpZHRoJzogJzIwMHB4Jyxcblx0XHRcdFx0J2JvdHRvbSc6ICctMzBweCcsXG5cdFx0XHRcdCdtYXgtd2lkdGgnOiAnbm9uZSdcblx0XHRcdH0gKTtcblx0XHRcdHR3aXR0ZXIuZmluZCggJy50d2l0dGVyLXRpbWVsaW5lJyApLmNvbnRlbnRzKCkuZmluZCggJy5Ud2VldEF1dGhvci1hdmF0YXInICkuY3NzKCB7ICdwb3NpdGlvbic6ICdyZWxhdGl2ZScgfSApO1xuXHRcdFx0dHdpdHRlci5maW5kKCAnLnR3aXR0ZXItdGltZWxpbmUnICkuY29udGVudHMoKS5maW5kKCAnLnRpbWVsaW5lLVR3ZWV0LWF1dGhvciAnICkuY3NzKCB7ICdwYWRkaW5nLWxlZnQnOiAnMCcgfSApO1xuXHRcdFx0dHdpdHRlci5maW5kKCAnLnR3aXR0ZXItdGltZWxpbmUnICkuY29udGVudHMoKS5maW5kKCAnLnRpbWVsaW5lLVR3ZWV0ICcgKS5jc3MoIHsgJ2Rpc3BsYXknOiAnZmxleCcgfSApO1xuXHRcdFx0dHdpdHRlci5maW5kKCAnLnR3aXR0ZXItdGltZWxpbmUnICkuY29udGVudHMoKS5maW5kKCAnLnRpbWVsaW5lLVR3ZWV0TGlzdC10d2VldCcgKS5jc3MoIHsgJ21hcmdpbi1ib3R0b20nOiAnMTVweCcgfSApO1xuXHRcdFx0dHdpdHRlci5maW5kKCAnLnR3aXR0ZXItdGltZWxpbmUnICkuY29udGVudHMoKS5maW5kKCAnLnRpbWVsaW5lLVR3ZWV0TGlzdC10d2VldCcgKS5hZGRDbGFzcyggJ1Rlc3QnICk7XG5cblx0XHRcdC8vYWxzbyBjYWxsIHRoZSBmdW5jdGlvbiBvbiBkeW5hbWljIHVwZGF0ZXMgaW4gYWRkaXRpb24gdG8gcGFnZSBsb2FkXG5cdFx0XHR0d2l0dGVyLmZpbmQoICcudHdpdHRlci10aW1lbGluZScgKS5jb250ZW50cygpLmZpbmQoICcudGltZWxpbmUtVHdlZXRMaXN0JyApLmJpbmQoICdET01TdWJ0cmVlTW9kaWZpZWQgcHJvcGVydHljaGFuZ2UnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0Y3VzdG9taXplVHdlZXRNZWRpYSggdGhpcyApO1xuXHRcdFx0fSApO1xuXHRcdH07XG5cdH1cblxuXHRpZiAoIGZhcUZpeGVkLmxlbmd0aCA+IDAgKSB7XG5cdFx0dmFyIGxlbmd0aCA9IGZhcUZpeGVkLmhlaWdodCgpIC0gc2lkZWJhci5oZWlnaHQoKSArIGZhcUZpeGVkLm9mZnNldCgpLnRvcDtcblxuXHRcdGlmICggJCggd2luZG93ICkud2lkdGgoKSA+IDc2NyApIHtcblxuXHRcdFx0JCggd2luZG93ICkuc2Nyb2xsKCBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHR2YXIgc2Nyb2xsID0gJCggdGhpcyApLnNjcm9sbFRvcCgpO1xuXHRcdFx0XHR2YXIgaGVpZ2h0ID0gc2lkZWJhci5oZWlnaHQoKSArICdweCc7XG5cblx0XHRcdFx0aWYgKCBzY3JvbGwgPCBmYXFGaXhlZC5vZmZzZXQoKS50b3AgKSB7XG5cblx0XHRcdFx0XHRzaWRlYmFyLmNzcygge1xuXHRcdFx0XHRcdFx0J3Bvc2l0aW9uJzogJ2Fic29sdXRlJyxcblx0XHRcdFx0XHRcdCd0b3AnOiAnMCdcblx0XHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0fSBlbHNlIGlmICggc2Nyb2xsID4gbGVuZ3RoICkge1xuXG5cdFx0XHRcdFx0c2lkZWJhci5jc3MoIHtcblx0XHRcdFx0XHRcdCdwb3NpdGlvbic6ICdhYnNvbHV0ZScsXG5cdFx0XHRcdFx0XHQnYm90dG9tJzogJzAnLFxuXHRcdFx0XHRcdFx0J3RvcCc6ICdhdXRvJ1xuXHRcdFx0XHRcdH0gKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0c2lkZWJhci5jc3MoIHtcblx0XHRcdFx0XHRcdCdwb3NpdGlvbic6ICdmaXhlZCcsXG5cdFx0XHRcdFx0XHQndG9wJzogJzAnLFxuXHRcdFx0XHRcdFx0J2hlaWdodCc6IGhlaWdodFxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0fVxuXHR9XG5cblx0JCggJy5qcy1zY3JvbGwtcGFnZSBhJyApLm1QYWdlU2Nyb2xsMmlkKCB7XG5cdFx0b2Zmc2V0OiAnMTUwJyxcblx0XHRoaWdobGlnaHRTZWxlY3RvcjogJy5qcy1zY3JvbGwtcGFnZSBhJ1xuXHR9ICk7XG5cblx0aWYgKCB0b2dnbGUubGVuZ3RoID4gMCApIHtcblx0XHR0b2dnbGUub24oICdjbGljaycsIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHR2YXIgJHRoaXMgPSAkKCB0aGlzICk7XG5cblx0XHRcdGlmICggJHRoaXMubmV4dCgpLmhhc0NsYXNzKCAnc2hvdycgKSApIHtcblx0XHRcdFx0JHRoaXMubmV4dCgpLnJlbW92ZUNsYXNzKCAnc2hvdycgKTtcblx0XHRcdFx0JHRoaXMubmV4dCgpLnNsaWRlVXAoIDM1MCApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JHRoaXMucGFyZW50KCkucGFyZW50KCkuZmluZCggJ2xpIC5pbm5lcicgKS5yZW1vdmVDbGFzcyggJ3Nob3cnICk7XG5cdFx0XHRcdCR0aGlzLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoICdsaSAuaW5uZXInICkuc2xpZGVVcCggMzUwICk7XG5cdFx0XHRcdCR0aGlzLm5leHQoKS50b2dnbGVDbGFzcyggJ3Nob3cnICk7XG5cdFx0XHRcdCR0aGlzLm5leHQoKS5zbGlkZVRvZ2dsZSggMzUwICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG5cblx0aWYgKCBoZWFkZXIubGVuZ3RoID4gMCApIHtcblx0XHQkKCB3aW5kb3cgKS5zY3JvbGwoIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCAkKCB3aW5kb3cgKS5zY3JvbGxUb3AoKSA+PSAyICkge1xuXHRcdFx0XHRoZWFkZXIuYWRkQ2xhc3MoICdoZWFkZXItLXN0aWNreScgKTtcblx0XHRcdFx0d3JhcHBlci5hZGRDbGFzcyggJ2FjdGl2ZScgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGhlYWRlci5yZW1vdmVDbGFzcyggJ2hlYWRlci0tc3RpY2t5JyApO1xuXHRcdFx0XHR3cmFwcGVyLnJlbW92ZUNsYXNzKCAnYWN0aXZlJyApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxuXG5cdGlmICggdGFicy5sZW5ndGggPiAwICkge1xuXHRcdHRhYnMuY2xpY2soIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0dmFyIHRhYl9pZCA9ICQoIHRoaXMgKS5hdHRyKCAnZGF0YS10YWInICk7XG5cblx0XHRcdHRhYnMucmVtb3ZlQ2xhc3MoICdjdXJyZW50JyApO1xuXHRcdFx0JCggJy50YWItY29udGVudCcgKS5yZW1vdmVDbGFzcyggJ2N1cnJlbnQnICk7XG5cblx0XHRcdCQoIHRoaXMgKS5hZGRDbGFzcyggJ2N1cnJlbnQnICk7XG5cdFx0XHQkKCAnIycgKyB0YWJfaWQgKS5hZGRDbGFzcyggJ2N1cnJlbnQnICk7XG5cdFx0fSApO1xuXHR9XG5cblx0aWYgKCBzeW1wdG9tc190YWJzLmxlbmd0aCA+IDAgKSB7XG5cdFx0c3ltcHRvbXNfdGFicy5jbGljayggZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR2YXIgdGFiX2lkMiA9ICQoIHRoaXMgKS5hdHRyKCAnZGF0YS10YWInICk7XG5cblx0XHRcdHN5bXB0b21zX3RhYnMucmVtb3ZlQ2xhc3MoICdjdXJyZW50JyApO1xuXHRcdFx0JCggJy50YWItY29udGVudC0yJyApLnJlbW92ZUNsYXNzKCAnY3VycmVudCcgKTtcblxuXHRcdFx0JCggdGhpcyApLmFkZENsYXNzKCAnY3VycmVudCcgKTtcblx0XHRcdCQoICcjJyArIHRhYl9pZDIgKS5hZGRDbGFzcyggJ2N1cnJlbnQnICk7XG5cdFx0fSApO1xuXHR9XG5cblx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0JCggJ2JvZHknICkuYWRkQ2xhc3MoICdsb2FkZWQnICk7XG5cdH0sIDgwMCApO1xuXG5cdHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdCQoICcuc3RhdC1udW1iZXInICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgc2l6ZSA9ICQoIHRoaXMgKS50ZXh0KCkuc3BsaXQoICcuJyApWyAxIF0gPyAkKCB0aGlzICkudGV4dCgpLnNwbGl0KCAnLicgKVsgMSBdLmxlbmd0aCA6IDA7XG5cdFx0XHQkKCB0aGlzICkucHJvcCggJ0NvdW50ZXInLCAwICkuYW5pbWF0ZSgge1xuXHRcdFx0XHRDb3VudGVyOiAkKCB0aGlzICkudGV4dCgpXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGR1cmF0aW9uOiA1MDAwLFxuXHRcdFx0XHRzdGVwOiBmdW5jdGlvbiggZnVuYyApIHtcblx0XHRcdFx0XHQkKCB0aGlzICkudGV4dCggcGFyc2VGbG9hdCggZnVuYyApLnRvRml4ZWQoIHNpemUgKSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9LCAxMDAwICk7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdzY3JvbGwnLCAoKSA9PiB7XG5cdFx0dmFyIGN1cnJlbnRTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cblx0XHRpZiAoIGN1cnJlbnRTY3JvbGwgPCAxMDAgKSB7XG5cdFx0XHRib2R5LmNsYXNzTGlzdC5yZW1vdmUoIHNjcm9sbFVwICk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCBjdXJyZW50U2Nyb2xsID4gbGFzdFNjcm9sbCAmJiAhYm9keS5jbGFzc0xpc3QuY29udGFpbnMoIHNjcm9sbERvd24gKSApIHtcblx0XHRcdC8vIGRvd25cblx0XHRcdGJvZHkuY2xhc3NMaXN0LnJlbW92ZSggc2Nyb2xsVXAgKTtcblx0XHRcdGJvZHkuY2xhc3NMaXN0LmFkZCggc2Nyb2xsRG93biApO1xuXHRcdH0gZWxzZSBpZiAoIGN1cnJlbnRTY3JvbGwgPCBsYXN0U2Nyb2xsICYmIGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCBzY3JvbGxEb3duICkgKSB7XG5cdFx0XHQvLyB1cFxuXHRcdFx0Ym9keS5jbGFzc0xpc3QucmVtb3ZlKCBzY3JvbGxEb3duICk7XG5cdFx0XHRib2R5LmNsYXNzTGlzdC5hZGQoIHNjcm9sbFVwICk7XG5cdFx0fVxuXHRcdGxhc3RTY3JvbGwgPSBjdXJyZW50U2Nyb2xsO1xuXHR9ICk7XG5cblxuXHQkKCAnLmpzLXRyYW5zbGF0b3ItYnRuJyApLmNsaWNrKCBmdW5jdGlvbiggZSApIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0JCh0aGlzKS5uZXh0KCkudG9nZ2xlQ2xhc3MoICdpcy1hY3RpdmUnICk7XG5cdH0gKTtcblxuXHQkKCAnYm9keSwgaHRtbCcgKS5ub3QoICcuYmFubmVyX19uYXZpZ2F0aW9uIHVsIGxpJyApLmNsaWNrKCBmdW5jdGlvbigpIHtcblx0fSApO1xufSApO1xuIl0sImZpbGUiOiJhcHAvbWFpbi5qcyJ9
