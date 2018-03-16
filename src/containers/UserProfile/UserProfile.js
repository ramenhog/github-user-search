import React, { Component } from "react";

class UserProfile extends Component {
  componentDidMount() {
    const { userRequested, match: { params: { username } } } = this.props;

    userRequested(username);
  }

  renderProfile() {
    const {
      match: { params: { username } },
      profile: { user: { avatar_url, name, blog, bio, html_url }, isLoading }
    } = this.props;

    if (isLoading) {
      return <h1>Loading user profile...</h1>;
    }

    return (
      <div>
        <a href={html_url} target="_blank" className="search-results">
          <img src={avatar_url} width="300" />
          <h1>{username}</h1>
        </a>
        <h2>{name}</h2>
        {bio ? <p>{bio}</p> : null}
        {blog ? <p>{blog}</p> : null}
      </div>
    );
  }

  render() {
    return <div>{this.renderProfile()}</div>;
  }
}

export default UserProfile;
