/**
 * App
 *
 * Load the config so we can build our app
 * When the config is loaded we need jQuery to initialize the component loader.
 */

require( [ 'config' ], function() {
	require( [ 'jquery', 'fastclick' ], function( $, fast_click ) {
		// FastClick polyfill to remove click delays on browsers with touch UIs
		fast_click.attach( document.body );

		// Main
		require( [ 'app/main' ] );

		// Component loader
		$( '[data-component]' ).each( function() {
			require( [ 'components/' + $( this ).attr( 'data-component' ) ] );
		} );
	} );
} );
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBcHBcbiAqXG4gKiBMb2FkIHRoZSBjb25maWcgc28gd2UgY2FuIGJ1aWxkIG91ciBhcHBcbiAqIFdoZW4gdGhlIGNvbmZpZyBpcyBsb2FkZWQgd2UgbmVlZCBqUXVlcnkgdG8gaW5pdGlhbGl6ZSB0aGUgY29tcG9uZW50IGxvYWRlci5cbiAqL1xuXG5yZXF1aXJlKCBbICdjb25maWcnIF0sIGZ1bmN0aW9uKCkge1xuXHRyZXF1aXJlKCBbICdqcXVlcnknLCAnZmFzdGNsaWNrJyBdLCBmdW5jdGlvbiggJCwgZmFzdF9jbGljayApIHtcblx0XHQvLyBGYXN0Q2xpY2sgcG9seWZpbGwgdG8gcmVtb3ZlIGNsaWNrIGRlbGF5cyBvbiBicm93c2VycyB3aXRoIHRvdWNoIFVJc1xuXHRcdGZhc3RfY2xpY2suYXR0YWNoKCBkb2N1bWVudC5ib2R5ICk7XG5cblx0XHQvLyBNYWluXG5cdFx0cmVxdWlyZSggWyAnYXBwL21haW4nIF0gKTtcblxuXHRcdC8vIENvbXBvbmVudCBsb2FkZXJcblx0XHQkKCAnW2RhdGEtY29tcG9uZW50XScgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdHJlcXVpcmUoIFsgJ2NvbXBvbmVudHMvJyArICQoIHRoaXMgKS5hdHRyKCAnZGF0YS1jb21wb25lbnQnICkgXSApO1xuXHRcdH0gKTtcblx0fSApO1xufSApOyJdLCJmaWxlIjoiYXBwLmpzIn0=
