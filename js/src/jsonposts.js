
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
