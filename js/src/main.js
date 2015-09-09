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
