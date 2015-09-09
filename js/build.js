
/****** json.js ******/

// posts
var xhr = new XMLHttpRequest();
var url = 'https://public-api.wordpress.com/rest/v1.1/sites/t0twpapi.wordpress.com/posts/';
xhr.open('get', url, true);
xhr.onreadystatechange = jsonGot;
xhr.send();
// xhr.close();




function jsonGot(){
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {

      var myJSON = JSON.parse(xhr.responseText);
      console.log('myJSON:');
      var posts = '';
      for (var i = 0; i < myJSON.posts.length; i++) {
        posts += '<h3>' + myJSON.posts[i].title + '</h3>';
        posts += '<small>' + myJSON.posts[i].date + '</small>';
        posts += myJSON.posts[i].content;
      console.log(myJSON.posts[i].date);
      }
      document.getElementById('posts').innerHTML = posts;

    } else {
      alert('Tienes problemas para abrir el Json pero tranquilo el sol brilla y los pajaros cantan');
    }
  }
}









// paginas
var url2 = 'http://caferminet.es/wp-json/';
var xhr2 = new XMLHttpRequest();
xhr2.addEventListener('load', function(){
  if (this.readyState === this.DONE) {
    var jsonReq2 = JSON.parse(this.responseText);
    console.log(jsonReq2);
  }
});
xhr2.open('get', url2);
xhr2.send();

// paginas
var url3 = 'http://caferminet.es/wp-json/posts';
var xhr3 = new XMLHttpRequest();
xhr3.addEventListener('load', function(){
  if (this.readyState === this.DONE) {

    var jsonReq3 = JSON.parse(this.responseText);
      console.log('paginas: '+jsonReq3);
    for (var i = 0; i < jsonReq3.length; i++) {

    }
  }
});
xhr3.open('get', url3);
xhr3.send();

// Objeto window tamaño pantalla
var Xwidth = window.innerWidth;
var Ywidth = window.innerHeight;

console.log(Xwidth);
console.log(Ywidth);



console.log(window.screen.availWidth);
console.log(window.screen.availHeight);
console.log(window.screen.width);
console.log(window.screen.height);
console.log(window.screen.colorDepth);
console.log(document.cookie);

// Timing
// var popUp = document.getElementById('mainDiv');
// popUp.innerHTML = prompt('holaaaaaa como estas');

// setInterval




var nuevoDiv = document.createElement('div');
nuevoDiv.setAttribute('id','nuevoDiv');
nuevoDiv.innerHTML = '9999999999999999 9999999';
console.log(nuevoDiv );


// var src = document.createElement('script');
// src.setAttribute('src','assets/js/otherjs.js');
// document.head.appendChild(src);

// var loc = window.location.href;
// console.log(loc);




var html = document.documentElement;
console.info(html);

var head = html.firstChild;
console.info(head);

var headChilds = head.childNodes;
for (var i = 0; i < headChilds.length; i++) {
  var headChild = headChilds[i];
  console.info(headChild);
  // console.info(headChild.nodeName);
}

var body = html.lastChild;
console.info(body);

var bodyChilds = body.childNodes;

for (var i = 0; i < bodyChilds.length; i++) {
  var bodyChild = bodyChilds[i];
  console.info(bodyChild);
}

// Constructor de Objeto principal
var Hero = function( params){
  this.powers = [];
  this.weakness = [];
  this.name = params.name;
};

var SuperHeroe = function(){
  this.tendence = 'Good';
  Hero.apply(this, arguments);
}

var Villain = function(){
  this.tendence = 'Bad';
  Hero.apply(this, arguments);
}

var paramSuperman = { 'name': 'Superman' };
var superman = new SuperHeroe( paramSuperman );

var paramJocker = { 'name': 'Jocker' };
var jocker = new Villain( paramJocker );

console.dir(superman);
console.dir(jocker);


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