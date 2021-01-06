import React from "react";
import "./PostComponent.css";
const Post = (props) => {
  return (
    <div className="posts">
      {props.data.map((post) => (
        <div key={post.id} className="post">
          <li>
            <div className="title">{post.title}</div>
            <div className="body">{post.body}</div>
          </li>
        </div>
      ))}
    </div>
  );
};

export default Post;
