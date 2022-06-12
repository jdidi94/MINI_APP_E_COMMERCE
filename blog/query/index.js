const express = require("express");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const posts = {};

app.use(cors());
app.use(bodyParser.json());
app.get("/posts", (req, res) => {
  res.send(posts);
});
const handleEvents = (type, data) => {
  if (type === "PostCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }
  if (type === "CommentCreated") {
    const { id, content, postId, status } = data;
    const post = posts[postId];
    post.comments.push({ id, content, status });
  }
  if (type === "CommentUpdated") {
    const { id, content, postId, status } = data;
    const post = posts[postId];
    const comment = post.comments.find((comment) => {
      return comment.id === id;
    });
    comment.status = status;
    comment.content = content;
  }
};
app.post("/events", (req, res) => {
  const { type, data } = req.body;
  handleEvents(type, data);

  res.send({});
});
app.listen(4002, async () => {
  console.log("listening on port 4002");
  const res = await axios
    .get("http://event-bus-srv:4005/events")
    .catch((err) => {
      console.log(err.message);
    });
  for (let event of res.data) {
    console.log("event processed", event.type);
    handleEvents(event.type, event.data);
  }
});
