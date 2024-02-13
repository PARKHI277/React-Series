// functional component
// it is a normal javascript function
// return jsx
import { useEffect, useState } from "react";
const ProfileFunction = (props) => {
  const [count, setCount] = useState(0);
  // const [count2] = useState(0);
  useEffect(() => {
    // api call
  }, [count]);
  return (
    <div>
      <h1>Profile</h1>
      <h2>Name:{props.name}</h2>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(1)}>Count</button>
    </div>
  );
};

export default ProfileFunction;
