import React, { useState } from "react";
import axios from "axios";
function Post() {
  const [Title, setTitle] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://posts.com/posts/create", { title: Title })
      .then(() => setTitle(""))
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Titles check</label>
          <input
            value={Title}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Post;
