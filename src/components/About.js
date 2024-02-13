import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunction from "./Profile";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is Namaste React web series</h2>
      <ProfileFunction name={"Parkhi"} />
      <Profile name={"Parkhi class"} />
    </div>
  );
};

export default About;
