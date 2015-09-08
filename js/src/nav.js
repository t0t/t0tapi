/****** nav.js ******/
// Active current item when its 'href' equals 'pathname'
var nav = document.getElementById('mainNav');
var anchor = mainNav.getElementsByTagName('a');
var current = window.location.pathname;

for (var i = 0; i < anchor.length; i++) {
    if (anchor[i].pathname === current) {
      this.anchor[i].setAttribute('class', 'active');
    }
}


// var url = document.getElementsByTagName('a')[0];

// console.log(
// 	url.href + '\n' +			// the full URL
// 	url.protocol + '\n' +		// http:
// 	url.hostname + '\n' +		// site.com
// 	url.port + '\n' +			// 81
// 	url.pathname + '\n' +		// /path/page
// 	url.search + '\n' +			// ?a=1&b=2
// 	url.hash					// #hash
// );
