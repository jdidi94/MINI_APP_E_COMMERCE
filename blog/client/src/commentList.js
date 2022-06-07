import React from "react";

function CommentList({ comments }) {
  const comRender = comments.map((comment) => {
    let content;
    if (comment.status === "approved") {
      content = comment.content;
    }
    if (comment.status === "pending") {
      content = "this content is waiting moderation";
    }
    if (comment.status === "rejected") {
      content = "this content has been rejected";
    }
    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{comRender}</ul>;
}

export default CommentList;
