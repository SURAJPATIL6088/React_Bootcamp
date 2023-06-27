import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    // create the state
    this.state = {
      userInfo: {
        // we can put the empty also
        name: "Dummy",
        location: "Dummy Location",
        bio: "Dummy bio",
        twitter_username: "dummy",
      }
    };

    console.log("Child-constructor")
  }
  async componentDidMount() {
    // these is the best way to fetch data from the api in class-based component
    // API call
    // const data = await fetch("https://api.github.com/users/surajpatil6088");
    // const json = await data.json();

    // // print the data
    // console.log(json);

    // // push the data into the state
    // this.setState({
    //   userInfo:json,
    // });

    this.timer = setInterval(() => {
      console.log("Hello React !!");
    }, 1000);

    console.log("child-componentDidMount");
  }

  componentDidUpdate(){

    console.log("child-componentDidUpdate");
  }

  componentWillUnmount(){
    clearInterval(this.timer);
    console.log("child- componentWillUnmount");    
  }

  render() {
    console.log("Child - render");

    return (
      <>
        <h1>Profile component using class-based components</h1>
        <img src={this.state.userInfo.avatar_url}/>
        <h2>Name : {this?.state?.userInfo?.name}</h2>
        <h2>Twitter Handle : {this?.state?.userInfo?.twitter_username}</h2>
        <h2>Bio : {this?.state?.userInfo?.bio}</h2>
        <h2>Location : {this?.state?.userInfo?.location}</h2>
      </>
    );
  }
}

export default Profile;
