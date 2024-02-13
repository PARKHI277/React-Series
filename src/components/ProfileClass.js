import React from "react";
// class component - render method is most important in this
// render returen jsx
// extend is used to inherit propereties
// renders in to dom
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy l",
      },
    };
  }
  async componentDidMount() {
    // best place to make api call

    const data = await fetch("https://api.github.com/users/PARKHI277");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log("child - component");
  }

  componentDidUpdate() {
  
  }

  componentWillUnmount() {

  }

  
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Profile class component</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name:{this.state.userInfo.name}</h2>
        <h2>Location:{this.state.userInfo.location}</h2>
        {/* <h2>Name:{this.props.name}</h2>
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
        </button> */}
      </div>
    );
  }
}

export default Profile;
