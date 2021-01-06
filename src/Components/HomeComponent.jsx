import React, { Component } from "react";
import "./HomeComponent.css";
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
      <div className="home">
        <div className="title">
          <h1>Our Post</h1>
        </div>
        <div className="container">
          <RendringList
            url={this.state.PostUrl}
            callback={(data, index) => {
              return <Post data={data.data.slice(index - 3, index)} />;
            }}
          />
        </div>
        <div className="title">
          <h1>Our User</h1>
        </div>

        <div className="container">
          <RendringList
            url={this.state.UserUrl}
            callback={(data, index) => {
              return <User data={data.data.slice(2 * index - 6, 2 * index)} />;
            }}
          />
        </div>
      </div>
    );
  }
}

export default Home;
