//***** ES6 class *****

//base class
"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Human = (function () {
  function Human(name) {
    _classCallCheck(this, Human);

    this.name = name;
  }

  //child class

  _createClass(Human, [{
    key: "toString",
    value: function toString() {
      return "Hello! my name is " + this.name;
    }
  }]);

  return Human;
})();

var Person = (function (_Human) {
  _inherits(Person, _Human);

  function Person(name, age) {
    _classCallCheck(this, Person);

    _get(Object.getPrototypeOf(Person.prototype), "constructor", this).call(this, name);
    this.age = age;
  }

  //create an instance

  //override 'tostring' parent function

  _createClass(Person, [{
    key: "toString",
    value: function toString() {
      return _get(Object.getPrototypeOf(Person.prototype), "toString", this).call(this) + " and my age is " + this.age + ".";
    }
  }]);

  return Person;
})(Human);

var p = new Person("Sergio Forés", 43);
p.toString(); //Hello, my name is Michael Jacksan and my age is 43.

console.log(p.toString());
// !function() { // https://teamtreehouse.com/library/the-module-pattern-in-javascript-2
/***********************************/
/****** Eventos window.onload ******/
/***********************************/

// TO CONSIDER: Modular JS and use of templates
//www.youtube.com/watch?v=m-NYyst_tiY&index=2&list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f

// import * as math from "./modules";
// alert("2π = " + math.sum(math.pi, math.pi));

'use strict';

window.addEventListener('load', onWindowLoaded, false);

function onWindowLoaded() {}

//medium.com/@JCastigliano/javascript-4-everybody-ecmascript-6-spanish-version-2832cfc6d891
// import utils from 'modules'
// console.log(utils.calculateTaxes(45, 0.5)); //22.5

// } ();
"use strict";

//module
// var utils = {
//   calculateTaxes: function(price, percent){
//     return price * percent;
//   }
// }
// //export
// export default utils;

// export function sum(x, y) {
//   return x + y;
// }
// export var pi = 3.141593;
"use strict";

/****** nav.js ******/

// Active current item when its 'href' equals 'pathname'
// var nav = document.getElementById( 'mainNav' );
// var anchor = mainNav.getElementsByTagName( 'a' );
// var current = window.location.pathname;
//
// for  ( var i = 0; i < anchor.length; i++ )  {
//     if (anchor[i].pathname === current) {
//       this.anchor[i].setAttribute( 'class', 'active' );
//     }
// }

//https://medium.com/@JCastigliano/javascript-4-everybody-ecmascript-6-spanish-version-2832cfc6d891
// posts.forEach(post=> {
//   console.log(post.toString());
// });
'use strict';

!(function () {
  // https://teamtreehouse.com/library/the-module-pattern-in-javascript-2

  /****** json.js ******/

  // posts
  var xhrPostsReq = new XMLHttpRequest();
  var url = 'https://public-api.wordpress.com/rest/v1.1/sites/t0twpapi.wordpress.com/posts/';
  xhrPostsReq.onreadystatechange = jsonGot;
  xhrPostsReq.open('get', url, true);
  xhrPostsReq.send();
  // xhrPostsReq.close();

  function jsonGot() {
    if (xhrPostsReq.readyState === 4) {
      if (xhrPostsReq.status === 200) {

        var myJSON = JSON.parse(xhrPostsReq.responseText);
        var posts = '';
        for (var i = 0; i < myJSON.posts.length; i++) {
          var post = myJSON.posts[i];
          var dateParsed = post.date.split('+')[0];
          posts += '<h3>' + post.title + '</h3>';
          posts += '<small>' + dateParsed + '</small>';
          posts += post.content;
        }
        document.getElementById('posts').innerHTML = posts;
      } else {
        alert('Tienes problemas para abrir el Json pero tranquilo el sol brilla y los pajaros cantan');
      }
    }
  }

  // paginas
  var url2 = 'http://caferminet.es/wp-json/';
  var xhrReq2 = new XMLHttpRequest();
  xhrReq2.addEventListener('load', function () {
    if (this.readyState === this.DONE) {
      var jsonReq2 = JSON.parse(this.responseText);
      console.log(jsonReq2);
    }
  });
  xhrReq2.open('get', url2);
  xhrReq2.send();

  // paginas
  var url3 = 'http://caferminet.es/wp-json/posts';
  var xhrPostsReq3 = new XMLHttpRequest();
  xhrPostsReq3.addEventListener('load', function () {
    if (this.readyState === this.DONE) {

      var jsonReq3 = JSON.parse(this.responseText);
      console.log('paginas: ' + jsonReq3);
      for (var i = 0; i < jsonReq3.length; i++) {}
    }
  });
  xhrPostsReq3.open('get', url3);
  xhrPostsReq3.send();
})();
//# sourceMappingURL=build.js.map