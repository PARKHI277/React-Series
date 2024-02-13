import React from "react";
// class component - render method is most important in this
// render returen jsx
// extend is used to inherit propereties
// renders in to dom
class Profile extends React.Component {
  constructor(props) {
    super(props);
    // Create State
    this.state = {
      count: 0,
    };
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Profile class component</h1>
        <h2>Name:{this.props.name}</h2>
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            // we do not mutate state directly
            this.setState({
              count: 1,
            });
          }}
        >
          Set Count
        </button>
      </div>
    );
  }
}

export default Profile;
