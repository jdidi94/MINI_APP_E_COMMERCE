import React, { useState } from "react";
import axios from "axios";

function Comment({ postId }) {
  const [content, setContent] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://posts.com/posts/${postId}/comments`, {
        content: content,
      })
      .then(() => setContent(""));
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New comment</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">comment</button>
      </form>
    </div>
  );
}

export default Comment;
