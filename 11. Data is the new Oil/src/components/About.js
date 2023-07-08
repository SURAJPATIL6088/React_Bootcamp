import { Outlet } from "react-router-dom";
// import ProfileClassComponent from "./ProfileClass";
import Profile from "./Profile";
import React from "react";

// converting in class-baesd component
const About = () => {

    return (
      <div className=" p-2 m-2 text-center">
        <h1 className="font-bold m-2">About Us Page</h1>
        <p>
          This is Namaste react Series 🚀🚀 chapter 11 : Data is the new Oil 🏍🏍
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
