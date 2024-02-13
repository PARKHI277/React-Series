import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunction from "./Profile";
import React from "react";

// const About2 = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React web series</h2>
//       <ProfileFunction name={"Parkhi"} />
//       <Profile name={"Parkhi class"} />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    // best place to make api call

    console.log("c");
  }

  render() {
    return (
      <div>
        <h1>About us Page</h1>
        <h2>This is Namaste React web series</h2>
        <Profile name={"Parkhi class"} xyz="abc" />
        {/* <Profile name={"second"} xyz="abc" /> */}
      </div>
    );
  }
}

export default About;
