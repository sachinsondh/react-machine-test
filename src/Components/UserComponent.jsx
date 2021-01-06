import React from "react";
import "./UserComponent.css";
const User = (props) => {
  return (
    <div>
      <div className="row">
        {props.data.slice(0, 3).map((post) => (
          <div key={post.id} className="user">
            <li>
              <div>
                <b>Name :</b> {post.name}
              </div>
              <div>
                <b>Email :</b> {post.email}
              </div>
              <div>
                <b>Gender :</b> {post.gender}
              </div>
            </li>
          </div>
        ))}
      </div>

      <div className="row">
        {props.data.slice(3, 6).map((post) => (
          <div className="user">
            <li>
              <div>
                {" "}
                <b>Name :</b> {post.name}
              </div>
              <div>
                <b>Email :</b> {post.email}
              </div>
              <div>
                <b>Gender :</b> {post.gender}
              </div>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
