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
