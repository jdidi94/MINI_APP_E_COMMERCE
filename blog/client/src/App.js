import React from "react";
import Post from "./postCreate";
import PostList from "./postList";
function App() {
  return (
    <div className="container">
      <h1> Create a new post</h1>
      <Post />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
}

export default App;
