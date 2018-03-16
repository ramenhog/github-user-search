import React, { Component } from "react";
import Header from "../../components/Header";

import "./UserProfile.scss";

class UserProfile extends Component {
  componentDidMount() {
    const { userRequested, match: { params: { username } } } = this.props;

    userRequested(username);
  }

  renderProfile() {
    const {
      match: { params: { username } },
      profile: {
        user: { avatar_url, name, blog, bio, html_url, public_repos },
        isLoading,
        followers,
        repos
      },
      searchRequested
    } = this.props;

    if (isLoading) {
      return <h1>Loading user profile...</h1>;
    }

    return (
      <div className="user-profile">
        <Header searchRequested={searchRequested} />
        <div className="user-profile__container">
          <img src={avatar_url} width="300" className="user-profile__avatar" />
          <div className="user-profile__info">
            <h1>{name}</h1>
            <h2 className="heading-3">
              <span className="user-profile__username">
                {username} | {""}
              </span>
              <a href={html_url} target="_blank" className="user-profile__item">
                {html_url}
              </a>
            </h2>
            {bio ? <p>Bio: {bio}</p> : null}
            {blog ? <p>Website: {blog}</p> : null}
            <p>Repos: {public_repos}</p>
          </div>
          <div>
            <h2>Followers:</h2>
            {followers.map((follower, i) => {
              return <img src={follower.avatar_url} key={i} width="80" />;
            })}
          </div>
          <div>
            <h2>Repos:</h2>
            {repos.map((repo, i) => {
              return (
                <div key={i}>
                  <h3>{repo.name}</h3>
                  <p>{repo.description}</p>
                  <p>Stargazers Count: {repo.stargazers_count}</p>
                  <p>Forks Count: {repo.forks_count}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.renderProfile()}</div>;
  }
}

export default UserProfile;
