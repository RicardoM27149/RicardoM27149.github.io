var posts=["2025/05/08/Vue开发前置准备/","2025/04/29/t1/","2025/04/29/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };