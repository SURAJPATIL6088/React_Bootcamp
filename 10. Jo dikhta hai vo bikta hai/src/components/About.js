import { Outlet } from "react-router-dom";
// import ProfileClassComponent from "./ProfileClass";
import Profile from "./Profile";
import React from "react";

// converting in class-baesd component
const About = () => {

    return (
      <div>
        <h1>About Us Page</h1>
        <p>
          This is Namaste react Series 🚀🚀 chapter 10 : Jo Dikhta Hai Vo Bikta Hai 💸💸
        </p>
        {/* <Outlet/> it is also working  */}
        {/* the outlet will only appear when we are passing the /profile in url */}
        <Profile />
        {/* the profile will direct display */}

        {/* <ProfileClassComponent name={"Suraj Patil"} /> */}
      </div>
    );

};

export default About;
