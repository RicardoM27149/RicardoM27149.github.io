var posts=["2025/04/29/hello-world/","2025/04/29/t1/","2025/04/29/t2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };