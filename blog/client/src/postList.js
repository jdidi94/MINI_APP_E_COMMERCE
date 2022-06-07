import axios from "axios";
import Comment from "./commentCreate";
import React, { useState, useEffect } from "react";
import CommentList from "./commentList";
function PostList() {
  const [posts, setPosts] = useState({});
  const fetchPosts = () => {
    axios
      .get("http://localhost:4002/posts")
      .then((post) => {
        console.log(post);
        setPosts(post.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  const renderPosts = Object.values(posts).map((post) => {
    return (
      <div
        className="card"
        key={post.id}
        style={{ width: "30%", marginBottom: "20px" }}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentList comments={post.comments} />
          <Comment postId={post.id} />
        </div>
      </div>
    );
  });
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderPosts}
    </div>
  );
}

export default PostList;
