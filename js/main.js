// var ponClaseOn = document.getElementsByTagName('p')[0];
// ponClaseOn.setAttribute('class', 'on');

// var src = document.createElement('script');
// src.setAttribute('src','assets/js/otherjs.js');
// document.head.appendChild(src);

// var loc = window.location.href;
// console.log(loc);

var elPost = document.getElementById('posts');

// get json
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


function lalala(cosa) {
  this.cosa = cosa;
}
var object1 = {
  get: lalala,
  val: 000
}
var object2 = {
  get: lalala,
  val: 111
}

object1.get("ssssssss");
object2.get("oooooo");

console.log(object1,object2);
