import { Outlet } from "react-router-dom";
import ProfileClassComponent from "./ProfileClass";
import Profile from "./Profile";
import React from "react";

// converting in class-baesd component
class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent-constructor")
  }

  componentDidMount() {
    // best place to call an API

    console.log("Parent-componentDidMount")
  }

  render() {
    // console.log("Parent-render");
    return (
      <div>
        <h1>About Us Page</h1>
        <p>
          This is Namaste react Series 🚀🚀 chapter 08 : Let's get Classy 🏍🏍🌡🌡
        </p>
        {/* <Outlet/> it is also working  */}
        {/* the outlet will only appear when we are passing the /profile in url */}
        <Profile name={"Suraj Patil"} />
        {/* the profile will direct display */}

        {/* <ProfileClassComponent name={"Suraj Patil"} /> */}
      </div>
    );
  }
}

// functional component
// const About = () => {
//   return (
//     <div>
//       <h1>About Us Page</h1>
//       <p>
//         {" "}
//         This is Namaste react Series 🚀🚀 chapter 07 : Finding the Path 🌏🌏
//       </p>
//       {/* <Outlet/> it is also working  */}
//       {/* the outlet will only appear when we are passing the /profile in url */}
//       <ProfileFunctionalComponent name={"Suraj Patil"} />
//       {/* the profile will direct display */}

//       <ProfileClassComponent name={"Suraj Patil"}/>
//     </div>
//   );
// };

export default About;
