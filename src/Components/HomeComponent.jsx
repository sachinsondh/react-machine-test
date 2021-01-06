import React, { Component } from "react";

import RendringList from "./RendringListComponent";
import Post from "./PostComponent";
import User from "./UserComponent";

class Home extends Component {
  state = {
    PostUrl: "https://gorest.co.in/public-api/posts",
    UserUrl: "https://gorest.co.in/public-api/users",
  };

  render() {
    return (
      <div>
        <div>
          <h1>Our Post</h1>
        </div>
        <div>
          <RendringList
            url={this.state.PostUrl}
            callback={(data, index) => {
              return <Post />;
            }}
          />
        </div>
        <div>
          <h1>Our User</h1>
        </div>

        <div>
          <RendringList
            url={this.state.UserUrl}
            callback={(data, index) => {
              return <User />;
            }}
          />
        </div>
      </div>
    );
  }
}

export default Home;
