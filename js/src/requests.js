!function() { // https://teamtreehouse.com/library/the-module-pattern-in-javascript-2

/****** json.js ******/

// posts
var xhrPostsReq = new XMLHttpRequest();
var url = 'https://public-api.wordpress.com/rest/v1.1/sites/t0twpapi.wordpress.com/posts/';
xhrPostsReq.onreadystatechange = jsonGot;
xhrPostsReq.open('get', url, true);
xhrPostsReq.send();
// xhrPostsReq.close();



function jsonGot  () {
  if  ( xhrPostsReq.readyState === 4 ) {
    if  ( xhrPostsReq.status === 200 ) {

      var myJSON = JSON.parse( xhrPostsReq.responseText );
      var posts = '';
      for ( var i = 0; i < myJSON.posts.length; i++ )  {
        var post = myJSON.posts[i];
        var dateParsed = post.date.split( '+' )[0];
        posts += '<h3>' + post.title + '</h3>';
        posts += '<small>' + dateParsed + '</small>';
        posts += post.content;
      }
      document.getElementById( 'posts' ).innerHTML = posts;

    } else {
      alert( 'Tienes problemas para abrir el Json pero tranquilo el sol brilla y los pajaros cantan' );
    }
  }
}









// paginas
var url2 = 'http://caferminet.es/wp-json/';
var xhrReq2 = new XMLHttpRequest();
xhrReq2.addEventListener('load', function(){
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
xhrPostsReq3.addEventListener('load', function(){
  if (this.readyState === this.DONE) {

    var jsonReq3 = JSON.parse(this.responseText);
      console.log('paginas: '+jsonReq3);
    for ( var i = 0; i < jsonReq3.length; i++ ) {

    }
  }
});
xhrPostsReq3.open('get', url3);
xhrPostsReq3.send();







} ();
