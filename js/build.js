// jsonposts.js

var elPost = document.getElementById('posts');

var url = 'https://public-api.wordpress.com/rest/v1.1/sites/t0twpapi.wordpress.com/posts/';
var xhr = new XMLHttpRequest();
xhr.addEventListener('load', function(){
  if (this.readyState === this.DONE) {

    var jsonReq = JSON.parse(this.responseText);
    var postContent = jsonReq.posts;

    for (var i = 0; i < postContent.length; i++) {
      var elH2 = document.createElement("h2");
      elH2.innerHTML = postContent[i].title;
      var elPara = document.createElement("p");
      elPara.innerHTML = postContent[i].content
      elPost.appendChild(elH2);
      elPost.appendChild(elPara);
    }

  }
});
xhr.open('get', url);
xhr.send();

// var src = document.createElement('script');
// src.setAttribute('src','assets/js/otherjs.js');
// document.head.appendChild(src);

// var loc = window.location.href;
// console.log(loc);

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

//# sourceMappingURL=build.js.map